---
{"dg-publish":true,"permalink":"/02-resources/notes/hibernate/","tags":["informatik/code/java/framework","informatik/datenbank"],"noteIcon":"","updated":"2026-05-19T18:36:04.448+07:00","dg-note-properties":{"aliases":["hibernate orm","hibernate"],"created":"2026-05-19 19:00","links":"https://hibernate.org/","path":"Notes","tags":["informatik/code/java/framework","informatik/datenbank"]}}
---

>[[02 - RESOURCES/Notes/Hibernate\|Hibernate]] ist die [[02 - RESOURCES/Notes/JPA\|JPA]]-Implementierung, die in [[02 - RESOURCES/Notes/WildFly\|WildFly]] eingebaut ist.
>>Es übersetzt zwischen [[02 - RESOURCES/Notes/@Entity\|@Entity]]-Klassen und SQL-Tabellen.

# I. Was macht es?
___
- [[Object Relational Mapping\|ORM]]: Objekt ↔ Datenbank-Zeile
- Generiert SQL aus [[JPQL\|JPQL]]
- Trackt Änderungen ([[Dirty Checking\|Dirty Checking]])
- Hat verschiedene Dialects (MariaDB, PostgreSQL, Oracle, ...)

# II. Konfiguration
___
In der [[02 - RESOURCES/Notes/persistence.xml\|persistence.xml]]:
- `hibernate.dialect` → SQL-Variante
- [[02 - RESOURCES/Notes/hbm2ddl.auto\|hbm2ddl.auto]] → Schema-Verhalten beim Deploy
- `hibernate.show_sql` → SQL im Log sichtbar

# III. Log-Codes
___
- `HHH000412` → Hibernate-Version
- `HHH000204` → Processing PersistenceUnitInfo
