---
{"dg-publish":true,"permalink":"/02-resources/notes/unit-testing/","tags":["informatik/code","GFN/prüfungsrelevant/AP2"],"noteIcon":"","updated":"2025-11-12T14:40:07.000+01:00"}
---

>Unit Testing (Modultest) ist das Testen einzelner, isolierter Teile (Units) eines Programms.
>>Jeder Test prüft eine kleine Funktionseinheit (Methode/Funktion) unabhängig vom Rest des Programms.

```
Unit Test Konzept:

Programm                          Tests
┌─────────────┐                ┌──────────────┐
│ Funktion A  │───────────────>│ Test für A   │
├─────────────┤                ├──────────────┤
│ Funktion B  │───────────────>│ Test für B   │
├─────────────┤                ├──────────────┤
│ Funktion C  │───────────────>│ Test für C   │
└─────────────┘                └──────────────┘
Jede Funktion               Eigener Test!
wird isoliert getestet

Test-Ablauf (AAA-Pattern):

┌──────────────────┐
│ 1. ARRANGE       │  ← Vorbereitung
│    Setup/Init    │     (Testdaten, Objekte)
└────────┬─────────┘
         │
┌────────▼─────────┐
│ 2. ACT           │  ← Ausführung
│    Funktion      │     (Code unter Test)
│    aufrufen      │
└────────┬─────────┘
         │
┌────────▼─────────┐
│ 3. ASSERT        │  ← Überprüfung
│    Ergebnis      │     (Stimmt Ergebnis?)
│    prüfen        │
└──────────────────┘

Beispiel-Ablauf:

Code unter Test:
┌────────────────────────┐
│ public int add(a, b) { │
│   return a + b;        │
│ }                      │
└────────────────────────┘
           │
           │ wird getestet von
           ▼
Unit Test:
┌────────────────────────────────┐
│ @Test                          │
│ testAdd() {                    │
│   // Arrange                   │
│   Calculator calc = new ...   │
│                                │
│   // Act                       │
│   int result = calc.add(2, 3);│
│                                │
│   // Assert                    │
│   assertEquals(5, result);    │
│ }                              │
└────────────────────────────────┘

Test-Ergebnis Visualisierung:

✓ Erfolgreicher Test:
┌──────────────────────────┐
│ Input: add(2, 3)         │
│ Erwartet: 5              │
│ Tatsächlich: 5           │
│ → ✓ TEST PASSED          │
└──────────────────────────┘

✗ Fehlgeschlagener Test:
┌──────────────────────────┐
│ Input: add(2, 3)         │
│ Erwartet: 5              │
│ Tatsächlich: 6           │
│ → ✗ TEST FAILED          │
└──────────────────────────┘
```

## Arten der Durchführung von Unittests

>[!summary] Parallel während der Entwicklung (TDD)
>**Test-Driven Development:**
>```
>1. Test schreiben (schlägt fehl)
>2. Code schreiben (Test wird grün)
>3. Code verbessern (Refactoring)
>4. Wiederholen
>
>  ┌─────────┐
>  │ RED     │ ← Test schreiben (schlägt fehl)
>  └────┬────┘
>       │
>  ┌────▼────┐
>  │ GREEN   │ ← Code schreiben (Test läuft)
>  └────┬────┘
>       │
>  ┌────▼────┐
>  │REFACTOR │ ← Code verbessern
>  └────┬────┘
>       │
>       └────> Wiederholen
>```
>Vorteile: Fehler werden sofort erkannt

>[!summary] Nach Abschluss des Code-Schreibens
>Tests werden nach der Implementierung geschrieben.
>```
>1. Code schreiben
>2. Code fertigstellen
>3. Tests schreiben
>4. Tests ausführen
>```
>Nachteil: Fehler werden später entdeckt

## Beispiele in verschiedenen Sprachen

>[!example] Java (JUnit)
>```java
>import org.junit.Test;
>import static org.junit.Assert.*;
>
>public class CalculatorTest {
>
>    @Test
>    public void testAdd() {
>        // Arrange
>        Calculator calc = new Calculator();
>
>        // Act
>        int result = calc.add(2, 3);
>
>        // Assert
>        assertEquals(5, result);
>    }
>
>    @Test
>    public void testDivideByZero() {
>        Calculator calc = new Calculator();
>
>        // Assert Exception
>        assertThrows(ArithmeticException.class, () -> {
>            calc.divide(10, 0);
>        });
>    }
>}
>```

