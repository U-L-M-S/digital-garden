---
{"dg-publish":true,"permalink":"/02-resources/files/sql-drill-10-loesungen-ihk-ap-2/","tags":["datenbank/sql","GFN/prüfungsrelevant/AP2/vorbereitung","drill/sql","drill/loesung"],"noteIcon":"","updated":"2026-04-27T10:37:59.275+02:00","dg-note-properties":{"tags":["datenbank/sql","GFN/prüfungsrelevant/AP2/vorbereitung","drill/sql","drill/loesung"],"aliases":["SQL Drill 10 Lösungen","SQL Übungspaket Lösungen"],"links":null,"created_date":"2026-04-27"}}
---


# ✅ SQL-Drill: Lösungen mit IHK-Punkte-Schema

> Lösungen zum Aufgaben-Set: [[02 - RESOURCES/Files/SQL_Drill_10_Aufgaben_IHK_AP2\|SQL_Drill_10_Aufgaben_IHK_AP2]]
>> **Gesamt: 47 Punkte** · Alternative korrekte Lösungen sind ebenfalls als richtig zu bewerten.

>[!warning]
>**Erst öffnen, wenn du ALLE 10 Aufgaben selbst gelöst hast!**
>Sonst lernst du nur passiv und nicht aktiv.

---

## Lösung 1 (3 P) — INSERT

```sql
INSERT INTO Kategorien (KatID, Bezeichnung)
VALUES (5, 'Elektro');
```

| Kriterium | Punkte |
| --- | --- |
| `INSERT INTO` mit Tabelle und Spalten | 1 |
| `VALUES` korrekt | 1 |
| Strings in einfachen Quotes | 1 |

>[!failure] Punktefalle
>String **ohne** Quotes (`Elektro` statt `'Elektro'`) → 1 P Abzug.

---

## Lösung 2 (3 P) — SELECT mit WHERE

```sql
SELECT Marke, Modell, Tagespreis
FROM Fahrzeuge
WHERE Baujahr >= 2022
ORDER BY Tagespreis DESC;
```

| Kriterium | Punkte |
| --- | --- |
| `SELECT` mit korrekten Spalten | 1 |
| `WHERE Baujahr >= 2022` | 1 |
| `ORDER BY ... DESC` | 1 |

>[!failure] Punktefalle
>`Baujahr > 2022` schließt 2022 falsch aus → muss `>=` sein.

---

## Lösung 3 (4 P) — INNER JOIN (2 Tabellen)

```sql
SELECT b.BID, k.Vorname, k.Nachname, b.StartDatum, b.Gesamtpreis
FROM Buchungen b
INNER JOIN Kunden k ON b.KID = k.KID
WHERE YEAR(b.StartDatum) = 2025
ORDER BY b.StartDatum ASC;
```

| Kriterium | Punkte |
| --- | --- |
| `INNER JOIN` mit korrektem `ON` | 1,5 |
| `WHERE YEAR(...) = 2025` | 1 |
| `ORDER BY` aufsteigend | 0,5 |
| Korrekte `SELECT`-Spalten mit Alias | 1 |

>[!failure] Punktefalle
>Aliase vergessen → SQL meckert bei mehrdeutigen Spalten (z. B. `KID`).

---

## Lösung 4 (6 P) — Multi-JOIN mit SUM

```sql
SELECT k.Vorname, k.Nachname,
       SUM(b.Gesamtpreis) AS Gesamtumsatz
FROM Kunden k
INNER JOIN Buchungen b ON k.KID = b.KID
GROUP BY k.KID, k.Vorname, k.Nachname
ORDER BY Gesamtumsatz DESC;
```

| Kriterium | Punkte |
| --- | --- |
| `INNER JOIN` korrekt | 1,5 |
| `SUM(b.Gesamtpreis) AS Gesamtumsatz` | 1,5 |
| `GROUP BY` vollständig | 2 |
| `ORDER BY ... DESC` | 1 |

>[!failure] Punktefalle
>**`LEFT JOIN` würde Kunden ohne Buchung mit `NULL` einschließen** — Aufgabe will aber „mindestens eine Buchung" → `INNER JOIN` ist korrekt.

