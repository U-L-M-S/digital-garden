---
{"dg-publish":true,"permalink":"/02-resources/notes/java-interface/","tags":["informatik/code/java","informatik/code/oop/vererbung"],"noteIcon":"","updated":"2025-09-10T16:33:04.107+02:00"}
---

>Du hast mit Sicherheit bereits gelernt wie [[02 - RESOURCES/Notes/Java Vererbung\|Java Vererbung]] funktioniert und wie man dieser verwendet.
>Leider kann bei [[02 - RESOURCES/Notes/Java Vererbung\|Java Vererbung]] ein Child [[02 - RESOURCES/Notes/Klasse\|Klasse]] nur von ein Parent [[02 - RESOURCES/Notes/Klasse\|Klasse]] vererben.
>Dafür ist [[02 - RESOURCES/Notes/Java Interface\|Java Interface]] da um das zu ermöglichen.

# Syntax

```java
public interface InterfaceName1{}
public interface InterfaceName2{}

class Child implements InterfaceName1, InterfaceName2 {

}
```


# Bsp
```java
public interface Prey {
    void flee();
}

public interface Predator {
    void hunt();
}

public class Rabbit implements Prey {
    @Override
    public void flee() {
        System.out.println("Der Hase flieht!");
    }
}

public class Wolf implements Predator {
    @Override
    public void hunt() {
        System.out.println("Der Wolf jagt!");
    }
}

// Fish can be both Predator and Prey
public class Fish implements Predator, Prey {
    private boolean isPredator;

    // Constructor to define if a fish is a predator or prey
    public Fish(boolean isPredator) {
        this.isPredator = isPredator;
    }

    @Override
    public void flee() {
        if (!isPredator) {
            System.out.println("Der Fisch flieht!");
        } else {
            System.out.println("Dieser Fisch jagt und flieht nicht!");
        }
    }

    @Override
    public void hunt() {
        if (isPredator) {
            System.out.println("Der Fisch jagt kleinere Fische!");
        } else {
            System.out.println("Dieser Fisch ist ein Beutetier und jagt nicht!");
        }
    }
}



public class Main {
    public static void main(String[] args) {
        Rabbit rabbit = new Rabbit();
        rabbit.flee();

        Wolf wolf = new Wolf();
        wolf.hunt();

        Fish predatorFish = new Fish(true);
        predatorFish.hunt();
        
        Fish preyFish = new Fish(false);
        preyFish.flee();
    }
}

```