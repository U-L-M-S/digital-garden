---
{"dg-publish":true,"permalink":"/02-resources/notes/reflection/","tags":["informatik/code/java"],"noteIcon":"","updated":"2026-05-19T13:41:27.309+02:00","dg-note-properties":{"aliases":["java reflection","reflection"],"created":"2026-05-19 19:00","links":null,"path":"Notes","tags":["informatik/code/java"]}}
---

>[[02 - RESOURCES/Notes/Reflection\|Reflection]] ist die Fähigkeit von [[02 - RESOURCES/Notes/Java\|Java]], zur Laufzeit Klassen, Felder und Methoden zu inspizieren und zu nutzen — **ohne** den Code beim Kompilieren zu kennen.
>>Basis für [[02 - RESOURCES/Notes/Dependency Injection\|Dependency Injection]], [[02 - RESOURCES/Notes/Hibernate\|Hibernate]] und alle [[02 - RESOURCES/Notes/Annotation\|Annotation]]s-getriebenen Frameworks.

# I. Beispiel
___
```java
Class<?> clazz = Class.forName("de.levi.learning.Greeting");
Object obj = clazz.getDeclaredConstructor().newInstance();   // no-arg ctor!
Field f = clazz.getDeclaredField("message");
f.setAccessible(true);
f.set(obj, "Hallo");
```

# II. Wer nutzt es?
___
- [[02 - RESOURCES/Notes/Hibernate\|Hibernate]] → erzeugt [[02 - RESOURCES/Notes/@Entity\|@Entity]]-Instanzen via no-arg-Konstruktor
- [[02 - RESOURCES/Notes/CDI\|CDI]] / [[02 - RESOURCES/Notes/WildFly\|WildFly]] → liest [[02 - RESOURCES/Notes/Annotation\|Annotation]]en und injiziert Felder
- Frameworks generell

>[!warning]
>Deshalb: [[02 - RESOURCES/Notes/@Entity\|@Entity]] braucht **public no-arg Konstruktor**, sonst kann Hibernate keine Instanz erzeugen.

# III. .NET-Pendant
___
`System.Reflection` (`Type.GetType`, `PropertyInfo`, ...).
