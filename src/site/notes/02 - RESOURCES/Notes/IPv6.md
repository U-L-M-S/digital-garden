---
{"dg-publish":true,"permalink":"/02-resources/notes/i-pv6/","tags":["netzwerk/ip/ipv6","prüfungsrelevant"],"noteIcon":"","updated":"2024-07-29T22:24:06.236+02:00"}
---

>128-[[02 - RESOURCES/Notes/Bit\|bit]]-[[02 - RESOURCES/Notes/Binärzahlen\|Binärzahlen]], die in [[02 - RESOURCES/Notes/Hexadezimal\|Hexadezimal]] dargestellt werden und 
>mit "**:**" getrennt sind( 8 Gruppen) und es wird als [[02 - RESOURCES/Notes/Hexadezimal\|Hexadezimal]] dargestellt.
>>Es ist der Nachfolger von [[02 - RESOURCES/Notes/IPv4\|IPv4]].


```
2001:0db8:85a3:0000:0000:8a2e:0000:7334
```

|          2001          |          0db8          |          85a3          |          0000          |          0000          |          8a2e          |          0370          |          7334          |
| :--------------------: | :--------------------: | :--------------------: | :--------------------: | :--------------------: | :--------------------: | :--------------------: | :--------------------: |
| 0010\|0000\|0000\|0001 | 0000\|1101\|1110\|1000 | 1000\|0101\|1010\|0011 | 0000\|0000\|0000\|0000 | 0000\|0000\|0000\|0000 | 1000\|1010\|0010\|1110 | 0000\|0011\|0111\|0000 | 0111\|0011\|0011\|0100 |

# Verkürzung
Um [[02 - RESOURCES/Notes/IPv6\|IPv6]] zu lesbarer zu machen kann man es verkürzen.
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
## Public/Global
> Zwischen den [[02 - RESOURCES/Notes/Router\|Router]] und [[02 - RESOURCES/Notes/Internet\|Internet]].
> Es beginnt mit **2000::** oder **3000::**.
> Es kann [[02 - RESOURCES/Notes/Unicast\|Unicast]] oder [[02 - RESOURCES/Notes/Anycast\|Anycast]] sein.

## Private
> Alles was hinter der [[02 - RESOURCES/Notes/Router\|Router]] steht.
### Link - Local Adresse
> Es beginnt mit **FE80::**
> Es ist [[02 - RESOURCES/Notes/Unicast\|Unicast]]

### Unique - Local Adresse
> Es beginnt mit **FE00::** oder **FD00::**
> Es ist [[02 - RESOURCES/Notes/Unicast\|Unicast]]
