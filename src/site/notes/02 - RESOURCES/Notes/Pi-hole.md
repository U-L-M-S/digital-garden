---
{"dg-publish":true,"permalink":"/02-resources/notes/pi-hole/","tags":["informatik/netzwerk/dns","sicherheit/werbeblocker","raspberry-pi"],"noteIcon":"","updated":"2025-11-07T11:40:25.000+01:00"}
---

> DNS-basierter Werbeblocker

**Pi-hole** blockiert Werbung und Tracking auf DNS-Ebene. Funktioniert für das gesamte [[02 - RESOURCES/Notes/Netzwerk\|Netzwerk]], nicht nur im Browser.

---

## Funktionsweise

```
1. Gerät fragt: "Was ist die IP von ads.example.com?"

2. Pi-hole prüft Blacklist:
   - Ist ads.example.com auf Blacklist? JA

3. Pi-hole antwortet: "0.0.0.0" (oder eigene IP)

4. Gerät versucht Verbindung zu 0.0.0.0
   → Schlägt fehl
   → Werbung wird nicht geladen ✓
```

**Normale DNS-Abfrage:**
```
Gerät → DNS-Server → "ads.com = 203.0.113.50"
     → Gerät lädt Werbung von 203.0.113.50
```

**Mit Pi-hole:**
```
Gerät → Pi-hole → Prüft Blacklist → "ads.com auf Liste!"
     → Pi-hole antwortet: "ads.com = 0.0.0.0"
     → Werbung wird nicht geladen ✓
```

## Vorteile

### Netzwerk-weit

- **Alle Geräte**: PCs, Smartphones, Tablets, Smart-TVs
- **Kein Plugin**: Funktioniert automatisch
- **Apps geschützt**: Nicht nur Browser

### Performance

- **Schneller**: Werbung wird gar nicht erst geladen
- **Weniger Traffic**: Spart Bandbreite
- **Weniger CPU**: Weniger zu rendern

### Privacy

- **Tracking blockiert**: Tracking-Domains geblockt
- **Telemetrie**: Verhindert Daten-Sammlung
- **Lokale Kontrolle**: Deine Daten bleiben lokal

## Installation

### Hardware

**Klassisch: Raspberry Pi**
```
Raspberry Pi 3/4/5
  → Raspbian OS
  → Pi-hole installieren
```

**Alternativ:**
- Docker Container
- Virtuelle Maschine
- Dedizierter Linux-Server

### Installation

```bash
# One-Line-Installer
curl -sSL https://install.pi-hole.net | bash

# Oder Git-Clone
git clone --depth 1 https://github.com/pi-hole/pi-hole.git Pi-hole
cd Pi-hole/automated\ install/
sudo bash basic-install.sh
```

**Setup-Assistent:**
1. Upstream DNS wählen (z.B. Cloudflare, Google)
2. Blocklists auswählen
3. Web-Interface installieren? Ja
4. Admin-Passwort setzen

## Konfiguration

### DHCP-Server konfigurieren

**Router/DHCP anpassen:**
```
Primary DNS:   <Pi-hole-IP>
Secondary DNS: (leer lassen!)
```

> [!warning] Kein Secondary DNS!
> Wenn Secondary DNS gesetzt ist, umgehen Geräte Pi-hole!

### Oder: DNS manuell setzen

**Auf jedem Gerät:**
```
Windows: Netzwerkeinstellungen → DNS → <Pi-hole-IP>
macOS: Systemeinstellungen → Netzwerk → DNS
Linux: /etc/resolv.conf → nameserver <Pi-hole-IP>
```

## Web-Interface

**Zugriff:**
```
http://<Pi-hole-IP>/admin
```

**Dashboard zeigt:**
- Anzahl blockierter Domains
- Prozent blockierter Queries
- Meistbesuchte Domains
- Top blockierte Domains
- Query-Verlauf

## Blacklists

