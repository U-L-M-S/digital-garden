---
{"dg-publish":true,"permalink":"/02-resources/notes/java-objekt/","tags":["code/java","code/OOP"],"noteIcon":"","updated":"2024-10-25T11:27:17.333+02:00"}
---

>Es ist eine Instanz einer [[02 - RESOURCES/Notes/Java klasse\|Java Klasse]] in der objektorientierten Programmierung ([[02 - RESOURCES/Notes/OOP\|OOP]]). 
>Eine [[02 - RESOURCES/Notes/Klasse\|Klasse]] ist eine Vorlage oder ein Bauplan, und ein Objekt ist ein konkretes Exemplar dieser [[02 - RESOURCES/Notes/Klasse\|Klasse]]. 
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