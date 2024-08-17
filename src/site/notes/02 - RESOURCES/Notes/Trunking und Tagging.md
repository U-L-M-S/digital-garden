---
{"dg-publish":true,"permalink":"/02-resources/notes/trunking-und-tagging/","tags":["netzwerk","hardware"],"updated":"2024-07-22T16:28:03.000+02:00"}
---

>Es wird oft in [[02 - RESOURCES/Notes/VLAN\|VLAN]]s über mehrere [[02 - RESOURCES/Notes/Switch\|Switch]]es eingesetzt, um die Anzahl der Anschlüsse bei den [[02 - RESOURCES/Notes/Switch\|Switch]]es zu erweitern.

Um verschiedene [[02 - RESOURCES/Notes/VLAN\|VLAN]]s über eine einzige Leitung zu versenden, muss man die Frames auseinanderhalten können. Die Frames erhalten ein „Label“: ein Tag. Dazu nimmt man ein normales Ethernet-Frame und fügt die VLAN-ID hinzu. Die VLAN-ID ist 12 Bit lang, wodurch bis zu 4.094 VLANs möglich sind (die erste und letzte ID sind reserviert: 0 und 4.095).


![Trunking und Tagging-20240722150258633.png](/img/user/02%20-%20RESOURCES/Files/Trunking%20und%20Tagging-20240722150258633.png)
>[!note] Trunking
> Es verbindet Switches, sodass mehrere VLANs über eine einzige Verbindung (Trunk) übertragen werden können.


![Trunking und Tagging-20240722150828181.png](/img/user/02%20-%20RESOURCES/Files/Trunking%20und%20Tagging-20240722150828181.png)
>[!note] Tagging
> Es fügt Frames eine VLAN-ID hinzu, um sie den richtigen VLANs zuzuordnen.
