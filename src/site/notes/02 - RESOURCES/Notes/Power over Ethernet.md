---
{"dg-publish":true,"permalink":"/02-resources/notes/power-over-ethernet/","tags":["GFN/prüfungsrelevant/AP1/vorbereitung","netzwerk"],"noteIcon":"","updated":"2025-09-05T10:12:31.271+02:00"}
---

>**Power over [[02 - RESOURCES/Notes/Ethernet\|Ethernet]] (PoE)** ist eine Technik, die Geräte über ein einziges [[02 - RESOURCES/Notes/Ethernet\|Ethernet]]-Kabel gleichzeitig mit **Daten** und **Strom** versorgt.
> 
> > Wird oft für Geräte wie [[02 - RESOURCES/Notes/Access-Point\|Access-Point]]s, [[02 - RESOURCES/Notes/IP\|IP]]-Kameras oder VoIP-Telefone genutzt.

![PoE-WithPoE_tcm151-114959.jpg](/img/user/02%20-%20RESOURCES/Files/PoE-WithPoE_tcm151-114959.jpg)

> [!tip]  
> Du brauchst keinen separaten Stromanschluss für das Endgerät – das [[02 - RESOURCES/Notes/Ethernet\|Ethernet]]-Kabel übernimmt beides (Strom + [[02 - RESOURCES/Notes/Netzwerk\|Netzwerk]]).

> [!note] Varianten:
> 
> - **Endspan**: PoE wird direkt vom [[02 - RESOURCES/Notes/Switch\|Switch]] mitgeliefert (PoE-fähiger [[02 - RESOURCES/Notes/Switch\|Switch]]).
> - **Midspan**: Ein separates PoE-Injektor-Gerät speist den Strom zusätzlich zwischen [[02 - RESOURCES/Notes/Switch\|Switch]] und Endgerät ein.

> [!tip] Leistungsklassen:
> 
> - **PoE (IEEE 802.3af)** → max. **15,4 Watt**
> - **PoE+ (IEEE 802.3at)** → max. **30 Watt**
> - **PoE++ (IEEE 802.3bt)** → bis zu **90 Watt** (z.B. für leistungsstarke Geräte wie [[02 - RESOURCES/Notes/PAN\|Pan]]-Tilt-Zoom-Kameras)

**Beispiel:**

- Ein [[02 - RESOURCES/Notes/Access-Point\|Access-Point]] wird per [[02 - RESOURCES/Notes/LAN\|LAN]]-Kabel an den PoE-[[02 - RESOURCES/Notes/Switch\|Switch]] (Endspan) angeschlossen und erhält **[[02 - RESOURCES/Notes/Netzwerk\|Netzwerk]] + Strom** direkt.
- Alternativ: Ein [[02 - RESOURCES/Notes/Switch\|Switch]] ohne PoE + Midspan-Injektor = PoE nachgerüstet.


[Switch mit PoE] --------> [Access-Point]
    (Endspan)

[Switch] ---> [PoE-Injektor (Midspan)] ---> [Access-Point]




>[!tip] 
> **Endspan:** [[02 - RESOURCES/Notes/Switch\|Switch]] liefert PoE direkt über das Ethernet-Kabel.  
> **Midspan:** Ein zusätzlicher Injektor speist PoE ein zwischen Switch und Endgerät.

