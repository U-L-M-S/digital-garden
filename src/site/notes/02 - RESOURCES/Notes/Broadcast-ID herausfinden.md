---
{"dg-publish":true,"permalink":"/02-resources/notes/broadcast-id-herausfinden/","tags":["netzwerk/ip/ipv4"],"noteIcon":"","updated":"2024-07-26T21:42:05.536+02:00"}
---

>[!example] 
>Um den [[02 - RESOURCES/Notes/Broadcast-ID\|Broadcast-ID]] zu identifizieren können wir das selbe Logik wie bei [[02 - RESOURCES/Notes/Netzwerk-ID herausfinden\|Netzwerk-ID herausfinden]] nutzen.
>
(**192.168.1.4/16**)
>
Da wir [[02 - RESOURCES/Notes/CIDR\|CIDR]] lesen können (/16), können wir sehen, dass das [[02 - RESOURCES/Notes/Netzwerkmaske\|Netzwerkmaske]] 255.255.0.0 lautet und wir wissen auch dass das [[02 - RESOURCES/Notes/Broadcast-ID\|Broadcast-ID]] immer das letzter [[02 - RESOURCES/Notes/IP\|IP]] in das [[00 - PROJECTS/Netzwerk\|Netzwerk]] ist.
>
Daher wissen wir das die 1. und 2. [[02 - RESOURCES/Notes/Oktett\|Oktett]]en sich nicht ändern können und das [[02 - RESOURCES/Notes/Netzwerk-ID\|Netzwerk-ID]] immer das erste [[02 - RESOURCES/Notes/IP\|IP]] ist müssen wir nur die 2 ersten [[02 - RESOURCES/Notes/Oktett\|Oktett]]en wiederholen: 
><mark style="background: #FFF3A3A6;">192.168</mark>
und den Rest mit 0 setzen:
 [[02 - RESOURCES/Notes/Netzwerk-ID\|Netzwerk-ID]]: <mark style="background: #FFF3A3A6;">192.168.0.0</mark>