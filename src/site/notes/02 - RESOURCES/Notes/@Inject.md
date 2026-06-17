---
{"dg-publish":true,"permalink":"/02-resources/notes/inject/","tags":["informatik/code/java/framework","informatik/code/java/annotation"],"noteIcon":"","updated":"2026-05-19T13:38:31.351+02:00","dg-note-properties":{"aliases":["inject","cdi inject","@inject"],"created":"2026-05-19 19:00","links":null,"path":"Notes","tags":["informatik/code/java/framework","informatik/code/java/annotation"]}}
---

>[[02 - RESOURCES/Notes/@Inject\|@Inject]] ist die generische DI-[[02 - RESOURCES/Notes/Annotation\|Annotation]] aus [[02 - RESOURCES/Notes/CDI\|CDI]].
>>Funktioniert für alle Beans, nicht nur [[02 - RESOURCES/Notes/Enterprise Java Bean\|EJB]]s.

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
| | [[02 - RESOURCES/Notes/@Inject\|@Inject]] | [[02 - RESOURCES/Notes/@EJB\|@EJB]] |
|---|---|---|
| Aus | [[02 - RESOURCES/Notes/CDI\|CDI]] | EJB-Spec |
| Für | Alle Beans (POJO + EJB) | Nur [[02 - RESOURCES/Notes/Enterprise Java Bean\|EJB]]s |
| Braucht | [[02 - RESOURCES/Notes/beans.xml\|beans.xml]] aktiv | EJB-Container |

>[!tip]
>In modernen Apps oft [[02 - RESOURCES/Notes/@Inject\|@Inject]] bevorzugt, weil universeller.
