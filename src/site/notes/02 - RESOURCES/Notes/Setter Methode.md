---
{"dg-publish":true,"permalink":"/02-resources/notes/setter-methode/","tags":["informatik/code/OOP","informatik/programmierung/sprachen/java"],"noteIcon":"","updated":"2025-09-27T01:32:43.000+02:00"}
---

> Setter-Methode ist eine spezielle Methode, die in jeder Programmiersprache mit [[02 - RESOURCES/Notes/OOP\|OOP]] existiert.  
>> Sie dient dazu, den Wert einer privaten [[02 - RESOURCES/Notes/Variable\|Variable]] in einer [[02 - RESOURCES/Notes/Klasse\|Klasse]] zu setzen.  
>> Sie wird oft verwendet, um den Wert anzupassen, nachdem man ein [[02 - RESOURCES/Notes/Java Objekt\|Java Objekt]] bereits mit einem Wert erstellt hat.

```java
class Auto {
    // Private Variable
    private String marke;

    // Konstruktor
    public Auto(String marke) {
        this.marke = marke;
    }

    // Setter Methode
    public void setMarke(String marke) {
        this.marke = marke;  // Der Wert der privaten Variable 'marke' wird durch die Methode gesetzt
    }

    // Getter Methode
    public String getMarke() {
        return marke;  // Gibt den Wert der privaten Variable 'marke' zurück
    }
}

public class Main {
    public static void main(String[] args) {
        // Erstelle ein neues Auto-Objekt mit der Marke "BMW"
        Auto meinAuto = new Auto("BMW");

        // Ausgabe vor dem Setzen des neuen Wertes
        System.out.println("Vorher: " + meinAuto.getMarke());  // Gibt "BMW" aus

        // Benutze die Setter-Methode, um die Marke des Autos zu ändern
        meinAuto.setMarke("Audi");

        // Ausgabe nach dem Setzen des neuen Wertes
        System.out.println("Nachher: " + meinAuto.getMarke());  // Gibt "Audi" aus
    }
}
```
# Syntax
```java
public void setVariableName(String variableName){
	this.variableName = variableName;
}
```

# Bsp
```java
public class Person {
    // Private Attribute
    private String name;
    private int age;

    // Getter für den Namen
    public String getName() {
        return name;
    }

    // Setter für den Namen
    public void setName(String name) {
        this.name = name;
    }

    // Getter für das Alter
    public int getAge() {
        return age;
    }

    // Setter für das Alter mit Validierung
    public void setAge(int age) {
        if (age >= 0) {
            this.age = age;
        } else {
            System.out.println("Das Alter kann nicht negativ sein.");
        }
    }
}

// Verwendung der Person-Klasse
public class Main {
    public static void main(String[] args) {
        Person person = new Person();
        person.setName("Levi");
        person.setAge(25);
        
        System.out.println("Name: " + person.getName());
        System.out.println("Alter: " + person.getAge());
    }
}
```


>[!note] 
>Es wird oft mit [[02 - RESOURCES/Notes/Getter Methode\|Getter Methode]] verwendet.