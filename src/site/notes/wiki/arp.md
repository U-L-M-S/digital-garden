---
{"dg-publish":true,"permalink":"/wiki/arp/","tags":["informatik/netzwerk/protokoll","informatik/betriebssystem/linux/command","informatik/betriebssystem/windows/command"],"noteIcon":"","updated":"2026-07-11T00:23:14.000+02:00","dg-note-properties":{"aliases":["arp","ARP"],"created":"2024-07-17 16:28","links":null,"tags":["informatik/netzwerk/protokoll","informatik/betriebssystem/linux/command","informatik/betriebssystem/windows/command"]}}
---

> Address Resolution Protocol
>>[[wiki/Netzwerkprotokolle\|Netzwerkprotokolle]] zum Auflösen der Netzwerkadressen ([[02 - RESOURCES/Notes/IP\|02 - RESOURCES/Notes/IP]] und [[wiki/MAC Adresse\|MAC Adresse]])

```sh
arp -a
```

So läuft die Auflösung ab (Station 1 sucht die MAC von Station 4 im gleichen [[wiki/LAN\|LAN]]):

- [[wiki/ARP-Request\|ARP-Request]] (Broadcast an `FF-FF-FF-FF-FF-FF`): „Wer hat die IP von Station 4?" — alle empfangen, nur Station 4 antwortet
- [[wiki/ARP-Reply\|ARP-Reply]] (Unicast zurück an Station 1): „Ich — hier ist meine MAC"

>[!important] Ziel-Adressen im Paket
>- **Gleiches LAN:** Ziel-IP = Empfänger, Ziel-MAC = Empfänger.
>- **Anderes Netz** (z.B. Webserver im Internet): Ziel-IP = Webserver, aber Ziel-MAC = ==die des eigenen [[wiki/Router\|Router]]s/[[wiki/Gateway\|Gateway]]s== — ARP löst dann die Gateway-IP auf, nicht die des Ziels.
