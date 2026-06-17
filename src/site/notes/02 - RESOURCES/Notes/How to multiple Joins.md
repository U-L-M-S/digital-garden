---
{"dg-publish":true,"permalink":"/02-resources/notes/how-to-multiple-joins/","tags":["informatik/code/SQL","ausbildung/gfn/ap2/vorbereitung"],"noteIcon":"","updated":"2026-04-23T15:24:29.793+02:00","dg-note-properties":{"tags":["informatik/code/SQL","ausbildung/gfn/ap2/vorbereitung"],"aliases":null,"links":null,"created_date":"2026-04-23"}}
---

> Systematische 4-Schritte-Methode, um [[02 - RESOURCES/Notes/SQL\|SQL]]-Abfragen mit mehreren (3+) Tabellen sauber aufzubauen.
>> Besonders relevant für [[02 - RESOURCES/Notes/IHK\|IHK]]-Prüfungsaufgaben, in denen 3–5 Tabellen über [[02 - RESOURCES/Notes/Foreign Key\|Fremdschlüssel]] verkettet sind und eine Aggregation pro Haupt-Entität gefordert wird.

---

## Die 4-Schritte-Methode

>[!summary]
>Diese Methode ist universell und funktioniert für JEDE Multi-JOIN-Aufgabe:
>1. **WAS** will ich sehen? → `SELECT`-Spalten identifizieren
>2. **WO** liegen diese Spalten? → benötigte Tabellen auflisten
>3. **WIE** verbinde ich sie? → Fremdschlüssel-Kette (FK-Kette) zeichnen
>4. **Reihenfolge**: vom ZIEL → rückwärts zur Quelle

```
┌─────────────────────────────────────────────────────┐
│  1. WAS will ich sehen?     → SELECT-Spalten        │
│  2. WO liegen diese Spalten? → benötigte Tabellen   │
│  3. WIE verbinde ich sie?    → FK-Kette bauen       │
│  4. Reihenfolge: vom ZIEL    → rückwärts zur Quelle │
└─────────────────────────────────────────────────────┘
```

---

## Beispiel-Szenario: Restaurant-Bestell-DB

>[!example]
>AMAG Soft GmbH verwaltet die Bestell-Datenbank eines Restaurants. 
>Aufgabe: *„Erstelle eine Abfrage, die den Gesamtpreis für jede Bestellung berechnet und aufsteigend nach BID sortiert ausgibt."*

### Tabellen-Setup

**Tabelle `Kunden`**

| KID | Name          | Erstellungsdatum |
| --- | ------------- | ---------------- |
| 1   | Julia Meier   | 2023-12-15       |
| 2   | Lucas Weber   | 2024-01-20       |
| 3   | Ben Richter   | 2024-01-11       |
| 4   | Emma Klein    | 2025-07-02       |
| 5   | Finn Schröder | 2025-07-15       |
| 6   | Lea Wolf      | 2025-07-22       |

**Tabelle `Bestellungen`**

| BID | KID | Bestelldatum        |
| --- | --- | ------------------- |
| 1   | 1   | 2024-05-01 18:30:00 |
| 2   | 1   | 2024-05-03 19:45:00 |
| 3   | 1   | 2024-05-05 20:00:00 |
| 4   | 2   | 2024-06-02 17:15:00 |
| 5   | 2   | 2024-06-04 18:45:00 |
| ... | ... | ...                 |

**Tabelle `Bestelldetails`**

| BDID | BID | GID | Menge |
| ---- | --- | --- | ----- |
| 1    | 1   | 1   | 2     |
| 2    | 1   | 5   | 1     |
| 3    | 1   | 3   | 1     |
| 4    | 1   | 6   | 2     |
| 5    | 2   | 2   | 1     |
| ...  | ... | ... | ...   |

**Tabelle `Gerichte`**

