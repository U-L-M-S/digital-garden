---
{"dg-publish":true,"permalink":"/02-resources/notes/http-servlet/","tags":["informatik/code/java/framework"],"noteIcon":"","updated":"2026-05-19T18:41:18.364+07:00","dg-note-properties":{"aliases":["http servlet","httpservlet"],"created":"2026-05-19 19:00","links":null,"path":"Notes","tags":["informatik/code/java/framework"]}}
---

>[[02 - RESOURCES/Notes/HttpServlet\|HttpServlet]] ist die Basis-Klasse aller [[02 - RESOURCES/Notes/Java\|Java]]-Web-Endpoints in [[02 - RESOURCES/Notes/Jakarta EE\|Jakarta EE]].
>>Mit [[02 - RESOURCES/Notes/@WebServlet\|@WebServlet]] auf eine URL gemappt.

# I. Beispiel
___
```java
@WebServlet("/hallo")
public class HelloServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp)
            throws IOException {
        resp.setContentType("text/plain");
        resp.getWriter().write("Hallo!");
    }
}
```

# II. Wichtige Methoden
___
| Methode | HTTP-Verb |
|---|---|
| `doGet(req, resp)` | GET |
| `doPost(req, resp)` | POST |
| `doPut(req, resp)` | PUT |
| `doDelete(req, resp)` | DELETE |

# III. Wichtig
___
- Implementiert `Serializable` → [[02 - RESOURCES/Notes/serialVersionUID\|serialVersionUID]] setzen
- Import: `jakarta.servlet.http.HttpServlet` (NICHT `javax.*`!)

>[!tip] .NET-Vergleich
>Wie ein `Controller` mit `[HttpGet]` / `[HttpPost]`-Methoden.
