---
{"dg-publish":true,"permalink":"/wiki/java-abstrakte-klasse/","tags":["informatik/code","informatik/software"],"noteIcon":"","updated":"2026-07-19T03:56:26.000+02:00","dg-note-properties":{"aliases":["Java abstrakte Klasse","java abstrakte Klasse"],"created_date":"2024-11-07","links":null,"tags":["informatik/code","informatik/software"]}}
---

>Es ist eine [[wiki/Java klasse\|Java klasse]], die nicht initialisiert werden kann.

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
>Eine Initialisierung von der [[wiki/Java klasse\|Java klasse]] `Tier` ist nicht möglich, nur ihre CHILDREN CLASSES.
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
