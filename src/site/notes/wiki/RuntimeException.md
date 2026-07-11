---
{"dg-publish":true,"permalink":"/wiki/runtime-exception/","tags":["informatik/programmierung/sprachen/java"],"noteIcon":"","updated":"2026-07-02T13:17:19.000+02:00","dg-note-properties":{"aliases":["runtime exception","unchecked exception"],"created":"2026-05-19 19:00","links":null,"path":"Notes","tags":["informatik/programmierung/sprachen/java"]}}
---

>[[wiki/RuntimeException\|RuntimeException]] ist eine **unchecked** Exception in [[wiki/Java\|Java]].
>>Muss **nicht** im Methoden-Signatur deklariert werden — der Compiler zwingt dich nicht.

# I. Beispiele
___
- `NullPointerException`
- `IllegalArgumentException`
- `ArithmeticException`
- `IndexOutOfBoundsException`

# II. Verhalten bei CMT
___
In [[wiki/Jakarta EE\|Jakarta EE]] mit [[wiki/CMT\|CMT]]:
- [[wiki/RuntimeException\|RuntimeException]] = automatischer **Rollback** ✓
- [[wiki/Checked Exception\|Checked Exception]] = **KEIN Rollback** (Default!)

```java
@Stateless
public class FooService {
    public void doIt() {
        throw new RuntimeException("oops");
        // → Container rollbackt die TX automatisch
    }
}
```

# III. Unterschied zu Checked
___
| | [[wiki/RuntimeException\|RuntimeException]] | [[wiki/Checked Exception\|Checked Exception]] |
|---|---|---|
| Compiler erzwingt `try/catch`? | ❌ | ✅ |
| `throws` im Signatur? | optional | Pflicht |
| Rollback bei [[wiki/CMT\|CMT]]? | ✅ | ❌ |
