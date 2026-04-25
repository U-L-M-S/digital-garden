---
{"dg-publish":true,"permalink":"/02-resources/notes/tls/","tags":["kryptografie/tls","sicherheit/it-sicherheit","netzwerk/protokoll","web/https"],"noteIcon":"","updated":"2025-11-06T16:41:33.000+01:00","dg-note-properties":{"aliases":["Transport Layer Security","TLS","SSL","HTTPS"],"created_date":"2025-11-06","links":null,"tags":["kryptografie/tls","sicherheit/it-sicherheit","netzwerk/protokoll","web/https"]}}
---


> **TLS** (Transport Layer Security) ist ein kryptografisches Protokoll, das sichere Kommunikation über ein Netzwerk ermöglicht, indem es Verschlüsselung, Authentifizierung und Integritätsprüfung bereitstellt.
>> TLS ist der Nachfolger von SSL (Secure Sockets Layer) und wird heute für HTTPS, E-Mail-Verschlüsselung, VPN und viele andere Anwendungen verwendet.
>> Das Protokoll arbeitet zwischen der Anwendungs- und Transportschicht und schützt die Datenübertragung vor Abhören, Manipulation und Fälschung.
>> TLS verwendet eine Kombination aus asymmetrischer und symmetrischer [[02 - RESOURCES/Notes/Kryptographie\|Kryptographie]] für optimale Sicherheit und Performance.

>[!important] Warum TLS wichtig ist
> TLS schützt **95% des gesamten Web-Traffics** und ist fundamental für:
> - HTTPS (sichere Websites mit Schloss-Symbol)
> - E-Mail-Verschlüsselung (SMTPS, IMAPS)
> - VPN-Verbindungen (OpenVPN)
> - Instant Messaging (Signal, WhatsApp)
> - API-Kommunikation und Cloud-Services

---

# Geschichte: Von SSL zu TLS

## Entwicklung der Protokoll-Versionen

```
1994: SSL 1.0 (Netscape) - Nie veröffentlicht (zu unsicher)
      ↓
1995: SSL 2.0 - Veröffentlicht, aber Sicherheitslücken
      ↓
1996: SSL 3.0 - Deutlich verbessert
      ↓
1999: TLS 1.0 (RFC 2246) - Standardisiert von IETF
      ↓
2006: TLS 1.1 (RFC 4346) - Schutz vor CBC-Angriffen
      ↓
2008: TLS 1.2 (RFC 5246) - Moderne Cipher Suites
      ↓
2018: TLS 1.3 (RFC 8446) - Aktueller Standard ✓
```

>[!info] Namensänderung
> Ab Version 1.0 heißt das Protokoll **TLS** statt SSL, da die Standardisierung von Netscape zur IETF wechselte.

**Sicherheitsstatus:**
```
SSL 2.0/3.0  ❌ UNSICHER - Veraltet (POODLE-Angriff)
TLS 1.0/1.1  ⚠️  VERALTET - Nicht mehr empfohlen (seit 2020)
TLS 1.2      ✅ SICHER - Weit verbreitet
TLS 1.3      ✅✅ SEHR SICHER - Modernster Standard
```

---

# Grundprinzip: Wie TLS funktioniert

## OSI-Modell Einordnung

```
┌────────────────────────────────┐
│  Anwendungsschicht (Layer 7)   │  ← HTTP, SMTP, FTP
├────────────────────────────────┤
│  ═══════════════════════════   │
│  ║      TLS Protocol       ║   │  ← Verschlüsselung
│  ═══════════════════════════   │
├────────────────────────────────┤
│  Transportschicht (Layer 4)    │  ← TCP, UDP
├────────────────────────────────┤
│  Internetschicht (Layer 3)     │  ← IP
├────────────────────────────────┤
│  Netzwerkschicht (Layer 1-2)   │  ← Ethernet, WiFi
└────────────────────────────────┘
```

> TLS arbeitet **zwischen** Anwendungs- und Transportschicht und ist für die Anwendung transparent.

## TLS-Kommunikation im Überblick

