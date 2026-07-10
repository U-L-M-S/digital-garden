---
{"dg-publish":true,"permalink":"/wiki/deep-packet-inspection/","tags":["informatik/netzwerk","informatik/sicherheit","firewall/technik"],"noteIcon":"","updated":"2025-11-07T11:35:57.000+01:00","dg-note-properties":{"aliases":["DPI"],"created":"2025-01-07","path":"Notes","tags":["informatik/netzwerk","informatik/sicherheit","firewall/technik"]}}
---

> Tiefe Paket-Analyse

**Deep Packet Inspection (DPI)** analysiert nicht nur Header, sondern auch den **Inhalt** von Datenpaketen.

---

## Was wird geprüft?

**Traditionelle [[wiki/Firewall\|Firewall]] (ohne DPI):**
```
Prüft:
  - Source IP
  - Destination IP
  - Source Port
  - Destination Port
  - Protocol (TCP/UDP/ICMP)

→ Entscheidung: Allow/Deny
```

**Deep Packet Inspection (mit DPI):**
```
Prüft:
  - Header (wie oben)
  - Paket-Inhalt (Payload)
  - Anwendungs-Protokoll (HTTP, FTP, SSH, etc.)
  - Muster im Traffic
  - Verschlüsselungs-Fingerprints

→ Entscheidung: Allow/Deny/Alert
```

## Anwendungsfälle

### 1. Application Control

Erkennt Anwendungen unabhängig vom Port:

```
Beispiel:
  - Facebook-Chat läuft auf Port 443 (HTTPS)
  - Traditionelle Firewall sieht nur: HTTPS → Erlauben
  - DPI erkennt: Facebook-Chat → Kann separat blockieren
```

### 2. [[wiki/Malware\|Malware]]-Erkennung

Sucht nach [[wiki/Malware\|Malware]]-Signaturen im Traffic:

```
Beispiel:
  - Client lädt Datei herunter
  - DPI analysiert Datei-Inhalt
  - Erkennt Malware-Muster
  - Blockiert Download
```

### 3. Data Leakage Prevention (DLP)

Verhindert Daten-Abfluss:

```
Beispiel:
  - Mitarbeiter sendet E-Mail
  - DPI erkennt Kreditkarten-Nummern im Text
  - Blockiert E-Mail
  - Alarmiert Admin
```

### 4. Quality of Service (QoS)

Priorisiert wichtigen Traffic:

```
Beispiel:
  - DPI erkennt Video-Konferenz (Zoom)
  - Priorisiert diesen Traffic
  - YouTube-Videos bekommen weniger Priorität
```

## Techniken

### Pattern Matching

Sucht nach bekannten Mustern:
```
Beispiel: SQL-Injection
  - DPI sucht nach "SELECT * FROM" in HTTP-POST
  - Blockiert verdächtige Anfrage
```

### Protocol Analysis

Versteht Anwendungs-Protokolle:
```
Beispiel: HTTP
  - Prüft HTTP-Header
  - Validiert HTTP-Methoden
  - Erkennt HTTP-Anomalien
```

### Heuristic Analysis

Erkennt Anomalien ohne bekannte Muster:
```
Beispiel: DDoS-Angriff
  - Ungewöhnlich viele Requests
  - DPI erkennt Anomalie
  - Blockiert Traffic
```

## Einsatz in Firewalls

**Wo wird DPI eingesetzt:**
- [[wiki/Next Generation Firewall\|Next Generation Firewall]] (NGFW)
- [[wiki/IDS\|IDS]]/[[wiki/IPS\|IPS]] (z.B. [[wiki/Suricata\|Suricata]])
- Web Application Firewalls ([[WAF\|WAF]])
- Intrusion Prevention Systeme

## Performance-Impact

**Nachteile von DPI:**
- **Hoher CPU-Bedarf**: Inhalt analysieren ist teuer
- **Latenz**: Pakete müssen inspiziert werden
- **Durchsatz**: Reduzierte Geschwindigkeit

**Optimierungen:**
- Hardware-Beschleunigung
- Multi-Threading
- Selektive Inspektion (nur verdächtige Flows)

## Datenschutz-Bedenken

**Kritik:**
- DPI kann **alle** Daten lesen (auch private)
- Potenzial für Überwachung
- HTTPS-Inspektion erfordert Man-in-the-Middle

**Gegenmaßnahmen:**
- Verschlüsselung (Ende-zu-Ende)
- [[wiki/VPN\|VPN]] (verhindert ISP-DPI)
- TLS 1.3 (erschwert DPI)

## SSL/TLS Inspection

**Problem:** Verschlüsselter Traffic ist unsichtbar für DPI

**Lösung:** SSL/TLS Inspection (Man-in-the-Middle)
```
Client → [Firewall entschlüsselt] → [DPI] → [Firewall verschlüsselt] → Server
```

**Voraussetzung:**
- [[wiki/Firewall\|Firewall]] muss eigenes CA-Zertifikat haben
- Clients müssen CA vertrauen

> [!warning] Datenschutz
> DPI kann Datenschutz-Probleme verursachen. In Unternehmen muss es transparent kommuniziert werden.
