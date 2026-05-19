---
{"dg-publish":true,"permalink":"/02-resources/notes/transaktion/","tags":["informatik/code/java/framework","informatik/datenbank"],"noteIcon":"","updated":"2026-05-19T13:41:37.968+02:00","dg-note-properties":{"aliases":["transaktion","transaction","tx"],"created":"2026-05-19 19:00","links":null,"path":"Notes","tags":["informatik/code/java/framework","informatik/datenbank"]}}
---

>Eine [[02 - RESOURCES/Notes/Transaktion\|Transaktion]] ist eine Einheit von Operationen, die **ganz oder gar nicht** wirken (Atomarität).
>>In [[02 - RESOURCES/Notes/Jakarta EE\|Jakarta EE]] meistens von [[02 - RESOURCES/Notes/CMT\|CMT]] verwaltet.

# I. ACID
___
| Buchstabe | Bedeutung |
|---|---|
| **A**tomicity | Alles oder nichts |
| **C**onsistency | DB bleibt in gültigem Zustand |
| **I**solation | Parallele TX stören sich nicht |
| **D**urability | Committet = dauerhaft |

# II. In Jakarta EE
___
- Bei [[02 - RESOURCES/Notes/@Stateless\|@Stateless]] mit [[02 - RESOURCES/Notes/CMT\|CMT]] = automatisch
- Methoden-Start = TX-Begin
- Methoden-Return = COMMIT
- [[02 - RESOURCES/Notes/RuntimeException\|RuntimeException]] = ROLLBACK
- [[02 - RESOURCES/Notes/Checked Exception\|Checked Exception]] = **KEIN** Rollback!

# III. Manuell mit BMT
___
```java
@TransactionManagement(TransactionManagementType.BEAN)
public class FooService {
    @Resource UserTransaction tx;

    public void doIt() throws Exception {
        tx.begin();
        try {
            // ...
            tx.commit();
        } catch (Exception e) {
            tx.rollback();
        }
    }
}
```

>[!tip] .NET-Vergleich
>Ähnlich `TransactionScope` mit `using`-Block.
