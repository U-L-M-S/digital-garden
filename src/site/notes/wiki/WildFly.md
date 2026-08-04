---
{"dg-publish":true,"permalink":"/wiki/wild-fly/","tags":["informatik/system","muckenhirn"],"noteIcon":"","updated":"2026-08-04T10:40:05.675+02:00","dg-note-properties":{"aliases":["JBoss","wildfly","wildfly server"],"created":"2026-05-19 19:00","links":"https://www.wildfly.org/","path":"Notes","tags":["informatik/system","muckenhirn"]}}
---

>[[wiki/WildFly\|WildFly]] ist ein [[wiki/Jakarta EE\|Jakarta EE]]-[[Application Server\|Application Server]] von Red Hat (früher JBoss).
>>Bei [[inbox/Muckenhirn Automation GmbH\|Muckenhirn Automation GmbH]] nutze ich WildFly 30.0.1 mit [[wiki/Java\|Java]] 17.

# I. Was ist das?
___
WildFly ist die Runtime, in der meine `.war`- und `.ear`-Apps laufen. Er liefert:
- [[wiki/Enterprise Java Bean\|EJB]]-Container
- [[wiki/CDI\|CDI]] (via Weld)
- [[wiki/JPA\|JPA]] (via [[wiki/Hibernate\|Hibernate]])
- [[wiki/JNDI\|JNDI]]-Verzeichnis
- HTTP-Listener (Undertow)
- [[wiki/Datasource\|Datasource]]-Pool

# II. Meine Konfig
___
- Ports: HTTP 7070, HTTPS 8443, Management 9990
- Bindung: 127.0.0.1 (nur lokal)
- Logs: `standalone/log/system.log`
- Deployments: `standalone/deployments/`

# III. Steuerung
___
- [[wiki/JBoss-CLI\|JBoss-CLI]] (`jboss-cli.bat`) für Konfig-Änderungen
- [[wiki/Deployment-Scanner\|Deployment-Scanner]] poll alle 5s den `deployments/`-Ordner → [[wiki/Hot-Deploy\|Hot-Deploy]]
- [[wiki/Log-Codes\|Log-Codes]] (`WFLYSRV0010`, `WFLYJPA0010` ...) zeigen Status

>[!tip]
>Siehe auch: [[inbox/Muckenhirn WildFly konfigurieren\|Muckenhirn WildFly konfigurieren]] und [[inbox/Phase 1 - Jakarta EE Grundlagen\|Phase 1 - Jakarta EE Grundlagen]].
