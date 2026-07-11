---
{"dg-publish":true,"permalink":"/wiki/subnetzmaske/","tags":["informatik/netzwerk/adressierung/trennung","informatik/netzwerk/aufteilung","informatik/netzwerk/subnet-mask"],"noteIcon":"","updated":"2025-10-29T12:59:10.000+01:00","dg-note-properties":{"created":"2025-08-27","aliases":["Netzwerkmaske"],"links":"[[wiki/IP-Adresse\|IP-Adresse]]","path":"Notes","tags":["informatik/netzwerk/adressierung/trennung","informatik/netzwerk/aufteilung","informatik/netzwerk/subnet-mask"]}}
---


>Subnetzmaske (auch Netzwerkmaske) ist eine numerische Konfiguration, die verwendet wird, um [[wiki/Netzanteil\|Netzanteil]] und [[wiki/Hostanteil\|Hostanteil]] einer [[wiki/IP-Adresse\|IP-Adresse]] zu trennen.

>>Sie bestimmt, welcher Teil einer [[wiki/IP-Adresse\|IP-Adresse]] das [[wiki/Netzwerk\|Netzwerk]] und welcher Teil den Host innerhalb dieses Netzwerks identifiziert. Durch die Subnetzmaske kann ein [[wiki/Router\|Router]] oder eine [[wiki/Netzwerkkarte\|Netzwerkkarte]] den richtigen Teil der IP-Adresse erkennen und [[wiki/Datenpakete\|Datenpakete]] korrekt weiterleiten.

>[!important] Funktionsweise
>Die Subnetzmaske arbeitet durch bitweise UND-Verknüpfung:
>- **1-Bits**: Markieren den Netzwerkanteil
>- **0-Bits**: Markieren den Hostanteil
>- **Ergebnis**: Trennung zwischen Netz-ID und Host-ID

## Darstellungsformen

### Dezimal-Notation
```
255.255.255.0    (/24)
255.255.0.0      (/16)
255.0.0.0        (/8)
```

### [[wiki/CIDR\|CIDR]]-Notation
>[!tip] CIDR-Schreibweise
>Oft wird [[wiki/CIDR\|CIDR]]-Schreibweise verwendet um Subnetzmasken kompakt darzustellen:
>- `/24` = 255.255.255.0
>- `/16` = 255.255.0.0
>- `/8` = 255.0.0.0

### Binär-Darstellung
```
/24: 11111111.11111111.11111111.00000000
/16: 11111111.11111111.00000000.00000000
/8:  11111111.00000000.00000000.00000000
```

## Häufige Subnetzmasken

|CIDR|Dezimal|Hosts|Verwendung|
|---|---|---|---|
|/8|255.0.0.0|16.777.214|Große Netzwerke|
|/16|255.255.0.0|65.534|Mittlere Netzwerke|
|/24|255.255.255.0|254|Kleine [[wiki/LAN\|LAN]]s (Standard)|
|/30|255.255.255.252|2|Point-to-Point Verbindungen|

>[!example] Beispiel-Berechnung
>**IP-Adresse**: 192.168.1.100
>**Subnetzmaske**: 255.255.255.0 (/24)
>
>**Netz-ID**: 192.168.1.0
>**Host-ID**: 100
>**Broadcast**: 192.168.1.255

## Praktische Anwendung

>[!note] Kommandozeile
>Die Subnetzmaske kann mit verschiedenen Befehlen ermittelt werden:
>- Windows: `ipconfig`
>- Linux: `ip addr` oder `ifconfig`
>- Netzwerk-Tools: `ping`, `traceroute`

>[!warning] Wichtige Regeln
>- **Erste Adresse**: Netz-ID (nicht verwendbar für Hosts)
>- **Letzte Adresse**: Broadcast-Adresse (nicht verwendbar für Hosts)
>- **Verwendbare Hosts**: Gesamtadressen - 2 (Netz-ID und Broadcast)

>[!summary] Verwendung
>Subnetzmasken sind essentiell für:
>- **Netzwerk-Segmentierung**: Aufteilung großer Netzwerke
>- **Routing-Entscheidungen**: Bestimmung lokaler vs. entfernter Ziele
>- **Broadcast-Domänen**: Definition von Broadcast-Bereichen
>- **Netzwerk-Planung**: Effiziente IP-Adressverteilung