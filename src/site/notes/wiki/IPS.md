---
{"dg-publish":true,"permalink":"/wiki/ips/","tags":["informatik/sicherheit","informatik/netzwerk"],"noteIcon":"","updated":"2026-07-19T03:56:26.000+02:00","dg-note-properties":{"aliases":["Intrusion Prevention System"],"created":"2025-01-07","path":"Notes","tags":["informatik/sicherheit","informatik/netzwerk"]}}
---

> Intrusion Prevention System

**IPS** überwacht UND blockiert bösartigen Traffic. **Aktiv** – greift direkt ein.

---

## Funktionsweise

```
IPS Mode (Active):

Network Traffic
     │
     ▼
IPS Engine (Inline)
     │
     ├─► Analyze
     ├─► Pattern Match
     │
     ├─► Malicious? → DROP ✗
     │
     └─► Benign? → PASS ✓
```

## Eigenschaften

- **Inline Mode**: Traffic läuft durch IPS
- **In-Band Blocking**: Kann Traffic droppen
- **Aktive Prevention**: Blockiert automatisch
- **Benötigt spezielle NIC**: Netmap-Support notwendig

## Unterschied zu [[wiki/IDS\|IDS]]

| Eigenschaft | [[wiki/IDS\|IDS]] | [[wiki/IPS\|IPS]] |
|------------|--------|--------|
| **Betrieb** | Out-of-Band | Inline |
| **Aktion** | Alert | Alert + Block |
| **Traffic** | Kopie | Original |
| **Hardware** | Normale NIC | Spezielle NIC |

## Risiken

**False Positives:**
- Legitimer Traffic wird fälschlicherweise blockiert
- Service-Unterbrechung möglich

**Performance:**
- Zusätzliche Latenz durch Inline-Prüfung
- Benötigt mehr Ressourcen

## Erkennungsmethoden

Gleich wie [[wiki/IDS\|IDS]]:
1. **Signature-Based**: Bekannte Angriffe
2. **Anomaly-Based**: Abweichungen vom Normalverhalten

## Beliebte IPS-Systeme

- [[wiki/Suricata\|Suricata]] (mit spezieller NIC)
- Snort (IPS-Mode)
- Cisco Firepower

## Einsatz

```
Internet → IPS (Inline) → Firewall → Internes Netzwerk

oder

Internet → Firewall → IPS (Inline) → Internes Netzwerk
```

> [!important] Hardware-Anforderung
> IPS benötigt Netzwerkkarte mit Netmap-Support. Ohne spezielle Hardware nur [[wiki/IDS\|IDS]]-Mode möglich.
