---
{"dg-publish":true,"permalink":"/02-resources/notes/if-bedingung/","tags":["informatik/programmierung"],"noteIcon":"","updated":"2026-07-02T13:17:19.767+02:00","dg-note-properties":{"aliases":["IF-Bedingung"],"created_date":"2024-10-25","links":null,"tags":["informatik/programmierung"]}}
---

>Eine `if`-Bedingung prüft, ob eine bestimmte Bedingung wahr ist. 
>>Wenn ja, führt der Code den zugehörigen **Codeblock** aus – eine Gruppe von Anweisungen, die nur unter dieser Bedingung abläuft.

```python
num = 15
if num > 10:
    print("Die Zahl ist größer als 10.")
```

```java
int num = 15;
if (num > 10) {
    System.out.println("Die Zahl ist größer als 10.");
}
```

```js
let num = 15;
if (num > 10) {
    console.log("Die Zahl ist größer als 10.");
}
```

```bash
num=15
if [ "$num" -gt 10 ]; then
    echo "Die Zahl ist größer als 10."
fi
```

```c
#include <stdio.h>

int main() {
    int num = 15;
    if (num > 10) {
        printf("Die Zahl ist größer als 10.\n");
    }
    return 0;
}
```

```perl
my $num = 15;
if ($num > 10) {
    print "Die Zahl ist größer als 10.\n";
}
```
