---
{"dg-publish":true,"permalink":"/wiki/inject/","tags":["informatik/software"],"noteIcon":"","updated":"2026-07-19T03:56:26.894+02:00","dg-note-properties":{"aliases":["inject","cdi inject","@inject"],"created":"2026-05-19 19:00","links":null,"path":"Notes","tags":["informatik/software"]}}
---

>[[wiki/@Inject\|@Inject]] ist die generische DI-[[wiki/Annotation\|Annotation]] aus [[wiki/CDI\|CDI]].
>>Funktioniert für alle Beans, nicht nur [[wiki/Enterprise Java Bean\|EJB]]s.

# I. Beispiel
___
```java
public class FooService {
    @Inject
    private BarHelper helper;   // CDI füllt das Feld
}
```

# II. @Inject vs. @EJB
___
| | [[wiki/@Inject\|@Inject]] | [[wiki/@EJB\|@EJB]] |
|---|---|---|
| Aus | [[wiki/CDI\|CDI]] | EJB-Spec |
| Für | Alle Beans (POJO + EJB) | Nur [[wiki/Enterprise Java Bean\|EJB]]s |
| Braucht | [[wiki/beans.xml\|beans.xml]] aktiv | EJB-Container |

>[!tip]
>In modernen Apps oft [[wiki/@Inject\|@Inject]] bevorzugt, weil universeller.
