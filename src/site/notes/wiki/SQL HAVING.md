---
{"dg-publish":true,"permalink":"/wiki/sql-having/","tags":["informatik/datenbank"],"noteIcon":"","updated":"2026-07-19T03:56:26.852+02:00","dg-note-properties":{"tags":["informatik/datenbank"],"aliases":null,"links":null,"created_date":"2025-09-15"}}
---

> Befehl wird verwendet, um Bedingungen auf gruppierte Daten anzuwenden. Funktioniert wie [[wiki/SQL WHERE\|SQL WHERE]], aber für [[wiki/SQL GROUP BY\|SQL GROUP BY]] Ergebnisse.

```sql
-- Grundlegende HAVING Bedingung
SELECT Spalte_Name, COUNT(*)
FROM Tabell_Name
GROUP BY Spalte_Name
HAVING COUNT(*) > 1;
```

```sql
-- Mit verschiedenen Aggregatfunktionen
SELECT lehrer_name, COUNT(*) as anzahl
FROM Kurse
GROUP BY lehrer_name
HAVING COUNT(*) >= 2;
```

```sql
-- Kombiniert mit WHERE
SELECT spalte, AVG(wert)
FROM tabelle
WHERE bedingung = 'wert'
GROUP BY spalte
HAVING AVG(wert) > 50;
```

> [!note] WHERE filtert vor GROUP BY, HAVING filtert nach GROUP BY.