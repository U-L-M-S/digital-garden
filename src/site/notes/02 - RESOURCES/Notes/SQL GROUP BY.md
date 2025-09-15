---
{"dg-publish":true,"permalink":"/02-resources/notes/sql-group-by/","tags":["informatik/code/SQL"],"noteIcon":"","updated":"2025-09-15T15:16:16.502+02:00"}
---

> Befehl wird verwendet um [[02 - RESOURCES/Notes/SQL Zeile\|SQL Zeile]]n zu gruppieren die gleiche Werte in bestimmten [[02 - RESOURCES/Notes/SQL Spalte\|SQL Spalte]]n haben. Oft mit Aggregatfunktionen wie COUNT, SUM, AVG verwendet.

```sql
-- Grundlegende Gruppierung
SELECT Spalte_Name, COUNT(*)
FROM Tabell_Name
GROUP BY Spalte_Name;
```

```sql
-- Mit mehreren Spalten
SELECT Spalte1, Spalte2, COUNT(*)
FROM Tabell_Name
GROUP BY Spalte1, Spalte2;
```

```sql
-- Mit Aggregatfunktionen
SELECT lehrer_name, COUNT(*) as anzahl_kurse
FROM Kurse
GROUP BY lehrer_name;
```

> [!note] GROUP BY fasst gleiche Werte zusammen und zählt/berechnet sie.
