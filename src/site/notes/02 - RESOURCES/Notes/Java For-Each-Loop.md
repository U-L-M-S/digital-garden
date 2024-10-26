---
{"dg-publish":true,"permalink":"/02-resources/notes/java-for-each-loop/","tags":["code/java"],"noteIcon":"","updated":"2024-10-26T21:55:35.033+02:00"}
---

>Bei der [[02 - RESOURCES/Notes/Java For-Each-Loop\|Java For-Each-Loop]] werden alle Elemente einer Sammlung nacheinander durchlaufen.
> Sie eignet sich besonders für [[02 - RESOURCES/Notes/Java Array\|Java Array]]s oder [[Java Listen\|Java Listen]], da die Anzahl der Durchläufe automatisch an die Länge der Sammlung angepasst wird.

```java
public class Main {
    public static void main(String[] args) {
        String[] tage = {"Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag"};

        for (String tag : tage) {
            System.out.println("Aktueller Tag: " + tag);
        }
    }
}
```