---
{"dg-publish":true,"permalink":"/wiki/checked-exception/","tags":["informatik/programmierung/sprachen/java"],"noteIcon":"","updated":"2026-07-02T13:17:19.699+02:00","dg-note-properties":{"aliases":["checked exception","checked exceptions"],"created":"2026-05-19 19:00","links":null,"path":"Notes","tags":["informatik/programmierung/sprachen/java"]}}
---

>Eine [[wiki/Checked Exception\|Checked Exception]] ist eine Exception in [[wiki/Java\|Java]], die der Compiler dich zwingt zu behandeln.
>>Entweder `try/catch` oder `throws` im Methoden-Signatur.

# I. Beispiele
___
- `IOException`
- `SQLException`
- `ClassNotFoundException`
- `NamingException`

# II. Achtung bei CMT
___
>[!warning] Denk-Falle 8 (siehe [[wiki/Enterprise Java Bean\|Enterprise Java Bean]])
>Eine [[wiki/Checked Exception\|Checked Exception]] löst bei [[wiki/CMT\|CMT]] **keinen Rollback** aus. Wenn du Rollback willst:
>- `throw new RuntimeException(...)` daraus machen
>- ODER `@ApplicationException(rollback = true)` auf deine eigene Exception setzen

# III. Behandlung
___
```java
public void doStuff() throws IOException {        // option 1: weiterreichen
    // ...
}

public void doStuff() {                            // option 2: fangen
    try { /* ... */ }
    catch (IOException e) { /* ... */ }
}
```

# IV. .NET-Vergleich
___
.NET hat **keine** Checked Exceptions — alle Exceptions sind unchecked.
