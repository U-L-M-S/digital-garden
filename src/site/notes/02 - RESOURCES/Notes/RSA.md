---
{"dg-publish":true,"permalink":"/02-resources/notes/rsa/","tags":["algorithmus","kryptografie/encryption","kryptografie/decryption","sicherheit/it-sicherheit","ausbildung/gfn/ap1/vorbereitung"],"noteIcon":"","updated":"2025-11-06T13:43:03.328+01:00"}
---

>**RSA** ist ein [[02 - RESOURCES/Notes/Asymmetrische Verschlüsselung\|asymmetrischer Verschlüsselungsalgorithmus]], der auf der mathematischen Schwierigkeit basiert, große Zahlen in ihre Primfaktoren zu zerlegen.
>>Entwickelt von **Ron Rivest (R)**, **Adi Shamir (S)** und **Leonard Adleman (A)** im Jahr 1977.

>[!important] Warum RSA wichtig ist
>RSA ist einer der **meist verwendeten Verschlüsselungsalgorithmen** weltweit und bildet die Grundlage für:
>- HTTPS/SSL/TLS (sichere Webkommunikation)
>- Digitale Signaturen
>- E-Mail-Verschlüsselung (PGP)
>- Sichere Datenübertragung

---

# Grundprinzip: Asymmetrische Verschlüsselung

>RSA verwendet ein **Schlüsselpaar**:
>- **Public Key (Öffentlicher Schlüssel)**: Zum Verschlüsseln, kann frei verteilt werden
>- **Private Key (Privater Schlüssel)**: Zum Entschlüsseln, muss geheim bleiben

**Prinzip:**
```
Alice                            Bob
  │                               │
  │  1. Bob erstellt Schlüsselpaar│
  │  ◄────────────────────────────│
  │                               │
  │     Public Key (öffentlich)   │
  │  ────────────────────────────►│
  │                               │
  │  2. Alice verschlüsselt mit   │
  │     Bobs Public Key           │
  │  ────────────────────────────►│
  │                               │
  │  3. Bob entschlüsselt mit     │
  │     seinem Private Key        │
  │                               │
```

>[!tip] Vorteil
>Alice und Bob müssen **keinen gemeinsamen geheimen Schlüssel** austauschen!

---

# Wie funktioniert RSA?

## Mathematische Grundlage

>RSA basiert auf der **Primfaktorzerlegung**: Es ist einfach, zwei Primzahlen zu multiplizieren, aber sehr schwer, das Produkt wieder in die Primfaktoren zu zerlegen.

**Beispiel:**
```
Einfach:      17 × 19 = 323
Schwierig:    323 = ? × ?
```

Bei sehr großen Zahlen (2048-4096 Bit) ist die Faktorisierung **praktisch unmöglich** mit heutiger Technologie.

## RSA-Schlüsselerzeugung (Schritt-für-Schritt)

**1. Zwei große Primzahlen wählen**
```
p = 61
q = 53
```

**2. Modulus n berechnen**
```
n = p × q = 61 × 53 = 3233
```

**3. Eulersche Phi-Funktion berechnen**
```
φ(n) = (p - 1) × (q - 1)
φ(n) = 60 × 52 = 3120
```

**4. Öffentlichen Exponenten e wählen**
```
e muss teilerfremd zu φ(n) sein
Typische Werte: 3, 17, 65537
Wir wählen: e = 17
```

**5. Privaten Exponenten d berechnen**
```
d ist das multiplikative Inverse von e mod φ(n)
d × e ≡ 1 mod φ(n)
d = 2753
```

**Ergebnis:**
- **Public Key**: (n=3233, e=17)
- **Private Key**: (n=3233, d=2753)

---

# Verschlüsselung und Entschlüsselung

## Verschlüsselung

>**Formel**: `C = M^e mod n`

**Beispiel**: Nachricht M = 123 verschlüsseln
```
C = 123^17 mod 3233
C = 855
```

## Entschlüsselung

>**Formel**: `M = C^d mod n`

**Beispiel**: Ciphertext C = 855 entschlüsseln
```
M = 855^2753 mod 3233
M = 123 ✓
```

---

# Visualisierung: RSA-Kommunikation

```
┌─────────────────────────────────────────────────────────┐
│                   Alice                                 │
│                                                         │
│  1. Klartext: "HALLO"  → ASCII: 72,65,76,76,79        │
│                                                         │
│  2. Verschlüsseln mit Bobs Public Key (e, n):         │
│     C₁ = 72^e mod n                                    │
│     C₂ = 65^e mod n                                    │
│     ... (für jeden Buchstaben)                         │
│                                                         │
│  3. Senden: [verschlüsselte Daten]                    │
│     ───────────────────────────────────►               │
└─────────────────────────────────────────────────────────┘

                         Internet
                   (kann abgefangen werden,
                    aber nicht entschlüsselt!)

┌─────────────────────────────────────────────────────────┐
│                     Bob                                 │
│                                                         │
│  4. Empfangen: [verschlüsselte Daten]                  │
│                                                         │
│  5. Entschlüsseln mit Private Key (d, n):              │
│     M₁ = C₁^d mod n = 72                               │
│     M₂ = C₂^d mod n = 65                               │
│     ... (für jeden Block)                              │
│                                                         │
│  6. Klartext: "HALLO"                                  │
└─────────────────────────────────────────────────────────┘
```

