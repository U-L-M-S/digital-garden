---
{"dg-publish":true,"permalink":"/02-resources/notes/singleton/","tags":["design-patterns/erzeugung","oop/instanziierung","informatik/code/java/framework","informatik/code/java/annotation"],"noteIcon":"","updated":"2026-05-19T19:42:33.278+07:00","dg-note-properties":{"tags":["design-patterns/erzeugung","oop/instanziierung","informatik/code/java/framework","informatik/code/java/annotation"],"aliases":["Singleton-Pattern","Einzelstück-Muster","@Singleton","singleton ejb","singleton bean","@singleton"],"links":null,"created_date":"2025-09-16"}}
---


>Das [[02 - RESOURCES/Notes/Singleton\|Singleton]]-Pattern gewährleistet, dass von einer Klasse nur genau eine Instanz existiert.

>>Es stellt einen globalen Zugriffspunkt auf diese einzige Instanz bereit.

# I. Allgemeines Pattern (GoF)
___

>[!important] 
>**Singleton-Eigenschaften:**
>- Nur eine Instanz der Klasse
>- Globaler Zugriffspunkt
>- Lazy Initialization (auf Anfrage erstellen)
>- Thread-Safety beachten

>[!example] 
>```java
>public class DatabaseConnection {
>    private static DatabaseConnection instance;
>    
>    // Private Konstruktor verhindert direkte Instanziierung
>    private DatabaseConnection() {}
>    
>    // Thread-safe Singleton
>    public static synchronized DatabaseConnection getInstance() {
>        if (instance == null) {
>            instance = new DatabaseConnection();
>        }
>        return instance;
>    }
>}
>
>// Verwendung
>DatabaseConnection db = DatabaseConnection.getInstance();
>```

>[!warning] 
>Kann zu tight coupling führen und Testing erschweren.

# II. Jakarta-EE-Annotation `@Singleton` (EJB)
___

>`@Singleton` markiert eine [[02 - RESOURCES/Notes/Enterprise Java Bean\|EJB]] als globale Einzelinstanz.
>>**Genau eine** Instanz für die ganze App.

## Eigenschaften
- Exakt 1 Instanz im [[02 - RESOURCES/Notes/WildFly\|WildFly]]
- Mehrere Threads rufen sie **parallel** auf
- [[02 - RESOURCES/Notes/Thread-Safety\|Thread-Safety]] musst du **selbst** sicherstellen
- Default: Lazy (erst beim 1. Aufruf erstellt)
- Mit `@Startup` → eager (beim Deploy)

## Beispiel
```java
@Singleton
public class CounterBean {
    private final AtomicInteger count = new AtomicInteger(0);

    public int incrementAndGet() {
        return count.incrementAndGet();  // thread-safe!
    }
}
```

>[!warning]
>Normales `int count++` führt bei mehreren Threads zu Datensalat. Nutze [[02 - RESOURCES/Notes/AtomicInteger\|AtomicInteger]] oder `synchronized`.

# III. .NET-Pendant
___
`AddSingleton`.
