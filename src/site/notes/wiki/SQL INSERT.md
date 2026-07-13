---
{"dg-publish":true,"permalink":"/wiki/sql-insert/","tags":["informatik/code/sql","informatik/datenbank","GFN/prüfungsrelevant/AP2"],"noteIcon":"","updated":"2026-07-02T01:13:38.525+02:00","dg-note-properties":{"aliases":["SQL INSERT"],"created_date":"2024-10-10","links":null,"tags":["informatik/code/sql","informatik/datenbank","GFN/prüfungsrelevant/AP2"]}}
---

>Befehl wird verwendet, um [[wiki/SQL Zeile\|SQL Zeile]]n (Werte) in die [[wiki/SQL Spalte\|SQL Spalte]]n ([[wiki/Variable\|Variable]]n) einzufügen.
>>INSERT ist Teil der **DML** (Data Manipulation Language) und fügt neue Datensätze in eine [[wiki/SQL Tabelle\|SQL Tabelle]] ein.

```
INSERT Ablauf:

     Start
       │
       │ INSERT INTO Tabelle
       │ VALUES (...)
       ▼
  ┌─────────┐
  │ Syntax  │
  │ prüfen  │
  └────┬────┘
       │
       ▼
  ┌─────────┐         Fehler!
  │ Spalten │    ┌───────────────┐
  │ und     │───>│ Fehler: Anzahl│
  │ Werte   │    │ stimmt nicht  │
  │ passen? │    └───────────────┘
  └────┬────┘
       │ Ja
       ▼
  ┌─────────┐
  │ Werte   │
  │ in      │
  │ Tabelle │
  │ einfügen│
  └────┬────┘
       │
       ▼
    Erfolg!

Visuelle Darstellung - Eine Zeile einfügen:

VORHER:
┌────┬─────────┬──────────┐
│ id │ vorname │ nachname │
├────┼─────────┼──────────┤
│ 1  │  Max    │  Müller  │
│ 2  │  Anna   │  Schmidt │
└────┴─────────┴──────────┘

INSERT INTO Schueler (id, vorname, nachname)
VALUES (3, 'Tom', 'Wagner');

NACHHER:
┌────┬─────────┬──────────┐
│ id │ vorname │ nachname │
├────┼─────────┼──────────┤
│ 1  │  Max    │  Müller  │
│ 2  │  Anna   │  Schmidt │
│ 3  │  Tom    │  Wagner  │ ← NEU!
└────┴─────────┴──────────┘

Mehrere Zeilen gleichzeitig einfügen:

┌────┬─────────┬──────────┐
│ id │ vorname │ nachname │
├────┼─────────┼──────────┤
│ 1  │  Max    │  Müller  │
└────┴─────────┴──────────┘
            │
            │ INSERT INTO Schueler
            │ VALUES (2, 'Anna', 'Schmidt'),
            │        (3, 'Tom', 'Wagner'),
            │        (4, 'Lisa', 'Becker');
            ▼
┌────┬─────────┬──────────┐
│ id │ vorname │ nachname │
├────┼─────────┼──────────┤
│ 1  │  Max    │  Müller  │
│ 2  │  Anna   │  Schmidt │ ← NEU!
│ 3  │  Tom    │  Wagner  │ ← NEU!
│ 4  │  Lisa   │  Becker  │ ← NEU!
└────┴─────────┴──────────┘

2D-Array Vergleich:
┌──────────────────────────────┐
│   (Spalte1, Spalte2, Spalte3)│
│   ┌────────────────────────┐ │
│   │ (wert1,  wert2,  wert3)│ │ ← Zeile 1
│   │ (wert4,  wert5,  wert6)│ │ ← Zeile 2
│   │ (wert7,  wert8,  wert9)│ │ ← Zeile 3
│   └────────────────────────┘ │
└──────────────────────────────┘
```

## Syntax - Einzelne Zeile

```sql
INSERT INTO Tabell_Name (Spalte1, Spalte2, Spalte3)
VALUES (wert1, wert2, wert3);
```

## Syntax - Mehrere Zeilen

```sql
INSERT INTO Tabell_Name (Spalte1, Spalte2, Spalte3)
VALUES (wert1, wert2, wert3),
       (wert4, wert5, wert6),
       (wert7, wert8, wert9);
```

>[!note] Yep.... Es sieht so wie ein 2D-Array aus.

>[!example] Praktisches Beispiel
>```sql
>-- Eine Zeile einfügen
>INSERT INTO Schueler (schueler_id, vorname, nachname, geburtsdatum)
>VALUES (1, 'Max', 'Muster', '2005-04-15');
>
>-- Mehrere Zeilen auf einmal
>INSERT INTO Schueler (schueler_id, vorname, nachname, geburtsdatum)
>VALUES
>  (2, 'Anna', 'Beispiel', '2006-05-20'),
>  (3, 'Tom', 'Schneider', '2004-08-12'),
>  (4, 'Lisa', 'Müller', '2005-11-01');
>```

>[!important] Prüfungsrelevant
>- INSERT ist Teil des **DML** (Data Manipulation Language)
>- Anzahl der Spalten muss mit Anzahl der Werte übereinstimmen
>- Datentypen müssen passen (INT, VARCHAR, DATE, etc.)
>- [[wiki/Primary Key\|Primary Key]] darf nicht doppelt vorkommen

>[!warning] Häufige Fehler
>- Fehlende Anführungszeichen bei Strings: `'Text'`
>- Falsche Reihenfolge der Werte
>- Doppelte Primary Keys
>- NULL in NOT NULL Spalten