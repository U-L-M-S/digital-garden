---
{"dg-publish":true,"permalink":"/02-resources/notes/asymmetrische-verschluesselung/","tags":["ausbildung/gfn/ap1/vorbereitung","sicherheit/it-sicherheit","sicherheit/kryptografie","kryptografie/verschlüsselung","kryptografie/asymmetrisch"],"noteIcon":"","updated":"2025-11-07T10:16:09.326+01:00"}
---

>Asymmetrische Verschlüsselung ist eine Methode der [[02 - RESOURCES/Notes/Kryptographie\|Kryptographie]], bei der <mark style="background: #ABF7F7A6;">zwei verschiedene, mathematisch verbundene Schlüssel verwendet werden</mark>: ein [[öffentlicher Schlüssel\|öffentlicher Schlüssel]] (public key) und ein [[privater Schlüssel\|privater Schlüssel]] (private key).
>>Was mit dem einen [[Schlüssel\|Schlüssel]] verschlüsselt wird, kann nur mit dem anderen entschlüsselt werden - das ist die Magie der asymmetrischen Kryptographie!

# I. Das revolutionäre Konzept

>Asymmetrische Verschlüsselung löst das größte Problem der [[02 - RESOURCES/Notes/Symmetrische Verschlüsselung\|symmetrischen Verschlüsselung]]: den [[Schlüsselaustausch\|Schlüsselaustausch]].

```
┌─────────────────────────────────────────────────────────────┐
│          ASYMMETRISCHE VERSCHLÜSSELUNG - DAS PRINZIP         │
└─────────────────────────────────────────────────────────────┘

         [Alice]                                      [Bob]
            │                                           │
            │ Private Key: Kpriv                       │ Private Key: Kpriv
            │ (GEHEIM!)                                 │ (GEHEIM!)
            │                                           │
            │ Public Key: Kpub                         │ Public Key: Kpub
            │ (ÖFFENTLICH!)                             │ (ÖFFENTLICH!)
            │                                           │
            │                                           │
   ┌────────▼────────┐                         ┌────────▼────────┐
   │ Alice will Bob  │                         │ Bob veröffentlicht│
   │ eine Nachricht  │                         │ seinen Public Key │
   │ schicken        │◀────Internet───────────│ (Telefonbuch)     │
   └────────┬────────┘                         └───────────────────┘
            │
            │ 1. Alice holt Bobs Public Key
            │
   ┌────────▼────────┐
   │ Verschlüsseln   │
   │ mit Bobs        │
   │ Public Key      │
   └────────┬────────┘
            │
            │ 2. Chiffretext über Internet
            │
            ├─────────────────▶
                               │
                      ┌────────▼────────┐
                      │ Entschlüsseln   │
                      │ mit Bobs        │
                      │ Private Key     │
                      └────────┬────────┘
                               │
                               ▼
                          [Klartext]

🔑 Nur Bob kann entschlüsseln - er ist der einzige mit dem Private Key!
🌍 Bobs Public Key ist öffentlich - jeder kann damit verschlüsseln
🔒 Niemand sonst kann die Nachricht lesen
```

>[!important] Das Herzstück: Mathematische Einbahnfunktion
>Die beiden Schlüssel sind mathematisch verbunden, ABER:
>- **Einfach:** Mit Public Key verschlüsseln ✅
>- **Unmöglich:** Aus Public Key den Private Key berechnen ❌
>- **Nur möglich:** Mit Private Key entschlüsseln ✅
>
>Dies basiert auf schwierigen mathematischen Problemen wie [[Primfaktorzerlegung\|Primfaktorzerlegung]] oder [[Diskreter Logarithmus\|Diskreter Logarithmus]].

## Abgedeckte Sicherheitsbausteine

**1. [[02 - RESOURCES/Notes/Vertraulichkeit\|Vertraulichkeit]]:**
- Nur der Besitzer des [[privater Schlüssel\|privaten Schlüssels]] kann verschlüsselte Daten entschlüsseln
- Unbefugter Zugriff wird verhindert
- Öffentlicher Schlüssel kann frei verteilt werden