```
Client (Browser)                          Server (Website)
     │                                          │
     │  1. ClientHello                         │
     │  ──────────────────────────────────────►│
     │                                          │
     │  2. ServerHello + Zertifikat            │
     │  ◄──────────────────────────────────────│
     │                                          │
     │  3. Zertifikat prüfen                   │
     │  4. Session Key ableiten                │
     │  ──────────────────────────────────────►│
     │                                          │
     │  5. Verschlüsselte Daten (HTTPS)        │
     │  ◄═════════════════════════════════════►│
     │      Mit AES/ChaCha20                   │
```

---

# TLS Handshake (TLS 1.2)

> Der **TLS Handshake** ist der Prozess, bei dem Client und Server eine sichere Verbindung aufbauen.

## Vollständiger TLS 1.2 Handshake

```
Client                                                   Server
  │                                                         │
  │  1. ClientHello                                        │
  │     - TLS Version (1.2)                                │
  │     - Cipher Suites                                    │
  │     - Random Number                                    │
  │  ─────────────────────────────────────────────────────►│
  │                                                         │
  │  2. ServerHello                                        │
  │     - Gewählte Cipher Suite                            │
  │     - Random Number                                    │
  │  ◄─────────────────────────────────────────────────────│
  │                                                         │
  │  3. Certificate                                        │
  │     - X.509 Zertifikat (Public Key)                   │
  │  ◄─────────────────────────────────────────────────────│
  │                                                         │
  │  4. ServerKeyExchange (optional)                       │
  │     - Diffie-Hellman Parameter                         │
  │  ◄─────────────────────────────────────────────────────│
  │                                                         │
  │  5. ServerHelloDone                                    │
  │  ◄─────────────────────────────────────────────────────│
  │                                                         │
  │  6. ClientKeyExchange                                  │
  │     - Pre-Master Secret (RSA/ECDHE)                    │
  │  ─────────────────────────────────────────────────────►│
  │                                                         │
  │  7. ChangeCipherSpec                                   │
  │  ─────────────────────────────────────────────────────►│
  │                                                         │
  │  8. Finished (verschlüsselt!)                          │
  │  ─────────────────────────────────────────────────────►│
  │                                                         │
  │  9. ChangeCipherSpec                                   │
  │  ◄─────────────────────────────────────────────────────│
  │                                                         │
  │  10. Finished (verschlüsselt!)                         │
  │  ◄─────────────────────────────────────────────────────│
  │                                                         │
  │  ═══════════════════════════════════════════════════  │
  │  ║    Verschlüsselte Anwendungsdaten (HTTPS)      ║  │
  │  ═══════════════════════════════════════════════════  │
```

## TLS 1.2 Handshake - Detaillierte Schritte

### 1. ClientHello

```
Client → Server:
┌────────────────────────────────────┐
│ TLS Version: 1.2                   │
│ Cipher Suites:                     │
│   - TLS_ECDHE_RSA_WITH_AES_256_GCM │
│   - TLS_ECDHE_RSA_WITH_AES_128_GCM │
│   - TLS_RSA_WITH_AES_256_CBC       │
│ Compression Methods: null          │
│ Random: [28 Bytes]                 │
│ Extensions:                        │
│   - Server Name: example.com       │
│   - ALPN: h2, http/1.1             │
└────────────────────────────────────┘
```

### 2. ServerHello

```
Server → Client:
┌────────────────────────────────────┐
│ TLS Version: 1.2                   │
│ Cipher Suite:                      │
│   TLS_ECDHE_RSA_WITH_AES_256_GCM  │
│ Compression: null                  │
│ Random: [28 Bytes]                 │
│ Session ID: [32 Bytes]             │
└────────────────────────────────────┘
```

### 3. Certificate (Server-Zertifikat)

```
Server → Client:
┌────────────────────────────────────┐
│ X.509 Certificate Chain:           │
│                                    │
│ [Server Certificate]               │
│   Subject: example.com             │
│   Issuer: Let's Encrypt            │
│   Public Key: RSA 2048 bit         │
│   Valid: 2024-01-01 to 2024-12-31 │
│   Signature: [256 Bytes]           │
│                                    │
│ [Intermediate Certificate]         │
│ [Root Certificate]                 │
└────────────────────────────────────┘
```

