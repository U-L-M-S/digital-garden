---
{"dg-publish":true,"permalink":"/02-resources/notes/sql-insert/","tags":["code/SQL","empty"],"updated":"2024-10-11T11:20:13.976+02:00"}
---

>Befehl wir verwendet um [[02 - RESOURCES/Notes/SQL Zeile\|SQL Zeile]] (Werten) in die [[02 - RESOURCES/Notes/SQL Spalte\|SQL Spalte]]n ([[02 - RESOURCES/Notes/Variable\|Variable]]) einsetzen.

```sql
INSERT INTO Tabell_Name (Spalte1, Spalte2, Spalte3)
VALUES (valuer1, valuer2, valuer3);
```

```sql
INSERT INTO Tabell_Name (Spalte1, Spalte2, Spalte3)
VALUES (valuer1, valuer2, valuer3),
VALUES (valuer4, valuer5, valuer6);
```

>[!note] Yep.... Es sieht so wie eine 2D Array aus.