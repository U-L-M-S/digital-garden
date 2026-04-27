---
{"dg-publish":true,"permalink":"/02-resources/notes/symmetrische-verschluesselung/","tags":["ausbildung/gfn/ap1/vorbereitung","sicherheit/it-sicherheit","sicherheit/kryptografie","kryptografie/verschlüsselung","kryptografie/symmetrisch"],"noteIcon":"","updated":"2025-11-06T16:15:48.000+01:00","dg-note-properties":{"tags":["ausbildung/gfn/ap1/vorbereitung","sicherheit/it-sicherheit","sicherheit/kryptografie","kryptografie/verschlüsselung","kryptografie/symmetrisch"],"aliases":["symmetric encryption","shared-key encryption","geheimer Schlüssel"],"links":null,"created_date":"2024-11-02"}}
---

>Symmetrische Verschlüsselung ist ein Verfahren, bei dem <mark style="background: #ABF7F7A6;">Sender und Empfänger denselben geheimen Schlüssel verwenden</mark>, um Daten zu verschlüsseln und zu entschlüsseln.
>>Stell dir vor, du und dein Freund habt denselben Tresor-Code - wer den Code kennt, kann den Tresor öffnen UND verschließen. Genau so funktioniert symmetrische [[02 - RESOURCES/Notes/Kryptographie\|Kryptographie]].

# I. Das Grundprinzip

>Bei [[02 - RESOURCES/Notes/Symmetrische Verschlüsselung\|symmetrischer Verschlüsselung]] gibt es nur EINEN [[Schlüssel\|Schlüssel]] für beide Richtungen: [[02 - RESOURCES/Notes/Verschlüsselung\|Verschlüsselung]] und [[02 - RESOURCES/Notes/Entschlüsselung\|Entschlüsselung]].

```
┌─────────────────────────────────────────────────────────────┐
│                 SYMMETRISCHE VERSCHLÜSSELUNG                 │
└─────────────────────────────────────────────────────────────┘

    [Alice]                                        [Bob]
       │                                              │
       │ Geheimer Schlüssel: K                       │ Geheimer Schlüssel: K
       │ (beide haben denselben!)                    │ (beide haben denselben!)
       │                                              │
       ▼                                              ▼
   ┌────────┐         Verschlüsselter         ┌────────┐
   │Klartext│         Kanal (unsicher)         │Klartext│
   │"Hallo" │  ──────────────────────────────▶ │"Hallo" │
   └────────┘                                   └────────┘
       │                                              ▲
       │ Verschlüsseln mit K                          │ Entschlüsseln mit K
       ▼                                              │
   ┌────────┐                                   ┌────────┐
   │Cipher  │  ───────── Internet ───────────▶ │Cipher  │
   │"X7mP2" │     (Angreifer sieht nur         │"X7mP2" │
   └────────┘      verschlüsselten Text)       └────────┘
```

>[!important] Der entscheidende Punkt
>**Gleicher Schlüssel = Symmetrisch**
>- Alice verschlüsselt mit Schlüssel K
>- Bob entschlüsselt mit demselben Schlüssel K
>- Wenn Mallory (Angreifer) K nicht kennt, kann sie nichts lesen

## Abgedeckte Sicherheitsbausteine

**1. [[02 - RESOURCES/Notes/Vertraulichkeit\|Vertraulichkeit]]:**
- Nur diejenigen mit dem geheimen [[Schlüssel\|Schlüssel]] können auf verschlüsselte Daten zugreifen
- Unbefugter Zugriff wird verhindert

**2. [[02 - RESOURCES/Notes/Integrität\|Integrität]]:**
- Verschlüsselter Austausch erschwert Manipulation der Daten
- Sichert die [[02 - RESOURCES/Notes/Integrität\|Integrität]] der Informationen

**3. Schnelligkeit:**
- Nur ein [[Schlüssel\|Schlüssel]] und recheneffizienter [[02 - RESOURCES/Notes/Algorithmus\|Algorithmus]]
- Besonders nützlich für große Datenmengen
- 1000x schneller als [[02 - RESOURCES/Notes/Asymmetrische Verschlüsselung\|Asymmetrische Verschlüsselung]]

