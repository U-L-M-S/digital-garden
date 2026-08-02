---
{"dg-publish":true,"permalink":"/wiki/while-loop/","tags":["informatik/code"],"noteIcon":"","updated":"2026-07-19T03:56:26.768+02:00","dg-note-properties":{"aliases":["While-Loop","while-loop"],"created_date":"2024-09-23","links":null,"tags":["informatik/code"]}}
---

>Es wiederholt den Code so lange, wie eine Bedingung `True` ist. 
>Du nutzt ihn, wenn du nicht genau weißt, wie oft die Schleife laufen wird.

# Bsp
## [[wiki/Java\|Java]]
```java
int counter = 0;
while (counter < 5) {
    System.out.println("Counter: " + counter);
    counter++;
}
```

## [[wiki/Python\|Python]]
```python
counter = 0
while counter < 5:
    print("Counter:", counter)
    counter += 1
```

## [[wiki/C Sharp\|C Sharp]]
```csharp
int counter = 0;
while (counter < 5) {
    Console.WriteLine("Counter: " + counter);
    counter++;
}
```

## [[wiki/C Sprache\|C Sprache]]
```c
#include <stdio.h>

int main() {
    int counter = 0;
    while (counter < 5) {
        printf("Counter: %d\n", counter);
        counter++;
    }
    return 0;
}
```

Jede dieser `while`-Schleifen führt die Schleifenaktion aus, solange `counter` kleiner als 5 ist.