---
{"dg-publish":true,"permalink":"/wiki/open-sense/","tags":["informatik/netzwerk/firewall","informatik/sicherheit","opensource"],"noteIcon":"","updated":"2025-11-07T11:31:36.000+01:00","dg-note-properties":{"aliases":["OPNsense"],"created":"2025-01-07","path":"Notes","tags":["informatik/netzwerk/firewall","informatik/sicherheit","opensource"]}}
---

> Open-Source [[wiki/Firewall\|Firewall]] basierend auf FreeBSD

**OpenSense** ist eine professionelle [[wiki/Firewall\|Firewall]]-Lösung. Sie bietet viele Funktionen kostenlos an.

---

## Features

- **Stateful [[wiki/Firewall\|Firewall]]**: Verbindungs-Tracking
- **[[wiki/VPN\|VPN]]**: [[wiki/WireGuard\|WireGuard]], [[wiki/OpenVPN\|OpenVPN]], [[wiki/IPSec\|IPsec]]
- **[[wiki/IDS\|IDS]]/[[wiki/IPS\|IPS]]**: [[wiki/Suricata\|Suricata]] Integration
- **Traffic Shaping**: QoS und Bandbreiten-Management
- **Captive Portal**: Guest-WiFi mit Authentifizierung
- **Multi-WAN**: Load Balancing und Failover
- **SSL-Zertifikate**: [[wiki/Let's Encrypt\|Let's Encrypt]] Integration
- **High Availability**: CARP für Ausfallsicherheit

## Web-Interface

Login unter: `https://192.168.1.1` (Standard-LAN-IP)

**Standard-Login:**
- Benutzername: `root`
- Passwort: (bei Installation gesetzt)

## Typische Einsatzszenarien

- Firmen-[[wiki/Firewall\|Firewall]]
- Home-Lab
- [[wiki/VPN\|VPN]]-Gateway
- Multi-WAN-Router
- [[wiki/IDS\|IDS]]/[[wiki/IPS\|IPS]]-System

## Integration mit [[wiki/Proxmox\|Proxmox]]

```
Proxmox Host
  │
  └─► OpenSense VM
       ├─► WAN Interface (vmbr0)
       ├─► LAN Interface (vmbr1)
       └─► VLANs (10, 20, 30, 111)
```
