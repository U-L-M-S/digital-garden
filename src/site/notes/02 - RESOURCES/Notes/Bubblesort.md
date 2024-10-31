---
{"dg-publish":true,"permalink":"/02-resources/notes/bubblesort/","tags":["code/C","code/java","code/python","code/time-complexity","code/algorithmus"],"noteIcon":"","updated":"2024-10-31T23:15:01.445+01:00"}
---

>**Bubblesort** ist ein einfacher, iterativer Sortieralgorithmus, der durch wiederholtes Vergleichen benachbarter Elemente funktioniert. 
>>Er vertauscht die Elemente, wenn sie in der falschen Reihenfolge stehen. Dieser Vorgang wird wiederholt, bis das Array vollständig sortiert ist.

# [[02 - RESOURCES/Notes/Big O\|Zeitkomplexität]]
- **Best-Case: [[02 - RESOURCES/Notes/Big O(n)\|Big O(n)]]**  
	Das Array ist bereits sortiert, sodass nur eine Durchlauf benötigt wird, um festzustellen, dass keine Vertauschungen notwendig sind.
- **Worst-Case: [[02 - RESOURCES/Notes/O(n2)\|O(n2)]]**  
	Das Array ist in umgekehrter Reihenfolge sortiert, was zu n Durchläufen mit n Vergleichen führt.

# Bsp
## [[02 - RESOURCES/Notes/Python\|Python]]
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

print(bubblesort([64, 34, 25, 12, 22, 11, 90]))
```

## [[02 - RESOURCES/Notes/Java\|Java]]
```java
public class Bubblesort {
    public static void bubblesort(int[] arr) {
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
            if (!swapped) break;
        }
    }

    public static void main(String[] args) {
        int[] arr = {64, 34, 25, 12, 22, 11, 90};
        bubblesort(arr);
        System.out.println(Arrays.toString(arr));
    }
}
```

## [[00 - PROJECTS/C Sprache\|C Sprache]]
```C
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

int main() {
    int arr[] = {64, 34, 25, 12, 22, 11, 90};
    int n = sizeof(arr) / sizeof(arr[0]);
    bubblesort(arr, n);
    for (int i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }
    return 0;
}
```
