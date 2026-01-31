---
{"dg-publish":true,"permalink":"/02-resources/notes/bash/","tags":["informatik/code/bash"],"noteIcon":"","updated":"2025-10-29T12:59:03.258+01:00"}
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