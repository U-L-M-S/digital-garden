---
{"dg-publish":true,"permalink":"/02-resources/notes/aes/","tags":["sicherheit/it-sicherheit","kryptografie/encryption","kryptografie/symmetric","algorithmus"],"noteIcon":"","updated":"2025-11-06T16:38:41.000+01:00","dg-note-properties":{"aliases":["Advanced Encryption Standard","AES-Verschlüsselung","Rijndael"],"created_date":"2024-08-04","links":null,"tags":["sicherheit/it-sicherheit","kryptografie/encryption","kryptografie/symmetric","algorithmus"]}}
---


> **AES** (Advanced Encryption Standard) ist ein [[02 - RESOURCES/Notes/Symmetrische Verschlüsselung\|symmetrischer Verschlüsselungsalgorithmus]], der Daten in Blöcken verschlüsselt und dabei den gleichen Schlüssel für [[02 - RESOURCES/Notes/Verschlüsselung\|Verschlüsselung]] und Entschlüsselung verwendet.
>> AES wurde von der US-Regierung als Standard für sichere Datenübertragung festgelegt und nutzt Blockgrößen von 128 [[02 - RESOURCES/Notes/Bit\|Bit]] mit Schlüssellängen von 128, 192 oder 256 [[02 - RESOURCES/Notes/Bit\|Bit]].
>> Durch seine hohe Sicherheit und Effizienz ist AES weit verbreitet und wird sowohl für private als auch für staatliche Verschlüsselungsanwendungen verwendet.
>> AES arbeitet in mehreren Runden (abhängig von der Schlüssellänge) und nutzt Substitution, Permutation und Schlüsseladdition.

>[!important] Warum AES wichtig ist
> AES ist der **weltweit meistverwendete Verschlüsselungsalgorithmus** und schützt:
> - HTTPS-Verbindungen (sichere Webkommunikation)
> - WLAN-Verschlüsselung (WPA2/WPA3)
> - Festplatten- und Dateiverschlüsselung
> - VPN-Verbindungen
> - Verschlüsselung von Datenbanken und Cloud-Speicher

---

# Geschichte und Entstehung

## Der Weg zu AES

> In den 1990er Jahren war der bisherige Standard **DES** (Data Encryption Standard) veraltet und unsicher geworden.

**Zeitlinie:**
```
1997: NIST startet AES-Wettbewerb
      ↓
      15 Kandidaten aus aller Welt
      ↓
1999: 5 Finalisten bleiben übrig
      - MARS (IBM)
      - RC6 (RSA)
      - Rijndael (Belgien) ✓
      - Serpent (UK/Israel/Norwegen)
      - Twofish (USA)
      ↓
2000: Rijndael gewinnt
      ↓
2001: AES wird offizieller Standard (FIPS 197)
```

>[!info] Erfinder
> **Joan Daemen** und **Vincent Rijmen** (Belgien) entwickelten den Rijndael-Algorithmus, der zu AES wurde.

---

# Grundprinzip: Symmetrische Verschlüsselung

> AES ist ein **symmetrischer** Algorithmus: Derselbe Schlüssel wird zum Ver- und Entschlüsseln verwendet.

**Prinzip:**
```
┌───────────────┐                      ┌───────────────┐
│    Alice      │                      │      Bob      │
│               │                      │               │
│ Klartext:     │                      │ Verschlüsselt:│
│ "GEHEIM"      │                      │ "8x9#mP..."   │
│               │                      │               │
│      │        │                      │      │        │
│      ↓        │                      │      ↓        │
│  [Schlüssel]  │  Sicherer Kanal     │  [Schlüssel]  │
│      │        │  ────────────────►  │      │        │
│      ↓        │                      │      ↓        │
│  AES Encrypt  │                      │  AES Decrypt  │
│      │        │                      │      │        │
│      ↓        │  Verschlüsselter    │      ↓        │
│ "8x9#mP..."   │  ─────────────────► │ "GEHEIM"      │
│               │      Text           │               │
└───────────────┘                      └───────────────┘
```

