---
{"dg-publish":true,"permalink":"/02-resources/notes/bash/","tags":["informatik/programmierung/sprachen/bash"],"noteIcon":"","updated":"2026-07-02T13:17:19.644+02:00","dg-note-properties":{"tags":["informatik/programmierung/sprachen/bash"],"aliases":["Bash-Shell","Bourne Again Shell"],"links":null,"created_date":"2025-09-16"}}
---


>[[02 - RESOURCES/Notes/Bash\|Bash]] (Bourne Again Shell) ist die Standard-Shell und Scripting-Sprache für Unix/Linux-Systeme.

>>Sie ermöglicht interaktive Kommandozeilenbedienung und Automatisierung durch Skripte.

>[!important] 
>**Bash-Features:**
>- Command-Line-Interface
>- Piping und Redirection
>- Umgebungsvariablen
>- Scripting-Funktionen

>[!example] 
>```bash
>#!/bin/bash
># Log-Dateien archivieren
>find /var/log -name "*.log" -mtime +7 -exec gzip {} \;
>
># System-Info
>echo "Disk Usage: $(df -h | grep '/dev/sda1')"
>```

>[!success] 
>Unverzichtbar für Linux-Administration und DevOps.