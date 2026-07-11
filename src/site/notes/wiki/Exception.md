---
{"dg-publish":true,"permalink":"/wiki/exception/","tags":["informatik/programmierung","GFN/prüfungsrelevant/AP2"],"noteIcon":"","updated":"2026-07-11T09:06:05.543+02:00","dg-note-properties":{"tags":["informatik/programmierung","GFN/prüfungsrelevant/AP2"],"aliases":["Ausnahme","Fehlerbehandlung","Exception Handling"],"links":null,"created_date":"2025-11-12"}}
---

>Eine Exception (Ausnahme) ist ein Ereignis, das während der Programmausführung auftritt und den normalen Ablauf des Programms unterbricht.
>>Exceptions werden verwendet, um Fehler abzufangen und zu behandeln, sodass das Programm nicht abstürzt.

```
Exception-Ablauf ohne Behandlung:

    Start
      │
      │ Code läuft
      ▼
  ┌─────────┐
  │ Fehler! │ ← Exception tritt auf
  └─────────┘
      │
      ▼
  ┌─────────┐
  │ ABSTURZ │ ← Programm beendet sich
  └─────────┘

Exception-Ablauf MIT Behandlung:

    Start
      │
      │ Code läuft
      ▼
  ┌─────────┐
  │ try {   │
  │ Fehler! │ ← Exception tritt auf
  │ }       │
  └────┬────┘
       │
       │ Exception wird "geworfen"
       ▼
  ┌─────────┐
  │ catch { │ ← Exception wird gefangen
  │ Handle  │
  │ Error   │
  └────┬────┘
       │
       │ Programm läuft weiter
       ▼
  ┌─────────┐
  │ finally │ ← Wird immer ausgeführt
  └────┬────┘
       │
       ▼
    Weiter

Visuelle Darstellung - Exception-Hierarchie:

              ┌───────────┐
              │ Exception │ ← Basis-Klasse
              └─────┬─────┘
                    │
      ┌─────────────┼─────────────┐
      │             │             │
┌─────▼──────┐ ┌───▼────┐ ┌─────▼──────┐
│ IOException│ │Runtime │ │ SQLExcep.  │
└────────────┘ │Exception│ └────────────┘
               └────┬────┘
                    │
         ┌──────────┼──────────┐
         │          │          │
    ┌────▼───┐ ┌───▼────┐ ┌──▼────┐
    │NullPtr │ │ArithMe-│ │Index  │
    │Except. │ │ticExc. │ │OutOf  │
    └────────┘ └────────┘ │Bounds │
                          └───────┘

Exception-Flow mit mehreren Fehlerquellen:

Methode A               Methode B
    │                       │
    │ ruft auf              │
    ├──────────────────────>│
    │                       │
    │                   ┌───▼────┐
    │                   │ Fehler!│
    │                   └───┬────┘
    │                       │
    │   Exception wird      │
    │   "geworfen"          │
    │<──────────────────────┤
    │                       │
┌───▼───┐                   │
│ try-  │                   │
│ catch │                   │
└───┬───┘                   │
    │                       │
    ▼                       │
  Handle                    │
  Error                     │
```

## Häufige Exception-Typen

>[!example] In Java
>```java
>// NullPointerException
>String text = null;
>text.length();  // ← Exception!
>
>// ArithmeticException
>int result = 10 / 0;  // ← Division durch Null!
>
>// ArrayIndexOutOfBoundsException
>int[] array = {1, 2, 3};
>int x = array[5];  // ← Index existiert nicht!
>
>// FileNotFoundException
>File file = new File("nicht_vorhanden.txt");
>// ← Datei existiert nicht!
>```

>[!example] In C#
>```csharp
>// NullReferenceException
>string text = null;
>int length = text.Length;  // ← Exception!
>
>// DivideByZeroException
>int result = 10 / 0;  // ← Division durch Null!
>
>// IndexOutOfRangeException
>int[] array = {1, 2, 3};
>int x = array[5];  // ← Index außerhalb!
>```

