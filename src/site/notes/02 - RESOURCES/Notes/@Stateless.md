---
{"dg-publish":true,"permalink":"/02-resources/notes/stateless/","tags":["informatik/programmierung/sprachen/java/framework","informatik/programmierung/sprachen/java/annotation"],"noteIcon":"","updated":"2026-07-02T13:17:19.621+02:00","dg-note-properties":{"aliases":["stateless ejb","stateless bean","@stateless"],"created":"2026-05-19 19:00","links":null,"path":"Notes","tags":["informatik/programmierung/sprachen/java/framework","informatik/programmierung/sprachen/java/annotation"]}}
---

>[[02 - RESOURCES/Notes/@Stateless\|@Stateless]] markiert eine [[02 - RESOURCES/Notes/Enterprise Java Bean\|EJB]] als Pool-Bean.
>>Mehrere austauschbare Instanzen, **kein** Member-State erlaubt.

# I. Eigenschaften
___
- [[02 - RESOURCES/Notes/Object Pool\|Pool]] von N Instanzen
- Default für Business-Logik und DB-Calls
- [[02 - RESOURCES/Notes/CMT\|CMT]] aktiv (Default = `REQUIRED`)
- Threading vom Container abgesichert

# II. Beispiel
___
```java
@Stateless
public class HelloBean {
    public String sayHello() {
        return "Hallo";
    }
}
```

>[!warning] `@Stateless` ≠ "eine Instanz"
>Das ist ein **Pool**. Niemals Felder mit User-Daten füllen — sonst sieht der nächste Request die alten Werte!

# III. .NET-Pendant
___
`AddTransient` / `AddScoped` — aber als Pool, nicht jedes Mal neu erstellt.