>[!important]
>**`GROUP BY` muss alle nicht-aggregierten SELECT-Spalten enthalten** (Vorname, Nachname). `KID` ist sicherheitshalber dabei (eindeutig).

---

## Lösung 5 (5 P) — JOIN + GROUP BY + HAVING

```sql
SELECT k.KID, k.Nachname, COUNT(b.BID) AS Anzahl
FROM Kunden k
INNER JOIN Buchungen b ON k.KID = b.KID
GROUP BY k.KID, k.Nachname
HAVING COUNT(b.BID) >= 3;
```

| Kriterium | Punkte |
| --- | --- |
| `INNER JOIN` | 1 |
| `COUNT(b.BID) AS Anzahl` | 1 |
| `GROUP BY` korrekt | 1,5 |
| `HAVING COUNT(...) >= 3` | 1,5 |

>[!failure] Punktefalle
>**Aggregat in `WHERE`** statt `HAVING` → Syntaxfehler. 
>Merksatz: *„`COUNT/SUM/AVG/MIN/MAX` → immer `HAVING`."*

---

## Lösung 6 (3 P) — UPDATE mit WHERE

```sql
UPDATE Fahrzeuge
SET Tagespreis = Tagespreis * 1.10
WHERE KatID = 3;
```

| Kriterium | Punkte |
| --- | --- |
| `UPDATE ... SET` | 1 |
| Berechnung `Tagespreis * 1.10` | 1 |
| `WHERE KatID = 3` | 1 |

>[!danger] Punktefalle
>**`UPDATE` OHNE `WHERE` ist eine Katastrophe** — alle Fahrzeuge werden teurer. 
>In der Prüfung: harter Punktabzug, evtl. 0 P.

---

## Lösung 7 (3 P) — DELETE mit NULL

```sql
DELETE FROM Kunden
WHERE Email IS NULL;
```

| Kriterium | Punkte |
| --- | --- |
| `DELETE FROM Kunden` | 1 |
| `WHERE Email IS NULL` (nicht `= NULL`) | 2 |

>[!failure] Punktefalle
>**`WHERE Email = NULL`** → liefert IMMER `FALSE`, da `NULL` kein Wert ist. 
>Korrekt: `IS NULL`.

>[!warning]
>**Achtung referentielle Integrität:** Markus Schneider (KID=4) hat KEINE Buchung — Löschung ist sicher. Wenn ein Kunde Buchungen hätte und FK-Constraint `ON DELETE RESTRICT` aktiv wäre → Statement schlägt fehl.

---

## Lösung 8 (5 P) — ALTER TABLE

```sql
ALTER TABLE Kunden
ADD COLUMN Telefon VARCHAR(20);

ALTER TABLE Kunden
ADD COLUMN Stammkunde INTEGER NOT NULL DEFAULT 0;
```

| Kriterium | Punkte |
| --- | --- |
| `ALTER TABLE Kunden ADD COLUMN Telefon VARCHAR(20)` | 1,5 |
| `ALTER TABLE Kunden ADD COLUMN Stammkunde INTEGER` | 1,5 |
| `NOT NULL DEFAULT 0` korrekt | 2 |

>[!info]
>Manche IHK-Lösungen erlauben auch eine kombinierte Anweisung mit Komma:
>```sql
>ALTER TABLE Kunden
>  ADD COLUMN Telefon VARCHAR(20),
>  ADD COLUMN Stammkunde INTEGER NOT NULL DEFAULT 0;
>```

---

## Lösung 9 (8 P) — Archivierung INSERT…SELECT + DELETE

```sql
-- Schritt 1: Datensätze ins Archiv kopieren
INSERT INTO BuchungenArchiv (BID, KID, FID, StartDatum, EndDatum, Gesamtpreis)
SELECT BID, KID, FID, StartDatum, EndDatum, Gesamtpreis
FROM Buchungen
WHERE YEAR(StartDatum) < 2025;

-- Schritt 2: Originale löschen
DELETE FROM Buchungen
WHERE YEAR(StartDatum) < 2025;
```

