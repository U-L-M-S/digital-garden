---
{"dg-publish":true,"permalink":"/wiki/spring/","tags":["informatik/programmierung/sprachen/java/framework"],"noteIcon":"","updated":"2026-07-02T18:16:47.000+02:00","dg-note-properties":{"aliases":["spring","Spring Boot"],"created":"2025-10-29 12:00","links":null,"path":"Notes","tags":["informatik/programmierung/sprachen/java/framework"]}}
---

>**Spring** ist ein [[wiki/Framework\|Framework]] für [[wiki/Java\|Java]], mit dem man vor allem Backend- und Webanwendungen baut.
>>Bekannt für **Dependency Injection** — Spring verwaltet die Objekte einer Anwendung zentral, statt dass man sie überall selbst per Hand erstellt.

# I. Beispiel
___
```java
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {
    
    @GetMapping("/hello")
    public String hello() {
        return "Hello, World!"; // Gibt Text als Antwort für Webanfrage zurück
    }
}
```

>[!tip]
>**Spring Boot** ist die moderne, vorkonfigurierte Variante von Spring — startklar ohne viel manuelles Setup.
