---
{"dg-publish":true,"permalink":"/02-resources/notes/i-pv4/","tags":["netzwerk/ip/ipv4"]}
---

> 32-[[02 - RESOURCES/Notes/Bit\|bit]]-Binärzahlen, die in [[02 - RESOURCES/Notes/Dezimal\|Dezimal]] dargestellt werden und mit "**.**"  in vier [[02 - RESOURCES/Notes/Oktett\|Oktett]]e getrennt sind.  
>>$$2^{32}$$



	192.168.42.98

|   192    |   168    |    42    |    98    |
| :------: | :------: | :------: | :------: |
| 11000000 | 10101000 | 00101010 | 01100010 |

mit andere Wörtern wir können 2³²(4,3 Milliarden) [[IP-Adresse\|IP-Adresse]]en haben, da  es von 0.0.0.0 bis 255.255.255.255 sein kann.
Obwohl man eine [[02 - RESOURCES/Notes/static\|static]] [[02 - RESOURCES/Notes/IP\|IP]]  haben kann, die meisten von denen werden durch den  [[02 - RESOURCES/Notes/DHCP\|DHCP]] [[02 - RESOURCES/Notes/Protokoll\|Protokoll]] in der [[02 - RESOURCES/Notes/Router\|Router]] vergeben (automatisch).

>[!important] 
>Bei **ALLEN** [[02 - RESOURCES/Notes/Netzwerk\|Netzwerk]] müssen **IMMER** zwei [[02 - RESOURCES/Notes/IP\|IP]] reserviert werden.
>
>1- Network Adresse
>
>2- [[02 - RESOURCES/Notes/Broadcast\|Broadcast]]-Adresse

Wenn man ein [[02 - RESOURCES/Notes/IP\|IP]] wie 192.168.1.204 und ein [[02 - RESOURCES/Notes/Gateway\|Gateway]] wie 192.168.1.1 hat. Dann kann ich insgesamt 255 [[02 - RESOURCES/Notes/IP\|IP]] haben [192.168.1.**0**, 192.168.1.**1**, 192.168.1.**2**, ..., 192.168.1.**255** ]. 

Nützen darf ich nur 253. Das sind alle die zwischen **1** und  **254** sind. 
Da 192.168.1.0 reserviert ist, für den [[02 - RESOURCES/Notes/Netzwerk\|Netzwerk]] Address und soeben 192.168.1.255 für den [[02 - RESOURCES/Notes/Broadcast-ID\|Broadcast-ID]] 
## [[02 - RESOURCES/Notes/IP\|IP]] finden
### Linux

<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/02-resources/notes/ip/#d26d3a" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">



```bash
❯ ip a
```

</div></div>


Hier wird angezeigt, dass man zwei Netzkarten hat (1 und 2). Wobei `lo` steht für die [[02 - RESOURCES/Notes/Netzwerk\|Netzwerk]] via Kabel und `wlan0` via [[02 - RESOURCES/Notes/Wi-Fi\|Wi-Fi]]. 
Mein [[02 - RESOURCES/Notes/IP\|IP]] lautet: `127.16.3.180`.

### Windows

<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/02-resources/notes/ip/#0f192b" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">



```bash
ipconfig
```

</div></div>

Hier kannst du sehen, dass mein [[02 - RESOURCES/Notes/IP\|IP]] ([[02 - RESOURCES/Notes/WLAN\|WLAN]]) `192.168.0.200` ist

>[!important] [[02 - RESOURCES/Notes/IPv4-Klassen\|IPv4-Klassen]]
>Es gibt 5 Arten von [[02 - RESOURCES/Notes/IPv4\|IPv4]] und diese wurde in Klassen unterteilen.
>Hier sind die [[02 - RESOURCES/Notes/IPv4-Klassen\|IPv4-Klassen]].

## [[02 - RESOURCES/Notes/Subnetting IPv4\|Subnetting IPv4]]
