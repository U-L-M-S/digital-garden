---
{"dg-publish":true,"permalink":"/02 - RESOURCES/Notes/Do-While-Loop/","tags":["code"],"noteIcon":"","updated":"2025-03-17T16:19:22.000+01:00"}
---

>Das gleiche wie bei [[02 - RESOURCES/Notes/While-Loop\|While-Loop]]. Es wird aber mindestens 1 mal wiederholt.

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

## [[00 - PROJECTS/C Sharp\|C Sharp]]
```csharp
int counter = 0;
do
{
    Console.WriteLine("Counter: " + counter);
    counter++;
} while (counter < 5);
```

## [[00 - PROJECTS/C Sprache\|C Sprache]]
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