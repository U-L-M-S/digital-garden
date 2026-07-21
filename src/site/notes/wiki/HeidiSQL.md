---
{"dg-publish":true,"permalink":"/wiki/heidi-sql/","tags":["informatik/datenbank","informatik/software"],"noteIcon":"","updated":"2026-07-19T03:56:26.000+02:00","dg-note-properties":{"aliases":["heidi sql","heidisql"],"created":"2026-05-19 19:00","links":"https://www.heidisql.com/","path":"Notes","tags":["informatik/datenbank","informatik/software"]}}
---

>[[wiki/HeidiSQL\|HeidiSQL]] ist ein GUI-Client für [[wiki/MariaDB\|MariaDB]] / MySQL.
>>Mit diesem Tool habe ich `levi_learning_db` angelegt.

# I. Wofür?
___
- DBs und Tabellen erstellen (visuell oder per SQL)
- Daten ansehen, ändern, löschen
- SQL-Skripte ausführen
- Schema vergleichen

# II. Mein Sicherheits-Pattern
___
Vor jedem DB-Eingriff:

```sql
SELECT COUNT(*) FROM information_schema.tables
WHERE table_schema = 'automationserver';
```

→ Wert merken, später erneut prüfen — muss **identisch** sein.

>[!warning]
>Niemals an Produktiv-DBs (`automationserver`) ändern. Immer eigene DB nutzen ([[wiki/MariaDB\|levi_learning_db]]).
