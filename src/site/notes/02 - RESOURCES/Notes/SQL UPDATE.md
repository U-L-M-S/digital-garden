---
{"dg-publish":true,"permalink":"/02-resources/notes/sql-update/","tags":["informatik/code/SQL","informatik/datenbank"],"noteIcon":"","updated":"2025-09-15T14:32:46.427+02:00"}
---

> Befehl wird verwendet um die Struktur einer bereits existierenden [[02 - RESOURCES/Notes/SQL Tabelle\|SQL Tabelle]] zu ändern. Du kannst [[02 - RESOURCES/Notes/SQL Spalte\|SQL Spalte]]n hinzufügen, entfernen oder bearbeiten.

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