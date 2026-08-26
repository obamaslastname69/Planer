# Push-Dienst einrichten

Damit der Planer dich auch dann erinnert, wenn er geschlossen ist.

Alles im Browser — **nichts zu installieren**, kein Node nötig.

**Warum das nötig ist:** Eine Webseite kann sich nicht selbst wecken. Es
muss jemand von außen anklopfen. Dieser kleine Dienst ist dieser Jemand.

**Was er über dich erfährt:** nur Zeitpunkte — „wecke das Gerät um 14:45".
Keine Titel, keine Orte, keinen Inhalt. Was ansteht, liest der Planer beim
Aufwachen aus deinem Gerät.

**Kosten:** keine. Die kostenlose Stufe reicht bei weitem.

Rechne mit zehn Minuten.

---

## 1. Konto anlegen

[dash.cloudflare.com/sign-up](https://dash.cloudflare.com/sign-up) —
Mailadresse und Passwort genügen, keine Zahlungsdaten. Mail bestätigen.

## 2. Speicher anlegen

Links im Menü **Storage & Databases → KV**, dann **Create instance**.

Als Namen genau `PLANER` eintragen, anlegen.

## 3. Worker anlegen

Links **Compute (Workers) → Workers & Pages**, dann **Create** →
**Start with Hello World** → **Deploy**.

Als Namen `planer-push` eintragen (dann heißt deine Adresse später
`planer-push.…`).

## 4. Code einsetzen

Im Worker auf **Edit code** (oder `</> Edit code`).

Im Editor **alles markieren und löschen**, dann den kompletten Inhalt von
**worker.js** aus diesem Ordner einfügen. Oben rechts **Deploy**.

## 5. Speicher verbinden

Im Worker auf **Settings → Bindings → Add**.

- Art: **KV namespace**
- Variable name: `PLANER`  ← genau so
- KV namespace: den eben angelegten auswählen

Speichern.

## 6. Schlüssel hinterlegen

Weiterhin unter **Settings**, Abschnitt **Variables and Secrets → Add**.

Drei Einträge:

| Art | Name | Wert |
|---|---|---|
| **Secret** | `VAPID_JWK` | die lange Zeile aus *Planer-Push-Zugangsdaten.txt*, beginnt mit `{"kty":"EC"` |
| Text | `VAPID_PUBLIC` | `BOIKB_JD4m1QY-f_7I8TGkAmJawcnwRxkhhXU5f9v87FbjBpThJZk6qonvJIjl5pmlOnDPdHz4Jhmbxg1H4yRJE` |
| Text | `VAPID_SUBJECT` | `mailto:harrerjonathan49@gmail.com` |

Beim ersten Eintrag unbedingt **Secret** wählen, nicht Text — dann ist er
danach nicht mehr lesbar. Genau so soll es sein.

Speichern, dann **Deploy**.

## 7. Wecker stellen

**Settings → Trigger Events → Add → Cron Trigger**.

Dort eintragen:

```
* * * * *
```

Das heißt „jede Minute nachsehen". Speichern.

## 8. Adresse holen

Oben im Worker steht die Adresse, etwa:

```
https://planer-push.deinname.workers.dev
```

Ruf sie einmal im Browser auf — es sollte
**„Push-Dienst des Wochenplaners"** erscheinen. Dann läuft er.

**Diese Adresse mir schicken** — ich trage sie in `config.js` ein und lade
sie hoch. Danach ist es fertig.

---

## Wenn nichts kommt

**Kommt „Push-Dienst des Wochenplaners"?** Wenn nicht, ist Schritt 4 oder
das Deploy schiefgegangen.

**Fehler im Worker sehen:** Im Worker auf **Logs** → **Begin log stream**.
Dort steht live, was ankommt.

**Auf dem Handy:** Android-Einstellungen → Apps → Chrome →
Benachrichtigungen erlauben. Bei Xiaomi zusätzlich unter Akku die
Optimierung für Chrome ausnehmen — sonst schläft der Browser weg.

**Kosten im Blick:** Der Cron läuft rund 43.000-mal im Monat, die
kostenlose Stufe erlaubt 100.000 Aufrufe **pro Tag**.
