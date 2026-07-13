---
{"dg-publish":true,"permalink":"/wiki/sql-tabelle/","tags":["informatik/code/sql","informatik/datenbank"],"noteIcon":"","updated":"2026-07-02T01:13:38.528+02:00","dg-note-properties":{"aliases":["SQL Tabelle","SQL Table"],"created_date":"2024-10-09","links":null,"tags":["informatik/code/sql","informatik/datenbank"]}}
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
>Die [[wiki/SQL Spalte\|SQL Spalte]]n müssen immer einen [[wiki/Datentyp\|Datentyp]] erhalten, um zu identifizieren, worum es sich handelt.
>>Später werden die [[wiki/SQL Zeile\|SQL Zeile]]n mit Werten gefüllt.

>[!info] Achte bitte auf [[wiki/Primary Key\|Primärschlüssel]] und [[wiki/Foreign Key\|Fremdschlüssel]] 
