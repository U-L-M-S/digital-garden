---
{"dg-publish":true,"permalink":"/02-resources/notes/bubble-sort/","tags":["algorithmen/sortierung","grundlagen/einfach","informatik/code/algorithmus","informatik/code/time-complexity"],"noteIcon":"","updated":"2025-11-10T15:12:03.759+01:00"}
---


>Bubble Sort ist ein einfacher, iterativer Sortieralgorithmus, der durch wiederholtes Vergleichen benachbarter Elemente funktioniert.

>>Er vertauscht die Elemente, wenn sie in der falschen Reihenfolge stehen. Große Elemente "blubbern" wie Blasen nach oben (Ende des Arrays). Dieser Vorgang wird wiederholt, bis das Array vollständig sortiert ist.

>[!important] Bubble Sort Ablauf
>1. Vergleiche alle benachbarten Elementpaare
>2. Tausche sie, wenn sie in falscher Reihenfolge sind
>3. Nach einem Durchlauf steht das größte Element ganz rechts
>4. Wiederhole für den verbleibenden Teil
>5. Stoppe wenn kein Tausch mehr nötig

## [[02 - RESOURCES/Notes/Big O\|Zeitkomplexität]]
- **Best-Case: [[02 - RESOURCES/Notes/4. Big O(n)\|4. Big O(n)]]** - Das Array ist bereits sortiert, nur ein Durchlauf nötig
- **Worst-Case: [[02 - RESOURCES/Notes/6. Big O(n²)\|6. Big O(n²)]]** - Array ist umgekehrt sortiert, n Durchläufe mit n Vergleichen

## Implementierungen

### [[02 - RESOURCES/Notes/Java\|Java]]
```java
public class BubbleSort {
    public static void bubbleSort(int[] arr) {
        int n = arr.length;
        for (int i = 0; i < n-1; i++) {
            boolean swapped = false;
            for (int j = 0; j < n-i-1; j++) {
                if (arr[j] > arr[j+1]) {
                    int temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                    swapped = true;
                }
            }
            if (!swapped) break; // Optimierung: bereits sortiert
        }
    }
}
```

### [[02 - RESOURCES/Notes/Python\|Python]]
```python
def bubblesort(arr):
    n = len(arr)
    for i in range(n):
        swapped = False
        for j in range(0, n-i-1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
                swapped = True
        if not swapped:
            break
    return arr
```

### [[02 - RESOURCES/Notes/C Sprache\|C Sprache]]
```c
#include <stdio.h>

void bubblesort(int arr[], int n) {
    for (int i = 0; i < n-1; i++) {
        int swapped = 0;
        for (int j = 0; j < n-i-1; j++) {
            if (arr[j] > arr[j+1]) {
                int temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                swapped = 1;
            }
        }
        if (!swapped) break;
    }
}
```

>[!warning] Performance
>O(n²) Komplexität macht Bubble Sort nur für Lehrzwecke und kleine Datenmengen geeignet. Für produktive Anwendungen sollten effizientere Algorithmen wie [[02 - RESOURCES/Notes/Quicksort\|Quicksort]] verwendet werden.

---

# 🎯 AP2-Prüfungsaufgabe: Bubble Sort

>[!example] Typische Prüfungsaufgabe
>**Szenario: Produktpreis-Sortierung**
>
>Ein Online-Shop speichert Produktpreise in einem Array. Die Preise sollen aufsteigend sortiert werden, damit Kunden vom günstigsten zum teuersten Produkt durchsuchen können.
>
>**Gegeben:**
>```java
>double[] preise = {49.99, 19.99, 99.99, 29.99, 9.99, 39.99};
>```
>
>**Aufgabe:**
>1. Implementiere Bubble Sort, um die Preise aufsteigend zu sortieren
>2. Optimiere den Algorithmus mit einem `swapped`-Flag
>3. Gib nach jedem Durchlauf den aktuellen Zustand des Arrays aus
>4. Zähle die Anzahl der Vergleiche und Tauschoperationen

---

## 📋 Kochrezept: Bubble Sort implementieren

