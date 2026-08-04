---
{"dg-publish":true,"permalink":"/wiki/bridge/","tags":["informatik/hardware"],"noteIcon":"","updated":"2026-07-19T03:56:26.000+02:00","dg-note-properties":{"tags":["informatik/hardware"],"aliases":["bridge"],"links":null,"created_date":"2025-09-15"}}
---

> [[wiki/Netzwerk\|Netzwerk]]gerät, das zwei oder mehr [[wiki/Netzwerk\|Netzwerk]]segmente miteinander verbindet und dabei Kollisionsdomänen voneinander trennt. Arbeitet wie ein [[wiki/Switch\|Switch]] auf [[wiki/Layer 2\|Layer 2]] mit [[wiki/MAC Adresse\|MAC Adresse]]n.
> 
> > Eine [[wiki/Bridge\|Bridge]] ist praktisch der Vorgänger vom [[wiki/Switch\|Switch]] - macht fast das gleiche, hat aber nur 2-4 Ports statt vielen.


# Wie funktioniert es

Eine [[wiki/Bridge\|Bridge]] lernt die [[wiki/MAC Adresse\|MAC Adresse]]n von allen Geräten auf beiden Seiten und entscheidet dann:

- **Weiterleiten**: Wenn Sender und Empfänger auf verschiedenen Seiten sind
- **Filtern**: Wenn beide auf der gleichen Seite sind (kein Weiterleiten nötig)
- **[[wiki/Broadcast\|Broadcast]]**: Wenn die [[wiki/MAC Adresse\|MAC Adresse]] unbekannt ist

### Schritt-für-Schritt:

1. **Lernen**: [[wiki/Bridge\|Bridge]] speichert [[wiki/MAC Adresse\|MAC Adresse]] + Port vom Sender
2. **Prüfen**: Ist Empfänger-[[wiki/MAC Adresse\|MAC Adresse]] bekannt?
3. **Entscheiden**: Weiterleiten oder filtern
4. **Aktualisieren**: MAC-Tabelle wird ständig erneuert

> [!important] Der große Unterschied zum [[wiki/Switch\|Switch]]: Eine [[wiki/Bridge\|Bridge]] hat meist nur 2 Ports und verbindet zwei [[wiki/Netzwerk\|Netzwerk]]segmente. Ein [[wiki/Switch\|Switch]] hat viele Ports und ist praktisch eine "Multi-Port-Bridge".

# Warum verwendet man sie heute nicht mehr?

[[wiki/Switch\|Switch]]es haben [[wiki/Bridge\|Bridge]]s praktisch ersetzt, weil:

- **Mehr Ports**: Statt 2-4 Ports haben [[wiki/Switch\|Switch]]es 8, 16, 24 oder mehr
- **Günstiger**: [[wiki/Switch\|Switch]]es sind billiger geworden
- **Bessere Performance**: Moderne [[wiki/Switch\|Switch]]es sind schneller
- **Mehr Features**: [[wiki/VLAN\|VLAN]]s, Spanning Tree, etc.

> [!note] Heute findest du [[wiki/Bridge\|Bridge]]s hauptsächlich noch in [[wiki/WLAN\|WLAN]]-[[Access Point\|Access Point]]s oder wenn du zwei entfernte [[wiki/Netzwerk\|Netzwerk]]segmente über große Distanzen verbinden willst.