>[!example] C# (NUnit/xUnit)
>```csharp
>using NUnit.Framework;
>
>[TestFixture]
>public class CalculatorTests
>{
>    [Test]
>    public void Add_TwoNumbers_ReturnsSum()
>    {
>        // Arrange
>        var calc = new Calculator();
>
>        // Act
>        var result = calc.Add(2, 3);
>
>        // Assert
>        Assert.AreEqual(5, result);
>    }
>
>    [Test]
>    public void Divide_ByZero_ThrowsException()
>    {
>        var calc = new Calculator();
>
>        // Assert
>        Assert.Throws<DivideByZeroException>(() =>
>            calc.Divide(10, 0)
>        );
>    }
>}
>```

>[!example] Python (unittest/pytest)
>```python
>import unittest
>
>class TestCalculator(unittest.TestCase):
>
>    def test_add(self):
>        # Arrange
>        calc = Calculator()
>
>        # Act
>        result = calc.add(2, 3)
>
>        # Assert
>        self.assertEqual(result, 5)
>
>    def test_divide_by_zero(self):
>        calc = Calculator()
>
>        # Assert Exception
>        with self.assertRaises(ZeroDivisionError):
>            calc.divide(10, 0)
>```

## Assertions (Überprüfungen)

```
Häufigste Assertions:

┌────────────────────┬─────────────────────────┐
│ Assertion          │ Prüft                   │
├────────────────────┼─────────────────────────┤
│ assertEquals(a,b)  │ a == b                  │
│ assertNotEquals    │ a != b                  │
│ assertTrue(x)      │ x ist true              │
│ assertFalse(x)     │ x ist false             │
│ assertNull(x)      │ x ist null              │
│ assertNotNull(x)   │ x ist nicht null        │
│ assertThrows(...)  │ Exception wird geworfen │
└────────────────────┴─────────────────────────┘
```

>[!important] Prüfungsrelevant
>**Was ist Unit Testing?**
>- Testen einzelner Funktionen/Methoden
>- Isoliert vom Rest des Programms
>- Automatisiert ausführbar
>
>**Warum Unit Tests?**
>- Fehler früh erkennen
>- Refactoring sicherer
>- Dokumentiert, wie Code funktioniert
>- Verhindert Regressionen (alte Fehler kommen zurück)
>
>**AAA-Pattern:**
>1. **Arrange**: Vorbereitung (Setup)
>2. **Act**: Ausführung (Code aufrufen)
>3. **Assert**: Überprüfung (Ergebnis prüfen)
>
>**Eigenschaften guter Unit Tests:**
>- **Fast**: Schnell ausführbar
>- **Independent**: Unabhängig voneinander
>- **Repeatable**: Immer gleiches Ergebnis
>- **Self-Validating**: Klares Pass/Fail
>- **Timely**: Zeitnah geschrieben

>[!tip] Best Practices
>1. **Ein Test = Eine Sache**
>   ```java
>   // ✓ RICHTIG
>   testAdd()
>   testSubtract()
>
>   // ✗ FALSCH
>   testAllOperations()
>   ```
>
>2. **Aussagekräftige Namen**
>   ```java
>   // ✓ RICHTIG
>   testAdd_TwoPositiveNumbers_ReturnsSum()
>
>   // ✗ FALSCH
>   test1()
>   ```
>
>3. **Keine Logik in Tests**
>   ```java
>   // ✗ FALSCH
>   for (int i = 0; i < 10; i++) {
>       assertEquals(i, calc.add(i, 0));
>   }
>
>   // ✓ RICHTIG
>   assertEquals(5, calc.add(5, 0));
>   ```
>
>4. **Tests unabhängig machen**
>   - Keine Shared State
>   - Jeder Test kann alleine laufen
>
>5. **Test Coverage**
>   - Siehe [[02 - RESOURCES/Notes/Code Coverage\|Code Coverage]]
>   - Mindestens 70-80%

>[!warning] Häufige Fehler
>1. **Tests zu groß**
>   - Testen zu viel auf einmal
>
>2. **Externe Abhängigkeiten**
>   - Datenbank, Netzwerk in Tests
>   - → Stattdessen: Mocks verwenden
>
>3. **Tests ignorieren**
>   ```java
>   @Ignore  // ✗ NICHT gut!
>   @Test
>   public void testSomething() { ... }
>   ```
>
>4. **Keine Assertions**
>   ```java
>   @Test
>   public void testAdd() {
>       calc.add(2, 3);  // ✗ Nichts wird geprüft!
>   }
>   ```

>[!note] Siehe auch
>- [[02 - RESOURCES/Notes/Code Coverage\|Code Coverage]] - Wie viel Code ist getestet?
>- [[02 - RESOURCES/Notes/Try-Catch\|Try-Catch]] - Exception-Handling testen
>- [[02 - RESOURCES/Notes/Exception\|Exception]] - Fehler in Tests

