---
{"dg-publish":true,"permalink":"/wiki/mac-adresse/","tags":["informatik/netzwerk"],"noteIcon":"","updated":"2026-07-11T00:23:02.749+02:00","dg-note-properties":{"aliases":["MAC","Media Access Control"],"created":"2024-07-02 08:57","links":null,"path":["Notes"],"tags":["informatik/netzwerk"]}}
---

> **MAC (Media Access Control)**
>> Eindeutige Adresse, die jede [[wiki/Netzwerkkarte\|Netzwerkkarte]] hat, um Geräte im lokalen [[wiki/Netzwerk\|Netzwerk]] zu identifizieren.  
>> Sie wird im [[wiki/Hexadezimal\|Hexadezimal]]-Format dargestellt und gehört zur [[wiki/Layer 2\|Layer 2]] im [[wiki/OSI-Modell\|OSI-Modell]].

**Beispiel:**  
**==00:1A:2B==:3C:4D:5E**

- **6 Paare** à 2 [[wiki/Hexadezimal\|Hexadezimal]]-Ziffern (insgesamt **48 Bit**).
- Die **ersten 3 Paare** = Herstellerkennung (OUI: Organizationally Unique Identifier).
- Die **letzten 3 Paare** = Seriennummer der Karte.
- Gleiches OUI = gleicher Hersteller: `08-FC-88-CA-FE-42` und `08-FC-88-00-A7-39` kommen vom **selben Hersteller**, sind aber verschiedene Karten.
- `FF-FF-FF-FF-FF-FF` = ==Broadcast== — geht an **alle** Geräte im lokalen [[wiki/Netzwerk\|Netzwerk]].

> [!tip] Die [[wiki/MAC Adresse\|MAC Adresse]] wird bei der **Produktion** vom Hersteller fest vergeben (kann aber im Betriebssystem „gespooft“ werden).

> [!note]  
> MAC wird verwendet für die **Kommunikation innerhalb eines lokalen Netzwerks** (z.B. bei [[wiki/Switch\|Switch]]es und [[wiki/WLAN\|WLAN]]-Netzen).

> [!question] Wo finde ich die MAC-Adresse?
> 
> - Windows: `ipconfig /all`
> - Linux: `ip a`
> - Meist auch als Aufkleber auf der [[wiki/Netzwerkkarte\|Netzwerkkarte]] oder dem [[wiki/Router\|Router]].
