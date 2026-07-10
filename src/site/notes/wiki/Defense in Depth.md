---
{"dg-publish":true,"permalink":"/wiki/defense-in-depth/","tags":["informatik/sicherheit","informatik/sicherheit/konzept"],"noteIcon":"","updated":"2026-07-02T15:37:49.000+02:00","dg-note-properties":{"aliases":["Mehrschichtige Verteidigung","Multi-Layer Defense"],"created":"2025-01-07","path":"Notes","tags":["informatik/sicherheit","informatik/sicherheit/konzept"]}}
---

> Mehrere Sicherheitsschichten hintereinander

**Defense in Depth** bedeutet: Nicht auf EINE Sicherheitsmaßnahme verlassen, sondern mehrere Schichten kombinieren.

---

## Grundprinzip

```
Wenn eine Schicht versagt,
fangen andere Schichten es auf.
```

**Analogie: Burg-Verteidigung**
```
Angreifer
   │
   ├─► Layer 1: Wassergraben (verlangsamt)
   │     │
   │     ▼ Angreifer kommt durch
   │
   ├─► Layer 2: Außenmauer (stoppt die meisten)
   │     │
   │     ▼ Einige kommen durch
   │
   ├─► Layer 3: Innenmauer (stoppt mehr)
   │     │
   │     ▼ Wenige kommen durch
   │
   └─► Layer 4: Burgfried (letzter Schutz)
```

## IT-Sicherheit Layers

### Layer 1: Perimeter Security

**Außengrenze:**
- [[wiki/Firewall\|Firewall]]
- [[wiki/IDS\|IDS]]/[[wiki/IPS\|IPS]]
- [[wiki/VPN\|VPN]]-Gateway
- DMZ

```
Internet → Firewall → IDS → Internes Netz
```

### Layer 2: Network Security

**Netzwerk-Ebene:**
- [[wiki/VLAN\|VLAN]]-Segmentierung
- Access Control Lists (ACLs)
- [[wiki/NAT\|NAT]]
- Network Monitoring

```
Internes Netz → VLAN 10 (Server)
              → VLAN 20 (Clients)
              → VLAN 30 (Gäste)
```

### Layer 3: Host Security

**Einzelne Systeme:**
- Antivirus/Antimalware
- Host-based [[wiki/Firewall\|Firewall]]
- Patch Management
- Hardening

```
Jeder PC/Server:
  - Windows Defender Firewall
  - Antivirus
  - Automatische Updates
  - Least Privilege
```

### Layer 4: Application Security

**Anwendungen:**
- [[WAF\|WAF]] (Web Application Firewall)
- Input Validation
- Secure Coding
- Application Patching

### Layer 5: Data Security

**Daten:**
- [[wiki/Verschlüsselung\|Verschlüsselung]]
- [[wiki/Backup\|Backup]]
- Access Control
- Data Loss Prevention (DLP)

```
Daten:
  - At Rest: Verschlüsselte Festplatten
  - In Transit: TLS/SSL
  - Backups: Extern + verschlüsselt
```

### Layer 6: User Security

**Menschen:**
- [[MFA\|MFA]] (Multi-Factor Authentication)
- Schulungen
- Security Awareness
- Phishing-Training

## Beispiel: Spam-Schutz

```
Multi-Layer Spam Protection:

Layer 1: RBL (DNS Blacklist)
     │ ← Blockiert bekannte Spam-IPs
     ▼
Layer 2: SPF/DKIM/DMARC
     │ ← Prüft E-Mail-Authentizität
     ▼
Layer 3: Greylisting
     │ ← Verzögert unbekannte Absender
     ▼
Layer 4: SpamAssassin
     │ ← Analysiert E-Mail-Inhalt
     ▼
Layer 5: Attachment-Filter
     │ ← Blockiert gefährliche Anhänge
     ▼
User Mailbox ✓
```

**Warum mehrere Schichten:**
- Layer 1 blockt 70% (aber 30% kommen durch)
- Layer 2 blockt weitere 20% (10% kommen durch)
- Layer 3 blockt weitere 7% (3% kommen durch)
- Layer 4 blockt weitere 2% (1% kommt durch)
- Layer 5 blockt weitere 0.9% (0.1% kommt durch)

**Gesamt: 99.9% blockiert!**

## Beispiel: [[wiki/Firewall\|Firewall]]-Setup

```
Internet
   │
   ├─► Layer 1: Firewall (Port/IP-Filter)
   │     │
   │     ▼
   ├─► Layer 2: IDS/IPS (Suricata)
   │     │
   │     ▼
   ├─► Layer 3: Threat Intelligence (abuse.ch)
   │     │
   │     ▼
   ├─► Layer 4: VLAN-Segmentierung
   │     │
   │     ▼
   ├─► Layer 5: Host-Firewalls
   │     │
   │     ▼
   └─► Layer 6: Antivirus + Patches
```

## Warum wichtig?

**Keine einzelne Lösung ist perfekt:**
- [[wiki/Firewall\|Firewall]] kann Application-Angriffe nicht erkennen
- [[wiki/IDS\|IDS]]/[[wiki/IPS\|IPS]] kann Social Engineering nicht verhindern
- Antivirus kann Zero-Day-Exploits nicht erkennen
- Patches können menschliche Fehler nicht verhindern

**Aber zusammen:**
```
Wenn Firewall versagt → IDS fängt es
Wenn IDS versagt → Antivirus fängt es
Wenn Antivirus versagt → Backup rettet Daten
```

## Swiss Cheese Model

**Visualisierung:**
```
Schicht 1: ○ ○   ○ ○ ○
Schicht 2:   ○ ○   ○ ○
Schicht 3: ○   ○ ○   ○
Schicht 4:   ○   ○ ○ ○

○ = Lücke in dieser Schicht

Angreifer muss durch ALLE Lücken,
die sich überlagern (sehr unwahrscheinlich!)
```

## Praktische Umsetzung

**Minimum für Heimnetzwerk:**
1. [[wiki/Firewall\|Firewall]] (Router)
2. Antivirus
3. Automatische Updates
4. Starke Passwörter + [[MFA\|MFA]]
5. [[wiki/Backup\|Backup]]

**Für Unternehmen zusätzlich:**
6. [[wiki/IDS\|IDS]]/[[wiki/IPS\|IPS]]
7. [[wiki/VLAN\|VLAN]]-Segmentierung
8. Security Monitoring
9. Mitarbeiter-Schulungen
10. Incident Response Plan

> [!tip] Nicht nur Technologie
> Defense in Depth umfasst auch: Menschen, Prozesse, und Technologie. Alle drei müssen zusammenarbeiten.
