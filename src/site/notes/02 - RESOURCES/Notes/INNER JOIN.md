---
{"dg-publish":true,"permalink":"/02-resources/notes/inner-join/","tags":["code/SQL","datenbank"]}
---

>Es ist eine [[02 - RESOURCES/Notes/SQL\|SQL]]-Operation, die zwei Tabellen basierend auf einer gemeinsamen Spalte (in diesem Fall `customer_ID`) kombiniert und nur die [[02 - RESOURCES/Notes/Datensatz\|Datensätze]] zurückgibt, bei denen es eine Übereinstimmung in beiden Tabellen gibt. 
>>[[02 - RESOURCES/Notes/Datensatz\|Datensätze]], die keine Übereinstimmung haben, werden ausgeschlossen.

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
2. **Gemeinsame [[02 - RESOURCES/Notes/Datensatz\|Datensätze]]**: Der `INNER JOIN` sucht nach Datensätzen, bei denen die `customer_ID` in beiden Tabellen übereinstimmt.
3. **Ergebnis**: Nur [[02 - RESOURCES/Notes/Datensatz\|Datensätze]], bei denen es in beiden Tabellen eine Übereinstimmung gibt, werden in das Ergebnis aufgenommen. In unserem Fall gibt es keine Bestellungen für `Carol` (customer_ID = 3) und keinen Kunden für die Bestellung mit `order_ID = 103`, daher werden diese ausgeschlossen.

```sql
SELECT customers.name, orders.amount
FROM customers
INNER JOIN orders ON customers.customer_ID = orders.customer_ID;
```

|name|amount|
|---|---|
|Alice|50|
|Bob|30|
