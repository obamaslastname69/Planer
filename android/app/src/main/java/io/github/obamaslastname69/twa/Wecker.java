package io.github.obamaslastname69.twa;

import android.app.AlarmManager;
import android.app.Notification;
import android.app.NotificationChannel;
import android.app.NotificationManager;
import android.app.PendingIntent;
import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Build;

import org.json.JSONArray;
import org.json.JSONObject;

/**
 * Erinnerungen, die das Betriebssystem stellt.
 *
 * In einer WebView gibt es weder die Push- noch die Notification-
 * Schnittstelle des Browsers. Die Erinnerungen muessen deshalb hier
 * liegen: Der Planer reicht die naechsten Weckzeiten herein, Android
 * weckt zur rechten Zeit - auch wenn die App geschlossen ist.
 *
 * Was ansteht, bleibt dabei auf dem Geraet. Anders als beim Push-Dienst
 * verlaesst hier ueberhaupt nichts das Telefon.
 */
final class Wecker {

    static final String KANAL = "planer-erinnerungen";
    static final String AKTION = "io.github.obamaslastname69.twa.WECKEN";
    static final String FELD_TITEL = "titel";
    static final String FELD_TEXT = "text";
    static final String FELD_NR = "nr";

    private static final String SPEICHER = "planer-wecker";
    private static final String SCHLUESSEL = "erinnerungen";
    /* Mehr als das braucht niemand, und jede Erinnerung kostet einen
       eigenen Alarmplatz im System. */
    private static final int HOECHSTENS = 50;

    private Wecker() { }

    static void kanalAnlegen(Context c) {
        if (Build.VERSION.SDK_INT < Build.VERSION_CODES.O) return;
        NotificationManager nm = (NotificationManager) c.getSystemService(Context.NOTIFICATION_SERVICE);
        if (nm == null || nm.getNotificationChannel(KANAL) != null) return;
        NotificationChannel kanal = new NotificationChannel(
                KANAL, "Erinnerungen", NotificationManager.IMPORTANCE_HIGH);
        kanal.setDescription("Kurz bevor etwas ansteht");
        nm.createNotificationChannel(kanal);
    }

    /**
     * Alle Erinnerungen neu stellen. Die Liste ersetzt die bisherige
     * vollstaendig - so kann der Planer einfach immer den aktuellen Stand
     * schicken, ohne Buch darueber zu fuehren, was sich geaendert hat.
     */
    static int stellen(Context c, String json) {
        absagen(c);
        merken(c, json);
        return planen(c, json);
    }

    private static int planen(Context c, String json) {
        AlarmManager am = (AlarmManager) c.getSystemService(Context.ALARM_SERVICE);
        if (am == null) return 0;
        int gestellt = 0;
        try {
            JSONArray liste = new JSONArray(json);
            long jetzt = System.currentTimeMillis();
            for (int i = 0; i < liste.length() && gestellt < HOECHSTENS; i++) {
                JSONObject e = liste.optJSONObject(i);
                if (e == null) continue;
                long zeit = e.optLong("weckzeit", 0);
                /* Vergangenes nicht nachtraeglich ausloesen */
                if (zeit <= jetzt + 5000) continue;

                Intent absicht = new Intent(c, WeckerEmpfaenger.class);
                absicht.setAction(AKTION);
                absicht.putExtra(FELD_TITEL, e.optString("titel", "Termin"));
                absicht.putExtra(FELD_TEXT, e.optString("text", ""));
                absicht.putExtra(FELD_NR, gestellt);
                /* Eigene Kennung je Alarm, sonst ueberschreiben sie sich */
                absicht.setData(android.net.Uri.parse("planer-wecker://" + gestellt));

                int flaggen = PendingIntent.FLAG_UPDATE_CURRENT;
                if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
                    flaggen |= PendingIntent.FLAG_IMMUTABLE;
                }
                PendingIntent pi = PendingIntent.getBroadcast(c, gestellt, absicht, flaggen);

                /* Genau wecken, wo erlaubt. Sonst ungefaehr - lieber ein paar
                   Minuten spaeter als gar nicht. */
                boolean genau = true;
                if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.S) {
                    genau = am.canScheduleExactAlarms();
                }
                if (genau) {
                    am.setExactAndAllowWhileIdle(AlarmManager.RTC_WAKEUP, zeit, pi);
                } else {
                    am.setAndAllowWhileIdle(AlarmManager.RTC_WAKEUP, zeit, pi);
                }
                gestellt++;
            }
        } catch (Exception e) {
            return gestellt;
        }
        return gestellt;
    }

    private static void absagen(Context c) {
        AlarmManager am = (AlarmManager) c.getSystemService(Context.ALARM_SERVICE);
        if (am == null) return;
        for (int i = 0; i < HOECHSTENS; i++) {
            Intent absicht = new Intent(c, WeckerEmpfaenger.class);
            absicht.setAction(AKTION);
            absicht.setData(android.net.Uri.parse("planer-wecker://" + i));
            int flaggen = PendingIntent.FLAG_NO_CREATE;
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
                flaggen |= PendingIntent.FLAG_IMMUTABLE;
            }
            PendingIntent pi = PendingIntent.getBroadcast(c, i, absicht, flaggen);
            if (pi != null) {
                am.cancel(pi);
                pi.cancel();
            }
        }
    }

    private static void merken(Context c, String json) {
        SharedPreferences p = c.getSharedPreferences(SPEICHER, Context.MODE_PRIVATE);
        p.edit().putString(SCHLUESSEL, json).apply();
    }

    /**
     * Nach einem Neustart sind alle Alarme des Systems weg. Deshalb wird
     * die Liste aufbewahrt und hier wieder gestellt - sonst waere nach
     * jedem Neustart des Telefons Stille.
     */
    static void nachNeustartWiederherstellen(Context c) {
        SharedPreferences p = c.getSharedPreferences(SPEICHER, Context.MODE_PRIVATE);
        String json = p.getString(SCHLUESSEL, null);
        if (json == null) return;
        kanalAnlegen(c);
        planen(c, json);
    }

    static void zeigen(Context c, String titel, String text, int nr) {
        NotificationManager nm = (NotificationManager) c.getSystemService(Context.NOTIFICATION_SERVICE);
        if (nm == null) return;
        kanalAnlegen(c);

        Intent oeffnen = new Intent(c, MainActivity.class);
        oeffnen.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK | Intent.FLAG_ACTIVITY_CLEAR_TOP);
        int flaggen = PendingIntent.FLAG_UPDATE_CURRENT;
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
            flaggen |= PendingIntent.FLAG_IMMUTABLE;
        }
        PendingIntent tippen = PendingIntent.getActivity(c, 9000 + nr, oeffnen, flaggen);

        Notification.Builder b;
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            b = new Notification.Builder(c, KANAL);
        } else {
            b = new Notification.Builder(c);
        }
        b.setContentTitle(titel)
                .setSmallIcon(android.R.drawable.ic_popup_reminder)
                .setAutoCancel(true)
                .setContentIntent(tippen);
        if (text != null && text.length() > 0) b.setContentText(text);
        nm.notify(nr, b.build());
    }
}
