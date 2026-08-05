---
{"dg-publish":true,"permalink":"/wiki/print-debugging/","tags":["informatik/code","informatik/software","ausbildung/pruefung"],"noteIcon":"","updated":"2026-07-19T03:56:26.000+02:00","dg-note-properties":{"tags":["informatik/code","informatik/software","ausbildung/pruefung"],"aliases":["Print-Debug","Console-Debugging","Log-Debugging"],"links":null,"created_date":"2025-09-16"}}
---


>[[wiki/Print-Debugging\|Print-Debugging]] ist eine einfache [[wiki/Debugging\|Debugging]]-Technik durch Ausgabe von Variablenwerten und Status-Meldungen.

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