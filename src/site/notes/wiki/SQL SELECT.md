---
{"dg-publish":true,"permalink":"/wiki/sql-select/","tags":["informatik/datenbank","ausbildung/pruefung"],"noteIcon":"","updated":"2026-07-19T03:56:26.000+02:00","dg-note-properties":{"aliases":["SQL SELECT"],"created_date":"2024-10-11","links":null,"tags":["informatik/datenbank","ausbildung/pruefung"]}}
---

>Befehl, der verwendet wird, um die [[wiki/SQL Spalte\|SQL Spalte]] herauszusuchen.
>>SELECT ist der wichtigste SQL-Befehl zum Lesen von Daten aus einer [[wiki/SQL Datenbank\|SQL Datenbank]].

```
SELECT-Abfrage Ablauf:

Datenbank          SQL-Engine        Ergebnis
    │                  │                 │
    │  SELECT * FROM   │                 │
    │  users;          │                 │
    ├─────────────────>│                 │
    │                  │                 │
    │                  ├─ Tabelle laden  │
    │                  ├─ Filter WHERE   │
    │                  ├─ Spalten wählen │
    │                  │                 │
    │<─────────────────┤                 │
    │  Ergebnis-Rows   │                 │
    └──────────────────┴────────────────>│
                                    Ausgabe

Visuelle Darstellung - Alle Spalten auswählen:

Tabelle: Schueler
┌──────────┬─────────┬──────────┬──────────────┐
│ id (PK)  │ vorname │ nachname │ geburtsdatum │
├──────────┼─────────┼──────────┼──────────────┤
│    1     │  Max    │  Müller  │  2005-04-15  │
│    2     │  Anna   │  Schmidt │  2006-08-20  │
└──────────┴─────────┴──────────┴──────────────┘
                 │
                 │ SELECT *
                 │ FROM Schueler
                 ▼
┌──────────┬─────────┬──────────┬──────────────┐
│ id (PK)  │ vorname │ nachname │ geburtsdatum │ ← ALLE
├──────────┼─────────┼──────────┼──────────────┤
│    1     │  Max    │  Müller  │  2005-04-15  │
│    2     │  Anna   │  Schmidt │  2006-08-20  │
└──────────┴─────────┴──────────┴──────────────┘

Visuelle Darstellung - Spezifische Spalten:

Tabelle: Schueler
┌──────────┬─────────┬──────────┬──────────────┐
│ id (PK)  │ vorname │ nachname │ geburtsdatum │
├──────────┼─────────┼──────────┼──────────────┤
│    1     │  Max    │  Müller  │  2005-04-15  │
│    2     │  Anna   │  Schmidt │  2006-08-20  │
└──────────┴─────────┴──────────┴──────────────┘
                 │
                 │ SELECT vorname, nachname
                 │ FROM Schueler
                 ▼
         ┌─────────┬──────────┐
         │ vorname │ nachname │  ← NUR ausgewählte
         ├─────────┼──────────┤
         │  Max    │  Müller  │
         │  Anna   │  Schmidt │
         └─────────┴──────────┘
```

```sql
SELECT *
```
>[!note] So werden alle [[wiki/SQL Spalte\|SQL Spalte]]n von einer [[wiki/SQL Tabelle\|SQL Tabelle]] angezeigt (die [[wiki/SQL Tabelle\|SQL Tabelle]], die angezeigt sein sollte, wurde **nicht** ausgewählt mit [[wiki/SQL FROM\|SQL FROM]]).

## Bestimmte Spalten auswählen

Man kann auch bestimmte [[wiki/SQL Spalte\|SQL Spalte]]n auswählen.
```sql
SELECT Tabellname.Spaltename1, Tabellname.Spaltename2
```

>[!tip]
>Man kann auch **nur** die Namen von den [[wiki/SQL Spalte\|SQL Spalte]]n schreiben.
>Es gibt aber das Risiko von Konflikten, wenn 2 oder mehrere [[wiki/SQL Tabelle\|SQL Tabelle]]n die gleichen [[wiki/SQL Spalte\|SQL Spalte]]n haben.

```sql
SELECT Spaltename1, Spaltename2
```

>[!example] Praktisches Beispiel
>```sql
>-- Alle Spalten
>SELECT * FROM Schueler;
>
>-- Nur Name
>SELECT vorname, nachname FROM Schueler;
>
>-- Mit Tabellenname (bei JOINs wichtig)
>SELECT Schueler.vorname, Schueler.nachname FROM Schueler;
>```

>[!important] Prüfungsrelevant
>SELECT ist Teil des **DML** (Data Manipulation Language).
>Wird immer mit [[wiki/SQL FROM\|SQL FROM]] kombiniert, um die Tabelle anzugeben.