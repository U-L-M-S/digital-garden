---
{"dg-publish":true,"permalink":"/wiki/firewall-1/","tags":["informatik/netzwerk/firewall","informatik/hardware/information","informatik/sicherheit","GFN","status/fertig"],"noteIcon":"","updated":"2026-07-02T12:18:59.000+02:00","dg-note-properties":{"tags":["informatik/netzwerk/firewall","informatik/hardware/information","informatik/sicherheit","GFN","status/fertig"],"links":["https://www.youtube.com/playlist?list=PLNmsVeXQZj7oAAFVjNrAz1uRqIcanXreg"],"created_date":"2025-01-07"}}
---

> Du kannst gerne unter [meinem GitHub](https://github.com/U-L-M-S/digital-garden) mithelfen.

> Dieses Projekt zeigt, wie man moderne [[wiki/Firewall 1\|Firewall 1]]-Systeme aufsetzt.
> > Du lernst die drei Firewall-Generationen, praktischen Aufbau mit [[wiki/Proxmox\|Proxmox]] und [[wiki/OpenSense\|OpenSense]], [[wiki/VPN\|VPN]]-Lösungen, [[wiki/IDS\|IDS]]/[[wiki/IPS\|IPS]], und Spam-Schutz.

# I. Was ist eine [[wiki/Firewall 1\|Firewall 1]]?

> Eine [[wiki/Firewall 1\|Firewall 1]] ist ein Sicherheitssystem, das zwischen zwei [[wiki/Netzwerk\|Netzwerk]]en steht.
> > Sie filtert [[wiki/Datenpakete\|Datenpakete]] und lässt nur bestimmte Verbindungen durch oder blockiert sie.

```
   Internet (Gefahr!)
        │
        ▼
    ┌───────┐
    │FIREWALL│ ← Wie ein Türsteher
    └───────┘
        │
        ▼
   Dein Netzwerk
```

## Grundkonzept

**Hauptaufgaben:**
- Unerwünschten Traffic blockieren
- Erlaubten Traffic durchlassen
- Netzwerk-Zugriffe kontrollieren
- Angriffe erkennen und abwehren

## [[wiki/Firewall 1\|Firewall 1]] vs. [[wiki/Router\|Router]]

```
    Router                 Firewall
      │                       │
      ▼                       ▼
 "Wohin geht              "Darf das
  das Paket?"              durch?"
      │                       │
      ▼                       ▼
 ┌─────────┐           ┌──────────┐
 │Postbote │           │Türsteher │
 │Leitet   │           │Prüft     │
 │weiter   │           │Regeln    │
 └─────────┘           └──────────┘
```

| Eigenschaft | [[wiki/Router\|Router]] | [[wiki/Firewall 1\|Firewall 1]] |
|------------|--------|----------|
| **Hauptaufgabe** | Pakete weiterleiten | Pakete filtern |
| **Entscheidung** | Wohin soll das Paket? | Darf das Paket durch? |
| **Sicherheit** | Grundlegend | Erweitert |
| **Regeln** | Routing-Tabellen | Firewall-Regeln |

> [!tip] Merksatz
> - **[[wiki/Router\|Router]]** = Postbote (bringt Pakete ans Ziel)
> - **[[wiki/Firewall 1\|Firewall 1]]** = Türsteher (kontrolliert, wer rein darf)

# II. Firewall-Arten

---

## Nach Einsatzort

### Personal Firewall (Host-based)

> Läuft direkt auf einem Computer und schützt nur diesen Computer.

```
Internet
   │
   ▼
┌────────────┐
│  Computer  │
│    mit     │ ← Firewall läuft hier
│  Firewall  │
└────────────┘
    ✓ Schützt nur diesen PC
```

**Beispiele:**
- Windows Defender Firewall
- iptables (Linux)
- pfSense auf einem einzelnen Server

**Vorteile:** Einfach, kostenlos, gut für einzelne Geräte
**Nachteile:** Schützt nur ein Gerät, nutzt PC-Ressourcen

### Network Firewall (Netzwerk-Firewall)

> Steht zwischen zwei [[wiki/Netzwerk\|Netzwerk]]en und schützt alle Geräte dahinter.

```
Internet
   │
   ▼
┌─────────┐
│ Firewall│ ← Zentral für alle
└─────────┘
   │
   ├──► PC 1 ✓
   ├──► PC 2 ✓
   ├──► Server ✓
   └──► Handy ✓

   Schützt ganzes Netzwerk
```

**Beispiele:**
- Hardware-Firewalls (z.B. Cisco ASA)
- [[wiki/OpenSense\|OpenSense]], pfSense
- Unternehmens-Firewalls

**Vorteile:** Schützt ganzes [[wiki/Netzwerk\|Netzwerk]], zentrale Verwaltung
**Nachteile:** Teurer, komplexere Konfiguration

---

## Nach Funktionsweise ([[wiki/OSI-Modell\|OSI-Modell]])

### 1. [[wiki/Packet Filter Firewall\|Packet Filter Firewall]] (Generation 1)

> Filtert nach **Quell-IP**, **Ziel-IP**, **Port** und **Protokoll**.
> > Arbeitet auf **OSI-Schicht 3 und 4**.

```
Paket kommt an
     │
     ▼
┌──────────┐
│ Firewall │ Prüft:
│  prüft   │ ✓ IP erlaubt?
└──────────┘ ✓ Port erlaubt?
     │
  ┌──┴──┐
  ▼     ▼
Pass  Block
```

**Vorteile:** Schnell, einfach, geringer Ressourcen-Bedarf
**Nachteile:** Kein Zustandswissen, anfällig für bestimmte Angriffe

**Beispiele:** Alte Router-Firewalls, einfache iptables-Regeln, ACLs

### 2. [[wiki/Stateful Inspection Firewall\|Stateful Inspection Firewall]] (Generation 2)

> Erkennt den **Zustand von Verbindungen** (z.B. ob die Verbindung aktiv ist).
> > Mehr Sicherheit als [[wiki/Packet Filter Firewall\|Packet Filter Firewall]], da Verbindungsstatus geprüft wird.

```
Paket kommt an
     │
     ▼
┌──────────────┐
│   Firewall   │ Prüft:
│    merkt     │ ✓ IP + Port
│ Verbindungen │ ✓ Zustand (NEW/ESTABLISHED)
└──────────────┘ ✓ Verbindung gültig?
     │
  ┌──┴────────┐
  ▼           ▼
NEW        ESTABLISHED
(Prüfen)   (Durchlassen)
```

**Zustände einer TCP-Verbindung:**
- NEW: Neue Verbindung
- ESTABLISHED: Aktive Verbindung
- RELATED: Zugehörige Verbindung (z.B. FTP-Daten)
- INVALID: Ungültige Verbindung

**Vorteile:** Versteht Verbindungs-Kontext, kann SYN-Flood-Angriffe erkennen
**Nachteile:** Höherer Ressourcen-Bedarf, kann Anwendungs-Layer-Angriffe nicht erkennen

### 3. [[wiki/Next Generation Firewall\|Next Generation Firewall]] (NGFW, Generation 3)

> Prüft auch den **Anwendungsdatenverkehr** (z.B. HTTP, FTP) und blockiert verdächtige Inhalte.
> > Arbeitet auf **OSI-Schicht 7 (Anwendungsschicht)**.

```
Paket kommt an
     │
     ▼
┌─────────────────┐
│  Next-Gen FW    │ Prüft ALLES:
│                 │ ✓ IP + Port
│ Deep Packet     │ ✓ Zustand
│ Inspection      │ ✓ Inhalt
│                 │ ✓ Malware
│ IDS/IPS         │ ✓ Anwendung
│ SSL Inspect     │ ✓ User
└─────────────────┘
     │
  ┌──┴──┐
  ▼     ▼
 Safe  Threat
(Pass) (Block)
```

**Funktionen:**
- [[wiki/Deep Packet Inspection\|Deep Packet Inspection]] (DPI)
- Application Awareness
- [[wiki/IDS\|IDS]]/[[wiki/IPS\|IPS]]
- [[wiki/Malware\|Malware]]-Erkennung
- SSL-Inspection
- User-basierte Regeln

**Vorteile:** Höchste Sicherheit, erkennt moderne Angriffe
**Nachteile:** Teuer, hoher Ressourcen-Bedarf, komplexe Konfiguration

**Beispiele:** Palo Alto Networks, Fortinet FortiGate, [[wiki/OpenSense\|OpenSense]] mit [[wiki/Suricata\|Suricata]]

### 4. WAF (Web Application Firewall)

> Spezielle [[wiki/Firewall 1\|Firewall 1]] für **Webanwendungen**.
> > Schützt vor SQL-Injection, XSS, CSRF, etc.

**Beispiele:** ModSecurity, Cloudflare WAF, AWS WAF

# III. Die drei Firewall-Generationen

---

> Entwicklung von einfacher Port-Filterung zu intelligenter Anwendungs-Analyse.

```
Generation 1      Generation 2         Generation 3
    │                 │                    │
    ▼                 ▼                    ▼
┌─────────┐      ┌─────────┐         ┌─────────┐
│ Packet  │──►   │Stateful │──►      │  Next   │
│Filtering│      │Inspection│         │   Gen   │
└─────────┘      └─────────┘         └─────────┘
   1990s            2000s               2010s+

IP+Port         +Verbindung         +DPI+IDS/IPS
```

| Generation | Technologie | Zeitraum | Hauptmerkmal |
|-----------|-------------|----------|--------------|
| **Generation 1** | [[wiki/Packet Filter Firewall\|Packet Filter Firewall]] | 1990er | IP/Port-Filterung |
| **Generation 2** | [[wiki/Stateful Inspection Firewall\|Stateful Inspection Firewall]] | 2000er | Connection Tracking |
| **Generation 3** | [[wiki/Next Generation Firewall\|Next Generation Firewall]] | 2010+ | [[wiki/Deep Packet Inspection\|Deep Packet Inspection]], [[wiki/IDS\|IDS]]/[[wiki/IPS\|IPS]] |

# IV. [[wiki/firewalld\|firewalld]] (Linux Firewall)

---

> [[wiki/firewalld\|firewalld]] ist eine moderne Firewall-Lösung für Linux-Systeme.
> > Einfacher als iptables durch Zonen-Konzept und dynamische Konfiguration.

## Zonen-Konzept

```
      Interfaces
          │
    ┌─────┼─────┐
    │     │     │
    ▼     ▼     ▼
┌──────┬─────┬───────┐
│ drop │block│public │
├──────┼─────┼───────┤
│ home │work │trusted│
└──────┴─────┴───────┘
   ↓      ↓      ↓
 Streng  Mittel  Offen
```

**Standard-Zonen:**
- **drop**: Alles verwerfen, keine Antworten
- **block**: Alles ablehnen, mit Fehlermeldung
- **public**: Öffentliche [[wiki/Netzwerk\|Netzwerk]]e (z.B. Café, Flughafen)
- **home**: Heimnetzwerk
- **trusted**: Alle Verbindungen erlaubt

## Dienste und Ports erlauben

```bash
# Dienst dauerhaft erlauben
sudo firewall-cmd --permanent --zone=public --add-service=http
sudo firewall-cmd --permanent --zone=public --add-service=https

# Port öffnen
sudo firewall-cmd --permanent --zone=public --add-port=8080/tcp

# Konfiguration neu laden
sudo firewall-cmd --reload
```

# V. Praktischer Aufbau mit [[wiki/Proxmox\|Proxmox]] und [[wiki/OpenSense\|OpenSense]]

---

> [[wiki/Proxmox\|Proxmox]] ist eine Virtualisierungs-Plattform für VMs und Container.
> > [[wiki/OpenSense\|OpenSense]] ist eine Open-Source-Firewall mit professionellen Funktionen.

## [[wiki/Proxmox\|Proxmox]] VE

**Hauptfunktionen:**
- Virtuelle Maschinen (KVM)
- Linux Container (LXC)
- Web-basierte Verwaltung
- Backup und Restore
- Storage Management

## [[wiki/OpenSense\|OpenSense]] Firewall

**Features:**
- Stateful Firewall
- [[wiki/VPN\|VPN]] ([[wiki/WireGuard\|WireGuard]], [[wiki/OpenVPN\|OpenVPN]], [[wiki/IPSec\|IPsec]])
- [[wiki/IDS\|IDS]]/[[wiki/IPS\|IPS]] ([[wiki/Suricata\|Suricata]])
- Traffic Shaping
- Multi-WAN

## Netzwerk-Topologie

```
Internet
   │
   ▼
Proxmox Host
   │
   ├─► OpenSense VM (Firewall)
   │    ├─► WAN Interface
   │    ├─► LAN Interface
   │    └─► VLANs (10, 20, 30, 111)
   │
   ├─► Server VMs
   └─► Container (Docker)
```

## [[wiki/VLAN\|VLAN]]s in [[wiki/OpenSense\|OpenSense]]

> [[wiki/VLAN\|VLAN]] = Virtual LAN. Teilt ein physisches [[wiki/Netzwerk\|Netzwerk]] in mehrere logische [[wiki/Netzwerk\|Netzwerk]]e auf.

**Vorteile:**
- Netzwerk-Segmentierung
- Bessere Sicherheit
- Traffic-Isolation

**Beispiel-Setup:**
- VLAN 10: Server (192.168.10.0/24)
- VLAN 20: Workstations (192.168.20.0/24)
- VLAN 30: Gäste (192.168.30.0/24)
- VLAN 111: Private Services (10.10.111.0/24)

# VI. [[wiki/IPv6\|IPv6]] Grundlagen

---

> [[wiki/IPv6\|IPv6]] ist die neueste Version des Internet Protocols.
> > 340 Sextillionen Adressen statt nur 4 Milliarden bei [[wiki/IPv4\|IPv4]].

```
    IPv4                    IPv6
     │                       │
     ▼                       ▼
192.168.1.1           2001:db8::1
     │                       │
   32 Bit                 128 Bit
     │                       │
4 Milliarden     340 Sextillionen
     │                       │
Braucht NAT          Kein NAT
```

**Vergleich:**
| Eigenschaft | [[wiki/IPv4\|IPv4]] | [[wiki/IPv6\|IPv6]] |
|------------|------|------|
| **Adress-Länge** | 32 Bit | 128 Bit |
| **Schreibweise** | 192.168.1.1 | 2001:db8::1 |
| **[[wiki/NAT\|NAT]] notwendig** | Ja | Nein |

## [[wiki/IPv6\|IPv6]] Adress-Typen

- **Global Unicast**: Öffentliche [[wiki/IPv6\|IPv6]]-Adressen (2000::/3)
- **Link-Local**: Nur im lokalen [[wiki/Netzwerk\|Netzwerk]] (fe80::/10)
- **Unique Local**: Private [[wiki/IPv6\|IPv6]]-Adressen (fd00::/8)
- **Multicast**: Gruppe von Empfängern (ff00::/8)

# VII. SSL/TLS-Zertifikate mit [[wiki/Let's Encrypt\|Let's Encrypt]]

---

> SSL/[[wiki/TLS\|TLS]]-Zertifikate verschlüsseln die Verbindung zwischen Client und Server.
> > [[wiki/Let's Encrypt\|Let's Encrypt]] stellt kostenlose Zertifikate automatisiert aus.

## [[wiki/ACME\|ACME]]-Protokoll

**ACME** (Automatic Certificate Management Environment) ist das Protokoll von [[wiki/Let's Encrypt\|Let's Encrypt]].

```
Server           Let's Encrypt
  │                    │
  ├─► Zertifikat?      │
  │   anfordern        │
  │                    │
  │      Challenge ◄───┤
  │   (HTTP/DNS)       │
  │                    │
  ├─► Beweis ─────────►│
  │   bereitstellen    │
  │                    │
  │    Zertifikat ◄────┤
  │       ✓            │
  └──────────────────────
     Auto-Renewal
     alle 60 Tage
```

**Challenge-Methoden:**
- **HTTP-01**: Datei auf Webserver bereitstellen
- **DNS-01**: TXT-Record im DNS erstellen

**In [[wiki/OpenSense\|OpenSense]]:**
1. ACME Plugin installieren (os-acme-client)
2. Account erstellen
3. Challenge konfigurieren
4. Zertifikat erstellen
5. Automatische Erneuerung (alle 60 Tage)

# VIII. [[wiki/VPN\|VPN]]-Lösungen

---

> [[wiki/VPN\|VPN]] = Virtual Private Network. Erstellt einen verschlüsselten Tunnel über ein unsicheres [[wiki/Netzwerk\|Netzwerk]].

```
Client               Internet            Server
  │                     │                  │
  │  [Verschlüsselter Tunnel]              │
  ├═════════════════════════════════════►│
  │     Niemand kann mitlesen! ✓           │
  │◄═════════════════════════════════════┤
  │                                        │
```

## [[wiki/VPN\|VPN]]-Protokolle im Vergleich

| Protokoll | Geschwindigkeit | Sicherheit | Komplexität | Port |
|-----------|----------------|------------|-------------|------|
| **[[wiki/WireGuard\|WireGuard]]** | Sehr schnell | Sehr hoch | Einfach | UDP 51820 |
| **[[wiki/OpenVPN\|OpenVPN]]** | Mittel | Sehr hoch | Mittel | UDP 1194 / TCP 443 |
| **[[wiki/IPSec\|IPsec]]** | Schnell | Sehr hoch | Komplex | UDP 500, 4500 |

> [!warning] PPTP nicht verwenden!
> PPTP ist unsicher und sollte NICHT mehr verwendet werden.

## A. [[wiki/WireGuard\|WireGuard]] VPN

> [[wiki/WireGuard\|WireGuard]] ist ein modernes [[wiki/VPN\|VPN]]-Protokoll.
> > Einfacher, schneller und sicherer als [[wiki/OpenVPN\|OpenVPN]] oder [[wiki/IPSec\|IPsec]].

**Vorteile:**
- Moderne Kryptographie
- Weniger Code (4.000 Zeilen vs. 100.000+ bei [[wiki/OpenVPN\|OpenVPN]])
- Bessere Performance
- Einfachere Konfiguration
- Bessere mobile Unterstützung (Roaming)

### Split Tunneling vs. Full Tunnel

```
Split Tunneling:              Full Tunnel:
Client                        Client
  │                             │
  ├─► Work ──► VPN ──► Server   └─► Alles ──► VPN ──► Server
  └─► Privat ──► Internet direkt           └─► Internet

  Schneller                     Sicherer
```

**Split Tunneling:** Nur bestimmter Traffic über [[wiki/VPN\|VPN]], Rest direkt ins Internet
**Full Tunnel:** Gesamter Traffic über [[wiki/VPN\|VPN]]

## B. [[wiki/OpenVPN\|OpenVPN]]

> [[wiki/OpenVPN\|OpenVPN]] ist ein etabliertes [[wiki/VPN\|VPN]]-Protokoll.
> > Sehr flexibel und läuft auf fast allen Plattformen.

**Vorteile:**
- Sehr etabliert (seit 2001)
- Kann TCP oder UDP verwenden
- Gut für restriktive Firewalls (Port 443/TCP)

**Nachteile:**
- Komplexere Konfiguration
- Langsamere Performance als [[wiki/WireGuard\|WireGuard]]

# IX. Firewall-Regeln und Best Practices

---

> Gute Firewall-Regeln folgen klaren Prinzipien.

## Grundprinzipien

### 1. Default Deny

> Alles blockieren, was nicht explizit erlaubt ist.

```
Alle Pakete
     │
     ▼
┌──────────┐
│ Default: │
│  DENY ❌  │  ← Alles blockiert
└──────────┘
     │
     │ Nur explizit erlaubte Dienste
     ▼
   HTTP ✓
   HTTPS ✓
   SSH ✓
```

**Warum wichtig:**
- Minimiert Angriffsfläche
- Schutz vor unbekannten Bedrohungen
- Prinzip der geringsten Privilegien

### 2. Stateful Firewall

> [[wiki/Firewall 1\|Firewall 1]] merkt sich Verbindungszustände.

**Vorteil:** Antworten auf ausgehende Anfragen werden automatisch erlaubt.

### 3. Least Privilege

> Nur die notwendigsten Zugriffe erlauben.

### 4. Segmentierung

> [[wiki/Netzwerk\|Netzwerk]] in Zonen aufteilen (z.B. DMZ, Server-VLAN, Client-VLAN).

## [[wiki/NAT\|NAT]] (Network Address Translation)

### [[wiki/Source NAT\|Source NAT]] (Masquerading)

> Interne IPs werden beim Verlassen des [[wiki/Netzwerk\|Netzwerk]]s in öffentliche IP übersetzt.

```
Internes Netzwerk       Firewall        Internet
192.168.1.10  ────►  (NAT)  ────►  203.0.113.50
192.168.1.11  ────►  übersetzt ──►  203.0.113.50
192.168.1.12  ────►  zu Public IP   203.0.113.50

Alle sehen gleiche öffentliche IP
```

### Destination NAT (Port Forwarding)

> Eingehende Verbindungen zu öffentlicher IP werden an interne IP weitergeleitet.

```
Internet            Firewall         Internes Netzwerk
     │                  │                    │
Port 80 ──────────► (Destination  ─────► 192.168.1.10:80
Port 443 ──────────► NAT leitet    ─────► 192.168.1.10:443
Port 22 ───────────► weiter)       ─────► 192.168.1.20:22
```

> [!warning] Achtung
> Port Forwarding öffnet den Server nach außen! Immer mit Firewall-Regeln absichern.

## Top 9 Best Practices

1. **Dokumentation**: Jede Regel beschreiben
2. **Regelmäßige Reviews**: Monatlich Logs prüfen
3. **Least Privilege**: Nur notwendige Zugriffe
4. **Segmentierung**: [[wiki/VLAN\|VLAN]]s verwenden
5. **Default Deny**: Alles blockieren außer Erlaubtem
6. **Logging**: Wichtige Aktionen loggen
7. **Rate Limiting**: Brute-Force-Schutz
8. **Updates**: Firewall-Software aktuell halten
9. **Backups**: Regelmäßig Konfiguration sichern

# X. Intrusion Detection mit [[wiki/Suricata\|Suricata]]

---

> [[wiki/Suricata\|Suricata]] ist eine Open-Source [[wiki/IDS\|IDS]]/[[wiki/IPS\|IPS]]-Engine.
> > Analysiert Traffic auf Angriffsmuster und blockiert Bedrohungen.

## [[wiki/IDS\|IDS]] vs. [[wiki/IPS\|IPS]]

```
        IDS                      IPS
         │                        │
         ▼                        ▼
   ┌─────────┐              ┌─────────┐
   │Monitoring│              │ Active  │
   │ Passiv  │              │Blocking │
   └─────────┘              └─────────┘
         │                        │
    Nur Alert                 Blockiert
         ▼                        ▼
   "Gefahr!"                 Traffic ❌
    Admin                     stoppen
```

### [[wiki/IDS\|IDS]] (Intrusion Detection System)

> Überwacht Traffic und alarmiert bei Bedrohungen. **Passiv** – greift nicht ein.

**Eigenschaften:**
- Out-of-Band Monitoring
- Kann Traffic nicht stoppen
- Nur Logging/Alerting

### [[wiki/IPS\|IPS]] (Intrusion Prevention System)

> Überwacht UND blockiert bösartigen Traffic. **Aktiv** – greift direkt ein.

**Eigenschaften:**
- Benötigt spezielle NIC (Netmap-Support)
- In-Band Blocking
- Kann Traffic droppen

## [[wiki/Firewall 1\|Firewall 1]] vs. [[wiki/IDS\|IDS]]/[[wiki/IPS\|IPS]]

```
Traditional Firewall:
    - Prüft: Source IP, Destination IP, Port, Protocol
    - Entscheidung: Allow/Deny

IDS/IPS (Deep Packet Inspection):
    - Prüft: Packet-Inhalt, Traffic-Patterns, Signatures, Anomalien
    - Entscheidung: Alert/Drop
```

## [[wiki/Suricata\|Suricata]] in [[wiki/OpenSense\|OpenSense]]

**Installation:**
1. Services → Intrusion Detection → Administration
2. Enable IDS: ✓
3. Pattern Matcher: ac-ks (empfohlen) oder Hyperscan
4. Interfaces: WAN

### Rule Sets

**Verfügbare Quellen:**
1. **Emerging Threats (ET)**: ~35.000 Regeln (kostenlos)
2. **[[wiki/abuse.ch\|abuse.ch]]**: SSL Blacklist, URLhaus, Feodo Tracker (~1.000+ Regeln)

**Download-Prozess:**
1. Rulesets aktivieren (ET Open, abuse.ch)
2. "Download and Update Rules"
3. Automatische Updates einrichten (täglich)

### Alert Monitoring

```
Services → Intrusion Detection → Alerts

Zeigt:
- Timestamp
- SID (Signature ID)
- Message (Angriffs-Typ)
```

# XI. Threat Intelligence mit [[wiki/abuse.ch\|abuse.ch]]

---

> [[wiki/abuse.ch\|abuse.ch]] ist eine kostenlose Threat Intelligence Plattform.
> > Stellt Datenbanken von bekannten Bedrohungen bereit.

## Services

```
      abuse.ch Platform
             │
    ┌────────┼────────┐
    │        │        │
    ▼        ▼        ▼
┌────────┬────────┬────────┐
│Malware │URLhaus │Feodo   │
│ Bazaar │        │Tracker │
├────────┼────────┼────────┤
│SSL     │        │        │
│Blacklist│       │        │
└────────┴────────┴────────┘
    │        │        │
    └────────┼────────┘
             ▼
        Suricata Rules
             ▼
         Blockieren
```

### 1. [[wiki/MalwareBazaar\|MalwareBazaar]]

> Datenbank von [[wiki/Malware\|Malware]]-Samples.

**Verwendung:**
- Download von [[wiki/Malware\|Malware]]-Samples (für Forschung)
- Hash-Abgleich (ist Datei [[wiki/Malware\|Malware]]?)
- API-Zugriff (Python)

### 2. [[wiki/URLhaus\|URLhaus]]

> Datenbank von [[wiki/Malware\|Malware]]-URLs.

**Verwendung in [[wiki/Firewall 1\|Firewall 1]]:**
- Blockiert automatisch Zugriff auf bekannte [[wiki/Malware\|Malware]]-URLs

### 3. [[wiki/Feodo Tracker\|Feodo Tracker]]

> Datenbank von Banking-Trojanern (Emotet, TrickBot, etc.).

**Verwendung:**
- Blockiert automatisch Verbindungen zu C&C-Servern

### 4. [[wiki/SSL Blacklist\|SSL Blacklist]]

> Datenbank von bösartigen SSL-Zertifikaten.

**Verwendung:**
- Erkennt [[wiki/Malware\|Malware]]-Traffic anhand SSL-Fingerprint

## Integration mit [[wiki/Suricata\|Suricata]]

```
Suricata + abuse.ch:

Traffic wird gegen ALLE Rulesets geprüft
  ├─► ET Open Rules (Exploits, Malware)
  └─► abuse.ch Rules (URLhaus, Feodo, SSL Blacklist)

→ Bei Match: Alert oder Block (IPS)
```

# XII. Spam-Schutz (Multi-Layer Defense)

---

> [[wiki/Defense in Depth\|Defense in Depth]] = Mehrere Sicherheitsschichten hintereinander.

## Multi-Layer Spam Protection

```
Layer 1: DNS Blacklist (RBL)
     │ ← Blockiert bekannte Spam-IPs
     ▼
Layer 2: SPF/DKIM/DMARC
     │ ← Prüft E-Mail-Authentizität
     ▼
Layer 3: Greylisting
     │ ← Verzögert unbekannte Absender
     ▼
Layer 4: Content Filter (SpamAssassin)
     │ ← Analysiert E-Mail-Inhalt
     ▼
Layer 5: Attachment Filter
     │ ← Blockiert gefährliche Anhänge
     ▼
User Mailbox ✓
```

**Warum mehrere Schichten:**
- Keine einzelne Lösung ist perfekt
- Wenn eine Schicht versagt, fangen andere es auf
- Reduziert False Positives/Negatives

## Layer 1: [[wiki/RBL\|RBL]] (DNS Blacklists)

> Liste von IPs, die für Spam bekannt sind.

**Beliebte RBLs:**
- Spamhaus ZEN
- Barracuda
- SORBS
- SpamCop

## Layer 2: [[wiki/SPF\|SPF]], [[wiki/DKIM\|DKIM]], [[wiki/DMARC\|DMARC]]

### [[wiki/SPF\|SPF]] (Sender Policy Framework)

> Definiert, welche Server E-Mails für eine Domain senden dürfen.

### [[wiki/DKIM\|DKIM]] (DomainKeys Identified Mail)

> Digitale Signatur für E-Mails.

### [[wiki/DMARC\|DMARC]] (Domain-based Message Authentication)

> Policy, was mit E-Mails passieren soll, die SPF/DKIM nicht bestehen.

## Layer 3: [[wiki/Greylisting\|Greylisting]]

> Temporäres Ablehnen von E-Mails unbekannter Absender.

**Funktionsweise:**
1. E-Mail von unbekanntem Server → Ablehnen (temporär)
2. Legitimer Mailserver versucht später nochmal → Durchlassen ✓
3. Spam-Bot versucht es NICHT nochmal → Wird nie zugestellt ✗

## Layer 4: [[wiki/SpamAssassin\|SpamAssassin]]

> Content-basierter Filter mit Scoring-System.

**Analysiert:** E-Mail-Header, Body, Links, Anhänge, Spam-Charakteristiken

## Layer 5: Attachment-Filter

> Blockiert gefährliche Dateitypen (.exe, .bat, .js, .vbs, etc.).

## DNS-basierte Werbeblocker: [[wiki/Pi-hole\|Pi-hole]]

> Blockiert Werbung und Tracking auf DNS-Ebene.

**Funktionsweise:**
1. Gerät fragt: "Was ist die IP von ads.example.com?"
2. [[wiki/Pi-hole\|Pi-hole]] prüft Blacklist → Ja, auf Liste!
3. [[wiki/Pi-hole\|Pi-hole]] antwortet: "0.0.0.0"
4. Werbung wird nicht geladen ✓

**Vorteile:**
- Blockiert Werbung im gesamten [[wiki/Netzwerk\|Netzwerk]]
- Funktioniert für alle Geräte (Smart-TVs, Handys, PCs)
- Kein Browser-Plugin notwendig

# XIII. Zusammenfassung

---

## Hauptprinzipien

1. **Default Deny**: Alles blockieren, was nicht erlaubt ist
2. **Stateful Inspection**: Verbindungsstatus verstehen
3. **Least Privilege**: Nur notwendige Zugriffe
4. **[[wiki/Defense in Depth\|Defense in Depth]]**: Mehrere Sicherheitsschichten

## Typische Infrastruktur

```
Internet
   │
   ▼
Proxmox Host (Virtualisierung)
   │
   ├─► OpenSense VM (Firewall)
   │    ├─► WAN Interface
   │    ├─► LAN Interface
   │    ├─► VLANs (10, 20, 30, 111)
   │    ├─► VPN (WireGuard, OpenVPN)
   │    ├─► IDS (Suricata)
   │    └─► Threat Intel (abuse.ch)
   │
   ├─► Server VMs
   ├─► Workstation VMs
   └─► Container (Docker)
```

## Sicherheitsfunktionen

1. **Firewall-Regeln**: Stateful Packet Filtering
2. **[[wiki/VPN\|VPN]]**: [[wiki/WireGuard\|WireGuard]] (modern) oder [[wiki/OpenVPN\|OpenVPN]] (etabliert)
3. **SSL/[[wiki/TLS\|TLS]]**: [[wiki/Let's Encrypt\|Let's Encrypt]] Zertifikate ([[wiki/ACME\|ACME]])
4. **[[wiki/IDS\|IDS]]/[[wiki/IPS\|IPS]]**: [[wiki/Suricata\|Suricata]] mit ET Open und [[wiki/abuse.ch\|abuse.ch]] Regeln
5. **Threat Intelligence**: [[wiki/MalwareBazaar\|MalwareBazaar]], [[wiki/URLhaus\|URLhaus]], [[wiki/Feodo Tracker\|Feodo Tracker]]
6. **Spam-Schutz**: Multi-Layer ([[wiki/RBL\|RBL]], [[wiki/SPF\|SPF]]/[[wiki/DKIM\|DKIM]]/[[wiki/DMARC\|DMARC]], [[wiki/Greylisting\|Greylisting]], [[wiki/SpamAssassin\|SpamAssassin]])
7. **DNS-Filtering**: [[wiki/Pi-hole\|Pi-hole]] für Werbung und Tracking

## Weiterführende Themen

- High Availability mit CARP
- Traffic Shaping (QoS)
- Captive Portal
- Multi-WAN (Load Balancing)
- Site-to-Site [[wiki/VPN\|VPN]]
- SIEM Integration

> [!tip] Nächste Schritte
> 1. Eigene Test-Umgebung mit [[wiki/Proxmox\|Proxmox]] aufsetzen
> 2. [[wiki/OpenSense\|OpenSense]] als [[wiki/Firewall 1\|Firewall 1]] installieren
> 3. [[wiki/VLAN\|VLAN]]s konfigurieren
> 4. [[wiki/VPN\|VPN]] ([[wiki/WireGuard\|WireGuard]]) einrichten
> 5. [[wiki/IDS\|IDS]] ([[wiki/Suricata\|Suricata]]) aktivieren
> 6. Firewall-Regeln nach Best Practices erstellen