>[!caution] Wichtig
> Der **Schlüssel muss geheim bleiben**! Wenn ein Angreifer den Schlüssel hat, kann er alle Daten entschlüsseln.

---

# AES-Varianten und Schlüsselgrößen

| Variante | Schlüssel | Blockgröße | Runden | Sicherheit |
|----------|-----------|------------|--------|------------|
| **AES-128** | 128 Bit (16 Bytes) | 128 Bit | 10 | ✅ Sehr sicher |
| **AES-192** | 192 Bit (24 Bytes) | 128 Bit | 12 | ✅✅ Höhere Sicherheit |
| **AES-256** | 256 Bit (32 Bytes) | 128 Bit | 14 | ✅✅✅ Maximale Sicherheit |

> Die **Blockgröße** ist bei allen Varianten gleich (128 Bit), nur die **Schlüssellänge** und **Rundenanzahl** unterscheiden sich.

>[!tip] Empfehlung
> Für die meisten Anwendungen ist **AES-128** ausreichend. AES-256 wird für hochsensible Daten oder langfristige Sicherheit empfohlen.

---

# Wie funktioniert AES?

## AES-Struktur (Substitution-Permutation Network)

```
Plaintext (128 Bit)
       │
       ↓
┌─────────────────────────────────────┐
│   Initial Round: AddRoundKey        │  ← XOR mit Round Key 0
└─────────────────────────────────────┘
       │
       ↓
┌─────────────────────────────────────┐
│   Main Rounds (9/11/13 Mal)         │
│   ┌───────────────────────────┐     │
│   │ 1. SubBytes               │     │  ← S-Box Substitution
│   │ 2. ShiftRows              │     │  ← Zeilen verschieben
│   │ 3. MixColumns             │     │  ← Spalten mixen
│   │ 4. AddRoundKey            │     │  ← XOR mit Round Key
│   └───────────────────────────┘     │
└─────────────────────────────────────┘
       │
       ↓
┌─────────────────────────────────────┐
│   Final Round                        │
│   1. SubBytes                        │
│   2. ShiftRows                       │
│   3. AddRoundKey                     │
│   (Kein MixColumns!)                 │
└─────────────────────────────────────┘
       │
       ↓
Ciphertext (128 Bit)
```

---

# AES-Operationen im Detail

## 1. SubBytes (Byte-Substitution)

> Jedes Byte wird durch ein anderes Byte ersetzt, basierend auf einer **S-Box** (Substitution Box).

```
Input Byte:    0x53
       │
       ↓
┌──────────────┐
│   S-Box      │  ← Nachschlagetabelle (16x16)
└──────────────┘
       │
       ↓
Output Byte:   0xED
```

**S-Box-Prinzip:**
```
     0  1  2  3  4  5  6  7  8  9  A  B  C  D  E  F
   ┌──┬──┬──┬──┬──┬──┬──┬──┬──┬──┬──┬──┬──┬──┬──┬──┐
 0 │63│7C│77│7B│F2│6B│6F│C5│30│01│67│2B│FE│D7│AB│76│
 1 │CA│82│C9│7D│FA│59│47│F0│AD│D4│A2│AF│9C│A4│72│C0│
 2 │B7│FD│93│26│36│3F│F7│CC│34│A5│E5│F1│71│D8│31│15│
 3 │04│C7│23│C3│18│96│05│9A│07│12│80│E2│EB│27│B2│75│
 ...
```

>[!info] Zweck
> SubBytes sorgt für **Konfusion** (Verwischen der Beziehung zwischen Klartext und Ciphertext).

## 2. ShiftRows (Zeilen verschieben)

> Die Bytes der State-Matrix werden zeilenweise zyklisch verschoben.

