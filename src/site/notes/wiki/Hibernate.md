---
{"dg-publish":true,"permalink":"/wiki/hibernate/","tags":["informatik/software","informatik/datenbank"],"noteIcon":"","updated":"2026-07-19T03:56:26.000+02:00","dg-note-properties":{"aliases":["hibernate orm","hibernate"],"created":"2026-05-19 19:00","links":"https://hibernate.org/","path":"Notes","tags":["informatik/software","informatik/datenbank"]}}
---

>[[wiki/Hibernate\|Hibernate]] ist die [[wiki/JPA\|JPA]]-Implementierung, die in [[wiki/WildFly\|WildFly]] eingebaut ist.
>>Es übersetzt zwischen [[wiki/@Entity\|@Entity]]-Klassen und SQL-Tabellen.

# I. Was macht es?
___
- [[Object Relational Mapping\|ORM]]: Objekt ↔ Datenbank-Zeile
- Generiert SQL aus [[JPQL\|JPQL]]
- Trackt Änderungen ([[Dirty Checking\|Dirty Checking]])
- Hat verschiedene Dialects (MariaDB, PostgreSQL, Oracle, ...)

# II. Konfiguration
___
In der [[wiki/persistence.xml\|persistence.xml]]:
- `hibernate.dialect` → SQL-Variante
- [[wiki/hbm2ddl.auto\|hbm2ddl.auto]] → Schema-Verhalten beim Deploy
- `hibernate.show_sql` → SQL im Log sichtbar

# III. Log-Codes
___
- `HHH000412` → Hibernate-Version
- `HHH000204` → Processing PersistenceUnitInfo
