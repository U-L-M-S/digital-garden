---
{"dg-publish":true,"permalink":"/wiki/http-servlet/","tags":["informatik/software"],"noteIcon":"","updated":"2026-07-19T03:56:26.000+02:00","dg-note-properties":{"aliases":["http servlet","httpservlet"],"created":"2026-05-19 19:00","links":null,"path":"Notes","tags":["informatik/software"]}}
---

>[[wiki/HttpServlet\|HttpServlet]] ist die Basis-Klasse aller [[wiki/Java\|Java]]-Web-Endpoints in [[wiki/Jakarta EE\|Jakarta EE]].
>>Mit [[wiki/@WebServlet\|@WebServlet]] auf eine URL gemappt.

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
- Implementiert `Serializable` → [[wiki/serialVersionUID\|serialVersionUID]] setzen
- Import: `jakarta.servlet.http.HttpServlet` (NICHT `javax.*`!)

>[!tip] .NET-Vergleich
>Wie ein `Controller` mit `[HttpGet]` / `[HttpPost]`-Methoden.