```
Vorher:                      Nachher:
┌──┬──┬──┬──┐               ┌──┬──┬──┬──┐
│a0│a1│a2│a3│  Zeile 0 →    │a0│a1│a2│a3│ (keine Verschiebung)
├──┼──┼──┼──┤               ├──┼──┼──┼──┤
│b0│b1│b2│b3│  Zeile 1 →    │b1│b2│b3│b0│ (1 nach links)
├──┼──┼──┼──┤               ├──┼──┼──┼──┤
│c0│c1│c2│c3│  Zeile 2 →    │c2│c3│c0│c1│ (2 nach links)
├──┼──┼──┼──┤               ├──┼──┼──┼──┤
│d0│d1│d2│d3│  Zeile 3 →    │d3│d0│d1│d2│ (3 nach links)
└──┴──┴──┴──┘               └──┴──┴──┴──┘
```

>[!info] Zweck
> ShiftRows sorgt für **Diffusion** (Verteilen der Bits über den gesamten Block).

## 3. MixColumns (Spalten mischen)

> Jede Spalte der State-Matrix wird mit einer festen Matrix multipliziert (im Galois-Feld GF(2⁸)).

```
┌──┐     ┌──────┐     ┌──┐
│a0│     │02 03 │     │a0'│
│a1│  ×  │01 01 │  =  │a1'│
│a2│     │01 01 │     │a2'│
│a3│     │03 02 │     │a3'│
└──┘     └──────┘     └──┘
```

**Mathematisches Beispiel (vereinfacht):**
```
a0' = (2 × a0) ⊕ (3 × a1) ⊕ (1 × a2) ⊕ (1 × a3)
a1' = (1 × a0) ⊕ (2 × a1) ⊕ (3 × a2) ⊕ (1 × a3)
...
```

>[!info] Zweck
> MixColumns sorgt für zusätzliche **Diffusion** über Spalten hinweg.

## 4. AddRoundKey (Rundenschlüssel addieren)

> Der aktuelle Rundenschlüssel wird per XOR mit dem State kombiniert.

```
State:           Round Key:        Ergebnis:
┌──┬──┬──┬──┐   ┌──┬──┬──┬──┐    ┌──┬──┬──┬──┐
│a0│a1│a2│a3│ ⊕ │k0│k1│k2│k3│ =  │c0│c1│c2│c3│
│b0│b1│b2│b3│   │k4│k5│k6│k7│    │d0│d1│d2│d3│
│c0│c1│c2│c3│   │k8│k9│kA│kB│    │e0│e1│e2│e3│
│d0│d1│d2│d3│   │kC│kD│kE│kF│    │f0│f1│f2│f3│
└──┴──┴──┴──┘   └──┴──┴──┴──┘    └──┴──┴──┴──┘

XOR-Operation:
a0 ⊕ k0 = c0
```

>[!info] Zweck
> AddRoundKey ist die einzige Operation, die den **Schlüssel einbindet** und für Sicherheit sorgt.

---

# Key Expansion (Schlüsselerweiterung)

> Aus dem ursprünglichen Schlüssel werden mehrere **Rundenschlüssel** abgeleitet.

**Beispiel für AES-128 (10 Runden):**
```
Original Key (128 Bit)
       │
       ↓
┌─────────────────┐
│ Key Expansion   │  ← Algorithmus generiert aus
│   Algorithmus   │     1 Schlüssel → 11 Rundenschlüssel
└─────────────────┘
       │
       ↓
Round Key 0  (Initial)
Round Key 1  (Runde 1)
Round Key 2  (Runde 2)
   ...
Round Key 10 (Runde 10)
```

**Visualisierung:**
```
Original:  [2B 7E 15 16 28 AE D2 A6 AB F7 15 88 09 CF 4F 3C]
              │
              ↓  RotWord, SubWord, Rcon
              │
Round 1:   [A0 FA FE 17 88 54 2C B1 23 A3 39 39 2A 6C 76 05]
              │
              ↓
Round 2:   [F2 C2 95 F2 7A 96 B9 43 59 35 80 7A 73 59 F6 7F]
   ...
```

---

# AES-Betriebsmodi (Block Cipher Modes)

> AES verschlüsselt nur **128-Bit-Blöcke**. Für längere Daten werden **Betriebsmodi** verwendet.

## ECB (Electronic Codebook) - NICHT EMPFOHLEN!

```
Block 1  →  [AES]  →  Cipher 1
Block 2  →  [AES]  →  Cipher 2
Block 3  →  [AES]  →  Cipher 3
```

