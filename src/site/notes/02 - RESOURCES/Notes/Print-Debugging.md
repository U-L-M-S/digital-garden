---
{"dg-publish":true,"permalink":"/02-resources/notes/print-debugging/","tags":["debugging/einfach","entwicklung/troubleshooting","AP2025/neu"],"noteIcon":"","updated":"2025-09-16T23:41:26.799+02:00"}
---


>[[02 - RESOURCES/Notes/Print-Debugging\|Print-Debugging]] ist eine einfache [[02 - RESOURCES/Notes/Debugging\|Debugging]]-Technik durch Ausgabe von Variablenwerten und Status-Meldungen.

>>Es verwendet print-Anweisungen zur Laufzeit-Analyse des Programmflusses.

>[!important] 
>**Print-Debugging-Techniken:**
>- Variablenwerte ausgeben
>- Programmfluss verfolgen
>- Funktions-Ein-/Ausgänge loggen
>- Bedingungen und Schleifen tracken

>[!example] 
>```java
>public int fibonacci(int n) {
>    System.out.println("fibonacci(" + n + ") called"); // Debug
>    
>    if (n <= 1) {
>        System.out.println("Base case: " + n); // Debug
>        return n;
>    }
>    
>    int result = fibonacci(n-1) + fibonacci(n-2);
>    System.out.println("fibonacci(" + n + ") = " + result); // Debug
>    return result;
>}
>```

>[!warning] 
>**Nachteile:**
>- Performance-Impact
>- Code-Verschmutzung
>- Manuelles Entfernen nötig

>[!tip] 
>Besser: Logging-Frameworks verwenden (Logger statt print).