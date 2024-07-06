---
{"dg-publish":true,"permalink":"/02-resources/notes/i-pv6/","tags":["netzwerk/ip/ipv6"],"noteIcon":"","updated":"2024-07-05T10:48:04.000+02:00"}
---

> 128-bit-Binärzahlen, die in Hexadezimal dargestellt werden und mit "**:**" getrennt sind( 8 Gruppen) und es wird als [[02 - RESOURCES/Notes/Hexadezimal\|Hexadezimal]] dargestellt.
 Es ist der Nachfolger von [[02 - RESOURCES/Notes/IPv4\|IPv4]].


	2001:0db8:85a3:0000:0000:8a2e:0000:7334

|       2001       |       0db8       |       85a3       |       0000       |       0000       |       8a2e       |       0370       |       7334       |
| :--------------: | :--------------: | :--------------: | :--------------: | :--------------: | :--------------: | :--------------: | :--------------: |
| 0010000000000001 | 0000110111101000 | 1000010110100011 | 0000000000000000 | 0000000000000000 | 1000101000101110 | 0000001101110000 | 0111001100110100 |

# Verkürzung
Um IPv6 zu lesbarer zu machen kann man es verkürzen.
Hier sind die Regeln, die man es folgen muss:
- Führende Nullen in jeder Gruppe können weggelassen werden. 
	- <mark style="background: #FFF3A3A6;">0db8 -> db8</mark>
- Gruppen von aufeinanderfolgenden Nullen können durch zwei Doppelpunkte "::" ersetzt werden, aber <mark style="background: #FFF3A3A6;">nur einmal pro Adresse</mark>. Dies kann nur gemacht werden, wenn es keine Verwechslungsmöglichkeiten gibt. 
	- <mark style="background: #FFF3A3A6;">0000:0000:0000 -> ::</mark>

>[!important] 
><mark style="background: #FFF3A3A6;">0000:0000 -> ::</mark>
>ABER
> 8a2e:<mark style="background: #FFF3A3A6;">0000</mark>:7334 -> 8a2e:<mark style="background: #FFF3A3A6;">0</mark>:7334


| 2001 | 0db8 | 85a3 | 0000 | 0000 | 8a2e | 0000 | 7334 |
| :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: |
| 2001 | db8  | 85a3 |      |      | 8a2e |  0   | 7334 |

**2001:0db8:85a3:0000:0000:8a2e:0000:7334**  -> **2001:db8:85a3::8a2e:0:7334**


# Adressen
[[02 - RESOURCES/Notes/IPv6\|IPv6]] verwendet 3 Arten von Adressen. Diese sind...
## [[02 - RESOURCES/Notes/Unicast\|Unicast]]
## [[02 - RESOURCES/Notes/Multicast\|Multicast]]
## [[02 - RESOURCES/Notes/Anycast\|Anycast]]
