---
{"dg-publish":true,"permalink":"/02-resources/notes/right-join/","tags":["informatik/datenbank","informatik/code/SQL"],"noteIcon":"","updated":"2025-10-29T12:59:09.000+01:00"}
---

>Es gibt **alle Datensätze der rechten Tabelle** (in diesem Fall `orders`) zurück, **auch wenn es keine Übereinstimmung** in der linken Tabelle (`customers`) gibt. 
>>Wenn keine Übereinstimmung vorhanden ist, werden die fehlenden Werte aus der linken Tabelle als NULL angezeigt.

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

1. **Zwei Tabellen**: Die Tabellen `customers` und `orders` werden verknüpft.
2. **Alle Datensätze aus der rechten Tabelle**: Der `RIGHT JOIN` gibt alle Bestellungen aus der Tabelle `orders` zurück, selbst wenn sie keinem Kunden zugeordnet sind.
3. **Übereinstimmende Daten**: Für Bestellungen, die einem Kunden zugeordnet sind (wie bei Alice und Bob), werden die entsprechenden Kundennamen angezeigt.
4. **Null-Werte für fehlende Kunden**: Wenn eine Bestellung keinem Kunden zugeordnet ist (wie bei order_ID = 103), wird der Kundenname als `NULL` angezeigt.

```sql
SELECT customers.name, orders.amount
FROM customers
RIGHT JOIN orders ON customers.customer_ID = orders.customer_ID;
```

| name  | amount |
| ----- | ------ |
| Alice | 50     |
| Bob   | 30     |
| NULL  | 40     |
