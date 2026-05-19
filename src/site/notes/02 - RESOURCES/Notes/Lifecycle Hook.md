---
{"dg-publish":true,"permalink":"/02-resources/notes/lifecycle-hook/","tags":["informatik/code/java/framework","informatik/code/pattern"],"noteIcon":"","updated":"2026-05-19T13:41:37.433+02:00","dg-note-properties":{"aliases":["lifecycle hook","lifecycle hooks"],"created":"2026-05-19 19:00","links":null,"path":"Notes","tags":["informatik/code/java/framework","informatik/code/pattern"]}}
---

>Ein [[02 - RESOURCES/Notes/Lifecycle Hook\|Lifecycle Hook]] ist eine Methode, die der Container an festen Punkten im Lebenszyklus einer Bean aufruft.
>>Erkennbar an [[02 - RESOURCES/Notes/Annotation\|Annotation]]en wie [[02 - RESOURCES/Notes/@PostConstruct\|@PostConstruct]] oder `@PreDestroy`.

# I. Wichtige Hooks
___
| Annotation | Wann läuft sie? |
|---|---|
| [[02 - RESOURCES/Notes/@PostConstruct\|@PostConstruct]] | Nach Konstruktor + DI |
| `@PreDestroy` | Vor dem Zerstören (Pool-Shutdown, [[02 - RESOURCES/Notes/@Remove\|@Remove]]) |
| `@PrePersist` | Vor INSERT ([[02 - RESOURCES/Notes/@Entity\|@Entity]]) |
| `@PostPersist` | Nach INSERT |
| `@PreUpdate` | Vor UPDATE |
| `@PostLoad` | Nach SELECT |

# II. Beispiel
___
```java
@Stateless
public class HelloBean {
    @PostConstruct
    public void init()    { /* Init-Logik */ }

    @PreDestroy
    public void cleanup() { /* Connection schließen */ }
}
```

# III. .NET-Pendant
___
- `@PostConstruct` ≈ Konstruktor + DI ist fertig
- `@PreDestroy` ≈ `Dispose()` Pattern
