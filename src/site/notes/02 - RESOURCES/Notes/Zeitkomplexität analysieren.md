---
{"dg-publish":true,"permalink":"/02-resources/notes/zeitkomplexitaet-analysieren/","tags":["code/python","code/algorithmus"],"noteIcon":"","updated":"2024-11-02T11:47:22.850+01:00"}
---

>Die [[02 - RESOURCES/Notes/Big O\|Zeitkomplexität]] eines Codes gibt an, wie die Laufzeit des [[02 - RESOURCES/Notes/Algorithmus\|Algorithmus]] mit der Größe der Eingabedaten wächst. Um die [[02 - RESOURCES/Notes/Big O\|Zeitkomplexität]] zu bestimmen, betrachten wir die Anzahl der Operationen, die der [[02 - RESOURCES/Notes/Algorithmus\|Algorithmus]] in Abhängigkeit von der Größe der Eingabe ausführt.

# Schritte zur Analyse der [[02 - RESOURCES/Notes/Big O\|Zeitkomplexität]]

1. **Identifiziere die grundlegenden Operationen**:
   - Bestimme die häufigsten Operationen im Code, z.B. Vergleiche, Zuweisungen und Schleifen.

2. **Zähle die Anzahl der Operationen**:
   - Analysiere, wie viele grundlegende Operationen in Abhängigkeit von der Eingabegröße \( n \) ausgeführt werden.

3. **Bestimme die Dominante**:
   - Finde die am schnellsten wachsende [[02 - RESOURCES/Notes/Funktion\|Funktion]] (dominant) in deiner Zählung. Diese wird die [[02 - RESOURCES/Notes/Big O\|Zeitkomplexität]] bestimmen.

4. **Verwende die [[02 - RESOURCES/Notes/Big O\|Big O]]-Notation**:
   - Schreibe die [[02 - RESOURCES/Notes/Big O\|Zeitkomplexität]] in der [[02 - RESOURCES/Notes/Big O\|Big O]]-Notation, um die obere Schranke der Laufzeit auszudrücken.

## Bsp

Hier ist ein Beispiel für einen einfachen [[02 - RESOURCES/Notes/Python\|Python]]-Code, der die [[02 - RESOURCES/Notes/Big O\|Zeitkomplexität]] analysiert:

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
   - Die Anzahl der Operationen ist also proportional zu ( n ), also ( [[02 - RESOURCES/Notes/Big O(n)\|Big O(n)]] ).

4. **Schreibe die [[02 - RESOURCES/Notes/Big O\|Big O]]-Notation**:
   - Die [[02 - RESOURCES/Notes/Big O\|Zeitkomplexität]] von `sum_array` ist ( [[02 - RESOURCES/Notes/Big O(n)\|Big O(n)]] ).

# Regeln zur Bestimmung der [[02 - RESOURCES/Notes/Big O\|Zeitkomplexität]]

1. **Schleifen**:
   - Eine einfache Schleife von 1 bis \( n \) hat eine [[02 - RESOURCES/Notes/Big O\|Zeitkomplexität]] von ( [[02 - RESOURCES/Notes/Big O(n)\|Big O(n)]] ).
   - Verschachtelte Schleifen führen die [[02 - RESOURCES/Notes/Big O\|Zeitkomplexität]] zu \( O(n^2) \) (z.B. zwei Schleifen, die beide von 1 bis \( n \) laufen).

2. **Rekursion**:
   - Bei rekursiven Funktionen zählt man die Anzahl der rekursiven Aufrufe. Der Zeitkomplexitätsausdruck ergibt sich oft aus der Rekursionsbeziehung.

3. **Bestimmte Operationen**:
   - Hinzufügen, Entfernen und Zugreifen auf ein Element in einer Liste oder einem Array sind \( [[02 - RESOURCES/Notes/Big O (1)\|Big O (1)]] \).
   - Suchen in einer nicht sortierten Liste hat eine [[02 - RESOURCES/Notes/Big O\|Zeitkomplexität]] von \( [[02 - RESOURCES/Notes/Big O(n)\|Big O(n)]] \), während die Suche in einer sortierten Liste mit binärer Suche \( [[02 - RESOURCES/Notes/O (log n)\|O (log n)]] \) hat.

# Gesamte [[02 - RESOURCES/Notes/Big O\|Zeitkomplexität]] berechnen

Wenn ein [[02 - RESOURCES/Notes/Algorithmus\|Algorithmus]] aus mehreren Teilen besteht, addiere die Zeitkomplexitäten der einzelnen Teile:

- **Regel**: Die höchste [[02 - RESOURCES/Notes/Big O\|Zeitkomplexität]] dominiert.
  
**Beispiel**:
```python
def example_function(arr):
    for i in range(len(arr)):  # O(n)
        print(i)
    for j in range(len(arr)**2):  # O(n^2)
        print(j)
```

- Die [[02 - RESOURCES/Notes/Big O\|Zeitkomplexität]] für die erste Schleife ist \( [[02 - RESOURCES/Notes/Big O(n)\|Big O(n)]] \) und für die zweite Schleife \( O(n^2) \).
- **Gesamtzeitkomplexität**: \( [[02 - RESOURCES/Notes/Big O(n)\|Big O(n)]] + O(n^2) = O(n^2) \)

# Fazit

Die Analyse der [[02 - RESOURCES/Notes/Big O\|Zeitkomplexität]] ist ein entscheidender Schritt, um die Effizienz eines [[02 - RESOURCES/Notes/Algorithmus\|Algorithmus]] zu verstehen. Mit den beschriebenen Schritten, Regeln und dem Beispiel kannst du die Laufzeit von Algorithmen effektiv bewerten und vergleichen.
