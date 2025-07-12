---
{"dg-publish":true,"permalink":"/02-resources/notes/foreign-key/","tags":["code/SQL"],"noteIcon":"","updated":"2025-07-12T13:31:41.297+02:00"}
---

>In einer [[02 - RESOURCES/Notes/SQL\|SQL]]-Tabelle ist eine Spalte, die verwendet wird, um eine Verknüpfung mit einer anderen [[02 - RESOURCES/Notes/SQL Tabelle\|SQL Tabelle]]  herzustellen, indem er auf den [[02 - RESOURCES/Notes/Primary Key\|Primary Key]] dieser [[02 - RESOURCES/Notes/SQL Tabelle\|SQL Tabelle]] verweist.
```sql
CREATE TABLE Einschreibung (
    einschreibung_id INT PRIMARY KEY, -- Primärschlüssel
    schueler_id INT,                                   -- Fremdschlüssel zu Schueler
    kurs_id INT,                                          -- Fremdschlüssel zu Kurse
    einschreibedatum DATE,
    FOREIGN KEY (schueler_id) REFERENCES Schueler(schueler_id),
    FOREIGN KEY (kurs_id) REFERENCES Kurse(kurs_id)
);
```