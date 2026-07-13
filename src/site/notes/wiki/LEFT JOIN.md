---
{"dg-publish":true,"permalink":"/wiki/left-join/","tags":["informatik/datenbank","informatik/code/sql"],"noteIcon":"","updated":"2026-07-02T01:13:38.500+02:00","dg-note-properties":{"aliases":["LEFT JOIN"],"created_date":"2024-10-17","links":null,"tags":["informatik/datenbank","informatik/code/sql"]}}
---

>Ein **LEFT JOIN** gibt **alle [[wiki/Datensatz\|Datensätze]] der linken Tabelle** (in diesem Fall `customers`) zurück, **auch wenn es keine Übereinstimmung** in der rechten Tabelle (`orders`) gibt.
>>Wenn keine Übereinstimmung vorhanden ist, werden die fehlenden Werte aus der rechten Tabelle als [[wiki/NULL\|NULL]] angezeigt.


Tabelle: `customers` 

| customer_ID | name  |
| ----------- | ----- |
| 1           | Alice |
| 2           | Bob   |
| 3           | Carol |

Tabelle: `orders` 

| order_ID | customer_ID | amount |
| -------- | ----------- | ------ |
| 101      | 1           | 50     |
| 102      | 2           | 30     |
| 103      | 4           | 40     |


# Wie funktioniert es

1. **Zwei Tabellen**: Wir haben wieder die beiden Tabellen, `customers` und `orders`.
2. **Alle [[wiki/Datensatz\|Datensätze]] aus der linken Tabelle**: Der `LEFT JOIN` gibt alle Kunden aus der Tabelle `customers` zurück, auch wenn sie keine Bestellungen haben.
3. **Übereinstimmende Daten**: Für Kunden, bei denen es eine passende Bestellung gibt (wie bei Alice und Bob), werden die entsprechenden Werte angezeigt.
4. **[[wiki/NULL\|Null]]-Werte für fehlende Bestellungen**: Wenn ein Kunde keine Bestellung hat (wie Carol), wird der Wert der Bestellung als [[wiki/NULL\|NULL]] angezeigt.

```sql
SELECT customers.name, orders.amount
FROM customers
LEFT JOIN orders ON customers.customer_ID = orders.customer_ID;
```

| name  | amount |
| ----- | ------ |
| Alice | 50     |
| Bob   | 30     |
| Carol | [[wiki/NULL\|NULL]]   |
