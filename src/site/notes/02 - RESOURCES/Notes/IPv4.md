---
{"dg-publish":true,"permalink":"/02-resources/notes/i-pv4/","tags":["netzwerk/ip/ipv4"],"noteIcon":""}
---

> 32-bit-Binärzahlen, die in Dezimal dargestellt werden und mit "**.**"  getrennt sind.  

	**192.168.42.98**

| 192 | 168 | 42 | 98 |
| :---: | :---: | :---: | :---: |
| 11000000 | 10101000 | 00101010 | 01100010 |

mit andere Wörtern wir können 2³²(4,3 Milliarden) [[02 - RESOURCES/Notes/IP Address\|IP Address]] haben, da  es von 0.0.0.0 bis 255.255.255.255 sein kann.
Obwohl man eine [[02 - RESOURCES/Notes/static\|static]] IP Address haben kann, die meisten von denen werden durch den  [[02 - RESOURCES/Notes/DHCP\|DHCP]] Protokoll in der Router vergeben (automatisch).

>[!important] 
>Bei **ALLEN** [[00 - PROJECTS/Netzwerk\|Netzwerk]] müssen **IMMER** zwei IPs reserviert sein.
>
>1- Network Address 
>
>2- Brodcast Address

Mit andere Wörter wenn ich ein [[02 - RESOURCES/Notes/IP Address\|IP Address]] wie 192.168.1.204 und ein [[02 - RESOURCES/Notes/Gateway\|Gateway]] wie 255.255.255.0 habe. Dann kann ich insgesamt 256 [[02 - RESOURCES/Notes/IP Address\|IP Address]] haben [192.168.1.**0**, 192.168.1.**1**, 192.168.1.**2**, ..., 192.168.1.**255** ]. 

Nützen darf ich nur 253. Das sind alle die zwischen **1** und  **254** sind. 
Da 192.168.1.0 reserviert ist, für den Netzwerk Address und soeben 192.168.1.255 für den Broadcast Address.
### IP finden
#### Linux

<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">



### Arguments
#### a
```bash
❯ ip a
```
output:
```bash
❯ ip a
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
    inet6 ::1/128 scope host noprefixroute 
       valid_lft forever preferred_lft forever
2: wlan0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue state UP group default qlen 1000
    link/ether ac:d5:64:8c:b9:d9 brd ff:ff:ff:ff:ff:ff
    inet 172.16.3.180/16 brd 172.16.255.255 scope global dynamic noprefixroute wlan0
       valid_lft 33488sec preferred_lft 33488sec
    inet 172.16.3.222/16 metric 600 brd 172.16.255.255 scope global secondary dynamic wlan0
       valid_lft 36715sec preferred_lft 36715sec
    inet6 fdab:9838:4b8:0:aed5:64ff:fe8c:b9d9/64 scope global mngtmpaddr noprefixroute 
       valid_lft forever preferred_lft forever
    inet6 2a02:8071:b586:e680:aed5:64ff:fe8c:b9d9/64 scope global dynamic mngtmpaddr noprefixroute 
       valid_lft 86385sec preferred_lft 43185sec
    inet6 fd11:e026:78d9:0:aed5:64ff:fe8c:b9d9/64 scope global dynamic mngtmpaddr noprefixroute 
       valid_lft 86385sec preferred_lft 43185sec
    inet6 fdab:9838:4b8::389/128 scope global dynamic noprefixroute 
       valid_lft 36846sec preferred_lft 36846sec
    inet6 2a02:8071:b586:e680:26c7:2c5d:57c4:7db4/64 scope global dynamic noprefixroute 
       valid_lft 86386sec preferred_lft 43186sec
    inet6 fd11:e026:78d9:0:59e9:cd5c:b429:765a/64 scope global dynamic noprefixroute 
       valid_lft 86386sec preferred_lft 43186sec
    inet6 fdab:9838:4b8:0:cb81:c3fd:c311:21b0/64 scope global noprefixroute 
       valid_lft forever preferred_lft forever
    inet6 2a02:8071:b587:89a0:f6ba:eaf1:6e2d:d452/64 scope global dynamic noprefixroute 
       valid_lft 6870sec preferred_lft 3270sec
    inet6 2a02:8071:b587:89a0:aed5:64ff:fe8c:b9d9/64 scope global dynamic mngtmpaddr noprefixroute 
       valid_lft 6869sec preferred_lft 3269sec
    inet6 fe80::6a20:d37a:3506:53ab/64 scope link noprefixroute 
       valid_lft forever preferred_lft forever
```

