---
{"dg-publish":true,"permalink":"/02-resources/notes/post-construct/","tags":["informatik/code/java/framework","informatik/code/java/annotation"],"noteIcon":"","updated":"2026-05-19T18:38:10.889+07:00","dg-note-properties":{"aliases":["post construct","@postconstruct"],"created":"2026-05-19 19:00","links":null,"path":"Notes","tags":["informatik/code/java/framework","informatik/code/java/annotation"]}}
---

>[[02 - RESOURCES/Notes/@PostConstruct\|@PostConstruct]] ist ein [[02 - RESOURCES/Notes/Lifecycle Hook\|Lifecycle Hook]]: läuft **nach** dem Erstellen einer Bean.
>>Perfekt für Init (DB-Connection, Config-Load, ...).

# I. Beispiel
___
```java
@Stateless
public class HelloBean {
    @PostConstruct
    public void init() {
        LOG.info("Bean wurde erstellt");
    }
}
```

# II. Wichtig: richtiger Import
___
```java
import jakarta.annotation.PostConstruct;   // ✅ RICHTIG
import jakarta.ejb.PostConstruct;          // ❌ FALSCH (existiert nicht!)
```

>[!warning]
>Falscher Import → [[02 - RESOURCES/Notes/@PostConstruct\|@PostConstruct]] läuft nie. Häufiger Newbie-Fehler.

# III. Wann läuft es?
___
- **Nach** Konstruktor
- **Nach** [[02 - RESOURCES/Notes/Dependency Injection\|Dependency Injection]] ([[02 - RESOURCES/Notes/@EJB\|@EJB]], [[02 - RESOURCES/Notes/@Inject\|@Inject]] sind schon befüllt)
- **Vor** dem ersten Methoden-Aufruf
