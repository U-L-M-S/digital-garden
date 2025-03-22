---
{"dg-publish":true,"permalink":"/02 - RESOURCES/Notes/Java abstrakte Klasse/","tags":["code/java","code/OOP/vererbung"],"noteIcon":"","updated":"2024-11-07T14:27:26.665+01:00"}
---

>Es ist eine [[02 - RESOURCES/Notes/Java klasse\|Java klasse]], die nicht initialisiert werden kann.

# Syntax
```java
abstract class ClassName{

}
```

# Bsp
```java
// Abstrakte Klasse
abstract class Tier {
    // Abstrakte Methode (ohne Implementierung)
    public abstract void lautGeben();
    
    // Normale Methode (mit Implementierung)
    public void schlafen() {
        System.out.println("Das Tier schläft.");
    }
}

// Konkrete Subklasse
class Hund extends Tier {
    // Implementierung der abstrakten Methode
    @Override
    public void lautGeben() {
        System.out.println("Der Hund bellt: Wuff Wuff!");
    }
}

public class ProgramB {
    public static void main(String[] args) {
        Hund meinHund = new Hund();
        meinHund.schlafen();      // Ausgabe: Das Tier schläft.
        meinHund.lautGeben();     // Ausgabe: Der Hund bellt: Wuff Wuff!
    }
}
```

>[!bug] 
>Eine Initialisierung von der [[02 - RESOURCES/Notes/Java klasse\|Java klasse]] `Tier` ist nicht möglich, nur seine CHILDREN CLASSES.
>```java
>public class ProgramB {
>    public static void main(String[] args) {
>      Hund meinHund = new Hund();
>      meinHund.schlafen();      // Ausgabe: Das Tier schläft.
>      meinHund.lautGeben();     // Ausgabe: Der Hund bellt: Wuff Wuff!
>        
>      Tier meinTier = new Tier(); // !!!!! ERROR !!!!   
>    }
>}
>``` 
