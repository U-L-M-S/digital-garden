---
{"dg-publish":true,"permalink":"/wiki/static-java-variable/","tags":["ausbildung/gfn","informatik/software"],"noteIcon":"","updated":"2026-07-19T03:56:26.934+02:00","dg-note-properties":{"aliases":["Static Java Variable","static Java Variable"],"created_date":"2024-10-21","links":null,"tags":["ausbildung/gfn","informatik/software"]}}
---

>So wie bei [[wiki/Static Java Methode\|Static Java Methode]] funktioniert es hier genau gleich.
>> Die [[wiki/Java Variable\|Java Variable]] gehört zur [[wiki/Klasse\|Klasse]] und nicht zum Objekt.
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