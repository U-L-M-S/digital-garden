---
{"dg-publish":true,"permalink":"/wiki/setter-methode/","tags":["informatik/software"],"noteIcon":"","updated":"2026-07-19T03:56:26.601+02:00","dg-note-properties":{"aliases":["Setter Methode","Setter-Methode","Java Setter Methode","Java Setter-Methode"],"created_date":"2024-10-21","links":"[[wiki/OOP\|OOP]]","tags":["informatik/software"]}}
---


>Setter-Methode ist eine spezielle [[wiki/Programmierung Methode\|Programmierung Methode]] in der objektorientierten Programmierung ([[wiki/OOP\|OOP]]), die dazu dient, den Wert einer privaten [[wiki/Variable\|Variable]] zu setzen.

>>Sie ermöglicht den kontrollierten Zugriff auf die Attribute einer [[wiki/Klasse\|Klasse]], während die [[wiki/Kapselung\|Kapselung]] gewahrt bleibt. Setter-Methoden werden oft verwendet, um Werte anzupassen, nachdem ein [[wiki/Java Objekt\|Java Objekt]] bereits erstellt wurde.

>[!important] Zweck
>Setter-Methoden sind essentiell für:
>- **Kontrollierte Wertzuweisung**: Validierung vor Setzen des Wertes
>- **Kapselung**: Private Attribute bleiben geschützt
>- **Datenintegrität**: Sicherstellung korrekter Objektzustände
>- **Flexibilität**: Werte können nach Objekterstellung geändert werden

## Syntax

### [[wiki/Java\|Java]]
```java
public void setVariableName(Typ variableName) {
    this.variableName = variableName;
}
```

## Beispiele

### Einfaches Beispiel - Auto
```java
class Auto {
    private String marke;

    // Konstruktor
    public Auto(String marke) {
        this.marke = marke;
    }

    // Setter Methode
    public void setMarke(String marke) {
        this.marke = marke;
    }

    // Getter Methode
    public String getMarke() {
        return marke;
    }
}

public class Main {
    public static void main(String[] args) {
        Auto meinAuto = new Auto("BMW");
        System.out.println("Vorher: " + meinAuto.getMarke()); // BMW

        meinAuto.setMarke("Audi");
        System.out.println("Nachher: " + meinAuto.getMarke()); // Audi
    }
}
```

### Beispiel mit Validierung - Person
```java
public class Person {
    private String name;
    private int age;

    // Setter mit einfacher Zuweisung
    public void setName(String name) {
        this.name = name;
    }

    // Setter mit Validierung
    public void setAge(int age) {
        if (age >= 0 && age <= 150) {
            this.age = age;
        } else {
            System.out.println("Ungültiges Alter: " + age);
        }
    }

    // Getter
    public String getName() { return name; }
    public int getAge() { return age; }
}
```

### Erweiteres Beispiel - Fahrzeug
```java
public class Fahrzeug {
    private String marke;
    private int baujahr;

    // Setter mit komplexer Validierung
    public void setMarke(String marke) {
        if (marke != null && !marke.trim().isEmpty()) {
            this.marke = marke.trim();
        } else {
            throw new IllegalArgumentException("Marke darf nicht leer sein");
        }
    }

    public void setBaujahr(int baujahr) {
        if (baujahr > 1885 && baujahr <= java.time.Year.now().getValue()) {
            this.baujahr = baujahr;
        } else {
            throw new IllegalArgumentException("Ungültiges Baujahr: " + baujahr);
        }
    }

    // Getter
    public String getMarke() { return marke; }
    public int getBaujahr() { return baujahr; }
}
```

>[!tip] Best Practices
>- **Naming Convention**: `set` + Attributname (großgeschrieben)
>- **Validierung**: Eingabewerte vor Zuweisung prüfen
>- **Null-Safety**: Null-Werte abfangen wenn nötig
>- **Exception Handling**: Bei ungültigen Werten Exceptions werfen
>- **Immutability**: Für unveränderliche Objekte keine Setter bereitstellen

>[!warning] Validierung
>Setter-Methoden sollten immer Eingabewerte validieren:
>- Null-Checks für Referenztypen
>- Bereichsprüfungen für numerische Werte
>- Format-Validierung für Strings
>- Geschäftslogik-Regeln enforcing

>[!note] Zusammenhang
>Setter-Methoden werden fast immer zusammen mit [[wiki/Getter Methode\|Getter Methode]]n verwendet, um vollständige Kontrolle über Objektattribute zu gewährleisten.