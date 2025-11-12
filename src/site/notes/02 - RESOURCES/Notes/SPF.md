---
{"dg-publish":true,"permalink":"/02-resources/notes/spf/","tags":["informatik/sicherheit/email","dns"],"noteIcon":"","updated":"2025-11-07T11:40:12.684+01:00"}
---

> Sender Policy Framework

**SPF** definiert, welche Server E-Mails für eine Domain senden dürfen. Verhindert E-Mail-Spoofing.

---

## Problem ohne SPF

```
Angreifer:
  "Ich bin admin@example.com!"
  → Sendet Phishing-Mail

Empfänger:
  Sieht: "Von: admin@example.com"
  → Vertraut der E-Mail ✗
```

## Lösung mit SPF

```
DNS-Record von example.com:
  "Nur Server A, B, C dürfen E-Mails senden"

Empfänger prüft:
  "Kam E-Mail von erlaubtem Server?"
  - JA → Pass ✓
  - NEIN → Fail ✗ (Spam-Verdacht)
```

## SPF-Record Beispiel

```dns
example.com. IN TXT "v=spf1 ip4:203.0.113.0/24 include:_spf.google.com -all"
```

**Aufbau:**
- `v=spf1`: SPF Version 1
- `ip4:203.0.113.0/24`: Diese IPs sind erlaubt
- `include:_spf.google.com`: Google Mail ist erlaubt
- `-all`: Alle anderen sind NICHT erlaubt (Fail)

## Mechanismen

### IP-Adressen

```
ip4:192.0.2.0/24       → IPv4-Range erlaubt
ip6:2001:db8::/32      → IPv6-Range erlaubt
```

### Domains

```
a:mail.example.com     → A-Record von mail.example.com
mx                     → MX-Records der Domain
```

### Include

```
include:_spf.google.com → SPF-Record von Google einbinden
```

### All

```
-all    → Fail (strikt, empfohlen)
~all    → SoftFail (weniger strikt)
?all    → Neutral
+all    → Pass (NICHT empfohlen!)
```

## Prüfung durch Empfänger

```
E-Mail von: user@example.com
Server-IP: 203.0.113.50

Empfänger:
  1. DNS-Abfrage: "example.com TXT"
  2. Findet SPF-Record
  3. Prüfe: Ist 203.0.113.50 erlaubt?
     → ip4:203.0.113.0/24 → JA ✓
  4. E-Mail bekommt "SPF: Pass"
```

## SPF-Ergebnisse

| Ergebnis | Bedeutung | Aktion |
|----------|-----------|--------|
| **Pass** | Server ist erlaubt | Durchlassen |
| **Fail** | Server ist NICHT erlaubt | Blockieren |
| **SoftFail** | Möglicherweise nicht erlaubt | Warnen |
| **Neutral** | Keine Aussage | Ignorieren |
| **None** | Kein SPF-Record | Ignorieren |

## Beispiele

### Einfach (nur ein Server)

```dns
example.com. IN TXT "v=spf1 ip4:203.0.113.50 -all"
```

### Mit Google Workspace

```dns
example.com. IN TXT "v=spf1 include:_spf.google.com -all"
```

### Mit mehreren Anbietern

```dns
example.com. IN TXT "v=spf1 include:_spf.google.com include:servers.mcsv.net -all"
```

### Mit eigenem und Google

```dns
example.com. IN TXT "v=spf1 ip4:203.0.113.0/24 include:_spf.google.com -all"
```

## Limitierungen

### DNS-Lookups (max. 10)

```
SPF-Record:
  include:google.com    → 1 Lookup
  include:microsoft.com → 1 Lookup
  ...
  → Max. 10 Lookups erlaubt!
```

**Bei Überschreitung:**
```
→ SPF PermError
→ SPF funktioniert nicht mehr ✗
```

### Länge (max. 255 Zeichen)

DNS TXT-Records haben Limit.

## Testing

```bash
# SPF-Record abfragen
dig TXT example.com

# SPF testen
host -t TXT example.com

# Online-Tools
# → dmarcian.com/spf-survey
# → mxtoolbox.com/spf.aspx
```

## Häufige Fehler

### ❌ Fehler 1: +all verwenden

```dns
"v=spf1 +all"  ← FALSCH! Erlaubt JEDEN
```

### ❌ Fehler 2: Zu viele DNS-Lookups

```dns
"v=spf1 include:1.com include:2.com ... include:12.com -all"
→ Mehr als 10 Lookups!
```

### ❌ Fehler 3: Subdomain vergessen

```
SPF nur für example.com,
aber E-Mails kommen von: mail.example.com
→ SPF fehlt für Subdomain!
```

## Zusammenspiel mit [[02 - RESOURCES/Notes/DKIM\|DKIM]] und [[02 - RESOURCES/Notes/DMARC\|DMARC]]

```
SPF:  Prüft, ob Server senden darf
DKIM: Prüft, ob E-Mail unverändert ist
DMARC: Policy, was bei Fail passiert

Alle drei zusammen = Starker Schutz!
```

> [!tip] SPF allein reicht nicht
> SPF ist Layer 2 im Spam-Schutz. Kombiniere mit [[02 - RESOURCES/Notes/DKIM\|DKIM]] und [[02 - RESOURCES/Notes/DMARC\|DMARC]] für besten Schutz!
