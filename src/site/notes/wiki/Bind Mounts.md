---
{"dg-publish":true,"permalink":"/wiki/bind-mounts/","tags":["informatik/hardware","informatik/system"],"noteIcon":"","updated":"2026-07-19T03:56:26.000+02:00","dg-note-properties":{"aliases":["Host Mount"],"created_date":"2024-09-04","links":null,"tags":["informatik/hardware","informatik/system"]}}
---


>[[wiki/Bind Mounts\|Bind Mounts]] verbinden Host Verzeichnisse direkt mit [[wiki/Docker Container\|Docker Container]] Pfaden.
>>Ideal für Development da Änderungen am Code sofort im [[wiki/Docker Container\|Docker Container]] sichtbar sind.

>[!warning] Nachteile
>- Abhängig von Host Pfadstruktur
>- Nicht portabel zwischen verschiedenen Systemen
>- Sicherheitsrisiko da direkter Host Zugriff