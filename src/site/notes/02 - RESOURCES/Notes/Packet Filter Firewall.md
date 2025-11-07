---
{"dg-publish":true,"permalink":"/02-resources/notes/packet-filter-firewall/","tags":["informatik/netzwerk/firewall","firewall/generation-1"],"noteIcon":"","updated":"2025-11-07T11:31:50.506+01:00"}
---

> [[02 - RESOURCES/Notes/Firewall\|Firewall]] Generation 1 (1990er)

**Packet Filter Firewall** filtert nach **Quell-IP**, **Ziel-IP**, **Port** und **Protokoll**. Arbeitet auf **OSI-Schicht 3 (Netzwerk)** und **4 (Transport)**.

---

## Funktionsweise

```
Eingehendes Paket:
  Source IP:      192.168.1.100
  Destination IP: 10.0.0.5
  Port:           80
  Protocol:       TCP

Firewall prüft Regeln:
  ✓ Ist diese Kombination erlaubt?
    → JA: Paket durchlassen
    → NEIN: Paket blockieren
```

## Was wird geprüft?

- **Source IP**: Von wo kommt das Paket?
- **Destination IP**: Wohin soll es?
- **Source Port**: Von welchem Port?
- **Destination Port**: Zu welchem Port?
- **Protocol**: TCP, UDP, ICMP, etc.

## Regel-Beispiel

```
ALLOW: Source 192.168.1.0/24 → Destination ANY, Port 80, Protocol TCP
DENY:  Source ANY → Destination 192.168.1.100, Port 22, Protocol TCP
```

## Vorteile

- **Schnell**: Geringe CPU-Last
- **Einfach**: Leicht zu verstehen
- **Geringer Ressourcen-Bedarf**: Läuft auf alter Hardware
- **Stabil**: Bewährte Technologie

## Nachteile

- **Kein Zustandswissen**: Weiß nicht, ob Verbindung legitim ist
- **Anfällig für Angriffe**: IP-Spoofing, SYN-Flood
- **Keine Content-Prüfung**: Kann Anwendungs-Angriffe nicht erkennen
- **Stateless**: Merkt sich keine Verbindungen

## Beispiele

- Alte Router-Firewalls
- Einfache iptables-Regeln (ohne conntrack)
- ACLs (Access Control Lists) auf Routern
- Cisco PIX (alte Version)

## Limitierungen

```
Problem: SYN-Flood

Angreifer sendet viele SYN-Pakete
  → Packet Filter prüft nur: "Ist SYN zu Port 80 erlaubt?"
  → JA → Lässt alle durch
  → Server überlastet ✗

Lösung: Stateful Firewall (Generation 2)
```

## Wann einsetzen?

- Legacy-Systeme
- Sehr hohe Performance notwendig
- Einfache Anforderungen
- Ergänzend zu moderner [[02 - RESOURCES/Notes/Firewall\|Firewall]]

> [!tip] Heute veraltet
> Packet Filter Firewalls werden heute meist durch [[02 - RESOURCES/Notes/Stateful Inspection Firewall\|Stateful Inspection Firewall]] ersetzt.
