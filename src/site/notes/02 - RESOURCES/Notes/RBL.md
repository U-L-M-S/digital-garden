---
{"dg-publish":true,"permalink":"/02-resources/notes/rbl/","tags":["informatik/sicherheit/email","spam"],"noteIcon":"","updated":"2025-11-07T11:40:10.535+01:00"}
---

> Realtime Blackhole List

**RBL** (DNS Blacklist) ist eine Liste von IP-Adressen, die für Spam bekannt sind. Mailserver nutzen sie, um Spam zu blockieren.

---

## Funktionsweise

```
1. E-Mail kommt von IP: 192.0.2.50

2. Mailserver fragt RBL:
   "Ist 50.2.0.192.zen.spamhaus.org ein Spam-Server?"
   (IP wird umgedreht für DNS-Abfrage)

3. RBL antwortet:
   - 127.0.0.2 → Ja, Spam! (blockieren)
   - NXDOMAIN → Nein, OK (durchlassen)
```

## Warum IP umdrehen?

DNS-Query-Format erfordert Umkehrung:

```
Original IP:     192.0.2.50
Für DNS-Query:   50.2.0.192.zen.spamhaus.org
```

## Beliebte RBLs

### Spamhaus ZEN

**Am meisten genutzt:**
- Kombiniert mehrere Listen
- Sehr niedrige False-Positives
- Kostenlos für niedrigen Traffic

```
zen.spamhaus.org
```

### Barracuda

**Gut für aggressive Filterung:**
```
b.barracudacentral.org
```

### SORBS

**Verschiedene Listen:**
```
dnsbl.sorbs.net
```

### SpamCop

**Community-basiert:**
```
bl.spamcop.net
```

## Integration in Mailserver

### Postfix

```bash
# /etc/postfix/main.cf
smtpd_recipient_restrictions =
    reject_rbl_client zen.spamhaus.org,
    reject_rbl_client bl.spamcop.net,
    permit
```

### Exim

```bash
# /etc/exim4/exim4.conf
deny    message = Rejected - $sender_host_address is blacklisted
        dnslists = zen.spamhaus.org : bl.spamcop.net
```

## Return Codes

**Bedeutung der Antworten:**
```
127.0.0.2   → Spam source
127.0.0.3   → Dynamic IP (DHCP/DSL)
127.0.0.4   → Smarthost
127.0.0.9   → Snowshoe spam
127.0.0.10  → Malware C&C
```

## Vorteile

- **Schnell**: DNS-Abfrage dauert Millisekunden
- **Effektiv**: Blockt viel Spam
- **Ressourcen-schonend**: Keine Content-Analyse notwendig
- **Kostenlos**: Die meisten RBLs sind gratis

## Nachteile

- **False Positives**: Legitime IPs können versehentlich gelistet werden
- **Shared Hosting**: Ganze IP-Range blockiert bei einem Spam-Sender
- **Delisting**: Schwierig, von Liste entfernt zu werden

## Mehrere RBLs kombinieren

**Empfehlung: 2-3 RBLs nutzen**

```bash
# Postfix Beispiel
smtpd_recipient_restrictions =
    reject_rbl_client zen.spamhaus.org,
    reject_rbl_client bl.spamcop.net,
    reject_rbl_client b.barracudacentral.org,
    permit
```

**Warum mehrere:**
- Erhöht Spam-Erkennung
- Redundanz (falls eine RBL down ist)
- Verschiedene RBLs erkennen verschiedene Spam-Typen

## Testing

**Teste eigene IP:**
```bash
# Ersetze YOUR_IP mit deiner IP
host 4.3.2.1.zen.spamhaus.org

# Wenn gelistet:
# → 1.2.3.4.zen.spamhaus.org has address 127.0.0.x

# Wenn nicht gelistet:
# → Host not found
```

## Delisting

**Falls fälschlicherweise gelistet:**

1. Finde heraus, warum (oft: kompromittiertes System)
2. Problem beheben
3. Delisting-Formular ausfüllen:
   - Spamhaus: https://www.spamhaus.org/lookup/
   - SpamCop: https://www.spamcop.net/bl.shtml

## Layer in [[02 - RESOURCES/Notes/Defense in Depth\|Defense in Depth]]

```
Multi-Layer Spam Protection:

Layer 1: RBL ← Du bist hier
     │
     ▼
Layer 2: SPF/DKIM/DMARC
     ▼
Layer 3: Greylisting
     ▼
Layer 4: Content Filter
     ▼
User Mailbox
```

> [!tip] Erste Verteidigungslinie
> RBL ist Layer 1 im Spam-Schutz. Schnell und effektiv, aber nicht allein ausreichend.
