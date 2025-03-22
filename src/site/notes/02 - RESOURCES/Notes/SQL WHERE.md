---
{"dg-publish":true,"permalink":"/02-resources/notes/sql-where/","tags":["code/SQL"],"noteIcon":"","updated":"2024-10-11T15:16:05.000+02:00"}
---

>Es ist das **IF**-Anweisung bei [[02 - RESOURCES/Notes/SQL\|SQL]].


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
