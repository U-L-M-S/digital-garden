---
{"dg-publish":true,"permalink":"/wiki/java-while-loop/","tags":["informatik/software"],"noteIcon":"","updated":"2026-07-19T03:56:26.663+02:00","dg-note-properties":{"created":"2024-06-21 16:35","links":null,"path":"Notes","tags":["informatik/software"]}}
---

>Bei [[wiki/While-Loop\|While-Loop]] wird ein bestimmter Teil des Codes wiederholt, solange die Bedingung `True` ist.
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
