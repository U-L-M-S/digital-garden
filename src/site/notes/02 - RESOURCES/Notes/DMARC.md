---
{"dg-publish":true,"permalink":"/02-resources/notes/dmarc/","tags":["informatik/sicherheit/email","dns"],"noteIcon":"","updated":"2025-11-07T11:40:17.000+01:00"}
---

> Domain-based Message Authentication, Reporting & Conformance

**DMARC** definiert, was mit E-Mails passieren soll, die [[02 - RESOURCES/Notes/SPF\|SPF]] oder [[02 - RESOURCES/Notes/DKIM\|DKIM]] nicht bestehen. Es ist die Policy-Schicht über SPF und DKIM.

---

## Warum DMARC?

**Problem ohne DMARC:**
```
E-Mail failed SPF und DKIM
  → Was soll der Empfänger tun?
  → Durchlassen? Blockieren? Spam-Ordner?
  → Jeder Mailserver entscheidet anders
```

**Lösung mit DMARC:**
```
Domain-Owner definiert Policy:
  "Bei SPF/DKIM Fail: Bitte blockieren!"

Empfänger:
  → Befolgt die Policy
  → Blockiert E-Mail ✓
```

## Funktionsweise

```
1. Empfänger prüft SPF und DKIM

2. SPF/DKIM failed?
   → Hole DMARC-Policy aus DNS

3. DMARC-Policy sagt:
   - "none": Nichts tun (nur berichten)
   - "quarantine": In Spam-Ordner
   - "reject": E-Mail ablehnen

4. Empfänger befolgt Policy

5. Empfänger sendet Report an Domain-Owner
```

## DMARC-Record

```dns
_dmarc.example.com. IN TXT "v=DMARC1; p=reject; rua=mailto:dmarc@example.com"
```

**Aufbau:**
- `v=DMARC1`: DMARC Version 1
- `p=reject`: Policy (reject/quarantine/none)
- `rua=mailto:...`: Aggregate Reports hierhin senden

## Policies

### none (Monitoring-Mode)

```dns
p=none
```

**Bedeutung:**
- Keine Aktion
- Nur Reports senden
- Für initiales Setup

### quarantine (Spam-Ordner)

```dns
p=quarantine
```

**Bedeutung:**
- E-Mail in Spam/Junk-Ordner
- User kann sie noch sehen
- Weniger aggressiv als reject

### reject (Ablehnen)

```dns
p=reject
```

**Bedeutung:**
- E-Mail komplett ablehnen
- Kommt nie beim User an
- Strengste Policy

## Alignment

**DMARC prüft "Alignment":**

```
Von: user@example.com

SPF Alignment:
  Return-Path: bounce@example.com  → Aligned ✓
  Return-Path: bounce@other.com    → Not Aligned ✗

DKIM Alignment:
  d=example.com → Aligned ✓
  d=other.com   → Not Aligned ✗
```

**Alignment-Modi:**
```
aspf=r  → Relaxed SPF Alignment (Subdomains OK)
aspf=s  → Strict SPF Alignment (exakte Domain)

adkim=r → Relaxed DKIM Alignment (Subdomains OK)
adkim=s → Strict DKIM Alignment (exakte Domain)
```

## Vollständiger Record

```dns
_dmarc.example.com. IN TXT "v=DMARC1; p=reject; rua=mailto:dmarc@example.com; ruf=mailto:forensic@example.com; pct=100; adkim=r; aspf=r; fo=1"
```

**Parameter:**
- `v=DMARC1`: Version
- `p=reject`: Policy
- `rua=...`: Aggregate Reports
- `ruf=...`: Forensic Reports (einzelne Fails)
- `pct=100`: Prozent der E-Mails (100 = alle)
- `adkim=r`: DKIM Alignment (relaxed)
- `aspf=r`: SPF Alignment (relaxed)
- `fo=1`: Forensic Options (wann Report senden)

## Reports

### Aggregate Reports (rua)

**Täglich:**
- Zusammenfassung aller E-Mails
- SPF/DKIM/DMARC Statistiken
- XML-Format

**Beispiel:**
```xml
<record>
  <source_ip>203.0.113.50</source_ip>
  <count>42</count>
  <policy_evaluated>
    <disposition>none</disposition>
    <spf>pass</spf>
    <dkim>pass</dkim>
  </policy_evaluated>
</record>
```

### Forensic Reports (ruf)

**Bei jedem Fail:**
- Einzelne E-Mail-Details
- Vollständige Header
- Für Debugging

## Schrittweise Einführung

### Phase 1: Monitoring (p=none)

```dns
_dmarc.example.com. IN TXT "v=DMARC1; p=none; rua=mailto:dmarc@example.com"
```

**Ziel:** Reports sammeln, nichts blockieren

### Phase 2: Partial Quarantine

```dns
_dmarc.example.com. IN TXT "v=DMARC1; p=quarantine; pct=10; rua=mailto:dmarc@example.com"
```

**Ziel:** 10% in Quarantäne, 90% noch durch

### Phase 3: Full Quarantine

```dns
_dmarc.example.com. IN TXT "v=DMARC1; p=quarantine; pct=100; rua=mailto:dmarc@example.com"
```

**Ziel:** Alle Fails in Spam-Ordner

### Phase 4: Reject

```dns
_dmarc.example.com. IN TXT "v=DMARC1; p=reject; rua=mailto:dmarc@example.com"
```

**Ziel:** Alle Fails ablehnen

## Subdomain-Policy

```dns
_dmarc.example.com. IN TXT "v=DMARC1; p=reject; sp=quarantine; rua=mailto:dmarc@example.com"
```

- `p=reject`: Policy für example.com
- `sp=quarantine`: Policy für Subdomains (mail.example.com, etc.)

## Testing

```bash
# DMARC-Record abfragen
dig TXT _dmarc.example.com

# Test-E-Mail senden
# → Reports analysieren
```

**Online-Tools:**
- https://dmarcian.com/dmarc-inspector/
- https://mxtoolbox.com/dmarc.aspx

## Häufige Fehler

### ❌ Fehler 1: Sofort p=reject

```
Tag 1: p=reject
→ Legitime E-Mails werden blockiert
→ Chaos ✗

Besser: Langsam steigern (none → quarantine → reject)
```

### ❌ Fehler 2: Keine Reports-Adresse

```dns
"v=DMARC1; p=reject"
→ Keine rua= Adresse
→ Keine Reports
→ Blind gegenüber Problemen
```

### ❌ Fehler 3: SPF/DKIM nicht konfiguriert

```
DMARC ohne SPF/DKIM = Nutzlos
→ Alle E-Mails fallen durch
```

## Zusammenspiel

```
E-Mail kommt an:

1. SPF-Check:
   - Server erlaubt? → Pass/Fail

2. DKIM-Check:
   - Signatur gültig? → Pass/Fail

3. DMARC-Check:
   - SPF ODER DKIM passed UND aligned? → Pass
   - Beide failed? → Fail
     → Policy anwenden (none/quarantine/reject)

4. Report senden an Domain-Owner
```

> [!tip] SPF + DKIM + DMARC = Vollständiger Schutz
> DMARC ist die Policy-Schicht über [[02 - RESOURCES/Notes/SPF\|SPF]] und [[02 - RESOURCES/Notes/DKIM\|DKIM]]. Alle drei zusammen bieten starken E-Mail-Schutz!
