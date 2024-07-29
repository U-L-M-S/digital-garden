---
{"dg-publish":true,"permalink":"/02-resources/notes/netzwerk-id-herausfinden/","tags":["netzwerk/ip/ipv4"],"noteIcon":""}
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
>>|  11000000   |  10101000  |  <mark style="background: #BBFABBA6;">00000000 </mark> |  <mark style="background: #BBFABBA6;">00000000</mark>   | [[02 - RESOURCES/Notes/IP\|IP]] |
>>|  11111111   |  11111111  |  00000000 |  00000000   | [[02 - RESOURCES/Notes/Netzwerkmaske\|Netzwerkmaske]] |
>>|  11000000   |  10101000  |  <mark style="background: #BBFABBA6;">00000000</mark> |  <mark style="background: #BBFABBA6;">00000000</mark>   | **[[02 - RESOURCES/Notes/IP\|IP]] unveränderbar** |
>
> [[02 - RESOURCES/Notes/Netzwerk-ID\|Netzwerk-ID]]: <mark style="background: #FFF3A3A6;">192.168.0.0</mark>

Der Grund warum man mit den [[02 - RESOURCES/Notes/Bit\|Bit]]s/Tabel arbeitet ist um logische Fehler zu vermeiden wenn das gegebene  [[02 - RESOURCES/Notes/Netzwerkmaske\|Netzwerkmaske]] nicht ein [[02 - RESOURCES/Notes/Vielfaches\|Vielfaches]] von 8 ist.
Sieh Beispiel:

>[!example] Bsp mit nicht [[02 - RESOURCES/Notes/Vielfaches\|Vielfaches]] von 8
>Gegeben ist die [[02 - RESOURCES/Notes/IP\|IP]]  **198.154.27.0/22**.
>Man denkt sich sofort, dass die [[02 - RESOURCES/Notes/Netzwerk-ID\|Netzwerk-ID]] **198.157.0.0** ist.
>Das ist natürlich **falsch**. Artet auf den [[02 - RESOURCES/Notes/CIDR\|CIDR]]! Die Zahl ist keine [[02 - RESOURCES/Notes/Vielfaches\|Vielfaches]] von 8 und somit können wir am besten diese in eine Tabelle eintragen.
>
>>|  -  |    A     |    B     |        C        |    D     |  E  |  F  |  G  |     |
>>| :-: | :------: | :------: | :-------------: | :------: | :-: | 
>>|  1  |   198    |   154    |       27        |    0     |     |     |     |     |
>>|  2  | 11000110 | 10011010 |  <mark style="background: #FFB8EBA6;">000110**11**</mark>   | 00000000 |     |     |     |     |
>>|  3  | 11111111 | 11111111 |  111111**00**   | 00000000 | /22 |     |     |     |
>>|  4  |          |          | **↓** |          |     |     |     |     |
>>|  5  |          |          | **↓** |          |     |     |     |     |
>>|  6  |   198    |   154    |       24        |    0     |     |     |     |     |
>>|  7  | 11000110 | 10011010 |  <mark style="background: #FFB8EBA6;">000110**00**</mark>   | 00000000 |     |     |     |     |
>>|  8  |          |          |                 |          |     |     |     |     |
>>|  9  |          |          |                 |          |     |     |     |     |
>
>Die letzten **11** in C2 werden von die letzten **00** in C3 *nicht* berücksichtigen und daher gehören sie zu den [[02 - RESOURCES/Notes/Hostanteil\|Hostanteil]].
>Somit können wir sagen, dass die [[02 - RESOURCES/Notes/Netzwerk-ID\|Netzwerk-ID]] hier **198.154.24.0** ist.
