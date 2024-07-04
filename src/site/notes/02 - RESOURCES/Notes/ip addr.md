---
tags:
  - linux
  - command
dg-publish: true
aliases:
  - Ip addr
  - ip addr
links: 
path: Notes
created: 2024-07-03 16:06
---
> Zeig alle Informationen um das [[00 - PROJECTS/Netzwerk\|Netzwerk]].
> [[02 - RESOURCES/Notes/IP Address\|IP Address]], [[02 - RESOURCES/Notes/MAC Adresse\|MAC Adresse]], usw

```bash
user1@home-server:~/Docker$ ip addr
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
    inet6 ::1/128 scope host noprefixroute
       valid_lft forever preferred_lft forever
2: eno2: <NO-CARRIER,BROADCAST,MULTICAST,UP> mtu 1500 qdisc fq_codel state DOWN group default qlen 1000
    link/ether 04:92:26:1a:b8:8f brd ff:ff:ff:ff:ff:ff
    altname enp2s0
3: wlo1: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue state UP group default qlen 1000
    link/ether dc:f5:05:49:69:01 brd ff:ff:ff:ff:ff:ff
    altname wlp3s0
    inet 192.168.2.199/24 brd 192.168.2.255 scope global dynamic noprefixroute wlo1
       valid_lft 1790924sec preferred_lft 1790924sec
    inet6 2003:f6:5f4c:32dd:f0e9:b86e:512d:41e6/64 scope global dynamic noprefixroute
       valid_lft 172800sec preferred_lft 86400sec
    inet6 fe80::228d:c1db:8517:d983/64 scope link noprefixroute
       valid_lft forever preferred_lft forever
4: br-714a114c49c0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue state UP group default
    link/ether 02:42:46:f6:88:0c brd ff:ff:ff:ff:ff:ff
    inet 172.18.0.1/16 brd 172.18.255.255 scope global br-714a114c49c0
       valid_lft forever preferred_lft forever
    inet6 fe80::42:46ff:fef6:880c/64 scope link
       valid_lft forever preferred_lft forever
5: br-a50fc1c39865: <NO-CARRIER,BROADCAST,MULTICAST,UP> mtu 1500 qdisc noqueue state DOWN group default
    link/ether 02:42:5e:66:58:01 brd ff:ff:ff:ff:ff:ff
    inet 172.29.0.1/16 brd 172.29.255.255 scope global br-a50fc1c39865
       valid_lft forever preferred_lft forever
6: br-ca7f02a3fe0d: <NO-CARRIER,BROADCAST,MULTICAST,UP> mtu 1500 qdisc noqueue state DOWN group default
    link/ether 02:42:50:c4:22:7a brd ff:ff:ff:ff:ff:ff
    inet 172.23.0.1/16 brd 172.23.255.255 scope global br-ca7f02a3fe0d
       valid_lft forever preferred_lft forever
7: docker0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue state UP group default
    link/ether 02:42:e7:a0:16:c7 brd ff:ff:ff:ff:ff:ff
    inet 172.17.0.1/16 brd 172.17.255.255 scope global docker0
       valid_lft forever preferred_lft forever
    inet6 fe80::42:e7ff:fea0:16c7/64 scope link
       valid_lft forever preferred_lft forever
8: br-2dc8b46b1389: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue state UP group default
    link/ether 02:42:d9:ba:11:49 brd ff:ff:ff:ff:ff:ff
    inet 172.21.0.1/16 brd 172.21.255.255 scope global br-2dc8b46b1389
       valid_lft forever preferred_lft forever
    inet6 fe80::42:d9ff:feba:1149/64 scope link
       valid_lft forever preferred_lft forever
9: br-6c92ecfc03d4: <NO-CARRIER,BROADCAST,MULTICAST,UP> mtu 1500 qdisc noqueue state DOWN group default
    link/ether 02:42:86:a4:ee:9c brd ff:ff:ff:ff:ff:ff
    inet 172.20.0.1/16 brd 172.20.255.255 scope global br-6c92ecfc03d4
       valid_lft forever preferred_lft forever
11: veth7f951f0@if10: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue master br-2dc8b46b1389 state UP group default
    link/ether 1e:c9:e9:29:47:3e brd ff:ff:ff:ff:ff:ff link-netnsid 2
    inet6 fe80::1cc9:e9ff:fe29:473e/64 scope link
       valid_lft forever preferred_lft forever
13: veth25b14db@if12: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue master docker0 state UP group default
    link/ether 66:77:e2:83:08:ae brd ff:ff:ff:ff:ff:ff link-netnsid 0
    inet6 fe80::6477:e2ff:fe83:8ae/64 scope link
       valid_lft forever preferred_lft forever
15: vethe0dfe3c@if14: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue master br-714a114c49c0 state UP group default
    link/ether 3e:b9:ee:c8:c2:47 brd ff:ff:ff:ff:ff:ff link-netnsid 1
    inet6 fe80::3cb9:eeff:fec8:c247/64 scope link
       valid_lft forever preferred_lft forever
```