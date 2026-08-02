---
{"dg-publish":true,"permalink":"/wiki/entity/","tags":["informatik/software","informatik/datenbank"],"noteIcon":"","updated":"2026-07-19T03:56:26.723+02:00","dg-note-properties":{"aliases":["entity","jpa entity","@entity"],"created":"2026-05-19 19:00","links":null,"path":"Notes","tags":["informatik/software","informatik/datenbank"]}}
---

>[[wiki/@Entity\|@Entity]] markiert eine [[wiki/POJO\|POJO]]-Klasse als [[wiki/JPA\|JPA]]-managed.
>>[[wiki/Hibernate\|Hibernate]] trackt sie und syncht sie mit einer DB-Tabelle.

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
>**no-arg public Konstruktor** ist PFLICHT (für [[wiki/Reflection\|Reflection]]).
>`@Column(name=...)` muss **exakt** zur DB-Spalte passen, sonst failt [[wiki/hbm2ddl.auto\|validate]].

# III. .NET-Pendant
___
EF Core Entity-Klasse mit `[Table]`, `[Key]`, `[Column]`.
