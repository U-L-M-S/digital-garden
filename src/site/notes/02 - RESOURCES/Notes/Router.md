---
{"dg-publish":true,"permalink":"/02-resources/notes/router/","tags":["informatik/hardware","informatik/netzwerk/gateway"],"noteIcon":"","updated":"2026-05-12T15:57:19.677+02:00","dg-note-properties":{"aliases":[],"created":"2024-07-22 18:49","links":null,"tags":["informatik/hardware","informatik/netzwerk/gateway"]}}
---

>Hardware, die verwendet wird, um [[02 - RESOURCES/Notes/Netzwerk\|Netzwerk]]en miteinander zu verbinden.

Man soll hauptsächlich nur einen Begriff kennenlernen, wenn es um [[02 - RESOURCES/Notes/Router\|Router]] geht: [[02 - RESOURCES/Notes/Routing\|Routing]]

>[!note] 
>Wenn ein [[02 - RESOURCES/Notes/DHCP-Server\|DHCP-Server]] nicht mit dem Netz verbunden ist, ist es die Aufgabe des [[02 - RESOURCES/Notes/Router\|Router]]s, die [[02 - RESOURCES/Notes/IP\|IP]]s zu vergeben. Viele moderne [[02 - RESOURCES/Notes/Router\|Router]] haben einen [[02 - RESOURCES/Notes/DHCP-Server\|DHCP-Server]] in sich.

![Router-20240722190813246.png\|280](/img/user/02%20-%20RESOURCES/Files/IMG/Router-20240722190813246.png)![Router-20240723100123014.png\|275](/img/user/02%20-%20RESOURCES/Files/IMG/Router-20240723100123014.png)
>[!note] 
>Standardmäßig ist die [[02 - RESOURCES/Notes/Router\|Router]]-[[02 - RESOURCES/Notes/IP\|02 - RESOURCES/Notes/IP]] die erste [[02 - RESOURCES/Notes/IP\|02 - RESOURCES/Notes/IP]] nach der [[02 - RESOURCES/Notes/Netz-ID\|Netz-ID]] **ODER** die eine vor der [[02 - RESOURCES/Notes/Broadcast\|Broadcast]]-[[02 - RESOURCES/Notes/IP\|02 - RESOURCES/Notes/IP]].


## [[02 - RESOURCES/Notes/Router\|Router]]-[[02 - RESOURCES/Notes/IP\|02 - RESOURCES/Notes/IP]] 
>Unter Linux kann man die [[02 - RESOURCES/Notes/IP\|02 - RESOURCES/Notes/IP]] vom [[02 - RESOURCES/Notes/Router\|Router]] so abrufen.
>Aber das ist das [[02 - RESOURCES/Notes/Gateway\|Gateway]]. D.h. eine private [[02 - RESOURCES/Notes/IP\|02 - RESOURCES/Notes/IP]].
```bash
❯ ip route show | grep default
```
output :
```bash
❯ ip route show | grep default
default via 172.31.32.1 dev eth0 proto kernel
```

Wenn du die Public [[02 - RESOURCES/Notes/IP\|02 - RESOURCES/Notes/IP]] vom Router willst, musst du die Info von außen holen.
```bash
❯ curl ipinfo.io/ip
213.164.90.5
```
