---
{"dg-publish":true,"permalink":"/02-resources/notes/thread-safety/","tags":["informatik/code/pattern","informatik/code/java"],"noteIcon":"","updated":"2026-05-19T14:43:40.268+02:00","dg-note-properties":{"aliases":["thread safety","thread-safe","thread sicherheit"],"created":"2026-05-19 19:00","links":null,"path":"Notes","tags":["informatik/code/pattern","informatik/code/java"]}}
---

>[[02 - RESOURCES/Notes/Thread-Safety\|Thread-Safety]] bedeutet: Code funktioniert korrekt, auch wenn mehrere Threads ihn gleichzeitig ausführen.
>>Wichtig bei [[02 - RESOURCES/Notes/Singleton\|@Singleton]] und überall, wo geteilter State existiert.

# I. Wann ist Code NICHT thread-safe?
___
```java
private int count = 0;

public int increment() {
    return ++count;   // ❌ nicht thread-safe!
}
```

`count++` ist eigentlich 3 Operationen: read, increment, write. Zwei Threads können sich überholen.

# II. Lösungen
___
| Lösung | Wann |
|---|---|
| [[02 - RESOURCES/Notes/AtomicInteger\|AtomicInteger]] / `AtomicLong` | einfache Zähler |
| `synchronized` | komplexere Blöcke |
| `ReentrantLock` | flexibel |
| Immutable Objects | am einfachsten |
| `ConcurrentHashMap` | thread-safe Map |

# III. Bei EJBs
___
| Bean-Typ | Thread-Safe? |
|---|---|
| [[02 - RESOURCES/Notes/@Stateless\|@Stateless]] | Container synchronisiert (Pool) |
| [[02 - RESOURCES/Notes/@Stateful\|@Stateful]] | 1 Thread pro Instanz |
| [[02 - RESOURCES/Notes/Singleton\|@Singleton]] | **Deine Sache!** |
