---
{"dg-publish":true,"permalink":"/wiki/deployment-scanner/","tags":["informatik/software"],"noteIcon":"","updated":"2026-07-19T03:56:26.919+02:00","dg-note-properties":{"aliases":["deployment scanner","wildfly deployment scanner"],"created":"2026-05-19 19:00","links":null,"path":"Notes","tags":["informatik/software"]}}
---

>Der [[wiki/Deployment-Scanner\|Deployment-Scanner]] ist ein [[wiki/WildFly\|WildFly]]-Subsystem, das den `deployments/`-Ordner überwacht.
>>Ermöglicht [[wiki/Hot-Deploy\|Hot-Deploy]] ohne Server-Restart.

# I. Wie funktioniert es?
___
- Default-Intervall: **5 Sekunden**
- Findet neue, geänderte oder entfernte `.war` / `.ear`-Dateien
- Schreibt [[wiki/Marker-Dateien\|Marker-Dateien]] als Status
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
