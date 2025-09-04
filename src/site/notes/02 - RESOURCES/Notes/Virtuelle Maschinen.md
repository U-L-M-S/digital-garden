---
{"dg-publish":true,"permalink":"/02-resources/notes/virtuelle-maschinen/","tags":["virtualisierung/vm","infrastruktur/grundlagen"],"noteIcon":"","updated":"2025-09-04T16:15:31.271+02:00"}
---

>[[02 - RESOURCES/Notes/Virtuelle Maschinen\|Virtuelle Maschinen]] simulieren komplette Computer mit eigenem [[Betriebssystem\|Betriebssystem]] auf physischer Hardware.
>>Jede VM braucht eigenes [[OS\|OS]], [[02 - RESOURCES/Notes/RAM\|RAM]] und Speicher - daher ressourcenintensiver als [[02 - RESOURCES/Notes/Docker Container\|Docker Container]].

>[!warning] VM vs Container
>- **VMs**: Minuten Startzeit, GB Speicher, eigenes [[OS\|OS]]
>- **[[02 - RESOURCES/Notes/Docker Container\|Docker Container]]**: Sekunden Startzeit, MB Speicher, geteilter Kernel