| GID | Gericht             | Preis | GKID |
| --- | ------------------- | ----- | ---- |
| 1   | Pizza Margherita    | 7.50  | 1    |
| 2   | Pizza Salami        | 8.50  | 1    |
| 3   | Spaghetti Bolognese | 9.00  | 2    |
| 4   | Lasagne             | 10.00 | 2    |
| 5   | Caesar Salat        | 6.50  | 3    |
| 6   | Cola                | 2.00  | 4    |
| 7   | Mineralwasser       | 1.50  | 4    |
| 8   | Espresso            | 2.50  | 4    |

**Tabelle `Gerichtkategorie`**

| GKID | Kategorie |
| ---- | --------- |
| 1    | Pizza     |
| 2    | Pasta     |
| 3    | Salat     |
| 4    | Getränk   |

---

## Schritt 1 — WAS willst du sehen?

>[!note]
>Ausgabe-Spalten aus der geforderten Ergebnistabelle ableiten.

| Ergebnis-Spalte | Woher?                              |
| --------------- | ----------------------------------- |
| `BID`           | aus Bestellungen                    |
| `Kunde`         | `Name` aus [[02 - RESOURCES/Notes/Kunden\|Kunden]]               |
| `Gesamtpreis`   | `SUM(Preis × Menge)` → 2 Tabellen!  |

---

## Schritt 2 — WO liegen die Spalten?

| Spalte | Tabelle            |
| ------ | ------------------ |
| BID    | Bestellungen       |
| Name   | Kunden             |
| Preis  | Gerichte           |
| Menge  | Bestelldetails     |

>[!important]
>**4 Tabellen** sind nötig. Keine davon darf im `FROM`/`JOIN`-Block fehlen.

---

## Schritt 3 — Die FK-Kette visualisieren

```
Kunden ──KID──► Bestellungen ──BID──► Bestelldetails ──GID──► Gerichte
 (Name)         (BID)                  (Menge)                 (Preis)
```

>[!tip]
>Die FK-Kette ist deine Roadmap. Jeder Pfeil wird später zu einem `JOIN ... ON ...`. Zeichne sie IMMER auf Papier bevor du SQL schreibst.

---

## Schritt 4 — Welche Tabelle kommt in `FROM`?

>[!important]
>**Regel:** Die **Haupt-Tabelle** kommt in `FROM`. „Haupt" = die, um die du gruppieren willst.

Aufgabe sagt: *„für jede Bestellung"* → **GROUP BY Bestellung → FROM Bestellungen**.

---

## Bau-Anleitung

```sql
-- Schritt A: Start mit FROM (Haupt-Tabelle)
FROM Bestellungen b

-- Schritt B: Folge der FK-Kette, eine Tabelle nach der anderen
JOIN Kunden k          ON b.KID  = k.KID     -- b braucht k für den Namen
JOIN Bestelldetails bd ON b.BID  = bd.BID    -- b braucht bd für Menge
JOIN Gerichte g        ON bd.GID = g.GID     -- bd braucht g für Preis

-- Schritt C: SELECT mit den gewünschten Spalten
SELECT b.BID,
       k.Name AS Kunde,
       SUM(g.Preis * bd.Menge) AS Gesamtpreis

-- Schritt D: GROUP BY — alle NICHT-aggregierten SELECT-Spalten
GROUP BY b.BID, k.Name

-- Schritt E: ORDER BY
ORDER BY b.BID ASC;
```

### Finale Query (korrekte Reihenfolge)

```sql
SELECT b.BID,
       k.Name AS Kunde,
       SUM(g.Preis * bd.Menge) AS Gesamtpreis
FROM Bestellungen b
JOIN Kunden k          ON b.KID  = k.KID
JOIN Bestelldetails bd ON b.BID  = bd.BID
JOIN Gerichte g        ON bd.GID = g.GID
GROUP BY b.BID, k.Name
ORDER BY b.BID ASC;
```

---

## Beispiel-Rechnung: Bestellung 1