> Client prüft:
> - Ist das Zertifikat gültig?
> - Stimmt der Domainname?
> - Vertraut der Browser der Certificate Authority (CA)?

### 4. Key Exchange

**Mit RSA:**
```
Client generiert Pre-Master Secret
         ↓
Verschlüsselt mit Server Public Key (aus Zertifikat)
         ↓
Client → Server: Encrypted Pre-Master Secret
         ↓
Beide leiten Master Secret ab:
Master Secret = PRF(Pre-Master, ClientRandom, ServerRandom)
```

**Mit ECDHE (empfohlen!):**
```
Server → Client: ECDHE Public Key (Kurve: secp256r1)
Client → Server: ECDHE Public Key
         ↓
Beide berechnen Shared Secret via Diffie-Hellman
         ↓
Master Secret = PRF(Shared Secret, Randoms)
```

>[!success] ECDHE-Vorteil
> **Perfect Forward Secrecy** (PFS): Selbst wenn der Server-Private-Key später kompromittiert wird, können alte Verbindungen nicht entschlüsselt werden!

---

# TLS 1.3 Handshake (Moderner Standard)

> TLS 1.3 ist **viel schneller** als TLS 1.2: Nur **1 Round-Trip** statt 2!

## TLS 1.3 Handshake-Ablauf

```
Client                                                   Server
  │                                                         │
  │  1. ClientHello                                        │
  │     - Unterstützte Versionen                           │
  │     - Key Share (ECDHE Public Key)                     │
  │     - Cipher Suites                                    │
  │  ─────────────────────────────────────────────────────►│
  │                                                         │
  │  2. ServerHello + Encrypted Extensions                 │
  │     - Key Share (Server Public Key)                    │
  │     - Certificate                                      │
  │     - CertificateVerify (Signatur)                     │
  │     - Finished                                         │
  │  ◄═════════════════════════════════════════════════════│
  │      (Alles außer ServerHello verschlüsselt!)          │
  │                                                         │
  │  3. Finished                                           │
  │  ═════════════════════════════════════════════════════►│
  │                                                         │
  │  ═══════════════════════════════════════════════════  │
  │  ║    Verschlüsselte Anwendungsdaten (HTTPS)      ║  │
  │  ═══════════════════════════════════════════════════  │
```

## Vergleich: TLS 1.2 vs TLS 1.3

| Merkmal | TLS 1.2 | TLS 1.3 |
|---------|---------|---------|
| **Round-Trips** | 2 RTT | 1 RTT (50% schneller!) |
| **0-RTT Mode** | Nein | Ja (für Wiederverbindungen) |
| **Cipher Suites** | 37 | 5 (nur sichere!) |
| **RSA Key Exchange** | Ja | Nein (nur ECDHE) |
| **Perfect Forward Secrecy** | Optional | Verpflichtend |
| **Verschlüsselung** | Ab ChangeCipherSpec | Fast sofort |

>[!success] TLS 1.3 Vorteile
> - **Schneller**: 1 statt 2 Round-Trips
> - **Sicherer**: Nur moderne, sichere Algorithmen
> - **Einfacher**: Weniger Komplexität, weniger Angriffsfläche

---

# X.509 Zertifikate

> Zertifikate beweisen die **Identität** des Servers und enthalten den **Public Key**.

## Zertifikatsstruktur

