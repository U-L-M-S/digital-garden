---
{"dg-publish":true,"permalink":"/02-resources/notes/else-if-bedingung/","tags":["code"],"noteIcon":"","updated":"2025-08-26T16:35:03.693+02:00"}
---

>Eine `else if`-Bedingung prüft eine zusätzliche Bedingung, falls die vorherige [[02 - RESOURCES/Notes/IF-Bedingung\|if-Bedingung]] **falsch** war. 
>>Ist sie wahr, wird der zugehörige **Codeblock** ausgeführt.

```python
num = -5
if num > 0:
    print("Die Zahl ist positiv.")
elif num < 0:
    print("Die Zahl ist negativ.")
```

```java
int num = -5;
if (num > 0) {
    System.out.println("Die Zahl ist positiv.");
} else if (num < 0) {
    System.out.println("Die Zahl ist negativ.");
}
```

```js
let num = -5;
if (num > 0) {
    console.log("Die Zahl ist positiv.");
} else if (num < 0) {
    console.log("Die Zahl ist negativ.");
}
```

```bash
num=-5
if [ "$num" -gt 0 ]; then
    echo "Die Zahl ist positiv."
elif [ "$num" -lt 0 ]; then
    echo "Die Zahl ist negativ."
fi
```

```C
#include <stdio.h>

int main() {
    int num = -5;
    if (num > 0) {
        printf("Die Zahl ist positiv.\n");
    } else if (num < 0) {
        printf("Die Zahl ist negativ.\n");
    }
    return 0;
}
```

```perl
my $num = -5;
if ($num > 0) {
    print "Die Zahl ist positiv.\n";
} elsif ($num < 0) {
    print "Die Zahl ist negativ.\n";
}
```