# II. Wie funktioniert's? (vereinfacht)

>Symmetrische Verschlüsselung kombiniert deine Daten mit dem [[Schlüssel\|Schlüssel]] durch mathematische Operationen, die ohne [[Schlüssel\|Schlüssel]] praktisch nicht umkehrbar sind.

## Einfaches Beispiel: XOR-Verschlüsselung

```python
# Grundprinzip der symmetrischen Verschlüsselung (stark vereinfacht!)
def encrypt(plaintext, key):
    """Verschlüssele Text mit XOR"""
    ciphertext = ""
    for i in range(len(plaintext)):
        # XOR zwischen Zeichen und Schlüssel
        char_code = ord(plaintext[i]) ^ ord(key[i % len(key)])
        ciphertext += chr(char_code)
    return ciphertext

def decrypt(ciphertext, key):
    """Entschlüssele - exakt dieselbe Operation!"""
    return encrypt(ciphertext, key)  # XOR ist symmetrisch!

# Verwendung
key = "GEHEIM"
nachricht = "Hallo Welt"

# Verschlüsseln
verschlüsselt = encrypt(nachricht, key)
print(f"Verschlüsselt: {repr(verschlüsselt)}")  # Unlesbarer Text

# Entschlüsseln
entschlüsselt = decrypt(verschlüsselt, key)
print(f"Entschlüsselt: {entschlüsselt}")  # "Hallo Welt"
```

**Output:**
```
Verschlüsselt: '\x0f\x02\x1d\x1f\x18O\r\x02\x1d\x1b'
Entschlüsselt: Hallo Welt
```

>[!warning] Nur zur Demonstration!
>XOR allein ist NICHT sicher! Moderne Algorithmen wie [[02 - RESOURCES/Notes/AES\|AES]] sind viel komplexer und verwenden multiple Runden mit Substitutionen, Permutationen und komplexen mathematischen Operationen.

# III. Die beiden Familien: Block vs Stream

>Symmetrische Verschlüsselung teilt sich in zwei Hauptkategorien: [[Block-Chiffre\|Block-Chiffre]]n und [[Stream-Chiffre\|Stream-Chiffre]]n.

```
┌───────────────────────────────────────────────────────────────┐
│          SYMMETRISCHE VERSCHLÜSSELUNG - FAMILIEN              │
└───────────────────────────────────────────────────────────────┘

┌──────────────────────────┐      ┌──────────────────────────┐
│    BLOCK-CHIFFREN        │      │    STREAM-CHIFFREN       │
└──────────────────────────┘      └──────────────────────────┘
          │                                    │
          │                                    │
  Verschlüsselt                       Verschlüsselt
  in festen Blöcken                   Bit für Bit / Byte für Byte
  (z.B. 128 Bit)                      (kontinuierlicher Strom)
          │                                    │
          │                                    │
    ┌─────▼─────┐                        ┌─────▼─────┐
    │   Block   │                        │  Byte 1   │
    │ 128 Bit   │                        │  Byte 2   │
    │           │                        │  Byte 3   │
    │ Dann      │                        │  Byte 4   │
    │ nächster  │                        │    ...    │
    │   Block   │                        │ (Endlos)  │
    │ 128 Bit   │                        └───────────┘
    └───────────┘

    Beispiele:                         Beispiele:
    • AES                              • ChaCha20
    • DES                              • RC4 (unsicher!)
    • 3DES                             • Salsa20
    • Blowfish                         • AES-CTR (Block als Stream)
```

## Vergleich: Block vs Stream

