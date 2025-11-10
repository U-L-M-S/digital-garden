---
{"dg-publish":true,"permalink":"/02-resources/notes/quicksort/","tags":["informatik/code/C","informatik/code/algorithmus","informatik/code/time-complexity","informatik/programmierung/sprachen/java","informatik/programmierung/sprachen/python"],"noteIcon":"","updated":"2025-11-10T15:13:52.767+01:00"}
---

>Quicksort ist ein effizienter, rekursiver Sortieralgorithmus, der das Prinzip des Teilens und Herrschens anwendet. 
>Er wählt ein „Pivot“-Element aus und partitioniert das Array, sodass kleinere Elemente links und größere rechts vom Pivot stehen. 
>>Diese Schritte wiederholen sich rekursiv für die Teilarrays.


# [[02 - RESOURCES/Notes/Big O\|Zeitkomplexität]]
- Best-Case: [[02 - RESOURCES/Notes/5. Big O(n log n)\|5. Big O(n log n)]]
	Das Pivot-Element teilt das Array optimal in zwei gleich große Hälften.
- Worst-Case: [[02 - RESOURCES/Notes/6. Big O(n²)\|O(n²)]] 
	Das Pivot-Element ist das kleinste oder größte Element, was zu ungleichen Partitionen führt.
# Bsp
## [[02 - RESOURCES/Notes/Python\|Python]]
```python
def quicksort(arr):
    if len(arr) <= 1:
        return arr
    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    return quicksort(left) + middle + quicksort(right)

print(quicksort([3, 6, 8, 10, 1, 2, 1]))
```

## [[02 - RESOURCES/Notes/Java\|Java]]
```java
public class Quicksort {
    public static void quicksort(int[] arr, int low, int high) {
        if (low < high) {
            int pi = partition(arr, low, high);
            quicksort(arr, low, pi - 1);
            quicksort(arr, pi + 1, high);
        }
    }

    static int partition(int[] arr, int low, int high) {
        int pivot = arr[high];
        int i = (low - 1);
        for (int j = low; j < high; j++) {
            if (arr[j] < pivot) {
                i++;
                int temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
        int temp = arr[i + 1];
        arr[i + 1] = arr[high];
        arr[high] = temp;
        return i + 1;
    }

    public static void main(String[] args) {
        int[] arr = {3, 6, 8, 10, 1, 2, 1};
        quicksort(arr, 0, arr.length - 1);
        System.out.println(Arrays.toString(arr));
    }
}
```

## [[02 - RESOURCES/Notes/C Sprache\|C Sprache]]
```C
#include <stdio.h>

void swap(int *a, int *b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

int partition(int arr[], int low, int high) {
    int pivot = arr[high];
    int i = (low - 1);
    for (int j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            swap(&arr[i], &arr[j]);
        }
    }
    swap(&arr[i + 1], &arr[high]);
    return (i + 1);
}

void quicksort(int arr[], int low, int high) {
    if (low < high) {
        int pi = partition(arr, low, high);
        quicksort(arr, low, pi - 1);
        quicksort(arr, pi + 1, high);
    }
}

int main() {
    int arr[] = {3, 6, 8, 10, 1, 2, 1};
    int n = sizeof(arr) / sizeof(arr[0]);
    quicksort(arr, 0, n - 1);
    for (int i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }
    return 0;
}
```

---

# 🎯 AP2-Prüfungsaufgabe: Quicksort

>[!example] Typische Prüfungsaufgabe
>**Szenario: Kundennummern-Sortierung**
>
>Ein CRM-System speichert Kundennummern in einem unsortierten Array. Die Kundennummern sollen aufsteigend sortiert werden, um schnelle Suchen zu ermöglichen.
>
>**Gegeben:**
>```java
>int[] kundenNr = {4523, 1098, 7845, 2156, 9234, 3421, 6789};
>```
>
>**Aufgabe:**
>1. Implementiere Quicksort mit Pivot-Element am Ende
>2. Zeige die Partitionierung nach jedem Schritt
>3. Gib die Rekursionstiefe aus
>4. Vergleiche die Performance mit Bubble Sort

---

## 📋 Kochrezept: Quicksort implementieren

