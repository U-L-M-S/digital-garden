---
{"dg-publish":true,"permalink":"/02-resources/notes/java/","tags":["code/java","GFN/prüfungsrelevant/AP2"],"updated":"2024-10-24T09:05:47.512+02:00"}
---

> Computersprache, die [[02 - RESOURCES/Notes/OOP\|OOP]] benutzt oder einfacher gesagt eine Objektorientierte Computersprache.

```java
class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!"); 
    }
}
```

>Wie du bereits im klassischen "Hello World"-Code sehen kannst, ist alles in einer [[02 - RESOURCES/Notes/Klasse\|Klasse]] (HelloWorld) gespeichert.

Die [[02 - RESOURCES/Notes/Funktion\|Funktion]] `main()` ist der **Starter** der Programm.
>[!note] Eigentlich... [[02 - RESOURCES/Notes/Methode\|Methode]]. Da wir in [[02 - RESOURCES/Notes/Java\|Java]] keine  echten [[02 - RESOURCES/Notes/Funktion\|Funktion]]en haben.

Nun hat die [[02 - RESOURCES/Notes/Funktion\|Funktion]] drei Begriffen bei sich:
- public: Der [[02 - RESOURCES/Notes/Zugriffsmodifikator\|Zugriffsmodifikator]] der festlegt, dass die [[02 - RESOURCES/Notes/Methode\|Methode]] von überall aufgerufen werden kann.
- [[02 - RESOURCES/Notes/static\|static]]: ([[02 - RESOURCES/Notes/Static Java Methode\|Static Java Methode]]) bedeutet, dass die [[02 - RESOURCES/Notes/Methode\|Methode]] ohne Erstellen eines Objekts der [[02 - RESOURCES/Notes/Klasse\|Klasse]] aufgerufen werden kann.
- void: [[02 - RESOURCES/Notes/Rückgabewerttyp\|Rückgabewerttyp]], die [[02 - RESOURCES/Notes/Methode\|Methode]] keinen Rückgabewert hat.

Der Befehl `System.out.println("Hello, World!");` macht nicht anders als "Hello, World!" in der Console auszugeben.

___
# # Grundlage
> Hier lernst du die Syntax der wichtigsten Befehle, um mit der [[02 - RESOURCES/Notes/Java\|Java]]-Sprache umzugehen.

## [[02 - RESOURCES/Notes/Java klasse\|Java klasse]]

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

## [[02 - RESOURCES/Notes/Java Variable\|Java Variable]]

Wie in jede Computersprache enthält [[02 - RESOURCES/Notes/Java\|Java]] [[02 - RESOURCES/Notes/Variable\|Variable]]n und ihre Syntax is ganz ähmlich wie bei [[00 - PROJECTS/C Sprache\|C Sprache]].  
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

## [[02 - RESOURCES/Notes/Java Array\|Java Array]]
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
## [[02 - RESOURCES/Notes/Java Bedingung\|Java Bedingung]]
## [[02 - RESOURCES/Notes/Java Loop\|Java Loop]]
## [[02 - RESOURCES/Notes/Java Switch-Case\|Java Switch-Case]]

## [[02 - RESOURCES/Notes/Java klasse\|Java klasse]]
## [[02 - RESOURCES/Notes/Java Methode\|Java Methode]]
## [[02 - RESOURCES/Notes/Java Static\|Java Static]]
