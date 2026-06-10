---
{"dg-publish":true,"permalink":"/02-resources/notes/deployment-scanner/","tags":["informatik/code/java/framework"],"noteIcon":"","updated":"2026-05-19T18:40:25.699+07:00","dg-note-properties":{"aliases":["deployment scanner","wildfly deployment scanner"],"created":"2026-05-19 19:00","links":null,"path":"Notes","tags":["informatik/code/java/framework"]}}
---

>Der [[02 - RESOURCES/Notes/Deployment-Scanner\|Deployment-Scanner]] ist ein [[02 - RESOURCES/Notes/WildFly\|WildFly]]-Subsystem, das den `deployments/`-Ordner überwacht.
>>Ermöglicht [[02 - RESOURCES/Notes/Hot-Deploy\|Hot-Deploy]] ohne Server-Restart.

# I. Wie funktioniert es?
___
- Default-Intervall: **5 Sekunden**
- Findet neue, geänderte oder entfernte `.war` / `.ear`-Dateien
- Schreibt [[02 - RESOURCES/Notes/Marker-Dateien\|Marker-Dateien]] als Status
- Triggert Deploy / Undeploy / Replace

# II. Konfiguration
___
In `standalone.xml`:
```xml
<subsystem xmlns="...:deployment-scanner:2.0">
    <deployment-scanner path="deployments"
                       relative-to="jboss.server.base.dir"
                       scan-interval="5000"/>
</subsystem>
```

# III. Workflow
___
```
.war kopiert ──> Scanner pollt ──> isdeploying ──> deployed ✓
                                                └─> failed ✗
```
