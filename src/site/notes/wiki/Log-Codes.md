---
{"dg-publish":true,"permalink":"/wiki/log-codes/","tags":["informatik/software"],"noteIcon":"","updated":"2026-07-19T03:56:26.767+02:00","dg-note-properties":{"aliases":["wildfly log codes","log codes","wfly codes"],"created":"2026-05-19 19:00","links":null,"path":"Notes","tags":["informatik/software"]}}
---

>[[wiki/Log-Codes\|Log-Codes]] sind die Präfixe in [[wiki/WildFly\|WildFly]]-Logs wie `WFLYSRV0010` oder `HHH000412`.
>>Sie zeigen, was beim Deploy gerade passiert.

# I. WildFly-Codes (`WFLY*`)
___
| Code | Bedeutung |
|---|---|
| `WFLYSRV0027` | Starting deployment |
| `WFLYWELD0003` | CDI verarbeitet ([[wiki/beans.xml\|beans.xml]]) |
| `WFLYEJB0473` | [[wiki/JNDI\|JNDI]]-Bindings angelegt |
| `WFLYJPA0002` | `persistence.xml` gelesen |
| `WFLYJPA0010` | [[wiki/Persistence Unit\|Persistence Unit]] startet (Phase 1+2) |
| `WFLYUT0021` | Web-Context registriert |
| `WFLYSRV0010` | Deployed ✓ |
| `WFLYSRV0016` | Replaced (Hot-Redeploy) |
| `WFLYSRV0028` | Stopped (bei Re-Deploy) |

# II. Hibernate-Codes (`HHH*`)
___
| Code | Bedeutung |
|---|---|
| `HHH000204` | Processing PersistenceUnitInfo |
| `HHH000412` | [[wiki/Hibernate\|Hibernate]]-Version |

# III. Lesen
___
```powershell
Get-Content "C:\WildFly\standalone\log\system.log" -Wait -Tail 50
```

>[!tip]
>Die meisten Codes sind online dokumentiert. Wenn ein Code unbekannt ist → googeln mit "wildfly WFLYxxx".
