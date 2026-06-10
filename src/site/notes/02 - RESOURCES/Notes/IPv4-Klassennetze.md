---
{"dg-publish":true,"permalink":"/02-resources/notes/i-pv4-klassennetze/","tags":["informatik/netzwerk/ip/ipv4"],"noteIcon":"","updated":"2026-05-12T21:03:21.701+07:00","dg-note-properties":{"aliases":[],"created":"2024-07-30 10:03","links":null,"path":["Notes"],"tags":["informatik/netzwerk/ip/ipv4"]}}
---

>IPv4 wurde in 5 Klassen unterteilt:

|          | -   |            Range            |           Subnet Mask           |
| :------: | --- | :-------------------------: | :-----------------------------: |
| Klasse A | -   |  1.0.0.0 - 126.255.255.255  |           *255*.0.0.0           |
| Klasse B | -   |   128.0.0.0 - 191.255.0.0   |          *255.255*.0.0          |
| Klasse C | -   |  192.0.0.0 - 223.255.255.0  |         *255.255.255*.0         |
| Klasse D | -   | 224.0.0.0 - 239.255.255.255 | Reserviert für [[02 - RESOURCES/Notes/Multicast\|Multicast]]ing |
| Klasse E | -   | 240.0.0.0 - 255.255.255.255 |          Experimental           |
{ #872578}



>[!important] 
>
Heutzutage wird meistens **Klasse C** bei den meisten [[02 - RESOURCES/Notes/Router\|Router]]n verwendet, die man zuhause hat.


>[!tip] There is not place like home
>Zwischen Klasse A und B sind die Adressen 127.0.0.0 nicht gelistet. Sie sind die [[02 - RESOURCES/Notes/loop back address\|loop back address]]

