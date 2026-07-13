---
{"dg-publish":true,"permalink":"/wiki/web-servlet/","tags":["informatik/programmierung/sprachen/java/framework","informatik/programmierung/sprachen/java/annotation"],"noteIcon":"","updated":"2026-07-02T13:17:19.622+02:00","dg-note-properties":{"aliases":["webservlet","@webservlet"],"created":"2026-05-19 19:00","links":null,"path":"Notes","tags":["informatik/programmierung/sprachen/java/framework","informatik/programmierung/sprachen/java/annotation"]}}
---

>[[wiki/@WebServlet\|@WebServlet]] mappt eine [[wiki/HttpServlet\|HttpServlet]]-Klasse auf einen URL-Pfad.
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
- Klasse muss von [[wiki/HttpServlet\|HttpServlet]] erben
- `doGet()` / `doPost()` für die HTTP-Methoden
- [[wiki/serialVersionUID\|serialVersionUID]] nicht vergessen ([[wiki/HttpServlet\|HttpServlet]] ist `Serializable`)
- Pfad ist relativ zum Context-Path der App

# III. .NET-Pendant
___
Wie `[HttpGet("/hallo")]` oder Minimal-API-Route.
