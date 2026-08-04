---
{"dg-publish":true,"permalink":"/wiki/distanzvektor-routing/","tags":["informatik/netzwerk"],"noteIcon":"","updated":"2026-07-19T03:56:26.000+02:00","dg-note-properties":{"aliases":["Distanzvektor Routing","distanzvektor Routing"],"created":"2024-07-24 13:44","links":null,"path":"Notes","tags":["informatik/netzwerk"]}}
---

>Das Protokoll verwendet [[wiki/Hop\|Hop]]s, um den schnellsten Weg zu finden. 

>- Die Verbindung mit den wenigsten [[wiki/Hop\|Hop]]s zum Ziel wird immer bevorzugt. 
>- Die Wegauswahl wird automatisch angepasst.
>- [[wiki/Router\|Router]] schickt ihre Daten an ihre Nachbarn
>- Jeder [[wiki/Router\|Router]] weiß die Anzahl der [[wiki/Hop\|Hop]]s zu jedem anderen Router.
>- Es wird von [[wiki/RIPv2\|RIPv2]] und [[wiki/RIPng\|RIPng]] verwendet.

![Distanzvektor Routing-20240724143901724.png](/img/user/assets/IMG/Distanzvektor%20Routing-20240724143901724.png)

>[!summary] 
>D.h. der Weg mit geringste Anzahl von [[wiki/Router\|Router]]s wird hier immer ausgewählt.