| Kriterium | Punkte |
| --- | --- |
| `INSERT INTO ... (Spaltenliste)` | 1,5 |
| `SELECT ... FROM Buchungen` | 1,5 |
| `WHERE YEAR(StartDatum) < 2025` korrekt | 2 |
| `DELETE FROM ... WHERE ...` | 2 |
| **Reihenfolge** Insert → Delete | 1 |

>[!danger] Punktefalle Nr. 1
>**Reihenfolge tauschen** = Datenverlust. Erst löschen, dann kopieren → Archiv bleibt leer.

>[!failure] Punktefalle Nr. 2
>**Spaltenliste vergessen** im `INSERT INTO`. Best Practice: immer explizit auflisten — robust gegen Schema-Änderungen.

---

## Lösung 10 (7 P) — Subquery in FROM

```sql
SELECT AVG(SummeProKunde) AS DurchschnittProKunde
FROM (
    SELECT SUM(Gesamtpreis) AS SummeProKunde
    FROM Buchungen
    GROUP BY KID
) AS Subquery;
```

| Kriterium | Punkte |
| --- | --- |
| Innere Query mit `SUM` + `GROUP BY KID` | 3 |
| Alias der Subquery (`AS Subquery`) | 1 |
| Äußere Query mit `AVG(...)` | 2 |
| Alias der Ergebnis-Spalte | 1 |

>[!failure] Punktefalle
>**Naive Lösung** `SELECT AVG(Gesamtpreis) FROM Buchungen` → falsch! 
>Das wäre der Mittelwert **aller einzelnen Buchungen**, nicht der Mittelwert **pro Kunde**. 
>Ein Kunde mit 5 Buchungen würde 5× zählen.

>[!important]
>**Subquery in `FROM`** muss IMMER einen Alias haben (`AS Subquery` oder beliebiger Name) — sonst Syntaxfehler.

---

# 📊 Auswertung — Wie viel Punkte?

| Punkte erreicht | Bewertung               | Empfehlung                                          |
| --------------- | ----------------------- | --------------------------------------------------- |
| 42–47           | **Sehr gut (1)**        | SQL ist sicher — nächstes Thema angehen             |
| 36–41           | **Gut (2)** — Note-2-Ziel ✅ | Punktefallen wiederholen                          |
| 30–35           | Befriedigend (3)        | Multi-JOIN + Subquery erneut drillen                |
| 22–29           | Ausreichend (4)         | Komplettes Paket nochmal von vorne                  |
| < 22            | Mangelhaft (5)          | Erst [[SQL Klausel-Reihenfolge\|SQL Klausel-Reihenfolge]] + JOINs sicher beherrschen |

---

# 🚨 Top-Punktefallen — Zusammenfassung

>[!danger] Die häufigsten Fehler in der Prüfung:
>1. **Strings ohne Quotes** → `'Elektro'` statt `Elektro`
>2. **`= NULL`** statt **`IS NULL`**
>3. **Aggregat in `WHERE`** statt **`HAVING`**
>4. **`UPDATE` ohne `WHERE`** → Mass-Update
>5. **`GROUP BY` unvollständig** → nicht alle SELECT-Spalten dabei
>6. **Falsche JOIN-Art** → `LEFT` statt `INNER` oder umgekehrt
>7. **Subquery ohne Alias** im `FROM`-Block
>8. **Reihenfolge** bei Archivierung (erst kopieren, dann löschen!)
>9. **`>` statt `>=`** bei Datumsgrenzen
>10. **Aliase fehlen** → mehrdeutige Spaltennamen

---

# 🔗 Verwandte Zettel

- [[02 - RESOURCES/Files/SQL_Drill_10_Aufgaben_IHK_AP2\|SQL_Drill_10_Aufgaben_IHK_AP2]] — die Aufgaben
- [[SQL Klausel-Reihenfolge\|SQL Klausel-Reihenfolge]]
- [[SQL WHERE vs HAVING\|SQL WHERE vs HAVING]]
- [[SQL NULL Verhalten\|SQL NULL Verhalten]]
- [[SQL Subquery\|SQL Subquery]]
- [[02 - RESOURCES/Notes/How to multiple Joins\|How to Multiple Joins]]

---

>[!quote]
>**„Eine Aufgabe ist erst dann gelöst, wenn du auch alle Punktefallen kennst."**
