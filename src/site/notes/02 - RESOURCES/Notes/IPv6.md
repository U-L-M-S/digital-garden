---
{"dg-publish":true,"permalink":"/02-resources/notes/i-pv6/","tags":["netzwerk/ip/ipv6","prüfungsrelevant"],"noteIcon":""}
---

>128-[[02 - RESOURCES/Notes/Bit\|bit]]-[[02 - RESOURCES/Notes/Binärzahl\|Binärzahl]]en, die in [[02 - RESOURCES/Notes/Hexadezimal\|Hexadezimal]] dargestellt werden und 
>mit "**:**" getrennt sind( 8 Gruppen) und es wird als [[02 - RESOURCES/Notes/Hexadezimal\|Hexadezimal]] dargestellt.
>>Es ist der Nachfolger von [[02 - RESOURCES/Notes/IPv4\|IPv4]].


```
2001:0db8:85a3:0000:0000:8a2e:0000:7334
```

|          2001          |          0db8          |          85a3          |          0000          |          0000          |          8a2e          |          0370          |          7334          |
| :--------------------: | :--------------------: | :--------------------: | :--------------------: | :--------------------: | :--------------------: | :--------------------: | :--------------------: |
| 0010\|0000\|0000\|0001 | 0000\|1101\|1110\|1000 | 1000\|0101\|1010\|0011 | 0000\|0000\|0000\|0000 | 0000\|0000\|0000\|0000 | 1000\|1010\|0010\|1110 | 0000\|0011\|0111\|0000 | 0111\|0011\|0011\|0100 |

>[!important]  
Da [[02 - RESOURCES/Notes/IPv6\|IPv6]] lang ist, wurden bestimmte Regeln eingesetzt, um ihn lesbar zu machen. Bei diesen Regeln wird nur die [[02 - RESOURCES/Notes/IPv6-Verkürzung\|IPv6-Verkürzung]] verwendet.




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
