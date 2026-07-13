---
{"dg-publish":true,"permalink":"/wiki/power-over-ethernet/","tags":["ausbildung/gfn/ap1/vorbereitung","informatik/netzwerk"],"noteIcon":"","updated":"2025-10-29T12:59:09.000+01:00","dg-note-properties":{"aliases":["PoE"],"created_date":"2025-03-11","links":null,"tags":["ausbildung/gfn/ap1/vorbereitung","informatik/netzwerk"]}}
---

>**Power over [[wiki/Ethernet\|Ethernet]] (PoE)** ist eine Technik, die Geräte über ein einziges [[wiki/Ethernet\|Ethernet]]-Kabel gleichzeitig mit **Daten** und **Strom** versorgt.
> 
> > Wird oft für Geräte wie [[wiki/Access-Point\|Access-Point]]s, [[wiki/IP\|IP]]-Kameras oder VoIP-Telefone genutzt.

![PoE-WithPoE_tcm151-114959.jpg](/img/user/assets/IMG/PoE-WithPoE_tcm151-114959.jpg)

> [!tip]  
> Du brauchst keinen separaten Stromanschluss für das Endgerät – das [[wiki/Ethernet\|Ethernet]]-Kabel übernimmt beides (Strom + [[wiki/Netzwerk\|Netzwerk]]).

> [!note] Varianten:
> 
> - **Endspan**: PoE wird direkt vom [[Switch\|Switch]] mitgeliefert (PoE-fähiger [[Switch\|Switch]]).
> - **Midspan**: Ein separates PoE-Injektor-Gerät speist den Strom zusätzlich zwischen [[Switch\|Switch]] und Endgerät ein.

> [!tip] Leistungsklassen:
> 
> - **PoE (IEEE 802.3af)** → max. **15,4 Watt**
> - **PoE+ (IEEE 802.3at)** → max. **30 Watt**
> - **PoE++ (IEEE 802.3bt)** → bis zu **90 Watt** (z.B. für leistungsstarke Geräte wie [[wiki/PAN\|Pan]]-Tilt-Zoom-Kameras)

**Beispiel:**

- Ein [[wiki/Access-Point\|Access-Point]] wird per [[wiki/LAN\|LAN]]-Kabel an den PoE-[[Switch\|Switch]] (Endspan) angeschlossen und erhält **[[wiki/Netzwerk\|Netzwerk]] + Strom** direkt.
- Alternativ: Ein [[Switch\|Switch]] ohne PoE + Midspan-Injektor = PoE nachgerüstet.


[Switch mit PoE] --------> [Access-Point]
    (Endspan)

[Switch] ---> [PoE-Injektor (Midspan)] ---> [Access-Point]




>[!tip] 
> **Endspan:** [[Switch\|Switch]] liefert PoE direkt über das Ethernet-Kabel.  
> **Midspan:** Ein zusätzlicher Injektor speist PoE ein zwischen Switch und Endgerät.

