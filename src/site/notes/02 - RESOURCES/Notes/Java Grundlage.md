---
{"dg-publish":true,"permalink":"/02-resources/notes/java-grundlage/","tags":["informatik/code/java"],"noteIcon":"","updated":"2025-09-10T16:33:03.000+02:00"}
---


> Hier findest du die wichtigsten Java-Syntaxregeln, um die Sprache effektiv zu nutzen.

# [[02 - RESOURCES/Notes/Java klasse\|Java klasse]]

So wie bereits gesagt: [[02 - RESOURCES/Notes/Java\|Java]] ist eine [[02 - RESOURCES/Notes/OOP\|Objektorientierte Programmierung]]. Das heißt, alles ist ein Objekt in [[02 - RESOURCES/Notes/Java\|Java]] und muss in einer [[02 - RESOURCES/Notes/Java klasse\|Java Klasse]] definiert werden.
```java
public MyClass{
	public static void main(String[] args){
		//<do something>
	}
}
```
>[!summary] 
>[[02 - RESOURCES/Notes/Java klasse\|Java Klasse]]n können miteinander noch Kompositionen eingehen.
>Aber das lernst du später. Zuerst lass uns die Grundlagen lernen.

# [[02 - RESOURCES/Notes/Java Variable\|Java Variable]]

Wie in jede Computersprache enthält [[02 - RESOURCES/Notes/Java Variable\|Java Variable]]n und ihre Syntax is ganz ähnlich wie bei [[00 - PROJECTS/C Sprache\|C Sprache]].
Also man muss auf die [[02 - RESOURCES/Notes/Datentyp\|Datentyp]]en aufpassen wenn man [[02 - RESOURCES/Notes/Java Variable\|Java Variable]]n initialisiert oder deklariert.

```java
public class MyClass {
    public static void main(String[] args) {
        // int: 4 Bytes
        int number = 42;

        // double: 8 Bytes
        double decimalValue = 3.14;

        // char: 2 Bytes
        char letter = 'A';

        // boolean: 1 Byte (obwohl der tatsächliche Speicherplatz je nach JVM variieren kann)
        boolean isTrue = true;

        // byte: 1 Byte
        byte smallNumber = 100;

        // short: 2 Bytes
        short mediumNumber = 10000;

        // long: 8 Bytes
        long largeNumber = 100000L;

        // float: 4 Bytes
        float floatValue = 2.5f;

    }
}
```
>[!note] 
>Es ist dir vielleicht aufgefallen, aber das sind alle [[02 - RESOURCES/Notes/Primärdatentyp\|Primärdatentyp]]en. 

```java
public class MyClass {
    public static void main(String[] args) {
        // String: Referenztyp, speichert eine Zeichenkette
        String text = "Hello, World!"; // Größe variabel, je nach Inhalt

        // Array: Referenztyp, speichert eine Sammlung von Elementen
        int[] numbers = {1, 2, 3, 4, 5}; // Größe variabel, basierend auf der Anzahl der Elemente

        // Klasse (z.B. MyObject): Benutzerdefinierter Referenztyp
        MyObject myObject = new MyObject(); // Größe abhängig von den Attributen der Klasse

        // Liste: Referenztyp, speichert eine dynamische Sammlung von Elementen (Java Collections Framework)
        java.util.List<String> list = new java.util.ArrayList<>(); // Größe variabel, basierend auf der Anzahl der Elemente

        // HashMap: Referenztyp, speichert Schlüssel-Wert-Paare
        java.util.HashMap<String, Integer> map = new java.util.HashMap<>(); // Größe variabel, basierend auf der Anzahl der Schlüssel-Wert-Paare
    }

    // Benutzerdefinierte Klasse für das Beispiel
    static class MyObject {
        // Beispielattribute (Größe ist abhängig von den Datentypen)
        int id; // int: 4 Bytes
        String name; // Referenztyp, Größe variabel
    }
}
```
>[!note] 
>Das sind die [[02 - RESOURCES/Notes/Referenzdatentyp\|Referenzdatentyp]]en.
>> Genau gesagt: [[02 - RESOURCES/Notes/String\|String]] ist eine [[02 - RESOURCES/Notes/Klasse\|Klasse]].