**2. [[02 - RESOURCES/Notes/Authentizität\|Authentizität]]:**
- Durch [[02 - RESOURCES/Notes/Digitale Signatur\|Digitale Signatur]]en wird die Identität des Absenders überprüft
- Reduziert Betrug und Identitätsdiebstahl
- Signatur mit Private Key, Prüfung mit Public Key

**3. [[02 - RESOURCES/Notes/Integrität\|Integrität]]:**
- [[02 - RESOURCES/Notes/Digitale Signatur\|Digitale Signatur]]en garantieren, dass Daten nicht manipuliert wurden
- Jede Änderung macht die Signatur ungültig
- Schafft Vertrauen in die [[02 - RESOURCES/Notes/Integrität\|Integrität]] der Informationen

**4. [[02 - RESOURCES/Notes/Nicht-Abstreitbarkeit\|Nicht-Abstreitbarkeit]]:**
- Sender kann nicht leugnen, eine Nachricht gesendet zu haben
- Nur er hat den [[privater Schlüssel\|privater Schlüssel]], um zu signieren
- Rechtliche und betriebliche Absicherung

# II. Wie funktioniert's? Die Mathematik dahinter

>Asymmetrische Verschlüsselung basiert auf mathematischen Einbahnfunktionen: Leicht in eine Richtung, praktisch unmöglich zurück.

## Das Schlüsselpaar generieren

```
┌─────────────────────────────────────────────────────────────┐
│              SCHLÜSSELPAAR-GENERIERUNG                       │
└─────────────────────────────────────────────────────────────┘

  ┌──────────────────────┐
  │ Schlüsselgenerator   │
  │ (z.B. RSA-Algorithmus)│
  └──────────┬───────────┘
             │
             │ Input: Zufallszahlen + Parameter
             │
             ▼
    ┌────────────────┐
    │ Mathematische  │
    │ Berechnungen   │  • Primzahlgenerierung (RSA)
    │                │  • Modulare Arithmetik
    │                │  • Elliptische Kurven (ECC)
    └────────┬───────┘
             │
             │ Output: Schlüsselpaar
             │
     ┌───────┴───────┐
     │               │
     ▼               ▼
┌──────────┐   ┌──────────┐
│ Public   │   │ Private  │
│ Key      │   │ Key      │
│          │   │          │
│ • Kpub   │   │ • Kpriv  │
│ • Öffent-│   │ • GEHEIM!│
│   lich   │   │ • Niemals│
│ • Zum    │   │   teilen!│
│   Verschl│   │ • Sicher │
│   üsseln │   │   speich.│
└──────────┘   └──────────┘
     │               │
     │               │
     ▼               ▼
[Veröffent-    [Auf sicherer
 lichen]        Festplatte]
```

## Die zwei Richtungen

```
┌─────────────────────────────────────────────────────────────┐
│        RICHTUNG 1: VERSCHLÜSSELUNG (VERTRAULICHKEIT)        │
└─────────────────────────────────────────────────────────────┘

Klartext                                            Klartext
  "Hallo"                                            "Hallo"
     │                                                   ▲
     │ Verschlüsseln mit                                │ Entschlüsseln mit
     │ Empfänger's PUBLIC KEY                           │ Empfänger's PRIVATE KEY
     ▼                                                   │
Chiffretext  ────────▶ Internet ────────▶         Chiffretext
  "X9kL2..."                                         "X9kL2..."

Anwendung: Vertrauliche Kommunikation
- Alice verschlüsselt mit Bobs Public Key
- Nur Bob kann mit seinem Private Key entschlüsseln

┌─────────────────────────────────────────────────────────────┐
│         RICHTUNG 2: SIGNATUR (AUTHENTIZITÄT)                │
└─────────────────────────────────────────────────────────────┘

Nachricht                                          Nachricht
  "Hallo"                                            "Hallo"
     │                                                   │
     │ Signieren mit                                    │ Prüfen mit
     │ Sender's PRIVATE KEY                             │ Sender's PUBLIC KEY
     ▼                                                   ▼
Digitale Signatur ───▶ Internet ───▶          Digitale Signatur
  "a3F5b..."                                         "a3F5b..."
                                                          │
                                                          ▼
                                                    ✅ Gültig oder
                                                    ❌ Ungültig?

Anwendung: Nachweis der Echtheit
- Alice signiert mit ihrem Private Key
- Jeder kann mit Alice's Public Key die Signatur prüfen
```

