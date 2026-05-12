---
{"dg-publish":true,"permalink":"/02-resources/notes/sql-tabelle/","tags":["informatik/code/SQL","informatik/datenbank"],"noteIcon":"","updated":"2026-05-12T15:45:25.102+02:00","dg-note-properties":{"aliases":["SQL Tabelle","SQL Table"],"created_date":"2024-10-09","links":null,"tags":["informatik/code/SQL","informatik/datenbank"]}}
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
>Die [[02 - RESOURCES/Notes/SQL Spalte\|SQL Spalte]]n müssen immer einen [[02 - RESOURCES/Notes/Datentyp\|Datentyp]] erhalten, um zu identifizieren, worum es sich handelt.
>>Später werden die [[02 - RESOURCES/Notes/SQL Zeile\|SQL Zeile]]n mit Werten gefüllt.

>[!info] Achte bitte auf [[02 - RESOURCES/Notes/Primary Key\|Primärschlüssel]] und [[02 - RESOURCES/Notes/Foreign Key\|Fremdschlüssel]] 
