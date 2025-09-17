---
{"dg-publish":true,"permalink":"/02-resources/notes/docker-networking/","tags":["informatik/virtualisierung/docker/networking","informatik/netzwerk/virtuell"],"noteIcon":"","updated":"2025-09-10T16:40:27.000+02:00"}
---


>[[02 - RESOURCES/Notes/Docker Networking\|Docker Networking]] erstellt virtuelle [[Netzwerke\|Netzwerke]] damit [[02 - RESOURCES/Notes/Docker Container\|Docker Container]] miteinander kommunizieren können.
>>Jeder [[02 - RESOURCES/Notes/Docker Container\|Docker Container]] bekommt eigene [[02 - RESOURCES/Notes/IP-Adresse\|IP-Adresse]] in seinem [[02 - RESOURCES/Notes/Netzwerk\|Netzwerk]] - wie ein virtuelles LAN.

>[!info] Netzwerk Modi
>- **Bridge** - Standard, [[02 - RESOURCES/Notes/Docker Container\|Docker Container]] auf gleicher Maschine
>- **Host** - Nutzt Host [[02 - RESOURCES/Notes/Netzwerk\|Netzwerk]] direkt
>- **None** - Kein [[02 - RESOURCES/Notes/Netzwerk\|Netzwerk]], komplette Isolation
>- **Overlay** - Multi-Host für [[02 - RESOURCES/Notes/Docker Swarm\|Docker Swarm]]