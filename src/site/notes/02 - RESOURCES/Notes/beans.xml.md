---
{"dg-publish":true,"permalink":"/02-resources/notes/beans-xml/","tags":["informatik/code/java/framework"],"noteIcon":"","updated":"2026-05-19T13:38:54.958+02:00","dg-note-properties":{"aliases":["beans xml","beans-xml"],"created":"2026-05-19 19:00","links":null,"path":"Notes","tags":["informatik/code/java/framework"]}}
---

>[[02 - RESOURCES/Notes/beans.xml\|beans.xml]] aktiviert [[02 - RESOURCES/Notes/CDI\|CDI]] (Contexts and Dependency Injection) in einer App.
>>Ohne sie → [[02 - RESOURCES/Notes/@Inject\|@Inject]] / [[02 - RESOURCES/Notes/@EJB\|@EJB]] sind `null` zur Laufzeit.

# I. Wo liegt sie?
___
| Verpackung | Pfad |
|---|---|
| [[02 - RESOURCES/Notes/WAR\|WAR]] | `WEB-INF/beans.xml` |
| [[02 - RESOURCES/Notes/EJB-Jar\|EJB-Jar]] | `META-INF/beans.xml` |

# II. Minimaler Inhalt
___
```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="https://jakarta.ee/xml/ns/jakartaee"
       bean-discovery-mode="all"
       version="4.0">
</beans>
```

# III. bean-discovery-mode
___
| Modus | Bedeutung |
|---|---|
| `all` | Alle Klassen sind CDI-Beans |
| `annotated` | Nur Klassen mit Scope-Annotation |
| `none` | CDI deaktiviert |

>[!warning]
>Falscher Ort = `@EJB` / `@Inject` ist `null`. Häufigster Newbie-Fehler!
