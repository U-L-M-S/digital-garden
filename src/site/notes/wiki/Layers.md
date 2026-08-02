---
{"dg-publish":true,"permalink":"/wiki/layers/","tags":["informatik/system","informatik/hardware"],"noteIcon":"","updated":"2026-07-19T03:56:26.897+02:00","dg-note-properties":{"aliases":["Image Layers","Docker Layers"],"created_date":"2024-09-04","links":null,"tags":["informatik/system","informatik/hardware"]}}
---


>[[wiki/Layers\|Layers]] sind Schichten aus denen [[wiki/Docker Image\|Docker Image]]s aufgebaut sind.
>>Jeder Befehl im [[wiki/Dockerfile\|Dockerfile]] erstellt eine neue [[Layer\|Layer]] - wie Zwiebel Schichten.

>[!tip] Layer Caching
>- Unveränderliche [[wiki/Layers\|Layers]] werden gecacht
>- Nur geänderte [[wiki/Layers\|Layers]] werden neu gebaut
>- Reihenfolge im [[wiki/Dockerfile\|Dockerfile]] wichtig für Cache Effizienz
>- Gemeinsame [[wiki/Layers\|Layers]] zwischen [[Images\|Images]] sparen Speicher