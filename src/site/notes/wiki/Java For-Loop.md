---
{"dg-publish":true,"permalink":"/wiki/java-for-loop/","tags":["informatik/programmierung/sprachen/java"],"noteIcon":"","updated":"2026-05-12T15:33:28.318+02:00","dg-note-properties":{"created":"2024-06-21 16:32","links":null,"path":"Notes","tags":["informatik/programmierung/sprachen/java"]}}
---

>[[wiki/For-Loop\|For-Loop]]s in [[wiki/Java\|Java]] haben die gleiche Syntax wie bei [[wiki/C Sprache\|C Sprache]].

```java
public class Main {
    public static void main(String[] args) {
        for (int counter = 0; counter < 5; counter++) {
            System.out.println("Die Schleife laeuft: " + counter);
        }
    }
}
```