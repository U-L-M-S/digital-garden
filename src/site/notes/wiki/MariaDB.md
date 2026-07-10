---
{"dg-publish":true,"permalink":"/wiki/maria-db/","tags":["informatik/datenbank"],"noteIcon":"","updated":"2026-05-19T13:40:12.000+02:00","dg-note-properties":{"aliases":["maria db","mariadb"],"created":"2026-05-19 19:00","links":"https://mariadb.org/","path":"Notes","tags":["informatik/datenbank"]}}
---

>[[wiki/MariaDB\|MariaDB]] ist eine relationale Open-Source-Datenbank (MySQL-Fork).
>>Bei [[inbox/Muckenhirn\|Muckenhirn]] nutze ich sie für meine Lernprojekte mit [[wiki/JPA\|JPA]] / [[wiki/Hibernate\|Hibernate]].

# I. Meine Lern-DB
___
- Name: `levi_learning_db`
- Charset: `utf8mb4` / Collation: `utf8mb4_unicode_ci`
- Bewusst getrennt von Produktiv-DB

# II. Wichtig für JPA
___
- Engine = `InnoDB` (für [[wiki/Transaktion\|Transaktion]]en, [[wiki/CMT\|CMT]])
- `BIGINT UNSIGNED` mappt auf `Long` in Java
- `AUTO_INCREMENT` → [[wiki/@Entity\|@Entity]] mit `@GeneratedValue(IDENTITY)`

# III. Verbindung
___
```
URL:    jdbc:mariadb://localhost:3306/levi_learning_db
Driver: org.mariadb.jdbc.Driver
GUI:    HeidiSQL
```

>[!tip]
>Siehe auch [[wiki/Datasource\|Datasource]] für die [[wiki/WildFly\|WildFly]]-Anbindung.
