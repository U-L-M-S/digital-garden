---
{"dg-publish":true,"permalink":"/02-resources/notes/bubble-sort/","tags":["algorithmen/sortierung","grundlagen/einfach"],"noteIcon":"","updated":"2025-09-16T16:45:37.329+02:00"}
---


>[[02 - RESOURCES/Notes/Bubble Sort\|Bubble Sort]] sortiert durch wiederholtes Vergleichen und Tauschen benachbarter Elemente.

>>Große Elemente "blubbern" wie Blasen nach oben (Ende des Arrays).

>[!important] 
>**Bubble Sort Ablauf:**
>1. Vergleiche alle benachbarten Elementpaare
>2. Tausche sie, wenn sie in falscher Reihenfolge sind
>3. Nach einem Durchlauf steht das größte Element ganz rechts
>4. Wiederhole für den verbleibenden Teil
>5. Stoppe wenn kein Tausch mehr nötig

>[!example] 
>```java
>public void bubbleSort(int[] arr) {
>    boolean swapped;
>    for (int i = 0; i < arr.length - 1; i++) {
>        swapped = false;
>        for (int j = 0; j < arr.length - 1 - i; j++) {
>            if (arr[j] > arr[j + 1]) {
>                // Tausche Elemente
>                int temp = arr[j];
>                arr[j] = arr[j + 1];
>                arr[j + 1] = temp;
>                swapped = true;
>            }
>        }
>        if (!swapped) break; // Optimierung: bereits sortiert
>    }
>}
>```

>[!warning] 
>O(n²) Komplexität - nur für Lehrzwecke geeignet.