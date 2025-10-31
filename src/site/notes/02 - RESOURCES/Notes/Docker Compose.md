---
{"dg-publish":true,"permalink":"/02-resources/notes/docker-compose/","tags":["informatik/virtualisierung/docker/compose","informatik/virtualisierung/docker/orchestration"],"noteIcon":"","updated":"2025-10-29T12:59:05.377+01:00"}
---

>[[02 - RESOURCES/Notes/Docker Compose\|Docker Compose]] orchestriert mehrere [[02 - RESOURCES/Notes/Docker Container\|Docker Container]] mit einer einzigen [[02 - RESOURCES/Notes/YAML\|YAML]] Datei.
>>Perfekt für Anwendungen die mehrere Services brauchen wie Web App + [[02 - RESOURCES/Notes/Datenbank\|Datenbank]] + [[02 - RESOURCES/Notes/Cache\|Cache]].

>[!example] Typischer Stack
>```yaml
>services:
>  web:
>    image: nginx
>  db:
>    image: postgres
>  redis:
>    image: redis
>```