```
┌──────────────────────────────────────────────────────┐
│              X.509 Certificate                       │
├──────────────────────────────────────────────────────┤
│ Version: 3                                           │
│ Serial Number: 04:3A:F9:2C:E7:...                   │
│                                                      │
│ Issuer (Aussteller):                                │
│   CN = Let's Encrypt Authority X3                   │
│   O = Let's Encrypt                                  │
│   C = US                                             │
│                                                      │
│ Validity (Gültigkeit):                              │
│   Not Before: 2024-01-01 00:00:00 UTC              │
│   Not After:  2024-12-31 23:59:59 UTC              │
│                                                      │
│ Subject (Inhaber):                                  │
│   CN = www.example.com                              │
│                                                      │
│ Subject Public Key Info:                            │
│   Algorithm: RSA 2048 bit                           │
│   Public Key: [256 Bytes]                           │
│     00:C2:F4:7A:3E:...                              │
│                                                      │
│ Extensions:                                          │
│   - Subject Alternative Names (SAN):                │
│     - www.example.com                               │
│     - example.com                                    │
│   - Key Usage: Digital Signature, Key Encipherment │
│   - Extended Key Usage: TLS Web Server Auth         │
│                                                      │
│ Signature Algorithm: SHA256-RSA                      │
│ Signature: [256 Bytes]                              │
│   3F:A9:12:BC:...                                   │
└──────────────────────────────────────────────────────┘
```

## Certificate Chain (Vertrauenskette)

```
┌─────────────────────────────────────┐
│     Root CA Certificate             │  ← Im Browser vorinstalliert
│  (Let's Encrypt Root X1)            │     (vertrauenswürdig)
│                                     │
│  ⚿ Self-Signed                      │
└──────────────┬──────────────────────┘
               │ signiert
               ↓
┌──────────────┴──────────────────────┐
│  Intermediate CA Certificate        │  ← Von Root CA signiert
│  (Let's Encrypt Authority X3)       │
│                                     │
└──────────────┬──────────────────────┘
               │ signiert
               ↓
┌──────────────┴──────────────────────┐
│   Server Certificate                │  ← Von Intermediate signiert
│   (www.example.com)                 │
│                                     │
│   Enthält: Server Public Key        │
└─────────────────────────────────────┘
```

**Verifikation:**
```
1. Browser prüft Server-Zertifikat
   ├─ Signatur mit Intermediate Public Key verifizieren
   └─ ✓ Gültig
        ↓
2. Browser prüft Intermediate-Zertifikat
   ├─ Signatur mit Root Public Key verifizieren
   └─ ✓ Gültig
        ↓
3. Browser prüft Root-Zertifikat
   ├─ Ist im Browser Trust Store?
   └─ ✓ Vertrauenswürdig
        ↓
🔒 Verbindung ist authentifiziert!
```

---

# Cipher Suites

> Eine **Cipher Suite** definiert die Algorithmen für Schlüsselaustausch, Verschlüsselung, MAC/AEAD und Hashing.

## Cipher Suite Anatomie (TLS 1.2)

```
TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384
│   │     │   │    │   │   │   │
│   │     │   │    │   │   │   └──── Hash für PRF: SHA-384
│   │     │   │    │   │   └──────── AEAD-Modus: GCM
│   │     │   │    │   └──────────── Schlüssel: 256 Bit
│   │     │   │    └──────────────── Verschlüsselung: AES
│   │     │   └───────────────────── Kombination
│   │     └───────────────────────── Signatur: RSA
│   └─────────────────────────────── Key Exchange: ECDHE
└─────────────────────────────────── Protokoll: TLS
```

**Komponenten:**
1. **Key Exchange**: ECDHE (Elliptic Curve Diffie-Hellman Ephemeral)
2. **Authentication**: RSA (Signatur des Servers)
3. **Encryption**: AES-256 (Symmetrische Verschlüsselung)
4. **Mode**: GCM (Galois/Counter Mode - AEAD)
5. **Hash**: SHA-384 (für PRF und HMAC)

## TLS 1.3 Cipher Suites (Vereinfacht!)

> TLS 1.3 hat **nur 5 Cipher Suites** - alle unsicheren wurden entfernt!

```
TLS_AES_256_GCM_SHA384
│   │   │   │   │
│   │   │   │   └────── Hash: SHA-384
│   │   │   └────────── AEAD: GCM
│   │   └────────────── Schlüssel: 256 Bit
│   └────────────────── Verschlüsselung: AES
└────────────────────── Protokoll: TLS
```

