---
{"dg-publish":true,"permalink":"/02-resources/files/sql-drill-10-aufgaben-ihk-ap-2/","tags":["datenbank/sql","GFN/prüfungsrelevant/AP2/vorbereitung","drill/sql"],"noteIcon":"","updated":"2026-04-27T10:37:59.824+02:00","dg-note-properties":{"tags":["datenbank/sql","GFN/prüfungsrelevant/AP2/vorbereitung","drill/sql"],"aliases":["SQL Drill 10 Aufgaben","SQL Übungspaket AP2"],"links":null,"created_date":"2026-04-27"}}
---


# 🎯 SQL-Drill: 10 Aufgaben im IHK-Prüfungsstil

> Kompaktes Übungspaket für **AP2 Teil 2 (FIAE, AO 2020)**.
>> Mischung aus DQL (lesen), DML (manipulieren), DDL (Struktur ändern) — orientiert am realen Aufgabenmuster IHK Sommer/Winter 2022–2026.

>[!important]
>**Gesamt-Punktzahl: 47 P** · Zeit-Empfehlung: **35–40 Minuten**
>Realistische Prüfungs-Aufgabe = 25–30 P · dieses Paket = breiter angelegt zum Üben.

>[!warning]
>**ERST alle Aufgaben selbst lösen, DANN die Lösungs-Datei öffnen!**
>Lösungen liegen in: [[02 - RESOURCES/Files/SQL_Drill_10_Loesungen_IHK_AP2\|SQL_Drill_10_Loesungen_IHK_AP2]]

---

## 📋 Szenario — Autovermietung „Cabrio & Co. GmbH"

Sie sind als FIAE bei der Cabrio & Co. GmbH angestellt und betreuen die Buchungs-Datenbank einer Autovermietung. Folgende Tabellen stehen auszugsweise zur Verfügung:

### Tabelle `Kunden`

| KID | Vorname  | Nachname    | Email                   | Geburtsdatum | Stadt     |
| --- | -------- | ----------- | ----------------------- | ------------ | --------- |
| 1   | Anna     | Berger      | a.berger@mail.de        | 1990-03-12   | Freiburg  |
| 2   | Tobias   | Krüger      | t.krueger@mail.de       | 1985-07-22   | Stuttgart |
| 3   | Lisa     | Hoffmann    | l.hoffmann@mail.de      | 1992-11-05   | Freiburg  |
| 4   | Markus   | Schneider   | NULL                    | 1978-02-18   | Karlsruhe |
| 5   | Sarah    | Weiß        | s.weiss@mail.de         | 1995-09-30   | Freiburg  |
| 6   | Daniel   | Bauer       | d.bauer@mail.de         | 1982-05-14   | Mannheim  |

### Tabelle `Kategorien`

| KatID | Bezeichnung |
| ----- | ----------- |
| 1     | Kleinwagen  |
| 2     | Mittelklasse|
| 3     | Premium     |
| 4     | Transporter |

### Tabelle `Fahrzeuge`

| FID | Marke    | Modell      | Baujahr | Tagespreis | KatID |
| --- | -------- | ----------- | ------- | ---------- | ----- |
| 1   | VW       | Polo        | 2020    | 35.00      | 1     |
| 2   | Opel     | Corsa       | 2019    | 32.00      | 1     |
| 3   | BMW      | 3er         | 2022    | 75.00      | 2     |
| 4   | Audi     | A6          | 2023    | 110.00     | 3     |
| 5   | Mercedes | S-Klasse    | 2024    | 180.00     | 3     |
| 6   | Ford     | Transit     | 2021    | 95.00      | 4     |
| 7   | VW       | Crafter     | 2022    | 105.00     | 4     |

### Tabelle `Buchungen`

| BID | KID | FID | StartDatum  | EndDatum    | Gesamtpreis |
| --- | --- | --- | ----------- | ----------- | ----------- |
| 1   | 1   | 1   | 2024-03-01  | 2024-03-05  | 140.00      |
| 2   | 1   | 3   | 2024-06-10  | 2024-06-15  | 375.00      |
| 3   | 1   | 1   | 2025-01-12  | 2025-01-14  |  70.00      |
| 4   | 2   | 4   | 2024-09-01  | 2024-09-08  | 770.00      |
| 5   | 3   | 2   | 2024-11-20  | 2024-11-22  |  64.00      |
| 6   | 3   | 5   | 2025-04-01  | 2025-04-04  | 540.00      |
| 7   | 3   | 6   | 2025-07-15  | 2025-07-20  | 475.00      |
| 8   | 5   | 1   | 2025-08-05  | 2025-08-10  | 175.00      |
| 9   | 6   | 7   | 2024-05-01  | 2024-05-03  | 210.00      |
| 10  | 6   | 4   | 2025-02-14  | 2025-02-21  | 770.00      |

