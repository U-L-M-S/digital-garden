---
{"dg-publish":true,"permalink":"/02-resources/notes/debugging/","tags":["informatik/code"],"noteIcon":"","updated":"2025-09-18T08:13:01.000+02:00"}
---

>**Prozess des Findens und Behebens von Fehlern** (Bugs) in Code.

# Beispiel:

```java
int result = 10 / 0; // Bug: Division durch Null
System.out.println(result); // Crash!
```

**Debugging-Schritte:**

1. **Problem identifizieren** - Programm crasht
2. **Ursache finden** - Division durch Null in Zeile 1
3. **Fehler beheben** - Prüfung einbauen:

```java
if (divisor != 0) {
    int result = 10 / divisor;
}
```