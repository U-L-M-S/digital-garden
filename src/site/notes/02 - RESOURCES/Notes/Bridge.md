---
{"dg-publish":true,"permalink":"/02-resources/notes/bridge/","tags":["informatik/netzwerk/hardware"],"noteIcon":"","updated":"2025-09-16T23:41:26.000+02:00"}
---

> [[02 - RESOURCES/Notes/Netzwerk\|Netzwerk]]gerät, das zwei oder mehr [[02 - RESOURCES/Notes/Netzwerk\|Netzwerk]]segmente miteinander verbindet und dabei Kollisionsdomänen voneinander trennt. Arbeitet wie ein [[02 - RESOURCES/Notes/Switch\|Switch]] auf [[02 - RESOURCES/Notes/Layer 2\|Layer 2]] mit [[02 - RESOURCES/Notes/MAC Adresse\|MAC Adresse]]n.
> 
> > Eine [[02 - RESOURCES/Notes/Bridge\|Bridge]] ist praktisch der Vorgänger vom [[02 - RESOURCES/Notes/Switch\|Switch]] - macht fast das gleiche, hat aber nur 2-4 Ports statt vielen.


# Wie funktioniert es

Eine [[02 - RESOURCES/Notes/Bridge\|Bridge]] lernt die [[02 - RESOURCES/Notes/MAC Adresse\|MAC Adresse]]n von allen Geräten auf beiden Seiten und entscheidet dann:

- **Weiterleiten**: Wenn Sender und Empfänger auf verschiedenen Seiten sind
- **Filtern**: Wenn beide auf der gleichen Seite sind (kein Weiterleiten nötig)
- **[[02 - RESOURCES/Notes/Broadcast\|Broadcast]]**: Wenn die [[02 - RESOURCES/Notes/MAC Adresse\|MAC Adresse]] unbekannt ist

### Schritt-für-Schritt:

1. **Lernen**: [[02 - RESOURCES/Notes/Bridge\|Bridge]] speichert [[02 - RESOURCES/Notes/MAC Adresse\|MAC Adresse]] + Port vom Sender
2. **Prüfen**: Ist Empfänger-[[02 - RESOURCES/Notes/MAC Adresse\|MAC Adresse]] bekannt?
3. **Entscheiden**: Weiterleiten oder filtern
4. **Aktualisieren**: MAC-Tabelle wird ständig erneuert

> [!important] Der große Unterschied zum [[02 - RESOURCES/Notes/Switch\|Switch]]: Eine [[02 - RESOURCES/Notes/Bridge\|Bridge]] hat meist nur 2 Ports und verbindet zwei [[02 - RESOURCES/Notes/Netzwerk\|Netzwerk]]segmente. Ein [[02 - RESOURCES/Notes/Switch\|Switch]] hat viele Ports und ist praktisch eine "Multi-Port-Bridge".

# Warum verwendet man sie heute nicht mehr?

[[02 - RESOURCES/Notes/Switch\|Switch]]es haben [[02 - RESOURCES/Notes/Bridge\|Bridge]]s praktisch ersetzt, weil:

- **Mehr Ports**: Statt 2-4 Ports haben [[02 - RESOURCES/Notes/Switch\|Switch]]es 8, 16, 24 oder mehr
- **Günstiger**: [[02 - RESOURCES/Notes/Switch\|Switch]]es sind billiger geworden
- **Bessere Performance**: Moderne [[02 - RESOURCES/Notes/Switch\|Switch]]es sind schneller
- **Mehr Features**: [[02 - RESOURCES/Notes/VLAN\|VLAN]]s, Spanning Tree, etc.

> [!note] Heute findest du [[02 - RESOURCES/Notes/Bridge\|Bridge]]s hauptsächlich noch in [[02 - RESOURCES/Notes/WLAN\|WLAN]]-[[Access Point\|Access Point]]s oder wenn du zwei entfernte [[02 - RESOURCES/Notes/Netzwerk\|Netzwerk]]segmente über große Distanzen verbinden willst.