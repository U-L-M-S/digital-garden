---
{"dg-publish":true,"permalink":"/02-resources/notes/lf-11b-i-pv6/","tags":["informatik/netzwerk/ip/ipv6"],"noteIcon":"","updated":"2025-10-29T12:59:07.811+01:00"}
---

# LF11b - [[02 - RESOURCES/Notes/IPv6\|IPv6]]  

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

- **Rouge DHCP-Server Problem**
    - Falsche Router Advertisements
    - IPv6-Hosts akzeptieren alle Router Advertisements
    - Bildung falscher IP-Adressen und Gateways

### Angriffsvektoren

- Traffic-Umleitung durch falsche Adressen/Gateways
- Kommunikations-Störung
- Unerwünschte [[02 - RESOURCES/Notes/DNS\|DNS]]-Updates
- Man-in-the-Middle Angriffe

### Gegenmaßnahmen

- **RA-Guard auf Switches**
    - Festlegung welche Ports an Router angeschlossen sind
    - Nur definierte [[02 - RESOURCES/Notes/Ports\|Ports]] akzeptieren Router Advertisements
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
- Ende-zu-Ende [[02 - RESOURCES/Notes/Verschlüsselung\|Verschlüsselung]]
- [[02 - RESOURCES/Notes/Authentifizierung\|Authentifizierung]] und [[02 - RESOURCES/Notes/Integrität\|Integrität]]

### Praktische Anwendung

- VPN-Verbindungen
- Sichere Kommunikation zwischen Netzwerken
- Schutz vor Abhörung und Manipulation

## Zusammenfassung

IPv6 bringt Verbesserungen bei der Paketbehandlung, erfordert aber neue Sicherheitskonzepte. Die Eliminierung der [[02 - RESOURCES/Notes/Router\|Router]]-Fragmentierung und die Integration von Sicherheitsfeatures machen [[02 - RESOURCES/Notes/IPv6\|IPv6]] effizienter, verlangen aber auch bewusstere [[02 - RESOURCES/Notes/Netzwerk\|Netzwerk]]-Administration.