/* Taktikaufgaben aus Jonathans eigenen chess.com-Partien.
 *
 * Erzeugt aus 266 Partien (Dezember 2025 bis November 2026), Nutzername
 * jonathan_carlsen1. Gesucht wurden zwei Fehler, die sich ohne Engine
 * zweifelsfrei beweisen lassen:
 *
 *   matt     - es gab genau EIN Matt in einem Zug, und er hat es nicht
 *              gespielt. Genau eines, damit die Loesung eindeutig ist.
 *   material - es stand Material frei und er hat es stehen lassen. Der
 *              Abtausch wurde statisch durchgerechnet (Schlagfolge auf
 *              dem Zielfeld, immer mit der billigsten Figur), der beste
 *              Zug muss mindestens 200 Hundertstelbauern besser sein
 *              als der zweitbeste, sonst ist die Loesung nicht
 *              eindeutig und die Aufgabe wertlos.
 *
 * Die ersten acht Zuege jeder Partie sind ausgenommen (Eroeffnung),
 * ebenso Stellungen, in denen er ohnehin uneinholbar vorne lag, und
 * Zuege, nach denen er sofort mattgesetzt wuerde. Hoechstens drei
 * Aufgaben je Partie, sonst haengt alles an einem einzigen Tag.
 *
 * 152 Aufgaben, jede mit chess.js nachgerechnet.
 *
 * Eine Zeile: Stellung | Loesungszug | Wertung | Art | Datum | Partie
 * Die Stellung ist die, in der er am Zug war und danebengriff.
 *
 * ACHTUNG: Die Reihenfolge darf sich nie aendern. Die App merkt sich
 * geloeste Aufgaben als Platznummer in dieser Liste. Neue Aufgaben
 * nur hinten anhaengen.
 */