| Eigenschaft | [[Block-Chiffre\|Block-Chiffre]] | [[Stream-Chiffre\|Stream-Chiffre]] |
|-------------|-------------------|---------------------|
| **Verarbeitung** | Feste Blöcke (64, 128, 256 Bit) | Bit/Byte für Bit/Byte |
| **Geschwindigkeit** | Gut in Hardware | Oft schneller in Software |
| **Padding** | Nötig wenn Daten nicht Blockgröße | Nicht nötig |
| **Fehlerfortpflanzung** | Ein Fehler betrifft nur einen Block | Fehler kann sich fortpflanzen |
| **Verwendung** | Dateiverschlüsselung, Festplatten | Streaming, Echtzeit-Kommunikation |
| **Beispiele** | [[02 - RESOURCES/Notes/AES\|AES]], [[DES\|DES]] | [[ChaCha20\|ChaCha20]], [[02 - RESOURCES/Notes/RC4\|RC4]] |

# IV. Die wichtigsten Algorithmen

## [[02 - RESOURCES/Notes/AES\|AES]] - Der Goldstandard

>[[02 - RESOURCES/Notes/AES\|AES]] (Advanced Encryption Standard) ist der weltweit am meisten verwendete symmetrische Algorithmus. Wurde 2001 als US-Standard gewählt und gilt als unknackbar.

```
┌─────────────────────────────────────────────────────────┐
│                 AES VERSCHLÜSSELUNG                      │
│                  (128 Bit Block)                         │
└─────────────────────────────────────────────────────────┘

Input: 128 Bit Klartext + 128/192/256 Bit Schlüssel

    ┌──────────────────┐
    │  Klartext Block  │  "Hallo Welt!!!!"
    │    (128 Bit)     │  (16 Bytes)
    └────────┬─────────┘
             │
             ▼
    ┌──────────────────┐
    │ Initial Round    │  XOR mit Rundenschlüssel
    │   (AddRoundKey)  │
    └────────┬─────────┘
             │
        ┌────▼────┐
        │ Runde 1 │────┐
        └────┬────┘    │
             │         │ SubBytes (Substitution)
        ┌────▼────┐    │ ShiftRows (Verschiebung)
        │ Runde 2 │    │ MixColumns (Durchmischung)
        └────┬────┘    │ AddRoundKey (XOR mit Schlüssel)
             │         │
        ┌────▼────┐    │
        │   ...   │────┘
        └────┬────┘     (10/12/14 Runden je nach Schlüssellänge)
             │
        ┌────▼────┐
        │Final Rnd│
        └────┬────┘
             │
             ▼
    ┌──────────────────┐
    │ Chiffretext Block│  "X7mP2kL9..."
    │    (128 Bit)     │  (unlesbarer Kauderwelsch)
    └──────────────────┘
```

**AES-Varianten:**

| Variante | Schlüssellänge | Runden | Sicherheit | Verwendung |
|----------|----------------|---------|------------|------------|
| **AES-128** | 128 Bit | 10 | Sehr hoch | Standard, schnellste Variante |
| **AES-192** | 192 Bit | 12 | Extrem hoch | Selten verwendet |
| **AES-256** | 256 Bit | 14 | Maximum | Hochsicherheit, Regierungen |

>[!example] AES in Python
>```python
>from cryptography.hazmat.primitives.ciphers import Cipher, algorithms, modes
>from cryptography.hazmat.backends import default_backend
>import os
>
># 256-Bit Schlüssel (32 Bytes)
>key = os.urandom(32)
>
># Initialization Vector (IV) - muss zufällig sein!
>iv = os.urandom(16)
>
># AES im CBC-Modus
>cipher = Cipher(
>    algorithms.AES(key),
>    modes.CBC(iv),
>    backend=default_backend()
>)
>
># Verschlüsseln
>encryptor = cipher.encryptor()
>klartext = b"Geheime Nachricht!" + b" " * 14  # Padding auf 32 Bytes
>chiffretext = encryptor.update(klartext) + encryptor.finalize()
>
>print(f"Verschlüsselt: {chiffretext.hex()}")
>
># Entschlüsseln
>decryptor = cipher.decryptor()
>entschlüsselt = decryptor.update(chiffretext) + decryptor.finalize()
>print(f"Entschlüsselt: {entschlüsselt.decode().strip()}")
>```

## [[DES\|DES]] und [[3DES\|3DES]] - Die Veteranen

