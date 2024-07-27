---
{"dg-publish":true,"permalink":"/02-resources/notes/ip/","tags":["netzwerk/ip","netzwerk/gateway","netzwerk/subnet-mask","command","linux"],"noteIcon":"","updated":"2024-07-27T17:08:51.384+02:00"}
---

>Internet Protocol
>>Standard Protokoll, der Weltweit verwendet wird um Rechners zu erkennen.
>>Es kann [[02 - RESOURCES/Notes/IPv6\|IPv6]]  oder [[02 - RESOURCES/Notes/IPv4\|IPv4]] sein.

## Command

### Windows
 
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

### Linux
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