>[!fail] Problem
> Gleiche Eingabeblöcke → gleiche Ausgabeblöcke! Muster bleiben sichtbar (z.B. in Bildern).

## CBC (Cipher Block Chaining) - Empfohlen

```
IV ─────┐
        ↓
Block 1 ⊕ → [AES] → Cipher 1
              │
              ↓
Block 2 ⊕ → [AES] → Cipher 2
              │
              ↓
Block 3 ⊕ → [AES] → Cipher 3
```

>[!success] Vorteil
> Jeder Block hängt vom vorherigen ab → gleiche Blöcke erzeugen unterschiedliche Ciphertexte.

## CTR (Counter Mode)

```
Counter 1 → [AES] → Keystream 1 ⊕ Block 1 → Cipher 1
Counter 2 → [AES] → Keystream 2 ⊕ Block 2 → Cipher 2
Counter 3 → [AES] → Keystream 3 ⊕ Block 3 → Cipher 3
```

>[!success] Vorteil
> Parallelisierbar, kein Padding nötig, zufälliger Zugriff möglich.

## GCM (Galois/Counter Mode) - Moderne Wahl

> Kombiniert **CTR-Modus** mit **Authentifizierung** (GMAC).

```
Counter → [AES] → Keystream ⊕ Plaintext → Ciphertext
                                              │
                                              ↓
                                          [GMAC] → Authentication Tag
```

>[!success] Vorteil
> Verschlüsselung **und** Integritätsprüfung in einem! Standard für TLS 1.3.

---

# Praktische Code-Beispiele

## Python mit PyCryptodome

### Installation
```bash
pip install pycryptodome
```

### AES-128 Verschlüsselung (CBC-Modus)

```python
from Crypto.Cipher import AES
from Crypto.Random import get_random_bytes
from Crypto.Util.Padding import pad, unpad
import base64

# Schlüssel generieren (16 Bytes = 128 Bit)
key = get_random_bytes(16)
print(f"Schlüssel: {key.hex()}")

# Initialisierungsvektor (IV)
iv = get_random_bytes(16)
print(f"IV: {iv.hex()}")

# Plaintext
plaintext = b"Geheime Nachricht!"

# Verschlüsselung
cipher = AES.new(key, AES.MODE_CBC, iv)
ciphertext = cipher.encrypt(pad(plaintext, AES.block_size))

print(f"Verschlüsselt: {base64.b64encode(ciphertext).decode()}")

# Entschlüsselung
decipher = AES.new(key, AES.MODE_CBC, iv)
decrypted = unpad(decipher.decrypt(ciphertext), AES.block_size)

print(f"Entschlüsselt: {decrypted.decode()}")
```

### AES-256 mit GCM (empfohlen!)

```python
from Crypto.Cipher import AES
from Crypto.Random import get_random_bytes

# Schlüssel generieren (32 Bytes = 256 Bit)
key = get_random_bytes(32)
plaintext = b"Top Secret Data"

# Verschlüsselung mit GCM
cipher = AES.new(key, AES.MODE_GCM)
ciphertext, tag = cipher.encrypt_and_digest(plaintext)

print(f"Nonce: {cipher.nonce.hex()}")
print(f"Ciphertext: {ciphertext.hex()}")
print(f"Auth Tag: {tag.hex()}")

# Entschlüsselung mit Authentifizierung
decipher = AES.new(key, AES.MODE_GCM, nonce=cipher.nonce)
try:
    decrypted = decipher.decrypt_and_verify(ciphertext, tag)
    print(f"Entschlüsselt: {decrypted.decode()}")
except ValueError:
    print("Authentifizierung fehlgeschlagen! Daten wurden manipuliert.")
```

## OpenSSL (Kommandozeile)

### Datei verschlüsseln
```bash
# AES-256-CBC
openssl enc -aes-256-cbc -salt -in plaintext.txt -out encrypted.bin

# Mit Base64-Kodierung
openssl enc -aes-256-cbc -salt -in plaintext.txt -out encrypted.txt -base64
```

