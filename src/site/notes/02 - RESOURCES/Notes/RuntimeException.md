---
{"dg-publish":true,"permalink":"/02-resources/notes/runtime-exception/","tags":["informatik/code/java"],"noteIcon":"","updated":"2026-05-19T18:41:31.780+07:00","dg-note-properties":{"aliases":["runtime exception","unchecked exception"],"created":"2026-05-19 19:00","links":null,"path":"Notes","tags":["informatik/code/java"]}}
---

>[[02 - RESOURCES/Notes/RuntimeException\|RuntimeException]] ist eine **unchecked** Exception in [[02 - RESOURCES/Notes/Java\|Java]].
>>Muss **nicht** im Methoden-Signatur deklariert werden — der Compiler zwingt dich nicht.

# I. Beispiele
___
- `NullPointerException`
- `IllegalArgumentException`
- `ArithmeticException`
- `IndexOutOfBoundsException`

# II. Verhalten bei CMT
___
In [[02 - RESOURCES/Notes/Jakarta EE\|Jakarta EE]] mit [[02 - RESOURCES/Notes/CMT\|CMT]]:
- [[02 - RESOURCES/Notes/RuntimeException\|RuntimeException]] = automatischer **Rollback** ✓
- [[02 - RESOURCES/Notes/Checked Exception\|Checked Exception]] = **KEIN Rollback** (Default!)

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
| | [[02 - RESOURCES/Notes/RuntimeException\|RuntimeException]] | [[02 - RESOURCES/Notes/Checked Exception\|Checked Exception]] |
|---|---|---|
| Compiler erzwingt `try/catch`? | ❌ | ✅ |
| `throws` im Signatur? | optional | Pflicht |
| Rollback bei [[02 - RESOURCES/Notes/CMT\|CMT]]? | ✅ | ❌ |
