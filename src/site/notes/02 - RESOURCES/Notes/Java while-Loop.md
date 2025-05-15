---
{"dg-publish":true,"permalink":"/02-resources/notes/java-while-loop/","tags":["code/java"],"noteIcon":"","updated":"2024-10-24T11:25:03.891+02:00"}
---

>Bei [[02 - RESOURCES/Notes/While-Loop\|While-Loop]] wird einen bestimmten Teil von den Code wiederholt bis die Anweisung `True` ist.
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
