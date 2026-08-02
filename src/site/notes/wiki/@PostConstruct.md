---
{"dg-publish":true,"permalink":"/wiki/post-construct/","tags":["informatik/software"],"noteIcon":"","updated":"2026-07-19T03:56:26.942+02:00","dg-note-properties":{"aliases":["post construct","@postconstruct"],"created":"2026-05-19 19:00","links":null,"path":"Notes","tags":["informatik/software"]}}
---

>[[wiki/@PostConstruct\|@PostConstruct]] ist ein [[wiki/Lifecycle Hook\|Lifecycle Hook]]: läuft **nach** dem Erstellen einer Bean.
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
>Falscher Import → [[wiki/@PostConstruct\|@PostConstruct]] läuft nie. Häufiger Newbie-Fehler.

# III. Wann läuft es?
___
- **Nach** Konstruktor
- **Nach** [[wiki/Dependency Injection\|Dependency Injection]] ([[wiki/@EJB\|@EJB]], [[wiki/@Inject\|@Inject]] sind schon befüllt)
- **Vor** dem ersten Methoden-Aufruf
