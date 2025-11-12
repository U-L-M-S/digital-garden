---
{"dg-publish":true,"permalink":"/02-resources/notes/sql-delete/","tags":["informatik/code/SQL","informatik/datenbank","GFN/prüfungsrelevant/AP2"],"noteIcon":"","updated":"2025-11-12T14:32:47.000+01:00"}
---

>Befehl wird verwendet um bereits existierende [[02 - RESOURCES/Notes/SQL Zeile\|SQL Zeile]]n aus einer [[02 - RESOURCES/Notes/SQL Tabelle\|SQL Tabelle]] zu löschen.
>>DELETE entfernt komplette Datensätze (Zeilen), nicht einzelne Spalten.

```
DELETE Ablauf:

     Start
       │
       │ DELETE FROM Tabelle
       │ WHERE bedingung
       ▼
  ┌──────────┐
  │ WHERE    │         ACHTUNG!
  │ Klausel? │    ┌──────────────────┐
  │          │───>│ ALLE Zeilen      │
  └────┬─────┘ NEIN│ werden gelöscht! │
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
  │ Lösche   │
  │ Zeilen   │
  └────┬─────┘
       │
       ▼
    Erfolg!

Visuelle Darstellung - Eine Zeile löschen:

VORHER:
┌────┬─────────┬──────────┬───────┐
│ id │ vorname │ nachname │ alter │
├────┼─────────┼──────────┼───────┤
│ 1  │  Max    │  Müller  │  18   │
│ 2  │  Anna   │  Schmidt │  19   │
│ 3  │  Tom    │  Wagner  │  20   │
└────┴─────────┴──────────┴───────┘

DELETE FROM Schueler
WHERE id = 2;

NACHHER:
┌────┬─────────┬──────────┬───────┐
│ id │ vorname │ nachname │ alter │
├────┼─────────┼──────────┼───────┤
│ 1  │  Max    │  Müller  │  18   │
│ 3  │  Tom    │  Wagner  │  20   │
└────┴─────────┴──────────┴───────┘
     Anna wurde KOMPLETT gelöscht!

Mehrere Zeilen löschen:

VORHER:
┌────┬─────────┬──────────┬───────┐
│ id │ vorname │ nachname │ alter │
├────┼─────────┼──────────┼───────┤
│ 1  │  Max    │  Müller  │  17   │
│ 2  │  Anna   │  Schmidt │  19   │
│ 3  │  Tom    │  Wagner  │  16   │
│ 4  │  Lisa   │  Becker  │  20   │
└────┴─────────┴──────────┴───────┘

DELETE FROM Schueler
WHERE alter < 18;

NACHHER:
┌────┬─────────┬──────────┬───────┐
│ id │ vorname │ nachname │ alter │
├────┼─────────┼──────────┼───────┤
│ 2  │  Anna   │  Schmidt │  19   │
│ 4  │  Lisa   │  Becker  │  20   │
└────┴─────────┴──────────┴───────┘

GEFAHR - Ohne WHERE:

DELETE FROM Schueler;  ← KEIN WHERE!

┌────┬─────────┬──────────┬───────┐
│ id │ vorname │ nachname │ alter │
├────┼─────────┼──────────┼───────┤
│    │         │          │       │ ← LEER!
└────┴─────────┴──────────┴───────┘
        ALLES GELÖSCHT!
```

## Syntax - Einzelne Zeile

```sql
DELETE FROM Tabell_Name
WHERE Bedingung;
```

## Syntax - Mehrere Zeilen

```sql
DELETE FROM Tabell_Name
WHERE Spalte_Name IN (wert1, wert2, wert3);
```

## Syntax - Alle Zeilen (GEFAHR!)

```sql
DELETE FROM Tabell_Name;
```

>[!example] Praktisches Beispiel
>```sql
>-- Eine Zeile löschen
>DELETE FROM Schueler
>WHERE schueler_id = 1;
>
>-- Mehrere Zeilen löschen (mit IN)
>DELETE FROM Schueler
>WHERE schueler_id IN (1, 3, 5);
>
>-- Mehrere Zeilen löschen (mit Bedingung)
>DELETE FROM Schueler
>WHERE YEAR(geburtsdatum) < 2005;
>
>-- Alle Zeilen löschen (VORSICHT!)
>DELETE FROM Kurse;
>```

>[!important] Prüfungsrelevant
>- DELETE ist Teil des **DML** (Data Manipulation Language)
>- Löscht komplette Zeilen (Datensätze)
>- Ohne WHERE wird ALLES gelöscht
>- Tabelle bleibt bestehen (nur Inhalt weg)

>[!warning] GEFAHR!
>```sql
>DELETE FROM Schueler;
>```
>Ohne WHERE werden ALLE Schüler gelöscht!
>Die Tabelle ist dann leer, existiert aber noch.
>
>**IMMER WHERE verwenden** (außer du willst wirklich alles löschen)

>[!tip] DELETE vs TRUNCATE vs DROP
>```
>┌──────────┬─────────────┬──────────────┬──────────────┐
>│ Befehl   │ Löscht      │ Tabelle?     │ Rückgängig?  │
>├──────────┼─────────────┼──────────────┼──────────────┤
>│ DELETE   │ Zeilen      │ bleibt       │ Ja (ROLLBACK)│
>│ TRUNCATE │ Alle Zeilen │ bleibt       │ Nein         │
>│ DROP     │ Alles       │ wird gelöscht│ Nein         │
>└──────────┴─────────────┴──────────────┴──────────────┘
>```

>[!note] Best Practice
>1. Erst SELECT mit WHERE testen:
>   ```sql
>   SELECT * FROM Schueler WHERE id = 1;
>   ```
>2. Dann DELETE mit gleicher WHERE:
>   ```sql
>   DELETE FROM Schueler WHERE id = 1;
>   ```
