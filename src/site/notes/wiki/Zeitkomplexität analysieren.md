---
{"dg-publish":true,"permalink":"/wiki/zeitkomplexitaet-analysieren/","tags":["informatik/code"],"noteIcon":"","updated":"2026-07-19T03:56:26.000+02:00","dg-note-properties":{"aliases":["Zeitkomplexität analysieren"],"created_date":"2024-10-31","links":null,"tags":["informatik/code"]}}
---

>Die [[wiki/Big O\|Zeitkomplexität]] eines Codes gibt an, wie die Laufzeit des [[wiki/Algorithmus\|Algorithmus]] mit der Größe der Eingabedaten wächst. Um die [[wiki/Big O\|Zeitkomplexität]] zu bestimmen, betrachten wir die Anzahl der Operationen, die der [[wiki/Algorithmus\|Algorithmus]] in Abhängigkeit von der Größe der Eingabe ausführt.

# Schritte zur Analyse der [[wiki/Big O\|Zeitkomplexität]]

1. **Identifiziere die grundlegenden Operationen**:
   - Bestimme die häufigsten Operationen im Code, z.B. Vergleiche, Zuweisungen und Schleifen.

2. **Zähle die Anzahl der Operationen**:
   - Analysiere, wie viele grundlegende Operationen in Abhängigkeit von der Eingabegröße \( n \) ausgeführt werden.

3. **Bestimme die Dominante**:
   - Finde die am schnellsten wachsende [[wiki/Funktion\|Funktion]] (dominant) in deiner Zählung. Diese wird die [[wiki/Big O\|Zeitkomplexität]] bestimmen.

4. **Verwende die [[wiki/Big O\|Big O]]-Notation**:
   - Schreibe die [[wiki/Big O\|Zeitkomplexität]] in der [[wiki/Big O\|Big O]]-Notation, um die obere Schranke der Laufzeit auszudrücken.

## Bsp

Hier ist ein Beispiel für einen einfachen [[wiki/Python\|Python]]-Code, der die [[wiki/Big O\|Zeitkomplexität]] analysiert:

```python
def sum_array(arr):
    total = 0
    for num in arr:
        total += num
    return total
```

#### Schritt-für-Schritt-Analyse:

1. **Identifiziere die grundlegenden Operationen**:
   - Die grundlegende Operation ist die Addition (`total += num`).

2. **Zähle die Anzahl der Operationen**:
   - Die Schleife läuft \( n \) Mal, wobei \( n \) die Anzahl der Elemente im Array ist.

3. **Bestimme die Dominante**:
   - Die Anzahl der Operationen ist also proportional zu ( n ), also ( [[wiki/4. Big O(n)\|4. Big O(n)]] ).

4. **Schreibe die [[wiki/Big O\|Big O]]-Notation**:
   - Die [[wiki/Big O\|Zeitkomplexität]] von `sum_array` ist ( [[wiki/4. Big O(n)\|4. Big O(n)]] ).

# Regeln zur Bestimmung der [[wiki/Big O\|Zeitkomplexität]]

1. **Schleifen**:
   - Eine einfache Schleife von 1 bis \( n \) hat eine [[wiki/Big O\|Zeitkomplexität]] von ( [[wiki/4. Big O(n)\|4. Big O(n)]] ).
   - Verschachtelte Schleifen führen die [[wiki/Big O\|Zeitkomplexität]] zu \( O(n^2) \) (z.B. zwei Schleifen, die beide von 1 bis \( n \) laufen).

2. **Rekursion**:
   - Bei rekursiven Funktionen zählt man die Anzahl der rekursiven Aufrufe. Der Zeitkomplexitätsausdruck ergibt sich oft aus der Rekursionsbeziehung.

3. **Bestimmte Operationen**:
   - Hinzufügen, Entfernen und Zugreifen auf ein Element in einer Liste oder einem Array sind \( [[1. Big O(1)\|1. Big O(1)]] \).
   - Suchen in einer nicht sortierten Liste hat eine [[wiki/Big O\|Zeitkomplexität]] von \( [[wiki/4. Big O(n)\|4. Big O(n)]] \), während die Suche in einer sortierten Liste mit binärer Suche \( [[wiki/2. Big O(log n)\|2. Big O(log n)]] \) hat.

# Gesamte [[wiki/Big O\|Zeitkomplexität]] berechnen

Wenn ein [[wiki/Algorithmus\|Algorithmus]] aus mehreren Teilen besteht, addiere die Zeitkomplexitäten der einzelnen Teile:

- **Regel**: Die höchste [[wiki/Big O\|Zeitkomplexität]] dominiert.
  
**Beispiel**:
```python
def example_function(arr):
    for i in range(len(arr)):  # O(n)
        print(i)
    for j in range(len(arr)**2):  # O(n^2)
        print(j)
```

- Die [[wiki/Big O\|Zeitkomplexität]] für die erste Schleife ist \( [[wiki/4. Big O(n)\|4. Big O(n)]] \) und für die zweite Schleife \( O(n^2) \).
- **Gesamtzeitkomplexität**: \( [[wiki/4. Big O(n)\|4. Big O(n)]] + O(n^2) = O(n^2) \)

# Fazit

Die Analyse der [[wiki/Big O\|Zeitkomplexität]] ist ein entscheidender Schritt, um die Effizienz eines [[wiki/Algorithmus\|Algorithmus]] zu verstehen. Mit den beschriebenen Schritten, Regeln und dem Beispiel kannst du die Laufzeit von Algorithmen effektiv bewerten und vergleichen.
