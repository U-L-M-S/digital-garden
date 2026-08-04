---
{"dg-publish":true,"permalink":"/wiki/sql-alter/","tags":["informatik/datenbank"],"noteIcon":"","updated":"2026-07-19T03:56:26.000+02:00","dg-note-properties":{"aliases":null,"created_date":"2024-10-10","links":null,"tags":["informatik/datenbank"]}}
---

> Befehl wird verwendet, um die Struktur einer bereits existierenden [[wiki/SQL Tabelle\|SQL Tabelle]] zu ändern. Du kannst [[wiki/SQL Spalte\|SQL Spalte]]n hinzufügen, entfernen oder bearbeiten.

```sql
-- Spalte hinzufügen
ALTER TABLE Tabell_Name 
ADD Spalte_Name Datentyp;
```

```sql
-- Spalte entfernen
ALTER TABLE Tabell_Name 
DROP COLUMN Spalte_Name;
```

```sql
-- Spalte umbenennen
ALTER TABLE Tabell_Name 
RENAME COLUMN alter_name TO neuer_name;
```

```sql
-- Datentyp ändern
ALTER TABLE Tabell_Name 
MODIFY Spalte_Name neuer_Datentyp;
```

> [!note] Vorsicht.... ALTER kann Daten löschen. Immer Backup machen!