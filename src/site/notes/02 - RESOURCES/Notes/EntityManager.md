---
{"dg-publish":true,"permalink":"/02-resources/notes/entity-manager/","tags":["informatik/code/java/framework","informatik/datenbank"],"noteIcon":"","updated":"2026-05-19T13:36:36.415+02:00","dg-note-properties":{"aliases":["entity manager","em"],"created":"2026-05-19 19:00","links":null,"path":"Notes","tags":["informatik/code/java/framework","informatik/datenbank"]}}
---

>[[02 - RESOURCES/Notes/EntityManager\|EntityManager]] ist das zentrale [[02 - RESOURCES/Notes/JPA\|JPA]]-Interface für DB-Zugriff.
>>Pendant zum `DbContext` in EF Core.

# I. Wie bekomme ich einen?
___
Per [[02 - RESOURCES/Notes/@PersistenceContext\|@PersistenceContext]]-Injection in einer [[02 - RESOURCES/Notes/Enterprise Java Bean\|EJB]]:

```java
@PersistenceContext(unitName = "LeviLearningPU")
private EntityManager em;
```

# II. Wichtige Methoden
___
| Methode | Wirkung |
|---|---|
| `em.persist(e)` | INSERT (entity wird "managed") |
| `em.find(Foo.class, id)` | SELECT by PK |
| `em.merge(e)` | UPDATE |
| `em.remove(e)` | DELETE |
| `em.createQuery(jpql, T.class)` | [[JPQL\|JPQL]]-Query |
| `em.flush()` | SQL sofort an DB senden |

# III. Container-managed
___
Der `EntityManager` ist automatisch in der laufenden [[02 - RESOURCES/Notes/CMT\|CMT]]-[[02 - RESOURCES/Notes/Transaktion\|Transaktion]] eingeschrieben. Du musst nichts commiten.
