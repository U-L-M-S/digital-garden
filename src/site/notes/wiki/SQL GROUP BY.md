---
{"dg-publish":true,"permalink":"/wiki/sql-group-by/","tags":["informatik/code/sql"],"noteIcon":"","updated":"2026-07-02T01:13:38.523+02:00","dg-note-properties":{"tags":["informatik/code/sql"],"aliases":null,"links":null,"created_date":"2025-09-15"}}
---

> Befehl wird verwendet, um [[wiki/SQL Zeile\|SQL Zeile]]n zu gruppieren, die gleiche Werte in bestimmten [[wiki/SQL Spalte\|SQL Spalte]]n haben. Oft mit Aggregatfunktionen wie COUNT, SUM, AVG verwendet.

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
