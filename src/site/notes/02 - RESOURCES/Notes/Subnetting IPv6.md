---
{"dg-publish":true,"permalink":"/02-resources/notes/subnetting-i-pv6/","tags":["netzwerk/subnetting","netzwerk/ip/ipv6"],"noteIcon":""}
---

>Es funktioniert genau wie bei [[02 - RESOURCES/Notes/IPv4\|IPv4]]. [[02 - RESOURCES/Notes/IPv6\|IPv6]] hat aber eine [[02 - RESOURCES/Notes/Bit\|Bit]]sanzahl von 128 [[02 - RESOURCES/Notes/Bit\|Bit]]s.
>$$2^{128-mask_{bits}}$$


>[!example] Beispiel 1  
>FD00::/50 in 4 Subnetze  
>Okay, zunächst müssen wir das [[02 - RESOURCES/Notes/IPv6 Präfix\|IPv6 Präfix]] um 2 [[02 - RESOURCES/Notes/Bit\|Bit]]s erweitern.  
>$$2^{2}=4$$
>Das bedeutet, dass das [[02 - RESOURCES/Notes/IPv6 Präfix\|IPv6 Präfix]] auf **FD00::/52** erweitert wird, was unser erstes [[02 - RESOURCES/Notes/Subnetz-ID\|Subnetz-ID]] ergibt. Genauer gesagt: FD00:0000:0000:0000:0000:0000:0000:0000/52.  
>Aber lass uns die Kurzform verwenden. 
> 
>| FD00 | 0000 | 0000 | <mark style="background: #FFF3A3A6;">0</mark>000  |
>| :----: | :----: | :----: | ----- |
>| 16   | 16   | 16   | 4 |
>
>I. [[02 - RESOURCES/Notes/Subnetz-ID\|Subnetz-ID]]: FD00::/52  
>II. [[02 - RESOURCES/Notes/Subnetz-ID\|Subnetz-ID]]: FD00:0:0:<mark style="background: #FFF3A3A6;">1</mark>000::/52  
>III. [[02 - RESOURCES/Notes/Subnetz-ID\|Subnetz-ID]]: FD00:0:0:<mark style="background: #FFF3A3A6;">2</mark>000::/52  
>IV. [[02 - RESOURCES/Notes/Subnetz-ID\|Subnetz-ID]]: FD00:0:0:<mark style="background: #FFF3A3A6;">3</mark>000::/52


>[!note] Yep. Super einfach, wenn man [[02 - RESOURCES/Notes/IPv4\|IPv4]] und [[02 - RESOURCES/Notes/Subnetting IPv4\|Subnetting IPv4]] schon kann `fas:SmileWink`

>[!example] Beispiel 2
>FE80:0:3a:: /56 in 8 [[02 - RESOURCES/Notes/Subnetz\|Subnetz]]e
>[[02 - RESOURCES/Notes/IPv6 Präfix\|IPv6 Präfix]] 3 [[02 - RESOURCES/Notes/Bit\|Bit]]s erweitern.
>$$2^{3}=8$$
>
>FE80:0:3a:: /59
>Okay. Das ist eine extra Fall. Lass uns das genauer anschauen.
>
>
>| FE80 | 0000 | 003a | 0  0  0  0  |
>| ---- | ---- | ---- | ----- |
>| 16   | 16   | 16   | 4  4  4 |
>| 16   | 32   | 48   | 52 56 60 |
>
>Da wir ein [[02 - RESOURCES/Notes/IPv6 Präfix\|IPv6 Präfix]] von 59 Bit haben und eine ungerade Zahl verwenden, wird die Blockziffer nach dem Zielwert (60) berücksichtigt. 
>Die 16 möglichen Ziffern (0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F) werden auf 8 [[02 - RESOURCES/Notes/Subnetz\|Subnetz]]e **(Es wurde nach 8 [[02 - RESOURCES/Notes/Subnetz\|Subnetz]]e gefragt)** verteilt, was 2 Ziffern pro [[02 - RESOURCES/Notes/Subnetz\|Subnetz]] ergibt.
> 
> (<mark style="background: #FFB8EBA6;">0, 1,</mark> <mark style="background: #FF5582A6;">2, 3,</mark> <mark style="background: #FFB86CA6;">4, 5,</mark> <mark style="background: #FFB86CA6;">6, 7,</mark> <mark style="background: #FFF3A3A6;">8, 9,</mark> <mark style="background: #BBFABBA6;">A, B,</mark> <mark style="background: #ABF7F7A6;">C, D,</mark> <mark style="background: #ADCCFFA6;">E, F</mark>)
> 
> I. [Subnetz-ID](app://obsidian.md/Subnetz-ID): FE80:0:3a:: /59
> II. [Subnetz-ID](app://obsidian.md/Subnetz-ID): FE80:0:3a:20:: /59
> III. [Subnetz-ID](app://obsidian.md/Subnetz-ID): FE80:0:3a:40:: /59
> IV. [Subnetz-ID](app://obsidian.md/Subnetz-ID): FE80:0:3a:60:: /59
> V. [Subnetz-ID](app://obsidian.md/Subnetz-ID): FE80:0:3a:80:: /59
> VI. [Subnetz-ID](app://obsidian.md/Subnetz-ID): FE80:0:3a:A0:: /59
> VII. [Subnetz-ID](app://obsidian.md/Subnetz-ID): FE80:0:3a:C0:: /59
> VIII. [Subnetz-ID](app://obsidian.md/Subnetz-ID): FE80:0:3a:E0:: /59


