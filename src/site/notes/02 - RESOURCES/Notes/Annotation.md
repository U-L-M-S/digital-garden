---
{"dg-publish":true,"permalink":"/02-resources/notes/annotation/","tags":["informatik/code/java"],"noteIcon":"","updated":"2026-05-19T18:39:46.067+07:00","dg-note-properties":{"aliases":["annotation","java annotation","annotations"],"created":"2026-05-19 19:00","links":null,"path":"Notes","tags":["informatik/code/java"]}}
---

>Eine [[02 - RESOURCES/Notes/Annotation\|Annotation]] in [[02 - RESOURCES/Notes/Java\|Java]] ist ein Marker mit `@`, der vom Compiler oder Container ausgewertet wird.
>>In [[02 - RESOURCES/Notes/Jakarta EE\|Jakarta EE]] = "Vertrag mit dem Container": "behandle das als X".

# I. Beispiele
___
```java
@Stateless           // Bean-Typ
@Entity              // JPA-managed
@WebServlet("/x")    // URL-Mapping
@EJB                 // Inject
@Override            // Compiler-Check
```

# II. Wer wertet die aus?
___
| Wer | Wann | Wofür |
|---|---|---|
| Compiler | Compile-Zeit | `@Override`, `@Deprecated` |
| [[02 - RESOURCES/Notes/WildFly\|WildFly]] | Deploy-Zeit | [[02 - RESOURCES/Notes/@Stateless\|@Stateless]], [[02 - RESOURCES/Notes/@WebServlet\|@WebServlet]], [[02 - RESOURCES/Notes/@Entity\|@Entity]] |
| [[02 - RESOURCES/Notes/Hibernate\|Hibernate]] | Runtime | [[02 - RESOURCES/Notes/@Entity\|@Entity]], `@Id`, `@Column` |
| Frameworks | Runtime | Eigene Logik per Reflection |

>[!tip] .NET-Vergleich
>Wie `[Attribute]` in C# — same idea, andere Syntax.

# III. Selber schreiben
___
```java
@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.METHOD)
public @interface MyAnnotation { }
```
