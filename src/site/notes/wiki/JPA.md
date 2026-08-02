---
{"dg-publish":true,"permalink":"/wiki/jpa/","tags":["informatik/software","informatik/datenbank"],"noteIcon":"","updated":"2026-07-19T03:56:26.706+02:00","dg-note-properties":{"aliases":["Java Persistence API","Jakarta Persistence","jpa"],"created":"2026-05-19 19:00","links":"https://jakarta.ee/specifications/persistence/","path":"Notes","tags":["informatik/software","informatik/datenbank"]}}
---

>[[wiki/JPA\|JPA]] (Jakarta Persistence API) ist der Standard für [[Object Relational Mapping\|ORM]] in [[wiki/Jakarta EE\|Jakarta EE]].
>>In [[wiki/WildFly\|WildFly]] implementiert durch [[wiki/Hibernate\|Hibernate]].

# I. Was macht es?
___
Eine [[wiki/Java\|Java]]-Klasse mit [[wiki/@Entity\|@Entity]] wird automatisch auf eine DB-Tabelle gemappt. Du nutzt den [[wiki/EntityManager\|EntityManager]] statt selbst SQL zu schreiben.

# II. Bausteine
___
- [[wiki/@Entity\|@Entity]] → Klasse = Tabelle
- [[wiki/EntityManager\|EntityManager]] → Datenbankzugriff
- [[wiki/@PersistenceContext\|@PersistenceContext]] → Injection
- [[wiki/persistence.xml\|persistence.xml]] → Konfiguration
- [[wiki/Persistence Unit\|Persistence Unit]] → logische Brücke zur [[wiki/Datasource\|Datasource]]
- [[JPQL\|JPQL]] → object-oriented Query-Sprache

# III. Vergleich .NET
___
[[wiki/JPA\|JPA]] ist das Pendant zu Entity Framework Core.

| [[wiki/JPA\|JPA]] | EF Core |
|---|---|
| `@Entity` | Entity class + `[Table]` |
| `EntityManager` | `DbContext` |
| `em.persist()` | `db.Add()` |
| [[JPQL\|JPQL]] | LINQ-to-Entities |