**Standard-Listen:**
```
- StevenBlack's Unified Hosts
- MalwareDomains
- Cameleon
- DisconnectMe Tracking
```

**Weitere Listen hinzufügen:**
```
Group Management → Adlists → Add
  https://v.firebog.net/hosts/AdguardDNS.txt
```

**Beliebte Listen:**
- Firebog (https://firebog.net/)
- OISD (https://oisd.nl/)
- Energized (https://energized.pro/)

## Whitelist/Blacklist

### Whitelist (erlauben)

```bash
# Via CLI
pihole -w example.com

# Via Web-Interface
Group Management → Whitelist → Add
```

**Häufig whitelisten:**
- `s.youtube.com` (für YouTube-Historie)
- `googleadservices.com` (für Google Shopping)

### Blacklist (zusätzlich blockieren)

```bash
# Via CLI
pihole -b bad-tracker.com

# Via Web-Interface
Group Management → Blacklist → Add
```

## Regex-Filter

**Fortgeschritten:**
```
Group Management → Domains → Regex Filter

Beispiel:
  ^ad[sxv]?[0-9]*\..*$
  → Blockiert: ads1.example.com, adv2.test.com, etc.
```

## Upstream DNS

**Was Pi-hole für nicht-blockierte Domains tut:**

```
Pi-hole fragt Upstream DNS:
  - Cloudflare (1.1.1.1, 1.0.0.1)
  - Google (8.8.8.8, 8.8.4.4)
  - Quad9 (9.9.9.9)
  - Unbound (eigener rekursiver DNS)
```

**Konfiguration:**
```
Settings → DNS → Upstream DNS Servers
  - Cloudflare (Privacy-fokussiert)
  - Google (Schnell)
  - Quad9 (Security-fokussiert)
```

## Unbound Integration

**Noch mehr Privacy: Eigener rekursiver DNS**

```bash
# Unbound installieren
sudo apt install unbound

# Pi-hole konfigurieren
Settings → DNS → Custom 1: 127.0.0.1#5335
```

**Vorteil:**
```
Ohne Unbound:
  Pi-hole → Cloudflare/Google

Mit Unbound:
  Pi-hole → Unbound → Root DNS Server
  → Keine Third-Party DNS
```

## Integration mit [[02 - RESOURCES/Notes/OpenSense\|OpenSense]]

**Variante 1: Forward Mode**
```
OpenSense → Services → Unbound DNS → General
  - Forward Mode aktivieren
  - Forward to: <Pi-hole-IP>
```

**Variante 2: DHCP DNS**
```
OpenSense → Services → DHCP → DNS Servers
  - Primary DNS: <Pi-hole-IP>
```

## Statistiken

**Query Log:**
```
Tools → Query Log
  - Zeigt alle DNS-Anfragen
  - Blocked/Permitted
  - Client-IP
  - Domain
  - Timestamp
```

**Long-Term Data:**
```
Dashboard → Long-term Data
  - Queries over time
  - Top Domains
  - Top Advertisers
  - Top Clients
```

## Troubleshooting

### Websites funktionieren nicht

```
1. Prüfe Pi-hole-Status:
   pihole status

2. Teste DNS:
   nslookup example.com <Pi-hole-IP>

3. Domain whitelisten:
   pihole -w domain.com
```

### Pi-hole langsam

```
1. Zu viele Blocklists:
   → Weniger Listen verwenden

2. Raspberry Pi überlastet:
   → Stärkere Hardware

3. Cache leeren:
   pihole restartdns
```

## Updates

```bash
# Pi-hole aktualisieren
pihole -up

# Gravity-Datenbank aktualisieren (Blocklists)
pihole -g
```

> [!tip] Netzwerk-weiter Schutz
> Pi-hole ist die perfekte Ergänzung zu Browser-Adblockern. Schützt ALLE Geräte im [[02 - RESOURCES/Notes/Netzwerk\|Netzwerk]], auch solche ohne Adblocker-Support (Smart-TVs, IoT).
