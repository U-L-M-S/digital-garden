---
{"dg-publish":true,"permalink":"/02-resources/notes/bind-mounts/","tags":["docker/storage","docker/development"],"noteIcon":"","updated":"2025-09-05T10:12:28.440+02:00"}
---


>[[02 - RESOURCES/Notes/Bind Mounts\|Bind Mounts]] verbinden Host Verzeichnisse direkt mit [[02 - RESOURCES/Notes/Docker Container\|Docker Container]] Pfaden.
>>Ideal für Development da Änderungen am Code sofort im [[02 - RESOURCES/Notes/Docker Container\|Docker Container]] sichtbar sind.

>[!warning] Nachteile
>- Abhängig von Host Pfadstruktur
>- Nicht portabel zwischen verschiedenen Systemen
>- Sicherheitsrisiko da direkter Host Zugriff