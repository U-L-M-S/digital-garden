---
{"dg-publish":true,"permalink":"/wiki/java-for-each-loop/","tags":["informatik/software"],"noteIcon":"","updated":"2026-07-19T03:56:26.000+02:00","dg-note-properties":{"aliases":["For-Each-Loop","for-Each-Loop"],"created_date":"2024-10-26","links":null,"tags":["informatik/software"]}}
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