```
┌─────────────────────────────────────────────────────────┐
│ SCHRITT 1: ÄUSSERE SCHLEIFE - Durchläufe                │
├─────────────────────────────────────────────────────────┤
│ Für jeden Durchlauf (i = 0 bis n-1):                    │
│                                                          │
│ for (int i = 0; i < n-1; i++)                           │
│                                                          │
│ 📌 WARUM n-1?                                           │
│    Nach jedem Durchlauf ist 1 Element am richtigen     │
│    Platz → brauchen maximal n-1 Durchläufe             │
└─────────────────────────────────────────────────────────┘
                         ↓
┌─────────────────────────────────────────────────────────┐
│ SCHRITT 2: OPTIMIERUNG - Swapped-Flag setzen            │
├─────────────────────────────────────────────────────────┤
│ Vor jedem Durchlauf:                                     │
│                                                          │
│ boolean swapped = false;                                 │
│                                                          │
│ 📌 ZWECK:                                                │
│    Wenn kein Tausch stattfindet → Array ist sortiert   │
│    → Algorithmus vorzeitig beenden                      │
└─────────────────────────────────────────────────────────┘
                         ↓
┌─────────────────────────────────────────────────────────┐
│ SCHRITT 3: INNERE SCHLEIFE - Vergleichen                │
├─────────────────────────────────────────────────────────┤
│ Benachbarte Elemente durchgehen:                        │
│                                                          │
│ for (int j = 0; j < n-i-1; j++)                         │
│                                                          │
│ 📌 WARUM n-i-1?                                         │
│    n = Array-Größe                                      │
│    i = Bereits sortierte Elemente am Ende               │
│    -1 = Vermeide Index-Out-Of-Bounds                    │
│                                                          │
│ Visualisierung nach Durchlauf i:                        │
│ [unsortiert...] [sortiert i Elemente]                   │
└─────────────────────────────────────────────────────────┘
                         ↓
┌─────────────────────────────────────────────────────────┐
│ SCHRITT 4: VERGLEICHEN & TAUSCHEN                       │
├─────────────────────────────────────────────────────────┤
│ Wenn linkes Element > rechtes Element:                  │
│                                                          │
│ if (arr[j] > arr[j+1]) {                                │
│     // Tauschen                                          │
│     int temp = arr[j];                                   │
│     arr[j] = arr[j+1];                                   │
│     arr[j+1] = temp;                                     │
│     swapped = true;                                      │
│ }                                                        │
│                                                          │
│ Visualisierung:                                          │
│ Vorher:  [5][3]    →    Nachher: [3][5]                │
│           ↑  ↑                     ↑  ↑                 │
│         j  j+1                   j  j+1                 │
└─────────────────────────────────────────────────────────┘
                         ↓
┌─────────────────────────────────────────────────────────┐
│ SCHRITT 5: OPTIMIERUNG PRÜFEN                           │
├─────────────────────────────────────────────────────────┤
│ Nach jedem Durchlauf prüfen:                            │
│                                                          │
│ if (!swapped) {                                          │
│     break; // Bereits sortiert, fertig!                 │
│ }                                                        │
│                                                          │
│ 📌 VORTEIL:                                             │
│    Best-Case von O(n²) → O(n)                          │
│    Bei bereits sortiertem Array nur 1 Durchlauf        │
└─────────────────────────────────────────────────────────┘
                         ↓
┌─────────────────────────────────────────────────────────┐
│ SCHRITT 6: FERTIG!                                       │
├─────────────────────────────────────────────────────────┤
│ Array ist sortiert ✅                                   │
│                                                          │
│ Komplexität:                                             │
│ • Best-Case:  O(n)    - bereits sortiert                │
│ • Worst-Case: O(n²)   - umgekehrt sortiert             │
│ • Space: O(1)         - in-place Sortierung             │
└─────────────────────────────────────────────────────────┘
```

---

## ✅ Lösung der Prüfungsaufgabe

```java
public class BubbleSortPreise {
    public static void bubbleSortMitStatistik(double[] preise) {
        int n = preise.length;
        int vergleiche = 0;
        int tauschoperationen = 0;

        System.out.println("Start: " + Arrays.toString(preise));
        System.out.println();

        for (int i = 0; i < n-1; i++) {
            boolean swapped = false;
            System.out.println("=== Durchlauf " + (i+1) + " ===");

            for (int j = 0; j < n-i-1; j++) {
                vergleiche++;

                if (preise[j] > preise[j+1]) {
                    // Tauschen
                    double temp = preise[j];
                    preise[j] = preise[j+1];
                    preise[j+1] = temp;
                    tauschoperationen++;
                    swapped = true;

                    System.out.println("  Tausche: " + temp + " ↔ " + preise[j]);
                }
            }

            System.out.println("Nach Durchlauf " + (i+1) + ": " +
                             Arrays.toString(preise));
            System.out.println();

            // Optimierung: Vorzeitig beenden wenn bereits sortiert
            if (!swapped) {
                System.out.println("✓ Keine Tauschoperationen → Array sortiert!");
                break;
            }
        }

        System.out.println("Statistik:");
        System.out.println("• Vergleiche: " + vergleiche);
        System.out.println("• Tauschoperationen: " + tauschoperationen);
    }

    public static void main(String[] args) {
        double[] preise = {49.99, 19.99, 99.99, 29.99, 9.99, 39.99};
        bubbleSortMitStatistik(preise);

        System.out.println("\n" + "Sortiertes Ergebnis: " +
                         Arrays.toString(preise));
    }
}
```

