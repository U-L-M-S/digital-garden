---
{"dg-publish":true,"permalink":"/02-resources/notes/code-coverage/","tags":["informatik/code","informatik/testing","GFN/prüfungsrelevant/AP2"],"noteIcon":"","updated":"2025-11-12T14:35:55.496+01:00"}
---

>Code Coverage (Testabdeckung) ist eine Metrik, die angibt, wie viel Prozent des Codes durch [[02 - RESOURCES/Notes/Unit Testing\|Unit Testing]]s abgedeckt ist.
>>Code Coverage zeigt, welche Teile des Codes getestet wurden und welche nicht.

```
Code Coverage Visualisierung:

Projekt mit 100 Zeilen Code:
┌───────────────────────────────┐
│ ███████████░░░░░░░░░░░░░░░░░░ │ 50% Coverage
└───────────────────────────────┘
│← getestet →│←  nicht getestet →│

Arten der Coverage:

┌──────────────────────────────────┐
│        Code Coverage             │
└────────────┬─────────────────────┘
             │
    ┌────────┼────────┬─────────┐
    │        │        │         │
┌───▼───┐ ┌─▼──┐ ┌───▼───┐ ┌───▼────┐
│Line   │ │Branc│ │Function│ │Condition│
│Cover. │ │Cover│ │Coverage│ │Coverage │
└───────┘ └────┘ └────────┘ └─────────┘

Prozess-Ablauf:

  Code schreiben
       │
       ▼
  Tests schreiben
       │
       ▼
  Tests ausführen
       │
       ▼
  ┌────────────┐
  │  Coverage  │
  │  messen    │
  └─────┬──────┘
        │
        ▼
  ┌─────────────┐
  │ Report      │
  │ analysieren │
  └─────┬───────┘
        │
    ┌───▼────┐
    │ < 80%? │──Ja──> Mehr Tests schreiben
    └───┬────┘                │
        │                     │
       Nein                   │
        │                     │
        └─────────────────────┘
        │
        ▼
     Fertig!
```

## Arten von Code Coverage

>[!summary] Die 4 Hauptarten
>```
>1. Line Coverage (Zeilenabdeckung):
>   ┌──────────────────────┐
>   │ 1: public int add()  │ ✓ getestet
>   │ 2: {                 │ ✓
>   │ 3:   return a + b;   │ ✓
>   │ 4: }                 │ ✓
>   │ 5: public int sub()  │ ✗ nicht getestet
>   │ 6: {                 │ ✗
>   │ 7:   return a - b;   │ ✗
>   │ 8: }                 │ ✗
>   └──────────────────────┘
>   Coverage: 50% (4 von 8 Zeilen)
>
>2. Branch Coverage (Zweigabdeckung):
>   if (x > 0) {        ← Bedingung
>       return true;    ← Branch 1 (✓ getestet)
>   } else {
>       return false;   ← Branch 2 (✗ nicht getestet)
>   }
>   Branch Coverage: 50%
>
>3. Function Coverage (Funktionsabdeckung):
>   ┌─────────────┬──────────┐
>   │ Funktion    │ Getestet?│
>   ├─────────────┼──────────┤
>   │ add()       │    ✓     │
>   │ subtract()  │    ✓     │
>   │ multiply()  │    ✗     │
>   │ divide()    │    ✗     │
>   └─────────────┴──────────┘
>   Function Coverage: 50%
>
>4. Condition Coverage (Bedingungsabdeckung):
>   if (a > 0 && b > 0) {
>      ↑        ↑
>   Bed. 1   Bed. 2
>
>   Tests:
>   - Test 1: a=5, b=5   → beide true  ✓
>   - Test 2: a=-1, b=5  → a false     ✗
>   - Test 3: a=5, b=-1  → b false     ✗
>   - Test 4: a=-1, b=-1 → beide false ✗
>```

## Beispiel mit visualisierter Coverage

>[!example] Code-Beispiel
>```java
>public class Calculator {
>
>    // Methode 1 (getestet)
>    public int add(int a, int b) {          // ✓
>        return a + b;                       // ✓
>    }                                       // ✓
>
>    // Methode 2 (getestet mit Branch)
>    public int divide(int a, int b) {       // ✓
>        if (b == 0) {                       // ✓ beide Branches
>            throw new ArithmeticException(); // ✓
>        }                                   // ✓
>        return a / b;                       // ✓
>    }                                       // ✓
>
>    // Methode 3 (NICHT getestet)
>    public int multiply(int a, int b) {     // ✗
>        return a * b;                       // ✗
>    }                                       // ✗
>}
>```
>
>```
>Coverage-Report:
>
>┌─────────────┬──────────┬───────────┐
>│ Metrik      │ Getestet │ Coverage  │
>├─────────────┼──────────┼───────────┤
>│ Lines       │  9 / 12  │   75%     │
>│ Branches    │  2 / 2   │  100%     │
>│ Functions   │  2 / 3   │   67%     │
>└─────────────┴──────────┴───────────┘
>
>Visualisiert:
>Calculator.java
>┌──────────────────────────────┐
>│ ██████████░░░░░░░░░░░░░      │ add() - 100%
>│ ████████████████████████     │ divide() - 100%
>│ ░░░░░░░░░░░░░░░░░░░░░░░░     │ multiply() - 0%
>└──────────────────────────────┘
>Gesamt: 75%
>```

