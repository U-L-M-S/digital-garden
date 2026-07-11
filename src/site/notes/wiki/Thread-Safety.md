---
{"dg-publish":true,"permalink":"/wiki/thread-safety/","tags":["informatik/programmierung/pattern","informatik/programmierung/sprachen/java"],"noteIcon":"","updated":"2026-07-02T13:17:19.000+02:00","dg-note-properties":{"aliases":["thread safety","thread-safe","thread sicherheit"],"created":"2026-05-19 19:00","links":null,"path":"Notes","tags":["informatik/programmierung/pattern","informatik/programmierung/sprachen/java"]}}
---

>[[wiki/Thread-Safety\|Thread-Safety]] bedeutet: Code funktioniert korrekt, auch wenn mehrere Threads ihn gleichzeitig ausführen.
>>Wichtig bei [[wiki/Singleton\|@Singleton]] und überall, wo geteilter State existiert.

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
| [[wiki/AtomicInteger\|AtomicInteger]] / `AtomicLong` | einfache Zähler |
| `synchronized` | komplexere Blöcke |
| `ReentrantLock` | flexibel |
| Immutable Objects | am einfachsten |
| `ConcurrentHashMap` | thread-safe Map |

# III. Bei EJBs
___
| Bean-Typ | Thread-Safe? |
|---|---|
| [[wiki/@Stateless\|@Stateless]] | Container synchronisiert (Pool) |
| [[wiki/@Stateful\|@Stateful]] | 1 Thread pro Instanz |
| [[wiki/Singleton\|@Singleton]] | **Deine Sache!** |
