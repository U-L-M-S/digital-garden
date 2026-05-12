---
{"dg-publish":true,"permalink":"/02-resources/notes/java-override/","tags":["informatik/code/OOP","informatik/programmierung/sprachen/java"],"noteIcon":"","updated":"2026-05-12T15:35:38.945+02:00","dg-note-properties":{"aliases":["java-override"],"created_date":"2024-10-25","links":null,"tags":["informatik/code/OOP","informatik/programmierung/sprachen/java"]}}
---

>In Java bedeutet *Override*, dass eine Methode einer Basisklasse in einer abgeleiteten Klasse neu definiert wird, um deren Verhalten anzupassen. 
>>Dabei bleiben der Methodenname und die Parameter gleich, aber der Inhalt der Methode wird überschrieben. Das ermöglicht [[Polymorphismus\|Polymorphie]], bei der Objekte der Unterklasse spezifisches Verhalten zeigen, wenn Methoden aufgerufen werden.

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