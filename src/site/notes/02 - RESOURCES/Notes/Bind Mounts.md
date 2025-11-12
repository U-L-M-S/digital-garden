---
{"dg-publish":true,"permalink":"/02-resources/notes/bind-mounts/","tags":["informatik/virtualisierung/docker/storage","informatik/virtualisierung/docker/development"],"noteIcon":"","updated":"2025-10-29T12:59:03.998+01:00"}
---


>[[02 - RESOURCES/Notes/Bind Mounts\|Bind Mounts]] verbinden Host Verzeichnisse direkt mit [[02 - RESOURCES/Notes/Docker Container\|Docker Container]] Pfaden.
>>Ideal für Development da Änderungen am Code sofort im [[02 - RESOURCES/Notes/Docker Container\|Docker Container]] sichtbar sind.

>[!warning] Nachteile
>- Abhängig von Host Pfadstruktur
>- Nicht portabel zwischen verschiedenen Systemen
>- Sicherheitsrisiko da direkter Host Zugriff