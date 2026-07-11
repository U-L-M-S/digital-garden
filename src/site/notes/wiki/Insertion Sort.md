---
{"dg-publish":true,"permalink":"/wiki/insertion-sort/","tags":["algorithmen/sortierung"],"noteIcon":"","updated":"2026-07-11T23:29:17.041+02:00","dg-note-properties":{"tags":["algorithmen/sortierung"],"aliases":["Einfügesortierung","Insertion-Sort-Algorithmus"],"links":null,"created_date":"2025-09-16"}}
---

![Insertion-sort-example.gif](/img/user/assets/IMG/Insertion-sort-example.gif)
>[[wiki/Insertion Sort\|Insertion Sort]] sortiert durch schrittweises Einfügen von Elementen an die korrekte Position.

>>Ähnlich dem Sortieren von Spielkarten in der Hand - jede neue Karte wird an die richtige Stelle eingefügt.

>[!important] 
>**Insertion Sort Ablauf:**
>1. Beginne mit dem zweiten Element
>2. Vergleiche es mit vorherigen Elementen
>3. Verschiebe größere Elemente nach rechts
>4. Füge das aktuelle Element an korrekter Position ein
>5. Wiederhole für alle Elemente

>[!example] 
>```java
>public void insertionSort(int[] arr) {
>    for (int i = 1; i < arr.length; i++) {
>        int key = arr[i];
>        int j = i - 1;
>        
>        // Verschiebe größere Elemente nach rechts
>        while (j >= 0 && arr[j] > key) {
>            arr[j + 1] = arr[j];
>            j--;
>        }
>        arr[j + 1] = key; // Einfügen an korrekter Position
>    }
>}
>```

>[!success] 
>Effizient für kleine oder bereits teilweise sortierte Arrays.