>[!example] In Python
>```python
># NameError
>print(variable_die_nicht_existiert)
>
># TypeError
>result = "Text" + 5  # ← Kann String nicht mit Int addieren!
>
># IndexError
>liste = [1, 2, 3]
>x = liste[5]  # ← Index existiert nicht!
>
># ZeroDivisionError
>result = 10 / 0  # ← Division durch Null!
>```

## Häufige Python-Exceptions

>In [[wiki/Python\|Python]] wirft der [[wiki/Interpreter\|Interpreter]] je nach Fehler eine bestimmte Exception. Die wichtigsten zum Nachschlagen:

| Exception | wann |
| :--- | :--- |
| `KeyError` | [[wiki/Python Dictionary\|Dict]]-Schlüssel existiert nicht |
| `IndexError` | [[wiki/Python Liste\|Listen]]-Index außerhalb des Bereichs |
| `ValueError` | richtiger Typ, falscher Wert (z.B. `int("abc")`) |
| `TypeError` | falscher Typ (z.B. `"a" + 1`) |
| `NameError` | Variable/Name nicht gefunden |
| `ImportError` | Modul/Import nicht gefunden |
| `IOError` / `OSError` | Datei-/System-Fehler (z.B. „file not found") |
| `ZeroDivisionError` | Division durch 0 |
| `AttributeError` | Attribut/Methode existiert nicht |
| `KeyboardInterrupt` | Nutzer drückt Ctrl+C |

>[!note] `else` und nacktes `except`
>Python kennt neben `except`/`finally` noch ein optionales `else` — es läuft ==nur, wenn im `try` **kein** Fehler auftrat==. Ein nacktes `except:` (ohne Typ) fängt **alles** ab, sollte aber sparsam genutzt werden.
>```python
>d = {"a": 1, "b": 2}
>try:
>    wert = d["x"]              # gibt es nicht -> KeyError
>except KeyError:
>    print("Key existiert nicht!")
>except IndexError:
>    print("Index außerhalb!")
>except:
>    print("irgendein anderer Fehler")
>else:
>    print("kein Fehler aufgetreten")     # läuft nur, wenn try ok war
>```

## Exception vs Error

```
┌───────────────────┬─────────────────────────────────────┐
│     Exception     │              Error                  │
├───────────────────┼─────────────────────────────────────┤
│ Kann behandelt    │ Kann NICHT behandelt werden         │
│ werden            │                                     │
├───────────────────┼─────────────────────────────────────┤
│ Zur Laufzeit      │ Schwerwiegende Probleme             │
│ (Runtime)         │ (z.B. OutOfMemoryError)             │
├───────────────────┼─────────────────────────────────────┤
│ Vorhersehbar      │ Meist nicht vorhersehbar            │
├───────────────────┼─────────────────────────────────────┤
│ Beispiel:         │ Beispiel:                           │
│ NullPointer       │ StackOverflowError                  │
│ IOException       │ OutOfMemoryError                    │
└───────────────────┴─────────────────────────────────────┘
```

>[!important] Prüfungsrelevant
>**Was ist eine Exception?**
>- Fehler zur Laufzeit
>- Unterbricht normalen Programmablauf
>- Kann mit [[wiki/Try-Catch\|Try-Catch]] behandelt werden
>
>**Warum Exceptions verwenden?**
>- Verhindert Programmabsturz
>- Ermöglicht Fehlerbehandlung
>- Macht Code robuster und wartbarer

>[!warning] Checked vs Unchecked Exceptions (Java)
>**Checked Exceptions:**
>- Müssen behandelt werden (try-catch oder throws)
>- Beispiel: IOException, SQLException
>
>**Unchecked Exceptions:**
>- Müssen NICHT behandelt werden
>- Beispiel: NullPointerException, ArithmeticException

>[!tip] Best Practices
>1. Spezifische Exceptions verwenden (nicht nur `Exception`)
>2. Aussagekräftige Fehlermeldungen
>3. Nicht alle Exceptions abfangen (nur behandelbare)
>4. Exceptions nicht "verschlucken" (leerer catch-Block)
>5. Ressourcen immer schließen (finally oder try-with-resources)

>[!note] Exception Handling
>Siehe auch: [[wiki/Try-Catch\|Try-Catch]] für die praktische Anwendung von Exception-Behandlung.