window.EIGENE_AUFGABEN = `r2qk2r/ppp2ppp/3p4/1N1Pp3/1n2n1b1/4bN2/PPP2PPP/R2QKB1R w KQkq - 0 11|f2e3|700|material|2025-12-08|https://www.chess.com/game/daily/899725345
r2qk2r/ppp2ppp/3p4/3Pp3/1n4b1/2N1bN2/PPP1Q1PP/R3KB1n w Qkq - 0 13|e2e3|700|material|2025-12-08|https://www.chess.com/game/daily/899725345
r3k2r/pp3ppp/2pp4/3Pp3/1Q5q/2N1bP2/PPP4P/R3KB1n w Qkq - 1 16|b4h4|500|material|2025-12-08|https://www.chess.com/game/daily/899725345
1rbqkb1r/2p3p1/p1np3p/3np3/1p2P2B/1B3N2/PPP2PPP/R2Q1RK1 w k - 0 13|h4d8|600|material|2025-12-09|https://www.chess.com/game/live/146504191042
r3kr2/p1p2pp1/1p1p4/4p1q1/2BNn3/PP4NP/2P2P2/R4RK1 b q - 1 18|e5d4|700|material|2025-12-10|https://www.chess.com/game/live/146530123918
2N1k3/p4pp1/1pB2r2/4p3/8/PP6/2P2P2/3R2K1 b - - 6 29|f6c6|700|material|2025-12-10|https://www.chess.com/game/live/146530123918
1r1qk1nr/p1p3pp/2bb4/5p2/2P4N/1P6/P3P1PP/RNB1KB1R b KQk - 1 13|d8h4|700|material|2025-12-12|https://www.chess.com/game/live/146640509502
r3kbnr/p1qppppp/n7/1N6/QP4P1/8/P2PPP1P/1RB1K1Nb w kq - 2 10|b5c7|600|material|2025-12-14|https://www.chess.com/game/live/146715672748
1Qb2rk1/1pbp2pp/8/2P2p2/3P1P2/6P1/P3N2P/R3KB1q b Q - 0 17|c7b8|500|material|2025-12-14|https://www.chess.com/game/live/146716131404
2kr1Q1Q/pp2pp2/n1pq4/8/3p4/2P4P/P1PP1P2/R1B1KB1R b KQ - 0 14|d8f8|700|material|2025-12-14|https://www.chess.com/game/live/146718286330
rnbqk2r/1ppp2p1/3b1p2/p3N1Pp/4n3/1P5P/P1PPPPB1/RNBQK1R1 w Qkq - 0 9|g2e4|700|material|2025-12-14|https://www.chess.com/game/live/146718884806
5r2/5kp1/R1Q5/6Pp/1qP1p3/7P/3PPP2/4K1R1 w - - 0 26|c6e6|550|matt|2025-12-14|https://www.chess.com/game/live/146718884806
3rkb1r/ppp2pp1/5n1p/4P1B1/4p1b1/8/PPPNBP1P/R2K3R w k - 0 11|e5f6|700|material|2025-12-15|https://www.chess.com/game/live/146765226920
rn2k2r/p4ppp/2pp3q/2b1p3/2B1P3/5PPN/PP5P/R1BQK2R w KQkq - 1 12|c1h6|600|material|2025-12-15|https://www.chess.com/game/live/146766682384
r7/p3k1p1/2pp4/2n1p3/P3P3/R4q2/1PK5/2B5 w - - 3 28|a3f3|500|material|2025-12-15|https://www.chess.com/game/live/146766682384
r7/p3k1p1/2pp4/4p3/nP2P3/R4q2/2K5/2B5 w - - 0 29|a3f3|500|material|2025-12-15|https://www.chess.com/game/live/146766682384
r3k1nr/ppp2ppp/8/3q4/b2n2P1/2b1B2B/P2NPP1P/2R1K2R w Kkq - 0 14|c1c3|700|material|2025-12-16|https://www.chess.com/game/live/146793238296
r3k1nr/ppp2ppp/8/8/b1qB2P1/5P1B/P2bP2P/2R1K2R w Kkq - 0 16|e1d2|700|material|2025-12-16|https://www.chess.com/game/live/146793238296
r3k1nr/ppp2ppp/8/8/b2B2P1/5P1B/P2bPK1P/2q4R w kq - 0 17|h1c1|700|material|2025-12-16|https://www.chess.com/game/live/146793238296
3r2k1/2p2N1p/p7/5Rp1/4p1n1/1Pb1P1Pb/P1P1K2P/R7 b - - 1 22|c3a1|600|material|2025-12-16|https://www.chess.com/game/live/146808641986
5rk1/2p2N1p/p7/5Rp1/4p1n1/1Pb1P1P1/P1P4P/5K2 b - - 0 24|f8f7|700|material|2025-12-16|https://www.chess.com/game/live/146808641986
4k1r1/pp2p1bp/6p1/1N1nN3/3p1q2/1P6/P5KP/2RR4 w - - 0 28|c1c8|550|matt|2025-12-16|https://www.chess.com/game/live/146809082126
r2qk2r/p1ppp1b1/b1n3pp/1NN1Pp2/4nP2/8/PPPPB1PP/R1BQK2R b KQkq - 5 10|e4c5|700|material|2025-12-17|https://www.chess.com/game/live/146826037152
r2q1k1r/p1p1p1b1/b1n3Bp/1Np1Pp1Q/4nP2/8/PPPP2PP/R1B1K2R b KQ - 2 13|a6b5|700|material|2025-12-17|https://www.chess.com/game/live/146826037152
8/p1p3k1/7p/2P2p2/8/2q3P1/1r5P/3K4 b - - 1 36|c3d2|550|matt|2025-12-17|https://www.chess.com/game/live/146826037152
rnbqk2r/p2p1p2/1p1b1n1p/2p1p3/4P1pN/2NP1QB1/PPP2PPP/R3KB1R b KQkq - 1 9|g4f3|500|material|2025-12-17|https://www.chess.com/game/live/146826694804
1rbqk2r/2pp1ppp/p1nb4/6B1/4n3/P1Q2N2/2P2PPP/R3R1K1 w k - 0 14|g5d8|600|material|2025-12-19|https://www.chess.com/game/live/146921052546
2b4r/2pk1ppp/p1p5/8/1r1N4/P7/2P2PPP/4R1K1 w - - 4 20|a3b4|600|material|2025-12-19|https://www.chess.com/game/live/146921052546
2k4r/2p2p2/6p1/p1p5/5PP1/P4b1r/2P1K3/5R2 w - - 1 32|f1f3|700|material|2025-12-19|https://www.chess.com/game/live/146921052546
2kn3r/1ppqbpp1/8/pP6/P1Pr3P/3B1QPb/5P2/1RB3KR b - - 2 25|d4d3|700|material|2025-12-19|https://www.chess.com/game/live/146922778634
2kn3r/1ppqbp2/1P6/p5p1/P1Pr3P/3B1QPb/5P2/1RB3KR b - - 0 26|d4d3|700|material|2025-12-19|https://www.chess.com/game/live/146922778634
rn1qkb1r/ppp1p3/6pp/7Q/3PpP2/2N4b/PPP2P1P/R3K2R w KQkq - 0 12|h5h3|700|material|2025-12-20|https://www.chess.com/game/live/146951694542
rn2kb1r/pp3ppp/2p2n2/q3N3/8/1P1Q4/1PP2PPP/RNB2RK1 w kq - 1 10|a1a5|500|material|2025-12-26|https://www.chess.com/game/live/147200497456
1k1r1bnr/1p1q1ppp/2p1P3/1N1p1P2/1P2P1b1/P4N2/6PP/2Q1KB1R b - - 0 16|c6b5|700|material|2025-12-26|https://www.chess.com/game/live/147201123532
1k1r1bnr/1p1q2pp/2p1P3/1N1p4/1P2P1b1/P4N2/6PP/2Q1KB1R b - - 0 17|c6b5|700|material|2025-12-26|https://www.chess.com/game/live/147201123532
r2qkb1r/p1p1pppp/2n5/1p1p4/3P1B2/2P1nP2/PP2N1PP/RN1Q1RK1 w kq - 0 10|f4e3|700|material|2025-12-26|https://www.chess.com/game/live/147208086320
7r/2bk1pp1/8/8/P1b1R2p/7P/2B2qP1/R6K w - - 4 34|e4c4|700|material|2026-01-12|https://www.chess.com/game/live/147922066152
3r1rk1/4p1bp/R1p1q1p1/8/6B1/6PP/2P3K1/3Q1R2 b - - 2 30|d8d1|700|material|2026-01-13|https://www.chess.com/game/daily/916037851
rn4R1/4kp2/p1p1p3/1p1pP3/PP1Pq2p/2Pn4/3K3P/B4QR1 w - - 0 28|f1d3|700|material|2026-01-18|https://www.chess.com/game/live/148177021074
2k4r/1p1q2b1/2n5/1Q3ppp/P7/1PN1B3/2Pr1PPP/R3R1K1 b - - 2 22|g7c3|700|material|2026-01-24|https://www.chess.com/game/live/148439677802
rn2k2r/1p1qp1bp/p7/1Q1P4/6b1/5P2/P5PP/R1B1KB1R w KQkq - 0 18|f3g4|700|material|2026-10-13|https://www.chess.com/game/live/185277325226
rn2k2r/1p2p1bp/p3q3/3P4/6b1/3Q1P2/P5PP/R1B1KB1R w KQkq - 2 19|d5e6|500|material|2026-10-13|https://www.chess.com/game/live/185277325226
2k5/1p6/p3Pp1r/4b3/8/3nB3/P6P/5R1K w - - 2 33|e3h6|600|material|2026-10-13|https://www.chess.com/game/live/185277325226
r2q1rk1/ppp1bppp/2n1b3/3Pp1N1/P3p1n1/2N5/1PPBBPPP/R2Q1RK1 b - - 0 11|e7g5|700|material|2026-10-15|https://www.chess.com/game/live/185382751408
Q2q1rk1/p1p2ppp/8/4pb2/P3p1nb/2N5/1PPBBPPP/R2Q1RK1 b - - 0 14|d8a8|500|material|2026-10-15|https://www.chess.com/game/live/185382751408
Q2q1rk1/p1p2ppp/8/4pb2/P3p1n1/2N5/1PPBBRPP/R2Q2K1 b - - 0 15|d8a8|500|material|2026-10-15|https://www.chess.com/game/live/185382751408
r2qkb2/ppp2pp1/2np1n2/4p3/P3P3/1PNP1B2/2P2P2/R1BQ1K1r w q - 1 15|f3h1|600|material|2026-10-15|https://www.chess.com/game/live/185383393342
r2q1r2/ppp1npkp/4bNp1/1P6/5n2/2b1RN2/5PPP/5RK1 w - - 2 21|e3c3|700|material|2026-10-22|https://www.chess.com/game/live/185746122108
r1b1k1nN/ppp3bp/2n1qpp1/8/4p2Q/1P6/P1PP1PPP/RNB1R1K1 b q - 5 11|g7h8|700|material|2026-10-22|https://www.chess.com/game/live/185756459458
r1b1k2N/ppp4p/2n1q1p1/1N1n1p2/2P1p1PQ/1P6/P2P1P1P/b1B1R1K1 b q c3 0 15|a1h8|700|material|2026-10-22|https://www.chess.com/game/live/185756459458
r1b1k2N/ppp4p/4q1p1/1N1P1p2/1n2p1PQ/1P6/P2P1P1P/b1B1R1K1 b q - 0 16|a1h8|700|material|2026-10-22|https://www.chess.com/game/live/185756459458
r1b2b2/ppp1k3/5pQ1/4n2P/3B4/2Pq4/PP1N1P2/2K1R1R1 w - - 0 20|g6d3|500|material|2026-10-22|https://www.chess.com/game/live/185756903840
r1b2b2/ppp1k3/5pqP/4n3/3B4/2P5/PP1N1P2/2K1R1R1 w - - 0 21|g1g6|500|material|2026-10-22|https://www.chess.com/game/live/185756903840
2k1r1n1/pp1bb3/2np4/1BPN1q2/8/2P1QN2/PP3P1P/R1B1K1R1 b Q - 0 18|f5d5|700|material|2026-10-22|https://www.chess.com/game/live/185772127530
2k3r1/pp2Q3/8/1bp2q2/8/2P1BN2/PP3P1P/R3K3 b Q - 1 22|f5f3|700|material|2026-10-22|https://www.chess.com/game/live/185772127530
rnb4r/pp3k1p/2p5/3pp1q1/4n3/3P4/PPP1Bb1P/RNBQ1K1R b - - 1 11|c8h3|550|matt|2026-10-23|https://www.chess.com/game/live/185804815980
rn6/pp5R/2p5/4k1NB/6b1/7q/PP3K1P/R1B5 b - - 4 28|g4h5|700|material|2026-10-23|https://www.chess.com/game/live/185804815980
rn6/pp5R/2p5/4k1NB/6b1/4K3/PP5q/R1B5 b - - 1 29|h2e2|550|matt|2026-10-23|https://www.chess.com/game/live/185804815980
r3kb1r/pp3ppp/3p1n2/q1pPp3/b1PnP3/2N1BN2/PP3PPP/R2QKB1R w KQkq - 5 11|d1a4|700|material|2026-10-24|https://www.chess.com/game/live/185870011368
7k/1ppr1B2/5p1B/p6R/8/8/K1P2b2/8 w - - 1 39|h6f8|550|matt|2026-10-24|https://www.chess.com/game/live/185874391392
rn2kb1r/pp3ppp/2p5/3nP3/Q1B1p2q/2P2P1P/PP3P2/RNB1K2R w KQkq - 1 10|c4d5|700|material|2026-10-24|https://www.chess.com/game/live/185883208380
r3r1k1/p4p2/2p4p/3pp3/3P1b1q/2N4B/PPP1K3/R2Q4 b - - 1 19|h4h3|700|material|2026-10-25|https://www.chess.com/game/live/185916308510
3rk2r/pP2bppp/Q1p5/2q5/2b5/P3BB2/5PPP/RN2R1K1 w k - 0 18|e3c5|500|material|2026-10-25|https://www.chess.com/game/live/185917420592
rn1qk2r/3b1ppp/p2bpn2/1p1pN1BQ/3P4/2NB4/PPP2PPP/R3K2R b KQkq - 1 10|f6h5|500|material|2026-10-25|https://www.chess.com/game/live/185920163646
rn3k2/3bq2r/p2bppQ1/1p1N4/3P4/8/PPP2PPP/4RRK1 b - - 0 17|e6d5|700|material|2026-10-25|https://www.chess.com/game/live/185920163646
rn3k2/3bq2r/p3ppQ1/1p1N4/3P4/8/PPP2PPb/4RR1K b - - 1 18|e6d5|700|material|2026-10-25|https://www.chess.com/game/live/185920163646
rn6/pp4pp/2p3k1/6N1/7P/1P6/nK1Nr1P1/5R2 w - - 2 28|b2a2|700|material|2026-10-25|https://www.chess.com/game/live/185930005066
2kr1b1r/ppp2Npp/5n2/6B1/bqBPp3/8/PP3PPP/RN3RK1 w - - 1 13|f7h8|600|material|2026-10-25|https://www.chess.com/game/live/185932211022
1k1r1b1r/ppp2Npp/4Bn2/6B1/b2qp3/2N5/PP3PPP/R4RK1 w - - 0 15|f7h8|600|material|2026-10-25|https://www.chess.com/game/live/185932211022
4k3/p1Q4p/B1p2pr1/b2p4/3P1B2/5N1P/P4P1K/qb6 w - - 3 30|c7a5|700|material|2026-10-25|https://www.chess.com/game/live/185940277454
r7/pp6/n6p/k1p1Qp2/2pP4/q1N5/5PPP/1R1B2K1 w - - 0 29|b1b5|550|matt|2026-10-26|https://www.chess.com/game/live/185968452424
2r1k1r1/pp1n1p1p/4pB1Q/3p4/8/P4N1P/4KPP1/1q5R b - - 3 21|b1h1|600|material|2026-10-26|https://www.chess.com/game/live/185983233146
1k3r2/ppp4Q/4P1pb/1B6/3r4/2N5/Pq3PPP/R4RK1 w - - 0 19|h7h6|700|material|2026-10-26|https://www.chess.com/game/live/185984512160
r1bqk3/p1p5/1p1p1p1b/3Pp2r/1P2P2N/2P1n1B1/P3B1PP/RN1QR1K1 w q - 5 18|e2h5|600|material|2026-10-26|https://www.chess.com/game/live/185993067184
2r3k1/5pPp/5P2/pp6/8/1K2P3/r4P2/2R5 b - - 5 38|c8c1|600|material|2026-10-27|https://www.chess.com/game/live/186029157420
4k2r/6pp/2p2n2/pp2q3/7P/1P2PKP1/P2r1P2/4RB2 b k - 1 26|e5e4|550|matt|2026-10-28|https://www.chess.com/game/live/186085798388
4kr2/6pp/2p2n2/pp2q3/P6P/1P2PKP1/3r1P2/4RB2 b - a3 0 27|e5e4|550|matt|2026-10-28|https://www.chess.com/game/live/186085798388
4kr2/6pp/2p5/pp2q3/P3n2P/1P2P1PK/5r2/4RB2 b - - 1 29|e5g3|550|matt|2026-10-28|https://www.chess.com/game/live/186085798388
2kr3r/pp1q1ppp/2p5/2b5/4PN2/8/PPP2QPP/R3K1NR w KQ - 1 14|f2c5|700|material|2026-10-29|https://www.chess.com/game/live/186146218138
r3r1k1/1p3ppp/2p5/p1Pp1bq1/8/3BP1P1/PP1B1P1P/R2QK2R b KQ - 0 19|f5d3|700|material|2026-10-29|https://www.chess.com/game/live/186159795574
5k2/p1r2p1R/1pr2P2/4P1B1/8/2n5/3NNKP1/8 w - - 1 39|h7h8|550|matt|2026-10-29|https://www.chess.com/game/live/186176688228
1r6/p3kNpp/7q/3B4/3P1Qb1/P1P1K3/2P3PP/3R4 b - - 2 23|g4d1|600|material|2026-10-31|https://www.chess.com/game/live/186281537884
3k4/3P4/6p1/5q1p/7K/6P1/8/8 b - - 5 50|f5g4|550|matt|2026-10-31|https://www.chess.com/game/live/186281537884
r6r/pp1k3p/2qNnB2/8/3Q4/8/PP3PPP/R4RK1 w - - 1 21|f6h8|600|material|2026-10-31|https://www.chess.com/game/live/186287568596
r1b2rk1/pp2b2p/1q2p1p1/2npPp2/8/1NPBB2Q/PP3PPP/R3R1K1 b - - 3 17|c5d3|700|material|2026-11-01|https://www.chess.com/game/live/186356433952
r1b2rk1/1p2b2p/1q2p1p1/p1npPp2/2P5/1N1BB2Q/PP3PPP/R3R1K1 b - - 0 18|c5d3|700|material|2026-11-01|https://www.chess.com/game/live/186356433952
r2qkbnr/p2b3p/1p2ppp1/2PpN3/4P3/2N1BQ2/PPP2PPP/R3K2R b KQkq - 1 12|f6e5|700|material|2026-11-01|https://www.chess.com/game/live/186359243566
3kr2r/pp5P/2n5/8/P1Pp1BQ1/3R4/2K5/R3qB2 b - - 6 34|e1a1|600|material|2026-11-02|https://www.chess.com/game/live/186409353120
r2q1rk1/p1p2p1p/6p1/1p1P4/2BnP1Q1/8/PP3P1P/2KR2R1 w - b6 0 17|d1d4|700|material|2026-11-02|https://www.chess.com/game/live/186412634142
r2k4/pppn1Qp1/1bq5/4p1Nr/1P1pP2P/2PP4/P4P2/RN3RK1 w - - 1 19|f7h5|600|material|2026-11-02|https://www.chess.com/game/live/186416114916
8/p1p3Q1/3k4/1p2p2P/1P1bP3/3P4/P7/5R1K w - b6 0 34|f1f6|550|matt|2026-11-02|https://www.chess.com/game/live/186416114916
8/2p3Q1/3k3P/pp2p3/1P1bP3/3P4/P7/5R1K w - a6 0 35|f1f6|550|matt|2026-11-02|https://www.chess.com/game/live/186416114916
rn2kr2/pp3ppp/1q6/4p3/2B2P2/3P2P1/P1P1QK1P/1R4R1 w q - 1 20|b1b6|700|material|2026-11-02|https://www.chess.com/game/live/186423654866
8/pp2nRQp/2qk4/r7/2P5/3P2P1/P6P/6K1 w - - 1 32|f7e7|700|material|2026-11-02|https://www.chess.com/game/live/186423654866
6k1/4r2p/3n4/6P1/8/2q5/8/3K4 b - - 5 49|e7e1|550|matt|2026-11-04|https://www.chess.com/game/live/186516168570
4r1k1/6p1/2P1r3/Q3pp2/1P6/P7/K7/4q1q1 b - - 0 40|e1b1|550|matt|2026-11-04|https://www.chess.com/game/live/186526250074
4r1k1/6p1/2P1r3/QK2pp2/1P6/P3q3/2q5/8 b - - 6 43|c2c6|550|matt|2026-11-04|https://www.chess.com/game/live/186526250074
2r1r1k1/5p1p/p1q3p1/1p1Nb3/1P2n3/3Q4/P1PB3P/2K2RR1 w - b6 0 27|d3e4|700|material|2026-11-07|https://www.chess.com/game/live/186739693496
2r1r1k1/5p1p/p1q3p1/3Nb3/1Pp1n3/3Q4/P2B3P/2K2RR1 w - - 0 28|d3e4|700|material|2026-11-07|https://www.chess.com/game/live/186739693496
2r1r1k1/5p1p/p1q3p1/3Nb3/1Pp5/5Q2/P2n3P/2K2RR1 w - - 0 29|c1d2|700|material|2026-11-07|https://www.chess.com/game/live/186739693496
r3k2r/pp3p1p/3bp3/6P1/1n1P4/1BNb4/PP2RP1q/R1BQ1K2 b kq - 4 18|h2h1|550|matt|2026-11-08|https://www.chess.com/game/live/186783234892
3r1k1r/pp3P2/5N1p/3B4/Q4b2/3K1P2/PP5q/n1B5 b - - 6 29|f4c1|700|material|2026-11-08|https://www.chess.com/game/live/186783234892
6N1/pp4k1/8/7p/7q/5K2/PP6/n1Q5 b - - 0 41|g7g8|700|material|2026-11-08|https://www.chess.com/game/live/186783234892
rnb1k2r/pp1p1ppp/5q2/3n4/2p5/P1N1P1P1/1PPB1P1P/R2QKB1R w KQkq - 3 11|c3d5|700|material|2026-11-10|https://www.chess.com/game/live/186907117506
rnb1k2r/p2p1ppp/5q2/1p1n4/2p5/P1N1P1P1/1PPBQP1P/R3KB1R w KQkq b6 0 12|c3d5|700|material|2026-11-10|https://www.chess.com/game/live/186907117506
rnbq1rk1/ppp3pp/5b2/8/4n1N1/1P6/P1PPPPPP/RQ2KB1R b KQ - 2 10|d8d2|550|matt|2026-11-10|https://www.chess.com/game/live/186907432610
rnbq1rk1/ppp3pp/8/8/4n1N1/1P6/P1PPPPPP/Q3KB1R b K - 0 11|d8d2|550|matt|2026-11-10|https://www.chess.com/game/live/186907432610
rn1q1rk1/ppp3pp/8/8/4n1b1/1P5P/P1PPPPP1/Q3KB1R b K - 0 12|d8d2|550|matt|2026-11-10|https://www.chess.com/game/live/186907432610
r1b1k1nr/ppp3pp/8/b2p4/1P5q/2PQP3/PB3PPP/RN2K2R w KQkq - 1 12|b4a5|700|material|2026-11-10|https://www.chess.com/game/live/186907883368
r3k2r/p1p4p/1p3np1/P7/2p1b3/2NQ2P1/P4P1P/R4RK1 w kq - 0 19|c3e4|700|material|2026-11-10|https://www.chess.com/game/live/186907883368
r1bqr1k1/p1p2pbp/1pn3p1/8/3PB3/1P3N2/PBP2PPP/R2QR1K1 w - - 0 13|e4c6|700|material|2026-11-10|https://www.chess.com/game/live/186924760820
r2qr1k1/p1p2pbp/1pn3p1/8/3PB1b1/1P2RN2/PBP2PPP/R2Q2K1 w - - 2 14|e4c6|700|material|2026-11-10|https://www.chess.com/game/live/186924760820
7k/p2b1Qbp/1p4p1/2q3N1/2Pp4/1P2P2P/PB4P1/5RK1 w - - 1 24|f7d7|700|material|2026-11-10|https://www.chess.com/game/live/186924760820
2r1q3/p2b1k1R/1p2pnn1/8/1P1p4/6Q1/PP1N1PP1/R3K3 b Q - 1 26|f6h7|600|material|2026-11-10|https://www.chess.com/game/live/186929979940
3qk1nr/pp4pp/3bb3/3Nn3/2B5/4QP2/PP5P/R3K1NR b KQk - 0 14|e5c4|700|material|2026-11-10|https://www.chess.com/game/live/186947085064
rkq2b1r/p2np1p1/2pnN2p/1p6/3pQ3/8/PPPP1PPP/R1B1K2R b KQ - 5 17|d6e4|500|material|2026-11-10|https://www.chess.com/game/live/186947280620
2kr4/p1pq1pbp/1p2r1p1/3p4/3B1Pn1/1P2P3/P1QN2PP/2R2RK1 w - - 1 19|d4g7|700|material|2026-11-11|https://www.chess.com/game/live/186972148832
2kr4/p1pq1pbp/1p2r1p1/3p4/3B1P2/1P2n2P/P1QN2P1/2R2RK1 w - - 0 20|d4g7|700|material|2026-11-11|https://www.chess.com/game/live/186972148832
2K1Q3/8/3k4/5P1p/8/5q2/P1P5/8 b - - 1 38|f3a8|550|matt|2026-11-11|https://www.chess.com/game/live/186980704844
5Q2/p1p5/6p1/4P2k/2B4q/1P2P1R1/P1P4P/6K1 w - - 1 29|f8h8|550|matt|2026-11-12|https://www.chess.com/game/live/187058058642
rnb1k1nr/ppp2ppp/5q2/8/4p1Q1/2N1P3/PPP3PP/R3KB1R w KQkq - 0 9|g4c8|700|material|2026-11-12|https://www.chess.com/game/live/187084317482
r1b1k1nr/pp3p1p/2nNpqp1/2bp3Q/8/1N6/PPPP1PPP/R1B1KB1R b KQkq - 3 9|c5d6|700|material|2026-11-12|https://www.chess.com/game/live/187084390162
8/8/5k2/7K/5q2/6pP/8/8 b - - 1 54|f4g5|550|matt|2026-11-13|https://www.chess.com/game/live/187116159766
4rr1k/ppp1q1pp/8/5R2/2P5/1P1BQ3/P4PPP/4R1K1 w - - 0 23|e3e7|600|material|2026-11-13|https://www.chess.com/game/live/187127237300
4rq1k/ppp3pp/8/8/2P5/1P1BQ3/P4PPP/4R1K1 w - - 0 24|e3e8|600|material|2026-11-13|https://www.chess.com/game/live/187127237300
r3k2r/pp2pp1p/2p2npb/3pN3/3P4/1P1bP3/3N1PPP/B2QR1K1 w kq - 0 16|e5d3|700|material|2026-11-13|https://www.chess.com/game/live/187129888176
6k1/p4p2/5Bp1/1p2p1K1/4q3/8/P5P1/8 b - - 5 37|e4f4|550|matt|2026-11-13|https://www.chess.com/game/live/187131656548
6k1/p4p2/5BpK/1p2pq2/8/8/P5P1/8 b - - 7 38|f5h5|550|matt|2026-11-13|https://www.chess.com/game/live/187131656548
6k1/p4p2/5qpK/1p2p3/6P1/8/P7/8 b - g3 0 39|f6h4|550|matt|2026-11-13|https://www.chess.com/game/live/187131656548
r4rk1/pp1q1pp1/2np4/4p3/4P1nb/2NBB1PP/PPP5/R3K1NR b KQ - 0 14|g4e3|700|material|2026-11-13|https://www.chess.com/game/live/187133699400
3r2B1/ppp5/6nk/4P3/4p2b/4P2P/PPPN4/R1BK1R2 b - - 0 27|d8g8|700|material|2026-11-13|https://www.chess.com/game/live/187140918406
3r4/p3k1b1/1p2p2p/2p5/2P4q/PP6/2K4P/3Q1B2 b - - 0 36|d8d1|700|material|2026-11-13|https://www.chess.com/game/live/187144641334
3r4/p3k1b1/1p2p2p/2p5/2Pq4/PP1B4/3Q3P/3K4 b - - 8 40|d4d3|700|material|2026-11-13|https://www.chess.com/game/live/187144641334
4K3/6r1/5q2/8/7k/8/8/8 b - - 17 81|f6e7|550|matt|2026-11-14|https://www.chess.com/game/live/187193921030
r3k2r/pp2ppbp/2pp2pq/R7/1PPPn1b1/1PB1PN1P/4BPP1/1N1QK2R w Kkq - 3 15|h3g4|700|material|2026-11-16|https://www.chess.com/game/live/187335076288
r3k2r/p3ppbp/1ppp2pq/RP6/2PPn1b1/1PB1PN1P/4BPP1/1N1QK2R w Kkq - 0 16|h3g4|700|material|2026-11-16|https://www.chess.com/game/live/187335076288
rn3rk1/ppp2ppp/8/3p1q2/8/P5Pn/2P2P1P/4RR1K b - - 2 20|f5f3|550|matt|2026-11-16|https://www.chess.com/game/live/187338092908
rn3rk1/ppp2ppp/8/5q2/3p4/P5Pn/2P1RP1P/5R1K b - - 1 21|f5f3|550|matt|2026-11-16|https://www.chess.com/game/live/187338092908
r3kb1r/pp1n1ppp/2q5/3pp3/8/1PB2PN1/P1P3PP/R2Q1RK1 b kq - 1 14|c6c3|700|material|2026-11-16|https://www.chess.com/game/live/187339165010
1k1rr3/pp1n2bp/6p1/8/1PN1p3/P2R4/1B3PPP/4R1K1 w - - 0 24|b2g7|700|material|2026-11-16|https://www.chess.com/game/live/187346127516
1k1rr3/pp1n3p/6p1/8/1P2R3/P7/1N3PPP/4R1K1 w - - 1 27|e4e8|600|material|2026-11-16|https://www.chess.com/game/live/187346127516
2rqr3/pp4Q1/3k1p2/b4N2/3p1Pp1/P2Pn3/5RPP/2R3K1 b - - 8 32|e3f5|700|material|2026-11-16|https://www.chess.com/game/live/187348222692
2rqr3/pp4Q1/4kp2/b4N2/3p1Pp1/P2Pn3/4R1PP/2R3K1 b - - 10 33|c8c1|600|material|2026-11-16|https://www.chess.com/game/live/187348222692
r3k1r1/1b3pb1/p2p1q1p/P1nP4/1NPNP2P/1p6/1P2B3/R2QK2R b KQq - 0 22|f6d4|700|material|2026-11-16|https://www.chess.com/game/live/187350849032
r3k1r1/1b3pb1/p2p1q1p/P2P4/1NPNn2P/1p6/1P2B3/R2QKR2 b Qq - 1 23|f6d4|700|material|2026-11-16|https://www.chess.com/game/live/187350849032
r7/np3kpB/2pr1q1p/p2p1R2/1b1P2p1/5N2/PPQ2PPP/R5K1 w - - 4 25|f5f6|700|material|2026-11-16|https://www.chess.com/game/live/187353636846
3r4/p1p1qpp1/1p4k1/6r1/4b3/1P1Q2R1/P4PPP/3R2K1 w - - 6 26|d3d8|600|material|2026-11-16|https://www.chess.com/game/live/187360061656
2r1kb1r/1p1q1ppp/p2p1n2/3PN3/1P6/2Q5/P1P2PPP/R1B2RK1 b k - 0 14|c8c3|500|material|2026-11-17|https://www.chess.com/game/live/187401745564
6k1/1p1qb1pp/p4r2/3R1p1Q/1P6/6RP/Pr3PP1/6K1 b - - 0 25|d7d5|600|material|2026-11-17|https://www.chess.com/game/live/187401745564
r1b1k2r/pp1n1pp1/3bpn1p/q2p2B1/3P4/1BN4Q/PPP2PPP/2KR2NR b kq - 1 10|h6g5|700|material|2026-11-17|https://www.chess.com/game/live/187409873972
1r3rk1/Q4pp1/1p1b1q1p/8/3P4/1B4P1/PPP2n1P/2K2RNR b - - 1 20|f2h1|600|material|2026-11-17|https://www.chess.com/game/live/187409873972
r1b2rk1/pp3ppp/2nNp3/5q2/1R6/5N2/5PPP/3Q1RK1 b - - 11 18|c6b4|600|material|2026-11-17|https://www.chess.com/game/live/187423969142
`;
