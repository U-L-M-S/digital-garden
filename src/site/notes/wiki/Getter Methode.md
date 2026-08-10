---
{"dg-publish":true,"permalink":"/wiki/getter-methode/","tags":["informatik/software"],"noteIcon":"","updated":"2026-07-19T03:56:26.000+02:00","dg-note-properties":{"aliases":["Getter-Methode","Java Getter Methode"],"created_date":"2024-10-21","links":"[[wiki/OOP]]","tags":["informatik/software"]}}
---


>Getter-Methode ist eine spezielle [[wiki/Programmierung Methode\|Programmierung Methode]] in der objektorientierten Programmierung ([[wiki/OOP\|OOP]]), die verwendet wird, um den Wert einer privaten [[wiki/Variable\|Variable]] abzurufen.

>>Sie ermöglicht den kontrollierten Zugriff auf die Attribute einer [[wiki/Klasse\|Klasse]], während die [[wiki/Kapselung\|Kapselung]] gewahrt bleibt. Getter-Methoden existieren in jeder Programmiersprache mit [[wiki/OOP\|OOP]].

>[!important] Zweck
>Getter-Methoden sind essentiell für:
>- **Kapselung**: Private Attribute bleiben geschützt
>- **Kontrollierter Zugriff**: Nur lesender Zugriff auf Attribute
>- **Datenvalidierung**: Möglichkeit zur Formatierung vor Rückgabe
>- **Interface-Konsistenz**: Einheitliche Zugriffsmuster

## Syntax

### [[wiki/Java\|Java]]
```java
public Typ getVariableName() {
    return this.variableName;
}
```

## Beispiele

### Einfaches Beispiel - Person
```java
public class Person {
    // Private Attribute
    private String name;
    private int age;

    // Getter für den Namen
    public String getName() {
        return name;
    }

    // Getter für das Alter
    public int getAge() {
        return age;
    }

    // Setter für den Namen
    public void setName(String name) {
        this.name = name;
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
```

### Erweiteres Beispiel - Buch
```java
public class Buch {
    private String titel;
    private String autor;

    // Getter mit Formatierung
    public String getTitel() {
        return titel != null ? titel : "Unbekannt";
    }

    public String getAutor() {
        return autor != null ? autor : "Unbekannt";
    }

    // Setter
    public void setTitel(String titel) {
        this.titel = titel;
    }

    public void setAutor(String autor) {
        this.autor = autor;
    }
}
```

>[!tip] Best Practices
>- **Naming Convention**: `get` + Attributname (großgeschrieben)
>- **Return Type**: Gleicher Typ wie das private Attribut
>- **Null-Safety**: Prüfung auf null-Werte wenn nötig
>- **Immutability**: Bei komplexen Objekten Kopien zurückgeben

>[!note] Zusammenhang
>Getter-Methoden werden fast immer zusammen mit [[wiki/Setter Methode\|Setter Methode]]n verwendet, um vollständige Kontrolle über Objektattribute zu gewährleisten.