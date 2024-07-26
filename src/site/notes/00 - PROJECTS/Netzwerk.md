---
{"dg-publish":true,"permalink":"/00-projects/netzwerk/","tags":["netzwerk/subnetting","inProgress"],"noteIcon":""}
---

>Es ist eine Gruppe von miteinander verbundenen Computern und anderen Geräten, die Daten und Ressourcen gemeinsam nutzen können. 
>[[00 - PROJECTS/Netzwerk\|Netzwerk]]e ermöglichen den Austausch von Informationen und die Kommunikation zwischen den Geräten. 

>Es gibt verschiedene Typen von Netzwerken, darunter lokale Netzwerke ([[02 - RESOURCES/Notes/LAN\|LAN]]s), die Geräte innerhalb eines begrenzten geografischen Bereichs verbinden, und Weitverkehrsnetze ([[02 - RESOURCES/Notes/WAN\|WAN]]s), die Geräte über größere Entfernungen hinweg verbinden.
>Netzwerke nutzen verschiedene Technologien und [[02 - RESOURCES/Notes/Protokoll\|Protokoll]]e, um sicherzustellen, dass Daten effizient und zuverlässig übertragen werden.

[[IP-Adresse\|IP-Adresse]] wird in die Netzwerkkarte gefunden  und somit kann jeder Rechner/System, der eine [[02 - RESOURCES/Notes/Netzwerkkarte\|Netzwerkkarte]]  hat identifiziert werden. Da jeder [[02 - RESOURCES/Notes/IP\|IP]] in eine [[00 - PROJECTS/Netzwerk\|Netzwerk]] Einzigartig ist.

Es ist sehr wichtig zu wissen, dass [[02 - RESOURCES/Notes/Netzwerkmaske\|Netzwerkmaske]] /[[02 - RESOURCES/Notes/Netzwerkmaske\|Subnetzmaske]] eine riesige Rolle spielt. Dadurch können wir die [[02 - RESOURCES/Notes/Netzanteil und Hostanteil\|Netzanteil und Hostanteil]] herauslesen und noch viel mehr machen.

So eben das [[02 - RESOURCES/Notes/Gateway\|Gateway]] ist eine notwendig Begriff.


### 
<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">



### Übersicht
ich fühle den Befehl `ip a` an meine Rechner, Laptop und Handy. Dann erhalte ich folgende Informationen:

PC:
```bash
IPv4:
	192.168.1.204
Subnet Mask:
	255.255.255.0
Gateway:
	192.168.1.1
```

Laptop:
```bash
IPv4:
	192.168.1.25
Subnet Mask:
	255.255.255.0
Gateway:
	192.168.1.1 
```


Handy:
```bash
IPv4:
	192.168.1.69
Subnet Mask:
	255.255.255.0
Gateway:
	192.168.1.1
```	


![Pasted image 20230913160229.png](/img/user/02%20-%20RESOURCES/Files/IMGs/Pasted%20image%2020230913160229.png)


Durch die Verwendung von  [[02 - RESOURCES/Notes/NAT\|NAT]] können wir mit nur ein IP (Public) uns mit andere Geräte außerhalb unsere Netz kommunizieren. D.h ein Public IP für alle Geräte in unser Netz.

![Pasted image 20230913180918.png](/img/user/02%20-%20RESOURCES/Files/IMGs/Pasted%20image%2020230913180918.png)





</div></div>



## Subnetting
Für Subnetting brauchst du die folgende Kenntnissen:
- [[IP-Adresse\|IP-Adresse]] 
- [[02 - RESOURCES/Notes/Netzwerkmaske\|Netzwerkmaske]] 
- [[02 - RESOURCES/Notes/Gateway\|Gateway]] 
- [[02 - RESOURCES/Notes/Binärzahl\|Binärzahl]]
___
### 
<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/02-resources/notes/hosts-herausfinden/#hosts-herausfinden" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">



## Hosts Herausfinden 
Nehmen wir an du hast diese Informationen:
- [[02 - RESOURCES/Notes/IP\|IP]]:192.168.32.5/24
- [[02 - RESOURCES/Notes/Netzwerkmaske\|Netzwerkmaske]]:255.255.255.0

um die Anzahl von mögliche [Hosts]([[02 - RESOURCES/Notes/Netzanteil und Hostanteil#^099b19\|Netzanteil und Hostanteil#^099b19]]) zu berechnen muss du nur den [[02 - RESOURCES/Notes/Netzwerkmaske\|Netzwerkmaske]] in [[02 - RESOURCES/Notes/Binärzahl\|Binärzahl]] darstellen und dann die Formel verwenden: $2^{{n}}-2$ wobei **n** die Anzahl von Nullen ist.

255.255.255.0 -> 11111111.11111111.11111111.00000000 -> (8 Nullen)

$2^{{8}}-2=254$ 
>[!info] Reminder
> Wir müssen 2 subtrahieren da wir 2 [[IP-Adresse\|IP-Adresse]] für Network Address und Broadcast Address brauchen.




</div></div>


### 
<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/02-resources/notes/hosts-addieren/#hosts-addieren" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">



## Hosts Addieren 

Um Hosts zu addieren brauchst du die [[02 - RESOURCES/Notes/Netzwerkmaske\|Netzwerkmaske]] in [[02 - RESOURCES/Notes/Binärzahl\|Binärzahl]].

**255.255.255.0** -> 11111111.11111111.11111111.00000000 

Um mehrere [[00 - PROJECTS/Netzwerk\|Netzwerk]]en hinzufügen muss du ein Teil von den Host Bits ([[02 - RESOURCES/Notes/Netzanteil und Hostanteil#^099b19\|Netzanteil und Hostanteil#^099b19]]) nehmen.
Nehmen wir an du willst 4 Networks dazu machen.
Man muss erstmal die Standard Tabelle für Bits verdoppeln.

|          | -   | 2⁷  | 2⁶  | 2⁵  | 2⁴  | 2³  | 2²  | 2¹  | 2⁰  |
|:--------:| --- |:---:|:---:|:---:|:---:| :---: | :---: | :---: | :---: |
| Standard | -   | 128 | 64  | 32  | 16  | 8   | 4   | 2   | 1   |
|    Networks    | -   | 256 | 128 | 64  | 32  | 16  | 8   | **4**   | 2   |


und jetzt schauen wie viel Bits man braucht um die zu erreichen

|     |     |     |     |     |     |  1   |  1   |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 256 | 128 | 64  | 32  | 16  | 8   | **4**   | 2   | 

Also 2 Bits.
und jetzt muss man die Anzahl von Bits in die Host umflippen.

11111111.11111111.11111111.**00000000** ->  11111111.11111111.11111111.**11**000000 

und jetzt haben wir eine neue [[02 - RESOURCES/Notes/Netzwerkmaske\|Netzwerkmaske]].
Die lautet: **255.255.255.192**
und insgesamt haben wir /26 [[00 - PROJECTS/Netzwerk\|Netzwerk]]en.  

</div></div>

