---
{"dg-publish":true,"permalink":"/02-resources/notes/java-klasse/","tags":["informatik/code/OOP","informatik/programmierung/sprachen/java"],"noteIcon":"","updated":"2026-05-12T15:34:31.065+02:00","dg-note-properties":{"created":"2024-06-21 16:38","links":null,"path":"Notes","tags":["informatik/code/OOP","informatik/programmierung/sprachen/java"]}}
---

>In [[02 - RESOURCES/Notes/Java\|Java]] gibt's keine echten [[02 - RESOURCES/Notes/Funktion\|Funktion]]en. Denn alles wird in einer [[02 - RESOURCES/Notes/Java klasse\|Java klasse]] gemacht.
>> Achte bitte darauf, dass der `ClassName` groß geschrieben ist.
# Syntax
```java
public class ClassName{

}
```
>Um eine [[02 - RESOURCES/Notes/Klasse\|Klasse]] in [[02 - RESOURCES/Notes/Java\|Java]] zu erstellen, muss man der folgenden Syntax folgen: [[02 - RESOURCES/Notes/Zugriffsmodifikator\|Zugriffsmodifikator]] `class ClassName{}`


>[!important] 
>Achtet bitte auf [[02 - RESOURCES/Notes/Java Static\|Java Static]]. 
>Es ist ein extrem wichtiges Konzept und wird später benötigt.

# Bsp
```java
public class Car {
    // Fields (attributes)
    String model;
    String color;
    int year;

    // Constructor
    public Car(String model, String color, int year) {
        this.model = model;
        this.color = color;
        this.year = year;
    }

    // Method to display car details
    public void displayDetails() {
        System.out.println("Model: " + model);
        System.out.println("Color: " + color);
        System.out.println("Year: " + year);
    }
}
```

Jetzt, da wir eine einfachere [[02 - RESOURCES/Notes/Java klasse\|Java klasse]] haben, können wir ein [[02 - RESOURCES/Notes/Java Objekt\|Java Objekt]] erstellen.

>[!note] 
>Ein [[02 - RESOURCES/Notes/Konstruktor\|Konstruktor]] wurde hier verwendet.