# III. Die wichtigsten Algorithmen

## [[02 - RESOURCES/Notes/RSA\|RSA]] - Der Klassiker

>[[02 - RESOURCES/Notes/RSA\|RSA]] ist der bekannteste und am weitesten verbreitete asymmetrische Algorithmus. Benannt nach den Erfindern Rivest, Shamir und Adleman (1977).

### Mathematische Basis (vereinfacht)

```
┌─────────────────────────────────────────────────────────────┐
│                 RSA - SCHLÜSSELGENERIERUNG                   │
└─────────────────────────────────────────────────────────────┘

Schritt 1: Wähle zwei große Primzahlen
──────────────────────────────────────
    p = 61        q = 53
    (In echt: 300+ Stellen!)

Schritt 2: Berechne n = p × q
──────────────────────────────────────
    n = 61 × 53 = 3233

    → n ist Teil beider Schlüssel

Schritt 3: Berechne φ(n) = (p-1) × (q-1)
──────────────────────────────────────
    φ(n) = 60 × 52 = 3120

Schritt 4: Wähle e (öffentlicher Exponent)
──────────────────────────────────────
    e = 17  (muss teilerfremd zu φ(n) sein)

    PUBLIC KEY = (n, e) = (3233, 17)

Schritt 5: Berechne d (privater Exponent)
──────────────────────────────────────
    d × e ≡ 1 (mod φ(n))
    d = 2753

    PRIVATE KEY = (n, d) = (3233, 2753)

┌──────────────────────────────────────────────┐
│ Verschlüsseln: C = M^e mod n                 │
│ Entschlüsseln: M = C^d mod n                 │
└──────────────────────────────────────────────┘
```

### RSA Beispiel in Python

```python
# RSA Verschlüsselung (vereinfachtes Beispiel)

# Public Key (öffentlich)
n = 3233
e = 17

# Private Key (GEHEIM!)
d = 2753

# Nachricht als Zahl (z.B. ASCII von 'A' = 65)
nachricht = 65

# Verschlüsseln: C = M^e mod n
chiffretext = pow(nachricht, e, n)
print(f"Verschlüsselt: {chiffretext}")  # 2790

# Entschlüsseln: M = C^d mod n
klartext = pow(chiffretext, d, n)
print(f"Entschlüsselt: {klartext}")  # 65 (das ursprüngliche 'A')

# WICHTIG: Echtes RSA ist viel komplexer!
# - Verwendet 2048-4096 Bit Schlüssel
# - Padding-Schemas (OAEP)
# - Signatur-Schemas (PSS)
```

**Output:**
```
Verschlüsselt: 2790
Entschlüsselt: 65
```

**RSA-Schlüssellängen:**

| Schlüssellänge | Sicherheit | Status | Verwendung |
|----------------|------------|--------|------------|
| **1024 Bit** | Niedrig | ❌ UNSICHER | Nicht mehr verwenden! |
| **2048 Bit** | Standard | ✅ OK | Aktueller Standard bis ~2030 |
| **3072 Bit** | Hoch | ✅ Sicher | Langfristige Sicherheit |
| **4096 Bit** | Sehr hoch | ✅ Maximum | Hochsicherheit, aber langsam |

## [[02 - RESOURCES/Notes/ECC\|ECC]] - Elliptic Curve Cryptography

>[[02 - RESOURCES/Notes/ECC\|ECC]] ist die moderne Alternative zu [[02 - RESOURCES/Notes/RSA\|RSA]]. Basiert auf elliptischen Kurven und bietet gleiche Sicherheit mit viel kürzeren Schlüsseln.

