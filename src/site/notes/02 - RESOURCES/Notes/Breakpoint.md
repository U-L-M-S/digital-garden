---
{"dg-publish":true,"permalink":"/02-resources/notes/breakpoint/","tags":["programmierung/debugging","entwicklung/tools"],"noteIcon":"","updated":"2025-09-16T23:41:26.718+02:00"}
---


>Ein [[02 - RESOURCES/Notes/Breakpoint\|Breakpoint]] ist eine markierte Stelle im Code, an der die Programmausführung angehalten wird.

>>Breakpoints ermöglichen die Inspektion von Variablenwerten und Programmzustand zur Laufzeit.

>[!important] 
>**Breakpoint-Arten:**
>- Line Breakpoints (Zeilen-Haltepunkte)
>- Conditional Breakpoints (bedingte)
>- Exception Breakpoints
>- Method Breakpoints

>[!example] 
>```java
>public void calculateSum(int a, int b) {
>    int result = a + b; // Breakpoint hier setzen
>    System.out.println(result);
>}
>```

>[!tip] 
>Bedingte Breakpoints helfen bei der Analyse komplexer Schleifen.