### Tabelle `BuchungenArchiv`

> Strukturgleich mit `Buchungen`. Aktuell **leer**.

| BID | KID | FID | StartDatum | EndDatum | Gesamtpreis |
| --- | --- | --- | ---------- | -------- | ----------- |

---

## 🔗 Beziehungen (FK-Kette)

```
Kunden ──KID──► Buchungen ◄──FID── Fahrzeuge ──KatID──► Kategorien
```

>[!tip]
>Vor jeder Multi-JOIN-Aufgabe: **FK-Kette aufzeichnen** und den Pfad markieren, den deine Query gehen muss.

---

# 🎯 Aufgaben

## Aufgabe 1 — INSERT einfach (3 Punkte)

>[!example] Erstellen Sie eine SQL-Anweisung
>Fügen Sie eine neue Kategorie **„Elektro"** mit der `KatID` 5 in die Tabelle `Kategorien` ein.

**Deine Lösung:**
```sql

```

---

## Aufgabe 2 — SELECT mit WHERE (3 Punkte)

>[!example] Erstellen Sie eine SQL-Abfrage
>Listen Sie alle **Fahrzeuge** auf, deren **Baujahr ab 2022** ist. Es sollen `Marke`, `Modell` und `Tagespreis` angezeigt werden, sortiert **absteigend nach Tagespreis**.

**Erwartete Ergebnisspalten:** `Marke`, `Modell`, `Tagespreis`

**Deine Lösung:**
```sql

```

---

## Aufgabe 3 — INNER JOIN (2 Tabellen) (4 Punkte)

>[!example] Erstellen Sie eine SQL-Abfrage
>Listen Sie alle **Buchungen aus dem Jahr 2025** mit **Vorname und Nachname** des jeweiligen Kunden auf. Sortieren Sie nach `StartDatum` aufsteigend.

**Erwartete Ergebnisspalten:** `BID`, `Vorname`, `Nachname`, `StartDatum`, `Gesamtpreis`

>[!hint]
>Funktion verfügbar: `YEAR(Datum)` liefert das Jahr aus einem Datum.

**Deine Lösung:**
```sql

```

---

## Aufgabe 4 — Multi-JOIN mit SUM (6 Punkte) 🔥

>[!example] Erstellen Sie eine SQL-Abfrage
>Berechnen Sie für **jeden Kunden** den **Gesamtumsatz** aller seiner Buchungen. Die Ausgabe soll **Vorname**, **Nachname** und **Gesamtumsatz** enthalten und absteigend nach Umsatz sortiert sein. Es sollen nur Kunden angezeigt werden, **die mindestens eine Buchung** haben.

**Erwartete Ergebnisspalten:** `Vorname`, `Nachname`, `Gesamtumsatz`

>[!hint]
>Du brauchst `Kunden` und `Buchungen`. Aggregat: `SUM(Gesamtpreis)`.

**Deine Lösung:**
```sql

```

---

## Aufgabe 5 — JOIN + GROUP BY + HAVING (5 Punkte)

>[!example] Erstellen Sie eine SQL-Anweisung
>Listen Sie alle Kunden auf, die **mindestens 3 Buchungen** aufgegeben haben. Die Ausgabe soll `KID`, `Nachname` und die `Anzahl` der Buchungen enthalten.

**Erwartete Ergebnisspalten:** `KID`, `Nachname`, `Anzahl`

**Deine Lösung:**
```sql

```

---

## Aufgabe 6 — UPDATE mit WHERE (3 Punkte)

>[!example] Erstellen Sie eine SQL-Anweisung
>Erhöhen Sie den **Tagespreis aller Fahrzeuge der Kategorie „Premium"** (KatID = 3) um **10 %**.

>[!warning]
>`UPDATE` ohne `WHERE` ändert ALLE Zeilen — Punkteabzug.

**Deine Lösung:**
```sql

```

---

## Aufgabe 7 — DELETE mit Bedingung (3 Punkte)

>[!example] Erstellen Sie eine SQL-Anweisung
>Löschen Sie alle Kunden aus der Tabelle `Kunden`, die **keine E-Mail-Adresse** hinterlegt haben.

>[!hint]
>NULL-Vergleich: nicht `= NULL`, sondern `IS NULL`.