>[!example]
>So entsteht der `Gesamtpreis` für BID=1:
>```
>2× Pizza Margherita (7.50) = 15.00
>1× Caesar Salat    (6.50) =  6.50
>1× Spaghetti       (9.00) =  9.00
>2× Cola            (2.00) =  4.00
>                   Summe:   34.50  ← GESAMTPREIS
>```

---

## Alias-Konvention

>[!tip]
>**Alias vergeben BEVOR du SELECT schreibst** — spart Tippfehler und erzwingt Klarheit.

| Tabelle               | Alias                              |
| --------------------- | ---------------------------------- |
| [[02 - RESOURCES/Notes/Kunden\|Kunden]]            | `k`                                |
| Bestellungen          | `b`                                |
| Bestelldetails        | `bd` (2 Buchstaben, da Konflikt)   |
| Gerichte              | `g`                                |
| Gerichtkategorie      | `gk`                               |

---

## Punktefallen

>[!warning]
>Top-Fehler in IHK-Prüfungen bei Multi-JOIN-Aufgaben:

>[!failure] Falle 1 — `SUM` vergessen
>Nur `g.Preis` reicht nicht. Bei „pro Bestellung" muss `SUM(g.Preis * bd.Menge)` stehen.

>[!failure] Falle 2 — `GROUP BY` unvollständig
>**Regel**: Alle nicht-aggregierten `SELECT`-Spalten MÜSSEN in `GROUP BY` stehen.
>❌ `GROUP BY b.BID` (wenn `k.Name` auch im SELECT ist)
>✅ `GROUP BY b.BID, k.Name`

>[!failure] Falle 3 — Fehlendes `ON` → Kartesisches Produkt
>`FROM A, B, C, D` ohne `ON` explodiert die Zeilenzahl.

>[!failure] Falle 4 — Falsche Haupt-Tabelle im `FROM`
>Bei „pro Bestellung" → `FROM Bestellungen`
>Bei „pro Kunde" → `FROM Kunden`
>Bei „pro Kategorie" → `FROM Gerichtkategorie`

>[!failure] Falle 5 — `ON` vs `WHERE` bei `LEFT JOIN`
>Filter auf die rechte Tabelle gehört ins `ON`, nicht ins `WHERE` → siehe SQL ON vs WHERE bei JOIN.

---

## Entscheidungsbaum

```
Aufgabe lesen → Was heißt „pro X"?
       │
       ▼
   FROM X (Haupt-Tabelle)
       │
       ▼
   Welche Spalten brauche ich noch?
       │
       ▼
   Für jede fehlende Spalte:
   JOIN <Tabelle> <alias> ON <FK-Beziehung>
       │
       ▼
   Aggregat (SUM/COUNT/AVG)?  →  GROUP BY + ggf. HAVING
       │
       ▼
   Sortierung?  →  ORDER BY
```

---

## Merksatz

>[!important]
>**„FROM folgt dem Ziel, JOINs folgen den Fremdschlüsseln."**
>
>1. Ziel-Entität → `FROM`
>2. FK-Kette entlanghangeln → `JOIN ... ON ...`
>3. Aggregate → `GROUP BY` (alle nicht-aggregierten SELECT-Spalten)
>4. Filter auf Gruppen → `HAVING`
>5. Sortierung → `ORDER BY`

---

## Verwandte Zettel

- SQL [[02 - RESOURCES/Notes/INNER JOIN\|INNER JOIN]]
- SQL [[02 - RESOURCES/Notes/LEFT JOIN\|LEFT JOIN]]
- [[02 - RESOURCES/Notes/SQL GROUP BY\|SQL GROUP BY]] Regel
- [[02 - RESOURCES/Notes/SQL\|SQL]] Klausel-Reihenfolge
- [[02 - RESOURCES/Notes/SQL\|SQL]] Alias AS
- [[02 - RESOURCES/Notes/SQL JOIN\|SQL JOIN]] vs Kartesisches Produkt
- [[02 - RESOURCES/Notes/Foreign Key\|Fremdschlüssel]]
- Relationenmodell