**Vollständige Liste:**
```
1. TLS_AES_256_GCM_SHA384           ✅ Sehr sicher
2. TLS_AES_128_GCM_SHA256           ✅ Sicher, schneller
3. TLS_CHACHA20_POLY1305_SHA256     ✅ Für mobile Geräte
4. TLS_AES_128_CCM_SHA256           ✅ IoT-Geräte
5. TLS_AES_128_CCM_8_SHA256         ⚠️  Nur für IoT
```

>[!info] Key Exchange in TLS 1.3
> Kein separater Key-Exchange-Algorithmus mehr - immer **ECDHE** (Perfect Forward Secrecy)!

## Beispiel: Cipher Suite Verhandlung

```
Client                              Server
  │                                   │
  │  Unterstützte Cipher Suites:     │
  │  1. TLS_AES_256_GCM_SHA384       │
  │  2. TLS_CHACHA20_POLY1305_SHA256 │
  │  3. TLS_AES_128_GCM_SHA256       │
  │  ─────────────────────────────►  │
  │                                   │
  │  Server wählt:                   │
  │  TLS_AES_256_GCM_SHA384          │
  │  ◄─────────────────────────────  │
  │                                   │
  │  Ab jetzt: AES-256-GCM           │
```

---

# TLS Record Protocol

> Das **Record Protocol** teilt Daten in Blöcke, verschlüsselt sie und fügt MAC/AEAD hinzu.

## Record-Struktur

```
┌────────────────────────────────────────────────────┐
│                  TLS Record                        │
├────────────────────────────────────────────────────┤
│ Content Type: Application Data (23)               │
│ Version: TLS 1.2 (0x0303)                         │
│ Length: 1024 Bytes                                │
├────────────────────────────────────────────────────┤
│                                                    │
│          Verschlüsselte Daten                      │
│          (mit AES-256-GCM)                         │
│                                                    │
│          [1024 Bytes Ciphertext]                   │
│                                                    │
├────────────────────────────────────────────────────┤
│ Authentication Tag (GCM): [16 Bytes]              │
└────────────────────────────────────────────────────┘
```

## Record Processing

```
Anwendungsdaten (z.B. HTTP Request)
        ↓
┌──────────────────────┐
│   Fragmentierung     │  ← Max. 16 KB pro Record
└──────────┬───────────┘
           ↓
┌──────────────────────┐
│   Kompression        │  ← Optional (meist deaktiviert)
└──────────┬───────────┘
           ↓
┌──────────────────────┐
│   Verschlüsselung    │  ← AES-GCM, ChaCha20-Poly1305
│   + AEAD Tag         │
└──────────┬───────────┘
           ↓
┌──────────────────────┐
│   TLS Record Header  │  ← Type, Version, Length
└──────────┬───────────┘
           ↓
      Netzwerk (TCP)
```

---

# HTTPS in Aktion

> **HTTPS** = HTTP über TLS = Verschlüsselter Web-Traffic

## HTTPS-Verbindungsaufbau

```
Browser                                      Webserver
  │                                              │
  │  1. TCP-Verbindung (Port 443)               │
  │  ─────────────────────────────────────────► │
  │                                              │
  │  2. TLS Handshake                           │
  │  ◄══════════════════════════════════════►  │
  │     (Key Exchange, Zertifikat, ...)         │
  │                                              │
  │  3. HTTP Request (verschlüsselt)            │
  │  ═══════════════════════════════════════►  │
  │     GET /index.html HTTP/1.1                │
  │     Host: www.example.com                   │
  │                                              │
  │  4. HTTP Response (verschlüsselt)           │
  │  ◄═══════════════════════════════════════  │
  │     200 OK                                  │
  │     Content-Type: text/html                 │
  │     <!DOCTYPE html>...                      │
  │                                              │
  │  🔒 Alle Daten sind verschlüsselt!          │
```

## Was HTTPS schützt

