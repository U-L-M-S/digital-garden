---
{"dg-publish":true,"permalink":"/wiki/i-pv4-klassennetze/","tags":["informatik/netzwerk"],"noteIcon":"","updated":"2026-07-19T03:56:26.865+02:00","dg-note-properties":{"aliases":[],"created":"2024-07-30 10:03","links":null,"path":["Notes"],"tags":["informatik/netzwerk"]}}
---

>IPv4 wurde in 5 Klassen unterteilt:

|          | -   |            Range            |           Subnet Mask           |
| :------: | --- | :-------------------------: | :-----------------------------: |
| Klasse A | -   |  1.0.0.0 - 126.255.255.255  |           *255*.0.0.0           |
| Klasse B | -   |   128.0.0.0 - 191.255.0.0   |          *255.255*.0.0          |
| Klasse C | -   |  192.0.0.0 - 223.255.255.0  |         *255.255.255*.0         |
| Klasse D | -   | 224.0.0.0 - 239.255.255.255 | Reserviert für [[wiki/Multicast\|Multicast]]ing |
| Klasse E | -   | 240.0.0.0 - 255.255.255.255 |          Experimental           |
{ #872578}


>[!important] 
>
Heutzutage wird meistens **Klasse C** bei den meisten [[wiki/Router\|Router]]n verwendet, die man zuhause hat.


>[!tip] There is not place like home
>Zwischen Klasse A und B sind die Adressen 127.0.0.0 nicht gelistet. Sie sind die [[wiki/loop back address\|loop back address]]

