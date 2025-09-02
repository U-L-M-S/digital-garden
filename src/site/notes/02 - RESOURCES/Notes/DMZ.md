---
{"dg-publish":true,"permalink":"/02-resources/notes/dmz/","tags":["netzwerk/firewall"],"noteIcon":"","updated":"2025-08-26T16:35:03.000+02:00"}
---

![DMZ-20240804000213781.png](/img/user/02%20-%20RESOURCES/Files/IMG/DMZ-20240804000213781.png)
>Demilitarisierte Zone
>>Ein Sicherheitsbereich in einem [[02 - RESOURCES/Notes/Netzwerk\|Netzwerk]], der es ermöglicht, dass bestimmte Dienste von außen erreichbar sind, ohne das interne [[02 - RESOURCES/Notes/Netzwerk\|Netzwerk]] zu gefährden.
>>>Es liegt zwischen dem internen [[02 - RESOURCES/Notes/Netzwerk\|Netzwerk]] ([[02 - RESOURCES/Notes/LAN\|LAN]]) un dem [[02 - RESOURCES/Notes/Internet\|Internet]].
>>>Es ist ein separates [[02 - RESOURCES/Notes/Subnetz\|Subnetz]], das durch zwei Firewalls geschützt ist.
>>>- **Firewall-[[02 - RESOURCES/Notes/Router\|Router]] A**: Erlaubt Verbindungen aus dem [[02 - RESOURCES/Notes/Internet\|Internet]] zum Server in der DMZ, blockiert aber andere nicht angeforderte Verbindungen.
>>>-  **Firewall-[[02 - RESOURCES/Notes/Router\|Router]] B**: Erlaubt nur Verbindungen, die aus der DMZ zum [[02 - RESOURCES/Notes/LAN\|LAN]] angefordert wurden, und blockiert unautorisierte Zugriffe.

>[!important] 
>Falls ein Angreifer in die DMZ gelangt, wird er durch die zweite Firewall daran gehindert, ins interne [[02 - RESOURCES/Notes/LAN\|LAN]] einzudringen.