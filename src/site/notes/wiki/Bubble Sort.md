---
{"dg-publish":true,"permalink":"/wiki/bubble-sort/","tags":["informatik/code","meta/allgemein"],"noteIcon":"","updated":"2026-07-19T03:56:26.000+02:00","dg-note-properties":{"tags":["informatik/code","meta/allgemein"],"aliases":["Blasensortierung","Bubble-Sort-Algorithmus","Bubblesort"],"links":null,"created_date":"2025-09-16"}}
---


>Bubble Sort ist ein einfacher, iterativer Sortieralgorithmus, der durch wiederholtes Vergleichen benachbarter Elemente funktioniert.

>>Er vertauscht die Elemente, wenn sie in der falschen Reihenfolge stehen. Große Elemente "blubbern" wie Blasen nach oben (Ende des Arrays). Dieser Vorgang wird wiederholt, bis das Array vollständig sortiert ist.

>[!important] Bubble Sort Ablauf
>1. Vergleiche alle benachbarten Elementpaare
>2. Tausche sie, wenn sie in falscher Reihenfolge sind
>3. Nach einem Durchlauf steht das größte Element ganz rechts
>4. Wiederhole für den verbleibenden Teil
>5. Stoppe wenn kein Tausch mehr nötig

## [[wiki/Big O\|Zeitkomplexität]]
- **Best-Case: [[wiki/4. Big O(n)\|4. Big O(n)]]** - Das Array ist bereits sortiert, nur ein Durchlauf nötig
- **Worst-Case: [[wiki/6. Big O(n²)\|6. Big O(n²)]]** - Array ist umgekehrt sortiert, n Durchläufe mit n Vergleichen

## Implementierungen

### [[wiki/Java\|Java]]
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

### [[wiki/Python\|Python]]
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

### [[wiki/C Sprache\|C Sprache]]
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
>O(n²) Komplexität macht Bubble Sort nur für Lehrzwecke und kleine Datenmengen geeignet. Für produktive Anwendungen sollten effizientere Algorithmen wie [[wiki/Quicksort\|Quicksort]] verwendet werden.