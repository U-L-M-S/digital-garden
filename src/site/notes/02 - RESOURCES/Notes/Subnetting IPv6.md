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
>I. [[02 - RESOURCES/Notes/Subnetz-ID\|Subnetz-ID]]: FD00::/52  
>II. [[02 - RESOURCES/Notes/Subnetz-ID\|Subnetz-ID]]: FD00:0:0:<mark style="background: #FFF3A3A6;">1</mark>000::/52  
>III. [[02 - RESOURCES/Notes/Subnetz-ID\|Subnetz-ID]]: FD00:0:0:<mark style="background: #FFF3A3A6;">2</mark>000::/52  
>IV. [[02 - RESOURCES/Notes/Subnetz-ID\|Subnetz-ID]]: FD00:0:0:<mark style="background: #FFF3A3A6;">3</mark>000::/52


>[!note] Yep. Super einfach, wenn man [[02 - RESOURCES/Notes/IPv4\|IPv4]] und [[02 - RESOURCES/Notes/Subnetting IPv4\|Subnetting IPv4]] schon kann `fas:SmileWink`

>[!example] Beispiel 2
>FE80:0:3a:: /56 in 8 Subnetze
>[[02 - RESOURCES/Notes/IPv6 Präfix\|IPv6 Präfix]] 3 [[02 - RESOURCES/Notes/Bit\|Bit]]s erweitern.
>$$2^{3}=8$$
>
>FE80:0:3a:: /59
>Okay. Das ist eine extra Fall. Lass uns das genauer anschauen.
>

| FE80 | 0000 | 003a | 0000  |
| ---- | ---- | ---- | ----- |
| 16   | 16   | 16   | 4+4+4 |
