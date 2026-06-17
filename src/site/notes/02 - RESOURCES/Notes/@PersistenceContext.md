---
{"dg-publish":true,"permalink":"/02-resources/notes/persistence-context/","tags":["informatik/code/java/framework","informatik/code/java/annotation","informatik/datenbank"],"noteIcon":"","updated":"2026-05-19T14:43:29.989+02:00","dg-note-properties":{"aliases":["persistence context","@persistencecontext"],"created":"2026-05-19 19:00","links":null,"path":"Notes","tags":["informatik/code/java/framework","informatik/code/java/annotation","informatik/datenbank"]}}
---

>[[02 - RESOURCES/Notes/@PersistenceContext\|@PersistenceContext]] injiziert einen [[02 - RESOURCES/Notes/EntityManager\|EntityManager]] für [[02 - RESOURCES/Notes/JPA\|JPA]].
>>Container-managed, automatisch in der laufenden [[02 - RESOURCES/Notes/CMT\|CMT]]-[[02 - RESOURCES/Notes/Transaktion\|Transaktion]].

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
- `unitName` muss exakt zum `<persistence-unit name="...">` in der [[02 - RESOURCES/Notes/persistence.xml\|persistence.xml]] passen
- Nur in einer Container-managed Bean nutzbar ([[02 - RESOURCES/Notes/@Stateless\|@Stateless]], [[02 - RESOURCES/Notes/Singleton\|@Singleton]], [[02 - RESOURCES/Notes/@Stateful\|@Stateful]])
- Funktioniert nicht in einem normalen Servlet — TX-Grenze gehört in die [[02 - RESOURCES/Notes/Enterprise Java Bean\|EJB]]-Schicht
