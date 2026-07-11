---
{"dg-publish":true,"permalink":"/wiki/beans-xml/","tags":["informatik/programmierung/sprachen/java/framework"],"noteIcon":"","updated":"2026-07-02T13:17:19.000+02:00","dg-note-properties":{"aliases":["beans xml","beans-xml"],"created":"2026-05-19 19:00","links":null,"path":"Notes","tags":["informatik/programmierung/sprachen/java/framework"]}}
---

>[[wiki/beans.xml\|beans.xml]] aktiviert [[wiki/CDI\|CDI]] (Contexts and Dependency Injection) in einer App.
>>Ohne sie → [[wiki/@Inject\|@Inject]] / [[wiki/@EJB\|@EJB]] sind `null` zur Laufzeit.

# I. Wo liegt sie?
___
| Verpackung | Pfad |
|---|---|
| [[wiki/WAR\|WAR]] | `WEB-INF/beans.xml` |
| [[wiki/EJB-Jar\|EJB-Jar]] | `META-INF/beans.xml` |

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