```
┌─────────────────────────────────────────────────────────────┐
│              RSA vs ECC - SCHLÜSSELLÄNGEN                    │
└─────────────────────────────────────────────────────────────┘

Sicherheitslevel:        RSA              ECC         Verhältnis
────────────────────────────────────────────────────────────────
Standard                2048 Bit         256 Bit         8:1

Hoch                    3072 Bit         384 Bit         8:1

Sehr Hoch               4096 Bit         512 Bit         8:1

Warum ECC besser?
─────────────────
✅ Kürzere Schlüssel = weniger Speicher
✅ Schnellere Operationen bei gleicher Sicherheit
✅ Weniger Bandbreite bei Übertragung
✅ Ideal für mobile Geräte und IoT

Beliebte ECC-Kurven:
─────────────────
• Curve25519 (256 Bit) - Verwendet in Signal, WhatsApp
• secp256r1 / P-256 - NIST Standard
• secp384r1 / P-384 - Höhere Sicherheit
• Ed25519 - Für digitale Signaturen
```

### ECC Visualisierung

```
┌─────────────────────────────────────────────────────────────┐
│           ELLIPTISCHE KURVE - PUNKT-ADDITION                 │
└─────────────────────────────────────────────────────────────┘

Kurven-Gleichung: y² = x³ + ax + b

        y
        │
        │    • P
        │   /│\
        │  / │ \
        │ /  │  \────────┐
        │/   │           │
    ────┼────┼───────────┼───────▶ x
        │    •           • Q
        │   -R
        │
        │    • R (gespiegelt an x-Achse)

P + Q = R:
1. Zeichne Linie durch P und Q
2. Finde dritten Schnittpunkt -R
3. Spiegle an x-Achse → R

Diese Operation ist:
✅ Leicht zu berechnen (P → Q → R)
❌ Schwer umzukehren (R → P finden)

Das ist die Basis für ECC-Sicherheit!
```

# IV. Vor- und Nachteile

## Vorteile ✅

>[!success] Warum Asymmetrische Verschlüsselung revolutionär ist
>
>**1. Kein Schlüsselaustausch-Problem**
>- Public Key kann frei verteilt werden
>- Keine sichere Vorab-Kommunikation nötig
>- Löst das Hauptproblem der [[02 - RESOURCES/Notes/Symmetrische Verschlüsselung\|Symmetrische Verschlüsselung]]
>
>**2. Skalierbarkeit**
>- Jeder braucht nur EIN Schlüsselpaar (nicht N²/2 Schlüssel!)
>- 1000 Personen = 1000 Schlüsselpaare (statt 499.500!)
>- Ideal für große Netzwerke
>
>**3. Digitale Signaturen möglich**
>- Beweist [[02 - RESOURCES/Notes/Authentizität\|Authentizität]] des Absenders
>- [[02 - RESOURCES/Notes/Nicht-Abstreitbarkeit\|Nicht-Abstreitbarkeit]] durch Private Key
>- Grundlage für [[PKI\|PKI]] und [[02 - RESOURCES/Notes/Zertifikat\|Zertifikat]]e
>
>**4. Schlüsselverteilung**
>- Public Keys können in öffentlichen Verzeichnissen stehen
>- Wie Telefonnummer oder E-Mail-Adresse
>- Kein geheimer Kanal zur Verteilung nötig

## Nachteile ❌

>[!warning] Die Einschränkungen
>
>**1. Extrem langsam**
>- 100-1000x langsamer als [[02 - RESOURCES/Notes/AES\|AES]]
>- Nicht praktikabel für große Datenmengen
>- Lösung: Hybrid-Verschlüsselung (RSA + AES)
>
>**2. Große Schlüssel**
>- RSA braucht 2048-4096 Bit für Sicherheit
>- Mehr Speicher und Bandbreite
>- (ECC löst dies teilweise)
>
>**3. Komplex**
>- Schwierige Mathematik dahinter
>- Mehr Angriffsfläche bei falscher Implementierung
>- Padding, Signaturen, Zertifikate müssen richtig gemacht werden
>
>**4. Quantencomputer-Gefahr**
>- Shor's Algorithmus kann RSA und ECC brechen
>- Auf Quantencomputern (noch nicht praktisch)
>- Post-Quantum-Kryptographie wird erforscht

## Vergleich: Symmetrisch vs Asymmetrisch

