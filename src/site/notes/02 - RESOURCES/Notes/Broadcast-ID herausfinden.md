---
{"dg-publish":true,"permalink":"/02-resources/notes/broadcast-id-herausfinden/","tags":["netzwerk/ip/ipv4"],"noteIcon":""}
---

>[!example] Bsp
>Um die [[02 - RESOURCES/Notes/Broadcast-ID\|Broadcast-ID]] zu identifizieren, können wir  dieselbe Logik wie beim [[02 - RESOURCES/Notes/Netzwerk-ID herausfinden\|Netzwerk-ID herausfinden]] anwenden.
>
(**192.168.1.4/16**)
>
Da wir [[02 - RESOURCES/Notes/CIDR\|CIDR]] lesen können (/16),  sehen wir, dass die [[02 - RESOURCES/Notes/Netzwerkmaske\|Netzwerkmaske]] 255.255.0.0 lautet. 
Wir wissen auch, dass das [[02 - RESOURCES/Notes/Broadcast-ID\|Broadcast-ID]] immer die letzte [[02 - RESOURCES/Notes/IP\|IP]] im [[02 - RESOURCES/Notes/Netzwerk\|Netzwerk]] ist.
>
Daher wissen wir, dass die 1. und 2. [[02 - RESOURCES/Notes/Oktett\|Oktett]]en sich nicht ändern können. Wir setzen die [[02 - RESOURCES/Notes/Netzwerkmaske\|Netzwerkmaske]] mit [[02 - RESOURCES/Notes/Binärzahl\|Binärzahl]]en 1 auf und alle [[02 - RESOURCES/Notes/Bit\|Bit]]s des [[02 - RESOURCES/Notes/Hostanteil\|Hostanteil]] auf: 
><mark style="background: #FFF3A3A6;">192.168</mark>
und den Rest mit 1 setzen:
>>> [[02 - RESOURCES/Notes/Binärzahl\|Binärzahl]]en
>> 
>>| 1. [[02 - RESOURCES/Notes/Oktett\|Oktett]]    | 2. [[02 - RESOURCES/Notes/Oktett\|Oktett]]    | 3. [[02 - RESOURCES/Notes/Oktett\|Oktett]] | 4. [[02 - RESOURCES/Notes/Oktett\|Oktett]] | Inhalt |
>>| --- | --- |---| --- | ---|
>>|  11000000   |  10101000  |  00000000 |  00000000   | [[02 - RESOURCES/Notes/IP\|IP]] |
>>|  11111111   |  11111111  |  <mark style="background: #FF5582A6;">00000000</mark> |  <mark style="background: #FF5582A6;">00000000</mark>   | [[02 - RESOURCES/Notes/Netzwerkmaske\|Netzwerkmaske]] |
>>|  11000000   |  10101000  |  <mark style="background: #FF5582A6;">11111111</mark> |  <mark style="background: #FF5582A6;">11111111</mark>   | **[[02 - RESOURCES/Notes/IP\|IP]] unveränderbar** |
>
 [[02 - RESOURCES/Notes/Netz-ID\|Netz-ID]]: <mark style="background: #FFF3A3A6;">192.168.255.255</mark>