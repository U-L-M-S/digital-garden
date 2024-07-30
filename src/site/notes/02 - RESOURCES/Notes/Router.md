---
{"dg-publish":true,"permalink":"/02-resources/notes/router/","tags":["netzwerk","hardware","netzwerk/gateway"],"noteIcon":""}
---

>Hardware, der verwendet wird um [[00 - PROJECTS/Netzwerk\|Netzwerk]]en miteinander  zu verbinden.

Man soll Hauptsächlich nur ein Begriff kennen lernen wenn es um [[02 - RESOURCES/Notes/Router\|Router]] geht: [[02 - RESOURCES/Notes/Routing\|Routing]]

>[!note] 
>Wenn ein [[02 - RESOURCES/Notes/DHCP-Server\|DHCP-Server]] nicht in das Netz verbunden ist. Ist die Aufgabe der [[02 - RESOURCES/Notes/Router\|Router]] die [[02 - RESOURCES/Notes/IP\|IP]]s zu vergeben. Viele moderne [[02 - RESOURCES/Notes/Router\|Router]] haben eine [[02 - RESOURCES/Notes/DHCP-Server\|DHCP-Server]] in sich.

![Router-20240722190813246.png|280](/img/user/02%20-%20RESOURCES/Files/Router-20240722190813246.png)![Router-20240723100123014.png|275](/img/user/02%20-%20RESOURCES/Files/Router-20240723100123014.png)
>[!note] 
>Standartig ist der [[02 - RESOURCES/Notes/Router\|Router]]-[[02 - RESOURCES/Notes/IP\|IP]] das erste [[02 - RESOURCES/Notes/IP\|IP]] nach den [[02 - RESOURCES/Notes/Netz-ID\|Netz-ID]] **ODER** ein vor den [[02 - RESOURCES/Notes/Broadcast\|Broadcast]]-[[02 - RESOURCES/Notes/IP\|IP]]


## [[02 - RESOURCES/Notes/Router\|Router]]-[[02 - RESOURCES/Notes/IP\|IP]] 
>Unter Linux kann man die [[02 - RESOURCES/Notes/IP\|IP]] von den [[02 - RESOURCES/Notes/Router\|Router]] so abrufen.
>Aber das ist das [[02 - RESOURCES/Notes/Gateway\|Gateway]]. D.h ein private [[02 - RESOURCES/Notes/IP\|IP]].
```bash
❯ ip route show | grep default
```
output :
```bash
❯ ip route show | grep default
default via 172.31.32.1 dev eth0 proto kernel
```

Wenn du den Public [[02 - RESOURCES/Notes/IP\|IP]] von den Router willst muss du die Info von außer holen.
```bash
❯ curl ipinfo.io/ip
213.164.90.5
```