```
┌─────────────────────────────────────────────────────────────┐
│        SYMMETRISCH vs ASYMMETRISCH - HEAD-TO-HEAD           │
└─────────────────────────────────────────────────────────────┘

┌──────────────────┬──────────────────┬──────────────────┐
│   Eigenschaft    │  Symmetrisch     │  Asymmetrisch    │
├──────────────────┼──────────────────┼──────────────────┤
│ Schlüssel        │ 1 Schlüssel      │ 2 Schlüssel      │
│                  │ (geheim)         │ (öff. + privat)  │
├──────────────────┼──────────────────┼──────────────────┤
│ Geschwindigkeit  │ ⚡⚡⚡ Sehr schnell│ 🐌 Langsam       │
│                  │ (GB/s)           │ (KB/s)           │
├──────────────────┼──────────────────┼──────────────────┤
│ Schlüssellänge   │ 128-256 Bit      │ 2048-4096 Bit    │
│                  │                  │ (ECC: 256 Bit)   │
├──────────────────┼──────────────────┼──────────────────┤
│ Schlüsselaustausch│ ❌ Problem!     │ ✅ Einfach       │
│                  │ Unsicherer Kanal │ Public Key frei  │
├──────────────────┼──────────────────┼──────────────────┤
│ Skalierung       │ ❌ N²/2 Schlüssel│ ✅ N Schlüssel   │
│ (N Personen)     │                  │                  │
├──────────────────┼──────────────────┼──────────────────┤
│ Digitale Signatur│ ❌ Nicht möglich │ ✅ Ja!           │
├──────────────────┼──────────────────┼──────────────────┤
│ Nicht-Abstreit-  │ ❌ Nein          │ ✅ Ja            │
│ barkeit          │ (beide haben Key)│ (nur einer hat   │
│                  │                  │  Private Key)    │
├──────────────────┼──────────────────┼──────────────────┤
│ Anwendung        │ Daten-           │ Schlüssel-       │
│                  │ Verschlüsselung  │ austausch,       │
│                  │                  │ Signaturen       │
├──────────────────┼──────────────────┼──────────────────┤
│ Beispiele        │ AES, ChaCha20    │ RSA, ECC         │
└──────────────────┴──────────────────┴──────────────────┘

💡 In der Praxis: BEIDES kombinieren (Hybrid)!
```

# V. Real-World Anwendungen

## HTTPS/TLS - Der Hybrid-Ansatz

>Fast ALLE praktischen Systeme kombinieren asymmetrische und [[02 - RESOURCES/Notes/Symmetrische Verschlüsselung\|Symmetrische Verschlüsselung]]: Asymmetrisch für Schlüsselaustausch, symmetrisch für Daten.

```
┌─────────────────────────────────────────────────────────────┐
│         HTTPS - ASYMMETRISCH + SYMMETRISCH HYBRID           │
└─────────────────────────────────────────────────────────────┘

Phase 1: TLS HANDSHAKE (Asymmetrisch - RSA/ECC)
════════════════════════════════════════════════
Browser                                   Server
   │                                         │
   │ 1. ClientHello                          │
   │ "Ich will verschlüsseln"                │
   ├────────────────────────────────────────▶│
   │                                         │
   │ 2. ServerHello + Zertifikat             │
   │    + Server's PUBLIC KEY (RSA/ECC)      │
   │◀────────────────────────────────────────┤
   │                                         │
   │ 3. Browser prüft Zertifikat             │
   │    Ist Signatur gültig? ✅              │
   │                                         │
   │ 4. Schlüsselaustausch                   │
   │    - Generiere Session-Key (AES)        │
   │    - Verschlüssle mit Server Public Key │
   ├────────────────────────────────────────▶│
   │                                         │
   │    Beide haben jetzt Session-Key!       │
   │         (symmetrisch, AES-256)          │
   │                                         │

Phase 2: DATENÜBERTRAGUNG (Symmetrisch - AES)
══════════════════════════════════════════════
   │                                         │
   │ HTTP Request (verschlüsselt mit AES)    │
   ├────────────────────────────────────────▶│
   │                                         │
   │ HTTP Response (verschlüsselt mit AES)   │
   │◀────────────────────────────────────────┤
   │                                         │
   │ ⚡ Jetzt ist es schnell! (AES)          │
   │ 🔒 Und sicher! (Session-Key nur für     │
   │    diese eine Verbindung)               │

Warum dieser Hybrid-Ansatz?
───────────────────────────
✅ Asymmetrisch löst Schlüsselaustausch-Problem
✅ Symmetrisch ist schnell für große Daten
✅ Best of both worlds!
```

