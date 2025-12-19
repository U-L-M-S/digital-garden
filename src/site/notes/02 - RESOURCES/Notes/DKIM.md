---
{"dg-publish":true,"permalink":"/02-resources/notes/dkim/","tags":["informatik/sicherheit/email","kryptographie","dns"],"noteIcon":"","updated":"2025-11-07T11:40:14.929+01:00"}
---

> DomainKeys Identified Mail

**DKIM** ist eine digitale Signatur für E-Mails. Sie beweist, dass die E-Mail von der angegebenen Domain kommt und nicht verändert wurde.

---

## Funktionsweise

```
1. Absender signiert E-Mail mit privatem Schlüssel

2. Public Key wird im DNS veröffentlicht:
   default._domainkey.example.com = "v=DKIM1; k=rsa; p=PUBLIC_KEY"

3. Empfänger holt Public Key aus DNS

4. Empfänger prüft Signatur mit Public Key

5. Signatur gültig? → E-Mail wurde nicht verändert ✓
   Signatur ungültig? → E-Mail wurde manipuliert ✗
```

## Warum wichtig?

**Ohne DKIM:**
```
Angreifer fängt E-Mail ab
  → Ändert Inhalt
  → Empfänger merkt es nicht ✗
```

**Mit DKIM:**
```
Angreifer fängt E-Mail ab
  → Ändert Inhalt
  → Signatur stimmt nicht mehr
  → Empfänger erkennt Manipulation ✓
```

## DKIM-Signatur

**In E-Mail-Header:**
```
DKIM-Signature: v=1; a=rsa-sha256; c=relaxed/relaxed;
  d=example.com; s=default;
  h=from:to:subject:date;
  bh=hash_of_body;
  b=signature_hash
```

**Teile:**
- `v=1`: DKIM Version 1
- `a=rsa-sha256`: Algorithmus (RSA mit SHA-256)
- `d=example.com`: Signing Domain
- `s=default`: Selector (welcher Key)
- `h=...`: Welche Header signiert wurden
- `bh=...`: Hash vom Body
- `b=...`: Signatur

## DNS-Record

```dns
default._domainkey.example.com. IN TXT "v=DKIM1; k=rsa; p=MIGfMA0GCSqG..."
```

**Aufbau:**
- `v=DKIM1`: DKIM Version 1
- `k=rsa`: Key-Typ (RSA)
- `p=...`: Public Key (Base64)

## Setup-Prozess

### 1. Schlüssel generieren

```bash
# OpenDKIM Beispiel
opendkim-genkey -s default -d example.com

# Erzeugt:
# - default.private  → Privater Schlüssel (geheim!)
# - default.txt      → Public Key (für DNS)
```

### 2. DNS-Record erstellen

```dns
default._domainkey.example.com. IN TXT "v=DKIM1; k=rsa; p=MIGfMA0GCS..."
```

### 3. Mailserver konfigurieren

**Postfix mit OpenDKIM:**
```bash
# /etc/opendkim.conf
Domain                  example.com
KeyFile                 /etc/opendkim/keys/default.private
Selector                default
```

### 4. Testen

```bash
# DKIM-Record abfragen
dig TXT default._domainkey.example.com

# Test-E-Mail senden an:
check-auth@verifier.port25.com
```

## Selector

**Warum Selector?**

Ermöglicht mehrere Keys pro Domain:

```dns
default._domainkey.example.com  → Key 1
2025._domainkey.example.com     → Key 2 (neuer)
marketing._domainkey.example.com → Key 3 (für Marketing)
```

**Vorteile:**
- Key-Rotation möglich
- Verschiedene Keys für verschiedene Abteilungen

## Prüfung durch Empfänger

```
E-Mail kommt an:
  1. Empfänger liest DKIM-Signature Header
  2. Extrahiert: d=example.com, s=default
  3. DNS-Abfrage: default._domainkey.example.com
  4. Holt Public Key
  5. Prüft Signatur
     - Gültig → DKIM Pass ✓
     - Ungültig → DKIM Fail ✗
```

## DKIM-Ergebnisse

| Ergebnis | Bedeutung |
|----------|-----------|
| **Pass** | Signatur gültig ✓ |
| **Fail** | Signatur ungültig ✗ |
| **Neutral** | Keine DKIM-Signatur |
| **TempError** | DNS-Problem |
| **PermError** | Konfigurations-Fehler |

## Canonicalization

**Wie werden E-Mails normalisiert?**

```
c=relaxed/relaxed  → Tolerant (empfohlen)
c=simple/simple    → Strikt

Beispiel "relaxed":
  - Leerzeichen am Zeilenende ignorieren
  - Case-insensitive Header

Beispiel "simple":
  - Keine Änderungen erlaubt
  - Sehr strikt
```

## Häufige Fehler

### ❌ Fehler 1: Public Key nicht im DNS

```
E-Mail signiert, aber DNS-Record fehlt
→ DKIM Fail ✗
```

### ❌ Fehler 2: Falscher Selector

```
E-Mail: s=default
DNS: 2025._domainkey.example.com
→ Selector stimmt nicht überein
```

### ❌ Fehler 3: Mailing-Listen

```
Mailing-Liste ändert E-Mail (Footer hinzufügen)
→ Signatur wird ungültig
→ DKIM Fail ✗

Lösung: ARC (Authenticated Received Chain)
```

## Zusammenspiel mit [[02 - RESOURCES/Notes/SPF\|SPF]] und [[02 - RESOURCES/Notes/DMARC\|DMARC]]

```
SPF:  Prüft Server-Berechtigung
DKIM: Prüft E-Mail-Integrität ← Du bist hier
DMARC: Policy bei Fail

Alle drei zusammen = Starker Schutz!
```

## Testing-Tools

**Online:**
- https://dkimvalidator.com/
- https://mxtoolbox.com/dkim.aspx
- https://dmarcian.com/dkim-inspector/

**E-Mail senden an:**
```
check-auth@verifier.port25.com
→ Automatische DKIM-Analyse per E-Mail zurück
```

> [!tip] DKIM + SPF + DMARC
> DKIM allein reicht nicht. Kombiniere mit [[02 - RESOURCES/Notes/SPF\|SPF]] und [[02 - RESOURCES/Notes/DMARC\|DMARC]] für vollständigen Schutz!
