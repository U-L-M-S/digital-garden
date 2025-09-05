---
{"dg-publish":true,"permalink":"/02-resources/notes/mac-adresse/","tags":["netzwerk"],"noteIcon":"","updated":"2025-09-05T10:12:30.548+02:00"}
---

> **MAC (Media Access Control)**
>> Eindeutige Adresse, die jede [[02 - RESOURCES/Notes/Netzwerkkarte\|Netzwerkkarte]] hat, um Geräte im lokalen [[02 - RESOURCES/Notes/Netzwerk\|Netzwerk]] zu identifizieren.  
>> Sie wird im [[02 - RESOURCES/Notes/Hexadezimal\|Hexadezimal]]-Format dargestellt und gehört zur [[02 - RESOURCES/Notes/Layer 2\|Layer 2]] im [[02 - RESOURCES/Notes/OSI-Modell\|OSI-Modell]].

**Beispiel:**  
**==00:1A:2B==:3C:4D:5E**

- **6 Paare** à 2 [[02 - RESOURCES/Notes/Hexadezimal\|Hexadezimal]]-Ziffern (insgesamt **48 Bit**).
- Die **ersten 3 Paare** = Herstellerkennung (OUI: Organizationally Unique Identifier).
- Die **letzten 3 Paare** = Seriennummer der Karte.

> [!tip] Die [[02 - RESOURCES/Notes/MAC Adresse\|MAC Adresse]] wird bei der **Produktion** vom Hersteller fest vergeben (kann aber im Betriebssystem „gespooft“ werden).

> [!note]  
> MAC wird verwendet für die **Kommunikation innerhalb eines lokalen Netzwerks** (z.B. bei [[02 - RESOURCES/Notes/Switch\|Switch]]es und [[02 - RESOURCES/Notes/WLAN\|WLAN]]-Netzen).

> [!question] Wo finde ich die MAC-Adresse?
> 
> - Windows: `ipconfig /all`
> - Linux: `ip a`
> - Meist auch als Aufkleber auf der [[02 - RESOURCES/Notes/Netzwerkkarte\|Netzwerkkarte]] oder dem [[02 - RESOURCES/Notes/Router\|Router]].
