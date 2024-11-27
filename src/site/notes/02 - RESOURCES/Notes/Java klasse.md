---
{"dg-publish":true,"permalink":"/02-resources/notes/java-klasse/","tags":["code/java","code/OOP"],"noteIcon":"","updated":"2024-10-25T11:27:17.000+02:00"}
---

>In [[03 - ARCHIVES/Abgeschlossen/Java\|Java]] gibt's keine echten [[02 - RESOURCES/Notes/Funktion\|Funktion]]en. Da alles in [[02 - RESOURCES/Notes/Java klasse\|Java klasse]] gemacht werden.
>> Achte bitte darauf, dass der `ClassName` groß geschrieben ist.
# Syntax
```java
public class ClassName{

}
```
>Um eine [[02 - RESOURCES/Notes/Klasse\|Klasse]] in [[03 - ARCHIVES/Abgeschlossen/Java\|Java]] zu erstellen, muss man der folgenden Syntax folgen: [[02 - RESOURCES/Notes/Zugriffsmodifikator\|Zugriffsmodifikator]] `class ClassName{}`


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

Jetzt dass wir eine einfachere [[02 - RESOURCES/Notes/Java klasse\|Java klasse]] haben. Können wir eine [[02 - RESOURCES/Notes/Java Objekt\|Java Objekt]] erstellen.

>[!note] 
>Ein [[02 - RESOURCES/Notes/Konstruktor\|Konstruktor]] wurde hier verwendet.


