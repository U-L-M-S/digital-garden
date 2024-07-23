---
{"dg-publish":true,"permalink":"/02-resources/notes/dynamisches-routing/","tags":["netzwerk/gateway"],"noteIcon":""}
---

>Die Konfiguration von die Routing-Tabellen werden von jeder Router das wie in Echtzeit angepasst und aktualisiert.

>Die Router senden sich gegenseitig ihre Routen zu

>[!note] 
>Die [[02 - RESOURCES/Notes/Datenpakete\|Datenpakete]] werden automatisch von Router zu Router transportiert, bis sie ihr Ziel erreichen. 
>Im Fall einer Verbindungunterbrechung wird ein neuer Pfad durch die gesamte Anzahl von [[02 - RESOURCES/Notes/Hop\|Hop]]s erstellt (der schnellest Weg ist der neueste Weg).
![Dynamisches Routing-20240723121714162.png](/img/user/02%20-%20RESOURCES/Files/Dynamisches%20Routing-20240723121714162.png)

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