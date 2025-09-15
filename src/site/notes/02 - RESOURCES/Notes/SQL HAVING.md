---
{"dg-publish":true,"permalink":"/02-resources/notes/sql-having/","tags":["informatik/code/SQL"],"noteIcon":"","updated":"2025-09-15T15:17:15.083+02:00"}
---

> Befehl wird verwendet um Bedingungen auf gruppierte Daten anzuwenden. Funktioniert wie [[02 - RESOURCES/Notes/SQL WHERE\|SQL WHERE]], aber für [[02 - RESOURCES/Notes/SQL GROUP BY\|SQL GROUP BY]] Ergebnisse.

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