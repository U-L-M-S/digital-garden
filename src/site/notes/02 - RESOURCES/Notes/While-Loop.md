---
{"dg-publish":true,"permalink":"/02-resources/notes/while-loop/","tags":["code"],"updated":"2025-03-17T16:19:23.415+01:00"}
---

>Es wiederholt den Code so lange, wie eine Bedingung `True` ist. 
>Du nutzt ihn, wenn du nicht genau weißt, wie oft die Schleife laufen wird.

# Bsp
## [[03 - ARCHIVES/Abgeschlossen/Java\|Java]]
```java
int counter = 0;
while (counter < 5) {
    System.out.println("Counter: " + counter);
    counter++;
}
```

## [[02 - RESOURCES/Notes/Python\|Python]]
```python
counter = 0
while counter < 5:
    print("Counter:", counter)
    counter += 1
```

## [[00 - PROJECTS/C Sharp\|C Sharp]]
```csharp
int counter = 0;
while (counter < 5) {
    Console.WriteLine("Counter: " + counter);
    counter++;
}
```

## [[00 - PROJECTS/C Sprache\|C Sprache]]
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