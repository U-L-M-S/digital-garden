---
{"dg-publish":true,"permalink":"/02-resources/notes/sql-delete/","tags":["informatik/code/SQL"],"noteIcon":"","updated":"2025-09-16T23:41:26.000+02:00"}
---

> Befehl wird verwendet um bereits existierende [[02 - RESOURCES/Notes/SQL Zeile\|SQL Zeile]]n aus einer [[02 - RESOURCES/Notes/SQL Tabelle\|SQL Tabelle]] zu löschen. Du entfernst komplette Datensätze.

```sql
-- Eine bestimmte Zeile löschen
DELETE FROM Tabell_Name 
WHERE Bedingung;
```

```sql
-- Mehrere Zeilen löschen
DELETE FROM Tabell_Name 
WHERE Spalte_Name IN (wert1, wert2, wert3);
```

```sql
-- Alle Zeilen löschen
DELETE FROM Tabell_Name;
```

```sql
-- Beispiel
DELETE FROM Schueler 
WHERE schueler_id = 1;
```

> [!important] Ohne WHERE wird ALLES gelöscht! Immer WHERE verwenden.
