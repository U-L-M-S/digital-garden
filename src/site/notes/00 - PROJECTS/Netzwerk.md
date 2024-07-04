---
{"dg-publish":true,"permalink":"/00-projects/netzwerk/","tags":["netzwerk/subnetting","inProgress"],"noteIcon":""}
---

# Netzwerk 

[[02 - RESOURCES/Notes/IP Address\|IP Address]] wird in die Netzwerkkarte gefunden  und somit kann jeder Rechner/System, der ein [[02 - RESOURCES/Notes/IP Address\|IP Address]] hat identifiziert werden. Da jeder IP in eine [[00 - PROJECTS/Netzwerk\|Netzwerk]] Einzigartig ist.

Es ist sehr wichtig zu wissen, dass [[02 - RESOURCES/Notes/Subnet Mask\|Subnet Mask]] / Subnetzmaske eine riesige Rolle spielt. Dadurch können wir die [[02 - RESOURCES/Notes/Network Portion und Host\|Network Portion und Host]] herauslesen und noch viel mehr machen.

So eben das [[02 - RESOURCES/Notes/gateway\|gateway]] ist eine notwendig Begriff.


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


Durch die Verwendung von  [[02 - RESOURCES/Notes/Network Address Translation\|Network Address Translation]] können wir mit nur ein IP (Public) uns mit andere Geräte außerhalb unsere Netz kommunizieren. D.h ein Public IP für alle Geräte in unser Netz.

![Pasted image 20230913180918.png](/img/user/02%20-%20RESOURCES/Files/IMGs/Pasted%20image%2020230913180918.png)





</div></div>



## Subnetting
Für Subnetting brauchst du die folgende Kenntnissen:
- [[02 - RESOURCES/Notes/IP Address\|IP Address]] 
- [[02 - RESOURCES/Notes/Subnet Mask\|Subnet Mask]] 
- [[02 - RESOURCES/Notes/gateway\|gateway]] 
- [[02 - RESOURCES/Notes/Binärzahlen\|Binärzahlen]]
___
### 
<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">



## Hosts Herausfinden 
Nehmen wir an du hast diese Informationen:
- [[02 - RESOURCES/Notes/IP Address\|IP Address]]:192.168.32.5/24
- [[02 - RESOURCES/Notes/Subnet Mask\|Subnet Mask]]:255.255.255.0

um die Anzahl von mögliche **Hosts**([[02 - RESOURCES/Notes/Network Portion und Host#^099b19\|Network Portion und Host#^099b19]]) zu berechnen muss du nur den [[02 - RESOURCES/Notes/Subnet Mask\|Subnet Mask]] in [[02 - RESOURCES/Notes/Binärzahlen\|Binärzahlen]] darstellen und dann die Formel verwenden: $2^{{n}}-2$ wobei **n** die Anzahl von Nullen ist.

255.255.255.0 -> 11111111.11111111.11111111.00000000 -> (8 Nullen)

$2^{{8}}-2=254$ 
>[!info] Reminder
> Wir müssen 2 subtrahieren da wir 2 [[02 - RESOURCES/Notes/IP Address\|IP Address]] für Network Address und Broadcast Address brauchen.




</div></div>


### 
<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">



## Hosts Addieren 

Um Hosts zu addieren brauchst du die [[02 - RESOURCES/Notes/Subnet Mask\|Subnet Mask]] in [[02 - RESOURCES/Notes/Binärzahlen\|Binärzahlen]].

**255.255.255.0** -> 11111111.11111111.11111111.00000000 

Um mehrere [[00 - PROJECTS/Netzwerk\|Netzwerk]]en hinzufügen muss du ein Teil von den Host Bits ([[02 - RESOURCES/Notes/Network Portion und Host#^099b19\|Network Portion und Host#^099b19]]) nehmen.
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

und jetzt haben wir eine neue [[02 - RESOURCES/Notes/Subnet Mask\|Subnet Mask]].
Die lautet: **255.255.255.192**
und insgesamt haben wir /26 [[00 - PROJECTS/Netzwerk\|Netzwerk]]en.  

</div></div>

