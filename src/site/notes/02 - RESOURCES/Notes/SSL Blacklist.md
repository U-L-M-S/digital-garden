---
{"dg-publish":true,"permalink":"/02-resources/notes/ssl-blacklist/","tags":["informatik/sicherheit/ssl","threat-intelligence","malware"],"noteIcon":"","updated":"2025-11-07T11:36:07.000+01:00"}
---

> Datenbank von bösartigen SSL-Zertifikaten

**SSL Blacklist (SSLBL)** ist ein Service von [[02 - RESOURCES/Notes/abuse.ch\|abuse.ch]]. Er sammelt SSL-Zertifikate von [[02 - RESOURCES/Notes/Malware\|Malware]] und erstellt Blacklist.

---

## Was macht SSL Blacklist?

- **Sammelt SSL-Zertifikate**: Von [[02 - RESOURCES/Notes/Malware\|Malware]]-C&C-Servern
- **Erstellt Fingerprints**: SHA1-Hash der Zertifikate
- **Stellt Blacklist bereit**: Automatisch nutzbar
- **Erkennt [[02 - RESOURCES/Notes/Malware\|Malware]]**: Auch bei verschlüsseltem Traffic

## Warum wichtig?

**Problem:** [[02 - RESOURCES/Notes/Malware\|Malware]] nutzt HTTPS (SSL/TLS) zur Verschlüsselung

```
Malware ←─(HTTPS)─→ C&C-Server

Traditionelle Firewall:
  - Sieht nur: "HTTPS-Traffic zu IP X"
  - Kann Inhalt nicht sehen (verschlüsselt)
  - Kann nicht unterscheiden: Legitim oder Malware?
```

**Lösung:** SSL-Fingerprint-Matching

```
Malware ←─(HTTPS)─→ C&C-Server
   │
   └─► SSL-Zertifikat hat Fingerprint: abc123...

Firewall/IDS:
  - Extrahiert SSL-Fingerprint
  - Vergleicht mit SSL Blacklist
  - Fingerprint gefunden! → Blockieren ✗
```

## Funktionsweise

### 1. Zertifikat-Fingerprint

**Was ist das:**
```
SSL-Zertifikat → SHA1-Hash → Fingerprint

Beispiel:
  Zertifikat: -----BEGIN CERTIFICATE-----...
  SHA1:       8e:5c:7b:a9:3f:...
```

### 2. Ohne Entschlüsselung

**Vorteil:**
- Firewall muss Traffic NICHT entschlüsseln
- Kein Man-in-the-Middle notwendig
- Datenschutz bleibt gewahrt
- Funktioniert auch bei Perfect Forward Secrecy

## Verwendung in [[02 - RESOURCES/Notes/Firewall\|Firewall]]

### Integration mit [[02 - RESOURCES/Notes/Suricata\|Suricata]]

```
Services → Intrusion Detection → Download
  - abuse.ch SSL Blacklist ✓

→ Erkennt Malware-Traffic anhand SSL-Fingerprint
```

**Was passiert:**
```
1. Client verbindet zu Server via HTTPS

2. SSL-Handshake: Zertifikat wird ausgetauscht

3. Suricata extrahiert Zertifikat-Fingerprint

4. Vergleicht mit SSL Blacklist

5. Match gefunden! → Alert/Block
```

## Blacklist-Download

**Formate:**
```bash
# CSV-Format
wget https://sslbl.abuse.ch/blacklist/sslblacklist.csv

# Plain Text (nur Fingerprints)
wget https://sslbl.abuse.ch/blacklist/sslblacklist.txt

# Rules (für Suricata/Snort)
wget https://sslbl.abuse.ch/blacklist/sslblacklist.rules
```

## Erkannte [[02 - RESOURCES/Notes/Malware\|Malware]]-Familien

**Häufig:**
- **Emotet**: Banking-Trojaner
- **Trickbot**: Banking-Trojaner
- **Dridex**: Banking-Trojaner
- **QakBot**: Banking-Trojaner
- **Cobalt Strike**: Pentesting-Tool (missbraucht)
- **AsyncRAT**: Remote Access Trojaner

## Beispiel-Eintrag

```csv
Listingdate,SHA1,Listingreason
2025-01-07,8e5c7ba93f...,Emotet C&C
2025-01-06,9a2b4cd11e...,TrickBot C&C
```

## Web-Interface

Verfügbar unter: `https://sslbl.abuse.ch/`

**Features:**
- Suche nach Fingerprint
- Browse Blacklist
- Statistiken
- Blacklist-Download

## Suricata-Rule Beispiel

```
alert tls any any -> any any (
  msg:"ABUSE-SSL Malware SSL Certificate Detected";
  tls.cert_fingerprint;
  content:"8e5c7ba93f...";
  classtype:trojan-activity;
  sid:4000001;
  rev:1;
)
```

## Vorteile

- **Keine Entschlüsselung notwendig**: Datenschutz-freundlich
- **Funktioniert bei TLS 1.3**: Auch mit Perfect Forward Secrecy
- **Geringe False-Positives**: Zertifikat-Fingerprints sind eindeutig
- **Performance**: Keine rechenintensive Entschlüsselung

## Limitierungen

- **Nur bekannte Zertifikate**: Neue [[02 - RESOURCES/Notes/Malware\|Malware]] wird erst nach Report erkannt
- **Zertifikats-Wechsel**: [[02 - RESOURCES/Notes/Malware\|Malware]] kann Zertifikate ändern
- **Shared Hosting**: Mehrere Domains auf einem Zertifikat

> [!tip] Ergänzende Maßnahme
> SSL Blacklist ist EINE Schicht in [[02 - RESOURCES/Notes/Defense in Depth\|Defense in Depth]]. Kombiniere mit [[02 - RESOURCES/Notes/URLhaus\|URLhaus]], [[02 - RESOURCES/Notes/Feodo Tracker\|Feodo Tracker]], und [[02 - RESOURCES/Notes/IDS\|IDS]]/[[02 - RESOURCES/Notes/IPS\|IPS]].
