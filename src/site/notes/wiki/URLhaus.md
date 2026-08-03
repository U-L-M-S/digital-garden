---
{"dg-publish":true,"permalink":"/wiki/ur-lhaus/","tags":["informatik/sicherheit"],"noteIcon":"","updated":"2026-07-19T03:56:26.000+02:00","dg-note-properties":{"created":"2025-01-07","path":"Notes","tags":["informatik/sicherheit"]}}
---

> Datenbank von [[wiki/Malware\|Malware]]-URLs

**URLhaus** ist ein Service von [[wiki/abuse.ch\|abuse.ch]]. Er sammelt URLs, die [[wiki/Malware\|Malware]] verbreiten.

---

## Was macht URLhaus?

- **Sammelt [[wiki/Malware\|Malware]]-URLs**: Von Forschern weltweit
- **Kategorisiert sie**: Nach [[wiki/Malware\|Malware]]-Familie (Emotet, TrickBot, etc.)
- **Stellt Blacklist bereit**: Automatisch nutzbar
- **API-Zugriff**: Automatisierung möglich
- **Tägliche Updates**: Immer aktuell

## Verwendung in [[wiki/Firewall\|Firewall]]

### Integration mit [[wiki/Suricata\|Suricata]]

```
Services → Intrusion Detection → Download
  - abuse.ch URLhaus ✓

→ Blockiert automatisch Zugriff auf bekannte Malware-URLs
```

**Was passiert:**
```
1. Client will auf URL zugreifen: http://evil.com/malware.exe

2. Suricata prüft gegen URLhaus-Liste

3. URL gefunden! → Alert/Block

4. Zugriff wird verhindert ✓
```

## URL-Status

**Kategorien:**
- **online**: URL ist aktiv und verbreitet [[wiki/Malware\|Malware]]
- **offline**: URL nicht mehr erreichbar
- **unknown**: Status unbekannt

## Malware-Typen

**Häufige Typen in URLhaus:**
- **exe**: Windows-Executable
- **dll**: Dynamic Link Library
- **doc/docx**: Malicious Office-Dokumente
- **zip/rar**: Archive mit [[wiki/Malware\|Malware]]
- **jar**: Java-Archive
- **ps1**: PowerShell-Scripts

## API-Beispiel

```python
import requests

url = "https://urlhaus-api.abuse.ch/v1/url/"
data = {"url": "http://evil.com/malware.exe"}
response = requests.post(url, data=data)

if response.json()["query_status"] == "ok":
    print("Malware-URL gefunden!")
    print(f"Threat: {response.json()['threat']}")
    print(f"Status: {response.json()['url_status']}")
else:
    print("URL nicht in Datenbank")
```

## Blacklist-Download

**Für eigene Systeme:**
```bash
# URL-Liste herunterladen (alle online URLs)
wget https://urlhaus.abuse.ch/downloads/csv_online/

# In Firewall/Proxy importieren
```

**Formate:**
- CSV (Excel-kompatibel)
- JSON (für APIs)
- Plain Text (nur URLs)

## Web-Interface

Auch ohne API nutzbar: `https://urlhaus.abuse.ch/`

**Features:**
- Suche nach URL
- Suche nach Host
- Browse nach Tag
- Statistiken
- Blacklist-Download

## Threat-Tags

**Häufige Tags:**
- `Emotet`: Banking-Trojaner
- `TrickBot`: Banking-Trojaner
- `Qakbot`: Banking-Trojaner
- `IcedID`: Banking-Trojaner
- `Cobalt Strike`: Pentesting (missbraucht)
- `AgentTesla`: Keylogger

## Integration mit anderen Tools

URLhaus wird genutzt von:
- [[wiki/Suricata\|Suricata]] / Snort ([[wiki/IDS\|IDS]]/[[wiki/IPS\|IPS]])
- DNS-Filter (Pi-hole)
- Web-Proxies (Squid)
- Browser-Extensions
- Antivirus-Software

> [!tip] Täglich aktualisiert
> URLhaus wird täglich mit neuen [[wiki/Malware\|Malware]]-URLs aktualisiert. Immer up-to-date gegen neueste Bedrohungen.
