---
{"dg-publish":true,"permalink":"/02-resources/notes/setter-methode/","tags":["code/OOP","code/java"],"updated":"2024-10-21T14:06:23.516+02:00"}
---

>Setter Methode ist eine speziell Methode, die in jeder Programmiert Sprache mit [[02 - RESOURCES/Notes/OOP\|OOP]] existiert.
>>Es ist nur da um den Wert von eine Private [[02 - RESOURCES/Notes/Variable\|Variable]] in eine [[02 - RESOURCES/Notes/Klasse\|Klasse]] einzusetzen.

# Syntax
```java
setVariableName(String variableName){
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