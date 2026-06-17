---
{"dg-publish":true,"permalink":"/02-resources/notes/pojo/","tags":["informatik/code/java"],"noteIcon":"","updated":"2026-05-19T13:39:52.268+02:00","dg-note-properties":{"aliases":["plain old java object","pojo"],"created":"2026-05-19 19:00","links":null,"path":"Notes","tags":["informatik/code/java"]}}
---

>[[02 - RESOURCES/Notes/POJO\|POJO]] = **Plain Old Java Object**: eine normale [[02 - RESOURCES/Notes/Java\|Java]]-Klasse ohne Framework-Vererbung.
>>Hat nur Felder, Konstruktor, Getter/Setter — sonst nichts.

# I. Beispiel
___
```java
public class Greeting {
    private Long id;
    private String message;

    public Greeting() {}
    public Greeting(String m) { this.message = m; }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
}
```

# II. Wofür?
___
- Einfach zu testen (kein Container nötig)
- Mit [[02 - RESOURCES/Notes/Annotation\|Annotation]]en zu [[02 - RESOURCES/Notes/@Entity\|@Entity]] oder einer Bean machbar
- Frei von Framework-Abhängigkeiten

# III. POJO + Annotation = Power
___
Ein POJO + `@Entity` = [[02 - RESOURCES/Notes/JPA\|JPA]]-Entity.
Ein POJO + `@Stateless` = [[02 - RESOURCES/Notes/Enterprise Java Bean\|EJB]].

>[!tip]
>Der Trick von [[02 - RESOURCES/Notes/Jakarta EE\|Jakarta EE]]: alles ist ein POJO + Annotation. Kein "extends EJBObject" mehr wie in alten EJB-2-Zeiten.
