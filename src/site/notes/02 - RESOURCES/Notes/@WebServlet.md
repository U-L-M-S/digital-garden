---
{"dg-publish":true,"permalink":"/02-resources/notes/web-servlet/","tags":["informatik/code/java/framework","informatik/code/java/annotation"],"noteIcon":"","updated":"2026-05-19T13:38:17.498+02:00","dg-note-properties":{"aliases":["webservlet","@webservlet"],"created":"2026-05-19 19:00","links":null,"path":"Notes","tags":["informatik/code/java/framework","informatik/code/java/annotation"]}}
---

>[[02 - RESOURCES/Notes/@WebServlet\|@WebServlet]] mappt eine [[02 - RESOURCES/Notes/HttpServlet\|HttpServlet]]-Klasse auf einen URL-Pfad.
>>Z.B. `@WebServlet("/hallo")` → erreichbar unter `http://localhost:7070/<app>/hallo`.

# I. Beispiel
___
```java
@WebServlet("/hallo")
public class HelloServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;

    @EJB private HelloBean helloBean;

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp)
            throws IOException {
        resp.getWriter().write(helloBean.sayHello());
    }
}
```

# II. Wichtige Regeln
___
- Klasse muss von [[02 - RESOURCES/Notes/HttpServlet\|HttpServlet]] erben
- `doGet()` / `doPost()` für die HTTP-Methoden
- [[02 - RESOURCES/Notes/serialVersionUID\|serialVersionUID]] nicht vergessen ([[02 - RESOURCES/Notes/HttpServlet\|HttpServlet]] ist `Serializable`)
- Pfad ist relativ zum Context-Path der App

# III. .NET-Pendant
___
Wie `[HttpGet("/hallo")]` oder Minimal-API-Route.
