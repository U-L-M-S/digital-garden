---
{"dg-publish":true,"permalink":"/02-resources/notes/ejb/","tags":["informatik/code/java/framework","informatik/code/java/annotation"],"noteIcon":"","updated":"2026-05-19T13:36:38.992+02:00","dg-note-properties":{"aliases":["ejb injection","@ejb"],"created":"2026-05-19 19:00","links":null,"path":"Notes","tags":["informatik/code/java/framework","informatik/code/java/annotation"]}}
---

>[[02 - RESOURCES/Notes/@EJB\|@EJB]] ist die [[02 - RESOURCES/Notes/Annotation\|Annotation]] für [[02 - RESOURCES/Notes/Dependency Injection\|Dependency Injection]] von [[02 - RESOURCES/Notes/Enterprise Java Bean\|EJB]]s.
>>Der [[02 - RESOURCES/Notes/WildFly\|WildFly]]-Container füllt das Feld automatisch.

# I. Beispiel
___
```java
@EJB
private HelloBean helloBean;   // Container füllt das, kein new!
```

# II. Regeln
___
- Kein `new` für [[02 - RESOURCES/Notes/Enterprise Java Bean\|EJB]]s erlaubt
- Du bekommst einen [[02 - RESOURCES/Notes/Container-Proxy\|Container-Proxy]], nicht die Bean direkt
- Bei [[02 - RESOURCES/Notes/@Stateful\|@Stateful]]: immer dieselbe Instanz pro `@EJB`-Feld → für "pro Client" lieber [[02 - RESOURCES/Notes/JNDI\|JNDI]]-Lookup

>[!warning] Häufigster Newbie-Fehler
>`@EJB`-Feld ist `null` zur Laufzeit:
>- `new` benutzt statt Injection
>- [[02 - RESOURCES/Notes/beans.xml\|beans.xml]] fehlt oder am falschen Ort
>- `javax.*` statt `jakarta.*` importiert
