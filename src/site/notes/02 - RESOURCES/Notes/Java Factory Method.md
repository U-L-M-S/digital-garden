---
{"dg-publish":true,"permalink":"/02-resources/notes/java-factory-method/","tags":["code/java","code/OOP"]}
---

>Es ist eine [[02 - RESOURCES/Notes/Methode\|Methode]], die Objekte einer [[02 - RESOURCES/Notes/Java klasse\|Java Klasse]] erstellt und zurückgibt, ohne den [[02 - RESOURCES/Notes/Konstruktor\|Konstruktor]] direkt aufzurufen. 
>>Sie ermöglicht es, die [[02 - RESOURCES/Notes/OOP\|OOP]] zu kontrollieren, z. B. durch Wiederverwendung einer bestehenden Instanz (wie im Singleton-Muster) oder das Zurückgeben verschiedener Unterklassen. 
>>Die [[02 - RESOURCES/Notes/Java Methode\|Java Methode]] wird häufig statt `new` verwendet, um eine klarere, flexiblere [[02 - RESOURCES/Notes/API\|API]] zu schaffen.

# Syntax
```java
class ClassName {
    // Private Konstruktor, damit keine Instanzen direkt erstellt werden können
    private ClassName() {
        // Initialisierungscode
    }

    // Static Factory Method
    public static ClassName createInstance() {
        return new ClassName(); // Gibt eine neue Instanz der Klasse zurück
    }
}





public class Main {
    public static void main(String[] args) {
        ClassName obj = ClassName.createInstance(); // Erstellen eines Objekts über die Factory-Methode
    }
}

```

# Bsp

```java
class Logger {
    // Eine statische Variable, die die Singleton-Instanz hält
    private static Logger instance;

    // Privater Konstruktor, um die Instanziierung von außen zu verhindern
    private Logger() {
        System.out.println("Logger instance created");
    }

    // Static Factory Method, die kontrolliert eine Instanz zurückgibt
    public static Logger getInstance() {
        if (instance == null) {
            instance = new Logger(); // Erstellt die Instanz nur, wenn sie noch nicht existiert
        }
        return instance;
    }

    // Beispielmethode zum Protokollieren von Nachrichten
    public void log(String message) {
        System.out.println("Log: " + message);
    }
}

public class Main {
    public static void main(String[] args) {
        // Verwenden der Static Factory Method, um die Logger-Instanz zu erhalten
        Logger logger1 = Logger.getInstance();
        logger1.log("This is the first log message."); // Ausgabe: Log: This is the first log message.

        // Ein zweiter Aufruf von getInstance() gibt dieselbe Instanz zurück
        Logger logger2 = Logger.getInstance();
        logger2.log("This is the second log message."); // Ausgabe: Log: This is the second log message.

        // Überprüfen, ob beide Referenzen auf dasselbe Objekt zeigen
        System.out.println(logger1 == logger2); // Ausgabe: true
    }
}
```