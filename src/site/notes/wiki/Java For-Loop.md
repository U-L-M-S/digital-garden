---
{"dg-publish":true,"permalink":"/wiki/java-for-loop/","tags":["informatik/software"],"noteIcon":"","updated":"2026-07-19T03:56:26.000+02:00","dg-note-properties":{"created":"2024-06-21 16:32","links":null,"path":"Notes","tags":["informatik/software"]}}
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