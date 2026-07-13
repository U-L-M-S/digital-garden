---
{"dg-publish":true,"permalink":"/wiki/atomic-integer/","tags":["informatik/programmierung/sprachen/java","informatik/programmierung/pattern"],"noteIcon":"","updated":"2026-07-02T13:17:19.637+02:00","dg-note-properties":{"aliases":["atomic integer","atomicinteger"],"created":"2026-05-19 19:00","links":"https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/util/concurrent/atomic/AtomicInteger.html","path":"Notes","tags":["informatik/programmierung/sprachen/java","informatik/programmierung/pattern"]}}
---

>[[wiki/AtomicInteger\|AtomicInteger]] ist ein `int`-Wrapper aus `java.util.concurrent.atomic`, der **thread-safe** ist.
>>Verhindert Race-Conditions bei parallelen Lese-/Schreib-Zugriffen.

# I. Wofür?
___
Mehrere Threads, die gleichzeitig `count++` machen, geben **nicht** garantiert das korrekte Ergebnis (das ist KEIN atomarer Vorgang!). [[wiki/AtomicInteger\|AtomicInteger]] löst das mit CPU-Instruktionen wie CAS (Compare-and-Swap).

# II. Beispiel — [[wiki/Singleton\|@Singleton]]-Counter
___
```java
@Singleton
public class CounterBean {
    private final AtomicInteger count = new AtomicInteger(0);

    public int incrementAndGet() {
        return count.incrementAndGet();   // atomar!
    }
}
```

# III. Wichtige Methoden
___
| Methode | Wirkung |
|---|---|
| `incrementAndGet()` | `++i` (atomar) |
| `getAndIncrement()` | `i++` (atomar) |
| `addAndGet(n)` | `i += n` (atomar) |
| `get()` | aktuellen Wert lesen |
| `compareAndSet(exp, new)` | CAS-Operation |

>[!warning]
>Normales `int count++` ist **3 Operationen** (read, increment, write). Bei mehreren Threads geht etwas verloren.