**Deine Lösung:**
```sql

```

---

## Aufgabe 8 — ALTER TABLE (5 Punkte)

>[!example] Erstellen Sie die SQL-Anweisungen
>Die Tabelle `Kunden` soll um zwei Spalten erweitert werden:
>- `Telefon` vom Typ `VARCHAR(20)` — optional
>- `Stammkunde` vom Typ `INTEGER` — Pflichtfeld mit Standardwert `0`

>[!hint]
>Constraints: `NOT NULL`, `DEFAULT <wert>`.

**Deine Lösung:**
```sql

```

---

## Aufgabe 9 — Archivierung mit INSERT…SELECT + DELETE (8 Punkte) 🔥

>[!example] Erstellen Sie die SQL-Anweisungen
>Alle **Buchungen vor dem Jahr 2025** sollen in die Tabelle `BuchungenArchiv` verschoben werden. Nach dem Kopieren sollen die archivierten Datensätze aus `Buchungen` **gelöscht** werden.

>[!hint]
>Zwei separate Statements:
>1. `INSERT INTO ... SELECT ... FROM ... WHERE ...`
>2. `DELETE FROM ... WHERE ...`

>[!warning]
>**Reihenfolge ist kritisch!** Erst kopieren, dann löschen — nie umgekehrt.

**Deine Lösung:**
```sql

```

---

## Aufgabe 10 — Subquery + komplexer JOIN (7 Punkte) 🔥

>[!example] Erstellen Sie eine SQL-Abfrage
>Berechnen Sie den **durchschnittlichen Gesamtpreis pro Kunde** über alle Buchungen.
>Hinweis: Es soll der Durchschnitt der **Summen je Kunde** ermittelt werden, nicht der Durchschnitt aller einzelnen Buchungspreise.

**Erwartete Ergebnisspalte:** `DurchschnittProKunde`

>[!hint]
>Subquery in `FROM`: erst pro Kunde summieren, dann den Mittelwert dieser Summen bilden.
>```
>SELECT AVG(spalte) FROM (
>   SELECT SUM(...) AS spalte
>   FROM ... GROUP BY KID
>) AS sub;
>```

**Deine Lösung:**
```sql

```

---

# ✅ Fertig?

>[!success]
>Wenn du **alle 10 Aufgaben** gelöst hast → öffne die Lösungs-Datei: 
>**[[02 - RESOURCES/Files/SQL_Drill_10_Loesungen_IHK_AP2\|SQL_Drill_10_Loesungen_IHK_AP2]]**
>
>Vergleiche **punktegenau** und markiere deine Punktefallen.

---

# 🧠 Themen-Übersicht (was du gerade übst)

| Aufgabe | Thema                                   | Schwierigkeit |
| ------- | --------------------------------------- | ------------- |
| 1       | INSERT einfach                          | ★             |
| 2       | SELECT + WHERE + ORDER BY               | ★             |
| 3       | INNER JOIN (2 Tabellen) + Datum         | ★★            |
| 4       | INNER JOIN + SUM + GROUP BY             | ★★★           |
| 5       | JOIN + GROUP BY + HAVING                | ★★★           |
| 6       | UPDATE mit Berechnung                   | ★★            |
| 7       | DELETE + NULL-Handling                  | ★★            |
| 8       | ALTER TABLE ADD COLUMN                  | ★★            |
| 9       | INSERT...SELECT + DELETE (Archivierung) | ★★★★          |
| 10      | Subquery in FROM + AVG                  | ★★★★          |

---

# 🔗 Verwandte Zettel

- [[SQL Klausel-Reihenfolge\|SQL Klausel-Reihenfolge]]
- [[SQL WHERE vs HAVING\|SQL WHERE vs HAVING]]
- [[SQL INNER JOIN\|SQL INNER JOIN]]
- [[SQL LEFT JOIN\|SQL LEFT JOIN]]
- [[SQL GROUP BY Regel\|SQL GROUP BY Regel]]
- [[SQL NULL Verhalten\|SQL NULL Verhalten]]
- [[SQL Subquery\|SQL Subquery]]
- [[SQL ON vs WHERE bei JOIN\|SQL ON vs WHERE bei JOIN]]
- [[02 - RESOURCES/Notes/How to multiple Joins\|How to Multiple Joins]]

---

>[!quote]
>**„Erst Konzept, dann Code, dann Korrektur."**
>FK-Kette zeichnen → SQL bauen → mit Lösung vergleichen → Punktefallen markieren → wiederholen.