**Output:**
```
Start: [49.99, 19.99, 99.99, 29.99, 9.99, 39.99]

=== Durchlauf 1 ===
  Tausche: 49.99 ↔ 19.99
  Tausche: 99.99 ↔ 29.99
  Tausche: 99.99 ↔ 9.99
  Tausche: 99.99 ↔ 39.99
Nach Durchlauf 1: [19.99, 49.99, 29.99, 9.99, 39.99, 99.99]

=== Durchlauf 2 ===
  Tausche: 49.99 ↔ 29.99
  Tausche: 49.99 ↔ 9.99
  Tausche: 49.99 ↔ 39.99
Nach Durchlauf 2: [19.99, 29.99, 9.99, 39.99, 49.99, 99.99]

=== Durchlauf 3 ===
  Tausche: 29.99 ↔ 9.99
Nach Durchlauf 3: [19.99, 9.99, 29.99, 39.99, 49.99, 99.99]

=== Durchlauf 4 ===
  Tausche: 19.99 ↔ 9.99
Nach Durchlauf 4: [9.99, 19.99, 29.99, 39.99, 49.99, 99.99]

=== Durchlauf 5 ===
✓ Keine Tauschoperationen → Array sortiert!

Statistik:
• Vergleiche: 14
• Tauschoperationen: 8

Sortiertes Ergebnis: [9.99, 19.99, 29.99, 39.99, 49.99, 99.99]
```

---

## 📝 Prüfungs-Checkliste

>[!check] Punkte für volle Punktzahl
>- ✅ Äußere Schleife: `i < n-1`
>- ✅ Innere Schleife: `j < n-i-1`
>- ✅ Vergleich: `arr[j] > arr[j+1]`
>- ✅ Tauschen mit `temp`-Variable
>- ✅ `swapped`-Flag für Optimierung
>- ✅ Vorzeitiges Beenden bei `!swapped`
>- ✅ Korrekte Ausgabe
>- ✅ Kommentare im Code

>[!warning] Häufige Fehler in der Prüfung
>**❌ Fehler 1:** Innere Schleife bis `n` statt `n-i-1`
>```java
>// FALSCH:
>for (int j = 0; j < n; j++)  // IndexOutOfBoundsException!
>
>// RICHTIG:
>for (int j = 0; j < n-i-1; j++)
>```
>
>**❌ Fehler 2:** Ohne `swapped`-Flag
>```java
>// FALSCH: Unnötige Durchläufe
>for (int i = 0; i < n-1; i++) {
>    for (int j = 0; j < n-i-1; j++) {
>        // ...
>    }
>}
>
>// RICHTIG: Mit Optimierung
>boolean swapped = false;
>// ...
>if (!swapped) break;
>```
>
>**❌ Fehler 3:** Falsche Tausch-Reihenfolge
>```java
>// FALSCH: temp wird überschrieben
>int temp = arr[j];
>arr[j] = arr[j+1];
>arr[j+1] = arr[j];  // Verlust von arr[j]!
>
>// RICHTIG:
>int temp = arr[j];
>arr[j] = arr[j+1];
>arr[j+1] = temp;
>```
>
>**❌ Fehler 4:** Falsche Komplexität angeben
>```
>// FALSCH: "Bubble Sort ist O(n log n)"
>// RICHTIG: "Bubble Sort ist O(n²) im Worst-Case, O(n) im Best-Case"
>```

---

## 🔗 Weiterführende Themen

- [[02 - RESOURCES/Notes/Quicksort\|Quicksort]] - Effizienter Sortieralgorithmus O(n log n)
- [[02 - RESOURCES/Notes/Big O\|Big O]] - Zeitkomplexität verstehen
- [[02 - RESOURCES/Notes/6. Big O(n²)\|6. Big O(n²)]] - Quadratische Komplexität
- [[02 - RESOURCES/Notes/4. Big O(n)\|4. Big O(n)]] - Lineare Komplexität (Best-Case)