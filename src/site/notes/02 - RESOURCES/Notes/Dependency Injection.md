---
{"dg-publish":true,"permalink":"/02-resources/notes/dependency-injection/","tags":["informatik/code/pattern","informatik/code/java/framework"],"noteIcon":"","updated":"2026-05-19T13:39:37.916+02:00","dg-note-properties":{"aliases":["dependency injection","di","injection"],"created":"2026-05-19 19:00","links":null,"path":"Notes","tags":["informatik/code/pattern","informatik/code/java/framework"]}}
---

>[[02 - RESOURCES/Notes/Dependency Injection\|Dependency Injection]] (DI) bedeutet: nicht du erstellst deine Abhängigkeiten — der Container gibt sie dir.
>>Du schreibst niemals `new`, du nutzt [[02 - RESOURCES/Notes/@EJB\|@EJB]] / [[02 - RESOURCES/Notes/@Inject\|@Inject]].

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
- Automatische Transaktionen via [[02 - RESOURCES/Notes/Container-Proxy\|Container-Proxy]]

# III. Annotationen für DI
___
| Annotation | Quelle | Für |
|---|---|---|
| [[02 - RESOURCES/Notes/@EJB\|@EJB]] | EJB-Spec | [[02 - RESOURCES/Notes/Enterprise Java Bean\|EJB]]s |
| [[02 - RESOURCES/Notes/@Inject\|@Inject]] | [[02 - RESOURCES/Notes/CDI\|CDI]] | Alle Beans |
| [[02 - RESOURCES/Notes/@PersistenceContext\|@PersistenceContext]] | [[02 - RESOURCES/Notes/JPA\|JPA]] | [[02 - RESOURCES/Notes/EntityManager\|EntityManager]] |
| `@Resource` | Java EE | [[02 - RESOURCES/Notes/Datasource\|Datasource]], Mail, ... |

>[!tip] .NET-Vergleich
>Constructor-DI mit `services.AddX<>()` in `Program.cs`. Hier ist die [[02 - RESOURCES/Notes/Annotation\|Annotation]] die Registrierung.
