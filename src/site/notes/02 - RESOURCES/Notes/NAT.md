---
{"dg-publish":true,"permalink":"/02-resources/notes/nat/","tags":["netzwerk/nat","prüfungsrelevant"],"noteIcon":""}
---

> Network Address Translation

NAT hat nicht anders gemacht außer bestimmte [[IP-Adresse\|IP-Adresse]] zu zunehmen und diese Private gemacht.
D.H die Standard Tabelle für IP-Klassen [[02 - RESOURCES/Notes/IPv4#^872578\|IPv4#^872578]] sieht jetzt so aus:

|          | -   |             Range             |   Subnet Mask   |
| :------: | --- | :---------------------------: | :-------------: |
| Klasse A | -   |   10.0.0.0 - 10.255.255.255   |   *255*.0.0.0   |
| Klasse B | -   |  172.16.0.0 - 172.31.255.255  |  *255.255*.0.0  |
| Klasse C | -   | 192.168.0.0 - 192.168.255.255 | *255.255.255*.0 |

und somit werden alle unsere Geräte in Netz solche IPs haben (Privates) und unser Router enthält zwei IPs (Private und Public). Damit unsere Geräte den Public IP benutzt und ins Internet navigiert.