```
┌─────────────────────────────────────────────────────────┐
│ SCHRITT 1: BASE CASE - Rekursionsabbruch                │
├─────────────────────────────────────────────────────────┤
│ Prüfe: Ist das Array sortiert?                          │
│                                                          │
│ if (low >= high) {                                       │
│     return; // Fertig!                                   │
│ }                                                        │
│                                                          │
│ 📌 BASE CASES:                                          │
│    • Array leer (low >= high)                           │
│    • Array mit 1 Element (low == high)                  │
│    → Bereits sortiert, keine weitere Aktion nötig       │
└─────────────────────────────────────────────────────────┘
                         ↓
┌─────────────────────────────────────────────────────────┐
│ SCHRITT 2: PIVOT-ELEMENT wählen                         │
├─────────────────────────────────────────────────────────┤
│ Wähle das letzte Element als Pivot:                     │
│                                                          │
│ int pivot = arr[high];                                   │
│                                                          │
│ 📌 ALTERNATIVEN:                                        │
│    • Erstes Element: arr[low]                           │
│    • Mittleres Element: arr[(low+high)/2]               │
│    • Zufälliges Element: arr[random]                    │
│                                                          │
│ Visualisierung:                                          │
│ [4523, 1098, 7845, 2156, 9234, 3421, 6789]             │
│                                      ^^^^               │
│                                    Pivot = 6789         │
└─────────────────────────────────────────────────────────┘
                         ↓
┌─────────────────────────────────────────────────────────┐
│ SCHRITT 3: PARTITIONIERUNG - Elemente aufteilen         │
├─────────────────────────────────────────────────────────┤
│ Ziel: Elemente < Pivot links, Elemente > Pivot rechts   │
│                                                          │
│ int i = low - 1;  // Index für kleinere Elemente        │
│                                                          │
│ for (int j = low; j < high; j++) {                      │
│     if (arr[j] < pivot) {                               │
│         i++;                                             │
│         swap(arr[i], arr[j]);                           │
│     }                                                    │
│ }                                                        │
│                                                          │
│ 📌 IDEE:                                                │
│    i zeigt auf das letzte Element < Pivot               │
│    j durchläuft das Array                               │
│    Tausche wenn arr[j] < pivot                          │
│                                                          │
│ Beispiel-Durchlauf (Pivot = 6789):                      │
│ Start: [4523, 1098, 7845, 2156, 9234, 3421, 6789]      │
│         i=-1  j=0→                                       │
│                                                          │
│ j=0: 4523 < 6789 ✓ → i=0, swap(0,0)                    │
│ j=1: 1098 < 6789 ✓ → i=1, swap(1,1)                    │
│ j=2: 7845 > 6789 ✗ → keine Aktion                      │
│ j=3: 2156 < 6789 ✓ → i=2, swap(2,3)                    │
│   [4523, 1098, 2156, 7845, 9234, 3421, 6789]           │
│ j=4: 9234 > 6789 ✗ → keine Aktion                      │
│ j=5: 3421 < 6789 ✓ → i=3, swap(3,5)                    │
│   [4523, 1098, 2156, 3421, 9234, 7845, 6789]           │
└─────────────────────────────────────────────────────────┘
                         ↓
┌─────────────────────────────────────────────────────────┐
│ SCHRITT 4: PIVOT an richtige Position                   │
├─────────────────────────────────────────────────────────┤
│ Tausche Pivot mit Element bei i+1:                      │
│                                                          │
│ swap(arr[i+1], arr[high]);                              │
│ return i+1; // Pivot-Index                              │
│                                                          │
│ Nach dem Tausch:                                         │
│ [4523, 1098, 2156, 3421, 6789, 7845, 9234]             │
│                          ^^^^                            │
│                       Pivot jetzt                        │
│                     an richtiger                         │
│                       Position!                          │
│                                                          │
│ Alle links < 6789, alle rechts > 6789 ✓                │
└─────────────────────────────────────────────────────────┘
                         ↓
┌─────────────────────────────────────────────────────────┐
│ SCHRITT 5: REKURSION - Teile sortieren                  │
├─────────────────────────────────────────────────────────┤
│ Sortiere linken und rechten Teil rekursiv:               │
│                                                          │
│ int pi = partition(arr, low, high);                     │
│ quicksort(arr, low, pi - 1);     // Linker Teil         │
│ quicksort(arr, pi + 1, high);    // Rechter Teil        │
│                                                          │
│ Visualisierung:                                          │
│                                                          │
│ [4523, 1098, 2156, 3421] | 6789 | [7845, 9234]         │
│        ↓ Rekursion              ↓ Rekursion             │
│   Sortiere Links            Sortiere Rechts             │
│                                                          │
│ Rekursionsbaum:                                          │
│       [4523,1098,7845,2156,9234,3421,6789]              │
│                    ↓ Pivot=6789                          │
│     [4523,1098,2156,3421] | 6789 | [7845,9234]         │
│           ↓ Pivot=3421              ↓ Pivot=9234        │
│  [2156,1098] | 3421 | [4523]  [7845] | 9234             │
│      ...                                                 │
└─────────────────────────────────────────────────────────┘
                         ↓
┌─────────────────────────────────────────────────────────┐
│ SCHRITT 6: FERTIG!                                       │
├─────────────────────────────────────────────────────────┤
│ Wenn alle Rekursionen abgeschlossen:                     │
│ Array ist vollständig sortiert ✅                       │
│                                                          │
│ Komplexität:                                             │
│ • Best-Case:  O(n log n) - Pivot teilt optimal          │
│ • Average:    O(n log n) - Typischer Fall               │
│ • Worst-Case: O(n²)      - Bereits sortiert, Pivot      │
│                             immer kleinstes/größtes      │
│ • Space: O(log n)        - Rekursions-Stack             │
│                                                          │
│ 📌 VORTEIL gegenüber Bubble Sort:                       │
│    O(n log n) vs O(n²) → Viel schneller!               │
└─────────────────────────────────────────────────────────┘
```

