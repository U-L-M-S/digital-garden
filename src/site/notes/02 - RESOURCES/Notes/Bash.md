---
{"dg-publish":true,"permalink":"/02-resources/notes/bash/","tags":["scripting/unix","shell/linux"],"noteIcon":"","updated":"2025-09-16T23:41:26.708+02:00"}
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