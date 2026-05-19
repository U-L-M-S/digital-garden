---
{"dg-publish":true,"permalink":"/02-resources/notes/entity/","tags":["informatik/code/java/framework","informatik/code/java/annotation","informatik/datenbank"],"noteIcon":"","updated":"2026-05-19T13:38:31.120+02:00","dg-note-properties":{"aliases":["entity","jpa entity","@entity"],"created":"2026-05-19 19:00","links":null,"path":"Notes","tags":["informatik/code/java/framework","informatik/code/java/annotation","informatik/datenbank"]}}
---

>[[02 - RESOURCES/Notes/@Entity\|@Entity]] markiert eine [[02 - RESOURCES/Notes/POJO\|POJO]]-Klasse als [[02 - RESOURCES/Notes/JPA\|JPA]]-managed.
>>[[02 - RESOURCES/Notes/Hibernate\|Hibernate]] trackt sie und syncht sie mit einer DB-Tabelle.

# I. Beispiel
___
```java
@Entity
@Table(name = "greetings")
public class Greeting {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "message", nullable = false, length = 255)
    private String message;

    public Greeting() {}    // PFLICHT: no-arg public ctor!
}
```

# II. Wichtige Annotationen
___
| Annotation | Bedeutung |
|---|---|
| `@Entity` | Klasse wird gemanagt |
| `@Table(name=...)` | Tabellenname (sonst = Klassenname) |
| `@Id` | Primärschlüssel |
| `@GeneratedValue` | Wer vergibt die ID (IDENTITY = DB) |
| `@Column(name=...)` | Spalten-Mapping (camelCase → snake_case) |

>[!warning]
>**no-arg public Konstruktor** ist PFLICHT (für [[02 - RESOURCES/Notes/Reflection\|Reflection]]).
>`@Column(name=...)` muss **exakt** zur DB-Spalte passen, sonst failt [[02 - RESOURCES/Notes/hbm2ddl.auto\|validate]].

# III. .NET-Pendant
___
EF Core Entity-Klasse mit `[Table]`, `[Key]`, `[Column]`.
