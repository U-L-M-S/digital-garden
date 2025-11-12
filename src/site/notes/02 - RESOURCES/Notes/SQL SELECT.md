---
{"dg-publish":true,"permalink":"/02-resources/notes/sql-select/","tags":["informatik/code/SQL","informatik/datenbank","GFN/prüfungsrelevant/AP2"],"noteIcon":"","updated":"2025-11-12T13:58:24.000+01:00"}
---

>Befehl, der verwendet wird, um die [[02 - RESOURCES/Notes/SQL Spalte\|SQL Spalte]] herauszusuchen.
>>SELECT ist der wichtigste SQL-Befehl zum Lesen von Daten aus einer [[02 - RESOURCES/Notes/SQL Datenbank\|SQL Datenbank]].

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
>[!note] So werden alle [[02 - RESOURCES/Notes/SQL Spalte\|SQL Spalte]]n von eine [[02 - RESOURCES/Notes/SQL Tabelle\|SQL Tabelle]] angezeigt (die [[02 - RESOURCES/Notes/SQL Tabelle\|SQL Tabelle]], die angezeigt sein sollte wurde **nicht** ausgewählt mit [[02 - RESOURCES/Notes/SQL FROM\|SQL FROM]]).

## Bestimmte Spalten auswählen

Man kann auch bestimmten [[02 - RESOURCES/Notes/SQL Spalte\|SQL Spalte]]n auswählen.
```sql
SELECT Tabellname.Spaltename1, Tabellname.Spaltename2
```

>[!tip]
>Man kann auch **nur** die Name von die [[02 - RESOURCES/Notes/SQL Spalte\|SQL Spalte]]n schreiben.
>Es gibt aber den Risiko um Konflikten wenn 2 oder mehrere [[02 - RESOURCES/Notes/SQL Tabelle\|SQL Tabelle]]n die gleichen [[02 - RESOURCES/Notes/SQL Spalte\|SQL Spalte]]n haben.

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
>Wird immer mit [[02 - RESOURCES/Notes/SQL FROM\|SQL FROM]] kombiniert, um die Tabelle anzugeben.