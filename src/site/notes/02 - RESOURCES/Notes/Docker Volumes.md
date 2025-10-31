---
{"dg-publish":true,"permalink":"/02-resources/notes/docker-volumes/","tags":["informatik/virtualisierung/docker/storage","informatik/virtualisierung/docker/persistence"],"noteIcon":"","updated":"2025-10-29T12:59:05.427+01:00"}
---


>[[02 - RESOURCES/Notes/Docker Volumes\|Docker Volumes]] sind [[02 - RESOURCES/Notes/Docker\|Docker]]s Art Daten dauerhaft zu speichern außerhalb des [[02 - RESOURCES/Notes/Docker Container\|Docker Container]]s.
>>Ohne [[Volumes\|Volumes]] gehen alle Daten verloren wenn der [[02 - RESOURCES/Notes/Docker Container\|Docker Container]] gelöscht wird.

>[!important] Volume Typen
>- **[[02 - RESOURCES/Notes/Named Volumes\|Named Volumes]]** - Von [[02 - RESOURCES/Notes/Docker\|Docker]] verwaltete [[Volumes\|Volumes]]
>- **[[02 - RESOURCES/Notes/Bind Mounts\|Bind Mounts]]** - Host Verzeichnisse in [[02 - RESOURCES/Notes/Docker Container\|Docker Container]] einbinden
>- **[[tmpfs Mounts\|tmpfs Mounts]]** - Temporärer Speicher im [[02 - RESOURCES/Notes/RAM\|RAM]]