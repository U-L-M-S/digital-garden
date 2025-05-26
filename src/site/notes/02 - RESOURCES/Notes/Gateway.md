---
{"dg-publish":true,"permalink":"/02-resources/notes/gateway/","tags":["netzwerk/gateway"],"noteIcon":"","updated":"2024-10-20T13:34:40.150+02:00"}
---

## gateway 

Gateway oder Default Gateway ist nicht anders als die private [[02 - RESOURCES/Notes/IP\|IP]]  des [[02 - RESOURCES/Notes/Router\|Router]]s.

<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/02-resources/notes/router/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




>Hardware, der verwendet wird um [[02 - RESOURCES/Notes/Netzwerk\|Netzwerk]]en miteinander  zu verbinden.

Man soll Hauptsächlich nur ein Begriff kennen lernen wenn es um [[02 - RESOURCES/Notes/Router\|Router]] geht: [[02 - RESOURCES/Notes/Routing\|Routing]]

>[!note] 
>Wenn ein [[02 - RESOURCES/Notes/DHCP-Server\|DHCP-Server]] nicht in das Netz verbunden ist. Ist die Aufgabe der [[02 - RESOURCES/Notes/Router\|Router]] die [[02 - RESOURCES/Notes/IP\|02 - RESOURCES/Notes/IP]]s zu vergeben. Viele moderne [[02 - RESOURCES/Notes/Router\|Router]] haben eine [[02 - RESOURCES/Notes/DHCP-Server\|DHCP-Server]] in sich.

![Router-20240722190813246.png|280](/img/user/02%20-%20RESOURCES/Files/IMG/Router-20240722190813246.png)![Router-20240723100123014.png|275](/img/user/02%20-%20RESOURCES/Files/IMG/Router-20240723100123014.png)
>[!note] 
>Standartig ist der [[02 - RESOURCES/Notes/Router\|Router]]-[[02 - RESOURCES/Notes/IP\|02 - RESOURCES/Notes/IP]] das erste [[02 - RESOURCES/Notes/IP\|02 - RESOURCES/Notes/IP]] nach den [[02 - RESOURCES/Notes/Netz-ID\|Netz-ID]] **ODER** ein vor den [[02 - RESOURCES/Notes/Broadcast\|Broadcast]]-[[02 - RESOURCES/Notes/IP\|02 - RESOURCES/Notes/IP]]


## [[02 - RESOURCES/Notes/Router\|Router]]-[[02 - RESOURCES/Notes/IP\|02 - RESOURCES/Notes/IP]] 
>Unter Linux kann man die [[02 - RESOURCES/Notes/IP\|02 - RESOURCES/Notes/IP]] von den [[02 - RESOURCES/Notes/Router\|Router]] so abrufen.
>Aber das ist das [[02 - RESOURCES/Notes/Gateway\|Gateway]]. D.h ein private [[02 - RESOURCES/Notes/IP\|02 - RESOURCES/Notes/IP]].
```bash
❯ ip route show | grep default
```
output :
```bash
❯ ip route show | grep default
default via 172.31.32.1 dev eth0 proto kernel
```

Wenn du den Public [[02 - RESOURCES/Notes/IP\|02 - RESOURCES/Notes/IP]] von den Router willst muss du die Info von außer holen.
```bash
❯ curl ipinfo.io/ip
213.164.90.5
```


</div></div>

Es is Aufgabe die [[02 - RESOURCES/Notes/IP\|IP]] zu verteilen, Kommunikation zwischen Rechners in Netz zu ermöglichen und so eben die externe Kommunikation. 