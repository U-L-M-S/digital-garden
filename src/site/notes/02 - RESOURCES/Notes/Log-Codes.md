---
{"dg-publish":true,"permalink":"/02-resources/notes/log-codes/","tags":["informatik/code/java/framework"],"noteIcon":"","updated":"2026-05-19T13:40:35.630+02:00","dg-note-properties":{"aliases":["wildfly log codes","log codes","wfly codes"],"created":"2026-05-19 19:00","links":null,"path":"Notes","tags":["informatik/code/java/framework"]}}
---

>[[02 - RESOURCES/Notes/Log-Codes\|Log-Codes]] sind die Präfixe in [[02 - RESOURCES/Notes/WildFly\|WildFly]]-Logs wie `WFLYSRV0010` oder `HHH000412`.
>>Sie zeigen, was beim Deploy gerade passiert.

# I. WildFly-Codes (`WFLY*`)
___
| Code | Bedeutung |
|---|---|
| `WFLYSRV0027` | Starting deployment |
| `WFLYWELD0003` | CDI verarbeitet ([[02 - RESOURCES/Notes/beans.xml\|beans.xml]]) |
| `WFLYEJB0473` | [[02 - RESOURCES/Notes/JNDI\|JNDI]]-Bindings angelegt |
| `WFLYJPA0002` | `persistence.xml` gelesen |
| `WFLYJPA0010` | [[02 - RESOURCES/Notes/Persistence Unit\|Persistence Unit]] startet (Phase 1+2) |
| `WFLYUT0021` | Web-Context registriert |
| `WFLYSRV0010` | Deployed ✓ |
| `WFLYSRV0016` | Replaced (Hot-Redeploy) |
| `WFLYSRV0028` | Stopped (bei Re-Deploy) |

# II. Hibernate-Codes (`HHH*`)
___
| Code | Bedeutung |
|---|---|
| `HHH000204` | Processing PersistenceUnitInfo |
| `HHH000412` | [[02 - RESOURCES/Notes/Hibernate\|Hibernate]]-Version |

# III. Lesen
___
```powershell
Get-Content "C:\WildFly\standalone\log\system.log" -Wait -Tail 50
```

>[!tip]
>Die meisten Codes sind online dokumentiert. Wenn ein Code unbekannt ist → googeln mit "wildfly WFLYxxx".
