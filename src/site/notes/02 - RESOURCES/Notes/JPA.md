---
{"dg-publish":true,"permalink":"/02-resources/notes/jpa/","tags":["informatik/code/java/framework","informatik/datenbank"],"noteIcon":"","updated":"2026-05-19T18:36:11.472+07:00","dg-note-properties":{"aliases":["Java Persistence API","Jakarta Persistence","jpa"],"created":"2026-05-19 19:00","links":"https://jakarta.ee/specifications/persistence/","path":"Notes","tags":["informatik/code/java/framework","informatik/datenbank"]}}
---

>[[02 - RESOURCES/Notes/JPA\|JPA]] (Jakarta Persistence API) ist der Standard für [[Object Relational Mapping\|ORM]] in [[02 - RESOURCES/Notes/Jakarta EE\|Jakarta EE]].
>>In [[02 - RESOURCES/Notes/WildFly\|WildFly]] implementiert durch [[02 - RESOURCES/Notes/Hibernate\|Hibernate]].

# I. Was macht es?
___
Eine [[02 - RESOURCES/Notes/Java\|Java]]-Klasse mit [[02 - RESOURCES/Notes/@Entity\|@Entity]] wird automatisch auf eine DB-Tabelle gemappt. Du nutzt den [[02 - RESOURCES/Notes/EntityManager\|EntityManager]] statt selbst SQL zu schreiben.

# II. Bausteine
___
- [[02 - RESOURCES/Notes/@Entity\|@Entity]] → Klasse = Tabelle
- [[02 - RESOURCES/Notes/EntityManager\|EntityManager]] → Datenbankzugriff
- [[02 - RESOURCES/Notes/@PersistenceContext\|@PersistenceContext]] → Injection
- [[02 - RESOURCES/Notes/persistence.xml\|persistence.xml]] → Konfiguration
- [[02 - RESOURCES/Notes/Persistence Unit\|Persistence Unit]] → logische Brücke zur [[02 - RESOURCES/Notes/Datasource\|Datasource]]
- [[JPQL\|JPQL]] → object-oriented Query-Sprache

# III. Vergleich .NET
___
[[02 - RESOURCES/Notes/JPA\|JPA]] ist das Pendant zu Entity Framework Core.

| [[02 - RESOURCES/Notes/JPA\|JPA]] | EF Core |
|---|---|
| `@Entity` | Entity class + `[Table]` |
| `EntityManager` | `DbContext` |
| `em.persist()` | `db.Add()` |
| [[JPQL\|JPQL]] | LINQ-to-Entities |
