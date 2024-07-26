---
{"dg-publish":true,"permalink":"/02-resources/notes/netzwerk-id-herausfinden/","tags":["netzwerk/ip/ipv4"],"noteIcon":""}
---

>[!example] 
>Jetzt lass uns das [[02 - RESOURCES/Notes/Netzwerk-ID\|Netzwerk-ID]] von dieses [[02 - RESOURCES/Notes/IP\|IP]] (**192.168.1.4/16**) identifizieren.
>
Da wir [[02 - RESOURCES/Notes/CIDR\|CIDR]] lesen können, können wir sehen, dass das [[02 - RESOURCES/Notes/Netzwerkmaske\|Netzwerkmaske]] 255.255.0.0 lautet.
>
Daher wissen wir das die 1. und 2. [[02 - RESOURCES/Notes/Oktett\|Oktett]]en sich nicht ändern können und das [[02 - RESOURCES/Notes/Netzwerk-ID\|Netzwerk-ID]] immer das erste [[02 - RESOURCES/Notes/IP\|IP]] ist müssen wir nur die 2 ersten [[02 - RESOURCES/Notes/Oktett\|Oktett]]en wiederholen: 
><mark style="background: #FFF3A3A6;">192.168</mark>
und den Rest mit 0 setzen:
<mark style="background: #FFF3A3A6;">192.168.0.0</mark>.
