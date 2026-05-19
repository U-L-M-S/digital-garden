---
{"dg-publish":true,"permalink":"/02-resources/notes/marker-dateien/","tags":["informatik/code/java/framework"],"noteIcon":"","updated":"2026-05-19T13:40:26.789+02:00","dg-note-properties":{"aliases":["marker dateien","marker files","wildfly markers"],"created":"2026-05-19 19:00","links":null,"path":"Notes","tags":["informatik/code/java/framework"]}}
---

>[[02 - RESOURCES/Notes/Marker-Dateien\|Marker-Dateien]] sind leere Dateien neben einer `.war`, die den Deployment-Status anzeigen.
>>Werden vom [[02 - RESOURCES/Notes/Deployment-Scanner\|Deployment-Scanner]] automatisch erstellt.

# I. Übersicht
___
| Marker | Bedeutung |
|---|---|
| `.war.deployed` | ✅ erfolgreich live |
| `.war.failed` | ❌ Fehler (Log lesen!) |
| `.war.isdeploying` | ⏳ läuft gerade |
| `.war.undeployed` | ⏸️ gestoppt |
| `.war.dodeploy` | 🚀 manuelles Auslösen |

# II. Praktischer Nutzen
___
```powershell
# Status prüfen
Get-ChildItem "C:\WildFly\standalone\deployments\" -Filter "levi-ejb-learning.war*"

# Force-Redeploy manuell triggern
New-Item "C:\WildFly\standalone\deployments\levi-ejb-learning.war.dodeploy"

# Undeploy
Remove-Item "C:\WildFly\standalone\deployments\levi-ejb-learning.war*"
```

>[!tip]
>Wenn `.failed` da ist → in `system.log` schauen, nicht raten.