>[[DES\|DES]] (Data Encryption Standard) war von 1977-2001 der Standard, ist aber heute unsicher wegen zu kurzer [[Schlüssel\|Schlüssel]].

```
┌──────────────────────────────────────────────────────────┐
│              DES vs 3DES vs AES                          │
└──────────────────────────────────────────────────────────┘

DES (1977):
┌─────────┐    ┌─────────┐    ┌──────────┐
│ Klartext│ ──▶│56-Bit   │ ──▶│Chiffretext│
│ 64 Bit  │    │Schlüssel│    │ 64 Bit   │
└─────────┘    └─────────┘    └──────────┘
   ❌ UNSICHER - zu kurzer Schlüssel!

3DES (Triple-DES):
┌─────────┐   ┌────┐   ┌────┐   ┌────┐   ┌──────────┐
│ Klartext│──▶│DES1│──▶│DES2│──▶│DES3│──▶│Chiffretext│
└─────────┘   └────┘   └────┘   └────┘   └──────────┘
              Key1    Key2    Key3
              ⚠️ Veraltet - verwende AES!

AES (2001):
┌─────────┐    ┌─────────┐    ┌──────────┐
│ Klartext│ ──▶│128-256  │ ──▶│Chiffretext│
│ 128 Bit │    │Bit Key  │    │ 128 Bit  │
└─────────┘    └─────────┘    └──────────┘
   ✅ MODERN und SICHER!
```

## [[ChaCha20\|ChaCha20]] - Der moderne Stream-Cipher

>[[ChaCha20\|ChaCha20]] ist ein moderner [[Stream-Chiffre\|Stream-Chiffre]], der oft als Alternative zu [[02 - RESOURCES/Notes/AES\|AES]] verwendet wird, besonders auf mobilen Geräten.

**Vorteile von ChaCha20:**
- Sehr schnell auf CPUs ohne AES-Hardware-Beschleunigung
- Einfacher zu implementieren als [[02 - RESOURCES/Notes/AES\|AES]]
- Resistent gegen Timing-Angriffe
- Verwendet in [[02 - RESOURCES/Notes/TLS\|TLS]], [[02 - RESOURCES/Notes/WireGuard\|WireGuard]], [[02 - RESOURCES/Notes/ssh\|SSH]]

# V. Betriebsmodi - Wie verschlüsselt man mehr als einen Block?

>[[Block-Chiffre\|Block-Chiffre]]n wie [[02 - RESOURCES/Notes/AES\|AES]] verschlüsseln nur 128 Bit auf einmal. Aber was, wenn deine Datei mehrere Megabyte groß ist? Hier kommen [[Betriebsmodus\|Betriebsmodi]] ins Spiel.

## [[ECB\|ECB]] - Electronic Codebook (UNSICHER!)

```
┌─────────────────────────────────────────────────────────┐
│           ECB MODE - NIEMALS VERWENDEN!                 │
└─────────────────────────────────────────────────────────┘

Klartext:    [Block 1] [Block 2] [Block 3] [Block 4]
                │         │         │         │
                │ Key     │ Key     │ Key     │ Key
                ▼         ▼         ▼         ▼
             ┌─────┐   ┌─────┐   ┌─────┐   ┌─────┐
             │ AES │   │ AES │   │ AES │   │ AES │
             └──┬──┘   └──┬──┘   └──┬──┘   └──┬──┘
                │         │         │         │
Chiffre:   [Cipher1] [Cipher2] [Cipher3] [Cipher4]

❌ PROBLEM: Gleiche Klartext-Blöcke → gleiche Chiffre-Blöcke!
   Muster im Klartext bleiben sichtbar!
```

>[!danger] ECB-Mode Disaster
>Berühmtes Beispiel: Ein Bild mit ECB verschlüsselt behält seine Konturen!
>
>Original-Bild → ECB-Verschlüsselt → Man erkennt IMMER NOCH das Motiv!
>
>**NIEMALS ECB verwenden!**

## [[CBC\|CBC]] - Cipher Block Chaining (Standard)

