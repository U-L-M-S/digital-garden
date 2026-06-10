---
{"dg-publish":true,"permalink":"/02-resources/notes/java-while-loop/","tags":["informatik/programmierung/sprachen/java"],"noteIcon":"","updated":"2026-05-12T20:36:40.370+07:00","dg-note-properties":{"created":"2024-06-21 16:35","links":null,"path":"Notes","tags":["informatik/programmierung/sprachen/java"]}}
---

>Bei [[02 - RESOURCES/Notes/While-Loop\|While-Loop]] wird ein bestimmter Teil des Codes wiederholt, solange die Bedingung `True` ist.
```java
public class Main {
    public static void main(String[] args) {
        boolean condition = true;
        int counter = 0;

        while (condition) {
            System.out.println("Die Schleife läuft: " + counter);
            counter++;
            if (counter >= 5) {
                condition = false; // Schleife beenden, wenn counter >= 5
            }
        }
    }
}
```
