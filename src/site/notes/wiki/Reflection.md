---
{"dg-publish":true,"permalink":"/wiki/reflection/","tags":["informatik/programmierung/sprachen/java"],"noteIcon":"","updated":"2026-07-02T13:17:19.836+02:00","dg-note-properties":{"aliases":["java reflection","reflection"],"created":"2026-05-19 19:00","links":null,"path":"Notes","tags":["informatik/programmierung/sprachen/java"]}}
---

>[[wiki/Reflection\|Reflection]] ist die Fähigkeit von [[wiki/Java\|Java]], zur Laufzeit Klassen, Felder und Methoden zu inspizieren und zu nutzen — **ohne** den Code beim Kompilieren zu kennen.
>>Basis für [[wiki/Dependency Injection\|Dependency Injection]], [[wiki/Hibernate\|Hibernate]] und alle [[wiki/Annotation\|Annotation]]s-getriebenen Frameworks.

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
- [[wiki/Hibernate\|Hibernate]] → erzeugt [[wiki/@Entity\|@Entity]]-Instanzen via no-arg-Konstruktor
- [[wiki/CDI\|CDI]] / [[wiki/WildFly\|WildFly]] → liest [[wiki/Annotation\|Annotation]]en und injiziert Felder
- Frameworks generell

>[!warning]
>Deshalb: [[wiki/@Entity\|@Entity]] braucht **public no-arg Konstruktor**, sonst kann Hibernate keine Instanz erzeugen.

# III. .NET-Pendant
___
`System.Reflection` (`Type.GetType`, `PropertyInfo`, ...).
