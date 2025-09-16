---
{"dg-publish":true,"permalink":"/02-resources/notes/containerisierung/","tags":["informatik/virtualisierung/docker/container","informatik/virtualisierung/docker/konzept"],"noteIcon":"","updated":"2025-09-10T16:50:46.525+02:00"}
---


>[[02 - RESOURCES/Notes/Containerisierung\|Containerisierung]] packt Anwendungen mit allen Abhängigkeiten in isolierte, portable [[02 - RESOURCES/Notes/Docker Container\|Docker Container]].
>>Teilt sich den [[OS\|OS]] Kernel aber isoliert Prozesse, Dateisystem und [[02 - RESOURCES/Notes/Netzwerk\|Netzwerk]].

>[!example] Vergleich
>- [[02 - RESOURCES/Notes/Virtuelle Maschinen\|Virtuelle Maschinen]]: Eigenes [[02 - RESOURCES/Notes/Betriebssystem\|Betriebssystem]] pro VM
>- [[02 - RESOURCES/Notes/Docker Container\|Docker Container]]: Gemeinsamer Kernel, isolierte Userspace