---
{"dg-publish":true,"permalink":"/02-resources/notes/else-bedingung/","tags":["informatik/code"],"noteIcon":"","updated":"2025-09-10T16:33:00.545+02:00"}
---

>Eine [[else\|else]]-Bedingung wird verwendet, um einen **Codeblock** auszuführen, wenn die vorhergehende `if`-Bedingung **falsch** ist. 
>Sie bietet eine Alternative und ermöglicht es, verschiedene Aktionen basierend auf den Bedingungen zu definieren.
>>Wenn die [[02 - RESOURCES/Notes/IF-Bedingung\|if-Bedingung]] nicht erfüllt wird, springt das Programm direkt zum `else`-Codeblock und führt diesen aus.

```python
num = -5
if num > 0:
    print("Die Zahl ist positiv.")
else:
    print("Die Zahl ist nicht positiv.")
```

```java
int num = -5;
if (num > 0) {
    System.out.println("Die Zahl ist positiv.");
} else {
    System.out.println("Die Zahl ist nicht positiv.");
}
```

```js
let num = -5;
if (num > 0) {
    console.log("Die Zahl ist positiv.");
} else {
    console.log("Die Zahl ist nicht positiv.");
}
```

```bash
num=-5
if [ "$num" -gt 0 ]; then
    echo "Die Zahl ist positiv."
else
    echo "Die Zahl ist nicht positiv."
fi
```

```c
#include <stdio.h>

int main() {
    int num = -5;
    if (num > 0) {
        printf("Die Zahl ist positiv.\n");
    } else {
        printf("Die Zahl ist nicht positiv.\n");
    }
    return 0;
}
```

```perl
my $num = -5;
if ($num > 0) {
    print "Die Zahl ist positiv.\n";
} else {
    print "Die Zahl ist nicht positiv.\n";
}
```