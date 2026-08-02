---
{"dg-publish":true,"permalink":"/wiki/do-while-loop/","tags":["informatik/code"],"noteIcon":"","updated":"2026-07-19T03:56:26.633+02:00","dg-note-properties":{"aliases":["Do-While-Loop","do-While-Loop"],"created_date":"2024-09-23","links":null,"tags":["informatik/code"]}}
---

>Das Gleiche wie bei [[wiki/While-Loop\|While-Loop]]. Es wird aber mindestens einmal wiederholt.

# Bsp
## [[wiki/Java\|Java]]
```java
int counter = 0;
do {
    System.out.println("Counter: " + counter);
    counter++;
} while (counter < 5);
```

## [[wiki/Python\|Python]] 
Python hat keinen direkten `do-while`-Loop, aber das gleiche Verhalten kann mit einer `while`-Schleife erreicht werden:
```python
counter = 0
while True:
    print("Counter:", counter)
    counter += 1
    if counter >= 5:
        break
```

## [[wiki/C Sharp\|C Sharp]]
```csharp
int counter = 0;
do
{
    Console.WriteLine("Counter: " + counter);
    counter++;
} while (counter < 5);
```

## [[wiki/C Sprache\|C Sprache]]
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