---
{"dg-publish":true,"permalink":"/02-resources/notes/java-setter-methode/","tags":["code/java","code/OOP"],"updated":"2024-10-28T11:07:50.524+01:00"}
---

>Eine [[02 - RESOURCES/Notes/Setter Methode\|Setter-Methode]] ist eine spezielle [[02 - RESOURCES/Notes/Methode\|Methode]] in der objektorientierten Programmierung ([[02 - RESOURCES/Notes/OOP\|OOP]]), die dazu dient, den Wert einer privaten [[02 - RESOURCES/Notes/Variable\|Variable]] in einer [[02 - RESOURCES/Notes/Klasse\|Klasse]] zu setzen.
>> Sie ermöglicht den kontrollierten Zugriff auf die Attribute einer [[02 - RESOURCES/Notes/Klasse\|Klasse]], während die Kapselung gewahrt bleibt.

### Syntax
```java
public void setVariableName(Typ variableName) {
    this.variableName = variableName;
}
```

### Beispiel
```java
public class Fahrzeug {
    // Private Attribute
    private String marke;
    private int baujahr;

    // Getter für die Marke
    public String getMarke() {
        return marke;
    }

    // Setter für die Marke
    public void setMarke(String marke) {
        this.marke = marke;
    }

    // Getter für das Baujahr
    public int getBaujahr() {
        return baujahr;
    }

    // Setter für das Baujahr mit Validierung
    public void setBaujahr(int baujahr) {
        if (baujahr > 1885) { // Das erste Auto wurde 1886 gebaut
            this.baujahr = baujahr;
        } else {
            System.out.println("Ungültiges Baujahr.");
        }
    }
}

// Verwendung der Fahrzeug-Klasse
public class Main {
    public static void main(String[] args) {
        Fahrzeug auto = new Fahrzeug();
        auto.setMarke("Volkswagen");
        auto.setBaujahr(2020);

        System.out.println("Marke: " + auto.getMarke());
        System.out.println("Baujahr: " + auto.getBaujahr());
    }
}
```


>[!note] 
>Es wird oft mit [[02 - RESOURCES/Notes/Java Getter Methode\|Java Getter Methode]] verwendet.