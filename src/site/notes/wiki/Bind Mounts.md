---
{"dg-publish":true,"permalink":"/wiki/bind-mounts/","tags":["informatik/virtualisierung/docker/storage","informatik/virtualisierung/docker/development"],"noteIcon":"","updated":"2025-10-29T12:59:03.000+01:00","dg-note-properties":{"aliases":["Host Mount"],"created_date":"2024-09-04","links":null,"tags":["informatik/virtualisierung/docker/storage","informatik/virtualisierung/docker/development"]}}
---


>[[wiki/Bind Mounts\|Bind Mounts]] verbinden Host Verzeichnisse direkt mit [[wiki/Docker Container\|Docker Container]] Pfaden.
>>Ideal für Development da Änderungen am Code sofort im [[wiki/Docker Container\|Docker Container]] sichtbar sind.

>[!warning] Nachteile
>- Abhängig von Host Pfadstruktur
>- Nicht portabel zwischen verschiedenen Systemen
>- Sicherheitsrisiko da direkter Host Zugriff