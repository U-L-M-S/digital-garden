---
{"dg-publish":true,"permalink":"/02-resources/notes/singleton/","tags":["design-patterns/erzeugung","oop/instanziierung"],"noteIcon":"","updated":"2025-09-16T23:41:26.862+02:00"}
---


>Das [[02 - RESOURCES/Notes/Singleton\|Singleton]]-Pattern gewährleistet, dass von einer Klasse nur genau eine Instanz existiert.

>>Es stellt einen globalen Zugriffspunkt auf diese einzige Instanz bereit.

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