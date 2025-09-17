---
{"dg-publish":true,"permalink":"/02-resources/notes/quicksort/","tags":["informatik/code/C","informatik/code/java","informatik/code/python","informatik/code/time-complexity","informatik/code/algorithmus"],"noteIcon":"","updated":"2025-09-10T16:33:10.000+02:00"}
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

## [[00 - PROJECTS/C Sprache\|C Sprache]]
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