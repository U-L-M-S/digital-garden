---
{"dg-publish":true,"permalink":"/wiki/transaktion/","tags":["informatik/software","informatik/datenbank"],"noteIcon":"","updated":"2026-07-19T03:56:26.756+02:00","dg-note-properties":{"aliases":["transaktion","transaction","tx"],"created":"2026-05-19 19:00","links":null,"path":"Notes","tags":["informatik/software","informatik/datenbank"]}}
---

>Eine [[wiki/Transaktion\|Transaktion]] ist eine Einheit von Operationen, die **ganz oder gar nicht** wirken (Atomarität).
>>In [[wiki/Jakarta EE\|Jakarta EE]] meistens von [[wiki/CMT\|CMT]] verwaltet.

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
- Bei [[wiki/@Stateless\|@Stateless]] mit [[wiki/CMT\|CMT]] = automatisch
- Methoden-Start = TX-Begin
- Methoden-Return = COMMIT
- [[wiki/RuntimeException\|RuntimeException]] = ROLLBACK
- [[wiki/Checked Exception\|Checked Exception]] = **KEIN** Rollback!

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
