---
{"dg-publish":true,"permalink":"/02-resources/notes/dynamisches-routing/","tags":["netzwerk/gateway","GFN/prüfungsrelevant/AP1"],"noteIcon":"","updated":"2025-07-12T13:31:41.000+02:00"}
---

>Die Konfiguration von die Routingtabellen werden von jeder Router fast wie in Echtzeit angepasst und aktualisiert.

>Die Router senden sich gegenseitig Daten um ihre Routingtabellen aktuell zu halten.

>[!note] 
>Die [[02 - RESOURCES/Notes/Datenpakete\|Datenpakete]] werden automatisch von Router zu Router transportiert, bis sie ihr Ziel erreichen. 
>Im Fall einer Verbindungunterbrechung wird ein neuer Pfad durch die gesamte Anzahl der [[02 - RESOURCES/Notes/Hop\|Hop]]s / die Geschwindigkeit  über die Gesamtstrecke erstellt (die kleinste Anzahl an [[02 - RESOURCES/Notes/Hop\|Hop]]s /der schnellste Weg ist der neueste Weg).
![Dynamisches Routing-20240723121714162.png](/img/user/02%20-%20RESOURCES/Files/IMG/Dynamisches%20Routing-20240723121714162.png)

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

[[02 - RESOURCES/Notes/Dynamische Routingprotokolle\|Dynamische Routingprotokolle]]