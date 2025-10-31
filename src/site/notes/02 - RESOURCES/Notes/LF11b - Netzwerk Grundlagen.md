---
{"dg-publish":true,"permalink":"/02-resources/notes/lf-11b-netzwerk-grundlagen/","tags":["informatik/netzwerk/ipv4","informatik/netzwerk/ports","informatik/netzwerk/osi","informatik/netzwerk/subnetting","GFN/LF11/FISI"],"noteIcon":"","updated":"2025-10-29T12:59:07.822+01:00"}
---

# LF11b Tag 1 - [[02 - RESOURCES/Notes/Netzwerk\|Netzwerk]] Grundlagen Zusammenfassung

## Themenübersicht

- [[02 - RESOURCES/Notes/OSI-Modell\|OSI-Modell]]
- [[02 - RESOURCES/Notes/Ports\|Ports]]
- [[02 - RESOURCES/Notes/Netzwerkprotokolle\|Netzwerkprotokolle]]
- [[02 - RESOURCES/Notes/IPv4\|IPv4]]
- [[02 - RESOURCES/Notes/Subnetting\|Subnetting]]

## [[02 - RESOURCES/Notes/OSI-Modell\|OSI-Modell]] (Open Systems Interconnection)

### Definition

- Referenzmodell für [[02 - RESOURCES/Notes/Netzwerkprotokolle\|Netzwerkprotokolle]] als Schichtenarchitektur
- Zweck: Kommunikation über unterschiedlichste technische Systeme hinweg
- 7 Schichten zur strukturierten [[02 - RESOURCES/Notes/Datenübertragung\|Datenübertragung]]

## [[02 - RESOURCES/Notes/PORT\|Ports]]

### Grundlagen

- Teil einer [[02 - RESOURCES/Notes/Netzwerk\|Netzwerk]]-Adresse für [[02 - RESOURCES/Notes/TCP\|TCP]]/UDP-Verbindungen
- Zuordnung von Datenpaketen zu Server- und Client-Programmen
- Jede Verbindung hat zwei Ports (Client & Server)

### Zweck

1. **Unterscheidung mehrerer Verbindungen** zwischen demselben Endpunkt-Paar
2. **Identifizierung von Netzwerkprotokollen** und entsprechenden Diensten

### Beispiel Port-Zuordnung

- Web-Server: [[02 - RESOURCES/Notes/TCP\|TCP]]/80 ([[02 - RESOURCES/Notes/HTTP\|HTTP]])
- VoIP-Server: [[02 - RESOURCES/Notes/UDP\|UDP]]/5004
- [[02 - RESOURCES/Notes/Mail-Server\|Mail-Server]]: [[02 - RESOURCES/Notes/TCP\|TCP]]/143 ([[02 - RESOURCES/Notes/IMAP\|IMAP]])
- [[02 - RESOURCES/Notes/HTTPS\|HTTPS]]: [[02 - RESOURCES/Notes/TCP\|TCP]]/443

## Protokolle

### [[02 - RESOURCES/Notes/TCP\|TCP]] (Transmission Control Protocol)

- Verbindungsorientiert
- Zuverlässige Datenübertragung
- Fehlerkorrektur und Reihenfolgen-Kontrolle

### [[02 - RESOURCES/Notes/UDP\|UDP]] (User Datagram Protocol)

- Verbindungslos
- Schnelle [[02 - RESOURCES/Notes/Datenübertragung\|Datenübertragung]]
- Keine Garantie für Vollständigkeit

## [[02 - RESOURCES/Notes/IPv4\|IPv4]] (Internet Protocol Version 4)

### Aufbau [[02 - RESOURCES/Notes/IPv4\|IPv4]]-Adresse

- 32 Bit unterteilt in 4 Oktette (je 8 Bit)
- Darstellung in Dezimalzahlen
- Beispiel: 192.168.0.1

### Binär-Darstellung

```
192.168.0.1 = 11000000.10101000.00000000.00000001
```

## [[02 - RESOURCES/Notes/Subnetting\|Subnetting]]

### Grundprinzip

- Unterteilung eines Netzes in kleinere Subnetze
- Verwendung von Subnetzmasken
- Trennung von Netzanteil und Hostanteil

### [[02 - RESOURCES/Notes/Subnet Mask\|Subnet Mask]]

- Belegte Bits (Einsen): Netzanteil der IP-Adresse
- Freie Bits (Nullen): Hostanteil der [[02 - RESOURCES/Notes/IP-Adresse\|IP-Adresse]]
- Beispiel: 255.255.255.0 = /24

### Beispiel Subnetz-Aufteilung

**Ausgangsnetz:** 192.168.0.0/24

- 192.168.0.0/26 (64 Hosts)
- 192.168.0.64/26 (64 Hosts)
- 192.168.0.128/26 (64 Hosts)
- 192.168.0.192/26 (64 Hosts)

### Subnetting-Methoden

1. **Nach Anzahl benötigter Netze**
2. **Nach Anzahl benötigter Clients**

### Wichtige Adressen

- **Netzwerk-ID**: Erste Adresse im Subnetz
- **[[02 - RESOURCES/Notes/Broadcast\|Broadcast]]-Adresse**: Letzte Adresse im Subnetz
- **Nutzbare Host-Adressen**: Alle Adressen zwischen Netzwerk-ID und [[02 - RESOURCES/Notes/Broadcast\|Broadcast]]

## Praktische Anwendung

- Netzwerk-Segmentierung für bessere Organisation
- Sicherheit durch Trennung von Netzwerkbereichen
- Effiziente [[02 - RESOURCES/Notes/IP\|IP]]-Adress-Verwaltung
- Reduzierung von [[02 - RESOURCES/Notes/Broadcast\|Broadcast]]-Traffic