### Datei entschlüsseln
```bash
openssl enc -aes-256-cbc -d -in encrypted.bin -out decrypted.txt
```

---

# AES in der Praxis

## 1. HTTPS/TLS

> AES wird in **TLS 1.2** und **TLS 1.3** für die Verschlüsselung der Webkommunikation verwendet.

**Typische Cipher Suite:**
```
TLS_AES_256_GCM_SHA384
    │    │   │    │
    │    │   │    └─ SHA-384 für Hashing
    │    │   └────── GCM-Modus
    │    └────────── AES-256
    └─────────────── TLS-Protokoll
```

## 2. WLAN-Verschlüsselung (WPA2/WPA3)

```
┌──────────────┐                      ┌──────────────┐
│   Client     │                      │   Router     │
│              │  4-Way Handshake     │              │
│              │  ◄────────────────►  │              │
│              │                      │              │
│  AES-CCMP    │  Verschlüsselte      │  AES-CCMP    │
│  Encryption  │  ──────────────────► │  Decryption  │
└──────────────┘      WLAN-Pakete     └──────────────┘
```

>[!info] CCMP
> Counter Mode with CBC-MAC Protocol - basiert auf AES.

## 3. Festplattenverschlüsselung

- **Windows**: BitLocker (AES-128/256)
- **macOS**: FileVault (AES-128)
- **Linux**: LUKS (AES-256)

```bash
# Linux: Partition mit AES verschlüsseln
cryptsetup luksFormat /dev/sdb1 --cipher aes-xts-plain64 --key-size 512
```

## 4. Datenbanken

```sql
-- MySQL: AES-Verschlüsselung
INSERT INTO users (name, secret)
VALUES ('Alice', AES_ENCRYPT('Passwort123', 'encryption_key'));

-- Entschlüsseln
SELECT name, AES_DECRYPT(secret, 'encryption_key') AS password
FROM users;
```

---

# Sicherheit und Angriffe

## Ist AES sicher?

>[!success] Ja, AES gilt als sehr sicher!
> Bisher gibt es **keine praktisch nutzbaren Angriffe** auf vollständiges AES.

**Theoretische Angriffe:**
```
AES-128: 2^126.1 Operationen (Biclique-Angriff)
         → Praktisch unmöglich

AES-256: 2^254.4 Operationen
         → Noch sicherer
```

## Mögliche Schwachstellen

### 1. Schwache Schlüssel
>[!caution] Problem
> Schlüssel aus Passwörtern ableiten ohne KDF (Key Derivation Function)

**Falsch:**
```python
# Unsicher!
key = "passwort".encode().ljust(16, b'\0')
```

**Richtig:**
```python
from Crypto.Protocol.KDF import PBKDF2

password = b"mein_sicheres_passwort"
salt = get_random_bytes(16)
key = PBKDF2(password, salt, dkLen=32, count=100000)
```

### 2. Schlüsselwiederverwendung mit CTR/GCM

>[!caution] Problem
> Nonce/IV darf **niemals** mit demselben Schlüssel wiederverwendet werden!

### 3. Side-Channel-Angriffe

- **Timing-Angriffe**: Messung der Verschlüsselungszeit
- **Cache-Timing**: Analyse von CPU-Cache-Zugriffen
- **Power-Analyse**: Strommessung während Verschlüsselung

**Schutz:** Konstante-Zeit-Implementierungen (z.B. AES-NI)

### 4. Quantencomputer

>[!info] Grover-Algorithmus
> Quantencomputer können Suchraum halbieren:
> - AES-128: Effektiv 64 Bit Sicherheit (kritisch!)
> - AES-256: Effektiv 128 Bit Sicherheit (sicher)

**Empfehlung:** Für Post-Quantum-Sicherheit **AES-256** verwenden.

---

# AES-NI (Hardware-Beschleunigung)

> Moderne CPUs haben spezielle **AES-Instruktionen** für schnellere Verschlüsselung.

```
Ohne AES-NI:  ~200 MB/s
Mit AES-NI:   ~2000 MB/s (10x schneller!)
```

