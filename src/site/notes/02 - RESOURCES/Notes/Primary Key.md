---
{"dg-publish":true,"permalink":"/02-resources/notes/primary-key/","tags":["code/SQL"],"noteIcon":"","updated":"2024-10-10T13:51:04.000+02:00"}
---

>Selbe wie [[02 - RESOURCES/Notes/Schlüsselattribut\|Schlüsselattribut]] in die [[02 - RESOURCES/Notes/ERM\|ERM]]
>
>>In einer [[02 - RESOURCES/Notes/SQL\|SQL]]-Tabelle ist eine [[02 - RESOURCES/Notes/SQL Spalte\|SQL Spalte]] oder eine Kombination von [[02 - RESOURCES/Notes/SQL Spalte\|SQL Spalte]], die jeden Datensatz in der [[02 - RESOURCES/Notes/SQL Tabelle\|SQL Tabelle]] eindeutig identifiziert. 
>>Jeder Wert im Primary Key muss einzigartig sein und darf nicht NULL sein.
```sql
CREATE TABLE Kurse (
    kurs_id INT PRIMARY KEY,          -- Primärschlüssel
    kurs_name VARCHAR(100),
    lehrer_name VARCHAR(100)
);
```