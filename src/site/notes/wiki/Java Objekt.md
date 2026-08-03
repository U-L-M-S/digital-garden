---
{"dg-publish":true,"permalink":"/wiki/java-objekt/","tags":["informatik/software"],"noteIcon":"","updated":"2026-07-19T03:56:26.000+02:00","dg-note-properties":{"aliases":["Java Objekt","Java-Objekt"],"created_date":"2024-09-25","links":null,"tags":["informatik/software"]}}
---

>Es ist eine Instanz einer [[wiki/Java klasse\|Java Klasse]] in der objektorientierten Programmierung ([[wiki/OOP\|OOP]]). 
>Eine [[wiki/Klasse\|Klasse]] ist eine Vorlage oder ein Bauplan, und ein Objekt ist ein konkretes Exemplar dieser [[wiki/Klasse\|Klasse]]. 
>>Jedes Objekt hat seine eigenen Eigenschaften (Daten/Attribute) und Verhaltensweisen (Methoden). 
>>Durch Objekte wird es möglich, reale Konzepte wie Autos, Personen oder Tiere in Code zu modellieren.

```java
public class Car {
    // Attribute (Felder)
    String model;
    String color;
    int year;

    // Konstruktor
    public Car(String model, String color, int year) {
        this.model = model;
        this.color = color;
        this.year = year;
    }

    // Methode, um Details des Autos anzuzeigen
    public void displayDetails() {
        System.out.println("Model: " + model);
        System.out.println("Color: " + color);
        System.out.println("Year: " + year);
    }

    // Hauptprogramm
    public static void main(String[] args) {
        // Erstellen eines Objekts der Klasse Car
        Car myCar = new Car("Audi A4", "Schwarz", 2020);

        // Aufrufen der Methode, um die Autodetails anzuzeigen
        myCar.displayDetails();
    }
}
```