---

# RSA-Schlüsselgrößen

| Schlüsselgröße | Sicherheit | Verwendung |
|----------------|------------|------------|
| **1024 Bit** | ❌ Veraltet | Nicht mehr sicher |
| **2048 Bit** | ✅ Aktuell empfohlen | Standard für HTTPS |
| **3072 Bit** | ✅✅ Sehr sicher | Erhöhte Sicherheit |
| **4096 Bit** | ✅✅✅ Maximal | Hochsicherheitsanwendungen |

>[!important] Empfehlung
>Mindestens **2048 Bit** verwenden! 1024 Bit gilt als **unsicher**.

---

# Praktisches Code-Beispiel (Python)

## RSA-Schlüsselpaar generieren

```python
from Crypto.PublicKey import RSA
from Crypto.Cipher import PKCS1_OAEP
import base64

# 1. Schlüsselpaar generieren
key = RSA.generate(2048)
private_key = key.export_key()
public_key = key.publickey().export_key()

print("=== Public Key ===")
print(public_key.decode())
print("\n=== Private Key ===")
print(private_key.decode())

# Schlüssel in Dateien speichern
with open('private.pem', 'wb') as f:
    f.write(private_key)

with open('public.pem', 'wb') as f:
    f.write(public_key)
```

## Verschlüsselung

```python
# Public Key laden
with open('public.pem', 'rb') as f:
    public_key = RSA.import_key(f.read())

# Verschlüsseln
cipher = PKCS1_OAEP.new(public_key)
message = b"Geheime Nachricht!"
ciphertext = cipher.encrypt(message)

# Base64-kodieren für Anzeige
encoded = base64.b64encode(ciphertext)
print(f"Verschlüsselt: {encoded.decode()}")
```

## Entschlüsselung

```python
# Private Key laden
with open('private.pem', 'rb') as f:
    private_key = RSA.import_key(f.read())

# Entschlüsseln
cipher = PKCS1_OAEP.new(private_key)
decrypted = cipher.decrypt(ciphertext)

print(f"Entschlüsselt: {decrypted.decode()}")
```

**Output:**
```
Verschlüsselt: k2nX8vZ... (langer Base64-String)
Entschlüsselt: Geheime Nachricht!
```

---

# Digitale Signaturen mit RSA

>RSA kann auch für **digitale Signaturen** verwendet werden - der Prozess ist **umgekehrt**!

**Signieren (mit Private Key):**
```
Signature = Hash(Message)^d mod n
```

**Verifizieren (mit Public Key):**
```
Hash(Message) == Signature^e mod n
```

**Visualisierung:**
```
┌─────────────┐
│    Alice    │
│             │
│ 1. Nachricht│
│ 2. Hash     │
│ 3. Mit      │
│    Private  │
│    Key      │
│    signieren│
└──────┬──────┘
       │
       │ [Nachricht + Signatur]
       ↓
┌──────┴──────┐
│     Bob     │
│             │
│ 4. Signatur │
│    mit Alice│
│    Public   │
│    Key      │
│    prüfen   │
│             │
│ 5. ✓ Echt!  │
└─────────────┘
```

>[!info] Zweck
>Digitale Signaturen beweisen:
>- **Authentizität**: Nachricht ist von Alice
>- **Integrität**: Nachricht wurde nicht verändert
>- **Nicht-Abstreitbarkeit**: Alice kann nicht leugnen

---

# RSA in der Praxis

## HTTPS/SSL/TLS

>RSA wird bei HTTPS verwendet, um einen **symmetrischen Schlüssel** sicher auszutauschen.

**Ablauf:**
```
1. Client fordert Website an
   ↓
2. Server sendet RSA Public Key (im Zertifikat)
   ↓
3. Client generiert symmetrischen Schlüssel (z.B. AES)
   ↓
4. Client verschlüsselt AES-Schlüssel mit RSA Public Key
   ↓
5. Server entschlüsselt mit RSA Private Key
   ↓
6. Ab jetzt: Schnelle AES-Verschlüsselung
```

>[!tip] Hybrid-Verschlüsselung
>RSA ist **langsam** → Wird nur zum Austausch eines schnellen symmetrischen Schlüssels verwendet!

## SSH (Secure Shell)

