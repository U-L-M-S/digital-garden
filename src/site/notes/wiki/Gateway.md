---
{"dg-publish":true,"permalink":"/wiki/gateway/","tags":["informatik/netzwerk/gateway"],"noteIcon":"","updated":"2025-10-29T12:59:06.000+01:00","dg-note-properties":{"created":"2023-09-13 15:11","links":null,"path":"Notes","tags":["informatik/netzwerk/gateway"]}}
---

## gateway 

Gateway oder Default Gateway ist nicht anders als die private [[wiki/IP\|IP]]  des [[wiki/Router\|Router]]s.

<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/wiki/router/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




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


</div></div>

Es is Aufgabe die [[wiki/IP\|IP]] zu verteilen, Kommunikation zwischen Rechners in Netz zu ermöglichen und so eben die externe Kommunikation. 