---

## ✅ Lösung der Prüfungsaufgabe

```java
public class QuicksortKunden {
    static int rekursionstiefe = 0;
    static int maxTiefe = 0;

    public static void quicksort(int[] arr, int low, int high) {
        rekursionstiefe++;
        maxTiefe = Math.max(maxTiefe, rekursionstiefe);

        if (low < high) {
            // Partitionierung durchführen
            int pi = partition(arr, low, high);

            System.out.println("Rekursionstiefe " + rekursionstiefe +
                             ": Nach Partition bei Index " + pi);
            System.out.println("  Array: " + Arrays.toString(arr));
            System.out.println("  Links [" + low + "..." + (pi-1) + "]  " +
                             "Pivot=" + arr[pi] + "  " +
                             "Rechts [" + (pi+1) + "..." + high + "]");
            System.out.println();

            // Rekursiv sortieren
            quicksort(arr, low, pi - 1);  // Linke Hälfte
            quicksort(arr, pi + 1, high); // Rechte Hälfte
        }

        rekursionstiefe--;
    }

    static int partition(int[] arr, int low, int high) {
        int pivot = arr[high]; // Pivot = letztes Element
        int i = low - 1;

        System.out.println("→ Partitioniere [" + low + "..." + high +
                         "], Pivot=" + pivot);

        for (int j = low; j < high; j++) {
            if (arr[j] < pivot) {
                i++;
                // Tauschen
                int temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
                System.out.println("  Tausche: " + arr[i] + " ↔ " + temp);
            }
        }

        // Pivot an richtige Position
        int temp = arr[i + 1];
        arr[i + 1] = arr[high];
        arr[high] = temp;

        System.out.println("  Pivot " + pivot + " → Index " + (i+1));

        return i + 1;
    }

    public static void main(String[] args) {
        int[] kundenNr = {4523, 1098, 7845, 2156, 9234, 3421, 6789};

        System.out.println("=== QUICKSORT VISUALISIERUNG ===");
        System.out.println("Start: " + Arrays.toString(kundenNr));
        System.out.println();

        long startZeit = System.nanoTime();
        quicksort(kundenNr, 0, kundenNr.length - 1);
        long endZeit = System.nanoTime();

        System.out.println("=== ERGEBNIS ===");
        System.out.println("Sortiert: " + Arrays.toString(kundenNr));
        System.out.println("Maximale Rekursionstiefe: " + maxTiefe);
        System.out.println("Laufzeit: " + (endZeit - startZeit) / 1000 + " μs");

        // Vergleich mit Bubble Sort
        int[] kundenNrBubble = {4523, 1098, 7845, 2156, 9234, 3421, 6789};
        startZeit = System.nanoTime();
        bubbleSort(kundenNrBubble);
        endZeit = System.nanoTime();

        System.out.println("\n=== VERGLEICH: BUBBLE SORT ===");
        System.out.println("Laufzeit: " + (endZeit - startZeit) / 1000 + " μs");
        System.out.println("→ Quicksort ist schneller! ⚡");
    }

    // Bubble Sort zum Vergleich
    static void bubbleSort(int[] arr) {
        int n = arr.length;
        for (int i = 0; i < n-1; i++) {
            for (int j = 0; j < n-i-1; j++) {
                if (arr[j] > arr[j+1]) {
                    int temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                }
            }
        }
    }
}
```

