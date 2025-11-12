---
{"dg-publish":true,"permalink":"/02-resources/notes/sql-update/","tags":["informatik/code/SQL","informatik/datenbank","GFN/prüfungsrelevant/AP2"],"noteIcon":"","updated":"2025-11-12T14:32:08.000+01:00"}
---

>Befehl wird verwendet um bereits existierende Daten in einer [[02 - RESOURCES/Notes/SQL Tabelle\|SQL Tabelle]] zu ändern.
>>UPDATE ändert Werte in bestehenden [[02 - RESOURCES/Notes/SQL Zeile\|SQL Zeile]]n, ohne neue Zeilen hinzuzufügen.

```
UPDATE Ablauf:

     Start
       │
       │ UPDATE Tabelle
       │ SET spalte = wert
       │ WHERE bedingung
       ▼
  ┌──────────┐
  │ WHERE    │         ACHTUNG!
  │ Klausel? │    ┌──────────────────┐
  │          │───>│ ALLE Zeilen      │
  └────┬─────┘ NEIN│ werden geändert! │
       │ JA        └──────────────────┘
       ▼
  ┌──────────┐
  │ Finde    │
  │ passende │
  │ Zeilen   │
  └────┬─────┘
       │
       ▼
  ┌──────────┐
  │ Ändere   │
  │ Werte    │
  └────┬─────┘
       │
       ▼
    Erfolg!

Visuelle Darstellung - Eine Spalte ändern:

VORHER:
┌────┬─────────┬──────────┬───────┐
│ id │ vorname │ nachname │ alter │
├────┼─────────┼──────────┼───────┤
│ 1  │  Max    │  Müller  │  18   │
│ 2  │  Anna   │  Schmidt │  19   │
│ 3  │  Tom    │  Wagner  │  20   │
└────┴─────────┴──────────┴───────┘

UPDATE Schueler
SET alter = 21
WHERE id = 3;

NACHHER:
┌────┬─────────┬──────────┬───────┐
│ id │ vorname │ nachname │ alter │
├────┼─────────┼──────────┼───────┤
│ 1  │  Max    │  Müller  │  18   │
│ 2  │  Anna   │  Schmidt │  19   │
│ 3  │  Tom    │  Wagner  │  21   │ ← GEÄNDERT!
└────┴─────────┴──────────┴───────┘

Mehrere Spalten gleichzeitig ändern:

VORHER:
┌────┬─────────┬──────────┬───────┐
│ id │ vorname │ nachname │ alter │
├────┼─────────┼──────────┼───────┤
│ 1  │  Max    │  Müller  │  18   │
└────┴─────────┴──────────┴───────┘

UPDATE Schueler
SET vorname = 'Maximilian',
    alter = 19
WHERE id = 1;

NACHHER:
┌────┬────────────┬──────────┬───────┐
│ id │  vorname   │ nachname │ alter │
├────┼────────────┼──────────┼───────┤
│ 1  │ Maximilian │  Müller  │  19   │
└────┴────────────┴──────────┴───────┘
     ↑ GEÄNDERT             ↑ GEÄNDERT

GEFAHR - Ohne WHERE:

UPDATE Schueler
SET alter = 99;  ← KEIN WHERE!

┌────┬─────────┬──────────┬───────┐
│ id │ vorname │ nachname │ alter │
├────┼─────────┼──────────┼───────┤
│ 1  │  Max    │  Müller  │  99   │ ← ALLE
│ 2  │  Anna   │  Schmidt │  99   │ ← ALLE
│ 3  │  Tom    │  Wagner  │  99   │ ← ALLE
└────┴─────────┴──────────┴───────┘
                             ↑
                     ALLES GEÄNDERT!
```

## Syntax - Einzelne Spalte

```sql
UPDATE Tabell_Name
SET Spalte_Name = neuer_Wert
WHERE Bedingung;
```

## Syntax - Mehrere Spalten

```sql
UPDATE Tabell_Name
SET Spalte1 = wert1,
    Spalte2 = wert2,
    Spalte3 = wert3
WHERE Bedingung;
```

>[!example] Praktisches Beispiel
>```sql
>-- Eine Spalte ändern
>UPDATE Schueler
>SET vorname = 'Maximilian'
>WHERE schueler_id = 1;
>
>-- Mehrere Spalten ändern
>UPDATE Schueler
>SET vorname = 'Maximilian',
>    nachname = 'Mustermann',
>    geburtsdatum = '2005-01-01'
>WHERE schueler_id = 1;
>
>-- Alle Zeilen ändern (VORSICHT!)
>UPDATE Kurse
>SET lehrer_name = 'Neu';
>```

>[!important] Prüfungsrelevant
>- UPDATE ist Teil des **DML** (Data Manipulation Language)
>- Ändert nur bestehende Daten (keine neuen Zeilen)
>- WHERE ist fast immer notwendig!
>- Ohne WHERE werden ALLE Zeilen geändert

>[!warning] GEFAHR!
>```sql
>UPDATE Schueler SET vorname = 'Max';
>```
>Ohne WHERE werden ALLE Schüler zu "Max"!
>
>**IMMER WHERE verwenden** (außer du willst wirklich alle ändern)

>[!tip] Best Practice
>1. Erst SELECT mit WHERE testen:
>   ```sql
>   SELECT * FROM Schueler WHERE id = 1;
>   ```
>2. Dann UPDATE mit gleicher WHERE:
>   ```sql
>   UPDATE Schueler SET vorname = 'Max' WHERE id = 1;
>   ```
