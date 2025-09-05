---
{"dg-publish":true,"permalink":"/02-resources/notes/docker-compose/","tags":["docker/compose","docker/orchestration"],"noteIcon":"","updated":"2025-09-05T10:12:29.034+02:00"}
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
