---
{"dg-publish":true,"permalink":"/02-resources/notes/netzanteil-erweitern/","tags":["informatik/netzwerk/subnetting","informatik/netzwerk/ip/ipv4"],"noteIcon":"","updated":"2026-05-12T16:15:12.965+02:00","dg-note-properties":{"aliases":["Netzanteil erweitern","netzanteil erweitern"],"created":"2024-07-29 13:46","links":null,"path":"Notes","tags":["informatik/netzwerk/subnetting","informatik/netzwerk/ip/ipv4"]}}
---

>$$2^{n}=gewünschte Anzahl Von Subnetze$$

>Um das zu machen, müssen wir erstens wissen, wie viele Subnetze wir brauchen, um die [[02 - RESOURCES/Notes/Bit\|Bit]]s beim [[02 - RESOURCES/Notes/Netzanteil\|Netzanteil]] nach rechts zu verschieben und einen Teil vom [[02 - RESOURCES/Notes/Hostanteil\|Hostanteil]] für sich zu nehmen.
>$$2^{n}=gewünschte Anzahl Von Subnetze$$

>[!example] Anzahl der [[02 - RESOURCES/Notes/Bit\|Bit]]s berechen
>
>Nehmen wir an wir haben dieses [[02 - RESOURCES/Notes/IPv4\|IPv4]]: 192.168.0.0/24
>und wir möchten diese [[02 - RESOURCES/Notes/Netzwerk\|Netz]] in 4 kleinere Subnetze unterteilen.
>Dann benötigen wir $$2^{2}=4$$ 
>**2** [[02 - RESOURCES/Notes/Bit\|Bit]]s von den [[02 - RESOURCES/Notes/Hostanteil\|Hostanteil]].
>$$24+2=26$$
>
>Jetzt sieht die [[Netzwerkmaske\|Netzwerkmaske]] folgendermaßen aus: 192.168.0.0/27

Tabellarisch sieht es so aus:

|    [[02 - RESOURCES/Notes/Dezimal\|Dezimal]]     | >   |                    1. [[02 - RESOURCES/Notes/Oktett\|Oktett]]e                    |                    2. [[02 - RESOURCES/Notes/Oktett\|Oktett]]e                    |                    3. [[02 - RESOURCES/Notes/Oktett\|Oktett]]e                    | 4. [[02 - RESOURCES/Notes/Oktett\|Oktett]]e                                       |
| :------------: | --- | :--------------------------------------------------: | :--------------------------------------------------: | :--------------------------------------------------: | ---------------------------------------------------- |
| 192.168.0.0/24 | >   | <mark style="background: #ABF7F7A6;">11000000</mark> | <mark style="background: #ABF7F7A6;">10101000</mark> | <mark style="background: #ABF7F7A6;">00000000</mark> | 00000000                                             |
| 192.168.0.0/27 | >   | <mark style="background: #ABF7F7A6;">11000000</mark> | <mark style="background: #ABF7F7A6;">10101000</mark> | <mark style="background: #ABF7F7A6;">00000000</mark> | <mark style="background: #ABF7F7A6;">00</mark>000000 |


Im Fall von Zahlen, die kein [[02 - RESOURCES/Notes/Vielfaches\|Vielfaches]] von 2 sind, müssen wir die nächstgrößere mögliche Einheit nehmen.

>[!example] Anzahl der [Bit](app://obsidian.md/Bit)s berechnen, nicht [[02 - RESOURCES/Notes/Vielfaches\|Vielfaches]] von 2.
>Nehmen wir an, wir haben dieses [[02 - RESOURCES/Notes/IPv4\|IPv4]]: 192.168.0.0/24
>und wir möchten dieses [[02 - RESOURCES/Notes/Netzwerk\|Netz]] in 7 kleinere Subnetze unterteilen.
>Dann benötigen wir $$2^{3}=8$$ 
>**3** [[02 - RESOURCES/Notes/Bit\|Bit]]s von den [[02 - RESOURCES/Notes/Hostanteil\|Hostanteil]].
>$$24+3=27$$
>
>Jetzt sieht die [[Netzwerkmaske\|Netzwerkmaske]] folgendermaßen aus: 192.168.0.0/27


Tabellarisch sieht es so aus:

|    [[02 - RESOURCES/Notes/Dezimal\|Dezimal]]     | >   |                    1. [[02 - RESOURCES/Notes/Oktett\|Oktett]]e                    |                    2. [[02 - RESOURCES/Notes/Oktett\|Oktett]]e                    |                    3. [[02 - RESOURCES/Notes/Oktett\|Oktett]]e                    | 4. [[02 - RESOURCES/Notes/Oktett\|Oktett]]e                                       |
| :------------: | --- | :--------------------------------------------------: | :--------------------------------------------------: | :--------------------------------------------------: | ---------------------------------------------------- |
| 192.168.0.0/24 | >   | <mark style="background: #ABF7F7A6;">11000000</mark> | <mark style="background: #ABF7F7A6;">10101000</mark> | <mark style="background: #ABF7F7A6;">00000000</mark> | 00000000                                             |
| 192.168.0.0/27 | >   | <mark style="background: #ABF7F7A6;">11000000</mark> | <mark style="background: #ABF7F7A6;">10101000</mark> | <mark style="background: #ABF7F7A6;">00000000</mark> | <mark style="background: #ABF7F7A6;">000</mark>00000 |


