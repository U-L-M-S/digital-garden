---
{"dg-publish":true,"permalink":"/wiki/netzanteil-erweitern/","tags":["informatik/netzwerk"],"noteIcon":"","updated":"2026-07-19T03:56:26.000+02:00","dg-note-properties":{"aliases":["Netzanteil erweitern","netzanteil erweitern"],"created":"2024-07-29 13:46","links":null,"path":"Notes","tags":["informatik/netzwerk"]}}
---

>$$2^{n}=gewünschte Anzahl Von Subnetze$$

>Um das zu machen, müssen wir erstens wissen, wie viele Subnetze wir brauchen, um die [[wiki/Bit\|Bit]]s beim [[wiki/Netzanteil\|Netzanteil]] nach rechts zu verschieben und einen Teil vom [[wiki/Hostanteil\|Hostanteil]] für sich zu nehmen.
>$$2^{n}=gewünschte Anzahl Von Subnetze$$

>[!example] Anzahl der [[wiki/Bit\|Bit]]s berechen
>
>Nehmen wir an wir haben dieses [[wiki/IPv4\|IPv4]]: 192.168.0.0/24
>und wir möchten diese [[wiki/Netzwerk\|Netz]] in 4 kleinere Subnetze unterteilen.
>Dann benötigen wir $$2^{2}=4$$ 
>**2** [[wiki/Bit\|Bit]]s von den [[wiki/Hostanteil\|Hostanteil]].
>$$24+2=26$$
>
>Jetzt sieht die [[Netzwerkmaske\|Netzwerkmaske]] folgendermaßen aus: 192.168.0.0/27

Tabellarisch sieht es so aus:

|    [[wiki/Dezimal\|Dezimal]]     | >   |                    1. [[wiki/Oktett\|Oktett]]e                    |                    2. [[wiki/Oktett\|Oktett]]e                    |                    3. [[wiki/Oktett\|Oktett]]e                    | 4. [[wiki/Oktett\|Oktett]]e                                       |
| :------------: | --- | :--------------------------------------------------: | :--------------------------------------------------: | :--------------------------------------------------: | ---------------------------------------------------- |
| 192.168.0.0/24 | >   | <mark style="background: #ABF7F7A6;">11000000</mark> | <mark style="background: #ABF7F7A6;">10101000</mark> | <mark style="background: #ABF7F7A6;">00000000</mark> | 00000000                                             |
| 192.168.0.0/27 | >   | <mark style="background: #ABF7F7A6;">11000000</mark> | <mark style="background: #ABF7F7A6;">10101000</mark> | <mark style="background: #ABF7F7A6;">00000000</mark> | <mark style="background: #ABF7F7A6;">00</mark>000000 |


Im Fall von Zahlen, die kein [[wiki/Vielfaches\|Vielfaches]] von 2 sind, müssen wir die nächstgrößere mögliche Einheit nehmen.

>[!example] Anzahl der [Bit](app://obsidian.md/Bit)s berechnen, nicht [[wiki/Vielfaches\|Vielfaches]] von 2.
>Nehmen wir an, wir haben dieses [[wiki/IPv4\|IPv4]]: 192.168.0.0/24
>und wir möchten dieses [[wiki/Netzwerk\|Netz]] in 7 kleinere Subnetze unterteilen.
>Dann benötigen wir $$2^{3}=8$$ 
>**3** [[wiki/Bit\|Bit]]s von den [[wiki/Hostanteil\|Hostanteil]].
>$$24+3=27$$
>
>Jetzt sieht die [[Netzwerkmaske\|Netzwerkmaske]] folgendermaßen aus: 192.168.0.0/27


Tabellarisch sieht es so aus:

|    [[wiki/Dezimal\|Dezimal]]     | >   |                    1. [[wiki/Oktett\|Oktett]]e                    |                    2. [[wiki/Oktett\|Oktett]]e                    |                    3. [[wiki/Oktett\|Oktett]]e                    | 4. [[wiki/Oktett\|Oktett]]e                                       |
| :------------: | --- | :--------------------------------------------------: | :--------------------------------------------------: | :--------------------------------------------------: | ---------------------------------------------------- |
| 192.168.0.0/24 | >   | <mark style="background: #ABF7F7A6;">11000000</mark> | <mark style="background: #ABF7F7A6;">10101000</mark> | <mark style="background: #ABF7F7A6;">00000000</mark> | 00000000                                             |
| 192.168.0.0/27 | >   | <mark style="background: #ABF7F7A6;">11000000</mark> | <mark style="background: #ABF7F7A6;">10101000</mark> | <mark style="background: #ABF7F7A6;">00000000</mark> | <mark style="background: #ABF7F7A6;">000</mark>00000 |


