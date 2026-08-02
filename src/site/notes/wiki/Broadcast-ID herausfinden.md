---
{"dg-publish":true,"permalink":"/wiki/broadcast-id-herausfinden/","tags":["informatik/netzwerk"],"noteIcon":"","updated":"2026-07-19T03:56:26.702+02:00","dg-note-properties":{"aliases":["Broadcast-ID herausfinden","broadcast-ID herausfinden"],"created":"2024-07-26 14:37","links":null,"path":"Notes","tags":["informatik/netzwerk"]}}
---

>[!example] Bsp
>Um die [[wiki/Broadcast-ID\|Broadcast-ID]] zu identifizieren, können wir  dieselbe Logik wie beim [[wiki/Netzwerk-ID herausfinden\|Netzwerk-ID herausfinden]] anwenden.
>
(**192.168.1.4/16**)
>
Da wir [[wiki/CIDR\|CIDR]] lesen können (/16),  sehen wir, dass die [[Netzwerkmaske\|Netzwerkmaske]] 255.255.0.0 lautet. 
Wir wissen auch, dass das [[wiki/Broadcast-ID\|Broadcast-ID]] immer die letzte [[02 - RESOURCES/Notes/IP\|02 - RESOURCES/Notes/IP]] im [[wiki/Netzwerk\|Netzwerk]] ist.
>
Daher wissen wir, dass die 1. und 2. [[wiki/Oktett\|Oktett]]en sich nicht ändern können. Wir setzen die [[Netzwerkmaske\|Netzwerkmaske]] mit [[wiki/Binärzahl\|Binärzahl]]en 1 auf und alle [[wiki/Bit\|Bit]]s des [[wiki/Hostanteil\|Hostanteil]] auf: 
><mark style="background: #FFF3A3A6;">192.168</mark>
und den Rest mit 1 setzen:
>>> [[wiki/Binärzahl\|Binärzahl]]en
>> 
>>| 1. [[wiki/Oktett\|Oktett]]    | 2. [[wiki/Oktett\|Oktett]]    | 3. [[wiki/Oktett\|Oktett]] | 4. [[wiki/Oktett\|Oktett]] | Inhalt |
>>| --- | --- |---| --- | ---|
>>|  11000000   |  10101000  |  00000000 |  00000000   | [[02 - RESOURCES/Notes/IP\|02 - RESOURCES/Notes/IP]] |
>>|  11111111   |  11111111  |  <mark style="background: #FF5582A6;">00000000</mark> |  <mark style="background: #FF5582A6;">00000000</mark>   | [[Netzwerkmaske\|Netzwerkmaske]] |
>>|  11000000   |  10101000  |  <mark style="background: #FF5582A6;">11111111</mark> |  <mark style="background: #FF5582A6;">11111111</mark>   | **[[02 - RESOURCES/Notes/IP\|02 - RESOURCES/Notes/IP]] unveränderbar** |
>
 [[wiki/Netz-ID\|Netz-ID]]: <mark style="background: #FFF3A3A6;">192.168.255.255</mark>