```
┌─────────────────────────────────────────────────┐
│            Ohne HTTPS (HTTP)                    │
├─────────────────────────────────────────────────┤
│  Browser ────► [Angreifer] ────► Server        │
│                    │                            │
│                    ↓                            │
│         Kann lesen und ändern:                  │
│         - Passwörter                            │
│         - Kreditkarten                          │
│         - Persönliche Daten                     │
│         - Session-Cookies                       │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│            Mit HTTPS (HTTP + TLS)               │
├─────────────────────────────────────────────────┤
│  Browser ═════► [Angreifer] ═════► Server      │
│                    │                            │
│                    ↓                            │
│         Sieht nur verschlüsselten               │
│         Datenmüll: 3k#9mP@x...                  │
│         ✓ Vertraulichkeit                       │
│         ✓ Integrität                            │
│         ✓ Authentizität                         │
└─────────────────────────────────────────────────┘
```

---

# Praktische Code-Beispiele

## Python: HTTPS-Request mit TLS-Verifikation

```python
import requests
import ssl

# Standard HTTPS-Request (mit Zertifikatsprüfung)
response = requests.get('https://www.example.com')
print(f"Status: {response.status_code}")
print(f"TLS Version: {response.raw.version}")

# TLS-Details anzeigen
import urllib3
http = urllib3.PoolManager()
response = http.request('GET', 'https://www.example.com')
connection = response.connection_info
print(f"Cipher Suite: {connection}")
```

## Python: TLS-Server erstellen

```python
import ssl
import socket
from http.server import HTTPServer, SimpleHTTPRequestHandler

# TLS-Kontext erstellen
context = ssl.SSLContext(ssl.PROTOCOL_TLS_SERVER)
context.load_cert_chain('server.crt', 'server.key')

# Nur sichere Cipher Suites
context.set_ciphers('ECDHE+AESGCM:ECDHE+CHACHA20:!aNULL:!MD5:!DSS')

# Minimale TLS-Version
context.minimum_version = ssl.TLSVersion.TLSv1_2

# HTTPS-Server starten
server = HTTPServer(('0.0.0.0', 443), SimpleHTTPRequestHandler)
server.socket = context.wrap_socket(server.socket, server_side=True)

print("HTTPS Server läuft auf Port 443...")
server.serve_forever()
```

## OpenSSL: Zertifikate erstellen

### Self-Signed Certificate (für Tests)

```bash
# Private Key generieren
openssl genrsa -out server.key 2048

# Certificate Signing Request (CSR)
openssl req -new -key server.key -out server.csr \
  -subj "/CN=localhost/O=Test/C=DE"

# Self-Signed Certificate
openssl x509 -req -days 365 -in server.csr \
  -signkey server.key -out server.crt

# Zertifikat anzeigen
openssl x509 -in server.crt -text -noout
```

### TLS-Verbindung testen

```bash
# TLS-Handshake mit Server durchführen
openssl s_client -connect example.com:443 \
  -tls1_3 -showcerts

# Zertifikat eines Servers anzeigen
echo | openssl s_client -connect google.com:443 2>/dev/null | \
  openssl x509 -text -noout

# Cipher Suites testen
nmap --script ssl-enum-ciphers -p 443 example.com
```

## cURL: HTTPS mit TLS-Optionen

```bash
# Standard HTTPS-Request
curl https://www.example.com

# TLS 1.3 erzwingen
curl --tlsv1.3 https://www.example.com

# Zertifikat ignorieren (UNSICHER! Nur für Tests)
curl -k https://self-signed.example.com

# Eigenes Zertifikat verwenden
curl --cacert my-ca.crt https://internal.example.com

# TLS-Details anzeigen
curl -v https://www.example.com 2>&1 | grep -E "SSL|TLS"
```

---

# Certificate Authorities (CAs)

> **Certificate Authorities** sind vertrauenswürdige Organisationen, die Zertifikate ausstellen und signieren.

## CA-Hierarchie

