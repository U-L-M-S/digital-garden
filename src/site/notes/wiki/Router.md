---
{"dg-publish":true,"permalink":"/wiki/router/","tags":["informatik/hardware","informatik/netzwerk"],"noteIcon":"","updated":"2026-07-19T03:56:26.620+02:00","dg-note-properties":{"aliases":[],"created":"2024-07-22 18:49","links":null,"tags":["informatik/hardware","informatik/netzwerk"]}}
---

>Hardware, die verwendet wird, um [[wiki/Netzwerk\|Netzwerk]]en miteinander zu verbinden.

Man soll hauptsächlich nur einen Begriff kennenlernen, wenn es um [[wiki/Router\|Router]] geht: [[wiki/Routing\|Routing]]

>[!note] 
>Wenn ein [[wiki/DHCP-Server\|DHCP-Server]] nicht mit dem Netz verbunden ist, ist es die Aufgabe des [[wiki/Router\|Router]]s, die [[wiki/IP\|IP]]s zu vergeben. Viele moderne [[wiki/Router\|Router]] haben einen [[wiki/DHCP-Server\|DHCP-Server]] in sich.

![Router-20240722190813246.png\|280](/img/user/assets/IMG/Router-20240722190813246.png)![Router-20240723100123014.png\|275](/img/user/assets/IMG/Router-20240723100123014.png)
>[!note] 
>Standardmäßig ist die [[wiki/Router\|Router]]-[[02 - RESOURCES/Notes/IP\|02 - RESOURCES/Notes/IP]] die erste [[02 - RESOURCES/Notes/IP\|02 - RESOURCES/Notes/IP]] nach der [[wiki/Netz-ID\|Netz-ID]] **ODER** die eine vor der [[wiki/Broadcast\|Broadcast]]-[[02 - RESOURCES/Notes/IP\|02 - RESOURCES/Notes/IP]].


## [[wiki/Router\|Router]]-[[02 - RESOURCES/Notes/IP\|02 - RESOURCES/Notes/IP]] 
>Unter Linux kann man die [[02 - RESOURCES/Notes/IP\|02 - RESOURCES/Notes/IP]] vom [[wiki/Router\|Router]] so abrufen.
>Aber das ist das [[wiki/Gateway\|Gateway]]. D.h. eine private [[02 - RESOURCES/Notes/IP\|02 - RESOURCES/Notes/IP]].
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
