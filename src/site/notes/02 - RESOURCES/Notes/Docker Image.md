---
{"dg-publish":true,"permalink":"/02-resources/notes/docker-image/","tags":["informatik/virtualisierung/docker/images","informatik/virtualisierung/docker/grundlagen"],"noteIcon":"","updated":"2025-09-18T10:23:12.000+02:00"}
---


>[[02 - RESOURCES/Notes/Docker Image\|Docker Image]]s sind Blaupausen oder Vorlagen für [[02 - RESOURCES/Notes/Docker Container\|Docker Container]] - wie Fotos die nicht verändert werden können.
>>Enthalten alles was die Anwendung braucht: [[OS\|OS]], Libraries, Code und Konfiguration.

>[!info] Image Eigenschaften
>- **Read-only** - Unveränderlich nach Erstellung
>- **Layered** - Bestehen aus mehreren [[02 - RESOURCES/Notes/Layers\|Layers]]
>- **Versioniert** - Mit Tags wie `nginx:latest` oder `ubuntu:20.04`
>- **Portable** - Laufen überall wo [[02 - RESOURCES/Notes/Docker\|Docker]] installiert ist