```
┌─────────────────────────────────────────────────────────┐
│               CBC MODE - SICHER                         │
└─────────────────────────────────────────────────────────┘

  IV (Initialization Vector - zufällig!)
  │
  ▼
┌───┐     Block 1
│XOR│◀─── [Klartext]
└─┬─┘
  │ Key
  ▼
┌─────┐
│ AES │
└──┬──┘
   │
   ├──────────▶ [Cipher 1]
   │
   │     Block 2
   ▼
 ┌───┐     [Klartext]
 │XOR│◀────
 └─┬─┘
   │ Key
   ▼
 ┌─────┐
 │ AES │
 └──┬──┘
    │
    ├──────────▶ [Cipher 2]
    │
    └──▶ (verketten mit nächstem Block...)

✅ Jeder Block hängt vom vorherigen ab
✅ Gleiche Klartext-Blöcke → unterschiedliche Chiffre-Blöcke
⚠️ Braucht Padding bei letztem Block
⚠️ IV muss zufällig sein!
```

## [[CTR\|CTR]] - Counter Mode (modern)

```
┌─────────────────────────────────────────────────────────┐
│           CTR MODE - Block-Cipher als Stream            │
└─────────────────────────────────────────────────────────┘

Nonce + Counter 0    Nonce + Counter 1    Nonce + Counter 2
       │                    │                    │
       │ Key                │ Key                │ Key
       ▼                    ▼                    ▼
    ┌─────┐              ┌─────┐              ┌─────┐
    │ AES │              │ AES │              │ AES │
    └──┬──┘              └──┬──┘              └──┬──┘
       │                    │                    │
    ┌──▼──┐              ┌──▼──┐              ┌──▼──┐
    │ XOR │◀─Block 1     │ XOR │◀─Block 2     │ XOR │◀─Block 3
    └──┬──┘              └──┬──┘              └──┬──┘
       │                    │                    │
    [Cipher1]           [Cipher2]           [Cipher3]

✅ Kann parallel verschlüsseln (schnell!)
✅ Kein Padding nötig
✅ Random Access möglich
⚠️ Nonce + Counter darf sich NIEMALS wiederholen!
```

## [[GCM\|GCM]] - Galois/Counter Mode (BESTE Wahl!)

>[[GCM\|GCM]] kombiniert [[CTR\|CTR]]-Modus mit Authentifizierung - du bekommst [[02 - RESOURCES/Notes/Vertraulichkeit\|Vertraulichkeit]] UND [[02 - RESOURCES/Notes/Integrität\|Integrität]]!

```
┌─────────────────────────────────────────────────────────┐
│       GCM MODE - Verschlüsselung + Authentifizierung    │
└─────────────────────────────────────────────────────────┘

                    ┌──────────────┐
                    │   AES-GCM    │
                    └──────┬───────┘
                           │
        ┌──────────────────┼──────────────────┐
        │                  │                  │
        ▼                  ▼                  ▼
  Verschlüsselung    Authentifizierungs-   Zusätzliche
  (wie CTR-Mode)     Tag (GMAC)            Daten (AAD)
        │                  │                  │
        │                  │                  │
        ▼                  ▼                  ▼
    [Chiffretext]    [Auth-Tag]         [Metadata]
                       128 Bit

✅ Verschlüsselung + Integrität in einem
✅ Sehr schnell (parallelisierbar)
✅ Erkennt Manipulation automatisch
✅ Standard für TLS 1.3, WireGuard, IPsec

Bei Entschlüsselung:
  1. Prüfe Auth-Tag
  2. Wenn Tag falsch → ABBRUCH, Daten manipuliert!
  3. Wenn Tag OK → Entschlüsseln
```

# VI. Vor- und Nachteile

## Vorteile ✅

