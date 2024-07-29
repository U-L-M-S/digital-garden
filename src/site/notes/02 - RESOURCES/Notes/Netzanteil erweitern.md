---
{"dg-publish":true,"permalink":"/02-resources/notes/netzanteil-erweitern/","tags":["netzwerk/subnetting","netzwerk/ip/ipv4"],"noteIcon":"","updated":"2024-07-29T14:29:17.000+02:00"}
---

>$$2^{n}=gewünsche Anzahl Von Subnetze$$

>Um das zumachen müssen wir erstens wissen wie viele Subnetze wir brauchen um die [[02 - RESOURCES/Notes/Bit\|Bit]]s bei den [[02 - RESOURCES/Notes/Netzanteil\|Netzanteil]] nach Rechts zu verschieben und ein Teil von den [[02 - RESOURCES/Notes/Hostanteil\|Hostanteil]] für sich zunehmen.
>$$2^{n}=gewünsche Anzahl Von Subnetze$$

>[!example] Anzahl der [[02 - RESOURCES/Notes/Bit\|Bit]]s berechen
>
>Nehmen wir an wir haben dieses [[02 - RESOURCES/Notes/IP\|IP]]: 192.168.0.0/24
>und wir möchten diese Netz in 4 kleinere Subnetze unterteilen.
>Dann benötigen wir $$2^{2}=4$$ 
>**2** [[02 - RESOURCES/Notes/Bit\|Bit]]s von den [[02 - RESOURCES/Notes/Hostanteil\|Hostanteil]].
>$$24+2=26$$
>
>Jetzt sieht die [[02 - RESOURCES/Notes/Netzwerkmaske\|Netzwerkmaske]] folgendes aus: 192.168.0.0/27

Tabellarisch sieht es so aus:

|    Dezimal     | >   |                    1. [[02 - RESOURCES/Notes/Oktett\|Oktett]]e                    |                    2. [[02 - RESOURCES/Notes/Oktett\|Oktett]]e                    |                    3. [[02 - RESOURCES/Notes/Oktett\|Oktett]]e                    | 4. [[02 - RESOURCES/Notes/Oktett\|Oktett]]e                                       |
| :------------: | --- | :--------------------------------------------------: | :--------------------------------------------------: | :--------------------------------------------------: | ---------------------------------------------------- |
| 192.168.0.0/24 | >   | <mark style="background: #ABF7F7A6;">11000000</mark> | <mark style="background: #ABF7F7A6;">10101000</mark> | <mark style="background: #ABF7F7A6;">00000000</mark> | 00000000                                             |
| 192.168.0.0/27 | >   | <mark style="background: #ABF7F7A6;">11000000</mark> | <mark style="background: #ABF7F7A6;">10101000</mark> | <mark style="background: #ABF7F7A6;">00000000</mark> | <mark style="background: #ABF7F7A6;">00</mark>000000 |


Im Fall von Zahlen, die kein [[02 - RESOURCES/Notes/Vielfaches\|Vielfaches]] von 2 sind, müssen wir das nächstgrößere mögliche Einheit nehmen.

>[!example] Anzahl der [Bit](app://obsidian.md/Bit)s berechnen, nicht [[02 - RESOURCES/Notes/Vielfaches\|Vielfaches]] von 2.
>Nehmen wir an, wir haben dieses [[02 - RESOURCES/Notes/IP\|IP]]: 192.168.0.0/24
>und wir möchten dieses Netz in 7 kleinere Subnetze unterteilen.
>Dann benötigen wir $$2^{3}=8$$ 
>**3** [[02 - RESOURCES/Notes/Bit\|Bit]]s von den [[02 - RESOURCES/Notes/Hostanteil\|Hostanteil]].
>$$24+3=27$$
>
>Jetzt sieht die [[02 - RESOURCES/Notes/Netzwerkmaske\|Netzwerkmaske]] folgt aus: 192.168.0.0/27


Tabellarisch sieht es so aus:

|    Dezimal     | >   |                    1. [[02 - RESOURCES/Notes/Oktett\|Oktett]]e                    |                    2. [[02 - RESOURCES/Notes/Oktett\|Oktett]]e                    |                    3. [[02 - RESOURCES/Notes/Oktett\|Oktett]]e                    | 4. [[02 - RESOURCES/Notes/Oktett\|Oktett]]e                                       |
| :------------: | --- | :--------------------------------------------------: | :--------------------------------------------------: | :--------------------------------------------------: | ---------------------------------------------------- |
| 192.168.0.0/24 | >   | <mark style="background: #ABF7F7A6;">11000000</mark> | <mark style="background: #ABF7F7A6;">10101000</mark> | <mark style="background: #ABF7F7A6;">00000000</mark> | 00000000                                             |
| 192.168.0.0/27 | >   | <mark style="background: #ABF7F7A6;">11000000</mark> | <mark style="background: #ABF7F7A6;">10101000</mark> | <mark style="background: #ABF7F7A6;">00000000</mark> | <mark style="background: #ABF7F7A6;">000</mark>00000 |


