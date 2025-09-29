---
{"dg-publish":true,"permalink":"/02-resources/notes/trunking-und-tagging/","tags":["informatik/netzwerk","informatik/hardware"],"noteIcon":"","updated":"2025-09-10T17:00:14.000+02:00"}
---

>Es wird oft in [[02 - RESOURCES/Notes/VLAN\|VLAN]]s über mehrere [[02 - RESOURCES/Notes/Switch\|Switch]]es eingesetzt, um die Anzahl der Anschlüsse bei den [[02 - RESOURCES/Notes/Switch\|Switch]]es zu erweitern.

Um verschiedene [[02 - RESOURCES/Notes/VLAN\|VLAN]]s über eine einzige Leitung zu versenden, muss man die Frames auseinanderhalten können. Die Frames erhalten ein „Label“: ein Tag. Dazu nimmt man ein normales Ethernet-Frame und fügt die VLAN-ID hinzu. Die VLAN-ID ist 12 Bit lang, wodurch bis zu 4.094 VLANs möglich sind (die erste und letzte ID sind reserviert: 0 und 4.095).


![Trunking und Tagging-20240722150258633.png](/img/user/02%20-%20RESOURCES/Files/IMG/Trunking%20und%20Tagging-20240722150258633.png)
>[!note] Trunking
> Es verbindet Switches, sodass mehrere VLANs über eine einzige Verbindung (Trunk) übertragen werden können.


![Trunking und Tagging-20240722150828181.png](/img/user/02%20-%20RESOURCES/Files/IMG/Trunking%20und%20Tagging-20240722150828181.png)
>[!note] Tagging
> Es fügt Frames eine VLAN-ID hinzu, um sie den richtigen VLANs zuzuordnen.


> **Trunking und Tagging**
> 
> > Wird bei [[02 - RESOURCES/Notes/VLAN\|VLAN]]s genutzt, um mehrere VLANs über eine **einzige Leitung** (Trunk) zwischen [[02 - RESOURCES/Notes/Switch\|Switch]]es zu transportieren.

---

> [!note] **Warum?**
> 
> - Spart Ports auf den Switches
>     
> - Ermöglicht es, viele VLANs über nur ein Kabel zu verbinden
>     
> - [[02 - RESOURCES/Notes/VLAN\|VLAN]]-IDs müssen erhalten bleiben, damit die Zuordnung im Ziel-Switch stimmt
>     

> [!tip] **Wie viele?**
> 
> - **12 Bit VLAN-ID** = **4.096 VLANs** theoretisch möglich
>     
> - Davon **4.094 nutzbar** (ID 0 = reserviert, ID 4.095 = Broadcast)
>     

---

> [!note] **Trunking**  
> Verbindet [[02 - RESOURCES/Notes/Switch\|Switch]]es über einen **Trunk-Port**, damit mehrere VLANs gleichzeitig über diese Verbindung laufen können.

> [!note] **Tagging**  
> Fügt jedem Ethernet-Frame eine **VLAN-ID** hinzu (innerhalb des Trunks).  
> Ohne Tagging würde der empfangende Switch nicht wissen, zu welchem VLAN der Frame gehört.

---

> [!tip]  
> Pro „normalem Port“ läuft normalerweise nur **1 VLAN**, im **Trunk** laufen **alle markierten VLANs** gleichzeitig!

---