## SSH - Secure Shell

>[[02 - RESOURCES/Notes/ssh\|SSH]] verwendet asymmetrische Verschlüsselung für Authentifizierung.

**SSH mit Public-Key-Authentication:**

```bash
# 1. Schlüsselpaar generieren
ssh-keygen -t ed25519 -C "deine@email.de"

# Erzeugt:
# ~/.ssh/id_ed25519       (PRIVATE KEY - GEHEIM!)
# ~/.ssh/id_ed25519.pub   (PUBLIC KEY - auf Server kopieren)

# 2. Public Key auf Server kopieren
ssh-copy-id user@server.com

# 3. Einloggen ohne Passwort!
ssh user@server.com

# Server prüft: Kann der Client etwas mit seinem Private Key signieren,
# das zum gespeicherten Public Key passt? Wenn ja → Zugriff gewährt!
```

## PGP/GPG - E-Mail-Verschlüsselung

>[[PGP\|PGP]] (Pretty Good Privacy) verwendet asymmetrische Verschlüsselung für sichere E-Mails.

```
┌─────────────────────────────────────────────────────────────┐
│              PGP E-MAIL VERSCHLÜSSELUNG                      │
└─────────────────────────────────────────────────────────────┘

Alice schreibt verschlüsselte E-Mail an Bob:

1. Alice schreibt E-Mail (Klartext)
   │
   ▼
2. PGP generiert zufälligen Session-Key (AES)
   │
   ├─────▶ Verschlüssle E-Mail mit Session-Key (schnell!)
   │       │
   │       ▼
   │    [Verschlüsselte E-Mail]
   │
   └─────▶ Verschlüssle Session-Key mit Bobs PUBLIC KEY (RSA)
           │
           ▼
        [Verschlüsselter Session-Key]

3. Sende beides: Verschlüsselte E-Mail + Verschlüsselter Key

4. Bob empfängt und entschlüsselt:
   │
   ├─────▶ Entschlüssle Session-Key mit seinem PRIVATE KEY
   │       │
   │       ▼
   │    [Session-Key]
   │
   └─────▶ Entschlüssle E-Mail mit Session-Key
           │
           ▼
        [Klartext E-Mail]

💡 Wieder Hybrid: RSA für Key, AES für Daten!
```

## Digitale Zertifikate (X.509)

>[[X.509\|X.509]]-[[02 - RESOURCES/Notes/Zertifikat\|Zertifikat]]e sind die Basis der Web-Sicherheit. Sie verbinden einen [[öffentlicher Schlüssel\|öffentlicher Schlüssel]] mit einer Identität.

```
┌─────────────────────────────────────────────────────────────┐
│              X.509 ZERTIFIKAT - STRUKTUR                     │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│            DIGITALES ZERTIFIKAT                     │
│                 (signiert von CA)                   │
├─────────────────────────────────────────────────────┤
│                                                     │
│ Besitzer:      example.com                          │
│ Gültig von:    2024-01-01                           │
│ Gültig bis:    2025-01-01                           │
│                                                     │
│ Public Key:    [RSA 2048 Bit]                       │
│                MIIBIjANBgkqhkiG9w0...               │
│                                                     │
│ Aussteller:    Let's Encrypt Authority X3           │
│                                                     │
│ ┌─────────────────────────────────────────┐         │
│ │ Digitale Signatur der CA                │         │
│ │ (CA signiert alles oben mit ihrem       │         │
│ │  Private Key)                           │         │
│ │                                         │         │
│ │ Signatur: a3f5b8c9d2e1f4...            │         │
│ └─────────────────────────────────────────┘         │
└─────────────────────────────────────────────────────┘

Vertrauenskette:
───────────────
[Root-CA] (im Browser vorinstalliert)
    │ signiert
    ▼
[Zwischen-CA]
    │ signiert
    ▼
[Server-Zertifikat] (example.com)

Browser prüft:
✅ Ist Signatur gültig?
✅ Ist CA vertrauenswürdig?
✅ Ist Zertifikat noch gültig?
✅ Passt Domain zum Zertifikat?

Wenn alles OK → 🔒 (Grünes Schloss)
```

