---
{"dg-publish":true,"permalink":"/02-resources/notes/feodo-tracker/","tags":["informatik/sicherheit/malware","threat-intelligence"],"noteIcon":"","updated":"2025-11-07T11:36:04.499+01:00"}
---

> Datenbank von Banking-Trojanern

**Feodo Tracker** ist ein Service von [[02 - RESOURCES/Notes/abuse.ch\|abuse.ch]]. Er trackt Command & Control (C&C) Server von Banking-Trojanern.

---

## Was macht Feodo Tracker?

- **Trackt C&C-Server**: Von Banking-Trojanern
- **Stellt IP-Blacklist bereit**: Automatisch blockierbar
- **Kategorisiert**: Nach [[02 - RESOURCES/Notes/Malware\|Malware]]-Familie
- **Tägliche Updates**: Immer aktuell

## Banking-Trojaner

**Häufig getrackt:**
- **Emotet**: Einer der gefährlichsten Banking-Trojaner
- **TrickBot**: Emotet-Nachfolger
- **QakBot (Qbot)**: Banking-Trojaner
- **Dridex**: Banking-Trojaner
- **Heodo**: Emotet-Variante

## C&C-Server (Command & Control)

**Was ist das:**
```
Infizierter PC ←→ C&C-Server
                    │
                    ├─► Sendet Befehle
                    ├─► Empfängt gestohlene Daten
                    └─► Lädt weitere Malware
```

**Feodo Tracker blockiert:**
```
Infizierter PC → versucht Verbindung zu C&C
                        │
                        ▼
                 Firewall/IDS prüft
                        │
                        ├─► IP auf Feodo-Liste? JA
                        │
                        └─► Blockieren ✗
```

## Verwendung in [[02 - RESOURCES/Notes/Firewall\|Firewall]]

### Integration mit [[02 - RESOURCES/Notes/Suricata\|Suricata]]

```
Services → Intrusion Detection → Download
  - abuse.ch Feodo ✓

→ Blockiert automatisch Verbindungen zu C&C-Servern
```

## IP-Blacklist Download

**Formate:**
```bash
# JSON-Format
wget https://feodotracker.abuse.ch/downloads/ipblocklist.json

# CSV-Format
wget https://feodotracker.abuse.ch/downloads/ipblocklist.csv

# Plain Text (nur IPs)
wget https://feodotracker.abuse.ch/downloads/ipblocklist.txt
```

**In [[02 - RESOURCES/Notes/Firewall\|Firewall]] importieren:**
```
Firewall → Aliases → Add
  - Name: Feodo_Blocklist
  - Type: URL Table (IPs)
  - URL: https://feodotracker.abuse.ch/downloads/ipblocklist.txt
  - Update: Daily

Firewall → Rules → LAN/WAN
  - Block: Destination = Feodo_Blocklist
```

## C&C-Status

**Kategorien:**
- **online**: C&C ist aktiv
- **offline**: C&C nicht erreichbar
- **unknown**: Status unbekannt

## Confidence Level

**Wie sicher ist die Erkennung:**
- **High**: Sehr sicher, bestätigter C&C
- **Medium**: Wahrscheinlich C&C
- **Low**: Möglicherweise C&C

## Web-Interface

Verfügbar unter: `https://feodotracker.abuse.ch/`

**Features:**
- Browse C&C-Liste
- Suche nach IP
- Statistiken
- Blacklist-Download
- API-Zugriff

## API-Zugriff

```python
import requests

# Alle C&C-Server abrufen
url = "https://feodotracker.abuse.ch/downloads/ipblocklist.json"
response = requests.get(url)
data = response.json()

for entry in data:
    print(f"IP: {entry['ip_address']}")
    print(f"Malware: {entry['malware']}")
    print(f"Status: {entry['status']}")
```

## Warum wichtig?

**Verhindert:**
- Daten-Exfiltration (gestohlene Zugangsdaten werden gesendet)
- Weitere [[02 - RESOURCES/Notes/Malware\|Malware]]-Downloads
- Botnet-Kommunikation
- Lateral Movement (Ausbreitung im Netzwerk)

**Selbst wenn PC infiziert:**
```
PC ist infiziert mit Emotet
     │
     ├─► Versucht Verbindung zu C&C
     │
     ├─► Firewall blockiert (Feodo-Liste)
     │
     └─► Malware kann nicht kommunizieren
         → Schadensbegrenzung ✓
```

> [!tip] Präventive Sicherheit
> Auch wenn [[02 - RESOURCES/Notes/Malware\|Malware]] durchkommt, verhindert Feodo Tracker die Kommunikation nach außen. Defense in Depth!
