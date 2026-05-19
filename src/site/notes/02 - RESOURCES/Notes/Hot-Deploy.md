---
{"dg-publish":true,"permalink":"/02-resources/notes/hot-deploy/","tags":["informatik/code/java/framework"],"noteIcon":"","updated":"2026-05-19T13:40:19.195+02:00","dg-note-properties":{"aliases":["hot deploy","hot redeploy","hot deployment"],"created":"2026-05-19 19:00","links":null,"path":"Notes","tags":["informatik/code/java/framework"]}}
---

>[[02 - RESOURCES/Notes/Hot-Deploy\|Hot-Deploy]] = neue Version einer App **ohne Server-Restart** ausrollen.
>>In [[02 - RESOURCES/Notes/WildFly\|WildFly]] durch den [[02 - RESOURCES/Notes/Deployment-Scanner\|Deployment-Scanner]] umgesetzt.

# I. Wie es funktioniert
___
1. Du droppst `.war` in `standalone/deployments/`
2. [[02 - RESOURCES/Notes/Deployment-Scanner\|Deployment-Scanner]] poll alle 5 Sekunden
3. Findet neue/geänderte WAR → started Re-Deploy
4. Alte Version wird gestoppt (`WFLYSRV0028`)
5. Neue Version wird gestartet (`WFLYSRV0016` Replaced)

# II. Mein Workflow
___
```powershell
.\gradlew.bat build
Copy-Item .\build\libs\levi-ejb-learning.war `
          "C:\WildFly\standalone\deployments\" -Force
Get-Content "C:\WildFly\standalone\log\system.log" -Wait -Tail 50
```

>[!tip] .NET-Vergleich
>Bei IIS: `dotnet publish` + Restart der AppPool. Hier reicht ein `Copy-Item`.

# III. Sichtbare Effekte
___
Siehe [[02 - RESOURCES/Notes/Marker-Dateien\|Marker-Dateien]] und [[02 - RESOURCES/Notes/Log-Codes\|Log-Codes]].
