---
{"dg-publish":true,"permalink":"/wiki/lifecycle-hook/","tags":["informatik/programmierung/sprachen/java/framework","informatik/programmierung/pattern"],"noteIcon":"","updated":"2026-07-02T13:17:19.797+02:00","dg-note-properties":{"aliases":["lifecycle hook","lifecycle hooks"],"created":"2026-05-19 19:00","links":null,"path":"Notes","tags":["informatik/programmierung/sprachen/java/framework","informatik/programmierung/pattern"]}}
---

>Ein [[wiki/Lifecycle Hook\|Lifecycle Hook]] ist eine Methode, die der Container an festen Punkten im Lebenszyklus einer Bean aufruft.
>>Erkennbar an [[wiki/Annotation\|Annotation]]en wie [[wiki/@PostConstruct\|@PostConstruct]] oder `@PreDestroy`.

# I. Wichtige Hooks
___
| Annotation | Wann läuft sie? |
|---|---|
| [[wiki/@PostConstruct\|@PostConstruct]] | Nach Konstruktor + DI |
| `@PreDestroy` | Vor dem Zerstören (Pool-Shutdown, [[wiki/@Remove\|@Remove]]) |
| `@PrePersist` | Vor INSERT ([[wiki/@Entity\|@Entity]]) |
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
