---
{"dg-publish":true,"permalink":"/02-resources/notes/gateway/","tags":["netzwerk/gateway"],"noteIcon":""}
---

## gateway 

Gateway oder Default Gateway ist nicht anders als den [[02 - RESOURCES/Notes/IP Address\|IP Address]]  von den Router.

<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/02-resources/notes/ip/#route" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">



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

<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/02-resources/notes/ip/#route" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">



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