## Coverage-Tools

>[!info] Gängige Tools
>**Java:**
>- JaCoCo (am häufigsten)
>- Cobertura
>- Emma
>
>**C#/.NET:**
>- dotCover (JetBrains)
>- OpenCover
>- Coverlet
>
>**Python:**
>- Coverage.py
>- pytest-cov
>
>**JavaScript:**
>- Istanbul
>- Jest (built-in)
>
>**Allgemein:**
>- SonarQube (Code-Qualität + Coverage)

## Coverage-Ziele

```
Coverage-Levels:

┌─────────┬──────────────────────────────┐
│ < 50%   │ ░░░░░░░░░░░░░               │ Schlecht!
├─────────┼──────────────────────────────┤
│ 50-70%  │ ████████░░░░░░░░░░░░        │ Akzeptabel
├─────────┼──────────────────────────────┤
│ 70-85%  │ ████████████████░░░░        │ Gut
├─────────┼──────────────────────────────┤
│ 85-95%  │ ████████████████████░░      │ Sehr gut
├─────────┼──────────────────────────────┤
│ > 95%   │ ████████████████████████    │ Exzellent
└─────────┴──────────────────────────────┘

Typische Ziele nach Projekt:

Kritische Systeme    ████████████████████████  95-100%
(Banking, Medical)

Normale Software     ██████████████████░░░░░░  75-85%

Legacy Code          ████████░░░░░░░░░░░░░░░░  40-60%
```

>[!important] Prüfungsrelevant
>**Was ist Code Coverage?**
>- Metrik für Test-Qualität
>- Zeigt, wie viel Code getestet ist
>- In Prozent ausgedrückt (0-100%)
>
>**Arten:**
>- **Line Coverage**: Welche Zeilen wurden ausgeführt?
>- **Branch Coverage**: Welche Verzweigungen wurden getestet?
>- **Function Coverage**: Welche Funktionen wurden aufgerufen?
>
>**Ziel:**
>- Mindestens 70-80% für gute Software
>- 100% ist selten sinnvoll/erreichbar

>[!warning] Hohe Coverage = Gute Tests?
>**NEIN!**
>
>```java
>// Test mit 100% Coverage, aber OHNE Assertions:
>@Test
>public void testAdd() {
>    calculator.add(2, 3);  // Wird ausgeführt
>    // Aber: Keine Überprüfung des Ergebnisses!
>}
>```
>
>**Richtig:**
>```java
>@Test
>public void testAdd() {
>    int result = calculator.add(2, 3);
>    assertEquals(5, result);  // ✓ Überprüfung!
>}
>```
>
>**Merke:** Coverage sagt NUR, dass Code ausgeführt wurde, NICHT dass er richtig getestet wurde!

>[!tip] Best Practices
>1. **Realistische Ziele setzen**
>   - 80% ist oft besser als 100%
>   - Kritische Teile zu 100% testen
>
>2. **Coverage als Werkzeug nutzen**
>   - Nicht getestete Bereiche finden
>   - Nicht als einzige Metrik verwenden
>
>3. **Wichtigen Code priorisieren**
>   ```
>   Prio 1: Business Logic     → 95%+
>   Prio 2: Helper Functions   → 80%+
>   Prio 3: Getters/Setters    → 50%+
>   ```
>
>4. **Coverage im CI/CD**
>   - Automatisch bei jedem Build
>   - Mindest-Coverage festlegen
>   - Build schlägt fehl bei < Ziel

>[!example] Coverage-Report lesen
>```
>JaCoCo Coverage Report:
>
>Package: com.example.calculator
>┌────────────────┬──────┬─────────┬──────────┐
>│ Class          │Lines │ Branches│ Functions│
>├────────────────┼──────┼─────────┼──────────┤
>│ Calculator     │ 85%  │  75%    │   100%   │ ✓
>│ Scientific     │ 45%  │  30%    │    60%   │ ⚠
>│ Helper         │ 90%  │  80%    │    90%   │ ✓
>├────────────────┼──────┼─────────┼──────────┤
>│ TOTAL          │ 73%  │  62%    │    83%   │
>└────────────────┴──────┴─────────┴──────────┘
>
>→ Scientific.java braucht mehr Tests!
>→ Branch Coverage insgesamt zu niedrig
>```

>[!note] Siehe auch
>- [[02 - RESOURCES/Notes/Unit Testing\|Unit Testing]] - Tests schreiben
>- [[02 - RESOURCES/Notes/Try-Catch\|Try-Catch]] - Exception-Handling testen