#### route 
```bash
❯ ip route show | grep default
```
output :
```bash
❯ ip route show | grep default
default via 172.16.0.1 dev wlan0 proto dhcp src 172.16.3.180 metric 600 
default via 172.16.0.1 dev wlan0 proto dhcp src 172.16.3.222 metric 600 
```
In this case I have two gateways, but the second is a backup (just ignore it) and the [[02 - RESOURCES/Notes/IP Address\|IP Address]] of my gateway is `172.16.0.1`. 

</div></div>


Hier wird angezeigt, dass man zwei Netzkarten hat (1 und 2). Wobei `lo` steht für die Netzwerk via Kabel und `wlan0` via [[02 - RESOURCES/Notes/Wi-Fi\|Wi-Fi]]. 
Mein [[02 - RESOURCES/Notes/IP Address\|IP Address]] lautet: `127.16.3.180`.

#### Windows

<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">



## ipconfig 
```bash
ipconfig
```
output:
```bash
Windows IP-Konfiguration

Ethernet-Adapter LAN-Verbindung:

   Verbindungsspezifisches DNS-Suffix: lokaledomäne.local
   Verbindungslokale IPv6-Adresse  . : fe80::abcd:1234:5678:9abc%12
   IPv4-Adresse  . . . . . . . . . . : 192.168.1.100
   Subnetzmaske  . . . . . . . . . . : 255.255.255.0
   Standardgateway . . . . . . . . . : 192.168.1.1

Drahtlos-LAN-Adapter WLAN:

   Verbindungsspezifisches DNS-Suffix: lokaledomäne.local
   Verbindungslokale IPv6-Adresse  . : fe80::1234:5678:abcd:9abc%11
   IPv4-Adresse  . . . . . . . . . . : 192.168.0.200
   Subnetzmaske  . . . . . . . . . . : 255.255.255.0
   Standardgateway . . . . . . . . . : 192.168.0.1

Tunneladapter LAN-Verbindung*:

   Medienstatus. . . . . . . . . . . : Medium getrennt
   Verbindungsspezifisches DNS-Suffix: 

```



</div></div>

Hier kannst du sehen, dass mein IP (`Wlan`) `192.168.0.200` ist
### Klassen
IPv4 wurde in 5 Klassen unterteilt:

|          | -   | Range |  Subnet Mask   | 
| :-------:| --- | :---: | :---: |
| Klasse A | -   | 1.0.0.0 - 126.255.255.255 | *255*.0.0.0     |
| Klasse B | -   | 128.0.0.0 - 191.255.0.0 | *255.255*.0.0     |
| Klasse C | -   | 192.0.0.0 - 223.255.255.0 | *255.255.255*.0     |
| Klasse D | -   | 224.0.0.0 - 239.255.255.255 |     |
| Klasse E | -   | 240.0.0.0 - 255.255.255.255      |     |
{ #872578}


>[!important] 
>
Heutzutage wird meistens **Klasse C** bei die meisten Router verwendet, die man zuhause hat.


>[!tip] There is not place like home
>Zwischen Klasse A und B sind die Adressen 127.0.0.0 nicht gelistet. Sie sind die [[02 - RESOURCES/Notes/loop back address\|loop back address]]