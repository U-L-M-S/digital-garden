---
{"dg-publish":true,"permalink":"/02-resources/notes/if-bedingung/","tags":["informatik/code"],"noteIcon":"","updated":"2025-10-29T12:59:06.000+01:00"}
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
