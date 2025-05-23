---
{"dg-publish":true,"permalink":"/02-resources/notes/java-override/","tags":["code/java","code/OOP"],"noteIcon":"","updated":"2024-10-30T22:19:04.000+01:00"}
---

>In Java bedeutet *Override*, dass eine Methode einer Basisklasse in einer abgeleiteten Klasse neu definiert wird, um deren Verhalten anzupassen. 
>>Dabei bleibt der Methodenname und die Parameter gleich, aber der Inhalt der Methode wird überschrieben. Das ermöglicht Polymorphie, bei der Objekte der Unterklasse spezifisches Verhalten zeigen, wenn Methoden aufgerufen werden.

# Bsp
```java
class Tier {
    void sound() {
        System.out.println("Ein Tiergeräusch");
    }
}

class Hund extends Tier {
    @Override
    void sound() {
        System.out.println("Wuff Wuff");
    }
}

public class Main {
    public static void main(String[] args) {
        Tier myTier = new Hund();
        myTier.sound(); // Ausgabe: "Wuff Wuff"
    }
}
```