## [[Bitcoin\|Bitcoin]] und Kryptowährungen

>[[Bitcoin\|Bitcoin]] basiert komplett auf asymmetrischer Verschlüsselung ([[ECDSA\|ECDSA]] - Elliptic Curve Digital Signature Algorithm).

```
┌─────────────────────────────────────────────────────────────┐
│           BITCOIN - ASYMMETRISCHE KRYPTOGRAPHIE             │
└─────────────────────────────────────────────────────────────┘

1. Wallet = Schlüsselpaar
   ─────────────────────
   Private Key (256 Bit):  5KYZdUEo39z3FPrtuX2QbbwGnNP5zTd7yyr2SC1j299sBCnWjss
   │
   │ Hash-Funktionen
   ▼
   Public Key:             04678afdb0fe5548271967f1a67130b7105cd6a828e03909...
   │
   │ Hash-Funktionen
   ▼
   Bitcoin-Adresse:        1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa

   → Deine Adresse IST dein Public Key (gehashed)!

2. Transaktion erstellen
   ──────────────────────
   Alice will 0.5 BTC an Bob senden
   │
   ├─ Nachricht: "Von Alice-Adresse an Bob-Adresse: 0.5 BTC"
   │
   └─ Signieren mit Alice's PRIVATE KEY (ECDSA)
      │
      ▼
   Signierte Transaktion → ins Bitcoin-Netzwerk

3. Validierung
   ────────────
   Jeder Knoten prüft:
   ✅ Signatur gültig? (mit Alice's Public Key = Bitcoin-Adresse)
   ✅ Hat Alice genug Bitcoin?
   ✅ Wurde die Transaktion schon ausgegeben?

   Wenn alles OK → in Block aufnehmen

🔑 Wer den Private Key hat, kontrolliert die Bitcoin!
🌍 Public Key = deine "Kontonummer"
🔒 Private Key = dein "Passwort" (NIEMALS verlieren oder teilen!)
```

# VI. Best Practices

>[!tip] Dos and Don'ts für Asymmetrische Verschlüsselung

**✅ DO:**
- **Mindestens 2048-Bit RSA** (besser 4096-Bit für Langzeitsicherheit)
- **ECC bevorzugen** wenn möglich (Curve25519, P-256)
- **Hybrid-Verschlüsselung** verwenden (RSA/ECC + AES)
- **Padding-Schemas** verwenden (OAEP für RSA, nie "raw RSA")
- **Private Keys sicher speichern** (Hardware-Token, TPM, verschlüsselte Dateien)
- **Zertifikate validieren** (Ablaufdatum, Signatur, Domain)
- **Forward Secrecy** aktivieren ([[02 - RESOURCES/Notes/Diffie-Hellman\|Diffie-Hellman]], ephemeral keys)

**❌ DON'T:**
- **Niemals Private Key teilen** oder unverschlüsselt speichern
- **Nicht direkt mit RSA große Daten verschlüsseln** (viel zu langsam!)
- **Keine 1024-Bit RSA** mehr verwenden (unsicher!)
- **Nicht ohne Padding** verschlüsseln (anfällig für Angriffe)
- **Keine eigene Krypto implementieren** (komplex, fehleranfällig)
- **Nicht selbst signierte Zertifikate** in Produktion verwenden

