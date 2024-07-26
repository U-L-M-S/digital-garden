---
{"dg-publish":true,"permalink":"/02-resources/notes/netzwerk-id-herausfinden/","tags":["netzwerk/ip/ipv4"],"noteIcon":"","updated":"2024-07-27T00:32:31.763+02:00"}
---

>[!example] Beispiel
>Jetzt lass uns die [[02 - RESOURCES/Notes/Netzwerk-ID\|Netzwerk-ID]] von dieser [[02 - RESOURCES/Notes/IP\|IP]] (**192.168.1.4/16**) identifizieren.
>
Da wir [[02 - RESOURCES/Notes/CIDR\|CIDR]] lesen können (/16), sehen wir, dass das [[02 - RESOURCES/Notes/Netzwerkmaske\|Netzwerkmaske]] 255.255.0.0 lautet.
>
Daher wissen wir, das die 1. und 2. [[02 - RESOURCES/Notes/Oktett\|Oktett]] sich nicht ändern können und dass die [[02 - RESOURCES/Notes/Netzwerk-ID\|Netzwerk-ID]] immer die erste [[02 - RESOURCES/Notes/IP\|IP]] ist. 
>Wir müssen nur die ersten beiden [[02 - RESOURCES/Notes/Oktett\|Oktett]]e wiederholen: 
>
>> Am besten machen wir das in [[02 - RESOURCES/Notes/Binärzahl\|Binärzahl]]en um zufällige Schwierigkeiten zu vermeiden (falls die Netzwerkmaske kein [[02 - RESOURCES/Notes/Vielfaches\|Vielfaches]] von 8 ist).
>>Vergleiche [[02 - RESOURCES/Notes/IP\|IP]] und [[02 - RESOURCES/Notes/Netzwerkmaske\|Netzwerkmaske]]  zusammen. Überall wo ein 1 bei [[02 - RESOURCES/Notes/Netzwerkmaske\|Netzwerkmaske]] steht, darf das [[02 - RESOURCES/Notes/Bit\|Bit]]wert für den [[02 - RESOURCES/Notes/IP\|IP]] nicht geändert werden.
>>
>> 
>>| 1. [[02 - RESOURCES/Notes/Oktett\|Oktett]]    | 2. [[02 - RESOURCES/Notes/Oktett\|Oktett]]    | 3. [[02 - RESOURCES/Notes/Oktett\|Oktett]] | 4. [[02 - RESOURCES/Notes/Oktett\|Oktett]] | Inhalt |
>>| --- | --- |---| --- | ---|
>>|  11000000   |  10101000  | 00000000  |  00000000   | [[02 - RESOURCES/Notes/IP\|IP]] |
>>|  11111111   |  11111111  | 00000000  |  00000000   | [[02 - RESOURCES/Notes/Netzwerkmaske\|Netzwerkmaske]] |
>>|  11000000   |  10101000  | | |**[[02 - RESOURCES/Notes/IP\|IP]] unveränderbar**|
>
><mark style="background: #FFF3A3A6;">192.168</mark>
>und den Rest mit 0 setzen:
>
>> [[02 - RESOURCES/Notes/Binärzahl\|Binärzahl]]en
>> 
>>| 1. [[02 - RESOURCES/Notes/Oktett\|Oktett]]    | 2. [[02 - RESOURCES/Notes/Oktett\|Oktett]]    | 3. [[02 - RESOURCES/Notes/Oktett\|Oktett]] | 4. [[02 - RESOURCES/Notes/Oktett\|Oktett]] | Inhalt |
>>| --- | --- |---| --- | ---|
>>|  11000000   |  10101000  |  00000000 |  00000000   | [[02 - RESOURCES/Notes/IP\|IP]] |
>>|  <mark style="background: #BBFABBA6;">11111111</mark>   |  <mark style="background: #BBFABBA6;">11111111</mark>  |  00000000 |  00000000   | [[02 - RESOURCES/Notes/Netzwerkmaske\|Netzwerkmaske]] |
>>|  <mark style="background: #BBFABBA6;">11000000</mark>   |  <mark style="background: #BBFABBA6;">10101000</mark>  |  00000000 |  00000000   | **[[02 - RESOURCES/Notes/IP\|IP]] unveränderbar** |
>
> [[02 - RESOURCES/Notes/Netzwerk-ID\|Netzwerk-ID]]: <mark style="background: #FFF3A3A6;">192.168.0.0</mark>
