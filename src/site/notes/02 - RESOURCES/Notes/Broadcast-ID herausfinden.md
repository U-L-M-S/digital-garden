---
{"dg-publish":true,"permalink":"/02-resources/notes/broadcast-id-herausfinden/","tags":["netzwerk/ip/ipv4"],"noteIcon":"","updated":"2024-07-26T23:16:35.481+02:00"}
---

>[!example] Bsp
>Um den [[02 - RESOURCES/Notes/Broadcast-ID\|Broadcast-ID]] zu identifizieren können wir das selbe Logik wie bei [[02 - RESOURCES/Notes/Netzwerk-ID herausfinden\|Netzwerk-ID herausfinden]] nutzen.
>
(**192.168.1.4/16**)
>
Da wir [[02 - RESOURCES/Notes/CIDR\|CIDR]] lesen können (/16), können wir sehen, dass das [[02 - RESOURCES/Notes/Netzwerkmaske\|Netzwerkmaske]] 255.255.0.0 lautet und wir wissen auch dass das [[02 - RESOURCES/Notes/Broadcast-ID\|Broadcast-ID]] immer die letzter [[02 - RESOURCES/Notes/IP\|IP]] in das [[00 - PROJECTS/Netzwerk\|Netzwerk]] ist.
>
Daher wissen wir das die 1. und 2. [[02 - RESOURCES/Notes/Oktett\|Oktett]]en sich nicht ändern können und den [[02 - RESOURCES/Notes/Netzwerkmaske\|Netzwerkmaske]] mit Binären ([[02 - RESOURCES/Notes/Binärzahl\|Binärzahl]]) 1 einsetzen und alle [[02 - RESOURCES/Notes/Bit\|Bit]]s von [[02 - RESOURCES/Notes/Hostanteil\|Hostanteil]]: 
><mark style="background: #FFF3A3A6;">192.168</mark>
und den Rest mit 1 setzen:
>>> [[02 - RESOURCES/Notes/Binärzahl\|Binärzahl]]en
>> 
>>| 1. [[02 - RESOURCES/Notes/Oktett\|Oktett]]    | 2. [[02 - RESOURCES/Notes/Oktett\|Oktett]]    | 3. [[02 - RESOURCES/Notes/Oktett\|Oktett]] | 4. [[02 - RESOURCES/Notes/Oktett\|Oktett]] | Inhalt |
>>| --- | --- |---| --- | ---|
>>|  11000000   |  10101000  |  00000000 |  00000000   | [[02 - RESOURCES/Notes/IP\|IP]] |
>>|  11111111   |  11111111  |  11111111 |  11111111   | [[02 - RESOURCES/Notes/Netzwerkmaske\|Netzwerkmaske]] |
>>|  11000000   |  10101000  |  00000000 |  00000000   | [[02 - RESOURCES/Notes/OR-Operator\|OR-Operator]] |
>
 [[02 - RESOURCES/Notes/Netzwerk-ID\|Netzwerk-ID]]: <mark style="background: #FFF3A3A6;">192.168.0.0</mark>