```
┌─────────────────────────────────────────┐
│         Root CA                         │  ← Offline, höchste Sicherheit
│  (z.B. DigiCert Global Root CA)        │     Im Browser Trust Store
│                                         │
│  Private Key: Streng geheim!            │
└──────────────────┬──────────────────────┘
                   │ signiert
                   ↓
┌──────────────────┴──────────────────────┐
│      Intermediate CA                    │  ← Online, signiert Server-Certs
│  (z.B. DigiCert SHA2 Secure Server CA) │
│                                         │
└──────────────────┬──────────────────────┘
                   │ signiert
                   ↓
┌──────────────────┴──────────────────────┐
│      Server Certificates                │  ← Täglicher Gebrauch
│  - www.google.com                       │
│  - www.amazon.com                       │
│  - www.facebook.com                     │
└─────────────────────────────────────────┘
```

## Wichtige Certificate Authorities

| CA | Marktanteil | Besonderheit |
|----|-------------|--------------|
| **Let's Encrypt** | ~40% | Kostenlos, automatisiert (ACME) |
| **DigiCert** | ~15% | Kommerziell, OV/EV-Zertifikate |
| **Sectigo** | ~13% | Ehemals Comodo |
| **IdenTrust** | ~10% | Cross-Signierung |
| **GoDaddy** | ~8% | Domain-Registrar |

## Let's Encrypt (Kostenlose Zertifikate)

```bash
# Certbot installieren
sudo apt install certbot python3-certbot-nginx

# Zertifikat für Nginx beantragen
sudo certbot --nginx -d example.com -d www.example.com

# Automatische Erneuerung (90 Tage Gültigkeit)
sudo certbot renew

# Cronjob für automatische Erneuerung
0 0 * * * certbot renew --quiet
```

**ACME-Protokoll (Automated Certificate Management Environment):**
```
1. Client fordert Zertifikat an
   ↓
2. Let's Encrypt stellt Challenge (HTTP-01 oder DNS-01)
   ↓
3. Client erfüllt Challenge (z.B. Datei unter /.well-known/)
   ↓
4. Let's Encrypt verifiziert Challenge
   ↓
5. Zertifikat wird ausgestellt (90 Tage gültig)
```

---

# Sicherheit und Angriffe auf TLS

## Bekannte Angriffe

### 1. POODLE (2014)

```
Padding Oracle On Downgraded Legacy Encryption
    ↓
Angriff auf SSL 3.0 CBC-Modus
    ↓
Lösung: SSL 3.0 deaktivieren, nur TLS 1.2+ verwenden
```

### 2. BEAST (2011)

```
Browser Exploit Against SSL/TLS
    ↓
Angriff auf TLS 1.0 CBC-Modus
    ↓
Lösung: TLS 1.1+ verwenden, AEAD-Cipher Suites (GCM)
```

### 3. Heartbleed (2014)

```
OpenSSL-Bug in Heartbeat-Extension
    ↓
Ermöglicht Auslesen von Server-Speicher (inkl. Private Keys!)
    ↓
Lösung: OpenSSL patchen, Zertifikate neu ausstellen
```

### 4. CRIME / BREACH (2012/2013)

```
Kompression + Chosen-Plaintext → Daten erraten
    ↓
Lösung: TLS-Kompression deaktivieren
```

### 5. Downgrade-Angriffe

```
Angreifer zwingt Client/Server zu schwacher Verschlüsselung
    ↓
Lösung: TLS_FALLBACK_SCSV, HSTS
```

## Best Practices für sichere TLS-Konfiguration

```
✅ TLS 1.2 und 1.3 verwenden
✅ TLS 1.0/1.1 und SSL deaktivieren
✅ Nur starke Cipher Suites (ECDHE + AESGCM/ChaCha20)
✅ Perfect Forward Secrecy (PFS) aktivieren
✅ HTTP Strict Transport Security (HSTS)
✅ Certificate Transparency (CT)
✅ OCSP Stapling für schnellere Zertifikatsprüfung
❌ RC4, DES, 3DES, MD5 deaktivieren
❌ Export-Cipher deaktivieren
❌ Anonyme Cipher (aNULL) deaktivieren
```

### Nginx: Sichere TLS-Konfiguration

