---
{"dg-publish":true,"permalink":"/02-resources/notes/java-getter-methode/","tags":["informatik/code/java","informatik/code/OOP"],"noteIcon":"","updated":"2025-09-10T16:33:03.792+02:00"}
---

>Eine [[02 - RESOURCES/Notes/Getter Methode\|Getter-Methode]] ist eine spezielle [[02 - RESOURCES/Notes/Programmierung Methode\|Programmierung Methode]] in der objektorientierten Programmierung ([[02 - RESOURCES/Notes/OOP\|OOP]]), die verwendet wird, um den Wert einer privaten [[02 - RESOURCES/Notes/Variable\|Variable]] in einer [[02 - RESOURCES/Notes/Klasse\|Klasse]] abzurufen. 
>>Sie ermöglicht den kontrollierten Zugriff auf die Attribute einer [[02 - RESOURCES/Notes/Klasse\|Klasse]], während die Kapselung gewahrt bleibt.

### Syntax
```java
public Typ getVariableName() {
    return this.variableName;
}
```

### Beispiel
```java
public class Buch {
    // Private Attribute
    private String titel;
    private String autor;

    // Getter für den Titel
    public String getTitel() {
        return titel;
    }

    // Setter für den Titel
    public void setTitel(String titel) {
        this.titel = titel;
    }

    // Getter für den Autor
    public String getAutor() {
        return autor;
    }

    // Setter für den Autor
    public void setAutor(String autor) {
        this.autor = autor;
    }
}

// Verwendung der Buch-Klasse
public class Main {
    public static void main(String[] args) {
        Buch buch = new Buch();
        buch.setTitel("Der Prozess");
        buch.setAutor("Franz Kafka");

        System.out.println("Titel: " + buch.getTitel());
        System.out.println("Autor: " + buch.getAutor());
    }
}
```

>[!note] 
>Es wird oft mit [[02 - RESOURCES/Notes/Java Setter Methode\|Java Setter Methode]] verwendet.