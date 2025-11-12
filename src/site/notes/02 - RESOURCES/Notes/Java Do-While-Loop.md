---
{"dg-publish":true,"permalink":"/02-resources/notes/java-do-while-loop/","tags":["informatik/programmierung/sprachen/java"],"noteIcon":"","updated":"2025-10-29T12:59:07.000+01:00"}
---

>Bei [[02 - RESOURCES/Notes/Do-While-Loop\|Do-While-Loop]] wird die Anweisung mindestens **1** mal wiederholt.
>Es folgt die Denkweise von [[02 - RESOURCES/Notes/While-Loop\|While-Loop]]
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
