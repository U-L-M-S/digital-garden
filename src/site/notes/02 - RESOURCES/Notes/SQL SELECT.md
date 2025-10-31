---
{"dg-publish":true,"permalink":"/02-resources/notes/sql-select/","tags":["informatik/code/SQL","informatik/datenbank"],"noteIcon":"","updated":"2025-10-29T12:59:10.497+01:00"}
---

>Befehl, der verwendet wird, um die [[02 - RESOURCES/Notes/SQL Spalte\|SQL Spalte]] herauszusuchen.

```sql
SELECT *
```
>[!note] So werden alle [[02 - RESOURCES/Notes/SQL Spalte\|SQL Spalte]]n von eine [[02 - RESOURCES/Notes/SQL Tabelle\|SQL Tabelle]] angezeigt (die [[02 - RESOURCES/Notes/SQL Tabelle\|SQL Tabelle]], die angezeigt sein sollte wurde **nicht** ausgewählt mit [[02 - RESOURCES/Notes/SQL FROM\|SQL FROM]]).

Man kann auch bestimmten [[02 - RESOURCES/Notes/SQL Spalte\|SQL Spalte]]n auswählen.
```sql
SELECT Tabellname.Spaltename1, Tabellname.Spaltename2
```

>[!tip] 
>Man kann auch **nur** die Name von die [[02 - RESOURCES/Notes/SQL Spalte\|SQL Spalte]]n schreiben.
>Es gibt aber den Risiko um Konflikten wenn 2 oder mehrere [[02 - RESOURCES/Notes/SQL Tabelle\|SQL Tabelle]]n die gleichen [[02 - RESOURCES/Notes/SQL Spalte\|SQL Spalte]]n haben.

```sql
SELECT Spaltename1, Spaltename2
```