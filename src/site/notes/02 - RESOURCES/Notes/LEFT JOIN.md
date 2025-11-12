---
{"dg-publish":true,"permalink":"/02-resources/notes/left-join/","tags":["informatik/datenbank","informatik/code/SQL"],"noteIcon":"","updated":"2025-11-05T12:17:44.000+01:00"}
---

>Ein **LEFT JOIN** gibt **alle [[02 - RESOURCES/Notes/Datensatz\|Datensätze]] der linken Tabelle** (in diesem Fall `customers`) zurück, **auch wenn es keine Übereinstimmung** in der rechten Tabelle (`orders`) gibt.
>>Wenn keine Übereinstimmung vorhanden ist, werden die fehlenden Werte aus der rechten Tabelle als [[02 - RESOURCES/Notes/NULL\|NULL]] angezeigt.


Tabelle: `customers` 

| customer_ID | name  |
| ----------- | ----- |
| 1           | Alice |
| 2           | Bob   |
| 3           | Carol |

Tabelle: `orders` 

|order_ID|customer_ID|amount|
|---|---|---|
|101|1|50|
|102|2|30|
|103|4|40|


# Wie funktioniert es

1. **Zwei Tabellen**: Wir haben wieder die beiden Tabellen, `customers` und `orders`.
2. **Alle [[02 - RESOURCES/Notes/Datensatz\|Datensätze]] aus der linken Tabelle**: Der `LEFT JOIN` gibt alle Kunden aus der Tabelle `customers` zurück, auch wenn sie keine Bestellungen haben.
3. **Übereinstimmende Daten**: Für Kunden, bei denen es eine passende Bestellung gibt (wie bei Alice und Bob), werden die entsprechenden Werte angezeigt.
4. **[[02 - RESOURCES/Notes/NULL\|Null]]-Werte für fehlende Bestellungen**: Wenn ein Kunde keine Bestellung hat (wie Carol), wird der Wert der Bestellung als [[02 - RESOURCES/Notes/NULL\|NULL]] angezeigt.

```sql
SELECT customers.name, orders.amount
FROM customers
LEFT JOIN orders ON customers.customer_ID = orders.customer_ID;
```

| name  | amount |
| ----- | ------ |
| Alice | 50     |
| Bob   | 30     |
| Carol | [[02 - RESOURCES/Notes/NULL\|NULL]]   |
