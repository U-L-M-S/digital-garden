---
{"dg-publish":true,"permalink":"/02-resources/notes/ids/","tags":["informatik/sicherheit/ids","informatik/netzwerk"],"noteIcon":"","updated":"2025-11-07T11:31:43.473+01:00"}
---

> Intrusion Detection System

**IDS** überwacht [[02 - RESOURCES/Notes/Netzwerk\|Netzwerk]]-Traffic und alarmiert bei Bedrohungen. **Passiv** – greift nicht ein.

---

## Funktionsweise

```
IDS Mode (Passive):

Network Traffic
     │
     ├─► Copy → IDS Engine
     │            │
     │            ├─► Analyze
     │            ├─► Pattern Match
     │            └─► Alert! (Log)
     │
     └─► Original Traffic flows through
```

## Eigenschaften

- **Out-of-Band Monitoring**: Kein Inline-Betrieb
- **Kann Traffic nicht stoppen**: Nur beobachten
- **Nur Logging/Alerting**: Warnt Administrator
- **Kein Hardware-Requirement**: Normale NIC reicht

## Unterschied zu [[02 - RESOURCES/Notes/Firewall\|Firewall]]

```
Traditional Firewall:
    Prüft: Source IP, Destination IP, Port, Protocol
    Entscheidung: Allow/Deny

IDS (Deep Packet Inspection):
    Prüft: Packet-Inhalt, Traffic-Patterns, Signatures
    Entscheidung: Alert (aber lässt durch)
```

## Erkennungsmethoden

**1. Signature-Based:**
- Vergleicht mit bekannten Angriffsmustern
- Schnell und präzise
- Kann nur bekannte Angriffe erkennen

**2. Anomaly-Based:**
- Erkennt Abweichungen vom Normalverhalten
- Kann neue Angriffe erkennen
- Höhere False-Positive-Rate

## Beliebte IDS-Systeme

- [[02 - RESOURCES/Notes/Suricata\|Suricata]] (Open-Source)
- Snort (Open-Source)
- Zeek (früher Bro)

## Einsatz

Typisch: Hinter [[02 - RESOURCES/Notes/Firewall\|Firewall]] als zweite Sicherheitsebene

```
Internet → Firewall → IDS → Internes Netzwerk
```
