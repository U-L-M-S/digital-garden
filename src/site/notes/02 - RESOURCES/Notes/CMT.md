---
{"dg-publish":true,"permalink":"/02-resources/notes/cmt/","tags":["informatik/code/java/framework"],"noteIcon":"","updated":"2026-05-19T13:42:28.116+02:00","dg-note-properties":{"aliases":["Container Managed Transactions"],"created":"2026-05-19 19:00","links":null,"path":"Notes","tags":["informatik/code/java/framework"]}}
---

>[[02 - RESOURCES/Notes/CMT\|CMT]] (Container Managed Transactions) bedeutet: Der [[02 - RESOURCES/Notes/WildFly\|WildFly]]-Container öffnet und schließt [[02 - RESOURCES/Notes/Transaktion\|Transaktion]]en automatisch.
>>Du schreibst niemals `tx.begin()` / `tx.commit()`.

# I. Wie funktioniert es?
___
Bei einer [[02 - RESOURCES/Notes/@Stateless\|@Stateless]]-Bean ist CMT der Default. Der Container:
1. Öffnet die [[02 - RESOURCES/Notes/Transaktion\|Transaktion]] beim Methoden-Aufruf
2. Committet beim normalen Return
3. Rollbackt bei [[02 - RESOURCES/Notes/RuntimeException\|RuntimeException]]

# II. Exception-Verhalten
___
| Exception-Typ | Wirkung |
|---|---|
| [[02 - RESOURCES/Notes/RuntimeException\|RuntimeException]] / unchecked | **ROLLBACK** ✓ |
| [[02 - RESOURCES/Notes/Checked Exception\|Checked Exception]] | **KEIN Rollback** (Default!) |
| `@ApplicationException(rollback=true)` | ROLLBACK |

>[!warning]
>Eine [[02 - RESOURCES/Notes/Checked Exception\|Checked Exception]] (`IOException`, `SQLException`) löst **keinen** Rollback aus! Wenn du das willst: `throw new RuntimeException(...)`.

# III. CMT vs. BMT
___
| | [[02 - RESOURCES/Notes/CMT\|CMT]] (default) | BMT (`@TransactionManagement(BEAN)`) |
|---|---|---|
| Wer regelt TX? | Container | Du (`UserTransaction`) |
| Default für [[02 - RESOURCES/Notes/@Stateless\|@Stateless]] | ✅ | ❌ |

>[!tip] .NET-Vergleich
>Wie ein `TransactionScope`, aber der Scope ist die EJB-Methode.