>[!example] RSA mit Python (richtig gemacht)
>```python
>from cryptography.hazmat.primitives.asymmetric import rsa, padding
>from cryptography.hazmat.primitives import hashes, serialization
>
># 1. Schlüsselpaar generieren
>private_key = rsa.generate_private_key(
>    public_exponent=65537,
>    key_size=2048  # Mindestens 2048 Bit!
>)
>public_key = private_key.public_key()
>
># 2. Verschlüsseln (mit OAEP Padding!)
>nachricht = b"Geheime Nachricht!"
>ciphertext = public_key.encrypt(
>    nachricht,
>    padding.OAEP(
>        mgf=padding.MGF1(algorithm=hashes.SHA256()),
>        algorithm=hashes.SHA256(),
>        label=None
>    )
>)
>print(f"Verschlüsselt: {ciphertext.hex()[:50]}...")
>
># 3. Entschlüsseln
>plaintext = private_key.decrypt(
>    ciphertext,
>    padding.OAEP(
>        mgf=padding.MGF1(algorithm=hashes.SHA256()),
>        algorithm=hashes.SHA256(),
>        label=None
>    )
>)
>print(f"Entschlüsselt: {plaintext.decode()}")
>
># 4. Schlüssel speichern (verschlüsselt!)
>from cryptography.hazmat.primitives import serialization
>
>pem = private_key.private_bytes(
>    encoding=serialization.Encoding.PEM,
>    format=serialization.PrivateFormat.PKCS8,
>    encryption_algorithm=serialization.BestAvailableEncryption(b'passwort')
>)
>with open('private_key.pem', 'wb') as f:
>    f.write(pem)
>```

# VII. Verwandte Konzepte

- [[02 - RESOURCES/Notes/Kryptographie\|Kryptographie]] - Hauptartikel
- [[02 - RESOURCES/Notes/Symmetrische Verschlüsselung\|Symmetrische Verschlüsselung]] - Die Alternative mit einem Schlüssel
- [[02 - RESOURCES/Notes/RSA\|RSA]] - Der wichtigste asymmetrische Algorithmus
- [[02 - RESOURCES/Notes/ECC\|ECC]] - Moderne Alternative mit kürzeren Schlüsseln
- [[02 - RESOURCES/Notes/Digitale Signatur\|Digitale Signatur]] - Anwendung für Authentizität
- [[PKI\|PKI]] - Public Key Infrastructure
- [[02 - RESOURCES/Notes/Zertifikat\|Zertifikat]] - Verbindet Public Key mit Identität
- [[02 - RESOURCES/Notes/TLS\|TLS]] - Verwendet asymmetrische Verschlüsselung für Handshake
- [[02 - RESOURCES/Notes/Diffie-Hellman\|Diffie-Hellman]] - Schlüsselaustausch-Protokoll
- [[öffentlicher Schlüssel\|öffentlicher Schlüssel]] - Der öffentliche Teil des Paars
- [[privater Schlüssel\|privater Schlüssel]] - Der geheime Teil des Paars

# Zusammenfassung

>[!summary] Asymmetrische Verschlüsselung in 60 Sekunden
>
>**Was:** Zwei mathematisch verbundene Schlüssel (Public + Private)
>
>**Wie:** Was mit einem verschlüsselt wird, kann nur mit dem anderen entschlüsselt werden
>
>**Vorteile:**
>- ✅ Löst Schlüsselaustausch-Problem
>- ✅ Skaliert gut (N Schlüsselpaare für N Personen)
>- ✅ Ermöglicht digitale Signaturen
>- ✅ Basis für PKI und HTTPS
>
>**Nachteile:**
>- ❌ Sehr langsam (1000x langsamer als AES)
>- ❌ Große Schlüssel nötig (2048-4096 Bit RSA)
>- ❌ Komplex (mehr Fehlerquellen)
>
>**Beste Wahl:** [[02 - RESOURCES/Notes/ECC\|ECC]] (Curve25519) oder RSA-2048+
>
>**Praxis:** Immer Hybrid (Asymmetrisch für Key-Exchange, Symmetrisch für Daten)
>
>**Merkhilfe:** Public verschlüsselt, Private entschlüsselt = Vertraulichkeit
>                Private signiert, Public prüft = Authentizität

>[!quote] 💡 Kern-Konzept
>"Asymmetrische Verschlüsselung ist wie ein Briefkasten: Jeder kann einen Brief einwerfen (Public Key), aber nur du hast den Schlüssel zum Öffnen (Private Key)!"

>[!note] [[02 - RESOURCES/Notes/Symmetrische Verschlüsselung\|Symmetrische Verschlüsselung]] ist ein Good To Know ;D