>[!success] Warum Symmetrische Verschlüsselung großartig ist
>
>**1. Geschwindigkeit**
>- [[02 - RESOURCES/Notes/AES\|AES]]-Hardware-Beschleunigung in modernen CPUs
>- Kann mehrere GB/s verschlüsseln
>- 1000x schneller als [[02 - RESOURCES/Notes/RSA\|RSA]]
>
>**2. Einfachheit**
>- Konzept ist einfach: Ein Schlüssel für beide Richtungen
>- Weniger mathematische Komplexität als [[02 - RESOURCES/Notes/Asymmetrische Verschlüsselung\|Asymmetrische Verschlüsselung]]
>
>**3. Bewährte Sicherheit**
>- [[02 - RESOURCES/Notes/AES\|AES]] seit 20+ Jahren ohne erfolgreiche Angriffe
>- Wird von Regierungen für TOP SECRET verwendet
>
>**4. Geringe Ressourcen**
>- Funktioniert auf schwachen Geräten (IoT, Smartcards)
>- Kleiner Schlüssel (128-256 Bit) für hohe Sicherheit

## Nachteile ❌

>[!warning] Die Schwachstellen
>
>**1. Schlüsselaustausch-Problem**
>- Wie bekommt Bob sicher den Schlüssel von Alice?
>- Kann nicht über unsicheren Kanal geschickt werden
>- Lösung: [[02 - RESOURCES/Notes/Diffie-Hellman\|Diffie-Hellman]] oder [[02 - RESOURCES/Notes/Asymmetrische Verschlüsselung\|Asymmetrische Verschlüsselung]]
>
>**2. Skalierungsproblem**
>- N Personen brauchen $\frac{N \times (N-1)}{2}$ Schlüssel!
>- 10 Personen = 45 Schlüssel
>- 100 Personen = 4.950 Schlüssel
>- 1000 Personen = 499.500 Schlüssel
>
>**3. Keine Nicht-Abstreitbarkeit**
>- Beide kennen den Schlüssel
>- Kann nicht beweisen, WER verschlüsselt hat
>- Für digitale Signaturen: [[02 - RESOURCES/Notes/Asymmetrische Verschlüsselung\|Asymmetrische Verschlüsselung]] nötig

```
┌─────────────────────────────────────────────────────────┐
│         SCHLÜSSELVERWALTUNG - DAS PROBLEM               │
└─────────────────────────────────────────────────────────┘

Szenario: 5 Personen wollen alle miteinander kommunizieren

    Alice ←──────────→ Bob       (1 Schlüssel)
    Alice ←──────────→ Charlie   (1 Schlüssel)
    Alice ←──────────→ Dave      (1 Schlüssel)
    Alice ←──────────→ Eve       (1 Schlüssel)
    Bob   ←──────────→ Charlie   (1 Schlüssel)
    Bob   ←──────────→ Dave      (1 Schlüssel)
    Bob   ←──────────→ Eve       (1 Schlüssel)
    Charlie ←────────→ Dave      (1 Schlüssel)
    Charlie ←────────→ Eve       (1 Schlüssel)
    Dave  ←──────────→ Eve       (1 Schlüssel)

    Gesamt: 10 verschiedene Schlüssel!

Formel: n × (n-1) / 2
- 5 Personen = 10 Schlüssel
- 10 Personen = 45 Schlüssel
- 100 Personen = 4.950 Schlüssel
- 1000 Personen = 499.500 Schlüssel

→ Das ist das große Problem der Symmetrischen Verschlüsselung!
```

# VII. Real-World Anwendungen

## HTTPS/TLS - Hybrid-Ansatz

>Moderne Systeme kombinieren [[02 - RESOURCES/Notes/Symmetrische Verschlüsselung\|Symmetrische Verschlüsselung]] und [[02 - RESOURCES/Notes/Asymmetrische Verschlüsselung\|Asymmetrische Verschlüsselung]]: Das Beste aus beiden Welten!

