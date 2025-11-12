---
{"dg-publish":true,"permalink":"/02-resources/notes/virtuelle-maschinen/","tags":["informatik/virtualisierung/vm","infrastruktur/grundlagen"],"noteIcon":"","updated":"2025-10-29T12:59:11.201+01:00"}
---

>[[02 - RESOURCES/Notes/Virtuelle Maschinen\|Virtuelle Maschinen]] simulieren komplette Computer mit eigenem [[02 - RESOURCES/Notes/Betriebssystem\|Betriebssystem]] auf physischer Hardware.
>>Jede VM braucht eigenes [[OS\|OS]], [[02 - RESOURCES/Notes/RAM\|RAM]] und Speicher - daher ressourcenintensiver als [[02 - RESOURCES/Notes/Docker Container\|Docker Container]].

>[!warning] VM vs Container
>- **VMs**: Minuten Startzeit, GB Speicher, eigenes [[OS\|OS]]
>- **[[02 - RESOURCES/Notes/Docker Container\|Docker Container]]**: Sekunden Startzeit, MB Speicher, geteilter Kernel