```bash
# RSA-Schlüsselpaar für SSH generieren
ssh-keygen -t rsa -b 4096 -C "deine@email.com"

# Public Key auf Server kopieren
ssh-copy-id user@server.com

# Einloggen ohne Passwort
ssh user@server.com
```

## PGP/GPG (E-Mail-Verschlüsselung)

```bash
# GPG-Schlüsselpaar erstellen
gpg --full-generate-key

# Public Key exportieren
gpg --export -a "Dein Name" > public_key.asc

# Nachricht verschlüsseln
gpg --encrypt --recipient "Empfänger" nachricht.txt

# Nachricht entschlüsseln
gpg --decrypt nachricht.txt.gpg
```

---

# Stärken und Schwächen

## Stärken

>[!success] Vorteile
>- ✅ **Keine Schlüsselübertragung nötig** (Public Key kann öffentlich sein)
>- ✅ **Digitale Signaturen möglich**
>- ✅ **Mathematisch beweisbar sicher** (unter Annahmen)
>- ✅ **Weit verbreitet und standardisiert**

## Schwächen

>[!caution] Nachteile
>- ❌ **Langsam** (viel langsamer als symmetrische Verschlüsselung)
>- ❌ **Große Schlüsselgrößen** nötig (2048-4096 Bit)
>- ❌ **Anfällig für Quantencomputer** (Shor-Algorithmus)
>- ❌ **Nur kleine Datenmengen** direkt verschlüsselbar

---

# Angriffe auf RSA

## 1. Faktorisierung
>Angreifer versucht, n in p und q zu zerlegen.

**Schutz**: Große Schlüssel (≥2048 Bit) verwenden

## 2. Chosen-Ciphertext Attack
>Angreifer sendet manipulierte Ciphertexte und analysiert Antworten.

**Schutz**: OAEP-Padding verwenden

## 3. Timing-Angriffe
>Angreifer misst Zeit für Entschlüsselung, um Schlüssel zu rekonstruieren.

**Schutz**: Konstante Laufzeit-Implementierungen

## 4. Quantencomputer (Zukunft)
>Shor-Algorithmus kann RSA in polynomieller Zeit brechen.

**Schutz**: Post-Quantum-Kryptografie (z.B. Lattice-basierte Verfahren)

---

# RSA vs. Andere Verfahren

| Verfahren | Typ | Geschwindigkeit | Sicherheit | Verwendung |
|-----------|-----|----------------|------------|------------|
| **RSA** | Asymmetrisch | Langsam | Hoch | Schlüsselaustausch, Signaturen |
| **AES** | Symmetrisch | Sehr schnell | Sehr hoch | Datenverschlüsselung |
| **ECC** | Asymmetrisch | Schneller als RSA | Sehr hoch | Moderne Alternative zu RSA |
| **DES** | Symmetrisch | Schnell | ❌ Unsicher | Veraltet |

>[!info] Elliptic Curve Cryptography (ECC)
>ECC bietet **gleiche Sicherheit** wie RSA, aber mit **kleineren Schlüsseln** und **schneller**!

---

# Zusammenfassung

>[!summary] Kernpunkte
>- **RSA** = Asymmetrische Verschlüsselung basierend auf Primfaktorzerlegung
>- **Erfinder**: Rivest, Shamir, Adleman (1977)
>- **Schlüsselpaar**: Public Key (verschlüsseln) + Private Key (entschlüsseln)
>- **Anwendungen**: HTTPS, SSH, PGP, digitale Signaturen
>- **Mindestens 2048 Bit** verwenden!
>- **Langsam** → Wird meist nur für Schlüsselaustausch verwendet

---

# Verwandte Konzepte

- [[02 - RESOURCES/Notes/Asymmetrische Verschlüsselung\|Asymmetrische Verschlüsselung]] - Übergeordnetes Konzept
- [[02 - RESOURCES/Notes/AES\|AES]] - Symmetrische Verschlüsselung
- [[Digitale Signatur\|Digitale Signatur]] - Authentifizierung mit RSA
- [[02 - RESOURCES/Notes/HTTPS\|HTTPS]] - Verwendung von RSA im Web
- [[Public Key Infrastructure\|Public Key Infrastructure]] - Zertifikatsverwaltung
- [[Elliptic Curve Cryptography\|Elliptic Curve Cryptography]] - Moderne Alternative

---

# Weiterführende Ressourcen

📚 **Bücher**:
- "Applied Cryptography" von Bruce Schneier
- "Cryptography and Network Security" von William Stallings

🔗 **Online**:
- RSA Laboratories
- Computerphile (YouTube): RSA-Erklärung
- Khan Academy: RSA-Verschlüsselung

🛠️ **Tools**:
- OpenSSL (Kommandozeile)
- PyCryptodome (Python)
- GPG/PGP (E-Mail-Verschlüsselung)
