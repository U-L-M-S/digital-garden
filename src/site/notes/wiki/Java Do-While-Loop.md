---
{"dg-publish":true,"permalink":"/wiki/java-do-while-loop/","tags":["informatik/software"],"noteIcon":"","updated":"2026-07-19T03:56:26.797+02:00","dg-note-properties":{"created":"2024-06-21 16:34","links":null,"path":"Notes","tags":["informatik/software"]}}
---

>Bei [[wiki/Do-While-Loop\|Do-While-Loop]] wird die Anweisung mindestens **1** mal wiederholt.
>Es folgt die Denkweise von [[wiki/While-Loop\|While-Loop]].
```java
public class Main {
    public static void main(String[] args) {
        boolean condition = true;
        int counter = 0;

        do {
            System.out.println("Die Schleife läuft: " + counter);
            counter++;
            if (counter >= 5) {
                condition = false; // Schleife beenden, wenn counter >= 5
            }
        } while (condition);
    }
}
```
