/* Taktikaufgaben, aus der offenen Lichess-Aufgabendatenbank (CC0).
 *
 * ZWEITE FASSUNG. Die erste hatte zwei Fehler, die Jonathan sofort
 * aufgefallen sind: 40 Prozent waren Matt in einem Zug, und es gab
 * ueberhaupt nichts, was mehr als zwei eigene Zuege brauchte - Matt
 * in 3 kam gar nicht vor, weil die Laenge zu eng begrenzt war.
 *
 * Jetzt: 1 bis 4 eigene Zuege, und je Wertungsband gelten Quoten,
 * damit keine Sorte den Satz beherrscht.
 *
 *   Matt in 1    319 (8%)
 *   Matt in 2    559 (14%)
 *   Matt in 3-5  360 (9%)
 *   Material     2748 (69%)
 *
 * 92 Prozent brauchen mehr als einen Zug.
 *
 * Wertung 500 bis 1899, Schwerpunkt bei 700 bis 1100, nach oben Luft
 * zum Wachsen. 4000 Aufgaben, jede mit chess.js nachgerechnet:
 * Stellung gueltig, alle Loesungszuege regelkonform.
 *
 * Eine Zeile: Stellung | Loesungszuege | Wertung | Themennummern
 * Die Stellung ist die Stellung NACH dem letzten Zug des Gegners, wer
 * am Zug ist, ist der Loeser.
 *
 * Quelle: https://database.lichess.org/#puzzles (CC0)
 */
/* Hochgezaehlt, wenn sich der Satz aendert. Die App merkt sich geloeste
   Aufgaben als Platznummer - bei einem neuen Satz zeigen die auf andere
   Stellungen und muessen zurueckgesetzt werden. */
window.AUFGABEN_FASSUNG = 2;
window.AUFGABEN_THEMEN = ["advancedPawn","endgame","pawnEndgame","backRankMate","mateIn2","hangingPiece","mateIn1","kingsideAttack","bishopEndgame","sacrifice","knightEndgame","promotion","quietMove","pillsburysMate","rookEndgame","mateIn3","operaMate","queenRookEndgame","fork","queenEndgame","discoveredAttack","skewer","attackingF2F7","pin","zugzwang","defensiveMove","queensideAttack","xRayAttack","anastasiaMate","deflection","exposedKing","clearance","cornerMate","epauletteMate","discoveredCheck","doubleCheck","arabianMate","interference","smotheredMate","killBoxMate","attraction","bodenMate","swallowstailMate","doubleBishopMate","capturingDefender","blindSwineMate","mateIn4","trappedPiece","intermezzo","morphysMate","hookMate","triangleMate","dovetailMate","castling","vukovicMate","collinearMove","enPassant","balestraMate","underPromotion"];
window.AUFGABEN = `8/8/K4k2/1P3p2/5P1p/8/8/8 b - - 1 47|h4h3 b5b6 h3h2|500|0,1,2
2r5/p2N2kp/1p2p1p1/3p4/3P4/5P2/PP2R1PP/7K b - - 0 29|c8c1 e2e1 c1e1|502|3,1,4
4r1k1/2q2ppp/4p3/RQ1pN3/3Pn3/6PP/7K/8 w - - 2 32|b5e8|503|1,5,6
r1q2rk1/2p1bppn/2n1b2p/p2pP3/3P4/pP1Q1NNP/1BB2PP1/R3K2R w KQ - 0 19|d3h7|503|7,6
7k/6pp/3q4/4pP2/5p2/3B1PbP/6P1/R6K w - - 0 46|a1a8 d6b8 a8b8|504|3,1,4
8/6B1/8/8/2pp4/8/2K1k3/8 b - - 9 72|d4d3 c2c3 d3d2|504|0,8,1
r7/1Qpr1kpp/2R5/p2q4/4p3/4P3/P4PPP/2R3K1 b - - 9 26|d5d1 c1d1 d7d1|505|3,1,4,9
3k4/R1b1r3/4p2p/1B1p2p1/8/4P1P1/5P1P/6K1 w - - 11 49|a7a8 c7b8 a8b8|506|1
4k3/6K1/7P/8/6n1/8/8/8 w - - 1 72|h6h7 e8e7 h7h8q|506|0,1,10,11
8/8/8/p7/P5Pp/5pkP/8/5K2 w - - 4 52|g4g5 f3f2 g5g6|507|1,2,12
6k1/p4p1p/1p3p2/2p5/5n2/1B1P1RP1/PPP1r2P/7K b - - 0 23|e2e1 f3f1 e1f1|508|1,4
r2r1k2/p5pp/2pR1p2/4pb2/2P5/P1B5/5PPP/3R2K1 w - - 0 26|d6d8 a8d8 d1d8|508|1
6k1/5pp1/4pb2/3p4/8/1R1B3P/p5K1/3r4 w - - 2 33|b3b8 f6d8 b8d8|509|1,4,13
5r2/1p3Rk1/p2Q3r/3N2b1/1P2q2p/P6P/2P3P1/5RK1 b - - 0 34|f8f7 f1f7 g7f7|510|
1k3b2/1p1qn3/1P1r3p/4p1p1/8/3Q1P2/5BPP/3R2K1 w - - 0 39|d3d6 d7d6 d1d6|510|
3k4/2prrp2/1R2p1pp/p7/P2PP3/4K3/7P/2R5 w - - 1 36|b6b8|511|1,6,14
7k/5ppp/2p2N2/p5PP/2K1P3/6Q1/2n5/3q4 w - - 0 41|g3b8 d1d8 b8d8|511|1,4
6k1/1R3p1p/p5pP/3r4/P7/8/1P2r1P1/6K1 w - - 0 33|b7b8 d5d8 b8d8 e2e8 d8e8|511|1,15,14
rnb1kbnr/pp3p1p/2p3p1/4q1B1/4P3/2N5/PPP2PPP/R2QKB1R w KQkq - 0 8|d1d8|512|6
1n4k1/3b1ppp/p3p3/q2p4/p2P4/P1P1P3/5PPP/1R3RK1 w - - 0 19|b1b8 d7c8 b8c8 a5d8 c8d8|514|3,1,15
2n3kr/6pp/p3qp2/4N3/P7/1P3P2/5P1P/3R2K1 w - - 0 31|d1d8 e6e8 d8e8|516|1,4
5r2/p5k1/2pp2p1/4p3/2P1P1Pp/1P1r3q/P2KQ1R1/6R1 w - - 2 47|e2d3 h3d3 d2d3|516|1
8/8/8/8/4p1Bp/3kPn1P/5K2/8 w - - 10 60|g4f3 e4f3 f2f3|517|1
6k1/5ppp/1p2b3/8/2P5/6P1/1r1r1P1P/R1R3K1 w - - 0 23|a1a8 e6c8 a8c8 d2d8 c8d8|518|3,1,15
8/8/7p/7P/1pk2PP1/5K2/N7/8 b - - 0 61|b4b3 a2c1 b3b2|518|0,1,10
r2r2k1/6p1/p3pnbp/1pq5/2p5/P1N1PP2/1P1R2PP/2QR2K1 w - - 0 23|d2d8 a8d8 d1d8|518|7
7k/1p4pp/p5b1/4Rp2/3P4/2q2P2/P5PP/4R1K1 w - - 0 29|e5e8 g6e8 e1e8|519|3,1,4,9
2r3k1/1p3r1p/p3R1p1/3N1pQ1/3R1Nn1/8/P5PP/6K1 b - - 0 28|c8c1 d4d1 c1d1 e6e1 d1e1|519|15
4r1k1/pp3pbp/5pp1/2B5/2P2Q2/1P3bPP/P2P1P2/4R1K1 b - - 0 23|e8e1 g1h2 e1h1|520|1,7,4,16
7k/p4R2/3Q3p/2p5/8/8/PPP3rP/1K6 b - - 0 39|g2g1 f7f1 g1f1 d6d1 f1d1|520|3,1,15,17
8/2k5/5p2/1K3P2/8/8/8/8 b - - 5 51|c7d6 b5c4 d6e5 c4d3 e5f5|520|1,2
2r3k1/4qppp/b7/p2pP3/1p1Q1N2/1Pr1P1P1/5P1P/1RR3K1 b - - 3 27|c3c1 b1c1 c8c1|521|
1n6/8/P2k4/1K6/8/8/8/8 w - - 1 68|a6a7 b8c6 a7a8q|521|0,1,10,11
r5k1/pp3p1p/2p2bp1/3p4/1q1P4/3Q4/PPP1NPPP/4R1K1 b - - 2 20|b4e1|523|1,5,7,6
6k1/1R3ppp/8/2N5/6P1/1P2r2n/1br2PK1/5R2 w - - 0 30|b7b8 e3e8 b8e8|523|3,4
b7/8/5k2/p3p2p/2p1P3/P1P2NP1/NPK5/8 b - - 2 50|a8e4 c2d2 e4f3|523|1,18
8/8/8/8/4r1p1/3k2P1/R5K1/8 b - - 7 53|e4e2 a2e2 d3e2|523|1,14
3q2k1/2rr1p1p/p5p1/1p2R3/1P1N4/2P5/P5P1/4Q1K1 w - - 6 38|e5e8 d8e8 e1e8|525|1,18
8/ppk1rQ2/2pq4/2p1R3/2P1P3/P1P2p1P/1P3P1K/1r6 w - - 1 36|f7e7 d6e7 e5e7|526|1
2r3k1/p3Rppp/8/2B2p2/2pP4/1P1b1P2/r5PP/4R1K1 w - - 2 28|e7e8 c8e8 e1e8|527|3,1,4
4r1k1/1b3p1p/5np1/3p4/3N4/3Q1P2/6PP/1B5K b - - 0 30|e8e1 d3f1 e1f1|527|3,1,4
4R3/P7/1pNk4/1Pp5/2B4p/rP4pP/6P1/7K b - - 6 46|a3a1 e8e1 a1e1 c4f1 e1f1|527|1,15
8/4k3/8/8/5KR1/5p2/8/8 b - - 1 51|f3f2 f4e5 f2f1q|527|0,1,11,14
8/1p4pk/3PQ2p/p7/3q1K2/7P/6P1/8 w - - 2 38|e6e4 d4e4 f4e4|527|1,19
r5k1/1b3ppp/p3p3/8/3QP3/1q6/5PPP/3RK3 w - - 0 32|d4d8 a8d8 d1d8|528|3,1,4,9
r2qr1k1/ppp2pb1/2n4p/3n1bp1/2BP1p2/1PP2N2/PB1NQ1PP/4RRK1 w - - 4 14|e2e8 d8e8 e1e8|529|7
6k1/p1r2pp1/2n1p1p1/bQ1p2N1/3P4/4B2P/q1P2PP1/1R4K1 w - - 0 22|b5b8 c7c8 b8c8|529|
5k2/6pp/3P4/8/1Pp5/7P/6P1/6K1 b - - 1 44|c4c3 g1f2 c3c2|529|0,1,2
8/pp4p1/4r2p/2P2k2/7P/1PK3P1/1P2N3/8 w - - 1 40|e2d4 f5g4 d4e6|529|1,18
8/1p3KN1/1k6/8/2p2P2/6P1/8/8 b - - 1 54|c4c3 g7e6 c3c2 g3g4 c2c1q|531|0,1,10,11
8/5k2/8/p4K2/3p4/8/PP6/8 b - - 1 59|d4d3 f5f4 d3d2|531|0,1,2
8/6p1/7p/1Kp5/P2k1PPP/8/8/8 b - - 1 40|c5c4 a4a5 c4c3 a5a6 c3c2 a6a7 c2c1q|532|0,1,2,11,12
6k1/5ppp/rb1R4/p7/Pp6/6P1/1P2BP1P/6K1 b - - 4 27|b6f2 g1f2 a6d6|532|20,1
1k4r1/1p6/4p3/p3P2p/P7/5q2/1P1p2Q1/6RK w - - 4 46|g2f3 g8g1 h1g1|532|1,5
3RQ3/p6k/1pb5/8/8/6P1/P1r2P1P/6K1 b - - 0 42|c2c1 d8d1 c1d1 e8e1 d1e1|533|1,15,13
r1b1r1k1/1pp1qpp1/1p5p/1P6/P4Bn1/2PP1Q2/3N1PPP/R3R1K1 b - - 1 19|e7e1 a1e1 e8e1|535|7
4r1k1/1p6/2p4p/2Pp3b/1P1q1PP1/3BrK2/2Q1R3/4R3 w - - 1 35|e2e3 e8e3 e1e3|535|
3r4/pr6/3k4/2N2p2/3p4/8/P4P2/5K2 w - - 0 36|c5b7 d6e7 b7d8|535|1,18
8/5pk1/8/5np1/8/8/8/3K1R2 b - - 1 52|f5e3 d1e2 e3f1|535|1,18
8/8/4p3/2P1P3/3K3p/8/6k1/8 w - - 1 40|c5c6 h4h3 c6c7 h3h2 c7c8q|535|0,1,2,11
8/p5p1/1p2k3/2p1pBPp/2P2P1P/PP2K3/8/8 b - - 0 38|e6f5 f4e5 f5e5|536|1
8/8/2p5/3kq3/8/p2Q3P/6P1/6K1 b - - 2 49|e5d4 d3d4 d5d4|536|1,19
3qr1k1/p2n1ppp/3Q4/8/5N2/3P2P1/P3rP1P/R3R1K1 b - - 3 19|e2e1 a1e1 e8e1|537|
rn3rk1/1bqp1ppp/pp6/5p2/P5Q1/2B3P1/1PP2P1P/R3R1K1 w - - 0 16|g4g7|538|7,6
2r2rk1/1b3p1p/p3pBp1/1pnq4/8/PP2P1N1/2Q2PPP/1BR2RK1 b - - 0 18|d5g2|538|7,6
6k1/5p1p/6pB/R7/p1rb4/7P/5PP1/6K1 w - - 4 41|a5a8 c4c8 a8c8|538|1,4,13
4r3/8/p5k1/1p2rN1p/5Kp1/P1PRP1P1/7P/3R4 b - - 0 30|e5f5|539|1,6
r4rk1/p1qb1ppB/1p1bp3/2pp3n/3P1B2/2P1PN2/PP3PPP/R2Q1RK1 b - - 0 12|g8h7 f4d6 c7d6|539|5
1k6/pp6/2p2NK1/2p1q3/6P1/8/8/8 w - - 0 37|f6d7 b8c7 d7e5|539|1,18
3r2k1/p5pp/Pp2b3/1P3p2/2P5/7P/4BPP1/3R2K1 b - - 1 31|d8d1 e2d1 e6c4|540|1
8/6p1/p1r4p/R1Pk1p2/8/2K3P1/2P4P/8 b - - 0 40|c6c5 a5c5 d5c5|540|1,14
1b6/p5pk/1p5p/3Qq3/P4K2/6PB/7P/8 w - - 0 40|d5e5 b8e5 f4e5|541|1
3r2k1/p3Rpbq/3P1p2/2p5/5Pp1/2B3P1/PP2QK2/8 w - - 7 32|e7e8 d8e8 e2e8|541|1
6k1/R4ppp/p4n2/1p1p4/1P6/3K4/r5PP/8 w - - 0 36|a7a8 f6e8 a8e8|542|3,1,4
r3r1k1/ppp2ppp/2b5/3p2Q1/3P4/2P5/PP3PPP/RN2R1K1 b - - 0 16|e8e1|545|3,5,6
8/6k1/1p6/6PP/pPPp4/3K4/8/8 b - - 0 53|a4a3 d3d4 a3a2|545|0,1,2
8/8/8/7P/k1p2P2/7K/P7/8 b - - 0 48|c4c3 h3g4 c3c2 h5h6 c2c1q|545|0,1,2,11
8/2R3b1/1R3pk1/4p1p1/4N2p/4nP1P/r4P1B/6K1 b - - 11 46|a2a1 b6b1 a1b1 c7c1 b1c1|546|15
8/8/1p4b1/1P5K/k7/7P/8/8 w - - 0 50|h5g6 a4b5 h3h4 b5a4 h4h5 b6b5 h5h6|547|1,12
k7/pp3pp1/2p3b1/3r4/2nP2Br/1N6/PP3P2/R3R1K1 w - - 0 25|e1e8 d5d8 e8d8|548|3,4
8/5pp1/p7/3k4/6p1/1q1p2P1/3RnP1P/3R1K2 w - - 0 36|d2d3 b3d3 d1d3|548|1,18
8/8/8/pk1Q4/1q6/6P1/6P1/6K1 b - - 2 59|b4c5 d5c5 b5c5|548|1,19
1K3k2/5p2/6p1/7p/2P5/8/8/8 w - - 1 50|c4c5 f8e7 c5c6 h5h4 c6c7|550|0,1,2,12
8/8/2r2k2/5ppR/8/7P/6PK/8 w - - 1 47|h5h6 f6e5 h6c6|550|1,14,21
2r2rk1/1pq1bppp/p3p3/4Pb2/2QBp3/2P5/PP3PPP/R3RBK1 b - - 0 17|c7c4 f1c4 c8c4|550|
r2qk1nr/ppp2ppp/2np4/8/2BbP3/5Q1P/PP3PP1/RNB2RK1 w kq - 0 10|f3f7|551|22,6
6k1/5ppp/1p2p3/3r4/3bb3/2R1P3/1P2BPPP/6K1 w - - 0 26|c3c8 d5d8 c8d8|551|3,1,4
8/1pp3pk/1b2Q2p/p4N2/3r4/P7/5RPP/6K1 b - - 0 30|d4d1 e6e1 d1e1|551|1,4,23
8/8/3N4/5p2/5P2/2kp3P/5K2/8 b - - 2 51|d3d2 d6f5 d2d1q|551|0,1,10,11
6k1/8/p5p1/1pp5/2q1rP2/P3Q1P1/4R2r/5KR1 w - - 0 42|e3e4 c4e4 e2e4|551|1
3kb3/8/3P2p1/8/Np3P2/1P4PP/5K2/8 b - - 0 39|e8a4 f2e3 a4b3|551|1
6k1/5ppp/2p5/2P1qP2/pP4P1/P3p2P/3Q2K1/8 w - - 0 38|d2d8 e5e8 d8e8|552|1,4,19
8/2k5/8/1P2K1p1/3pP1Pp/3B4/8/8 b - - 0 58|h4h3 e5d4 h3h2 e4e5 h2h1q|552|0,8,1,11
8/pk3b2/1p4p1/1N3p2/8/P7/1P4P1/6K1 w - - 2 39|b5d6 b7c6 d6f7|552|1,18
2k2b2/ppp3p1/2n5/3qp2p/5p1B/3P3b/PPP2PBP/R2QR1K1 b - - 0 18|d5g2|553|7,6
8/8/1K6/Pp6/1P3kp1/8/8/8 b - - 1 52|g4g3 a5a6 g3g2 a6a7 g2g1q|553|0,1,2,11
r1b1r3/1pp1qN1k/p4npp/8/2B5/2PQ4/P1P2PPP/R3R1K1 b - - 1 20|e7e1 a1e1 e8e1 d3f1 e1f1|554|7
8/4p3/4P1p1/2p1K1P1/1kP5/8/8/8 w - - 1 48|e5d5 b4b3 d5c5|555|1,2,24
r1b3k1/p1p2ppp/2p2q2/3pr3/8/5N2/PPP1QKPP/RNB5 w - - 0 15|e2e5 f6e5 f3e5|555|
8/2Q5/8/8/K5p1/5qk1/P7/8 b - - 9 58|f3f4 c7f4 g3f4|556|1,19
8/2q3k1/5RBp/8/3p4/6P1/5P1P/6K1 w - - 1 45|f6f7 c7f7 g6f7|556|1,18
8/8/2P5/p5p1/Pp1bp1k1/1P2p3/4K3/8 w - - 0 63|c6c7 g4f4 c7c8q|556|0,8,1,11
8/1p6/2p3K1/p7/1k5P/6P1/8/8 w - a6 0 55|h4h5 c6c5 h5h6 c5c4 h6h7|556|0,1,2,12
r2q3k/1pp5/pbnp3p/4pr2/PPB3b1/2PP1N2/3Q1PPP/R3R1K1 w - - 0 17|d2h6|557|7,6
r5k1/4qppp/4p3/3pPn2/5P2/r1R4P/3B1PK1/2RQ4 w - - 2 27|c3c8 e7e8 c8e8|557|
3r2k1/pp1P2pp/2p2p2/8/8/4R3/PPP3PP/6K1 w - - 1 24|e3e8 g8f7 e8d8|557|1,14
8/5k1p/4p1p1/1N6/4rP2/2P4P/5KP1/8 w - - 0 38|b5d6 f7e7 d6e4|557|1,18
1rbr3k/p6p/1p4p1/1Q3p2/P1P5/4R3/1P4PP/7K b - - 0 33|d8d1 e3e1 d1e1|558|3,1,4
6k1/1p3ppp/1Pr1p3/p2p4/q7/8/5QPP/5R1K w - - 1 31|f2f7 g8h8 f7e8|558|3,1,4
4r1k1/pp3pp1/2p4p/3pr3/8/8/P1B3PP/3QR2K b - - 0 28|e5e1 d1e1 e8e1|558|3,1,18,4
4r1k1/1p3p1p/2ppqbpB/8/4P3/1P1P2P1/1PP2Q2/5RK1 w - - 1 26|f2f6 e6f6 f1f6|558|1
r6k/3R2p1/7p/4pp2/4N3/1P3N2/2P2PPP/6K1 b - - 0 24|a8a1 d7d1 a1d1 f3e1 d1e1|559|3,1,15
r4qkr/3b1pb1/pp1p1n2/2pPpPp1/2P1P1P1/P1N2KPR/1P4BQ/7R w - - 0 27|h3h8 g7h8 h2h8|561|7,4
2r2rk1/ppqbbpp1/4p2p/4P3/1PQB2P1/P6P/5P1K/2R2R2 w - - 0 23|c4c7 c8c7 c1c7|561|
r2q1rk1/ppp2ppp/2n5/8/2B1n3/2B3Q1/PPP1KPPP/R3R3 w - - 0 14|g3g7|562|7,6
8/2p1kp2/r1p3p1/2Pp4/3Nn3/1P2R3/5PPP/6K1 b - - 0 35|a6a1 e3e1 a1e1|562|1,4
3r2k1/pp4pp/3q2r1/3Q4/8/6P1/PP2RP1P/3R2K1 b - - 0 24|d6d5 d1d5 d8d5|562|1
6k1/5p1p/6p1/p7/PQ6/6P1/5P1P/6K1 b - - 0 39|a5b4 g1g2 b4b3|562|1
r1b3k1/p5pp/1p3q2/3p4/3PPr2/P1R4P/1P1QB1P1/5R1K b - - 0 27|f4f1 e2f1 f6f1|562|7
r2q1rk1/pp3pp1/2b4p/3p2Nn/1b1P4/2N1B3/PPQ2PPP/2R1R1K1 w - - 0 17|c2h7|563|6
2b4k/5pp1/n2qr2p/3p4/4B3/5N2/PP3PPP/2R3K1 w - - 0 28|c1c8 e6e8 c8e8 d6f8 e8f8|563|15,13
8/5K2/2k5/5P2/3p2P1/8/8/8 b - - 0 58|d4d3 g4g5 d3d2 g5g6 d2d1q|563|0,1,2,11
8/8/2K5/1P3p2/1k2p1p1/6P1/6P1/8 w - - 1 59|b5b6 e4e3 b6b7 e3e2 b7b8q|563|0,1,2,11
5k2/6p1/p1q3Bp/4RK1P/5P2/8/P5P1/8 w - - 0 44|e5e8 c6e8 g6e8|563|1
6k1/3R2p1/7p/2N1b3/8/7P/1r3PP1/6K1 b - - 2 35|b2b1 d7d1 b1d1|564|1,4,13
6k1/p4r2/1p6/1q6/4RpP1/8/P6P/4Q1K1 w - - 1 41|e4e8 b5e8 e1e8|564|1
8/8/2k5/3p2p1/p2P2P1/1K6/8/8 w - - 0 45|b3a4 c6b6 a4b4|564|25,1,2,24
8/8/6P1/8/6k1/8/7b/5K2 w - - 0 73|g6g7 h2e5 g7g8q|564|0,8,1,11
8/5p1k/7p/3b4/4r2B/6P1/1R3P2/6K1 b - - 4 44|e4e1 g1h2 e1h1|565|1,4,16
r3q2k/1bPp2p1/pQp3pp/4r3/7B/2N5/PP3PPP/R3R1K1 b - - 1 21|e5e1 a1e1 e8e1|565|7,4
1k6/1p1q4/p2b1p2/3p4/1P1npP2/P1R1N1P1/1BR3K1/8 w - - 0 34|c3c8 d7c8 c2c8|565|26
4r1k1/R5pp/1p3p2/3P4/8/2P1r3/PP1b1NPP/5R1K b - - 2 26|e3e1 g2g3 e1f1|565|1
k2r1b1r/pp2n1pp/q1n1Bp2/2p5/4PB2/5P2/PPPQ1P1P/2KR3R w - - 2 16|d2d8 c6d8 d1d8 e7c8 d8c8|566|3,15
8/pp2kp1p/n3p1p1/4P3/2P1K1P1/PB5P/1P6/8 b - - 0 36|a6c5 e4e3 c5b3|566|1,18
k7/7p/1pn3pb/1B1pP3/3P3N/8/4KP1P/8 b - - 1 28|c6d4 e2d3 d4b5|566|1,18
8/5pk1/p1R1n3/7p/8/P4K2/1P3P2/8 b - - 4 44|e6d4 f3e4 d4c6|566|1,18
1k6/1pp5/p3p3/4P2p/6QP/1PP5/1P6/1K6 b - - 0 34|h5g4 b1c1 g4g3 c1d2 g3g2|567|0,1
3rr1k1/p4ppp/q7/1p1p4/3R4/1P2Q3/3n1PPP/4R1K1 w - - 0 29|e3e8 d8e8 e1e8|568|3,4
8/7p/R2b1k2/2p1rp2/5K1P/8/P4P2/8 w - - 0 37|a6d6 e5e6 d6e6|568|1,5
3k4/5K2/p4P2/1p4P1/5r2/8/8/8 w - b6 0 51|g5g6 d8d7 g6g7|568|0,1,14
rnbqk2r/ppp2pp1/3p1n1p/2b4Q/2BNP3/8/PPP2PPP/RNB1K2R w KQkq - 2 7|h5f7|569|22,6
4r1k1/6pp/p1pb4/1p1p4/3B4/P5P1/1PPQqP1P/R4K2 w - - 6 24|d2e2 e8e2 f1e2|569|1
2k3r1/pp2R3/1r4p1/1Pp2b2/q4p2/8/1BPPQ2P/2KR4 w - - 4 24|e7e8 g8e8 e2e8|569|26
8/ppkr2pp/2Br3n/8/8/4Q3/PP4PP/2R3K1 b - - 0 27|d6d1 e3e1 d1e1|569|1
3b4/5kpp/2R5/1n6/5P2/5KP1/7P/8 b - - 3 33|b5d4 f3e4 d4c6|569|1,18
8/8/8/3R4/6Pk/5B2/5K2/q7 w - - 0 45|d5h5|570|1,6
r7/5rkn/3R2p1/7p/p3B3/7P/PPP3P1/1K4NR b - - 0 24|f7f1 d6d1 f1d1|570|3,4
8/8/8/3R2K1/1k6/2p5/8/8 b - - 0 61|c3c2 g5f5 c2c1q|570|0,1,11,14
8/5k2/4ppp1/1p1p2Pp/1PpP1P1P/2P2P2/3N3r/R2K4 b - - 4 42|h2h1 d1c2 h1a1|570|1,21
1k6/ppp3pp/7n/4r3/8/1n4K1/PP3RPP/RN1r4 w - - 0 22|f2f8 e5e8 f8e8 d1d8 e8d8|571|3,15
7k/pp4rp/2p2r1p/5p2/1P5q/PB1Qp3/6PP/7K w - - 0 34|d3d8 f6f8 d8f8 g7g8 f8g8|571|1,15
8/8/8/8/5pp1/6Pp/4k2P/7K w - - 0 75|g3f4 e2f3 f4f5|571|1,2
1Q6/8/2r5/p1k5/P5p1/5bP1/1K3P2/8 b - - 0 55|c6b6 b8b6 c5b6|572|1,18
2r1n3/1p3k2/p3pqB1/7Q/P6P/bP2B3/2P2P2/1K5R b - - 0 32|f6g6 h5g6 f7g6|572|
r5k1/1p3pp1/1p1p3p/2pb4/7q/3BQ2P/PPP2Pr1/4RR1K w - - 2 21|e3e8 a8e8 e1e8|573|7,4,13,9
r1b4k/pp2b1pp/2n1p3/2pnP3/7q/5Q2/PPPP2PP/RNB2RK1 w - - 2 13|f3f8 e7f8 f1f8|573|3,4,9
r7/7k/5R2/2P4p/1P5P/4PbP1/3R1P2/6K1 b - - 0 36|a8a1 d2d1 a1d1 g1h2 d1h1|573|1,15,16
2q1r3/5pkp/4rnp1/1p1p4/1P1Q2N1/p1P2PP1/P3R1KP/4R3 b - - 4 30|e6e2 e1e2 e8e2|573|
6k1/p2rr3/1p4p1/5p2/4N2p/4nP1P/R5PK/R7 w - f6 0 42|e4f6 g8f7 f6d7|573|1,18
r4rk1/pp1qbppp/2ppb3/8/3Q4/1P5P/PBP2PP1/R3R1K1 w - - 0 19|d4g7|574|7,6
2b2r1k/6bp/p5p1/2r5/8/1B1p3P/PPP2RP1/2K2R2 w - - 0 28|f2f8 g7f8 f1f8|574|
6k1/1p3p2/6p1/8/3BR3/8/b5K1/1r6 w - - 0 37|e4e8 g8h7 e8h8|575|1,4
k2N4/p5q1/Pp6/1QpP1p1p/2P3p1/8/3PRPPP/R5K1 b - - 0 28|g7a1 b5b1 a1b1 e2e1 b1e1|575|1,5,7,15
6k1/p2r4/8/1n2p3/4Np2/1P6/5PP1/R5K1 w - - 2 33|e4f6 g8f7 f6d7|575|1,18
5Bk1/pppq1p2/8/7N/8/8/P3B2P/4K3 w - - 3 37|h5f6 g8f8 f6d7|575|1,18
8/pRR4p/6pk/8/3P1n2/1B5P/Pr3PP1/5K2 b - - 9 31|b2b1 c7c1 b1c1 b3d1 c1d1|576|1,15
8/1K6/8/Pk1p4/8/8/8/8 w - - 2 68|a5a6 d5d4 a6a7 d4d3 a7a8q|576|0,1,2,11
8/7p/6p1/2KP1p2/2p5/3k2P1/5PP1/8 w - - 1 47|d5d6 c4c3 d6d7 d3e2 d7d8q|576|0,1,2,11
8/8/p7/r3N1p1/3P2P1/4PK2/3k4/8 w - - 6 44|e5c4 d2c3 c4a5|576|1,18
r1bq1rk1/pp2nppB/2nbp3/3p4/3P4/1PP1PNB1/5PPP/RN1QK2R b KQ - 0 10|g8h7 g3d6 d8d6|576|5
3r3k/pppq2pp/2n1bb2/4pp2/2P5/BP2P1P1/P1Q1NPBP/3R2K1 b - - 1 18|d7d1 c2d1 d8d1|576|7
8/8/2k1K3/3p1n2/3P4/5B2/8/8 b - - 3 74|f5d4 e6f6 d4f3|576|1,18
8/5p2/b1p1k1p1/3pP1P1/NK1P4/8/8/8 w - - 9 47|a4c5 e6f5 c5a6|577|1,18
8/6p1/3k1pP1/5P2/2K1n3/5R2/8/8 b - - 10 57|e4d2 c4d3 d2f3|577|1,18
2k1r3/1pp5/p1p3p1/7p/1N1P4/8/PP3p1P/2K2R2 b - - 1 24|e8e1 c1d2 e1f1|577|1
4r1k1/p5b1/p1p2pQ1/6p1/3P1q1p/B1P2N1P/PP3rP1/4RK2 w - - 0 27|f1f2 e8e1 f2e1|577|5
8/2b2n1R/2pk4/p1p5/P1P1K3/1P6/5P2/8 b - - 13 62|f7g5 e4e3 g5h7|578|1,18
4r1qk/ppp4p/8/4rB2/8/P5PQ/1PP2P1P/R5K1 b - - 2 25|e5e1 a1e1 e8e1|578|1
r1b1r2k/2p2Qpp/p7/1p6/3P2n1/1BP1B3/PP2KPP1/RN5q w - - 1 22|f7e8|579|3,5,6
2r5/6PK/5k1P/8/8/p7/8/8 w - - 1 60|g7g8q c8g8 h7g8 a3a2 h6h7|579|0,1,11
8/8/8/5ppk/8/4R1KP/8/8 b - - 0 55|f5f4 g3g2 f4e3|579|1,18,14
8/8/4B3/p1p1K3/2P5/1k6/8/8 b - - 3 46|a5a4 e5d5 a4a3 d5c5 a3a2|579|0,8,1,12
8/p7/1p1kp1p1/n6p/5P2/2P1K3/PR4P1/8 b - - 3 36|a5c4 e3f3 c4b2|579|1,18
8/6p1/2k2p1p/4p3/n3P3/Pp3P2/4K1PP/1R6 b - - 0 40|a4c3 e2d3 c3b1|579|1,18
r3r1k1/pp5p/2p3pB/4Rp2/1q1P1Q2/8/PP3PPP/4R1K1 b - - 1 22|b4e1 e5e1 e8e1|580|3,4,27
5Q2/1Rkr1p2/p3pN2/2p1P3/8/8/P1P2qPP/7K b - - 0 27|c7b7 f8b8 b7b8|580|1,5
8/8/6K1/k7/1p5P/8/8/8 b - - 1 65|b4b3 h4h5 b3b2 h5h6 b2b1q|580|0,1,2,11
8/8/8/3K1P2/8/2pkb1R1/8/8 b - - 0 64|c3c2 g3g4 c2c1q|580|0,1,11
4r1k1/pp4pp/5p2/2Nn3b/Q7/P1PB1P2/1P4PP/4R2K b - - 0 24|e8e1 d3f1 e1f1|581|3,5,4
3rr1k1/pp1q1ppp/2n5/4QP2/1P4P1/P3R3/7P/4R1K1 w - - 3 40|e5e8 d8e8 e3e8 d7e8 e1e8|581|3,15
6k1/5p1p/2r1r3/2P5/3Bp3/1p1nP1P1/2R1K2P/R7 w - - 0 36|a1a8 c6c8 a8c8 e6e8 c8e8|581|1,15,13
1k1r4/1p6/p3p3/5p2/7q/3Q1nr1/PPP3P1/2KR1R2 w - - 0 32|d3d8 h4d8 d1d8|581|
2kr4/pp6/n3b2p/2p2p2/1PP3p1/P7/3RBbPP/3R2K1 w - - 0 29|g1f2 d8d2 d1d2|581|5
2r3k1/p5p1/2p3N1/2Pp4/1n4Pp/5P1P/1PP2B2/5K2 w - - 1 29|g6e7 g8f7 e7c8|581|1,18
1r4k1/pp1Rnppp/8/2p5/2r2P2/6P1/PP5P/3R2K1 w - - 0 24|d7d8 b8d8 d1d8|582|3,1,4
3r4/p2r2kp/Pp1b1pp1/3R4/8/5PBP/5P1K/3R1B2 b - - 0 34|d6g3 f2g3 d7d5|582|20
8/p2r1k2/4p1p1/2Q1K2p/8/8/P5P1/8 b - - 2 47|d7d5 c5d5 e6d5|582|1,18,17
2q3k1/p5pp/8/3NK3/4P3/1P6/P7/8 w - - 1 34|d5e7 g8f7 e7c8|582|1,18
5rk1/4R3/4Pb1Q/p4pp1/Pp2pq2/3b4/5BPP/1R1r2K1 w - - 0 33|b1d1 f4f2 g1f2|582|5
8/8/p6Q/1p6/1P4p1/5pk1/5q2/5B1K b - - 13 54|f2f1|583|1,5,6
8/6r1/p3b1k1/1p1pPpp1/1P1P4/P1rBK3/6R1/6R1 w - - 0 34|g2g5 g6f7 g5g7|583|1
r7/p2b2k1/1ppb1rBp/3p2pP/3P4/2P1RP2/P1PB2K1/4R3 w - - 10 26|e3e7 d6e7 e1e7|583|9
8/2Q2k2/5pp1/p6p/1q1PK2P/5PP1/8/8 b - - 5 46|b4e7 c7e7 f7e7|583|1,19
2rr1k2/1p3pp1/p3pn1p/8/3N4/2P1KP1P/PP1R2P1/3R4 w - - 2 22|d4e6 f7e6 d2d8 c8d8 d1d8|584|20,1
r2q1k2/pp2Rpp1/2p3bp/3p4/3P4/2N1Q2P/PPP2PP1/6K1 b - - 4 22|d8e7 e3e7 f8e7|584|1
1r1r3k/pq4pp/5b2/3R4/Q7/1P2P3/P4PPP/3R2K1 w - - 13 27|d5d8 b8d8 d1d8 f6d8 a4e8|585|3,15
r1bqr1k1/ppp2pbp/6p1/3P4/5p2/2N1Q3/PPP2PPP/R3R1K1 w - - 0 17|e3e8 d8e8 e1e8|585|7
4q1k1/5pp1/2P1r2p/p7/8/5Q2/P5PP/2R4K b - - 0 41|e6e1 f3f1 e1f1|585|1
7r/N2k3p/1p3p2/2P1p3/1PB5/P7/1B4P1/1K3n2 b - - 0 40|f1d2 b1c2 d2c4|585|1,18
rn2r1k1/ppp2ppp/3p4/5b2/3P4/1P1q1N2/P2QBPPP/3RK2R w K - 1 16|d2d3 f5d3 d1d3|586|
8/5p2/7k/8/3r1PKP/4N3/8/8 w - - 0 47|e3f5 h6h7 f5d4|586|1,18
8/5p2/6p1/2k3P1/K1N4P/8/8/8 b - - 0 63|c5c4 h4h5 g6h5|586|1
r1b2r2/pp1kq1pp/2npBn2/2p1p3/4P3/1QP5/PP1P1PPP/RNB1K2R b KQ - 1 10|e7e6 b3e6 d7e6|586|
3R4/2n1P1pk/ppp3b1/3p2K1/3P2PP/P1P5/8/8 b - - 0 39|c7e6|587|1,6
r6r/1pp5/1p4k1/4p3/7B/P1P5/1P2n1PK/R4R2 b - - 6 27|h8h4|587|28,1,5,6
8/3k3p/1P2p1pP/1K2P1P1/pP3p2/P7/8/8 b - - 1 40|f4f3 b5a6 f3f2 a6a7 f2f1q|587|0,1,2,11
8/8/7N/6pP/4B1P1/2k1p3/8/6K1 b - - 1 62|e3e2 e4f3 e2e1q|587|0,1,11
r1bqr1k1/ppb2p1p/5ppB/2pp4/2B5/P1PP3P/4RPP1/1N2R1K1 w - - 0 17|e2e8 d8e8 e1e8|588|18,4
r6r/ppp2kp1/5qQ1/5B2/P1bPP3/2P4R/1P4P1/2B3K1 b - - 0 23|f6g6 f5g6 f7g6|588|
8/8/8/8/5Bp1/5kP1/8/5n1K b - - 15 51|f1g3 f4g3 f3g3|588|1
8/4k3/2p5/3p1pp1/p2P4/P1K1P1P1/1r3P2/8 w - - 0 39|c3b2 c6c5 d4c5|588|1
7r/q3Pp2/7k/1p4p1/p1p1Q2N/1P6/1PPN4/2K3R1 b - - 0 35|a7g1 d2f1 g1f1|588|1,5
8/8/6K1/1p6/7P/2k5/7P/8 b - - 2 47|b5b4 h4h5 b4b3 h5h6 b3b2 g6g7 b2b1q|588|0,1,2,11,12
8/7p/6pk/8/8/1P2qp2/KR3N1P/8 w - - 6 61|f2g4 h6g5 g4e3|588|1,18
r3r2k/ppp3p1/6Bp/3P2q1/2P1Q1b1/8/P4PP1/4R1K1 w - - 0 29|e4e8 a8e8 e1e8|589|4,13
rnb2r2/pp3kpQ/5qB1/2Ppp3/8/B1P5/P4PPP/R4RK1 b - - 2 16|f6g6 h7g6 f7g6|589|
4k1r1/2R2p1p/4p3/K7/8/1p6/5P1P/8 w - - 1 53|c7c8 e8d7 c8g8|589|1,14,21
8/8/2K4p/P5p1/8/7k/8/8 w - - 1 48|a5a6 g5g4 a6a7 g4g3 a7a8q|589|0,1,2,11
5k2/2R5/5p2/5P2/6P1/p1K5/8/r7 b - - 3 45|a1c1 c3b4 c1c7|589|1,14,21
6k1/Rpr2ppp/2p2n2/8/5N2/4KP2/1r4PP/1b6 w - - 0 22|a7a8 c7c8 a8c8 f6e8 c8e8|590|3,1,15
k7/8/p3r3/1p1NP3/3p4/5P2/5K2/8 w - - 2 48|d5c7 a8b7 c7e6|590|1,18
r7/4q1pk/2p3p1/2R2p2/1PQ1p3/4P2P/5PP1/6K1 b - - 1 26|a8a1 c4f1 a1f1|590|1
6k1/2r2p2/1r1qp1p1/8/2Q4p/4PBP1/5P1P/2R3K1 w - - 0 32|c4c7 d6c7 c1c7|590|1
2q3k1/pp2n1pp/2p2p2/3p1N1P/3Pr3/2P1P2Q/PP4P1/5RK1 w - - 5 30|f5e7 e4e7 h3c8|590|20,1,7
8/8/1K1k4/8/PP1P1p2/8/8/8 b - - 0 43|f4f3 a4a5 f3f2 a5a6 f2f1q|590|0,1,2,11
r2q3r/p3Rk1p/2p3p1/3p1p2/3P4/8/PPP1Q1PP/R5K1 b - - 1 17|d8e7 e2e7 f7e7|590|1
6k1/4B3/7p/p3bRpB/8/P6P/r4PP1/6K1 b - - 2 32|a2a1 h5d1 a1d1|591|1,4
8/8/3p4/8/1P5p/2K3kP/8/8 w - - 1 49|b4b5 g3h3 b5b6 h3g2 b6b7 h4h3 b7b8q|591|0,1,2,11,12
8/8/8/3p2PK/p3k3/P4n2/8/8 w - - 1 54|g5g6 d5d4 g6g7 d4d3 g7g8q|591|0,1,10,11
2B5/8/p1p3k1/2P1n1P1/1P2p3/3bB3/1K6/8 b - - 1 52|e5c4 b2c3 c4e3|591|1,18
6k1/pp3ppp/5b2/2R5/2p5/7P/PPP1rPP1/6K1 w - - 0 24|c5c8 f6d8 c8d8 e2e8 d8e8|592|3,1,15
1k6/2p5/1p1p1p2/p7/P2Np2r/2P1P3/5P2/R4K2 b - - 0 34|h4h1 f1g2 h1a1|592|1,21
8/8/8/1P2kp2/2P4p/1r2P3/3K3R/8 b - - 5 52|b3b2 d2c3 b2h2|592|1,14,21
2r3k1/p4ppp/1p2p3/5P1n/1B1PP3/P7/1P4PP/2R1K2R b K - 0 23|c8c1 e1f2 c1h1|592|1,21
3r2k1/p4Q2/4q1p1/1p5p/3pP2P/PPpPb1P1/2P3K1/4RR2 b - - 0 36|e6f7 f1f7 g8f7|592|1
4R3/p2R4/6k1/5p2/8/5pP1/r4P1P/6K1 b - - 0 35|a2a1 d7d1 a1d1 e8e1 d1e1|593|1,15,14
8/8/8/2p5/1kn5/3Qp3/8/3K4 b - - 3 60|c4b2 d1e2 b2d3|593|1,18
3r2k1/1p3b1p/pN4p1/3P1p2/1P1R1P2/P1n3P1/6BP/6K1 b - - 2 31|c3e2 g1f2 e2d4|593|1,18
8/8/4K3/p4P2/1p6/1k6/8/8 w - - 0 59|f5f6 a5a4 f6f7|593|0,1,2
2r3k1/1p5p/p3q1p1/3R1p2/2P1r3/1P3Q2/P5PP/3R3K b - - 5 26|e4e1 f3f1 e1f1|594|1
8/5B2/8/4p3/1p6/1Pn1k1q1/5Q2/5R1K b - - 0 42|g3f2 f1f2 e3f2|594|1
1k3Rrr/1pp5/p2p4/q2Pp3/8/2N5/1P2Q1Np/5R1K b - - 1 41|g8f8 f1f8 h8f8|594|
5k2/5pp1/4p2p/2bpN3/5PP1/3K1P1P/8/8 w - - 2 38|e5d7 f8e7 d7c5|594|1,18
r4rk1/1ppq1p2/pbnp3p/4pb2/2P1N3/1P1P2PP/P3PPBK/R2Q1R2 w - - 0 15|e4f6 g8g7 f6d7|594|18
2Q5/1p2rpp1/p5k1/3p4/P2Pq3/4n2R/6P1/4R1K1 b - - 1 41|e4g2|595|1,6
3q4/2k2p1R/Qpp1b3/8/8/2P5/P5PP/7K b - - 0 38|d8d1 a6f1 d1f1|595|1,4
6k1/r4ppp/4p3/3p4/1P1P4/1Qp1P3/2R2PPP/6K1 b - - 0 33|a7a1 c2c1 a1c1 b3d1 c1d1|595|3,1,15,17
r2q4/pppk2p1/6Bn/5R2/3Bp3/1PN1P1b1/P2P4/R4Q1K b - - 0 17|d8h4 f1h3 h4h3|595|7
7R/8/8/8/8/5Kpp/7k/8 b - - 1 68|g3g2 f3e2 g2g1q|595|0,1,11,14
8/8/p3b3/1k2Pp1p/2p2Pp1/P3K1P1/4N3/8 w - - 4 52|e2d4 b5c5 d4e6|595|1,18
1B6/5kpp/8/pp1K4/6r1/3N4/7P/8 w - - 1 38|d3e5 f7f6 e5g4|595|1,18
8/8/1k3K2/5P2/p7/7P/8/8 b - - 0 54|a4a3 f6e6 a3a2 f5f6 a2a1q|595|0,1,2,11
8/5pp1/4k3/1Q1n4/4K3/8/8/8 b - - 4 60|d5c3 e4f3 c3b5|595|1,18
8/p7/1p2b2P/4n2N/2p5/2P5/PP2K1k1/8 w - - 0 42|h5f4 g2g3 f4e6|596|1,18
8/8/8/4p3/2P5/P7/5k2/3K4 b - - 5 59|e5e4 c4c5 e4e3 d1c2 e3e2 c5c6 e2e1q|596|0,1,2,11,12
8/1N4p1/2K2k2/5p1p/3p4/5P1P/6P1/8 b - - 0 46|d4d3 b7c5 d3d2|596|0,1,10
8/p7/4p3/8/1PK5/P4k2/8/8 b - - 1 46|e6e5 b4b5 e5e4 a3a4 e4e3|596|1,2,12
6k1/2p2rpp/p1q3r1/1p2P3/1B2Pp2/2P5/PP2b1PP/3R1R1K w - - 0 32|d1d8 c6e8 d8e8 f7f8 e8f8|597|7,15
4r1k1/1p1q1pbp/3r2p1/p5N1/P1P1Pp2/1Q5P/1P1R1PP1/3R2K1 b - - 0 28|d6d2 d1d2 d7d2|597|
8/3k4/2p5/1pB2R1P/p1n5/P6r/1PP5/2K5 b - - 0 42|h3h1 c5g1 h1g1 f5f1 g1f1|598|1,15
8/6k1/7p/5ppP/3r4/4NKP1/5P2/8 w - - 0 40|e3f5 g7f6 f5d4|598|1,18
4r1k1/ppp2ppp/2n5/8/4N3/2P4P/bBP2PP1/4R1K1 w - - 2 18|e4f6 g7f6 e1e8|598|20,1
3R4/8/8/5p1p/5P1P/6K1/3pk3/8 b - - 6 64|d2d1q d8d1 e2d1|598|0,1,11
8/8/2k1bp2/1p2p1p1/1P2P1P1/3K1P2/8/5N2 b - - 2 33|e6c4 d3d2 c4f1|598|1,21
8/2b3kp/6p1/pp2ppN1/8/2P2P1P/PP6/2K5 w - - 0 27|g5e6 g7f6 e6c7|599|1,18
1r6/5pk1/6p1/6P1/4P3/3P2P1/PP1K2Q1/8 b - - 0 42|b8b2 d2c3 b2g2|599|1,17,21
8/6p1/4N3/4P3/3P2kp/2K5/8/8 b - - 0 60|h4h3 e6g7 h3h2|599|0,1,10
4r3/ppp2kpp/5p2/8/1PP4P/P6B/3p4/3R2K1 b - - 1 33|e8e1 g1f2 e1d1|599|1
5k1r/5p2/5p2/4p3/4P1PP/2R3K1/8/8 w - - 1 54|c3c8 f8g7 c8h8|599|1,14
8/8/1p2k1n1/p1pp2K1/3P4/2P5/PP6/8 w - - 0 39|g5g6 c5d4 c3d4|599|1
6k1/6rp/p3p1P1/2p1P3/P2pQ3/6PK/1q5P/8 w - - 2 34|e4a8 b2b8 a8b8|600|1,4
8/1bk3p1/5p1p/1p1PpP1P/1Pp1B1P1/2P1K3/8/8 w - - 0 48|d5d6 c7d6 e4b7|600|8,29,20,1
3q2k1/5p2/4p1p1/3r4/p2P4/6P1/2R2PK1/2Q5 w - - 6 36|c2c8 d8c8 c1c8|600|1,23
r4rk1/pp4pp/2nb4/3pp2n/5qPQ/PP1B4/1BP3PP/RN3R1K b - - 0 18|f4f1 d3f1 f8f1|601|3,4
3r2k1/1p3pp1/1qpr3p/3n1B2/1P6/2P2PP1/4QRKP/4R3 w - - 6 29|e2e8 d8e8 e1e8|601|7,4,13,9
5r2/1ppk2pp/p1n5/4p3/8/2NPP1P1/PPP2r1P/2K2R1R b - - 1 19|f2f1 h1f1 f8f1|601|1
6k1/1p1q1rb1/p2P3p/P1pQ1B2/2P2B2/7P/1P3P2/6K1 b - - 0 31|d7f5 d5f5 f7f5|601|1
8/8/8/2R5/3r4/P1K5/6p1/7k w - - 0 53|c5h5 d4h4 h5h4|601|1,14
6k1/5pp1/p7/q3p3/4Q1Pp/1Pr4P/P2R1P2/6K1 b - - 1 31|c3c1 d2d1 c1d1|601|1
8/pp6/3bk1p1/8/1PR2PnP/P1P3P1/6K1/8 b - - 0 36|g4e3 g2f3 e3c4|602|1,18
r4rk1/ppp2pp1/2np3p/8/4Q3/2qB1b2/P1P2PPP/R3R1K1 w - - 0 17|e4h7|603|6
r5k1/1pR3pp/1n5q/pP5r/3B3P/P2PPpP1/5P2/5QRK b - h3 0 27|h5h4 g3h4 h6h4 f1h3 h4h3|603|30,7,15,9
8/1b4p1/1Pk2p1p/1p1p1P2/3K4/6P1/2P3BP/8 w - - 1 35|g2d5 c6b6 d5b7|603|8,1
4r2k/pp2Np1p/b4bp1/8/P7/1P4N1/5PPP/4R1K1 w - - 1 29|e7g6 h7g6 e1e8|603|20,1
8/5ppk/4p2p/p3P2P/P4P2/2q1K1P1/8/3Q4 w - - 2 50|d1d3 c3d3 e3d3|603|1,19
r6r/pN3pk1/5qp1/3Qn2p/2p1PP2/5K1P/P5P1/2R4R w - - 1 25|d5e5 f6e5 f4e5|604|
2r2rk1/p2p1pp1/1p1p1q1p/n3p3/3P4/2PQPb2/PPB2PPP/R3R1K1 w - - 0 16|d3h7|605|6
8/8/3K1p2/5P1p/5k1P/8/8/8 w - - 0 62|d6e6 f4e4 e6f6|605|1,2
3r2k1/1p2Rppp/2p5/q7/2P2Q1N/1P4Pb/P2r1P1P/R5K1 b - - 2 24|d2d1 a1d1 d8d1 e7e1 a5e1|606|7,15
3rk3/3Bpp1p/6p1/pp2r3/6P1/P7/1P5P/R2R2K1 b - - 0 29|d8d7 d1d7 e8d7|606|1
8/1Rrk1p2/6p1/4K1P1/8/8/8/8 w - - 0 62|b7c7 d7c7 e5f6 c7d6 f6f7|606|1,14
4R3/kp6/p6r/8/1P5p/3n3P/P5P1/3R3K b - - 2 41|d3f2 h1h2 f2d1|608|1,18
2r3k1/6pp/2N1pp2/8/P7/7P/4nPPK/R7 w - - 2 36|c6e7 g8f7 e7c8|609|1,18
8/7p/4R1pk/7n/7P/8/6K1/8 b - - 1 46|h5f4 g2g1 f4e6|609|1,18
6k1/pp3pp1/4p2p/2b1N3/2Pq4/6PP/PP2Q1PK/8 b - - 0 25|d4g1|610|1,6
6k1/5pp1/R3p2p/8/1p1p4/3Bb2P/4K1P1/2r5 w - - 0 39|a6a8 c1c8 a8c8|610|1,4,13
3rk3/p3Pp1p/5nr1/4pQ2/4P3/B7/P4P1N/3R3K b - - 0 35|d8d1 h2f1 d1f1|610|5
8/8/p1r4k/1pP4p/3R4/1P6/2K5/8 w - - 1 46|d4d6 c6d6 c5d6 h6g6 d6d7|611|0,1,14
6k1/4qpp1/p2P1n1p/1p2r3/2pQ4/P1N5/1P3PPP/3R2K1 b - - 0 23|e5e1 d1e1 e7e1|612|1,7,4
8/6k1/R5Np/7P/8/KP6/8/7r b - - 0 52|h1a1 a3b4 a1a6|612|1,21
3kr3/pp4pp/2n1p3/1B6/8/8/PP2KPPP/2R5 b - - 1 25|c6d4 e2e3 d4b5|613|1,18
3k3r/p4ppp/4p3/8/2n5/4PP2/P3KP1P/1R6 w - - 2 21|b1b8 d8c7 b8h8|613|1,21
5rk1/p4ppp/1p2p3/1P1P4/1R1PQ3/q7/5PPP/2R3K1 b - - 0 27|a3c1 e4e1 c1e1|614|1,5,4
4k3/pp1r3p/4Bp2/2p2p2/2Pb4/1P6/P4PPP/3R2K1 b - - 1 26|d4f2 g1f2 d7d1|614|20,1
r1q4k/6r1/2p1p1QP/p2pP3/2p2P2/2N5/PPP4P/4b2K w - - 0 32|g6g7|615|1,7,6
1r4k1/2B1bppp/4p1n1/3pP3/P2p1P2/3P2P1/Nr5P/RR4K1 b - - 4 21|b2b1 a1b1 b8b1|615|
3r2k1/6R1/7p/5RN1/7P/p7/P1r3P1/6K1 b - - 0 30|g8g7 g5e6 g7g6|615|1,5
6k1/5p2/7r/PQ1pq3/1P4p1/8/3N3P/5RK1 b - - 0 34|e5h2|616|1,6
8/kp3R1p/p7/3p4/PP1NbK2/2P4P/8/2r5 b - - 2 40|c1f1 f4e5 f1f7|616|1,21
k3r3/1p5p/p7/5Q2/q6P/6P1/5P2/2RRr1K1 w - - 1 42|d1e1 e8e1 c1e1|616|1
k2r4/pppr1p1p/3b1B2/8/8/8/PPP2PPP/3R1RK1 b - - 2 20|d6h2 g1h2 d7d1 f1d1 d8d1|617|20,1
8/5p2/6p1/7p/7P/R7/2k2r2/K7 w - - 0 47|a3a2 c2d3 a2f2|617|1,14,21
4rk2/R5R1/5pp1/pppb4/3p3P/3P2P1/PPP2P2/6K1 b - h3 0 32|e8e1 g1h2 e1h1|618|1,4
1r4k1/R4pp1/br5p/4P3/8/R1P2N2/3N1PPP/6K1 b - - 0 30|b6b1 d2b1 b8b1 f3e1 b1e1|619|3,15,9
3r2k1/5p2/p3p1p1/2p3Qp/2P5/1P3Pb1/P3R1P1/6K1 b - - 0 43|d8d1 e2e1 d1e1|620|1,4
2r3k1/3n2p1/2N1p1P1/8/3p1B2/8/4KP2/8 w - - 2 45|c6e7 g8f8 e7c8|620|1,18
3r4/1p4k1/2p3p1/p3p1N1/1b2P2P/4P3/PPK1B3/8 w - - 5 37|g5e6 g7f6 e6d8|620|1,18
r1bqk2r/pppp1pp1/7p/2bQP3/2B5/2P5/PP3nPP/RNB1K2R w KQkq - 0 9|d5f7|622|22,6
2r3k1/4n2q/4N2p/4p1pP/7N/3p1R2/1P4P1/3K1R2 w - g6 0 39|f3f8 c8f8 f1f8|622|4
6k1/5pp1/4p2p/8/5P2/2B3P1/1P4QK/1rq2B2 b - - 18 47|c1f1 g2f1 b1f1|622|1
2R5/8/8/8/5p2/5P2/2pk2K1/8 b - - 1 67|c2c1q c8c1 d2c1|622|0,1,11
r5k1/1b1r1p1p/p3p1p1/8/4B3/2N1B3/PPP2PPP/3R2K1 b - - 4 22|d7d1 c3d1 b7e4|623|7
1r4k1/p2b1p1p/2pq2p1/3pr3/5Q2/1P1B3P/P1P2PP1/R3R1K1 b - - 3 23|e5e1 a1e1 d6f4|623|20,7
8/1pk3p1/1p6/8/4P3/2r1NP2/5K2/8 w - - 2 44|e3d5 c7d6 d5c3|623|1,18
1r4k1/5ppp/1q2p3/3pP3/8/1PR4P/r4PP1/1RQ3K1 w - - 2 29|c3c8 b6d8 c8d8|624|1
6k1/3q1p2/p2p1Bp1/1p2p3/6r1/P7/1PR5/1KR5 w - - 2 28|c2c8 d7c8 c1c8 g8h7 c8h8|625|1,15,16
4rr1k/1bpp2pp/1pn1pq2/p7/3PP3/P2B2P1/1PPQN2P/2K2R1R b - - 2 19|f6f1 h1f1 f8f1|625|
8/8/p7/P1n1B3/6k1/7p/5K1P/8 b - - 3 48|c5d3 f2e3 d3e5|626|1,18
3r2k1/1p1qbppp/8/2B2P2/4N3/1PP2Q1P/1Pn2PP1/3R2K1 b - - 0 21|d7d1 f3d1 d8d1|627|7
r5k1/3qp1bp/p1npp1p1/1pp1n1B1/4PP2/P1PP4/1P1QNP1P/R4RK1 b - - 0 17|e5f3 g1g2 f3d2|627|18
8/5p2/8/3k4/3PR3/8/4K3/8 b - - 0 69|d5e4 d4d5 e4d5|628|1
8/1N1k2p1/r4p1p/8/6P1/5K1P/5P2/8 w - - 0 50|b7c5 d7d6 c5a6|628|1,18
8/p6p/8/4K3/3qP3/7k/8/8 w - - 0 49|e5d4 h3g4 e4e5|628|25,1,5
r1b2rk1/4bppp/p3p3/1p1q2N1/2p1Q2P/8/PPPB1PP1/1K1R3R w - - 1 19|e4h7|629|7,6
4rk2/5pb1/p5B1/1p2q3/1P1p4/P4Q2/2P2PPP/3R2K1 b - - 0 27|e5e1 d1e1 e8e1|629|3,1,4,9
8/5k2/5p2/3Pp3/rB2P3/6pQ/1R4P1/6K1 b - - 1 41|a4a1 b2b1 a1b1 b4e1 b1e1|629|1,18,15
8/p7/4k3/3p3R/P1p5/1pP5/6PN/7K b - - 0 36|b3b2 h2f3 b2b1q|629|0,1,11
8/2r2p1p/5p2/8/1kp5/r7/PKR2PPP/2R5 w - - 14 38|c2c4 c7c4 c1c4 b4c4 b2a3|629|1,14
3r2kr/R4p1p/6pQ/3q4/8/8/PP3PPP/R5K1 b - - 0 23|d5d1 a1d1 d8d1|630|3,1,4,9
r3r1k1/2p2ppp/pp1b3q/n7/3P2Q1/1P1BP3/PB3PPP/2R2RK1 b - - 6 19|h6h2|631|7,6
1r1q3k/1bp2B1p/p2p2p1/1p6/3b1P2/P3Q2P/1PP3P1/3R2K1 w - - 0 27|e3d4 d8f6 d4f6|631|7,4
7k/6p1/4p2p/6b1/P2p1rP1/3B3P/1RP3K1/4q3 w - - 1 38|b2b8 g5d8 b8d8 f4f8 d8f8|631|1,15,13
2r5/8/4p2p/2k1P1p1/1n3P2/2p3P1/8/2R2BK1 w - - 1 41|c1c3 c5b6 c3c8|631|1,21
8/8/K2kBp2/2pP1P2/8/8/8/8 b - - 0 42|c5c4 a6b7 c4c3 b7c8 c3c2|631|0,8,1,12
8/8/8/PN6/2p5/1kP1pb2/8/4K3 w - - 1 69|b5d4 b3a4 d4f3|631|1,18
8/8/8/K4pp1/1P3k2/8/8/8 w - - 0 53|b4b5 f4e3 b5b6 f5f4 b6b7 f4f3 b7b8q|631|0,1,2,11,12
5r1k/pQ4pp/8/3P4/8/P7/1P3qPP/1R5K b - - 1 26|f2f1 b1f1 f8f1|632|3,1,4,9
8/8/p1K5/P7/k7/8/8/8 w - - 6 81|c6b6 a4b4 b6a6 b4c5 a6b7|632|1,2
5k2/p1r4p/8/5p2/3Np3/P3K3/7P/8 w - - 0 37|d4e6 f8e7 e6c7|632|1,18
8/8/1kB4p/1P3p2/4b2P/6P1/2pK4/8 w - - 3 55|c6e4 c2c1q d2c1|632|8,1
8/1p6/p7/8/3P4/1P3pk1/1P6/5K2 w - - 0 57|d4d5 g3f4 d5d6 f4e5 d6d7|632|0,1,2,12
8/2r4p/4r1p1/p1p1Pk2/P2p1P2/1P3K2/7P/1R4R1 w - - 9 48|g1g5|633|1,6,14
r4rk1/ppp4p/3b1p2/4q3/4P1p1/2B5/PPP1QPPP/R4RK1 b - - 1 16|e5h2|633|7,6
r1b3k1/ppp2p1p/1b4qB/8/2p1r2Q/8/PP3PPP/RN3RK1 w - - 4 16|h4d8 e4e8 d8e8|633|7,4
r7/1p6/5p2/rBkPp1p1/2P2b1p/Rp5P/6P1/R5K1 w - - 0 33|a3a5 a8a5 a1a5|633|1
rnb3k1/pp3ppp/2p5/8/2P5/4rN2/PP2B1PP/2KR3R w - - 0 17|d1d8 e3e8 d8e8|634|3,18,4
7k/5p2/7P/pp1n2P1/4P1K1/8/P1B5/8 b - - 0 37|d5e3 g4f3 e3c2|634|1,18
1r2k1n1/pq6/2n2p2/2N1pP1r/2ppP2P/5N2/PPPRQ3/2K3R1 b - - 1 27|b7b2 c1d1 b2a1|635|3,4
6rk/7p/1R1p3P/8/2p2p2/1bP2B2/1P2P3/2K5 b - - 0 35|g8g1 c1d2 g1d1|635|1,4,16
3r2k1/p2q2pp/2p5/2Bb4/1P3Q2/P7/6PP/5RK1 w - - 2 29|f4f8 d8f8 f1f8|635|1,4,16,9
1r4k1/2p2ppp/p1p5/4r3/1P4Pq/2N2Q1P/P7/5R1K w - - 0 26|f3f7 g8h8 f7f8 b8f8 f1f8|635|3,1,15,9
7k/r6p/2b1pqpP/1p1p1p2/r1pP4/2P3QN/5PP1/1R4K1 w - - 9 45|g3b8 c6e8 b8e8 f6f8 e8f8|635|7,15
3r2k1/3P2pp/p2bP3/1p3K2/8/8/7P/4R3 w - - 3 42|e6e7 d6e7 e1e7|635|0,1
8/R7/2p1rkp1/1p6/1P1P1p2/3K1B2/P7/8 b - - 0 39|e6e3 d3d2 e3f3|635|1,18
7k/2r2p1p/3NpPp1/2r3P1/5P1P/2B5/PPKQ4/6q1 w - - 11 43|d6f7 c7f7 d2d8 f7f8 d8f8|636|31,1,15,9
5k2/5p1p/3N2p1/3P4/2p4P/P7/6K1/8 b - - 0 37|c4c3 d6e4 c3c2|636|0,1,10
8/5k2/8/p2p1K2/P1p5/2P5/8/8 w - - 1 62|f5e5 f7e7 e5d5|636|1,2
5rk1/1p3ppp/p3p3/4P3/Pn1P2P1/5N2/1P3K1P/2R5 b - - 3 25|b4d3 f2e3 d3c1|636|1,18
r5rk/pppb4/1n6/4q1Np/7P/2NB4/PPP5/2KR2R1 w - - 0 23|g5f7|637|32,6
7k/5Rrp/8/2rB4/4P3/5K2/5PP1/b7 w - - 0 30|f7f8 g7g8 f8g8|637|1,4,16
8/8/5p2/2k2rp1/R6p/p1Pp1P1P/P2K1P2/8 w - - 3 45|a4a5 c5d6 a5f5|637|1,14,21
8/8/7K/7P/p2k4/2p3P1/2B5/8 b - - 1 62|a4a3 h6g6 a3a2 h5h6 a2a1q|637|0,8,1,11
3rr1k1/ppp3pp/5p2/1P1q1N2/2N1b1P1/1P5P/1B3R2/R2Q2K1 b - - 0 25|d5d1 a1d1 d8d1|637|7
r1b1kb1r/5ppp/p3p3/1p1pN2q/3P1Pn1/2PB4/PP2Q1PP/R1B2RK1 b kq - 2 13|h5h2|638|7,6
2r3k1/p4pp1/1n1qpnp1/1p1p4/3P4/P1Q1PN1P/1P1N1PP1/2R3K1 w - - 3 20|c3c8 b6c8 c1c8 d6f8 c8f8|638|7
5k2/pb3p1p/1p2B3/3p4/3bnQ2/1P6/P1P3PP/7K b - - 10 29|e4f2 f4f2 d4f2|638|1
8/5k2/p2p1p2/1pp1p2p/4Pn1P/3P2K1/PPP5/6R1 b - - 4 43|f4e2 g3g2 e2g1|638|1,18
2r3k1/p1rB1pp1/7p/8/3N4/P3P1bP/3P2P1/R1R3K1 b - - 0 28|c7c1 a1c1 c8c1|639|4,13
2r3k1/pp3ppp/1q1p4/8/4P3/5Q2/P4RP1/7K w - - 1 30|f3f7 g8h8 f7f8 c8f8 f2f8|639|3,1,15,9
1k2r3/ppp3pp/1r3n2/1N6/P4n1q/4QP1P/5P2/R3R1K1 w - - 1 22|e3e8 f6e8 e1e8 h4d8 e8d8|639|15,26
8/2b5/2P4p/7P/P4p2/5Bpk/4K3/8 b - - 4 53|g3g2 f3g2 h3g2|639|0,8,1
2r3k1/pp4p1/6Np/1P1b4/P3p3/3p3P/3R1PP1/6K1 w - - 2 34|g6e7 g8f7 e7c8|639|1,18
4r2k/ppp3p1/2n4p/5R2/3P4/2P5/PqB3PP/5RK1 w - - 0 24|f5f8 e8f8 f1f8|640|1,4
4r1k1/6p1/p3qpQp/1b1p4/3P2N1/2P5/5PPP/R5K1 b - - 3 25|e6e1 a1e1 e8e1|640|3,1,4,9
8/1p6/1k1p4/1PbPp3/2K1N3/8/8/8 w - - 11 48|e4c5 d6c5 d5d6|640|1
5r2/pp2k3/4p3/6P1/8/1P3PK1/P2B4/8 w - - 1 53|d2b4 e7d7 b4f8|640|1,21
r2q4/pp3p1k/2p1r2p/3pPN1P/1n1P2Q1/8/5PP1/3R1K2 w - - 0 37|g4g7|641|6
3r1rk1/pp2n1p1/5p1p/7P/2P2PR1/6Q1/P2qPPB1/R4K2 b - - 3 28|d2d1 a1d1 d8d1|641|3,4,9
r1b3k1/pp3pbp/3q1np1/3pr3/5B2/1NPB4/PP3PPP/R2QR1K1 b - - 1 14|e5e1 d1e1 d6f4|641|20,7
8/p7/8/3N4/2p5/2p1BPK1/P5PP/1q1k4 w - - 8 46|d5c3 d1c2 c3b1|641|1,18
N5k1/1p4b1/2ppr1pp/1P2p3/3nB3/6Q1/5PPP/6K1 b - - 0 29|d4e2 g1f1 e2g3|641|1,18
r1bqk2r/pppp1ppp/8/4p3/2B1P1n1/5Q2/PPPP2PP/RNB1b2K w kq - 0 10|f3f7|642|22,6
5rk1/5qpn/p1P4p/8/p2N4/P1Q5/1PP2PPP/3R2K1 b - - 3 24|f7f2 g1h1 f2f1 d1f1 f8f1|642|3,1,15,9
5rRk/pp6/2p2r1p/2qppp1P/7b/1BPPPQ1P/PP6/6RK b - - 2 26|f8g8 g1g8 h8g8|642|
8/8/2n5/7p/P2NK1k1/8/8/8 b - - 1 61|c6d4 e4d4 h5h4|642|25,1,10
8/5ppk/4p2p/8/1P6/q2pKP1P/3Q2P1/8 w - - 0 41|d2d3 a3d3 e3d3|642|1,19
r4rk1/1p3ppp/p3b1q1/3N4/2n5/P7/1PP2PPP/R2Q1RK1 w - - 4 19|d5e7 g8h8 e7g6|642|18
5r1k/6pp/pp1Q4/8/2P5/1P2P3/P4qPP/3R1N1K b - - 0 32|f2f1 d1f1 f8f1|643|3,1,4
4k3/4P1p1/1p5p/5p2/p7/2n4P/5PP1/2R3K1 b - - 1 35|c3e2 g1f1 e2c1|643|1,18
8/8/6p1/p1k3B1/Pb1p2P1/1K1P4/8/8 w - - 5 62|g5e7 c5d5 e7b4|644|8,29,1
8/8/5k2/4R3/5KP1/8/8/7r b - - 21 59|h1f1 f4e4 f1e1|644|1,14
8/8/8/6p1/2kN2Pp/7P/3K4/8 b - - 0 55|c4d4 d2e2 d4e4 e2f2 e4f4|644|1,24
2r3k1/1p3n2/p5N1/8/P2b4/2P4P/5PP1/2R3K1 w - - 0 28|g6e7 g8h7 e7c8|645|1,18
r2q1r1k/1Pp1np2/3p4/1Q2p2n/4P3/2PP1N2/5bP1/R3R1K1 w - - 0 24|g1f2 a8a1 e1a1|645|5
1N6/8/4p3/8/6k1/4K1pp/8/6R1 b - - 1 58|h3h2 g1g3 g4g3|645|0,1
2r5/3Qnk1p/3R4/4B2b/Pp2p3/1P2P3/5PPP/6K1 b - - 4 32|c8c1 d6d1 c1d1 d7d1 h5d1|645|1,18
r1r3k1/PK4p1/2N2p2/3pp3/5P2/4P2p/8/R7 w - - 0 45|c6e7 g8f7 e7c8|645|1,18
rn2r1k1/pp2qppp/8/3B4/3P4/PP4Pb/2PQ1R1P/R1B3K1 b - - 0 17|e7e1 d2e1 e8e1 f2f1 e1f1|646|7,15,16
8/p4k2/6p1/8/8/5B2/r1P3PK/8 w - - 0 44|f3d5 f7e7 d5a2|646|1,18
8/5k2/1p2n3/2p2p1p/p2P3P/P4K1P/1P2R3/8 b - - 0 44|e6d4 f3f4 d4e2|646|1,18
8/1p6/2p5/P1P3b1/1Pk4B/4p2P/4K3/8 b - - 0 53|g5h4 a5a6 b7a6|647|8,1,5
8/8/5K2/1P2p3/3k4/8/8/8 w - - 1 59|b5b6 e5e4 b6b7 e4e3 b7b8q|647|0,1,2,11
1rb3k1/1pNr1ppp/p4n2/5B2/8/8/PPP2PPP/2KR3R b - - 3 17|d7d1 h1d1 c8f5|647|20
8/8/5k1P/7K/7R/8/8/6r1 b - - 8 66|g1g5|648|1,33,6,14
7k/7p/5R2/p7/7P/2N2bP1/PPr2P2/6K1 b - - 0 25|c2c1 c3d1 c1d1 g1h2 d1h1|648|1,15,16
5b2/1pp4k/p6P/3pn1Q1/8/2P2BP1/PP5K/8 b - - 0 37|e5f3 h2h3 f3g5|648|1,18
6k1/p5pp/4r3/P2R4/2p3PP/2r1PR2/6K1/8 w - - 0 33|d5d8 e6e8 d8e8|649|1,4,14
6k1/p4ppp/4p3/3r4/8/P1R5/1P2QPqP/4K3 w - - 5 34|c3c8 d5d8 c8d8|649|3,1,4
2B5/2p1kp2/1p5p/8/1r4P1/p1N1KP2/7P/8 w - - 2 39|c3d5 e7d8 d5b4|650|1,18
8/p4Qk1/5qp1/5bN1/8/5P1p/PP6/K5R1 b - - 0 36|f6f7 g5f7 g7f7|650|1
rnb1kb1r/pp3ppp/2p5/8/2Pqn3/3p1NP1/PP1P1PBP/RNBQK2R b KQkq - 2 9|d4f2|651|22,6
2rk1b1r/2p2pp1/b2p2p1/3Pq3/2PQ4/4B3/PP1N1PPP/R4RK1 b - - 2 18|e5h2|651|7,6
8/5k2/3n2p1/3R1nP1/5PK1/8/8/8 b - - 20 57|f5e3 g4f3 e3d5|651|1,18
8/8/P7/8/4p3/2P1K1kR/1P5p/8 b - - 0 46|g3h3 a6a7 h2h1q|651|0,1,5,11
8/8/P7/1K6/1P6/8/3Rkp2/8 b - - 0 55|e2d2 b5b6 f2f1q|651|0,1,11
6r1/p4k2/1pp1p3/4Qp2/3P4/P1P4q/1P1R1Rr1/6K1 w - - 0 39|f2g2 g8g2 d2g2|651|1
rnb1k1nr/ppp2ppp/1q6/2b1p1B1/8/2P2PP1/PP2B2P/RN1QK1NR w KQkq - 3 9|d1d8|652|6
8/3b4/6k1/6pp/pPN5/P7/5K2/8 w - h6 0 46|c4e5 g6f5 e5d7|652|1,18
8/5pq1/7p/5Q2/6Pk/1p5P/3p1P2/6K1 w - - 2 40|f5h5|653|1,6,19
2r3k1/7p/1Rq3p1/3pPp2/5P2/1Q6/1B4PP/7K b - - 0 34|c6c1 b2c1 c8c1 b3d1 c1d1|653|3,1,15,9
6k1/2Rb1ppp/pq1p4/1p2pPP1/4P2P/1P1B4/Pb6/1KR5 w - - 0 30|c7c8 d7c8 c1c8 b6d8 c8d8|653|3,1,15,9
7r/1p4k1/p1p5/3p4/3Pp1p1/1P2P1P1/1P3P2/R4K2 b - - 3 42|h8h1 f1e2 h1a1|653|1,14,21
r3r1k1/1p3pbp/2pq2p1/p7/2PpR3/3Q1B2/PP3PPP/4R1K1 w - - 4 20|e4e8 a8e8 e1e8|653|7
6k1/pp1n2b1/3p2q1/2pPpNPp/2P1P3/1P6/P2Q2P1/6K1 w - - 1 27|f5e7 g8h7 e7g6|654|1,18
6k1/pp3p1p/8/3n1B2/5P2/P6P/1P6/5K2 b - - 0 33|d5e3 f1f2 e3f5|654|1,18
1r3r1k/2p3pp/p1p2n2/2Pp2P1/PP1PpP2/4P3/5R1K/1R3N2 b - - 0 30|f6g4 h2g3 g4f2|654|1,18
5r2/r5k1/4q2p/1p1pP3/p1pP1ppP/P1P2R2/1P3QP1/5RK1 w - - 0 31|f3f4 f8f4 f2f4|654|1
5rk1/p5pp/1p2p3/2r5/4B3/1P2P2Q/P4RPP/6K1 b - - 0 22|c5c1 f2f1 c1f1|655|1,4
3rr1k1/pp1q1ppp/2p5/3bQ3/3PR3/6P1/PP3PBP/4R1K1 w - - 3 25|e5e8 d8e8 e4e8 d7e8 e1e8|655|3,15
5n2/1bp4p/3k4/1P2p1p1/2K1Pp2/1B3P2/5BPP/8 w - - 4 41|f2c5 d6d7 c5f8|655|1,21
8/8/8/p3pp1k/1p6/1P3KPP/P7/8 w - - 2 49|g3g4 f5g4 h3g4|655|1,2
1rb5/3rRkpp/8/p2p4/3N1P2/2P5/PP4PP/4R2K b - - 10 33|d7e7 e1e7 f7e7|655|1
5kr1/1p3p2/p1p1bRBP/2PpP1K1/1P6/8/1P6/8 b - - 0 37|g8g6 f6g6 f7g6|655|1
3r1qrk/pp3p1p/2p1pp2/8/2PP3R/P6Q/1P3PPP/R5K1 w - - 0 24|h4h7|656|1,7,6
8/5k1p/6p1/K3p3/8/2P3P1/1P5P/8 b - - 0 41|e5e4 a5b4 e4e3|656|1,2,12
3qrr2/1pp2pkp/p2p4/3P2Pp/6nP/2N1R3/PPP1Q3/2K1R3 w - - 6 26|e3e8 f8e8 e2e8 d8e8 e1e8|656|
8/8/6p1/1k3r1p/2p4K/PNB5/1P6/8 w - - 0 57|b3d4 b5c5 d4f5|656|1,18
r6k/pp2rQp1/1bpq3p/8/6P1/3B4/PPPK2P1/1R3R2 w - - 3 28|f7f8 a8f8 f1f8|657|7,4,13,9
r1b2k2/1pp2p1Q/p7/3PR3/8/2N4P/PPP3r1/1K6 b - - 0 22|g2g1 e5e1 g1e1 c3d1 e1d1|657|3,1,15
8/pp3kp1/8/1r2pPP1/r3N3/2P1K3/8/4R3 w - - 1 40|e4d6 f7e7 d6b5|657|1,18
3r3k/5p1p/p3q1p1/1pp1pNQ1/4n3/1PP4P/1P3PP1/6K1 w - - 0 28|g5d8 e6e8 d8e8|658|1,7,4
8/1kp2pp1/4p3/1p5p/3P1P2/r1r1P3/2R2KPP/2R5 w - - 0 38|c2c3 a3c3 c1c3|658|1,14
6k1/3r1ppp/3Np3/3nP3/Pp6/5PP1/1PR3KP/8 b - - 2 36|d5e3 g2f2 e3c2|658|1,18
8/8/pp2kp2/2n5/4PKP1/P7/1B6/8 b - - 0 34|c5d3 f4e3 d3b2|658|1,18
r1k5/p1p5/1p6/2p2R2/2P4P/8/2P5/2K5 w - - 0 38|f5f8 c8b7 f8a8|658|1,14
1r3k2/4nppp/4p3/pP2P3/P1R5/1nN3B1/5PPP/5K2 b - - 6 27|b3d2 f1e2 d2c4|658|1,18
3r2k1/pp3p2/6p1/3Br2p/3R3P/6b1/PP4P1/3R3K w - - 1 29|d5f7 g8f7 d4d8|658|20,1
8/1p3k1p/5np1/4p3/1P2P3/1r1B2PP/5K2/3R4 w - - 7 39|d3c4 f7e7 c4b3|658|1,18
4r2k/pp1n1Qpp/8/8/8/2q2N1P/P4PP1/6K1 w - - 0 21|f7e8 d7f8 e8f8|659|1,18,4
8/8/3Q4/1B4np/6pk/2K5/8/8 b - - 0 50|g5e4 c3d4 e4d6|659|1,18
1rbq1r2/4ppkp/p1p2np1/4p3/5P2/2N5/PPPQ2PP/2KR1B1R w - - 0 14|d2d8 f8d8 d1d8|659|
6k1/p4ppp/4p3/3P4/8/1r2Q3/1q3PPP/2R3K1 w - - 1 22|c1c8|660|3,1,6
r1b3k1/1p3ppp/2p5/p3q3/2P1B3/1P4P1/P3P2P/R2R2K1 w - - 0 21|d1d8 e5e8 d8e8|660|1,7,4
4r1k1/5n1p/1p4p1/pP6/P7/2Q3bP/6P1/1N4K1 b - - 2 34|e8e1 c3e1 g3e1|660|1,18
6k1/R3R1p1/7p/1pp4r/3p4/PP1P1bP1/1BP2P2/4K3 b - - 6 34|h5h1 e1d2 h1d1|661|1,4,16
3rr3/1pp2ppk/p4n1p/3N1P2/4P1P1/P6P/1P1R3K/3R4 w - - 1 30|d5f6 g7f6 d2d8 e8d8 d1d8|661|20,1
8/5k2/PR3Pp1/8/8/1K6/8/r7 b - - 0 47|a1b1 b3a4 b1b6|661|1,14,21
7k/8/1p1N3p/2p1b3/3p1p2/1P1P4/2P3KP/8 w - - 2 39|d6f7 h8g7 f7e5|662|1,18
6k1/5pp1/7p/P3p3/1r1b4/1B3P2/6PP/1R3K2 w - - 7 30|b3f7 g8f7 b1b4|662|20,1
4r1k1/pp3pp1/2pq1n1p/3p4/3Pr3/P1PQ2NP/1P3PP1/R3R1K1 b - - 1 20|e4e1 a1e1 e8e1|662|7
8/4kn2/1p3p2/1B3K2/6P1/4P3/8/8 b - - 7 65|f7d6 f5f4 d6b5|662|1,18
5rk1/p1p2qpp/1b6/4B3/4Q3/2P5/P5PP/4R2K b - - 6 30|f7f1 e1f1 f8f1|663|3,1,4,9
r2r2k1/p3qppp/1p2p3/2p5/2PP2n1/P2Q1b2/1PB2PPP/2KR3R w - - 0 19|d3h7 g8f8 h7h8|663|7,4
2k1r3/1pp3pp/p7/3P1p2/2P5/1P2rPb1/P2R2P1/3R1K1Q b - - 1 28|e3e1 d1e1 e8e1|663|1,4,16
7k/p4r1p/1q4p1/3p1N2/4p1b1/8/PP3PPP/2R3K1 w - - 0 30|c1c8 b6d8 c8d8 f7f8 d8f8|663|1,15
7k/7p/1b1P1r1P/5Np1/5p2/q7/r5P1/2R2R1K w - - 0 36|c1c8 b6d8 c8d8 f6f8 d8f8|663|15
r2k1b1r/pppqn1pp/2n5/4p3/4P3/2NP1Q2/PPP3PP/R1B2RK1 w - - 1 12|f3f8 h8f8 f1f8 d7e8 f8e8|663|
7k/2q3p1/7p/8/2B1Qr2/7K/6P1/8 w - - 14 61|e4e8 f4f8 e8f8|663|1
3r4/5R1p/pk4p1/8/b7/6B1/P1p2PPP/2R3K1 b - - 2 31|d8d1 c1d1 c2d1q|664|0,3,1,4,11
r3r3/pp2bp1k/6p1/q1pnB3/8/P2BR3/1P3PPP/R5K1 w - - 0 21|e3h3 e7h4 h3h4 h7g8 h4h8|664|15,16
8/p1k3p1/2Q2p2/5P2/3p1b2/1K1P4/PP4B1/2q5 b - - 0 34|c1c6 g2c6 c7c6|664|1
8/2k4p/4PKpP/8/pbB3P1/8/1P6/3b4 w - - 2 46|e6e7 b4e7 f6e7|664|0,8,1
3r4/1B4kp/p2P1pp1/1bN1p3/8/6PP/5P1K/8 w - - 1 36|c5e6 g7f7 e6d8|664|1,18
r1bq1rk1/pp4pB/3bpp2/3pB3/3P1P2/2P5/PP4PP/R2Q1RK1 b - - 0 15|g8h7 d1h5 h7g8 e5d6 d8d6|664|5
8/1r3p2/1k2p1p1/3p4/P5P1/8/5P1P/R5K1 w - - 7 44|a1b1 b6a7 b1b7|665|1,14
3r4/p1p2pkB/1bp1Rn2/3r2B1/8/2P5/PPQ2PPP/6K1 b - - 0 23|d5d1 c2d1 d8d1 e6e1 d1e1|666|7,15
7k/6p1/pqp1R1Bp/8/1P6/P4r1P/5PPK/3r4 w - - 0 33|e6e8 f3f8 e8f8|667|1,4,13
r3r1k1/ppQ2pp1/4q2p/8/3P3B/P7/3n1PPP/R3R1K1 b - - 2 20|e6e1 a1e1 e8e1|667|3,4
4R3/p1R2p1p/3b1p2/1k1N4/8/7P/Pr3PP1/6K1 b - - 0 27|b2b1 c7c1 b1c1 e8e1 c1e1|667|1,15,13
4r1k1/pp3pbp/2p2np1/3Pr3/3N3P/2P2P2/PP4P1/3QR1K1 b - - 0 21|e5e1 d1e1 e8e1|667|18
5k2/5p1p/1N1n2p1/p3b3/1p1p4/1P1K2P1/P4PBP/8 w - - 6 32|b6d7 f8e7 d7e5|667|1,18
3r2k1/Bp3ppp/3q1n2/P7/2P1p3/1P1r2P1/4QP1P/2RR2K1 b - - 0 23|d3d1 e2d1 d6d1 c1d1 d8d1|667|7
5rk1/p7/1p6/2p5/8/P1Q2q2/1P2KP2/8 w - - 0 40|c3f3 f8f3 e2f3|667|1
8/5p2/p7/6pp/2P5/P2K3k/8/8 w - - 0 50|c4c5 g5g4 c5c6 h3h2 c6c7 g4g3 c7c8q|667|0,1,2,11,12
8/4p3/p1r2k2/1p5R/1P3p1p/2P2P1P/4K3/8 w - - 12 49|h5h6 f6e5 h6c6|668|1,14,21
8/2r5/5p2/1kp2P2/2QpP1p1/KP3p2/2q5/3R3R b - - 12 48|c2c4 b3c4 b5c4|668|1
8/1p4p1/p7/6Pp/P1k4P/1rP1RK2/8/8 b - - 8 52|b3c3 f3f4 c3e3|668|1,14
1R6/2P2r2/3P3k/6p1/6Kp/5P1P/8/8 b - - 0 44|f7f4|669|1,6,14
1B6/1R3Q2/4R1n1/3p2k1/8/8/r1P2PPP/6K1 b - - 0 30|a2a1 b7b1 a1b1 e6e1 b1e1|669|3,1,18,15
8/2N1k1p1/3p3p/8/1r4P1/5K1P/8/8 w - - 1 41|c7d5 e7e6 d5b4|669|1,18
6k1/2pB4/1pPp4/p2n4/6P1/3K4/P7/8 w - - 4 47|d7e6 g8g7 e6d5|670|1,18
3n4/3P3p/1Np3p1/r1P1kp2/7P/4K1P1/p7/R7 w - - 9 57|b6c4 e5e6 c4a5|670|1,18
3b1rk1/npq2pp1/1Q2p1p1/3pP3/2pP4/4B1N1/P3BPPP/1R4K1 b - - 0 24|c7b6 b1b6 d8b6|671|
8/1r1k4/8/P7/8/3K2R1/8/8 b - - 0 59|b7b3 d3d4 b3g3|672|1,14,21
1k6/pp5p/3p1P2/3P4/8/1q6/2p3PP/5R1K w - - 0 31|f6f7 b8c7 f7f8q|672|0,1,11,17
8/1bp2k2/5pp1/PP6/1K6/8/r7/2R5 w - - 1 55|c1c7 f7e6 c7b7|672|1,18
8/6pk/4R1rp/2p3q1/8/1P3P2/P1Q2KPP/8 b - - 5 40|g5g2 f2e3 g2c2|673|1,21
2k2r2/1p3p2/p1p4p/2p3p1/2N1r3/1PP5/1P3KPP/R7 w - - 0 26|c4d6 c8c7 d6e4|673|1,18
8/8/1B6/8/pq2k3/8/3RK1PP/8 w - - 3 47|d2d4 b4d4 b6d4|673|1,18
6k1/6pp/p4n2/1pr5/3R4/2P1Bb2/PP3P1P/6K1 w - - 0 26|d4d8 g8f7 e3c5|673|20,1
r2qnrk1/1bp1bpp1/ppn1p2p/4P3/2pP4/P1NQ1NB1/1P3PPP/RB2R1K1 w - - 0 16|d3h7|674|6
1k6/p3r3/1pK5/2n4R/8/4p3/8/8 w - - 0 53|h5h8 e7e8 h8e8|674|1,4
6r1/p3k3/8/8/8/R3K2P/8/8 b - - 1 58|g8g3 e3d2 g3a3|674|1,14,21
5bk1/1pp2b1p/2p2p2/6p1/p2PR3/P1P3Q1/1r3PPP/6K1 b - - 0 27|b2b1 e4e1 b1e1|675|3,1,4
3r2k1/1p3pp1/p3b2p/5q2/P2P4/1P1Q1N2/5KPP/1B6 w - - 0 30|d3f5 e6f5 b1f5|675|1
8/8/r1k5/2p3p1/6P1/1K1PR3/8/8 w - - 0 57|e3e6 c6d5 e6a6|675|1,14,21
8/ppp3pp/P4b2/k7/6K1/8/6P1/8 w - - 1 46|a6b7 a5b6 b7b8q|675|0,8,1,11
6k1/2R2p2/2p1p1p1/2Pb3p/r2B4/8/1K3P1P/8 w - - 3 35|c7c8 g8h7 c8h8|676|1,4,16
4r3/7p/1Np3p1/1bP5/4Rk2/7P/3N4/4K3 b - - 0 43|e8e4 d2e4 f4e4|676|1
8/8/1R2r1k1/6P1/4rPK1/1P6/6P1/8 w - - 3 62|b6e6 e4e6 f4f5|676|1,14
rnb1k2r/ppp2ppp/3bp3/3pN3/3PnB1q/3BP3/PPPN1PPP/R2QK2R b KQkq - 7 7|h4f2|677|22,6
2k5/p1p2R2/2b1p3/2N4p/4P3/3Pn2P/PPr5/6K1 w - - 0 28|f7f8 c6e8 f8e8|677|1,4
r3r3/1p1b1p1k/p3nBp1/4Pp2/5P2/2N3R1/P1q3PP/5R1K w - - 0 26|g3h3 h7g8 h3h8|677|4,16
6k1/8/p2P3p/1p6/1P3p2/2r5/P3r1PK/3R4 w - - 0 37|d6d7 c3e3 d7d8q|677|0,1,11,14
4k2r/2R1p2p/p4ppB/4n3/8/P5P1/n3PP1P/6K1 w k - 0 25|c7c8 e8d7 c8h8|677|1,21
2qr2k1/pp2bppp/4p3/8/4Q3/1P2P3/PB3PPP/2R3K1 b - - 0 19|c8c1 b2c1 d8d1|678|3,1,4,9
r7/5kp1/1R2b2p/5p2/P1PR1n2/1P3P2/2B4P/6K1 b - - 4 35|f4e2 g1f2 e2d4|678|1,18
2Q5/6p1/6P1/5P1k/1pp2P2/7q/5K2/8 w - - 7 67|c8h8 h5g4 h8h3|678|1,19
r1bqk1r1/1pp1nB1p/5B2/pPb1p3/P3P3/2P5/5PPP/RN1QK2R b KQq - 0 13|e8f7 d1d8 g8d8|678|5
7r/8/2N5/KPk5/8/8/4R3/8 b - - 8 47|h8a8 c6a7 a8a7|679|1,4
8/8/8/5b2/6p1/1k4P1/2NK4/8 w - - 0 74|c2d4 b3c4 d4f5|679|1,18
r7/p1p2kpp/5p2/1PN5/3P4/2n2N2/5PPP/2R3K1 b - - 4 29|c3e2 g1f1 e2c1|679|1,18
2r2rk1/1p2bppp/p3p3/3q4/1P3B2/P4Q2/5PPP/R3R1K1 w - - 0 18|f3d5 e6d5 e1e7|679|
4q3/p4pk1/2p1r1p1/1p1p1pP1/1P1P1P2/P5P1/2Q3K1/2B3R1 b - - 0 36|e6e2 c2e2 e8e2|679|1,18
8/8/pp6/3k4/1Pn1R3/P4K2/8/8 b - - 2 57|c4d2 f3e2 d2e4|679|1,18
1k6/ppp4R/8/3q2N1/3p1bK1/1P1P4/P1P5/8 w - - 0 39|h7h8 d5d8 h8d8|680|3,1,4
5rk1/7p/4pqp1/1Q1p1r2/2nP4/2P3B1/6PP/2R1R2K b - - 0 31|f5f1 e1f1 f6f1 c1f1 f8f1|680|3,15,9
r1b1r1k1/pppp1ppp/8/4n3/8/2P2BP1/P1P1N2P/R1B2RK1 b - - 6 14|e5f3 f1f3 e8e2 f3e3 e2e3|680|20,7
4rrk1/p5p1/1p4qp/2p1p1b1/8/P2P1Rp1/1PPB1Q2/5RK1 w - - 0 29|f3f8 e8f8 f2f8|680|7
4rbk1/5p1p/6p1/p7/P3N3/5P1P/6P1/3R2K1 w - - 2 37|e4f6 g8g7 f6e8|680|1,18
7k/1p2b3/p3P1Q1/3p1P1K/1P6/4q2P/P7/1R3R2 b - - 2 40|e3h3|681|1,6
6r1/2R5/8/1p1qBk1p/3P4/R6P/PP3PP1/6K1 b - - 3 32|d5g2|681|1,6
6k1/p5pp/2n1b3/8/3P1P2/2n3P1/PN5P/2R3K1 b - - 1 26|c3e2 g1f2 e2c1|681|1,18
4r3/2p5/5p1k/pP5p/2pP3P/2P1q1N1/P3p1PK/4Q3 w - - 2 48|g3f5 h6g6 f5e3|682|1,18
r4rk1/2p2pp1/1p1p3p/pB1Pn3/P3P3/2P4P/1B1Q1P2/R5K1 b - - 0 22|e5f3 g1g2 f3d2|682|18
8/5p1p/4k1p1/8/5P2/4P1P1/1P4r1/R1K5 b - - 2 48|g2g1 c1c2 g1a1|682|1,14,21
5rk1/5p1p/6p1/8/pR6/6P1/1n3P1P/4R1K1 b - - 1 35|b2d3 b4a4 d3e1|682|1,18
8/pp4Rp/2k1p3/3pB3/3P4/7P/2q3P1/6K1 w - - 0 28|g7c7 c6b5 c7c2|683|1,21
2r3k1/5pp1/7p/2q5/2r5/2R5/2Q2PPP/2R3K1 w - - 1 37|c3c4 c5c4 c2c4 c8c4 c1c4|683|1
3k3r/3p1p2/p2ppP2/5nP1/3P1P2/2P5/P6P/1R4K1 w - - 1 33|b1b8 d8c7 b8h8|683|1,21
6k1/5p2/6p1/2B1P2p/r2P4/2n4P/5PP1/2R3K1 b - - 2 36|c3e2 g1h2 e2c1|683|1,18
8/8/8/p7/Kp6/1P6/2Pk4/8 b - - 9 65|d2c2 a4a5 c2b3|683|1,2
2rr2k1/5ppp/1p4q1/p2pQ3/3P2b1/1P5P/1P2RPP1/4R1K1 w - - 0 26|e5e8 d8e8 e2e8 c8e8 e1e8|684|3,15,9
2r1R3/p7/3p4/5k2/8/1Q6/PP4PP/7K b - - 0 44|c8c1 b3d1 c1d1 e8e1 d1e1|684|3,1,15,17
1Nk5/4p3/pK1n4/1p1r4/8/2p5/P1P5/5R2 w - - 12 42|f1f8 d6e8 f8e8 d5d8 e8d8|684|1,30
8/5K2/5rP1/8/1p6/8/1k6/8 w - - 0 60|f7f6 b4b3 g6g7 b2c1 g7g8q|684|0,1,11
7k/p4r2/3R3p/1pP1P1bp/1Pb5/5qPP/5K2/3Q4 w - - 0 36|d1f3 f7f3 f2f3|684|1
r1bq3k/pppp3p/5p2/2b1N3/2B1P3/2P5/PP3PPP/R3K2R w KQ - 0 15|e5f7 h8g7 f7d8|684|18
7r/3Pk2r/1p2P3/p4P2/4N1p1/8/PP4P1/3R2K1 b - - 4 47|h7h1 g1f2 h1d1|684|1,21
r4k1N/pp4pp/2p5/6b1/2PR2b1/4P3/PP4PP/RN4K1 b - - 0 19|g5e3 g1h1 e3d4|684|18
2b5/8/1PN5/3p1kpp/P4p2/5K2/7P/8 w - - 4 49|c6e7 f5e6 e7c8|685|1,18
8/8/p1b3k1/1p5p/2N2K2/1P6/P7/8 w - - 0 62|c4e5 g6f6 e5c6|685|1,18
2r1q1k1/2R2Qpp/4p3/p3B3/Pp1Pn3/4P3/5PPP/6K1 b - - 0 31|e8f7 c7c8 f7f8|685|1
8/7k/p2r1ppb/3B4/1P6/8/P7/1K1R4 w - - 0 37|d5g8 h7g8 d1d6|685|20,1
8/1b4k1/2pb2pp/5p1P/3q1P2/2p1N1P1/5QBK/8 w - - 0 39|e3f5 g6f5 f2d4|686|20,1
r3k2r/ppp2p2/5q1p/8/3Pp1pN/2PnP1P1/PP2KPP1/R2Q3R b kq - 4 17|f6f2|687|6
8/8/1k6/1p1BR2p/1n2P1b1/3P4/5K2/8 b - - 0 51|b4d3 f2e3 d3e5|687|1,18
8/1N3k1p/5Pp1/1b1p4/pp6/8/PPPK3P/8 w - - 0 34|b7d6 f7f6 d6b5|687|1,18
8/6p1/6p1/1pk4p/5P2/1K1nP1PP/R7/8 b - - 0 37|d3c1 b3c2 c1a2|688|1,18
2r3k1/p4p1p/1bN1p3/7p/P6P/4P1P1/1P3PK1/R1Br4 w - - 1 24|c6e7 g8f8 e7c8|688|1,18
8/6pp/3k4/p2P3r/3K3P/1P2P1P1/8/3R4 b - - 4 37|h5d5 d4c3 d5d1|688|1,14,21
3r2k1/5p2/3rb1p1/p6p/8/1P1B1PP1/P2RR2P/4K3 b - - 1 38|d6d3 d2d3 d8d3|688|1
1br2rk1/ppq2p1p/2p1pB2/8/3P4/P1P4P/1P2QPP1/R3R1K1 b - - 0 18|c7h2 g1f1 h2h1|689|7,4
2r5/1pR2pkp/4p1p1/1p1p4/3P4/PP1nPPPP/4K3/2R5 b - - 1 32|d3c1 c7c1 c8c1|689|1,27
8/8/6Kp/8/1p4PP/k7/8/8 b - - 2 41|b4b3 g6h6 b3b2 g4g5 b2b1q|689|0,1,2,11
4b3/2q2rRk/2p2r2/1pPp3P/1p1NpP2/P3P1Q1/8/2K3R1 b - - 0 33|f7g7 g3g7 c7g7 g1g7 h7g7|689|
R7/8/1k6/p1p5/8/1r4P1/6PK/8 w - - 2 51|a8b8 b6c6 b8b3|689|1,14,21
1r4k1/7p/3p2pP/1R2p3/2P1P3/p7/1P1q2P1/1K3R2 w - - 0 39|b5b8|690|1,5,6,17
3q3k/1p2r1pp/p3N3/4np2/8/P6P/1P3PP1/3R2K1 w - - 0 26|d1d8 e7e8 d8e8|690|1,4
1k3r2/pp2n3/3r4/3p3p/8/3P4/P2qB1PP/2R2R1K w - - 0 27|f1f8 d6d8 f8d8 e7c8 c1c8|690|15
8/8/6p1/6P1/4K3/6k1/8/8 b - - 4 71|g3g4 e4e3 g4g5|690|1,2
5Q2/2k5/8/2p5/3p1K2/3P4/2r5/8 b - - 0 42|c2f2 f4e5 f2f8|690|1,17,21
2N3k1/p5p1/1p2p2p/4Pr1P/P2p4/1P3b2/1KP5/5R2 w - - 8 30|c8e7 g8h7 e7f5|690|1,18
5k2/p4P2/2p5/8/r6P/2K2R2/2P5/8 b - - 0 38|a4a3 c3b4 a3f3|690|1,14,21
8/1p2r3/p1p5/P1Pp4/3P3p/4k2K/8/3R4 w - - 8 71|d1e1 e3d4 e1e7|691|1,14,21
r4rk1/ppp1q2p/2p1bpp1/4p3/4P2N/1PnPN1QP/P1P2PP1/R4RK1 b - - 4 18|c3e2 g1h2 e2g3|691|18
8/5r2/3p2k1/3PpR2/4P2p/5K1P/8/8 w - - 4 57|f5f7 g6f7 f3g4|691|1,14
2k5/ppp5/2n2p2/7p/2P3pP/P3r1P1/1P2B1P1/3KR3 w - - 1 25|e2g4 h5g4 e1e3|691|20,1
2r5/2P2kpp/5p2/pp6/3n1P2/3R2P1/P6P/2R3K1 b - - 1 39|d4e2 g1f1 e2c1|691|1,18
8/p3rk2/R2K2pp/8/5P2/6P1/P6P/8 b - - 6 37|e7e6 d6c5 e6a6|692|1,14,21
1r3rk1/pQ1n1ppp/1p6/4p3/1bPR1B2/8/PP3PPP/3R2K1 b - - 0 19|b8b7 d4d7 b7d7|692|
8/8/2pK4/2Pp2k1/8/7P/8/8 b - - 1 46|d5d4 d6c6 d4d3 c6b7 d3d2 c5c6 d2d1q|692|0,1,2,11,12
8/5k2/1p4rP/2p3PK/p1P5/8/PP6/8 w - - 3 37|h6h7 g6g5 h5g5|692|0,1,14
2kr3r/p6p/2p4b/2Np1p2/8/5P2/PPP3PP/3R1RK1 b - - 1 20|h6e3 g1h1 e3c5|692|1,18
2r3k1/5ppp/rq2p3/pN1p4/P3n3/1P2PQ1P/2P3P1/R4RK1 w - - 3 20|f3f7 g8h8 f7f8 c8f8 f1f8|693|3,15,9
8/6k1/7R/6pK/2P1P3/3P4/8/1r6 b - - 0 59|b1h1 h5g5 h1h6|693|1,14
5k2/8/1r3p2/6K1/6P1/8/8/5R2 w - - 0 61|f1f6 b6f6 g5f6|693|1,14
8/8/5pp1/2Pk3p/1n5P/2Kp1PP1/8/2R5 b - - 1 52|b4a2 c3d3 a2c1|693|1,18
8/p7/r2k4/6R1/8/8/8/5K2 w - - 0 59|g5g6 d6d5 g6a6|693|1,14,21
r6r/4k3/4p2p/2p1n3/6P1/1BP4P/PP6/4Q1K1 b - - 1 34|e5f3 g1f2 f3e1|693|1,18
6k1/pp3ppp/8/8/3r1q2/P1Q2P1P/1P2rP2/1K4R1 w - - 0 23|c3c8 d4d8 c8d8 e2e8 d8e8|694|1,15
4r3/1q2r1b1/p3R1k1/1p3p2/2p3p1/2P1QP2/PPN3KP/4R3 b - - 0 34|e7e6 e3e6 e8e6|694|
7k/1p5p/2p2P2/5P2/2Pp1N1P/p7/7K/5B2 b - - 0 43|a3a2 f1e2 a2a1q|694|0,1,11
8/4k2p/2p2pp1/2p5/1np5/4B3/P5PP/5K2 w - - 2 33|e3c5 e7d7 c5b4|694|1,18
8/4bk2/R7/5p2/4nP2/3KP3/8/8 b - - 7 48|e4c5 d3d4 c5a6|694|1,18
R7/8/7P/3r4/2k5/6B1/4nPPK/8 b - - 0 51|d5h5 g3h4 h5h4|695|28,1,4
8/8/P7/6k1/8/1R4p1/r5P1/6K1 b - - 3 60|a2a1 b3b1 a1b1|695|1,4,14
6k1/p4pbp/5npB/4p3/2P3b1/1P1Q1q2/P6P/6K1 w - - 2 27|d3d8 f6e8 d8e8 g7f8 e8f8|695|1,15
1k2r3/p4b2/Pqp2p2/2N1pPp1/QP2P1Pp/7r/1R2K3/R7 w - - 0 43|c5d7 b8c7 d7b6|695|18
7k/8/pn3Rpp/8/1K6/8/PP6/8 b - - 3 40|b6d5 b4c4 d5f6|695|1,18
1k2r1r1/ppp4p/3p4/3P1q2/2Q1Rb2/2P3Pb/PP3P1P/4R1K1 w - - 0 24|e4e8 g8e8 e1e8|695|26
1r3rk1/5pp1/4p2p/p3q3/4B3/8/1PP1QPPP/4R1K1 w - - 1 22|e4h7 g8h7 e2e5|696|20,1
8/3kbpp1/2n1p2p/1BPp4/1N1PnB2/4P2P/4KPP1/8 b - - 3 34|e4c3 e2d3 c3b5|696|1,18
8/3r1N2/8/5p2/6pP/3kP1P1/5PK1/8 w - - 9 48|f7e5 d3e4 e5d7|696|1,18
8/p7/2p5/2Pp2k1/4n3/P3P3/Q7/3K4 b - - 0 53|e4c3 d1d2 c3a2|696|1,18
r4r2/pp1q1p1k/2ppb2p/4p1p1/4PnN1/3P3P/PPPQ1PP1/R2B1RK1 w - - 1 19|g4f6 h7g6 f6d7|696|18
5rk1/pQ4pp/5q1B/2R5/8/1P6/P4PPP/2R3K1 b - - 0 27|f6f2 g1h1 f2f1 c1f1 f8f1|697|3,1,15,9
r4rk1/ppq3pp/4bp2/3p4/3P4/P1n1P1P1/2PN1PBP/R1Q2RK1 b - - 4 19|c3e2 g1h1 e2c1|697|18
rr4k1/5pp1/p3p2p/3p4/1qpP4/5QP1/5PBP/RR4K1 b - - 3 24|b4b1 a1b1 b8b1|697|
8/6R1/8/p1kp1p1p/5P2/8/2r1NK2/8 w - - 0 44|g7c7 c5b5 c7c2|697|1,21
1bRr2k1/7p/3N2p1/4Bp2/4p3/4P3/4K1P1/8 b - - 14 44|d8c8 d6c8 b8e5|697|1
8/4k1K1/4rp1P/6p1/6P1/8/5P2/8 w - - 1 47|h6h7 e7d7 h7h8q|697|0,1,11,14
8/8/8/2P2k2/6pK/2r5/6R1/8 b - - 4 60|c3h3|698|1,6,14
6k1/4r3/p3r1p1/P7/6P1/6QP/7K/8 b - - 2 59|e6e2 h2g1 e2e1 g3e1 e7e1|698|1,17
3q4/6kp/1p3Q2/p2b2p1/4N3/P6P/1P3PP1/6K1 b - - 0 29|d8f6 e4f6 g7f6|698|1
6k1/pp6/6q1/2pN1p1p/2Pb1P2/3Pp1P1/PP2Q1K1/8 w - - 1 35|d5e7 g8h7 e7g6|698|1,18
8/4k3/7p/3K2pP/6P1/8/8/8 w - - 1 49|d5e5 e7f7 e5f5|698|1,2,24
r2q1rk1/pb3ppp/1p1bp3/2p5/2P5/2NQ1N2/P4PPP/R1B2RK1 b - - 1 16|d6h2 f3h2 d8d3|698|20,7
8/p3Pk2/1p3P1p/4K3/4p3/P5P1/1P4P1/8 b - - 0 44|e4e3 e7e8q f7e8 e5d4 e3e2|698|0,1,2
8/5p1k/5ppp/3q4/4Nb2/P6P/1P2Q1P1/K7 w - - 0 32|e4f6 h7g7 f6d5|699|1,18
6k1/5p1p/3r1p2/5b2/1N6/8/P1p2PPP/2Q3K1 b - - 0 30|d6d1 c1d1 c2d1q|700|0,3,1,18,4,11
5r1k/pp4pp/2B2q2/2NQ4/8/P7/1P3PPP/2R3K1 b - - 0 26|f6f2 g1h1 f2f1 c1f1 f8f1|700|3,1,15,9
7k/p5rP/1p3n2/5b2/8/1KPR4/P4q2/7R w - - 10 45|d3d8 f6e8 d8e8 g7g8 h7g8q|700|0,34,35,1,30,15,11
4r3/p1p2kn1/1p1p1qB1/8/3P4/2P2PN1/PPQ2P2/5K2 b - - 3 29|f6g6 c2g6 f7g6|700|1
4bk1r/5q2/4p2p/1p1nP3/1PpPBpQR/2P5/7P/4BK2 b - - 1 43|d5e3 f1e2 e3g4|700|18
2q2k2/1p6/p3p3/7Q/2pP4/1P5K/6P1/8 w - - 0 50|h5h8 f8e7 h8c8|700|1,19,21
8/8/5k2/8/8/4K2R/4P3/r7 b - - 1 53|a1a3 e3d4 a3h3|700|1,14,21
5r1k/7p/7p/1Q2p3/4P3/1BPP4/PP5q/1K4R1 b - - 0 33|h2g1 b3d1 g1d1|702|1,4
3r1rk1/pp2Rppp/8/8/8/1P6/P1P2PPP/R1B3K1 b - - 0 17|d8d1 e7e1 d1e1|702|3,1,4
2r2Q2/p3R1B1/1p6/7k/5n2/P7/1P3R1P/7K b - - 0 43|c8c1 e7e1 c1e1 f2f1 e1f1|702|1,15
1r4k1/qRb3p1/2p2pp1/P1p5/2NpP1P1/B2P1P1P/2P5/KR6 b - - 7 34|b8b7 b1b7 a7b7|702|
2rq1rk1/ppbbnp1p/4pp2/6N1/1PN5/P3P3/2Q1BPPP/R3K2R w KQ - 0 15|c2h7|703|7,6
3r2k1/pprR1pp1/4p2p/6q1/4B3/2P5/PP3PPP/3R2K1 w - - 0 24|d7d8 g5d8 d1d8|703|1,7,4
4R3/8/8/5pp1/3p4/5P2/r2k2PP/5K2 w - - 6 44|e8e2 d2d3 e2a2|703|1,14,21
8/7p/4k1p1/2P2p2/8/1p2P1P1/3rKP1P/8 w - - 0 39|e2d2 b3b2 d2c2 b2b1r c2b1|703|1
r5k1/1b2rppp/p4q2/2p5/8/1P6/P1PQ2PP/3RR2K w - - 2 23|d2d8 a8d8 d1d8 e7e8 e1e8|705|3,15,9
6k1/p5p1/1p1Bp2p/2p1P3/2P5/2P4r/R1K5/8 b - - 1 39|h3h2 c2b3 h2a2|705|1
8/8/r7/7R/p1kPKPrP/Bp6/8/8 w - - 7 68|h5c5|707|1,6,16
6k1/5p1p/4pq1P/p1R4r/6p1/4P3/5P2/6K1 w - - 0 37|c5c8 f6d8 c8d8|707|1,4,17
4r1k1/p4p2/2p3p1/2p1rb2/2P4p/1PN5/P2R1PPP/3R2K1 b - - 1 20|e5e1 d1e1 e8e1|708|3,1,4
r3r1k1/p3qppp/2p1p3/2P5/3P4/P6Q/5PPP/RB1b2K1 w - - 0 24|h3h7 g8f8 h7h8|708|7,4
6k1/2q5/R4pKp/6p1/P5P1/4r3/2n5/8 w - - 2 43|a6a8 c7d8 a8d8 e3e8 d8e8|708|1,30,15
3rr3/pp1k4/3b2pp/2pRN3/8/4P2P/PPP3P1/2K4R b - - 2 22|e8e5 d5e5 d6e5|708|1
8/8/7p/K3p1p1/PP4P1/3k3P/1P6/8 b - - 0 48|e5e4 b4b5 e4e3 b5b6 e3e2 a5b5 e2e1q|708|0,1,2,11,12
5rk1/p4ppp/6b1/8/P3Pp2/1PN2P2/5qPP/RQB4K b - - 0 24|f2f1|709|6
6k1/R4p2/6pp/8/3B4/P5PP/r2r1PK1/8 w - - 7 52|a7a8 g8h7 a8h8|709|1,4
4r1k1/p2R1p1p/1p4p1/5p2/1PB2n2/5P2/P1P4P/7K w - - 3 29|c4f7 g8f8 f7e8|709|1,18
2k2r2/2p2p2/R3p3/P2pr3/1P5p/2P2R2/5KPP/8 w - - 1 35|a6a8 c8b7 a8f8|709|1,14,21
4k3/1R6/8/3Pp3/4n3/3K1p2/8/8 b - - 5 70|e4c5 d3e3 c5b7|709|1,18
7R/1pr1nk2/p1p5/N1Pp4/1P3bn1/2N5/1PK5/5R2 b - - 1 30|g4e3 c2b3 e3f1|709|18
r1bqkbnr/pp1pp2p/5p2/8/2Bp4/8/PPPP1PPP/RNBQK2R w KQkq - 0 7|d1h5|710|6
1r6/4kppp/p3p3/N1n5/p7/2P3P1/5P1P/R5K1 w - - 6 27|a5c6 e7d6 c6b8|710|1,18
8/6pp/2N1pp2/3k4/3P4/r1RK4/6PP/8 b - - 9 37|a3c3 d3c3 d5c6|710|1
8/1r2q3/7k/p2p1r1P/8/8/1PP3Q1/1K4R1 w - - 0 35|g2g6|711|1,6
r4rk1/pp3pp1/5n1p/2Qn4/3N2q1/P7/1P3PPP/R1BR2K1 b - - 0 18|g4d1|711|3,5,6
6k1/4rp1p/5Pp1/3P4/8/3q3P/Pr4P1/2R2R1K w - - 0 31|c1c8 e7e8 c8e8|711|1,4,17
k2r4/pp4b1/4pq2/8/2Q2B2/4PP2/PP2K1P1/2R4r w - - 0 29|c4c8 d8c8 c1c8|712|3,4,9
r4r1k/1pp3pB/p1b1p2p/8/2Pq2N1/1P5P/P1Q2RnK/5R2 w - - 2 26|f2f8 a8f8 f1f8|712|7,4
5rk1/6pp/P7/3R4/2n4P/2N5/6K1/8 b - - 0 44|c4e3 g2g3 e3d5|712|1,18
r1b4R/pp6/2p5/4p1k1/4P3/1BP2K2/PP5P/8 b - - 2 30|c8g4 f3e3 a8h8|712|20,1
8/3b3k/p4q1p/1p2rp1P/2pQ2pN/PB6/1PP2PP1/2K4R b - - 0 32|e5e1 h1e1 f6d4|712|20,26
rnb1k1nr/p4ppp/2p5/1p6/4p2q/1P2N1P1/PBPPP3/RN1QKB1R b KQkq - 0 11|h4g3|713|6
5r2/1p4pk/2p2p2/2B5/2P5/P2n3P/3r2P1/R1R3K1 w - - 5 28|c5f8 d3c1 a1c1|713|1
8/8/1q2k3/3p1p1P/6Q1/6P1/r4PK1/8 w - - 0 48|g4g6 e6e7 g6b6|713|1,21
5R2/pp6/2p3Q1/3kb3/3q4/8/PPP3PP/7K b - - 0 35|d4d1 f8f1 d1f1|714|1,4
8/8/8/p1k3r1/R7/4p3/4K3/8 w - - 0 49|a4a5 c5d4 a5g5|714|1,14,21
8/1N3kp1/4pp2/6p1/2b5/7P/5PPK/8 w - - 1 39|b7d6 f7e7 d6c4|714|1,18
8/p3K3/8/1k1P4/2p4p/P6P/8/8 b - - 1 43|c4c3 d5d6 c3c2 d6d7 c2c1q|714|0,1,2,11
4r3/4P2R/1p3kp1/p2p4/8/4K3/PPP5/8 b - - 3 37|e8e7 h7e7 f6e7|715|1,14
5rk1/7p/P1p1p1p1/3p4/3P1R2/q1P2Q1P/P5P1/2r2BK1 w - - 0 25|f4f8 a3f8 f3f8 g8f8 a6a7|715|0,1
8/2k5/4K1R1/4P3/8/2r3p1/8/8 b - - 4 59|c3c6 e6f7 c6g6|717|1,14
r4rk1/ppp3pp/3npq2/4R3/3P4/BQP5/P4PPP/R5K1 b - - 1 17|f6f2 g1h1 f2f1 a1f1 f8f1|718|3,15,9
2r1rk2/ppp2pbp/6p1/8/1nP5/4BP1P/PP3P2/R2K1B1R w - - 2 16|e3c5 f8g8 c5b4|718|18
3r1k2/p1p2p2/2p2q2/6p1/6P1/3P3Q/1rP1B1P1/2K4R w - - 2 27|h3h8 f6h8 h1h8 f8e7 h8d8|718|1
2k5/8/p6p/PpPr1N2/5KP1/2R5/2P5/7r w - - 4 47|f5e7 c8d7 e7d5|718|1,18
8/2p4k/1p1p1bq1/pP1Pp3/P1P4p/5Q2/5PPB/6K1 b - - 1 38|g6b1 f3d1 b1d1|719|3,1,4
4b3/5p2/1k2pPp1/1p1pP1Pp/1P1K1R1P/2P5/6r1/3N4 b - - 9 46|g2d2 d4e3 d2d1|719|1,18
6r1/p2k3r/1pq3p1/3pB1Q1/PR1Pp2p/2P4P/3nNP2/2R3K1 b - - 0 29|d2f3 g1h1 f3g5|719|18
r3k2r/ppp2ppp/2nb1n2/4qb2/4P3/1NN5/PPP1BPPP/R1BQ1RK1 b kq - 0 10|e5h2|720|7,6
8/4n3/8/6KP/8/6k1/8/8 w - - 1 66|h5h6 g3f3 h6h7|720|0,1,10
8/8/r3p1k1/PRP2pP1/3PnP2/4P3/4K3/8 b - - 2 58|e4c3 e2d3 c3b5|720|1,18
8/7p/6p1/p5P1/4k2P/P2n4/4B1K1/8 b - - 1 38|d3f4 g2g1 f4e2|720|1,18
8/6p1/p4p1p/2p2k2/2N1bP2/2K1P1P1/1P5P/8 w - - 6 41|c4d6 f5g4 d6e4|720|29,1
6k1/p2R1Rp1/1p2p1np/8/3K2N1/2r3Pn/P2r3P/8 w - - 2 41|d4c3 d2d7 f7d7|720|5
r4rk1/pp3ppp/2pN4/4P3/5n2/6R1/PPP3PP/2K4R b - - 1 19|f4e2 c1b1 e2g3|721|1,18
4b3/3k4/1p2p2p/3pP3/1P1K4/6P1/4BP2/8 w - - 3 49|e2b5 d7e7 b5e8|721|8,1
1k1r4/1pp2p2/7Q/RR6/1q1pP3/3Pn1P1/1P4BP/6K1 b - - 4 30|b4e1 g2f1 e1f1|722|4
r5k1/5ppp/1pp5/p3Q3/P2P4/2P2q2/1P3P2/4R1K1 w - - 0 27|e5e8 a8e8 e1e8|722|3,1,4,9
2r3k1/1pqnppbp/p2p2p1/3P4/4P3/PPn1Q2P/3BNPP1/1BR3K1 b - - 6 27|c3e2 e3e2 c7c1 d2c1 c8c1|722|20,7
3r1k2/5p1p/p4p2/1p6/2bN4/P4P2/3R1KPP/8 w - - 3 32|d4e6 f7e6 d2d8|722|20,1
8/8/8/7p/5K1P/8/5k2/8 w - - 8 64|f4g5 f2f3 g5h5 f3g3 h5g5|723|25,1,2
r4Nk1/1p3p1p/6p1/3n1b1Q/p7/3P3P/PP3PP1/n5K1 w - - 0 22|h5h7 g8f8 h7h8 f8e7 h8a8|723|1,9,21
1r6/1P1Rprk1/5q1p/2p5/8/2PQR3/P4PPP/6K1 b - - 8 34|f6f2 g1h1 f2f1 d3f1 f7f1|724|3,1,15
8/7r/3k1p1B/3n4/2P1Q3/p7/Pb6/1K6 b - c3 0 43|d5c3 b1c2 c3e4|724|1,18
5B2/np6/p7/k3b3/6P1/4NK2/8/8 w - - 0 39|e3c4 a5a4 c4e5|724|1,18
8/7k/2np1rp1/pp4rp/2p1P2q/P1P2P2/KP1RB1Q1/6R1 w - - 2 37|g2g5 h4g5 g1g5|725|
8/7R/2p3p1/5p2/2r2k2/7P/2P5/6K1 w - - 1 37|h7h4 f4e5 h4c4|725|1,14,21
4k3/7R/p7/2pB4/2P1P3/P5PK/1P6/4q3 b - - 1 43|e1h1 h3g4 h1h7|725|1,21
8/8/p2k3p/1p6/3N3P/1PPp2b1/1P1K4/8 w - - 0 37|d4f5 d6e5 f5g3|726|1,18
4rk1r/p1Q3p1/6qp/8/2P5/8/PB1N1PPP/4nRK1 b - - 2 20|g6g2|727|6
8/4b3/6pp/4pp2/1kp5/2N3PP/3K1P2/8 w - - 4 43|c3d5 b4b5 d5e7|727|1,18
4r1k1/7p/2P2pp1/1N1r4/8/pP4P1/P6P/R6K w - - 1 36|b5c7 d5d6 c7e8|727|1,18
8/8/1p6/3B4/2Pk1p1p/7P/1n1K2P1/8 b - - 3 52|b2c4 d5c4 d4c4|727|1
1r4k1/2q2Qp1/4p2p/3pP3/6PP/P7/1P6/K4R2 b - - 2 36|c7f7 f1f7 g8f7|728|1
1kr5/pq3pbp/3p2p1/2pN3P/P1Q1PP2/3P4/K7/2R4R b - - 1 35|b7b2|729|6
2r3k1/3Q1pp1/1p5p/p1pP4/P1q5/5N1P/5PPB/6K1 b - - 0 31|c4c1 f3e1 c1e1|729|1,4
3rr1k1/ppp2ppp/2n5/6Q1/8/2N5/PP3PPP/3R2K1 b - - 0 17|d8d1 c3d1 e8e1|729|3,1,4
5r1k/p5p1/3Q1q2/3Rp2p/8/2P5/PP3PPP/3R2K1 b - - 0 30|f6f2 g1h1 f2f1 d1f1 f8f1|729|3,1,15,9
4r1nk/3Bq2p/pp1p2p1/2pPr3/2Pb4/1PN3R1/PB1Q2PP/R6K b - - 0 25|e5e1 a1e1 e7e1 d2e1 e8e1|729|3,15
8/p4p1k/6p1/8/1P2q2p/P4N1P/5KP1/8 w - - 0 41|f3g5 h7h6 g5e4|729|1,18
r5k1/6pp/p1R5/4Pp2/1P3P2/4P3/1P3P1r/R4K2 b - - 2 28|h2h1 f1g2 h1a1|730|1,14,21
r1b3k1/ppq3pp/2p1p3/3p4/4n3/1P1PPB1P/PBP3Pb/RN1Q3K b - - 0 17|e4f2|731|6
6k1/p2b1pp1/2Np2qp/2pPp1n1/2P1Pn2/2P2PP1/Q3BB1P/6K1 w - - 3 35|c6e7 g8h7 e7g6|731|18
5r2/4Np1k/p4Kp1/1p1pP3/6r1/5R2/P7/8 w - - 4 40|f3h3 g4h4 h3h4|732|1,4
3r4/6p1/4k3/8/1p1RKPP1/8/8/8 b - - 0 43|d8d4 e4d4 b4b3|732|1,14
8/8/1K3pp1/7p/P4P1P/1p6/1P6/3k4 w - - 0 45|a4a5 d1c1 a5a6 c1b2 a6a7 b2c1 a7a8q|732|0,1,2,11,12
3r4/3rk1Bp/1p1bp3/p7/8/P7/1P1R1PPP/3R2K1 b - - 0 23|d6h2 g1h2 d7d2 d1d2 d8d2|732|20,1
6k1/1p1r3p/p5p1/3N4/5P2/1P3KP1/P6P/8 w - - 1 31|d5f6 g8f7 f6d7|732|1,18
2r5/3k4/p2P1p2/1p1R1p1r/4RP2/2P5/PP6/2K5 b - - 0 28|h5h1 e4e1 h1e1|733|1,14
2r3k1/5ppp/2N1pn2/8/8/1B5P/P2r1PP1/R5K1 w - - 1 27|c6e7 g8f8 e7c8|733|1,18
8/5k2/8/7p/1p2P2P/2r1KP2/1PP5/8 w - - 0 59|b2c3 b4b3 c2b3|733|1
2r3r1/2k1b1P1/p2p3R/1p2p3/3pQ3/1P6/P1P2P2/2K5 b - - 0 38|e7g5 c1d1 g5h6|734|1,18
8/2p3kp/p5p1/2NP1p2/3b3P/6P1/Pr3P2/R5K1 w - - 1 34|c5e6 g7f6 e6d4|735|1,18
6k1/5pp1/2q2n1p/p2p1N2/8/PP1Q2PP/5PK1/8 w - - 9 42|f5e7 g8f8 e7c6|735|1,18
8/4ppkp/2r3p1/p7/2nR4/5P1P/P4PK1/2R5 b - - 1 30|c4e3 f2e3 c6c1|735|20,1
2k1r3/2b2pBp/p6N/1pPb4/6P1/5P2/P3r3/2R1RK2 w - - 5 33|e1e2 e8e2 f1e2|735|
5rk1/1p1n2pb/2p1Nn1p/8/1q6/2N1P1Q1/3P1PPP/r4RK1 w - - 0 19|g3g7|737|7,6
1k6/p1rR1pp1/Ppp2b2/4q3/8/3Q2PB/5P2/6K1 w - - 14 34|d7d8 f6d8 d3d8 c7c8 d8c8|737|1,15,9
4r1k1/1p1n1p1p/p2q4/3Pp1p1/2P2n2/PP3RQ1/1B4PP/5RK1 b - - 3 30|f4e2 g1h1 e2g3|737|18
3r3k/p1N3pp/1p1P4/1r3p2/4p3/4R1P1/1n3PBP/3R2K1 b - - 0 35|b2d1 c7b5 d1e3|737|5
7k/2q2pr1/p2b1N2/1p1p3p/8/P1p4P/1P2RPP1/4R1K1 w - - 0 33|e2e8 d6f8 e8f8 g7g8 f8g8|738|36,1,30,15
R7/6K1/8/1pk3P1/p7/8/2r5/8 w - - 0 48|a8c8 c5b4 c8c2|738|1,14,21
4b3/8/8/1p1p4/1PpPk1N1/2K5/8/8 w - - 10 49|g4f6 e4f5 f6e8|738|1,18
8/2b3N1/5p2/pp1p4/5kP1/1P1K4/P7/8 w - - 6 46|g7e6 f4g4 e6c7|738|1,18
8/1b2pk2/2Np4/1p1P1p2/p2P1p2/P7/1P4K1/8 w - - 1 45|c6d8 f7e8 d8b7|739|1,18
6k1/3N1p2/1pp3p1/p3P3/1n2r2p/7P/1P3PP1/1R4K1 w - - 0 28|d7f6 g8f8 f6e4|739|1,18
4k3/1p5b/2p1PQ2/8/3p1KP1/8/8/7r b - - 0 49|h1f1 f4e5 f1f6|739|1,21
2b2rk1/2q1bppp/3p4/8/N2Q4/1Nn5/2P2PPP/R4RK1 b - - 0 20|c3e2 g1h1 e2d4|740|18
5rk1/1Qp4p/6pB/3p4/7P/3q1N2/PPr2bP1/5RK1 w - - 0 24|f1f2 c2f2 g1f2|740|
r2qr1k1/ppp1bpp1/1n2b2p/8/3pQ3/P1NB3P/1PP2PP1/R4RK1 w - - 0 16|e4h7 g8f8 h7h8|741|7,4
5b2/3k1p2/5K2/1p2P1B1/8/1P6/8/8 b - - 15 46|f8e7 f6f5 e7g5|741|8,1
8/8/4P3/pp6/4rK2/2k5/8/8 w - - 0 47|f4e4 b5b4 e6e7 b4b3 e7e8q|742|0,1,11
8/6p1/4p2p/PQp2k2/8/8/6P1/2q3K1 w - - 1 55|b5f1 c1f1 g1f1|742|1,19
3r4/8/8/6k1/1PKN2p1/6P1/8/8 w - - 2 52|d4e6 g5f6 e6d8|742|1,18
8/8/3p4/1P1Pb2p/4K3/8/P7/6k1 w - - 0 47|b5b6 h5h4 b6b7 h4h3 b7b8q|742|0,8,1,11
8/8/1p4k1/p1n3p1/P1PKp1P1/1P6/8/2B5 b - - 1 45|c5b3 d4d5 b3c1|743|1,18
8/8/8/P4k2/1PR3p1/4b3/2P5/1K6 b - b3 0 39|g4g3 a5a6 g3g2|744|0,1
8/4Q3/3K4/3P4/2r1P1k1/8/8/6q1 w - - 2 64|e7g7 g4f3 g7g1|744|1,21
8/8/1K3p2/6pp/P5k1/1P6/8/8 w - h6 0 48|a4a5 f6f5 a5a6 f5f4 a6a7|744|0,1,2,12
r5k1/p4pp1/1p3q1p/2p5/4BP2/1R4Q1/P1P3PP/7K b - - 0 26|f6a1 b3b1 a1b1 g3e1 b1e1|745|3,1,15
r4rk1/p2b1ppp/2N1p3/3q4/3P4/4P3/5PPP/R2Q1RK1 w - - 3 19|c6e7 g8h8 e7d5|745|18
8/pp6/3k4/5K2/3Pn1p1/PP4P1/3R3P/8 b - - 4 45|e4d2 f5g4 d2b3|746|1,5
8/1K2k3/6p1/P7/3P2pp/8/6P1/8 b - - 0 42|h4h3 g2h3 g4h3|746|1,2
8/8/5pk1/1r6/4P1K1/5P2/8/6R1 b - - 19 62|b5g5 g4f4 g5g1|746|1,14,21
3r4/6kp/6p1/6N1/1p4P1/4P2P/1P5K/8 w - - 4 58|g5e6 g7f6 e6d8|746|1,18
r2qr1k1/ppp1bpp1/3pb2p/8/5P2/P1NQn2P/1PB2P2/2KR3R w - - 0 18|d3h7 g8f8 h7h8|747|7,4
5rk1/4Rpp1/4pn1p/3P4/1q1QN3/4NP2/1B2b1PP/6K1 b - - 0 26|b4e1 e3f1 e1f1|747|4
2r3k1/5ppp/8/p1p5/2Q2RP1/P3PK1P/1q1r4/7R w - - 0 28|c4f7 g8h8 f7f8 c8f8 f4f8|747|3,1,15,9
2N3k1/1p4p1/7p/1Bnqp3/P7/8/1PP5/1KR5 w - - 0 36|c8e7 g8f7 e7d5|747|1,18
8/5ppp/3kp3/2r5/2p5/P1K1P1P1/1P1N1PP1/8 w - - 5 35|d2e4 d6c6 e4c5|747|1,18
8/4n1p1/ppp2k2/3p1P2/PP1P3K/2P1N3/6P1/8 b - - 0 50|e7f5 e3f5 f6f5|747|1,10
8/6pp/8/1pN3b1/6P1/1Pk1p1P1/P3K3/8 w - b6 0 46|c5e4 c3b2 e4g5|747|1,18
r1b2rk1/ppp2ppp/3p4/3q4/P7/3BP2P/1PPQ1PP1/1R2K2R w K - 2 15|d3h7 g8h7 d2d5|747|20,7
3r4/2p5/3b3p/1p2k1p1/p2N4/2P1PB1P/PP2K1P1/8 w - - 2 46|d4c6 e5f6 c6d8|747|1,18
b5k1/5p1p/6p1/pRPn4/3P4/P7/5PPP/4rBK1 w - - 5 30|b5b8 g8g7 b8a8|747|1,18
6k1/5r1p/6pP/3pQ1K1/2bP1P2/8/8/8 b - - 8 50|f7f5 e5f5 g6f5|747|1,18
8/5b2/6k1/2R3P1/5nPp/1P5P/1K6/8 b - - 0 39|f4d3 b2c3 d3c5|747|1,18
rn2k2r/pp2ppbp/3p4/4qP2/6n1/3B4/PPP1N1PP/R1BQ1RK1 b kq - 6 12|e5h2|748|7,6
6k1/6p1/1p5p/p4Q2/4P3/2Pq4/PP1r4/K3R3 b - - 2 40|d2d1 e1d1 d3d1|748|3,1,4
3qr1k1/3N1p2/2p1pPp1/2Np2Pp/1P1P3n/8/3Q1P2/R5K1 b - - 0 25|h4f3 g1g2 f3d2|748|18
8/8/1b3kp1/2N2p1p/7P/5KP1/5P2/8 w - - 3 43|c5d7 f6e6 d7b6|748|1,18
r7/5N2/1R6/4B3/3P1P2/3n2k1/6P1/6K1 b - - 0 42|a8a1 b6b1 a1b1|749|1,4
2k5/pp2K3/7p/5P2/8/2p4P/Pn4P1/8 w - - 0 37|f5f6 c8c7 f6f7|749|0,1,10
r6r/pp1nbkpp/2p1pnq1/8/6P1/P1N4P/1PPBQP2/1R2R1K1 w - - 1 18|e2e6 f7f8 e6e7|749|
8/7p/3N1pb1/6pk/1p6/6K1/2r5/4R3 w - - 4 57|e1h1 c2h2 h1h2|750|1,4
2r3k1/pp3ppp/2r5/5p2/8/8/P1qQ2PP/3R1R1K w - - 0 25|d2d8 c8d8 d1d8|750|3,1,4,9
5r1k/pp3p1p/1q1p1p2/2rP4/2PnBP2/6Q1/PP4PP/R4RK1 b - - 0 21|d4e2 g1h1 e2g3|750|18
8/ppp3pk/7p/P7/1P3P2/2nPR3/5K2/8 b - - 0 33|c3d1 f2f3 d1e3|750|1,18
r1b2Q2/p2k3q/1ppBR2p/2P5/3P4/8/PP3PPP/6K1 b - - 0 28|h7b1 e6e1 b1e1|751|1,4
5r2/5bk1/8/8/2P2R2/R1n5/6PP/6K1 b - - 2 31|c3e2 g1f2 e2f4|751|1,18
8/4kp2/4p3/4Pn2/1pK5/8/P7/3R4 b - - 1 43|f5e3 c4b3 e3d1|751|1,18
6k1/p1p1r1bp/2p5/2N2p2/2P1bB2/1P5P/P5P1/4R2K b - - 0 29|e4g2 h1g2 e7e1|752|20,1
6k1/5p1p/2N3p1/p2r1p2/1p6/1Pn1P1P1/P1R2PKP/8 w - - 6 32|c6e7 g8f8 e7d5|752|1,18
2b2rk1/6pp/4pq2/Q2pN3/3P4/P7/5RPP/R5K1 b - - 0 27|f6f2 g1h1 f2f1 a1f1 f8f1|753|3,15
r5k1/pppb2p1/3pp3/3n1r2/3n4/N5Q1/PPP2PPP/3R1RK1 b - - 5 17|d4e2 g1h1 e2g3|753|18
4r1k1/6pp/ppqP1p2/2p5/4b3/5QB1/PP3PPP/4R1K1 b - - 3 28|e4f3 e1e8 c6e8|753|1
8/8/5kpp/1p6/1P3KPP/8/8/8 w - - 1 48|g4g5 f6e6 g5h6|753|1,2
6k1/ppp5/1b6/3r1Npp/6p1/1P1p2P1/PB1Pn1KP/4R3 w - - 4 30|f5e7 g8f7 e7d5|753|1,18
5qk1/p1n4p/1pb1p1p1/2p1PpP1/5PPQ/P2rP3/1P2K2R/4B3 w - - 0 30|h4h7|754|7,6
1k6/p1pQ1p2/1p3q2/6p1/8/8/P1P2PPP/R5K1 b - - 0 24|f6a1 d7d1 a1d1|754|3,1,5,4
5rk1/pp4pp/5q2/2p5/3P2Q1/2P5/PP3PPP/R5K1 b - - 0 22|f6f2 g1h1 f2f1 a1f1 f8f1|754|3,1,15,9
7r/5k1P/5p1R/p2pn3/2p5/2P1K3/P1P2p2/5R2 b - - 0 41|e5g4 e3d4 g4h6|754|1,18
r4rk1/pb3p1B/5p2/3qp3/8/8/PP1Q1PPP/2R2RK1 b - - 0 17|g8h7 d2d5 b7d5|754|5
4r1k1/ppb2ppp/8/3P1Q2/3qN3/P6P/1P3PP1/R1B3K1 b - - 0 22|d4d1|755|6
2r5/1b4pk/pp2p3/2p1Pp2/2P2QqP/1P1pP3/P5P1/2B2RK1 b - - 1 26|g4g2|755|1,7,6
r5k1/pp2qppp/8/3pr3/6b1/2P3P1/P1Q1BPP1/R3K2R w KQ - 3 18|c2h7 g8f8 h7h8|755|7,4
6k1/p4rpp/1p3n2/2p2q2/P7/1Q2P2P/1P3PP1/3R2K1 w - - 0 26|d1d8 f6e8 d8e8|755|1,4
6k1/p4pp1/1p2rn1p/2p1N3/3n1Q1N/PP1P2P1/5P1P/6K1 b - - 1 29|d4e2 g1g2 e2f4|755|1,18
3r3k/6pp/1n1b4/1B6/P7/4P2P/1P3PP1/3R2K1 b - - 1 27|d6h2 g1h2 d8d1|755|20,1
8/8/1p1nk2B/pP1p4/P2K4/2P5/8/8 b - - 9 58|d6f5 d4d3 f5h6|756|1,18
1r6/6kp/3Pb1p1/ppr1P1N1/5P1P/Pp4P1/5R1K/8 w - - 0 36|g5e6 g7f7 e6c5|756|1,18,5
8/1p6/p1p1kp2/P1P2p2/1P3P2/3K2P1/8/8 b - - 4 50|e6d5 d3e3 d5c4|756|1,2,24
5bk1/1Q3p1p/p2Np1p1/3nP3/P4P2/1P4PP/7K/2q5 w - - 0 32|b7f7 g8h8 f7f8|757|29,1,4
3k3r/pBNnpp1p/6p1/8/8/P7/1b1r1PPP/2R2RK1 w - - 0 20|c7e6 f7e6 c1c8|757|31,4,16,9
2R1r2k/6p1/3p3p/p2Pb3/P4r1q/1P1Q1p1P/5P2/5R1K w - - 2 35|c8e8 f4f8 e8f8|757|5,4
4r1k1/p1b3pp/1p2r3/2p2p2/4N3/2P2PP1/P3RP1P/4R1K1 w - f6 0 24|e4f6 g7f6 e2e6 e8e6 e1e6|757|20,1,7
8/1p5k/p1pp4/8/P1P3P1/1P5P/5KB1/1r6 w - - 1 38|g2e4 h7g7 e4b1|757|1,18
4r1k1/1b3ppp/p2p1q2/1p1Pn3/nP1Q1N2/P5P1/5PBP/2R2RK1 b - - 4 24|e5f3 g2f3 f6d4|757|20
8/p4r1p/3k4/R2p2p1/3Pp1P1/1P5P/P2K4/8 w - - 2 40|a5a6 d6d7 a6a7|758|1,37,14
8/4k3/8/r7/1N1P4/8/2K5/8 w - - 0 50|b4c6 e7f7 c6a5|758|1,18
2r3k1/5pp1/R1N1p2p/8/8/4P3/1b3PPP/6K1 w - - 1 29|c6e7 g8f8 e7c8|758|1,18
r3r1k1/ppp2p1p/5pb1/5q2/3PB3/2N5/PPP2QPP/4R1K1 w - - 1 19|e4f5 e8e1 f2e1|758|
5r1k/1Q4pp/6n1/5q2/8/N1P5/PP3RPP/R5K1 b - - 0 21|f5f2 g1h1 f2f1 a1f1 f8f1|759|3,15
4r1k1/5p2/3P2pb/4Pn2/1P5R/P4Q1P/3B2K1/8 b - - 0 38|f5h4 g2g3 h4f3|759|1,18
4r1k1/pppqrppp/3p4/3Pn3/2P5/1P3NQP/P4PP1/R3R1K1 b - - 4 21|e5f3 g3f3 e7e1 a1e1 e8e1|759|20,7
8/6p1/8/7p/3N2k1/8/2K5/8 b - - 1 75|h5h4 c2d3 h4h3|759|1,10,12
r1bq4/p2n2k1/1ppNprpp/8/3P3Q/P3P3/1PB3PP/R4RK1 b - - 1 24|f6f1 a1f1 d8h4|759|20,7
2r3k1/p4pp1/4p2p/2p1r3/5q2/1P5P/P1QR2P1/3R2K1 w - - 0 30|d2d8 c8d8 d1d8|760|1,4
r1r5/3k4/2q1p1p1/3p3p/p2B4/Q3RP2/PPP3PP/1K2R3 b - - 0 24|c6c2 b1a1 c2c1 e1c1 c8c1|760|3,15,9
2r5/3k2p1/3p3p/3N4/P3Pp2/3P3P/5PP1/6K1 w - - 0 37|d5b6 d7d8 b6c8|760|1,18
8/2r3k1/R1p2ppp/1pN5/1n1P4/7P/5PP1/5K2 w - - 4 43|c5e6 g7f7 e6c7 b4a6 c7a6|760|1,18
6k1/7p/6p1/pB3p2/P7/7P/r3NK2/8 w - f6 0 48|b5c4 g8g7 c4a2|760|1,18
rqb3rk/1p1p2pp/p1n4N/5p2/2P2P2/5R2/PP2B1PP/R5K1 w - - 0 23|h6f7|761|6,38
3r2k1/R4rp1/5n1p/1p3q2/3pp2P/1Q6/5PP1/6K1 w - - 0 33|b3f7 g8h8 f7g7|761|1,4
3R4/P7/6k1/6p1/r7/3pB2p/5P1P/5K2 b - - 0 41|a4a1 e3c1 a1c1|761|1,4
8/8/1N6/pKp5/5k2/1Pr5/8/8 w - - 4 50|b6d5 f4e4 d5c3|761|1,18
5r2/2p2qk1/7p/p1p5/2PpP3/1P1Q2P1/P2K1rRR/8 w - - 1 38|g2f2 f7f2 h2f2|761|1
8/6Rp/5p2/p1k5/p2p3P/K4PP1/2r5/8 w - - 0 34|g7c7 c5d5 c7c2|761|1,14,21
r3k3/q3n2p/p1p1R1pB/3p1r2/8/Q1P5/P1P2PPP/R5K1 b q - 0 20|a7f2 g1h1 f2f1 a1f1 f5f1|762|3,15,9
2r3k1/5ppp/p3pn2/3p4/P4B2/4P3/R1rRNPPP/6K1 b - - 0 25|c2c1 e2c1 c8c1 d2d1 c1d1|762|3,15,9
8/8/8/p7/PkP3p1/1r1R1pP1/8/4K3 w - - 0 52|d3b3 b4b3 c4c5 b3a4 c5c6 a4b5 c6c7|762|0,1,12,14
7k/p4Q2/1p6/6p1/3b4/P4KPP/8/6r1 b - - 4 48|g1f1 f3e4 f1f7|762|1,21
3r2k1/2p2p2/p5p1/1pQ4p/1P5P/4NPPq/PB1PK3/8 b - - 0 32|h3h2 e3g2 h2g2|762|1
2k5/ppp5/4r1p1/8/1P6/P2R3K/2r5/5R2 w - - 0 46|f1f8 e6e8 f8e8|763|1,4,14
8/4k3/7p/3K2pP/6P1/8/8/8 w - - 6 51|d5e5 e7f7 e5f5|763|1,2,24
4r3/8/8/1kp2pK1/1pNn1P1P/3R4/8/8 w - - 3 38|c4d6 b5a4 d6e8|763|1,18
r1bqr1k1/pp1n1pbp/6p1/3Qn3/8/1NP2NP1/PP3PBP/R1B1R1K1 b - - 0 13|e5f3 g2f3 e8e1|763|20,7
8/8/p3K3/1pkpP3/4R3/2P5/1P6/8 b - - 0 52|d5e4 e6f7 e4e3 e5e6 e3e2|764|0,1
r4rk1/p4pp1/1qp1p2p/3pBB2/Pb1P4/1Pn3QP/2PN1PP1/R4RK1 b - - 0 18|c3e2 g1h1 e2g3|764|18
2Q5/8/p4np1/1p4k1/3P1q2/PBP1r3/1P4P1/4R1K1 b - - 3 41|e3e1|765|1,5,6
2rk4/8/3p2q1/3QN3/pp1P4/8/PPP2P2/1K2R3 b - - 2 35|g6c2 b1a1 c2c1 e1c1 c8c1|765|3,1,15,9
5rk1/R4pbp/4p1p1/8/2PN1PN1/3P2P1/5K1P/8 b - - 0 26|g7d4 f2e2 d4a7|765|1,18,5
rn1qk3/pp3p2/2p1p2p/3p1p2/5P1b/1P1PPNr1/PBP1K3/RN1Q1R2 b q - 3 15|g3g2 f1f2 g2f2|765|
1k5r/pp2N1p1/3p3p/1B2np2/3B4/8/PPP2P1P/6K1 b - - 1 22|e5f3 g1g2 f3d4|765|1,18
8/8/P5p1/6P1/1K1kp3/8/8/8 b - - 0 62|e4e3 b4b5 e3e2 a6a7 e2e1q|765|0,1,2,11
8/3Q4/1q2p3/5p2/p1k5/7P/2r2PP1/3R2K1 b - - 3 44|b6f2 g1h2 f2g2|766|1,4
r6k/pb4b1/1p3npp/2p1qp2/2P1pN1P/PQ2P3/1P1rBPPR/1K5R w - - 0 22|f4g6 h8h7 g6e5|766|18
8/8/4p3/6p1/1pK3P1/2p1P3/7R/1k6 b - - 3 45|c3c2 c4b4 c2c1q|766|0,1,11,14
1k4r1/p1p5/1p1p4/3P1K2/8/5Q2/8/8 b - - 8 57|g8f8 f5g4 f8f3|766|1,17,21
8/2rn2kp/3N1pp1/3Pp3/4P1P1/3K3P/8/1R6 w - - 4 39|d6e8 g7f7 e8c7|766|1,18
6k1/3qb1pp/3p4/R2Pn3/2P5/1P3B2/3Q1B1P/6K1 b - - 0 29|e5f3 g1h1 f3d2|767|18
2r2k2/p4pb1/1p2p3/2n1P3/5Q2/1P3B2/P7/4K2R b K - 0 34|c5d3 e1d2 d3f4|767|1,18
1br2rk1/1p2npp1/p3p2p/3P4/5qQ1/2B2N1P/PP3PP1/2RR2K1 w - - 1 21|g4g7|768|7,6
4n3/8/p1p1k2p/1pP1p2P/1P2P1K1/P4N2/8/8 b - - 0 43|e8f6 g4h4 f6e4|768|1,10
7r/ppp1k2p/2n5/8/8/2P2pP1/P6P/R1Br1BK1 w - - 0 21|c1g5 e7e6 a1d1|768|20,1
8/8/p7/1p1pPkp1/P2K1n2/1P5P/8/2B5 b - - 6 42|f4e2 d4d5 e2c1|768|1,18
1r6/8/5Np1/1Bkp1p2/P1p5/5K1P/1P6/8 w - - 0 44|f6d7 c5d4 d7b8|768|1,18
r2q1rk1/5pp1/p2b3p/1ppQ4/8/P4N1P/1PPB1PP1/R4RK1 b - - 0 18|d6h2 g1h2 d8d5|768|20
3r3k/5prp/2n2b2/1p6/3nR2P/1P1BQ3/5PP1/6K1 w - - 4 27|e4e8 d8e8 e3e8|769|
8/1p2R1pk/7p/1B6/P6P/3PKb2/5P2/3r4 b - - 18 51|d1e1 e3f3 e1e7|769|1,21
8/8/3K4/8/4r1k1/3N2P1/7P/8 b - - 1 69|e4d4 d6e7 d4d3|769|1,18
2kr3r/ppp3pp/1bq2p2/4pN2/3PP3/2P1QR2/PP4PP/R5K1 w - - 1 19|f5e7 c8b8 e7c6|769|18
7r/5p2/3kp3/pp1pN1P1/3P4/P1P2KR1/1P5r/8 w - - 0 37|e5f7 d6e7 f7h8|769|1,18
6k1/1Q1R1pp1/2r1p2p/4P3/1P3P2/7P/2q3P1/7K b - - 1 31|c2c1 d7d1 c1d1|769|1
4rrk1/pp1bppb1/2p5/q5NQ/3PpB2/2P1PP2/PP4P1/1R2K3 w - - 0 21|h5h7|770|6
1k5r/ppp1Q3/3p3b/5rp1/3P2qp/2P5/PP1B2PP/4RRK1 w - - 0 26|e7e8 h8e8 e1e8|770|3,4,9
2k1r3/p1p3Qp/4r3/8/7B/2N2RPq/PPP4P/3R2K1 b - - 0 23|e6e1 d1e1 e8e1 f3f1 e1f1|770|39,15
1r6/3K3p/2P3p1/8/6PP/8/k7/8 w - - 1 49|c6c7 b8b4 c7c8q|770|0,1,11,14
5k2/4rp2/p2Q4/1p6/1Pq5/P3R2P/6P1/6K1 b - - 0 35|c4c1 g1h2 c1e3|770|1,18
3q2k1/pp2Rr1p/2p3p1/3p4/5P2/6PP/PP2Q2K/8 w - - 8 33|e7e8 d8e8 e2e8|770|1,18
8/R7/6p1/2k4p/8/8/2r5/4K3 w - - 0 38|a7c7 c5d5 c7c2|770|1,14,21
8/p1k2ppp/1p2p3/8/1P1R1PP1/n1K5/7P/8 b - - 3 42|a3b5 c3d3 b5d4|770|1,18
r3kb1r/p3np1p/5p2/4pq2/3pN3/8/PPP2PPP/R2QK1NR w KQkq - 2 15|e4d6 e8d7 d6f5|770|18
7r/2k3p1/4R3/6r1/4B1n1/3P4/PPP4p/5R1K b - - 0 40|g4f2 f1f2 g5g1|771|31,1,4,9
r6k/p1p3pp/1b1p4/3Qp1q1/2P5/1P5r/P2R1P2/R4K2 w - - 0 29|d5a8 g5d8 a8d8|771|3,5,4
6k1/p5pp/2b5/8/4p3/bP2KR1P/P5Pq/3R4 w - - 0 29|d1d8 c6e8 d8e8 a3f8 f3f8|771|1,15
3k2r1/3r1p2/3b4/1R6/3pP1pP/6P1/3P2PK/1R6 w - - 4 32|b5b8 d6b8 b1b8 d8e7 b8g8|771|1,30,9,21
2R5/1p2qpkp/3p1bp1/8/4r3/Q6P/5PP1/1R4K1 b - - 5 29|e4e1 b1e1 e7e1 g1h2 f6e5|771|1
2r5/pp1n2k1/3bp1p1/5nBp/3PQ3/2P4P/PP6/5R1K b - - 0 30|f5g3 h1g2 g3e4|771|18
1rn1kb1r/3q4/2npb3/p2Np1p1/1pP1PpP1/1P6/P1N1BB1P/R2Q1R1K w k - 1 20|d5f6 e8f7 f6d7|771|18
2Rb4/5kp1/7p/pK3P2/2P1n1P1/7P/8/8 b - - 3 44|e4d6 b5c5 d6c8|771|1,18
7k/ppq3pp/4Qp2/2brp3/2P5/PP6/1B3PPP/6K1 w - - 0 27|e6e8 c5f8 e8f8|772|1,4
4r3/1k4p1/1bp2p1p/5P2/p4RP1/2RP3P/3K4/8 b - - 1 36|b6e3 d2c2 e3f4|772|1,18
2b3k1/5p1p/p5p1/N2pR3/8/6P1/Pr3PKP/8 w - - 0 35|e5e8 g8g7 e8c8|772|1,18
8/R4ppp/4pk2/5n2/P7/2N4P/5rPK/8 w - - 0 36|c3e4 f6g6 e4f2|772|1,18
r2q1rk1/pbp2ppp/1p2p3/8/1P6/5N2/P1QP1PPP/1Bb1R1K1 w - - 0 16|c2h7|773|7,6
r1b3k1/4brp1/p5Qp/3pP3/3P4/2NB4/1q4PP/2R4K w - - 0 25|g6h7 g8f8 h7h8|773|4
1k6/8/5R2/3p3r/3N4/P1r2N2/P4PP1/6K1 b - - 0 34|c3c1 f3e1 c1e1|773|1,4
5r2/6kp/6p1/p1q5/8/PQ6/5PPP/3R2K1 b - - 5 34|c5f2 g1h1 f2f1 d1f1 f8f1|773|3,1,15,9
8/r5kp/P5p1/5p2/8/1R6/1KP4P/8 w - - 3 35|b3b7 a7b7 a6b7|773|0,1,14
3rr1k1/pppq1pp1/2nbb2p/3p1B2/3P4/2P1RN1P/PPQN1PP1/4R1K1 b - - 2 16|e6f5 e3e8 d8e8|773|
r4rk1/pp1b1pp1/2pp2qp/3N4/4PP2/8/PPP3PP/R3QB1K w - - 0 21|d5e7 g8h7 e7g6|773|18
8/8/6k1/5R2/5K2/5PP1/8/2r5 b - - 20 78|c1c4 f4e5 c4c5 e5e4 c5f5|773|1,14
QKR5/1N1k1p2/4p1p1/3pP1Pp/r7/8/8/8 b - - 0 61|a4a8 b8a8 d7c8|773|1
r3k2r/pN3pp1/2pqpn2/6p1/2P5/8/PPP1QPPP/R4RK1 b kq - 0 15|d6h2|774|7,6
6k1/5pp1/2pN3p/5P2/8/P1n5/1r3PPP/2R3K1 b - - 1 22|c3e2 g1f1 e2c1|774|1,18
8/8/5N1p/5p2/8/4rk2/R2K4/8 b - - 2 45|e3e2 d2d3 e2a2|774|1,21
5rk1/p2R2p1/4p2p/4q3/2Q5/3B4/PPP3PP/1K3R2 b - - 0 21|f8f1 d3f1 e5e1 d7d1 e1d1|775|1,15
6k1/1p2q1pp/8/1P2n3/2PQ4/3p2PP/7K/5B2 b - - 1 30|e5f3 h2g2 f3d4|775|1,18
2kr4/pp3ppp/2N1p3/2b5/5n2/8/PPP1R1PP/R1B4K b - - 0 18|d8d1 e2e1 d1e1|776|7,4
2r5/R2QP1bk/p3r1pp/8/8/8/5PPP/5K2 b - - 0 32|c8c1 d7d1 c1d1|776|1,4
6k1/1q3p1p/1p2p1p1/2Rn4/1r6/7P/1Q3PP1/2R3K1 w - - 1 36|c5c8 b7c8 c1c8|776|1,4
8/p2r1k2/1pN1n2p/6p1/PPP2pP1/2B2P1P/2K5/8 w - - 1 47|c6e5 f7e8 e5d7|776|1,18
6k1/2P1Q3/4p1pp/3pN3/3P1q2/8/5BPP/6K1 b - - 0 38|f4c1 f2e1 c1e1|777|1,4
6k1/pQ3ppp/1p2n3/2p3q1/2N1P3/PP3B2/5PP1/5K2 b - - 0 27|g5c1 f3d1 c1d1|777|1,4
r4rk1/ppp3pp/2n2q2/8/3PR3/2P5/P4PPP/R1BQ2K1 b - - 0 16|f6f2 g1h1 f2f1 d1f1 f8f1|777|3,15
1k1r3r/p4ppp/BNpqb3/8/8/4PQ2/P2PNPPP/1R2K2R b K - 0 19|d6d2 e1f1 d2d1 b1d1 d8d1|777|3,15,9
3rr1k1/p3Qpbp/1p4p1/3q2B1/8/7P/PP3PP1/R3R1K1 w - - 1 20|e7e8 d8e8 e1e8|777|7
r2k1b1r/1b1npQp1/1q5p/2p3N1/8/8/PP1P1PPP/R1B1K2R w KQ - 0 17|g5e6 b6e6 f7e6|777|
r4rk1/1b1p1p2/pp2pB1p/4P3/1P2q3/P5PP/R1Q4K/1B6 w - - 1 30|c2e4 b7e4 b1e4|777|
8/7b/4R3/2k5/5P2/7K/8/8 b - - 0 51|h7f5 h3h4 f5e6|778|1,18
rnb2rk1/ppp2pp1/4p2p/8/1b1q1P2/2NB4/PP3PPP/2RQK1NR w K - 0 11|d3h7 g8h7 d1d4|778|20
r1bqkb1r/6pp/p1p3n1/2ppB2Q/7N/1P2P3/P1PP2PP/RN3RK1 b kq - 2 12|d8h4 h5h4 g6h4|778|
2r2k2/3R1P2/2p2K2/8/7p/4r3/p5P1/3R4 w - - 0 44|d7d8 c8d8 d1d8 e3e8 f7e8q|779|0,1,30,15,11,14
rn2kbnr/ppp1qppp/8/4p3/2B1P3/5Q2/PPPP2PP/RNB2RK1 b kq - 1 7|e7c5 g1h1 c5c4|779|18
7r/1kR1r3/pp3q1b/3P3p/Q7/5P2/PP6/K1R2B2 b - - 0 41|e7c7 a4a6 b7b8 c1c7 b8c7|779|
8/R4R1p/6pk/4p3/8/7r/2r5/5K2 w - - 2 47|f7h7 h6g5 h7h3|779|1,14,21
3r2k1/5ppp/2q1p3/1pP1P3/8/1Q6/2R2PPP/6K1 b - - 1 24|d8d1|780|1,6
6k1/R4pb1/3N3p/3P2p1/1P4P1/5p1P/5P1K/2r5 b - - 2 34|g7e5|780|1,6
3r3k/1pp1b1r1/5N1p/p3P3/1nP2P1q/P7/1P1Q2BP/3R3K w - - 1 25|d2d8 e7d8 d1d8 g7g8 d8g8|780|36,30,7,15
1r4k1/p1QR1pp1/2n1r2p/8/8/2R5/P7/K7 b - - 0 25|e6e1 d7d1 e1d1 c3c1 d1c1|780|1,15
8/p1Q5/1p4p1/k2pP3/2q5/P7/5P1P/5K2 w - - 11 42|c7c4 d5c4 e5e6 a5b5 e6e7|780|0,1,19
6k1/5p1p/1R4p1/8/1p6/2b2P2/6PP/6K1 b - - 1 37|c3d4 g1f1 d4b6|780|1,18
6k1/1p3pp1/q3p2p/4P3/4b3/1PQ3P1/1B3bBP/7K w - - 4 28|c3c8 g8h7 g2e4|780|1
8/8/4R3/2P2p2/1K3k2/4r3/8/8 w - - 3 43|e6e3 f4e3 c5c6 f5f4 c6c7 f4f3 c7c8q|780|0,1,11,14
8/5N1n/4p3/3p4/3P1K2/7k/5P2/8 w - - 2 44|f7g5 h7g5 f4g5|780|1,10
2r5/3kb1pp/5p2/4p3/PpNp4/1P3KPP/6P1/3R4 w - - 8 37|c4b6 d7d8 b6c8|780|1,18
r3r1k1/pp3p1p/1q4pB/5b2/4N3/5P1P/PbP1Q1P1/4RR1K w - - 0 23|e4f6 b2f6 e2e8 a8e8 e1e8|781|20,7,15,13,9
8/p4k1p/3KR1p1/5p2/1P5P/2P5/r7/2B5 b - - 0 43|a2a6 d6d5 a6e6|781|1
8/7p/3n2pP/3kBpP1/5P2/4K3/8/8 b - - 2 48|d6c4 e3d3 c4e5|781|1
8/8/4k1pp/1N1rpp2/3b4/5PP1/4P2P/3R1K2 w - - 11 40|b5c7 e6d7 c7d5|782|1,18
3R2nk/p6p/6p1/1P1B4/6P1/8/8/4qrQK w - - 8 37|d8g8|783|1,6,16
r1b2k2/1p3ppp/p4n2/8/8/P1N3P1/1qP2PBP/3RR1K1 w - - 0 21|d1d8 f6e8 e1e8|783|4
2r1b2Q/pp2kpp1/4p3/3P3p/8/q6P/5PP1/1BR1R1K1 b - - 0 32|c8c1 e1c1 a3c1|783|
2r5/p4pk1/q4rp1/2pQP2p/Pp5P/1B6/1PP5/2K2RR1 b - - 0 30|f6f1 g1f1 a6f1|784|
2b2r2/p3Q1kp/1q3pp1/8/1r1p4/1P3P2/P3BKPP/R6R b - - 1 21|f8f7 e7f7 g7f7|784|25
1k4r1/4R3/2R5/4P1n1/8/7P/7K/8 b - - 3 47|g5f3 h2h1 g8g1|785|36,1,4
4r3/6pk/1p5p/pN2p3/4nn2/P3Q2P/1PP2PP1/4K3 b - - 0 26|f4g2 e1e2 g2e3|785|1,18
6k1/4bp2/bn2p2Q/p2pP1N1/2pP4/2P4P/5PPK/2q5 w - - 0 33|h6h7 g8f8 h7f7|786|1,4
r5k1/1p3ppp/p1p5/3n4/6q1/P5P1/1PP1rQ2/5RK1 w - - 0 24|f2f7 g8h8 f7f8 a8f8 f1f8|786|3,1,15,9
r3k2r/pbppqppp/1p2pn2/8/2Pn4/P4NP1/1P1NPPBP/R2Q1RK1 w kq - 0 10|f3d4 b7g2 g1g2|786|5
1r4k1/p4pbp/4p1p1/q1rp1b2/3P4/1B2B1Q1/PP3PPP/5RK1 w - - 0 21|g3b8 c5c8 b8c8|786|5
1r1q2k1/pp2rp2/2pb1Qpp/8/3P4/2PB1N2/PP3PPP/R3RK2 b - - 1 20|e7e1 a1e1 d8f6|786|20
3k4/8/8/2PP4/3K3R/r7/8/8 b - - 0 52|a3a4 d4e5 a4h4|786|1,14,21
rq3rk1/pp1b1ppp/3b1n2/2p1Q3/5B2/2N2P2/PPP1B1PP/R4RK1 w - - 0 17|e5d6 b8d6 f4d6|786|
2rr2k1/5pp1/7p/5qP1/1bN1R2P/pP6/P1Q5/1K5R w - - 0 31|e4e8 d8e8 c2f5|786|20
1R6/7p/6k1/8/1K6/1P4r1/P1b5/8 w - - 0 42|b8g8 g6f5 g8g3|786|1,21
8/3k1p2/8/3PP2p/7r/1R1K3P/8/8 b - - 0 52|h4h3 d3c2 h3b3|786|1,14
7k/p1p1q1p1/7p/8/3Q4/P3Pp2/1P3P1P/4RRK1 b - - 0 24|e7g5 d4g4 g5g4 g1h1 g4g2|787|1,15
6r1/pN3k2/2p2p2/3p4/3Pq3/2P5/PP1Q1KP1/8 w - - 3 39|b7d6 f7g6 d6e4|787|1,18
r3r1k1/pp1q1p1p/2p3pB/2Rn4/3P4/5Q2/PP3PPP/4R1K1 b - - 5 23|e8e1|788|3,5,6
6k1/pb2q1pp/1p2p3/2p1N2r/2Pp1P1r/3P2QP/PP3RP1/4R2K b - - 0 27|h4h3 g3h3 h5h3|788|7,23
r2r4/1p3k2/1p2bpp1/3p3p/P2P3P/BPR3P1/5P2/4R1K1 w - - 4 35|c3c7 d8d7 c7d7 e6d7 e1e7|788|1
r4rk1/pp2qp2/1n3b1p/2p1p1N1/2P5/4P1B1/PPQ1bPPP/2RR2K1 w - - 0 18|c2h7|789|6
8/2p5/1k6/pp2n3/6pR/P5PP/5P2/6K1 b - - 0 36|e5f3 g1g2 f3h4|789|1,18
2rqr1k1/2p3pp/pp2b3/3Pp3/2P3n1/BPN3P1/P2KNRBP/5R2 w - - 3 20|f2f8 e8f8 f1f8 d8f8 a3f8|789|18
4r3/p4pkp/1p3p2/3Nn3/2P4P/1P4P1/P1b2PB1/4R1K1 b - - 4 25|e5f3 g2f3 e8e1|789|20,1
r2qr1k1/5ppp/3p4/p2P4/2P1BP2/2b5/4R1PP/3QR1K1 w - - 1 23|e4h7 g8f8 e2e8 d8e8 e1e8|789|20,18
7r/p2k1ppp/3Pp3/3p4/3N2PP/P1nPP3/5r2/K1R4R b - - 2 23|f2a2|790|36,1,6
4r1k1/5ppp/R7/3p1N2/3Pn3/1P6/P4PPP/5K2 b - - 0 27|e4d2 f1g1 e8e1|790|3,1,4
r5kb/p1q2p1p/1p4pB/2p5/2b1N3/5P1P/PP2R1P1/4Q1K1 w - - 4 28|e4f6 h8f6 e2e8 a8e8 e1e8|790|31,7,15,9
3R4/6pp/2k1p3/5p2/5P2/5K2/2r3PP/8 w - f6 0 38|d8c8 c6d5 c8c2|790|1,14,21
6k1/1r2Qppp/p7/3p1q2/4bP2/4PN2/P5PP/6K1 w - - 0 40|e7e8|791|1,6
6k1/p2q1pp1/2r1pb1p/1p6/1P6/P1Q1P2P/1B3PP1/2R3K1 w - - 0 26|c3c6 d7c6 c1c6|791|1
1r3r2/p1p1q2p/1p2N2k/5pp1/1P1Q4/P1n3P1/1BP1PP1P/R4RK1 b - - 0 24|c3e2 g1g2 e2d4|791|18
6k1/3R4/p7/1p2p1p1/1Pb1Pn1b/P1R2P2/7P/6K1 b - - 1 40|f4e2 g1g2 e2c3|792|1,18
4r1k1/pp3p2/5Pp1/3pP3/3Pn3/P1BK4/1P6/7R b - - 8 43|e4f2 d3e3 f2h1|792|1,18
8/2p2p1p/8/8/1k3PP1/2R4P/1pK5/8 b - - 2 48|b2b1q c2b1 b4c3|792|0,29,1,11
2n5/2p5/1pP2kBp/pP1K3P/P7/8/8/8 b - - 7 57|c8e7 d5d4 e7g6|792|1
8/8/8/p1p5/1k6/1n1K4/R7/8 b - - 1 58|b3c1 d3d2 c1a2|793|1,18
1r5k/6pp/1p4p1/p3N1P1/Pn1P1P2/4P1nP/6B1/2R3K1 b - - 2 29|g3e2 g1f2 e2c1|793|1,18
8/5ppp/3kp3/8/4K1PP/r3N3/5P2/8 w - - 1 39|e3c4 d6e7 c4a3|793|1,18
4k3/p4ppb/2PBp2p/3r4/8/7P/5PP1/2R3K1 w - - 1 38|c6c7 d5d6 c7c8q|793|0,1,11
1r3rkb/1p1q1p1p/p2ppPp1/2pNn3/2P1P1P1/3PB3/PP2Q2P/R5RK w - - 1 19|d5e7 d7e7 f6e7|793|0,7
5bnr/pp2kppp/4r3/2pp4/B6q/3P3P/PPPB1P2/R2Q1KR1 w - - 5 17|d2g5 h4g5 g1g5|793|18
r1b5/1p3p1R/5k2/3p4/8/pP6/Pb1NBPP1/1K5R b - - 0 25|c8f5 d2e4 f5e4 e2d3 e4d3|794|18,15
8/1pk3p1/2n4p/2P4n/8/3RPKP1/1P6/8 b - - 1 44|c6e5 f3e4 e5d3|794|1,18
8/n2k3p/3n2b1/3p4/1N1P2pP/2R1P1P1/5K2/5B2 b - - 0 44|d6e4 f2e1 e4c3|794|1,18
8/4kpp1/7p/1n6/1p2P3/1R3P2/4K1PP/8 b - - 3 34|b5d4 e2d3 d4b3|794|1,18
8/5p2/p3p2p/1p1k1qp1/1PpP4/P3PPPP/4K3/3Q4 w - - 1 37|e3e4 f5e4 f3e4|794|1,18,19
1R6/6p1/4p2p/7P/5P2/4kP2/1p4K1/6r1 w - - 25 56|g2g1 b2b1q b8b1|794|1,5,14
8/r3k1b1/1R5p/5p2/P7/1P4BP/5KP1/8 b - - 1 41|g7d4 f2e2 d4b6|794|1,18
r4rk1/2p2p2/p3p1pp/1p1qP3/2nPN3/2PQ4/4RPPP/1R4K1 w - - 2 27|e4f6 g8g7 f6d5|794|18
8/4b1N1/7p/6p1/3k1pP1/5P1P/4K3/8 w - - 31 68|g7f5 d4e5 f5e7|794|1,18
r1bk4/ppp2p1p/2p5/8/2nB4/5P2/PPP3rP/2KR2NR w - - 3 15|d4f6 d8e8 d1d8|795|35,4
r4rk1/1p3ppp/1ppp4/4p1q1/4Pn2/1B1P2Q1/PPP2PPP/R4RK1 b - - 2 17|f4e2 g1h1 e2g3|795|18
8/2p1b2p/3k4/1P3p2/2K2P2/4B2P/8/8 w - - 1 43|e3c5 d6e6 c5e7|795|8,1
1r6/p3kppp/2pN4/2Pbp3/8/P3rP2/1PK3PP/1R5R w - - 1 25|d6f5 e7f8 f5e3|795|1,18
4r1k1/pp3p1p/5qp1/8/4n3/1P3Q1P/1PP1NPP1/R4K1R b - - 6 21|e4d2 f1g1 d2f3|795|18
4r3/ppp5/4rk1p/4nNp1/4B2b/2P2P1P/PP2R2K/R7 b - - 2 30|e5f3 e4f3 e6e2|795|20
3r3r/pk6/1p6/8/3n4/P5QP/5PP1/1R4K1 b - - 2 30|d4e2 g1h2 e2g3|795|1,18
8/p5pk/2p4p/3p2n1/2PP4/1P6/1P1K1R2/8 b - - 0 44|g5e4 d2e3 e4f2|795|1,18
8/8/2P1p3/7p/1Qnk3P/8/3q2K1/8 w - - 3 62|b4d2 c4d2 c6c7|795|0,1
r2qr1k1/p4p1p/1p1b1pb1/3Q4/8/2P2N1P/PP1N1PP1/R4RK1 b - - 0 18|d6h2 f3h2 d8d5|795|20
r1b2rk1/pp5p/4p3/3pPp2/2p2P2/2P1bNqP/PP4P1/RB1Q1K1R b - - 1 21|g3f2|796|6
3Q3Q/p7/5rk1/5q1p/8/2P5/P4PPP/3R2K1 b - - 0 34|f5f2 g1h1 f2f1 d1f1 f6f1|796|3,1,15,9
3r1rk1/5ppp/pbq5/1p1ppN2/1Pn1n3/2BQPR1P/P3N1P1/3R2K1 w - - 16 27|f5e7 g8h8 e7c6|796|18
r1b1r1k1/pp3pp1/5n1p/8/3q4/P2B4/2P2PPP/R2Q1RK1 w - - 0 16|d3h7 g8h7 d1d4|796|20
2r4k/p6R/1p3n2/2p2N2/2N5/1P3qP1/PQ2rP1P/2R3K1 b - - 0 26|h8h7 b2e2 f3e2|796|5
8/5p1p/7k/p7/3r3P/4N1P1/5PK1/8 w - a6 0 31|e3f5 h6g6 f5d4|796|1,18
k2r4/b1p4p/P1p5/2P1P3/P2P1Pp1/1r1bK3/R7/2BR4 w - - 0 36|d1d3 b3d3 e3d3|796|
2r3k1/5ppp/p7/P1N5/1p3n2/3P1P2/1P4PP/2R3K1 b - - 0 28|f4e2 g1f2 e2c1|796|1,18
1k1rr3/1ppqbppp/p2p1n2/3Pn3/3QP3/P1N1BP1P/1P3P2/R3KB1R b KQ - 2 15|e5f3 e1d1 f3d4|796|18
r2qkb1r/pp3ppp/1n2p3/8/2p3P1/P1N2n2/BPPP1PP1/R1BQ1R1K b kq - 0 12|d8h4|797|6
7k/1pq3rp/p7/2pP3Q/P3p3/6R1/1PP2n1K/8 w - - 0 37|h5e8 g7g8 e8g8|797|1,4
5bk1/3R1p2/6p1/r5q1/2Q5/1K6/1PP5/8 w - - 9 40|c4f7 g8h8 f7f8|797|29,1,4
2q1bb1k/1r5p/4N1r1/pPBpP3/P1pP3P/2P2RPK/8/5R2 w - - 0 38|f3f8 g6g8 f8g8 h8g8 f1f8|797|40,7,15,16
1qr1r1k1/1b1n2bp/pp1Pp1p1/8/P1B5/1QN3PP/1P3P2/2RR2K1 w - - 0 25|c4e6 g8h8 e6d7|797|18
r4q2/1pp4k/pb1p1Bpp/4P3/3n1Q1N/7P/PP3P1P/R4RK1 b - - 0 21|d4e2 g1h1 e2f4|797|18
8/P6P/3R4/2p5/4k3/8/4p2r/5K2 w - - 0 57|f1e1 h2h1 e1e2|797|1,14
6k1/p5p1/5p2/4p3/Q3R3/2PP4/PKPq2r1/8 w - - 7 51|a4e8 g8h7 e4h4|798|1
6k1/pp1b2p1/2pp3p/3Npq2/2P3nP/P2PP1P1/1P2Q3/5BK1 w - - 0 23|d5e7 g8h8 e7f5|798|1,18
rnb1k3/ppppqp2/4pn1Q/8/3Pr2P/8/PPP1BPP1/RN2K2R w KQq - 2 13|h6h8 f6g8 h8g8|798|
r5k1/1p3pp1/p3p2p/3p2q1/2r2n1n/P1PQ2NP/1PB2PP1/1R3R1K w - - 5 27|d3h7 g8f8 h7h8 f8e7 h8a8|798|21
r1q2rk1/pp2pp2/2p2npb/3pN2p/2PP4/1PB2PPb/P1R1P2P/3QR1KB b - - 3 16|h6e3|799|41,6
r3r3/pbp2p1k/1pnq1Bp1/4p3/3P1R2/2PB4/PP4PP/R5K1 w - - 0 19|f4h4 h7g8 h4h8|799|4,16
2k1r3/pp1q2P1/2pp4/6Q1/2P1bP2/2B5/PP2r1P1/R4RK1 b - - 2 29|e2g2 g5g2 e4g2|799|18
5rk1/p2q1p1p/np1p2p1/4p1P1/4N3/P3P3/1P3PP1/R4RK1 w - - 1 22|e4f6 g8g7 f6d7|799|1,18
5n2/1pq4k/2p1p3/P3n1QN/1P2P1p1/6P1/7P/5BK1 b - - 1 43|e5f3 g1g2 f3g5|799|1,18
3r2k1/ppq2p1p/2p3p1/5NP1/5nnP/PPQP4/1BP5/2K4R b - - 1 26|f4e2 c1b1 e2c3|799|18
8/6pk/1Q5p/2pb4/8/1P5P/P3q1P1/5RK1 b - - 10 39|e2g2|800|1,6
r5k1/2p2rpp/1p6/7Q/4P1P1/3PK3/1q2B2P/q4R2 w - - 0 32|h5f7 g8h8 f7f8 a8f8 f1f8|800|3,15
n4b2/3B2p1/5p1p/k1p4P/P1Kp4/P4PPN/4P3/8 b - - 4 34|a8b6 c4d3 b6d7|800|1,18
8/p7/2r4p/2p3kP/PPR1p1P1/4r3/2R3K1/8 w - - 0 43|c4c5 g5g4 c5c6|800|1,14
r5k1/6p1/4p2p/ppb1P3/2p3rP/P1Pp1b1K/1P3PB1/3R1R2 w - - 0 32|g2f3 g4h4 h3h4|800|18
2r3k1/5ppp/p7/1p3p2/2PR1n2/8/PP3PPP/R5K1 b - - 0 25|f4e2 g1h1 e2d4|800|1,18
6k1/5pp1/p1p4p/4B3/3nP1PP/1P6/P2K4/8 b - - 2 29|d4f3 d2e2 f3e5|801|1,18
1r3k2/5ppp/4p3/1P1p4/3P4/r6P/3B1KP1/1R6 w - - 7 39|d2b4 f8e8 b4a3|801|1,18
8/p4p1p/3pq1k1/2b5/4b2P/5PB1/P2Q2PK/8 w - - 1 38|d2g5|802|1,6,42
r4r2/pp3p2/1np2Bpk/3pP3/2qP1P2/8/1R6/1R4K1 w - - 0 31|b2h2|802|6,13
2kr4/1p1r1ppp/ppp1b3/3nP3/4B3/P4NPP/1PP2P2/1K1R3R b - - 2 20|d5c3 b2c3 d7d1 h1d1 d8d1|802|20,26
1r6/1pb3k1/p3R3/4p3/4P3/7P/PPP5/2K5 w - - 5 31|e6e7 g7g6 e7c7|802|1,18
4k3/4b3/4N2p/1r3pp1/1P3P2/3NK1P1/7P/8 w - - 2 33|e6c7 e8d7 c7b5|803|1,18
6rk/p3Q1p1/2p2p1p/4p2P/3qP1R1/1P6/P4PP1/6K1 b - - 6 32|d4d1 g1h2 d1g4|803|1,18
8/R3b2p/5p1k/1p4p1/8/5P1P/6P1/6K1 b - - 2 42|e7c5 g1f1 c5a7|804|1,18
8/8/5k2/R3nPp1/7p/4K2P/8/8 b - - 3 58|e5c4 e3e4 c4a5|804|1,18
8/2kn4/Kp3pp1/3Pp2p/4P2P/1B3P2/P4P2/8 b - - 10 35|d7c5 a6b5 c5b3|804|1
r1bq1rk1/1p1pnp1p/p3p1p1/8/1n2P3/PNQ1B3/1PP1BPPP/2KR3R b - - 0 12|b4a2 c1b1 a2c3|804|18
3Q4/1p2Rk2/p1b4p/3p1pq1/2r5/P1P2PP1/1P3R1P/6K1 b - - 0 36|g5e7 d8e7 f7e7|805|1
2r1r1k1/Q3bpp1/8/8/4pB2/2p3PP/5K2/2R5 b - - 0 33|e7c5 a7c5 c8c5|805|1,18
8/1pb5/k2p3p/3Pp1pP/PK2PpP1/5P2/8/4B3 b - - 0 49|c7a5 b4a3 a5e1|805|8,1,21
r4rk1/ppb2p1p/2nqppb1/3p1P2/6PN/1B1P3P/PPP1N3/R2Q1RK1 b - - 0 16|d6h2|806|6
r5rk/p1p3pp/1p5N/3p4/2PPp3/2P3P1/P3P2P/R4K2 w - - 0 22|h6f7|806|1,6,38
8/6kp/2p2pp1/2P5/8/2QR2PP/q3rP2/6K1 w - - 0 37|d3d7 a2f7 d7f7|806|1
1bk1r3/pp2r3/6pp/1N2n3/8/2P3BP/PP3PP1/3RR1K1 b - - 5 28|e5f3 g2f3 e7e1 d1e1 e8e1|806|20,7
2kr3r/1p1n1ppp/p3p3/5q2/3bN3/3p2Q1/PP1P1PPP/R1B1R1K1 w - - 2 18|e4d6 c8b8 d6f5|806|20,34,18
8/2p2q1k/p2rN1p1/1p1Ppnp1/1P3p2/3R1P1P/1P3P1K/3R4 w - - 2 33|e6g5 h7g7 g5f7|806|1,18
8/4Pkp1/5p2/6nP/6P1/6K1/3R4/8 b - - 0 71|g5e4 g3f4 e4d2|806|1,18
2k4r/pp5p/4p1p1/4P2P/2NPQB2/3r1P2/PPK4R/q7 b - - 0 26|a1d1|807|6
r5kn/1p2qpp1/p7/2p3P1/P2p1PP1/3Q4/1PP1r3/2K4R w - - 0 29|d3h7 g8f8 h7h8|807|29,1,7,4
8/1p5p/2p1p1k1/2P2p2/3r4/1PN2KPP/R7/8 b - - 1 40|d4d3 f3g2 d3c3|807|1,18
4r2k/1p1q1pp1/pP2r1np/P3p3/5n2/1Q1PNN2/5PPP/2RR2K1 b - - 9 27|f4e2 g1f1 e2c1|807|18
6R1/1pp4p/2k3p1/p4r2/2P4b/1P6/P2KN1PP/8 w - - 6 29|e2d4 c6d6 d4f5|807|1,18
8/4N3/6p1/b3p1p1/1pPkP1P1/1K6/8/8 w - - 2 45|e7c6 d4e4 c6a5|807|1,18
3r4/4k3/1R2Pp1p/1p4p1/4Pb2/P7/1P4PP/5RK1 b - - 0 26|f4e3 g1h1 e3b6|808|1,18
Q7/2R5/2B2k2/4p2p/2bpK1p1/8/2r2PP1/8 b - - 0 43|c2e2|809|1,6,13
r1b1kb1r/1p3ppp/p7/2pqp3/8/3B4/PPP2PPP/R1BQK2R w KQkq - 0 11|d3b5 a6b5 d1d5|809|20
r1b2rk1/pp3pb1/1np3N1/3p2qp/8/3Q4/PP3PPP/RB3RK1 w - - 0 24|g6e7 g5e7 d3h7|810|31,7,4,9
4rr1k/p1p3p1/1p4P1/4Pqp1/2P2P2/1P1n1Q1P/Pb2N2K/5R2 w - - 0 31|f3h5 h8g8 h5h7|811|7,4
8/4k1pp/8/3R1p2/3P4/1P2PPP1/2n3KP/8 b - - 0 39|c2e3 g2f2 e3d5|811|1,18
2kr4/ppp1b1pp/2n1P3/8/8/2P3P1/PP3P1P/RNB3K1 b - - 0 19|d8d1 g1g2 d1c1|811|1,18
2r5/1p1q3k/p5pp/2Prn3/1Q2Np2/5P1P/5P1B/R4K2 w - - 2 36|e4f6 h7g7 f6d7|811|18
r4rk1/p4pbp/2pp2p1/4p1n1/2N1P1P1/8/PPP1N2K/R1B1R3 b - - 1 23|g5f3 h2g3 f3e1|811|18
5k2/N2R1pp1/1p2p1b1/3n2Pp/r7/5P2/5K1P/8 w - - 6 34|d7d8 f8e7 a7c6|812|32,1,4
5k2/3K1p2/4n1p1/6P1/R4P2/8/8/8 b - - 10 56|e6c5 d7c6 c5a4|812|1,18
r4rk1/ppB2ppp/2n5/2b5/8/2N3PN/PPP4P/R2bR2K b - - 0 16|d1f3|813|43,6
2r3k1/1q3pp1/p4b1p/Pp1p4/1PrN4/2PQR2P/5PP1/4R1K1 w - - 7 27|e3e8 c8e8 e1e8|813|7,4
7k/7p/p5R1/q2pPr2/3P4/8/1r3PPP/2R3K1 w - - 0 35|c1c8 a5d8 c8d8 f5f8 d8f8|813|1,15,17
r4rk1/pp4p1/1q1PR2p/3Q4/8/8/PP3PPP/R5K1 b - - 2 20|b6f2 g1h1 f2f1 a1f1 f8f1|814|3,1,15,9
5k2/1pp4p/8/p1q5/5N1P/2P1R1P1/5P1K/8 w - a6 0 39|f4e6 f8e7 e6c5|814|20,1,18
r2q1r2/pp5k/2p3pp/2P2p2/1PB1b3/4Q1P1/Pb5P/2B1R1K1 w - - 0 24|e3h6|815|6
5k2/6pp/5p2/p2B4/3N4/2PPr1qP/P5PR/1R4K1 b - - 2 34|e3e1 b1e1 g3e1|815|1,4
8/5k2/6p1/K5P1/1p4N1/1P3r2/8/8 w - - 0 60|g4e5 f7e7 e5f3|815|1,18
5rk1/2p3p1/1p1p4/3Pp2p/1PP1N1q1/4Q2N/6PP/6K1 b - - 0 29|g4d1 e3e1 d1e1|816|1,4
r4rk1/pp1q1ppp/8/2p1b3/8/7Q/PPP2RP1/RNB4K b - - 0 16|d7d1 f2f1 d1f1|816|18,4
r5kr/1bp3b1/pn2p1Np/1p1q4/3P1BPP/1PQ5/P1P2P2/3RR1K1 w - - 1 19|g6e7 g8f7 e7d5|816|18
2b2k2/p7/1pp5/2b1P2p/4pN2/1B5P/PPP3P1/2K5 b - - 1 26|c5e3 c1d1 e3f4|817|1,18
8/5Kp1/6Pk/6r1/8/8/8/1R6 w - - 2 46|b1h1 g5h5 h1h5 h6h5 f7g7|817|1,30,14
8/P3k3/1K2P3/r7/8/7p/8/8 w - - 0 79|b6a5 h3h2 a7a8q|819|0,1,11
6k1/5pp1/8/1p1P4/1P4r1/7p/3R1P2/7K w - - 2 46|d5d6 g8f8 d6d7|819|0,1,14
8/6pp/4kp2/3p4/r5P1/1N1pK2P/3B1P2/1b6 w - - 6 55|b3c5 e6e5 c5a4|819|1,18
8/8/7p/1P2kp2/1r1N3P/4K3/8/8 w - - 0 48|d4c6 e5d6 c6b4|820|1,18
3r1rk1/pp6/2n1pn1p/6p1/4N3/6P1/PPP2PP1/RN2R1K1 b - - 0 17|f6e4 e1e4 d8d1|820|7
8/8/4b1k1/3pPpq1/1p1P3p/2r1P1pP/3Q2P1/1B3RK1 b - - 3 41|g5e3 d2e3 c3e3|820|1
5k2/1p1r2p1/p1b5/8/5Q2/3p3P/PP3K2/8 b - - 5 44|d7f7 f2e3 f7f4|820|25,1,23
8/7p/p2R4/1ppP2k1/2Pb2P1/1P4K1/P4P2/8 b - - 0 45|d4e5 g3g2 e5d6|821|1,18
r1b4k/p4n2/1qpQpr1p/1p6/2p1B2P/P1N2P2/1P6/2KR4 w - - 4 27|d6f8|822|6
6k1/p7/8/1P3ppp/P1bP4/2P1rP2/2R2RPP/6K1 b - - 1 31|e3e1 f2f1 e1f1|822|1,4,16
5r2/2p1b1kp/1qPpQ1p1/4p3/1p2R3/1P6/P4PPP/R5K1 b - - 3 29|b6f2 g1h1 f2f1 a1f1 f8f1|822|3,1,15,9
k2r1r2/1q6/1p1Qp2p/p1n3p1/2P5/6P1/R4P1P/R5K1 w - - 2 38|a2a5 b6a5 a1a5|822|26,9
r1b1k2r/ppp2ppp/2n5/2b1q3/4B3/6P1/PPPPQ2P/R1B1K1NR w KQkq - 1 10|e4c6 b7c6 e2e5|822|20
r1bqr1k1/pppp1ppp/8/1B4bn/3Q4/2P1R3/PP1N1PPP/4R1K1 w - - 0 14|e3e8 d8e8 e1e8|823|18,4
2kr2n1/1ppqb1p1/2n2p2/p3p3/2PpP2P/P2P1N1p/1P2QP1P/R1B2RK1 b - - 2 16|d7g4 g1h1 g4g2|823|7,4
r6B/1p1k1p1p/p2p1P2/2pNn3/8/4R3/P1P3PP/1n4K1 w - - 7 31|d5b6 d7c6 b6a8|823|1,18
r3qrk1/3p3p/p3pb1Q/1p6/2pPN3/5P2/PPP3PP/R5K1 w - - 0 23|e4f6 f8f6 h6f6|823|18
6k1/pp3rpb/7p/3p4/3P3b/6P1/P5rP/K1R2R2 w - - 0 26|c1c8 h4d8 c8d8 f7f8 f1f8|824|1,15
6k1/1p5p/4p1p1/p2q1rP1/b2p1P2/6Q1/6P1/2R1R2K w - - 2 42|c1c8 f5f8 c8f8|824|1
4r3/1p3kpp/p4n2/2Bp4/8/2P5/PP1K1PPP/R7 b - - 2 22|f6e4 d2d3 e4c5|824|1,18
8/1p1k4/pPN1p3/2KpP1p1/6P1/8/1P6/8 b - - 0 53|b7c6 b6b7 d7c7 b7b8r c7b8|824|1
r2qkbr1/1p1bnp1N/p3p1p1/3pn3/B2P4/2N5/PPP2PPP/R2QK2R w KQq - 0 12|h7f6|825|6,38
8/3k4/pb1p1p2/1p3r2/4p3/1PP4P/P1R1KPP1/3R4 b - - 1 39|f5f2 e2e1 f2c2|825|1,21
r6k/p4qpp/1p3b2/5QN1/1P6/P7/6PP/4R1K1 b - - 2 36|f6d4 g1h1 f7f5|825|20,1
r1b1kb1Q/ppp4p/6pB/3P4/2pn4/8/PPP1qPPP/RNK4R b q - 3 13|e2c2|826|6,26
r5k1/p4ppp/8/3p2q1/3P3b/P4Q2/2P3PP/5RK1 w - - 0 25|f3f7 g8h8 f7f8 a8f8 f1f8|826|3,1,15,9
r1b2rkn/pp2q2p/3N2p1/2B4n/4pP2/6PP/PPP1Q1B1/3R1R1K b - - 0 20|h5g3 h1h2 g3e2|826|18
r3kb1r/1b5p/p2q2p1/1pRPppN1/5P2/Q5N1/PP4PP/4R1K1 b kq f3 0 25|d6c5 a3c5 f8c5|826|
1r1q2k1/ppp1rBpp/8/n4bB1/3Pp3/1Q6/P1P2PPP/R3R1K1 b - - 0 20|e7f7 b3f7 g8f7 g5d8 b8d8|826|
6n1/1r1B1k1p/4p1p1/1N2Pp2/8/5P2/P5PP/5K2 w - - 5 41|b5d6 f7e7 d6b7|826|1,18
rnb2rk1/1p3ppp/p1p1p3/8/P2q4/3B4/5PPP/2RQR1K1 w - - 0 19|d3h7 g8h7 d1d4|826|20,7
1b1kr3/p1rb4/6Bp/1p6/2n1R1pN/P1P3P1/1P3qP1/1K1R4 w - - 0 27|e4e8|827|6,23
3r2k1/pR3pp1/2p4p/2q5/5Q2/2P3P1/P4P1P/3r1BK1 w - - 0 29|f4f7 g8h8 f7g7|827|1,4
4r1k1/1N4p1/p4p1p/3p4/1P1n4/P6P/5PP1/2R3K1 b - - 0 29|d4e2 g1f1 e2c1|827|1,18
r1bk1b1r/1p1p1ppp/p2P1nn1/1N6/5P2/4B3/PPP3PP/R3KB1R w KQ - 0 15|e3b6 d8e8 b5c7|827|
2k2b2/pppr3r/5Bpp/3nR3/8/6P1/PP3P1P/n5K1 w - - 0 20|e5e8 d7d8 e8d8|828|18,4,16
6k1/6p1/7p/8/2RN4/qR2P3/5PPP/6K1 b - - 0 42|a3a1 b3b1 a1b1 c4c1 b1c1|828|3,1,15
8/1N3k2/1np2ppp/p2n4/P1pPr2N/8/1P3PPP/2R2K2 w - - 1 30|b7d6 f7e6 d6e4|828|1,18
r2q1rk1/p3bppp/8/1P6/2Bp1B2/1P3P2/b1PQ2PP/2KR3R b - - 0 18|e7a3|829|43,6
3q1k1b/pb2rr2/1p1Np1R1/3pP3/2pP1P2/2P5/PP2K3/7R w - - 0 28|h1h8|829|6
r3kb1r/ppp1pppp/2n5/8/2B5/2P2K2/PPP2PPP/R1B4R b kq - 0 9|c6e5 f3e2 e5c4|829|18
2r3k1/5ppp/3P4/8/4P3/1Q3R1P/3q2P1/q1r2BK1 w - - 0 33|b3f7 g8h8 f7f8 c8f8 f3f8|830|3,15,9
1r2k2r/pq1n1ppb/4p2p/4P3/Q1N3P1/1Pp1P2P/P4P2/R4RK1 w k - 2 20|c4d6 e8e7 d6b7|830|18,23
5r1k/2p1Nq1p/1p1p2p1/4p3/p3P2Q/Pn5P/1r6/3RK1R1 w - - 4 33|e7g6 f7g6 g1g6|830|7,23
2b5/7p/6pk/4b3/2B5/1P2qQ2/4R1PP/7K b - - 0 30|e3c1 e2e1 c1e1|831|1
8/p7/2p5/1k1p4/6R1/b2n2P1/2R3K1/8 b - - 0 40|d3e1 g2f1 e1c2|831|1,18
1k2r3/2p1r1p1/p2b3p/1p2n1p1/1P1B4/1BP4P/P4PP1/3RR1K1 b - - 3 29|e5f3 g2f3 e7e1 d1e1 e8e1|831|20,7
8/6k1/5p2/2N4P/p2r4/5PK1/6P1/8 w - - 0 45|c5e6 g7h6 e6d4|831|1,18
r1bq3k/6pp/pp2Qb1r/3p4/3P4/2PB4/4RPPP/RN4K1 w - - 3 22|e6e8 d8e8 e2e8|832|7,4
8/p7/1pk4b/3pr3/PP4RP/1K1P4/8/8 w - - 1 39|g4g6 c6b7 g6h6|832|1,18
6k1/p6p/1p3np1/8/2nN1PB1/5K1P/P7/8 w - - 0 45|g4e6 g8h8 e6c4|832|1,18
2r2k2/R6R/5p2/B7/5n2/3p3P/1r4PK/8 b - - 12 47|b2g2 h2h1 c8c1 a5e1 c1e1|833|1,15
6r1/2pb4/p2p2N1/1p1k2P1/1P6/P5R1/6K1/8 w - - 1 41|g6e7 d5d4 e7g8|833|1,18
1r4k1/5pp1/R6p/1p6/P4n2/7P/1P3PP1/2R3K1 b - - 0 30|f4e2 g1f1 e2c1|833|1,18
4k3/6p1/5p1p/2q4P/8/1P1Q4/5KP1/8 w - - 2 39|d3e3 c5e3 f2e3|833|1,19
5rk1/1p3ppp/p7/8/1n6/2rRP1Q1/PP2RPPP/6K1 b - - 0 20|c3c1 d3d1 c1d1 e2e1 d1e1|834|3,1,15
rnb2b1r/ppp2kpp/3pqn2/8/4P3/2N2N2/PPP2PPP/R1BQK2R w KQ - 4 8|f3g5 f7g8 g5e6|834|18
8/p1R3p1/8/5k2/8/2K1n3/P3P3/8 b - - 1 38|e3d5 c3d4 d5c7|834|1,18
1k1r4/1p4p1/1np1Q1p1/8/p7/P7/BPPq1PP1/1K5R b - - 2 23|d2d1 h1d1 d8d1|835|3,1,4,9
4k3/6R1/p2rp3/4N1p1/1p1Pn1P1/7r/PP6/1K3R2 b - - 1 26|e4d2 b1c1 d2f1|835|1,18
2rr2k1/1b4pp/p1n1pb2/pN6/2B5/P4N2/5PPP/2R2RK1 w - - 0 25|c4e6 g8f8 e6c8|835|18
2kr4/pbp1RRpp/1p6/3r4/8/2P5/PP5P/5K2 w - - 3 27|e7c7 c8b8 c7b7|835|1
3r2k1/Q4ppp/4p3/P2rb3/1P2n3/7P/6P1/5R1K w - - 1 35|a7f7 g8h8 f7f8 d8f8 f1f8|836|3,1,15,9
3r2k1/1p3ppp/p1b1p3/8/2P5/1P4bq/1P3QPP/5R1K w - - 0 27|f2f7 g8h8 f7f8 d8f8 f1f8|836|3,1,15,9
1r3r2/1p1b1p1k/p2p2pp/2p1p2N/2B1P3/P1PP2RP/1P3PK1/8 w - - 0 26|h5f6 h7g7 f6d7|836|1,18
8/3k2pp/N7/8/P7/8/r6P/3K3R b - - 0 37|a2a1 d1c2 a1h1|836|1,21
2r2k2/2b3pp/2R5/1N1p4/P3p3/1n2P3/2N3PP/6K1 b - - 1 34|c7h2 g1h2 c8c6|836|20,1
6k1/pp4pp/2ppb1N1/8/2P1P3/1P5n/P3B1PP/6RK b - - 0 26|h3f2|837|1,6,38
3k4/2rn2Rp/3K1p2/1p6/5P2/p1P4P/5P2/8 w - - 0 40|g7g8 d7f8 g8f8|837|1,4
8/8/1p1k1n2/4p2p/1PP2pp1/3K4/3N1PPP/8 w - - 0 38|d2e4 f6e4 d3e4|837|1,10
8/2k5/7r/8/R3K3/4P3/8/8 b - - 2 58|h6h4 e4f5 h4a4|837|1,14,21
3Q4/2p5/3p2k1/B3p3/5p2/K7/6q1/8 w - - 0 54|d8g8 g6f5 g8g2|837|1,21
rnb2rk1/pp1p2pp/2p1p3/q7/3PPn2/P1P1QN2/2PBB1PP/R3K2R b KQ - 8 14|f4g2 e1f2 g2e3|838|18
r6k/pp2n1pp/2nN4/4p1r1/1PB5/2P4b/P3Nb1P/R2R3K w - - 0 23|d6f7 h8g8 f7g5|838|20,34,18
5k2/5pp1/5q1p/3p4/5nb1/1P3N2/2P2PPP/R3R2K w - - 0 25|a1a8 g4c8 a8c8 f6d8 c8d8|839|1,15
2r5/5p2/p3p1k1/3n4/2NP4/PP1K3R/5P2/8 b - - 4 39|d5f4 d3e4 f4h3|839|1,18
3r4/6pp/ppr3k1/2p3N1/P1P2n2/3P2RP/6P1/R5K1 b - - 1 29|f4e2 g1f2 e2g3|839|1,18
1r3k2/5p2/3ppn1R/7p/Pn5P/1BbP1P2/1p2K3/6R1 w - - 0 35|h6h8 f8e7 h8b8|839|21
6k1/3q2pp/pp1B2b1/2p5/6P1/3P3r/PPP5/2K1RR2 w - - 0 31|f1f8|840|1,6,16
r1bqkb1r/2Np1ppp/5n2/p3N3/Pp6/1P3Q2/1P1P1PPP/R1B1K2R b KQkq - 0 12|d8c7 f3a8 c7e5|840|
8/p2N4/5pp1/3b3p/PP3Pk1/4K3/7P/8 w - - 1 41|d7f6 g4f5 f6d5|840|1,18
r1b1qrk1/ppb3p1/2p3np/3p4/3PN3/6P1/PPQ2PBP/R1B1R1K1 w - - 1 17|e4f6 f8f6 e1e8|840|20,7
2k3r1/2p5/pp5p/4PKb1/8/2N5/PPP5/5R2 b - - 5 34|g8f8 f5e6 f8f1|841|1,21
8/8/8/3K4/8/p1k5/P7/8 b - - 2 58|c3b2 d5c4 b2a2 c4c3 a2b1|841|1,2
6k1/6bp/4p1p1/p2pP3/q2Q2P1/P6P/1P1R3K/8 b - - 0 36|a4d4 d2d4 g7e5 h2g2 e5d4|841|40,44,1,18
r1r3kb/p2bpp1p/2N2npB/6q1/8/2pB2NP/PP3PP1/R3R1K1 w - - 0 19|c6e7|842|7,6
2r3k1/1p1R1ppp/pn6/Q4p2/8/8/PP3PPP/6K1 b - - 0 24|c8c1 d7d1 c1d1 a5e1 d1e1|842|3,1,15
7k/p7/1b4pp/8/7Q/6P1/PP5n/4K3 b - - 3 45|h2f3 e1e2 f3h4|842|1,18
8/p7/1ppk4/3p2p1/3Nn1Pr/P1P5/1P2R1K1/8 w - - 7 37|d4f5 d6e5 f5h4|843|1,18
8/8/3K1p2/5P2/8/7k/8/8 b - - 1 62|h3g4 d6e6 g4g5|843|1,2,24
r2r2k1/1b2bppp/p1n2n2/1pp1N3/5P2/7P/PPP3P1/RNB1RBK1 w - - 1 15|e5c6 b7c6 e1e7|843|44,20
6k1/2p3pp/p7/1p1p2b1/3P4/1BP3qP/PP4P1/5R1K w - - 4 35|b3d5 g8h8 f1f8|844|3,1,4
r2qr1k1/p1p1b1p1/1pN2p1p/7P/3PQ1P1/4P3/PP3P2/R3K1R1 b Q - 1 19|e7b4 e1e2 e8e4 c6d8 a8d8|844|20
1k6/2p5/2Pp4/1K1P4/4P3/5B2/2n5/8 b - - 0 63|c2d4 b5b4 d4f3|844|1,18
r1bq1rk1/pppp2p1/2n2p2/4P1NQ/5B2/2P5/PP3KPP/RN6 w - - 0 14|h5h7|845|6
7k/6pp/8/p3P3/1pP3QK/1P3rP1/P5q1/5n2 w - - 0 37|g4c8 f3f8 c8f8|845|1,4
6k1/R6P/8/8/2K1P1P1/1p6/pr6/8 b - - 0 59|g8h8 a7a8 h8h7|845|1,14
5r2/2k2P2/1p1N4/p2nP3/2K5/1P1p2P1/8/5R2 b - - 2 42|d5e3 c4d3 e3f1|845|1,18
8/p7/8/2pk2K1/5P2/8/P7/8 b - f3 0 50|c5c4 f4f5 c4c3 f5f6 c3c2 f6f7 c2c1q|845|0,1,2,11,12
8/8/2p5/1p1b3k/1P2N2P/4K3/8/8 w - - 0 45|e4f6 h5h6 f6d5|845|1
r2q1k1r/p1ppp3/1p4Q1/4P2N/5n2/8/PPP2PbK/6R1 w - - 4 22|g6g7 f8e8 g7h8|846|18
8/p2R1pk1/r3n1pp/PN6/K7/2P2P2/2P3PP/8 b - - 10 41|e6c5 a4b4 c5d7|846|1,18
8/p2k1Np1/3Pp2p/p2nB3/3P4/1r4P1/6KP/5R2 b - - 7 33|d5e3 g2g1 e3f1|846|1,18
3N2k1/pp2r1p1/3R3p/n3p3/4P3/P3K3/1P4PP/8 b - - 4 32|a5c4 e3d3 c4d6|847|1,18
3q1rk1/1p3pp1/p1p1p2p/P1Pp2bP/1P1P1P2/1R2P1Q1/8/4KBR1 b - f3 0 24|g5h4 e1d2 h4g3|847|23
8/8/5p2/1p6/1Pk2P2/1N2K3/8/5b2 w - - 4 52|b3d2 c4b4 d2f1|847|1,18
8/p4pp1/1r3k2/6np/B7/P6P/1P1R1KP1/8 b - - 9 40|g5e4 f2e1 e4d2|847|1,18
6k1/p1q2pp1/1pr4p/2n1P3/PQ3P2/2p5/2R3PP/2R3K1 b - - 4 40|c5d3 b4d4 d3c1|848|1,18
2kr4/p3bp2/2p2n1p/2p2Kp1/2P1p3/1PBr3P/P2P1PP1/RN1R4 w - - 0 19|c3f6 e7f6 f5f6|848|
rnbqk2r/1p2bppp/2p5/p3p3/8/2QPPNP1/PP3PBP/R1B1K2R b KQkq - 1 10|e7b4 c1d2 b4c3|848|23
r4rk1/4qppp/2p1P1n1/1p1p4/p1nP2B1/P1P5/2P2BPP/1R1QR1K1 w - - 1 19|e6f7 f8f7 e1e7|848|0,20,7
5rk1/1p3p1p/2p3p1/3pp2q/6N1/3R1P2/1Q2K3/8 w - - 0 28|g4f6 g8g7 f6h5|848|1,18,23
r6r/pp3pp1/2n1pk1p/2b5/2P3b1/2N2N2/PP2BPPP/R3R1K1 w - - 0 15|c3e4 f6e7 e4c5|848|18
8/4p3/r4k2/1R3p2/3P2p1/3K2N1/8/8 b - - 1 48|a6a3 d3e2 a3g3|848|1,21
1k3r2/pp6/2bp4/P3P2p/1Q5P/3Pn1pB/qP5P/2K5 w - - 0 34|b4d6 b8a8 d6f8 c6e8 f8e8|849|3,1,18,15
3r4/p5bk/8/2P2P2/7Q/2P3P1/PP4r1/2K5 b - - 1 37|g7h6 h4h6 h7h6|849|1
3R4/2p5/8/4K1n1/8/3p2k1/8/8 b - - 1 70|g5f7 e5e4 f7d8|849|1,18
6k1/1R6/p1p2pP1/3p1Kp1/3Pn3/1P2P3/P7/8 b - - 0 45|e4d6 f5f6 d6b7|849|1,18
5rk1/p6p/2Q1p1p1/4N3/3rBN2/P6q/1P3P1P/5R1K b - - 0 28|h3f1|850|5,6
7r/pp2k1pp/2p5/8/8/1PP5/2P2K2/R1Br4 w - - 3 24|c1g5 e7e6 a1d1|850|20,1
r4rk1/pbp2ppp/1p2p3/8/2PPn3/3B1NPq/PP3P1K/R2QR3 w - - 0 21|h2h3 e4f2 h3g2|850|
8/8/p6P/4k1P1/3n2K1/1p6/8/8 w - - 0 49|h6h7 b3b2 h7h8q|850|0,1,10,11
7k/p3rrpp/1pp5/5Q2/3b2P1/1KP5/1P6/8 w - - 0 40|f5c8 e7e8 c8e8 f7f8 e8f8|851|1,18,15
r6k/4Q1pp/ppq5/8/4p3/8/3R1PPP/6K1 w - - 0 32|d2d8 a8d8 e7d8 c6e8 d8e8|851|3,1,15
8/2kn1p2/8/3P4/R7/2PKN3/1r6/8 b - - 14 70|d7c5 d3d4 c5a4|851|1,18
4r3/6p1/8/4kNp1/6P1/pB3R2/Pb1r1PK1/8 w - - 14 46|f3e3 e5f6 e3e8|851|1,21
4rk2/p4ppp/3R1n2/1p6/2p1PPPP/2P5/PP3B2/2K5 b - - 0 24|f6e4 d6d5 e4f2|851|1,18
3r1k2/pB4p1/5pp1/8/2nP2P1/P6P/PBP2P1b/1R3K2 b - - 4 25|c4d2 f1e2 d2b1|852|1,18
8/8/2K5/8/p1k5/P7/8/8 b - - 7 72|c4b3 c6d5 b3a3 d5c4 a3b2|852|1,2
r7/2k2p1p/P2p2p1/2pP4/R1K2P2/2P3P1/1R5P/4r3 b - - 1 34|e1e4 c4d3 e4a4|854|1,14,21
2r5/5pp1/4p2p/2k5/1p2P3/3K1P2/1R4PP/8 w - - 0 40|b2c2 c5d6 c2c8|854|1,14,21
r2q3k/pp4bp/6p1/3p1bN1/5Q2/3pP1P1/P5P1/5RK1 w - - 2 23|g5f7 h8g8 f7d8|854|18
6k1/5ppp/2r2q2/p3pN2/P1p1Pn2/Q7/6PP/2R4K w - - 2 35|f5e7 f6e7 a3e7|854|1,18
6rk/p3RpRp/1p2bP2/8/7P/r1P5/8/6K1 w - - 9 38|g7g8 h8g8 e7e8|855|40,1,4
8/b4k2/P7/8/4BPp1/3K2P1/r6P/8 w - - 0 45|e4d5 f7e7 d5a2|855|1,18
8/1R4Rk/7p/8/p3P3/P4P1P/5rr1/2K5 b - - 0 46|g2g7 b7g7 h7g7|855|1,14
3r2rk/p4Q2/1p3p1p/2p2Bq1/4P3/2P3PR/P6P/2b2K2 w - - 4 33|f7h7|856|6
5k2/4b1R1/1p3p1p/p1q2P1P/P1P5/1P5K/1r6/6R1 w - - 1 40|g7g8 f8f7 g1g7|856|45,1,4
5r2/5P2/p7/1kbQ1N2/8/8/P5P1/7K b - - 8 49|f8h8 f5h6 h8h6 d5h5 h6h5|856|1,15,13
3r4/1b1q1pbk/p5p1/1p1Np2p/2p1P2P/P1P2P2/1PBQ1KP1/3R4 w - - 1 30|d5f6 g7f6 d2d7 d8d7 d1d7|856|20
8/5p1p/6kP/3R2P1/3K4/8/7r/8 b - - 2 44|h2d2 d4c4 d2d5|856|1,14
r3k2r/1b2bp2/3ppp2/4n3/q2N4/5P2/PPPQ3P/1K1R1B1R w kq - 2 19|f1b5 a4b5 d4b5|856|18
r4r1k/1p1q1p1p/p2p1PpN/4p1Pn/4Pn1P/PPQ1B3/2P5/2KR3R b - - 0 23|f4e2 c1d2 e2c3|856|18
rn2k1nr/3b1pbp/1q2p1p1/p1p5/1pP1P3/1P1BBNN1/P2Q1PPP/3RK2R b Kkq - 1 13|g7c3 d2c3 b4c3|856|23
1r2N1k1/ppqb1pb1/6pp/8/3NP1n1/2PB4/PP2QPPP/R4RK1 b - - 0 17|c7h2|857|7,6
r4nk1/p1q4p/3n2pQ/1pp1r3/2PpP3/PP1P2PB/5R1P/5RK1 w - - 0 31|f2f8 a8f8 h6f8|857|7,4
6k1/1Q4p1/p1p4p/3pP3/P3bq2/2N4P/1P4P1/5B1K b - - 2 26|f4f1 h1h2 f1g2|857|1,5,4
2r3k1/5p2/8/1pNn2p1/1P1P4/6P1/4K1P1/1R6 b - - 2 37|d5c3 e2d3 c3b1|857|1,18
6rk/2pb1p2/1p3P1p/pP1P4/P1P1BQ2/7P/1q3P2/4RK2 b - - 4 33|d7h3 e4g2 h3g2|857|1
8/5ppk/4n2p/1R3K2/8/8/6PP/8 b - - 4 42|e6d4 f5e5 d4b5|857|1,18
8/8/6p1/1R3n1p/5k2/8/4K3/8 b - - 1 50|f5d4 e2f1 d4b5|857|1,18
4rr1k/2p2p1p/2p4q/p1n2bN1/P4P2/1P2P1R1/2pP2QP/2KN2R1 w - - 0 24|g5f7 f8f7 g3g8 e8g8 g2g8|858|31,7,15,9
7k/4q2p/5pn1/p6p/8/1PQ5/PK5P/5R2 b - - 5 40|e7e2 b2a3 e2f1|858|1,18
3R4/8/8/p1kp4/P3n1P1/1P6/2r2PK1/8 w - - 1 49|d8c8 c5b4 c8c2|858|1,21
8/8/4p1p1/2k4p/2P2P1P/b1K3P1/8/4N3 b - - 4 42|a3b4 c3d3 b4e1|858|1,21
5R2/8/5n2/5k1P/2p5/5p2/2K5/8 b - - 0 59|f3f2 h5h6 f2f1q|858|0,1,11
2k5/p2Q4/bp6/5p2/q4P2/4P3/P1PR2P1/4K3 b - - 0 33|a4d7 d2d7 c8d7|858|1
1b2Nr1k/pp3p1p/2b5/3p2Q1/3q4/8/PP3RPP/R1B4K b - - 0 27|d4d1 f2f1 d1f1|860|7,4
2Rr2k1/pp1r1ppp/8/1P6/P4b2/6NP/6K1/3R4 w - - 0 35|c8d8 d7d8 d1d8|860|3,1,4,27
r3r3/1p1q1pk1/p2p2p1/2pPp2p/3nP1N1/3P3P/PP1Q1PP1/R4RK1 w - h6 0 19|d2h6 g7g8 g4f6|860|4
8/2q2Q1k/1p1pP1pp/p7/P1P5/4P3/7P/6K1 b - - 1 41|c7f7 e6f7 h7g7 f7f8r g7f8|860|1,19
4r1k1/3q1pbp/6p1/P1p5/2Pp1B2/1PnQ1N1P/5PP1/R5K1 b - - 0 24|c3e2 g1f1 e2f4|860|18
6k1/p4p2/1p4p1/2p2p2/8/1P1r4/PB1P2KP/4R3 b - - 1 30|d3d2 g2f3 d2b2|860|1,18
r3r1k1/p1p1q1pp/bp1p4/3PnP2/2P5/1PQ4P/P1B3P1/R1B1R1K1 b - - 0 20|e5f3 g2f3 e7e1 c3e1 e8e1|860|20,7
8/8/8/4k3/5RK1/8/8/r7 b - - 24 95|a1g1 g4f3 g1f1 f3e3 f1f4|860|1,14
2R5/6pk/p4p2/5PP1/2P1p2P/r4b2/5K2/8 w - - 0 44|g5g6 h7h6 c8h8|861|1,4
5k2/5p1p/3p2p1/2pP3P/8/q4r1P/3B1P2/4R1K1 w - - 0 29|d2h6 f8g8 e1e8|861|1,4,13
r3r1k1/p1p2ppp/5q2/1P1N4/1b6/8/PP2QPPP/R4RK1 b - - 0 15|e8e2 d5f6 g7f6|861|
8/4r1N1/8/P5k1/1P4p1/4P3/1n3KP1/2R5 b - - 0 44|b2d3 f2e2 d3c1|861|1,18
1k1rN3/p4ppp/2q5/P1B5/8/2P1Q3/P4PPP/RN4K1 b - - 0 25|d8d1 e3e1 d1e1|862|4
5r1k/p1pR2pp/1p3q2/n7/4Q3/8/P4PPP/3R2K1 b - - 4 24|f6f2 g1h1 f2f1 d1f1 f8f1|862|3,1,15,9
8/7p/8/4P3/1p3PP1/k3QK1P/8/6q1 b - - 3 67|g1e3 f3e3 b4b3 e5e6 b3b2|862|0,1,19
6k1/8/3B1pp1/2PP4/3p2pP/p2K4/r2N1P2/8 b - - 0 41|a2d2 d3d2 a3a2 c5c6 a2a1q|862|0,1,11,9
r2r2k1/ppR3p1/4pp1p/4q2Q/8/6PP/P4P2/2R3K1 w - - 0 24|h5f7 g8h8 f7g7|863|1,4
2r3k1/3R1ppp/8/p3P3/1pq2P2/4BQ1P/PPP3P1/1K6 b - - 0 25|c4c2 b1a1 c2c1 e3c1 c8c1|863|3,1,15,9
8/p3k3/1p5p/1P1K3P/8/8/8/8 w - - 2 50|d5c6 e7e6 c6b7|863|1,2
2r4k/2PR3p/p5p1/1p2bp2/1P6/P7/4K1PP/8 w - - 1 47|d7d8 h8g7 d8c8|863|1
4r3/p4k2/bp6/8/1P1R1p2/P1n2P2/6P1/R5K1 b - - 2 33|c3e2 g1f2 e2d4|863|1,18
5rk1/1p2q2p/2p3p1/4p1P1/4P3/pPQ1B1nP/P1P5/2KR4 b - - 2 24|g3e2 c1d2 e2c3|863|1,18
2R5/1p2k1p1/1q2pr2/p2p3Q/8/P7/1P3PPP/R5K1 b - - 0 25|b6f2 g1h1 f2f1 a1f1 f6f1|864|3,1,15,9
2k1rr2/1pp2qp1/p1B1p3/7p/8/1Q2R3/PP3PPP/3R2K1 b - - 0 21|f7f2 g1h1 f2f1 d1f1 f8f1|864|3,15,9
5r1k/p7/5r1p/3pqpp1/4pN2/1P4QP/P1P2PP1/3R2K1 w - g6 0 29|f4g6 f6g6 g3e5|864|20,1,7
8/5k1p/2n5/p3p1p1/2PpP3/3N1P2/2K3PP/8 b - - 1 37|c6b4 c2d2 b4d3|864|1,10
8/6p1/1p3r1p/4k3/PP5P/3KN1P1/5P2/8 w - - 5 40|e3g4 e5d6 g4f6|864|1,18
r1b2r1k/ppp3pp/2n5/3QP3/8/7P/P1P1q1PK/R4R2 w - - 1 17|f1f8|865|3,5,6
2r5/3R4/1p6/7p/1P5P/P3kPp1/6P1/4K3 b - - 6 43|c8c1 d7d1 c1d1 e1d1 e3f2 f3f4 f2g2|865|1,30,14
1Q6/8/8/5kp1/8/5P1P/3r2P1/b6K b - - 0 54|d2d1 h1h2 a1e5 b8e5 f5e5|865|1,18
8/8/2N2k2/2p2ppp/1PPp4/3P2P1/7r/1R3K2 b - - 0 42|h2h1 f1g2 h1b1|865|1,21
8/1pp3pk/p2p2rp/3P1N2/4P1n1/5Q2/PP3P2/5K2 b - - 4 37|g4h2 f1e2 h2f3|865|1,18
r2q1rk1/pp5p/2pnp1p1/7N/2P3P1/1PQ5/PR3P1P/4R1K1 w - - 0 23|c3g7|866|6
2r1R1rk/p1p2Qpp/6p1/1q4Pn/8/7P/P4P2/4R1K1 w - - 3 30|f7g8|866|6
6k1/p1p1R1pp/bqp2r2/3p4/6Q1/1B6/PPPB1PPP/R5K1 b - - 0 19|b6f2 g1h1 f2f1 a1f1 f6f1|866|3,18,15,9
5rk1/6pp/2p5/p1p5/P2q4/BP1PQ2P/2P4P/6K1 w - - 1 30|e3d4 c5d4 a3f8|866|1
8/2p1k2b/7p/1p1PP1p1/p5P1/P2pK2P/1P6/1B6 b - - 1 36|d3d2 e3d2 h7b1|866|0,8,20,1
7R/8/8/8/4p3/6K1/r3k3/8 w - - 2 66|h8h2 e2d3 h2a2|866|1,14,21
3r2k1/1bq1b1p1/2nrp1p1/1pp1p1N1/4P2Q/2PPB3/1PB2P2/R3K3 w Q - 2 27|h4h7 g8f8 h7h8|867|7,4
8/7p/8/5k2/8/2K1pNP1/4b2P/8 w - - 4 57|f3d4 f5f6 d4e2|867|1,18
8/p1P4R/1b1B4/1P1pp3/2r1k3/P7/K7/8 w - - 1 50|h7h4 e4e3 h4c4|867|1
r3r1k1/5pp1/7p/4N2P/p2P4/1q2R3/QP3PP1/1K1R4 b - - 2 29|b3d1|868|5,6,26
2r3k1/5ppp/8/8/R7/1P6/1rPR2PP/7K b - - 0 28|b2b1 d2d1 b1d1|868|3,1,4,14
6k1/4r3/p1p1r1p1/1p1p2P1/3P4/1PP4R/P5K1/7R w - - 1 32|h3h8 g8f7 h1h7|869|1,4,14
r3k2r/pp1n1ppp/5B2/3p4/Q2Pp3/2q3P1/P3PPBP/R4K1R b kq - 1 14|c3a1 a4d1 a1d1|869|5,4
r5k1/pp2qr1p/7B/2p2b1N/1nP2P2/1P3Q1P/5PP1/K2RR3 b - - 2 25|b4c2 a1a2 c2e1|869|18
2r5/2r3k1/4pp2/q2p2p1/1b1P4/6PP/2RQB1K1/2R5 w - - 0 32|c2c7 c8c7 c1c7 a5c7 d2b4|869|
2rr2k1/5p1p/p1p1p1p1/Q7/2P5/6P1/Pq2PP1P/3R1RK1 w - - 1 21|d1d8 c8d8 a5d8|869|1,7
Q2R4/2p1rpk1/2p5/2q5/2P1p1np/P3P3/1P3PP1/6K1 w - - 0 34|d8g8 g7f6 g8g4|869|1,21
r3kb1r/3n1ppp/pp1p1P2/3N4/P1P2p2/8/2P2PPP/R4RK1 w kq - 0 16|d5c7 e8d8 c7a8|869|18
8/5rk1/1pR3p1/2b2r2/4B3/4P3/4KP2/3R4 b - - 3 44|f5f2 e2d3 f7d7|869|1
4r3/5pkp/5np1/p1Q5/8/PqN5/1P3PPP/3R2K1 b - - 0 23|b3d1 c3d1 e8e1|870|3,1,4,9
r2q1rk1/p1pp1ppp/1p6/3n4/1bb5/2N2N2/PP1B1PPP/R2QR1K1 w - - 0 13|c3d5 c4d5 d2b4|870|44,20
rnb1k1nr/bpp2ppp/p3p1q1/6B1/2B1P3/2P2N2/P4PPP/RN1QK2R w KQkq - 2 10|d1d8|870|
r5k1/1pp3p1/p3rp1p/8/P3RP2/2Pn3P/1P1N2P1/4R1K1 w - - 1 24|e4e6 d3e1 e6e1|870|1
8/5pkp/6p1/pR6/4p1bP/6P1/Pq2rPQ1/6K1 w - - 0 36|b5b2 e2b2 g2e4|870|1
1r5k/1b4b1/3pBp2/4nQ1p/2Pq1B2/6PP/7K/1R6 w - - 0 34|f5h5 g7h6 h5h6|871|4
4rrk1/p1QR2pp/1p2p3/8/4P3/2P5/P1q2PPP/R5K1 b - - 1 20|c2f2 g1h1 f2f1 a1f1 f8f1|871|3,1,15,9
3kr3/p1p3B1/1p2b2p/2pN4/2P1R1Pb/1P5P/P5K1/8 b - - 0 27|e6d5 c4d5 e8e4|871|20,1,23
r1b3k1/pp3p2/2p3p1/4q1Np/5Q2/2N3PP/6BK/q7 w - - 0 28|f4f7 g8h8 f7f8|872|4
r3n1k1/1b2bpp1/1q5p/3pNB2/p1pP1PPP/Pn2P3/1PQ5/1R1R2K1 w - - 1 25|f5h7 g8h8 e5f7|872|29,7,4
r3k2r/pp3ppp/2n2b2/1q2pP2/3pN3/8/PPPQ1PPP/R3K2R w KQkq - 0 14|e4d6 e8e7 d6b5|872|18
6k1/1pB2p1p/2n3p1/2pRP3/P5P1/4rP2/K7/3B4 b - - 2 38|c6b4 a2b2 b4d5|872|1,18
r2r2k1/pb1q1p1p/1p2p1p1/2p5/2PnN3/1P1P2P1/P2Q1PBP/2R2RK1 w - - 0 18|e4f6 g8g7 f6d7|872|18
r1b2rk1/pp2bppp/2n5/2nNp3/4P1P1/5P2/P1K1N2P/R4BBR w - - 2 16|d5e7 c6e7 g1c5|872|
r7/pp1rp3/5qpk/8/8/1Q6/5PPP/2R2RK1 w - - 2 24|b3h3 h6g7 h3d7|873|1,18
6k1/6b1/p1q3p1/1p3pN1/3np3/1P4Q1/P4P2/1R4K1 b - - 1 34|d4e2 g1g2 e2g3|873|1,18
2k1r3/1pp2p2/pn3q1p/8/3r2p1/P1Q1B3/P3BPPP/R3K2R b KQ - 1 24|d4d1 a1d1 f6c3|873|20
r2rbn1k/5p2/1p3Pp1/8/1p1P2B1/2qNQ3/P5PP/6K1 w - - 0 32|e3h6 f8h7 h6g7|874|18,4
4r1k1/p1b2p1p/2pq2pQ/8/8/1P2P1PP/PBP5/R4RK1 b - - 2 21|d6g3 g1h1 g3h2|874|7,4
8/8/6kP/3q1N2/6P1/5PK1/p7/B7 w - - 2 48|f5e7 g6h6 e7d5|874|1,18
6r1/p1k5/1bp1p3/1p2q2p/2p1N2P/P4QP1/1P2B1PK/8 w - - 5 34|f3f7 c7c8 f7g8|874|1,18
6k1/1r2bppp/q3p3/n1p5/P3N3/2P1P2P/2Q1NPP1/1R4K1 b - - 2 30|b7b1 c2b1 a6e2|874|
2kr2nr/np1q2pp/3b1p2/3Npb2/8/3P1N2/PPP1BPPP/R2Q1RK1 w - - 0 12|d5b6 c8b8 b6d7|874|18
3k4/2p4p/2P3p1/3PBP2/3K4/8/7n/8 b - - 0 40|h2f3 d4e3 f3e5|874|29,1
rnbqr1k1/1p3pp1/p6p/3Nb3/4Q3/3B4/PPP2PPP/R3K2R w KQ - 2 16|e4h7 g8f8 h7h8|875|7,4
4r1k1/2pQ1ppp/8/8/8/1NP4P/Pr3PP1/5K2 b - - 0 26|b2b1 b3c1 b1c1 d7d1 c1d1|875|1,15
r4r2/pp4k1/4Q3/6p1/4Nb1q/P2PpR2/1P2P2P/5RK1 b - - 2 25|h4h2|876|6
8/pp3Q1p/1kq1p3/8/1n6/P6P/1P3PP1/1K1R4 b - - 0 27|c6c2 b1a1 c2d1|876|1,18,4
2r4k/p5p1/7p/P6r/4Qp2/3R1Pq1/6P1/3R2K1 w - - 4 39|d3d8 c8d8 d1d8|876|1,4
r5k1/ppprppbp/6p1/4n2n/4P1b1/P1P2N2/1P2BPPP/R1B1RNK1 w - - 0 14|f3e5 g7e5 e2g4|876|44,20
3r3r/p1Q1k1q1/3p1p2/3Bp3/P3P2p/3P1b2/5PPB/R4RK1 b - - 0 23|d8d7 c7d7 e7d7|876|25,23
6k1/3q1p2/4nQp1/3N4/p1P3P1/8/5P2/6K1 w - - 0 43|d5e7 d7e7 f6e7|876|1
8/pp6/1k3p1R/8/4n2P/PN6/KP4r1/8 b - - 1 44|e4c3 a2a1 g2g1 b3c1 g1c1|877|1,15,23
3r4/pQ2pkbp/2n3p1/2q3B1/8/P4N2/1P3PPP/2R3K1 b - - 1 24|c5c1 g5c1 d8d1 f3e1 d1e1|877|3,18,15,9
8/4b2R/r4k2/2pP4/1p3P2/8/1K6/8 w - - 0 51|h7h6 f6f5 h6a6|877|1,21
3rr1k1/ppq2ppp/3b1n2/3pn3/5B2/1B4NP/PPPQ1PP1/R4RK1 b - - 5 17|e5f3 g2f3 d6f4|877|20,7
5r1k/1pp2pp1/p1n4p/4P3/Q4P2/4qBP1/PP1R2KP/2R5 b - - 0 26|e3d2 g2h3 d2c1|877|18
7k/1b3R2/1qr3p1/1p2r2p/2p4P/2P5/6PK/1B3R2 w - - 0 40|f7f8 h8g7 f1f7 g7h6 f8h8|878|30,15
4r1k1/2q2p1p/p5p1/1p1R3r/4p3/1B2Q1P1/PPP2P2/1R3K2 b - - 1 27|h5h1 f1g2 h1b1|878|21
8/4r3/R3nk2/1p2pp2/1P5p/2K1NP2/6PP/8 w - - 4 38|e3d5 f6f7 d5e7|878|1,18
1k1r4/1pp5/p1q5/8/5N2/1P4P1/PQ3P2/6KR b - - 9 38|d8d1 g1h2 d1h1|879|1,4
5rk1/1Q3Rp1/4p2p/p3P3/2q5/8/P5PP/5R1K b - - 0 29|c4f1 f7f1 f8f1|879|3,1,4,27
1kr5/5p1p/RP1bp1p1/1R6/3P4/3Q3P/2rB1PP1/7K b - - 0 29|c2c1 d2c1 c8c1 d3f1 c1f1|879|15,13,9
6k1/p5p1/7p/P1p5/5K2/1r3NPB/7P/8 w - - 0 43|h3e6 g8f8 e6b3|879|1,18
2rr2k1/6p1/pq2p2p/1p3p2/1P1Nb3/P2RP3/1Q3PPP/3R2K1 w - - 0 26|d4e6 b6e6 d3d8 c8d8 d1d8|879|29,20,7
1R3nk1/5ppp/2N5/8/2P1P3/2r2P1b/5r2/3B3K w - - 0 28|c6e7 g8h8 b8f8|880|3,29,4
r3q2k/8/3nPp1p/8/3B2QP/4P1P1/8/6K1 w - - 0 46|d4f6 h8h7 g4g7|880|1,4
2r1r2k/3P1Q2/pq4pp/8/1p6/5R2/P5PP/3NR2K b - - 0 34|e8e1 f3f1 e1f1|880|18,5
1r6/Q5pp/1N2pk2/KPb2p2/8/8/P7/8 b - - 4 39|c5b6 a7b6 b8b6|880|1,18
r3k2r/pp5p/2q1p1p1/2bN4/P5Pn/8/RPP4P/2BQR2K w kq - 1 20|e1e6 c6e6 d5c7 e8f7 c7e6|880|40,30,18,9
8/8/4pk2/r4p2/3R1K2/4P1P1/5P2/8 b - - 20 57|e6e5 f4f3 e5d4|880|1,18,14
6k1/p5b1/2p1b2p/2p1p1pQ/2P1P3/1P3P2/P4P1K/3r4 w - - 2 29|h5e8 g8h7 e8e6|881|1,18
4r1k1/7p/p2p1bp1/1p1P1bN1/1Pp2P1Q/P5PP/6BK/2q5 w - - 0 41|h4h7 g8f8 h7f7|882|7,4
5r2/4pkn1/4qp2/p3p3/6R1/2PQ3P/Pr4P1/5R1K w - - 0 32|d3g6 f7g8 g6g7|882|4
6k1/5p2/4p1p1/7p/2q2P1P/1p4PK/rQ1R1P2/8 w - - 9 42|d2d8 g8h7 b2h8|882|1,4
5r2/3bp1kn/6p1/pp6/3q4/1P2N1QP/P5P1/1B4K1 w - - 0 34|g3g6 g7h8 g6h7|882|4
r1b2r1k/1q2bRpp/p2p4/1ppN4/3nPQ2/P2P3P/BPP3P1/R1B3K1 b - - 0 18|d4e2 g1h2 e2f4|882|18
r1b2r2/3q1pkp/p5p1/1p1pP3/3Q4/5N2/PP3PPP/3R1RK1 w - - 0 20|e5e6 g7g8 e6d7|882|0,20,34
k7/1p3p2/pKp5/PP6/5P2/1R1r4/2r5/8 w - - 0 41|b3d3 c6b5 d3d8 c2c8 d8c8|883|1,15,14
6k1/pp2rp1p/6p1/8/3Q2P1/2P2K1P/P4P1q/R7 w - - 1 38|d4d8 g8g7 d8e7|883|1,18
8/1k6/1P2K3/4P3/3p1Pp1/6P1/8/8 b - - 0 48|d4d3 e6e7 d3d2 f4f5 d2d1q|883|0,1,2,11
1r5k/4Q1pp/8/8/2P5/5rq1/PP4B1/3R2K1 w - - 0 32|d1d8 b8d8 e7d8 f3f8 d8f8|884|1,15
8/8/6pp/1p1k2p1/1P3P2/3K2PP/8/8 b - - 0 42|g5f4 g3f4 g6g5 f4g5 h6g5|884|1,2,24
8/4k3/R7/1pK3Pp/1P1B2r1/2P5/4b3/8 b - - 2 49|g4g5 c5b6 g5g6|884|1
2r2r2/ppqb1pk1/6p1/3pPp1p/3P2N1/2P4P/PP1QB1P1/R5K1 w - - 0 22|d2h6 g7g8 g4f6|885|4
8/8/1p4k1/p2K1p1p/2Pb3P/8/PP6/8 w - - 0 43|d5d4 f5f4 d4e4|885|1
8/4Pb2/3K4/8/7p/1k6/R7/8 b - - 1 59|b3a2 d6e5 h4h3|885|1,5
4k3/2R5/8/3P4/2K5/5P2/8/5r2 b - - 0 57|f1c1 c4d3 c1c7|885|1,14,21
8/5pk1/6p1/1B1Kp1P1/8/R2pr3/8/8 b - - 3 53|d3d2 a3e3 d2d1q|885|0,1,11
8/p3qP2/6p1/6k1/3QK3/8/P7/8 w - - 9 54|d4e5 e7e5 e4e5|885|1,19
2k5/p7/4p3/p2p1pp1/P2P2Pp/1P1KP2P/5P2/8 b - - 0 36|f5g4 h3g4 h4h3|886|1,2
6k1/1p3pp1/p6p/2p2q2/P1Q1P3/1P3PB1/5PKP/4n3 w - - 1 30|g2f1 f5f3 f1e1|886|25,1
8/8/8/p1p2R2/b5K1/PkP5/8/8 b - - 6 48|a4d7 g4f4 d7f5|886|1,23
6k1/r5pp/P7/2p1pp2/P1n5/8/4KP1P/1R6 w - - 1 30|b1b8 g8f7 b8b7 a7b7 a6b7|886|0,1
r4rk1/pp4p1/6p1/3pb3/2p4q/P1P1BP1P/1P3P2/R2Q1RK1 w - - 1 19|d1d5 g8h7 d5e5|887|18
8/8/8/2k3p1/8/1K3P1P/8/8 b - - 20 87|c5d4 b3b4 d4e3 b4c5 e3f3|887|1,2
6k1/QR3pb1/B3b1pp/4p3/4P1P1/5NK1/5PP1/2q4r b - - 2 35|c1f4|888|6
6k1/p4R2/3pp1p1/7p/4P1bP/qB2r1P1/P1P5/1K3R2 w - - 0 27|f7f8 g8h7 f1f7 h7h6 f8h8|888|1,30,15
r3k2r/pp1bbpp1/2n1pn1p/1N6/8/1PN5/PBB2PPP/R4RK1 w kq - 5 16|b5c7 e8d8 c7a8|888|18
rnb1k1nr/1p6/1p1BqN1p/5p2/1P4pP/3P4/P1P1Q1P1/R3KB1R b KQkq - 1 17|g8f6 e2e6 c8e6|888|5
r2qk1nr/ppp3pp/4p3/4b3/4P3/2NP4/PPP4P/R1BQK2R w KQkq - 0 12|d1h5 g7g6 h5e5|888|18
r1b2rk1/ppq2ppp/3bp3/3pP3/5B2/2PB1N2/P3QPPP/R3K2R b KQ - 0 13|c7c3 f3d2 c3a1|889|18
R7/6p1/4p3/4Pk1p/8/p1K1P2P/5rP1/8 w - - 0 35|a8f8 f5e4 f8f2|889|1,14,21
r1b3k1/pp4q1/2p2bQ1/8/2PP1p2/5N2/PP2RP1P/6K1 w - - 1 29|e2e8|890|6
8/pk5r/1pR5/1K1p1N2/2p5/8/P2r4/8 w - - 8 45|f5d6 b7b8 c6c8|890|1,4
rq4k1/4Rp2/2p2Qp1/1bPp3p/3P4/4B2P/5PP1/6K1 b - - 6 39|a8a1 e3c1 a1c1 e7e1 c1e1|890|1,15
r4knr/pp2qBpp/8/2Q1N3/1n1pPP2/8/PPP1b1PP/RNB2RK1 b - - 0 13|e7c5 e5d7 f8f7|890|5
8/8/2k5/3R1K2/3PP3/2q5/8/8 w - - 9 74|d5c5 c3c5 d4c5|890|1,18,17
r1b2qk1/pp4bn/6p1/3p2Np/2B3nP/3PB3/PPPQ2P1/2K4R w - - 0 18|c4d5 g8h8 g5f7 f8f7 d5f7|890|30,7
r1kr1b2/pp3Q2/2b1NP2/3p4/1qp5/6P1/5PBP/4R1K1 w - - 3 34|f7c7|891|6
8/8/8/6K1/1p6/8/Pk3p2/5B2 b - - 4 71|b2a2 g5f4 b4b3 f4f3 b3b2|891|0,8,1
8/5Rpp/1k6/8/8/1r3P2/p5PP/R4K2 b - - 3 37|b3b1 f1f2 b1a1|891|1,14
5rk1/pq3pp1/3p2np/3P3Q/4P2B/2N5/1P4KP/1R6 b - - 2 26|g6f4 g2g1 f4h5|891|18
8/2p4R/8/p2qB1p1/2N3kp/1P6/2P4K/8 w - - 7 41|c4e3 g4f3 e3d5|891|1,18
7r/4k3/6R1/1P1n4/P2P4/3K4/8/8 b - - 0 51|d5f4 d3e4 f4g6|891|1,18
8/8/4k3/2p4p/1pP1KPbP/1P6/2B5/8 b - - 8 40|g4f5 e4e3 f5c2|892|8,1,21
8/4N3/3k4/p1p1p3/P1P1P3/1P4bp/8/6K1 w - - 2 54|e7f5 d6e6 f5g3|892|1,18
8/4k3/4r3/3K4/8/8/8/7R w - - 21 65|h1h7 e7f6 h7h6 f6g5 h6e6|892|29,1,30,14,21
8/2r4p/p5p1/2BK4/8/1PP3kP/8/8 w - - 3 43|c5d6 g3h4 d6c7|892|1,18
r1b1k2r/1p1n2pp/pq2pnp1/2b5/2B4Q/8/PPP2PPP/RNB1R1K1 w kq - 0 12|e1e6 b6e6 c4e6|892|18
r1bqk2r/1p3p1p/2n1p1p1/1B1pP1P1/3P4/5N2/PP3PP1/R2QK2R b KQkq - 0 15|d8a5 e1f1 a5b5|893|18
r3r1k1/1b1nqpp1/4p3/p2pP1pQ/1p5P/2P5/PPB2PP1/R3R1K1 w - - 0 22|h5h7 g8f8 h7h8|894|7,4
4r3/p4kbp/5n2/5P2/8/2P4p/PP5P/RNB3KR b - - 0 22|e8e1 g1f2 e1h1|894|29,18,21
1rb3r1/4kp1p/p2p1p1b/1p1B1P2/3NP3/3P4/PP4PP/R4RK1 b - - 0 18|h6e3 g1h1 e3d4|894|18
8/3k4/3P2p1/p3K3/P4p1P/8/8/8 w - - 0 50|e5f4 d7d6 f4g5 d6e7 g5g6|894|1,2
3r2k1/p4rp1/5R1p/8/3p4/1Q4R1/PPP1q1PP/6K1 b - - 0 24|e2e1 f6f1 e1f1|895|1,4
r4k2/p4p2/1n3B2/3p4/q2P4/2P2N1P/1Q1K4/4R3 b - - 9 35|b6c4 d2c1 c4b2|895|18
3r3k/6RP/6K1/6P1/8/8/8/8 b - - 0 59|d8d6 g6f7 d6d7 f7f6 d7g7|895|1,14
r2q1rk1/p3ppbp/bp4p1/3pP3/1n1P4/1P2QN1P/1P1B1PP1/RN1R2K1 b - - 0 16|b4c2 a1a6 c2e3|895|18
rnbq2r1/pp2kp2/4p3/3NQ1N1/5B1b/8/PPP3PP/R4K1R b - - 0 17|d8d5 e5d5 e6d5|895|
2r2rk1/5q1p/p2p2pQ/4p1pR/4p3/4N3/PP3PK1/7R w - - 1 30|h6h7 f7h7 h5h7|895|
r3nbk1/1p4pp/1p4q1/3pP1N1/5P2/1Q6/PP4PP/7K w - - 0 26|b3d5 g8h8 g5f7 g6f7 d5f7|895|1
r3kr2/p3bp2/bp2p3/7p/3QP3/1B5P/PPP3P1/3R2K1 b q - 3 22|e7c5 d4c5 b6c5|895|23
2r3k1/1b3pp1/p3p2p/1p6/3Q1P2/P3PqP1/1P5P/1B1R2K1 w - - 3 26|d4d8 c8d8 d1d8|896|1,7,4,9
3Rkr2/1p3pQP/p1b1p1n1/4P3/1P6/1q1P4/4RPPK/8 b - - 2 34|e8d8 g7f8 g6f8|896|5
6R1/p7/1pR5/8/4k1P1/4b3/PP5r/1K6 b - - 2 34|h2h1 b1c2 h1c1 c2b3 c1c6|896|1,21
3r3r/p1pkn1pp/Q1pppq2/8/N3P3/P4P2/2PB2PP/2KR3R b - - 0 17|f6a1|897|6
8/2R3pk/6pp/p7/1p4N1/1n1r3P/1P4P1/7K w - - 0 35|g4f6 h7h8 c7c8 d3d8 c8d8|897|1,15,23
8/5ppk/3p4/4qP2/1R3R2/7P/3p2P1/7K w - - 0 40|f4h4 h7g8 b4b8 e5e8 b8e8|897|1,15,17
8/5Pk1/6P1/p3p3/PpP3K1/8/8/8 b - - 0 54|b4b3 f7f8q g7f8 c4c5 b3b2|897|0,1,2
8/8/8/1pRpk3/5n2/pP6/P4P2/2K5 b - - 2 42|f4d3 c1c2 d3c5|897|1,18
8/8/6p1/4bbk1/4B3/5R1P/4PPK1/8 b - - 4 45|f5e4 g2g1 e4f3|897|1,5,23
8/1k6/2R1bpp1/PP2p3/8/5K1p/5P2/8 b - - 1 47|e6d5 f3g3 d5c6|897|1,18
8/6R1/7P/3k1q1K/8/8/8/8 w - - 9 64|g7g5 d5e6 g5f5 e6f5 h6h7|897|0,1,23,17
1k6/3q1p2/2p1P3/1r6/7p/Q1R4P/PPK1R3/5r2 b - - 0 45|d7d1|898|1,6
8/7R/p2RP3/1p4k1/1P4pp/7P/4r1PK/8 b - - 0 46|g4g3 h2g1 e2e1|898|1,4,14
2r5/5pk1/4pqp1/p2p3R/3P1PQ1/1rP4R/6P1/6K1 w - - 0 34|h5h7 g7f8 h7h8 f8e7 h8c8|898|1,21
r2q1rk1/5ppp/p3p1n1/1p2N2Q/3P4/2P5/P1B2PKP/2R2R2 b - - 0 18|g6f4 g2h1 f4h5|898|18
1r5k/5p1p/4pPp1/p3P1P1/2p1B3/2P2N2/Pq1Q2KP/8 b - - 3 36|b2d2 f3d2 b8b2|898|31,1,23
8/4k2p/1PB1p1p1/2r1Pp2/2R2P2/7P/2K3P1/8 b - - 2 44|c5c4 c2b3 c4c6 b6b7 c6b6|898|1,18,5
r2qr1k1/pp1nRp2/5n1p/3N1Q2/7p/3B3P/PPP2PP1/R5K1 b - - 0 16|e8e7 d5e7 d8e7|899|
6r1/8/5K2/8/4k3/8/5R2/8 b - - 8 77|g8f8 f6e7 f8f2|899|1,14,21
8/r5k1/PR4p1/1K5p/8/5nP1/7P/8 w - - 0 70|b6b7 a7b7 a6b7 f3e5 b7b8q|899|0,1,11
8/3k4/8/8/2pr1R2/P5P1/5PK1/8 b - - 2 35|d4f4 g3f4 c4c3 g2f3 c3c2|899|0,1,14
8/6pk/7p/4R2P/4p3/3rP1P1/2rp1PK1/3R4 b - - 2 47|c2c1 d1d2 d3d2|901|1,14
8/5kp1/8/p7/R5K1/1r5P/6P1/8 b - - 3 40|b3b4 g4f3 b4a4|901|1,14
r4rk1/1p3qp1/3p3p/p2Pp3/Pn2p1B1/1Q4R1/1P3PPP/3R2K1 w - - 2 32|g4e6 g8h8 e6f7|902|23
8/1p3k1p/6p1/5p2/P1n1PP2/2BbP2P/6K1/3B4 b - - 0 39|c4e3 g2g3 e3d1|903|1,18
8/3R1pk1/3Q1p1p/r7/2p1P3/1bb4P/5PP1/6K1 b - - 2 43|a5a1 g1h2 c3e5 d6e5 f6e5|904|1,18
5rk1/1pp2p2/p6Q/4N3/2P5/1Pq4P/P4PP1/4R1K1 b - - 2 26|c3e1 g1h2 e1e5|904|1,18,5
8/8/p7/1p5p/1Pk2KpP/P5P1/8/8 w - - 3 54|f4g5 c4b3 g5h5|904|1,2
r3k2r/p4pp1/2pq4/n1P4p/6n1/2P2B2/PP3pPP/RNBQ1R1K b kq - 0 18|d6h2|905|7,6
rn1qkb1r/pbppp1p1/1p3n1p/5p2/3P1B1P/4P3/PPP1BPP1/RN1QK1NR w KQkq - 2 6|e2h5 f6h5 d1h5 g7g6 h5g6|905|15
8/8/2B5/4pK2/3k1pPp/7P/8/6n1 w - - 4 58|g4g5 g1e2 g5g6|905|1,12
3q4/1p3rk1/6pp/pP2P3/3NR3/P3B3/2r2P2/R5K1 w - - 3 32|d4e6 g7h7 e6d8|905|18
1k2r3/pp3p1p/8/5N2/2RP4/5bP1/P4P1P/5K2 b - - 4 35|f3e2 f1g2 e2c4|905|1,18
8/7r/8/8/1P6/2K1k3/3R4/8 b - - 0 66|h7c7 c3b3 e3d2|906|29,1,14
rnb1r1k1/ppqp1p1p/6p1/3Q2B1/8/2P2N2/P3BPPP/R3K2R b KQ - 0 13|c7c3 e1f1 c3a1|906|18
6k1/6pp/p1N5/1p2p3/1P6/P2nr1P1/7P/5R1K w - - 3 35|c6e7 g8h8 f1f8|907|3,1,4
b5rk/6p1/1qpQR2p/5p2/3P4/5P2/1P4PP/6K1 w - - 0 33|e6h6 g7h6 d6h6|908|1,4,9
r5k1/1bp2pp1/1p3qnp/pP6/Q3P3/P1PP1B1P/5PP1/R3K2R b KQ - 1 20|f6c3 e1f1 c3a1|908|18
8/ppb3k1/5Npp/4P3/8/1P3N1P/1P4PK/3r4 w - - 1 31|f6e8 g7f7 e8c7|908|1,18
r1b2k1r/ppQ1n1pp/3p4/4q3/4P3/1B6/P4PPP/R4RK1 w - - 0 17|c7d8|909|6
r1b1kq1r/1ppp1pp1/1p5p/3NP1B1/2B5/P7/5PPP/R3R1K1 w kq - 0 18|d5c7|909|6
6k1/3b4/p3NpBp/b1p1pP1N/2PpP3/P2n4/6K1/8 w - - 0 47|h5f6 g8h8 f6d7|909|1,18
rn1q1rk1/ppp2ppp/8/2P1P3/2P4n/3BP1B1/P1N2PbP/R2QK1R1 b Q - 3 14|h4f3 e1e2 f3g1|909|18
kq2Qr2/ppR2P2/2p5/3p4/3P4/8/PPP3K1/8 b - - 4 42|f8e8 f7e8r b8e8|909|1
8/p7/8/4B1pk/P7/3K2P1/7b/8 w - - 2 44|g3g4 h5g4 e5h2|909|8,20,1
r4rk1/ppB2ppp/3Np1q1/2P5/3n4/2Q5/PP4PP/R4RK1 b - - 2 17|d4e2 g1h1 e2c3|909|18
1r1r2kq/1Q6/6np/p1p5/2P1p3/P3B1PP/1P4K1/5R2 w - - 0 36|b7f7|910|6
4q2k/2p4p/p2p2pP/2pP2Q1/5P2/P1P5/5P2/bN4K1 w - - 0 36|g5f6 h8g8 f6g7|910|1,4
8/6p1/r3kp2/7p/7P/1p2P1B1/1Kb2PP1/2R5 b - - 5 34|a6a2 b2c3 b3b2|910|0,1
8/1p4pk/r4p1P/8/1b2n3/p2QPqP1/2P2P2/B1K2R1R b - - 0 28|b4d2 d3d2 e4d2|910|26
rnbqr2Q/pp2k1p1/4p3/3pP1N1/2nP4/2P5/P4PPP/R1B1K2R w KQ - 7 19|h8g7|911|33,6
5rk1/pp3rbp/4R1p1/2qp4/6Q1/1P1B4/PBP2PPP/1R4K1 b - - 0 20|c5f2 g1h1 f2f1 d3f1 f7f1 b1f1 f8f1|911|3,46,9
6k1/q6p/6p1/4Bp2/P7/7P/3rbPPN/R1R3K1 w - - 10 36|c1c8 g8f7 c8c7 a7c7 e5c7|911|18
8/8/3K2kp/7R/5p2/5P2/8/8 b - - 0 50|g6h5 d6e5 h5g5|911|25,1
8/5pp1/p3pk1p/1p6/1P6/2NnP3/P2r1PPP/5RK1 w - - 1 24|c3e4 f6e5 e4d2|912|1,18
r3kb1r/1bq2pp1/p2p4/np1Np1P1/4P3/1P2BP2/1PPQ4/2KR1BR1 b kq - 2 17|a5b3 c1b1 b3d2|912|23,26
5rk1/pp2qppp/2rB4/2n5/4p3/4P3/PP2QPPP/1R1R2K1 b - - 3 20|c6d6 d1d6 e7d6|912|
3r3k/ppp3p1/6rp/2P5/1n1P1p2/1Q3P1q/P3R2P/4RN1K w - - 0 32|e2e8 d8e8 e1e8 h8h7 b3g8|913|7,15
3r2k1/p2N1ppp/2b1p3/4P3/2P5/6P1/3R1P1P/6K1 w - - 3 30|d7f6 g7f6 d2d8|913|20,1
3qr1k1/p1p2pp1/7p/2b1P3/2Pn1B2/2Q3PP/Pr3PB1/R4RK1 b - - 1 21|d4e2 g1h1 e2c3|913|18
r2q1rk1/ppp1nppp/3b4/1B6/3QP3/2N2P2/PPP2P1P/R1B2RK1 b - - 0 10|d6h2 g1h2 d8d4|913|20,7
8/R7/p1p4P/1p6/1P6/2kP4/3N3r/2K5 b - - 1 50|h2h1 d2f1 h1f1|914|1,4
5rk1/pB5p/1p2p3/8/1PPQ4/P3p1P1/4q2P/2R4K b - - 0 31|f8f1 c1f1 e2f1|914|1,4
4Q3/2r3kp/5pp1/2N1q3/1P6/P6P/6PK/8 w - - 4 41|e8e5 f6e5 c5e6 g7f6 e6c7|914|1,18
rn3rk1/pp1n1pb1/3p2p1/3Np1q1/1P2P3/8/P2BBP1R/R2QK1N1 b Q - 0 17|g5g1 e2f1 g1h2|914|18,5
8/8/p2k1p1p/1p1Pb1p1/1P2P1P1/P3K2P/8/2B5 b - - 3 50|e5f4 e3d3 f4c1|914|8,1,21
8/5k2/5p2/7p/2q1BN2/5PK1/6P1/8 w - - 5 43|e4d5 c4d5 f4d5|914|1,18
8/5p2/3p3p/8/4p1P1/2k1PP2/r1P1K3/2R5 b - - 0 39|a2c2 c1c2 c3c2|914|1,14
r1b1kb1r/1p1n1ppp/p2p1q2/1NpP4/2P5/8/PP2BPPP/R2QK1NR w KQkq - 0 11|b5c7 e8d8 c7a8|915|18
8/5p2/5p2/P2k4/6P1/2r1p2P/2K5/8 w - - 0 41|c2c3 e3e2 c3d2 e2e1q d2e1|915|1,5
6k1/2pB4/p2p4/3n2p1/2p2p2/5P2/P1P3PP/2K5 w - - 0 28|d7e6 g8h7 e6d5|915|1,18
3k2B1/1pp1q1p1/1p1pP1p1/r3n3/3PPQ1r/8/PPP5/R4RK1 w - - 1 23|f4f8 e7f8 f1f8|915|
rnb1k1nr/ppp2ppp/3p4/2b1p3/2P3Pq/5N1P/PP1PPPB1/RNBQK2R b KQkq - 2 5|h4f2|916|22,6
r3r1k1/pR3ppp/3qp3/2pp4/3N4/2P2Q2/P4PPP/5K2 w - - 0 19|f3f7 g8h8 f7g7|916|1,7,4
r3kb1r/p4pp1/2n1q2p/1N1p4/2pP4/4P3/P1Q1P1PP/R3KB1R w KQkq - 1 17|b5c7 e8d7 c7e6|916|18
1r4k1/5ppp/4p3/4P3/1bpNb3/4B1P1/1P1N3P/3B2K1 b - - 2 28|b4d2 e3d2 b8b2|916|20
8/3N2pk/6bp/pp6/8/1P5P/P5PK/8 w - - 0 51|d7f8 h7g8 f8g6|916|29,1
8/3k4/7R/2p4p/P4Pp1/4K1n1/2P3P1/8 b - - 1 37|g3f5 e3e4 f5h6|916|1,18
8/1B4pp/pn6/5k2/1P6/3nPK2/P1R4P/8 b - - 2 36|d3e1 f3g3 e1c2|916|1,18
k3r3/PR6/1K6/8/8/8/8/8 b - - 4 60|e8e6 b6c7 e6e7 c7c6 e7b7|916|1,14
5R2/8/4k3/6Pp/5P1P/4n1K1/1r6/8 w - - 1 57|f8e8 e6f7 e8e3|916|1,21
1q1r3r/pp1n2p1/4Q1p1/2p3P1/kPPP2B1/P7/5P2/R4RK1 b - - 2 26|b8h2|917|6
r1b1r3/1ppn1pk1/3p1q1p/p5p1/2P5/6NP/PPQ2PP1/R4RK1 w - - 2 18|g3h5 g7g8 h5f6|917|18
8/p2r1p2/1p2q1pk/1P1p3p/P2R1P1P/6P1/3Q1K2/8 w - - 8 40|f4f5 h6g7 f5e6|917|20,34,1
2r3k1/1qr1np2/4p1p1/1pRpP1P1/1n1P4/4BN2/2Q2P1P/2R3K1 w - - 0 34|c5c7 c8c7 c2c7 b7c7 c1c7|917|
8/2P5/4k3/7p/p2p3K/P7/5P2/8 b - - 0 45|e6d7 c7c8r d7c8|918|1,2
r1b4k/p4rpp/2p5/8/3Q4/2B3P1/PP1K3P/q7 w - - 4 23|d4d8 f7f8 d8f8|919|1,4
2r3k1/R4pp1/8/2q4Q/6PK/2r4P/P7/8 w - - 1 32|h5f7 g8h8 f7g7|919|1,4
8/2pbn1kp/3p4/3P2Pp/1q2PQ2/2NB4/2PK4/8 w - - 1 34|f4f6 g7g8 f6e7|919|1,18
4KR2/8/4P1k1/8/p7/Pr3p2/1P6/8 b - - 6 55|b3b8 e8d7 b8f8|919|29,1,14,21
r2qr1k1/pppn1ppp/4p3/3p1b2/1PP3n1/P2PPN2/1B1NBPPb/R2Q1RK1 w - - 0 11|f3h2 g4h2 g1h2|919|
r1bq1rk1/pppn1pbp/3p2p1/4n3/2P5/NP3NP1/PB2PPBP/R2Q1RK1 b - c3 0 10|e5f3 e2f3 g7b2|919|20
r1b2b1r/ppp2p1p/n5k1/4Q3/3PPB2/8/PPP4P/R3KB1q w Q - 2 19|e5g5|920|6,42
r1k4r/ppp3bp/3p2p1/3P3q/Q4Pb1/2N2nP1/PPP2K2/R3R3 w - - 3 22|e1e8 h8e8 a4e8|920|4,26
r5k1/p4ppp/8/2p1q3/2Q5/P1P1P3/6PP/5RK1 w - - 0 29|c4f7 g8h8 f7f8 a8f8 f1f8|920|3,1,15,9
r1b3k1/pp2qNpp/8/2p3N1/8/2n1P1Q1/P4PPP/1R3RK1 b - - 0 21|c3e2 g1h1 e2g3|920|18
1r6/4n3/4R1p1/8/P4N2/5kPK/7P/8 b - - 4 40|b8h8 f4h5 h8h5|921|1,4
rn3rk1/p1p2ppp/1p2b3/3Nbq2/2B5/1Q6/PPP2PPP/R1B2RK1 w - - 0 14|d5e7 g8h8 e7f5|921|18
8/8/2K3R1/4k2p/1rpbN3/5B1P/6P1/8 b - - 0 54|b4b6 c6d7 b6g6|922|1,21
8/8/8/2n5/3K1PP1/8/2pk3P/Q7 b - - 2 59|c5b3 d4e5 b3a1|922|1,18
5rk1/2p4p/p3p1pQ/2q5/2p5/8/5PPP/BR4K1 b - - 1 32|c5f2 g1h1 f2f1 b1f1 f8f1|923|3,1,15,9
r5k1/p4p1p/1p2p1p1/3bP3/q2b2Q1/B7/PP3PPP/R3R1K1 b - - 1 19|d4f2 g1f2 a4g4|923|20,7
8/2p5/1p1p1k2/p4b2/2P2PB1/PP6/3K4/8 w - - 3 47|g4f5 f6f5 d2e3|923|8,25,1
3rr1k1/pb1q1p1p/4pbpB/1pP5/5P2/2P5/PP1QB1PP/3R1RK1 b - - 0 18|d7d2 d1d2 d8d2|923|
r4rk1/ppp5/2q1ppbp/4N1p1/1P1P1n2/P6P/1B1QBPP1/2R2RK1 b - - 7 20|c6g2|924|7,6
r4b1r/2k2ppp/3qpn2/p2b2Q1/2p5/2NB4/PPP2PPP/4RK1R w - - 0 16|c3b5 c7b6 b5d6|924|18
1r6/8/3R4/pp3k2/2pP1p2/P1P2b1K/1P3P2/6R1 b - - 0 37|b8h8 d6h6 h8h6|925|1,4,13
8/p3b2p/1p6/6p1/1P1k2P1/P4KNP/8/8 w - - 3 37|g3f5 d4c4 f5e7|925|1,18
8/2p1k3/1p2p3/pB1pP1n1/P1PP3R/1P3P1p/5P2/4K3 b - - 0 30|g5f3 e1f1 f3h4|925|1,18
1k6/pp5Q/2p4p/4r3/8/6PP/PPPq1N1K/8 w - - 3 29|h7h8 b8c7 h8e5|925|1,18
5R2/p1k2p2/2p5/1p6/4P3/4qB2/6P1/3R3K b - - 1 44|e3h6 h1g1 h6f8|927|1,18
r1bqk2r/1p3Npp/1np5/8/p1BPP3/P7/3Q1PPP/R3K2R b KQkq - 0 16|b6c4 f7d8 c4d2|927|5
6k1/2Rrrp1p/1p5P/p4KP1/P1p5/8/8/8 w - - 0 42|c7c8 d7d8 c8d8 e7e8 d8e8|928|1,15,14
2q2r1k/4b1pp/3p4/1R2p3/1P2Qn2/1BB2P2/5P1P/3RK3 b - - 0 31|c8c3 e1f1 c3b3|928|18
3Q4/3N2qk/3p2pb/p1pP1p2/2P2P2/p6P/4r1PK/6R1 w - - 2 34|d7f6 g7f6 d8f6|928|1
8/1p6/p3k3/2p4p/2P1K2p/2P5/1P3NP1/2b5 w - - 3 39|f2d3 c1d2 d3c5|929|1
rn1qkb1r/pp2pppp/2p2n2/4N3/2B5/2NP4/PPP2PPP/R1BbK2R w KQkq - 0 8|c4f7|930|22,6
5r2/4R2p/3p2pk/p2b4/6K1/6P1/P5r1/R7 w - a6 0 32|a1h1 g2h2 h1h2|930|1,4
2kr4/Bp3ppp/3Rp3/n7/5P1K/1P6/P1P5/8 w - - 1 24|d6d8 c8d8 a7b6 d8c8 b6a5|930|40,1,18
r4rk1/pp1q1ppp/4pb2/8/5P2/1P1B4/P4PPP/R2Q1RK1 w - - 0 17|d3h7 g8h7 d1d7|930|20,7
3N1r1k/1p4pp/p2p1q2/1P6/PBn5/7Q/6PP/4R2K b - - 0 26|f6f1 e1f1 f8f1|931|3,4,9
6k1/4rp1p/p2p2p1/Q2Pb3/4q3/3N1R1P/6P1/7K w - - 0 38|a5d8 g8g7 d8e7|931|1,18
r1b1kb1r/ppp1pppp/5n2/n2P4/3P1Bq1/2NQ1N2/PPP2PPP/2KR1B1R b kq - 4 8|g4f4|931|5
3rk3/pBn1pp1p/6p1/8/2b5/2N4P/PP3PP1/3R2K1 w - - 1 23|b7c6 e8f8 d1d8|931|29,1
6k1/4p2p/3pP1p1/8/8/1P5q/5Q1P/4n2K w - - 0 36|f2f7 g8h8 f7f8|932|1,4
r1bq2k1/pp3ppp/3p4/2p1r3/8/1QPB4/P5PP/3R1RK1 w - - 0 18|b3f7 g8h8 f7f8 d8f8 f1f8|932|7,15
r1b2k2/p4pbp/6p1/3pp1q1/8/8/PPP2PPP/R2Q1RK1 w - - 0 15|d1d5 c8b7 d5b7|932|
1r1q1rk1/5p1p/b3p1p1/p1bpP2N/P4PQ1/1P5R/1P4PP/R6K w - - 0 23|h5f6 d8f6 e5f6|932|7
r1nqkb1r/p4ppp/Pp6/2p3P1/4N2P/1P2P3/1Q1P1P2/R4KNR b kq - 0 18|d8d3 f1g2 d3e4|932|18
8/4Qppk/3p3p/8/P4K2/8/5Pq1/8 w - - 0 31|e7e4 g2e4 f4e4|932|1,19
3r2k1/pb3p1p/1p2pp1Q/5q1N/8/2Pr1P2/PP2R1PP/R6K w - - 6 24|h6g7|933|6
8/2p5/8/2P1K3/8/2k5/8/8 b - - 5 72|c3c4 c5c6 c4c5 e5e4 c5c6|933|1,2
r5k1/ppQ2rpp/2n5/1q6/8/8/P5PP/5R1K w - - 0 22|c7f7 g8h8 f7f8 a8f8 f1f8|934|3,1,15
6k1/7p/6p1/4p1P1/5R1P/4rp1B/PP5K/3r4 w - - 0 46|h3e6 g8g7 f4f7|934|1
3r3k/2q2Bp1/4P2p/p7/P7/8/1P2Q3/1K6 w - - 7 48|e6e7 c7e7 e2e7|934|0,1
1r3rk1/2Qb1pp1/4p1p1/4P1N1/5P2/1PppP2P/K6B/1R5R b - - 0 27|b8a8 c7a5 a8a5|935|4
4Q3/6pk/p3p1p1/3pqpP1/5r2/1P6/P7/1KR5 w - - 4 34|c1h1 f4h4 h1h4|935|1,4
2bk4/1p2b2p/6p1/1B2np2/4p3/2B1P2P/1P3PP1/5K2 w - - 0 35|c3a5 b7b6 a5b6|935|43,1,4
8/2k4N/2p2p2/1b3p2/1r5P/4PP2/6PK/2R5 b - - 0 31|b4h4 h2g3 h4h7|935|1,18
8/8/p1p1p3/3p1pr1/3P2B1/P4KP1/1P1k1B2/8 w - f6 0 41|f2e3 d2d3 e3g5|935|1,18
2k5/2p2p2/1bp1b3/P3q2p/P3Pnp1/2P3QP/3N1PP1/R4RK1 b - - 1 25|f4e2 g1h2 e2g3|935|18
r1k4r/pp3Bpp/1bp1N2n/4pq2/Q3N1b1/8/PP3PPP/R1n2R1K w - - 4 18|e4d6 c8b8 d6f5|935|18
1r2r1k1/p4p2/6p1/6qp/2p1B1n1/P1P2P1Q/2P3PP/3RRK2 b - - 0 24|g4e3 e1e3 g5e3|935|18
3R4/r4kpp/3P1p2/2P5/1P2R3/8/1r4PP/6K1 b - - 2 30|a7a1 e4e1 a1e1|936|1,4,14
6k1/p4pp1/7p/4r3/P2pB3/4n2P/1r4P1/2R1R2K w - - 0 30|c1c8 e5e8 c8e8|936|1,4,13
6k1/7p/2q3p1/1p3p2/1P1QpP2/2r5/6PP/3R2K1 w - - 2 32|d4d8 g8g7 d1d7 c6d7 d8d7|936|1
r2q1rk1/pp3pp1/2pp3p/4b1n1/4P3/1PNP3P/1PP2Q1N/R1B2RK1 b - - 0 19|g5h3 g1h1 h3f2|936|18
8/5p2/2R1b1k1/8/8/1r2n2P/3R2PK/8 b - - 5 49|e3f1 h2g1 f1d2|936|1,18
5rk1/1b5p/8/3p4/pP1N2p1/P2nP1P1/3N2K1/1R6 b - - 1 30|f8f2 g2g1 f2d2|936|1,18
8/8/P4p2/8/2p3P1/3p1k2/n2K4/8 w - - 0 55|a6a7 c4c3 d2d3 a2b4 d3c3|937|0,1,10
7k/6p1/7p/3r4/1N3R2/p6P/Pb3PP1/6K1 b - - 2 43|d5d1 g1h2 b2e5|938|1,23
7r/1p2pk2/p2p1pp1/3P4/2P1RR1r/1P5P/1PB2nP1/7K w - - 5 32|f4f2 h4e4 c2e4|938|1,5
2r2rk1/p4ppp/b3p3/q1bpP3/3N1P2/1P2QN2/P1R2KPP/7R b - - 8 19|c5d4 f3d4 c8c2|938|20,23
r3k2r/pR2ppb1/3p1qpp/8/4P3/8/P3QPP1/5RK1 w kq - 0 21|e2b5 e8f8 b7b8 a8b8 b5b8|939|3,15
8/5PR1/8/1R2Pkpp/p7/6PK/PPr4P/8 b - - 0 42|g5g4 g7g4 h5g4 h3h4 c2h2|939|1,15,14
rnb2rk1/pp3ppp/4pn2/3pN3/3q1P2/3B4/PP1Q1PPP/RN2K2R w KQ - 0 11|d3h7 g8h7 d2d4|939|20,7
8/7r/1pkPp1p1/p3Bb2/P1P1RP2/K1P4p/7R/8 b - - 0 49|f5e4 d6d7 c6d7|939|1,5
3k2r1/p7/8/8/6B1/2R1P3/r7/4K3 w - - 3 40|c3c8 d8e7 c8g8|939|1,21
2kr1b1r/Qpp2ppp/8/3q4/8/3P2P1/PPP1R2P/R1B3K1 b - - 0 16|f8c5 a7c5 d5c5|939|18
r5rk/pp3R2/2pp4/4p1b1/8/5Q1P/P1q5/5R1K w - - 0 25|f3h5 g5h6 h5h6 c2h7 f7h7|940|30,15
8/6pk/6pp/1N1p4/P2P1P1K/5Q1P/8/6r1 b - - 0 44|g6g5 f4g5 h6g5 h4h5 g7g6|940|1,15
8/8/R7/r4pP1/kp2p3/4P1K1/5P2/8 w - - 2 47|a6a5 a4a5 g5g6 b4b3 g6g7|940|0,1,14
4r2k/pnp3pp/1p1P4/4Nq2/2Q2B2/4b1P1/PP4KP/8 w - - 1 28|e5f7 f5f7 c4f7|940|
1b1r2k1/p4pP1/2p4R/2p5/2P3P1/7P/PB6/7K b - - 0 33|d8d1 h1g2 d1d2 g2f3 d2b2|940|1,30,18
3rr1k1/2R2pbp/6p1/p7/PpQpq3/1P4PP/4NP2/2R3K1 w - - 11 34|c4f7 g8h8 f7g7|941|7,4
1r4k1/p1p1n1p1/3p3p/2p2r1P/N4qR1/P2R4/1PP3Q1/1K3B2 b - - 0 21|f4f1 g2f1 f5f1|941|
1n1qk1nr/1p1b2pp/5p2/rp1pp3/1Q6/B3PN2/2PP1PPP/R3KB1R w KQk - 0 12|b4f8|942|6
6k1/ppp2pqp/2p3p1/8/5Q2/5P2/PPP3rP/3r1R1K w - - 0 25|f1d1 g2e2 d1d8 g7f8 d8f8|942|1
3r3k/pp4p1/7p/3b4/4n1P1/3RP2P/PP4B1/4K3 w - - 0 28|g2e4 d5e4 d3d8|942|1
8/2kr1p2/R2p1p2/5P2/1K1pP3/8/7P/8 w - - 0 32|a6a7 c7c6 a7d7|942|1,14
8/8/4k3/1PK1p1P1/4P3/5p1p/3R1B2/7r b - - 1 51|h1c1 c5b6 h3h2 f2c5 h2h1q|942|0,1,11
5Q2/8/8/8/pPk5/P7/3p1K2/6q1 w - - 0 53|f2g1 d2d1q f8f1 d1f1 g1f1|943|1,19
5r2/ppp3pk/1b2Q2p/4N3/3PN2q/P1P5/1P1B2PP/4R2K b - - 0 23|h4e1 d2e1 f8f1|944|3,4,9
8/8/4R3/1B1p2q1/P2k4/5p2/KPP5/8 w - - 0 44|c2c3 d4c5 b2b4|944|1,4
r3k2r/p3bppp/2p1q3/2P5/1P1P2n1/P1N1B3/5PR1/R2QK3 b Qkq - 0 17|g4e3 f2e3 e6e3|944|
5k2/pp3p1p/3P2p1/8/8/6PP/r4PK1/4R3 w - - 3 32|d6d7 a2d2 e1e8|944|0,1,14
q4rk1/p4ppp/1p6/2bp4/4nP2/P4N1P/1PP3P1/RNB2Q1K b - - 0 15|e4g3 h1h2 g3f1|944|18
r3kbnr/2p2pp1/p2p4/1p6/3pPBp1/1B1P4/PPPK1Pq1/RN1QR3 b kq - 1 15|g2f2 d2c1 f2f4|944|18
3rr1k1/2p3b1/1p2q2Q/3p4/1P6/2B4P/6P1/3R2K1 w - - 0 34|h6g7|945|6
2b1r1k1/r2n1p1p/p4bpB/2pp4/8/4Q3/PqPK1PPP/3R3R w - - 0 23|e3e8 d7f8 e8f8|945|18,5,4
5R2/1p2r3/1Kb4N/2P3p1/8/4k3/8/8 w - - 18 60|h6f5 e3e2 f5e7|945|1,18
1r3rk1/p2p1ppp/6q1/Pb1P1N2/1p2P1Q1/1N6/6PP/R5K1 w - - 5 27|f5e7 g8h8 e7g6|945|18
1Q6/1b1q2kp/p5p1/K2p4/1P1P4/7P/6r1/R4R2 b - - 8 37|d7b5|946|1,6
1b6/6p1/1PPkp3/3p1p2/3P3p/4KP1B/5P2/8 w - - 2 36|c6c7 b8c7 b6c7|946|0,8,1,47
8/5p2/3k1PP1/8/1p6/1K6/8/8 b - - 0 55|f7g6 f6f7 d6e7 f7f8r e7f8|946|1,2
r3kbnr/ppp1pppp/b1P5/4q3/8/2N2P2/PPP1N1PP/R1BQK2R w KQkq - 3 11|d1d7|947|6
rnbqr2k/ppp1np1p/6pP/3p4/8/2N5/PPP1QPP1/R3KB1R w KQ - 2 14|e2e5 f7f6 e5f6 h8g8 f6g7|947|7,15
2b1k1r1/2pp1pPp/7B/1p6/1P1P4/1p3P2/1P5P/rN3RK1 w - - 0 17|f1e1 e8d8 h6g5 f7f6 g5f6|947|1,15
1n1qk2r/r3bppp/p2p1n2/1p1BpPB1/8/2N5/PPP2PPP/R2Q1RK1 b k - 5 11|f6d5 c3d5 e7g5|947|20
3Nn1k1/6bp/4p1p1/1p6/1B6/P3nqPB/5P1P/3R2K1 w - - 2 32|h3e6 g8h8 d8f7 f3f7 e6f7 e3d1 f7e8|947|
r4rk1/1ppq1ppp/1p1p4/3Np3/3nP1R1/P2P1P1P/1PP1nP1K/R2Q4 w - - 0 16|d5f6 g8h8 f6d7|947|23
7k/p5p1/6q1/1p5p/3R2PP/4PNK1/8/8 w - - 0 41|d4d8 h8h7 f3g5 g6g5 h4g5|947|1
6k1/4pp2/3p1b1p/4q1pP/4P3/1P6/P1Q5/1K1R4 b - - 3 35|e5a1|948|1,6
4q1k1/7p/5P1Q/p1n1p3/2Pp3B/1P5P/2n4K/8 w - - 0 39|h6g7|948|1,6
2r2rk1/pp2ppbp/3p2p1/5N2/2PP1B2/1PnQ4/q3BPPP/2R2RK1 b - - 0 19|c3e2 d3e2 a2e2|948|18
B5k1/pR3p1p/3rb1p1/2p5/8/6P1/P3PP1P/5K2 b - - 1 23|d6d1 f1g2 e6d5 f2f3 d5b7|948|1,18
2r2rk1/p5np/3p2q1/1ppNn3/5p2/2PP4/PP4B1/2R1QR1K w - - 2 26|d5e7 g8h8 e7g6|949|18
2r3rk/6pp/p6N/1p1p4/2pq4/P6P/1P3PP1/4R1K1 w - - 0 37|h6f7|950|1,6,38
5bk1/5pp1/3p1qBp/1RpP4/2P5/1P2Q3/5PPP/6K1 b - - 0 28|f6a1 g6b1 a1b1 e3c1 b1c1|950|3,1,15
7R/8/8/8/R6p/P1P3pk/7n/7K b - - 1 47|g3g2 h1g1 h2f3 g1f2 g2g1q|950|0,1,30,11
8/6pp/4p3/4k3/1R2r1K1/1P4P1/7P/8 w - - 0 34|b4e4 e5e4 b3b4 e6e5 b4b5|950|25,1,12,14
r2k1b2/ppp2Q1p/5p2/2q1N3/4P3/8/PP1P2PP/n1B4K w - - 4 20|f7d7|951|6
8/8/5k2/2R2pp1/8/4PKP1/7r/8 b - - 3 37|g5g4 f3f4 h2f2|951|1,4,14
4r1k1/pR6/3p3B/6p1/8/1P1n1P2/P4P1P/6K1 b - - 0 32|e8e1 g1g2 d3f4 g2g3 e1g1|951|1,15
r7/1NnR4/p1p1pkp1/P7/2B2P2/4n1PK/1P6/8 b - - 0 41|a8h8 d7h7 h8h7|952|28,1,4
8/2B5/p1p1kPpp/3p2P1/1P1P1K2/P7/8/7b w - - 0 54|g5h6 g6g5 f4g5|952|8,1
3r4/ppb4k/2p2p2/5NRp/3P4/1P3P2/P4P2/7K w - - 0 29|g5g7 h7h8 g7c7|952|1,18
r2q1rk1/1bp2pb1/p2p2p1/1p3pn1/4P2Q/1PNP1N2/1PP3PP/R4RK1 w - - 0 17|f3g5 d8g5 h4g5|952|
8/5p2/4r1k1/p1P5/5PP1/r3B2P/4K3/2R5 w - - 1 36|f4f5 g6f6 f5e6|952|1,18
r3kbnr/p4ppp/1qp1p3/3pP3/3P4/2Q4P/PP3PP1/RNB1K2R b KQkq - 1 11|f8b4 e1g1 b4c3|953|23
2r1kb1r/1b3pp1/p2p3p/3Pp3/1p4P1/1N3P2/PPPQ3P/1K1R1Bq1 w k - 0 18|f1b5 a6b5 d1g1|953|20
8/1b1r4/p2Br1pk/1pK1Pp1p/2p2P2/4P3/PP1R4/6R1 w - - 4 47|d6f8 h6h7 d2d7|953|20,1
r7/5pk1/5q2/1QPp1n2/pP1PpNp1/P3P1P1/5KP1/8 w - - 1 36|f4h5 g7g6 h5f6|953|1,18
3q1rk1/5pp1/4p2p/8/Pn6/3Q3P/1r2NPP1/RR4K1 w - - 2 26|d3d8 b2b1 a1b1 f8d8 b1b4|953|
8/7p/KP1k4/8/8/6p1/8/8 w - - 2 61|b6b7 d6c7 a6a7 g3g2 b7b8q|953|0,1,2,11
r3kb1r/p4pp1/2p1pn1p/q2p4/1PnP4/2NBP2P/1PP1QPP1/2KRB2R b kq - 0 14|a5a1 c3b1 a1b2|954|4,26
2r2rk1/pbqp4/1pn1pbp1/2p4Q/3P1P2/2P1P1R1/PP4PP/RNB3K1 w - - 0 17|h5g6 f6g7 g6g7|954|7,4
8/7R/2b3pB/5p2/1k6/1p3P2/5KPP/8 b - - 3 44|b3b2 h7e7 b2b1q|954|0,1,11
4k3/2p3p1/3b2rp/8/2B5/1P3R1P/6P1/7K w - - 7 34|c4f7 e8d7 f7g6|954|1,18
8/p7/1p6/2pr2Rp/r1k2Pp1/6P1/5PK1/5R2 w - - 3 42|f1c1 c4b3 g5d5|954|29,1,14
1r4k1/R5pp/1p1NN1n1/8/8/2n5/7P/6K1 w - - 2 31|a7g7 g8h8 d6f7|955|1,4
krr5/1b3p1p/pQp3p1/2Pq1p2/8/R1P4P/P1P3P1/4R1K1 w - - 3 34|a3a6 b7a6 b6a6|955|4,26
Qn3r2/6pk/p3p2p/1p2P3/1BpP4/P3P2R/2q3PP/R5K1 b - - 1 24|c2f2 g1h1 f2f1 a1f1 f8f1|955|3,15,9
8/5p2/7P/5bK1/1p6/2k5/8/8 w - - 0 58|g5f5 c3c2 h6h7 b4b3 h7h8q|955|0,1,5,11
8/5pk1/6r1/1P5Q/P7/8/7p/1K6 b - - 13 59|g6g1 b1c2 h2h1q h5h1 g1h1|955|0,1,11,17
4B3/8/8/k1p5/8/pp1K4/2r5/R7 w - - 0 59|a1a3 a5b6 a3b3 b6c7 d3c2|956|1
8/N5pp/1p2k3/2p2R2/P3p1P1/1PPp4/7P/6K1 b - g3 0 36|d3d2 g1f2 d2d1q|956|0,1,11
6rk/5p2/4p3/p2pR3/1pP3r1/nP5K/P5B1/2R5 w - - 0 37|e5h5 h8g7 h3g4|956|1,37
3rk2r/pQ3pp1/4p3/4P2p/q2n3P/P3B3/5PP1/R4RK1 b k - 0 20|d4e2 g1h1 a4h4|957|20,7,4
rk2r3/1p3R2/4q1p1/6P1/7P/P7/1P6/K1Q5 w - - 3 43|c1c7 b8a7 c7b7|957|1,4
r1bq1rk1/pp1nppbp/5np1/1BP1N3/8/2N5/PPP2PPP/R1BQ1RK1 b - - 0 9|d7e5 d1d8 f8d8|957|5
rn2kb1r/p4ppp/1qp2n2/1p2p2b/1P1pP3/1BPP1P2/PB2N1PP/RN1Q1RK1 b kq - 2 11|d4c3 g1h1 c3b2|957|0,20,34
2r5/p3kppp/1p2p3/3n4/8/n1q1PN2/5PPP/1QRB2K1 w - - 0 23|c1c3 a3b1 c3c8|957|
5k2/p5pp/b7/8/4Rp2/1B3P2/P4KPP/2r5 b - - 3 34|c1f1|958|1,6,16
6k1/5R2/2p3p1/p1p3q1/3p3b/3P3P/PPP1r1N1/5R1K w - - 1 27|f7f8 g8h7 f1f7 h7h6 f8h8|958|1,30,15
rn5r/ppp1k1pp/3pbq2/8/2BN4/2N5/PPP1Q1PP/R4RK1 b - - 0 16|f6d4 g1h1 d4c4|958|
3r1k2/p7/1p2p2p/4p3/4P3/P2b2PP/1P6/3R1B1K b - - 1 35|d3e4 h1g1 d8d1|958|20,1
r2q3r/p3kppp/3bb3/1B6/8/4N3/PP1Q1PPP/R3R1K1 b - - 3 19|d6h2 g1h2 d8d2|959|20,7
6k1/6pp/1p6/p1n5/4q3/1P2pN2/P4PPP/3Q2K1 w - - 0 29|d1d8 g8f7 f3g5 f7g6 g5e4|959|1,18
2r2rk1/1b1qbpp1/pp2p2p/4P2n/8/2pB2BP/PPQ2PP1/2RR2K1 w - - 0 20|d3h7 g8h8 d1d7|959|20
r2r2k1/8/p4Pp1/1p1P2qp/1P4b1/P2B2P1/5Q1P/R4R1K b - - 0 29|g5d5 h1g1 d5d3|959|18
2k4r/ppp2Qpp/4p3/8/2P5/1Pb3P1/P3KPq1/3R4 w - - 0 19|f7d7 c8b8 d7d8 h8d8 d1d8|960|3,1,15,9
4k1r1/pp3pb1/2bpq2p/3N4/2r1P3/4BN2/PPP3Q1/2K3R1 w - - 4 23|d5c7 e8d7 c7e6 g7b2 c1b2|960|18
8/6p1/5p1k/6p1/6P1/P4Q1K/6P1/6q1 b - - 9 39|g1h1 h3g3 h1h4|961|1,4,19
8/ppb2pk1/5q2/2pp4/5P2/2PB2P1/PPQBr3/5R1K b - - 0 26|f6h6 h1g1 h6h2|961|4
r4r1k/1pp1N1p1/p2p1q1p/3Qp3/1P2P3/P1P3R1/5PPP/R5K1 b - - 0 22|f6f2 g1h1 f2f1 a1f1 f8f1|961|3,15,9
1N3kn1/2p2b2/3p1qp1/p2P3p/2PQ4/4P3/PP4PP/6K1 w - - 0 32|b8d7 f8e7 d7f6|961|1,18
5rk1/5ppp/3B4/8/p7/5P2/2BK2PP/8 b - - 0 41|f8d8 d2e3 d8d6|961|1,23
3r2k1/1ppq3p/pn2p1pQ/8/2PnN1P1/1P6/P3B2P/3R2K1 w - - 2 26|e4f6 g8f7 f6d7|961|18
1r3n2/3RN1kp/pp1P4/4pp1B/3q4/6P1/5P1P/3Q2K1 b - - 0 28|d4d1 h5d1 f8d7|962|48
rn2b1k1/pp4pp/3b1p2/3Q4/3P4/N1P2N2/Pq1B1PPP/R5K1 b - - 0 16|e8f7 d5d6 b2a1|962|25
1rq3k1/5p2/5Pp1/2p3Pp/2PnNQ2/1P1R3B/8/6K1 b - - 0 45|d4e2 g1f2 e2f4|962|18
R7/p4ppk/2P1b2p/8/7P/6P1/2r2PBK/8 w - - 7 29|g2e4 f7f5 e4c2|962|1,18
2k2b1r/7p/p2p4/2pB2R1/3pP3/1P1P4/2PK1P2/8 b - - 0 33|f8h6 f2f4 h6g5|962|1,23
8/p5pp/3p1pk1/3Q4/P1P3P1/1q5P/7K/8 w - - 0 47|d5h5|963|1,6,19
r5k1/2q2n1p/p3Q1pP/8/8/P7/5PP1/4R1K1 w - - 1 34|e6e8 a8e8 e1e8|963|1,4,9
8/5R2/4p3/6kp/8/4PK2/B7/r7 b - - 0 52|a1f1 f3g2 f1f7|963|1,21
2k5/pp3p2/8/2p1n3/2PpPp1q/3P1B1r/P1P2R1K/5Q2 w - - 0 34|f1h3 h4h3 h2h3|963|1
8/1p3k2/p5pp/8/1Pb1N1P1/4p2P/1P6/6K1 w - - 1 45|e4d6 f7e6 d6c4 e3e2 g1f2|963|1,18
4N3/p2k4/5p2/2p1p3/4q3/P7/1P6/K5R1 w - - 4 48|e8f6 d7e6 f6e4|963|1,18
r1b1kb1r/pppp1ppp/2N5/4P3/2B4q/8/PPP3PP/RNBn1RK1 w kq - 0 9|c4f7|964|22,6
r4rk1/5qpp/p1p1p3/3pB3/6Q1/4R3/PPP2PPP/R5K1 b - - 5 18|f7f2 g1h1 f2f1 a1f1 f8f1|964|3,18,15,9
r1b1k2r/pppp1ppp/5n2/8/1bPnq3/2N3P1/PP2NP1P/R1BQKBR1 w Qkq - 0 9|d1d4 e4d4 e2d4|964|
8/8/8/2krR3/3n1PPK/Np6/1P6/8 b - - 2 67|d4f3 h4h5 f3e5|964|1,18
6rk/2pbr3/np1p1p1p/p3pP1P/2P1P3/P2P1B1P/1P1Q3K/8 w - - 0 28|d2h6 e7h7 h6f6|964|1,7
3r1k2/p3qBpp/4P3/4nb2/1Q6/2P5/P5PP/K2R4 w - - 3 28|d1d8|965|6,23
rn4k1/p4rp1/1pp3P1/2n5/2Q1p1q1/2P5/P5P1/R5K1 w - - 0 26|c4f7 g8h8 f7f8|965|4
7k/p5bp/2pp1Qb1/4p3/4P3/2N1q3/PPP3PP/7K w - - 2 23|f6d8 g6e8 d8e8 g7f8 e8f8|965|1,15
1r1b1r1k/ppq4P/4b1pQ/2p1Pp2/3p4/P4B2/1PP5/K2R4 w - - 3 33|h6f8 h8h7 d1h1 d8h4 h1h4|966|30,7,15
r1b3k1/pp2q1bp/2p2rp1/4p1B1/3PP3/2PB4/PP4PP/R2Q1RK1 b - - 1 16|f6f1 d1f1 e7g5 d3c4 g8h8|966|20
1r4k1/5ppp/4p3/8/p7/P1P5/3QqPPP/6K1 w - - 0 26|d2e2 b8b1 e2f1|966|1,5
rq3rk1/5p2/p3p1p1/6R1/P2PR3/2P3QP/5PP1/6K1 b - - 0 31|b8b1 g1h2 b1e4|966|1,18
r1bqk2r/p1pp1ppp/2p5/8/8/2b1B3/P1P1QPPP/R3KB1R w KQkq - 0 10|e3d2 e8f8 d2c3|966|20,34
2Q5/5ppk/1p6/6r1/3N4/P3PqnP/5P1K/R4R2 b - - 1 31|g3f1 a1f1 f3g2|967|4
8/8/1k1p1Rp1/pBnPn1K1/P7/2P5/2P5/8 b - - 4 40|c5e4 g5f4 e4f6|967|1,18
6k1/1p1bq1p1/3b1p1p/1r1P4/R2BP3/6P1/2Q2P1P/1R4K1 b - - 2 29|b5b1 c2b1 d7a4|967|20
2r2k2/2q2p2/3p2p1/4pn1r/1p2Q3/1N3P2/PPPR4/2K4R w - - 0 31|h1h5 g6h5 e4f5|968|44
2r1r1k1/1pq2pbp/p2p1np1/P2P2B1/2pQP3/2N2P1P/1P4P1/R3R1K1 w - - 2 20|g5f6 g7f6 d4f6|968|
8/8/3k1p2/pr3Pp1/R2KP2p/7P/6P1/8 b - - 7 47|b5b4 a4b4 a5b4|968|1,14
4k3/4n2R/5K2/4B3/5P2/8/8/6r1 b - - 14 51|g1g6|969|1,6
r1bq1rk1/pp2bppp/2n1p3/1N6/2P2P2/1P1p1N2/PB1P3P/R2QKB1R b KQ - 0 13|e7h4 f3h4 d8h4|969|4
2r3k1/p4p1p/1p3rp1/n2R4/2q5/Q3P3/5PPP/3RK3 w - - 0 27|d5d8 c8d8 d1d8 g8g7 a3f8|969|15
4r1k1/pb4p1/5p1p/8/3RN3/P3R2P/r4PP1/6K1 w - - 7 36|e4f6 g7f6 e3e8|969|20,1
2r5/7p/R5p1/1Bb2k2/3n1P2/6P1/PP3P2/6K1 w - - 1 35|b5d7 f5e4 d7c8|969|1,18
8/8/5n2/3pR3/1p3kr1/1P1B4/1KP5/8 w - - 1 50|e5f5 f4e3 f5f6|969|1,18
5k2/5b2/5R2/7p/7P/p4PQ1/q5P1/7K b - - 0 40|a2a1 h1h2 a1f6|970|1,18
r1b2rk1/pppp1ppp/7n/4n3/1q2BR2/4P3/PPPN2PP/R2Q2K1 w - - 1 13|e4h7 g8h7 f4b4|970|20
8/pp5Q/2p1p1r1/6q1/1PPP1p2/P4Pk1/6P1/3R2K1 b - - 2 47|g6h6 h7h6 g5h6|970|1
8/8/4p3/n2k1p2/2BP2p1/2K1PPP1/8/8 b - - 0 52|a5c4 e3e4 f5e4 f3e4 d5e4|970|1
r1bq2kr/ppppb1pp/2n5/4P1NQ/3p4/8/PPP2PPP/RNB1K2R w KQ - 1 9|h5f7|971|6
5r1k/pp2Q1pp/4p3/8/4p3/2P1R3/Pq3PPP/4R1K1 b - - 0 23|b2f2 g1h1 f2f1 e1f1 f8f1|971|3,1,15,9
1R6/1P6/4pkp1/5p2/3P4/3KP2p/8/1r6 w - - 0 44|b8f8 f6e7 b7b8q b1b8 f8b8|971|0,31,1,11,14
8/2Rr3k/p3r2p/1b3N2/1p6/1P6/P2K2R1/8 w - - 0 42|c7d7 b5d7 g2g7 h7h8 g7d7|972|1,18
1Q6/8/6pk/8/8/PKq5/7p/8 w - - 0 54|b3c3 h2h1q b8h8 h6g5 h8h1|972|1,19,21
rnq3k1/5p2/2p5/3p4/pP1P1bpQ/P7/1P1n1PPP/1BK5 w - - 0 30|h4h7 g8f8 h7h8 f8e7 h8c8|972|21
r3k3/1p2qp2/p3p1p1/1N1p4/2n4r/6Q1/PPP2PPP/2KR3R w q - 0 21|b5c7 e8f8 c7a8|973|18
3rr3/1kp2Rpp/p1pq4/Q2P2b1/3N2b1/3PP1P1/PP4BP/R5K1 b - - 0 21|g5e3 g1h1 e3d4|973|18
2r1k3/3q1pp1/p3p3/1p2P1Br/1Q6/P7/1P6/K1R5 w - - 6 31|c1c8 d7c8 b4e7|974|1,4
r4r1k/p1q1np1p/1ppb1p2/8/6N1/2BP4/PPP2PPP/R3R1K1 w - - 0 22|c3f6 h8g8 g4h6|974|7,4
k4r2/p4Npp/2R1Qn2/3r2N1/3q4/8/PP3PPP/6K1 w - - 0 25|c6c8 f8c8 e6c8|974|4,26
3r3k/ppp3p1/1N5p/5b2/2Q3n1/5N2/PP4PP/R1B4K b - - 0 22|d8d1 f3e1 d1e1 c4f1 e1f1|974|15
8/3r1ppp/4p3/k3P3/pR2R2P/2P5/3r1PP1/2K5 b - - 5 31|d2d1 c1b2 d7d2 b2a3 d1a1|974|1,30,15,14
r3r1k1/p4p2/1p4pR/8/3Q4/8/PPq2PPP/R4K2 b - - 0 22|c2e2 f1g1 e2e1 a1e1 e8e1|974|3,1,15,9
5r1k/1p4p1/3Q3p/8/8/P1P5/1q4PP/3R2K1 b - - 0 27|b2f2 g1h1 f2f1 d1f1 f8f1|974|3,1,15,9
8/1p3ppp/pk2p3/1n1p4/1K1P3P/1P2P3/P3BPP1/8 b - - 2 31|a6a5 b4a4 b5c3 a4a3 c3e2|974|1,18
8/1Q4pk/p6p/8/8/3pqP2/1P4PP/5K2 w - - 0 38|b7e4 e3e4 f3e4|974|1,19
8/2p5/4n3/p1pr2pk/4N2p/PPP2P2/4K3/6R1 w - - 15 50|e4f6 h5g6 f6d5|974|1,18
3b1rk1/6pp/2p2p2/ppN5/8/7P/PPP2P2/2KR4 w - - 2 27|c5e6 d8e7 e6f8|974|1
rq2k2r/pp2ppbp/1n4p1/5bB1/3n4/5N2/PPP1QPPP/R3KB1R w KQkq - 0 14|e2e7|975|6
r1r3k1/1b1qp2p/4N1pB/p2P4/Pp1Q4/1Bn5/6PP/1R3RK1 b - - 3 26|c3e2 g1h1 e2d4|975|18
2rq1rk1/pp3p1p/4p1pQ/4n1b1/3p4/5N2/PP3PPP/R4RK1 w - - 0 19|f3g5 d8g5 h6g5|975|
8/5Rpk/7p/4B3/1K6/1P3P2/6rP/2n5 b - - 3 43|c1d3 b4c3 d3e5|975|1,18
2r3k1/p4pp1/4pq2/6p1/1P1r2P1/P2Q2P1/5PK1/R6R w - - 0 27|d3h7 g8f8 h7h8 f8e7 h8c8|975|1,21
7k/5ppp/3N3n/2r5/p2K1PP1/P1r4P/2P5/4R3 w - - 6 36|e1e8 h6g8 d6f7|976|29,1,4,38
r3k1nr/pp1bpp1p/3p2p1/1q1N4/2R1P2b/7P/2PPK1P1/2BQ1B1R w kq - 0 14|d5c7 e8f8 c7b5|976|18
8/8/4n3/1k3Np1/3p2P1/3K4/8/8 w - - 0 57|f5d4 b5b6 d4e6|976|1,10
6k1/Q3bpp1/p1rp1q1p/1p2p3/1P2P3/P2R1NPP/5P1K/8 w - - 1 32|a7a8 e7f8 a8c6|976|1,18
2kr3r/2p1qpb1/p7/1p2n2p/5BnP/N1P2Q2/PP4P1/2KR1B1R w - - 0 19|f3a8|977|6
8/5p2/p2Rp1p1/kp2P1P1/5P2/PP3r2/2K5/8 w - - 4 38|b3b4 a5a4 d6a6|977|29,1,4,14
6k1/8/6p1/7p/1P2P2P/1P1q4/2r2R2/1K3R2 w - - 0 38|f2f8 g8h7 f1f7 h7h6 f8h8|977|1,30,15,17
r4rk1/p3ppbp/Pp1q1np1/3PpbB1/2B5/2N2P2/1PPQ2PP/3RR1K1 b - - 0 18|d6c5 g1h1 c5c4|977|18
4r1k1/pppq1ppp/3p4/2nN4/8/5PQP/PPP1r3/R4RK1 w - - 2 20|d5f6 g8f8 f6d7|977|7,23
4r1k1/3pqpp1/5r2/Q7/8/5N2/PP3BPP/3R1K1R b - - 0 23|e7e2 f1g1 e2d1|977|18
8/6k1/ppb1R3/4P3/1PPKp3/r3B3/8/8 b - - 0 45|a3d3|978|1,33,6,13
r4r2/p1p2pkp/1p1p1qp1/3P1bQ1/2P1P2R/2Nn4/PP4PP/6K1 w - - 0 22|g5h6 g7h8 h6h7|978|4
2q2rk1/1p1bppbp/p2p1np1/B7/2P1P3/P4P2/1P2B1PP/2RQ1RK1 b - - 2 18|c8c5 g1h1 c5a5|978|18
8/8/4k3/5p2/5Bp1/bK4P1/P7/8 b - - 2 41|a3d6 f4d6 e6d6|978|8,1
4rrk1/6p1/7p/2pb1p2/1pP4q/1P2pQBP/P5P1/R4BK1 w - - 0 31|f3d5 g8h8 g3h4|979|
r2qk2r/pbp2ppp/1pnb4/1B1Q4/8/4BN2/PPP2PPP/R4RK1 b kq - 0 12|d6h2 f3h2 d8d5|979|20,7
2k5/2P2K2/6p1/5bP1/2RB4/2P5/4r2P/8 b - - 4 49|f5e6 f7g6 e6c4|979|1,18
8/8/2P1N1p1/7p/5R2/6k1/P1K5/3r1q2 w - - 0 45|f4f1 d1f1 c6c7|979|0,1
8/8/3n3R/2pk4/p3p3/P3K3/1P6/8 b - - 3 49|d6f5 e3e2 f5h6|979|1,18
rn1qr1k1/pp3ppp/3p4/2bP1b2/8/3B1N1P/PPP1QnP1/R1B1R1K1 w - - 0 13|e2e8 d8e8 e1e8|980|3,4
3r2k1/2p2ppp/p7/n3p1q1/2P1P3/7P/2rN1QP1/5R1K w - - 0 29|f2f7 g8h8 f7f8 d8f8 f1f8|980|3,15,9
6rk/1pp2ppb/1p1p4/5P2/4P3/8/PPB2q2/3KR2R w - - 0 43|h1h7 h8h7 e1h1 f2h2 h1h2|980|40,1,15,9
8/pp6/2p3Q1/3p4/2k3KP/P1P3b1/8/1N3q2 w - - 0 46|b1d2 c4c3 d2f1|980|1,18
r4r2/6bk/pqP3pp/1pp1p3/P3Pp2/1QN2P2/1P4PP/2R2RK1 b - a3 0 23|c5c4 g1h1 c4b3|980|20,34
3r3r/pp3pp1/5k2/2Qbq3/3N4/5PP1/PPP1N2p/R3R2K b - - 0 22|d5f3 d4f3 e5c5|980|20
6k1/pp4p1/2p5/5r2/4Q3/8/PPq2PPP/4R1K1 b - - 0 24|c2f2 g1h1 f2f1 e1f1 f5f1|981|3,1,15,9
4r3/2pqrRk1/3p2pp/p1pPb1QP/2P1P3/1P6/P1B3P1/5R1K b - - 0 30|e7f7 g5g6 g7f8 g6f7 d7f7 f1f7 f8f7|981|
8/8/5Kp1/6rk/8/8/5R2/8 w - - 0 74|f2h2 h5g4 h2g2 g4f3 g2g5|981|29,1,14,21
rn3rk1/1b3ppp/p5q1/1p1p1N2/2p3Q1/1BP4P/P1P2PP1/R3R1K1 w - - 4 18|f5e7 g8h8 e7g6|982|18
8/1p1n1kB1/2pp3p/1p1P1K1P/1P2P1P1/P7/8/8 b - - 0 35|f7g7 d5c6 b7c6|982|1,5
3r2k1/5p2/3q4/PB1Pb1p1/4Pp1p/5P2/6P1/3RQ1K1 b - - 0 44|d6c5 g1h2 c5b5|982|1,18
1q6/4kpp1/p4np1/N2p4/3Pp3/4PP2/P2QBKPr/8 w - - 0 28|a5c6 e7f8 c6b8|982|1,18
r3kb1r/p4ppp/b3p3/2pq4/3Q4/4BN2/PPP2PPP/R3K2R w KQkq - 0 12|d4a4 a6b5 a4b5|982|18
rn2kb1r/pp1b1ppp/5q2/2pN4/Q2P4/5N2/PP2PPPP/R3KB1R b KQkq - 0 9|d7a4 d5f6 g7f6|982|
8/5k2/5p2/7p/1PR1Ppp1/2P2P1P/6PK/3r4 b - - 0 37|g4g3|983|1,6,14
6k1/6p1/5p1p/2R5/3B1n2/2p2P1P/1b3KP1/8 b - - 3 36|f4d3 f2e2 d3c5 d4c5 c3c2|983|0,1,18
5r2/ppp3pp/3k4/8/7q/2N2R2/PPPP2PP/R1B3K1 b - - 0 22|h4e1 f3f1 e1f1|984|1,4
6r1/ppqk1p2/5pr1/2pP1p1Q/2P4P/PP4P1/5P2/R3R1K1 b - - 0 26|g6g3 g1f1 g3g1|984|1,7
8/6pk/7p/pRp5/8/3p3P/P5P1/7K b - - 1 44|d3d2 b5b1 c5c4 b1d1 c4c3|984|0,1,12,14
8/5kpp/1p2p3/p1p1Q3/2Pn4/6P1/P4P1P/6K1 b - - 0 32|d4f3 g1f1 f3e5|984|1,18
2kr1r2/1pp5/p5p1/7p/3PP1q1/P6Q/1PPR2PR/2K5 b - - 1 26|f8f1 d2d1 f1d1|985|1,4,26
1rbR1rk1/6q1/p3p2B/8/8/p5R1/1P3PPP/6K1 w - - 0 31|g3g7 g8h8 d8f8|985|4
r3k1nr/pp3ppp/2n5/1qbNPb2/8/8/PP1B1PPP/R2QK1NR w KQkq - 0 11|d5c7 e8f8 c7b5|985|18
5k1r/1p3ppp/1p4b1/n2P2B1/1P4P1/P2B1P2/3r3P/1K1R3R b - - 6 26|g6d3 b1a1 a5b3|986|32,4,26
2k2r1r/p2n3p/1pqbQ3/8/3P4/2P2N2/P2B1PPP/R4RK1 b - - 0 19|d6h2 f3h2 c6e6|986|20
5rk1/1p3pb1/4p1p1/2B5/1P3N2/5P2/1r2N1PP/4K2R b K - 3 22|b2b1 e1f2 b1h1|986|21
r1bqk1nr/ppp2p1p/6p1/3Qb3/8/2N1PP2/PPP3PP/R3KBNR b KQkq - 0 8|e5c3 b2c3 d8d5|986|48
2Q5/p4qpk/1p3pN1/4p1n1/P1Pr2P1/2R2P1P/6K1/8 w - - 4 36|c8h8 h7g6 h8h5|987|1,4,9
r5r1/pp1k1p2/2p5/3pQ3/3P4/2NB4/PPP2q2/1K6 w - - 2 29|d3f5 f2f5 e5f5|987|1
r3k1r1/5p2/p1b1p2p/1p5Q/3q4/5p2/PPPR2PP/R1B3K1 w q - 2 25|d2d4 g8g2 g1f1|987|
5rk1/2p4p/p1p3p1/4p3/3qN3/P1PP3P/1P2Q1P1/1R2K3 b - - 0 22|d4g1 e1d2 g1b1|987|1,21
r1bq2k1/2pp1rp1/p4NQp/1p6/3nP3/1B6/PP3PPP/R4RK1 b - - 1 17|d8f6 b3f7 f6f7 g6f7 g8f7|987|
2r2rk1/pp3ppp/3p4/2qP4/4R2b/2B2P2/PP4PP/R2Q2K1 w - - 9 20|c3d4 h4f6 d4c5|987|25
r6r/pp1q1p1k/2pb1Q1p/3p4/3P1P2/3b2R1/PPP3PP/RN4K1 w - - 0 19|g3g7|988|33,6
8/3b4/k6p/p4p2/4pr2/P5r1/1R3P1N/7K w - - 0 40|f2g3 f4f3 h2f3|988|1,47
8/r4pk1/4p1pp/3pP3/1Q6/8/2q3PP/R5K1 w - - 0 36|a1a7 c2d1 g1f2|988|1,5
8/8/8/3r1kpp/4pp2/5P2/4RKPP/8 w - - 0 50|f3e4 f5e6 e4d5|989|34,35,1,18,14
r1b1r1k1/pp3pbp/6p1/4B3/1PP1n3/5NP1/P3PPBP/3RK2R b K - 1 14|g7e5 f3e5 e8e5|990|
r4rk1/p2pbppp/q1p5/4P3/N2QPn2/1PP5/PB4PP/2KR3R b - - 4 16|f4e2 c1b1 e2d4|990|18
8/4k3/1p4pp/3P1p2/2p2P1P/2P1K3/8/8 w - - 0 49|e3d4 e7d7 d4c4|990|1,2
r2q1rk1/1p2bpp1/p2p1n1p/3Pp3/4N1b1/P5N1/1PP2PPP/R1BQ1RK1 w - - 2 14|e4f6 e7f6 d1g4|990|7
Bn2k2r/p3pp1p/3p2p1/8/8/2P3b1/P1QB1P1q/3RRK2 b k - 6 23|h2f2|991|6
3Q1Q2/7k/6p1/7p/7r/6qP/6P1/6RK b - - 0 50|h4h3 g2h3 g3h3|991|1,4,9
4r1k1/4rp2/2p4p/p2PNQp1/8/2P5/Pq3PPP/R3R1K1 b - - 0 26|e7e5 f5e5 e8e5|991|
r1b1k2r/pp1ppp1p/5bp1/q1P4P/3n4/2NB1N2/P1PB1P1P/R2QK2R b KQkq - 3 11|d4f3 d1f3 f6c3|991|20
8/5k1p/1P1R1p2/8/4PP2/3K4/7P/2r5 b - - 0 38|c1d1 d3c4 d1d6|991|1,14,21
8/p1Pk4/5p2/3Nr3/4PK1p/P7/6P1/8 w - - 1 43|d5f6 d7c7 f4e5|991|1
1k3r2/pp2b3/2n2p1p/3rp1p1/1P2q1P1/P3B2P/5P2/2R1QRK1 w - - 2 27|e3a7 b8a7 e1e4|991|20,26
4r1rk/2pb2pp/2pp1p2/p7/P1q1PN2/4PQR1/2P3PP/5RK1 w - - 0 31|f4g6 h7g6 g3h3 d7h3 f3h3|992|15,9
8/8/4kp2/R6p/4K2P/4P1P1/p7/r7 b - - 9 58|f6f5 e4f4 a1f1|992|1,14
r2q1rk1/3bbppp/3p4/1pnPp1B1/p7/P4NNP/1PB2PP1/R2QR1K1 b - - 0 19|e7g5 f3g5 d8g5|992|
4Q3/1pq1r1kp/p7/8/7P/6N1/PP4PK/8 w - - 1 34|e8e7 c7e7 g3f5 g7f6 f5e7|992|40,1,18,9
1r1q1rk1/pp3p1p/2nb1p2/3Q4/3P4/P4N2/1P3PPP/RN3RK1 b - - 0 14|d6h2 f3h2 d8d5|992|20,7
6k1/5p2/r4p2/P4N2/4n1K1/4R2R/2r4P/8 b - - 3 50|e4f2 g4g3 f2h3|992|1,18
8/pR2R1bk/2p3n1/2P4p/8/q7/2Q5/1K6 b - - 9 51|a3a1|993|1,6
6k1/pp3p2/2p2P1p/q7/5PP1/1b6/1r4BP/2K1R3 w - - 0 29|e1e8 g8h7 g2e4 a5f5 e4f5|993|1,15
1r5k/6p1/5b2/5K2/5P2/p7/Bpr5/3R4 w - - 2 46|d1h1 c2h2 h1h2 f6h4 h2h4|993|1,15,13
1k5r/ppp4p/2Q3p1/2b5/8/8/P1r2PPP/1R1R2K1 b - - 0 20|c5f2 g1f1 c2c6|993|20,1
6k1/Q2bqr1p/2rpp1pR/p7/Pp2P3/1B3P2/1PP3P1/2KR4 b - - 7 22|e7g5 c1b1 g5h6|993|18
2br2k1/1p3p2/5Pp1/pNqPb1Pp/P3R1nP/1P3Q2/6B1/3R3K b - - 0 40|g4f2 f3f2 c5f2|993|18
3q2k1/5pp1/p2b3p/1p6/8/1P1Q4/5PPP/2R3K1 b - - 3 28|d6h2 g1h2 d8d3|994|20,1
k1r5/p1r2qRp/Pp2p3/1B1pQ3/1P1Pbp2/2P4P/6PK/2R5 b - - 1 36|f7g7 e5g7 c7g7|994|
8/1b6/p2k2p1/1p1P1p1p/1P3P1P/P2K4/B7/8 b - - 2 40|b7d5 a2d5 d6d5 d3e3 d5c4|994|8,1,24
2r5/pp2k3/4p1P1/2qpP3/4pP1K/1P6/P2Q4/7R b - - 0 32|c8h8 h4g3 h8h1|994|1,21
1R3bk1/3bpp1p/3p2p1/q2P4/3Q4/r4NP1/5NPP/6K1 w - - 4 32|b8f8 g8f8 d4h8|995|40,4,9
8/8/8/1p1Q4/pP2K3/Pk4P1/8/3q4 b - - 3 69|d1d5 e4d5 b3a3|995|1,19
r1bq3r/ppp1bk1p/6p1/3nQ3/2B5/2P5/PP3PPP/nNBK3R w - - 0 12|c4d5 d8d5 e5d5|995|
5rk1/6pp/pqp1p3/4P3/1PK5/2P3P1/P3Q2P/3R4 b - b3 0 28|b6b5 c4b3 b5e2|995|1,21
8/8/p3k1r1/1p2b3/5P1p/PP2R1N1/1P4K1/8 b - f3 0 39|g6g3 e3g3 h4g3|995|1
r4rk1/pppb2pp/3bp3/3p4/3q4/P1NB3P/1PP2PP1/R2Q1RK1 w - - 0 14|d3h7 g8h7 d1d4|996|20,7
5kr1/p7/5bPK/1R6/8/1P6/8/8 w - - 5 66|b5b8 f8e7 b8g8|996|29,1,21
8/1pp2Bp1/p5Rp/6q1/P3Qnk1/2P3P1/1P1r1P2/5K2 b - - 11 39|d2d1 e4e1 d1e1|996|1
4r2k/ppp2p1B/5p2/7q/3Q4/2P2P2/PP3P1P/6RK b - - 8 26|h5f3 g1g2 e8e1|997|1,4
2b1k1nr/p2ppp1p/2p3p1/q7/4P3/P1B5/1RP2PPP/3QKB1R b Kk - 0 11|a5c3 d1d2 c3b2|997|18
8/p7/3p2p1/2p3P1/1pPk1p1P/1P3P2/P2K4/8 w - - 4 37|h4h5 g6h5 g5g6 d4e5 g6g7|997|0,1,2
r4rk1/p1p3pp/2p2np1/1pq5/2NPP1P1/2P4P/PP2QP2/R3K2R b KQ - 0 15|c5c4 e2c4 b5c4|997|
8/2B5/ppp5/4Pk1p/3P1n1P/4K3/PP6/8 b - - 0 38|f4d5 e3f2 d5c7|997|1,18
r7/2K4R/4p3/3bB2P/5Pk1/8/8/8 b - - 2 51|a8a7 c7d6 a7h7|997|1,21
4r1k1/pp3pbp/1q2r1p1/8/3N1B2/1P6/P1Q2PPP/2R1R1K1 b - - 0 22|e6e1 c1e1 e8e1|998|3,4
2r5/6pk/p2pQ1p1/1p3p2/3P3q/1P4RP/P1r2P1K/6R1 w - - 1 32|e6g6 h7h8 g6g7|998|1,4
3r1rk1/ppp2ppp/3q4/4n3/6n1/1P2PN2/PB2QPPP/R4RK1 b - - 2 16|e5f3 g2f3 d6h2|998|20,7,4
4rrk1/1R4pp/p7/7Q/8/P2p3P/1b3PP1/6K1 b - - 0 28|e8e1 g1h2 b2e5 h5e5 e1e5|998|1
3r1rk1/p7/4pN1Q/qp6/8/2P2P2/PP3P1P/3R2K1 b - - 0 25|f8f6 h6f6 d8d1|998|1
r4rk1/p1p2pp1/6p1/1p2n3/6P1/1QP2P1P/PP1Nq3/2KRR3 b - - 2 20|e5d3 c1b1 d3e1|998|18
r6k/pp2q1pp/2p2p2/4n3/2B1P2R/2P5/PP4PP/3Q2K1 w - - 3 21|h4h7 h8h7 d1h5|999|40,1,7,4,9
8/5p1p/3p4/kp1N1P2/3KP3/6P1/b6P/8 b - - 2 46|a2d5 d4d5 b5b4 d5d6 b4b3 e4e5 b3b2|999|0,1,12
2r3k1/5ppp/1p2q3/p2N4/4p3/Q2nP3/PP4PP/3R2K1 w - - 4 27|d5e7 g8h8 e7c8|999|1,18
6k1/6p1/5b1p/1p2r3/1P1B4/5P1P/1P3P2/2R3K1 b - - 5 33|e5g5 g1f1 f6d4|999|20,1
2R5/6kp/5p2/3p2p1/P5Q1/1p2qPb1/1P4K1/2R5 b - - 0 37|e3f2 g2h3 f2h2|1000|1,4
5rk1/6pp/2R3p1/P7/2N5/2r1P3/1p4PP/1R4K1 b - - 1 30|c3c1 b1c1 b2c1q|1000|0,1,4,11
r1b3k1/pp4pp/1q6/3pN3/2pP4/7P/PP3QP1/R3K3 w Q - 1 23|f2f7 g8h8 f7e8|1000|3,1,4
8/3q2kp/Q5p1/2B1ppP1/1P6/7P/8/2r2NK1 w - - 1 36|a6f6 g7g8 f6f8|1000|1,4
r4rk1/1pp2ppp/p3b3/4p3/4N2Q/3B1P2/PqP3PP/R4K2 w - - 0 19|e4f6 g7f6 h4h7|1000|7,4,9
6k1/r4pp1/4b2p/2NpP3/2pn3N/7P/1RQ2PPK/q7 w - - 0 35|b2b8 e6c8 b8c8|1000|4
8/1r2k3/2Rp3p/1P1nppp1/1PN5/1K3PP1/7P/8 b - - 1 41|b7b5 c4d6 b5b4|1000|1
5rk1/6p1/p1p4p/3p2N1/2pP3b/2P5/PP5Q/5R1K b - - 0 28|f8f1 h1g2 f1f2 g2g1 f2h2|1000|1,30,5,21
8/p2r1ppk/2p3p1/5b2/2qN1Q2/P2p3P/5PP1/4R1K1 w - - 2 29|f4h4 h7g8 e1e8|1001|1,4
7R/1p2k2p/p2n2p1/4K3/8/6P1/P6P/8 b - - 11 37|d6f7 e5e4 f7h8|1001|1,18
8/8/4kpRP/8/4P2K/4q1B1/8/8 b - - 0 55|e3e4 h4h3 e4g6|1001|1,18
r7/8/P4p1p/1K1k1p2/5P2/6P1/1R5P/8 b - - 0 39|a8b8 b5a4 b8b2 a6a7 b2a2|1001|1,14,21
8/2rk4/p5Q1/1p1qR1b1/3P4/6P1/PPP4P/1K6 b - - 4 35|d5h1 e5e1 h1e1|1002|1,4
rn1qr1k1/pp3pp1/2p2b1p/3p1b2/3P4/2NB4/PP2QPPP/R3R1K1 w - - 0 16|e2e8 d8e8 e1e8|1002|7
rq6/1bpn3k/1p1b1p1P/6p1/p2P4/2N5/PPPQ1PP1/2KR3R b - - 0 22|d6f4 d2f4 g5f4|1002|23
6k1/5qp1/pp2b2p/3p4/3P4/2P1prPP/PP2QNK1/5R2 w - - 0 36|e2f3 f7f3 g2f3|1002|1
2kr3r/Qpp2ppp/2q1bn2/8/4p3/2N2PP1/PPP3BP/2KR3R w - - 0 15|a7a8|1003|6
3r2k1/p4ppp/1p2p3/2Pr4/8/P3P3/2qBQPPP/1R1R2K1 b - - 0 21|d5d2 e2d2 d8d2|1003|
2r5/8/3k2P1/8/3PR1PP/Pp1K4/8/8 b - - 0 49|b3b2 e4e1 c8c1 e1c1 b2c1q|1003|0,1,11,14
8/4nk2/1p2p3/p1p1P1Bp/2PpK2P/PP1P4/8/8 w - - 3 47|g5e7 f7e7 e4f4|1004|25,1
7r/Q7/8/8/3np3/3k4/5PP1/6K1 b - - 2 53|d4e2 g1f1 h8h1|1005|1,4
3r4/1p1q2k1/p3Q1P1/2p2pb1/6p1/2PP2N1/PP3P2/1K2R3 b - - 0 26|d7d3 b1a1 d3d1 e1d1 d8d1|1005|3,1,15,9
r5k1/pppbn1pp/3ppr2/3P4/2Pq4/3B4/PP3PPP/2RQR1K1 w - - 0 17|d3h7 g8h7 d1d4|1005|20,7
1k1r3r/2pn2p1/1p1b4/pP2qp2/N3n3/P1B1PQ1P/2P2PB1/R4RK1 b - - 3 25|e5h2|1006|6
6k1/5ppp/p2q4/1p1p2P1/1P1Q3P/P1n1PN2/2r2P2/5RK1 b - - 0 28|c3e2 g1g2 e2d4|1006|1,18
8/8/p5p1/1p2p1P1/3pk2P/P7/1P2K3/8 w - - 2 45|h4h5 g6h5 g5g6|1006|1,2
k7/1p6/8/5p2/p2Np3/P1qnP1P1/K6R/8 w - - 0 43|h2h8 a8a7 d4b5 a7b6 b5c3|1006|1,18
kr6/ppQ2pp1/6p1/8/3R4/P1P2P1P/KP2p1P1/5q2 w - - 2 34|d4d8 f1a1 a2a1 e2e1q a1a2|1006|1
2b2rk1/r3Nppp/p2q1b2/1pp5/8/5B1P/PPP2PP1/R2QR1K1 b - - 5 18|f6e7 d1d6 e7d6|1007|
r1b1R3/k2p4/pp1N3Q/2pn4/2P5/5P2/6P1/qB4K1 w - - 2 33|d6c8 a8c8 e8c8|1007|
4r2r/p1p2ppp/2n5/5P2/R3N3/1k6/1P1R1K2/8 w - - 6 31|e4c5|1008|32,1,6
4r1k1/5p2/pq4p1/1p4N1/1Pp1P2Q/6KP/6P1/3n4 w - - 0 36|h4h7 g8f8 h7f7|1008|1,4
4r2k/1Q3pp1/p3qn1p/8/8/1P5N/5PPP/2R2K1R b - - 0 27|e6e2 f1g1 e2e1 c1e1 e8e1|1008|3,15,9
r1bqkb1r/1p1n1ppp/p3p3/4N3/3Q1P2/2N5/PPP3PP/R1B2RK1 b kq - 0 11|f8c5 d4c5 d7c5|1008|23
2r1n2b/4k3/p5p1/4P1N1/8/2p4P/P6B/5R1K w - - 0 35|f1f7 e7d8 g5e6|1009|32,1,4
r5k1/5p1p/pq1p2p1/3Pr3/1p2n3/3RB1QP/PPP3PK/5R2 b - - 6 26|e4g3 e3b6 g3f1|1009|
r3r1k1/p1p2pp1/1p1b3p/n5q1/Q2P4/2P3P1/PB1N1PKP/1R2R3 w - - 3 18|e1e8 a8e8 a4e8|1009|7
2r3k1/5ppp/4p1q1/3p4/3P1PP1/2R1Q2P/1P6/6K1 b - - 0 28|g6b1 e3c1 b1c1 c3c1 c8c1|1009|1,30,27
r1bq1rk1/ppp1bppp/3p1n2/4p3/2PnP1P1/P1NP3P/1P2NP2/R1BQKB1R b KQ - 2 8|d4f3|1010|6
6k1/pQ3pp1/7p/8/3P4/6Pb/PPR2r1P/6K1 b - - 0 25|f2f1|1010|1,6,16
6r1/1p3r1p/p3k3/2Bp4/8/1P2Pb2/P2R2PP/5R1K b - - 3 24|f3g2 d2g2 f7f1 g2g1 g8g1|1011|20,1,18,15
3r3k/pp3Qbp/2p5/3p4/2P2P2/7P/PP3qPK/4R3 w - - 0 28|e1e8 d8e8 f7e8 g7f8 e8f8|1011|1,15
4r1k1/pQp1rpp1/7p/8/4P3/P2BR2q/1PP2P2/3R2K1 b - - 1 22|h3g4 e3g3 g4d1|1011|18
8/7p/5ppk/3B4/1P2P2P/1N3K2/p2r1PP1/8 b - - 1 35|d2d3 f3e2 d3b3 d5b3 a2a1q|1011|0,1,11
2R2nk1/pp3ppp/1q3r2/5N2/8/1P6/1P3PPP/5RK1 w - - 1 25|f5e7 g8h8 c8f8|1012|3,29,1,4
r3kb1r/2p2ppp/2nqp3/1B6/3P4/4BQ2/PPP2PPP/R3K2R b KQkq - 2 13|d6b4 c2c3 b4b5|1012|18
6k1/3q1pbp/6p1/1p2p3/1P2Q3/P2p3P/r2B1PP1/3R2K1 w - - 6 27|e4a8 g7f8 d2h6|1012|1,23
2k5/R5p1/1KP2b1p/8/5P2/6P1/8/8 b - - 0 54|f6d4 b6a5 d4a7|1012|1,21
N6k/3R4/1p1pN2p/3Pb3/1PP1B3/7K/3q1rP1/8 w - - 0 30|d7d8 f2f8 d8f8|1013|4,13
6k1/5pp1/p4b1p/1p1B4/8/P5P1/1Pr2P1P/4R1K1 w - - 0 24|e1e8 g8h7 d5e4 g7g6 e4c2|1013|1,18
5r1k/p4Qp1/b2q3p/2ppN3/5P2/8/PP4PP/6K1 w - - 1 26|e5g6 d6g6 f7g6|1014|1,18
r1b3r1/ppp4k/4p1pP/4N2P/3PQp2/2PKn3/PP3q2/R4BR1 b - - 6 25|f2c2|1015|6
3r1k2/1p4pp/5pb1/p1p5/Pq2P1P1/1B1Q1P1P/2P5/1K6 w - - 0 27|d3d8 g6e8 d8d6|1015|1,4
3r2k1/pp3pbp/2n1b1p1/2p5/4P3/2P3P1/PP3PBP/R1B1NK2 b - - 0 17|e6c4 f1g1 d8d1|1015|23
8/3k4/3r4/4K3/8/8/R7/8 w - - 4 64|a2a7 d7c6 a7a6 c6c5 a6d6|1015|1,30,14
2r5/6kp/4pbp1/2Pq4/2QN4/4p3/6PP/2R3K1 w - - 4 32|d4e6 d5e6 c4e6|1015|1,27
r3k2r/pp4p1/n1pp1pq1/4p3/4P1Q1/PBNP3P/1PP2R2/R4K2 b kq - 0 21|g6g4 h3g4 h8h1 f1e2 h1a1|1015|30,21
r4rk1/2pq1ppp/p7/1pPpn3/6b1/P4N2/BP3PPP/2RQ1RK1 w - - 0 20|f3e5 g4d1 e5d7|1015|5
r3r1k1/ppp1Bp1p/3pbp2/b7/4P3/3R4/PPP2PPP/2K4R w - - 0 17|d3g3 e6g4 g3g4 g8h8 e7f6|1016|7,15,49
8/2r2k2/p5p1/1p1RP1P1/3N2n1/P1P5/1P6/3K4 b - - 0 39|g4e3 d1c1 e3d5|1016|1,18
r1q2rk1/1Rp2ppp/p1N5/8/2P1n3/1Q2b2P/P4PP1/5RK1 w - - 0 20|c6e7 g8h8 e7c8|1016|18
6k1/4bppp/4p3/N2pN3/Q2P4/4P1P1/P4PPK/1rq5 w - - 7 29|a4e8 e7f8 e8f7 g8h8 f7f8|1017|29,1,18,15
8/4R3/1pr3p1/5k2/1P1p1r2/3R1PK1/7P/8 w - - 3 37|e7f7 f5e5 f7f4|1017|1,14
2rkr3/pp1n3p/8/1B1Qpq2/8/8/PPP2PPP/1K1R2NR b - - 4 17|f5c2 b1a1 c2c1 d1c1 c8c1|1018|3,15,9
8/2K5/5R2/P7/7k/8/5p2/7q w - - 0 63|f6h6 h4g4 h6h1|1018|1,17,21
3r1n1k/3r1Nbp/p5p1/3Qp3/q4P2/4B2P/P1R3P1/5RK1 b - - 3 35|d7f7 d5f7 a4c2|1018|
3r2k1/p3bppp/1r6/B7/3P1P2/1P6/K5PP/3R1R2 b - - 4 26|b6a6 a2b2 a6a5|1018|1,23
rn4k1/1bpp1pp1/p4q1p/1pbP3r/4PP2/P1N3N1/BP4PP/R2Q1R1K b - - 4 18|h5h2 h1h2 f6h4|1019|40,7,4,9
3r2k1/6pp/n3R3/q3Pp1Q/5P2/1PN5/1P1r2PP/6K1 w - - 2 30|e6e8 d8e8 h5e8|1019|4
8/7p/3rk1p1/1p3p2/1P1R1P2/4K2P/6P1/8 w - - 0 39|d4d6 e6d6 e3d4|1019|25,1,14,24
8/pr4k1/2RP4/3KP3/r5P1/1p2PR2/6nP/8 w - - 3 43|c6c7 b7c7 d6c7|1019|0,1
1k3r2/2p5/ppP1R1p1/1Pb1N3/P2p1PP1/3Pn2p/7P/6K1 w - - 0 38|e5d7 b8a7 d7f8|1019|1,18
r2kr3/ppbn1ppp/8/3N4/8/7P/PPP2PP1/R3R1K1 w - - 1 18|e1e8 d8e8 d5c7|1020|40
rnb1kb1r/ppp2ppp/5n2/3p4/3q4/3BN3/PPP2PPP/RNBQK2R w KQkq - 0 8|d3b5 c7c6 d1d4|1020|20
3R4/p5kp/5pp1/8/8/1KQ1q3/P7/8 b - - 9 38|e3b6 c3b4 b6d8|1021|1,18
8/2R4p/p5pk/4P3/5rq1/4B3/1P4QP/6K1 b - - 11 37|g4d1 g2f1 d1f1|1022|1,4
r6k/2p2p1p/p1p2p1B/8/3P3q/7P/PP6/6RK w - - 4 25|h6g7 h8g8 g7f6 g8f8 f6h4|1022|20,34,1
8/p3qpk1/4p1pb/3pP3/5PQ1/6P1/P1r5/R1R3K1 b - - 2 27|e7c5 g1h1 c2c1 a1c1 c5c1|1022|1,30
4k3/pp2r3/2p1p2p/5p2/6q1/2Q1pN2/PP4PP/7K w - - 6 39|c3h8 e8d7 f3e5 d7c7 e5g4|1022|1,30,18
6K1/4nQPP/1pp1q3/1k6/3P4/P7/1P6/8 w - - 9 62|g8f8 e7g6 f7g6|1022|1
r7/p1p5/3p1k2/6R1/6PP/2P2b2/PP6/6K1 w - - 3 36|g5f5 f6g7 f5f3|1022|1,18
1r4r1/2k5/1p2p2B/p3P3/Q1Ppq2b/6Pb/PP3R1P/R5K1 w - - 1 32|f2f7 h4e7 f7e7 c7d8 a4d7|1023|15
6k1/1p3r2/p1p2P1p/3pr1qP/1P3RP1/P3p2Q/8/5R1K w - - 1 38|f4f5 e3e2 f5g5|1023|1,47
r2qr1k1/1pp2pp1/p5bn/3p2b1/3P4/PBP2P1P/1P1Q2PN/4RRK1 w - - 2 21|e1e8 d8e8 d2g5|1024|7
r6r/pp3p1p/2k5/1Nn1p3/P3n3/2PRP2P/1P5P/2KR4 w - - 1 20|d3d6 e4d6 d1d6|1025|50,4,9
8/8/5k2/8/1q3N2/3K1P2/8/8 w - - 3 73|f4d5 f6f5 d5b4 f5f4 d3e2|1025|25,1,18
5rk1/1R3p2/p4p1p/8/8/P2Q4/1q3PPP/2rR2K1 b - - 0 25|c1d1 d3d1 b2b7|1025|1,48
r1b3k1/pp3p2/1n5p/3pN1q1/2pP4/2P4P/PP3QP1/1K1R3n w - - 0 23|f2f7 g8h8 e5g6 g5g6 f7g6|1025|7
8/5p1k/p3pBr1/2Pp2Q1/q1pP3P/P4P2/5K2/8 w - - 0 34|g5h5 g6h6 h5f7|1026|1,4
r3kbnr/pp3ppp/2n1p3/8/3q4/5B2/PP3PPP/RNBQ1RK1 w kq - 0 10|f3c6 b7c6 d1d4|1026|48
r3r1k1/p5pp/2p1pn2/3p4/3q4/3B4/P1P3PP/1R1Q1R1K w - - 2 23|d3h7 f6h7 d1d4|1026|20,7
3R4/5R1P/2p5/p1k2p2/1P3n2/1PK1p3/7r/8 b - - 0 58|a5b4|1027|1,6
r5k1/pp3pb1/5Pp1/q7/1n1Q4/BP2P3/P4P2/R3K2R b KQ - 0 27|b4c2 e1f1 c2d4|1027|34,35,18
8/p7/kp5R/8/2N5/PP6/r4nK1/8 b - - 3 51|f2g4 g2f3 g4h6|1027|20,34,1
8/8/7k/8/rp3K2/8/PR6/8 b - - 0 59|b4b3 f4g3 b3a2 b2a2 a4a2|1027|0,20,1,14
8/1p2r1pk/1q2P1np/p1p4Q/P7/3B2PP/1P6/4R1K1 b - - 6 38|c5c4 g1f1 c4d3|1027|20,34,1
4r1k1/p5pp/4p3/4P3/5P2/2Pr2Pq/PQ3K1P/3R3R b - - 1 29|d3d1 h1d1 h3h2|1028|1
r2q1rk1/p1p1bpp1/2p1bn1p/8/2PP3B/1PNB1P2/P5PP/R2Q1RK1 b - - 0 14|d8d4 h4f2 d4c3|1028|18
2kr1qn1/pppb1p1Q/2npp2p/8/3P4/2PBP3/PP1N1PPP/R3K2R b KQ - 2 14|g8f6 h7e4 f6e4|1028|47
4r3/pp5p/4k3/2p1r3/3p4/PP1P4/3KR2P/5R2 w - - 2 32|e2e5 e6e5 f1e1 e5d6 e1e8|1028|40,1,30,14,21
5k2/5pp1/1rNp1n2/1qpPpP1p/p3P2P/P2QR1P1/KP6/8 b - - 10 45|b5b2|1030|1,6
8/3Q1p2/1p4p1/4PpP1/1k3q2/7K/R5P1/6R1 b - - 1 42|f4g4 h3h2 g4h4|1030|1,4
3q3k/1p3Bp1/p6p/4Q3/Pb2P3/7P/5PP1/6K1 b - - 0 29|d8d1 g1h2 b4d6 e5g3 d6g3|1030|1,23
2k4r/pp3pp1/2n4p/8/3rP1n1/P7/1PPQBq2/2KR3R w - - 0 18|e2g4 c8b8 d2f2|1030|20
1kn5/5R2/r4p2/1p6/3BK3/5P2/6PP/8 b - - 1 40|c8d6 e4d5 d6f7|1030|1,18
3r2k1/1pQ2ppp/8/2B2R2/1P5q/8/3rn1PP/1R5K w - - 6 32|c7f7 g8h8 f7f8 d8f8 f5f8|1031|3,15,9
1r3r2/pb2Q2k/1p5p/2pq1pp1/8/N1PP4/PP3PPP/R3R1K1 b - - 5 25|f8f7 e7f7 d5f7|1031|25
r7/2k1qp2/p1b1p3/2n1P3/PQ6/1P1B2P1/2P2K1P/R2R4 b - - 0 27|c5d3 d1d3 e7b4|1031|20
2r2r2/pp2Npkp/3p4/2p3b1/2BpP1nq/7P/PPPP2P1/R1B2RK1 w - - 0 20|e7f5 g7h8 f5h4|1031|18
r5k1/pp3ppp/8/1b2P3/3Q1R2/8/PP5q/4K1R1 b - - 5 27|h2e2|1032|1,6
r5k1/r4q1p/2p1pQp1/4Bp2/3P4/6PP/p4P1K/R7 w - - 8 51|f6h8|1032|1,6
r1bq1b1r/pp1n2kp/2pp1np1/6N1/4P3/5Q2/PB3PPP/RN3RK1 w - - 4 12|g5e6 g7f7 e6d8|1032|18
2R5/3r2pk/3b3p/5p2/1p2r3/4qQPK/1P5P/2R5 w - - 0 43|f3f5 g7g6 f5d7|1033|18
7k/4q1pp/1p3p2/r3pP2/3bP1RP/PQ5K/4R1P1/8 b - - 0 44|a5a3 g4g3 a3b3|1033|1,23
8/8/5Kp1/7p/Pk3P2/1P6/8/8 b - - 1 67|h5h4 f6g6 h4h3 f4f5 h3h2 f5f6 h2h1q|1033|0,1,2,11,12
r3kb1r/pp1nppp1/2p3p1/4q3/4B1P1/3P3P/PPP2P2/R1BQ1R1K b kq - 0 13|h8h3 h1g1 e5h2|1034|7,4
1rb3k1/q4rP1/4p2p/3p3p/3P1P2/2P5/2QK3P/3R2R1 w - - 1 30|c2h7 g8h7 g7g8q|1034|0,40,4,11
r4b1r/pp2k1pp/4bp2/3p4/5q1Q/1B1pnN2/PP4PP/R1B2K1R w - - 6 20|c1e3 f4h4 f3h4|1034|
8/p2r1p2/7p/6p1/4Pk2/5P1P/P2R2P1/3K4 b - - 0 35|d7d2 d1d2 f4g3|1034|1,14
QK6/2R5/8/8/8/4k3/5p2/r7 b - - 0 82|a1a8 b8a8 f2f1q|1035|0,1,11
5bk1/6pp/2q1P3/3p1Q2/3Pp2P/4B1P1/1p4K1/8 w - - 0 30|f5f7 g8h8 f7f8|1036|29,1,4
r4k1r/ppq3pp/2p1Rb2/7Q/3P4/P7/1PP2PP1/4RK2 w - - 2 20|e6e8 a8e8 e1e8|1036|4
2b5/5p2/p5p1/1p1p2P1/2k2P2/R2p4/1K6/8 w - - 4 54|a3c3 c4d4 c3c8 d3d2 b2c2|1036|1,21
2rkr3/ppp3RR/4P3/8/b1P1p3/P3P3/4KP2/8 w - - 3 37|g7d7 a4d7 h7d7|1037|1,33,4,9
r1b3k1/pp3rpp/8/3Qn1q1/8/7P/PPB2PP1/RN3RK1 b - - 0 17|e5f3 d5f3 f7f3|1037|7,23
r2qkb1r/pp2pppp/2b2n2/8/3B4/1P3N2/P1PP1PPP/RN1Q1RK1 b kq - 0 9|c6f3 d1f3 d8d4|1037|44,48
3rqrbk/ppp1P1p1/1b5p/3N1p2/2Q2B2/3B2P1/PPP3K1/4R2R b - - 0 31|g8d5 c4d5 d8d5 e7f8q e8f8|1037|18
8/4b3/2bk2p1/3p3p/2pP1P1P/2B1P1KB/8/8 w - - 7 43|c3b4 d6c7 b4e7|1037|8,29,1,21
1r6/p6k/2n3pN/4P3/3p1Q2/P2b4/6PP/6K1 b - - 0 34|b8b1 g1f2 b1f1 f2g3 f1f4|1037|1,21
1r4k1/p1p3p1/4p1rp/5p1q/3P4/1PP1PN2/P2K3Q/R4R2 b - - 5 27|h5h2 f3h2 g6g2 d2d3 g2h2|1038|18
8/5p2/1kbB2p1/4Pp1p/p2n1P2/1pR3P1/1K5P/8 w - - 0 59|d6c5 b6c7 c5d4|1038|1,18
r4rk1/2p1qppp/p3n3/3Q4/P4B2/8/1PP2PPP/R3R1K1 b - - 2 19|e6f4 e1e7 f4d5|1038|5
5rk1/pp6/5ppP/3qr2Q/3p4/8/1P3PP1/4R1K1 w - - 0 33|h5g6 g8h8 g6g7|1039|1,4
r4k2/p2nb3/1p3PQp/3q4/8/P1p1P1R1/1P2BP2/2K3R1 b - - 0 29|d5d2 c1b1 d2b2|1039|18,4
r2q3k/pp3r2/3pbpQ1/8/3pPR2/3P4/PPP3PP/R5K1 w - - 5 22|f4h4 f7h7 g6h7|1040|7,4
6k1/pp3pp1/1n4p1/2p5/6P1/1B3PKP/PP1r4/4R3 w - - 6 29|e1e8 g8h7 b3f7|1040|29,1
3q3k/7r/p5Q1/2p1R3/4P2b/6P1/P5K1/8 w - - 0 52|e5e8 d8e8 g6e8|1040|1,18
5k2/8/pRr4K/1b5p/4p3/P3P3/1P4PP/8 w - - 1 40|b6c6 b5c6 h6h5|1040|1
8/Rp1kBpp1/7r/3N4/2BpP1b1/8/PPP5/2K5 b - - 0 28|h6h1 c4f1 h1f1 c1d2 f1d1|1041|1,15,16
2r3k1/1Q4pp/p1q1p3/3p4/3P2P1/2r1P3/5RP1/3R2K1 w - - 1 25|b7f7 g8h8 f7f8 c8f8 f2f8|1041|3,1,15,9
rnbqk2r/pppp1ppp/4pbn1/6B1/4N3/3P2P1/PPP1PPBP/R2QK1NR b KQkq - 6 6|f6g5 e4g5 d8g5|1041|
r3k2r/pp3pp1/2ppq3/4p3/3bP3/P2P1QP1/1PP1N1PN/2R2R1K b kq - 1 22|h8h2 h1h2 e6h6 f3h5 h6h5|1042|40,7,15,9
6k1/R4rpp/1q6/3pP3/4b3/P5P1/3p1R1P/6K1 w - - 0 33|a7a8 b6d8 a8d8 f7f8 f2f8|1042|1,15
r1b1kb1r/pp3ppp/2q1pn2/8/2B5/1R2BQ2/P2N1PPP/4K2R w Kkq - 6 14|c4b5 c8d7 b5c6|1042|23
8/1R6/k1r5/Pp1p4/7P/5K2/8/8 w - - 0 45|b7b6 c6b6 a5b6|1042|1,14
8/1B6/8/pp2k3/2b2p2/P1P2K2/2P5/8 b - - 5 51|c4d5 b7d5 e5d5|1042|8,1
7k/2r4p/P4p2/4pN2/3pP3/R2K4/6rP/8 w - - 0 29|a6a7 c7a7 a3a7|1042|0,1
r7/1p2b2k/pq4p1/B3pr1n/2P2p2/PN1Q1P2/1P4PP/3R1R1K b - - 4 22|h5g3 h2g3 f5h5|1043|31,7,4,9
Q7/5ppk/5n1p/5P2/N1R5/6RP/r6r/5K2 b - - 2 45|a2a1 c4c1 a1c1|1043|4
6k1/3r2P1/1p2R1KP/p2n4/3P4/1P6/P7/8 b - - 7 55|d5f4 g6f5 f4e6|1043|1,18
8/8/6k1/2R3p1/4P1Kp/5P2/3r2P1/8 b - - 1 46|d2g2 g4h3 g2g3 h3h2 g3f3|1043|1,14
8/4P1k1/8/3K4/6P1/p7/8/8 b - - 0 75|g7f7 e7e8q f7e8|1043|1,2
2k5/1pp2pp1/4pnp1/2q4r/1p6/2r2PQP/B5P1/R2R3K w - - 4 29|a2e6 f7e6 a1a8|1044|31,4,26,9
r7/1pk2p2/2p2B1R/4bB2/8/P7/1PP2Pb1/2K5 b - - 3 28|e5f4 c1b1 f4h6|1044|1,18
8/5pk1/1R4p1/6K1/6PP/8/1P6/5r2 b - - 2 39|f7f6 b6f6 f1f6|1044|1,14
1r2k1br/4q3/p5p1/4p1Np/P1npP2P/1P3R2/2Q3P1/1KNR4 b k - 0 29|c4a3 b1b2 a3c2|1044|18
8/8/p7/P2K1k2/4N1p1/6P1/4b3/8 b - - 1 50|e2f3 d5d4 f3e4|1045|1
6k1/4R3/7p/r4p2/5Pp1/B1K1n1P1/1P5P/8 b - - 9 43|e3d5 c3c4 d5e7|1045|1,18
2k5/8/8/PR2K3/8/1P5r/8/8 b - - 0 57|h3h5 e5d6 h5b5|1045|1,14,21
r3k1nr/ppn4p/5p2/8/6b1/2P1PN2/PP1B1KPP/RN1q1B1R w kq - 1 12|f1b5 c7b5 h1d1|1046|20
8/2B1R1p1/1P2p2p/3k4/3r4/6P1/7r/K7 w - - 5 53|e7d7 d5c6 d7d4|1046|29,1,21
8/1p6/p1p1k3/3pP1Bp/P1PP1nP1/1P6/5K2/8 b - - 0 34|f4h3 f2g3 h3g5|1047|1,18
2k1r3/ppb3pp/2p5/P7/3P2n1/2PB1R2/P1Q3Pq/R1B2K2 b - - 3 22|h2h1|1048|6
2Qb2k1/1n6/3p4/3q4/4p1Bp/5p1P/6P1/3N2K1 w - - 0 53|g4e6 d5e6 c8e6|1048|1,18
4r1k1/5pp1/3p4/Pp1Bp1bb/4P3/1Q1P3q/5P1N/4RN1K b - - 7 27|h5f3 h1g1 h3g2|1049|7,4
r4rk1/1bp2p1p/pp3p2/4p3/7R/P1N1qBP1/1PQ4P/5R1K b - - 5 26|b7f3 f1f3 e3f3|1049|7
4r1k1/1b1p1ppp/p1BP4/1p6/5PP1/b2P4/P2B3P/5Q1K b - - 0 23|b7c6 h1g1 a3c5 f1f2 c5f2|1049|1,7
1k1r3r/pbpPqp2/2N3pp/1B6/5P2/6P1/PP1N1K2/R2Q4 b - - 2 19|b7c6 b5c6 e7c5 f2g2 c5c6|1049|18
3r2k1/3P2p1/p1p3Q1/5P1n/7q/1P6/PBP1RbPP/R6K b - - 0 29|h5g3 g6g3 f2g3|1050|7,23
3r2k1/1q5p/p1b3p1/1pP3Q1/1Ppb2P1/P1r2P2/6P1/2R2R1K w - - 0 31|g5d8 g8f7 d8d4|1050|18,5
r2qk2r/pb3ppp/1pn1p3/3pP3/2pP1PB1/P1P5/2PQ2PP/R3K1NR b KQkq - 3 13|d8h4 d2f2 h4g4|1050|18
r1b2rk1/p4ppp/1n6/1P2q3/4p1n1/1BN1P1P1/1P1NQP2/R4R1K b - - 0 19|e5h5 h1g1 h5h2|1051|7,4
5r2/r3qB1k/p2p1p1p/5P1Q/p1p2P2/2P4P/1P4P1/5RK1 w - - 0 26|h5g6 h7h8 g6h6|1051|29,1,4
1rr3k1/4ppbp/3p1np1/1b1N4/P2BP3/5P2/P2R2PP/R5K1 w - - 0 22|d5e7 g8f8 e7c8|1051|18
1r5r/pp3pk1/2n1p3/3p4/3P1Np1/2P3n1/PPQ1RPP1/R5K1 b - - 0 24|h8h1|1052|6
r5k1/5ppp/p3p3/1pq1p3/4Q3/1P6/P1P2PPP/3r1RK1 w - - 0 21|e4a8 d1d8 a8d8|1052|1,5
2kb3r/1b6/pB1pq2p/1p4p1/8/P4n2/1PP1QP1P/4R2K w - - 0 29|e2e6 c8b8 e6d6|1053|5,26
2b5/4n2p/pB1kp1p1/P4pP1/2KP1P1P/3B4/8/8 w - - 9 49|b6c5 d6d7 c5e7|1053|1
6k1/q4ppp/5n2/8/6P1/4r2P/4Q3/3R1K2 w - - 0 37|d1d8 f6e8 d8e8 e3e8 e2e8|1054|1,15,27
8/p2b3p/5k2/2PR2p1/8/8/P5K1/8 b - - 4 33|d7c6 g2f2 c6d5|1055|1,23
r1bqk2r/pp3ppp/4pn2/3p4/1b1PP3/2NQ1N2/PP1B1PPP/R3K2R w KQkq d6 0 10|d3b5 c8d7 b5b4|1055|18
2r3k1/1p4rp/4Rb2/p2p3Q/5P2/P2B4/1q4PP/5R1K b - - 0 29|b2g2|1055|
R2R4/6pk/3p3p/4pq2/1p2n3/5N2/1PP3PP/7K w - - 0 32|d8h8 h7g6 f3h4 g6g5 h4f5|1055|1,18
4r3/p6k/6p1/8/5qPp/1P5P/PQPR4/1K4n1 w - - 0 37|d2d7 h7h6 b2g7 h6g5 d7d5|1055|1
b1r3k1/4Rppp/p1q1p3/1p6/8/1P2P2P/PB2QPP1/1B4K1 b - - 0 24|c6g2|1056|7,6
r2k1bnr/pp2qB2/2pp3p/4pPpQ/1n6/NP1P3P/PBP2PP1/R4RK1 b - - 0 14|g8f6 h5e2 e7f7|1056|
8/7p/P1p1r1p1/6P1/3k1Q1P/1P1p4/4p3/7K b - - 3 42|e6e4 f4d6 d4e3|1056|25,1,17
8/8/5k2/p7/4KN2/2p2Br1/P7/8 w - - 0 52|f4h5 f6e7 h5g3|1056|1,18
6k1/1p2rp1p/p5p1/8/3R4/1PQ5/2r1q1PP/6RK w - - 2 34|d4d8 e7e8 d8e8 e2e8 c3c2|1056|1
1r2q3/1p2kpp1/1bp1pn1p/2P5/1Q6/7P/PP2BPP1/3R2K1 w - - 0 26|c5b6 c6c5 b4c5|1057|20,34,4
2rr4/Q2R1pk1/p3p2p/1pq1N1p1/8/8/PP3PPP/R5K1 b - - 0 29|c5c1 a1c1 c8c1 d7d1 c1d1|1057|3,15,9
r1b1k2r/ppp2ppp/3p2n1/3Pp3/1bP1P3/2N1BPP1/PPQ1B1P1/R4KNq w kq - 0 12|c2a4 c8d7 a4b4|1057|18
r4r2/ppp2ppk/5q2/8/8/P2R1P2/1PQ2P1P/2K4R w - - 1 18|d3d6 f6g6 d6g6|1058|20,34,1
3r2k1/4rp1p/p5p1/1ppbPPB1/3n2P1/7P/PPB5/R2R2K1 b - - 2 25|d4f3 g1f2 f3g5|1058|18
2r5/p3pp2/1p1p1k2/1PnP1N2/1p2PPpP/6P1/P1Bn2K1/4R3 w - - 3 34|e4e5 d6e5 f4e5|1058|1
r2q4/p1pn3k/1p1bprRp/5p1P/3P4/2PB1P2/P1PQ1P2/R3K3 w Q - 2 17|d2h6|1059|6
8/8/P3k3/1B2p2K/1r6/8/8/8 w - - 1 50|a6a7 b4b5 a7a8q|1059|0,1,11
r3k2r/pp1qbppp/3pbn2/Q3p3/4P3/2NB4/PPP2PPP/R1B1K2R w KQkq - 6 11|d3b5 e8g8 b5d7|1059|23
3r1rk1/ppp1qpp1/4p2p/2b5/3PP3/1R3QPP/PP3PB1/3R2K1 w - - 5 20|d4c5 d8d1 f3d1|1059|
7Q/8/6p1/5k1p/1P3P2/P5P1/6K1/2qq4 w - - 1 51|h8e5 f5g4 e5e6|1060|1,4,19
1k3r2/pp2n3/1Q4p1/3pP1B1/3n4/1PP5/P5PP/RN4K1 b - - 0 21|d4e2 g1h1 f8f1 b6g1 f1g1|1060|15
2rr4/1Bp3qk/3p2nb/pN2p2Q/2P5/P2P3P/1P3P2/R4RK1 b - - 0 23|g6f4 g1h1 f4h5|1060|20,34
2n5/8/3p1K1k/p1pP3P/2P5/1P6/8/8 w - - 2 59|f6e6 h6h5 e6d7 c8b6 d7d6|1060|1,10
1r6/8/p1B4k/2b2RR1/7P/6P1/3r4/7K b - - 2 39|b8b1 f5f1 b1f1|1061|1,4
2rq1rk1/pp4p1/3p2Pp/3p4/3P2n1/2P2N2/P1P1Q3/R4RK1 w - - 2 21|e2e6 g8h8 e6g4|1061|18
r4rk1/ppq2ppp/3b4/3p4/Pn1P4/4BBPb/1PQN1P1P/2R1K2R w K - 3 17|c2c7 d6c7 c1c7|1061|
r3r1k1/ppq1b1p1/4Rn1p/3p4/7B/2PQ1P1P/PP1N2P1/R5K1 b - - 0 18|e7c5 g1h1 e8e6|1061|20
3k4/ppp5/8/5Q1P/3P4/2P4K/Pr4r1/8 b - - 1 41|g2h2 h3g4 b2g2 g4f3 g2f2|1061|1,30,17
2r1kr2/1B3p1p/p2qp1p1/2n5/8/N4P1N/1PPQ2PP/2KRR3 b - - 0 22|c5b3 c1b1 b3d2|1062|23,26
b4k2/5pp1/1bP1p2p/1PNpP3/5P2/7P/6PK/8 w - - 3 44|c5d7 f8e8 d7b6 a8c6 b5c6|1062|1,18,47
r2q1rk1/4bp2/p5p1/1ppP3Q/2n5/2N1P3/P4PP1/BBR1K3 w - - 0 21|b1g6 f7g6 h5g6|1062|7
r6k/1p5p/5r2/1Pqp1B2/2n2PQ1/p3P1P1/4R2P/R6K b - - 4 36|c4e3 e2e3 c5e3|1062|
6rk/1pp5/3b1R1p/p3p3/Pn2P3/4B1qP/1PP3P1/5QK1 w - - 6 28|f6h6 h8g7 f1f6|1063|7,4,51
3r2k1/p4ppp/1bp2q2/8/1P3B2/PQ2P2P/3R1PP1/R5K1 b - - 0 20|f6a1 g1h2 d8d2|1063|5,48
B4rk1/2p2ppp/5n2/p3q3/3n4/3Q4/P4PPP/2RR2K1 b - - 3 21|d4e2 d3e2 e5e2|1063|18
5r1k/2p3Rp/3p4/p2Pn3/1p2B3/1P6/PKP1r2P/6R1 w - - 2 29|g7h7|1064|1,6,16
1Q6/pp1k3p/2p2p2/q5pP/3p4/P2P3P/P1P2P2/R3n2K b - - 0 25|a5d5 f2f3 d5f3 h1g1 f3g2|1064|1,30,7,15
6k1/2R2p1p/p7/2b1rp2/P7/2N4P/2P2PP1/6K1 b - - 0 26|e5e1 g1h2 c5d6 g2g3 d6c7|1064|1,18
8/8/6b1/p1k5/5P2/p1K5/8/1B6 w - - 1 50|b1g6 a3a2 c3b2 a2a1q b2a1|1064|8,1,5
2r3k1/8/1p5p/3p4/1p1P1P2/1R1bpN1P/6P1/6K1 w - - 0 42|b3d3 c8c1 g1h2|1064|25,1,5
1r4k1/R7/6p1/3P3p/4N2P/2P1KP2/p5r1/8 w - - 1 40|e4f6 g8f8 f6d7 f8e7 d7b8|1064|20,34,1,30,18
r4rk1/pQb1qppp/1n3p2/8/1P1N4/2P1B3/P4PPP/R2R2K1 b - - 6 18|c7h2 g1h2 e7b7|1064|20
r2qrk2/pp3p1Q/2p3n1/3Pp1Nn/1bB1P3/2N5/PP3PP1/R3K3 w Q - 2 19|h7f7|1065|6
r4r1k/1pp2ppp/p7/3N4/3P2n1/2NB3q/PPP2P1B/R2QR1K1 b - - 0 17|h3h2 g1f1 h2f2|1065|7,4
r4k1r/ppq3p1/3bBp2/4p2p/8/2P2R2/PP4P1/R4Q1K w - h6 0 23|f3f6 g7f6 f1f6 f8e8 f6h8|1065|18,9
r4rk1/ppp2pp1/7p/6q1/1P2Nn2/4Q3/P3BPPP/R4RK1 b - - 5 19|g5g2|1065|
8/7p/6pP/p2k1p2/1p1P1P2/PP2K3/8/8 w - - 0 50|a3b4 a5b4 e3d3 d5e6 d3c4|1066|1,2,24
rnb2rk1/pp3pp1/2p1pn1p/6N1/3q3P/3B2P1/PPP3P1/R1BQK2R w KQ - 0 11|d3h7 f6h7 d1d4|1066|20
5k2/p1p4p/1r3p2/8/P1KPn3/1BP2R2/2P4P/8 b - a3 0 37|e4d2 c4d3 d2f3|1066|1,18
bn2kb1r/5ppp/2q1pn2/8/2p5/1BN2PN1/1PP3PP/2BQ1RK1 w k - 0 15|b3a4 c6a4 c3a4|1066|23
r1b2rk1/pppp1ppp/5q1n/2b1n1N1/2Bp4/3Q4/PPP2PPP/RNB2RK1 w - - 0 9|d3h7|1067|7,6
1r6/8/R6p/5ppk/1p6/5K1P/PP4P1/8 w - - 0 34|g2g4 f5g4 h3g4 h5h4 a6h6|1067|1,15,14
r1b1kbnr/pppp1ppp/5q2/4p1B1/3nP3/2NP1N2/PPP2PPP/R2QKB1R b KQkq - 4 5|d4f3 g2f3 f6g5|1067|
r1b2rk1/p1p2ppp/1p2pq2/4n3/3B4/1BN3P1/PP2QP1P/R4RK1 b - - 2 17|e5f3 g1g2 f3d4|1067|18
r7/r7/Pp2k3/4p2p/2PpPp1P/1B3Ppb/R7/R5K1 w - - 3 54|c4c5 e6d7 c5b6|1067|20,34,1
8/5pk1/1R5p/5P2/4B3/7r/bp1K4/8 w - - 1 41|f5f6 g7h8 b6b8|1068|1,4,13
2kr3r/pbq2pp1/1p6/3pn1p1/3Q4/P1P1N3/1P2BPPP/3R1RK1 b - - 1 20|e5f3 g2f3 c7h2|1068|20,7,4,9
8/6r1/1p1k2Pp/pP1P1K1P/8/P7/8/8 w - - 7 69|f5f6 g7d7 g6g7 d7d8 f6f7|1068|0,25,1,14
7r/7P/K1k5/8/8/8/7R/8 b - - 0 56|h8a8|1069|1,6,14
8/p4ppk/4p3/2p3Pp/4bP2/1P3qP1/P2Q1R1K/8 b - - 11 41|f3h1|1069|1,6
2R1b1k1/6p1/3B1P1p/1p6/1P3P1K/7P/6r1/8 b - - 2 47|g7g5 f4g5 h6g5|1069|1,4
2r1nr1k/3bR1bp/5pp1/pq1N4/7B/1P2QN1P/P4PP1/2R3K1 b - - 3 25|c8c1 e3c1 b5d5|1069|
5k2/5pp1/pQ2p2p/1p6/2p5/PqP3P1/1P4PK/8 w - - 5 42|b6d8|1070|1,6,19
r1bqkbnr/pp1p1ppp/8/2p1P3/3nP3/1P6/PBPP2PP/RN1QKBNR b KQkq - 0 5|d8h4 g2g3 h4e4|1070|
N1b2k1r/1p1pppbp/p5p1/3P4/1P3q2/8/P3B1PP/2RQ2KR b - - 3 19|g7d4 d1d4 f4d4|1071|7
rn4r1/p2qp1bk/bp5p/2pP1p2/P1P1p2B/1PN1P2P/3QBP2/R3K1R1 b Q - 0 18|g7c3 d2c3 g8g1|1071|20,23
3r1k2/4n1p1/1p2Pp2/2p2P2/P2p1K1P/1P1Bn3/2PN4/4R3 b - - 2 40|e3g2 f4g3 g2e1|1071|1,18
r1bq1rk1/ppp2ppp/8/2p5/2QbP3/2P5/PP3PPP/RNBR2K1 b - - 0 12|d4f2 g1f2 d8d1|1071|20,7
8/8/8/8/7R/3rp3/2K1k3/8 w - - 0 78|h4h2 e2f3 c2d3|1071|29,1,14
3r2k1/p4p1p/1p4p1/3N3q/1PP5/5P2/4RP1P/6RK w - - 1 34|d5f6 g8f8 f6h5|1072|1,18
8/2r2ppk/p1bNp1q1/1p2P2p/3P4/P4P1P/1P2QKP1/2R5 b - - 7 31|c6f3 e2f3 c7c1|1072|20,1
3kr3/1b4p1/2p2p1p/p4B2/Pp1B1n2/1P6/5KPP/4R3 w - - 6 46|d4b6|1073|1,6
r3kb1r/pQ2pppp/5P2/2p1n3/8/2P5/PPqPNPP1/RNB1KB1R b KQkq - 0 11|e5d3|1073|6
3r1r1k/5p1P/p5p1/1pp1P1Q1/3pR3/P4PKP/1P6/5q2 w - - 3 36|g5f6 h8h7 e4h4 h7g8 h4h8|1073|1,30,39,15
8/3b4/2p3k1/2p3r1/4p2p/PPP2r2/4RPNK/4R3 w - - 3 42|g2h4 g6f6 h4f3|1073|1,18
8/1kp5/4n3/3p4/r2P3R/2K2N1P/8/8 b - - 6 48|a4a3 c3c2 a3f3|1073|1,21
8/5k2/8/5P1p/5Kp1/6P1/8/8 w - - 3 70|f4g5 f7g7 g5h5|1073|1,2
8/1R3p2/p2r2kp/1p3Np1/4K3/P1P4P/8/8 b - - 6 40|d6e6 e4d5 g6f5 b7f7 e6f6|1073|29,1
R1brn1k1/6pp/2p1p3/8/8/2rB3P/5PP1/3R2K1 w - - 2 31|d3h7 g8h7 d1d8 c3c1 g1h2|1074|20,18
r5k1/6pp/2p1p3/1p1pq3/4b3/1BP1P1P1/2P2Q1P/5RK1 w - - 0 26|f2f7 g8h8 f7f8 a8f8 f1f8|1075|3,1,15,9
8/3b2kp/4p1p1/1p1pPpK1/pP1P1NP1/P3P3/7P/8 b - g3 0 38|h7h6 g5h4 g6g5 h4g3 g5f4|1075|1,18
8/1p1K1Q2/8/P2q4/3k4/8/8/8 w - - 7 87|f7d5 d4d5 d7c7 d5c5 c7b7|1076|1,19
3Q1B1k/1p3r1p/p5p1/2P2q2/1P2R3/P7/5PPP/R5K1 b - - 0 24|f5f2 g1h1 f2f1 a1f1 f7f1|1077|3,1,15,9
6k1/2R5/1p4PP/8/8/8/1rp2P2/6K1 b - - 0 44|b2b1 g1g2 c2c1q c7c1 b1c1|1077|0,1,11,14
2r5/5p1k/5b1p/4pP1P/p3Q3/P7/1Pp5/K1R3r1 w - - 1 33|c1g1 c2c1q g1c1 c8c1 a1a2|1077|1,5
5rk1/p1p2pbp/2q5/3N1b2/1p3P2/1P6/PnP2Q1P/1K4R1 w - - 0 24|d5e7 g8h8 e7c6|1077|18
3r4/1p3pkp/p3pbp1/n1P5/P4R2/2P2R1P/2P2PP1/6K1 b - - 0 26|d8d1 g1h2 f6e5|1077|1,23
2r2rk1/p4ppp/1p2p3/4Q3/P7/2N5/3q1PPP/3R1RK1 b - - 1 23|d2c3 e5c3 c8c3|1077|
3b4/5p2/5p2/3PpP2/1pk1K1P1/4N3/1P6/8 b - - 3 44|c4b3 e4d3 b3b2|1077|25,1
5r1k/r2nb1p1/1q2p1B1/p2p4/5PP1/4p3/PPQ5/R1B1K3 w Q - 0 23|c2h2 e7h4 h2h4 h8g8 h4h7|1078|7,15
6k1/2p2rp1/8/2R2qN1/1p6/8/5PPP/2Q3K1 b - - 0 33|f5f2 g1h1 f2f1 c1f1 f7f1|1078|3,1,15
4r1k1/ppqn1ppp/2pbr3/3p1PBP/3Pn3/2N1Q3/PPP1BP2/1K1R3R b - - 2 19|e4c3 e3c3 e6e2|1078|20,26,21
8/3kP3/3P1K2/8/8/7b/8/8 w - - 1 65|f6f7 h3e6 f7f8 d7d6 e7e8q|1078|0,8,25,1,11
5rk1/pp1b2r1/3p4/2pP4/2P1P2R/2PK4/P7/7R w - - 0 34|h4h8 g8f7 h1f1|1078|1
3r1rk1/p4pp1/2b5/8/2NB2q1/3p2R1/P4PPP/Q4BK1 b - - 4 27|g4d4 a1d4 d8d4|1078|
8/8/3R1Bk1/bp1pP3/8/6r1/4K3/8 w - - 7 51|f6h4 g6h5 h4g3|1079|20,34,1
8/3r1p1k/p3r1p1/P2n3p/2Q2P2/8/1P5P/3R2K1 b - - 1 39|d5e3 d1d7 e3c4|1079|1,18
rn4k1/pp3ppp/5b2/3r4/4p1B1/4P3/PP3PPP/RN1R2K1 b - - 1 16|d5d1 g4d1 f6b2 b1d2 b2a1|1080|47
r3k2r/1bq2ppp/p2bpn2/1p1p4/1B6/4PN2/N1P1BPPP/R2QK2R b KQkq - 7 14|d6b4 a2b4 c7c3 f3d2 c3b4|1080|18
5r2/4Rpk1/pp4p1/2p5/2PqQ3/1P1P4/P3R1Pb/5K2 b - - 3 33|d4g1|1081|1,6
2b2r1k/pp4p1/2p5/4r3/2B5/1P6/P4pK1/5R2 w - - 5 33|f1h1 c8h3 h1h3 e5h5 h3h5|1081|1,15,13
4r1k1/ppp3b1/8/6B1/8/2P2Q2/P4qPP/2R4K b - - 1 26|e8e1 c1e1 f2e1 f3f1 e1f1|1081|1,15
k5r1/P2b1p2/4p3/4P2P/4q3/P3B1N1/5P2/1RR3K1 b - - 0 32|g8g3 f2g3 e4e3|1081|29
6k1/6p1/7p/1r1pp3/5q2/P6P/1P4P1/2RQ3K w - - 0 37|c1c8 g8h7 d1d3 e5e4 d3b5|1081|1,18
8/2r2p2/4p1p1/p3P3/P4PP1/1kP1K3/8/2R5 b - - 2 45|c7c3 c1c3 b3c3|1081|1,14
2r3k1/5pp1/2q2pp1/8/3P4/2Q1P2P/3n2P1/2R3K1 w - - 0 29|c3c6 c8c6 c1c6|1081|1
8/2p5/p7/Pp1p1k2/1PnP4/2P1B1K1/5P2/8 b - - 1 38|c4e3 f2e3 f5e4 g3f2 e4d3|1081|1
rn1qkb1r/p3nppp/1p6/2p1N3/2B5/5b2/PPPP1PPP/RNB1R1K1 w kq - 0 9|c4f7|1082|
r3k2r/pp3ppp/2p1bn2/2Qp4/B7/2P1B3/P1P2P1q/2KR1R2 w kq - 0 17|a4c6 b7c6 c5c6 f6d7 c6a8|1082|18
1bkr3r/ppqn1ppp/2p2nb1/5N2/2B5/2NPBQ2/PPP3PP/R4R1K w - - 1 16|f5e7|1083|6,38
8/5r2/p1k1p1p1/R1P1K1Pp/5P2/8/8/8 w - - 2 47|a5a6 c6c5 a6e6|1083|1,14,21
rqr5/5ppk/p3p2p/8/7P/2N1BB2/PP3PP1/R3K2R b KQ - 0 21|b8b2 e1g1 b2c3|1083|18
r3q1k1/pppNrppp/3b1n2/3p2B1/3P1P2/2PQ3P/PP1N2P1/R3R1K1 b - - 0 16|e7e1 a1e1 e8e1|1083|7
r2q2rk/1p2R3/p1pp1p2/6n1/2P1Q3/PP3P2/6BK/R7 w - - 2 33|e4h4 g5h7 h4h7|1084|4
6R1/1pr4p/pR6/5p1k/5n2/r1P2P2/P5PP/6K1 w - - 2 33|g2g4 f5g4 f3g4 h5h4 b6h6 f4h5 h6h5|1084|1,46
r2qk2r/ppp1npbp/3pb1p1/4n3/2P5/1P2PN1P/PB2BPP1/RN1QK2R b KQkq - 1 9|e5f3 e2f3 g7b2|1084|20
6r1/4R3/5q2/k2p3p/1p6/3B2N1/2P4P/7K w - - 0 37|e7a7 a5b6 a7a6 b6c5 a6f6|1084|1,21
r7/pp3pk1/2p1bq2/4Q1p1/3P4/2P1P1P1/P3KPP1/7R w - - 4 24|h1h7 g7h7 e5f6|1084|29,1
8/r5pk/p2R3p/1b4P1/6PK/8/8/8 w - - 2 44|g5g6 h7h8 d6d8 b5e8 d8e8|1085|1,15
8/8/1p6/p2p4/Q1nk4/8/P1P3PK/3q4 w - - 0 44|c2c3 d4e5 a4d1|1085|20,1
3r2k1/5ppp/p2N4/1p6/nP2P3/3R1P1P/r5P1/3R2K1 b - - 1 25|a4b2 d3d2 b2d1 d2a2 d8d6|1085|1,18
3q2k1/p1p2pp1/1rQp3p/8/5P2/1P4P1/P1P3P1/4R1K1 w - - 1 23|e1e8 d8e8 c6e8|1085|1,18
7r/5ppp/1Q2pk2/3p4/8/q7/P4PPP/1R4K1 w - - 0 24|b6d4 f6e7 b1b7|1085|1
6k1/2p2p2/7p/3Q4/P2P3q/2R3p1/8/6K1 b - - 0 35|h4h2 g1f1 h2f2|1086|1,4
5rk1/p5p1/1p5p/3pQq2/3P4/P1P5/6PP/R5K1 b - - 1 26|f5f2 g1h1 f2f1 a1f1 f8f1|1086|3,1,15,9
1k3r2/Rn1n1q2/1P5p/3N2p1/3PP3/4P3/2P3PP/1Q4K1 b - - 0 24|f7f2 g1h1 f2f1 b1f1 f8f1|1086|3,15
r4r1k/nb2q1pp/p1p2n2/1p1pB3/3P4/P1P3QP/BP3PP1/RN2K2R b KQ - 0 20|f6e4 g3g7 e7g7 e5g7 h8g7|1086|
5rk1/1p3rpp/p5p1/2pBq3/2Pb4/1Q4P1/PP3PP1/4RRK1 b - - 11 26|d4f2 f1f2 e5e1 g1h2 e1f2|1086|40,29,18
6rk/4b2p/4p3/5Qp1/8/6B1/1q3P1P/3R2K1 w - - 0 28|g3e5 b2e5 f5e5|1086|1,18
8/pp3pk1/3p2p1/3Pb3/3pP1p1/P2P4/1PqBQ2P/6K1 w - - 0 27|d2h6 g7h6 e2c2|1086|20,1
r5k1/bp2q1pp/8/PQ1pp1P1/4n2P/2P1Pr2/5B2/R3KB1R w KQ - 2 26|b5d5 g8h8 d5e4|1087|18
6rk/1p2bprp/p3p3/3qQ3/1P6/P2PR1P1/2P2P1P/R5K1 w - - 0 23|e5d5 e6d5 e3e7|1087|20
1r3r2/3q3k/p1p3pp/2QnRp2/3P2P1/1P6/P4P1P/4R1K1 w - - 2 27|e5e7 d5e7 e1e7 f8f7 e7d7|1088|18,9
8/8/2p5/p1p3k1/2P4p/1P4K1/P4P2/8 w - - 0 41|g3h3 g5f5 h3h4|1088|25,1,2
r3k2r/ppqnn1p1/1b2p1p1/3pP1N1/3p4/P1P2Q2/1P1B1PPP/R3K2R w KQkq - 0 16|f3f7 e8d8 g5e6|1088|48
8/1p5p/1k2bB2/2p5/rbP5/4PB2/6PP/2KR3n w - - 0 23|d1d6 b6c7 d6e6|1088|18
rn1qr1k1/ppp3p1/3bpn1p/8/3Q4/1B6/PPPP1PPP/RNB2RK1 b - - 0 12|d6h2 g1h2 d8d4|1088|20,7
5bk1/5ppp/q7/1Q6/8/2N1PPP1/1p3RKP/8 b - - 1 37|a6b5 c3b5 b2b1q|1088|0,1,11
r3r3/1p2b3/1k5p/pNpQ2p1/P4p2/6B1/3K1PPP/7q w - - 0 35|d5e6 e7d6 e6d6|1089|33,4
R7/6pk/3b2r1/2pNp1qp/2P1Q2P/3P1P2/6P1/6K1 b - h3 0 30|g5g2|1090|1,6
8/8/1R6/2r5/2p5/k1K5/8/8 w - - 4 65|b6a6 c5a5 a6a5|1090|1,4,14
r1bqkb1r/pp3ppp/2n1p3/1B1pP3/3P4/5N2/PPP3PP/R1BQK2R b KQkq - 2 9|d8a5 c2c3 a5b5|1090|18
6k1/5pp1/2R4p/3q4/p2P4/P4QP1/5PKP/1r6 b - - 4 38|b1g1 g2g1 d5f3|1090|29,1
rnb3k1/ppp3pp/8/2bP4/4B2q/8/PPP3PP/R1BQ1KNR b - - 2 13|h4f2|1091|6
r1bq2rk/1p1n1pbn/p2p3B/2pPpN2/2P1P1Q1/2NB4/PP3PPP/R5K1 w - - 0 17|h6g7 g8g7 g4g7|1091|7,4
3q4/p2r1rbk/6R1/1p2p3/2p1P3/2P1BPQ1/PP4R1/2K5 b - - 3 31|d7d1 c1c2 d8d3|1091|4,26
r4rk1/pp3ppp/2n2b2/3p4/3P1P2/4B2P/PqB1Q1P1/3R1R1K w - - 0 21|c2h7 g8h7 e2b2|1091|20
r5k1/p4pp1/1p5p/2pQn1q1/4R3/2P5/PP3PPP/R5K1 b - - 0 24|e5f3 g1h1 g5d5|1091|20,1,23
3Rq2k/ppQ3bp/6p1/7n/2B5/P1N4P/1P3PPK/4r3 b - - 3 23|g7e5 c7e5 e1e5 d8e8 e5e8|1091|18
6k1/p6p/6p1/2pRqp2/2P5/1P2r1P1/P4Q1P/6K1 b - - 3 34|e3e1 f2e1 e5e1|1091|1
8/p5pk/1p3b1p/3r3P/6P1/3nBN2/P4PK1/3R4 b - - 4 30|d3f4 e3f4 d5d1|1091|20,1
6k1/6r1/1P2PP2/2BP4/7Q/6pK/r7/8 b - - 2 71|a2h2|1092|1,6
7k/1p5p/p5p1/3N1p2/3b4/1PN5/P1r1RPPP/6K1 b - - 5 30|c2c1 c3d1 c1d1 e2e1 d1e1|1092|1,15
3r1r1k/ppp3p1/5q1p/3BN3/8/NQP5/PP4PP/R5K1 b - - 0 20|f6f2 g1h1 f2f1 a1f1 f8f1|1092|3,15,9
2k4r/1pp3p1/p3p3/3pP1p1/1P1P2P1/N1PR1P2/P2RK3/7r b - - 4 31|h8h2 e2e3 h1e1 d2e2 e1e2|1092|1,33,15
4r2k/1p6/6Rp/p1P5/q7/P5P1/6QP/4rR1K b - - 0 40|e1f1 g2f1 a4e4|1092|1
r3kb1r/pp3ppp/1q2p3/3Pn2P/3Q4/2P5/PP6/RNB1KB1R b KQkq - 2 15|e5f3 e1e2 f3d4|1092|18
4k3/1q3p2/6pp/8/P1Q5/5KPP/8/8 w - - 3 50|c4e4 b7e4 f3e4|1093|1,19
2r3k1/2q2pp1/4p1p1/p7/7Q/1P5P/P1rR1PP1/3R2K1 b - - 1 26|c2d2 d1d2 c7c1 d2d1 c1d1|1093|31,1,18
8/8/6k1/5R2/6K1/7P/8/1r6 b - - 14 63|b1g1 g4f4 g1f1|1093|1,14
8/3B1k2/2p5/1p1bK3/1P2p3/2P2RP1/8/8 b - - 0 38|e4f3 e5d4 f3f2|1093|0,1
2kr3r/ppp1bpp1/2q2n2/1N1p3p/3R4/4P1Q1/PPP2PPP/R1B3K1 w - - 4 17|b5a7 c8d7 a7c6|1094|18
7k/7p/5r1P/8/8/1P2p3/2P5/1K4R1 b - - 2 51|e3e2 g1e1 f6f1 b1c1 f1e1|1094|0,1,23,14
4r2k/2p2Bpb/3p3p/8/1P1Np3/p1P1Q3/P1K2R1q/8 b - - 3 33|h2f2 e3f2 e4e3 f2f5 h7f5|1094|20,34,9
5r1k/p4p1p/q3p2Q/8/P7/1r6/2p1RPPb/3R1K2 w - - 0 32|h6f8|1095|5,6
rnb3Q1/pppp4/5kp1/2b5/8/5B2/PPPP2qP/RNB1K1NR b KQ - 1 11|g2f2 e1d1 f2f1|1095|4
8/4R3/8/8/6pk/2r5/6PK/8 b - - 1 52|g4g3 h2g1 c3c1 e7e1 c1e1|1095|1,15,14
r5k1/pp1qrppp/2nb1n2/6N1/3PNp2/2P5/PPQ3PP/R1B2RK1 b - - 5 15|f6e4 c2e4 e7e4|1095|
R7/8/8/8/3k2r1/4p3/8/4K3 w - - 2 67|a8a4 d4c3 a4g4|1095|1,14,21
6r1/2p1kp2/R2p3p/1P1Pb3/2P3qR/3PQ1P1/8/4K3 b - - 4 35|g4g3 e3g3 e5g3 e1e2 g3h4|1095|1,30,18
3r1b1r/1k2qp2/1npp1n2/6Qp/4P3/2NP1B1P/PPP2PP1/2KR3R b - - 0 15|f8h6 g5h6 h8h6|1095|23
rn5r/3qk2p/1np3p1/p3B3/Pp2P3/5QP1/3N1P1P/b2R2K1 w - - 2 27|f3f6 e7e8 f6h8|1095|18
4r1k1/5p1p/8/2p2q2/8/3Q3P/1P3PP1/3R2K1 b - - 2 27|e8e1 d1e1 f5d3|1095|29,1
r1b1rnk1/1p4p1/p4p1p/3qp3/8/2PB1N2/PP2QPPP/R4RK1 w - - 0 18|d3c4 d5c4 e2c4|1095|23
r3k1nr/ppp4p/2n3p1/3q4/1b4b1/3BPpBP/PP3PP1/RN1Q1K1R w kq - 0 12|d3g6 h7g6 d1d5|1095|20
8/1bQ3pk/p3p2p/3qBp2/8/P6P/1P3PP1/6K1 b - - 1 33|d5g2|1096|1,6
8/4rq1k/8/1R5p/6p1/6P1/1Q3P1P/6K1 b - - 0 45|e7e1 g1g2 f7f3|1096|1,4
1r1R4/5ppk/p6p/Q7/1q6/4P2P/5PP1/6K1 w - - 2 32|a5f5 g7g6 f5f7|1096|1,4
8/2p5/8/k7/7P/6PK/5pr1/1R6 b - - 1 52|g2g1 b1f1 g1f1|1096|1,14
5rk1/2p2q2/p4p2/2P3p1/1p1QP3/3N2PK/PP6/3R4 b - - 0 33|f7h5 h3g2 h5d1|1096|1,18
3r1b1r/6p1/1k1q4/3p3p/4P1n1/3P1Q1P/1P3PP1/RNR3K1 b - - 0 20|d6h2 g1f1 h2h1 f1e2 h1c1|1096|21
r1b2r2/1p4kp/1q3ppn/p2Pp3/P1PpP3/6N1/1PQ1B1PP/1R3RK1 b - - 1 23|d4d3 c4c5 d3c2|1096|0,20,34
2r3k1/1p1b2b1/p2Pp2p/6p1/4N1p1/3Bq3/PPP3PQ/1K1R4 w - - 4 25|e4f6 g7f6 h2h6|1096|29,7,9
2Qrk3/7p/2pB2p1/2Pp1p2/q7/7P/2P2PPK/8 w - - 6 36|c8e6|1097|1,6
8/4ppk1/p2p1bP1/2p3q1/4P3/3P3Q/4r1P1/3R2K1 w - - 0 34|h3h7 g7f8 h7f7|1097|1,4
r3k2r/ppp2p2/2p2p1q/8/4P1p1/2N3P1/PPP2P1P/R2QR1K1 b kq - 2 15|h6h2 g1f1 h2h1 f1e2 h1f3|1097|7
1k5r/1p1Q4/1Pp5/2Ppq1p1/R3p3/1N2P1PP/8/6K1 b - - 0 33|e5g3 g1h1 h8h3 d7h3 g3h3|1097|1,30
1rq2rk1/1R1b1pbp/p2ppnp1/n1p3B1/2P5/PQNP1NP1/4PPBP/1R4K1 w - - 6 16|b7b8 a5b3 b8c8|1098|
3r1rk1/1p2bppp/p2pbq2/4p3/4P2P/2P3P1/PP3PB1/R1BQK2R w KQ - 1 14|c1g5 f6g5 h4g5|1098|
3Q4/P5pk/1Bq5/5p1p/5K2/6P1/5P2/8 b - - 2 60|c6e4 f4g5 e4g4|1099|1,33,4
2r2k2/5ppp/8/5q2/1pb5/4Q3/1P3PPP/4R1K1 w - - 0 27|e3e7 f8g8 e7e8 c8e8 e1e8|1099|3,1,15,9
r1bqk2r/pp2bppp/2n5/1Bpp4/5B2/3P1N2/PPP2PPP/R2QK2R b KQkq - 1 9|d8a5 d1d2 a5b5|1099|18
8/8/8/2N5/6Kp/3Q4/8/q1k1b3 w - - 6 61|c5b3 c1b2 b3a1|1099|1,18
2kr4/1bp1n1pp/pp4q1/3Pn3/4PP2/2NB4/PP1Q2PP/2R1R1K1 b - f3 0 18|e5f3 g1h1 f3d2|1099|23
8/8/1p3p1p/p1k1pP1P/P2pP3/1P1P4/1K6/8 b - - 10 55|c5b4 b2a2 b4c3|1099|1,2,24
2r5/3k1p2/p1p3p1/P2N2np/2R5/1P4K1/6P1/8 w - - 0 36|d5b6 d7c7 b6c8|1099|1,18
1r2k2r/p1pb1pp1/5q1p/3Q4/8/2P5/P1B2PPP/R3K1NR b KQk - 0 15|f6c3 d5d2 c3a1|1099|18
5r1k/pp3pp1/7p/2r5/2b5/6BP/P2R1PP1/2R3K1 w - - 0 22|g3d6 f8d8 d6c5|1099|1,18
r6r/1p2kp1p/1pp1P3/6pq/4QBn1/5N2/PPP3PP/R3R2K b - - 0 21|g4f2 h1g1 f2e4|1099|18
r2qk2r/4bppp/p2p4/2pPp3/2n5/P4N1P/1P3PP1/R1BQR1K1 w kq - 0 16|d1a4 d8d7 a4c4|1099|18
5bk1/6pp/1n4n1/2p1q3/1p6/pP6/P1PPNQ2/2K2R2 w - - 2 30|f2f7 g8h8 f7f8 g6f8 f1f8|1100|3,29,15,9
6k1/4Rrp1/1p2N3/3p3p/4b3/P6P/6P1/6K1 w - - 4 31|e7e8 g8h7 e6g5 h7g6 g5f7|1100|1,18
5rk1/pp1b2pp/2p1p3/7n/2PPB2N/4K3/PP5P/5R2 w - - 6 26|e4h7 g8h7 f1f8|1100|29,1
8/8/4k1p1/p1p1P2p/P2p1K1P/2P3P1/8/8 w - - 0 34|c3d4 c5d4 f4e4 d4d3 e4d3|1100|1,2
rnb1k2r/pp3ppp/2pb4/6B1/2P3n1/2N1PN2/Pq3PPP/2RQKB1R b Kkq - 1 9|b2f2|1102|22,6
3r2kn/1b6/p2qpQpP/1p6/2p1P3/P4P1N/BPP5/2KN2R1 b - - 0 28|d6d2 c1b1 d2d1 g1d1 d8d1|1103|3,29,15
5r1k/p2R4/1p2Pqnp/2p3p1/2P1Q3/4P2P/PP4P1/6K1 w - - 5 33|e6e7 f8e8 d7d8|1103|0,1
8/p6p/8/2p1kp2/8/P5R1/1qbN4/3RK3 w - - 8 41|d2c4 e5f4 c4b2|1103|1,18
6k1/p4pbp/6p1/3PPp2/1P2nP2/P1R1rQ2/B5PP/7K b - - 0 29|e3e1 f3f1 e1f1|1104|3,1,4
rnb2rk1/pp2nNp1/1bpp1q1p/6NQ/3P4/3BB3/PP3PPP/R4RK1 w - - 4 18|d3h7|1104|
2q5/4k3/1bb1p1pp/4p3/2Q1P3/3N1B1P/6PK/8 w - - 0 48|c4b4 e7e8 b4b6|1104|1,18
r2q1rk1/2p1ppbp/p1npb1p1/1p1P4/1n2P1P1/3B1N1P/PPPBQP2/1NKR3R b - - 0 13|b4a2|1105|6,26,38
5rk1/4Qp2/p3p1p1/7p/P2q4/8/1PK2P1P/R2R4 b - - 9 34|f8c8 c2b1 d4d1|1105|29,1
5rk1/1b1R2pp/8/1pp3q1/1P2prBn/P1P3Q1/4R1P1/6K1 w - - 2 35|g4e6 g8h8 g3g5|1105|20,7
r2q2kr/ppp3p1/1b1p3p/1P6/2P1n3/2P5/P4PPP/R1BQ1RK1 w - - 0 15|d1d5 g8f8 d5e4|1106|18
2k4r/ppp2ppp/2B1q3/8/4nP2/2P1B2P/P1P1Q1P1/3R3K b - - 0 19|e4g3 h1h2 g3e2 c6d7 e6d7|1106|18
r7/1pp1Q1pp/1b3nk1/4p2q/P3Pp2/5N2/5Pb1/R1B2RK1 w - - 0 21|f3e5 h5e5 e7e5|1107|
3r3k/1p4b1/p1p3pp/2PqP3/1PQR1P1P/P5PB/7K/8 b - - 0 39|d5d4 c4d4 d8d4|1107|1
r3k2r/1p1qnpp1/p3p2p/2bpPb2/3N1P2/4B3/PPP3PP/RN1Q1RK1 w kq - 3 13|d4f5 e7f5 e3c5|1107|20
r4rk1/1pp2ppp/2P2q2/1B2p3/6b1/P1PP1N2/1P3P2/R1BQ1RK1 b - - 0 16|g4f3 d1f3 f6f3|1108|
R2Q4/5rk1/6p1/1P1Pp3/2P1P2p/5qNP/6BP/7K b - - 1 38|f3d1 g3f1 f7f1 g2f1 d1f1|1109|1,15
1k5q/pp3p2/4Pp2/8/1P1pB3/P2P1Rb1/6P1/3Q2K1 b - - 3 28|h8h2 g1f1 h2h1 f1e2 h1g2 f3f2 g2f2|1109|29,1,46,42
5r1k/6p1/p6p/4P3/2P5/P3pPqP/4Q3/3R1KR1 b - - 0 39|f8f3 e2f3 g3f3 f1e1 f3f2|1109|1,30,18,15
6k1/1p3pbp/1q1p1np1/4n1B1/p3P3/5B2/PP2NPPP/2Q3K1 w - - 0 21|c1c8 g7f8 g5f6|1109|29
r1b1kb1r/pp4pp/2n1pn2/2p2p2/Q1P5/3q2P1/PP1P1PBP/R1BNK1NR w KQkq - 0 10|g2c6 b7c6 a4c6 d3d7 c6a8|1111|30,18
r5rk/pb3p2/1p2p3/4N3/3p4/4P3/PP2B1P1/R4RK1 b - - 0 24|g8g2 g1h1 g2e2|1111|20,34,18
8/6pk/6bp/8/P1NRp3/R1q1B3/6PP/6K1 b - - 4 39|c3e1|1112|1,6
r3b2k/1p4rn/p1pp2PR/5q2/3P4/2N1B3/PPP4Q/2K5 w - - 0 31|h6h7 g7h7 h2h7|1112|7,4
r1b1k2r/ppp2pp1/7p/4q3/1b6/4P3/PP1NBPPP/R2QK2R w KQkq - 0 13|d1a4 c8d7 a4b4|1112|18
r2qr1k1/ppp2ppp/4P3/8/1nP2Q2/2N2N1P/PP3KP1/R4R2 b - - 0 15|b4d3 f2g1 d3f4|1112|18
r6k/6p1/p4r1p/Pp3RNQ/1q6/8/6PP/R6K b - - 1 38|f6f5 g5f7 f5f7|1113|5
2kr4/2p3pp/p7/4R3/3nPp2/2N2P2/PP3P1P/6K1 b - - 0 29|d4f3 g1g2 f3e5|1113|1,18
8/5Bp1/7p/4bk2/P5R1/7P/2r5/7K w - - 6 49|f7g6 f5f6 g6c2|1113|1,21
4R3/kpp4p/8/1p6/4Pr2/1P3n1R/P2PK3/8 b - - 1 35|f3g1 e2e3 g1h3|1113|1,18
1rbrn1k1/pp2R1pp/4p3/N3N3/1P1R4/P1n3P1/4PPBP/6K1 b - - 0 21|c3e2 g1h1 e2d4|1113|18
3q1r1k/p3n1p1/4Q2p/8/2p1B2N/2Pp2PP/P4r2/3R2K1 w - - 0 29|h4g6 e7g6 e6g6|1114|18
8/p6p/4p3/1p3p2/3k4/1P1nNP2/P2K1P1P/8 w - - 2 35|e3c2 d4e5 d2d3|1114|29,1,10
2r4k/6RP/8/3p4/pp1qn3/3N1Q2/PPP5/1K5R b - - 0 35|e4d2 b1a1 d2f3|1114|18
r4rk1/q5pp/p1pb1pb1/2pp4/N5P1/3P1N1P/PPP1Q1P1/1R2R1K1 w - - 1 20|e2e6 g8h8 e6d6|1114|18
4R3/p1pr2pk/1p3p1p/1P4b1/q7/5Q1P/6P1/7K w - - 0 36|f3f5 g7g6 f5d7|1115|1,18,4
5B2/p7/1k5p/7R/8/5PKP/q5P1/8 b - - 2 45|a2g8 g3f2 g8f8|1116|1,18
1k4r1/ppq4P/2nbQ3/3p4/3P4/1NP3r1/PP3P2/R4RK1 w - - 0 25|f2g3 c7h7 e6d6|1117|
8/4q1k1/1Rp3p1/2PbbnNp/7P/8/5PP1/4QBK1 b - - 4 41|e5h2 g1h2 e7e1|1117|20
r4rk1/1pp1Q1pp/p4q2/8/8/8/PPP2PPP/R1B1R1K1 b - - 0 16|f6f2 g1h1 f2f1 e1f1 f8f1|1118|3,15,9
7k/1p4pp/1p3b2/1r6/3P1P2/5K2/6PP/2R1r3 w - - 0 34|c1c8 f6d8 c8d8 e1e8 d8e8|1118|3,1,15
7Q/2p5/1p2prp1/p4k1p/q4p1P/8/6RK/8 w - - 0 38|g2g5 f5e4 h8f6|1118|29,1
5rk1/1pp3p1/4p2p/1PQ1p2n/2P1P3/7P/3N1qP1/R5K1 w - - 0 24|c5f2 f8f2 g1f2|1119|1
2R5/p5pk/b6q/3Pp3/4PpP1/5P1Q/P1R5/6K1 b - - 0 36|h6h3 c2h2 h3h2 g1h2 a6c8|1119|1,30,5
1r2r3/1kp1q2p/4Q3/p2P4/1P1P4/P1p2P2/2P3PP/2KR3R b - - 0 30|e7g5 c1b1 e8e6|1119|20,1
8/p2k4/1p6/5P2/4p1P1/1P6/P2q1QK1/8 b - - 10 50|e4e3 f2d2 e3d2|1119|0,1,19
2r2nk1/R3Rr1p/1p4p1/2qP1p2/2P5/2Q3PP/5PB1/6K1 b - - 0 42|f7e7 a7e7 c5e7|1119|
8/p4p1p/3k1p2/PPp1pP2/4P3/4K2P/6P1/8 b - - 0 31|c5c4 e3d2 d6c5|1120|1,2,12
1b3rk1/1p3ppp/q4r2/2Pp4/3Pp3/2N1P2P/P2K2P1/2R1Q2R b - - 6 29|a6d3|1121|6,42
6B1/p3kb2/7Q/3p4/2p5/2P2PbP/6Rq/5K2 b - - 21 51|h2h1 g2g1 h1f3|1122|1,4
3r2k1/pp4p1/8/4q3/3p4/1PP2Q2/PK6/5R2 w - - 0 34|f3f7 g8h8 f1h1 e5h2 h1h2|1122|1,15
3r4/pp3R2/4p1p1/2n3k1/6P1/6KP/PPP5/8 w - - 8 26|h3h4 g5h6 g4g5 h6h5 f7h7|1122|1,15
rn2k2r/pp3ppB/2p1pn1p/3p3P/3P2P1/2N1PPq1/PPP1K3/R2Q2NR b kq - 2 12|g3g2 e2d3 g2h1|1122|18
5r1k/p5pp/2p1Q3/1pq1p3/4P3/8/B4PPP/3R2K1 b - - 1 32|c5f2 g1h1 f2f1 d1f1 f8f1|1123|3,1,15,9
8/P7/8/r3p1R1/5pP1/3pk2P/6K1/8 w - - 0 48|g5e5 a5e5 a7a8q|1123|0,29,1,11,14
8/7p/6p1/5b2/BR3K2/7r/PP1k4/8 b - - 2 48|h3h4 f4g5 h4b4|1123|1,21
6k1/1R4b1/p5Qp/4q2P/6P1/2P5/PKP5/8 b - - 6 37|e5c3 b2b1 c3e1|1124|1,4
2r1k2r/p3nppp/2pb4/3n2N1/1p1Pp1PP/qP2B3/P1P2PB1/1KQR3R b k - 3 19|d5c3 b1a1 a3a2|1124|18,4
8/p4q1k/1p1bQ3/1P3rpp/3P4/6P1/1B5P/4R1K1 b - - 3 30|f5f1 e1f1 f7e6|1124|29,1
5rrk/pb5p/8/2pn1Q2/3q2B1/2p3NP/P3R2K/5R2 w - - 12 38|f5f8 g8f8 f1f8|1124|
2k4r/1pq2p2/p1pbpQr1/P4p1p/2P5/8/1PP2PP1/3RR2K w - - 4 27|f6h8 c7d8 h8d8|1125|5,26
r3k3/ppp3pp/8/3Bp3/3n2bq/3P4/PPP3PP/RNB2QK1 b q - 2 16|d4e2 f1e2 g4e2|1125|7
r2q1rk1/2p3pp/p2b4/1p6/4R3/1P6/1PP2PPP/R1BQ2K1 b - - 0 16|d6h2 g1h2 d8d1|1126|20,7
r4rk1/2R1QNbp/4p1p1/3pP3/1p3P2/7P/6PK/5q2 w - - 0 30|f7h6 g7h6 e7h7|1127|20,4,9
k1r2r2/1pQnq2p/p3p1p1/1Npp4/R3P3/5P2/PPP3PP/1K5R w - - 2 24|a4a6 b7a6 c7a7|1127|4,26,9
1r6/1bQ1n1kp/p2p1rp1/1p1P2q1/8/P7/1P2B2R/3R3K w - - 2 30|c7e7 g7g8 e7h7|1127|5
4r1k1/p5pp/4q3/1p5r/2pRQ3/2P1P2P/PP3PP1/3R2K1 b - - 0 24|e6e4 d4e4 e8e4 d1d8 g8f7|1127|1
6k1/5ppp/p1p1P3/1pb3q1/8/1BP4Q/PP1r1PPP/4R1K1 b - - 0 24|c5f2 g1f1 f2e1 e6f7 g8f8|1127|1,18
8/1R2B3/5p2/4bP1p/p1k4r/5K2/8/8 w - - 8 46|b7b4 c4d5 b4h4|1127|1,21
8/8/2R5/4b1k1/2P1P3/1n4p1/4Kp2/5B2 b - - 4 56|b3d4 e2e3 d4c6|1127|1,18
2r2bk1/1p3ppp/1P4b1/3Np3/2B5/1Q2P2P/3q1PP1/2R3K1 w - - 1 31|d5e7 f8e7 c4f7 g6f7 c1c8|1128|20,7,9
2k5/1pp4R/p1p3p1/5bB1/3rnK2/P7/2P4P/6R1 w - - 0 27|h7h8 c8d7 h8d8 d7e6 d8d4|1128|1,21
8/7r/2K5/4kb2/8/8/6Q1/8 b - - 0 66|f5e4 g2e4 e5e4|1128|1,18
4r3/5Rkp/1n2q1p1/2p1N3/ppP1Q3/7P/PP4P1/7K b - - 3 32|e6f7 e5f7 e8e4|1128|20,1
3rr3/pp4kp/2p3p1/4qp2/2P1p3/1P2P2P/PQ3PP1/R2R2K1 w - - 2 22|b2e5 e8e5 d1d8|1129|1
8/8/4PK1k/3N4/7P/8/8/r7 w - - 5 71|e6e7 a1f1 f6e6|1129|0,25,1
r6r/ppp1kppp/2n5/8/Qb3q2/8/PPPN1PPP/2KR1B1R b - - 2 13|b4d2 d1d2 f4a4|1129|20,26
1k6/1pp5/p4R2/7p/1P1PN2P/2P1n3/2r5/7K b - h3 0 32|c2c1 h1h2 e3g4|1129|1
8/6pk/1Q3nqp/8/P2P4/7P/6PK/5R2 b - - 0 36|f6g4 h2g3 g6b6|1129|20,1
r1r5/4p2k/3q2pb/3Q4/p3P3/P7/KP6/7R w - - 2 32|d5f7 h7h8 h1h6|1130|29,1,4
8/6p1/4R3/P5kP/2B5/5n2/P4rr1/7K w - - 3 41|e6g6 g5f4 g6g2 f2g2 h1g2|1130|1
8/8/6p1/4K2p/7P/6P1/4k3/8 b - - 3 66|e2f3 e5f6 f3g3|1130|1,2
r7/p3p3/1p1qp1Q1/2pn4/8/2P2k2/PP6/2B3K1 w - - 2 37|g6g2|1131|1,6
7k/p1p2p1p/3p1p1Q/1pnPp3/4n2P/P1P4P/4r3/6RK b - - 4 35|e4f2 h1g2 f2g4 g2f3 g4h6|1131|20,34,1,30
6k1/B5p1/1Np4p/p2n4/4p1P1/2Pb3P/1P3KP1/8 b - - 0 32|e4e3 f2g3 e3e2|1131|0,1
4r3/pkp2p1p/6p1/2R1b3/4P3/2N2P2/PP4PP/6K1 b - - 0 22|e5d4 g1f1 d4c5|1131|1,18
3r2k1/5p2/1PR1p2p/5p2/8/1K6/8/8 w - - 1 37|b6b7 g8g7 c6c8|1131|0,1,14
5k1r/p3R1bp/3N1pp1/4nbB1/2P5/3rP3/q4PPP/3Q1RK1 w - - 0 17|e7e8|1132|6
1r2r2k/pp2Np1p/6p1/2p1b1Q1/8/8/PPP2PK1/3q4 w - - 0 24|g5e5 f7f6 e5f6|1132|1,4
1k1r4/1p3p1p/p4p1b/5P2/4p3/2R5/PPBr1PPP/3RK3 b - - 3 21|d2d1 c2d1 h6d2|1132|31,1
6k1/pPr3bp/6p1/2rPp1N1/8/7P/5PP1/1Q4K1 b - - 0 29|c5c1 b1c1 c7c1 g1h2 c1b1|1132|1,18
1r2r1k1/p4p1p/3p2p1/2pPq3/2P5/1P5P/P4KB1/1R1Q1R2 b - - 2 31|e5e3|1133|52,6
7k/p4p1p/4q3/8/6P1/4PQ1K/PP1r4/6R1 b - - 0 34|e6h6 h3g3 h6h2|1133|1,4
5r1k/1p1R2p1/2p3Bp/1nP5/1Pn5/5P1P/4N1P1/6K1 b - - 1 35|c4e5 d7b7 e5g6|1133|1,18
r2k3r/pp1n2p1/3bpnBp/2qp4/3Q1BPP/P1N1P3/1PP2P2/R4RK1 b - - 3 15|c5d4 e3d4 d6f4|1133|44
r1bqk2r/ppp2ppp/4p3/2Pp4/1bnPnB2/2N2NP1/PP2PP1P/2RQKB1R w Kkq - 1 9|d1a4 c8d7 a4b4|1133|18
8/8/8/2K2k1p/1R5P/1r6/8/8 b - - 0 47|b3b4 c5b4 f5g4 b4c3 g4h4|1133|1,14
r4rk1/5pp1/8/1pp1P2p/7P/qN4P1/2P5/1KQR3R b - - 1 28|a3a2|1134|6
6k1/p5p1/1p3r1p/1N1p4/PP6/6Pb/5B1Q/3qR1K1 b - - 2 35|d1e1 f2e1 f6f1|1134|4,16,9
2RQ1bk1/7p/3p4/3Pp1r1/4Ppq1/P7/5B1P/5B1K b - - 4 32|g4f3 f1g2 f3g2|1134|18,4
r2q1rk1/pp2bppp/5n2/2pNp3/2B1P1b1/3P4/PPP3PP/R1BQ1RK1 w - - 3 11|d5f6 e7f6 d1g4|1134|7
8/8/1R5p/8/pn1N2pP/k5P1/5PK1/1r6 w - - 2 64|d4c2 b4c2 b6b1|1134|1
8/5ppk/7p/1Rp5/8/3p1P1P/6P1/6K1 b - - 0 40|d3d2 b5b1 c5c4|1134|0,25,1,14
6k1/6p1/8/Q4K2/P4P2/6P1/8/3q4 b - - 6 44|d1h5 f5e4 h5a5|1134|1,19,21
6Q1/8/3p4/2p1q1p1/1p1k2B1/1P4PP/2P4K/4r3 w - - 8 49|g8c4 d4e3 c4d3 e3f2 d3f3|1135|1,15
8/R1P3p1/3n2kp/8/3P4/P1BK4/2r5/8 b - - 2 49|c2c3 d3c3 d6b5 c3b2 b5a7|1135|40,1,18,9
kr6/p1p2ppp/r7/5q2/1n6/1PNPB3/1Q1K1PPP/3R3R b - - 2 23|f5d3 d2e1 b4c2 b2c2 d3c2|1135|
r4b1r/1p2ppp1/pk2nnp1/1Np5/P1P3P1/4P2P/1P3PB1/R1B2RK1 w - - 0 16|a4a5|1136|6
6k1/pp3p1p/6pq/4b3/6Q1/2P2B2/PP3P1r/1R3RK1 b - - 13 35|h2h1 f3h1 h6h2|1136|31,4,9
r1b3k1/pp3ppp/8/2q5/2B5/2b4P/P2N1PP1/4QRK1 w - - 0 21|e1e8 c5f8 c4f7 g8h8 e8f8|1136|29,15
2kr4/ppp1bp2/3p1p2/7Q/3PP2p/2N4q/PPP2P1N/R4RK1 b - - 0 17|d8g8 h5g4 g8g4 h2g4 h3g4|1136|7
r5k1/pb3qp1/1p2p2p/3pP1b1/3P2P1/BP1B1Q2/P1P4P/6K1 w - - 1 25|d3h7 g8h7 f3f7|1136|29,7
rn3rk1/p5pp/3N4/4np1q/5Q2/1P6/PB1P1KP1/2R4R b - - 1 25|e5d3 f2e3 d3f4 h1h5 f4h5|1137|18
8/ppq5/7k/6p1/2P1P2p/3KB2R/P7/6R1 b - - 1 42|c7d7 d3e2 d7h3|1137|1,18
rn2kb1r/pQp1pppp/8/3bq3/8/8/PP1PBPPP/R1B1K1NR w KQkq - 1 9|b7c8|1138|6
5rk1/1p2pp1p/6p1/3Pq3/p2NP3/P2Q1Rb1/B5P1/7K b - - 3 29|e5h5 h1g1 h5h2 g1f1 h2h1 f1e2 h1e1|1138|46,42
2r1q1k1/4r1p1/6R1/p2p3P/1ppP1Q2/2P2P2/1P6/1NK3R1 b - - 4 33|e7e1 g1e1 e8e1 c1c2 b4b3|1138|15,26
2r3k1/1p6/1N2p2p/1P4pP/2r1P3/n7/1P6/1KR2R2 w - - 2 33|b2a3 c4c1 f1c1|1138|1,5
r7/P6P/R7/8/3k4/4p3/5K2/6n1 w - - 0 58|f2g1 e3e2 g1f2|1138|1,5
7R/5p2/5N1n/4K1k1/8/7p/5r2/8 w - - 5 47|f6e4 g5g6 e4f2|1138|1,18
5r2/pp6/1kpR3p/5qp1/3P4/P1P3P1/1P2Q1PP/6K1 b - - 14 30|f5b1 e2d1 b1d1|1139|1,4
3r2k1/6p1/1pb2p2/1np1nN2/p6R/PR1P4/1P6/1KB5 w - - 0 41|f5e7 g8f7 e7c6 a4b3 c6d8|1140|
8/4RP2/5r1k/6pp/8/6K1/8/8 w - g6 0 73|e7e6 f6e6 f7f8q|1140|0,29,1,23,11,14
1N2k1nr/pp3ppp/4b3/8/4p3/B1q5/P3QPPP/1R3K1R b k - 0 18|e6c4 e2c4 c3c4|1140|23
r3k1nr/ppp2pp1/1bp1q2p/4P3/3p1BQ1/7P/PPP2PP1/RN3RK1 w kq - 1 12|g4g7 e8c8 g7h8|1140|47
5rk1/1pqbn1p1/pbn5/3pp1PP/3P3N/2PBB3/8/RN3QK1 w - - 1 23|d3h7 g8h7 f1f8|1141|29,7
8/1p3kpp/pR6/P5b1/1P3p2/2P5/3rK1PP/8 w - - 0 38|e2d2 f4f3 d2e1|1141|25,1,5
1Q6/p4p1k/1p4p1/2p5/2P3b1/1PKN1PP1/P3q2r/2R2R2 b - - 6 35|e2d2|1142|6
2r3k1/p2r1pp1/1p5p/n1pN4/8/P3P2P/5PP1/2RR2K1 w - - 1 30|d5f6 g7f6 d1d7|1142|20,1
5r1k/r4p1p/p2pb1p1/1p2n3/3qP1N1/P2B1Q2/1P4PP/R4R1K w - - 6 22|f3f6 h8g8 g4h6|1143|7,4
8/p6p/6p1/1P2p3/Pk2K3/5P2/6PP/8 b - - 5 34|b4a4 e4e5 a4b5 f3f4 a7a5|1143|25,1,2
8/8/1P1pk3/5p1p/6p1/3P2K1/2P4P/8 b - - 0 41|e6d7 b6b7 d7c7 b7b8q c7b8|1143|1,2
r4rk1/ppp2ppp/3p2q1/3N4/2BPPbb1/6P1/PPP4P/4RQK1 w - - 0 18|d5e7 g8h8 e7g6|1143|18
7k/5Qpp/8/2p5/8/4q3/PP1r3P/1K3R2 b - - 9 33|e3d3 b1a1 d2d1 f1d1 d3d1|1144|3,1,15
r1bqr1k1/ppp2ppp/8/4n3/8/2R1PN2/PP1QBPPP/5RK1 b - - 0 13|e5f3 e2f3 d8d2|1144|7
4Bn2/rb4R1/pp3R1p/2p1b3/7k/PP6/6PP/7K w - - 1 32|f6h6|1145|6
5rk1/2R4p/p2Nb2q/4Q1p1/1P3P2/P4pPP/5P1K/8 b - - 0 35|h6h3 h2g1 h3g2|1145|1,4
2Q2r1k/1p4pp/p3Q3/8/3q3P/6P1/1P3RB1/5bK1 b - - 0 31|d4f2 g1h2 f2g2|1145|4
1R3bk1/7p/2Qp1rp1/2p5/P1P1p3/8/q4PPP/1R4K1 b - - 3 35|a2f2 g1h1 f2f1 b1f1 f6f1|1145|3,1,15,9
4r1k1/p4ppp/b1q5/8/P1pp4/3P4/1PP2QPP/5RK1 w - - 0 23|f2f7 g8h8 f7f8 e8f8 f1f8|1145|3,1,15,9
3r1rk1/pp1b1qp1/2p3RQ/3p4/8/1P2P3/PBPP2PP/R5K1 b - - 0 21|f7f2 g1h1 f2f1 a1f1 f8f1|1145|3,15,9
8/8/8/5KPk/1p5P/8/8/8 b - - 0 45|b4b3 g5g6 b3b2 g6g7 b2b1q|1145|0,1,2,11
3r1rk1/1p2q1pp/5p2/8/1P1n4/6Q1/PPBB1PPP/R4RK1 b - - 0 20|d4e2 g1h1 e2g3 f2g3 d8d2|1145|18
8/p6p/1pbk2p1/3B1p2/1P1K3P/P5P1/1P6/8 w - - 1 37|d5c6 d6c6 d4e5|1145|8,1
8/5k2/1p4p1/1R1K2P1/r6P/8/8/8 b - - 12 58|a4a5 b5a5 b6a5|1145|1,23,14
6r1/8/p1p1k3/P1B3Rr/1P2pp1P/2P5/7K/6R1 b - - 0 44|h5h4 h2g2 g8g5|1146|1,37,48
r1b1k1nr/1pp1qppp/1p6/4n3/1P1B4/P4N2/3NPPPP/R2QKB1R b KQkq - 0 11|e5d3|1147|6,23,38
7k/6p1/3p3p/1Q1Pr3/P7/4qr2/2R3PP/3R3K b - - 4 27|e3e1 d1e1 e5e1 b5f1 e1f1|1147|3,1,15,9
8/pp4pk/8/3pQ1q1/3Pb1P1/5r2/PP3P1P/2R1R1K1 b - - 5 24|g5g4 e5g3 f3g3|1147|1
3r2k1/p5pp/qp3pn1/8/6Q1/BP3PP1/P6P/4R1K1 w - - 1 27|g4e6 g8h8 e6e8 g6f8 e8d8|1147|1,23
8/8/8/p1p2kPp/P4p1P/1P6/4K3/8 w - - 2 47|e2f3 f5e5 g5g6|1147|1,2,24
r4rk1/ppp2pp1/3p3p/8/7q/P2BPP1b/1PP4P/RN1QR1K1 b - - 1 17|h4g5 g1f2 g5g2|1148|7,4
Q7/p4kp1/5n2/1pB5/7q/P2P1P1b/2P2P2/R4RK1 b - - 0 23|h4g5 g1h1 g5g2|1148|18,4
r2brk1n/pp3pp1/1q1pb3/1Bp1p1P1/4P3/P1PPBN2/5P2/1R2K2R w K - 0 27|h1h8 f8e7 h8e8|1148|4,16
8/pp6/5N2/4k3/5p2/1PPKbP2/8/8 w - - 11 47|f6g4 e5f5 g4e3 f4e3 d3e3|1148|1
5R2/8/6p1/7n/4p2P/5k1K/8/8 b - - 7 58|h5f4 h3h2 e4e3|1148|1
2kr4/ppp1n3/3q1p2/3p3p/3P4/1NP4P/PP4Q1/R4NK1 b - - 0 22|d8g8 g2g8 e7g8|1148|23
4r1k1/p6p/2Q2pp1/5b2/1P6/2P5/P2rqPPP/R1KR4 w - - 0 26|d1d2 e2e1 d2d1|1150|
8/5pk1/5p1r/p3p3/P2pP1pP/1q4P1/2Q3RK/6R1 b - - 3 42|h6h4 g3h4 b3h3|1151|1,4,9
6k1/5pp1/7p/2p5/2P5/1Rrp2PP/P4P2/5K2 b - - 1 37|c3c1 f1g2 d3d2|1152|0,1,14
8/8/1p4p1/5k2/P7/3K4/7P/8 w - - 1 46|d3c4 f5e6 c4b5 e6d7 b5b6|1152|1,2
4q1k1/p4ppp/3r4/8/2P5/1PPn1QPP/P1N5/R4K2 b - - 5 26|d6f6 f3f6 g7f6|1152|1,23
8/7p/5K2/7P/6k1/8/8/8 w - - 1 59|h5h6 g4f4 f6g7 f4g5 g7h7 g5f6 h7g8|1152|1,2
r5k1/5pb1/4p1p1/1P4P1/1q6/1P3N2/2Q2PK1/3R4 b - - 0 32|b4g4 g2f1 g4f3|1152|29,1
7k/1b2N1p1/p3RN2/1p1p1Q1p/3P2n1/PPP2K2/1q3PP1/8 b - - 2 31|b2f2|1153|6
rn2k1nr/ppp2p2/4B2p/4b1pQ/3qPp2/8/PPP3PP/RNB1K2R w KQkq - 0 10|h5f7 e8d8 f7f8|1153|22,4
r2qk1nr/pp2p2p/2n3p1/1B1Qb3/8/2N4P/PP3PP1/R1B1K2R b KQkq - 0 12|e5c3 b2c3 d8d5|1153|48
rnb1k2r/ppp2Npp/7n/2b4Q/2BqpP2/8/PPPP2PP/RNB1K2R b KQkq - 0 7|d4f2 e1d1 c8g4 h5g4 h6g4|1153|18
6rk/1b1q2rp/5Q2/pp1ppP2/8/P6R/BP5P/3R3K w - - 1 36|h3h7 h8h7 f6h4|1154|40,4,23,9
7k/pp5p/8/3p4/3P1qr1/2P2Q2/PP4P1/R6K b - - 4 33|g4h4 h1g1 f4h2 g1f2 h4f4|1154|31,1,23
6r1/1b3p1k/p1q2Pp1/1p1r4/3p1R2/P2B4/1PPR2PP/7K w - - 0 32|f4h4 d5h5 h4h5|1155|4,23
8/p2r1pk1/2R4p/P2bPP2/2p1B2P/4K3/1p6/8 w - - 1 39|f5f6 g7h8 c6c8 d7d8 c8d8|1155|1,15
5kr1/p1q2p2/1p2p3/2p5/7Q/P1P4P/3n1PP1/3RR1K1 b - - 4 26|d2f3 g1f1 f3h4|1155|1,23
6k1/5pp1/1p5p/p7/4Q3/P5PP/1P2RP1K/2r2q2 b - - 0 32|f1g1|1156|1,6
r6r/1bq3p1/p2ppkP1/5p2/3P4/1Pp1QN2/P1n2P2/1K1R2R1 w - - 0 29|e3g5|1156|6
2rq1rkn/5pp1/p3b3/2p5/4N3/1P6/PBQ3K1/7R w - - 0 32|e4f6 g7f6 c2h7|1156|31,4,9
6k1/1b4p1/2p1p2p/1pP1qp1Q/1P6/3BP1PP/2R2PK1/1r6 b - - 3 31|e5d5 e3e4 d5d3|1156|1,18
r7/pppq2Qp/2nbkB2/3np3/8/3P4/PPP2PPP/2K2B1R w - - 9 18|g7g4 e6f6 g4d7|1156|29,21
5k2/2p3p1/1pPb3p/1P3q2/2Q5/4R3/5PP1/6K1 b - - 3 43|f5b1 c4f1 d6h2 g1h2 b1f1|1156|29,1
4Q3/5rk1/b1p5/3qp3/1p3pP1/1P3n2/KP6/7R w - - 2 37|e8h8 g7g6 h8h6|1157|1,4
r2q1rk1/pp2bpp1/2p1b2p/4P3/3PNn2/1P1Q3P/P4BP1/1BR2RK1 w - - 5 26|e4f6 g7f6 d3h7|1157|31,7,4,9
5nrk/p5r1/2R1p3/3pP2q/Q5P1/5P2/2R5/6K1 w - - 0 42|c2h2 h5h2 g1h2|1158|23
8/8/8/4k1pp/1p2Np2/5K1P/P7/8 b - - 1 55|g5g4 h3g4 h5g4 f3g4 e5e4|1158|1,30,10
8/6R1/2p2k1p/P1Pp1q2/3P4/3Q1P2/5K2/7q w - - 1 42|g7f7 f6f7 d3f5|1158|40,29,1
2k4r/2pr4/3p3b/1Q2p2p/4P1qP/3R1nB1/PPP2P2/1K5R w - - 5 30|b5a6 c8d8 a6a8 d8e7 a8h8|1159|21
r7/2R3pk/5p1p/p4b2/8/P2qB2P/Q4PP1/6K1 b - - 3 32|d3d1 g1h2 d1d6 g2g3 d6c7|1159|1,18
8/4B3/1R4p1/1p1k3p/b5rP/2P1K3/P7/8 b - - 7 42|g4e4 e3d2 e4e7|1159|1,18
r1bq1r1k/ppp2Bp1/2np2Qp/2b1pPN1/4Pn2/2N5/PPP1K1PP/R1B4R w - - 6 15|c1f4 d8g5 f4g5|1159|
3r1r1k/3Q1R1p/6p1/p1qB4/1p2P3/2b4P/2P3P1/1R5K w - - 5 39|f7h7|1160|6,13
r1b2r1k/pp4pp/2pp1p2/5P2/2B1P2Q/2b2R2/PqP3PP/5R1K w - - 0 24|h4h7 h8h7 f3h3|1160|40,7,4,13,9
4r1k1/Q4ppp/3p4/6q1/P7/4r2P/1PP3P1/5RK1 w - - 0 22|a7f7 g8h8 f7f8 e8f8 f1f8|1160|3,1,15,9
8/3k3p/R3N1p1/1Pb5/8/5r1P/4K3/8 b - - 2 63|f3e3 e2f2 e3e6|1160|20,34,1
6k1/8/7R/3p2p1/2pP2P1/2P2N1n/r7/5K2 b - - 0 33|a2f2 f1e1 f2f3|1160|1,18
2r1k1r1/p4p1p/2p1p3/3pP3/4bPQn/P3B3/q5PP/2R4K w - - 0 23|g4g8 e8d7 g8f7|1160|
6rk/pp3prp/5p2/3B4/1P3P2/P3Q2q/6N1/R4NK1 b - - 0 26|g7g2 d5g2 h3g2|1161|4
3r2k1/p2r1ppp/qpQ1p3/2N5/8/P3P1P1/1PR2P1P/2R3K1 b - - 0 24|d7d1 c1d1 d8d1 g1g2 a6f1 g2f3 f1h1|1161|7
r4rk1/p1p2ppp/2pb1q2/4n1B1/4P3/3P1N1P/PPP3P1/1R2QR1K b - - 4 17|e5f3 g5f6 f3e1 b1e1 g7f6|1161|
2r5/p4kp1/2Npb2p/3n4/1pN2p2/7P/PbP2PP1/3R2K1 w - - 3 28|c4d6 f7f6 d6c8|1161|18
r3k2r/3q4/p1pb1p2/2p5/2PpPpb1/1P1P1N1p/P1Q2P1N/R1B2R1K b kq - 1 22|g4f3 h2f3 d7g4 f1g1 g4f3|1161|31,7
8/p7/1p4R1/4k3/2KN1p2/6p1/6r1/8 w - - 0 46|g6e6|1162|1,6
6rk/3R4/p3p1q1/3pPp2/2pP3r/2P4P/P2Q2P1/6RK b - - 0 35|h4h3 g2h3 g6g1|1162|1,4
1k5r/1pp4P/6Q1/p3qB2/6Pb/8/3R1P2/6K1 b - - 2 33|e5e1 g1g2 e1d2|1162|1,18
8/r6k/p1n1PR1P/1p6/8/8/5P2/6K1 w - - 1 44|f6f7 h7h6 f7a7|1162|1
2rk3r/2qn2pp/2n1pP2/pp1p3B/2pP1B2/P1P4P/1PQ2PP1/R4R1K b - - 0 20|c7f4 f6g7 h8g8|1162|
8/p4Rpk/7p/5p2/7K/1P2q1P1/P5Q1/8 b - - 0 38|e3g5 h4h3 g5h5|1163|1,4
4r1k1/1p4pp/4pr2/p1qpN3/4nP2/P1P5/1P2Q1PP/3R1R1K b - - 4 24|e4g3 h2g3 f6h6 e2h5 h6h5|1163|7,15,9
8/R7/4r3/2p2N1k/1p1p3b/1P1PpK2/2P5/8 w - - 0 47|f5g7 h5g6 g7e6|1163|1,18
r1bqk1nr/1pp2pp1/p2p2np/3Pp3/1bP1P3/2N1BN2/PP2BPPP/R2QK2R w KQkq - 0 9|d1a4 c8d7 a4b4|1163|18
6r1/3k1p1r/pn2p3/1p1pP3/1PpP1RB1/P1P4P/2K5/5R2 w - - 3 39|f4f7 h7f7 f1f7|1163|1
1r1r4/1pb3k1/p4p1p/2q5/P1PNnP2/8/RQ4PP/5R1K w - - 3 27|d4e6 g7f7 e6c5|1163|18
2kr4/pR4R1/2p5/8/5nP1/4r2P/PPb3BK/8 w - - 3 42|g7c7|1164|45,6
r1bq1rk1/pp3ppp/8/3pP3/6n1/1B5P/PPP3P1/RNBQR1K1 b - - 0 12|d8b6 g1h1 g4f2 h1h2 f2d1|1164|18
3rbR2/6kP/4p1P1/2p1P3/2P5/p2BP3/P1K5/8 b - - 2 35|e8a4 c2d2 d8f8|1164|20,1
6k1/p2b1pp1/1p1q1n1p/2pp4/5P2/1NP1rQ1P/PP2r1P1/2RR1NK1 w - - 4 26|f1e3 e2e3 f3e3|1164|
4r2k/7p/5n2/3PpQ2/2p1P3/1p6/2qRK3/7R b - - 5 42|c2e4 f5e4 f6e4|1164|1,18
6k1/1N2R2p/pp4p1/3P4/3b2PK/Pr6/7P/8 b - - 6 33|d4f6 g4g5 f6e7|1165|1,18
5r1k/p3r1p1/1p5p/2p5/2B2Nn1/2PP4/PP4KP/8 w - - 0 30|f4g6 h8h7 g6f8 h7h8 f8g6|1165|1,18
5n2/5p1k/7p/1p2Pp2/1PpP3P/2q2NQ1/7K/8 w - - 0 35|f3g5 h6g5 g3c3|1165|20,1
3R4/5pk1/4qpr1/p3p2Q/P7/2p3P1/5K1P/2B5 b - - 0 36|e6b6 f2e2 b6d8|1165|1,18
2R5/6pp/4P1k1/5qr1/4p1P1/r3P3/4QP2/2R3K1 b - - 2 29|g5g4 e2g4 f5g4|1165|1
r1bqr1k1/ppbn2pn/2p1pp2/3pN2Q/2PP1P2/2N1P1B1/PP4PP/R4RK1 w - - 0 14|h5f7 g8h8 e5g6|1166|7,4
6k1/5p1p/pp4p1/2p1bb1n/2PpB3/3P2P1/P1N2P1P/R5K1 b - - 1 31|f5e4 d3e4 d4d3 a1b1 d3c2|1166|0,1
r1b1r1k1/ppp2ppp/5n2/8/1b1q4/2NBB2P/PP3PP1/R2QK2R w KQ - 0 12|d3h7 f6h7 d1d4|1166|20,7
r2qkb1r/5ppp/4p3/p2nP3/P1Qp4/5N2/1P4PP/R1B2RK1 w kq - 0 17|c4c6 d8d7 c6a8|1166|29
B2Qnk1r/p1p2pp1/6q1/2b5/1P3B2/2P2Np1/P3P2P/R4R1K b - b3 0 19|g3g2|1168|0,6
r4rk1/1p4pp/4b3/8/p3Q3/P4p2/1B2BqPP/R3R2K b - - 0 22|f2g2|1168|6
5r2/pp3r1k/3pQ2p/5p2/3P1p2/2P2q2/PP3PRP/7K w - - 0 28|e6g6 h7h8 g6h6 f7h7 h6f8|1168|29,1,15
8/5rk1/2p1Rqp1/p2p4/P2P4/2P1Q3/1P6/6K1 b - - 0 41|f6f1 g1h2 f7f2 e3f2 f1f2|1168|1,30
8/7R/4kp2/2K2Npp/4P3/5P2/8/3r2n1 w - - 4 58|h7e7|1169|1,50,6
8/p4ppk/1p6/3R2n1/1P6/3R4/P3Nq2/3K4 w - - 0 44|d5g5 f2f1 d1d2|1169|1,5
6R1/1pr5/p5Bk/5p1P/P4K2/8/2b5/8 w - - 4 47|g8h8 h6g7 h8h7 g7f6 h7c7|1169|1,30,21
r1b2r2/pp3ppk/4N3/q2pn3/6Q1/2p5/P1PB1PPP/R3K2R w KQ - 0 17|g4g7|1170|6
r4rk1/ppp2ppp/3N4/8/7q/3BRb1P/PPP2P2/R1B1Q1K1 b - - 1 19|h4g5 g1f1 g5g2|1170|7,4
8/p5kp/2B3p1/2N1P3/5P2/1Pn2K2/2n4P/8 b - - 0 47|c2d4 f3e3 d4c6|1170|1,18
8/1p3ppk/1p5p/1P6/1n1Rq3/pP6/P2Q2PP/2K5 b - - 5 36|b4a2 d2a2 e4d4|1170|29,1
5rk1/5p2/2Q4p/2P3p1/4P3/5P2/1R1p2PP/2r2RK1 b - - 0 34|c1f1 g1f1 d2d1q f1f2 d1d4|1170|0,40,1,11,17
r6k/1p2Q3/p2pB2p/4q3/8/3b4/PP4PP/K4R2 w - - 6 26|f1f8 a8f8 e7f8 h8h7 f8g8|1171|1,30,15
r4rk1/5p2/b4p1p/p2p4/4pP2/2P5/P1P1BRPP/R5K1 b - - 1 18|e4e3 f2f3 a6e2|1171|1
b5k1/3p1p1p/pq3p1Q/3Pp3/4P2P/6P1/P1r2PB1/2R3K1 b - - 4 27|b6f2 g1h2 f2g2|1173|1,7,4
4rr2/1Q4pk/R1p2q1p/8/8/1P1P4/2P2PPP/5RK1 b - - 4 29|f6f2 f1f2 e8e1 f2f1 e1f1|1173|1,15,9
r5k1/6q1/6np/7Q/5p2/7P/5PP1/4R1K1 w - - 2 34|h5d5 g7f7 d5a8|1173|1,18
5rk1/n6p/6p1/pPp1p3/2P1P2q/2N5/4QP1P/6RK b - - 4 26|f8f2 g1g2 f2e2|1173|1
3r3k/5ppp/p2Q1n2/1p1P4/8/5B2/qP3PPP/2RR2K1 b - - 0 27|d8d6 c1c8 f6g8|1173|25,5
r1bq2r1/ppp1kp1p/3p1n1B/5N2/4P1n1/2PB4/P1P2PPP/R2Q1RK1 b - - 13 16|c8f5 e4f5 g4h6|1174|
7r/8/5R2/3pB1k1/3P4/5PK1/8/3r4 w - - 5 45|f3f4 g5h5 f6f5 h5h6 e5h8|1174|20,1
r3kb1r/1p3ppp/p5q1/2p1P3/3p1n2/5N2/PPP2PPP/R2QRBK1 b kq - 3 16|f4h3 g1h1 h3f2|1174|29,7,23
r2q1r1k/pb2b1pp/2n5/1pp2nN1/3p1B2/3P2P1/PPPNQPBP/R3R1K1 b - - 5 19|e7g5 f4g5 d8g5|1174|
1r4k1/6pp/5p2/8/P2R4/2n1NP1P/5P2/6K1 b - - 2 37|c3e2 g1g2 e2d4|1174|1,18
r1bk1r2/pppp2pp/8/2PNQq2/8/8/PPP3PP/R1B1R1K1 b - - 0 17|f5f2 g1h1 f2f1 e1f1 f8f1|1175|3,15,9
r2qk2r/pp1n2pp/3bpp2/1bppN3/4PP2/1P1P4/PBPN2PP/R2QK2R w KQkq - 0 12|d1h5 g7g6 e5g6 h7g6 h5h8|1175|
r2qrk2/pb2np1Q/1p3b2/2p3N1/8/P2P2P1/1P2PPBP/R4RK1 w - - 2 19|h7f7|1176|6
5k2/3R1p1B/2p5/3pPQp1/8/P1P1PKB1/1r3PPP/q5NR b - - 4 24|a1d1 g1e2 d1e2|1176|4
8/6kp/5p2/2pB2p1/3p1N2/6rP/8/2K5 w - - 0 45|f4h5 g7g6 h5g3|1176|1,18
r3k1nr/1b3pp1/p2qp3/1pp1n2p/8/2NP1NP1/PPP3BP/R2Q1RK1 w kq - 0 14|f3e5 d6e5 g2b7|1177|20
8/6p1/r6p/1k2pp2/8/3K1P1P/6P1/R7 w - - 0 53|a1a6 b5a6 d3c4|1177|25,1,14
3R4/8/8/3Pk3/2pr4/4K3/8/8 w - - 11 54|d8e8 e5d5 e8d8|1177|1,14
6k1/3q1pb1/p5pp/1p1p3r/5Q2/P2BPPP1/1P3P2/2R3K1 b - - 0 25|d7h3 f4h4 h5h4|1177|1
2r1brk1/6p1/4p1P1/ppbp1p1R/5B2/2PBP2P/PP3q2/2KQ4 w - - 5 25|h5h8 g8h8 d1h5 h8g8 h5h7|1178|40,7,15,9
8/8/R6p/4k1p1/5p2/pr3B1P/6K1/8 b - - 3 52|b3b2 g2f1 a3a2|1178|0,1
3r4/r5kp/1p3p2/4p1p1/3qQ3/2RPN2P/2P2PPK/8 w - - 1 43|e3f5 g7h8 f5d4|1178|1,18
8/2b4p/p1k5/8/P1PK1p2/7P/5B2/8 b - - 1 58|c7b6 c4c5 b6c5 d4e4 c5f2|1178|8,1,21
r2q1rk1/5P2/bpn4p/p2pP3/P2P3b/2PQ4/2B4P/RNB2RK1 b - - 0 21|f8f7 d3g6 f7g7|1178|23
2k2b1r/pp3p2/2p1pp1p/8/r6P/2B5/PPP2PP1/2KR3R w - - 2 18|c3f6 h8g8 d1d8|1178|1
4rn1k/pb2r1pp/1p1q1p2/5P2/2BppN2/7R/PP1Q2PP/4R1K1 w - - 2 25|f4g6 f8g6 f5g6|1178|7,23
8/p5k1/6r1/1q1pp2R/4P3/4QK2/5P2/8 w - - 0 39|e3a7 g7f6 h5f5 f6e6 a7f7|1178|1,30
r2q4/5p1k/p5p1/np5p/3prQ1N/2P4P/PP3PP1/R5K1 w - - 0 26|f4f7 h7h6 f7g6|1179|4
2R5/3r1pk1/p2N2pp/1p6/4P1K1/1P1n4/P7/8 w - - 4 41|d6e8 g7f8 e8f6 f8e7 f6d7|1179|20,34,1
4rk2/pbp2pp1/1p1N4/3P1q2/QPBP4/1KP2P2/P5r1/R3R3 b - - 0 25|f5c2 b3a3 c2b2|1180|4
2rr4/1b5k/p2q1ppb/1p5p/5R2/1P1P2QP/P1n2P2/1NK3R1 w - - 2 30|g3g6 h7h8 g6h6|1180|29,4
r1b1r1k1/pp1nqNp1/2pb1n1p/3p4/3P1B2/1BP4P/PP3PP1/RN1QR1K1 b - - 0 13|e7e1 d1e1 e8e1|1180|7
8/4k3/4PpK1/p4Pp1/P3B3/2p5/8/8 b - - 0 46|g5g4 g6h5 g4g3|1180|8,1,12
8/pp3k2/2p1B1R1/3p3n/3P1P1q/1P2r3/P6P/6QK b - - 1 45|e3e6 g6e6 f7e6|1180|1
r3kb1r/1ppqpppp/p4n2/1N1Pn3/Q1p1P3/5P2/PP3P1P/R1B1KB1R w KQkq - 0 10|b5c7 e8d8 a4d7 f6d7 c7a8|1180|20,23
5Qk1/6p1/4ppNp/p2p4/3P4/q3P1P1/5PPK/8 b - - 0 34|a3f8 g6f8 g8f8|1181|1
r3r1k1/p4p2/6pp/2pp4/Pp3qPP/1N1RnP2/1PP1Q3/1K2R3 w - - 0 25|d3e3 e8e3 e2e3 f4e3 e1e3|1181|
8/8/8/1k3p2/pr5P/2R2KP1/8/8 b - - 0 53|b4b3 c3b3 a4b3 h4h5 b3b2|1181|0,1,14
r2r2k1/pp3pp1/1n2p2p/q3P3/5Q2/P1R2N1P/1P3PP1/4R1K1 b - - 1 22|b6d5 f4h4 d5c3|1181|18
rnb1qrk1/pp4pp/4p3/3pNp1Q/2pPn3/2PBP1P1/PP1N1PP1/R3K2R w KQ - 2 12|h5h7|1182|7,6
6k1/pp5p/3p2p1/2pPq2P/P1P1Br2/1P2QP1b/7P/4R1K1 b - - 0 29|e5g5 g1f2 g5g2|1182|1,7,4
3r4/1P4p1/4k3/4p3/6P1/6K1/3p3P/3R4 w - - 1 44|d1d2 d8d2 b7b8q|1182|0,29,1,11,14
3rk2r/pp5p/2p2p2/2Q1p3/5q2/5nN1/PPPP3P/R1BK1B1R b k - 0 17|d8d2 c1d2 f4d2|1183|4
1k1r3r/ppp3p1/8/8/3Q4/3K2N1/PPP1Nq2/R4R2 b - - 3 35|d8d4 e2d4 f2g3|1183|
8/1RQ5/p1n1pbpk/3p4/q7/4PB1P/5PP1/6K1 b - - 6 29|a4a1 g1h2 f6e5 g2g3 e5c7|1183|1,18
8/5p2/3pkPrp/1p1rp2R/1P6/2P2RP1/4KP1P/8 b - - 2 34|e5e4 h5h4 e4f3|1184|1,14
4r2k/ppb2pqn/2p4N/3p1B2/3P2PP/5P2/PPPQR1K1/8 b - - 0 32|e8e2 d2e2 g7h6|1184|
5nr1/1p3k1p/pr3p2/3p1p2/3P3P/2P2N1K/1P2R3/4R3 w - - 0 32|e2e7 f7g6 e1g1 g6h6 g1g8|1184|1,21
6k1/6p1/5P2/4B2B/2b1P3/3p4/r4RK1/1r6 w - - 1 42|f6f7 c4f7 h5f7|1184|0,1
8/8/4p3/pp1k2p1/6P1/PP2KP2/8/8 w - - 1 43|f3f4 g5f4 e3f4|1185|1,2
1k5r/ppp4p/2p5/4bQp1/4P3/6P1/Pq1rKPBP/2RR4 w - - 0 23|d1d2 b2c1 f5e5|1185|
2r1k2r/nq1bbppp/B2ppn2/8/1PQ1PB2/P4N2/5PPP/R1R3K1 w k - 7 18|a6b7 c8c4 c1c4|1185|
4r1kr/p2nq3/2Q4p/1p1p1R2/3P4/8/PP3PP1/5RK1 w - - 0 32|c6g6 e7g7 g6e8|1185|29
6k1/4bppp/qpQ5/2p1N3/3pP3/7P/1r3PPK/r7 w - - 2 38|c6e8 e7f8 e8f7 g8h8 f7f8|1186|29,1,18,15
8/6p1/2R4p/p7/1p1q3P/1P3BP1/5PK1/4k3 w - - 15 46|c6c1 e1d2 c1d1 d2c3 d1d4|1186|1,21
8/7p/5pp1/3k2P1/5K2/5P1P/8/8 w - - 1 42|g5f6 d5e6 f4g5|1186|1,2
r2q4/3P1kp1/2R1p2p/2Qp1p2/5P2/4P3/6PP/6K1 b - - 6 38|a8a1 g1f2 d8h4|1187|1
5r1k/pp3p1b/1qp2P1Q/3p4/3P2P1/b6P/PnP1r3/1R3RK1 w - - 0 23|h6g7|1188|6
2k3nr/ppp2ppp/2n5/8/8/1Q2P3/q4rPP/1R2KB1R w K - 0 16|b3b7 c8d7 b1d1|1188|18
8/4B2N/p1p3p1/5p2/5k2/P2K1P2/7r/8 w - - 0 37|e7d6 f4f3 d6h2|1188|1,21
2k1r3/pp1r4/2p2p1p/3pP2q/3P4/3B1PR1/P2QK3/R7 b - - 0 28|h5h2 e2d1 h2g3|1188|18,23
8/4r2k/p2nN2p/1p1P4/nK6/6R1/P5P1/8 w - - 12 53|e6f8 h7h8 f8g6 h8g7 g6e7|1189|20,34,1,18
b2r1rk1/4bppp/pnp1p3/2B5/2P5/1NqP1P1P/P2N2P1/R2QR1K1 b - - 0 20|e7c5 b3c5 c3d4 g1h1 d4c5|1189|18
7r/pp3pk1/1np2p1p/5R2/3Pr3/2P5/PP4K1/6R1 w - - 0 26|g2f3 g7f8 f3e4|1189|20,34,1
r4rk1/ppp2ppp/2nbp3/6Bq/7N/2PP1P2/P1PQ2PP/R4RK1 w - - 1 15|g2g4 h5g5 d2g5|1189|47
5k2/6r1/3Np3/ppP1P1qQ/3n2P1/P7/7P/6K1 w - - 0 40|h5e8|1190|1,6
5R2/pp2p2R/3p2p1/3Pk3/5r2/6r1/PKP3P1/8 w - - 6 29|h7e7 e5d5 f8f4|1190|29,1,14
2r2rk1/R4p2/1qNp2pp/1p1P4/1P6/4p2P/5PP1/Q5K1 w - - 0 33|c6e7 g8h7 e7c8 e3f2 g1f1|1190|1,18
2r1r3/pp2n2p/4k1p1/1b3p2/2N1P3/6P1/PP2B2P/1K1R3R w - - 3 23|d1d6 e6f7 c4e5 f7g7 e2b5|1190|20
4r2k/1p3rpp/p7/3BPb2/P2p3Q/6P1/1P2q2P/4RR1K b - - 3 27|f5e4 d5e4 f7f1 e1f1 e2f1|1191|20,7,15
3r1R2/4k3/p3p2p/1p6/3q4/2N5/P5rP/5R1K w - - 2 29|f1f7 e7d6 f8d8 d6e5 d8d4|1191|29,1,37,21
4r1k1/ppq2p2/5n2/8/P2P3p/6P1/1P4Q1/6RK w - - 0 29|g3h4 g8f8 g2g7 f8e7 g1e1 f6e4 e1e4|1191|20,34,1,18
r1b2bkN/ppp3p1/3pPq1p/4n3/3Q4/8/PPP2PPP/RNB1K2R b KQ - 0 12|e5f3 g2f3 f6d4|1191|20
r4rk1/ppp2pp1/2nb3p/3p4/3P2n1/2P2N1q/PP3P1N/R1BQRBK1 b - - 3 14|d6h2 f3h2 h3h2|1192|7,4
5N1k/pp4p1/2n4p/8/3P4/P1N2nq1/1P4Q1/2R4K b - - 1 35|g3h4 g2h3 h4h3|1192|4
3r4/6kp/1p3pp1/2bNp3/4P1qr/1QP5/P2N2PP/3RR2K b - - 0 34|h4h2 h1h2 g4h4|1192|40,7,4,9
k1rr4/1p6/p2Q3b/4p3/N7/7P/PPP2P2/1K5b w - - 1 30|a4b6 a8a7 b6c8 d8c8 d6h6|1192|1,18
8/1n3p2/1P1pk1pp/2p5/2P1K1NP/5P2/5P2/8 b - - 4 45|f7f5 e4d3 f5g4|1192|1,18,10
rn5r/pp1k4/2ppRn1q/5P2/3P4/3K2QB/PPP4N/7R b - - 10 23|h6h3 g3h3 h8h3|1192|
1r3bk1/8/pN1p2pp/P1pnp3/8/5KPP/1R3P2/2B5 w - - 0 43|b6d5 b8b2 c1b2|1192|1,5
2R2rk1/5pp1/p5np/b2p4/3P4/Pq1BPN2/1P3QPP/3R2K1 b - - 0 26|b3d1 f2f1 d1f1 g1f1 f8c8|1192|18,5
6k1/5rpp/3B4/3Q4/3q4/7P/P3n1PK/8 w - - 0 33|d5a8 f7f8 a8f8|1193|1,4
2qr2k1/p4p1p/6p1/1p1B4/1PP5/bR3QP1/5PKP/4r3 w - - 0 32|f3f7 g8h8 f7f6|1193|4
5Q2/pbp3np/1p1pq1pk/1P6/P6P/6K1/8/8 w - - 0 33|f8f4 g6g5 f4g5|1193|1,4
1r4k1/bPR4p/5K2/8/8/6P1/7P/8 w - - 3 45|c7c8 b8c8 b7c8q|1193|0,1,4,11
2kr2nr/pp3pp1/2pbnP2/3p3p/3P4/3BBQPq/PPP4P/RN2R1K1 w - - 1 18|d3f5 h3f5 f3f5|1193|47
1kr5/1p1q1pp1/p2bN2p/8/8/3QP3/PP1B1PPP/3R2K1 b - - 0 24|d6h2 g1h2 d7d3|1193|20,7
5rk1/1pp2p2/pb1p1q1p/6p1/1PPp4/P2Qr1PP/4N1PK/3R1R2 w - - 3 23|f1f6 e3d3 d1d3|1193|
8/2R2pk1/4p2p/3pP1pP/2pnq1P1/2P1Q1B1/5P2/5K2 b - - 1 62|e4h1|1194|1,6
2k2b1r/pppr2p1/5p1p/8/2B5/2nP2P1/PPP4P/2K1RR2 w - - 0 20|e1e8 d7d8 c4e6 c8b8 e8d8|1194|3,29,15
2r3k1/5p2/4b1p1/4P2p/3QKP2/6P1/7P/8 b - - 4 65|c8c4 d4c4 e6c4|1194|1,23
8/1p3p1k/p4Ppp/4p2P/3r4/5Q2/Pq4P1/5R1K w - - 1 36|h5g6 f7g6 f6f7 d4h4 h1g1|1194|0,1
r2qkb1r/pp3ppp/2n2n2/2p1p3/4NPb1/3P2P1/PPP3BP/R1BQK1NR w KQkq - 1 8|e4f6 d8f6 d1g4|1195|
rn2kb1r/1p2pppp/p2pbn2/8/3qP3/2NB4/PPP2PPP/R1BQK2R w KQkq - 0 11|d3b5 a6b5 d1d4|1195|20
rn2q1k1/pp4p1/2pb3p/3p4/3p4/2PB4/PP1N2PP/R1BQ2K1 b - - 1 16|e8e3 g1h1 e3d3|1196|18
2kr3r/pp1n1pp1/2pb1n2/3p1Np1/3P4/5N2/PPP2PPP/2KR3R w - - 0 15|f5d6 c8c7 d6f7|1196|5
1r2r3/p5R1/3kp3/4R2P/nqpP1B2/2p2P2/P1P5/K1Q5 b - - 6 34|b4b2 c1b2 c3b2 a1b1 a4c3|1197|0,15
2rq2k1/p4pp1/5n1p/2R5/P2P4/5Q1P/3N1PP1/6K1 b - - 0 30|c8c5 d4c5 d8d2 f3a8 g8h7|1197|25,1
1k1rr3/ppp2pp1/5n1p/3p3P/Nq1Pp1bR/1P2P1P1/2P2PB1/R2Q1K2 w - - 3 20|h4g4 f6g4 d1g4|1197|
r3k2r/ppp3pp/1b1qp3/8/3N2n1/8/PP2QPPP/RNB1R1K1 b kq - 0 13|d6h2 g1f1 h2h1|1198|7,4
5k2/ppp2qp1/8/3p2B1/3P4/2P3nP/PP3QP1/6K1 b - - 4 25|f7f2 g1f2 g3e4 f2f3 e4g5|1198|40,1,18
2r2rk1/1pq2p1p/p3p1p1/3pP3/4nP2/2N1P2R/PPQ3PP/2R3K1 w - - 2 20|c3e4 d5e4 c2c7 c8c7 c1c7|1198|20
r1b2rk1/pppp1pp1/3b1q1p/3Nn3/3QP3/7N/PPP2PPP/R3KB1R b KQ - 1 10|e5f3 g2f3 f6d4|1198|20
4R3/1ppk1p1p/3p1p2/8/P1P5/1PR5/1r3PPP/6K1 b - - 0 24|b2b1 c3c1 b1c1 e8e1 c1e1|1199|3,1,15,14
1R3Qnk/6pp/r5p1/4q3/8/pP5P/2P2PP1/R5K1 b - - 2 32|e5a1 g1h2 a1e5|1199|1,5
2kr1r2/p1q3pp/4p3/1P3p2/2pPb1n1/2P2N1P/1P3PP1/R2QRBK1 b - - 0 20|e4f3 h3g4 f3d1|1199|
1k1r1r2/pp6/2B4b/5Q1p/6p1/8/PPP2P2/1K1R3R b - - 0 26|d8d1 h1d1 f8f5|1199|
2r2bk1/1p3Rp1/1p2p3/2n3NQ/2p5/2P4P/2q3K1/8 w - - 8 38|f7f2 c2f2 g2f2 c5e4 g5e4|1199|25
4r1k1/p5pp/2p3n1/1pBp4/3P2Qn/P1P3N1/2P2qPP/5R1K b - - 2 30|f2g2|1200|7,6
3r1k2/1b2Rp1r/p1qP1p1N/8/1PQ2P2/P7/6PP/7K w - - 1 30|e7f7 h7f7 c4f7|1200|4
3r4/p4pk1/4pqp1/1p1nR3/6r1/2P2NK1/PP2QP1R/8 w - - 0 33|g3g4 f6f4 g4h3 d8h8 h3g2 f4h2 f3h2|1200|5
r3r1k1/p4ppp/b1p5/n1P1q3/B4n2/P2P1Q2/R1P2PPP/1NB2RK1 b - - 2 18|f4e2 f3e2 e5e2|1200|7
4Qnk1/2R4p/p4p2/1p6/1P1q4/8/7K/8 w - - 0 35|e8f7 g8h8 f7f8|1201|29,1,4
r4rk1/pp2ppbp/3p2p1/4n3/4PBN1/1BN4q/PPP2P2/R2QR1K1 b - - 0 15|e5f3 d1f3 h3f3|1201|18
3r1k2/4rpbB/6n1/8/1P6/p3P1P1/P4PP1/1K1R4 w - - 0 39|d1d8 e7e8 d8e8 f8e8 h7g6|1202|1
1k1r4/1p2n3/pb4np/2q2r2/8/2P1BN2/PP2Q1PP/RN2R2K b - - 3 27|c5e3 e2e3 b6e3|1202|
2kr2r1/ppp2p1p/1q2pp2/2b1n3/2PP4/1P2BP2/P3B1PP/R2Q1RK1 w - - 1 18|d4c5 d8d1 c5b6|1202|
1rbq3r/2Nk1ppp/2np1b2/3Np3/4P3/8/PPP2PPP/R2QK2R w KQ - 3 14|d1g4|1203|6
r4rk1/2q2pp1/3bpn1p/pp1p4/3n4/P1P1NB1P/1PQB1PP1/R4RK1 w - - 0 17|c3d4 c7c2 e3c2|1203|5
2k3r1/2p2pq1/p3p3/3p4/1PnP1P2/P1N1P3/4QKP1/R5R1 b - - 8 32|g7g3 f2f1 c4e3 e2e3 g3e3|1203|29
2rqk2r/pp3pp1/4p1p1/2bpP3/8/5P2/PP1N2PP/R1BQ1R1K b k - 2 17|h8h2 h1h2 d8h4|1204|40,7,4,9
7k/1Q4p1/p4r1p/5r2/1P4K1/6P1/7P/8 w - - 1 43|b7c8 h8h7 c8f5 f6f5 g4f5|1204|1,17
2rQ3r/6k1/6p1/5p2/3P4/2P1P3/P1R2PP1/4K2R b K - 0 31|h8h1 e1d2 c8d8|1204|1,5,48,17
2r3k1/p4ppp/3r1n2/2b3B1/Q7/6P1/PPB1qP1P/4RRK1 b - - 8 24|c5f2 f1f2 e2e1|1204|29,18
3r4/5k1p/2p1p3/1p3p2/3r3P/1P2KN2/2P2PP1/2R4R b - - 3 32|d4e4|1205|1,6
r3k1nr/pp1n1pb1/1qp3p1/4p2p/4P1P1/2NP1N2/PPP1B1P1/R1BQ1R1K b kq - 0 11|h5g4 f3h2 g4g3|1205|20,34,7
4r3/pp1Q1pk1/2p3p1/8/2pP4/2N1qP2/P1K1R3/8 b - - 3 34|e3d3 c2b2 e8e2|1205|20,1
8/8/1K1k2p1/1pp3P1/1P6/P7/8/8 b - - 1 53|c5c4 b6b5 c4c3 b5c4 c3c2|1205|0,1,2,12
4r3/p6k/1p1R3p/2b2bp1/2P2p2/1PB2P2/1P5P/3R1K2 b - - 2 37|f5h3|1206|1,6
r3k2r/pp3pp1/2nb4/3p4/6np/1PN1PN1q/P4P2/R1BQRBK1 b kq - 3 16|d6h2 f3h2 h3h2|1206|7,4
6k1/2p2bp1/1b5p/1p6/1P2p3/2P1N1B1/1P1r1PPP/3R2K1 b - - 3 34|b6e3 d1d2 e3d2|1206|1
r5k1/1p4p1/p5qp/8/5n1N/2Q4P/PP3PP1/3R2K1 b - - 6 25|f4e2 g1f1 e2c3 h4g6 c3d1|1206|1,18
r4rk1/pp6/4p1pp/3b2p1/7n/3PN3/PB2QP1P/5RK1 b - - 5 25|h4f3 g1h1 f3d4 e3d5 d4e2|1206|20,34,7
8/1p2kp2/1b3p2/4r2p/5N2/3R1PP1/1P5P/1K6 w - - 13 43|f4d5 e7f8 d5b6|1206|1,18
8/4kp2/3p4/3K1pPp/4P2P/8/8/8 w - - 0 54|e4f5 f7f6 g5g6|1206|1,2
8/5k2/5ppp/1p1p1P2/p1pP1KP1/P1P4P/1P6/8 w - - 0 40|f5g6 f7g6 h3h4|1206|25,1,2,24
4r3/2Q5/p3r3/4p3/3k1p2/1P6/1P3PP1/6K1 w - - 12 50|c7c4|1207|1,6,17
6rk/pp4rp/2p2Q1R/2BqpP2/8/1P3p2/P1P5/2K5 w - - 5 34|h6h7 h8h7 f6h4|1207|40,1,4,23,9
r1b4r/pp1pkppp/3qpn2/4n3/5P2/P7/2PB2PP/R2QKB1R w KQ - 0 14|d2b4 d6b4 a3b4|1207|23
1nkr1br1/1pp1q3/3pQ1pp/1P1n4/3N4/2P4P/5PP1/RNB1K2R b KQ - 0 21|e7e6 d4e6 d8e8 e1g1 e8e6|1207|23
r1b1k2r/1pp2p1p/p1nb2p1/8/7q/1P2P1P1/PBPPQ2P/RN2K1NR b KQkq - 0 11|d6g3 h2g3 h4h1|1207|23
8/R7/1p2kpp1/2qbp3/5Q1P/8/2r2PP1/6K1 w - - 2 39|f4g4 e6d6 g4d7|1208|1,4
2rr2k1/5p1p/2p3p1/1p6/p2q2P1/Pb3PNP/1P1Q3K/2R1R3 w - - 0 30|e1e8 d8e8 d2d4|1208|29
8/2q3kp/p1P3p1/1p1Qp3/2rp4/6P1/P4P1P/3R2K1 w - - 4 32|d5d7 c7d7 c6d7|1208|0,1
r1b1r1k1/1ppq1p2/6P1/p1p3p1/2Pb1R2/8/PPB3PP/R2Q3K w - - 0 18|g6f7 d7f7 f4f7|1208|0,18
R5nr/ppp1k2p/2npN3/8/3PQ3/6pq/PPP5/RNB3K1 b - - 0 15|h3h2 g1f1 h2f2|1209|7,4
8/pp5k/4RQp1/3p1p1p/8/8/q5PP/7K b - - 0 33|a2b1 e6e1 b1e1|1210|3,1,4
r3k1nr/pp2npp1/2p4p/4q2P/8/2N1B3/PPPQb1P1/3R2KR w kq - 0 16|d2d7 e8f8 d7d8 a8d8 d1d8|1211|3,15,9
1R6/8/7p/r1k1p1p1/4P1P1/p3KP1P/R7/3r4 w - - 5 43|a2c2 c5d6 b8d8|1211|1,14
5q1k/p5p1/1p5p/8/4P3/P4QP1/1P2R1K1/2r5 b - - 7 44|c1g1 g2g1 f8f3|1211|29,1
6k1/p3qpp1/7p/3Q4/8/2bB3P/P5P1/7K w - - 0 24|d5a8 e7f8 d3h7 g8h7 a8f8|1211|29,1
r1r3k1/pQ3p2/2N1pq1p/3p2p1/3n4/7P/P4PP1/R3R1K1 w - - 0 26|c6e7 g8g7 e7c8 a8c8 b7c8|1211|18,47
rnb1r3/ppp1qk2/5n1p/3P4/2BP1bpP/8/PPP3P1/RN1Q1RK1 w - - 0 14|d5d6 c8e6 d6e7|1212|0,20,34
5r2/4N3/4b3/2p1k1pp/p1P1p3/1P6/P5PP/3RK3 w - - 0 29|e7g6 e5f6 g6f8|1212|1,18
8/p3b2r/1pk3pp/2p1Rp2/2P2B2/PP5P/4KPP1/8 w - - 4 27|e5e6 c6d7 e6g6|1212|1
r3r1k1/pp1qnpp1/2p4p/6N1/3PQ3/1P6/P4PPP/R3R1K1 w - - 0 18|e4h7 g8f8 h7h8 e7g8 g5h7|1214|7,15
8/5K2/1p1k4/p1p5/P1P5/1P6/8/8 b - - 6 56|d6e5 f7e7 e5d4 e7d7 d4c3 d7c6 c3b3|1214|1,2
1k1r3r/pp3ppp/4p3/P1b5/1nP5/BQ3BqP/5P2/1R3RK1 w - - 0 22|f3g2 g3b3 b1b3|1214|
2k5/1p1R1p1r/p3n1p1/4b1P1/4P3/1Pq1B2P/P1PQ2B1/2K5 b - - 0 29|c3a1|1215|6
3rr1k1/1R3ppp/8/2p5/q1Qp1B2/6P1/P1R2P1P/6K1 b - - 4 28|e8e1 g1g2 a4c6 f2f3 c6b7|1215|18
4Rrk1/p6p/1p4p1/3p4/1P6/PRn2P1P/B1Pq2P1/Q6K b - - 0 33|f8e8 b3c3 e8e1 a1e1 d2e1|1215|18
3r2k1/p3q3/2p1b1pQ/8/1p1r4/1P6/P1P2PP1/2K4R w - - 0 24|h6h8 g8f7 h1h7|1217|1,4
4b1k1/8/p2bpr1p/1p1pN1p1/3P1p2/1PqBQ2P/P5P1/5R1K w - - 0 30|d3h7 g8h7 e3c3|1217|20
1rbq2k1/2p1rpp1/p1Bp1n1p/3P4/1p1N4/2n2P2/PPP1Q1PP/2KRR3 w - - 1 19|e2e7 d8e7 e1e7 c3d1 c1d1|1217|
rn2k1nr/pp4pp/1q2pp2/8/3b2b1/2N2NP1/PPPBBP1P/R2QK2R b KQkq - 1 10|d4f2 e1f1 g4h3|1218|22,4
5r1k/p3Nppp/1p1Np3/1Pr1P3/7P/2P2bq1/P5P1/3R2K1 w - - 0 32|d6f7 f8f7 d1d8 f7f8 d8f8|1218|3,31,15,9
4q1k1/pp5p/4r1p1/3pn3/5Q2/2PB3P/PP4P1/4R2K b - - 3 25|e5d3 e1e6 e8e6|1218|1,18,5
8/p7/1p1kbp1p/PP2p3/1KPpP3/3B1P2/6PP/8 b - - 0 35|b6a5 b4a5 d6c5|1218|8,1
3rr2k/7p/5p2/p1p2N2/2Pp2P1/1P5P/P6K/R4B2 b - - 0 33|d4d3 a1d1 d3d2|1218|0,1
3k1r2/p1rp2R1/1p1Np3/4P2p/7P/Pb6/1PPR4/2K5 b - - 4 42|f8f1 d2d1 c7c2 c1b1 f1d1|1220|29,1,15,13,23,26
r1bqr1k1/6pp/p1p1pb2/2p1N3/8/3P4/PPPB2PP/R3QRK1 b - - 1 16|d8d4 d2e3 d4e5|1220|37
r3k1nr/pppq2pp/3b4/4n3/8/P4N2/1P4PP/RNBQ1RK1 w kq - 0 14|f3e5 d6c5 g1h1 d7d1 f1d1|1220|
4r1k1/p1R1n2p/4N3/5r2/6K1/6PP/P3R3/8 b - - 4 46|h7h5 g4h4 e7g6|1221|1,4
6k1/1p2r1qp/4R1p1/pb1pN1P1/3P2Q1/2P1K3/PP3r2/3R4 b - - 1 31|f2e2 g4e2 b5e2 e6e7 g7e7|1221|
3R4/3n1pk1/2pr3r/1p1p3p/3N1P2/1PPKP1P1/R7/8 b - - 4 46|d7c5 d3e2 d6d8|1222|20,1
5q1k/7p/p5p1/1pbB4/5P2/7P/P2Q3K/8 w - - 2 34|d2c3 f8g7 c3c5|1222|29,1
6Q1/2K2p2/5k2/8/1p3P2/1P6/8/7q w - - 3 57|g8g5 f6e6 g5e5|1224|1,4,19
8/1p3r2/p2R3p/6pk/4b3/1P5P/PQ4PK/5q2 w - - 9 36|g2g4 h5h4 d6h6|1224|29,1,4
6k1/p1q2p1p/1p4p1/6N1/3Q4/2P3PP/PP2r3/3R2K1 b - - 0 27|c7g3 g1f1 g3g2|1224|1,18,4,51
6k1/1R5p/2p1np2/p7/2P2Pp1/2KQ1qP1/PP6/8 b - - 6 41|f3d3 c3d3 e6c5 d3d4 c5b7|1224|40,1,18
2r2r1k/p4p1B/4p1p1/4q3/8/4B3/P4P2/1Q1R2K1 w - - 0 37|e3d4 e5d4 d1d4|1224|23
1r6/p6p/3N1kp1/4n3/8/6P1/PP3P1P/3KR3 b - - 4 22|b8d8 d1c2 d8d6|1224|1,23
Q2r3r/3kq3/1pp1p2n/1Np4p/2P1B1p1/8/2P2PPP/5RK1 w - - 4 26|a8c6|1225|6
8/4Q2p/p2p2p1/2pP1b2/2qk4/5B2/P4PKP/8 w - - 4 44|e7e3|1225|1,6
6k1/R7/2pprpK1/1p4p1/8/2P2p2/1P6/8 w - - 2 47|a7a8 e6e8 a8e8|1225|1,4,14
5rk1/1r2qppp/p3p3/1p2b3/1P2N3/P2RP3/1B2QPP1/2R4K b - - 0 24|e7h4 h1g1 h4h2 g1f1 h2h1|1225|18,15
1r4k1/5pp1/8/P7/1PR4P/3K4/r3R3/8 b - - 2 41|b8d8 d3c3 a2e2|1225|29,1,14
8/8/4p3/8/8/5k2/3K1P2/8 b - - 4 52|f3f2 d2d3 f2f3 d3d4 f3f4|1225|25,1,2
r1b2rk1/2qn1pp1/2R1p2p/p1PpN3/3P1P2/2NQ4/P4PPP/5RK1 b - - 0 17|d7e5 c6c7 e5d3|1225|
8/3PR3/8/p2k4/7p/B4n1P/PP1r4/7K b - - 0 48|d2h2|1226|36,1,6
3r1rk1/ppp3pp/3b4/3R2B1/4N3/3P4/PPb2P1P/R5K1 b - - 3 22|d6h2 g1h2 d8d5|1226|20,7
4r1k1/1Bp2ppp/8/4P3/5q2/8/PP3Q2/3R2K1 b - - 0 31|f4g4 g1f1 g4d1|1226|1,18
8/8/3p2k1/6P1/4PK1p/8/8/8 b - - 0 51|h4h3 f4g3 g6g5 g3h3 g5f4|1226|1,2
6k1/3N2p1/4pbQp/3p4/1p1P1K2/r7/Pr4PP/8 w - - 4 33|d7f6 g8h8 g6e8|1227|1,4,23
3q3k/5Q1p/6p1/3pNpn1/3P1R2/2P1r2P/6P1/6K1 w - - 4 28|e5g6 h7g6 f4h4 g5h7 f7h7|1227|1,15,9
rn2kb1r/pp2pp1p/1q3p2/3N1b2/3P4/1P6/P3PPPP/R2QKBNR b KQkq - 0 8|b6a5 d1d2 a5d5|1227|18
5r2/p1pk2r1/3pR1P1/2pP4/2P1p3/1P2B3/P4PK1/8 w - - 2 36|e3h6 g7g6 e6g6|1227|1
5b1r/1k3ppp/2R1p3/BNNn4/8/3r4/PP2bPPP/2R3K1 b - - 1 19|b7c6 b5a7 c6d6 c5d3 e2d3|1228|5
r1bqr1k1/1p3ppp/p5n1/8/4Q3/4N3/PP2BPPP/R2R2K1 b - - 3 18|d8d1 a1d1 e8e4 d1d8 g6f8|1228|
8/R1b3r1/8/1pPk4/1P2p3/P3B3/8/4K3 b - - 5 42|c7g3 e1f1 g7a7|1228|20,1
6k1/4b1p1/4q1P1/2p1pQ2/2r4P/5PNK/1r6/R4R2 b - - 4 39|c4h4|1229|6,16
8/1p1b3k/p3p3/3pP1Bp/1P1n2r1/P6B/3R3K/6R1 b - - 1 33|d4f3 h2h1 g4g1|1229|36,18,4
5rk1/5ppp/p2p4/n3q3/B1p1P3/2P2Q1P/r5P1/1R3RK1 w - - 0 23|f3f7 f8f7 b1b8 e5e8 b8e8 f7f8 f1f8|1229|7,46,9
8/RP6/PR1p4/3b1N2/3K2p1/5kP1/4r2r/8 b - - 7 53|e2d2 d4c3 d2c2|1229|1
1n3r2/p5kp/bp2B1p1/2b2P2/5RQ1/8/P2q2PP/5R1K w - - 8 27|f5f6 f8f6 f4f6|1229|
6k1/6P1/5p1K/2pp4/5P2/1PP5/8/8 b - - 0 45|d5d4 c3d4 c5d4 b3b4 d4d3 b4b5 d3d2|1229|0,1,2
7k/6p1/5r1p/p7/4Q3/P5qP/8/2R4K w - - 1 40|c1c8 f6f8 c8f8|1230|1,4
2k4r/ppp2Qp1/8/4P3/6r1/2P3pq/PP3P2/3R1RK1 w - - 0 22|f7d7 c8b8 d7d8 h8d8 d1d8|1230|3,1,15,9
r1bq1rk1/p4ppp/3b1n2/2p5/2P1N3/2BQ1N2/P4PPP/R4RK1 b - - 3 18|d6h2 f3h2 d8d3|1230|20,7
rn1q1rk1/p5pp/1pp1p3/5p2/2BP1B2/P3P3/1P3PbP/2RQK2R w K - 0 15|c4e6 g8h8 h1g1|1230|
8/p5R1/7p/1p2Bp1k/2q2P2/7P/P5PK/8 w - - 2 35|g2g4 f5g4 h3g4 h5h4 e5f6|1231|1,15
1r1q1rk1/ppp2ppp/3bb3/8/3QN3/3P4/PPP2PPP/R1B2RK1 b - - 2 13|d6h2 g1h2 d8d4|1233|20,7
r2qr3/1p1bbk2/1n2pppB/p2n4/P2PN1Q1/8/1P3PPP/RB3RK1 w - - 2 21|e4d6 e7d6 g4g6 f7e7 g6g7|1235|33,15,9
r2q1rn1/1p3p1k/p2pbn1p/8/P3PQ2/1NPB3P/2P3P1/R4RK1 w - - 1 20|e4e5 h7h8 e5f6|1235|20,34
1qk5/4n1p1/1P2pp2/1BPp4/1p1P2K1/4P1b1/r7/3Q3R w - - 3 32|h1h8 c8b7 h8b8|1235|26,21
5q1k/8/Q2pB2p/3P2p1/1p1b4/1Pp5/P1P3PK/8 b - - 2 34|f8f4 g2g3 f4f2|1235|1
4r3/p1p1r3/7p/1bN1Pk2/P4p2/1P3K2/2P2PP1/3RR3 b - a3 0 33|b5c6 f3e2 e7e5|1235|1,37
8/6p1/5bkp/2p5/1pB5/1P1n2BP/2b1NPPK/8 w - - 3 31|c4d3 c2d3 e2f4 g6f5 f4d3|1236|1,18
7k/8/3pB1nN/1RpP2pp/3bP3/3K2PP/2P2r2/8 b - - 3 31|g6e5|1237|1,6
2kr2n1/ppp3p1/2n5/3Np1B1/4P3/3P1P1q/PPP5/R3KQ2 b Q - 0 17|h3g3 e1d2 g3g5|1237|18
6rk/7p/3Q1p2/2p2P2/2Pb4/P2P3P/1P5K/8 b - - 6 35|d4e5 d6e5 f6e5|1237|1,18
rn3rk1/pp4pp/2pq2p1/3p4/4n1P1/2PBQ2P/PP4K1/RNB1R3 b - - 5 18|f8f2 e3f2 e4f2 e1e8 g8f7|1237|
4r1k1/1q6/7b/5r1p/3p4/R2Np1P1/1P2Q2P/5RK1 b - - 5 42|f5f1 e2f1 e3e2|1237|0
r2rQ1k1/1p1P1pp1/2q3p1/pN1n4/P7/7P/5PP1/3RR1K1 b - - 4 33|d8e8 d7e8q a8e8 e1e8 c6e8|1237|
2r5/5kbp/3B2p1/p2p1p2/Rp2pP2/2P1P2P/1RPK2P1/8 b - - 0 32|b4c3 d2c1 c3b2|1238|0,1,18
7r/pR6/4B1k1/5pp1/3p3r/3P1PKb/PPP5/7R b - - 0 31|f5f4 g3f2 h3e6|1238|20,1
8/8/3p2RP/4b3/4p3/6P1/3k1K2/8 b - - 0 47|e4e3 f2f3 e3e2|1238|0,1
8/8/1K2n3/2pk4/6P1/1P6/P7/8 w - - 1 41|a2a4 c5c4 b3c4 d5c4 a4a5|1238|25,1,10,12
8/8/8/2pPp1bR/2P1P1k1/5r1p/4K3/8 w - - 4 63|h5g5 g4g5 e2f3 h3h2 f3g2 h2h1r g2h1|1238|29,1
8/7p/2k1bP2/1nP5/p3RB2/r3N3/4K2P/8 b - - 0 46|b5c3 e2f3 c3e4|1238|1,18
5r1k/1p2R3/2p2qpp/1p1b4/1P5P/P1P1Q3/5PP1/6K1 w - - 7 38|e3h6 h8g8 h6h7|1239|1,4
8/7p/1R6/3Bppk1/PP1r4/3RK2P/2r2P2/8 b - - 5 41|f5f4 e3f3 d4d3|1239|29,1
3r2k1/pp3pp1/1qpr3p/8/3nP3/1PN1Q2P/1PPR1PP1/3R2K1 b - - 8 24|d4f3 e3f3 d6d2 d1d2 d8d2|1239|29,20
8/1r3p2/2k3p1/3Rp2p/1PK5/8/5PPP/8 b - - 3 44|b7b4 c4b4 c6d5|1239|29,1,14
5r2/5pkp/p3qNn1/4P3/P1pP2Qb/1r5P/1P6/R1B2RK1 b - - 5 27|b3g3 g4g3 h4g3|1239|18
1k4r1/1b3p2/p7/3pPRq1/P1pP4/1pP2Q2/1P3K2/7R b - - 0 38|g5d2 f3e2 g8g2 f2g2 d2e2|1240|40,31,29,1,30
1r1r3k/p1p4p/5p2/2b5/3qP1p1/P3B1Pb/2Q1PP1P/R3R1KB b - - 1 23|d4e3 c2c5 e3c5|1240|
4r1rk/pb1n2pp/1p1q1p2/8/3PpP1N/6Q1/PP4PP/R1B2RK1 w - - 0 21|h4g6 h7g6 g3h3|1241|4,9
3r1k2/p4p2/1p4p1/1P5p/4BP1P/3n2P1/P2p3K/3R4 w - - 2 45|d1d2 d8d4 e4d3|1241|1
rQ6/2PR1pk1/4n2p/8/8/8/5PPP/6K1 b - - 6 44|a8a1 b8b1 a1b1 d7d1 b1d1|1242|3,1,15
2k5/pp3p2/3Qp2p/3BP3/P4q2/2P5/KP6/8 b - - 0 31|f4a4 d6a3 a4a3 a2a3 e6d5|1242|1
4r1k1/p6p/1p4p1/5p2/2P5/1BQ5/P2r1RPP/7K b - - 0 32|e8e1 f2f1 e1f1|1243|1,4
8/p1p1B1pp/1b6/3Q4/2p4P/2k5/P2q2PK/8 w - - 0 42|e7b4 c3b4 d5d2|1243|40,29,1
1r3r1k/6p1/p4pRp/2p1p3/1qB1P2Q/3Pn2P/P5P1/5R1K w - - 6 33|g6h6 g7h6 h4h6|1244|7,4,9
6r1/2pk1p2/p7/1p1PQP2/8/2P4q/P1B4R/4R2K b - - 1 32|h3f3 h2g2 f3g2|1244|1,4
5r1k/pQR3pp/5rp1/3B4/q2n4/7P/P4PP1/5RK1 b - - 4 30|d4e2 g1h2 a4f4 h2h1 e2g3 f2g3 f4f1|1244|
rn4rk/pp3p2/4p2p/4N2N/3p4/P7/1PP5/2K3R1 w - - 4 27|e5f7 h8h7 h5f6|1245|32,1,4
3r2k1/pp2R2p/5pbQ/q2p4/6PP/1Br2P2/P1P5/5RK1 b - - 1 24|a5c5 f1f2 c5e7|1245|18
r4rk1/1p3pbp/p1n3p1/2p1n3/P2pPN1q/3P2N1/BPP3K1/R2QBR2 b - - 3 19|e5g4 d1g4 h4g4|1245|12
8/1b6/pk2p3/1p1pb3/1P2PP2/P1PBK1P1/3R2rr/1N1R4 b - f3 0 35|g2g3|1246|6,13
8/7k/p1p3pp/B1PpP1p1/P2Pn1P1/4P2P/8/2q2QK1 b - - 4 30|c1e3 g1h2 e3g3 h2h1 e4f2 f1f2 g3f2|1246|1,30
4b3/8/1p4kB/4Qp2/3P2p1/qp1K2P1/7P/8 w - - 8 48|e5g7 g6h5 g7g5|1247|1,4
7r/pp2kppp/3rbq2/8/8/3Q4/2P2PPP/3R2K1 w - - 0 27|d3d6 e7e8 d6b8|1247|1
8/2B5/p1k5/5n2/1Rp5/P2r3p/1P2K3/8 w - - 3 47|b4c4 c6d5 e2d3|1247|1
rn2k2r/pppbqppp/5n2/6B1/3P4/4P3/PP3PPP/R2QKBNR b KQkq - 0 9|e7b4 d1d2 b4d2 e1d2 f6e4|1247|40
3r1k2/4bpp1/2p3q1/8/4Qp2/2P5/PPKN1P2/3R4 b - - 3 26|d8d2 c2d2 g6e4|1247|1,23
3K4/2RR4/8/3P4/1q1k4/8/8/8 b - - 21 80|b4f8|1248|1,6,17
rq4r1/1b1p1Nbk/p3p2p/1p3p2/8/P1PQ3P/R4PP1/1B3RK1 w - - 4 25|d3f5 e6f5 b1f5|1248|4,9
r3k2r/pp2bppp/1q2pn2/3pn3/3P4/1PPQB3/P4PPP/RN3RK1 w kq - 0 12|d4e5 b6c7 e5f6|1248|
7k/1p5p/1ppn4/3r1p2/3P1Pq1/4Q1RR/PP4PP/6K1 b - - 0 28|g4d1 g1f2 d6e4 e3e4 f5e4|1248|1,18
8/2Q1qkpp/p7/1p1P4/1P6/7P/6PK/8 w - - 5 36|d5d6 e7c7 d6c7|1248|0,1,19
8/8/8/7p/2krQ2P/P7/1PK2P2/3r1b2 w - - 5 58|e4c6|1250|1,6
8/R1p5/8/8/1kr5/3K4/8/8 w - - 0 59|a7b7 b4c5 b7c7 c5d5 c7c4|1250|1,37,14
8/1k6/p1p1p3/P1P1P2p/2Q2Kp1/3r4/3r3N/8 b - - 4 36|d3d4 c4d4 d2d4|1250|1,18
2r2nk1/pb1rq2p/1p2pnBQ/4B1N1/3P3R/8/P4PPP/4R1K1 b - - 0 25|f8g6 e5f6 e7f6|1250|
rn1qk1r1/p4p1p/1pb1pQ2/1B4B1/8/2P5/PP3PPP/2K4R w q - 0 19|f6d8|1251|6,23
2rr1k1b/1p3p2/4p1p1/p2pP1B1/P1nq4/2N4R/1P4PP/1R5K w - - 0 30|h3h8 f8g7 g5f6|1251|4
r1b4r/1p3pk1/p3p1P1/2bpP1N1/3q1PQ1/3B4/P1P3R1/4RK2 b - - 2 26|h8h1 f1e2 d4e3 e2d1 e3e1|1251|30,15
8/8/8/p5k1/6rp/P2R3K/8/8 w - - 4 52|d3d5 g5f4 d5d4 f4e5 d4g4|1251|29,1,14,21
2r5/2q2k2/3p1p2/4p3/2P1P1Q1/1P1R4/5P1P/6K1 b - - 0 45|c8g8 g4g8 f7g8|1251|1,23
1r1qkb1r/pQpbpppp/2n2n2/1N6/2pP4/8/PP2PPPP/R1B1KBNR w KQk - 3 8|b5c7 d8c7 b7c7|1251|
Q7/5pk1/4pq1p/3p2p1/1R6/2P4P/Pr3PP1/4R1K1 b - - 0 26|f6f2 g1h2 f2g2|1252|1,18,4
7r/6p1/3p4/4pnP1/R1N1k3/2r5/5P1p/R6K w - - 2 46|c4d6 e4f3 d6f5|1252|29,34,35,1
8/8/2p4r/3n3P/3k4/1p3KN1/5P2/4R3 w - - 2 47|g3f5 d4c3 f5h6|1252|1,18
1rr5/1q3k2/4RPp1/2p2n1p/P2p3P/Q7/1PP2P2/1K2R3 w - - 0 36|e6e7 f5e7 e1e7 b7e7 f6e7|1252|0,18,9
r5k1/6B1/2p2QPp/2Pp4/p7/P4pPq/1P1b3P/6K1 w - - 0 36|f6f7|1253|1,6
1b2r1k1/1p3pp1/p1R5/7p/3B1Nq1/1P2P1P1/P4Q1P/3R2K1 b - - 0 29|g4d1 f2f1 d1f1|1253|5,7
2k1r3/7p/p1p3p1/q1Q5/Pp1rPB2/1P1N1P2/6PP/5K1R b - - 0 30|a5c5 d3c5 d4d1 f1f2 d1h1|1254|21
8/4R3/5p2/4kP2/2r1p1PK/8/8/8 b - - 1 43|e5f4 h4h5 e4e3|1254|25,1,14
r2qk2r/pbp1p1b1/1pnp2p1/4P1QP/3P3p/2N2P2/PPP4P/2KR1BNR b kq - 0 13|g7h6 g5h6 h8h6|1254|23
r2q1rk1/4bp1p/p3p1p1/5nP1/1pPB1P2/4PR1Q/3P3P/RN4K1 w - - 1 22|h3h7 g8h7 f3h3 f5h4 h3h4 h7g8 h4h8|1255|40,7,46,16,9
r1b1k1nr/5p1p/p3p1p1/1pqpP3/3n1P2/3B4/PPPN1QPP/2KR2NR b kq - 5 12|d4b3 d2b3 c5f2|1255|20,23
6r1/3q1p1k/p2p4/2pPp3/1pP1Pp2/1P3P2/P5Qp/5R1K w - - 0 36|g2h2 h7g7 f1g1 g7f8 h2h6|1255|1,30
r2q1rk1/pp3ppp/2nbpn2/3p2B1/Q5b1/3P1NP1/PP2PPBP/RN3RK1 w - - 6 10|g5f6 d8f6 a4g4 f6b2 b1d2|1255|44,25
8/pp1r3p/2p2k2/P3Rp2/5K2/3P2PP/1PP5/8 b - - 4 33|d7d4 e5e4 f5e4|1255|1,14
1k4r1/3p1p2/1Bn4p/5q2/5P2/1Q4P1/P7/1R4K1 b - - 3 29|g8g3 b3g3 f5b1|1256|29,1
8/5p1p/5p2/5k2/8/1RK2P2/6PP/1r6 b - - 0 42|b1b3 c3b3 f5f4 b3c3 f4e3|1256|1,14
r1b1k2r/pp3ppp/2n2n2/q2p4/2p5/2P1BN2/PP2QPPP/R3KB1R w KQkq - 4 12|e3b6 c8e6 b6a5|1256|20,34
8/5pkp/4p1p1/p3b3/N3b3/1B4PP/PP3P1K/3Qq3 b - - 4 33|e1f2|1257|1,6
r2qk2r/2p2pbp/p1np1np1/8/p2PP3/3QBP2/1PB2P1P/RN2K2R w KQkq - 0 13|c2a4 e8g8 a4c6|1257|23
1k1rr3/1p5p/p4p1p/2Pp2q1/1PbP4/2N3PQ/P4P1P/R3R1K1 b - - 6 26|e8e1 a1e1 g5d2 h3e6 d2c3|1257|18
8/3B4/1R5p/8/5p1k/r7/5PKP/8 b - - 7 53|f4f3 g2f1 a3a1 b6b1 a1b1|1259|1,15
r1b2rk1/2p2ppp/2nqp3/p7/1p1PP3/1N4P1/PPPQ2P1/2KR1B1R w - - 1 16|e4e5 c6e5 d4e5|1259|
6k1/r1p2r2/p1Q4p/1P2p1p1/1P2Pq1N/2P2N1K/5PP1/R3R3 b - - 0 24|g5g4|1260|6
7r/pkp1Qr2/1pR1p3/8/3bN2p/3P2P1/PP4KP/5R2 b - - 2 21|h4h3 g2h1 f7f1|1261|29,4
4r1k1/5ppp/8/p1Q5/8/B3PP2/qR1r3P/2R3K1 b - - 2 29|d2b2 a3b2 a2b2|1261|
3q1r1k/2r3bp/pB1p1pp1/5P2/1P2P3/P6P/3Q2P1/2R2R1K b - - 3 31|c7c1 b6d8 c1f1 h1h2 f8d8|1261|
4r3/5pkp/b1p1p3/8/4NK2/2P1PP2/P5rP/R5R1 b - - 3 30|e6e5 f4f5 a6c8|1262|1,4
2kr3r/1pp2p2/p3b2p/3qp1p1/1P6/P1QP2B1/2P1BPPP/R5K1 w - - 2 18|g3e5 d5e5 c3e5|1262|
2k2r2/pp1b4/1qp5/4Q3/2P5/2BP1B2/P4nPP/4R1K1 b - - 2 34|f2h3 g1h1 b6g1 e1g1 h3f2|1263|34,35,15,9,38
7k/5rp1/p1p5/2Bn1qp1/1P6/P4B2/5PPP/4R1K1 w - - 8 38|e1e8 h8h7 f3e4 f5e4 e8e4|1263|1,23
3q1r2/5pkp/4p1p1/p1rb4/Pp4Q1/5B1P/5PP1/R2R2K1 w - - 0 30|g4d4 d8f6 d4c5 d5f3 g2f3|1263|18
r1q1rbk1/7p/p3n1p1/5p2/2QB4/1P1R1P1P/P2N2P1/3R2K1 b - - 0 26|c8c4 d2c4 e6d4 d3d4 f8c5 g1f1 c5d4|1263|40,23
4k3/1p5p/p2B2p1/8/Pb3P2/6PK/3r3P/3R4 w - - 2 31|d1e1 e8d8 d6b4|1264|1
r2qkb1r/ppp2p2/2np3p/4N1p1/2B1P3/2N5/PPPP1P2/R1Bb1RK1 w kq - 0 10|c4f7 e8e7 c3d5|1265|22,4
3rr1k1/p4ppp/8/8/P5Q1/4qP2/6PP/R2R3K b - - 3 29|d8d1 a1d1 e3e1 d1e1 e8e1|1265|3,1,15,9
5b2/7p/3k2NP/p2b1p2/Pp3P2/1P1B2PK/2P5/8 b - - 0 44|h7g6 h6h7 f8g7|1265|25,1,5
5rk1/2p3p1/p1q1pn1p/1p2N3/4P2P/1QP4P/PP4P1/3R2K1 b - - 0 27|c6c5 d1d4 c5e5|1265|1,18
2k5/pp1b1r2/2p1p3/3p2Q1/3q4/8/P1R2RPP/6K1 b - - 2 30|d4d1 f2f1 f7f1|1266|1,4
8/8/8/p7/1pbK1k2/3p1P2/1P6/5B2 w - - 0 51|d4c4 d3d2 f1e2|1266|8,25,1
8/5p2/6k1/4r3/2p1r1PP/2P3R1/2PK3R/8 b - - 0 34|e5d5 g3d3 c4d3|1266|1,14
4rrk1/pp3qBp/3p1Pp1/3p4/7Q/1P3R2/P2n2PP/5RK1 w - - 6 29|h4h7 g8h7 f3h3 h7g8 h3h8|1267|40,7,15,16,9
r3k2r/pp1n1pp1/1bp4p/3qP1N1/2B2B2/8/PPP1Q2K/R4R2 b kq - 1 19|h6g5 h2g3 g5f4|1267|20,34
5r1k/1p2qpp1/p1n4p/8/1P2n3/P3PN1P/Q3BPP1/3R2K1 b - - 0 21|e4c3 a2b2 c3d1|1267|18
1q4k1/3rp1bp/6p1/8/4Q1P1/4R2P/5PK1/8 w - - 3 46|e4e6 g8h8 e6d7|1267|1,18
6k1/5pp1/7p/8/n2Pp3/R2pP2P/1R3PP1/6K1 b - - 0 35|a4b2 a3a2 d3d2 a2b2 d2d1q|1268|0,1,11
2kr1b1r/1pp3pp/p1n1qpb1/3N4/P3P3/1Q5P/1P3PPN/2RR2K1 w - - 7 21|d5b6 c8b8 b3e6 d8d1 c1d1|1268|20
5r1k/2p1p2P/p3Qb2/1pq5/2B5/2N4P/PP4P1/7K w - - 0 29|e6g8 f8g8 h7g8q|1269|0,1,4,11
4kb2/6K1/4PP2/8/8/8/8/8 w - - 3 70|g7g8 f8d6 f6f7 e8e7 f7f8q|1269|0,8,25,1,30,11,24
1n1qk3/1p3p2/2p2p1B/4P3/7P/1bP3N1/1P1Q1P1P/K3R3 b - - 0 25|d8a5 a1b1 a5a2 b1c1 a2a1|1270|15
r7/p2k1pp1/p1p1pn2/3p4/3P4/P3PQp1/1PP2P1R/2K5 b - - 0 20|g3h2 f3h3 f6g4|1270|0,1
2r3k1/2p2ppp/8/3q4/2Qp4/P3r1N1/6PP/R1R3K1 b - - 1 23|e3e1 c1e1 d5c4|1270|29
rnb1k2r/ppp1bppp/4pn2/q7/2B2P2/2N2N2/PPPP2PP/R1BQ1RK1 b kq - 3 7|a5c5 d2d4 c5c4|1270|18
2k3r1/1pq2p2/p1p1p3/7p/1P6/P2PQNrP/2P5/4R1RK b - - 2 27|g3h3 f3h2 h3h2|1271|7,4
6k1/pp3p1p/4pbp1/1q1p4/3P3P/1P1PQ1P1/r1r1N1P1/R3R2K w - - 0 26|a1a2 c2a2 e2c3 b5b3 c3a2|1271|40,18
8/5p2/8/5K1k/5P2/6R1/8/5r2 w - - 0 50|g3h3|1271|1
2r1r2k/5Rp1/2p3Pp/pp2q3/8/1P4QP/P3p2K/4R3 w - - 6 42|f7f8 e8f8 g3e5|1271|29,1
rnbqk2r/pp3ppp/5n2/4N3/2p5/2P5/P1PPQPPP/R1B1K2R w KQkq - 0 9|e5c6 c8e6 c6d8|1271|20,34
3rk3/1b4R1/p2b4/1p1p4/2pP4/2P5/1PB1r1PP/5RK1 w - - 5 30|c2g6|1272|6
5r1k/p6p/7q/2pN2p1/P2bRpP1/7P/Q7/3R3K b - - 0 33|h6h3 a2h2 h3f3 h2g2 f3d1|1272|30,18
3r1k2/pp3qpQ/n6b/8/2P1p3/8/PP4PP/5R1K w - - 0 29|h7h8 f8e7 f1f7 e7f7 h8d8|1272|1,23
8/p6k/2R4P/1p3r2/1P2n3/2nK4/r7/6R1 w - - 0 49|g1g7 h7h8 c6c8 f5f8 c8f8|1273|1,30,15
7K/6P1/1kp4R/p1p5/8/p1PP4/2P5/6r1 w - - 4 38|g7g8q g1g8 h8g8 a3a2 h6h1|1273|0,25,1,11
5rk1/5p1p/5Bp1/5p2/qp6/7Q/2P2P1P/6Kb w - - 0 30|h3h6 a4a1 f6a1|1273|1
r4rk1/1p1b1p1p/pq1p2p1/3P3n/1p3PNb/1n1B3P/PBP2RP1/R2Q2K1 w - - 0 18|g4h6|1273|
8/1p5p/p3r1pk/8/3B1R2/P6P/1P3Pb1/K7 w - - 4 35|f4h4 h6g5 h4g4 g5h5 g4g2|1273|1,18
r1b2r1k/1n3p2/p6p/1p1pN3/3n4/6R1/P1B2PPP/4R2K w - - 2 27|e5f7 f8f7 e1e8 f7f8 e8f8|1274|31,30,7,15,13,9
4rk1r/1p3pp1/p1pR4/4PqN1/2P5/1P4Q1/P4P2/4RK2 b - - 0 29|h8h1 f1g2 h1e1|1274|29,21
2r2rk1/1b3ppp/p2pp3/bp1n4/3PQ1Nq/PP1B4/1BP2PPP/R4RK1 w - - 4 18|g4f6 d5f6 e4h4|1274|20
7k/1ppQ2p1/7p/8/p1P1PK2/P4P2/1P4qP/5R2 b - - 0 31|g2g5|1275|52,1,6
R7/3kbpp1/4p3/1p1pP3/2pPb1P1/1PP1B3/1Q3P1r/6K1 b - - 0 28|h2h1|1275|1,6,16
8/8/7P/6K1/8/pr6/Pk6/8 w - - 0 77|a2b3 a3a2 h6h7 a2a1r h7h8q|1275|0,1,11
6k1/3bnppp/p4n2/1pp5/4N3/1B1P1N2/PPP2PPP/6K1 b - - 1 19|f6e4 d3e4 c5c4 b3c4 b5c4|1275|1,47
r1bq1rk1/ppp2ppp/3p4/2b1p2n/2PnP3/P2P1N1P/1P2BPP1/RNBQ1RK1 w - - 1 9|f3d4 c5d4 e2h5|1275|20
3rr3/p3b1kp/4Rpp1/8/q3NQ2/8/5PPP/5RK1 w - - 3 23|e6e7 e8e7 f4f6 g7g8 f6e7|1275|40,18
8/6pk/3Bp2p/4PP2/2R5/3Q1Pq1/4K3/r7 b - - 4 47|g3e1|1276|1,6,42
2r3k1/3q1pbp/ppr1p1p1/3p4/Q2P1B2/4P3/PPR2PPP/2R3K1 b - - 3 27|c6c2 c1c2 d7a4 c2c8 g7f8|1276|20
6k1/1b3pb1/p4n1p/5P2/N2p1B2/3P1N1P/1P2r1P1/4R2K b - - 1 30|b7f3 e1e2 f3e2|1276|
1k1r4/5R1p/1p6/nB3P2/3p4/P2Q4/KPP5/6q1 b - - 2 35|g1g8 b5c4 a5c4|1276|1,23
5rk1/ppp2qp1/2npp1r1/2b1p2Q/4P3/3P3P/PPPN1PPN/R4RK1 b - - 0 15|g6g2 g1g2 f7h5|1276|20,7
1q1r1r2/4pNk1/R3Nbp1/2p2b1p/8/1QPP2PP/1P3P2/R5K1 b - - 4 28|f5e6 b3b8 d8b8|1277|
6Q1/1kp4K/1p1p4/3PpQ2/4P3/7P/2q5/2q5 w - - 7 63|f5c8 b7a7 c8a8|1278|1,4,19
3r1r2/p5bk/1p6/4p3/3nn1N1/P2B2PP/1P3P2/1RB2RK1 b - - 4 25|d4f3 g1g2 d8d3|1278|20
r2q1b1r/pp6/3kbpNp/1Bpp3Q/3n4/8/PP4PP/RNB3K1 w - - 0 16|c1f4|1279|6
r2qkb1r/pp1bpppp/8/1Np5/Q1P5/8/PP1P1PPP/R1B1R1K1 w kq - 0 14|b5d6|1279|6,23,38
8/Q7/6p1/3p1n1k/3P2Np/4P2P/5PPK/1rq5 w - - 4 50|a7h7 f5h6 h7h6|1279|1,4
6k1/1p3p1p/p2P2p1/2pP4/3b4/1Q1Bq2n/PP4PP/4RR1K b - - 2 27|e3g1 f1g1 h3f2|1279|7,4,9,38
8/6bk/P5pp/1Q6/8/3P4/5qB1/2R4K b - - 1 36|f2h4 h1g1 g7d4 g1f1 h4f2|1279|1,30,15
8/1p4R1/p7/P1k5/1r6/K7/8/8 w - - 52 77|g7g5 c5c4 g5g4|1279|1,14
8/k7/2p2K2/pbPp3B/3Pp2P/4P3/8/8 b - - 0 63|a5a4 h5d1 a4a3 d1b3 b5c4|1279|8,1,12
8/2R2p2/r1pn1kp1/3p4/3K1PP1/2P5/P3R3/8 b - - 2 50|d6b5 d4c5 b5c7|1279|1,18
4Q3/p4p1p/5k2/3p1p2/3q4/6PP/P4P2/6K1 w - - 6 33|e8h8 f6e6 h8d4|1279|1,19,21
r2k4/1b1p4/pp1B2p1/2p1RpN1/5P2/4K3/8/5q2 w - - 4 52|g5f7 d8c8 e5e8|1280|1,4,13
8/pq1p2rk/6p1/3n1R1p/3PQ3/B1r1P3/P4PPP/6K1 w - - 0 32|f5h5 h7g8 e4e8|1280|4,23
5rk1/ppR5/6p1/2p1p3/2P1P1K1/3P1r2/PP6/3R4 b - - 2 39|f8f4 g4g5 f3g3 g5h6 f4h4|1280|1,15,14
5q1k/p5pp/8/3Q4/P2P3P/6P1/1r3r2/3RR2K b - h3 0 34|f2h2 h1g1 f8f2|1282|1,4,51
r4rk1/1q4pp/3b1p2/1Bp1p1n1/Pn1P4/1P4P1/1B1NQP1P/R2R2K1 b - - 0 21|g5h3 g1f1 b7h1|1282|7,4
r5k1/3nbppp/4b3/4p3/1p2PP2/1PpBQ1NP/2Pr2P1/3N1RK1 b - f3 0 23|e7c5 g1h2 c5e3|1282|23
r7/pp3ppk/4q1bp/2PQ4/1P1R2P1/r4P2/4P2P/2R2BK1 b - - 0 28|e6e3 g1g2 e3c1|1282|18
2k1r2r/p1p2pp1/2P5/3q3p/PQ1p4/6P1/5PbP/R3R1K1 w - - 0 25|b4b7 c8d8 b7a8|1283|4,26
B2k4/p1pn1q1p/3p1n2/8/6b1/2NP4/PPP2KPP/R1B1R3 b - - 2 17|f6e4 f2g1 f7f2 g1h1 f2e1|1283|3,34,35,18,15
2b3r1/p2n1k1p/3P4/2N5/6pP/8/P3K1B1/7R w - - 1 35|g2d5 f7g7 d5g8|1283|1,21
1q3k1r/6pp/p2bpp2/3n4/8/1Q3P1P/P2B1P2/2R3K1 w - - 1 29|b3b8 d6b8 c1c8 f8e7 c8h8|1283|18,21
2Q3qk/p5pp/2p5/8/8/7P/5rP1/1R5K w - - 3 33|b1b8 f2f1 h1h2 g8c8 b8c8 f1f8 c8f8|1284|3,1,46,12
5r1k/2Q3pp/5q2/p3N3/3r4/P7/1P3PPP/5RK1 b - - 0 22|f6f2 f1f2 d4d1 f2f1 f8f1|1284|1,15,9
8/bb1N2kp/P1p2pp1/4p3/4P3/8/P3BPPP/6K1 b - - 0 26|b7c8 d7e5 f6e5|1284|1,47
r3k2r/p1p2ppp/2p1q3/2bpP3/4nP2/8/PPPNQ1PP/R1B2R1K b kq - 6 13|e4g3 h2g3 e6h6 e2h5 h6h5|1285|7,15,9
6k1/1p5r/2p5/p1P2Np1/6r1/1PQ5/7R/3K4 b - - 5 36|g4g1 c3e1 g1e1 d1e1 h7h2|1285|1,30
8/1p6/pr3p2/k2K1P2/1R6/P7/8/8 w - - 9 51|b4b6 a5b6 d5e6 b6c6 e6f6|1286|1,14
R7/8/8/4ppkp/8/P3PK1P/1r6/8 b - - 2 46|e5e4 f3g3 h5h4|1287|1,4,14
8/N7/1p1k1b2/8/6pp/1BP5/PP1r4/1K1R4 b - - 1 36|d2d1 b3d1 g4g3|1287|1
8/1p1kP3/pP1P1K1p/Pb6/1Bp5/8/7p/8 w - - 0 52|f6f7 d7c8 e7e8q b5e8 f7e8|1287|0,8,1,30,11
6k1/6pp/p7/1pb5/3p4/P1p4P/1PP2PPK/RB2r3 w - - 0 25|b1a2 g8f8 a1e1|1287|20,1
8/8/8/kp6/1Bp3p1/2Kp4/7P/8 b - - 3 53|a5a4 b4d6 b5b4|1287|8,25,1
rq3rk1/p2p1p1p/b1p1p2p/8/8/bNP5/P1PQ1PPP/1K1RR3 w - - 0 17|d2h6 f7f6 d1d7 f8f7 d7f7|1287|20
r3kbnr/ppq1pppp/2n5/1Bp5/3pPPb1/3P1NN1/PPP3PP/R1BQK2R b KQkq - 0 8|c7a5 c2c3 a5b5|1287|18
1rr3k1/2q2pp1/2PRb2p/1BQ1p3/4p3/8/P4PPP/5RK1 b - - 1 30|b8b5 c5b5 c7d6|1287|29
4r3/2p3k1/3b3p/p1pN4/P5P1/1P6/2P2K2/4R3 b - - 2 31|d6g3 f2g3 e8e1|1287|29,1
r5k1/1p1n1pp1/3N3p/p2p1Qq1/2PB1n2/P3R2P/1P3PP1/6K1 b - - 2 25|g5g2|1288|7,6
2k4r/ppp1bppp/4p3/1Q6/8/2B5/qPP2PPP/2KR4 w - - 2 17|b5d7 c8b8 d7e7|1288|1,18
r2r2k1/p4ppp/4pb2/6q1/8/1P3R2/PB2QPPP/5RK1 w - - 5 21|b2f6 g7f6 f3g3|1288|23
r1b1rbk1/p2p1p1p/4p1p1/3p1q1N/5BQ1/8/P1P2PPP/R4RK1 w - - 2 18|g4f5 g6f5 h5f6 g8h8 f6e8|1288|18
r1r3k1/2R2ppp/p3pb2/1pB5/1n6/1PN5/1P3PPP/3R2K1 w - - 1 22|c7c8 a8c8 c5b4|1288|
1k5r/p6r/Pp1pq3/2pNp3/2P1Q1pn/3P2K1/1P6/R1B4R b - - 1 30|h4f5 g3g2 h7h1|1289|20
8/1p6/p2k3p/PrR3p1/1P2P1P1/4K2P/8/8 b - - 0 50|b5c5 b4c5 d6c5|1289|1,14
8/6k1/2K4p/1p3pp1/8/1P1P2PP/P7/8 b - - 0 40|f5f4 g3f4 g5f4|1289|1,2
rn3rk1/1bppqpp1/p3p3/1p1nP1N1/3P3P/8/PPP1QPP1/RN2K2R w KQ - 2 12|e2h5 d5f6 e5f6|1289|
6k1/6p1/p4pQ1/1p2bP2/3pN3/3P2P1/1qr1R2P/6K1 w - - 0 33|e4f6 g8h8 g6e8|1290|1,4,23
r1b2rk1/ppp2p2/3p1qpQ/4p1p1/3bP1P1/2NB4/PPP3PP/R3K2R w KQ - 2 14|c3d5 f6f2 e1d1 c8g4 d1c1|1290|
2r2r1k/2R2ppp/p3P3/1p6/5N2/3BPN2/Pq3PPP/2R3K1 b - - 2 25|b2c1 c7c1 c8c1|1290|27
8/1p6/4p1k1/3p4/pP1P1K2/2P5/P7/8 w - - 0 45|f4e5 g6f7 e5d6|1290|1,2
5k2/5p1p/p2p2pP/2pP1bN1/5P2/6P1/PP1KR3/1q6 w - - 15 42|g5h7 f8g8 h7f6 g8h8 e2e8|1291|1,15
r1b2rk1/p5q1/2pNp1Pp/5p2/2p5/4Q1R1/PPP2PP1/2KR4 b - - 1 21|f5f4 e3e4 f4g3|1291|18
1r3rk1/p1p2ppp/2Q5/5q2/8/P1P1BP2/5P1P/1R2R1K1 b - - 0 21|b8b1 e1b1 f5b1|1291|
5n2/pp3p2/2p1rP1k/2Pp1Qp1/3Pp3/4P3/PP6/4K3 w - - 2 35|f5h3 h6g6 h3h8|1291|1
1r4k1/p1RN1p1p/1q1bp1p1/3p4/3P4/1P2P1P1/P1Q2PP1/6K1 b - - 8 24|b6c7 c2c7 d6c7 d7b8 c7b8|1291|1
8/8/2rkp2p/6p1/5pK1/2R2P2/5P1P/8 w - - 0 39|c3c6 d6c6 g4h5|1292|1,14
5r1k/6p1/4Q2p/2R2p2/8/6P1/1q2P2P/6K1 b - - 0 32|b2d4 g1g2 d4c5|1292|1,18
1k5r/pp1rnppp/4p3/4P3/3q4/PR6/1Q2BPPP/2R3K1 w - - 7 23|b3b7 d7b7 b2d4|1292|29,26
8/8/8/P7/2PN1n2/1P4k1/6p1/6K1 b - - 0 46|f4h3|1293|1,10,6
r4rk1/1pp2ppp/1p1p4/4p3/2B1P3/P1PPBn1q/1P3PRn/R4Q1K w - - 0 19|g2g7 g8g7 f1h3|1293|20
7r/p6p/1b3Q1p/8/2qn1Nk1/5P2/PP6/R4RK1 b - - 0 27|d4f3 g1h1 c4f4 f6f4 g4f4|1293|20,34,35
7b/1p2R3/p1k3B1/5p1P/4p3/PP6/K3nP2/8 b - - 0 41|e2c3 a2b2 c3d5 b2c2 d5e7|1293|20,34,1
8/7p/6nk/2p5/P1Pr4/5Q2/8/5K2 b - - 0 41|d4f4 f3f4 g6f4|1293|1,23
4Q3/3P1K2/1b6/8/5k2/8/8/7q w - - 1 66|e8b8 f4f5 b8b6 h1h7 f7e8|1294|1,18
6k1/1R6/4K3/7p/3B4/1p2P3/2b5/6r1 w - - 2 60|b7b8 g8h7 b8h8 h7g6 h8g8|1295|1,30
5r2/5p1k/p4QNp/1p2p3/2p5/P3B2q/1PP4P/2K3R1 b - - 0 35|h3e3 c1b1 e3g1 b1a2 g1g6|1295|1,18,5
2kr1bnr/1ppbqppp/2np4/1p2P3/Q7/B4N2/P2N1PPP/R4RK1 w - - 0 14|a4a8 c6b8 e5d6 e7d6 a3d6|1296|26
5rk1/2p2ppp/7r/pp1p4/7q/P2P1Q2/1PP4N/4RR1K w - - 8 28|f3f7 f8f7 e1e8 f7f8 f1f8|1297|7,15,9
1rb4k/pp2Q2p/2p2n2/4p3/8/2PB3P/PP3qP1/7K w - - 4 26|e7f8 f6g8 f8f2|1297|1
r1b2rk1/p2pbpp1/2p4B/2q1P3/8/3B2Q1/nPP3PP/2KR3R w - - 0 16|c1b1 a2c3 b2c3 a8b8 b1c1|1298|25,23
5rb1/R7/4r1k1/3pRB1p/5K1P/2P5/P1P5/8 b - - 0 41|f8f5 e5f5 e6e4 f4f3 g6f5|1298|29,1,9
2kr3r/2p2Qpp/1b6/3qp3/8/1KP5/1P5P/R1B4R w - - 2 26|f7d5 d8d5 a1a8 c8b7 a8h8|1298|21
2r4k/pp4bp/4Q1p1/8/5P2/8/PpP2P1P/2q1R1K1 w - - 7 25|e6c8 g7f8 c8f8|1299|1,5,4
2kr4/p2r2pp/8/4pb2/1B1nN3/1B3PP1/PPP3P1/2KR3R b - - 0 21|d4e2 c1b1 d7d1 h1d1 d8d1|1299|3,29,20,15
2br3k/pq3Qpp/1p6/5pN1/3n4/6P1/P1P1P2P/1R4K1 w - - 6 25|f7b7 c8b7 g5f7 h8g8 f7d8|1299|18
8/2p4k/p2p2p1/1pq3np/8/2P2r2/PP3NQP/2R2RK1 b - - 1 37|g5h3 g1h1 h3f2|1299|29
8/2p3pk/pq1nR2p/6pP/P2P2P1/rR6/2PQ1P2/1K6 b - - 0 37|a3b3 c2b3 b6b3 b1c1 b3e6|1299|1,18
q4rk1/2pp1p1p/p3p1p1/bp2P3/3Q4/P1N2P2/1PP3PP/R4RK1 b - - 0 20|a5b6 d4b6 c7b6|1300|23
4k3/6Bb/3P1p1P/p1N2p2/8/2K5/r5p1/8 w - - 0 47|d6d7 e8e7 g7f6 e7f6 d7d8q|1300|0,40,29,1,30,11
q4k2/8/6Qp/2p2p2/2PpbB2/6PP/7K/8 w - - 8 50|f4d6|1301|1,6
6r1/1pp2r1k/4Q2P/8/1N3P2/bn1pP3/P2P4/BK1R4 b - - 0 28|b3d2 d1d2 g8g1 d2d1 g1d1|1301|15,13,26,9
r1bqk2r/ppp2ppp/2nb4/1B1p4/3Nn3/2P5/PP3PPP/RNBQ1RK1 w kq - 1 8|d4c6 b7c6 b5c6|1301|
2r3k1/1p2p1rp/p2p2q1/3P3n/2P2P1p/PP2N2P/2Q3PK/3R1R2 b - - 1 26|g6g3 h2h1 g3e3|1301|18
6rk/R6p/1p1p4/2p5/N2b4/6p1/P4PKP/3R4 b - - 1 29|g3f2 g2f1 g8g1 f1e2 g1d1|1302|0,20,1
r3r1k1/pppq1ppp/3p4/2b1n3/2P1bBP1/5N1P/PP2PPB1/R2Q1RK1 w - - 4 15|f3e5 e8e5 f4e5 e4g2 g1g2|1303|
Rr4k1/5ppp/1q2pn2/8/1Qb5/6P1/5PBP/3R2K1 b - - 0 28|b6b4 d1d8 b8d8 a8d8 b4f8|1303|5
b7/4r1pk/p3pn1p/2p3R1/3p3Q/1P4RP/P1P2qPK/8 w - - 0 39|g5g7 e7g7 g3g7 h7g7 h4f2|1304|
5k2/p4ppp/b1p5/3p4/4qP2/P1P1P2P/1rPQ1KP1/RR6 b - - 5 21|b2c2 b1b8 f8e7 b8b2 c2d2|1305|1,23
2r3b1/1p1nk2p/6pP/N2Pp3/4P2P/7B/PP3r2/1K1R3R b - - 2 25|c8c2 a2a3 c2b2|1305|26
3B4/3R2p1/3p2kp/2pPpn2/r1P1K2P/2P2P2/8/8 w - - 4 38|h4h5 g6h5 e4f5|1305|29,1
r5k1/1pbR1r2/p4p2/8/4P2n/2N5/PP3PP1/3R2K1 w - - 0 23|d7f7 g8f7 d1d7|1305|40
5r2/kpp5/1b2q3/pP4pQ/P2B4/7P/5PP1/3R2K1 b - - 2 33|b6d4 d1d4 e6e1 g1h2 e1e5|1305|1
8/3Qnk1p/R3pq2/8/2r5/4B3/P4PKP/5R2 b - - 0 24|c4g4 g2h3 f6f3|1306|4
2rq1r1k/pb2n1pp/1p3p2/5R2/3P4/1B1N3Q/PP3KPP/5R2 w - - 4 23|h3h7 h8h7 f5h5 h7g6 d3f4|1306|40,32,7,15,9
rn2kbnr/ppp2ppp/3p4/8/4PPbq/3PBN2/PPP1K2P/RN1Q1B1R b kq - 3 8|g4f3 e2f3 h4h5 f3f2 h5d1|1306|40,21
r4rk1/pQp3p1/3p1q1p/2b1p3/8/2Pb1N2/PP1N1PPP/R4RK1 w - - 0 19|b7d5 g8h8 d5d3|1306|18
8/1p1k4/8/4P3/2P2K2/1P6/P4N1p/4n3 b - c3 0 55|e1d3 f4g3 d3f2|1306|1,10
8/2pk1p2/Bpr3bp/p5p1/R3P1P1/2P4P/P7/6K1 w - - 2 38|a6b5 d7e7 b5c6|1306|1,23
r7/p1Bn1p1p/2p5/3p2n1/kpbP4/2R2P2/3K2PP/1R6 w - - 0 32|b1a1 c4a2 a1a2 a4b5 a2a5|1307|15,16
5R2/8/p1p2kp1/3p4/3P1r2/P1P2p2/BP6/2K5 b - - 3 39|f6g5 f8f4 g5f4 c1d2 f4g3|1307|25,1
r2qk2r/pp2bp1p/2np1n2/1B6/4PQ2/5R2/PPP3PP/RNB3K1 b kq - 0 13|d8b6 g1h1 b6b5|1307|18
5r1k/R3Q3/7K/2p2qp1/8/3P2P1/4P2P/8 b - - 0 41|f8f6 e7f6 f5f6|1307|1
8/3k4/p3p2p/1p2P1p1/1P1K2P1/7P/P7/8 w - - 1 50|d4c5 d7c7 a2a3 c7b7 c5d6|1307|1,2,12,24
2kr3r/ppp1bpp1/5n1p/5N2/2P5/2N1p1P1/PPnBPPBP/2RK3R b - - 0 15|d8d2|1308|6
q1r2rk1/1b1nb1pp/pp2p3/2pn1p2/5PN1/PP2P1RP/1BQPB1P1/RN4K1 w - f6 0 17|g4h6 g8h8 b2g7|1308|7,4,23
5rk1/1bpr1pp1/p3p2p/1p2Q2q/3P4/2P2N1P/PP3PP1/R4R1K b - - 6 20|b7f3 e5h5 f3h5|1308|
8/5p1k/3q2p1/p1pP3p/PpK2P2/1B2Q3/8/8 b - - 1 44|d6a6 c4c5 a6a7 c5b5 a7e3|1308|1,21
r2q1r1k/4Np1p/p2p1np1/4P1Q1/2n2P2/1bP5/1P4PP/3RR1K1 w - - 1 25|g5f6|1308|
1r2r3/1P2Q3/p2p2pk/2pPb3/7P/6p1/1P6/2K2R2 w - - 4 36|e7g5 h6g7 h4h5|1308|1
r4rk1/pp3pp1/3p1b1p/1B1Pp3/4Pn2/1Q5q/PP2NP1N/2R2RK1 b - - 3 18|h3g2|1309|6
1Rr1q1k1/5pp1/8/p7/3r4/6Qp/P1P3P1/1R4K1 w - - 0 26|b8c8 e8c8 b1b8 d4d8 b8c8|1309|40,31,1,23
r4rk1/pp3ppp/2nb4/2pp4/6n1/1PPP1N1q/PB1N1P2/R2QRBK1 b - - 3 14|d6h2 f3h2 h3h2|1310|7,4
rn1qkbnr/ppp2ppp/8/8/2Bp4/1Q2Pb2/PP3PPP/RNB1K2R w KQkq - 0 7|c4f7 e8d7 b3e6|1310|22,4
5k2/4b2Q/p4q1p/1p1R2p1/5n2/8/PP3PPP/6K1 w - - 2 32|d5f5 f6f5 h7f5|1310|1,23
8/8/3p1k2/3K2p1/1p1P2P1/7P/8/8 w - - 0 40|d5c4 f6e6 c4b4 e6d5 b4c3|1310|25,1,2
r2q1rk1/p3ppb1/3pb3/3N2Q1/2p1P1P1/6B1/PPP4P/2K4R w - - 1 22|d5e7 d8e7 g5e7|1310|7
4r1k1/ppp2ppp/1bp5/1q6/PN2r3/2P2Q2/1P1P1PPP/R1B2RK1 b - a3 0 16|b5f1 g1f1 e4e1|1311|40,7,4,9
r6r/pb1p1p2/1pnPpq1k/2p3N1/2P1BpQP/2P5/P4PP1/2R2RK1 w - - 3 21|g5f7 f6f7 g4g5|1311|31,4,9
4r2k/6pp/6b1/5q2/Q3p3/P4P1P/3N1P2/4R1K1 b - - 0 32|f5g5 g1f1 g5d2|1311|1,18
r4rk1/1bp2pb1/1p3qpp/p1nPp3/P3P3/1Q3N2/3N1PPP/1BR2RK1 w - - 2 22|c1c5 b6c5 b3b7|1311|44
7k/p4Rp1/5r2/3B4/4P1Kp/2P1Pn1P/PP6/8 b - - 3 29|f3e5 g4h4 e5f7|1311|1,18
6k1/p3b1pp/2pp1np1/4n3/4PB2/2P3NP/PqBQ2P1/7K w - - 3 28|c2b3 b2b3 a2b3|1311|
4r1k1/pp2rppp/2p5/5Q2/2P2n2/1Pq3P1/P6P/1B3RK1 w - - 0 29|f5h7 g8f8 h7h8|1312|7,4
r4r2/1b1p3Q/pp3kB1/8/8/P1P2qPP/P4P2/3R2K1 w - - 1 25|d1d6 f6e5 h7e7|1312|4
5rk1/3R2pp/2p3r1/4Qp2/4p1qP/1P2R1P1/P4P1K/8 b - - 9 41|f5f4 d7g7 g6g7|1312|1
3r3k/R5pp/5p2/2pN4/4P3/4nQqP/PPP3P1/7K b - - 3 29|g3e1 h1h2 e3f1 f3f1 e1f1|1312|1
8/5ppk/P6p/3Q4/4r3/5qP1/2p1NP1P/4R1K1 b - - 0 34|e4e2 d5f3 e2e1 g1g2 c2c1q|1313|0,1,11
1Q6/4kP2/p1p3p1/P1Pp1qP1/4p2K/8/5P2/8 w - - 3 55|b8e8|1314|1,6,19
r4rk1/pp5p/3q4/3P4/2R3KP/P1Q2p2/1P3N2/5R2 b - - 0 33|d6g6 g4h3 g6g2|1314|4
2r3k1/R4pbp/6p1/8/1B6/8/P4RPP/6K1 b - - 0 23|c8c1 b4e1 c1e1 f2f1 g7d4 g1h1 e1f1|1314|3,29,1,18,46
r3r1k1/1ppb1pp1/p3qP1p/2p2R2/2P1P3/8/PBP1Q1PP/3R2K1 b - - 2 19|e6f5 e4f5 e8e2|1314|20
r2q4/pp1b4/2nkp1r1/3p4/3P3Q/NPP5/5PPP/R3K2R w KQ - 1 20|a3b5|1315|6
2r1r1k1/1p3pbp/p2R4/5Q2/1N6/1P6/P4PPP/2q2RK1 b - - 0 22|c1f1 g1f1 c8c1 d6d1 c1d1|1315|40,15,9
r6k/p4BN1/bp4Q1/8/3q4/4p3/PPP3PP/R5K1 b - - 0 24|e3e2 g1h1 d4d1 a1d1 e2d1q|1315|0,3,20,34,15,11
5rk1/pp1q1ppp/3p4/2p5/b4B2/2N5/PPP2PPP/2KR1B1R b - - 1 14|d7f5 c3a4 f5f4 c1b1 f4a4|1315|18
4r2k/1p3p1p/p3R3/8/5r2/4P1NP/PP3P1K/6R1 b - - 0 32|f4f2 g1g2 f2g2|1315|1
r7/1bqr1pk1/p2bpnpp/1p6/7B/1BPQ1N2/PP3PPP/3RR1K1 w - - 4 24|h4f6 g7f6 d3d4|1316|40
8/1p4kp/p3p3/6N1/1PPq4/4p1P1/P4RK1/8 w - - 0 43|g5e6 g7g6 e6d4|1316|1,18
5bnr/2Qp1p2/p4kpp/3p4/2q5/2N5/PP1K1P1P/4R3 w - - 2 18|c7e5|1317|52,6
r2r4/pp1b2Rp/2pkpB2/3p3B/3P4/2P5/q1PK2P1/8 w - - 0 29|f6e5|1317|6
r5k1/ppp2R1p/2n3pQ/2q2B2/8/1P4P1/PBP2b1P/R6K b - - 0 21|c5d5 f5e4 d5e4 f7f3 e4f3|1317|18,15
3r2k1/1p3pPp/pb3r2/6q1/3pR1Q1/1N5P/PP3PP1/3R2K1 b - - 4 22|g5g4 e4g4 d4d3|1317|
7k/6p1/B6p/8/Pn1N4/3K4/1r4bP/R7 w - - 5 40|d3c3 b2a2 a1a2|1317|25,1
r2k2r1/5p2/p1p2Pp1/1qbP4/6P1/1pQ2N1P/1P1K1P2/3RR3 b - - 7 25|c5b4 f3d4 b4c3|1317|23
4r1k1/bb3pp1/p2q3p/3P3n/1PP5/P2Q1N1P/2B2PP1/4rRK1 w - - 0 25|d3h7 g8f8 h7h8 f8e7 f1e1|1318|37,7
8/2p3nk/1pNp2pp/3P4/2P1n3/P6P/4qPP1/1B3QK1 b - - 5 39|e2f1 g1f1 e4d2 f1e2 d2b1|1318|40,1,18
r4r2/1p5k/6R1/p2pP3/3P4/Pqp1B3/1P3P2/2K3R1 w - - 0 33|g6h6|1320|1,6,16
8/8/p1p1k2p/P3rR2/1PK1P2P/8/8/8 b - - 2 37|e5e4 c4c5 e6f5|1320|1,14
8/p2q1kpp/1p2p3/1P1n1p2/8/P1rP1BP1/1Q3P1P/4R1K1 w - - 3 28|f3d5 d7d5 b2c3|1320|44,1
3q1rk1/p4p1p/1p2p2Q/3n3r/3p1NP1/3P4/PP3P2/1K6 w - - 0 23|f4h5 d8f6 h5f6|1320|1
6k1/2p2pp1/p7/1Bpq1rr1/4NP1p/5Q1P/PPP5/R6K b - - 4 40|g5g3 b5e2 g3f3|1321|
1r3k2/5p1p/p1q2np1/2pp4/P4P2/2NP2PP/3BNQ1K/8 b - - 1 25|d5d4 e2d4 c5d4|1321|
r4rk1/ppp2ppp/2n2q2/4p3/2Bb4/2N2b2/PP3PP1/R1BQ1RK1 w - - 0 14|d1f3 f6f3 g2f3|1321|
r2q2k1/2p4p/6pP/pp1PQ3/2P1n3/3P2P1/PP2n3/1K1R1r2 w - - 0 28|e5g7|1321|
r4rk1/2pqnppn/p2p2bp/1p2pN2/4P1Q1/2PP2NP/PPB2PP1/2R1R1K1 w - - 1 18|f5h6 g7h6 g4d7|1322|20,7
8/7p/rk2ppp1/8/3K1P2/8/R4P1P/8 w - - 0 39|a2a6 b6a6 d4c5|1322|25,1,14
4r3/5ppp/p1n2n2/1ppk4/3p1B2/N1PP4/PP3PPP/4R1K1 w - - 4 22|c3c4 b5c4 d3c4|1323|1,4
1k4r1/ppp2q2/2n5/7p/3PR3/2PB4/PP1Q3P/RN5K b - - 2 24|f7f3 d2g2 f3g2|1324|4
4r3/2Q1p1kp/3r2p1/pp1P1n2/2p2PqP/8/PP2RPB1/4R1K1 w - - 7 36|e2e7 e8e7 e1e7 f5e7 c7e7|1324|
rn3rk1/pp6/2pb2n1/3PpBqp/3P1p2/2P2N1P/PPQ2PP1/R1B2RK1 b - - 0 17|g5f5 c2f5 f8f5|1324|
8/4Q1pp/P3p2k/3p4/2pP4/2P2rPK/7P/4q3 w - - 3 37|e7h4 h6g6 h4g4|1324|1
1k6/1p1r4/2P2p2/8/2Q4P/2P2q2/PP6/1K1RR3 b - - 0 38|d7d1 b1c2 d1e1 c6c7 b8c8 c4g8 c8c7|1325|1
3r2k1/1p3ppp/p3pn2/2b5/2n5/PN2P3/1B2NPPP/R5K1 w - - 0 19|b2f6 g7f6 b3c5|1325|
r1b1r1k1/ppp2ppp/8/3p4/2qn4/P1P2P2/1BPQ2PP/2KRR3 w - - 0 17|e1e8|1326|3,5,6
2kr3r/ppq2pp1/2Pbpnp1/2n3B1/2P5/P4NN1/1P3PPP/R2QR1K1 b - - 0 18|d6g3 h2g3 d8d1|1326|20
3r2k1/p1pP1qpp/1p6/8/2Q5/6P1/P4P1P/4R1K1 w - - 0 29|e1e8 d8e8 d7e8q|1327|0,1,4,23,11
8/1pb2Qpk/3q3p/8/8/P7/5PB1/6K1 w - - 7 35|g2e4 h7h8 f7e8 d6f8 e8f8|1327|1,15
8/R6p/2K1Pkp1/3P2r1/2n5/8/8/8 w - - 3 50|a7f7 f6e5 e6e7|1327|0,1
5rk1/1b2qpp1/7p/2B5/4n3/1P2QN1P/P4PP1/4R1K1 b - - 0 28|e7c5 e3c5 e4c5|1327|
5rk1/8/B4p2/R5p1/1p6/8/b2r1PP1/5RK1 w - - 2 34|a5a2 d2a2 a6c4 g8g7 c4a2|1328|40,1,30,18,9
r1b1Q2r/pp1p1p1k/5Bnp/1q4p1/5p2/8/PPP3PP/2KR3R w - - 2 21|e8f7|1329|33,6
3rk1r1/6pp/1p1B4/pPpb1P2/5RPq/P3P2P/4B3/R4QK1 b - - 0 24|h4g3 f1g2 g3g2|1329|7,4
2r1r1k1/p2q1pbp/1p4p1/2pP4/b1P5/4BPN1/P2Q2PP/2R2RK1 b - - 2 19|e8e3 d2e3 g7d4|1329|23,9
r3k2r/ppQ2ppp/2p1pn2/2b5/1q2B3/4B3/PPP2PPP/R2R2K1 w kq - 1 17|e4c6 b7c6 c7c6|1329|
r3kb1r/1b1n1pp1/2p2qnp/p3pN2/PpQ1P3/1B2BN2/1PP2PPP/R4RK1 b kq - 9 15|b7a6 c4f7 f6f7 b3f7 e8f7|1330|
2r3k1/6p1/R4p1p/1p3P2/3N1bP1/P2P3P/1P6/6K1 b - - 0 30|f4e3 g1g2 e3d4|1330|1,18
6k1/p5pp/1p1bR3/8/2P5/P1B2r1P/1P3rP1/6RK b - - 0 26|f3h3 g2h3 f2h2|1331|1,4,9
5rk1/p4p1p/1b1Q2pr/4p2q/2B1PnRP/2P2P2/P4P2/2B3RK b - - 2 28|h5h4 g4h4 h6h4|1332|7,4,9
2R3rk/3Q2pp/pB6/1p2p3/1P2P3/3P1p1P/4qPP1/7K b - - 1 34|e2f1 h1h2 f1g2|1332|1,4
5rk1/1p4p1/2p1p3/4N1Np/1P1r4/P7/6P1/5RK1 w - - 0 31|f1f8 g8f8 g5e6|1332|40,1
8/1p6/6k1/1pp4p/4K1P1/P7/1P6/8 w - - 0 43|g4h5 g6h5 e4d5|1332|1,2
8/3N1Qqk/6pp/3P4/4P3/6P1/q4PKP/8 w - - 1 40|d7f6 h7h8 f7e8 g7f8 e8f8|1333|1,15
r4rk1/ppqb2pp/2p5/3p1pN1/3PnB2/2PB2P1/PP6/R2QRK2 b - - 2 18|e4g3 f4g3 c7g3 d1h5 g3d3|1333|27
r2q1rk1/pbp1bpp1/2pp1n1p/8/4PB2/3B2Q1/PPPN1PPP/R4RK1 b - - 1 11|f6h5 g3f3 h5f4 f3f4 e7g5|1333|
2kr3r/1p6/p4p2/2p1n3/P3P1pq/2B3N1/1PP1QPP1/R3R1K1 b - - 5 23|h4h2 g1f1 h2h1 g3h1 h8h1|1335|3,15,9
2R5/p3r2p/1p1p3k/5Pp1/8/P7/Q3BBK1/4q3 b - - 0 40|e7e2 a2e6 e2e6|1335|1,23
4k3/pR4Qp/4p3/7P/1p2b3/b7/5P1K/2r5 b - - 3 36|c1h1 h2g3 h1g1 g3f4 g1g7|1335|1,30,21
r1b1k2r/5ppp/p2bp3/3pN3/1p1nnPP1/8/PPQB2BP/1NKR3R b kq - 0 15|d4e2|1336|6,38
5rk1/1b4pp/pb2B2q/1p6/8/2n2NPP/PP2QPK1/R4R2 b - - 1 27|g8h8 e2e5 b7f3|1336|25
r1b2r2/pp2q1pk/2p5/2P1n1Pn/4N2P/4P3/PPQ2P2/2R1K2R w K - 1 20|e4f6 h7h8 c2h7|1337|34,35,4
1r4k1/p4pbp/2q3p1/8/Q1PP4/4P1P1/4NP1P/R5K1 b - - 0 26|b8b1 a1b1 c6a4|1337|29,1
2r2rk1/1p1qppbp/p3b1p1/3n4/3n3N/2N1BQPP/PP3PBK/R4R2 w - - 0 17|e3d4 g7d4 c3d5|1338|
rnb2rk1/pp2ppbp/3p2p1/q1pP4/4NB2/1P2P3/P1PQNPPP/2KR1B1R b - - 0 10|a5a3 c1b1 a3b2|1339|4,26
1k1r3r/ppp2p2/6p1/4P3/8/1P3B2/P2PRqPP/R2Q3K b - - 3 21|h8h2 h1h2 d8h8 f3h5 h8h5|1339|40,7,15,9
8/1p3R2/pkp3N1/4Q3/3rP1KP/4q3/4B1P1/2b5 b - - 0 47|d4e4 g4f5 e4e5|1339|18
8/pp3Q2/1kb5/3n2p1/3q4/P4PK1/4B1PP/4R3 b - - 14 39|d4h4|1340|1,6
1r5k/1b4rN/1p1p2pQ/p2Ppn2/2q1p3/P6R/1PP2PPP/3R2K1 w - - 1 25|h7f6 f5h6 h3h6 g7h7 h6h7|1340|36,20,34,30,7,15,9
5nk1/1R4p1/2q1p2p/4Pp2/2rP4/6P1/1Q3P1P/4N1K1 b - - 4 37|c4c1 b2d2 c1e1 d2e1 c6b7|1340|1,23
8/6B1/2R5/1p3p1k/p3p2P/P3P1P1/1P2bPK1/3r4 b - - 2 32|e2f3 g2h3 d1h1|1341|1,4,13
r5k1/1pR3r1/p5Qp/6q1/6b1/8/PP3P1P/6K1 w - - 0 30|c7g7 g8h8 g6h7|1341|1,4
3r1b2/1p1npR1p/p3Q1pk/2q3p1/P1B1p3/2P1P2P/1P4P1/7K w - - 4 27|f7h7 h6h7 e6g8 h7h6 g8h8|1342|40,15,9
r2qkb2/p3ppp1/2p3p1/2pp2N1/6P1/1P1PP1R1/P1P4r/RNBQK3 b Qq - 0 14|h2h1 e1e2 h1d1|1342|21
2r3k1/1p3ppp/pq6/4r3/2p1b1P1/1P2N2P/P2Q1P2/3R1RK1 w - - 0 24|e3c4 b6f6 c4e5|1343|18
5rk1/6pp/n1pQ1p2/1p1p1n2/p2P4/P1P2N1P/1P2rPP1/R3R1K1 b - - 0 20|e2e1 f3e1 f5d6|1343|48
8/8/1P5p/8/2K1kp2/7P/8/8 b - - 0 54|f4f3 b6b7 f3f2 b7b8q f2f1q c4c5 f1c1|1343|0,1,2,11
r1bqkb1r/1p2pppp/p4n2/4N3/P1BBP3/2N5/1P3PPP/n2QK2R w Kkq - 0 11|c4f7|1344|22,6
2r3k1/p4pp1/1pP3R1/8/1P2p3/P1Q1B1pq/4PP1P/2R3K1 b - - 0 34|h3h2 g1f1 h2h1|1344|1,7,4
r1b5/pp2Q2p/5Bpk/8/4P3/3P1q2/PPP2n1P/R3KR2 b Q - 0 20|f3e3|1345|6
r1bq3r/pp2k1bp/1n1p1np1/4p1N1/2Q1PB2/2N5/PP3PPP/2R1R1K1 w - - 6 15|c4f7|1345|6,42
2kr1b1r/pp2pp2/4qn2/1Np1B1p1/2P5/3P1BP1/PP3PK1/R2Q1R2 b - - 0 16|e6h3 g2g1 h3h2|1345|4
2kr4/pp4pp/1qp2n2/5b2/4P3/PP1Q3P/5PP1/R2R2K1 w - - 3 23|d3d8 b6d8 d1d8 c8d8 e4f5|1345|26
8/1kp5/1p1b4/1b5p/4r2P/2Q1BP2/6P1/4K3 b - - 0 40|d6b4 c3b4 e4b4|1345|1,23
1k1r4/pp1Qn1b1/2n4p/2p1P1p1/2P5/1N1RP1B1/qP4PP/2K5 w - - 4 20|e5e6 g7e5 g3e5 c6e5 d7d8|1345|20,34,26
6k1/pp4pp/2b1p1p1/3qn3/P2pQ3/3P2P1/2P2P2/R3R1K1 b - - 0 22|e5f3 g1g2 f3e1|1345|1,18,23
r2r4/p4kp1/1pp1pnpp/8/4q2P/3n1N2/PQ2BPP1/1R2R1K1 w - - 10 24|e2d3 e4d3 f3e5 f7g8 e5d3|1345|40,18
2r3k1/5pp1/1R2p3/4P3/Q2P1B2/6Pp/P3qR1P/2r2NK1 b - - 5 30|c1f1 f2f1 e2g2|1346|4,9
8/p1p2k2/1r2rp2/3p1Q2/2qP2R1/2P4P/6PK/4q3 w - - 0 34|f5h7 f7f8 g4g8|1346|1,4
r4rk1/pppbqpb1/3p4/3P2p1/4P1P1/3B2NP/PPPQ4/1K1R3R b - - 1 21|e7e5 c2c3 e5g3|1346|
1k6/1pp3q1/5p2/pP2pP1p/P3QbrP/2PP1R1K/6B1/8 w - - 14 43|f3f4 g4g3 h3h2 g3g2 e4g2|1347|1
6k1/pp3p1p/1b4p1/5q2/2r5/B1P2N2/PP2R1PP/3R1K2 w - - 1 23|e2e8 g8g7 a3f8|1348|
8/5kpp/2p5/1p6/1P3q2/3p2RP/rr3PK1/3RQ3 w - - 4 35|g3f3 f4f3 g2f3|1348|1,23
r7/5kpp/5r2/3N4/p3p2q/4P3/PP1BQbPP/R4R1K b - - 0 25|h4h2 h1h2 f6h6 e2h5 h6h5|1349|40,7,15,13,9
8/8/2k5/Kp1p1pp1/3P4/1P4P1/P6P/8 b - - 0 45|f5f4 a5b4 f4f3 b4c3 f3f2|1349|0,1,2
2r5/p4kpp/1pP2p2/2bnpN2/8/P3P2P/1B3PP1/2R3K1 w - - 2 26|c1c5 b6c5 f5d6 f7e6 d6c8|1349|1,18,9
8/1pp5/3kp2R/p7/P3pn2/1P2N1r1/2PK4/8 w - - 0 36|e3f5 d6e5 f5g3|1349|1,23
r1b4r/ppbpkp1N/2n1pqnQ/8/2P1P3/2N5/PP2BPPP/R4RK1 w - - 9 18|h7f6 h8h6 f6g8 e7f8 g8h6|1349|18
6k1/4Pppp/2p2p2/p7/1q1P2P1/p4P2/4N2P/1BKR3R b - - 0 23|b4b2|1349|1
1k2r3/ppn3p1/2n1p3/5p1P/2qP1P2/5QNP/PR4B1/K7 w - - 0 44|f3c6 c4c6 g2c6|1349|23
3r4/2R1kp1p/1p3p2/8/B2Pbb2/P1K5/1P4PP/R7 b - - 3 26|f4c7 a1e1 f6f5|1350|25,1,5
8/2R4p/5p1k/P4R2/6n1/3N2P1/r3rPKP/8 b - - 6 38|g4e3 g2h3 e3f5|1350|1,23
B3qrk1/5p1p/Q5p1/8/n1P5/B1b4P/5PP1/3R2K1 b - - 0 23|e8a8 a6a8 f8a8|1352|
8/7P/6R1/4bP2/5rP1/4k3/6K1/8 w - - 1 56|g6e6 f4g4 g2h3|1353|25,1,23
6k1/1q2ppbp/p1rp2p1/3N4/4P3/3bBP1P/1P4P1/2Q2RK1 w - - 6 24|c1c6 b7c6 d5e7 g8f8 e7c6 d3f1 g1f1|1354|40,18,9
1k3q2/pp4p1/r3n2p/2p1P3/2P4P/3PB3/PP1Q2R1/K7 b - - 1 31|f8f1 d2c1 f1g2|1354|29,1
1r4k1/7p/1q2p1p1/1Q1p4/B1p5/2b2P2/6PP/1R2R2K b - - 0 34|b6b5 b1b5 b8b5 a4b5 c3e1|1355|
1R3b2/5pkp/4p1p1/1P2N3/4P3/6P1/r4PKP/8 b - - 0 37|f8d6 e5d7 d6b8|1355|1,18
5k2/1b4p1/pp4p1/2p2pN1/2Pp1PqP/3P4/PP1Q1K2/4R3 b - - 0 26|g4g2|1356|1,6
r1k3r1/p2R2b1/2ppB3/4pQ2/8/2P5/Pq4PP/RN5K b - - 0 24|b2c1 f5f1 c1f1|1356|4
3k4/8/5P2/2p1R3/p3B1K1/4r2P/1p6/8 b - - 0 52|e3e4 e5e4 b2b1q|1356|0,1,11
r1bq1rk1/p4pp1/2pb1n1p/4p1B1/2B5/2N5/PPP2PPP/R2Q1RK1 w - - 0 12|g5f6 d8f6 c3e4|1356|
1k1r1b1r/R1p3pp/Qpq1R3/8/8/1P6/1P1P1PPP/2B3K1 b - - 3 19|c6c1 a6f1 c1f1|1356|5,7
r1b1k2r/p2pqppp/1pnQpn2/4P3/8/2N2N2/PP3PPP/R3KB1R w KQkq - 0 10|d6e7 e8e7 e5f6|1357|40
3rkb1r/pb3ppp/5n2/3qp3/8/5P2/PPB3PP/RNBQ1RK1 b k - 2 12|d5c5 g1h1 d8d1|1357|20
r1bqk2r/pp3p1p/4p1p1/2p1b3/2B1n3/5Q2/PPPP2PP/R1B2RK1 w kq - 0 12|f3f7|1358|22,6
4k3/8/2R2K2/2P1p2r/8/8/8/8 b - - 0 46|h5h6 f6f5 h6c6|1358|1,14,21
r3k2r/pp1q1ppp/2pb4/3p4/2P1n3/PP2PN2/4QPPP/1RB2RK1 b kq c3 0 15|e4c3 e2c2 c3b1|1358|18
8/2Qq4/3P1pk1/2p1p1p1/3nP1P1/4R3/5P1P/6K1 b - - 5 36|d7g4 g1f1 g4d1|1358|1
2k4r/1pq5/p1b2p2/n1N1pPp1/6Pr/2PPR2P/P1Q3B1/1R4K1 b - - 0 26|c6g2 c2g2 c7c5|1358|20,23
8/7p/5Kp1/5p2/2k1bP1P/6P1/8/4B3 w - - 4 57|f6g7 e4c6 g7h7|1358|8,1
7k/6rp/1p6/2p2B2/8/P1P3qp/1P5Q/5R1K b - - 2 38|g3g2 h2g2 h3g2|1358|0,1,18
rnb1r1k1/p4pp1/2p5/1p4N1/3qn2Q/8/PPP3PP/R4R1K w - - 0 18|h4h7 g8f8 f1f7|1359|7,4
7k/2Rn1R2/7p/3rb1pP/p1P3b1/8/P1P1r3/2K5 w - - 0 33|c7c8 d7f8 c8f8|1359|4
8/5k1p/4pp2/3p4/2bP4/B3KP2/1Rr3PP/8 b - - 11 40|c2c3 e3f2 c3a3|1359|1,18
r7/5k2/7p/p5p1/3pPb2/P2p2PP/1P3Q2/6K1 b - - 0 35|d3d2 f2d4 f4e3 d4e3 d2d1q|1360|0,29,1,30,11
8/p6p/5rpk/8/5q2/2BP4/1PK1BP1P/6R1 w - - 0 37|c3d2 f4d2 c2d2|1360|1,23
8/4k2p/7P/1bn1Bp2/2B3p1/1P2P1P1/5P2/4K3 b - - 2 50|b5c4 b3c4 c5d3 e1d2 d3e5|1360|1,18
1rb2rk1/4bppp/pPq2n2/4B3/4P3/2NB1Q2/PP4PP/R4RK1 b - - 0 17|c6c5 g1h1 c5e5|1362|18
3r2k1/7p/5p1p/2rq4/3Q1P2/P5P1/1P1R3K/3R4 b - - 0 41|d5h5 h2g1 d8d4|1362|20,1
3R4/p1R5/4kB2/6Kp/P5b1/7r/6r1/8 w - - 3 46|c7e7|1363|1,6,16
r1knQb1r/ppp1n1pp/8/2N1P3/8/1P6/P2P1KPq/RN6 w - - 10 18|e8d7 c8b8 d7d8 e7c8 c5d7|1364|29,15,26,38
3rr3/5k2/p1p1p3/2PnBp2/1P3Pp1/P2R2P1/6K1/3R4 b - - 1 37|d5e3 d3e3 d8d1|1364|29,20,1
6k1/2Q2pp1/7p/2P5/8/7P/P1PrqPP1/2R3K1 b - - 0 27|e2f2 g1h2 f2g2|1365|1,4
5rk1/p4ppp/1p3q2/8/8/Q3R2P/PP1r1PP1/4R1K1 w - - 4 22|a3f8 g8f8 e3e8|1365|40,1,4,9
r6k/pb1pq1pB/1pn1p3/2p3pQ/2P5/8/PP3P1P/2K3R1 w - - 0 21|h7g6 h8g8 h5h7 g8f8 h7h8|1365|20,34,7,15
8/8/2k1p3/pp3p2/P2P1Pp1/1P1K2P1/8/8 b - - 0 36|b5a4 b3a4 c6d5 d3e3 d5c4|1365|1,2,24
r1b1k2r/pppp1ppp/1qn2n2/2P5/2B1P3/2PPBQ2/P4PPP/RN2K1R1 b Qkq - 0 12|b6b2 f3e2 b2a1|1365|23,47
4r1k1/5ppp/1p1P4/p1p5/P2b1qN1/1Q6/BPP4P/R6K b - - 0 24|f4e4 b3f3 e4f3|1366|18,4
5rk1/1p4p1/p1pqPRQR/4p3/P7/1P2P3/6PP/6K1 b - - 0 27|d6d1 g1f2 f8f6|1366|1,48
8/2P5/3K4/5k2/2r3p1/7R/8/8 w - - 0 63|h3h5 f5f4 h5c5 c4c5 d6c5 g4g3 c7c8q|1366|0,1,11,14
2r5/q3Q3/6pk/4R3/2n1P2p/p4P2/PpP3P1/1K1R4 b - - 4 34|c4d2 d1d2 a7g1 d2d1 g1d1|1367|1,15,9
r4bk1/5p2/3p2p1/R1p1p2p/2P4P/1rB2PP1/1PR1P3/6K1 b - - 0 33|b3c3 c2c3 a8a5|1367|44,1,48
rn1qk2r/ppp2ppp/8/3p1b2/1b1P4/2N2Nn1/PPQ1PPBP/R1B1K2R w KQkq - 0 9|c2a4 f5d7 a4b4|1367|18
5rk1/Q4ppp/4p3/P2p4/4n3/8/1q4rP/2R2R1K w - - 0 24|a7f7 f8f7 c1c8 f7f8 f1f8|1368|15,9
r2qr1k1/ppp2ppp/1nnp4/5Pb1/6P1/1BP5/P4P1P/RNBQR1K1 w - - 5 16|e1e8 d8e8 c1g5|1368|7
8/pp4p1/4r2p/6k1/2PK2P1/1P1R3P/8/8 b - - 8 43|e6d6 d4e3 d6d3 e3d3 g5h4|1368|1,14
3r2k1/pp3ppp/1q6/8/3P4/8/bPQ1BPPP/3R2K1 b - - 1 22|a2b3 c2c1 b3d1|1368|1,21
6k1/r4qBn/3p4/p1p1p3/7P/2P2P2/PPQ5/2K3R1 b - - 0 28|f7f4 c1b1 a7g7|1368|20,1
4r1k1/3p1p2/1p3Ppq/1P2P1b1/1Pr3P1/P4Q1p/1B2R2P/5R1K b - - 3 36|c4f4 e2e4 f4f3|1368|
r1bqk2r/pppp1ppp/2n2n2/3N4/3PP1Q1/4K3/PPP3PP/R1B2B1R w kq - 7 10|g4g7 f6d5 e4d5|1368|
4R3/ppkr4/2pq4/4Qppp/8/1P4P1/P4P1P/6K1 w - - 2 30|e5a5 b7b6 a5a7|1369|1,4
7k/pp1q3p/2n5/1Q6/3b4/8/PPP3KP/5R2 b - - 0 25|d7g4 g2h1 g4e4 f1f3 e4f3|1369|1,15
r4rk1/ppp2ppp/3b4/4n1Q1/7q/1P6/P1P1BPPP/R1B2RK1 b - - 2 13|e5f3 g2f3 h4h2|1370|7,4,9
r3r1k1/5pb1/p2q2p1/PbpP2N1/1p2n2Q/8/6PP/3R1RK1 w - - 0 29|h4h7 g8f8 f1f7|1370|7,4
6n1/2R1Bpkp/4p1p1/4P1P1/3P1P2/6KP/p2r4/8 w - - 0 40|e7f6 g8f6 e5f6 g7h8 c7c8|1370|1,15
8/1pk2n2/1p1p3r/pP1Rp1p1/P3P3/2P2PP1/6K1/3R2Br w - - 8 34|g1b6 c7b6 d1h1|1370|20,1
8/8/p2P3k/6p1/1P3q1p/2PQ2PP/7K/8 b - - 0 54|f4f2 h2h1 h4g3 d3g3 f2g3|1370|29,1,19
4rrk1/ppp2ppp/2n5/b2q4/3PRB2/2P2Q2/PP3PPP/R5K1 w - - 1 16|e4e8 d5f3 e8f8 g8f8 g2f3|1370|7
5r1k/p5p1/8/3q4/8/1P3rPK/P1P1QP2/R4R2 b - - 0 33|d5h5 h3g2 f3g3 f2g3 h5e2|1370|20,1
4q3/1k6/8/K7/2Q1N3/b7/8/8 b - - 21 69|e8a8 c4a6 a8a6|1372|1,4
r4rk1/2p3pp/p1pq4/1p2pb2/8/1N1P1N1P/PPP2KP1/R1BQ4 b - - 2 15|e5e4|1373|
3r2k1/1p3pp1/2qN3p/2P5/1P1bp3/6P1/2Q2P1P/3R2K1 b - - 3 31|d8d6 c5d6 c6c2|1374|1
3r2k1/R4ppp/1p3nq1/3pQ3/8/1P2P3/PB3PP1/6K1 b - - 0 31|g6b1 g1h2 f6g4 h2g3 g4e5|1375|1,18
1r6/3R2pp/2K2pk1/2P5/8/7P/1r1R2P1/8 b - - 16 49|b8c8 d7c7 c8c7 c6c7 b2d2|1375|1,14
8/6r1/3P4/2p4R/2Pk1p2/8/2K5/8 w - - 1 47|h5d5 d4c4 d6d7 c4d5 d7d8q|1375|0,1,11,14
7r/2p5/3b1p2/5kp1/3BR3/6P1/PPP2P1r/4RK2 b - - 5 25|h2h1 f1g2 h8h2 g2f3 g5g4 e4g4 h1e1|1375|29,1
r2q1rk1/1pb2pp1/2p1pn1p/2n1N3/2NP1P2/3QP3/PB4PP/R4RK1 w - - 3 18|d4c5 d8d3 e5d3|1375|5
r5r1/1p1k1p1p/1q2p3/4P1b1/3n4/2N5/PPPB1Q1P/2KR3R b - - 2 22|d4b3 c2b3 b6f2|1376|20
rnbqk2r/pp2ppbp/3p2p1/2p5/4n3/2P2N2/PP1PBPPP/RNBQ1RK1 w kq - 0 7|d1a4 b8c6 a4e4|1376|18
5k2/8/4QPp1/p6p/2K2P2/4P3/1q4P1/8 b - - 0 38|b2a2 c4d3 a2e6|1377|1,19,21
r2Bk1nr/6pp/pp1bp3/2p5/8/2N2b2/PPP2PPP/R2QK2R b KQkq - 0 13|f3d1 a1d1 a8d8|1377|48
8/8/2Bk3K/1P2p2P/5nP1/3p4/8/8 b - - 0 60|d3d2 c6f3 e5e4 f3d1 e4e3|1377|0,1
7r/3N2k1/p4p2/1p1p4/P1pP4/1PPrq1Q1/5R1P/R4K2 b - - 0 38|e3g3 h2g3 h8h1 f1g2 h1a1|1378|30,21
Nnbk3r/pp3ppp/4pn2/3p4/2pP1B2/4P3/PqPK1PPP/RQ3B1R b - - 2 11|f6e4 d2e2 e4c3 e2f3 c3b1|1378|18
rnb1kb1r/1p3pp1/p3pn1p/8/3qP3/P1NB4/1P3PPP/R1BQ1RK1 w kq - 0 11|d3b5 a6b5 d1d4|1378|20
r4rk1/pp3pp1/2p5/3p3p/5Pnq/2P1PQNb/PPB2P1P/R3R1K1 w - - 3 20|g3f5 h4f2 f3f2|1378|
4rk1r/bb2Rp2/p2p4/1p1P1PB1/1Pq3Pp/P2Q3P/2P3B1/5R1K b - - 0 27|e8e7 g5e7 f8e7 d3c4 b5c4|1379|
b4r2/3p2kp/p3p1N1/4Pp1P/2P5/3n4/P2K4/1R4R1 b - - 0 32|h7g6 g1g6 g7h7|1380|1
8/3bP3/1p6/2p1Bk1p/2P1q3/6R1/8/5BK1 w - - 2 48|f1d3 e4d3 g3d3|1380|1,23
8/1p1k1p1p/2pP2pP/p1P3P1/b2KB3/8/8/8 w - - 2 36|d4e5 a4b3 e5f6|1380|8,1
2rr2k1/p4p1p/1p2pQp1/1q1p4/2P2P2/1P6/3N2PP/2R4K w - - 0 26|f6d8 c8d8 c4b5|1381|1,48
6k1/7p/2Pp2p1/3Pp2n/2p1P3/1rq3P1/3Q1BK1/8 w - - 0 40|d2c3 b3c3 c6c7 c3a3 c7c8q|1381|0,1,11
3k4/2p3p1/1p6/pP1PPQ2/4n3/8/4K1P1/2q2B1r w - - 0 46|f5f8 d8d7 e5e6|1382|1,4
4Rr1k/2p3p1/Q4p1p/5q2/8/1P6/PB4PP/1R4K1 b - - 0 30|f5b1 a6f1 b1f1 g1f1 f8e8|1382|1,18,5
2r3k1/pp3ppp/4b3/8/2pQR2P/5P2/1BPP2P1/1q4K1 w - - 2 26|g1h2 b1b2 d4b2|1382|25,1
r7/3rk3/p4R1R/1p4Pp/1Pb5/2P5/1P6/2K5 w - - 15 36|h6h7 e7e8 h7h8|1384|1
1r4k1/5pbp/2pr2p1/6P1/5q2/P2n4/1PRQ3P/1K1R1B2 w - - 0 25|d2f4 d3f4 d1d6|1384|44,20
6k1/7p/1pNr2p1/pP6/2Pp1p2/3qb3/Q3R1PP/5K2 w - - 0 36|c4c5 g8g7 c5d6|1384|20,34,1
6k1/pr4b1/4N1p1/4p1P1/3p4/6P1/r4PK1/2R2R2 w - - 2 35|c1c8 g8f7 e6d8 f7e7 d8b7|1385|1,30,18
r6q/1p1nk1p1/p2pp1Q1/3p2P1/3P1P2/2PBP3/P1P5/2KR4 b - - 2 21|d7f8 g6g7 h8g7|1385|1,47
2r3k1/2r2pbp/4bpp1/1Q1B1q2/p2P2P1/P1P2N1P/1P1R1P2/3R2K1 b - g3 0 27|f5d5 b5d5 e6d5|1385|
2r2rk1/p4ppp/1p1qb3/3p4/1P2R3/1NPQ1N2/P4PPP/R5K1 b - - 0 19|e6f5 d3d2 f5e4|1385|
5rk1/1p4pp/p1n5/2P1P3/1B2Q3/P7/1q4PP/1R4K1 b - - 4 30|b2f2 g1h1 f2f1 b1f1 f8f1|1386|3,1,15,9
4Qrk1/1pr3p1/6p1/pBPp4/Pn1P4/1P3Pq1/1K6/2R4R w - - 4 36|h1h8 g8h8 e8f8 h8h7 c1h1 g3h2 h1h2|1386|40,29,7,46,23
8/5p2/6p1/p2bPpP1/3P4/2KB4/k7/8 w - - 2 60|d3c4 d5c4 c3c4 a2b2 d4d5|1386|8,25,1
r1b1r1k1/4b1pp/p1n2p2/3qNn2/2pP1P2/P1P3PP/B7/R1BQK1R1 w Q - 0 19|a2c4 d5c4 e5c4|1386|23
rr6/5kpp/3p4/2bPp3/PPP5/2K5/R5PP/1R6 w - - 9 32|b1f1 f7e7 b4c5|1386|1
5rk1/p4Npp/8/1p6/4P3/1Q6/1PPK2PP/7q w - - 2 24|f7h6 g8h8 b3g8 f8g8 h6f7|1387|34,35,1,15,9,38
rn2r3/ppp2p1k/7p/3PNq2/5P2/3Q4/PPP2K1P/R5R1 b - - 1 18|e8e5 d3f5 e5f5|1387|23
8/5k2/1bNR4/1P3p2/8/1r6/6K1/8 w - - 8 51|c6e5 f7e7 d6b6|1387|20,1
r5k1/4p1b1/pq2N2p/3p2p1/3P2p1/2NQ2P1/P1P3PP/6K1 w - - 3 22|d3g6 b6e6 g6e6|1388|1,7
3rq1k1/p4pb1/2Q4p/6p1/3NPp2/2P5/PP4PP/5RK1 b - - 6 24|g7d4 c3d4 e8c6|1388|1
r1b2r1k/1p4pp/1qP5/5p2/2B2N2/p4Q2/PP4PP/2KR4 w - - 2 21|f4g6 h7g6 f3h3|1389|4,9
r4rk1/pbq2pp1/1ppbpn1p/8/2P2B2/P1NB4/1P1Q1PPP/4RRK1 w - - 4 17|f4d6 c7d6 d3h7 g8h7 d2d6|1389|20
8/8/8/4R3/3nP3/2k5/8/rB2K3 b - - 0 55|d4f3 e1e2 f3e5|1389|1,18,23
R7/8/5pk1/P3b3/6r1/8/5K2/6R1 b - - 4 45|e5d4 f2f3 g4g1|1389|29,1
6rr/1Nq1kp2/4pp1p/1Q1pn3/8/P3P2P/1PP2PP1/3R1RK1 b - - 0 22|e5f3 g1h1 c7h2|1390|7,4,23
2r3k1/R6R/6p1/8/2p5/r6P/P5PK/8 b - - 0 38|a3a7 h7a7 c4c3 a7e7 c3c2|1391|0,1,14
2r5/1R5p/p1r3pk/R7/6P1/7P/5P2/6K1 w - - 3 30|g4g5 h6h5 b7h7|1393|29,1,4,14
8/6Q1/4P3/3p4/2p2n2/2P1qk2/7P/5K2 w - - 17 61|g7g3 f3e4 g3e3 e4e3 e6e7|1393|0,1
8/6b1/5p1k/5QpP/3N2K1/3P1P2/1P5P/4q3 b - - 4 40|e1h4|1394|1,6
4r3/ppR5/3P2pk/3N2p1/2Bb2n1/1P5P/P5P1/1R3K2 b - - 2 32|g4h2|1394|6
r5k1/p4ppp/3r4/8/4qR1b/1P2B3/P1P3PP/1RQ3K1 b - - 12 23|d6d1 c1d1 e4e3 g1f1 e3f4|1394|29,18,9
3r2k1/ppp1bppp/2n5/8/4P1b1/1P3N1P/PBP1P1P1/2K2B1R b - - 0 16|g4f3 e2f3 e7g5 c1b1 d8d1|1394|
8/1p6/3p2kp/PP2p3/4P1P1/3n1K1P/8/8 w - - 0 40|a5a6 b7a6 b5a6 d3f4 a6a7|1394|0,1,10
r1b1k1nr/pp1p1ppp/4p3/q1b5/3QP3/2N5/PPPB1PPP/R3K2R w KQkq - 4 10|d4g7 c5d4 g7d4|1395|
3r1rk1/p4pB1/1qbQ2p1/1pp3N1/4P3/2P2P2/PP4P1/2KR3R b - - 0 23|d8d6 d1d6 g8g7|1395|48
r1b1qr1k/p1p3bp/1p1p2p1/4p1B1/2BPP3/6Q1/PPP1NnP1/2K4R w - - 0 20|h1h7 h8h7 g3h4 g7h6 h4h6|1396|40,7,15,9
3r2rk/1p1q1RR1/7p/p1pnP3/P2p3P/1B1P2Q1/1PP3P1/7K b - - 0 32|d7f7 g7f7 g8g3|1396|
2kr3r/pp1n1pp1/2p1p3/5b1p/NP1P1BnP/P4Nq1/2P3B1/R1Q1R2K b - - 5 18|g4f2 h1g1 f2h3|1396|7
8/7k/PB6/2p1bp2/8/7K/R5P1/2r5 b - - 0 45|c1h1|1397|1,6,13
8/1b4p1/p3p1Pr/1p1p4/3N4/2PBk3/PP5r/1K3R2 w - - 21 42|f1f3 e3d2 d4b3 d2e1 f3f1|1397|1,15,16
3R4/5p1p/p4pk1/P2b1N2/1p4P1/3r4/5PKP/8 w - - 0 35|d8d5 d3d5 f5e7 g6g5 e7d5|1398|40,1,18,9
4r3/5pk1/6p1/6P1/p4P2/2NRn3/1PPK1R2/6r1 b - - 6 37|e3c4|1399|1,6
8/R1p2k1p/5pb1/8/5b2/7r/PB2KP2/RN6 b - - 0 30|g6d3 e2d1 h3h1|1399|4,13
r4rk1/pp3p2/4pn1p/3p2p1/5q2/2P4P/PP1NR1P1/2R1Q2K w - - 1 21|e2f2 f4h4 f2f6 h4e1 c1e1|1399|21
8/8/3k4/p1b1p2p/P1R3pP/2P3K1/8/8 b - - 5 45|d6d5 c4g4 h5g4|1399|1,47
5n2/r5p1/4pk2/p2p4/3P1N2/2P2PR1/Pr6/6RK w - - 2 32|f4h5 f6e7 g3g7 e7d6 g7a7|1399|29,1,21
4R3/8/p5p1/b4kP1/3B4/4P3/2rpK3/8 w - - 6 44|e8e5 f5g4 e5a5 d2d1b e2d1|1400|1,18
2kr1b1r/pbp2pp1/5n1p/3qN3/5B2/2Np4/PPP2PPP/R2QR1K1 b - - 1 14|d5g2|1400|
3r2k1/5p1p/p1Q1p1p1/4b2q/1PP5/6P1/P6P/3R1R1K b - - 1 26|d8d1 c6e8 g8g7 e8f7 g7h6 f7f8 e5g7|1401|1
2r1k2r/Qpqb1pp1/5b2/3p4/3P4/B2BP3/P4PPP/2R2RK1 b k - 2 18|c7h2|1402|7,6
3r4/6k1/1p1pr1p1/p1p2p2/P1P1p1P1/1P1n4/3R1PBP/4R1K1 w - - 1 30|d2d3 e4d3 e1e6 d3d2 g2f3|1402|25,1
r5k1/3R1p2/pq1bp2p/2p3p1/P3P3/1P1Q1P2/2P1N1P1/6K1 b - - 5 26|c5c4 d3d4 d6c5 g1f1 c5d4|1402|31,20,34,1,23
8/2pk1p1p/4p1p1/3P4/2P2q2/3Q4/4B3/3KB2r w - - 2 40|d5e6 d7e6 d3d5 e6e7 d5h1|1402|40,34,35,1,18
r2q1rk1/1b2bppp/p2p4/1p1npB2/1P2n3/2P2N2/PB3PPP/R2QR1K1 w - - 0 15|f5e4 d5c3 b2c3 b7e4 e1e4|1402|
r2qkbnr/1pp2ppp/p7/4n3/4N1b1/4BN2/PPP2PPP/R2QKB1R w KQkq - 0 8|d1d8 a8d8 f3e5|1402|48
5rk1/4q2p/2pppRp1/2p1p1Q1/2P1P2P/1P1P4/6P1/6K1 w - - 1 44|f6g6 h7g6 g5e7|1402|20,1
8/8/p3pk2/1p6/1P2K3/P1R5/2P4r/8 b - - 0 48|h2h4 e4e3 h4h3 e3d2 h3c3|1403|1,14
r3n2k/p4p2/2p1Pp2/2p2b1P/2p5/1P5P/PBP5/6RK w - - 0 30|e6f7 e8d6 b2f6|1403|0,1
2r1r1k1/1p1q1ppp/2n2nb1/1N1p4/1B6/P3P1P1/5PBP/2RQ1RK1 b - - 2 20|c6b4 c1c8 e8c8|1404|
3q2k1/5pbp/1p4p1/1Pn1r3/rQ2P3/4B1P1/5PBP/1R1R2K1 b - - 7 23|d8d1 b1d1 a4b4|1404|
8/2kp4/3Rp1b1/pKP5/3N1PP1/8/r7/8 b - - 1 49|g6d3|1404|1
5b1r/pk3pp1/1p2p1p1/4P3/P1p2P1q/3rB2P/4Q1P1/RN3RK1 b - a3 0 19|d3e3 e2e3 f8c5 e3c5 b6c5|1404|23,9
5rk1/1p2qrp1/2p1R2Q/1p1pB3/4nP2/PP2P2P/2P3P1/R5K1 b - - 0 23|g7h6 e6e7 f7e7|1405|
r4k1r/pp1n1p1B/3Npnpp/8/1Q6/1P6/P1P1KPPP/7q w - - 0 21|d6f5 d7c5 b4c5 f8e8 c5e7|1406|20,15
2r1q1k1/6p1/3Pp2p/3bNp2/p2P4/7P/5PP1/2R2RK1 w - - 3 44|d6d7 e8d7 e5d7|1406|0,1,18
5rk1/pb1Q3p/1p6/2ppN3/4nr1q/2P5/PP2B1PP/R4RK1 b - - 1 27|f4f1 e2f1 h4f2 g1h1 f2f1 a1f1 f8f1|1407|3,29,46
4r1k1/pp3p2/5p1p/8/1P6/P6Q/5K2/3Rr3 b - - 2 44|e8e2 f2f3 e2e3 f3f4 e3h3|1407|1,30,17,21
r2qkb1r/1p1b1pp1/p3p1p1/1N1pB3/8/P7/5PPP/R2QR2K w kq - 2 18|b5c7 d8c7 e5c7|1407|18
r2qk2r/3bbppp/p1n1p3/1p1pP3/3N1P2/3PBN2/PP1Q2PP/R3K2R b KQkq - 2 13|e7b4 d4c6 b4d2|1409|23
2r2k2/1R3ppp/4p3/3nP3/Q7/2qr4/5PPP/5RK1 w - - 1 23|a4d7 d5c7 d7c8|1409|37
1rbq2k1/p2pp1bp/2N1n1p1/5r2/2P5/BPN5/P4PPP/R2QR1K1 b - - 0 16|d7c6 d1d8 e6d8|1409|5
r1b2r1k/bpp3p1/p2p3p/6nQ/1Pq5/P6P/RB3PK1/1B3R2 w - - 0 25|h5h6 h8g8 h6g7|1410|7,4,23
2k4r/ppp2ppp/r7/1Nb5/3Qnq2/1P6/P1P2PPP/1K1R3R w - - 2 19|d4d7 c8b8 d7d8 h8d8 d1d8|1411|15,26,9
rn1qr1k1/p1p2pp1/1p1p1n1p/1P2p3/2P1b3/P2B1N2/1BP2PPP/R2Q1RK1 w - - 0 12|d3e4 f6e4 d1d5 b8d7 d5e4|1411|31,18
b3kb1r/2pp1pp1/4p1qp/1N2P1n1/1pP5/1P2P3/1B2BPPP/3Q1RK1 b k - 10 18|g5h3 g1h1 g6g2|1412|20,7,4,23
5rk1/3P4/6p1/3Pp3/4P3/6bB/2Q2P1q/1R2RK2 b - - 0 35|f8f2 c2f2 h2f2|1412|18,4
3q1rk1/r4ppp/p4n2/1b1p4/1bpP4/2N2B2/1BP2PPP/R2QR1K1 w - - 0 17|c3b5 b4e1 b5a7|1412|
8/3N2p1/4r1kp/2P1pp2/8/3K4/5PPP/8 w - - 1 38|d7f8 g6f7 f8e6 f7e6 d3c4|1413|25,1,18
4b3/2r3pk/8/p2Q3P/1p1P1P2/P2KP2q/1P4R1/8 w - - 1 38|d5e4 h7h8 e4e8|1413|1,18
r3k2r/1b1p1pQ1/p3p2p/2qnP3/2B5/P1P5/3B1PPP/R4RK1 b kq - 0 17|e8c8 c4a6 b7a6|1413|53
1k1r4/p3p3/2p2p2/8/2P4P/1P3QPB/P4PK1/4q3 b - - 1 31|d8d1 f3d1 e1d1|1413|1,12
3r1bnr/kpp2ppp/8/8/6B1/1q6/3Q1PPP/2KR3R w - - 0 17|d2a5 a7b8 d1d8|1414|20,4
r2r2k1/p1p1bppp/2p5/4pP2/1q2P3/2PP3R/PP1QN2P/R6K b - - 0 20|b4e4 d3e4 d8d2|1415|7
6k1/5rp1/bp2pr1p/3p4/1P1PnP2/q2B1NP1/7P/R2Q1RK1 b - - 1 25|a3d3 d1d3 a6d3|1416|
3k4/R4pp1/B6p/2BPp3/4PnK1/5P2/1r4PP/8 b - - 13 37|b2g2 g4f5 g2g5|1417|1,4
r2q4/p4p1k/1p5p/5N2/3B4/PP1B4/2P2p1P/2K4b w - - 0 28|f5e7 h1e4 d3e4 f7f5 e4f5|1417|20,34,1,18,15
2rr2k1/p3qpp1/1p3nbp/3PB3/8/1B3Q1P/P4PP1/2R1R1K1 b - - 0 23|c8c1 e1c1 e7e5|1417|
5rk1/6pp/p5n1/1p4q1/2pN4/8/PPP2Q1P/5R1K w - - 3 35|f2f8 g6f8 f1f8 g8f8 d4e6 f8e7 e6g5|1417|40,1,18,9
rn2q2r/ppp1b1k1/4b2n/3pP2Q/3P3P/2NB2P1/PPP5/R1B3K1 w - - 1 16|c1h6 h8h6 h5e8 b8c6 e8a8|1417|
2kr4/pp1n1Rp1/2p3p1/8/4n3/2B1q1P1/PPP1B1PK/3RQ3 b - - 0 19|d8h8 e2h5 h8h5|1418|4
r7/pRn2rkp/2p1p1p1/2PpP3/2q5/2N1Q2P/P4PP1/5RK1 b - - 4 25|d5d4 e3e4 c4c3|1418|18
1r1r2k1/2q2p1p/p2Np1p1/4Q3/1P3R2/2n4P/5PP1/4R2K w - - 7 37|f4f7 c7f7 d6f7|1418|
3r2qk/pp3p1n/5P2/2P4R/5Qp1/2B5/PP4P1/7K b - - 0 36|d8d1 h1h2 g4g3 f4g3 d1h1 h2h1 g8g3|1419|29,1
2r3k1/6p1/p1p2r1p/1p1p1N2/1P1PqP2/P2Q4/5RPP/6K1 w - - 1 30|d3e4 d5e4 f5e7 g8f7 e7c8|1419|1,18
3r1rk1/5ppp/p4n2/1p1p4/1P5R/PB1Q1P2/3B1KPP/q7 w - - 2 26|d2c3 a1c1 c3f6|1419|
r2qk2r/ppp5/8/4p3/2BnN1b1/3P3P/PPP3P1/R4Q1K w kq - 0 20|f1f7|1420|6
rn2k1nr/pBp2pbp/4b3/8/4P1pq/3N1p2/PPPP2PP/RNB1QK1R b kq - 1 10|f3g2 f1g2 h4h3|1421|0,40
1r5k/1R4p1/7p/8/3PQPP1/KP2P2P/P2q4/8 b - - 0 38|b8a8 b7a7 a8a7|1423|1,4
3r1r1k/4p1b1/4Bp1p/2p2P2/p1N3PK/4Q2P/PP1R4/2q5 w - - 2 39|d2d8 c1e3 d8f8 g7f8 c4e3|1424|30
5r1k/Q5bp/2P3p1/4p3/4P1q1/2B3P1/P6P/4R2K b - - 0 33|g4f3 h1g1 f3c3|1424|1,18
2r5/7Q/3p1kp1/ppqP1b2/2p2P2/4R3/P5PP/6K1 w - - 1 33|h7e7|1425|1,6
r3kn2/pp2bp2/2p4p/2q2r1n/2N3p1/BPP3P1/P4PBP/R2QR1K1 b q - 3 19|c5f2 g1h1 h5g3 h2g3 f5h5 g2h3 h5h3|1427|31,7,46
6k1/1pp5/3p3Q/3Pp3/1PP1P1P1/2N4K/3B1qNP/7r b - - 4 35|f2f3 h3h4 h1h2 h4g5 h2h6|1427|29,1,18,21
8/5pk1/3p2p1/1p1qp3/pP2R1Q1/r7/8/4R1K1 b - - 0 51|f7f5 g4h4 f5e4|1427|1,18
r2q3r/ppp2pk1/3p1n2/4p1B1/1P1bP1bP/P1NP1Q2/1P3PP1/R3K2R w KQ - 1 17|g5f6 d8f6 f3g4|1428|18
3r2k1/pp6/4ppP1/4q3/P2P2P1/3Q4/8/5RK1 w - - 0 30|d4e5 d8d3 e5f6|1428|1
r1b2k1r/pppp2b1/2n1p1np/4P3/3P1q1B/2PBQ3/PP3PPP/RN2K2R w KQ - 10 16|d3g6 f4h4 e3f3|1428|
8/8/1k4p1/5p1p/P4P1K/2P5/8/8 b - - 3 57|b6a5 h4g5 a5a4|1428|1,2
8/6pp/2k1pp2/3p4/2r2PP1/3N1K2/1PnR3P/8 w - - 5 44|d2c2 c4c2 d3b4 c6c5 b4c2|1429|40,1,18,9
3r1rk1/5pp1/3Q3p/p7/8/8/PPP1q1PP/4RR1K b - - 2 27|e2f1 e1f1 d8d6|1430|1
1r4k1/pr2ppb1/qn1p2pp/2pP4/2N1PP2/1P2B2P/P2Q2P1/1RR3K1 b - - 4 21|b6c4 c1c4 a6c4 b3c4 b7b1|1431|
8/5pkp/4p3/3p4/4n1P1/1r3R1P/1P4K1/1R6 b - - 9 47|b3f3 g2f3 e4d2 f3e3 d2b1|1431|40,1,18
r3r1k1/pp4p1/4q2p/2BQ4/8/3P4/PPP3PP/5RK1 w - - 5 26|f1f8 g8h7 d5e6 e8e6 f8a8|1432|1
4Q3/pp3p1p/5Ppk/5p2/5P1K/1P3NP1/P1r3qP/4R3 b - - 4 29|g2h2 f3h2 c2h2|1433|1,4,9
6k1/1p2R3/p4pp1/3r3p/2q5/7P/1P1Q1PP1/6K1 w - - 0 36|d2h6 d5d1 g1h2 c4f7 e7f7|1433|1
8/8/4k3/5p1p/1p1P4/1P2K1P1/8/8 b - - 1 43|e6d5 e3d3 f5f4 g3f4 h5h4|1433|25,1,2,24
1rr2k2/p4ppQ/4b3/4p3/qP6/1pNB1P2/1P4PP/1K1RR3 b - - 1 27|c8c3 b2c3 a4a2 b1c1 b3b2 c1d2 b2b1q|1433|0,29,20,34,11,26,9
r6k/ppp4p/3p1q2/5QN1/1PPbp3/8/P5PP/2B4K w - - 3 24|f5h7|1434|1,6
6rk/4R2p/3p3p/2pNb3/4P3/2P3qP/PP3QP1/6K1 b - - 8 36|g3h2 g1f1 h2h1 f1e2 g8g2|1434|29,1,23
3r2k1/ppq1br1p/6N1/3b3Q/8/1P4NP/P4PP1/3R1RK1 b - - 0 25|h7g6 h5g6 f7g7|1434|
r1b2r1k/pp3ppB/2p2b1p/4N3/3q4/6P1/PPQ2PP1/R3R1K1 w - - 0 19|e5f7 f8f7 e1e8 f7f8 e8f8|1435|31,7,15,9
1r4k1/2n2p2/2P1p1p1/8/1rR1P2P/5P2/8/B1R2K2 b - - 3 41|b4c4 c1c4 b8b1 f1f2 b1a1|1435|31,1,30,18
2r3rk/p2p1p1p/1p2pP2/5pPQ/5P2/5R2/P3q2P/6K1 w - - 3 32|h5h7 h8h7 f3h3 e2h5 h3h5 h7g6 h5h6|1436|40,1,46,9
r1b2rk1/pp2bp1p/4pnp1/4N3/3P2P1/2BB4/qPQ2P1P/2KR3R w - - 0 16|d3c4 a2c4 e5c4|1436|
3rb3/6kp/p2p1R2/4p1P1/2PpP2q/3P2N1/P2Q1K2/8 w - - 8 36|f6h6 h4f4 d2f4|1436|1
r4rk1/pppn2pp/8/3P1p2/2PP3q/2K2B2/PP4QP/R1B5 w - - 2 17|c1g5 h4g5 g2g5|1437|47
8/8/4P2p/2Q2p2/3K1P1k/2P5/8/1q6 b - - 0 47|b1e4|1438|1,6,19,42
7k/6rp/2Q3p1/4p1P1/8/4q3/1r4PP/5R1K w - - 0 27|f1f8 g7g8 c6f6|1438|1,4
r2q1rk1/pQp2ppp/8/P3P3/2Pn4/P4B2/6PP/R1B2NK1 b - - 0 16|d4f3 g2f3 d8d4 c1e3 d4a1|1438|31,18
8/P6k/4Q3/4pK2/8/6qP/8/8 b - - 0 61|g3f4|1439|1,6,19
r1b1k2r/1p3pp1/p2P3p/6N1/3p2P1/8/PPP2P1P/R2QKB1q w Qkq - 0 19|d1e2 c8e6 g5e6|1440|
r3r1k1/pbp1Nppp/1p2n1q1/nP6/2B1P3/Q4N2/P4PPP/3RR1K1 b - - 2 20|e8e7 a3e7 a5c4|1440|
4q1k1/p5p1/1p3p2/3N1P1p/2pP4/PnP2PP1/1PQ4P/6K1 b - - 0 26|e8e1 g1g2 b3d2 c2d2 e1d2|1440|1,7
5rk1/ppp2rp1/3b2p1/2p1p2p/2PnP1Pq/3PBP1P/PP1Q2KN/R4R2 w - - 3 19|e3g5 h4g5 d2g5|1442|47
r2r2k1/1b3ppp/pp6/2ppn1q1/P7/2PPN2P/BP1Q1PP1/R4RK1 w - - 2 19|f2f4 e5f3 f1f3|1442|18
r1bq1r2/p3b1pk/2p5/3pp1P1/5B2/2P5/P1P2P1P/R2QK2R w KQ - 0 16|d1h5 h7g8 g5g6 f8f4 h5h7 g8f8 h7h8|1444|46,9
1r4k1/p3R2p/3p2pQ/3q4/3b4/3p4/PP3rPP/1RB4K w - - 0 23|h6h7 g8f8 c1h6 d4g7 h7g7|1444|15,51
r4r2/p2q1ppk/1p5p/2ppPb1Q/3P3P/4P3/PPP3P1/2K2R1R w - - 0 19|h5f5 d7f5 f1f5|1444|
1r3rk1/Q1pqbpp1/6p1/3pP3/3P4/4B3/PP3PPP/R4RK1 b - - 0 18|b8a8 a7b7 f8b8 b7b8 a8b8|1444|31,47
7r/1p1b2k1/p1qppbp1/8/4PP2/2N2Q2/PPP3BR/2K5 w - - 1 23|h2h8 g7h8 f3h3 h8g8 e4e5 c6c4 e5f6|1444|40
1r3r1k/p7/4pNp1/4Pn2/3P4/1P4P1/PB1qB1K1/R4R2 w - - 2 33|f1h1 f5h6 h1h6 d2h6 a1h1 h6h1 g2h1|1444|31,30,23,9
r6r/6k1/pBPP1p2/1p4p1/6b1/PB1P4/2P1n1PP/R3R2K b - - 4 28|h8h2 h1h2 a8h8|1445|28,40,7,4,9
4k3/p4prp/B1RnpPp1/3pb3/8/7P/P5P1/7K w - - 0 30|f6g7 e5g7 c6d6 e8e7 d6c6|1445|0,1,5
r3kb1r/pp3ppp/1q2p3/1Nnp4/5B2/3bPP2/PPP3PP/1R1Q1RK1 w kq - 0 15|b5c7 b6c7 f4c7|1445|18
7r/k2q1ppp/p2pbn2/N1p1N3/P1Q1P3/2PPP3/6PP/Rr4K1 w - - 0 21|a1b1 e6c4 e5d7|1447|
r3r2k/6pp/p1n2p2/1pp2b2/5P2/1BP2N1P/PP3PP1/3R1K1R b - - 1 18|c5c4 b3c4 b5c4|1448|47
4Qb1k/7p/6p1/1pq5/8/1B5P/5PP1/6K1 w - - 4 35|e8f7 c5c1 g1h2 f8d6 g2g3|1448|25,1
rn1qk2r/1bp1ppbp/pp4p1/3nP3/3PB3/2N2N2/PPP3PP/R1BQ1RK1 b kq - 2 10|d5c3 e4b7 c3d1|1448|
r1b2q1k/pppn1Q2/3p1b1r/8/2B5/6R1/PP3PP1/3R1K2 w - - 1 24|g3g8 f8g8 f7g8|1449|18,4
4rr1k/pp2q2p/3p4/2pP2Q1/5BP1/PP3P2/8/R5K1 w - - 1 33|g5e7 e8e7 f4d6|1449|44,1
4rr1k/p4qpp/1p6/2pp4/6Q1/2P5/PP2RPPP/4R1K1 b - - 1 22|f7f2 e2f2 e8e1 f2f1 e1f1|1450|29,1,7,15,9
2kr4/ppp4p/2n4r/7q/3P4/P1B2QP1/1PP1R1P1/3R2K1 b - - 2 28|h5h1 g1f2 h1d1 f3f5 c8b8|1450|25,21
2r3k1/2rbqpp1/2n1p2p/1B6/3P4/4PN1P/4QPP1/R1R3K1 b - - 0 22|c6d4 f3d4 c7c1 a1c1 c8c1|1450|20
8/6pp/8/P7/1P6/3kp1P1/8/5K2 b - - 2 39|d3d2 f1g2 e3e2|1450|0,1,2
6k1/1p3p1p/2p2Qp1/p1Pp1P1q/P7/1P4RP/2r5/6K1 w - - 0 34|f6d8 g8g7 f5f6 g7h6 d8f8|1451|1,15,23
2r3k1/p6p/1p1pbppB/4b3/2P1P2K/3B1R1P/6q1/1R3Q2 b - - 1 25|g6g5 h6g5 g2g5|1452|4
1k1r3r/ppp1ppb1/3p2p1/1P2P3/2PP1n2/P1N2NPq/5P1P/R2Q2RK b - - 5 20|h3h2 f3h2 h8h2 h1h2 d8h8 d1h5 h8h5|1452|40,7,46,9
2rr4/pp2kppp/n3p3/2qpP3/4n3/2N5/PPPQB1PP/2KR1R2 w - - 1 16|c3e4 d5e4 d2g5|1452|
3r1k2/1bpr2pp/p3Qpq1/1p2p1N1/1P6/P1PPP2P/5RP1/5R1K w - - 2 26|f2f6 g7f6 f1f6 f8g7 f6g6|1452|18,9
3Q4/1p4kp/p4pp1/3p1P2/3B2P1/1P5P/P2p4/3qrNK1 w - - 0 38|d8f6 g7g8 f6g7|1453|1,4
3qr1k1/1b3p1p/p5pB/1p1pQn2/3N4/1Pr2P1P/P3R3/R5K1 w - - 0 30|e5e8 d8e8 e2e8|1453|7,4,13
6rk/3Q2bp/p2p4/5p2/Pq6/2p4P/2P5/K3R1R1 w - - 9 35|d7g7 g8g7 e1e8 g7g8 g1g8|1453|1,15,9
8/5R2/3P1n1p/2p5/2P5/2KB2kP/5r2/8 b - - 0 46|f6e4 d3e4 f2f7|1453|20,1
r2q1rk1/1ppbbppp/p2p1n2/3N2B1/2BQP3/8/PPP2PPP/R4RK1 b - - 1 11|f6d5 g5e7 d5e7|1453|
7R/4kpQ1/4r2p/3n4/3PN3/4PK2/2q2PPP/8 b - - 6 42|c2e4 f3g3 e6g6|1454|1
3r1k1r/2Q1bp2/p2pbqpp/8/2p5/4B3/PPP2PPP/3RR1K1 w - - 0 25|e3d4 f6f5 d4h8|1454|21
2r3k1/6pp/p3pq2/1p3p2/3P4/1PrB1P2/P4QR1/3R2K1 b - - 4 34|c3d3 d1d3 c8c1 f2f1 c1f1|1454|31,30,9
rnb1k2r/1pqp1pp1/p3p3/2b5/4P1p1/1N1B2P1/PPP1QP2/RNB2RK1 b kq - 2 11|c7g3|1455|7,6,23
r3r1k1/ppbq2pp/2p5/3p1Np1/3P1nQP/2P5/PP1N1P2/R3R1K1 w - - 0 23|f5h6 g7h6 g4d7|1455|20
6k1/Q4pp1/7p/P7/8/7P/3r2r1/7K w - - 0 37|a7a8 g8h7 a8g2|1455|1,17
6k1/p2rppbp/1p4p1/5qN1/8/1Q2BP2/PP5P/5R1K b - - 3 25|d7d3 b3f7 f5f7|1456|
8/8/2p5/1k6/1P1RK3/8/8/7r b - - 0 55|h1h4 e4d3 h4d4 d3d4 b5b4|1456|1,14
1r3rk1/1p1qp1bp/p2pb1p1/2p3N1/P1P2PP1/3P3P/1PQ1N1BK/5R2 w - - 1 24|g5e6 d7e6 g2d5 e6d5 c4d5|1456|23
8/6p1/2p5/R7/8/8/kp1K4/8 b - - 1 43|a2b3 a5a7 b2b1q a7b7 b3a2|1456|0,25,1,11,14
8/p4pk1/8/3P3p/2p1bP1P/P3N3/KP1R4/2r5 b - - 5 38|e4b1 a2a1 b1c2 a1a2 c2b3|1457|20,34,1,15
3rr3/3b3k/8/3Nn1Q1/2p5/2P3K1/P5P1/8 w - - 11 44|d5f6 h7h8 g5h6|1458|1,18,4
4k3/R5R1/3r1p2/2pP1p2/2r5/6P1/PK2PP2/8 b - - 1 41|d6b6 b2a3 c4c3 a3a4 b6b4 a4a5 c3a3|1458|1,46,14
r6r/pb2Nppk/nb2p2p/1p6/1Pp1Nn1P/P7/1K2P1P1/3R1B1R w - - 1 23|e4g5 h6g5 h4g5 f4h3 h1h3|1458|28,20,34,15,9
8/6bk/3p2p1/3Qp3/2PpP3/5q2/8/Q3K3 b - - 5 48|f3h1 e1f2 h1a1|1458|1,21
2r4k/4qb1p/p5p1/3p1p2/3P4/P1N1P1QP/nPR3P1/6K1 w - - 2 33|c3d5 e7e6 c2c8|1458|20
r3qBk1/pppb1ppp/2n1n3/3Q4/P1B5/2P2N2/2P2PPP/R3K2R b KQ - 0 14|e6f4 e1d2 f4d5|1459|20,34
rn1qk1r1/pbppb2Q/1p2P2p/8/3P1p2/2P5/PPBN1PPP/R1B2RK1 b q - 2 13|g8g2 g1h1 g2g7 f2f3 g7h7|1460|20,34
3r3k/2Q3p1/P4q1p/4p3/2p5/2P1P1R1/1r4PP/5RK1 b - - 5 40|f6f1 g1f1 d8d1|1461|40,1,4,9
1r3rk1/pp4b1/1q1pP2p/4pR2/1P2n3/3N4/P3B1Pp/2RQB2K b - - 0 25|b6g1|1461|
7k/R5p1/1p2r2p/8/6Q1/5P2/1q3P1P/6K1 b - - 2 30|b2b1 g1g2 e6g6|1461|1,23
1r3r1k/1q1nN1pp/3P1p2/pPp5/Pn3p2/1P2R3/5PPP/1Q1R2K1 w - - 0 26|b1h7 h8h7 e3h3|1462|28,40,7,4,9
5r1k/2p1Q1pp/1p1n4/p1pR4/P6q/2P1B3/2P2rPP/5RK1 w - - 0 22|e7f8 f2f8 f1f8|1462|3,4,27
r1k4r/3nR3/2pB1N1p/1pP3p1/3P4/P7/2n4P/R5K1 b - - 10 30|d7f6 e7c7 c8d8|1462|5
r2qnr1k/pppb2pp/2n4B/3Nb3/8/P5QP/1PP1B1P1/R4RK1 w - - 0 19|f1f8|1463|5,7,6
1K6/6R1/8/r2b4/5k2/8/3R2p1/8 b - - 1 64|a5a8 b8c7 a8a7 c7d6 a7g7|1463|1,21
r1b2rk1/p3R1p1/2pQ1p1p/2n2q2/P7/2B1RN1P/1P3PP1/2K5 b - - 6 27|c5b3 c1d1 f5b1 d1e2 c8a6|1465|26
3r3r/p3k3/2p1n3/1p3P2/6K1/3B1R2/P1P4P/R7 b - - 2 29|d8g8|1466|1,6
4kr2/R5R1/4p3/4P3/1r1p4/2p5/1P6/K7 w - - 0 39|a7a8 b4b8 a8b8|1466|1,4,14
r2qr1k1/pbp2ppp/1p3n2/8/3nN3/5NP1/PP2QPBP/R3R1K1 w - - 0 14|e4f6 g7f6 e2e8 d8e8 e1e8 a8e8 f3d4|1466|20,7
6q1/pp4pk/2pQ4/2P2p1p/1P5P/P5P1/1B1p1P2/6K1 b - - 1 39|g8d5 d6d5 c6d5|1466|1
r5k1/1p3p1p/3q1pp1/p2p1b2/3P3N/P1r1Q3/1P3PPP/1K2R2R w - - 2 19|h4f5 c3e3 f5d6|1466|
5rk1/1pr3b1/pNn1N2p/3pP1pq/1P1P4/P2Q1pP1/2R2P1P/2R3K1 b - - 0 27|h5h3 d3f1 h3e6|1466|
8/1r6/5N2/8/p1P1p1p1/2K2kB1/P4P2/8 b - - 1 54|e4e3 f2e3 f3g3|1467|29,1
r4rk1/ppp2ppp/2nb4/3p4/3Pq3/2P1P2R/PP1QB1PP/R5K1 w - - 5 15|e2d3 e4g4 d3h7|1467|
6k1/pp1n3p/2p1bppb/4p3/2P1P3/1PQNqPPP/PB4BK/8 w - - 6 26|b2c1 e3d4 c3d4 e5d4 c1h6|1467|
r5k1/5pb1/pnQP2Pp/2p5/2Pq3P/3B4/2R3PB/7K b - - 4 38|d4a1 h2g1 g7d4|1467|31
8/p7/2Q1Nkp1/3n2N1/8/KP6/P2r4/7r b - - 0 41|d2a2 a3a2 d5b4 a2a3 b4c6|1468|40,1,18,9
r2q2r1/4p2k/3p1bpB/p7/1P6/2N2P2/1PP3P1/2KR3R w - - 0 24|h6f8 f6h4 h1h4|1469|20,34,4,13
r2k1r2/pppn2Q1/3p3p/8/8/1PP1R2P/Pq2B2K/8 w - - 4 26|g7e7 d8c8 e7e8 f8e8 e3e8|1469|3,15,9
1r2r3/p4pk1/P1p3p1/2Pp3p/1p1P3P/1P1q1NP1/R4KQ1/2R5 b - - 2 33|d3e3 f2f1 e3c1|1469|18
N1bk1b1r/1p1p1ppp/3Pp3/n1p5/2P1n3/4PN2/Pq3PPP/1R1QKB1R b K - 1 14|b2f2|1470|22,6
r4rk1/2p1bpp1/p1Pp3p/1p6/4P1q1/6P1/PPBNRP1K/R1BQ1bN1 b - - 0 19|g4h5 g1h3 h5h3 h2g1 h3g2|1470|15
r4k2/5p2/1q2r3/1p2Q3/p2p4/P2P3P/1PP2PP1/4R1K1 w - - 3 32|e5h8 f8e7 e1e6 b6e6 h8a8|1471|20,1
8/8/3P4/2P5/1K6/8/8/3r2k1 w - - 1 66|b4b5 g1f2 b5c6|1471|25,1,14
1r6/5p1R/7R/4pPk1/2r2n2/1P3P1P/P4K2/8 w - - 0 44|h3h4 g5f5 h7f7|1472|1,4
2k5/1p1n3r/1P1R4/3P4/8/4p1K1/5r2/R7 w - - 10 51|a1a8 d7b8 a8b8 c8b8 d6d8|1472|40,1,15,9
3qr2k/pp3b2/2p4p/4B2P/P2P2Q1/1BP5/1P3P2/6K1 b - - 3 39|e8e5 d4e5 f7b3|1472|1
8/8/1r6/8/8/K2k4/R7/8 b - - 2 64|d3c3 a3a4 b6a6 a4b5 a6a2|1472|1,30,14,21
8/pb1Q3p/4p1pk/1pq4r/5PP1/6KB/PP2R2P/8 b - - 4 39|c5g1 h3g2 g1h2|1472|1
r4brk/5q2/2p4p/1p1p2nP/pP1PpN2/P1P1P1Q1/3B3K/5RR1 w - - 0 41|f4g6 g8g6 f1f7|1472|20,7
r4rk1/pp2nppp/1qn5/3p4/6b1/PN1QPNP1/1P3PBP/2R2RK1 b - - 8 15|g4f3 g2f3 c6e5|1473|
3q2k1/5pp1/pb2b2p/3pPp2/1p1P1N2/r4P2/2R2BPP/2Q3K1 w - - 0 30|f4e6 f7e6 c2c8 a3c3 c8d8|1474|23
4B3/7p/p3k3/1Pp2p2/b4K1P/6P1/1P6/8 w - - 3 40|b5b6 a4e8 b6b7|1474|0,8,1,9
6k1/p4pp1/Qp3q1p/2p1R3/8/2P2N1P/P1P2PPK/2r5 b - - 5 24|f6f4 g2g3 f4f3 e5e8 g8h7 a6d3 f3d3|1474|29,1
3r4/pp1b2pp/1qpQrnk1/8/4N3/5P2/P5PP/R3R2K w - - 10 27|d6g3 g6f7 e4g5 f7g8 g5e6|1475|30,18
5rk1/1b4p1/7p/p4B2/5R2/PPp3rP/8/3R1K2 w - - 0 38|f5e6 g8h7 f4f8 g3f3 f8f3|1475|29,20,1
8/2p2p2/1p1p1pk1/pP5r/P1P1PK1R/8/8/8 w - - 0 43|h4h5 g6h5 f4f5 h5h4 f5f6 h4g4 f6f7|1475|1,14
5rk1/pp3p1p/2p3p1/4p3/3rN2q/5Q2/PP3PRb/6RK w - - 0 24|e4f6 h4f6 f3f6|1475|7
1r3rk1/p1p1nppp/2n1pq2/8/8/4P1P1/PRQ2PP1/4KBNR w K - 2 17|c2h7|1476|7,6
4rk2/p4q2/1p3Q1b/8/1p5N/2P1p3/P3P3/2K5 w - - 1 44|h4g6 f8g8 f6h8|1476|1,4,23
8/R3b1pp/4k3/3pPp2/5P2/5KP1/r4B1P/8 b - - 0 32|a2f2 f3f2 e7c5 f2f3 c5a7|1476|40,1,18,9
r1b2rk1/2p1qppp/2p2n2/p1b1pP2/4P3/2P1BN2/PP1N1QPP/R4R1K b - - 1 16|f6g4 e3c5 g4f2|1476|7
r1b1k1nr/pp2qpp1/2n1p2p/3pP1NQ/8/3B4/P2N1PPP/R4RK1 w kq - 2 14|g5f7 e7f7 d3g6 f7g6 h5g6|1476|22,23,9
8/2b4k/5Bp1/2pBp1Qp/qp1pP1nP/3P2P1/2P5/6K1 w - - 0 40|d5g8 h7g8 g5g6 g8f8 g6g7 f8e8 g7e7|1477|40,29,1,18,46,9
2rr2k1/3b1p2/6pp/ppqP2b1/8/1Q2N2P/PP3PP1/1BR1R1K1 b - - 1 27|c5c1 e1c1 c8c1|1477|
2r5/5k1p/p6P/P7/1Pp2N2/3p4/1P3PK1/6R1 b - - 1 34|c8g8 g2h2 g8g1 h2g1 d3d2|1477|0,1
5r1r/pppk2p1/3p4/4p3/3nP3/N5P1/PPP2P2/R1B2RK1 b - - 2 16|d4f3 g1g2 h8h2|1478|7,4
5rk1/p1N1ppb1/5n1p/2Pp4/3P4/2NBPbPp/P1Q2P2/1R3RK1 b - - 0 24|f6g4 d3h7 g8h8 f1c1 h3h2 g1f1 h2h1q|1478|0,29,46,11
2rq2k1/5rbp/p5p1/1p2pb2/7P/P1N5/1PQ1NPP1/1K1R3R w - - 0 19|d1d8 c8d8 c3e4 f5e4 c2e4|1478|12
4rrk1/p1p2q2/1p5p/4Q2N/3p1P2/4bR2/PP4PP/7K w - - 3 33|f3g3 g8h7 g3g7 h7h8 g7f7 e8e5 f7f8|1478|20,34,30,18
6k1/p1p1r1p1/1p2p1q1/6QR/3P2PP/2P2p2/PP3P2/6K1 b - - 7 31|g6b1 g1h2 b1f1|1478|1
2kr4/pp4R1/2p1p1P1/4P3/4p3/2P5/PP6/1K6 b - - 0 28|e4e3 g7h7 e3e2 h7h1 d8d1|1479|0,1,14
r2B1rk1/1pp2pp1/3p3p/p1b1p3/2b1n3/P1N4P/1PP2PPN/R2QR1K1 b - - 0 14|c5f2 g1h1 e4g3|1480|18,4
8/8/8/7r/8/6K1/4R1R1/5r1k b - - 45 63|h5g5 g3h3 f1f3 h3h4 g5g2 e2g2 h1g2|1480|29,1,30,14
1b3rk1/p5pb/2pqp2p/2p1N3/5P2/BP1PQ3/P1P3PP/5R1K b - - 0 23|d6e5 e3e5 b8e5|1480|
k4r2/pp6/2p3Q1/3p2P1/4r2P/8/PPP2q2/2KR1R2 b - - 2 30|f2e3 c1b1 f8f1 g6g8 e4e8|1480|20,1
r4kr1/1bpB3p/4pq2/8/1b2N3/5NP1/1BP1QP1P/2KR3R b - - 2 18|a8a1 b2a1 f6a1|1481|4,26,9,27
7k/3P2pp/1b6/8/4rp2/7R/PP4P1/5K2 w - - 0 46|h3b3 b6d8 b3b8|1481|1,23
r4r2/1p2Nppk/p2pb3/2n5/2P1P3/5PP1/PPB2K2/R7 w - - 0 24|a1h1 e6h3 h1h3|1482|28,4
2kr1b1r/ppp2ppp/5n2/3Pp3/1nP5/2BQ1N1P/Pq3PP1/RN2K2R w KQ - 2 13|d3f5 f6d7 c3b2|1482|
8/pp3p2/2p4k/3p1QNq/3PnP2/2P3P1/PP1br3/R4K2 w - - 4 31|f5h7|1483|6
6r1/ppp3p1/1kn2p1p/2R5/P3P3/1P1N1P2/2P4P/2K5 w - - 1 26|c5b5 b6a6 d3c5|1483|1,4
1r4k1/q4pp1/2Q5/1B1Kp1B1/1PP5/6P1/5P2/8 b - - 2 47|a7d4|1484|1,6
5r1k/p1p1qp2/5R2/2p2b2/1P6/7P/PBP3PK/3q4 w - - 0 27|f6h6 h8g8 h6h8|1484|34,35,1,4,16
5rk1/pp1Q2pp/1q2p3/3pP3/1P3N1b/Prp3P1/5PK1/5R2 w - - 0 26|f4e6 b6e6 d7e6|1484|7
8/8/8/p2Pp1k1/2Q1P3/5qPK/8/8 b - - 0 44|f3h1|1485|1,6,19
r1bQ4/1p3q1k/2p1p1p1/p2nP3/3P4/P2B2p1/5PK1/1R6 w - - 0 30|b1h1 h7g7 d8h8|1485|4
8/p2q2k1/7p/3p2p1/2PN4/1P4P1/P4K1P/4R3 w - - 0 39|e1e7 d7e7 d4f5 g7f7 f5e7|1485|40,1,18,9
r5k1/1p3pp1/p1p5/P2p1q2/3Pr1Bn/1Q2P2P/1P3PP1/2R2RK1 b - - 2 22|e4g4 h3g4 f5g4 g2g3 h4f3|1485|7
r5k1/pp3pp1/1N3n1p/2bp1B2/8/3QrP2/PP4PP/R3R1K1 b - - 0 19|e3e1|1486|34,35,7,6,13
2B1k1r1/7R/4p3/4P1p1/2p2bP1/2Bb1K1P/p7/8 w - - 0 44|c8d7 e8f8 c3b4|1486|1,4
6k1/pp4pp/2p3b1/3pR2P/8/5P2/5QP1/q5K1 w - - 1 34|e5e1 a1e1 f2e1|1486|25,1
5r2/5rkp/Q5p1/P1q1B3/4P3/3R4/3R2KP/8 b - - 0 38|c5e5 d3d7 e5e4|1486|5
8/1pQ2q2/5kp1/4p3/p4P2/7P/6PK/8 w - - 0 47|c7e5|1487|1,6,19
8/5pq1/6kp/1pQ3n1/6P1/P2R4/4rPK1/8 w - - 0 37|c5f5|1487|1,6
r5k1/2q3pp/p2pRr2/N4p2/1PB2n2/8/2P3PP/R5K1 w - - 0 26|e6e8|1487|34,35,6,13
8/6pk/8/p1p2r1p/2Bn1R2/7P/P5PK/8 w - - 1 36|c4d3 g7g6 d3f5|1487|1,23
r3r1k1/1b3pp1/pp3q1p/2pP1B2/2n1Q3/6BP/PP3PP1/R3R1K1 w - - 0 23|e4e8 a8e8 e1e8|1489|7,4,13
2r2r1k/4b3/3p3P/p2QBppP/1p6/8/PPP1Bq2/1K1R2R1 b - - 0 29|d6e5 d5e5 e7f6|1489|
r4rk1/4pp1p/p2p2N1/1p2b3/8/P1P4P/1P1N1Pb1/3R1RK1 w - - 0 22|g6e7 g8h8 g1g2|1489|48
r2qk2r/1p3pp1/p1nb1n1p/3N4/6b1/4BN2/PPP1BPPP/R2Q1RK1 b kq - 0 11|f6d5 d1d5 d6h2 f3h2 d8d5|1491|20,7
r1bq1rk1/6pn/p3p2p/1p1pP3/2pP1Qpb/2P1P3/PPBN2KP/R1B2R2 w - - 0 19|c2h7 g8h7 f4f8 d8f8 f1f8|1492|7
4k3/8/5K2/1p3P2/8/8/8/8 w - - 0 46|f6g7 e8d7 f5f6 b5b4 f6f7|1492|0,1,2
1k2r3/1p2bp2/pP4p1/n6p/4nP1P/P2BP3/KN3P2/3RR3 b - - 0 27|e4c3 a2a1 a5b3|1493|18,4
8/5pk1/1p2q2p/p2Q2p1/2p1P1P1/P1P2P2/1P4K1/8 b - - 1 41|e6d5 e4d5 g7f6 f3f4 g5f4|1494|1,19
r7/pp1Qp1B1/3b4/3k4/4q3/8/PP3PP1/5K2 w - - 5 35|d7b7 d5e6 b7e4|1494|29,1,18,21
8/6k1/N4ppp/2p5/3p4/P1P3nP/1P4P1/6K1 b - - 0 42|d4d3 g1f2 d3d2|1494|0,1,10
r2qk2r/pp2ppbp/1n1p2p1/3P4/2n5/2NBBP1P/PP3P2/R2QK2R w KQkq - 0 13|d3c4 b6c4 d1a4 d8d7 a4c4|1494|18
1n2r3/2k2pQ1/p1bp3p/1Pp3p1/8/3BqPP1/3RN2P/1R2K3 b - - 2 37|e3g1|1496|6,23
3k4/pp6/1qp5/3p1QP1/2n2B2/1P3P2/P3r2P/1KR4R b - - 0 41|c4a3 b1a1 b6d4 c1c3 d4c3|1496|15,26
r3kb1r/p4pp1/2p4p/n3p3/B2qn3/2N4P/PPPPQP1P/R1B1K2R b KQkq - 4 12|e4c3 d2c3 d4a4 e2e5 f8e7|1496|44,25
6k1/pp3pp1/2p4p/4P3/8/1Q1nq3/2R3PP/R6K b - - 1 30|d3f2 c2f2 e3b3|1496|20,1
5b1r/2QnkNpp/3p4/3Pp3/1q2P3/8/5PPP/2N2K1R b - - 0 24|b4b5 f1g1 e7f7|1496|48
2r3k1/pp2b2p/4qp2/1pn5/1B3P2/P6P/2Q3B1/3R2K1 w - - 1 28|g2d5 e6d5 d1d5|1496|23
5rr1/7p/pq1kpQ2/1p1b4/6P1/2P2P2/PP1R3P/R6K w - - 2 30|d2d5 d6d5 a1d1 d5c6 f6e6|1497|40,29,23,9
8/pp4r1/2pp4/P7/1PP1R1k1/2P5/6K1/8 b - - 0 36|g4f5 g2f3 g7g3 f3g3 f5e4|1497|29,20,34,1,30,14
8/6Rp/3N3k/3p1p2/8/4PKP1/r4P1P/5r2 w - - 5 40|d6f5 h6h5 g3g4|1498|1,4
2kr3r/Qpp3pp/6n1/nq1Pp1p1/4B1P1/B1P4P/1P6/2KbR3 w - - 0 25|e4f5 d8d7 a7a8|1498|4,23
8/1kp5/p6R/5p2/1Pr4p/P2KBP1P/1b4P1/8 b - - 2 40|c4c3 d3d2 c3e3|1498|1
rnb1k1r1/pp1pbpQp/2p4n/8/1qB1P3/2N5/PB3PPP/1R2K1NR w Kq - 1 11|c4f7 h6f7 g7g8|1498|22,29,18
rnbq3r/pp3kpp/2p2n2/2Q1p3/4N3/8/PPPP1PPP/R1B1K1NR b KQ - 0 8|f6e4 c5c4 d8d5 c4d5 c6d5|1499|5
2kr3r/ppp2pp1/8/2b1p1Pp/6nP/1NP1p2R/PPq1Q1P1/R1B1K1N1 b Q - 6 17|d8d1 e2d1 c2f2|1500|4,9
1r3r1k/p2n1pp1/2p1p3/2PpP3/q2P1PP1/PN1Q4/1n2NK2/1R6 w - - 0 26|b1h1 h8g8 d3h7|1500|4
4r3/6P1/p2B4/8/P3p3/1kp1K3/8/8 w - - 0 46|d6f8 b3b2 g7g8q|1500|0,1,11,12
2r2rk1/1p3p1p/p2Q2p1/P2P4/4Pn2/1R5b/5P1P/4R1KB b - - 0 31|f4e2 e1e2 c8c1 e2e1 c1e1|1501|7,15,13,9
8/3k4/5R1N/4pN2/4Pn2/5P1P/4br2/7K b - - 0 54|e2f3 h1g1 f4h3|1502|1,4
R1r3k1/2B2ppp/2Q1pq2/2Pp4/2b5/2P5/1r3PPP/5RK1 b - - 5 24|f6f2 f1f2 b2b1 f2f1 b1f1|1502|7,15,9
r1r3k1/2q2pbp/b3p2B/p2pP1Q1/6N1/3n1NP1/P1p1RPB1/R5K1 b - - 1 26|c2c1q a1c1 c7c1 g1h2 c1g5|1502|0,11
r2q1r1k/pp3pnp/5b2/2p5/3pB3/P2P3P/1PPQ4/2K1R1R1 w - - 2 26|d2h6 f6g5 g1g5 d8g5 h6g5|1502|
8/8/3k4/pp1P2P1/4p3/1P2P3/3K4/8 b - - 3 67|d6d5 g5g6 d5e6 g6g7 e6f7 g7g8q f7g8|1503|1,2
3r2k1/p5p1/4p1Q1/1p2Pr1p/8/2R5/P1P2qPP/6RK b - - 0 28|f2g1 h1g1 d8d1|1505|40,1,4,9
8/7p/4pQp1/3pP3/3P1Pk1/3P4/7P/1r1q1NK1 w - - 8 40|f6g5 g4f3 g5g3 f3e2 g3e3|1506|1,15
rn1qr1k1/pp1b1ppp/6n1/1B1p4/3N4/B1P5/P1P1QPPP/R3R1K1 w - - 5 13|e2e8 d7e8 e1e8 d8e8 b5e8|1507|18
2kr3r/p2p2b1/1p2pqp1/1nn3N1/5P2/2NP3P/PPPB2Q1/2KR4 w - - 4 21|g2a8 c8c7 c3b5|1508|4,26
7k/6p1/R6p/2P2K2/2rp4/8/P7/8 w - - 0 44|f5g6 c4c5 a6a8 c5c8 a8c8|1508|1,15,14
2r5/3k2p1/2p4p/2Rr4/5PK1/6P1/7P/2R5 w - - 7 42|c5d5 c6d5 c1c8 d7c8 g4f5 d5d4 f5e4|1508|20,1,14
r3kb1r/1n2pppp/B1pp4/q2n4/Q2P4/2P1P3/P4PPP/2B1K1NR w Kkq - 2 13|a4c6 e8d8 a6b7 d5c7 b7a8|1508|18
3r1rk1/pp2p1bp/2p3p1/4Q3/1P6/P3B3/6PP/3R1RK1 b - - 0 22|f8f1 d1f1 g7e5|1509|48
8/6p1/7P/p1pB1P2/2P4P/5nk1/2r5/1R3K2 b - - 2 41|c2f2|1510|1,6,54
5r1k/pp4b1/2p4p/6p1/3PQ3/2P4q/PP3P2/3R1RK1 b - - 1 26|f8f4 e4f4 g5f4|1510|1
rnb3k1/p1p3pp/1q3n2/4Q3/2P5/3P4/PP3RPP/R1B3K1 b - - 4 15|b6f2 g1f2 f6g4 f2g3 g4e5|1511|40,18,9
r3r1k1/p1n2p1p/3q1pp1/2pP4/2B2QP1/2N5/PP6/2K2R1R b - - 0 25|e8e1 c1c2 d6f4 f1f4 e1h1|1511|48
r6r/1bpnk3/p2pp1p1/1p2b3/1P2P2p/P1NP1RN1/1PQ3PK/5R2 b - - 1 24|h4g3 h2g1 e5d4|1511|34,35
6k1/2prrpp1/1pP1p2b/p6p/3PR1PP/8/PP6/5R1K w - - 0 34|c6d7 e7d7 g4g5 h6g5 h4g5|1511|0,1,47
r5k1/3q1p2/p1Np2N1/1p4P1/2r5/1Q5P/Pb6/5R1K w - - 1 29|c6e7 d7e7 g6e7|1511|
r3kb1r/1b1p2pp/p4p2/1p6/4qQ2/1B6/PP3PPP/R1B2RK1 w kq - 0 17|f4e4 b7e4 f1e1|1511|23
3rk2r/1Bq2p2/p3pQ2/Pp2n3/8/1NN1b3/1PP2BP1/R4RK1 b k - 0 30|e5f3 g2f3 c7h2|1512|31,7,4,9
r4rk1/4bppp/p3q3/1p1N1R1Q/5B2/8/PP5P/R6K b - - 1 24|e6e4 h1g1 e7c5 f4e3 c5e3 d5e3 e4e3|1512|
8/5p2/6k1/p2Rp2r/6K1/Pr4P1/1P3P2/4R3 b - - 0 45|f7f5|1513|1,6,14
8/p2r1kp1/1p2b3/n3P3/5BP1/P2BK2P/8/5R2 b - - 4 38|d7d3 e3d3 e6c4 d3e4 c4f1|1513|40,1,30,9,21
7k/6p1/2Qpq1np/3Np1n1/1P2P3/5P1P/5P2/2R3K1 b - - 2 28|g5f3 g1f1 e6h3 f1e2 f3d4|1514|1
8/7p/8/6PP/6k1/4n3/8/6K1 w - - 1 63|g5g6 h7g6 h5h6 e3d5 h6h7|1515|0,1,10
7k/R7/8/1p4KP/p4p2/1r3P2/8/8 w - - 7 44|g5g6 b3c3 a7a8 c3c8 a8c8|1516|1,30,15,14
r1b2rk1/5pp1/p5qp/1p1PnN1N/2p1Pb2/8/PPB1Q1PP/R5K1 w - - 0 25|f5e7 g8h8 e7g6 f7g6 h5f4|1517|18
rn3rk1/1b1p1ppp/p2PpN2/1pP5/1P1n1P2/P2B1QPq/7P/R1B1K2R b KQ - 4 19|g7f6 f3b7 b8c6|1517|
8/ppp5/3q2pk/5p2/7P/1PQ2P2/P3nP2/5K2 w - - 0 31|c3h8|1518|1,6
r1b2rk1/ppq2n1p/4pppQ/1P1p4/5B1P/3B4/2P2PP1/R3R1K1 w - - 2 19|h6f8 g8f8 f4c7|1518|
2rq1rk1/1p1nbppp/p2p1B2/4p3/4PP2/1NN4P/PPP1b1P1/R2Q1R1K w - - 0 14|f6e7 e2d1 e7d8|1518|
4r1k1/5p2/b1p1q2p/p2rB1p1/P3QP2/2P1R3/2P3PP/R5K1 b - f3 0 22|g5f4 e4f4 d5e5 e3e5 e6e5|1519|
6k1/p4p2/1p1q2p1/1P2n2p/P2N4/2Q3PP/5P1K/8 b - - 1 34|d6d4 c3d4 e5f3 h2g2 f3d4|1520|40,1,18,9
r2q1rk1/1p2b1pp/p7/4Pb2/P3Q3/3R4/1P3PPP/R1B3K1 w - - 1 19|e4c4 g8h8 d3d8|1520|
8/6p1/4p3/2K1p3/1P5p/7P/4kPP1/8 b - - 2 36|e2f2 b4b5 e5e4 b5b6 e4e3 b6b7 e3e2|1521|0,1,2,12
5r1k/7p/8/3ppp2/8/6P1/1PK2P1P/q2Q1B1R b - - 1 25|f8c8 c2d2 a1b2|1521|29,1
r3qrk1/pbB1b2p/1p2p1p1/8/3P4/2PB4/P1Q2PPP/R3R1K1 b - - 0 17|e8c6 d3e4 c6c7 e4b7 c7b7|1521|
r1b1k1nr/pppp2pp/2n5/2b1pp2/2P1P3/2NK1P1P/PP1P1qP1/R1BQ1BNR b kq - 4 7|c6b4|1523|6
8/2Nn2pk/3P3p/8/pp6/8/P3K1PP/8 b - - 1 39|b4b3 a2b3 a4a3 c7e6 a3a2|1523|0,1,10
r7/4k2p/1p1b1nr1/3P4/1PP1p2R/p1B1P3/6PP/5RK1 w - - 2 30|c3f6 g6f6 h4h7|1524|
8/1R5R/4kpp1/4p3/4P2K/5P1P/7r/6r1 w - - 11 41|b7b6|1525|1,6,14
7r/2Q2pk1/2p5/1p1p2P1/3P4/PP2P1Pq/3R4/2R3K1 b - - 2 34|h3h1 g1f2 h8h2|1525|1,4
2k4r/1p6/p1p1pp2/P1Pn4/4r1pq/8/1R1Q2R1/2B2NK1 w - - 6 38|g2h2 h4h2 f1h2|1525|
r4rk1/4Qp2/3p2p1/3P2Pp/2nB3P/1N6/qPP5/2KR1R2 b - - 2 32|a2a1 b3a1 a8a1|1526|4,26,9
4R3/pp3ppk/7p/1qpQ3b/5B2/8/PPP2PP1/2K5 b - - 0 24|b5f1 c1d2 f1d1 d2c3 d1d5|1527|1,21
r1bqk2r/pp1nBppp/2p1p3/4N3/3P4/2n5/PPP1QPPP/2KR1B1R w kq - 0 11|e7d8 c3e2 f1e2|1528|
r2qr1k1/pbp2ppp/1pnp1n2/8/2P1PBP1/2PP1N1P/P5B1/1R1QK2R b K - 3 12|f6e4 d3e4 e8e4 e1f2 e4f4|1528|30,18
1r1q1rk1/1bn1b2p/pN3ppP/P3p3/1p1p3Q/3P2PB/1PPB1P2/R3R1K1 b - - 7 22|f6f5 h4e7 d8e7|1529|12,47
8/1p6/3k2p1/3P1p1p/1Kr1p2P/P5P1/5P2/8 w - - 0 45|b4c4 b7b6 a3a4|1529|25,1
3r2k1/pR3pp1/8/5p1p/5q2/5n2/PP4R1/6QK w - - 0 30|g2g7 g8h8 g7h7 h8h7 b7f7 h7h8 g1g7|1530|40,1,46,9
8/Q2R1pk1/5qpp/8/8/6P1/P3rP2/6K1 b - - 2 35|e2e1 g1g2 f6c6|1530|1
rn1qkbnr/1b2pppp/p7/1N6/2pP4/4PN2/1P3PPP/R1BQKB1R b KQkq - 0 8|a6b5 a1a8 b7a8|1530|5
8/6p1/8/7R/8/5pkP/8/4n1K1 b - - 0 47|f3f2 g1f1 e1f3|1530|0,25,1
2k1Q3/ppp2Np1/5n1p/2qr4/8/P6P/1PP2PP1/4R1K1 b - - 2 22|f6e8 e1e8 c8d7|1531|1
1kr4r/1p1b1Q1N/4p1B1/pPnp3p/P2q3P/6P1/2P2P2/R3R1K1 b - - 0 26|d7e8 f7e7 e8g6|1532|21
8/5Rpk/5Qp1/p7/4q1P1/P4R1P/1P3K2/2r5 b - - 0 35|e4e1 f2g2 e1g1|1533|1,4
5k2/1p6/p4pQ1/4pBp1/PP1bP3/1K3P2/2P3P1/7q b - - 4 36|h1b1 b3c4 b1c2 c4d5 c2c6|1533|29,1,15
5r1k/1p5p/p1b3q1/2B2pb1/5n2/1BP2P1P/PP2Q1P1/3R2K1 w - - 1 32|e2e5 g6g7 e5g7|1534|7
r2q1rk1/1p2pp2/1n1p2pp/1PpP4/2P5/3BQN1P/p4PP1/R5K1 w - - 1 23|e3h6 e7e5 f3g5 d8g5 h6g5|1534|
4Q3/6bk/3pb3/2n1p1pB/1pP2p2/1P3N1P/5qP1/7K w - - 14 41|f3g5 h7h6 e8g6|1535|4
6k1/5p2/p4qp1/2PQ3p/2Rnr3/5p1P/P4PP1/5RK1 b - - 3 32|d4e2 g1h1 f3g2 h1g2 e2f4|1535|0,40,1
5rk1/p4ppp/1p5b/5Q2/P1B1P3/1P6/2q3rP/3R1R1K w - - 0 31|f5f7 f8f7 d1d8|1537|4,23,9
rN1r2k1/pp3p1p/2p1b1p1/8/2P5/1Pb3P1/P3PPBP/R1B2RK1 b - - 0 13|c3a1 b8c6 b7c6|1537|5,47
1q6/R2b1rbk/3p1r1p/1ppPp1p1/6N1/2P3BP/1P2QPP1/R5K1 b - - 7 31|d7g4 h3g4 f7a7|1538|20
r4rk1/p4ppp/2pqp1b1/3p4/3P1N2/6Q1/PPP2PPP/2R2RK1 w - - 4 17|f4g6 d6g3 g6e7|1539|7,9
6k1/p4p2/2p5/1pP5/3Q3p/7P/PP2r1q1/K2R4 w - - 6 40|d1g1 g2g1 d4g1|1539|1,23
r5k1/pp1b2p1/1q2p2p/3pP3/6P1/2N1n3/PP3Q1P/1B3RK1 w - - 0 21|f2f7 g8h8 f7f8 a8f8 f1f8|1541|18,15,13,9
1kq4r/p1n1R3/1pQp3r/2p5/8/P1N2NP1/1PP2P2/3R2K1 b - - 0 32|h6h1 g1g2 c8h3|1542|7,4,51
5r1k/pp4R1/4p2p/3p3P/1P1q1rR1/P5Q1/4KP2/8 w - - 0 29|g7g8 f8g8 g4g8 h8h7 g3g6|1542|1,30,15,51
8/3K4/B4k2/8/1P4p1/5p2/P7/8 b - - 0 46|g4g3 b4b5 g3g2 b5b6 g2g1q|1542|0,8,1,11
r4r1k/ppp3pp/2n5/3Q2N1/3b1P2/1B4P1/PPPBq2P/R4b1K w - - 0 20|d5g8 f8g8 g5f7|1543|7,4,9,38
6k1/6p1/2R2pQp/1p2pP2/1P2P2P/5qP1/4n2K/8 b - - 4 41|f3f2 h2h3 e2g1 h3g4 f2e2|1543|1,15
r1b1k2r/pppp1ppp/7n/4P3/8/2Q5/P1P1KPPP/RNq2B1R w kq - 4 12|b1d2 c1a1 c3a1|1543|12,47
4r1k1/4rpp1/pqp3np/R2p1b2/3P4/3N2P1/3QNPBP/4RK2 b - - 0 27|f5d3 d2d3 b6a5|1543|
8/1R4p1/5p1p/2k2K2/2r2N2/6Pn/5r2/4R3 w - - 8 55|b7c7 c5b5 e1b1 c4b4 c7b7|1543|1
2r4r/3b1k2/2p2N2/1p1q2p1/1P1P4/P1QBPpP1/1B5P/2R3K1 b - - 0 41|f3f2 g1f2 h8h2|1544|0,40,29,7
4Q3/pb2rrpk/7B/5B2/1P2q3/P5R1/5PPP/5RK1 b - - 0 37|e4f5 e8e7 f7e7|1544|5
6k1/5ppp/1p1N4/4Pb2/Q2P4/P7/1P3PPq/2r1NK2 b - - 2 32|f5d3|1545|1,6,23
8/3krpRQ/r3pp2/p2p4/2pP1P2/2P1P3/3q2PP/5RK1 w - - 2 27|g7f7 d2e3 g1h1 e7f7 h7f7|1545|1
r5k1/p5pp/b1B5/n1b5/3Q4/8/PPP2rPP/RNB2RK1 b - - 0 17|f2f1|1546|7,6,16,23
8/8/8/1p2k3/P1K5/8/8/8 w - - 0 57|c4b5 e5d6 b5b6 d6d7 b6b7|1546|25,1,2
6k1/p1p1qp2/7p/3p1Qp1/2pR4/4rPBP/PrP3P1/4RK2 b - - 2 25|e3e1 g3e1 b2b1 d4e4 d5e4|1546|
r4rk1/1p1b2pp/p1p1p1n1/2PpPpq1/3P4/1P1QR3/P4PPP/2B1RNK1 b - - 1 23|g6f4 e3g3 f4d3 c1g5 d3e1|1546|
4k1b1/6P1/6K1/5P2/8/8/8/8 w - - 3 59|f5f6 g8d5 g6h7|1548|8,25,1,24
3r1rk1/ppp2ppp/4b3/4P3/1PP1P1Pq/P6P/2QNB3/R4RK1 b - - 0 20|h4g3 g1h1 g3h3|1548|7
1r1r2k1/5pp1/6qp/p1pp4/4n3/P1P1PN2/1PQ2PPP/3RR2K b - - 9 24|e4g3 h2g3 g6c2|1548|20
8/1r4p1/p2k1p1p/Prp5/2KpPP1P/RR1P2P1/8/8 b - - 0 44|b5b4 b3b4 b7b4|1549|55,1,4,14
r2q1rk1/pp1b1pbp/3pp1pB/2p2P2/2B1P2Q/2NP1N2/PPn3PP/1R3RK1 b - - 0 12|d8h4 f3h4 g7h6|1549|44,48
2b2rk1/p4pp1/1b1Bpq1p/3p4/1p6/1B1R2P1/P1P1QP1P/2K4R b - - 1 22|f6a1 c1d2 a1h1 d6f8 g8f8|1549|21
r5kr/pppR2n1/4B1pp/2Q1P3/1B2q3/4n3/PP4PP/5RK1 b - - 0 23|g7e6 d7g7 e6g7|1550|5
3r2k1/pp3np1/2qp1p1p/2pNrR2/P3P3/1P6/2K1Q1PP/R7 w - - 1 27|f5e5 f7e5 d5e7 g8h7 e7c6|1550|18
3rr3/p4p2/1p6/1Pp3kp/P3q3/2Q1N1PK/5P2/8 w - - 0 35|c3g7 e4g6 f2f4|1551|1,4
3r4/p3k1pp/2p2p2/1p6/1P2PP2/PBpR3P/2P3P1/3n2K1 b - - 4 25|d8d3 c2d3 d1e3 g1f2 c3c2 b3c2 e3c2|1551|0,1
r1r3k1/4pp1p/3p2p1/8/q2RPP2/1N6/1PP2QPP/1K3R2 b - - 0 26|a4a2 b1c1 a2b3|1551|23,26
1b5k/pb4p1/1p2Q2p/2p3P1/2P4P/3p1N2/Pq2BK2/8 w - - 2 41|e6e8 h8h7 g5g6|1552|1,18,4
8/1p1r4/2p5/P2r1k2/4p2R/3PR3/4K3/8 w - - 2 56|d3e4 f5g5 e4d5 g5h4 d5c6|1552|1,18,14
r1bq2k1/pppp1pp1/5n1p/3N4/2P1r2B/3Q4/PP3PPP/R3K2R w KQ - 0 14|d3e4 f6e4 h4d8|1553|
1k2r3/pp1bQ3/1q6/5p1p/3b3P/B7/P2N2P1/n1R4K w - - 7 27|a3d6 b6d6 e7d6|1553|26
2r4k/p5pp/8/2pQ1p2/2N1N1bq/1P2P3/P4P2/2R2RK1 b - - 0 36|g4f3 e4g3 f3d5|1554|
1kr5/1p2qp1p/Q2b1p2/P2P4/8/6P1/5PBP/1R4K1 b - - 0 30|c8c1 b1c1 b7a6|1554|1
8/2kb4/p7/1p1pN1p1/2pPrp2/2P2PP1/PP6/4RK2 b - - 0 33|d7h3 f1f2 f4g3 f2g3 e4e1|1555|1,30
r1b1k1r1/1p3p1Q/p3p3/2b5/P1Bq1Bn1/2N5/1P4PP/3R1R1K b q - 0 21|d4g1 f1g1 g4f2|1556|7,4,9,38
8/8/1Pk4n/K7/8/8/P7/8 w - - 1 51|a5a6 h6f5 b6b7 c6c7 a6a7|1556|0,25,1,10
r5k1/pp5p/1bp3p1/4p1B1/2n1B3/2P3P1/P4r1P/1R1R2K1 w - - 0 26|b1b6 a7b6 g1f2|1556|
1r6/2k2ppp/2p1p1n1/pq1pP3/3P2P1/PP1N4/2Q2PKP/1R6 b - - 8 26|b5d3 c2d3 g6f4 g2f3 f4d3|1556|40,1,18,9
1r4rk/n4p2/p2p4/1p4B1/1PP2PQK/P2q4/7P/8 w - - 2 36|g5f6 g8g7 g4g7|1557|1,4
3r2k1/5pp1/4p2p/1PQ5/5n2/1P1p2P1/5P1P/4K3 b - - 0 30|d3d2 e1d1 f4d3 d1d2 d3c5|1557|0,20,34,1
2k2b1r/pp3ppp/8/BN2p1P1/2n1Nn1P/8/PP3P2/2KR4 w - - 0 25|d1d8|1558|6,16
r2qkb1Q/pp1npp1p/2p3pB/3n4/2b1N3/8/PP3PPP/R3R1K1 w q - 0 15|e4d6|1558|6,23,38
r1n1kr2/pbpq2p1/1pn1p2p/3pP3/3P4/B1PB4/P1P3PP/R4RK1 w q - 0 16|f1f8|1558|6,16
7k/3b2pP/5pP1/3p1P2/p1pP4/q3P1Q1/2P1B3/3K4 b - - 4 37|a3a1 d1d2 c4c3 d2d3 d7b5|1558|1,15
8/6pp/k4p2/4n3/P3PB2/2K3P1/8/8 w - - 3 42|f4e5 f6e5 c3c4 h7h5 c4d5|1558|1
rn2N1k1/1b6/1p1pN2p/p1bp4/2P2PP1/1B6/PP5P/R1B2R1K b - - 0 24|d5c4 f1f3 b7f3|1559|20,43,7,4
4r2k/p5p1/1p3pbp/3rq3/3pP3/1P1B2P1/P2R1Q1P/4R1K1 w - - 0 32|e4d5 e5e1 f2e1 e8e1 g1f2 e1e5 d3g6|1559|
2k4r/Qpp2p1p/2q1b1p1/8/2P5/2P1B3/P4PPP/3rR1K1 w - - 0 22|a7a8 c8d7 e1d1|1560|48
r6r/kp5p/p2p1q2/3P1b2/1R4Q1/3P3P/PP4P1/2R3K1 w - - 2 23|b4b7 a7b7 g4b4 b7a7 c1c7|1561|40,33,15,9
2r3k1/2B1bppp/1Q6/3pPb2/1P2n3/2PqPN2/P4PPP/RN2K2R b KQ - 0 20|e4c3 b1c3 d3c3 f3d2 c3a1|1561|18
8/p7/4k3/2p1p1P1/1P1pP2B/P4K2/b7/8 b - - 0 55|c5c4 g5g6 c4c3|1562|8,1,12
8/6pk/R1b4p/4pp2/7P/1B4P1/PP1r1P2/5K2 b - - 0 34|c6b5 f1e1 d2e2 e1d1 b5a6|1562|1,18
r6k/3R3p/8/4p3/1pP1Pp2/rP1B1P2/6P1/1K1Q4 b - - 0 33|a3a1 b1c2 a8a2|1563|1,4
r4rk1/p1b2pp1/2b3Bp/2p1qN2/3p2Q1/3P4/P1PB2PP/1R3RK1 b - - 0 23|e5h2 g1f2 f7g6|1563|48
5r2/3n4/1p3qkp/8/1PP3P1/4Q2P/8/4R1K1 w - - 1 37|e3d3 g6g7 d3d7|1563|1,18
rn1q3r/ppp2pkB/1b2b1p1/3nP3/3P3Q/P1N5/1PP3PP/R1B1K2R w KQ - 0 15|h4h6|1563|
r6k/1pq3pp/p1n5/4Np2/7Q/1B6/PP3PPP/3b2K1 w - - 0 24|e5g6|1564|6,23
7k/5p1p/p1p5/4pq1r/2B1p3/2P1R1P1/Pr3PQ1/4RK2 b - - 4 32|h5h1 g2h1 f5f2|1564|29,4,9
r5k1/1ppq2bp/p2pbBp1/8/4P3/P1NP4/1PP2QPP/R5K1 b - - 0 17|a8f8 e4e5 d6e5|1564|
8/pkp5/1p2P1Q1/2b3p1/5q2/2NK4/PPP3PP/8 b - - 4 39|f4e3 d3c4 e3d4 c4b3 d4b4|1565|1,30,15
5r1k/1q5p/5n2/8/2P4Q/1P6/K1B5/6R1 b - - 0 41|b7a7 a2b2 a7g1|1565|1,18
r2q1r1k/pp2b1pp/8/2p1Np2/2BpP3/P2P4/2P2PK1/R1Bb3R w - - 0 18|e5g6|1566|6,23
8/3k4/2p3p1/N1P2p1p/1p1PnP1P/6P1/6K1/8 b - - 4 46|e4d2 g2f2 b4b3 a5b3 d2b3|1566|1,10,12
5rk1/1pq3p1/p3RnQp/2b5/8/2P5/PPBr1PPP/4R1K1 w - - 7 23|e6f6 d2c2 f6f8 c5f8 g6c2|1567|7,23
2kr3r/1bpp3p/p3pqp1/1p1P1n2/3n4/1BNQ1N2/PPP2PPP/2KR3R w - - 3 17|f3d4 f6d4 d3d4 f5d4 d1d4|1568|
5r2/p2q4/6k1/P2pP3/2pPp1pp/2P1B1Q1/8/1R3RK1 b - - 0 41|f8f1 b1f1 h4g3|1568|1,48
1B4k1/1p4p1/2r1p2p/1p2P3/4QPPn/4P3/3q4/R4RK1 b - - 0 31|c6c2 e4c2 d2c2|1568|12
2r2rk1/1p3ppp/pB1P2q1/3Pp3/1P1n4/P6P/5PP1/2RQ1RK1 b - - 0 24|c8c1 d1c1 d4e2 g1h2 e2c1|1569|40,18
rnbqkbnr/p1p2ppp/1p6/3PP3/8/8/PPPP2PP/RNBQKBNR b KQkq - 0 4|d8h4 g2g3 h4e4 d1e2 e4h1 e2g2 h1g2|1569|18
r4r1k/pQ4pp/8/P7/1P4Nn/2P3Nb/4Bq1P/R3R2K b - - 2 24|h3g2 b7g2 f2g2|1570|18,4
5k2/3Q1p2/4n2p/1p4p1/3q4/6BP/2r2PP1/4R1K1 w - - 2 30|g3d6 f8g7 d6e5 d4e5 e1e5|1570|1,18
3r1r1k/1p3p1P/2pp3Q/p3pN2/2B1P3/P2P1n1p/KPP2P2/6q1 w - - 2 27|h6f6 h8h7 f6h6 h7g8 f5e7|1572|30,7,15
4r1k1/p7/1qp2r1p/6p1/3P4/2P3pb/PP2QP1P/4R1K1 w - - 0 28|e2e8 f6f8 e8g6 g8h8 g6h6|1572|1,30
4r1k1/p1p2p1p/3b2p1/5b2/5P2/1Pq1B2P/P4QP1/R3R1K1 b - - 1 22|e8e3 f2e3 d6c5 e3c5 c3c5|1572|23,9
6k1/6p1/p2N3p/2P5/3P1p2/1P1b1qP1/P4P1K/6Q1 b - - 0 40|f3h5 h2g2 f4f3|1573|1,4
1k2r3/p1p5/8/3P4/2NKP3/1p6/2b4P/2R5 b - - 1 44|e8e4 d4c3 e4c4 c3c4 b3b2 c1c2 b2b1q|1573|0,1,11
r4b1r/p1k1p1p1/2p5/2p1P2p/1q2QB2/3P4/P1n3PP/R4RK1 w - - 2 22|e5e6 c7d8 e4c6 b4d4 g1h1|1573|25,29,20,34
2r1r1k1/1q3pbp/p4pp1/1p1Np3/8/1Q1R1P2/PPP2P1P/3R2K1 w - - 6 20|d5f6 g7f6 d3d7 b7d7 d1d7|1573|31,7,9
1r3rk1/4bpp1/3q3p/p1p5/PpPp4/1P4N1/2PQ2PP/4RRK1 w - - 0 24|g3f5 e7g5 d2g5 h6g5 f5d6|1573|
8/8/8/8/3p4/3k1P2/8/2K5 b - - 1 62|d3e2 c1c2 d4d3|1574|1,2
2k3r1/R2nnp2/4p3/3pq3/8/P2Q4/2PBNPrP/4K2R b K - 2 18|g2g1 h1g1 g8g1|1576|4,23
2r3k1/R4pp1/1p1p1b1p/1B1rpq2/P7/1P6/4QPPP/5RK1 w - - 0 22|b5d7 f5d3 e2d3|1576|18
r1b2rk1/pp3pbp/2p2np1/3q2B1/2QPN3/5N2/PP3PPP/R4RK1 w - - 2 14|e4f6 g7f6 c4d5 c6d5 g5f6|1578|18
2kr4/pppn1Rp1/3p4/3P4/3Pp1Br/4q3/PPP1Q1PP/R6K b - - 3 17|h4h2 h1h2 d8h8|1579|40,7,9
8/6bp/2k3p1/1p2p1n1/1P2PP2/N3KP2/P6P/B7 b - - 0 38|e5f4 e3f4 g5e6 f4g3 g7a1|1579|40,1
2r3rk/pp1q1p1p/8/3N1p2/4p2Q/1B6/Pb3PPP/3R2K1 w - - 2 24|d5f6 d7d1 b3d1 b2f6 h4f6|1580|18
r2q3r/1pp1bp2/p2p3k/6pn/P1P1P1PQ/2N1B2P/1PP5/R5K1 w - - 1 20|h4h5 h6g7 e3d4 f7f6 h5g5|1581|23
r6r/2pqkp2/3p1pnp/p1bPp3/4P3/2P2QP1/NPKRNP1P/1R6 b - - 3 20|d7a4 b2b3 a4a2 b1b2 a2a3|1581|18
4r1kb/1b2pp1p/p5pB/1p1N2Q1/8/P7/1Pq2PPP/3R2K1 w - - 3 25|d5e7 e8e7 d1d8 e7e8 d8e8|1582|7,15,13,9
rn1q1r1k/pbp2ppB/1p2p3/2n1P3/2P2B2/2P2P2/P1Q3PP/3RK1NR b K - 2 13|d8h4 f4g3 h4h7|1582|18
r4rk1/pp3p1p/2n2p2/8/1q3Pb1/5N1P/PP1QBPP1/R4RK1 b - - 0 15|b4d2 f3d2 g4e2|1582|44
5rk1/2p4p/1p1pN1p1/3Pp3/2P1R3/3Q4/r4qPP/6RK b - - 3 27|f2g1 h1g1 a2a1 e4e1 a1e1 d3f1 e1f1|1583|40,46,9
2Q5/5pk1/4r1p1/1p3q1p/pP3P2/P3P2P/2pr2P1/4RRK1 w - - 0 38|c8c3 f5f6 c3d2|1583|1,18
1r3rk1/p1pq2pp/2p2P2/3p4/1P1P1Qb1/P4N2/5PPP/R4RK1 b - - 0 17|f8f6 f3e5 f6f4 e5d7 g4d7|1584|
4rR2/3NP1kp/2p3p1/5p2/8/2rp3P/5PP1/4R1K1 b - - 3 34|d3d2 e1d1 c3c1 g1h2 c1d1|1584|0,1,23
r1b2rk1/ppp2p2/4p1pQ/3pP2P/3Pn3/2P1P3/PPKNq3/R7 w - - 0 19|h5g6 e2d2 c2b3 d2h2 h6h2|1585|9
5k1r/Q5p1/2p1q2p/5n2/3P3N/7K/P4PPP/1R5R b - - 2 31|f5e3 h4f5 e6f5 h3g3 f5g4|1586|20,34,30,15
8/1p2k3/3p2p1/p1pP3p/P1P2K1P/8/1P4P1/8 w - - 2 31|f4g5 e7f7 g5h6|1586|1,2
r7/bp6/4kNQ1/1b2Pp1p/p2R1P1N/P1q5/5KPP/7R b - - 6 31|a7d4|1588|5,6
rnb1k2r/ppp2ppp/8/2qP4/3Pp1n1/2N3N1/PPP3PP/R1BQ1BKR b kq d3 0 10|e4d3 c1e3 c5e3|1588|20,56,7,4
1k2r3/2p5/pp2R3/3P1P2/2P3p1/P7/KP2p3/4R1rB b - - 4 40|e8e6 e1g1 e2e1q d5e6 e1g1|1588|0,1,11
1k1r3r/1p4p1/p4pp1/8/8/1P2P2B/P2q1QPP/2R3K1 w - - 0 25|c1c8 d8c8 f2d2|1588|29,1
r2qr3/1p1b1pk1/p2p2pp/3n1P2/3N4/1PQ5/1P4PP/R3R1K1 w - - 0 28|d4e6 g7g8 c3g7|1589|34,35,4
6k1/1pp3p1/p2p1r2/2PPp1q1/1P2Pr1p/2B1R1pP/P3Q1P1/2R3K1 b - - 3 31|f4f2 c3d2 f2e2|1589|
2k5/1p2r1rp/p1n2N2/7R/3p4/4pP2/PPP1K1PR/8 b - - 1 29|d4d3 e2d3 e3e2|1589|0,1
2r2rk1/4ppbp/3p2p1/1bqR2B1/1p2PP2/1B5P/1PP1Q1PK/5R2 w - - 1 21|e2b5 c5b5 d5b5|1589|27
r4rk1/p4pp1/1pn1p1p1/2qpPn2/6N1/5N1P/P4PP1/1R1Q1RK1 w - - 4 18|b1c1 c5a5 c1c6|1590|21
3Q4/3bBp1k/2p3p1/1p3q2/p2P4/7P/2P3P1/6K1 w - - 5 40|e7f6 f5f6 d8f6|1590|1,12
r4rk1/p4ppp/2p1p3/2b1qn2/2PpN3/5Q2/PP3PPP/R1BR2K1 w - - 0 17|c1f4 f5h4 f4e5 h4f3 g2f3|1590|47
2r5/p3k2p/3R2p1/2P5/2pKP3/7P/P5P1/8 b - - 2 32|c4c3 d4c3 c8c5 c3b3 e7d6|1590|40,29,1,14
r5k1/2p2pp1/p2p3p/1p2p3/3PP2q/2PK1PnP/PP6/R2QnN2 w - - 0 24|d1e1 g3f5 e4f5|1592|
8/6K1/3kp1RP/1p1p4/3P4/6P1/8/3b1r2 w - - 1 45|h6h7 f1h1 g6h6 h1h6 g7h6|1592|0,31,1
r2q1r2/1p5k/1npNQ1pp/pb6/3p4/6P1/PP2PPBP/R3R1K1 b - - 9 23|f8f6 e6f6 d8f6|1593|
r3rk2/1pp2p2/1b1p1p2/1p1N4/1P1PP2n/P4P1q/3QNR2/R5K1 w - - 4 27|d2h6 f8g8 d5f6|1594|4
8/6k1/p3p1bp/1p1pP3/3P2PK/8/PP6/1B6 w - - 1 38|b1g6 g7g6 b2b4|1594|8,25,1,24
2r2k2/5p2/3p2p1/2rP4/p1P1P1Qp/Ppq1N2P/1P4P1/7K w - - 0 55|b2c3 b3b2 g4d1|1594|1,5
8/pp6/6r1/4P2Q/2NPq3/1P1k4/P6K/8 w - - 14 47|h5d1 d3c3 d1d2|1595|1,4
8/5pk1/R1Rp2p1/2bPp1P1/2P1PnBP/2K5/1r3P2/8 b - - 20 47|c5d4|1597|1,6
6r1/6p1/r3pnP1/3p3R/1ppP2k1/7R/PP2N1P1/1K6 w - - 16 38|h3h4|1597|45,1,6
3r1k2/1p3rp1/2pq1p1p/p3pP2/P1PPQ2P/4P3/1P4K1/3RR3 w - - 3 34|d4e5 d6d1 e1d1|1597|1
3r4/Np2kp2/6p1/2P1P1p1/1P6/1b5P/1P3PP1/2K4R b - - 0 22|d8a8 c1d2 a8a7|1597|1
5rk1/3Q1ppp/3p1b2/8/3qPp2/1B3P2/P7/1KR5 w - - 6 39|d7f7 f8f7 c1c8 f6d8 c8d8|1598|1,15,23,9
r1b3k1/ppq2ppp/3p1n2/1Bp5/8/2N5/PP1Q1PPP/4R1K1 w - - 3 21|c3d5 c7d8 d5f6|1598|7
6rk/7P/3q1p2/3p4/8/1PpP4/r1P2P2/2K3R1 w - - 0 34|h7g8q|1599|0,1,6,11
4r1rk/pp3qp1/2pp1pRp/4p2P/4P2P/P3Q3/1PP5/2K3R1 w - - 0 29|g6h6 g7h6 e3h6 f7h7 h6f6 h7g7 g1g7|1599|29,1,7,9
4nRrk/1p6/3p1b1B/3Pp3/1P2q3/8/P2Q2RP/7K b - - 2 35|e4b1 d2c1 b1c1 h6c1 g8f8|1599|
rn1qrbk1/pp3ppp/2p2n2/3p1NB1/8/2NP1Q2/PPP2PPP/R4RK1 w - - 2 14|f5h6 g7h6 g5f6 d8f6 f3f6|1599|29,7
3r2k1/p4pp1/1b5p/8/N3Q3/P7/1P1q1PPP/5RK1 b - - 4 23|d2f2 f1f2 d8d1 e4e1 d1e1|1600|31,1,15,23,9
4r1k1/4Rpbp/1q4p1/1p2P3/1BpP4/2P3P1/4QPKP/8 b - - 0 26|e8e7 b4e7 b6b7 e2f3 b7e7|1600|1,18
1r4k1/p5p1/4qp1p/4pN2/8/P7/1B2QPPK/8 w - - 2 34|e2g4 e6f5 g4f5|1602|1
5K2/2q5/8/p2k4/P7/8/5Q2/8 b - - 8 52|c7c5 f2c5 d5c5 f8f7 c5b4|1602|1,19
8/6pp/8/2p5/2Pkp1PP/1P1r4/4KP2/3R4 b - - 1 43|d3d1 e2d1 d4c3 d1e2 c3b3|1603|1,14
4Q3/5pk1/2P3p1/5p1p/5P1P/5KP1/8/2q5 b - - 2 53|c1f1 f3e3 f1e1 e3d4 e1e8|1604|1,19,21
8/p7/1p2q1pk/4r2p/P1P1p2P/6P1/5Q2/5RK1 w - - 10 46|f2f8 h6h7 f1f7 e6f7 f8f7|1605|1
2r3k1/p4p2/2q2b1p/2R3p1/3p4/1P4P1/P1QBrP1P/2R3K1 b - - 0 25|c6c5 c2c5 c8c5|1606|
8/1N6/1p2pQ2/p5pp/6k1/6P1/PP2nP1K/2q5 w - - 1 41|f2f3|1607|1,6
4q3/5pk1/4pRp1/1p2P1Qp/p1rr3P/4R1P1/5PK1/1B6 b - - 1 39|d4g4 f6g6 f7g6|1607|
3r1rk1/1p3pp1/p6p/P2nQ3/8/1P3NqP/2P3P1/3RR1K1 b - - 0 28|d5f4 e5f4 g3f4|1607|
r4rk1/1Q2bppp/3q1n2/pB6/3P4/P3P2P/1B3PP1/2R2RK1 b - - 0 22|a8b8 b7c6 d6c6 b5c6 b8b2|1607|
r5rk/pp3pp1/2q2P2/4p1QN/2P4P/3P1n2/P7/3K1R2 w - - 3 31|f6g7 h8h7 h5f6 c6f6 g5f6|1608|0,18
4k3/7P/6K1/p7/P5r1/1P6/8/8 w - - 1 57|g6h5 g4e4 h7h8q|1608|0,25,1,11,14
5r2/4bpk1/8/1b1ppqPQ/3P4/P5K1/1P1B2P1/R6R b - - 1 26|f5d3 h5f3 d3d2|1608|18
8/8/1k1r1n1R/1p6/3N4/2pB3P/5PPK/8 b - - 1 40|f6g4 h3g4 d6h6 h2g3 h6d6 d3c2 d6d4|1608|20,1
1k1r3r/p1p1qp2/Qpn4p/3p2p1/3P2b1/2n1PNB1/P3BPPP/1R2K2R w K - 2 17|b1b6 a7b6 a6b6|1608|23,26,9
2b3k1/1p1p2p1/4p1Qp/1p6/2p1B2P/6P1/3PR2K/2r2q2 w - - 2 29|g6e8 f1f8 e4h7 g8h7 e8f8|1609|31,29,1,18
8/rp4pp/2k2p2/8/PRK5/5P1P/6P1/8 b - - 2 35|a7a4 b4a4 b7b5 c4b4 b5a4|1609|40,1,18,14,9
1k1rb1r1/pp4qp/2P2p1b/2NppB2/3P4/P3PN2/3Q2PP/2R2RK1 b - - 0 21|h6e3 g1h1 e3d2|1609|7
r2q2k1/1p1nb1p1/p1bp3p/2pr4/P4PQ1/2N1B3/1PP3PP/R4RK1 w - - 0 19|g4e6 g8f8 c3d5|1610|48
2r3k1/5pp1/8/2q2P1p/6n1/2p3PP/P5Q1/2R1R2K b - - 0 38|g4f2 h1h2 f2d3|1610|1
5r2/3n1N1k/3p2p1/3P4/p4Q2/1bP5/4qPP1/R5K1 w - - 0 44|f4h6 h7g8 h6g6|1611|29,4
8/p7/6Bp/1p4p1/b7/Pkp3P1/1P5P/2K5 w - - 0 40|g6f7|1612|8,1,6
r1b2r1k/ppppq1pp/1b3p2/4p3/2B1P1QN/3P4/PPP2PPP/R4RK1 w - - 0 14|h4g6 h7g6 g4h3|1613|4,9
1r2k2r/4bNp1/pq1pQ1Pp/5p1P/n2P4/B1pB1b2/P1P2P2/K2R2R1 b k - 4 26|b6b2 a3b2 c3b2 a1b1 a4c3|1613|0,15,9
rn2kbnN/p1p3pp/1p2p3/3b1qB1/2BP2Q1/8/PPP2P1P/R3K1N1 w Qq - 3 11|g4f5 e6f5 c4d5|1613|44
8/p5pk/6qp/2P5/4Q3/P4KP1/r4P2/2R5 b - - 2 45|a2f2 f3f2 g6e4|1615|29,1
r6b/p1pkp3/1p2p3/2n1n1B1/2P5/5P2/PPQ2P2/3NKB2 b - - 2 19|e5f3 e1e2 f3d4 e2d2 d4c2|1615|18
8/4k2P/6R1/2p1r3/2B2p2/6p1/PPP3P1/7K b - - 0 43|e5e1 c4f1 e1f1|1616|1,4
8/8/2p3p1/3p1p2/2k5/7P/2p3P1/1qQ2NK1 w - - 3 48|f1d2 c4d3 d2b1|1617|1,18
3k2b1/6p1/1K1p2Bp/5P2/3P3P/1p6/1P6/8 w - - 8 42|b6c6 d8e7 d4d5 h6h5 g6h5|1617|8,1,12
8/8/3p1p1p/3Pp1pP/1p1kP1P1/5P2/P1K5/8 w - - 2 51|c2b3 d4c5 b3a4 c5c4 a4a5|1618|1,2
r1b2rk1/pp2npbp/1q2p1p1/n1p2PN1/4p1B1/2P5/PP1P2PP/RNBQ1R1K w - - 0 12|f5f6 g7f6 f1f6|1619|18
4r2k/p4pr1/2p2Q1p/8/3P4/2P2P2/P2K1P1q/R3R3 b - - 4 24|h2f2 d2d3 e8e1 a1e1 f2e1 f6h6 h8g8|1620|29,1
5Q2/7p/6p1/8/6Pk/P3q2P/1P5K/3q4 w - - 1 49|f8f6 e3g5 f6f2|1621|1,4,19
1r6/p4k2/4Np1p/P4P2/4N3/5K1P/2r3P1/1q1R4 w - - 0 43|d1d7 f7g8 e4f6 g8h8 d7h7|1621|36,29,1,15
5k2/4pp2/8/1P1P4/4P2n/6p1/4Nr2/3RK3 b - - 3 47|h4f3|1623|1,6
5k1r/p1p3pp/3b4/5p2/5P2/2N4P/PPB3PK/R1B1r3 b - - 0 20|e1c1 a1c1 d6f4 g2g3 f4c1|1623|40,44,18
2kr4/pbp2p2/1p2p2p/3qB1p1/3P1n2/P1PB4/2P2QPP/R4RK1 b - - 4 18|f4h3 g1h1 h3f2|1623|7
5rk1/5p1p/4pQpP/4P3/3p1P2/pbq5/P4KP1/3R3R b - - 3 31|c3e3 f2f1 b3c4 d1d3 c4d3|1625|1,15
6R1/p7/1n1p4/4k1Np/4P1pP/3K2P1/5r2/8 w - - 1 44|g8e8 e5f6 e8f8 f6e7 f8f2|1625|1,21
2kr2nr/ppp1b1p1/4p1p1/5pN1/6P1/PK1P3P/1PP1nPB1/R1B4R b - - 5 17|e2c1 h1c1 e7g5|1625|
8/1b3p2/p1Bnk3/1p6/3P2p1/3K2B1/P4P2/8 w - - 9 34|d4d5 e6e7 g3d6 e7d6 c6b7|1625|1,30
5r1k/6pp/8/7n/PQ5N/7P/2r2qP1/R4R1K b - - 8 34|h5g3 h1h2 g3f1|1626|18
1rq2rk1/5pb1/R2p2bp/3Pp3/2n1P2p/Q1N1NB2/4KPP1/1R6 w - - 4 30|b1b8 c4a3 b8c8|1627|
8/6rp/5R2/1k4P1/7K/8/8/8 w - - 14 65|h4h5 b5c4 h5h6|1627|1,14
r1bqk2r/pp3pQp/3p1b2/2p3B1/2B1n3/8/PPP2PPP/RN3RK1 w kq - 1 11|g7f7|1628|22,6
8/8/8/p1p5/2P5/PP1k4/5K2/8 b - - 4 52|d3c3 b3b4 a5b4 a3b4 c3b4|1628|1,2
2r2q1r/1p3k2/p1b1pp1P/P7/1P1Q1RP1/8/4BP2/4R1K1 b - - 3 36|f8h6 f4f6 h6f6 d4f6 f7f6|1629|
1r2r1k1/pq3p1p/1p2p1p1/6B1/3P4/5Q2/PP3PPP/4R1K1 w - - 0 26|f3f6 b7e7 f6e7 e8e7 g5e7|1629|1
2kr2r1/ppp1np1p/2q1p3/4P2b/4N3/3P1N1P/PP3PP1/2RQ1RK1 b - - 3 15|c6e4 d3e4 d8d1 f1d1 h5f3|1629|23
2k5/pp5p/2p3p1/2q5/2pRQ3/4P1P1/PP3rP1/2K5 w - - 0 27|e4e8 c8c7 e8d8|1630|1,4
r4rk1/pp4pp/2bp4/1Q6/2NP4/4P3/P5PP/R4RK1 b - - 0 22|f8f1 a1f1 c6b5 c4d6 b5f1|1630|48
7Q/pp3k2/8/3pP1p1/8/6PK/PP2q2P/8 b - - 0 27|g5g4 h3h4 e2h2 h4g4 h2h8|1631|29,1,19,21
r1b4r/ppk1b1pp/8/3QP3/5B2/P7/1P3PPP/n2K3R b - - 0 17|h8d8 e5e6 c7b6 d5d8 e7d8|1631|25,23
1r4k1/p4q1p/3Pp1pQ/2p1n3/4B2R/2P5/P1P3R1/2K5 b - - 4 24|f7f1 c1d2 e5c4|1632|4
8/pp3rkp/8/6n1/2p2P2/2P5/PP5K/3B1R2 w - - 0 30|f1g1 f7f4 g1g5|1632|1,23
8/Q5pk/7p/4pPq1/4n3/8/P3n1PP/3R1R1K b - - 4 28|e4g3 h2g3 g5h5|1633|1,4,9
2k4r/1ppqnp2/1b3B1p/pP1p4/P2P4/2NBPpPb/5P2/2RQR1K1 b - - 0 21|h3g2 d1f3 g2f3|1633|12
8/ppkn2p1/1np4p/4r3/1PP1R3/6P1/P1KB3P/8 w - - 0 28|d2f4 b6c4 e4c4 c7d8 f4e5|1633|1,23
7r/p1q2kp1/2pb1p2/2pN1b2/5P1p/1P1P1Q1P/P1P1R1P1/4B1K1 b - - 0 24|c6d5 f3d5 f7g6|1633|25
rn1q1r1k/4Nppp/p7/1ppbp2Q/4P3/4R3/PPP2PPP/R5K1 w - - 0 17|h5h7 h8h7 e3h3|1635|28,40,7,4,9
1br3k1/1R3p2/6p1/P2p4/P1p1r1nq/B1P1PN2/5PPP/3R2K1 w - - 0 27|f3h4 b8h2 g1f1|1635|
b2q1rk1/5ppp/1Q1ppb2/p7/4PP2/2N2B1P/P5P1/1R3RK1 b - - 0 21|d8b6 b1b6 f6d4 g1h1 d4b6|1635|40,18
3k1b1r/pp2pppp/5n2/8/1qN5/3rBQ2/PP3PPP/2R3K1 w - - 4 16|e3b6 a7b6 f3d3|1638|20
rn1q3r/ppp2k1p/1b2bp2/8/2QP4/5N2/PPP3PP/RN3RK1 w - - 1 14|f3g5 f7g6 g5e6|1638|29,23
r3kb1r/1p3ppp/8/p7/1nP1n1b1/PK2BN2/1P3PPP/RN3B1R b kq - 0 12|a5a4|1639|6
2r3k1/5ppp/p2p4/1prPpP2/3pB1q1/3P2Q1/PPP3K1/2R3R1 b - - 11 27|c5c2 c1c2 c8c2 g2h1 g4h5 g3h4 h5h4|1639|30,46
3r1rk1/p1N3pp/8/8/5p1n/1P2q3/PBQ1B2P/2R1RK2 b - - 2 28|e3h3 f1g1 h3g2|1640|4
rn1qkb1r/ppp2ppp/5n2/3b4/8/1BN1P3/PPP2PPP/R1BQK1NR b KQkq - 1 7|d5g2 b3f7 e8e7|1640|
1K6/3R4/kp2n2p/p7/8/8/P6r/8 w - - 10 49|a2a4 e6c7 d7c7 b6b5 c7c6|1642|1,15,12
8/1p6/1pp1k3/3pp2p/1P6/rRnP1KPP/P3R3/8 b - - 1 37|a3b3 a2b3 c3e2|1644|1
2r3k1/1p3ppp/8/p1r2NPq/5P1P/Q1nBP3/3K4/7R w - - 0 28|f5e7 g8h8 e7c8 c5c8 h1c1|1644|18
2r1r3/1p1q1pk1/p4n2/P2ppbN1/8/n1P1P2B/1P2Q3/R4KR1 w - - 0 32|g5e6 g7h8 h3f5|1644|34,35,37
1r4k1/5p1p/5bpB/p2Q4/q7/7P/5PP1/3R2K1 w - - 1 27|d5d6 a4d1 d6d1|1644|1,18
r3kbnr/pp2pppp/2p5/3p1b2/2PP1B1N/NQ1n4/PPK1PPPP/R3qB1R b kq - 7 9|d3b4|1645|34,35,6
2rqkb1r/1b1pn3/p5p1/5p1Q/3P4/2p5/PP3PPP/R1B1R1K1 w k - 0 18|h5g6|1646|6,23
4Q3/p1p3k1/1p1p1qpp/2nP4/1PP5/K5P1/P1B4P/8 b - - 4 30|f6c3 c2b3 c3c1|1646|1,18,4
8/1R6/1p3kp1/8/P1p3PK/r6P/8/8 b - - 2 40|g6g5 h4h5 a3h3|1646|29,1,4,14
5r2/4k1p1/p3p3/2P3R1/8/6P1/r4PK1/7R b - - 0 32|a2f2 g2h3 f8h8 h3g4 h8h1|1646|1,14,21
2r3k1/pq3pBp/6p1/2n4n/2P5/P1Qp4/BP1N1PPP/3R2K1 b - - 0 28|h5f4 f2f3 f4e2 g1h1 e2c3|1646|18
1rq2rk1/4n1bp/3pbpp1/2p1p3/Q3P3/P1BP1NP1/1P3PBP/R4RK1 b - - 2 18|e6b3 a4b3 b8b3|1646|
8/pbP5/3k4/3Pp3/PP2K1P1/8/8/8 b - - 0 40|b7d5 e4f5 d5e6|1647|8,1
r2qk2r/1pp2p2/2npb2p/p1b1N1pn/4P3/P1NP2B1/1PP1BPPP/R2Q1RK1 b kq - 0 11|h5g3 e5c6 g3e2 c3e2 b7c6|1647|7,23
6rk/ppp4q/2n1p2p/3p3N/3P3P/2bQ1P2/PPP5/2K3R1 w - - 0 25|d3h7 h8h7 h5f6 h7h8 g1g8|1648|36,40,30,18,15
8/p3k3/1p3b2/3r3Q/8/5RK1/PP1qB3/7R b - - 0 45|d5h5 h1h5 d2e2|1648|
8/8/5pk1/1P3p2/P1p2K2/P6P/8/8 b - - 0 39|c4c3 f4e3 f5f4 e3d3 f4f3|1649|1,2
2r5/1kN1Rp2/4b2p/P2p1p2/3q4/6P1/5P1K/8 w - - 0 42|c7e6 b7a6 e6d4|1649|20,34,1
7k/p4pp1/1p2p2p/2b5/2q3P1/2B4P/P2Q1PK1/8 w - - 0 33|d2h6 h8g8 h6g7|1650|1,4,23
rnb1k1r1/ppp2p1p/3p3B/8/2BPP1pb/3N3q/PPPQ3P/RN4KR b q - 0 14|g4g3 d2g2 g3h2 h1h2 g8g2|1650|0,20,7,23
r3r1k1/1b1q1pp1/5n1p/1p1p1Q2/p1pP4/P1P1NBP1/1P3PP1/R3R1K1 b - - 2 22|e8e3 f5d7 e3e1 a1e1 f6d7|1652|7
8/pp4kp/2p2p2/3pnP1Q/4qB2/7K/P6P/8 w - - 2 34|f4h6 g7h8 h5e8|1653|1,4
1k1r4/pp5R/8/8/P1p2Q2/1Pq3P1/2p2PKP/8 b - - 3 31|b8a8 f4c7 d8b8 h7h4 c2c1q h4c4 c3c4|1653|0,31,25,1,11,12
r4r2/2p2pk1/p5p1/np2PB1Q/5q2/1P4R1/P4PPP/R5K1 b - - 0 28|f4g3 h2g3 g6h5|1654|
r1n1B1kr/pp1R1pp1/6b1/2p1B3/4q1P1/6Q1/5P2/3R2K1 w - - 6 26|e8f7 g6f7 d7d8 f7e8 d8e8 g8f7 e8h8|1654|29,9,21
4r3/2P5/6k1/1R6/8/1K3p2/8/8 w - - 1 53|b5b8 f3f2 b8e8 f2f1q c7c8q|1654|0,1,11,14
5r1k/1pp3p1/7p/1P3n2/P3p3/7R/1P2BqPP/R1QK4 b - - 7 35|f8d8 d1c2 f2e2|1655|29
1R6/5pkp/p1Nr1bp1/3P4/1P6/5P1P/1r4PK/3R4 b - - 4 31|d6c6 d5c6 f6e5 h2h1 e5b8|1655|1,18,9
rnb1k2r/p1p2ppp/1p6/3Pp3/3q4/2N2N1P/PPPBKbP1/R2Q1B1R b kq - 1 13|c8a6 c3b5 a6b5 c2c4 b5c4|1657|30,15
2k4r/pRp3pp/8/3r1pn1/8/6PP/PQP1qPK1/5R2 w - - 0 23|b7b8 c8d7 b2g7|1658|
5rk1/1p4pp/8/4p3/rbP1p3/2N1B3/1P1R1PPP/6K1 w - - 0 23|c3a4 b4d2 e3d2 f8d8 d2e1|1658|25,1
rnb2rk1/pppp2pp/4p1q1/3nB3/3Pp3/2P4N/P1P1BP1P/R2QK2R w KQ - 4 11|h1g1 g6g1 h3g1|1658|
rnbq4/pp6/1kpBp1r1/4Pp2/P1BPp3/2P5/5PPP/R3K2R w KQ - 0 17|a4a5|1659|6
1R2r1k1/p2br1p1/2p3qp/3pp3/3P1P2/Q1P3Pn/P3P1BP/4RK2 w - - 0 23|a3e7 e8b8 e7d7|1660|23
8/8/4pN2/3b4/3P2P1/7k/pK6/8 w - - 1 53|g4g5 h3h4 g5g6 a2a1q b2a1|1660|1,12
8/4RNkP/1r6/6K1/8/8/8/1q6 w - - 2 57|h7h8q|1661|0,1,6,11
2r3k1/4rpp1/4p1P1/3pP2p/3P3P/2q5/2Q2R2/5RK1 w - - 0 41|g6f7 e7f7 c2c3 c8c3 f2f7|1661|0,1,48
8/p3p1k1/2ppp1p1/q7/4P1nP/1PN5/P4r2/2K1Q1RR b - - 0 21|a5a3 c1d1 a3b2|1661|
8/1p4b1/p5P1/3k1p2/P7/1PBK4/8/8 b - - 4 53|g7c3 d3c3 d5e6 g6g7 e6f7 g7g8r f7g8|1663|8,1
8/6p1/4R1r1/1p5k/8/1P6/P1K5/8 w - - 0 38|e6g6 h5g6 a2a4 g6f7 a4a5|1664|25,1,14
6rk/p4Rpp/3r4/6Q1/4q3/PB4PP/5P1K/8 w - - 5 39|g5g7 g8g7 f7f8 g7g8 f8g8|1665|1,15,16,9
6k1/p4p2/Pr4p1/3B1p1p/3P1PnP/3Q2P1/R4PK1/4q3 b - - 2 29|b6b1 d3b1 e1b1|1665|1,12
8/6pk/1pqr2bp/8/2P2Q2/7P/3R2PK/5R2 b - - 1 40|d6f6 f4b8 f6f1|1665|1,21
r2qbrk1/pp4b1/2p2nn1/3p2N1/3P2Q1/2P1R3/PPB2PPP/R5K1 w - - 1 23|g4e6 e8f7 g5f7 f8f7 c2g6|1666|44,7
2r1k2r/Qn1b1pp1/2pb1q1p/4p3/B7/2NP4/PPP2PPP/R1B1R1K1 b k - 0 17|d6c5 c3e4 c5a7 e4f6 g7f6|1667|
r2q1rk1/1bp1bppp/p2p2P1/2p2N1P/4P3/2N1n3/PPP2PQ1/2KR3R w - - 0 18|g6h7 g8h7 g2g7|1668|0,40,20,7,4
2r2rk1/2q1pp1p/1p4p1/bPB5/P3N3/6PP/4Q1P1/5RK1 w - - 0 23|c5e7 c7e7 e4f6 e7f6 f1f6|1668|7,9
r2R2k1/p3p1bp/q1p3p1/8/2P5/4BP2/Pr4PP/2QR2K1 b - - 1 23|a8d8 d1d8 g8f7 e3d4 g7d4|1668|
rn1Q1rk1/p4ppp/b7/8/NP1bnB2/P4N2/2P3PP/3RK2R b K - 0 17|d4f2|1669|6
8/8/8/6p1/2pBp3/1p4k1/1P2K3/8 w - - 3 62|e2e3 g3h3 e3e4 c4c3 d4c3|1671|8,1
r2qkb1r/pp1b1ppp/4p3/1B1pPn2/Q2n4/5N2/PP3PPP/RNB1K2R w KQkq - 0 10|f3d4 f5d4 b5d7 d8d7 a4d4|1671|
b4r2/2R2pk1/p3pqp1/4P2p/2Q2P2/P1N5/7K/5R2 b - - 0 26|f6h4 h2g1 h4g3|1672|4
8/ppp5/8/PPP2ppp/2k5/5K1P/8/8 w - - 0 31|b5b6 a7b6 c5c6 b7c6 a5a6|1672|1,2,9
8/5p1k/8/7P/1p6/8/p1n5/B5RK b - - 2 45|c2a1 g1a1 b4b3|1672|1
5rk1/pp3ppp/2b1p3/4P2Q/3R4/2q5/P5PP/5R1K w - - 0 21|h5f7 f8f7 d4d8 c6e8 d8e8 f7f8 f1f8|1673|1,46,9
4rr1k/pp4pp/8/q2Q4/3R4/3P2PP/PPP2P2/3R2K1 b - - 2 23|e8e1 g1g2 a5d5 d4d5 e1d1|1674|1
2q3k1/5ppp/p5r1/1p1P4/2nB4/2Q5/PP3PPP/3R2K1 b - - 6 24|c8g4 g2g3 g4d1|1674|1
4r1k1/pp3ppp/7q/2bB4/8/2P2QP1/PP2r2P/4R2K w - - 0 25|f3f7 g8h8 f7e8 e2e8 e1e8 c5f8 e8f8|1676|3,46,27
8/8/1p2k1p1/4P2p/P2K1p1P/5P2/8/8 b - - 0 66|g6g5 d4e4 g5h4|1676|1,2
4r1kr/pp2Qbpp/2q5/b4N2/8/2p2R2/P3B2P/2R4K w - - 0 27|f5h6 c6h6 e7f7|1677|48,4
r3q2k/ppp1N3/4Q2p/3p4/4b3/8/PP4P1/K7 w - - 0 26|e6h6 e4h7 h6f6|1677|1,4
r3k1r1/1p1Nbp1p/2n1b3/p1p5/2PpP3/PP1P2n1/2N2R1P/R1BQ1BK1 b q - 0 19|g3e2 g1h1 g8g1|1677|34,35,7,4
8/7P/8/8/5R2/4k3/6K1/4q3 w - - 1 59|f4f3 e3e4 h7h8q e1d2 f3f2|1680|0,1,11,17
4kb1r/3n1ppp/rq1pp3/1Qp5/P3n3/2N2N2/1P1P1PPP/R1B1K2R w KQk - 0 13|b5b6 d7b6 c3e4 a6a4 a1a4|1680|48
1r3rk1/p4p2/2p4p/2q1p1p1/4Pnb1/2PB1PB1/P1Q3PP/3R1RK1 w - - 1 19|g3f2 c5a3 f3g4 b8b2 c2c1|1681|25
r1b1k2r/ppBn1ppp/2p1p3/q1Pp4/1b1Pn3/1QN1PN2/PP3PPP/R3KB1R b KQkq - 4 9|b4c3 b2c3 a5c7|1681|
r1r3k1/5p1p/p3bp2/1p2p3/6B1/NP2n3/P1PR1PPP/2KR4 w - - 3 20|g4e6 f7e6 f2e3|1681|
r1bb1rk1/1p1n1ppp/p2N4/4P3/5P2/2qBn3/P5PP/2RQ1RK1 w - - 0 18|d3h7 g8h7 d1h5 h7g8 c1c3|1682|40,7,9
r7/ppp1q3/2np1kp1/8/2P1r3/8/PP1QBPP1/R3K2R b KQ - 3 19|c6d4 e1c1 d4e2|1682|
r5kr/pp4b1/2pp2Q1/8/4PPN1/1P1P3q/1PP5/R4RK1 b - - 1 23|h3g3|1683|6
5rk1/pp4p1/1n2pq2/2p4Q/2P4R/1Pr5/P5PP/4R1K1 w - - 2 30|h5h7 g8f7 e1f1|1683|23
r1b2rk1/6p1/4p1P1/1p6/1PpBP3/5nq1/2PQ2B1/3K3R w - - 0 31|h1h8 g8h8 d2h6 h8g8 h6g7|1685|40,15,23,9
r4rk1/pbpp2p1/1p4Qp/3Nn3/3q1N2/3B4/PP3PPP/5RK1 w - - 6 21|d5e7 g8h8 g6h7|1687|7,4
rn2k2r/pQ3pp1/2p5/4P2q/8/2P2bB1/PP3PB1/R3R1K1 b kq - 0 19|h5h1 g2h1 h8h1|1687|7,4,16,9
r3k1nN/ppp3pp/8/3Bp3/1P1BPp2/3P4/P2Q1P1q/RN2K2b b Qq - 0 16|h2g1 e1e2 f4f3 e2e3 g1g5|1689|15
5rkn/6pp/pQ1RNp2/5Pbq/2PpP3/P5P1/5KBP/8 b - - 1 31|g5e3 f2e1 h5h2|1689|
4rrk1/ppp3pp/2p5/2bP4/2Bqp1P1/3P4/PPP1Q1PP/R1BK3R b - - 1 13|e4d3 e2d3 d4g4|1689|20
3r3k/pb3Bpp/2p5/8/4QR2/2q5/P1P3PP/6K1 w - - 1 20|e4h7 h8h7 f4h4|1691|40,1,4,13,9
5r1k/4bp1p/pr5B/4P3/1P6/P3n1RP/5PP1/6K1 w - - 0 31|h6g7 h8g8 g7f6 e3g4 g3g4|1692|20,34,1,18,15,13
3R4/8/8/5p2/8/3p3P/1k3rP1/3K4 w - - 0 49|d8d3 f2g2 d3d2 g2d2 d1d2|1692|1,14
8/8/8/5Rp1/8/4rPK1/8/5k2 w - - 3 73|f5g5 f1e2 g5f5|1692|25,1,14
5r1k/6pp/5qp1/2Q5/4p3/4P2P/P4rP1/2R2RK1 w - - 0 24|c5f8 f6f8 f1f2|1692|1
2k4r/pppr1pp1/5bp1/3qn3/4p1B1/PP2P3/1BQP1PPP/2R1K2R w K - 8 18|c2c7|1693|6,23,26
7k/R4K2/5P2/P7/7r/8/8/8 b - - 1 53|h4h7 f7e8 h7a7 f6f7 a7a8 e8d7 h8g7|1693|1,14,21
rnb4r/ppb1kp2/2p4p/4N1p1/2B1n3/6B1/PPP1NPPP/2KR3R b - - 0 13|e4g3 h2g3 c7e5|1694|44,48
6rR/pp2k3/5p2/3p2p1/2pP4/q1P1P1P1/P1P1QPP1/R3K3 b Q - 0 22|a3c3 e2d2 c3a1 e1e2 g8h8|1696|1,18
2B4r/p3k3/5p2/3p3q/3Pb3/P1B1P1R1/1P6/R4QK1 b - - 0 34|h5h2|1697|6
r1b2k2/pp5p/7r/3P1p2/6n1/1P2PRq1/PB4B1/R2Q2K1 b - - 3 23|h6h1 g1h1 g3h2|1698|40,7,4,23,9
6k1/p4ppp/1p6/2p5/P7/1Pr1P2P/4KPP1/1R6 w - - 0 30|e2d2 c3b3 b1b3|1698|1,14,47
4R3/pp3p2/5k1p/2p3p1/3p1n2/3PNq2/PPP2P1P/3Q2K1 b - - 1 28|f4h3 g1f1 f3f2|1701|1,7,4
1k1r3r/1p1b1ppp/2p1P3/Q7/8/P4N2/qPP3PP/2KR3R b - - 0 22|a2a1 c1d2 d7e6 d2e2 e6c4 e2f2 d8d1|1701|29,20,34,26
5Q2/8/7R/6k1/6p1/4K3/6r1/q7 w - - 4 57|f8f4|1703|1,39,6
8/8/p3b3/1pR4P/3p4/P1k1p1P1/4K3/8 b - - 2 45|e6c4 c5c4 b5c4|1703|1
r2r2k1/q4p1p/3p2p1/pB4Q1/PP2PP2/5nPK/PB5P/8 w - - 2 33|g5f6 a7d4 b2d4|1703|
r1b1k2r/3nqp1R/p3p1p1/1p1p2N1/3P2n1/1NPB2P1/PPQ2PP1/2KR4 b kq - 0 15|e7g5 f2f4 g5f6 d1h1 h8h7|1704|5
3r3r/2p2kPp/p1n5/1p6/4NP2/8/PP4PP/R3K2R b KQ - 0 20|h8e8 e1g1 e8e4|1704|1,23
r1b2rk1/p4ppp/2p5/6q1/4p1n1/2B3K1/PPBQNPP1/R4R2 b - - 4 16|g4e3 g3h2 g5g2|1705|20,34,4
2q1rrk1/1p4b1/p5p1/2Pp1p2/bP1B1P2/P5Q1/4R1PP/4R1K1 w - - 0 28|g3g6 c8c7 e2e8 f8e8 e1e8 a4e8 g6e8|1705|30,7,23
8/8/8/6K1/pr5p/6kP/R5P1/8 b - - 1 58|b4b5 g5f6 b5a5|1705|25,1,14
4rr1k/5pRp/p7/2Q5/3p3P/6R1/PPP1pqPK/8 w - - 0 33|g7h7 h8h7 c5h5|1707|40,1,4,9
r5k1/pp4p1/1n6/3pB3/3P2pb/2N2Q2/PP6/2K3R1 b - - 0 24|g4f3 g1g7 g8f8|1707|
6k1/3r1p1p/p1p1pBp1/2Pr4/1Pn1R2P/P5R1/5PP1/6K1 b - - 6 30|d5d1 g1h2 c4d2 e4e2 d2f1 h2h3 f1g3|1707|1,18
r2q1rk1/3p1pp1/p3p1p1/5b2/1b1B4/2N4R/1PPQ2PP/R6K w - - 2 20|h3h8 g8h8 d2h6 h8g8 h6g7|1708|40,7,15,23,9
2k4r/ppp2p2/5p2/3q4/P5rN/2PP2P1/1P3P1K/R2Q1R2 b - - 2 23|h8h4 g3h4 d5g2|1709|4,9
2rr2k1/2q2pb1/p3p1p1/1p6/4N1P1/5P2/PPPQ3R/2K4R w - - 3 24|h2h8 g7h8 h1h8 g8h8 d2h6 h8g8 e4f6|1709|40,7,46,9
7R/7P/8/5pr1/8/5k2/7K/8 b - - 0 63|f3f2 h8a8 g5h5|1712|1,4,14
6k1/1p3r2/p1p1p3/4Pqpp/3P4/1P2R1QP/P4PP1/6K1 b - - 1 33|h5h4 g3f3 f5b1 g1h2 f7f3|1712|20,1
4k2r/p2b1ppp/1p2p3/4P3/4qBP1/1QP5/P1P4P/R4RK1 b k - 0 20|d7c6 g1f2 e4f4|1713|37,12
r1bq1rk1/ppp2ppp/1nn2b2/2N5/2BP4/PQ2BN2/1P3PPP/R3R1K1 b - - 10 15|c6a5 c4f7 f8f7|1714|
8/8/3k2pp/8/6KP/6P1/8/8 w - - 0 68|h4h5 g6h5 g4h5 d6e5 h5h6 e5f5 h6h5|1715|25,1,2
3r3r/k4ppp/p7/2b5/P2q1p2/N2Q4/5PPP/1R3RK1 w - - 0 25|a3b5 a6b5 d3b5 c5b6 a4a5|1715|9
r4rk1/p1q2p1p/2p3pB/3pp3/2B5/2b2Q2/P1P2PPP/1R4K1 w - - 0 18|f3f6 e5e4 f6c3|1715|
6k1/3r1ppp/4p3/p1P1q3/1pnP4/7P/5Pp1/1R1Q2K1 w - - 0 31|d4e5 d7d1 b1d1 g8f8 c5c6|1716|1
r1b2rk1/pp1p2pp/2p2n2/4b3/1q6/2NBP3/PPPQ1PPP/R1B2RK1 b - - 1 12|e5h2 g1h2 b4h4 h2g1 f6g4|1717|40,7,9
2rr2k1/4qpp1/p1np2bp/1p1Bp3/8/5N2/PPPQ1PPP/3RR1K1 w - - 6 19|d5c6 c8c6 f3e5 d6e5 d2d8 e7d8 d1d8|1718|7
r4r1k/pbq1Nppp/1p3n2/2n3N1/2B5/2P1Qp2/PP3PPP/3RR1K1 b - - 4 18|f6g4 g2g3 g4e3|1719|
1b6/p4k2/P3p3/3p1pQN/2p2P2/4P1P1/4nK2/7q w - - 0 42|g5g7 f7e8 h5f6 e8d8 g7d7|1720|1,15
8/5Qpk/2N1n2p/2ppP3/3Pq3/2P4P/6PK/8 b - - 0 42|e6f4 f7f4 e4f4|1722|1
4k2r/2pp1p2/rb5q/3N4/3nP1p1/P7/1P1B1PQ1/3R1RK1 w k - 0 26|d2h6 d4e2 g1h1 h8h6 g2h2|1723|
r5k1/ppp2pbp/2bp2p1/4rP2/6Pq/2P1B2P/PP1Q4/2KR1BR1 w - - 3 19|e3g5 h4g5 d2g5|1724|47
2kr2r1/ppp1bp2/2p2n1p/4P3/N2P2p1/1P3P2/PBP2P1P/R2R2K1 b - - 0 16|g4f3 g1f1 f6g4|1726|20,34,7
8/8/p7/8/3K4/P1p5/8/7k w - - 0 55|d4c3 h1g2 c3b4 g2f3 b4a5 f3e4 a5a6|1728|1,2
8/pk5r/6p1/1p3P2/8/2Pq3P/PP6/R3QR1K b - - 0 26|d3h3 h1g1 h3h2|1729|1,4
r4rk1/2p1qp2/3p2pp/2bP4/R3P2P/3P1RPB/7K/5Q2 w - - 1 30|a4a8 f8a8 f3f7 a8a2 h2h1 e7f7 h3e6|1729|23,9
r3k2r/ppp2pp1/2b1p3/4P2q/4pR2/P5PP/1PP1P1B1/R4QK1 w kq - 1 17|f4h4 h5h4 g3h4|1729|
8/8/7p/pp3k2/6p1/PP2K1P1/7P/8 w - - 0 56|e3d4 b5b4 a3b4|1730|1,2
r1b2r1k/1pp1q1b1/p1n2npp/5pN1/2B1p2Q/NP6/PBPP2P1/2KR3R w - - 2 20|h4h6 g7h6 h1h6 h8g7 h6h7|1731|30,7,15,13,23,9
5k2/1bp3p1/p7/1p2Pq1p/8/1B1P2r1/PP2Q2K/1R3R2 b - - 3 30|g3h3 h2g1 h3h1|1732|4,16
2r1brk1/1p3ppp/p4nq1/2B5/6P1/2N2P2/PP3Q1P/3R1RK1 b - - 2 20|f6g4 f3g4 g6g4 g1h1 e8c6|1732|7
8/5p1k/6qp/4Q3/8/7R/5PPK/1r6 w - - 10 41|h3g3 b1b6 g3g6|1732|1
1k5r/p7/1pQP4/2p1Pn2/8/1N4Pq/PP6/3RR1K1 b - - 0 29|h3h2 g1f1 f5g3|1733|32,48,4
r1b2rk1/1p2ppbp/p2p2p1/4n2q/2B1P1P1/P1N2N2/1P1BQPP1/2RR2K1 b - - 0 15|c8g4 f3h2 g4e2|1735|
3r3k/4Q2p/1P3b2/5r2/2PB4/5pPq/5P1P/1R4RK b - - 4 32|h3h2 h1h2 f5h5|1737|40,4,9
1Q1bk2q/3R3p/2p1P1p1/8/r2p4/3P4/1P2R1PP/6K1 b - - 4 29|a4a1 e2e1 a1e1 g1f2 h8f6 f2e1 f6e6|1738|1
r1bk3r/ppq2Bbp/2nNQ1p1/8/8/B6P/PPp2PP1/3RK2R w K - 2 20|d6b7|1739|34,35,6
7Q/2pbkppp/pp6/B3P3/4P3/q4N2/P1P2PPP/4KB1R b K - 0 18|a3c1 e1e2 d7b5 c2c4 b5c4|1739|15
8/2bkr3/1r3q1p/1p2p1p1/pn1p4/P5P1/1PQ1RPNP/2R3K1 w - - 0 34|c2c7 d7e8 c7c8 e8f7 a3b4|1739|30
4r3/1b6/1pN1p1k1/pP1p2p1/6P1/5RK1/2P4P/8 w - - 4 43|c6e5 g6h6 f3f6 h6g7 f6f7|1739|1
2r3k1/5p2/8/B4Q2/3Pn3/2P2KP1/P2q4/4R3 b - - 2 38|d2f2 f3e4 c8e8|1740|1,18,9
2k4r/pR3ppp/3Qp3/q1BpP3/5P2/P1b2N2/2P2KPP/8 b - - 0 22|c8b7 d6d7 a5c7|1740|5
1k5r/1b1p2p1/pB2p3/4nP1r/2P5/PP4P1/5PB1/3RR1K1 b - - 0 27|h5h1 g2h1 h8h1|1741|7,4,16,9
3N2k1/p2P3p/8/8/6p1/4P1P1/Prp4P/2R3K1 b - - 1 38|b2b1 d8c6 b1c1 g1f2 c1d1|1741|1,23
r2qr1k1/pp1bbppp/5n2/3p4/1P1P3B/2PQ1P2/P1B2KPP/R4N1R b - - 4 19|f6e4 f3e4 e7h4|1741|20
8/1p5p/5Qpk/3pP2r/4qP2/8/P1rB1R2/6K1 w - - 3 35|f6f8|1742|1,6
6k1/2p1qppp/2p5/2b1P3/2P2B2/1r3Q2/bK2N1PP/R7 w - - 0 20|f3b3 a2b3 a1a8 e7f8 a8f8 g8f8 b2b3|1742|9
3r3k/1Rb3rp/Q7/8/8/7P/P1P2PP1/6K1 b - - 2 29|d8d1 a6f1 c7h2 g1h2 d1f1 b7g7 h8g7|1745|1,23
4R3/1p4pk/p1p1Q2p/3p1Pb1/6P1/6q1/PP6/3K4 b - - 3 39|g3d3 d1e1 g5h4|1747|57,1,4
r1q2r1k/pppb1Np1/2nb1n1p/4pp2/4P3/1QP3P1/PP1N1PBP/R1B2RK1 b - - 3 13|f8f7 b3f7 d7e6 f7f6 g7f6|1747|9
1r4kr/p2B1p1p/2Qp1npB/2b5/2P5/2N2P2/PP3q1P/2K1R2R b - - 0 18|f2b2 c1d1 b2c3|1749|18
6k1/pbp3bp/1p4p1/3P1n2/2P2q2/8/PP2Q1PP/4R2K w - - 0 24|e2e6 g8h8 e6e8 g7f8 e8f8|1750|1,15
6Bk/8/3p2RP/3PpP2/2p1n3/2r5/6K1/8 b - - 0 63|c3g3 g6g3 e4g3|1751|1
r3k2r/1bq2p1p/p2ppn2/1p2n1Q1/4P3/PNNB3P/1PP2PP1/3R1RK1 b kq - 0 15|e5f3 g2f3 h8g8 g5g8 f6g8|1751|23,9
1r1q1rk1/p4pb1/1p2p1p1/3pP1N1/3p1P1P/2P3NQ/PP6/5R1K w - - 0 24|h4h5 d8g5 f4g5|1751|
r2q2kr/1Q3p1p/6p1/2Bp1b2/2B1p3/2P3P1/P1PK2P1/5R2 w - - 0 21|c4d5 f5e6 b7a8 d8a8 d5a8|1752|
3rr1k1/5ppp/2p5/pp1n4/8/1P1R2BP/P1P2PP1/2KR4 w - a6 0 22|c2c4 b5c4 b3c4|1752|1
8/p3Rp1k/5n2/4K1B1/2p5/2Pr3P/P4r2/6R1 b - - 8 35|d3d5|1753|1,6
8/8/6k1/p1p2ppp/2P2P2/5KPP/P7/8 w - - 0 38|f4g5 g6g5 h3h4|1753|40,1,2
r7/5p1k/2R2P1p/pp1pq3/4b1P1/4Q2P/PP3R2/6K1 b - - 2 29|d5d4 c6c5 d4e3 c5e5 e3f2|1754|0,1
1r2r1k1/5p1p/4b1p1/2p5/1n1b4/1P3PPN/P2BK2P/1BRQ3R b - - 0 23|e6c4|1756|34,35,6,13
r1bqk1nr/ppp2ppp/4p3/8/1bpnP3/2N1B3/PPQ2PPP/R3KBNR w KQkq - 0 7|e3d4 d8d4 c2a4 c8d7 a4b4|1756|18
2r2rk1/p1q2pp1/4p3/1p1p2P1/n4PP1/5P2/PPPQ4/2KR3R w - - 1 21|d2h2 c7c2 h2c2 c8c2 c1c2|1756|12
r2k3r/pp1bbppp/4pn2/4p1B1/2B5/8/PPP2PPP/RN1R2K1 w - - 4 12|g5f6 g7f6 c4b5|1757|23
7r/8/3kP2p/N2Bb3/1R2P3/6rP/7K/8 w - - 0 33|a5c4 d6c5 c4e5|1759|29,1
r2q1k1r/1p2bp2/p1p1p1Q1/4P3/3PN3/1B2n3/PP4P1/3R1RK1 b - - 1 22|e3f1 d1f1 d8d4|1759|7
6R1/8/8/8/5Kn1/5B1k/1r6/8 w - - 3 62|g8h8 g4h6 h8h6|1760|1,4,13
6r1/3r1p1k/R2b2p1/3p3P/1p2p3/1P2P3/1BPP1K2/6R1 w - - 1 31|h5g6 g8g6 g1h1 g6h6 h1h6 h7h6 b2e5|1760|1,23
r3kr2/npp2pQ1/p1bqpP1B/3n4/1P6/P1N5/5PPP/R4RK1 w q - 2 25|c3e4 e8c8 e4d6|1761|
3r3r/5pp1/pk1p4/3Pn3/Q3P1p1/P1P4q/4BP2/4R1K1 w - - 0 23|a4a6 b6c7 a6a7 c7c8 e2a6|1762|15
r2q1rk1/1pp1nppp/1pnp4/1B1b2B1/3P2P1/5N1P/PP3P2/R2QR1K1 w - - 2 15|b5c6 f7f6 c6d5|1762|
4rrk1/1pp2pp1/p1p4p/4b3/2N1P3/2P4P/qP2QPP1/2R2RK1 w - - 0 19|c1a1 a2b3 a1a3 b3b5 a3a5|1762|
q4rk1/n2P1ppp/p7/6N1/Pp1B2P1/1Pp1R2n/2Q2P2/R4K2 b - - 0 30|a8h1 f1e2 h3f4|1763|4
8/2B5/4k1K1/1p6/p1p4P/P1Pn4/8/8 b - - 0 43|b5b4 c3b4 c4c3|1763|1
1k6/8/1p1R1N2/2pPp3/pqP1PpB1/3K4/8/8 w - - 0 53|d6b6 b4b6 f6d7 b8b7 d7b6|1763|40,1,30,18,9
2r3k1/5p1p/4pQpP/Bb1p4/p2P4/q2BPP2/1rPK2P1/3R3R b - - 0 25|a3d3 d2e1 d3e3|1765|29,4,23
r7/pp2b2r/6R1/2p1pk1P/4Np2/3P4/PPP5/2K4R w - - 9 33|e4g3 f4g3 h1f1|1765|1,4,9
5rk1/4q2p/4pppP/1p1b4/pNBQ1P2/6P1/PKP5/3R4 b - - 0 30|e7b4 c4b3 b4d4 d1d4 a4b3|1765|5
4Q3/1q2N1kp/1p1p1p2/4b1p1/2Pp4/1P6/5nPP/6K1 w - - 0 49|e7f5|1766|1,6
6k1/1p1q1p2/p1p3p1/2P2bPp/PP2pP1P/2Q5/4PKB1/2Br4 w - - 8 41|c1b2 f7f6 c3f6 e4e3 f2g3|1766|25,1,12
8/5p2/3Rpkpp/3n4/5P2/3K2P1/7P/8 b - - 2 46|f6e7 d6d5 e6d5|1766|1
r4r1k/pp4bp/6p1/3pn3/6bq/2P5/PPQNB1PP/4RRBK b - - 3 19|f8f1 e1f1 g4e2|1766|
rnbq1rk1/3pnpbp/4p1p1/1N6/4PB2/1Q3N2/PP3PPP/3RK2R w K - 1 12|f4c7 d8e8 b5d6|1766|
3r2k1/pp3ppp/4pq2/8/1P3n2/P4b2/2Q2PPP/1B1R2K1 w - - 0 28|c2h7 g8f8 h7h8 f8e7 h8d8|1767|7,15
rnbqk2r/pppp1ppp/7n/2b5/2B1P3/5N2/PB3PPP/RN1QK2R w KQkq - 3 7|b2g7 h8g8 g7h6|1767|18
8/1PK5/8/3R4/6pk/8/8/2r5 w - - 1 77|c7b6 g4g3 b7b8q c1b1 d5b5|1769|0,25,1,11,14
1b4k1/1P4p1/r1p3r1/P1Bp4/3Pnpq1/8/1Q3P1N/2R1RK1B b - - 0 36|g4g1 f1e2 g1f2|1770|18
2r1kb1r/ppq2ppp/2n1p3/3pPn2/N2P4/4BN2/PPR1QPPP/5RK1 b k - 10 14|c6d4 f3d4 f5d4 e3d4 c7c2 e2b5 c2c6|1772|18
6k1/5p1p/Q2P2p1/1p2p2n/1P6/5qP1/1r3P1P/R5K1 w - - 1 33|a6a8 f3a8 a1a8 g8g7 d6d7|1773|0,1
2kr1b1r/pp4pp/2B1bn2/8/Q2P1B2/2P3P1/q6P/1N3RK1 w - - 0 19|c6b7 c8b7 a4b5 b7c8 b5c6|1774|40,15,26,9
rnb1k2r/pppp1ppp/5n2/8/2B1q3/2B5/P3QPPP/2KR2NR w kq - 0 10|e2e4 f6e4 d1e1 e8g8 e1e4|1775|23
r5k1/1b3p2/5Q2/pB1p3p/P5q1/1NP1pPb1/1P6/R4RK1 b - - 0 26|g3f2 g1h2 g4g3 h2h1 g3h3|1776|34,35,30,7,15
5r1k/6pp/p7/8/8/2Q4P/PpP3P1/1R3q1K w - - 1 28|b1f1 f8f1 h1h2 f1h1 h2g3|1776|1
2r2Rk1/7p/p2p2p1/1p1P4/1PpQN2q/P3R3/6nP/6K1 b - - 0 28|c8f8 g1g2 f8f2 e4f2 h4d4|1776|
1r3b2/5p1k/3P1qRP/r1n1p3/ppB5/P2Q1P2/1PP5/1K6 w - - 1 36|g6g7 h7h6 d3h7|1778|34,35,4
r4r1k/ppp1qppp/8/3Pn3/2B1R3/5P2/PP3P1P/R2Q2K1 w - - 1 16|f3f4 e7h4 e4e5 h4f4 d1e2|1779|25
5k2/6R1/6KR/1r6/3pP3/pp1P2pB/1P6/8 b - - 9 56|b5b6 g6h7 b6h6 h7h6 a3b2|1779|0,1
4rrk1/2b3p1/2R4p/5p2/1p6/4Q1P1/1q3PBP/2R3K1 w - - 1 30|g2d5 g8h7 c6h6 g7h6 c1c7|1780|20
3r2k1/pp3ppp/5n2/8/2Pq4/1P3B2/P2Q1PPP/R4RK1 b - - 0 21|d4d2 a1d1 d2a5|1781|5
7k/7p/BR2p3/P3PpK1/5P2/6n1/7r/8 b - - 0 55|g3e4|1782|1,6
4r2k/1r3R1p/p1p1qNpB/1pb1P3/8/8/PPP2PPP/4R1K1 w - - 0 24|h6g7|1784|6
2rr1bk1/pp4pp/1qn5/4P2N/1P1P2Q1/P3P2P/6P1/5RK1 w - - 2 25|f1f8 g8f8 g4g7 f8e8 h5f6|1784|40,32,7,15
8/8/8/1p1pn1Kp/1P1P2p1/2P3Pk/1P6/8 w - - 0 38|d4e5 h5h4 e5e6 h4g3 e6e7 g3g2 e7e8q|1784|0,1,11
1k6/1bpq4/pQ6/1p4pr/8/P5B1/1P3PP1/3RR1K1 b - - 3 28|h5h1 g1h1 d7h3 h1g1 h3g2|1785|40,15,23,9
8/8/5p2/k5p1/1pK1P3/p5PP/8/8 w - - 2 49|c4b3 a5b5 h3h4 a3a2 b3a2|1785|1,2
2r2rk1/2Qb1ppp/4p3/1q1pPn2/8/5N2/3B1PPP/1RR3K1 w - - 5 22|c7c8 d7c8 b1b5|1785|
2r2rn1/3q1p2/2p3kp/1p1pPRp1/p2P2P1/P1PQB2P/1P6/6K1 w - - 1 27|f5g5|1786|34,35,6,16
1r2k3/1bp2p2/p3p2Q/q5B1/3b4/P7/5PPP/2RR2K1 b - - 4 29|a5d5 h6h3 d5g5|1787|
2rq2k1/3p1rpp/n7/p2PPB1P/1p5N/2p5/PP3Q2/2K3R1 w - - 0 26|f5h7 g8h7 f2f7 d8f8 f7g6|1787|29,20,7
r4rk1/p4p2/1qp1p1p1/3pP1Pp/P1p4P/2P3n1/1P3QP1/R1B2RK1 w - - 1 21|c1e3 g3e4 e3b6 e4f2 b6f2|1790|
3r1nk1/1p3pbp/4p1p1/8/3B4/2Pr1N2/PP3PPP/3RR1K1 b - - 3 22|d3d1 e1d1 e6e5 f3e5 g7e5|1790|
r1b1k2r/ppp1nppp/1b3q2/4p3/2B1P3/BQP5/P2R1PPP/RN4K1 w kq - 8 14|c4f7 f6f7 d2d8 e8d8 b3f7|1790|22,29,9
r1b1k1nr/p4ppp/2p1p3/3p4/1bPq4/1P6/P2B1PPP/RN1QKB1R w KQkq - 3 12|d2b4 d4a1 b4c3 a1a2 c3g7|1793|9
N4k1r/pp1b1ppp/2n5/3Rp3/q7/6Q1/2P2PPP/4KB1R b K - 0 17|a4e4 f1e2 e4d5|1793|18
r3r1k1/ppp1b1p1/2n1b1np/3qPp2/4N3/1PP2NB1/P1Q1BPPP/3R1RK1 b - - 0 17|d5e4 e2d3 e4g4 h2h3 g4h5|1794|
4N3/4R3/p5kp/3p1b2/8/1P4P1/1PPq3P/1K2R3 b - - 4 34|f5c2 b1a1 d2a5|1795|1,4
6k1/4Kp2/7r/4PR2/8/8/8/8 b - - 1 82|h6e6 e7d8 g8g7 f5f1 e6e5|1795|1,14
5bk1/6rp/4R3/p1p5/2Pp1Q2/P2P1P2/1P2RKPP/7q b - - 0 35|g7g2|1796|1,6
4r1k1/QR3ppp/3p4/3P4/6qb/2P2p2/P1P2P1P/6RK b - - 1 24|g4g1 h1g1 e8e1|1798|40,1,4,9
2k5/1p5R/p2p4/6p1/3N2P1/1PP3KP/1P3P2/4q3 b - - 0 39|e1e5 g3f3 e5f4 f3g2 f4e4|1798|1
8/6p1/p7/3pk1p1/2p5/1PP1K1PP/P7/8 w - - 1 37|b3b4 d5d4 c3d4|1799|1,2,12
8/p1Q2pp1/4k2p/8/3p1P2/r4qP1/2B4P/6K1 w - - 4 35|c7e5 e6d7 c2f5 d7c6 f5e4 f3e4 e5e4|1801|1,30,18
5k2/6p1/7p/2rBP3/1p2PP2/2n5/2R2KPP/8 b - - 1 35|c3d1 f2e2 c5c2|1801|20,1
5r1k/pb3pp1/1pq1p2p/4P3/3rNQ2/7R/PP4PP/4R1K1 w - - 2 27|h3h6 h8g8 e4f6 g7f6 f4g3 d4g4 g3g4|1802|7,46,9
8/p4pk1/5r1q/2p1R3/2P1P2p/P4Pp1/4Q1B1/7K b - - 4 55|h4h3 e5g5 h6g5|1802|1
5rk1/pp1n1r2/3p2N1/2pQ4/2P5/4P1P1/qP2KPP1/7R w - - 2 25|g6e7 g8g7 d5g5|1803|4,23
r2q1r1k/ppp3pp/2b1p1n1/5p2/3PP3/P2B1NP1/1PQ2P1P/R4RK1 b - - 1 19|f5e4 d3e4 f8f3 e4c6 b7c6|1804|20,18
4r2r/1p1q2p1/p7/3pbpk1/3Q3n/2P3P1/PPB2P2/R4RK1 w - - 0 28|f2f4 g5g6 f4e5|1805|18
6k1/2p2ppp/1p1p2q1/p2P4/2P5/PP1n1Q2/6PP/B3rRK1 w - - 5 25|f1e1 d3e1 f3e2 e1f3 e2f3 g6b1 f3f1|1806|1
2rqkbQ1/1p1bn2N/2n5/1pp2r2/3p4/3P4/PPP2PPP/R3R1K1 w - - 2 18|g8g6 f5f7 h7f6|1808|4,23,38
r4r2/2pb2k1/p2p2pb/1p1Pnp2/8/P1P3Q1/1PB2PPP/3RR1K1 b - - 1 23|f5f4 g3h4 g6g5 h4h5 d7g4 h5g4 e5g4|1808|18,47
1r4k1/2R2Rp1/3p1b1p/8/3rp3/4B2P/5PPK/8 w - - 0 31|f7f6 g7f6 e3d4|1808|1,48
3r1rk1/p1R3p1/Bp2bp1p/8/4qB1Q/1P5P/P5PK/8 w - - 6 30|c7g7 g8g7 f4h6 g7g6 h4e4|1808|40,20,9
1r4k1/1r1q3p/1R2p1p1/p2pPpP1/P1p2P1P/2P1Q3/2P2K2/1R6 b - - 0 33|d5d4 c3d4 b7b6 b1b6 b8b6|1808|1,48
r2qk2r/p4p1p/1p2pbp1/3b4/4B3/5N2/PPQ2PPP/3R1RK1 w kq - 0 17|e4d5 e6d5 c2c6 e8f8 d1d5|1810|48
Qnk4r/3r3q/1B2bn1b/1P2p3/2P3p1/6P1/3NK1BP/R6R w - - 0 25|a8b8 c8b8 a1a8|1811|40,4,16,13,26,9
r3k2r/pp3pp1/2np1q1p/3P1b2/Q7/5N2/PP2PPPP/R3KB1R b KQkq - 0 11|f6b2 a1d1 f5c2 a4c2 b2c2|1811|18
r5k1/2B2pbp/p1n1p1p1/8/Np1q2P1/1P2p2P/PP2B3/1K2Q2R b - - 1 26|d4e4 b1a1 c6d4|1813|
r4rk1/pp4bp/3p2p1/2pPn3/2P1pNb1/1PN1P1q1/P1B3P1/1RB1QRK1 b - - 1 18|e5f3 f1f3 g3e1|1814|29,7,23
rn2kr2/5pQp/2p5/pp6/3P4/1KB5/PPP4q/R5N1 w q a6 0 21|a1e1 e8d7 g7f8 a5a4 b3a3|1816|29
r3kb1r/pp1bqppp/2n2n2/8/2BN4/1QP1B3/PP3PPP/RN2K2R b KQkq - 6 10|c6a5 c4f7 e7f7 b3f7 e8f7|1816|
k1r5/P7/2pp1p1r/3Pp2p/4P3/8/3N2PP/R5K1 w - - 0 36|d2c4 h6h8 c4b6 a8b7 b6c8|1816|1,30,18
1r1q1rk1/p1pbbppp/Bp3n2/n2PQ1N1/8/2N5/PPPP1PPP/R1B2RK1 b - - 6 11|f6g4 e5g3 e7g5|1817|20
r2q1r1k/pb2bp1B/1p2pn1Q/6N1/2Pp1Nn1/8/PP3PPP/R4RK1 w - - 6 21|g5f7 f8f7 f4g6|1820|7,4,9
r1q1k2r/4bpp1/pN1p3p/B3p3/1p6/1P3b2/1PP1QPPP/4K2R w Kkq - 0 19|e2f3 e8g8 b6c8|1820|
1r4r1/p3bk2/5p1B/1Pp2P2/P1P5/5Q2/2K4P/q7 w - - 2 30|f3h5 g8g6 h5g6|1821|1,4
1R6/6p1/7k/5Pr1/6K1/8/8/8 w - - 2 56|g4f4 g7g6 b8h8 h6g7 f4g5 g7h8 g5g6|1821|25,29,1,30,14
2R3rk/p3PQpp/1p6/2p3q1/8/PP4P1/4p2P/B1R3K1 b - - 0 31|g5c1 g1g2 c1f1|1822|1,18,5
1kr1r3/4P1pp/pp3p2/P3n3/1Kp5/P1P3P1/4R2P/4R1B1 b - - 1 35|e5d3 b4a4 b6b5|1823|1,18,4
R5k1/1R2P1p1/7p/1pp5/3p1bP1/3P1P1K/1BP3P1/4q3 b - - 2 37|g8h7 a8h8 h7h8 e7e8q e1e8|1823|25,1
3r1rk1/pp6/5pb1/5q2/2p5/P2P4/1PP4Q/2K3RR w - - 0 28|h2h7|1826|6,23
r4rk1/p2q1ppp/2nb1n2/2pN1b2/8/5PP1/PPP1N1BP/R1BQR2K b - - 0 15|f6d5 d1d5 c6b4|1826|
4r3/4qpk1/p2p1n1p/1ppP2P1/2P1r3/6QP/1P1Bb1K1/4R1N1 w - - 0 30|g5h6 g7h8 g3g7|1827|34,35,4
r5k1/1p3pp1/p1pq3p/2Qp4/PP1Pb3/4P3/5PPP/1R3RK1 b - - 1 23|d6g6 f2f3 e4b1|1827|1
r4rk1/pp3ppp/1qp1b1n1/7Q/4N3/P3P2P/1P4P1/R1B2RK1 w - - 4 18|e4g5 h7h6 g5e6 f7e6 h5g6 f8f1 g1f1|1827|
r1kq1bnr/pbp3pp/1pn5/4Q3/2B1P3/2N5/PPPP2PP/R1B2RK1 w - - 3 11|e5f5 c8b8 f5f8|1828|
5rk1/pp5p/3p1rp1/PP1Pp3/5P1P/3Q1B1q/1BR2P2/6K1 b - - 0 28|f6f4 f3e2 f4g4 e2g4 h3d3|1829|29,7
3q1r2/6k1/2p3b1/1pQpPp1p/1P1P2pR/r3P1P1/4BKP1/2R5 b - - 4 31|f5f4 e3f4 f8f4|1832|
rn2R3/ppp2kpp/3b4/3P1rQ1/2B5/2N1Bq1b/PP3P1P/R5K1 w - - 7 19|e8e7 d6e7 d5d6|1833|20,34,9
2r5/5kpr/p1np2pP/np1p1pP1/3PpP2/1P2P1N1/P1BK2R1/7R w - - 5 36|g3f5 g6f5 g5g6 f7f6 g6h7|1833|0,18,9
8/Qp2k3/2p1n1np/3p4/6P1/3N1KBP/PPPq4/8 b - - 2 45|e6g5|1834|1,6
r2q1rk1/pp1bppbp/5np1/1N2B3/8/2PB1P2/PP4PP/R2QR1K1 b - - 4 14|d7b5 d3b5 d8b6|1834|
rn1qkb1r/pp3pp1/7p/1bpP4/4N3/5N2/PP2QPPP/R3K2R w KQkq - 0 13|e4f6|1835|35,6
2n1kq2/r1Qb1p2/2B1pP2/1p2P1R1/p2r4/P5P1/KP6/8 w - - 1 36|c7c8|1836|6,23
8/2pkb2Q/p3n3/3Nq3/2K5/8/PPP3PP/R1B5 b - - 6 24|e5d4 c4b3 e6c5 b3a3 d4a4|1837|15
5k2/p1q2pb1/1p5p/1Pp3p1/2Pp2n1/P2P4/5RP1/R5QK b - - 1 34|c7g3 f2f3 g3h4 f3h3 g4f2 g1f2 h4f2|1839|1,18
1k1r3r/1P2q3/pQ3p2/8/2b4p/P3P1PP/1B4P1/R3K2R b KQ - 0 25|d8d6 b6c5 d6d1 a1d1 e7c5|1839|20,30
2rqkb1r/p4ppp/4p3/1p1n4/2NP1BQ1/1Pp4P/P4PP1/R3R1K1 w k b6 0 19|e1e6 f7e6 g4e6 f8e7 c4d6 d8d6 f4d6|1841|18,9
2b4r/2p1qp1N/pp1k1p2/3PpB2/2P5/4Q3/PP3P2/2K5 w - - 2 26|e3a3 c7c5 d5c6 d6c6 a3e7|1841|29,20,34,56,1,21
8/3B4/8/p3kPp1/P3n1K1/6P1/8/8 b - - 8 46|e4f6 g4g5 f6d7 g5g6 d7f6|1842|25,1,18,24
r1b2rk1/3p1ppp/2p1pq2/p3b3/P7/1P1B2P1/2PB1P1P/1R1QR1K1 w - - 1 19|d1h5 g7g6 h5e5 f6e5 e1e5|1843|
r1b1r1k1/2qn1ppp/pp6/2pP4/4P3/2N2PnP/PB1NBRPK/R2Q4 b - - 0 19|g3f1 h2g1 c7h2 g1f1 h2h1|1844|34,35,15,9
r1bk3r/2pp1ppp/p1p2n2/4Q3/6q1/3B1N2/PB3PPP/R3b1K1 w - - 0 18|a1e1 h8e8 e5f6 g7f6 b2f6|1845|9
2r1nNk1/1p4pp/p7/3p1p2/6nq/PP1P2NP/B1P2bP1/R1BQ1R1K b - - 0 19|h4g3 d1g4 f5g4|1845|5
rn1k1b1r/p3p1pp/4Qn2/1q1bN1B1/3P4/6P1/1P2PP1P/R3K3 w Q - 2 16|e5f7 d8c7 g5f4 c7b7 f7d8|1846|18,15
4r2k/pp5p/1bp3pB/2n1p1N1/2b1P3/P4P2/1P3KPP/3R3R b - - 4 21|c5e4 f2e1 b6f2|1848|34,35,4
5rk1/p1p1p1b1/3p1pp1/2n5/6q1/1PN1Pn2/PBPPKP2/R4Q1R b - - 9 18|f3d4 e2e1 d4c2|1848|34,35,4
5N2/1p2R1P1/2b4k/8/5K2/8/8/q5r1 w - - 0 60|g7g8n g1g8 e7h7|1849|0,1,4,11,58
4r1k1/pp2rppp/2p5/3p4/BP2PQnq/P1NP4/1BP5/5RK1 w - - 2 27|c3d5 c6d5 a4e8|1849|
3r2k1/pp1r1p2/3p3Q/4p3/4q3/8/3R1PPP/3R2K1 w - - 0 29|d2d3 e4f4 d3g3|1849|1
6k1/6p1/4P3/1K6/7p/3P4/8/8 w - - 1 43|b5c6 h4h3 e6e7 g8f7 c6d7|1849|0,25,1,2
4rk2/b1pq1ppp/p7/1p3P2/1P1n4/P3B3/Q1P1BPPP/3R1K2 b - - 1 23|e8e3 f2e3 d7f5 f1e1 d4c2|1850|
6R1/2P1R3/3p1p1p/3k4/8/p3P2P/6PK/1rr5 b - - 1 42|a3a2 g8a8 a2a1q e3e4 d5d4 a8a1 b1a1|1850|0,25,1,11,14
4rrk1/pbq2ppp/1p3n2/1Pp5/P1P2b2/4PP2/1B1NQ2P/1B2RRK1 w - - 1 18|b2f6 e8e3 e2g2|1850|23
4r1k1/ppBP1p1p/6p1/7n/1PPb3q/r6P/4B1P1/2RQ1R1K b - - 0 23|a3h3 g2h3 h4h3 c7h2 h5g3|1853|7,15,9
8/6k1/1B2p1p1/3pPpK1/3P1P2/6P1/2n2N2/5b2 b - - 0 55|c2e1 g3g4 e1f3|1855|1,4,12
5r2/5p1k/3R4/1p1pB3/6Bp/6R1/5rPK/3q4 w - - 0 36|g4f5 f2f5 g3g7 h7h8 d6h6|1855|31,30,15,9
8/8/ppn4p/2p2p2/N1K1k3/1PP4P/P4PP1/8 b - - 1 36|c6e5|1856|1,10,6
r3r1k1/pq3ppp/2p5/2Nn4/3p4/3P1Q2/PPP2PPP/R3R1K1 b - - 0 19|e8e1 a1e1 b7b4 e1e2 b4c5|1856|18
4q1k1/5p2/1prb1rp1/pBnR3p/4pP2/1P4PP/4Q1K1/3R4 w - - 0 42|d5d6 c6d6 b5e8|1858|
4r1k1/p4pp1/2Q4p/3p2q1/8/2PBNb2/PP3P1K/R7 b - - 4 23|g5h4 h2g1 h4h1|1859|4
r2r2k1/pp3p2/2n1b2Q/3pPp2/3q3p/P7/1P1B1PPP/R4RK1 w - - 0 20|d2g5 d4e5 g5f6 e5f6 h6f6|1859|18
8/5p2/3k1pp1/2pP3p/p1P1P2P/P2rK1P1/8/8 w - - 0 48|e3d3 g6g5 d3e3|1860|25,1
1k1r4/pppq4/P1nb1p2/1B1p4/1P1P3p/2P2pPP/3N3K/R2Q1RN1 b - - 0 22|h4g3 h2h1 g3g2|1862|0,4
8/5p1p/p2r1pk1/1p2p3/1n2PP2/3BK1P1/1PP4P/R7 b - f3 0 24|d6d3 c2d3 b4c2 e3d2 c2a1|1862|1,18,9
3r2k1/1p3ppp/3Np3/P1B1P3/1Q2qP2/5n2/5PRP/5K2 b - - 1 29|e4d3|1864|6
3qbnkr/r6p/1p1p1p2/p1p1pPp1/P1P1P2Q/1P1PB1R1/6PP/1R4K1 w - g6 0 32|e3g5 f6g5 g3g5 d8g5 h4g5|1865|7
8/p4Rpk/5Q1p/3q4/6r1/1P6/P6P/2R2K2 b - - 2 33|d5g2 f1e1 g4e4 e1d1 g2e2|1866|1,30,15
5rk1/6b1/pp2p1Q1/4Pn2/3qBPP1/3p4/PP4KP/5R2 w - - 4 31|g6e6 g8h8 e4f5|1867|
8/8/bPN2p2/P1K4p/5k1p/8/8/8 w - - 0 50|c6b4 h4h3 b4a6|1867|1
1r6/6pk/3R3p/5R2/6nP/6P1/1r4B1/6K1 b - - 0 46|b2g2 g1g2 g4e3 g2h3 e3f5|1871|40,1,30,18,9
4r2r/5Q2/pk1q4/3p2p1/p1pN4/2P5/5PPP/R5K1 w - - 0 32|a1b1 b6a5 b1b5 a6b5 f7a7 d6a6 d4c6|1873|1,46,23,9
r4rk1/1p3ppp/p1q1p3/2b1Pn2/6Q1/2N5/PP1B1PPP/2R2RK1 w - - 10 18|c3e4 b7b6 b2b4|1876|
8/4n3/5kp1/2K2p1p/2B2P1P/8/5P2/8 w - - 5 42|c5d6 e7c8 d6c7|1877|25,1
r1bqk2r/pppnppbp/3p2pn/6N1/2B1P3/2N5/PPPP1PPP/R1BQK2R w KQkq - 6 6|c4f7 h6f7 g5e6 d7f6 e6d8|1880|22,18,9,47
Bn2r1k1/p4ppp/3p4/2p3bP/3p2P1/1P1Q4/1PP1NN1q/R3K3 b Q - 1 21|h2g1|1881|6,23
6k1/6pp/8/1Bp5/3bKp2/4pP2/r5PP/4R3 w - - 6 37|b5c4 g8f8 c4a2 d4c3 e1e2|1881|1,18
8/8/8/2K5/1P4r1/2k5/6p1/6R1 b - - 3 55|g4g5 c5d6 c3b4|1884|29,1,14
2k1r3/2p5/p3r3/N5pP/6P1/Q2RP1K1/5R2/1q6 b - - 11 37|b1g1 f2g2 e6e3 d3e3 e8e3 a3e3 g1e3|1885|18
6k1/6p1/4p2p/3qP2P/2p2Q2/P2r2P1/5P1K/2R5 b - - 6 39|d3f3 c1c4 f3f4|1885|1
k4rr1/pp3p2/2q5/8/1R2Q3/P5P1/1PP2P2/4R1K1 b - - 2 29|f8e8 e4e8 g8e8 e1e8 c6e8|1885|1
8/bPB5/3p4/3Pp3/3NPp2/8/4K1k1/8 b - - 0 59|e5d4 e2d2 f4f3 b7b8q a7b8|1888|1
r1b1q2r/p3nkp1/1b2N3/1pnpP3/5pQ1/2P2N2/PP3PPP/R1B1R1K1 w - - 1 19|g4g7 f7e6 g7f6 e6d7 f6d6|1894|15,9
r3k2r/pbp2pp1/1pnqpn1p/4N3/Q1BP4/4P1P1/PP3PP1/RN2K2R w KQkq - 1 12|c4b5 e8g8 b5c6|1895|
r2q1r1k/p1p3pp/1pRbB3/1P3p2/P2Pn3/1Q2P3/1B3PPP/2R3K1 b - - 0 22|d6h2 g1h2 d8h4 h2g1 h4f2|1895|40,7,9
r2qr1k1/2p2pP1/1p2b1n1/5P2/p1P1P3/P2B3Q/1BP3pn/2K3N1 w - - 1 27|h3h8 g6h8 g7h8q|1896|0,7,4,11
2r2rk1/pp3ppp/1q2p3/3p4/3b4/1PNQ3P/P1P2PP1/R4RK1 w - - 2 16|c3a4 b6b4 a2a3 b4a5 d3d4|1896|
8/6p1/K7/1p3k2/1P6/P7/8/8 w - - 1 46|a6b5 g7g5 b5c4|1897|25,1,2
8/2p5/pp2B3/P3b3/1PPk1p1P/5K2/8/8 w - - 0 39|b4b5 a6b5 a5a6|1897|8,1
4r2k/R7/1p6/5pPp/3P3K/4P3/PP2QPq1/2R5 b - - 0 32|g2h2|1898|1,6
1r4k1/4pp1p/3p2p1/3P4/4P3/q4P2/P1Q3PP/1R4K1 b - - 3 31|a3c5 g1h1 c5c2 b1b8 g8g7|1899|1
`;
