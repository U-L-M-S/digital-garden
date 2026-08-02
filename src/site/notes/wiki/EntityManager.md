---
{"dg-publish":true,"permalink":"/wiki/entity-manager/","tags":["informatik/software","informatik/datenbank"],"noteIcon":"","updated":"2026-07-19T03:56:26.720+02:00","dg-note-properties":{"aliases":["entity manager","em"],"created":"2026-05-19 19:00","links":null,"path":"Notes","tags":["informatik/software","informatik/datenbank"]}}
---

>[[wiki/EntityManager\|EntityManager]] ist das zentrale [[wiki/JPA\|JPA]]-Interface für DB-Zugriff.
>>Pendant zum `DbContext` in EF Core.

# I. Wie bekomme ich einen?
___
Per [[wiki/@PersistenceContext\|@PersistenceContext]]-Injection in einer [[wiki/Enterprise Java Bean\|EJB]]:

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
Der `EntityManager` ist automatisch in der laufenden [[wiki/CMT\|CMT]]-[[wiki/Transaktion\|Transaktion]] eingeschrieben. Du musst nichts commiten.
