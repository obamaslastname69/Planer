package io.github.obamaslastname69.twa;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;

/**
 * Nimmt entgegen, was der Wecker ausloest.
 *
 * Zwei Faelle: Eine faellige Erinnerung wird angezeigt. Und nach einem
 * Neustart des Telefons sind alle Alarme des Systems verschwunden -
 * dann werden sie aus der aufbewahrten Liste neu gestellt, sonst
 * herrschte ab dem naechsten Neustart Stille.
 */
public class WeckerEmpfaenger extends BroadcastReceiver {

    @Override
    public void onReceive(Context c, Intent absicht) {
        if (absicht == null) return;
        String aktion = absicht.getAction();

        if (Intent.ACTION_BOOT_COMPLETED.equals(aktion)
                || "android.intent.action.QUICKBOOT_POWERON".equals(aktion)) {
            Wecker.nachNeustartWiederherstellen(c);
            return;
        }

        if (Wecker.AKTION.equals(aktion)) {
            Wecker.zeigen(c,
                    absicht.getStringExtra(Wecker.FELD_TITEL),
                    absicht.getStringExtra(Wecker.FELD_TEXT),
                    absicht.getIntExtra(Wecker.FELD_NR, 0));
        }
    }
}
