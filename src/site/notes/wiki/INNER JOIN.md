---
{"dg-publish":true,"permalink":"/wiki/inner-join/","tags":["informatik/datenbank"],"noteIcon":"","updated":"2026-07-19T03:56:26.000+02:00","dg-note-properties":{"aliases":["INNER JOIN"],"created_date":"2024-10-17","links":null,"tags":["informatik/datenbank"]}}
---

>Es ist eine [[wiki/SQL\|SQL]]-Operation, die zwei Tabellen basierend auf einer gemeinsamen Spalte (in diesem Fall `customer_ID`) kombiniert und nur die [[wiki/Datensatz\|Datensätze]] zurückgibt, bei denen es eine Übereinstimmung in beiden Tabellen gibt. 
>>[[wiki/Datensatz\|Datensätze]], die keine Übereinstimmung haben, werden ausgeschlossen.

Tabelle: `customers` 

|customer_ID|name|
|---|---|
|1|Alice|
|2|Bob|
|3|Carol|

Tabelle: `orders` 

|order_ID|customer_ID|amount|
|---|---|---|
|101|1|50|
|102|2|30|
|103|4|40|

# Wie funktioniert es

1. **Zwei Tabellen**: Wir haben zwei Tabellen, `customers` und `orders`. Beide Tabellen haben eine gemeinsame Spalte, `customer_ID`.
2. **Gemeinsame [[wiki/Datensatz\|Datensätze]]**: Der `INNER JOIN` sucht nach Datensätzen, bei denen die `customer_ID` in beiden Tabellen übereinstimmt.
3. **Ergebnis**: Nur [[wiki/Datensatz\|Datensätze]], bei denen es in beiden Tabellen eine Übereinstimmung gibt, werden in das Ergebnis aufgenommen. In unserem Fall gibt es keine Bestellungen für `Carol` (customer_ID = 3) und keinen Kunden für die Bestellung mit `order_ID = 103`, daher werden diese ausgeschlossen.

```sql
SELECT customers.name, orders.amount
FROM customers
INNER JOIN orders ON customers.customer_ID = orders.customer_ID;
```

|name|amount|
|---|---|
|Alice|50|
|Bob|30|
