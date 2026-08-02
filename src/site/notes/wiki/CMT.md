---
{"dg-publish":true,"permalink":"/wiki/cmt/","tags":["informatik/software"],"noteIcon":"","updated":"2026-07-19T03:56:26.814+02:00","dg-note-properties":{"aliases":["Container Managed Transactions"],"created":"2026-05-19 19:00","links":null,"path":"Notes","tags":["informatik/software"]}}
---

>[[wiki/CMT\|CMT]] (Container Managed Transactions) bedeutet: Der [[wiki/WildFly\|WildFly]]-Container öffnet und schließt [[wiki/Transaktion\|Transaktion]]en automatisch.
>>Du schreibst niemals `tx.begin()` / `tx.commit()`.

# I. Wie funktioniert es?
___
Bei einer [[wiki/@Stateless\|@Stateless]]-Bean ist CMT der Default. Der Container:
1. Öffnet die [[wiki/Transaktion\|Transaktion]] beim Methoden-Aufruf
2. Committet beim normalen Return
3. Rollbackt bei [[wiki/RuntimeException\|RuntimeException]]

# II. Exception-Verhalten
___
| Exception-Typ | Wirkung |
|---|---|
| [[wiki/RuntimeException\|RuntimeException]] / unchecked | **ROLLBACK** ✓ |
| [[wiki/Checked Exception\|Checked Exception]] | **KEIN Rollback** (Default!) |
| `@ApplicationException(rollback=true)` | ROLLBACK |

>[!warning]
>Eine [[wiki/Checked Exception\|Checked Exception]] (`IOException`, `SQLException`) löst **keinen** Rollback aus! Wenn du das willst: `throw new RuntimeException(...)`.

# III. CMT vs. BMT
___
| | [[wiki/CMT\|CMT]] (default) | BMT (`@TransactionManagement(BEAN)`) |
|---|---|---|
| Wer regelt TX? | Container | Du (`UserTransaction`) |
| Default für [[wiki/@Stateless\|@Stateless]] | ✅ | ❌ |

>[!tip] .NET-Vergleich
>Wie ein `TransactionScope`, aber der Scope ist die EJB-Methode.
