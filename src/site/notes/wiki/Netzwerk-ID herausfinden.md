---
{"dg-publish":true,"permalink":"/wiki/netzwerk-id-herausfinden/","tags":["informatik/netzwerk"],"noteIcon":"","updated":"2026-07-19T03:56:26.000+02:00","dg-note-properties":{"aliases":["Netzwerk-ID herausfinden","netzwerk-ID herausfinden"],"created":"2024-07-26 14:32","links":"http://jodies.de/ipcalc","path":"Notes","tags":["informatik/netzwerk"]}}
---

>[!example] Beispiel
>Jetzt lass uns die [[wiki/Netz-ID\|Netz-ID]] von dieser [[02 - RESOURCES/Notes/IP\|02 - RESOURCES/Notes/IP]] (**192.168.1.4/16**) identifizieren.
>
Da wir [[wiki/CIDR\|CIDR]] lesen können (/16), sehen wir, dass die [[Netzwerkmaske\|Netzwerkmaske]] 255.255.0.0 lautet.
>
Daher wissen wir, dass das 1. und 2. [[wiki/Oktett\|Oktett]] sich nicht ändern können und dass die [[wiki/Netz-ID\|Netz-ID]] immer die erste [[02 - RESOURCES/Notes/IP\|02 - RESOURCES/Notes/IP]] ist. 
>Wir müssen nur die ersten beiden [[wiki/Oktett\|Oktett]]e wiederholen: 
>
>> Am besten machen wir das in [[wiki/Binärzahl\|Binärzahl]]en, um zufällige Schwierigkeiten zu vermeiden (falls die Netzwerkmaske kein [[wiki/Vielfaches\|Vielfaches]] von 8 ist).
>>Vergleiche [[02 - RESOURCES/Notes/IP\|02 - RESOURCES/Notes/IP]] und [[Netzwerkmaske\|Netzwerkmaske]] zusammen. Überall, wo eine 1 bei [[Netzwerkmaske\|Netzwerkmaske]] steht, darf der [[wiki/Bit\|Bit]]wert für den [[02 - RESOURCES/Notes/IP\|02 - RESOURCES/Notes/IP]] nicht geändert werden.
>>
>> 
>>| 1. [[wiki/Oktett\|Oktett]]    | 2. [[wiki/Oktett\|Oktett]]    | 3. [[wiki/Oktett\|Oktett]] | 4. [[wiki/Oktett\|Oktett]] | Inhalt |
>>| --- | --- |---| --- | ---|
>>|  11000000   |  10101000  | 00000000  |  00000000   | [[02 - RESOURCES/Notes/IP\|02 - RESOURCES/Notes/IP]] |
>>|  11111111   |  11111111  | 00000000  |  00000000   | [[Netzwerkmaske\|Netzwerkmaske]] |
>>|  11000000   |  10101000  | | |**[[02 - RESOURCES/Notes/IP\|02 - RESOURCES/Notes/IP]] unveränderbar**|
>
><mark style="background: #FFF3A3A6;">192.168</mark>
>und den Rest mit 0 setzen:
>
>> [[wiki/Binärzahl\|Binärzahl]]en
>> 
>>| 1. [[wiki/Oktett\|Oktett]]    | 2. [[wiki/Oktett\|Oktett]]    | 3. [[wiki/Oktett\|Oktett]] | 4. [[wiki/Oktett\|Oktett]] | Inhalt |
>>| --- | --- |---| --- | ---|
>>|  11000000   |  10101000  |  <mark style="background: #BBFABBA6;">00000000 </mark> |  <mark style="background: #BBFABBA6;">00000000</mark>   | [[02 - RESOURCES/Notes/IP\|02 - RESOURCES/Notes/IP]] |
>>|  11111111   |  11111111  |  00000000 |  00000000   | [[Netzwerkmaske\|Netzwerkmaske]] |
>>|  11000000   |  10101000  |  <mark style="background: #BBFABBA6;">00000000</mark> |  <mark style="background: #BBFABBA6;">00000000</mark>   | **[[02 - RESOURCES/Notes/IP\|02 - RESOURCES/Notes/IP]] unveränderbar** |
>
> [[wiki/Netz-ID\|Netz-ID]]: <mark style="background: #FFF3A3A6;">192.168.0.0</mark>

Der Grund, warum man mit den [[wiki/Bit\|Bit]]s/Tabell arbeitet, ist um logische Fehler zu vermeiden, wenn die gegebene [[Netzwerkmaske\|Netzwerkmaske]] kein [[wiki/Vielfaches\|Vielfaches]] von 8 ist.
Sieh Beispiel:

>[!example] Bsp mit nicht [[wiki/Vielfaches\|Vielfaches]] von 8
>Gegeben ist die [[02 - RESOURCES/Notes/IP\|02 - RESOURCES/Notes/IP]]  **198.154.27.0/22**.
>Man denkt sich sofort, dass die [[wiki/Netz-ID\|Netz-ID]] **198.157.0.0** ist.
>Das ist natürlich **falsch**. Achtet auf den [[wiki/CIDR\|CIDR]]! Die Zahl ist kein [[wiki/Vielfaches\|Vielfaches]] von 8 und somit können wir am besten diese in eine Tabelle eintragen.
>
>>|  -  |    A     |    B     |        C        |    D     |  E  | 
>>| :-: | :------: | :------: | :-------------: | :------: | :-: | 
>>|  1  |   198    |   154    |       27        |    0     |     |     
>>|  2  | 11000110 | 10011010 |  <mark style="background: #FFB8EBA6;">000110**11**</mark>   | 00000000 |     |
>>|  3  | 11111111 | 11111111 |  111111**00**   | 00000000 | /22 |     
>>|  4  |          |          | **↓** |          |     | 
>>|  5  |          |          | **↓** |          |     | 
>>|  6  |   198    |   154    |       24        |    0     |     |
>>|  7  | 11000110 | 10011010 |  <mark style="background: #FFB8EBA6;">000110**00**</mark>   | 00000000 |     |
>>|  8  |          |          |                 |          |     |
>>|  9  |          |          |                 |          |     |
>
>Die letzten **11** in C2 werden von den letzten **00** in C3 *nicht* berücksichtigt und daher gehören sie zum [[wiki/Hostanteil\|Hostanteil]].
>Somit können wir sagen, dass die [[wiki/Netz-ID\|Netz-ID]] hier **198.154.24.0** ist.
