---
{"dg-publish":true,"permalink":"/02-resources/notes/lf-11b-it-security-verschluesselung/","tags":["GFN/LF11/FISI"],"noteIcon":"","updated":"2025-09-05T14:30:06.000+02:00"}
---

# LF11b - IT Security Verschlüsselung

## Themenübersicht

- [[02 - RESOURCES/Notes/Verschlüsselung\|Verschlüsselung]] Grundlagen
- [[02 - RESOURCES/Notes/Asymmetrische Verschlüsselung\|Asymmetrische Verschlüsselung]]
- [[02 - RESOURCES/Notes/ssh\|SSH]] (Secure Shell)
- [[02 - RESOURCES/Notes/TLS\|TLS]] (Transport Layer Security)
- [[02 - RESOURCES/Notes/IPSec\|IPsec]] (Internet Protocol Security)

## [[02 - RESOURCES/Notes/Verschlüsselung\|Verschlüsselung]] Grundlagen

### Arten der Verschlüsselung

1. **[[02 - RESOURCES/Notes/Symmetrische Verschlüsselung\|Symmetrische Verschlüsselung]]**
    
    - Ein Schlüssel für Ver- und Entschlüsselung
    - Schnell und effizient
    - Problem: Schlüsselaustausch
2. **[[02 - RESOURCES/Notes/Asymmetrische Verschlüsselung\|Asymmetrische Verschlüsselung]]**
    
    - Schlüsselpaar: öffentlich und privat
    - Langsamer als symmetrische Verfahren
    - Löst das Schlüsselaustausch-Problem

## [[02 - RESOURCES/Notes/Asymmetrische Verschlüsselung\|Asymmetrische Verschlüsselung]]

### Funktionsweise

- **Public Key**: Öffentlich verfügbar für Verschlüsselung
- **Private Key**: Geheim gehalten für Entschlüsselung
- Mathematische Einwegfunktionen

### Anwendungsbereiche

- Sichere Kommunikation
- Digitale Signaturen
- Schlüsselaustausch für symmetrische Verfahren
- [[02 - RESOURCES/Notes/Authentifizierung\|Authentifizierung]]

### Vorteile

- Kein vorheriger Schlüsselaustausch nötig
- Skalierbar für viele Teilnehmer
- Ermöglicht digitale Signaturen

### Nachteile

- Langsamer als [[02 - RESOURCES/Notes/Symmetrische Verschlüsselung\|symmetrische Verschlüsselung]]
- Höherer Rechenaufwand
- Größere Schlüssellängen erforderlich

## [[02 - RESOURCES/Notes/ssh\|SSH]] (Secure Shell)

### Einsatzzweck

- Sichere Remote-Verbindungen
- Ersatz für unsichere Protokolle (Telnet, rsh)
- Sichere Dateiübertragung ([[02 - RESOURCES/Notes/scp\|SCP]], [[02 - RESOURCES/Notes/SFTP\|SFTP]])

### Sicherheitsfeatures

- Verschlüsselte Kommunikation
- Starke [[02 - RESOURCES/Notes/Authentifizierung\|Authentifizierung]]
- [[02 - RESOURCES/Notes/Integrität\|Integrität]] der Daten
- Port-Forwarding

### Authentifizierungsmethoden

- Passwort-basiert
- Public-Key-Authentifizierung
- Zertifikat-basiert

## TLS ([[02 - RESOURCES/Notes/TLS\|Transport Layer Security]])

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

### [[02 - RESOURCES/Notes/TLS\|TLS]]-Anwendungen

- [[02 - RESOURCES/Notes/HTTPS\|HTTPS]] ([[02 - RESOURCES/Notes/HTTP\|HTTP]] über [[02 - RESOURCES/Notes/TLS\|TLS]])
- E-Mail-[[02 - RESOURCES/Notes/Verschlüsselung\|Verschlüsselung]] (SMTPS, IMAPS)
- [[02 - RESOURCES/Notes/VPN\|VPN]]-Verbindungen
- Sichere [[02 - RESOURCES/Notes/API\|API]]-Kommunikation

### Sicherheitsmerkmale

- Ende-zu-Ende Verschlüsselung
- [[02 - RESOURCES/Notes/Authentifizierung\|Authentifizierung]] der Kommunikationspartner
- Schutz vor Man-in-the-Middle Angriffen
- Datenintegrität

## IPsec (Internet Protocol Security)

### Funktionsweise

- Sicherheit auf Netzwerk-Ebene ([[02 - RESOURCES/Notes/Layer 3\|Layer 3]])
- Transparenz für Anwendungen
- Ende-zu-Ende oder [[02 - RESOURCES/Notes/Gateway\|Gateway]]-zu-[[02 - RESOURCES/Notes/Gateway\|Gateway]]

### Betriebsmodi

1. **Transport Mode**
    
    - Nur Nutzdaten verschlüsselt
    - [[02 - RESOURCES/Notes/IP-Header\|IP-Header]] bleibt unverändert
2. **Tunnel Mode**
    
    - Komplettes IP-Paket verschlüsselt
    - Neuer [[02 - RESOURCES/Notes/IP-Header\|IP-Header]] hinzugefügt

### Protokolle

- **AH (Authentication Header)**
    
    - [[02 - RESOURCES/Notes/Authentifizierung\|Authentifizierung]] und [[02 - RESOURCES/Notes/Integrität\|Integrität]]
    - Keine [[02 - RESOURCES/Notes/Verschlüsselung\|Verschlüsselung]]
- **ESP (Encapsulating Security [[02 - RESOURCES/Notes/Payload\|Payload]])**
    
    - [[02 - RESOURCES/Notes/Verschlüsselung\|Verschlüsselung]] und [[02 - RESOURCES/Notes/Authentifizierung\|Authentifizierung]]
    - Vollständiger Schutz

### Anwendungsbereiche

- Site-to-Site VPNs
- Remote-Access VPNs
- Sichere Kommunikation zwischen Netzwerken

## IT-[[02 - RESOURCES/Notes/Risikoanalyse\|Risikoanalyse]]

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