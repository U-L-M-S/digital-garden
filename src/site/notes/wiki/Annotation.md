---
{"dg-publish":true,"permalink":"/wiki/annotation/","tags":["informatik/programmierung/sprachen/java"],"noteIcon":"","updated":"2026-07-02T13:17:19.000+02:00","dg-note-properties":{"aliases":["annotation","java annotation","annotations"],"created":"2026-05-19 19:00","links":null,"path":"Notes","tags":["informatik/programmierung/sprachen/java"]}}
---

>Eine [[wiki/Annotation\|Annotation]] in [[wiki/Java\|Java]] ist ein Marker mit `@`, der vom Compiler oder Container ausgewertet wird.
>>In [[wiki/Jakarta EE\|Jakarta EE]] = "Vertrag mit dem Container": "behandle das als X".

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
| [[wiki/WildFly\|WildFly]] | Deploy-Zeit | [[wiki/@Stateless\|@Stateless]], [[wiki/@WebServlet\|@WebServlet]], [[wiki/@Entity\|@Entity]] |
| [[wiki/Hibernate\|Hibernate]] | Runtime | [[wiki/@Entity\|@Entity]], `@Id`, `@Column` |
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
