---
{"dg-publish":true,"permalink":"/02-resources/notes/stateful-inspection-firewall/","tags":["informatik/netzwerk/firewall","firewall/generation-2"],"noteIcon":"","updated":"2025-11-07T11:31:52.517+01:00"}
---

> [[02 - RESOURCES/Notes/Firewall\|Firewall]] Generation 2 (Ende 1990er / Anfang 2000er)

**Stateful Inspection Firewall** erkennt den **Zustand von Verbindungen**. Sie merkt sich, welche Verbindungen aktiv sind und ob sie erlaubt sind.

---

## Funktionsweise

```
Connection State Table:

┌────────────────┬──────────┬─────────┬─────────┐
│ Source IP      │ Dest IP  │ Port    │ Status  │
├────────────────┼──────────┼─────────┼─────────┤
│ 192.168.1.100  │ 8.8.8.8  │ 443     │ ACTIVE  │
│ 192.168.1.101  │ 1.1.1.1  │ 80      │ CLOSING │
└────────────────┴──────────┴─────────┴─────────┘

Firewall merkt sich:
  - Welche Verbindungen offen sind
  - Wer die Verbindung gestartet hat
  - In welchem Zustand die Verbindung ist
```

## Verbindungs-Zustände (TCP)

- **NEW**: Neue Verbindung (SYN)
- **ESTABLISHED**: Aktive Verbindung (nach Handshake)
- **RELATED**: Zugehörige Verbindung (z.B. FTP-Daten)
- **INVALID**: Ungültige Verbindung (blocken!)

## Vergleich zu [[02 - RESOURCES/Notes/Packet Filter Firewall\|Packet Filter Firewall]]

```
Packet Filter (Generation 1):
  - Prüft jedes Paket einzeln
  - Kein Kontext
  - Stateless

Stateful Inspection (Generation 2):
  - Versteht Verbindungen
  - Kennt Kontext
  - Stateful
```

## Beispiel

```
Client sendet SYN → Server
  → Firewall merkt sich: Connection ID 1234, Status: NEW

Server antwortet SYN-ACK
  → Firewall prüft: Gehört zu Connection 1234? JA
  → Status: ESTABLISHED
  → Durchlassen ✓

Angreifer sendet Random-ACK
  → Firewall prüft: Gehört zu bekannter Connection? NEIN
  → Status: INVALID
  → Blockieren ✗
```

## Vorteile

- **Versteht Verbindungs-Kontext**: Weiß, was zusammengehört
- **Schutz vor SYN-Flood**: Erkennt ungültige Verbindungen
- **Automatische Return-Rules**: Antworten werden automatisch erlaubt
- **Sicherer als Packet Filter**: Schwerer zu überlisten

## Nachteile

- **Höherer Ressourcen-Bedarf**: State-Table braucht RAM
- **Keine Content-Prüfung**: Kann Anwendungs-Angriffe nicht erkennen
- **Kein SSL-Inspection**: Verschlüsselter Traffic ist unsichtbar

## Beispiele

- Moderne iptables (mit conntrack)
- Cisco ASA
- [[02 - RESOURCES/Notes/OpenSense\|OpenSense]] (Standard-Mode)
- pfSense
- Windows Defender Firewall

## Regel-Beispiel

```
# Erlaube ausgehende HTTP-Verbindungen
iptables -A OUTPUT -p tcp --dport 80 -m state --state NEW,ESTABLISHED -j ACCEPT

# Erlaube automatisch Antworten
iptables -A INPUT -m state --state ESTABLISHED,RELATED -j ACCEPT

# Blockiere alles andere
iptables -A INPUT -j DROP
```

## Wann einsetzen?

- Standard für moderne [[02 - RESOURCES/Notes/Firewall\|Firewall]]s
- Gutes Gleichgewicht: Sicherheit vs. Performance
- Für die meisten Anwendungsfälle ausreichend

> [!tip] Heute Standard
> Stateful Inspection ist heute Mindestanforderung für [[02 - RESOURCES/Notes/Firewall\|Firewall]]s. [[02 - RESOURCES/Notes/Next Generation Firewall\|Next Generation Firewall]] geht noch weiter.
