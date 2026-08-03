---
{"dg-publish":true,"permalink":"/wiki/lf-11b-it-security-verschluesselung/","tags":["ausbildung/gfn"],"noteIcon":"","updated":"2026-07-19T03:56:26.000+02:00","dg-note-properties":{"tags":["ausbildung/gfn"],"aliases":null,"links":null,"created_date":"2025-09-05"}}
---

# LF11b - IT Security Verschlüsselung

## Themenübersicht

- [[wiki/Verschlüsselung\|Verschlüsselung]] Grundlagen
- [[wiki/Asymmetrische Verschlüsselung\|Asymmetrische Verschlüsselung]]
- [[wiki/ssh\|SSH]] (Secure Shell)
- [[wiki/TLS\|TLS]] (Transport Layer Security)
- [[wiki/IPSec\|IPsec]] (Internet Protocol Security)

## [[wiki/Verschlüsselung\|Verschlüsselung]] Grundlagen

### Arten der Verschlüsselung

1. **[[wiki/Symmetrische Verschlüsselung\|Symmetrische Verschlüsselung]]**
    
    - Ein Schlüssel für Ver- und Entschlüsselung
    - Schnell und effizient
    - Problem: Schlüsselaustausch
2. **[[wiki/Asymmetrische Verschlüsselung\|Asymmetrische Verschlüsselung]]**
    
    - Schlüsselpaar: öffentlich und privat
    - Langsamer als symmetrische Verfahren
    - Löst das Schlüsselaustausch-Problem

## [[wiki/Asymmetrische Verschlüsselung\|Asymmetrische Verschlüsselung]]

### Funktionsweise

- **Public Key**: Öffentlich verfügbar für Verschlüsselung
- **Private Key**: Geheim gehalten für Entschlüsselung
- Mathematische Einwegfunktionen

### Anwendungsbereiche

- Sichere Kommunikation
- Digitale Signaturen
- Schlüsselaustausch für symmetrische Verfahren
- [[wiki/Authentifizierung\|Authentifizierung]]

### Vorteile

- Kein vorheriger Schlüsselaustausch nötig
- Skalierbar für viele Teilnehmer
- Ermöglicht digitale Signaturen

### Nachteile

- Langsamer als [[wiki/Symmetrische Verschlüsselung\|symmetrische Verschlüsselung]]
- Höherer Rechenaufwand
- Größere Schlüssellängen erforderlich

## [[wiki/ssh\|SSH]] (Secure Shell)

### Einsatzzweck

- Sichere Remote-Verbindungen
- Ersatz für unsichere Protokolle (Telnet, rsh)
- Sichere Dateiübertragung ([[wiki/scp\|SCP]], [[wiki/SFTP\|SFTP]])

### Sicherheitsfeatures

- Verschlüsselte Kommunikation
- Starke [[wiki/Authentifizierung\|Authentifizierung]]
- [[wiki/Integrität\|Integrität]] der Daten
- Port-Forwarding

### Authentifizierungsmethoden

- Passwort-basiert
- Public-Key-Authentifizierung
- Zertifikat-basiert

## TLS ([[wiki/TLS\|Transport Layer Security]])

### TLS-Handshake Prozess

1. **Client Hello**
    
    - Unterstützte TLS-Version
    - Client-Zufallszahl
    - Liste der Cipher Suites
2. **Server Hello**
    
    - Gewählte Protokoll-Version
    - Server-Zufallszahl
    - Gewählte Cipher Suite
    - Digitales Zertifikat mit Public Key
3. **Client-Verifikation**
    
    - Prüfung des Server-Zertifikats
    - Übertragung des verschlüsselten Premaster Secret
4. **Schlüssel-Generierung**
    
    - Server entschlüsselt Premaster Secret
    - Beide Seiten generieren Session Key

### [[wiki/TLS\|TLS]]-Anwendungen

- [[wiki/HTTPS\|HTTPS]] ([[wiki/HTTP\|HTTP]] über [[wiki/TLS\|TLS]])
- E-Mail-[[wiki/Verschlüsselung\|Verschlüsselung]] (SMTPS, IMAPS)
- [[wiki/VPN\|VPN]]-Verbindungen
- Sichere [[wiki/API\|API]]-Kommunikation

### Sicherheitsmerkmale

- Ende-zu-Ende Verschlüsselung
- [[wiki/Authentifizierung\|Authentifizierung]] der Kommunikationspartner
- Schutz vor Man-in-the-Middle Angriffen
- Datenintegrität

## IPsec (Internet Protocol Security)

### Funktionsweise

- Sicherheit auf Netzwerk-Ebene ([[wiki/Layer 3\|Layer 3]])
- Transparenz für Anwendungen
- Ende-zu-Ende oder [[wiki/Gateway\|Gateway]]-zu-[[wiki/Gateway\|Gateway]]

### Betriebsmodi

1. **Transport Mode**
    
    - Nur Nutzdaten verschlüsselt
    - [[wiki/IP-Header\|IP-Header]] bleibt unverändert
2. **Tunnel Mode**
    
    - Komplettes IP-Paket verschlüsselt
    - Neuer [[wiki/IP-Header\|IP-Header]] hinzugefügt

### Protokolle

- **AH (Authentication Header)**
    
    - [[wiki/Authentifizierung\|Authentifizierung]] und [[wiki/Integrität\|Integrität]]
    - Keine [[wiki/Verschlüsselung\|Verschlüsselung]]
- **ESP (Encapsulating Security [[wiki/Payload\|Payload]])**
    
    - [[wiki/Verschlüsselung\|Verschlüsselung]] und [[wiki/Authentifizierung\|Authentifizierung]]
    - Vollständiger Schutz

### Anwendungsbereiche

- Site-to-Site VPNs
- Remote-Access VPNs
- Sichere Kommunikation zwischen Netzwerken

## IT-[[wiki/Risikoanalyse\|Risikoanalyse]]

### Bedrohungen identifizieren

- Externe Angreifer
- Interne Bedrohungen
- Technische Schwachstellen
- Menschliche Fehler

### Gegenmaßnahmen festlegen

- Technische Sicherheitsmaßnahmen
- Organisatorische Regelungen
- Schulungen und Awareness
- Incident Response Pläne

## Zusammenfassung

Moderne IT-Sicherheit basiert auf der Kombination verschiedener Verschlüsselungsverfahren und Protokolle. Jede Technologie hat spezifische Anwendungsbereiche und Sicherheitsmerkmale, die je nach Anforderung eingesetzt werden sollten.