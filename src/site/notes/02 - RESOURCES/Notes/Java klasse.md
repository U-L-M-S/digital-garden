---
{"dg-publish":true,"permalink":"/02-resources/notes/java-klasse/","tags":["code/java/klassen"],"updated":"2024-09-25T15:39:19.756+02:00"}
---

>Um eine [[02 - RESOURCES/Notes/Klasse\|Klasse]] in [[02 - RESOURCES/Notes/Java\|Java]] zu erstellen, muss man der folgenden Syntax folgen: [[02 - RESOURCES/Notes/Zugriffsmodifikator\|Zugriffsmodifikator]] class ClassName {}
> 
> > Achte bitte darauf, dass der ClassName groß geschrieben ist.

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

