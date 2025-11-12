---
{"dg-publish":true,"permalink":"/02-resources/notes/static-java-variable/","tags":["GFN/LF11","informatik/programmierung/sprachen/java"],"noteIcon":"","updated":"2025-10-29T12:59:10.000+01:00"}
---

>So wie bei [[02 - RESOURCES/Notes/Static Java Methode\|Static Java Methode]] funktioniert es hier genau gleich.
>> Die [[02 - RESOURCES/Notes/Java Variable\|Java Variable]] gehört zur [[02 - RESOURCES/Notes/Klasse\|Klasse]] und nicht zum Objekt.
# Bsp

```java
public class Auto {
    // Statische Variable für alle Autos
    public static int anzahlAutos = 0;

    // Konstruktor: Wird aufgerufen, wenn ein Auto erstellt wird
    public Auto() {
        anzahlAutos++; // Jedes Mal, wenn ein neues Auto erstellt wird, erhöhen wir die Anzahl
    }
}

public class Main {
    public static void main(String[] args) {
        Auto auto1 = new Auto(); // Erstes Auto
        Auto auto2 = new Auto(); // Zweites Auto

        // Auf die statische Variable zugreifen
        System.out.println("Anzahl der Autos: " + Auto.anzahlAutos); // Ausgabe: 2
    }
}
```