---
{"dg-publish":true,"permalink":"/02-resources/notes/dmz/","tags":["netzwerk/firewall"],"noteIcon":"","updated":"2024-08-04T00:03:12.013+02:00"}
---

![DMZ-20240804000213781.png](/img/user/02%20-%20RESOURCES/Files/DMZ-20240804000213781.png)
>Demilitarisierte Zone
>>Ein Sicherheitsbereich in einem Netzwerk, der es ermöglicht, dass bestimmte Dienste von außen erreichbar sind, ohne das interne Netzwerk zu gefährden.
>>>Es liegt zwischen dem internen [[02 - RESOURCES/Notes/Netzwerk\|Netzwerk]] ([[02 - RESOURCES/Notes/LAN\|LAN]]) un dem [[02 - RESOURCES/Notes/Internet\|Internet]].
>>>Es ist ein separates [[02 - RESOURCES/Notes/Subnetz\|Subnetz]], das durch zwei Firewalls geschützt ist.
>>>- **Firewall-Router A**: Erlaubt Verbindungen aus dem Internet zum Server in der DMZ, blockiert aber andere nicht angeforderte Verbindungen.
>>>-  **Firewall-Router B**: Erlaubt nur Verbindungen, die aus der DMZ zum LAN angefordert wurden, und blockiert unautorisierte Zugriffe.

>[!important] 
>Falls ein Angreifer in die DMZ gelangt, wird er durch die zweite Firewall daran gehindert, ins interne LAN einzudringen.