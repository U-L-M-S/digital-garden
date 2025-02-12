---
{"dg-publish":true,"permalink":"/02-resources/notes/java-do-while-loop/","tags":["code/java"],"updated":"2024-10-24T11:24:32.337+02:00"}
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
