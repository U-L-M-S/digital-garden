---
{"dg-publish":true,"permalink":"/02-resources/notes/let-s-encrypt/","tags":["informatik/sicherheit/ssl","kryptographie","zertifikat"],"noteIcon":"","updated":"2025-11-07T11:35:50.000+01:00"}
---

> Kostenlose Zertifizierungsstelle (Certificate Authority)

**Let's Encrypt** stellt SSL/[[02 - RESOURCES/Notes/TLS\|TLS]]-Zertifikate kostenlos aus. Automatisiert und vertrauenswürdig.

---

## Eigenschaften

- **Kostenlos**: Keine Gebühren
- **Automatisiert**: Über [[02 - RESOURCES/Notes/ACME\|ACME]]-Protokoll
- **90 Tage gültig**: Automatische Erneuerung notwendig
- **Vertrauenswürdig**: Von allen Browsern akzeptiert
- **Open-Source**: Transparenter Prozess

## Warum SSL/TLS?

**SSL/TLS-Zertifikate** verschlüsseln die Verbindung zwischen Client und Server.

**Vorteile:**
- Verschlüsselung des Traffics (Abhörschutz)
- Authentifizierung des Servers (ist es wirklich example.com?)
- Vertrauen (Browsers zeigen Schloss-Symbol)

```
Browser                Server
   │                      │
   ├──► Hello ───────────►│
   │◄──── Zertifikat ─────┤
   │  (Prüft Zertifikat)  │
   │◄──── Verschlüsselt ──►│
```

## Funktionsweise

```
1. Du fragst: "Ich möchte ein Zertifikat für example.com"

2. Let's Encrypt antwortet: "OK, beweise dass du example.com kontrollierst"

3. Challenge (HTTP-01 oder DNS-01)

4. Du stellst Challenge bereit

5. Let's Encrypt prüft

6. Zertifikat wird ausgestellt ✓ (90 Tage gültig)

7. Nach 60 Tagen: Automatische Erneuerung
```

## Challenge-Typen

### HTTP-01

Let's Encrypt prüft:
```
http://example.com/.well-known/acme-challenge/TOKEN
```

**Vorteile:** Einfach, funktioniert mit jedem Webserver
**Nachteile:** Port 80 muss erreichbar sein

### DNS-01

Let's Encrypt prüft DNS TXT-Record:
```
_acme-challenge.example.com
```

**Vorteile:** Funktioniert auch hinter [[02 - RESOURCES/Notes/Firewall\|Firewall]], Wildcard-Zertifikate möglich
**Nachteile:** DNS-API-Zugriff notwendig

## Clients

- **Certbot**: Offizieller Client (Python)
- **acme.sh**: Shell-Script (leichtgewichtig)
- **lego**: Go-basiert
- **In [[02 - RESOURCES/Notes/OpenSense\|OpenSense]]**: os-acme-client Plugin

## Erneuerung

Zertifikate sind nur **90 Tage** gültig.

**Warum so kurz?**
- Sicherheit: Kompromittierte Zertifikate laufen schneller ab
- Automation: Zwingt zu Automatisierung
- Revocation: Reduziert Last auf Revocation-Listen

**Automatische Erneuerung:**
```bash
# Cron-Job (täglich prüfen, bei < 30 Tagen erneuern)
0 3 * * * certbot renew --quiet
```

## Limitierungen

- **Rate Limits**: Max. 50 Zertifikate pro Domain pro Woche
- **Keine Extended Validation (EV)**: Nur Domain Validation (DV)
- **90 Tage Gültigkeit**: Erfordert Automatisierung

> [!tip] Empfehlung
> Let's Encrypt ist perfekt für die meisten Webseiten. Nur für spezielle Anforderungen (EV-Zertifikate) bezahlte CA nutzen.
