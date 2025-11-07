---
{"dg-publish":true,"permalink":"/02-resources/notes/spam-assassin/","tags":["informatik/sicherheit/email","spam","opensource"],"noteIcon":"","updated":"2025-11-07T11:40:23.127+01:00"}
---

> Content-basierter Spam-Filter

**SpamAssassin** ist ein Open-Source Spam-Filter. Er analysiert E-Mail-Inhalte mit einem Scoring-System.

---

## Funktionsweise

```
E-Mail kommt an:
  1. SpamAssassin analysiert:
     - Header (From, Subject, etc.)
     - Body (Text, HTML)
     - Links
     - Anhänge
     - Spam-Charakteristiken

  2. Jede Regel gibt Punkte:
     - "VIAGRA im Subject" → +3.0
     - "Externe Links" → +1.5
     - "ALL CAPS" → +0.5
     - etc.

  3. Gesamt-Score berechnen:
     - Score < 5.0 → Ham (kein Spam) ✓
     - Score ≥ 5.0 → Spam ✗

  4. Aktion:
     - Spam-Header hinzufügen
     - In Spam-Ordner verschieben
     - Oder ablehnen
```

## Scoring-System

**Beispiel:**
```
Regel: VIAGRA im Subject         → +3.0 Punkte
Regel: Absender nicht verifiziert → +1.5 Punkte
Regel: Viele externe Links        → +1.0 Punkte
Regel: ALL CAPS Subject           → +0.5 Punkte
Regel: HTML-only (kein Text)      → +0.8 Punkte
                                  ─────────────
Gesamt-Score:                      6.8 Punkte

Threshold: 5.0
  → 6.8 > 5.0 → SPAM ✗
```

## Regeln

### Header-Regeln

```
header FROM_ENDS_IN_NUMS    From =~ /\d+@/
describe FROM_ENDS_IN_NUMS  From address ends in numbers
score FROM_ENDS_IN_NUMS     2.5
```

### Body-Regeln

```
body VIAGRA                 /viagra/i
describe VIAGRA             Contains word viagra
score VIAGRA                3.0
```

### URI-Regeln

```
uri SPAM_LINK               /bit\.ly/
describe SPAM_LINK          Contains shortened link
score SPAM_LINK             1.5
```

### Meta-Regeln

```
meta SUSPICIOUS_EMAIL       (FROM_ENDS_IN_NUMS && VIAGRA)
describe SUSPICIOUS_EMAIL   Combination of suspicious patterns
score SUSPICIOUS_EMAIL      5.0
```

## Integration mit Mailserver

### Postfix

```bash
# /etc/postfix/master.cf
smtp      inet  n       -       -       -       -       smtpd
  -o content_filter=spamassassin

spamassassin unix -     n       n       -       -       pipe
  user=spamd argv=/usr/bin/spamc -f -e /usr/sbin/sendmail -oi -f ${sender} ${recipient}
```

### Procmail

```bash
# ~/.procmailrc
:0fw
| /usr/bin/spamassassin

:0:
* ^X-Spam-Status: Yes
/var/mail/spam
```

## Konfiguration

**Threshold anpassen:**
```bash
# /etc/spamassassin/local.cf
required_score 5.0

# Eigene Regeln
score VIAGRA 4.0
score FROM_ENDS_IN_NUMS 3.0
```

**Whitelist:**
```bash
whitelist_from friend@example.com
whitelist_from *@trusted-company.com
```

**Blacklist:**
```bash
blacklist_from spam@bad.com
blacklist_from *@spam-domain.com
```

## Bayes-Filter

**Machine Learning:**
```
SpamAssassin lernt von:
  - Als Spam markierten E-Mails
  - Als Ham markierten E-Mails

Je mehr Training:
  → Bessere Erkennung
  → Personalisiert
```

**Training:**
```bash
# Spam lernen
sa-learn --spam /path/to/spam-folder

# Ham lernen
sa-learn --ham /path/to/ham-folder

# Statistiken
sa-learn --dump magic
```

## Zusätzliche Checks

### Netzwerk-Tests

**Aktivieren:**
```bash
# /etc/spamassassin/local.cf
use_bayes 1
use_bayes_rules 1

# RBL-Checks
use_dcc 1
use_pyzor 1
use_razor2 1
```

**Was machen diese:**
- **DCC**: Distributed Checksum Clearinghouse
- **Pyzor**: Collaborative Spam Detection
- **Razor**: Spam Signature Database

### SPF/DKIM-Integration

```bash
# Prüft SPF
score SPF_PASS -0.5
score SPF_FAIL 2.0

# Prüft DKIM
score DKIM_VALID -0.5
score DKIM_INVALID 2.0
```

## Headers in E-Mail

**SpamAssassin fügt hinzu:**
```
X-Spam-Status: Yes, score=6.8 required=5.0
X-Spam-Level: ******
X-Spam-Flag: YES
X-Spam-Report:
  * 3.0 VIAGRA Contains word viagra
  * 1.5 FROM_ENDS_IN_NUMS From ends in numbers
  * 1.0 SPAM_LINK Contains shortened link
  * 0.5 ALL_CAPS Subject all caps
  * 0.8 HTML_ONLY No text version
```

## Kommandozeilen-Tools

```bash
# E-Mail testen
spamassassin < email.txt

# Mit Score
spamassassin -t < email.txt

# Regeln testen
spamassassin --lint

# Regel-Debugging
spamassassin -D < email.txt
```

## Performance-Optimierung

**Problem:** SpamAssassin kann langsam sein

**Optimierungen:**
```bash
# Spamd (Daemon-Mode)
sudo systemctl start spamassassin

# Mehr Worker
# /etc/default/spamassassin
OPTIONS="--max-children=5"

# Netzwerk-Tests deaktivieren (schneller, aber weniger effektiv)
use_dcc 0
use_pyzor 0
use_razor2 0
```

## False Positives/Negatives

**False Positive:** Legitime E-Mail als Spam markiert
```
Lösung:
  - Threshold erhöhen (z.B. 6.0 statt 5.0)
  - Sender auf Whitelist
  - Regel-Score anpassen
```

**False Negative:** Spam kommt durch
```
Lösung:
  - Threshold senken (z.B. 4.0 statt 5.0)
  - Bayes trainieren
  - Mehr Netzwerk-Tests aktivieren
```

## Layer in [[02 - RESOURCES/Notes/Defense in Depth\|Defense in Depth]]

```
Multi-Layer Spam Protection:

Layer 1: RBL
     ▼
Layer 2: SPF/DKIM/DMARC
     ▼
Layer 3: Greylisting
     ▼
Layer 4: SpamAssassin ← Du bist hier
     ▼
Layer 5: Attachment Filter
     ▼
User Mailbox
```

## Alternativen

- **Rspamd**: Moderner, schneller
- **Amavis**: Integriert mit Antivirus
- **ASSP**: Anti-Spam SMTP Proxy

> [!tip] Kombiniere mit anderen Layers
> SpamAssassin ist Layer 4 im Spam-Schutz. Am besten in Kombination mit [[02 - RESOURCES/Notes/RBL\|RBL]], [[02 - RESOURCES/Notes/SPF\|SPF]]/[[02 - RESOURCES/Notes/DKIM\|DKIM]]/[[02 - RESOURCES/Notes/DMARC\|DMARC]], und [[02 - RESOURCES/Notes/Greylisting\|Greylisting]].
