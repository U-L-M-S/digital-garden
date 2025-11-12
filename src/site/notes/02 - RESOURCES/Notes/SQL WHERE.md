---
{"dg-publish":true,"permalink":"/02-resources/notes/sql-where/","tags":["informatik/code/SQL","informatik/datenbank","GFN/prüfungsrelevant/AP2"],"noteIcon":"","updated":"2025-11-12T14:37:00.000+01:00"}
---

>WHERE ist die Filterbedingung in [[02 - RESOURCES/Notes/SQL\|SQL]] - das **IF** der Datenbankabfragen.
>>Mit WHERE werden Zeilen nach bestimmten Kriterien gefiltert.

```
WHERE-Ablauf:

Alle Zeilen                Gefilterte Zeilen
┌────┬──────┐             ┌────┬──────┐
│ 1  │ Max  │ ─┐          │ 3  │ Tom  │
│ 2  │ Anna │  │ WHERE    └────┴──────┘
│ 3  │ Tom  │ ─┘ id > 2
│ 4  │ Lisa │ ─┐
└────┴──────┘  │
               ▼
          ┌────┬──────┐
          │ 3  │ Tom  │
          │ 4  │ Lisa │
          └────┴──────┘

Visuelle Darstellung:

SELECT *                   WHERE Filter
FROM Schueler
    │                          │
    ▼                          ▼
┌────┬─────────┬───────┐   ┌──────────┐
│ ID │ Name    │ Alter │   │ Alter>=18│
├────┼─────────┼───────┤   └────┬─────┘
│ 1  │ Max     │  17   │ ───────┼───── ✗ raus
│ 2  │ Anna    │  19   │ ───────┼───── ✓ durch
│ 3  │ Tom     │  16   │ ───────┼───── ✗ raus
│ 4  │ Lisa    │  20   │ ───────┼───── ✓ durch
└────┴─────────┴───────┘        │
                                ▼
                    ┌────┬─────────┬───────┐
                    │ 2  │ Anna    │  19   │
                    │ 4  │ Lisa    │  20   │
                    └────┴─────────┴───────┘
```


**Kunden**

| kunden_id | vorname | nachname | email             |
| --------- | ------- | -------- | ----------------- |
| 1         | Alice   | Meier    | alice@example.com |
| 2         | Bob     | Schmidt  | bob@example.com   |

 **Produkte**

| produkt_id | produkt_name | preis  |
| ---------- | ------------ | ------ |
| 1          | Laptop       | 899.99 |
| 2          | Smartphone   | 499.99 |
| 3          | Tablet       | 299.99 |

 **Bestellungen**

| bestellung_id | kunden_id | bestell_datum |
|---------------|-----------|---------------|
| 1             | 1         | 2024-10-10    |
| 2             | 2         | 2024-10-11    |

 **Bestellpositionen**

| bestellposition_id | bestellung_id | produkt_id | menge |
|--------------------|---------------|------------|-------|
| 1                  | 1             | 1          | 1     |
| 2                  | 2             | 2          | 2     |
| 3                  | 2             | 3          | 1     |

```sql
SELECT * 
FROM Bestellpositionen
WHERE produkt_id = 2;
```
  
>[!info] Ergebnis
>
>| bestellposition_id | bestellung_id | produkt_id | menge |
>|--------------------|---------------|------------|-------|
>| 2                  | 2             | 2          | 2     |
