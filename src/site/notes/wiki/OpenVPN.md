---
{"dg-publish":true,"permalink":"/wiki/open-vpn/","tags":["informatik/netzwerk/vpn","opensource","informatik/sicherheit/it-sicherheit"],"noteIcon":"","updated":"2026-07-02T15:37:49.000+02:00","dg-note-properties":{"created":"2025-01-07","path":"Notes","tags":["informatik/netzwerk/vpn","opensource","informatik/sicherheit/it-sicherheit"]}}
---

> Etabliertes [[wiki/VPN\|VPN]]-Protokoll

**OpenVPN** ist ein etabliertes [[wiki/VPN\|VPN]]-Protokoll. Es ist sehr flexibel und läuft auf fast allen Plattformen.

---

## Vorteile

- **Sehr etabliert**: Seit 2001 im Einsatz
- **Läuft überall**: Windows, Linux, macOS, Android, iOS
- **TCP oder UDP**: Flexibel wählbar
- **Gut für restriktive Firewalls**: Port 443/TCP (wie HTTPS)
- **Starke Verschlüsselung**: AES-256, RSA, etc.

## Nachteile

- **Komplexere Konfiguration**: Viele Optionen
- **Langsamere Performance**: Als [[wiki/WireGuard\|WireGuard]]
- **Mehr Code**: ~100.000+ Zeilen (größere Angriffsfläche)
- **PKI notwendig**: Zertifikate müssen erstellt werden

## Vergleich zu [[wiki/WireGuard\|WireGuard]]

| Eigenschaft | [[wiki/WireGuard\|WireGuard]] | [[wiki/OpenVPN\|OpenVPN]] |
|------------|-------------|-------------|
| **Geschwindigkeit** | Sehr schnell | Mittel |
| **Code-Menge** | ~4.000 Zeilen | ~100.000+ Zeilen |
| **Konfiguration** | Einfach | Komplex |
| **Zertifikate** | Nicht notwendig | PKI notwendig |
| **Alter** | Neu (2016) | Etabliert (2001) |

## PKI (Public Key Infrastructure)

OpenVPN benötigt Zertifikate:

```
Certificate Authority (CA)
     │
     ├─► Server-Zertifikat
     │
     └─► Client-Zertifikate
          ├─► Client 1
          ├─► Client 2
          └─► Client n
```

**In [[wiki/OpenSense\|OpenSense]]:**
```
System → Trust → Authorities → Add
  - Create internal CA

System → Trust → Certificates → Add
  - Server Certificate
  - Client Certificates
```

## Protokoll-Modi

### UDP (Standard, Port 1194)

**Vorteile:**
- Schneller
- Weniger Overhead

**Nachteile:**
- Kann von Firewalls blockiert werden

### TCP (Optional, z.B. Port 443)

**Vorteile:**
- Sieht aus wie HTTPS-Traffic
- Kommt durch restriktive Firewalls

**Nachteile:**
- Langsamer
- TCP-über-TCP Problem

## Client-Config Beispiel

```
client
dev tun
proto udp
remote vpn.example.com 1194

ca ca.crt
cert client.crt
key client.key

cipher AES-256-GCM
auth SHA256

comp-lzo
verb 3
```

## In [[wiki/OpenSense\|OpenSense]]

**Setup:**
```
1. Zertifikate erstellen
   System → Trust → Authorities/Certificates

2. OpenVPN Server konfigurieren
   VPN → OpenVPN → Servers → Add
   - Mode: Remote Access (SSL/TLS + User Auth)
   - Protocol: UDP
   - Port: 1194

3. Firewall-Regeln
   Firewall → Rules → WAN
   - Allow UDP 1194

4. Benutzer erstellen
   System → Access → Users

5. Client-Config exportieren
   VPN → OpenVPN → Client Export
```

## Einsatzszenarien

- **Remote Access**: Home-Office zu Firma
- **Site-to-Site**: Standort A ↔ Standort B
- **Restriktive Firewalls**: TCP Port 443
- **Legacy-Systeme**: Läuft überall

> [!tip] Wann OpenVPN statt WireGuard?
> - Legacy-Systeme ohne WireGuard-Support
> - Restriktive Firewalls (TCP Port 443)
> - Bestehende Infrastruktur mit OpenVPN
