---
{"dg-publish":true,"permalink":"/02-resources/notes/primary-key/","tags":["informatik/code/SQL","informatik/datenbank"],"noteIcon":"","updated":"2025-10-29T12:59:09.305+01:00"}
---

>Selbe wie [[02 - RESOURCES/Notes/Schlüsselattribut\|Schlüsselattribut]] in die [[02 - RESOURCES/Notes/ERM\|ERM]]
>
>>In einer [[02 - RESOURCES/Notes/SQL Tabelle\|SQL Tabelle]] ist eine Spalte oder eine Kombination von [[02 - RESOURCES/Notes/SQL Spalte\|SQL Spalte]]n, die jeden Datensatz in der [[02 - RESOURCES/Notes/SQL Tabelle\|SQL Tabelle]] eindeutig identifiziert. 
>>Jeder Wert im Primärschlüssel muss einzigartig sein und darf nicht [[02 - RESOURCES/Notes/NULL\|NULL]] sein.
>>>>Es hat die Funktion, Datensätze in einer [[02 - RESOURCES/Notes/SQL Tabelle\|SQL Tabelle]] eindeutig zu identifizieren und Tabellen miteinander zu verknüpfen
```sql
CREATE TABLE Kurse (
    kurs_id INT PRIMARY KEY,          -- Primärschlüssel
    kurs_name VARCHAR(100),
    lehrer_name VARCHAR(100)
);
```