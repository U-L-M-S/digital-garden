---
{"dg-publish":true,"permalink":"/wiki/selection-sort-1/","tags":["algorithmen/sortierung"],"noteIcon":"","updated":"2026-07-12T19:08:56.769+02:00","dg-note-properties":{"tags":["algorithmen/sortierung"],"aliases":["Auswahlsortierung","Selection-Sort-Algorithmus"],"links":null,"created_date":"2025-09-16"}}
---

![selection-600.gif](/img/user/assets/IMG/selection-600.gif)
>[[Selection Sort\|Selection Sort]] ist ein einfacher Sortieralgorithmus, der wiederholt das kleinste Element sucht und vorne einfügt.

>>Er teilt das Array in sortierten (links) und unsortierten (rechts) Bereich.

>[!important] 
>**Selection Sort Ablauf:**
>1. Finde das kleinste Element im unsortierten Bereich
>2. Tausche es mit dem ersten Element des unsortierten Bereichs
>3. Erweitere den sortierten Bereich um eine Position
>4. Wiederhole bis alle Elemente sortiert sind

>[!example] 
>```java
>public void selectionSort(int[] arr) {
>    for (int i = 0; i < arr.length - 1; i++) {
>        int minIndex = i;
>        for (int j = i + 1; j < arr.length; j++) {
>            if (arr[j] < arr[minIndex]) {
>                minIndex = j;
>            }
>        }
>        // Tausche Elemente
>        int temp = arr[i];
>        arr[i] = arr[minIndex];
>        arr[minIndex] = temp;
>    }
>}
>```

>[!note] 
>**Komplexität:** O(n²) - nicht effizient für große Datenmengen.