# [[02 - RESOURCES/Notes/Java Array\|Java Array]]
Es wird benötig wenn man mehrere Werten 
```java
public class ArrayExample {
    public static void main(String[] args) {
        // Ein Array von ganzen Zahlen
        int[] zahlen = {10, 20, 30, 40, 50};

        // Ausgabe der Array-Elemente
        for (int i = 0; i < zahlen.length; i++) {
            System.out.println("Element an Index " + i + ": " + zahlen[i]);
        }
    }
}
```
>[!note] 
>Yep... In Java wir müssen ein Objekt erstellen für eine [[02 - RESOURCES/Notes/Java Array\|Java Array]].
# [[02 - RESOURCES/Notes/Java Bedingung\|Java Bedingung]]
[[02 - RESOURCES/Notes/IF-Bedingung\|IF-Bedingung]], [[02 - RESOURCES/Notes/ELSE IF-Bedingung\|ELSE IF-Bedingung]] und [[02 - RESOURCES/Notes/ELSE-Bedingung\|ELSE-Bedingung]] in Java.
```java
public class NumberCheck {
    public static void main(String[] args) {
        int number = -5;

        if (number > 0) {
            System.out.println("Die Zahl ist positiv.");
        } else if (number < 0) {
            System.out.println("Die Zahl ist negativ.");
        } else {
            System.out.println("Die Zahl ist null.");
        }
    }
}
``` 

# [[02 - RESOURCES/Notes/Java Switch-Case\|Java Switch-Case]]
Stell dir mal vor, es wären die [[02 - RESOURCES/Notes/Java Bedingung\|Java Bedingung]]en, aber etwas präziser (wenn man mehr als eine [[02 - RESOURCES/Notes/IF-Bedingung\|IF-Bedingung]] hat).
```java
public class Wochentag {
    public static void main(String[] args) {
        int tag = 3;

        switch (tag) {
            case 1:
                System.out.println("Montag");
                break;
            case 2:
                System.out.println("Dienstag");
                break;
            case 3:
                System.out.println("Mittwoch");
                break;
            case 4:
                System.out.println("Donnerstag");
                break;
            case 5:
                System.out.println("Freitag");
                break;
            case 6:
                System.out.println("Samstag");
                break;
            case 7:
                System.out.println("Sonntag");
                break;
            default:
                System.out.println("Ungültige Zahl! Bitte eine Zahl zwischen 1 und 7 eingeben.");
        }
    }
}
```
# [[02 - RESOURCES/Notes/Java Loop\|Java Loop]]
Es gibt die Möglichkeit, einen Codeblock X-mal zu wiederholen.
```java
public class LoopExample {
    public static void main(String[] args) {
        // for-Schleife
        for (int i = 0; i < 5; i++) {
            System.out.println("Dies ist die Iteration: " + i);
        }

        // while-Schleife
        int j = 0;
        while (j < 5) {
            System.out.println("Dies ist die Iteration: " + j);
            j++;
        }

        // do-while-Schleife
        int k = 0;
        do {
            System.out.println("Dies ist die Iteration: " + k);
            k++;
        } while (k < 5);
    }
}
```
>[!note] Schleifen sind nützlich, um wiederholte Aufgaben effizient zu erledigen.
# [[02 - RESOURCES/Notes/Java Methode\|Java Methode]]
Eine [[02 - RESOURCES/Notes/Java Methode\|Java Methode]] ist ein Block von Code, der eine bestimmte Aufgabe ausführt. Methoden helfen, den Code zu organisieren und wiederverwendbar zu machen.
```java
public class MethodExample {
    public static void main(String[] args) {
        int summe = addiere(5, 10);
        System.out.println("Die Summe ist: " + summe);
    }

    // Methode zum Addieren zweier Zahlen
    public static int addiere(int a, int b) {
        return a + b;
    }
}
```
>[!note] Methoden können Parameter akzeptieren und einen Wert zurückgeben.
# [[02 - RESOURCES/Notes/Java Static\|Java Static]]
Es wird verwendet, um Mitglieder (Variablen und Methoden) einer Klasse als zugehörig zur Klasse selbst zu kennzeichnen, anstatt zu einer Instanz der Klasse.
(Man kann Variablen und Methoden benutzen ohne ein [[02 - RESOURCES/Notes/Java Objekt\|Java Objekt]] zu generieren).
```java
public class StaticExample {
    static int zaehler = 0; // Statische Variable

    public static void main(String[] args) {
        // Zugriff auf die statische Methode
        erhoeheZaehler();
        System.out.println("Der Zählerwert ist: " + zaehler);
    }

    // Statische Methode zur Erhöhung des Zählers
    public static void erhoeheZaehler() {
        zaehler++;
    }
}
```
>[!note] Statische Mitglieder können ohne Erstellen einer Instanz der [[02 - RESOURCES/Notes/Klasse\|Klasse]] aufgerufen werden.
