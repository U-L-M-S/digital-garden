---
{"dg-publish":true,"permalink":"/wiki/persistence-context/","tags":["informatik/programmierung/sprachen/java/framework","informatik/programmierung/sprachen/java/annotation","informatik/datenbank"],"noteIcon":"","updated":"2026-07-02T13:17:19.000+02:00","dg-note-properties":{"aliases":["persistence context","@persistencecontext"],"created":"2026-05-19 19:00","links":null,"path":"Notes","tags":["informatik/programmierung/sprachen/java/framework","informatik/programmierung/sprachen/java/annotation","informatik/datenbank"]}}
---

>[[wiki/@PersistenceContext\|@PersistenceContext]] injiziert einen [[wiki/EntityManager\|EntityManager]] für [[wiki/JPA\|JPA]].
>>Container-managed, automatisch in der laufenden [[wiki/CMT\|CMT]]-[[wiki/Transaktion\|Transaktion]].

# I. Beispiel
___
```java
@Stateless
public class GreetingService {
    @PersistenceContext(unitName = "LeviLearningPU")
    private EntityManager em;

    public void save(Greeting g) {
        em.persist(g);   // kein commit nötig!
    }
}
```

# II. Wichtig
___
- `unitName` muss exakt zum `<persistence-unit name="...">` in der [[wiki/persistence.xml\|persistence.xml]] passen
- Nur in einer Container-managed Bean nutzbar ([[wiki/@Stateless\|@Stateless]], [[wiki/Singleton\|@Singleton]], [[wiki/@Stateful\|@Stateful]])
- Funktioniert nicht in einem normalen Servlet — TX-Grenze gehört in die [[wiki/Enterprise Java Bean\|EJB]]-Schicht
