---
{"dg-publish":true,"permalink":"/02-resources/notes/sql-join/","tags":["informatik/code/SQL","informatik/datenbank","GFN/prüfungsrelevant/AP2"],"noteIcon":"","updated":"2026-04-23T15:14:20.255+02:00","dg-note-properties":{"aliases":["SQL JOIN"],"created_date":"2024-10-17","links":null,"tags":["informatik/code/SQL","informatik/datenbank","GFN/prüfungsrelevant/AP2"]}}
---

>JOINs in [[02 - RESOURCES/Notes/SQL\|SQL]] sind Befehle, um [[02 - RESOURCES/Notes/SQL Tabelle\|SQL Tabelle]]n miteinander zu verbinden.
>>Mit JOINs kann man spezifische Verknüpfungen zwischen Tabellen herstellen, wie [[02 - RESOURCES/Notes/INNER JOIN\|INNER JOIN]], [[02 - RESOURCES/Notes/LEFT JOIN\|LEFT JOIN]] und [[02 - RESOURCES/Notes/RIGHT JOIN\|RIGHT JOIN]], die es ermöglichen, Daten gezielt auszuwählen und nur die relevanten Zeilen anzuzeigen.
>><mark style="background: #FFF3A3A6;">Dies verbessert nicht nur die Lesbarkeit der Abfragen, sondern auch die Effizienz, da nur die notwendigen Daten verarbeitet werden.</mark>
>>Durch die Verwendung von JOINs wird die Datenbankabfrage klar strukturiert, was die Wartung und das Verständnis der Abfragen erleichtert.

```
JOIN-Typen Übersicht:

          Tabelle A          Tabelle B
          ┌────────┐         ┌────────┐
          │   A    │         │   B    │
          └────────┘         └────────┘
               │                  │
               └────────┬─────────┘
                        │
         ┌──────────────┼──────────────┐
         │              │              │
    ┌────▼────┐    ┌───▼────┐    ┌───▼─────┐
    │ INNER   │    │ LEFT   │    │ RIGHT   │
    │ JOIN    │    │ JOIN   │    │ JOIN    │
    └─────────┘    └────────┘    └─────────┘

Visuelle Darstellung - INNER JOIN:

Tabelle A: Schueler          Tabelle B: Kurse
┌────┬─────────┐             ┌────┬──────────┐
│ ID │ Name    │             │ ID │ Kursname │
├────┼─────────┤             ├────┼──────────┤
│ 1  │ Max     │             │ 1  │ Math     │
│ 2  │ Anna    │             │ 2  │ Deutsch  │
└────┴─────────┘             └────┴──────────┘
       │                            │
       └─────────┬──────────────────┘
                 │
      Tabelle C: Einschreibung
      ┌───────────┬─────────┐
      │ SchuelerID│ KursID  │
      ├───────────┼─────────┤
      │     1     │    1    │
      │     1     │    2    │
      │     2     │    1    │
      └───────────┴─────────┘

SELECT Schueler.Name, Kurse.Kursname
FROM Schueler
INNER JOIN Einschreibung ON Schueler.ID = Einschreibung.SchuelerID
INNER JOIN Kurse ON Einschreibung.KursID = Kurse.ID;

Ergebnis:
┌─────────┬──────────┐
│ Name    │ Kursname │
├─────────┼──────────┤
│ Max     │ Math     │
│ Max     │ Deutsch  │
│ Anna    │ Math     │
└─────────┴──────────┘

Venn-Diagramme der JOINs:

INNER JOIN:              LEFT JOIN:               RIGHT JOIN:
  ┌───┐ ┌───┐           ┌───┐ ┌───┐              ┌───┐ ┌───┐
  │ A │ │ B │           │ A │ │ B │              │ A │ │ B │
  └─┬─┘ └─┬─┘           └─┬─┘ └─┬─┘              └─┬─┘ └─┬─┘
    │ ███ │               │████████                ███████ │
    └─────┘               └─────┘                  └─────┘
   Nur         Alles von A +      Alles von B +
   Überschneidung  Überschneidung   Überschneidung

FULL OUTER JOIN:         CROSS JOIN:
  ┌───┐ ┌───┐           ┌───┐ ┌───┐
  │ A │ │ B │           │ A │ │ B │
  └─┬─┘ └─┬─┘           └─┬─┘ └─┬─┘
████████████              Jede Zeile von A
                         mit jeder Zeile von B
```

