---
{"dg-publish":true,"permalink":"/wiki/lf-11b-i-pv6/","tags":["informatik/netzwerk"],"noteIcon":"","updated":"2026-07-19T03:56:26.987+02:00","dg-note-properties":{"tags":["informatik/netzwerk"],"aliases":null,"links":null,"created_date":"2025-09-05"}}
---

# LF11b - [[wiki/IPv6\|IPv6]]  

## Themenübersicht

- MTU und Path MTU Discovery
- IPv6 Routing
- IPv6 Security
- DHCPv6
- IPsec

## MTU (Maximum Transmission Unit)

### Grundlagen

- Bestimmt maximale Größe eines Datenpaketes
- Minimale MTU für IPv6: **1280 Byte** (RFC 2460)
- Standard Ethernet MTU: **1500 Byte**

### Jumboframes

- Bis zu **9000 Bytes**
- Vorteil: Wenig Overhead bei großen Datenmengen
- Nachteile:
    - Nicht alle Netzwerke unterstützen diese Größen
    - Können Staus im Netzwerk verursachen

## Path MTU Discovery

### IPv4 vs. IPv6 Fragmentierung

- **IPv4**: Router übernehmen Fragmentierung (außer bei DF-Flag)
- **IPv6**: Nur sendender Host kann fragmentieren

### PMTU Process

- Ermittlung der kleinsten MTU auf dem Pfad
- Wichtig für IPv6, da Router nicht fragmentieren
- Fragmentierung unter IPv6 nicht empfohlen

### Vorteile

- Optimale Paketgröße für gesamten Übertragungsweg
- Vermeidung von Fragmentierung in Routern
- Bessere Netzwerk-Performance

## IPv6 Routing

### Routing-Tabellen-Inhalt

1. **Routingziel**
    
    - IPv6 Präfix und Präfixlänge
    - Beispiel: 2001:db8:8008::/64
2. **Next-Hop-Adresse**
    
    - Router für Weiterleitung des Pakets
3. **Next-Hop-Interface**
    
    - Interface über das Next-Hop erreichbar ist
4. **Routing-Quelle**
    
    - Direkt verbunden
    - Statisch konfiguriert
    - Per Routing-Protokoll gelernt

## IPv6 Security

### DHCPv6 Sicherheitsrisiken

- **Rogue DHCP-Server Problem**
    - Falsche Router Advertisements
    - IPv6-Hosts akzeptieren alle Router Advertisements
    - Bildung falscher IP-Adressen und Gateways

### Angriffsvektoren

- Traffic-Umleitung durch falsche Adressen/Gateways
- Kommunikations-Störung
- Unerwünschte [[wiki/DNS\|DNS]]-Updates
- Man-in-the-Middle Angriffe

### Gegenmaßnahmen

- **RA-Guard auf Switches**
    - Festlegung welche Ports an Router angeschlossen sind
    - Nur definierte [[wiki/Ports\|Ports]] akzeptieren Router Advertisements
    - Alle anderen Ports blockieren RA-Nachrichten

### Best Practices

- Netzwerk-Segmentierung
- Monitoring von Router Advertisements
- Kontrolle über DHCP-Server-Deployment
- Regelmäßige Sicherheitsaudits

## DHCPv6

### Funktionsweise

- Automatische IPv6-Adress-Vergabe
- Integration mit Router Advertisements
- Zusätzliche Konfigurationsoptionen

### Sicherheitsaspekte

- Authentifizierung von DHCP-Servern
- Schutz vor unauthorisierten Servern
- Monitoring der Adress-Vergabe

## IPsec Integration

### IPv6 und IPsec

- Ursprünglich vorgesehene Integration
- Ende-zu-Ende [[wiki/Verschlüsselung\|Verschlüsselung]]
- [[wiki/Authentifizierung\|Authentifizierung]] und [[wiki/Integrität\|Integrität]]

### Praktische Anwendung

- VPN-Verbindungen
- Sichere Kommunikation zwischen Netzwerken
- Schutz vor Abhörung und Manipulation

## Zusammenfassung

IPv6 bringt Verbesserungen bei der Paketbehandlung, erfordert aber neue Sicherheitskonzepte. Die Eliminierung der [[wiki/Router\|Router]]-Fragmentierung und die Integration von Sicherheitsfeatures machen [[wiki/IPv6\|IPv6]] effizienter, verlangen aber auch bewusstere [[wiki/Netzwerk\|Netzwerk]]-Administration.