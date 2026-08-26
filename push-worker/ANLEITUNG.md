# Push-Dienst einrichten

Damit der Planer dich auch dann erinnert, wenn er geschlossen ist.

**Warum das nötig ist:** Eine Webseite kann sich nicht selbst wecken. Es
muss jemand von außen anklopfen. Dieser kleine Dienst ist dieser Jemand.

**Was er über dich erfährt:** nur Zeitpunkte — „wecke das Gerät um 14:45".
Keine Titel, keine Orte, keinen Inhalt. Was ansteht, liest der Planer beim
Aufwachen aus deinem Gerät. Wer den Dienst einsähe, wüsste bestenfalls,
*dass* um 14:45 etwas ist, nie *was*.

**Kosten:** keine. Die kostenlose Cloudflare-Stufe reicht dafür bei weitem.

---

## 1. Cloudflare-Konto

[dash.cloudflare.com/sign-up](https://dash.cloudflare.com/sign-up) — Mailadresse
und Passwort genügen, keine Zahlungsdaten.

## 2. Vorbereiten

Terminal im Ordner `push-worker` öffnen:

```bash
npx wrangler login
```

Es öffnet sich der Browser, dort bestätigen.

## 3. Speicher anlegen

```bash
npx wrangler kv namespace create PLANER
```

Die Ausgabe enthält eine Zeile wie `id = "abc123..."`. Diese id in
`wrangler.toml` eintragen, wo jetzt `HIER_DIE_ID_EINTRAGEN` steht.

## 4. Privaten Schlüssel hinterlegen

```bash
npx wrangler secret put VAPID_JWK
```

Dann den Wert aus **Planer-Push-Zugangsdaten.txt** (auf deinem Desktop)
einfügen — die lange Zeile, die mit `{"kty":"EC"` beginnt.

Der Schlüssel liegt danach verschlüsselt bei Cloudflare. Er steht bewusst
in keiner Datei dieses Projekts, weil das Repo öffentlich ist.

## 5. Veröffentlichen

```bash
npx wrangler deploy
```

Am Ende nennt dir Wrangler eine Adresse, etwa:

```
https://planer-push.deinname.workers.dev
```

## 6. Adresse in den Planer eintragen

Diese Adresse in `config.js` bei `window.PLANER_PUSH_URL` einsetzen,
Änderung hochladen — fertig. Solange dort nichts steht, bleibt alles beim
Alten: Hinweise nur bei geöffneter App.

## 7. Ausprobieren

Im Planer unter **Bilanz → Erinnerungen einschalten**. Danach einen Termin
ein paar Minuten in die Zukunft legen, die App **ganz schließen** und
warten.

---

## Wenn nichts kommt

**Läuft der Dienst?** Adresse im Browser öffnen — es sollte
„Push-Dienst des Wochenplaners" erscheinen.

**Nimmt er Anmeldungen an?**

```bash
npx wrangler tail
```

zeigt live mit, was ankommt.

**Auf dem Handy:** In den Android-Einstellungen unter Apps → Chrome →
Benachrichtigungen prüfen, ob sie erlaubt sind. Manche Hersteller
(Xiaomi, Samsung) haben zusätzlich eine Akku-Optimierung, die Chrome im
Hintergrund einschläfert — dort für Chrome ausnehmen.

**Kosten im Blick:** Der Cron läuft jede Minute, also rund 43.000-mal im
Monat. Die kostenlose Stufe erlaubt 100.000 Aufrufe pro Tag.