**Prüfen, ob CPU AES-NI unterstützt:**
```bash
# Linux
grep aes /proc/cpuinfo

# Windows (PowerShell)
Get-WmiObject Win32_Processor | Select-Object Name, *aes*
```

---

# Stärken und Schwächen

## Stärken

>[!success] Vorteile
> - ✅ **Sehr sicher**: Keine bekannten praktischen Angriffe
> - ✅ **Schnell**: Besonders mit Hardware-Beschleunigung (AES-NI)
> - ✅ **Standardisiert**: FIPS 197, ISO/IEC 18033-3
> - ✅ **Weit verbreitet**: In allen modernen Systemen implementiert
> - ✅ **Flexibel**: Verschiedene Schlüsselgrößen und Modi

## Schwächen

>[!caution] Nachteile
> - ❌ **Schlüsselverteilung**: Symmetrisch → Schlüssel muss sicher übertragen werden
> - ❌ **Keine Authentifizierung**: Nur Verschlüsselung (außer bei GCM/CCM)
> - ❌ **Quantencomputer**: AES-128 könnte anfällig werden

---

# AES vs. Andere Verfahren

| Algorithmus | Typ | Schlüssel | Sicherheit | Geschwindigkeit | Status |
|-------------|-----|-----------|------------|----------------|--------|
| **AES** | Symmetrisch | 128/192/256 Bit | Sehr hoch | Sehr schnell | ✅ Aktueller Standard |
| **DES** | Symmetrisch | 56 Bit | Unsicher | Schnell | ❌ Veraltet |
| **3DES** | Symmetrisch | 168 Bit | Mittel | Langsam | ⚠️ Abgelöst durch AES |
| **ChaCha20** | Symmetrisch | 256 Bit | Sehr hoch | Sehr schnell | ✅ Moderne Alternative |
| **Blowfish** | Symmetrisch | 32-448 Bit | Mittel | Schnell | ⚠️ Veraltet |

>[!info] ChaCha20
> Moderne Alternative zu AES, besonders auf Geräten ohne AES-NI schneller (z.B. Smartphones).

---

# Zusammenfassung

>[!summary] Kernpunkte
> - **AES** = Advanced Encryption Standard, symmetrischer Block-Cipher
> - **Blockgröße**: 128 Bit
> - **Schlüsselgrößen**: 128, 192, 256 Bit
> - **Runden**: 10/12/14 (je nach Schlüssellänge)
> - **Operationen**: SubBytes, ShiftRows, MixColumns, AddRoundKey
> - **Modi**: CBC, CTR, GCM (empfohlen!)
> - **Sicherheit**: Sehr hoch, keine praktischen Angriffe bekannt
> - **Verwendung**: HTTPS, WLAN, Festplatten, VPN, Datenbanken

---

# Verwandte Konzepte

- [[02 - RESOURCES/Notes/Kryptographie\|Kryptographie]] - Übergeordnetes Konzept
- [[02 - RESOURCES/Notes/Symmetrische Verschlüsselung\|Symmetrische Verschlüsselung]] - AES ist symmetrisch
- [[02 - RESOURCES/Notes/RSA\|RSA]] - Asymmetrische Alternative
- [[02 - RESOURCES/Notes/TLS\|TLS]] - Verwendet AES für sichere Verbindungen
- [[02 - RESOURCES/Notes/Diffie-Hellman\|Diffie-Hellman]] - Schlüsselaustausch für AES
- [[02 - RESOURCES/Notes/Passwort-Hashing\|Passwort-Hashing]] - Schlüsselableitung für AES

---

# Weiterführende Ressourcen

**Bücher:**
- "The Design of Rijndael" von Joan Daemen und Vincent Rijmen
- "Cryptography Engineering" von Ferguson, Schneier, Kohno

**Online:**
- NIST FIPS 197 (AES-Spezifikation)
- Computerphile: AES Explained (YouTube)
- CrypTool (Visualisierung von AES)

**Tools:**
- OpenSSL (Kommandozeile)
- PyCryptodome (Python)
- CyberChef (Online-Tool)
