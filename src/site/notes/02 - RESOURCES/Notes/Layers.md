---
{"dg-publish":true,"permalink":"/02-resources/notes/layers/","tags":["docker/images","docker/storage"],"noteIcon":"","updated":"2025-09-05T10:12:30.464+02:00"}
---


>[[02 - RESOURCES/Notes/Layers\|Layers]] sind Schichten aus denen [[02 - RESOURCES/Notes/Docker Image\|Docker Image]]s aufgebaut sind.
>>Jeder Befehl im [[02 - RESOURCES/Notes/Dockerfile\|Dockerfile]] erstellt eine neue [[Layer\|Layer]] - wie Zwiebel Schichten.

>[!tip] Layer Caching
>- Unveränderliche [[02 - RESOURCES/Notes/Layers\|Layers]] werden gecacht
>- Nur geänderte [[02 - RESOURCES/Notes/Layers\|Layers]] werden neu gebaut
>- Reihenfolge im [[02 - RESOURCES/Notes/Dockerfile\|Dockerfile]] wichtig für Cache Effizienz
>- Gemeinsame [[02 - RESOURCES/Notes/Layers\|Layers]] zwischen [[Images\|Images]] sparen Speicher