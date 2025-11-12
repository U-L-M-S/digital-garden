---
{"dg-publish":true,"permalink":"/02-resources/notes/ips/","tags":["informatik/sicherheit/ips","informatik/netzwerk"],"noteIcon":"","updated":"2025-11-07T11:31:45.000+01:00"}
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

## Unterschied zu [[02 - RESOURCES/Notes/IDS\|IDS]]

| Eigenschaft | [[02 - RESOURCES/Notes/IDS\|IDS]] | [[02 - RESOURCES/Notes/IPS\|IPS]] |
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

Gleich wie [[02 - RESOURCES/Notes/IDS\|IDS]]:
1. **Signature-Based**: Bekannte Angriffe
2. **Anomaly-Based**: Abweichungen vom Normalverhalten

## Beliebte IPS-Systeme

- [[02 - RESOURCES/Notes/Suricata\|Suricata]] (mit spezieller NIC)
- Snort (IPS-Mode)
- Cisco Firepower

## Einsatz

```
Internet → IPS (Inline) → Firewall → Internes Netzwerk

oder

Internet → Firewall → IPS (Inline) → Internes Netzwerk
```

> [!important] Hardware-Anforderung
> IPS benötigt Netzwerkkarte mit Netmap-Support. Ohne spezielle Hardware nur [[02 - RESOURCES/Notes/IDS\|IDS]]-Mode möglich.
