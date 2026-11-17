# Fremde Bestandteile

Alles hier liegt im Projekt statt auf einem fremden Server — so läuft der
Planer offline und hängt an nichts, was morgen verschwinden kann. Dafür
müssen die Lizenzen mitgeführt werden. Das ist diese Datei.

## Schachregeln — `chess.min.js`

chess.js 0.13.4 von Jeff Hlywa, **BSD-2-Clause**.
<https://www.npmjs.com/package/chess.js/v/0.13.4>

Der Lizenztext steht am Anfang der Datei und muss dort bleiben. Der
Minifizierer hatte ihn entfernt; er wurde wieder vorangestellt.

Geändert wurde nur die Art, wie die Datei geladen wird: aus einem
ES-Modul wurde ein gewöhnliches Skript, damit es ohne Bündelwerkzeug
im Browser läuft.

## Schachfiguren — in `app.js`, Tabelle `FIGUREN_SVG`

Zeichnungen von Colin M. L. Burnett, über Wikimedia Commons,
**CC BY-SA 3.0**.
<https://commons.wikimedia.org/wiki/Category:SVG_chess_pieces>

Geändert wurden ausschließlich die beiden Farbwerte: statt reinweiß
(`#ffffff`) und reinschwarz (`#000000`) die wärmeren Töne der App
(`#F4F1E8` und `#1F211D`). Diese Bearbeitung steht unter derselben
Lizenz.

## Taktikaufgaben — `aufgaben.js`

Aus der offenen Lichess-Aufgabendatenbank, **CC0** (gemeinfrei).
<https://database.lichess.org/#puzzles>

4000 Aufgaben mit Wertung 400 bis 1599, ausgewählt mit einer
Themenquote je Wertungsband. Jede wurde mit chess.js nachgerechnet.

## Schriften

Space Grotesk und IBM Plex Mono, geladen von Google Fonts,
**SIL Open Font License 1.1**.

## React

React und React-DOM 18.3.1, geladen von unpkg, **MIT**.