```nginx
server {
    listen 443 ssl http2;
    server_name example.com;

    # Zertifikate
    ssl_certificate /etc/ssl/certs/example.com.crt;
    ssl_certificate_key /etc/ssl/private/example.com.key;

    # Protokolle
    ssl_protocols TLSv1.2 TLSv1.3;

    # Cipher Suites (nur sichere!)
    ssl_ciphers 'ECDHE-RSA-AES256-GCM-SHA384:ECDHE-RSA-AES128-GCM-SHA256';
    ssl_prefer_server_ciphers on;

    # Perfect Forward Secrecy
    ssl_ecdh_curve secp384r1;

    # HSTS (6 Monate)
    add_header Strict-Transport-Security "max-age=15768000; includeSubDomains" always;

    # OCSP Stapling
    ssl_stapling on;
    ssl_stapling_verify on;

    # Session Tickets deaktivieren (PFS!)
    ssl_session_tickets off;
}
```

---

# TLS-Tools und Debugging

## SSLLabs Server Test

```
https://www.ssllabs.com/ssltest/

Prüft:
- TLS-Versionen
- Cipher Suites
- Zertifikatsvalidierung
- Sicherheitslücken
- Best Practices

Bewertung: A+ bis F
```

## testssl.sh (Kommandozeile)

```bash
# Installation
git clone https://github.com/drwetter/testssl.sh.git

# Server testen
./testssl.sh https://example.com

# Nur TLS-Versionen testen
./testssl.sh -p https://example.com

# Nur Cipher Suites testen
./testssl.sh -E https://example.com

# Zertifikat testen
./testssl.sh -S https://example.com
```

## Wireshark: TLS-Traffic analysieren

```
1. Wireshark öffnen
2. Filter: tcp.port == 443
3. TLS-Handshake analysieren:
   - ClientHello
   - ServerHello
   - Certificate
   - Key Exchange
   - Application Data (verschlüsselt)

Entschlüsselung (mit Private Key):
Edit → Preferences → Protocols → TLS
→ RSA keys list: server.key hinzufügen
```

---

# Zusammenfassung

>[!summary] Kernpunkte
> - **TLS** = Transport Layer Security, schützt Netzwerkkommunikation
> - **Versionen**: TLS 1.2 (sicher), TLS 1.3 (sehr sicher, schneller)
> - **Handshake**: Authentifizierung, Schlüsselaustausch, Cipher-Auswahl
> - **Zertifikate**: X.509, Certificate Authorities, Chain of Trust
> - **Cipher Suites**: ECDHE + AES-GCM oder ChaCha20-Poly1305
> - **HTTPS**: HTTP über TLS (Port 443)
> - **Perfect Forward Secrecy**: ECDHE für langfristige Sicherheit
> - **Best Practices**: TLS 1.2+, starke Ciphers, HSTS, OCSP Stapling

---

# Verwandte Konzepte

- [[02 - RESOURCES/Notes/Kryptographie\|Kryptographie]] - Übergeordnetes Konzept
- [[02 - RESOURCES/Notes/AES\|AES]] - Symmetrische Verschlüsselung in TLS
- [[02 - RESOURCES/Notes/RSA\|RSA]] - Asymmetrische Verschlüsselung für Zertifikate
- [[02 - RESOURCES/Notes/Diffie-Hellman\|Diffie-Hellman]] - Schlüsselaustausch in TLS 1.3
- [[02 - RESOURCES/Notes/Digitale Signatur\|Digitale Signatur]] - Zertifikats-Signaturen
- [[02 - RESOURCES/Notes/HTTPS\|HTTPS]] - TLS in Web-Anwendungen

---

# Weiterführende Ressourcen

**Bücher:**
- "Bulletproof SSL and TLS" von Ivan Ristić
- "Network Security with OpenSSL" von Viega, Messier, Chandra

**Online:**
- RFC 8446 (TLS 1.3 Specification)
- SSL Labs (ssllabs.com)
- OWASP TLS Cheat Sheet

**Tools:**
- Let's Encrypt (letsencrypt.org)
- testssl.sh (GitHub)
- Wireshark (TLS-Analyse)
- OpenSSL (Kommandozeile)
