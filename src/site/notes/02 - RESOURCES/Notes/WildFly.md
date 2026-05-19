---
{"dg-publish":true,"permalink":"/02-resources/notes/wild-fly/","tags":["informatik/code/java/server","muckenhirn"],"noteIcon":"","updated":"2026-05-19T13:35:50.032+02:00","dg-note-properties":{"aliases":["JBoss","wildfly","wildfly server"],"created":"2026-05-19 19:00","links":"https://www.wildfly.org/","path":"Notes","tags":["informatik/code/java/server","muckenhirn"]}}
---

>[[02 - RESOURCES/Notes/WildFly\|WildFly]] ist ein [[02 - RESOURCES/Notes/Jakarta EE\|Jakarta EE]]-[[Application Server\|Application Server]] von Red Hat (früher JBoss).
>>Bei [[02 - RESOURCES/Notes/Muckenhirn\|Muckenhirn]] nutze ich WildFly 30.0.1 mit [[02 - RESOURCES/Notes/Java\|Java]] 17.

# I. Was ist das?
___
WildFly ist die Runtime, in der meine `.war`- und `.ear`-Apps laufen. Er liefert:
- [[02 - RESOURCES/Notes/Enterprise Java Bean\|EJB]]-Container
- [[02 - RESOURCES/Notes/CDI\|CDI]] (via Weld)
- [[02 - RESOURCES/Notes/JPA\|JPA]] (via [[02 - RESOURCES/Notes/Hibernate\|Hibernate]])
- [[02 - RESOURCES/Notes/JNDI\|JNDI]]-Verzeichnis
- HTTP-Listener (Undertow)
- [[02 - RESOURCES/Notes/Datasource\|Datasource]]-Pool

# II. Meine Konfig
___
- Ports: HTTP 7070, HTTPS 8443, Management 9990
- Bindung: 127.0.0.1 (nur lokal)
- Logs: `standalone/log/system.log`
- Deployments: `standalone/deployments/`

# III. Steuerung
___
- [[02 - RESOURCES/Notes/JBoss-CLI\|JBoss-CLI]] (`jboss-cli.bat`) für Konfig-Änderungen
- [[02 - RESOURCES/Notes/Deployment-Scanner\|Deployment-Scanner]] poll alle 5s den `deployments/`-Ordner → [[02 - RESOURCES/Notes/Hot-Deploy\|Hot-Deploy]]
- [[02 - RESOURCES/Notes/Log-Codes\|Log-Codes]] (`WFLYSRV0010`, `WFLYJPA0010` ...) zeigen Status

>[!tip]
>Siehe auch: [[02 - RESOURCES/Notes/Muckenhirn WildFly konfigurieren\|Muckenhirn WildFly konfigurieren]] und [[02 - RESOURCES/Notes/Phase 1 - Jakarta EE Grundlagen\|Phase 1 - Jakarta EE Grundlagen]].
