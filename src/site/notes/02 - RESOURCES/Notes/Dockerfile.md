---
{"dg-publish":true,"permalink":"/02-resources/notes/dockerfile/","tags":["docker/build","docker/images"],"noteIcon":"","updated":"2025-09-05T10:12:29.074+02:00"}
---


>[[02 - RESOURCES/Notes/Dockerfile\|Dockerfile]] ist eine Textdatei mit Anweisungen wie ein [[02 - RESOURCES/Notes/Docker Image\|Docker Image]] gebaut werden soll.
>>Wie ein Kochrezept das Schritt für Schritt erklärt was in den [[Container\|Container]] gehört.

>[!example] Wichtige Befehle
>- `FROM` - Basis [[Image\|Image]] festlegen
>- `RUN` - Befehle ausführen beim Build
>- `COPY` - Dateien kopieren
>- `WORKDIR` - Arbeitsverzeichnis setzen
>- `EXPOSE` - Port dokumentieren
>- `CMD` - Standard Startbefehl