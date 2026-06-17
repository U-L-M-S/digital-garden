---
{"dg-publish":true,"permalink":"/02-resources/notes/do-while-loop/","tags":["informatik/code"],"noteIcon":"","updated":"2026-05-13T08:54:22.824+02:00","dg-note-properties":{"aliases":["Do-While-Loop","do-While-Loop"],"created_date":"2024-09-23","links":null,"tags":["informatik/code"]}}
---

>Das Gleiche wie bei [[02 - RESOURCES/Notes/While-Loop\|While-Loop]]. Es wird aber mindestens einmal wiederholt.

# Bsp
## [[02 - RESOURCES/Notes/Java\|Java]]
```java
int counter = 0;
do {
    System.out.println("Counter: " + counter);
    counter++;
} while (counter < 5);
```

## [[02 - RESOURCES/Notes/Python\|Python]] 
Python hat keinen direkten `do-while`-Loop, aber das gleiche Verhalten kann mit einer `while`-Schleife erreicht werden:
```python
counter = 0
while True:
    print("Counter:", counter)
    counter += 1
    if counter >= 5:
        break
```

## [[02 - RESOURCES/Notes/C Sharp\|C Sharp]]
```csharp
int counter = 0;
do
{
    Console.WriteLine("Counter: " + counter);
    counter++;
} while (counter < 5);
```

## [[02 - RESOURCES/Notes/C Sprache\|C Sprache]]
```c
#include <stdio.h>

int main() {
    int counter = 0;
    do {
        printf("Counter: %d\n", counter);
        counter++;
    } while (counter < 5);
    return 0;
}
```

Jeder dieser `do-while`-Loops gibt die Variable `counter` aus, solange der `counter` kleiner als 5 ist.