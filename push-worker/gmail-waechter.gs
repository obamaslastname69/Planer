/**
 * Postfach-Wächter für den Wochenplaner
 * =====================================
 *
 * Dieses Skript läuft in DEINEM Google-Konto und sieht alle paar Minuten
 * nach, ob neue Mails da sind. Was es findet, meldet es an deinen
 * Cloudflare-Dienst — nur Absender, Betreff und Uhrzeit, nie den Inhalt.
 *
 * Warum dieser Umweg und nicht die Gmail-Schnittstelle: Die gilt bei
 * Google als "restricted" und verlangt für fremde Apps eine Prüfung samt
 * jährlichem Sicherheitsaudit. Ein eigenes Skript im eigenen Konto ist
 * keine fremde App — du erlaubst dir selbst, dein eigenes Postfach zu
 * lesen. Und laut Googles Doku fragen Auslöser nicht wiederholt nach:
 * einmal erlaubt, läuft es.
 *
 * EINRICHTUNG (einmalig, etwa fünf Minuten)
 * -----------------------------------------
 *  1. script.google.com öffnen → "Neues Projekt"
 *  2. Diesen gesamten Text einfügen (vorhandenen Inhalt ersetzen)
 *  3. Unten SCHLUESSEL eintragen — aus der Datei auf deinem Desktop
 *  4. Oben auf "Speichern", dann Funktion "einrichten" wählen und
 *     "Ausführen" klicken
 *  5. Google fragt nach Erlaubnis. Dabei erscheint "Diese App ist nicht
 *     verifiziert" — das ist bei eigenen Skripten normal. Auf
 *     "Erweitert" klicken, dann auf "Zu ... (unsicher)" und erlauben.
 *  6. Fertig. Ab jetzt läuft es alle fünf Minuten von selbst.
 *
 * Zum Abschalten: links auf das Wecker-Symbol ("Trigger"), Auslöser
 * löschen. Oder das ganze Projekt löschen.
 */

/* ── Hier eintragen ─────────────────────────────────────────────── */

/* Aus POSTFACH-SCHLUESSEL-zum-kopieren.txt auf deinem Desktop */
var SCHLUESSEL = "HIER_DEN_SCHLUESSEL_EINTRAGEN";

var DIENST = "https://planer-push.harrerjonathan49.workers.dev";

/* Was gemeldet werden soll. Die Gmail-Suchsprache, dieselbe wie im
   Suchfeld. Beispiele:
     'in:inbox -category:promotions'   alles Wichtige im Posteingang
     'in:inbox label:Praktikum'        nur was dein Filter markiert hat
     'in:inbox is:important'           nur als wichtig Eingestuftes       */
var SUCHE = "in:inbox -category:promotions -category:social";

/* ── Ab hier nichts mehr ändern ─────────────────────────────────── */

var MERKER = "planer_zuletzt";

/**
 * Richtet den Auslöser ein. Einmal von Hand ausführen.
 * Löscht vorher alte Auslöser, damit bei zweimaligem Ausführen nicht
 * zwei nebeneinander laufen und alles doppelt melden.
 */
function einrichten() {
  var alte = ScriptApp.getProjectTriggers();
  for (var i = 0; i < alte.length; i++) {
    if (alte[i].getHandlerFunction() === "nachsehen") {
      ScriptApp.deleteTrigger(alte[i]);
    }
  }
  ScriptApp.newTrigger("nachsehen").timeBased().everyMinutes(5).create();

  /* Beim ersten Mal nur ab jetzt melden - sonst käme das halbe Postfach
     auf einmal herein. */
  var p = PropertiesService.getScriptProperties();
  if (!p.getProperty(MERKER)) {
    p.setProperty(MERKER, String(Math.floor(Date.now() / 1000)));
  }
  nachsehen();
  Logger.log("Eingerichtet. Läuft ab jetzt alle fünf Minuten.");
}

/**
 * Sieht nach, was seit dem letzten Lauf eingegangen ist, und meldet es.
 */
function nachsehen() {
  var p = PropertiesService.getScriptProperties();
  var seit = Number(p.getProperty(MERKER) || 0);
  if (!seit) {
    seit = Math.floor(Date.now() / 1000) - 3600;
  }

  /* Gmail versteht "after:" mit einem Zeitstempel in Sekunden. Eine
     Minute Überlappung, damit an der Grenze nichts durchrutscht -
     Doppelte sortiert der Dienst ohnehin an der Kennung aus. */
  var suche = SUCHE + " after:" + (seit - 60);
  var threads = GmailApp.search(suche, 0, 25);

  var mails = [];
  var neuesteZeit = seit;
  for (var t = 0; t < threads.length; t++) {
    var nachrichten = threads[t].getMessages();
    for (var n = 0; n < nachrichten.length; n++) {
      var m = nachrichten[n];
      var sek = Math.floor(m.getDate().getTime() / 1000);
      if (sek <= seit) continue;
      if (sek > neuesteZeit) neuesteZeit = sek;
      mails.push({
        id: m.getId(),
        von: absenderName(m.getFrom()),
        betreff: m.getSubject() || "(ohne Betreff)",
        zeit: m.getDate().getTime()
      });
      if (mails.length >= 25) break;
    }
    if (mails.length >= 25) break;
  }

  /* Auch ohne neue Mails den Merker weiterschieben, sonst wächst das
     Suchfenster mit jedem Lauf. */
  p.setProperty(MERKER, String(neuesteZeit));
  if (!mails.length) return;

  var antwort = UrlFetchApp.fetch(DIENST + "/mail/melden", {
    method: "post",
    contentType: "application/json",
    payload: JSON.stringify({ schluessel: SCHLUESSEL, mails: mails }),
    muteHttpExceptions: true
  });
  Logger.log("Gemeldet: " + mails.length + " — Antwort " + antwort.getResponseCode());
}

/** Aus "Anna Muster <anna@firma.at>" wird "Anna Muster" */
function absenderName(von) {
  var s = String(von || "");
  var m = s.match(/^\s*"?([^"<]+?)"?\s*</);
  if (m && m[1].trim()) return m[1].trim();
  var nur = s.match(/<([^>]+)>/);
  return (nur ? nur[1] : s).trim();
}

/** Zum Ausprobieren: meldet die letzte Stunde noch einmal. */
function nochmalLetzteStunde() {
  PropertiesService.getScriptProperties()
    .setProperty(MERKER, String(Math.floor(Date.now() / 1000) - 3600));
  nachsehen();
}
