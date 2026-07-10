---
{"dg-publish":true,"permalink":"/wiki/abuse-ch/","tags":["informatik/sicherheit/threat-intelligence","malware"],"noteIcon":"","updated":"2025-11-07T11:31:47.000+01:00","dg-note-properties":{"aliases":["abuse.ch services"],"created":"2025-01-07","path":"Notes","tags":["informatik/sicherheit/threat-intelligence","malware"]}}
---

> Kostenlose Threat Intelligence Plattform

**abuse.ch** ist eine Plattform, die Datenbanken von bekannten Bedrohungen bereit stellt. Kostenlos für alle nutzbar.

---

## Services

### 1. [[wiki/MalwareBazaar\|MalwareBazaar]]

> Datenbank von [[wiki/Malware\|Malware]]-Samples

**Was:**
- Sammelt [[wiki/Malware\|Malware]]-Samples
- Analysiert sie
- Stellt Hashes bereit (SHA256, MD5)

**Verwendung:**
- Download von [[wiki/Malware\|Malware]]-Samples (für Forschung)
- Hash-Abgleich: Ist Datei [[wiki/Malware\|Malware]]?
- API-Zugriff (Python, REST)

### 2. [[wiki/URLhaus\|URLhaus]]

> Datenbank von [[wiki/Malware\|Malware]]-URLs

**Was:**
- Sammelt URLs, die [[wiki/Malware\|Malware]] verbreiten
- Kategorisiert sie (Emotet, TrickBot, etc.)
- Stellt Blacklist bereit

**Verwendung in [[wiki/Firewall\|Firewall]]:**
- Automatische Blockierung bekannter [[wiki/Malware\|Malware]]-URLs
- Integration mit [[wiki/Suricata\|Suricata]]

### 3. [[wiki/Feodo Tracker\|Feodo Tracker]]

> Datenbank von Banking-Trojanern

**Was:**
- Trackt Command & Control (C&C) Server
- Banking-Trojaner: Emotet, TrickBot, QakBot, etc.
- Stellt IP-Blacklist bereit

**Verwendung:**
- Blockiert automatisch Verbindungen zu C&C-Servern
- Verhindert Malware-Kommunikation

### 4. [[wiki/SSL Blacklist\|SSL Blacklist]]

> Datenbank von bösartigen SSL-Zertifikaten

**Was:**
- Sammelt SSL-Zertifikate von [[wiki/Malware\|Malware]]
- Erstellt Fingerprint (SHA1)
- Stellt Blacklist bereit

**Verwendung:**
- Erkennt [[wiki/Malware\|Malware]]-Traffic anhand SSL-Fingerprint
- Auch bei verschlüsseltem Traffic

## Integration mit [[wiki/Suricata\|Suricata]]

```
Suricata + abuse.ch:

Traffic wird geprüft gegen:
  ├─► URLhaus: Malware-URLs
  ├─► Feodo: C&C-Server-IPs
  └─► SSL Blacklist: Malware-Zertifikate

→ Bei Match: Alert oder Block
```

## API-Zugriff

Alle Services bieten REST-API:
- **MalwareBazaar**: `https://mb-api.abuse.ch/api/v1/`
- **URLhaus**: `https://urlhaus-api.abuse.ch/v1/`
- **Feodo Tracker**: `https://feodotracker.abuse.ch/downloads/`

**Beispiel Python:**
```python
import requests

url = "https://mb-api.abuse.ch/api/v1/"
data = {"query": "get_info", "hash": "SHA256_HERE"}
response = requests.post(url, data=data)
print(response.json())
```

## Vorteile

- **Kostenlos**: Alle Services gratis
- **Aktuell**: Täglich Updates
- **Community-getrieben**: Forscher weltweit
- **API-Zugriff**: Automatisierung möglich
