---
{"dg-publish":true,"permalink":"/02-resources/notes/greylisting/","tags":["informatik/sicherheit/email","spam"],"noteIcon":"","updated":"2025-11-07T11:40:20.426+01:00"}
---

> Temporäres Ablehnen von E-Mails

**Greylisting** lehnt E-Mails von unbekannten Absendern temporär ab. Legitime Mailserver versuchen es später nochmal, Spam-Bots nicht.

---

## Funktionsweise

```
1. E-Mail kommt von unbekanntem Server
   → Mailserver lehnt ab mit Fehler 451 (temporär)
   → "Try again later"

2. Legitimer Mailserver:
   → Versucht es nach 5-15 Minuten nochmal
   → Wird jetzt akzeptiert ✓

3. Spam-Bot:
   → Versucht es NICHT nochmal
   → E-Mail wird nie zugestellt ✗
```

## Warum funktioniert das?

**Legitime Mailserver:**
- Befolgen SMTP-Standards
- Haben Queue-System
- Versuchen Zustellung mehrmals
- Warten zwischen Versuchen

**Spam-Bots:**
- Ignorieren Fehler
- Haben keine Queue
- Versenden Millionen E-Mails
- Keine Zeit für Wiederholungen

## Triplet

Greylisting merkt sich **Triplet**:

```
(Sender-IP, From-Adresse, To-Adresse)

Beispiel:
  (203.0.113.50, spam@bad.com, user@example.com)
```

**Beim ersten Versuch:**
```
Triplet unbekannt
  → Temporärer Fehler (451)
  → Triplet in Datenbank mit Timestamp
```

**Beim zweiten Versuch:**
```
Triplet bekannt
  → Genug Zeit vergangen? (z.B. > 5 Minuten)
  → JA → Akzeptieren ✓
  → NEIN → Nochmal ablehnen
```

## SMTP-Dialog

```
Spam-Bot → Mailserver:
  MAIL FROM:<spam@bad.com>
  RCPT TO:<user@example.com>

Mailserver:
  451 4.7.1 Greylisting in action, please come back later

Spam-Bot:
  → Gibt auf ✗
```

```
Legitimer Server → Mailserver:
  MAIL FROM:<newsletter@company.com>
  RCPT TO:<user@example.com>

Mailserver:
  451 4.7.1 Greylisting in action, please come back later

Legitimer Server:
  → Versucht es in 10 Minuten nochmal
  → Wird akzeptiert ✓
```

## Konfiguration

### Postgrey (Postfix)

```bash
# Installation
sudo apt install postgrey

# Postfix Config
# /etc/postfix/main.cf
smtpd_recipient_restrictions =
    check_policy_service inet:127.0.0.1:10023
```

**Parameter:**
```bash
# /etc/default/postgrey
POSTGREY_OPTS="--delay=300 --max-age=35"

# --delay=300: 5 Minuten Wartezeit
# --max-age=35: Triplet-Einträge nach 35 Tagen löschen
```

### Milter-Greylist

```bash
# /etc/mail/greylist.conf
racl greylist default
greylist 5m
autowhite 1d
```

## Whitelisting

**Problem:** Wichtige Sender greylist-en?

```bash
# Postgrey Whitelist
# /etc/postgrey/whitelist_clients.local

# Große E-Mail-Provider (schon in Default-Liste)
google.com
microsoft.com
amazon.com

# Eigene Whitelist
important-customer.com
```

## Vorteile

- **Einfach**: Leicht zu implementieren
- **Effektiv**: Blockiert viele Spam-Bots (60-90%)
- **Ressourcen-schonend**: Keine Content-Analyse
- **False-Positives niedrig**: Legitime Server kommen durch

## Nachteile

- **Verzögerung**: Erste E-Mail verzögert (5-15 Min)
- **Nicht RFC-konform**: Manche sagen, 451 ist Missbrauch
- **Probleme mit Mailinglisten**: Können von verschiedenen IPs senden
- **Newsletter**: Verschiedene IPs = Jedes Mal Greylisting

## Optimierungen

### Auto-Whitelist

```
Nach erfolgreicher Zustellung:
  → Sender auf Whitelist (z.B. 30 Tage)
  → Zukünftige E-Mails sofort akzeptiert
```

### Greylisting nur für unbekannte

```
E-Mail von bekanntem Sender (SPF/DKIM Pass)
  → Kein Greylisting

E-Mail von unbekanntem Sender
  → Greylisting aktivieren
```

### Kürzere Wartezeit

```
Standard: 5-15 Minuten
Optimiert: 1-5 Minuten

→ Weniger Verzögerung, aber immer noch effektiv
```

## Layer in [[02 - RESOURCES/Notes/Defense in Depth\|Defense in Depth]]

```
Multi-Layer Spam Protection:

Layer 1: RBL
     ▼
Layer 2: SPF/DKIM/DMARC
     ▼
Layer 3: Greylisting ← Du bist hier
     ▼
Layer 4: Content Filter
     ▼
User Mailbox
```

## Monitoring

```bash
# Postgrey Logs
tail -f /var/log/mail.log | grep postgrey

# Statistiken
grep "delayed" /var/log/mail.log | wc -l
grep "passed" /var/log/mail.log | wc -l
```

## Moderne Alternativen

**Problem:** Greylisting verzögert alle neuen Sender

**Alternativen:**
- **Adaptive Greylisting**: Nur bei Spam-Verdacht
- **Reputation-basiert**: Bekannte gute IPs sofort durch
- **Machine Learning**: Spam-Wahrscheinlichkeit berechnen

> [!tip] Immer noch effektiv
> Trotz Nachteilen ist Greylisting immer noch eine effektive Spam-Schutz-Methode. Besonders in Kombination mit anderen Layers.
