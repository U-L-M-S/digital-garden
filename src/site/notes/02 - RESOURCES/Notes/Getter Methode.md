---
{"dg-publish":true,"permalink":"/02-resources/notes/getter-methode/","tags":["informatik/code/OOP","informatik/programmierung/sprachen/java"],"noteIcon":"","updated":"2025-10-29T12:59:06.266+01:00"}
---


>Getter-Methode ist eine spezielle [[02 - RESOURCES/Notes/Programmierung Methode\|Programmierung Methode]] in der objektorientierten Programmierung ([[02 - RESOURCES/Notes/OOP\|OOP]]), die verwendet wird, um den Wert einer privaten [[02 - RESOURCES/Notes/Variable\|Variable]] abzurufen.

>>Sie ermöglicht den kontrollierten Zugriff auf die Attribute einer [[02 - RESOURCES/Notes/Klasse\|Klasse]], während die [[02 - RESOURCES/Notes/Kapselung\|Kapselung]] gewahrt bleibt. Getter-Methoden existieren in jeder Programmiersprache mit [[02 - RESOURCES/Notes/OOP\|OOP]].

>[!important] Zweck
>Getter-Methoden sind essentiell für:
>- **Kapselung**: Private Attribute bleiben geschützt
>- **Kontrollierter Zugriff**: Nur lesender Zugriff auf Attribute
>- **Datenvalidierung**: Möglichkeit zur Formatierung vor Rückgabe
>- **Interface-Konsistenz**: Einheitliche Zugriffsmuster

## Syntax

### [[02 - RESOURCES/Notes/Java\|Java]]
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
>Getter-Methoden werden fast immer zusammen mit [[02 - RESOURCES/Notes/Setter Methode\|Setter Methode]]n verwendet, um vollständige Kontrolle über Objektattribute zu gewährleisten.