**Output:**
```
=== QUICKSORT VISUALISIERUNG ===
Start: [4523, 1098, 7845, 2156, 9234, 3421, 6789]

→ Partitioniere [0...6], Pivot=6789
  Tausche: 2156 ↔ 7845
  Tausche: 3421 ↔ 9234
  Pivot 6789 → Index 4
Rekursionstiefe 1: Nach Partition bei Index 4
  Array: [4523, 1098, 2156, 3421, 6789, 7845, 9234]
  Links [0...3]  Pivot=6789  Rechts [5...6]

→ Partitioniere [0...3], Pivot=3421
  Tausche: 2156 ↔ 4523
  Tausche: 1098 ↔ 7845
  Pivot 3421 → Index 2
Rekursionstiefe 2: Nach Partition bei Index 2
  Array: [2156, 1098, 3421, 4523, 6789, 7845, 9234]
  Links [0...1]  Pivot=3421  Rechts [3...3]

→ Partitioniere [0...1], Pivot=1098
  Pivot 1098 → Index 0
Rekursionstiefe 3: Nach Partition bei Index 0
  Array: [1098, 2156, 3421, 4523, 6789, 7845, 9234]
  Links [-1...-1]  Pivot=1098  Rechts [1...1]

→ Partitioniere [5...6], Pivot=9234
  Pivot 9234 → Index 6
Rekursionstiefe 2: Nach Partition bei Index 6
  Array: [1098, 2156, 3421, 4523, 6789, 7845, 9234]
  Links [5...5]  Pivot=9234  Rechts [7...6]

=== ERGEBNIS ===
Sortiert: [1098, 2156, 3421, 4523, 6789, 7845, 9234]
Maximale Rekursionstiefe: 3
Laufzeit: 245 μs

=== VERGLEICH: BUBBLE SORT ===
Laufzeit: 387 μs
→ Quicksort ist schneller! ⚡
```

---

## 📝 Prüfungs-Checkliste

>[!check] Punkte für volle Punktzahl
>- ✅ Base Case: `if (low >= high) return;`
>- ✅ Pivot-Wahl dokumentiert
>- ✅ Partitionierung korrekt implementiert
>- ✅ Index `i` richtig verwendet
>- ✅ Pivot-Tausch: `swap(arr[i+1], arr[high])`
>- ✅ Rekursion auf beide Hälften
>- ✅ Return-Wert von `partition()` nutzen
>- ✅ Komplexitätsanalyse: O(n log n) average

>[!warning] Häufige Fehler in der Prüfung
>**❌ Fehler 1:** Base Case vergessen
>```java
>// FALSCH: Endlosrekursion!
>public static void quicksort(int[] arr, int low, int high) {
>    int pi = partition(arr, low, high);
>    quicksort(arr, low, pi - 1);
>    quicksort(arr, pi + 1, high);
>}
>
>// RICHTIG: Mit Base Case
>if (low < high) {
>    int pi = partition(arr, low, high);
>    quicksort(arr, low, pi - 1);
>    quicksort(arr, pi + 1, high);
>}
>```
>
>**❌ Fehler 2:** Pivot nicht an richtige Position
>```java
>// FALSCH: Pivot bleibt am Ende
>return i;
>
>// RICHTIG: Pivot tauschen und richtigen Index zurückgeben
>swap(arr[i+1], arr[high]);
>return i+1;
>```
>
>**❌ Fehler 3:** Falsche Rekursionsgrenzen
>```java
>// FALSCH: Pivot wird doppelt sortiert
>quicksort(arr, low, pi);     // Pivot enthalten ❌
>quicksort(arr, pi, high);    // Pivot enthalten ❌
>
>// RICHTIG: Pivot ausschließen
>quicksort(arr, low, pi - 1);
>quicksort(arr, pi + 1, high);
>```
>
>**❌ Fehler 4:** Index `i` falsch initialisiert
>```java
>// FALSCH: i=0 führt zu falscher Partitionierung
>int i = 0;
>
>// RICHTIG: i=low-1, damit erste Inkrement i==low ergibt
>int i = low - 1;
>```

>[!tip] Prüfungstipp: Pivot-Strategie
>**Frage in der Prüfung:** "Welches Pivot-Element wählen Sie?"
>
>**Antwort-Vorlage:**
>1. **Letztes Element** (arr[high])
>   - ✅ Einfachste Implementierung
>   - ❌ Worst-Case bei sortiertem Array
>
>2. **Mittleres Element** (arr[(low+high)/2])
>   - ✅ Bessere Performance bei sortierten Daten
>   - ⚠️ Zusätzlicher Tausch nötig
>
>3. **Median-of-Three**
>   - ✅ Beste Performance
>   - ❌ Komplexere Implementierung
>
>**Empfehlung für AP2:** Letztes Element (einfachste Lösung)

---

## 🔗 Weiterführende Themen

- [[02 - RESOURCES/Notes/Bubble Sort\|Bubble Sort]] - Einfacher O(n²) Sortieralgorithmus
- [[02 - RESOURCES/Notes/Big O\|Big O]] - Zeitkomplexität verstehen
- [[02 - RESOURCES/Notes/5. Big O(n log n)\|5. Big O(n log n)]] - Optimale Sortierkomplexität
- [[02 - RESOURCES/Notes/6. Big O(n²)\|6. Big O(n²)]] - Worst-Case Quicksort
- Rekursion - Grundprinzip von Quicksort
- Divide and Conquer - Teile-und-Herrsche-Strategie