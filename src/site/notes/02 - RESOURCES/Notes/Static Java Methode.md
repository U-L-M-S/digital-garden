---
{"dg-publish":true,"permalink":"/02-resources/notes/static-java-methode/","tags":["code/java/method"],"noteIcon":"","updated":"2024-10-21T21:07:34.689+02:00"}
---

>Wir haben gelernt; wir brauchen ein [[02 - RESOURCES/Notes/Java Objekt\|Java Objekt]] damit wir mit [[02 - RESOURCES/Notes/OOP\|OOP]] in [[02 - RESOURCES/Notes/Java\|Java]] arbeiten können.
>>Nun mit eine statische Methode ist es möglich eine [[02 - RESOURCES/Notes/Java Methode\|Java Methode]] zu benutzen ohne ein [[02 - RESOURCES/Notes/Java Objekt\|Java Objekt]] zu initialisieren.

# Bsp
```java
public class Auto {
    // Eine normale Methode (nicht static)
    public void fahren() {
        System.out.println("Das Auto fährt.");
    }

    // Eine statische Methode
    public static void hupen() {
        System.out.println("Das Auto hupt.");
    }
}

Auto meinAuto = new Auto(); // Wir erstellen ein Auto
meinAuto.fahren();          // Das Auto fährt

// Ohne Objekt
Auto.hupen(); // Das Auto hupt
```