---
{"dg-publish":true,"permalink":"/wiki/dependency-injection/","tags":["informatik/software"],"noteIcon":"","updated":"2026-07-19T03:56:26.000+02:00","dg-note-properties":{"aliases":["dependency injection","di","injection"],"created":"2026-05-19 19:00","links":null,"path":"Notes","tags":["informatik/software"]}}
---

>[[wiki/Dependency Injection\|Dependency Injection]] (DI) bedeutet: nicht du erstellst deine Abhängigkeiten — der Container gibt sie dir.
>>Du schreibst niemals `new`, du nutzt [[wiki/@EJB\|@EJB]] / [[wiki/@Inject\|@Inject]].

# I. Beispiel
___
```java
@WebServlet("/hallo")
public class HelloServlet extends HttpServlet {

    @EJB                          // Container füllt das Feld
    private HelloBean helloBean;  // kein "new" nötig!
}
```

# II. Warum DI?
___
- Container managt Lifecycle (Pool, Singleton, ...)
- Du kannst Implementierung leicht austauschen
- Automatische Transaktionen via [[wiki/Container-Proxy\|Container-Proxy]]

# III. Annotationen für DI
___
| Annotation | Quelle | Für |
|---|---|---|
| [[wiki/@EJB\|@EJB]] | EJB-Spec | [[wiki/Enterprise Java Bean\|EJB]]s |
| [[wiki/@Inject\|@Inject]] | [[wiki/CDI\|CDI]] | Alle Beans |
| [[wiki/@PersistenceContext\|@PersistenceContext]] | [[wiki/JPA\|JPA]] | [[wiki/EntityManager\|EntityManager]] |
| `@Resource` | Java EE | [[wiki/Datasource\|Datasource]], Mail, ... |

>[!tip] .NET-Vergleich
>Constructor-DI mit `services.AddX<>()` in `Program.cs`. Hier ist die [[wiki/Annotation\|Annotation]] die Registrierung.
