---
{"dg-publish":true,"permalink":"/02-resources/notes/checked-exception/","tags":["informatik/code/java"],"noteIcon":"","updated":"2026-05-19T18:41:34.682+07:00","dg-note-properties":{"aliases":["checked exception","checked exceptions"],"created":"2026-05-19 19:00","links":null,"path":"Notes","tags":["informatik/code/java"]}}
---

>Eine [[02 - RESOURCES/Notes/Checked Exception\|Checked Exception]] ist eine Exception in [[02 - RESOURCES/Notes/Java\|Java]], die der Compiler dich zwingt zu behandeln.
>>Entweder `try/catch` oder `throws` im Methoden-Signatur.

# I. Beispiele
___
- `IOException`
- `SQLException`
- `ClassNotFoundException`
- `NamingException`

# II. Achtung bei CMT
___
>[!warning] Denk-Falle 8 (siehe [[02 - RESOURCES/Notes/Enterprise Java Bean\|Enterprise Java Bean]])
>Eine [[02 - RESOURCES/Notes/Checked Exception\|Checked Exception]] löst bei [[02 - RESOURCES/Notes/CMT\|CMT]] **keinen Rollback** aus. Wenn du Rollback willst:
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
