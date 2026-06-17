---
{"dg-publish":true,"permalink":"/02-resources/notes/jndi/","tags":["informatik/code/java"],"noteIcon":"","updated":"2026-05-19T13:36:16.053+02:00","dg-note-properties":{"aliases":["Java Naming and Directory Interface","jndi"],"created":"2026-05-19 19:00","links":null,"path":"Notes","tags":["informatik/code/java"]}}
---

>[[02 - RESOURCES/Notes/JNDI\|JNDI]] (Java Naming and Directory Interface) ist ein Verzeichnisbaum für alle gemanagete Ressourcen im [[02 - RESOURCES/Notes/WildFly\|WildFly]]-Container.
>>Wie ein Dateisystem, aber für [[02 - RESOURCES/Notes/Enterprise Java Bean\|EJB]]s, [[02 - RESOURCES/Notes/Datasource\|Datasource]]s und Connections.

# I. Wofür?
___
Jede [[02 - RESOURCES/Notes/Enterprise Java Bean\|EJB]] und jede [[02 - RESOURCES/Notes/Datasource\|Datasource]] bekommt einen Namen im JNDI-Tree. Über diesen Namen kannst du sie auflösen ("lookup").

# II. Namespaces
___
Jede [[02 - RESOURCES/Notes/Enterprise Java Bean\|EJB]] hat **6 Namen** beim Deploy:
- `java:global/[app]/[bean]` → serverweit, alle Apps
- `java:app/[app]/[bean]` → innerhalb der App (EAR)
- `java:module/[bean]` → innerhalb des Moduls (kürzester Pfad)
- + 3 weitere mit FQCN (Full Qualified Class Name)

[[02 - RESOURCES/Notes/Datasource\|Datasource]]s liegen separat unter `java:jboss/datasources/...`.

# III. Manueller Lookup
___
```java
InitialContext ctx = new InitialContext();
CartBean cart = (CartBean) ctx.lookup("java:module/CartBean");
```

>[!tip] .NET-Vergleich
>JNDI ≈ `IServiceProvider.GetService<T>()` — nur mit String-Pfad statt Generic.
