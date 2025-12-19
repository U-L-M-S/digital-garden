---
{"dg-publish":true,"permalink":"/02-resources/notes/debugging/","tags":["informatik/code","programmierung/fehlersuche","GFN/prüfungsrelevant/AP2"],"noteIcon":"","updated":"2025-11-12T15:19:46.170+01:00"}
---

>Debugging ist der Prozess, Fehler (Bugs) im Code zu finden und zu beheben.
>>Es ist eine der wichtigsten Fähigkeiten eines Entwicklers, systematisch Probleme zu analysieren und [[02 - RESOURCES/Notes/Methode\|Methode]]n zur Fehlerbehebung anzuwenden.

>[!summary] Was ist Debugging?
>- **Fehler finden** im Programmcode
>- **Ursache identifizieren** warum etwas nicht funktioniert
>- **Fehler beheben** und testen

```
DEBUGGING-PROZESS

┌──────────────────────┐
│ 1. PROBLEM ERKENNEN  │
│ "Es funktioniert     │
│  nicht!"             │
└──────────────────────┘
          ↓
┌──────────────────────┐
│ 2. REPRODUZIEREN     │
│ Fehler nachstellen   │
└──────────────────────┘
          ↓
┌──────────────────────┐
│ 3. URSACHE FINDEN    │
│ Wo ist der Fehler?   │
└──────────────────────┘
          ↓
┌──────────────────────┐
│ 4. FEHLER BEHEBEN    │
│ Code korrigieren     │
└──────────────────────┘
          ↓
┌──────────────────────┐
│ 5. TESTEN            │
│ Funktioniert es      │
│ jetzt?               │
└──────────────────────┘
```

>[!important] Debugging-Methoden
>
>**1. [[02 - RESOURCES/Notes/Print-Debugging\|Print-Debugging]]**
>- `System.out.println()` verwenden
>- Werte ausgeben und prüfen
>
>**2. [[02 - RESOURCES/Notes/Breakpoint\|Breakpoint]]-Debugging**
>- Programm an bestimmter Stelle stoppen
>- Variablen inspizieren
>
>**3. Logging**
>- Logs schreiben
>- Fehler nachvollziehen
>
>**4. Code-Review**
>- Code Zeile für Zeile durchgehen
>- Logikfehler finden

>[!example] Praktisches Beispiel
>**Fehler im Code:**
>```java
>int result = 10 / 0; // Bug: Division durch Null
>System.out.println(result); // Crash!
>```
>
>**Problem:** Programm stürzt ab mit `ArithmeticException` ([[02 - RESOURCES/Notes/Exception\|Exception]])
>
>**Debugging-Schritte:**
>
>1. **Problem identifizieren**
>   → Programm crasht bei Division
>
>2. **Ursache finden**
>   → Division durch Null in Zeile 1
>
>3. **Fehler beheben** - Prüfung einbauen mit [[02 - RESOURCES/Notes/Try-Catch\|Try-Catch]]:
>```java
>int divisor = 0;
>if (divisor != 0) {
>    int result = 10 / divisor;
>    System.out.println(result);
>} else {
>    System.out.println("Fehler: Division durch Null!");
>}
>```

```
DEBUGGING-TOOLS

┌─────────────────────────────────┐
│         IDE-DEBUGGER            │
│  (z.B. IntelliJ, Eclipse, VS)   │
└─────────────────────────────────┘
           │
     ┌─────┴─────┐
     ▼           ▼
┌─────────┐  ┌─────────┐
│Breakpoint│  │ Watch   │
│ setzen  │  │Variablen│
└─────────┘  └─────────┘
     │           │
     ▼           ▼
┌─────────┐  ┌─────────┐
│ Step    │  │ Stack   │
│ Through │  │ Trace   │
└─────────┘  └─────────┘
```

>[!tip] Debugging-Tipps für die Prüfung
>**Systematisch vorgehen:**
>1. Fehler reproduzieren (kann ich ihn wiederholen?)
>2. Hypothese aufstellen (was könnte falsch sein?)
>3. Testen (stimmt meine Vermutung?)
>4. Beheben (Problem lösen)
>5. Verifizieren (funktioniert es jetzt?)

>[!warning] Häufige Fehlerquellen
>- **Syntax-Fehler:** Tippfehler, fehlende Klammern
>- **Logik-Fehler:** Falscher Algorithmus
>- **Laufzeit-Fehler:** Division durch 0, Null-Pointer
>- **Grenzfälle:** Leere Arrays, negative Zahlen