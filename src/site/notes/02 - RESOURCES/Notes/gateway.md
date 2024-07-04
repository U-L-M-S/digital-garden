---
tags:
  - netzwerk/gateway
dg-publish: true
links: 
path: Notes
created: 2023-09-13 15:11
---
## gateway 

Gateway oder Default Gateway ist nicht anders als den [[02 - RESOURCES/Notes/IP Address\|IP Address]]  von den Router.

<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">



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

<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">



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
e Aufgabe die [[02 - RESOURCES/Notes/IP Address\|IP Address]] zu verteilen, Kommunikation zwischen Rechners in Netz zu ermöglichen und so eben die externe Kommunikation. 