```
┌─────────────────────────────────────────────────────────┐
│              TLS HANDSHAKE - HYBRID                      │
└─────────────────────────────────────────────────────────┘

Phase 1: Schlüsselaustausch (ASYMMETRISCH)
─────────────────────────────────────────────
Browser                                  Server
  │                                        │
  │  1. "Hallo, ich will verschlüsseln"   │
  ├──────────────────────────────────────▶│
  │                                        │
  │  2. Zertifikat + Public Key (RSA)     │
  │◀──────────────────────────────────────┤
  │                                        │
  │  3. Zufallszahl verschlüsselt         │
  │     mit Public Key                     │
  ├──────────────────────────────────────▶│
  │                                        │
  │ Beide berechnen Session-Key           │
  │ (symmetrisch, AES-256)                 │
  │                                        │

Phase 2: Datenübertragung (SYMMETRISCH)
─────────────────────────────────────────────
  │                                        │
  │  HTTP-Daten verschlüsselt mit AES-GCM │
  │◀──────────────────────────────────────▶│
  │                                        │
  │  ✅ Schnell: AES ist 1000x schneller!  │
  │  ✅ Sicher: Key nur für diese Session  │

Warum Hybrid?
- Asymmetrisch für Schlüsselaustausch (langsam, aber löst das Problem)
- Symmetrisch für Daten (schnell, effizient)
```

## Festplattenverschlüsselung

>[[02 - RESOURCES/Notes/BitLocker\|BitLocker]], [[LUKS\|LUKS]], [[FileVault\|FileVault]] - alle verwenden [[02 - RESOURCES/Notes/AES\|AES]] für Festplattenverschlüsselung.

**Warum symmetrisch?**
- Muss Millionen Blöcke pro Sekunde ver-/entschlüsseln
- [[02 - RESOURCES/Notes/Asymmetrische Verschlüsselung\|Asymmetrische Verschlüsselung]] wäre viel zu langsam
- Nur du kennst das Passwort → nur ein Schlüssel nötig

```python
# Konzept: Festplattenverschlüsselung (vereinfacht)
import hashlib
import os

# Beim Einrichten:
passwort = "SuperGeheim123!"
salt = os.urandom(32)

# Schlüssel aus Passwort ableiten (PBKDF2)
key = hashlib.pbkdf2_hmac('sha256', passwort.encode(), salt, 100000, 32)

# Beim Lesen/Schreiben:
# Sektor 1234 lesen → mit AES-XTS entschlüsseln → an OS geben
# OS will schreiben → mit AES-XTS verschlüsseln → auf Disk schreiben

# Alles passiert transparent im Hintergrund!
```

## VPN-Tunnel

>[[02 - RESOURCES/Notes/WireGuard\|WireGuard]], [[02 - RESOURCES/Notes/OpenVPN\|OpenVPN]], [[02 - RESOURCES/Notes/IPSec\|IPsec]] - alle verwenden symmetrische Verschlüsselung für den eigentlichen Datentunnel.

**WireGuard-Beispiel:**
- [[ChaCha20\|ChaCha20]]-Poly1305 für Verschlüsselung
- Extrem schnell auf allen Geräten
- Schlüsselaustausch mit [[Curve25519\|Curve25519]] (asymmetrisch)
- Dann alles symmetrisch verschlüsselt

# VIII. Best Practices

>[!tip] Dos and Don'ts

**✅ DO:**
- **Verwende [[AES-GCM\|AES-GCM]]** für neue Projekte (Verschlüsselung + Authentifizierung)
- **256-Bit Schlüssel** für AES (außer bei Hochgeschwindigkeit)
- **Zufällige IVs/Nonces** generieren für jeden Verschlüsselungsvorgang
- **Etablierte Bibliotheken** verwenden (OpenSSL, libsodium, cryptography)
- **Schlüssel ableiten** mit PBKDF2, scrypt oder Argon2 aus Passwörtern

