---
{"dg-publish":true,"permalink":"/02-resources/notes/java-while-loop/","tags":["code/java/loop"],"updated":"2024-09-23T12:51:42.492+02:00"}
---

>
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
