---
{"dg-publish":true,"permalink":"/wiki/power-over-ethernet/","tags":["ausbildung/pruefung","informatik/netzwerk"],"noteIcon":"","updated":"2026-07-19T03:56:26.906+02:00","dg-note-properties":{"aliases":["PoE"],"created_date":"2025-03-11","links":null,"tags":["ausbildung/pruefung","informatik/netzwerk"]}}
---

>**Power over [[wiki/Ethernet\|Ethernet]] (PoE)** ist eine Technik, die Geräte über ein einziges [[wiki/Ethernet\|Ethernet]]-Kabel gleichzeitig mit **Daten** und **Strom** versorgt.
> 
> > Wird oft für Geräte wie [[wiki/Access-Point\|Access-Point]]s, [[wiki/IP\|IP]]-Kameras oder VoIP-Telefone genutzt.

![PoE-WithPoE_tcm151-114959.jpg](/img/user/assets/IMG/PoE-WithPoE_tcm151-114959.jpg)

> [!tip]  
> Du brauchst keinen separaten Stromanschluss für das Endgerät – das [[wiki/Ethernet\|Ethernet]]-Kabel übernimmt beides (Strom + [[wiki/Netzwerk\|Netzwerk]]).

> [!note] Varianten:
> 
> - **Endspan**: PoE wird direkt vom [[wiki/Switch\|Switch]] mitgeliefert (PoE-fähiger [[wiki/Switch\|Switch]]).
> - **Midspan**: Ein separates PoE-Injektor-Gerät speist den Strom zusätzlich zwischen [[wiki/Switch\|Switch]] und Endgerät ein.

> [!tip] Leistungsklassen:
> 
> - **PoE (IEEE 802.3af)** → max. **15,4 Watt**
> - **PoE+ (IEEE 802.3at)** → max. **30 Watt**
> - **PoE++ (IEEE 802.3bt)** → bis zu **90 Watt** (z.B. für leistungsstarke Geräte wie [[wiki/PAN\|Pan]]-Tilt-Zoom-Kameras)

**Beispiel:**

- Ein [[wiki/Access-Point\|Access-Point]] wird per [[wiki/LAN\|LAN]]-Kabel an den PoE-[[wiki/Switch\|Switch]] (Endspan) angeschlossen und erhält **[[wiki/Netzwerk\|Netzwerk]] + Strom** direkt.
- Alternativ: Ein [[wiki/Switch\|Switch]] ohne PoE + Midspan-Injektor = PoE nachgerüstet.


[Switch mit PoE] --------> [Access-Point]
    (Endspan)

[Switch] ---> [PoE-Injektor (Midspan)] ---> [Access-Point]




>[!tip] 
> **Endspan:** [[wiki/Switch\|Switch]] liefert PoE direkt über das Ethernet-Kabel.  
> **Midspan:** Ein zusätzlicher Injektor speist PoE ein zwischen Switch und Endgerät.

