---
{"dg-publish":true,"permalink":"/02-resources/notes/variable/","tags":["code"],"noteIcon":"","updated":"2024-08-25T23:16:43.651+02:00"}
---

>Es ist ein **Placeholder** für ein Wert.

```python
# Integer
num = 42

# Float
pi = 3.14

# String
text = "Hello, World!"

# Boolean
is_valid = True

```

```c
#include <stdio.h>

int main() {
    // Integer
    int num = 42;

    // Float
    float pi = 3.14f;

    // Double
    double e = 2.718;

    // String (char array)
    char text[] = "Hello, World!";

    // Boolean (C99 und später)
    _Bool isValid = 1; // 1 für true, 0 für false

    // Ausgabe
    printf("%d\n", num);
    printf("%f\n", pi);
    printf("%s\n", text);
    printf("%d\n", isValid);

    return 0;
}
```

```perl
#!/usr/bin/perl
use strict;
use warnings;

# Integer
my $num = 42;

# Float
my $pi = 3.14;

# String
my $text = "Hello, World!";

# Boolean (in Perl, boolean values are just integers: 0 is false, anything else is true)
my $is_valid = 1; # 1 für true, 0 für false

# Ausgabe
print "$num\n";
print "$pi\n";
print "$text\n";
print "$is_valid\n";

```

```javascript
// Integer
let num = 42;

// Float
let pi = 3.14;

// String
let text = "Hello, World!";

// Boolean
let isValid = true;

// Ausgabe
console.log(num);
console.log(pi);
console.log(text);
console.log(isValid);
```

```java
public class Main {
    public static void main(String[] args) {
        // Integer
        int num = 42;

        // Float
        float pi = 3.14f;

        // Double
        double e = 2.718;

        // String
        String text = "Hello, World!";

        // Boolean
        boolean isValid = true;

        // Ausgabe
        System.out.println(num);
        System.out.println(pi);
        System.out.println(text);
        System.out.println(isValid);
    }
}
```
