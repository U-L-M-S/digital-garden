---
{"dg-publish":true,"permalink":"/02-resources/notes/containerisierung/","tags":["virtualisierung/container","docker/konzept"],"noteIcon":"","updated":"2025-09-04T16:13:29.648+02:00"}
---


>[[02 - RESOURCES/Notes/Containerisierung\|Containerisierung]] packt Anwendungen mit allen Abhängigkeiten in isolierte, portable [[02 - RESOURCES/Notes/Docker Container\|Docker Container]].
>>Teilt sich den [[OS\|OS]] Kernel aber isoliert Prozesse, Dateisystem und [[02 - RESOURCES/Notes/Netzwerk\|Netzwerk]].

>[!example] Vergleich
>- [[02 - RESOURCES/Notes/Virtuelle Maschinen\|Virtuelle Maschinen]]: Eigenes [[Betriebssystem\|Betriebssystem]] pro VM
>- [[02 - RESOURCES/Notes/Docker Container\|Docker Container]]: Gemeinsamer Kernel, isolierte Userspace