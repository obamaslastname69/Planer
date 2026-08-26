/* Deine persönlichen Einstellungen.
   Diese Datei wird bei Updates NICHT überschrieben — hier einmal eintragen, fertig. */

window.PLANER_CLIENT_ID = "746363255529-a67p9oi92lhi73q5e4u4abkucbcj8lcu.apps.googleusercontent.com";

/* Weitere Google-Kalender, die im Planer mit angezeigt werden sollen.
   Die ID steht in Google Kalender unter
   Einstellungen → Kalender auswählen → "Kalender integrieren" → Kalender-ID.

   label = Name, der im Planer am Termin steht
   color = Farbe für Termine ohne eigene Google-Farbe (optional)

   Diese Kalender werden nur gelesen. Eigene Lernblöcke landen weiterhin
   im Hauptkalender. */
window.PLANER_EXTRA_CALENDARS = [
  {
    id: "dnci3uksk1rm3hloqamgov9jk0v5aikq@import.calendar.google.com",
    label: "Stundenplan",
    color: "#7986CB",
  },
];

/* Eigener Push-Dienst — weckt die App auch, wenn sie geschlossen ist.
   Einrichtung: siehe push-worker/ANLEITUNG.md

   Der Schlüssel unten ist der ÖFFENTLICHE. Er darf hier stehen; mit ihm
   allein lässt sich nichts anstellen. Der private liegt ausschließlich als
   Secret in deinem Cloudflare-Dienst.

   Trage unten die Adresse ein, die dir Cloudflare nach dem Veröffentlichen
   nennt (Form: https://planer-push.DEINNAME.workers.dev). Solange sie leer
   ist, bleibt alles beim Alten: Hinweise nur bei geöffneter App. */
window.PLANER_PUSH_URL = "";
window.PLANER_PUSH_KEY = "BOIKB_JD4m1QY-f_7I8TGkAmJawcnwRxkhhXU5f9v87FbjBpThJZk6qonvJIjl5pmlOnDPdHz4Jhmbxg1H4yRJE";
