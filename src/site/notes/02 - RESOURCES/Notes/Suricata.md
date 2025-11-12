---
{"dg-publish":true,"permalink":"/02-resources/notes/suricata/","tags":["informatik/netzwerk/firewall","informatik/sicherheit/ids","opensource"],"noteIcon":"","updated":"2025-11-07T12:04:30.501+01:00"}
---

> Open-Source [[02 - RESOURCES/Notes/IDS\|IDS]]/[[02 - RESOURCES/Notes/IPS\|IPS]]-Engine

**Suricata** ist eine hochperformante [[02 - RESOURCES/Notes/IDS\|IDS]]/[[02 - RESOURCES/Notes/IPS\|IPS]]-Engine. Sie analysiert [[02 - RESOURCES/Notes/Netzwerk\|Netzwerk]]-Traffic auf Angriffsmuster.

---

## Features

- **Multi-Threading**: Nutzt mehrere CPU-Kerne
- **Multi-gigabit Performance**: Sehr schnell
- **[[02 - RESOURCES/Notes/IPv4\|IPv4]] + [[02 - RESOURCES/Notes/IPv6\|IPv6]]**: Unterstützt beide
- **[[02 - RESOURCES/Notes/Deep Packet Inspection\|Deep Packet Inspection]]**: Analysiert Paket-Inhalt
- **TLS/SSL Inspection**: Verschlüsselten Traffic prüfen
- **Protokoll-Parsing**: HTTP, DNS, SMB, etc.
- **File Extraction**: Dateien aus Traffic extrahieren

## [[02 - RESOURCES/Notes/IDS\|IDS]] vs. [[02 - RESOURCES/Notes/IPS\|IPS]]

```
    IDS Mode              IPS Mode
       │                     │
       ▼                     ▼
┌───────────┐         ┌───────────┐
│   Copy    │         │  Inline   │
│  Traffic  │         │ Traffic   │
└───────────┘         └───────────┘
       │                     │
       ▼                     ▼
   Nur Alert            Blockiert
```

**IDS Mode (Passiv):**
- Kopiert Traffic
- Analysiert
- Sendet Alerts
- Traffic fließt weiter

**IPS Mode (Aktiv):**
- Traffic läuft durch [[02 - RESOURCES/Notes/Suricata\|Suricata]]
- Analysiert
- Blockiert bösartigen Traffic
- Benötigt spezielle NIC

## Rule Sets

**Hauptquellen:**
1. **Emerging Threats (ET)**: ~35.000 Regeln (kostenlos)
2. **[[02 - RESOURCES/Notes/abuse.ch\|abuse.ch]]**: ~1.000+ Regeln (URLhaus, Feodo, SSL Blacklist)

## In [[02 - RESOURCES/Notes/OpenSense\|OpenSense]]

**Installation:**
```
Services → Intrusion Detection → Administration
  - Enable IDS: ✓
  - Pattern Matcher: ac-ks (empfohlen)
  - Interfaces: WAN
```

**Rule Download:**
```
Services → Intrusion Detection → Download
  - ET Open ✓
  - abuse.ch SSL ✓
  - abuse.ch URLhaus ✓
  - Download and Update Rules
```

## Alerts anzeigen

```
Services → Intrusion Detection → Alerts

Zeigt:
- Timestamp: Wann wurde Angriff erkannt?
- SID: Regel-ID
- Message: Was für ein Angriff?
```
