---
{"dg-publish":true,"permalink":"/02-resources/notes/router/","tags":["netzwerk","hardware","netzwerk/gateway"],"noteIcon":"","updated":"2024-07-27T17:10:31.510+02:00"}
---

>Hardware, der verwendet wird um [[00 - PROJECTS/Netzwerk\|Netzwerk]]en miteinander  zu verbinden.

Man soll Hauptsächlich nur ein Begriff kennen lernen wenn es um [[02 - RESOURCES/Notes/Router\|Router]] geht: [[02 - RESOURCES/Notes/Routing\|Routing]]

>[!note] 
>Wenn ein [[02 - RESOURCES/Notes/DHCP-Server\|DHCP-Server]] nicht in das Netz verbunden ist. Ist die Aufgabe der [[02 - RESOURCES/Notes/Router\|Router]] die [[02 - RESOURCES/Notes/IP\|IP]]s zu vergeben. Viele moderne [[02 - RESOURCES/Notes/Router\|Router]] haben eine [[02 - RESOURCES/Notes/DHCP-Server\|DHCP-Server]] in sich.

![Router-20240722190813246.png|280](/img/user/02%20-%20RESOURCES/Files/Router-20240722190813246.png)![Router-20240723100123014.png|275](/img/user/02%20-%20RESOURCES/Files/Router-20240723100123014.png)
>[!note] 
>Standartig ist der [[02 - RESOURCES/Notes/Router\|Router]]-[[02 - RESOURCES/Notes/IP\|IP]] das erste [[02 - RESOURCES/Notes/IP\|IP]] nach den Netzwerk-ID **ODER** ein vor den [[02 - RESOURCES/Notes/Broadcast\|Broadcast]]-[[02 - RESOURCES/Notes/IP\|IP]]


## Command 
```bash
❯ ip route show | grep default
```
output :
```bash
❯ ip route show | grep default
default via 172.16.0.1 dev wlan0 proto dhcp src 172.16.3.180 metric 600 
default via 172.16.0.1 dev wlan0 proto dhcp src 172.16.3.222 metric 600 
```
In this case I have two gateways, but the second is a backup (just ignore it) and the [[IP-Adresse\|IP-Adresse]] of my gateway is `172.16.0.1`. 