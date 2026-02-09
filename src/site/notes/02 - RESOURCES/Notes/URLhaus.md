---
{"dg-publish":true,"permalink":"/02-resources/notes/ur-lhaus/","tags":["informatik/sicherheit/malware","threat-intelligence"],"noteIcon":"","updated":"2025-11-07T11:36:02.000+01:00"}
---

> Datenbank von [[02 - RESOURCES/Notes/Malware\|Malware]]-URLs

**URLhaus** ist ein Service von [[02 - RESOURCES/Notes/abuse.ch\|abuse.ch]]. Er sammelt URLs, die [[02 - RESOURCES/Notes/Malware\|Malware]] verbreiten.

---

## Was macht URLhaus?

- **Sammelt [[02 - RESOURCES/Notes/Malware\|Malware]]-URLs**: Von Forschern weltweit
- **Kategorisiert sie**: Nach [[02 - RESOURCES/Notes/Malware\|Malware]]-Familie (Emotet, TrickBot, etc.)
- **Stellt Blacklist bereit**: Automatisch nutzbar
- **API-Zugriff**: Automatisierung möglich
- **Tägliche Updates**: Immer aktuell

## Verwendung in [[02 - RESOURCES/Notes/Firewall\|Firewall]]

### Integration mit [[02 - RESOURCES/Notes/Suricata\|Suricata]]

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
- **online**: URL ist aktiv und verbreitet [[02 - RESOURCES/Notes/Malware\|Malware]]
- **offline**: URL nicht mehr erreichbar
- **unknown**: Status unbekannt

## Malware-Typen

**Häufige Typen in URLhaus:**
- **exe**: Windows-Executable
- **dll**: Dynamic Link Library
- **doc/docx**: Malicious Office-Dokumente
- **zip/rar**: Archive mit [[02 - RESOURCES/Notes/Malware\|Malware]]
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
- [[02 - RESOURCES/Notes/Suricata\|Suricata]] / Snort ([[02 - RESOURCES/Notes/IDS\|IDS]]/[[02 - RESOURCES/Notes/IPS\|IPS]])
- DNS-Filter (Pi-hole)
- Web-Proxies (Squid)
- Browser-Extensions
- Antivirus-Software

> [!tip] Täglich aktualisiert
> URLhaus wird täglich mit neuen [[02 - RESOURCES/Notes/Malware\|Malware]]-URLs aktualisiert. Immer up-to-date gegen neueste Bedrohungen.
