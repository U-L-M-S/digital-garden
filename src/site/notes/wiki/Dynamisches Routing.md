---
{"dg-publish":true,"permalink":"/wiki/dynamisches-routing/","tags":["ausbildung/gfn/ap1","informatik/netzwerk/gateway"],"noteIcon":"","updated":"2025-10-29T12:59:05.000+01:00","dg-note-properties":{"aliases":["dynamisches Routing"],"created":"2024-07-23 10:55","links":null,"path":["Notes"],"tags":["ausbildung/gfn/ap1","informatik/netzwerk/gateway"]}}
---

>Die Konfiguration von die Routingtabellen werden von jeder Router fast wie in Echtzeit angepasst und aktualisiert.

>Die Router senden sich gegenseitig Daten um ihre Routingtabellen aktuell zu halten.

>[!note] 
>Die [[wiki/Datenpakete\|Datenpakete]] werden automatisch von Router zu Router transportiert, bis sie ihr Ziel erreichen. 
>Im Fall einer Verbindungunterbrechung wird ein neuer Pfad durch die gesamte Anzahl der [[wiki/Hop\|Hop]]s / die Geschwindigkeit  über die Gesamtstrecke erstellt (die kleinste Anzahl an [[wiki/Hop\|Hop]]s /der schnellste Weg ist der neueste Weg).
![Dynamisches Routing-20240723121714162.png](/img/user/assets/IMG/Dynamisches%20Routing-20240723121714162.png)

>[!multi-column]
> 
>>[!check] Vorteile
>>- Kein manuelles Berechnen und Verwalten der Routen.
>>- Neue Routen werden automatisch erkannt und konfiguriert.
>>- Sehr einfache Vergrößerung und Verkleinerung von Netzwerken.
> 
>>[!fail] Nachteile
>>-  Router benötigen mehr CPU und Speicher als normal.
>>-  Ein wenig Bandbreite geht verloren.
>>- Um vernünftig zu routen, muss eine funktionierende Erstkonfiguration erstellt werden.

[[wiki/Dynamische Routingprotokolle\|Dynamische Routingprotokolle]]