**❌ DON'T:**
- **Niemals ECB-Mode** verwenden
- **Niemals IV/Nonce wiederverwenden** im selben Schlüssel-Kontext
- **Keine selbstgebaute Krypto** (Don't roll your own crypto!)
- **Nicht [[DES\|DES]] oder [[3DES\|3DES]]** verwenden (veraltet)
- **Schlüssel nicht hardcoden** im Code

>[!example] Sichere Implementierung in Python
>```python
>from cryptography.hazmat.primitives.ciphers.aead import AESGCM
>import os
>
># RICHTIG: AES-GCM verwenden
>def encrypt_message(plaintext: bytes, key: bytes) -> tuple:
>    """Verschlüsselt mit AES-GCM (Authentifizierte Verschlüsselung)"""
>    # Zufällige Nonce generieren (12 Bytes für GCM)
>    nonce = os.urandom(12)
>
>    # AES-GCM Cipher erstellen
>    aesgcm = AESGCM(key)
>
>    # Verschlüsseln (berechnet auch Auth-Tag)
>    ciphertext = aesgcm.encrypt(nonce, plaintext, None)
>
>    # Gib Nonce + Ciphertext zurück (Nonce muss bekannt sein zum Entschlüsseln)
>    return nonce, ciphertext
>
>def decrypt_message(nonce: bytes, ciphertext: bytes, key: bytes) -> bytes:
>    """Entschlüsselt und prüft Authentizität"""
>    aesgcm = AESGCM(key)
>
>    # Wirft Exception wenn manipuliert!
>    try:
>        plaintext = aesgcm.decrypt(nonce, ciphertext, None)
>        return plaintext
>    except Exception:
>        raise ValueError("Nachricht wurde manipuliert oder falscher Schlüssel!")
>
># Verwendung
>key = AESGCM.generate_key(bit_length=256)  # 32 Bytes
>message = b"Geheime Nachricht!"
>
># Verschlüsseln
>nonce, encrypted = encrypt_message(message, key)
>print(f"Verschlüsselt: {encrypted.hex()}")
>
># Entschlüsseln
>decrypted = decrypt_message(nonce, encrypted, key)
>print(f"Entschlüsselt: {decrypted.decode()}")
>```

# IX. Verwandte Konzepte

- [[02 - RESOURCES/Notes/Kryptographie\|Kryptographie]] - Hauptartikel
- [[02 - RESOURCES/Notes/Asymmetrische Verschlüsselung\|Asymmetrische Verschlüsselung]] - Die Alternative mit zwei Schlüsseln
- [[02 - RESOURCES/Notes/AES\|AES]] - Der wichtigste symmetrische Algorithmus
- [[Block-Chiffre\|Block-Chiffre]] - Verschlüsselung in Blöcken
- [[Stream-Chiffre\|Stream-Chiffre]] - Verschlüsselung als Strom
- [[Betriebsmodus\|Betriebsmodus]] - Wie man mehrere Blöcke verschlüsselt
- [[GCM\|GCM]] - Bester Betriebsmodus (mit Authentifizierung)
- [[Schlüssel\|Schlüssel]] - Das Geheimnis
- [[Schlüsselaustausch\|Schlüsselaustausch]] - Das große Problem
- [[02 - RESOURCES/Notes/Diffie-Hellman\|Diffie-Hellman]] - Lösung für Schlüsselaustausch
- [[02 - RESOURCES/Notes/TLS\|TLS]] - Verwendet Hybrid-Verschlüsselung

# Zusammenfassung

>[!summary] Symmetrische Verschlüsselung in 60 Sekunden
>
>**Was:** Ein Schlüssel für Verschlüsseln UND Entschlüsseln
>
>**Vorteile:**
>- ⚡ Extrem schnell (1000x schneller als RSA)
>- 🔒 Sehr sicher bei korrekter Anwendung
>- 💻 Wenig Rechenleistung nötig
>
>**Nachteile:**
>- ❌ Schlüsselaustausch-Problem (wie Key sicher übertragen?)
>- ❌ Skalierungsproblem (N Personen = N²/2 Schlüssel)
>
>**Beste Wahl:** [[AES-GCM\|AES-GCM]] mit 256-Bit Schlüssel
>
>**Merkhilfe:** Symmetrisch = Gleicher Schlüssel = Schnell aber Schlüsselaustausch schwierig

>[!quote] 💡 Kern-Konzept
>"Symmetrische Verschlüsselung ist wie ein gemeinsamer Tresor-Code: Super schnell und sicher, aber beide müssen den Code kennen - und WIE bekommt man ihn sicher hin?"

>[!note] [[02 - RESOURCES/Notes/Asymmetrische Verschlüsselung\|Asymmetrische Verschlüsselung]] ist ein Good To Know ;D
