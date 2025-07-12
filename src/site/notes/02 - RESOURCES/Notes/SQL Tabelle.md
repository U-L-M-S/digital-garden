---
{"dg-publish":true,"permalink":"/02-resources/notes/sql-tabelle/","tags":["code/SQL"],"noteIcon":"","updated":"2025-07-12T13:31:41.314+02:00"}
---

```sql
CREATE TABLE Tabelle_Name (
    SPALTE1 INT PRIMARY KEY,      -- Primärschlüssel
    SPALTE2 VARCHAR(50),             -- Fremdschlüssel
    SPALTE3 VARCHAR(50),
    SPALTE4 DATE,
    
    FOREIGN KEY (SPALTE2) REFERENCES Andere_Tabelle_Name(SPALTE2)
);
```
>Die [[02 - RESOURCES/Notes/SQL Spalte\|SQL Spalte]]n müssen immer ein [[02 - RESOURCES/Notes/Datentyp\|Datentyp]] erhalten um zu identifizieren um was sich handelt.
>>Später werden die [[02 - RESOURCES/Notes/SQL Zeile\|SQL Zeile]] mit Werten erfühlen.

>[!info] Achte bitte auf [[02 - RESOURCES/Notes/Primary Key\|Primärschlüssel]] und [[02 - RESOURCES/Notes/Foreign Key\|Fremdschlüssel]] 
