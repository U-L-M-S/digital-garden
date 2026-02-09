---
{"dg-publish":true,"permalink":"/02-resources/notes/open-sense/","tags":["informatik/netzwerk/firewall","informatik/sicherheit","opensource"],"noteIcon":"","updated":"2025-11-07T11:31:36.000+01:00"}
---

> Open-Source [[02 - RESOURCES/Notes/Firewall\|Firewall]] basierend auf FreeBSD

**OpenSense** ist eine professionelle [[02 - RESOURCES/Notes/Firewall\|Firewall]]-Lösung. Sie bietet viele Funktionen kostenlos an.

---

## Features

- **Stateful [[02 - RESOURCES/Notes/Firewall\|Firewall]]**: Verbindungs-Tracking
- **[[02 - RESOURCES/Notes/VPN\|VPN]]**: [[02 - RESOURCES/Notes/WireGuard\|WireGuard]], [[02 - RESOURCES/Notes/OpenVPN\|OpenVPN]], [[02 - RESOURCES/Notes/IPSec\|IPsec]]
- **[[02 - RESOURCES/Notes/IDS\|IDS]]/[[02 - RESOURCES/Notes/IPS\|IPS]]**: [[02 - RESOURCES/Notes/Suricata\|Suricata]] Integration
- **Traffic Shaping**: QoS und Bandbreiten-Management
- **Captive Portal**: Guest-WiFi mit Authentifizierung
- **Multi-WAN**: Load Balancing und Failover
- **SSL-Zertifikate**: [[02 - RESOURCES/Notes/Let's Encrypt\|Let's Encrypt]] Integration
- **High Availability**: CARP für Ausfallsicherheit

## Web-Interface

Login unter: `https://192.168.1.1` (Standard-LAN-IP)

**Standard-Login:**
- Benutzername: `root`
- Passwort: (bei Installation gesetzt)

## Typische Einsatzszenarien

- Firmen-[[02 - RESOURCES/Notes/Firewall\|Firewall]]
- Home-Lab
- [[02 - RESOURCES/Notes/VPN\|VPN]]-Gateway
- Multi-WAN-Router
- [[02 - RESOURCES/Notes/IDS\|IDS]]/[[02 - RESOURCES/Notes/IPS\|IPS]]-System

## Integration mit [[02 - RESOURCES/Notes/Proxmox\|Proxmox]]

```
Proxmox Host
  │
  └─► OpenSense VM
       ├─► WAN Interface (vmbr0)
       ├─► LAN Interface (vmbr1)
       └─► VLANs (10, 20, 30, 111)
```
