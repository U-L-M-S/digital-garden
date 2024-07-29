---
{"dg-publish":true,"permalink":"/02-resources/notes/dns/","tags":["netzwerk/dns"],"noteIcon":"","updated":"2024-07-08T14:03:10.000+02:00"}
---

> Domain Name System



Wenn wir beispielsweise eine URL in unseren Browser eingeben, wie zum Beispiel www.haus-meyer.bank.com, werden wir direkt zur Website der Bank Haus Meyer weitergeleitet. Der Prozess, der all das möglich macht, ist nicht so simpel, wie es scheint.

Um zu begreifen, was eigentlich hinter den Bühne passiert, musst du verstehen, was Domain Name Server (DNS) sind und wie der gesamte Ablauf von Anfragen (Requests) und Antworten (Responses) funktioniert.

<mark style="background: #BBFABBA6;">haus-meyer</mark>.<mark style="background: #FFF3A3A6;">bank</mark>.<mark style="background: #FF5582A6;">com</mark>

<mark style="background: #BBFABBA6;">[[02 - RESOURCES/Notes/subdomain\|subdomain]]</mark>
<mark style="background: #FFF3A3A6;">[[02 - RESOURCES/Notes/domain\|domain]]</mark>
<mark style="background: #FF5582A6;">[[02 - RESOURCES/Notes/top-level Domain\|top-level Domain]]</mark>

```mermaid
graph LR

    boxA[PC]
    boxB[Recursive Resolver]
    boxC[Facebook\nServer]
    boxD[Root Server A\nTDL: '.de']
    boxE[Root Server B\nTDL: '.com']
    boxF[Authoritative\nServer]
    

    boxA --> |1\nwww.bank.com| boxB
    boxB --> |2\nwww.bank.com| boxD
    boxD --> |3\nListe Root-Server '.com'| boxB
    boxB --> |4\nwww.bank.com| boxE
    boxE --> |5\nIP Root-Server mit 'bank.com'| boxB
    boxB --> |6\nwww.bank.com| boxF
    boxF --> |7\nIP von 'www.bank.com'| boxB
    boxB --> |8\nIP von 'www.bank.com'| boxA
    boxA --> |9\nrequest an der IP| boxC
    boxC --> |10\nreponse index.html| boxA
    
```
{ #1245f6}


Wie du es sehen kannst macht der Recursive Resolver die ganze Arbeit. Um das alles schneller zu machen wurde das [[02 - RESOURCES/Notes/TTL Cache\|TTL Cache]] zwischen die  Root Servers und den Recursive Resolver eingefügt.

### Beispiel 
Um das besser zu verstehen. Lass uns den Website [uol](https://www.uol.com.br/)  (https://www.uol.com.br/)besuchen. So läuft es ab:
>[!summary] 
>- Mein Browser schickt ein Request an der Resolver in Frankfurt
> - Diese schickt eine request an den Root-Server(am nähst) mit den Endung '.br' 
> - Es kriegt zurück eine Liste mit allen Root-Servers die '.br' TLD haben 
> - Der Resolver schickt erneut eine Request , aber dieses mal an der Authoritative Server und diese schickt der IP von uol zurück 
> - Sobald der Recursive Resolver das enthält schickt es an mein Browser zurück 
> - mein Browser jetzt muss nur ein Request an diese IP schicken und auf den Response warten