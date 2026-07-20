---
{"dg-publish":true,"permalink":"/wiki/stateless/","tags":["informatik/software"],"noteIcon":"","updated":"2026-07-19T03:56:26.000+02:00","dg-note-properties":{"aliases":["stateless ejb","stateless bean","@stateless"],"created":"2026-05-19 19:00","links":null,"path":"Notes","tags":["informatik/software"]}}
---

>[[wiki/@Stateless\|@Stateless]] markiert eine [[wiki/Enterprise Java Bean\|EJB]] als Pool-Bean.
>>Mehrere austauschbare Instanzen, **kein** Member-State erlaubt.

# I. Eigenschaften
___
- [[wiki/Object Pool\|Pool]] von N Instanzen
- Default für Business-Logik und DB-Calls
- [[wiki/CMT\|CMT]] aktiv (Default = `REQUIRED`)
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
