---
{"dg-publish":true,"permalink":"/02-resources/notes/java-2-d-array/","tags":["informatik/programmierung/sprachen/java"],"noteIcon":"","updated":"2025-09-27T01:32:44.830+02:00"}
---

> In [[02 - RESOURCES/Notes/Java\|Java]] beginnt der Index eines 2D-Arrays ebenfalls bei 0. Ein 2D-Array kann als ein Array von Arrays betrachtet werden, ähnlich wie eine Tabelle mit Zeilen und Spalten.

# Syntax
## 2D-Array-Deklaration
```java
datatype[][] arrayName;
```

## 2D-Array-Deklaration und Initialisierung (n Zeilen und m Spalten)
```java
datatype[][] arrayName = new datatype[n][m];
```

> Hier wird das 2D-Array deklariert und initialisiert. **ABER** es werden noch keine Werte zugewiesen.
>> Es wird nur die Anzahl der Zeilen (`n`) und Spalten (`m`) festgelegt.

## 2D-Array-Deklaration und Initialisierung mit Werten
```java
datatype[][] arrayName = {
    {n00, n01, n02},
    {n10, n11, n12},
    {n20, n21, n22}
};
```

# Bsp

```java
import java.util.*;

public class Beispiel2DArray {

    public static void main(String[] args) {
        int zeilen = 3;
        int spalten = 3;
        int[][] matrix = new int[zeilen][spalten];

        for (int i = 0; i < zeilen; i++) {
            for (int j = 0; j < spalten; j++) {
                matrix[i][j] = (int) (Math.random() * 10);
                System.out.print(matrix[i][j] + " ");
            }
            System.out.println();  // Zeilenumbruch
        }
    }
}
```
