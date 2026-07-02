---
{"dg-publish":true,"permalink":"/02-resources/notes/maria-db/","tags":["informatik/datenbank"],"noteIcon":"","updated":"2026-05-19T13:40:12.034+02:00","dg-note-properties":{"aliases":["maria db","mariadb"],"created":"2026-05-19 19:00","links":"https://mariadb.org/","path":"Notes","tags":["informatik/datenbank"]}}
---

>[[02 - RESOURCES/Notes/MariaDB\|MariaDB]] ist eine relationale Open-Source-Datenbank (MySQL-Fork).
>>Bei [[02 - RESOURCES/Notes/Muckenhirn\|Muckenhirn]] nutze ich sie für meine Lernprojekte mit [[02 - RESOURCES/Notes/JPA\|JPA]] / [[02 - RESOURCES/Notes/Hibernate\|Hibernate]].

# I. Meine Lern-DB
___
- Name: `levi_learning_db`
- Charset: `utf8mb4` / Collation: `utf8mb4_unicode_ci`
- Bewusst getrennt von Produktiv-DB

# II. Wichtig für JPA
___
- Engine = `InnoDB` (für [[02 - RESOURCES/Notes/Transaktion\|Transaktion]]en, [[02 - RESOURCES/Notes/CMT\|CMT]])
- `BIGINT UNSIGNED` mappt auf `Long` in Java
- `AUTO_INCREMENT` → [[02 - RESOURCES/Notes/@Entity\|@Entity]] mit `@GeneratedValue(IDENTITY)`

# III. Verbindung
___
```
URL:    jdbc:mariadb://localhost:3306/levi_learning_db
Driver: org.mariadb.jdbc.Driver
GUI:    HeidiSQL
```

>[!tip]
>Siehe auch [[02 - RESOURCES/Notes/Datasource\|Datasource]] für die [[02 - RESOURCES/Notes/WildFly\|WildFly]]-Anbindung.
