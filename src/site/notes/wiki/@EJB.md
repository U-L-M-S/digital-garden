---
{"dg-publish":true,"permalink":"/wiki/ejb/","tags":["informatik/programmierung/sprachen/java/framework","informatik/programmierung/sprachen/java/annotation"],"noteIcon":"","updated":"2026-07-02T13:17:19.612+02:00","dg-note-properties":{"aliases":["ejb injection","@ejb"],"created":"2026-05-19 19:00","links":null,"path":"Notes","tags":["informatik/programmierung/sprachen/java/framework","informatik/programmierung/sprachen/java/annotation"]}}
---

>[[wiki/@EJB\|@EJB]] ist die [[wiki/Annotation\|Annotation]] für [[wiki/Dependency Injection\|Dependency Injection]] von [[wiki/Enterprise Java Bean\|EJB]]s.
>>Der [[wiki/WildFly\|WildFly]]-Container füllt das Feld automatisch.

# I. Beispiel
___
```java
@EJB
private HelloBean helloBean;   // Container füllt das, kein new!
```

# II. Regeln
___
- Kein `new` für [[wiki/Enterprise Java Bean\|EJB]]s erlaubt
- Du bekommst einen [[wiki/Container-Proxy\|Container-Proxy]], nicht die Bean direkt
- Bei [[wiki/@Stateful\|@Stateful]]: immer dieselbe Instanz pro `@EJB`-Feld → für "pro Client" lieber [[wiki/JNDI\|JNDI]]-Lookup

>[!warning] Häufigster Newbie-Fehler
>`@EJB`-Feld ist `null` zur Laufzeit:
>- `new` benutzt statt Injection
>- [[wiki/beans.xml\|beans.xml]] fehlt oder am falschen Ort
>- `javax.*` statt `jakarta.*` importiert
