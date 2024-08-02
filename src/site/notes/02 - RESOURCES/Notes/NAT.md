---
{"dg-publish":true,"permalink":"/02-resources/notes/nat/","tags":["netzwerk/nat","prüfungsrelevant"],"noteIcon":"","updated":"2024-08-02T05:53:02.476+02:00"}
---

> Network Address Translation

NAT hat nicht anders gemacht außer bestimmte [[02 - RESOURCES/Notes/IP\|IP]] zu zunehmen und diese Private gemacht.
D.H die Standard Tabelle für [[02 - RESOURCES/Notes/IPv4-Klassen\|IPv4-Klassen]] sieht jetzt so aus:

|          | -   |             Range             |   [[02 - RESOURCES/Notes/Subnet Mask\|Subnet Mask]]   |
| :------: | --- | :---------------------------: | :-------------: |
| Klasse A | -   |   10.0.0.0 - 10.255.255.255   |   *255*.0.0.0   |
| Klasse B | -   |  172.16.0.0 - 172.31.255.255  |  *255.255*.0.0  |
| Klasse C | -   | 192.168.0.0 - 192.168.255.255 | *255.255.255*.0 |

und somit werden alle unsere Geräte in [[02 - RESOURCES/Notes/Netzwerk\|Netz]] solche IPs haben (Privates) und unser [[02 - RESOURCES/Notes/Router\|Router]] enthält zwei IPs (Private und Public). Damit unsere Geräte den Public [[02 - RESOURCES/Notes/IP\|IP]] benutzt und ins [[02 - RESOURCES/Notes/Internet\|Internet]] navigiert.