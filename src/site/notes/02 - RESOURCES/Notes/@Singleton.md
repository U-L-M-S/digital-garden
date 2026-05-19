---
{"dg-publish":true,"permalink":"/02-resources/notes/singleton/","tags":["informatik/code/java/framework","informatik/code/java/annotation"],"noteIcon":"","updated":"2026-05-19T13:37:56.601+02:00","dg-note-properties":{"aliases":["singleton ejb","singleton bean","@singleton"],"created":"2026-05-19 19:00","links":null,"path":"Notes","tags":["informatik/code/java/framework","informatik/code/java/annotation"]}}
---

>[[02 - RESOURCES/Notes/@Singleton\|@Singleton]] markiert eine [[02 - RESOURCES/Notes/Enterprise Java Bean\|EJB]] als globale Einzelinstanz.
>>**Genau eine** Instanz für die ganze App.

# I. Eigenschaften
___
- Exakt 1 Instanz im [[02 - RESOURCES/Notes/WildFly\|WildFly]]
- Mehrere Threads rufen sie **parallel** auf
- [[02 - RESOURCES/Notes/Thread-Safety\|Thread-Safety]] musst du **selbst** sicherstellen
- Default: Lazy (erst beim 1. Aufruf erstellt)
- Mit `@Startup` → eager (beim Deploy)

# II. Beispiel
___
```java
@Singleton
public class CounterBean {
    private final AtomicInteger count = new AtomicInteger(0);

    public int incrementAndGet() {
        return count.incrementAndGet();  // thread-safe!
    }
}
```

>[!warning]
>Normales `int count++` führt bei mehreren Threads zu Datensalat. Nutze [[02 - RESOURCES/Notes/AtomicInteger\|AtomicInteger]] oder `synchronized`.

# III. .NET-Pendant
___
`AddSingleton`.
