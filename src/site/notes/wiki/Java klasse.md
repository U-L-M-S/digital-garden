---
{"dg-publish":true,"permalink":"/wiki/java-klasse/","tags":["informatik/software"],"noteIcon":"","updated":"2026-07-19T03:56:26.984+02:00","dg-note-properties":{"created":"2024-06-21 16:38","links":null,"path":"Notes","tags":["informatik/software"]}}
---

>In [[wiki/Java\|Java]] gibt's keine echten [[wiki/Funktion\|Funktion]]en. Denn alles wird in einer [[wiki/Java klasse\|Java klasse]] gemacht.
>> Achte bitte darauf, dass der `ClassName` groß geschrieben ist.
# Syntax
```java
public class ClassName{

}
```
>Um eine [[wiki/Klasse\|Klasse]] in [[wiki/Java\|Java]] zu erstellen, muss man der folgenden Syntax folgen: [[wiki/Zugriffsmodifikator\|Zugriffsmodifikator]] `class ClassName{}`


>[!important] 
>Achtet bitte auf [[wiki/Java Static\|Java Static]]. 
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

Jetzt, da wir eine einfachere [[wiki/Java klasse\|Java klasse]] haben, können wir ein [[wiki/Java Objekt\|Java Objekt]] erstellen.

>[!note] 
>Ein [[wiki/Konstruktor\|Konstruktor]] wurde hier verwendet.


