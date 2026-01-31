---
{"dg-publish":true,"permalink":"/02-resources/notes/acme/","tags":["informatik/protokoll","informatik/sicherheit/ssl","kryptographie"],"noteIcon":"","updated":"2025-11-07T11:35:52.537+01:00"}
---

> Automatic Certificate Management Environment

**ACME** ist das Protokoll, das [[02 - RESOURCES/Notes/Let's Encrypt\|Let's Encrypt]] verwendet. Es automatisiert die Ausstellung und Erneuerung von SSL/[[02 - RESOURCES/Notes/TLS\|TLS]]-Zertifikaten.

---

## Funktionsweise

```
1. Client: "Ich möchte Zertifikat für example.com"

2. ACME-Server: "OK, beweise Kontrolle über Domain"

3. ACME-Server: "Stelle eine Challenge bereit"

4. Client: "Challenge bereitgestellt"

5. ACME-Server: "Prüfe Challenge... ✓"

6. ACME-Server: "Hier ist dein Zertifikat"
```

## Challenge-Typen

### HTTP-01 Challenge

**Was passiert:**
```
1. ACME-Server gibt Token: "abc123"

2. Client erstellt Datei:
   /var/www/.well-known/acme-challenge/abc123

3. ACME-Server prüft:
   http://example.com/.well-known/acme-challenge/abc123

4. Wenn erfolgreich → Zertifikat ausgeben
```

**Voraussetzungen:**
- Port 80 muss von außen erreichbar sein
- Webserver muss laufen

**Vorteile:**
- Einfach zu implementieren
- Funktioniert mit jedem Webserver

**Nachteile:**
- Port 80 muss offen sein
- Keine Wildcard-Zertifikate

### DNS-01 Challenge

**Was passiert:**
```
1. ACME-Server gibt Token: "xyz789"

2. Client erstellt DNS TXT-Record:
   _acme-challenge.example.com = "xyz789"

3. ACME-Server prüft DNS:
   dig TXT _acme-challenge.example.com

4. Wenn erfolgreich → Zertifikat ausgeben
```

**Voraussetzungen:**
- DNS-API-Zugriff (z.B. Cloudflare API)

**Vorteile:**
- Funktioniert auch hinter [[02 - RESOURCES/Notes/Firewall\|Firewall]]
- Wildcard-Zertifikate möglich (*.example.com)

**Nachteile:**
- DNS-API notwendig
- Komplexer zu konfigurieren

## ACME-Clients

Software, die ACME-Protokoll implementiert:

- **Certbot**: Offizieller Client (Python)
- **acme.sh**: Shell-Script (leicht)
- **lego**: Go-basiert
- **Caddy**: Webserver mit eingebautem ACME
- **Traefik**: Reverse Proxy mit ACME
- **In [[02 - RESOURCES/Notes/OpenSense\|OpenSense]]**: os-acme-client

## In [[02 - RESOURCES/Notes/OpenSense\|OpenSense]]

```
1. Plugin installieren:
   System → Firmware → Plugins → os-acme-client

2. Account erstellen:
   Services → ACME Client → Accounts → Add

3. Challenge konfigurieren:
   Services → ACME Client → Challenge Types → Add
   - HTTP-01 oder DNS-01

4. Zertifikat erstellen:
   Services → ACME Client → Certificates → Add
   - Auto Renewal: ✓ (alle 60 Tage)

5. Zertifikat aktivieren:
   System → Settings → Administration
   - SSL Certificate: (neu ausgewähltes auswählen)
```

## Automatische Erneuerung

ACME-Zertifikate sind nur **90 Tage** gültig.

**Typischer Prozess:**
```
Tag 0:   Zertifikat ausgestellt
Tag 30:  Erste Erneuerungs-Warnung
Tag 60:  Automatische Erneuerung
Tag 90:  Zertifikat läuft ab (wenn nicht erneuert)
```

**Cron-Job Beispiel:**
```bash
# Täglich um 3 Uhr prüfen und erneuern
0 3 * * * /usr/local/bin/certbot renew --quiet
```

## ACME v2

**Neue Features in Version 2:**
- Wildcard-Zertifikate (*.example.com)
- Verbesserte Sicherheit
- Mehr Flexibilität

> [!tip] Standard-Protokoll
> ACME ist heute der Standard für automatische Zertifikat-Verwaltung. Fast alle Certificate Authorities (CAs) unterstützen es.
