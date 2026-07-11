---
{"dg-publish":true,"permalink":"/wiki/java-for-each-loop/","tags":["informatik/programmierung/sprachen/java"],"noteIcon":"","updated":"2025-10-29T12:59:07.000+01:00","dg-note-properties":{"aliases":["For-Each-Loop","for-Each-Loop"],"created_date":"2024-10-26","links":null,"tags":["informatik/programmierung/sprachen/java"]}}
---

>Bei der [[wiki/Java For-Each-Loop\|Java For-Each-Loop]] werden alle Elemente einer Sammlung nacheinander durchlaufen.
> Sie eignet sich besonders für [[wiki/Java Array\|Java Array]]s oder [[wiki/Java List\|Java List]]en, da die Anzahl der Durchläufe automatisch an die Länge der Sammlung angepasst wird.

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