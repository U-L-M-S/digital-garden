---
{"dg-publish":true,"permalink":"/02-resources/notes/distanzvektor-routing/","tags":["netzwerk/protocol"],"updated":"2024-07-24T15:24:46.000+02:00"}
---

>Das Protokoll verwendet [[02 - RESOURCES/Notes/Hop\|Hop]]s, um den schnellsten Weg zu finden. 

>- Die Verbindung mit den wenigsten [[02 - RESOURCES/Notes/Hop\|Hop]]s zum Ziel wird immer bevorzugt. 
>- Die Wegauswahl wird automatisch angepasst.
>- [[02 - RESOURCES/Notes/Router\|Router]] schickt ihre Daten an ihre Nachbarn
>- Jeder [[02 - RESOURCES/Notes/Router\|Router]] weiß die Anzahl der [[02 - RESOURCES/Notes/Hop\|Hop]]s zu jedem anderen Router.
>- Es wird von [[02 - RESOURCES/Notes/RIPv2\|RIPv2]] und [[02 - RESOURCES/Notes/RIPng\|RIPng]] verwendet.

![Distanzvektor Routing-20240724143901724.png](/img/user/02%20-%20RESOURCES/Files/Distanzvektor%20Routing-20240724143901724.png)

>[!summary] 
>D.h. der Weg mit geringste Anzahl von [[02 - RESOURCES/Notes/Router\|Router]]s wird hier immer ausgewählt.

