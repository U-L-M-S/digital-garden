---
{"dg-publish":true,"permalink":"/02-resources/notes/insertion-sort/","tags":["algorithmen/sortierung","AP2025/detailliert"],"noteIcon":"","updated":"2025-11-12T09:26:56.247+01:00"}
---

![Insertion-sort-example.gif](/img/user/02%20-%20RESOURCES/Files/Insertion-sort-example.gif)
>[[02 - RESOURCES/Notes/Insertion Sort\|Insertion Sort]] sortiert durch schrittweises Einfügen von Elementen an die korrekte Position.

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