## Die JOIN-Typen

>[!summary] Übersicht
>- **[[02 - RESOURCES/Notes/INNER JOIN\|INNER JOIN]]**: Nur übereinstimmende Zeilen
>- **[[02 - RESOURCES/Notes/LEFT JOIN\|LEFT JOIN]]**: Alle Zeilen von links + Übereinstimmungen
>- **[[02 - RESOURCES/Notes/RIGHT JOIN\|RIGHT JOIN]]**: Alle Zeilen von rechts + Übereinstimmungen
>- **FULL OUTER JOIN**: Alle Zeilen von beiden Tabellen
>- **CROSS JOIN**: Kartesisches Produkt (jede mit jeder)

## Syntax-Vergleich

>[!example] INNER JOIN
>```sql
>SELECT s.name, k.kursname
>FROM Schueler s
>INNER JOIN Kurse k ON s.kurs_id = k.id;
>```

>[!example] LEFT JOIN
>```sql
>SELECT s.name, k.kursname
>FROM Schueler s
>LEFT JOIN Kurse k ON s.kurs_id = k.id;
>```

>[!example] Alte Syntax (mit WHERE)
>```sql
>-- Funktioniert, aber NICHT empfohlen
>SELECT s.name, k.kursname
>FROM Schueler s, Kurse k
>WHERE s.kurs_id = k.id;
>```

>[!important] Prüfungsrelevant
>**JOIN vs WHERE:**
>- JOIN ist EXPLIZIT und LESBAR
>- WHERE ist IMPLIZIT und schwerer zu verstehen
>- Moderne SQL nutzt JOIN
>
>**Wichtigste JOIN-Typen:**
>1. **INNER JOIN**: Standard, nur Übereinstimmungen
>2. **LEFT JOIN**: Wichtig für "auch wenn keine Zuordnung"
>3. **RIGHT JOIN**: Selten genutzt (meist umgedreht als LEFT)
>
>**ON vs USING:**
>- `ON`: Flexibel, verschiedene Spaltennamen
>- `USING`: Nur wenn Spalten gleich heißen

>[!tip] Best Practices
>1. **Tabellen-Aliase verwenden**
>   ```sql
>   FROM Schueler s  -- ✓ Kurz und lesbar
>   JOIN Kurse k     -- ✓
>   ```
>
>2. **JOIN statt WHERE**
>   ```sql
>   -- ✓ RICHTIG
>   FROM A JOIN B ON A.id = B.a_id
>
>   -- ✗ VERALTET
>   FROM A, B WHERE A.id = B.a_id
>   ```
>
>3. **Reihenfolge beachten**
>   - Größte Tabelle zuerst
>   - Dann kleinere Tabellen joinen

>[!note] Siehe auch
>- [[02 - RESOURCES/Notes/INNER JOIN\|INNER JOIN]] - Nur Übereinstimmungen
>- [[02 - RESOURCES/Notes/LEFT JOIN\|LEFT JOIN]] - Alle von links
>- [[02 - RESOURCES/Notes/RIGHT JOIN\|RIGHT JOIN]] - Alle von rechts
 - [[02 - RESOURCES/Notes/How to multiple Joins\|How to multiple Joins]]
>- [[02 - RESOURCES/Notes/SQL FROM\|SQL FROM]] - Tabellen auswählen
>- [[02 - RESOURCES/Notes/SQL WHERE\|SQL WHERE]] - Filtern nach JOIN