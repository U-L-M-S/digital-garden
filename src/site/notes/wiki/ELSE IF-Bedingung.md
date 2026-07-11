---
{"dg-publish":true,"permalink":"/wiki/else-if-bedingung/","tags":["informatik/programmierung"],"noteIcon":"","updated":"2026-07-02T13:17:19.000+02:00","dg-note-properties":{"aliases":["ELSE IF"],"created_date":"2024-10-25","links":null,"tags":["informatik/programmierung"]}}
---

>Eine `else if`-Bedingung prüft eine zusätzliche Bedingung, falls die vorherige [[wiki/IF-Bedingung\|if-Bedingung]] **falsch** war. 
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