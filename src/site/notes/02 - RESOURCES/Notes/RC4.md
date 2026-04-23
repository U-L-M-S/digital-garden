---
{"dg-publish":true,"permalink":"/02-resources/notes/rc-4/","tags":["sicherheit/kryptografie","algorithmus","ausbildung/gfn/ap1/vorbereitung"],"noteIcon":"","updated":"2025-11-06T13:50:29.000+01:00","dg-note-properties":{"aliases":["RC4","RC4-Verschlüsselung","Rivest Cipher 4","ARC4"],"created_date":"2024-08-04","links":null,"tags":["sicherheit/kryptografie","algorithmus","ausbildung/gfn/ap1/vorbereitung"]}}
---

>**RC4 (Rivest Cipher 4)** ist ein **Stream-Cipher** (Stromverschlüsselung), der 1987 von Ron Rivest entwickelt wurde. Er verschlüsselt Daten **byteweise** durch XOR-Verknüpfung mit einem Pseudozufallsstrom.
>>RC4 war jahrzehntelang sehr beliebt (SSL, WEP, WPA), gilt aber heute als **unsicher** und sollte nicht mehr verwendet werden.

>[!danger] Status: VERALTET
>RC4 ist seit 2015 offiziell als **unsicher** eingestuft und wurde aus allen modernen Standards entfernt!

---

# Visualisierung: Stream Cipher Prinzip

```
Klartext:     H  E  L  L  O
              │  │  │  │  │
ASCII:       72 69 76 76 79
              │  │  │  │  │
              ⊕  ⊕  ⊕  ⊕  ⊕  ← XOR
              │  │  │  │  │
Keystream:   45 23 89 12 67  ← Pseudozufällig generiert
              │  │  │  │  │
              ↓  ↓  ↓  ↓  ↓
Ciphertext: 117 82 37 84 14
```

>[!info] XOR-Eigenschaft
>XOR ist **umkehrbar**: `Plaintext ⊕ Keystream = Ciphertext`
>Und: `Ciphertext ⊕ Keystream = Plaintext`

---

# Wie funktioniert RC4?

## Phase 1: Key Scheduling Algorithm (KSA)

>Initialisiert den internen Zustand **S** (Permutation von 0-255) basierend auf dem Schlüssel.

**Schritt-für-Schritt:**

```
1. Initialisierung:
   S[0] = 0, S[1] = 1, S[2] = 2, ..., S[255] = 255

2. Schlüssel wiederholen:
   Key: "SECRET" → "SECRETSECRETSECRET..." (256 Bytes)

3. Permutation durch Schlüssel:
   for i from 0 to 255:
       j = (j + S[i] + Key[i]) mod 256
       swap(S[i], S[j])
```

**Visualisierung:**

```
Vorher:  S = [0, 1, 2, 3, 4, 5, ... 255]
         Key = [83, 69, 67, 82, 69, 84, ...] (ASCII "SECRET")

         i=0: j = (0 + S[0] + 83) mod 256 = 83
              swap(S[0], S[83])

         i=1: j = (83 + S[1] + 69) mod 256 = 153
              swap(S[1], S[153])

         ... (256 Durchläufe)

Nachher: S = [83, 153, 47, 12, ...] (permutiert)
```

## Phase 2: Pseudo-Random Generation Algorithm (PRGA)

>Generiert den **Keystream** byte für byte.

**Algorithmus:**

```python
i = 0
j = 0

while True:  # Für jedes zu verschlüsselnde Byte
    i = (i + 1) mod 256
    j = (j + S[i]) mod 256
    swap(S[i], S[j])

    K = S[(S[i] + S[j]) mod 256]  # Keystream-Byte
    output K
```

**Visualisierung:**

```
Schritt 1:                  Schritt 2:                  Schritt 3:
i = 1                       i = 2                       i = 3
j = (0 + S[1]) mod 256     j = (j + S[2]) mod 256     j = (j + S[3]) mod 256
= 153                       = 200                       = 47

swap(S[1], S[153])         swap(S[2], S[200])         swap(S[3], S[47])

K₁ = S[(S[1]+S[153])%256]  K₂ = S[(S[2]+S[200])%256]  K₃ = S[(S[3]+S[47])%256]
   = S[47]                    = S[89]                    = S[123]
   = 45                       = 23                       = 89

Keystream: [45, 23, 89, ...]
```

---

# Code-Beispiel: RC4 in Python

```python
def rc4(key, data):
    """RC4 Verschlüsselung/Entschlüsselung"""

    # KSA: Key Scheduling Algorithm
    S = list(range(256))
    j = 0

    for i in range(256):
        j = (j + S[i] + key[i % len(key)]) % 256
        S[i], S[j] = S[j], S[i]  # Swap

    # PRGA: Pseudo-Random Generation Algorithm
    i = 0
    j = 0
    result = []

    for byte in data:
        i = (i + 1) % 256
        j = (j + S[i]) % 256
        S[i], S[j] = S[j], S[i]  # Swap

        K = S[(S[i] + S[j]) % 256]  # Keystream byte
        result.append(byte ^ K)     # XOR

    return bytes(result)

# Verwendung
key = b"SECRET"
plaintext = b"HALLO"

# Verschlüsseln
ciphertext = rc4(key, plaintext)
print(f"Verschlüsselt: {ciphertext.hex()}")

# Entschlüsseln (gleiche Funktion!)
decrypted = rc4(key, ciphertext)
print(f"Entschlüsselt: {decrypted.decode()}")
```

**Output:**
```
Verschlüsselt: 756225548e
Entschlüsselt: HALLO
```

>[!tip] Symmetrisch
>RC4 verwendet **dieselbe Funktion** zum Ver- und Entschlüsseln!

---

# Visualisierung: Verschlüsselung vs. Entschlüsselung

```
┌─────────────────────────────────────────────────┐
│              VERSCHLÜSSELUNG                    │
└─────────────────────────────────────────────────┘

Klartext: "HALLO"
    ↓
[RC4 mit Key "SECRET"]
    ↓
    ↓  Keystream: 45, 23, 89, 12, 67
    ↓
72 ⊕ 45 = 117
69 ⊕ 23 = 82
76 ⊕ 89 = 37
76 ⊕ 12 = 84
79 ⊕ 67 = 14
    ↓
Ciphertext: [117, 82, 37, 84, 14]


┌─────────────────────────────────────────────────┐
│              ENTSCHLÜSSELUNG                    │
└─────────────────────────────────────────────────┘

Ciphertext: [117, 82, 37, 84, 14]
    ↓
[RC4 mit Key "SECRET"]
    ↓
    ↓  Keystream: 45, 23, 89, 12, 67 (GLEICH!)
    ↓
117 ⊕ 45 = 72  → H
82  ⊕ 23 = 69  → E
37  ⊕ 89 = 76  → L
84  ⊕ 12 = 76  → L
14  ⊕ 67 = 79  → O
    ↓
Klartext: "HALLO"
```

---

# RC4 in der Praxis (historisch)

## 1. SSL/TLS (bis 2015)

```
Client                          Server
  │                               │
  │  1. ClientHello               │
  │──────────────────────────────►│
  │                               │
  │  2. ServerHello + Cipher      │
  │     (inkl. RC4-128-SHA)       │
  │◄──────────────────────────────│
  │                               │
  │  3. Daten verschlüsselt       │
  │     mit RC4                   │
  │◄─────────────────────────────►│
```

>[!warning] Seit 2015 verboten
>RFC 7465 verbietet RC4 in TLS!

## 2. WEP (WLAN)

```
WLAN-Frame:
┌──────────┬──────────┬──────────┐
│ Header   │ Payload  │   CRC    │
└──────────┴──────────┴──────────┘
     │          │          │
     │          ↓          │
     │    RC4-verschlüsselt│
     │          │          │
     └──────────┴──────────┘
```

## 3. WPA/[[02 - RESOURCES/Notes/TKIP\|TKIP]]

>Verwendete RC4 mit Verbesserungen (aber immer noch anfällig).

---

# Schwächen von RC4

>[!danger] Kritische Sicherheitslücken

## 1. Schwache Schlüssel (Weak Keys)

>Bestimmte Schlüssel erzeugen vorhersagbare Keystreams.

```
Schwacher Schlüssel: [0, 0, 0, 0]
→ Keystream beginnt immer mit gleichen Bytes
→ Angreifer kann Muster erkennen
```

## 2. Bias in den ersten Bytes

>Die ersten ~256 Bytes des Keystreams sind **nicht gleichverteilt**.

**Statistik:**
```
Byte-Position    Erwartete Wahrscheinlichkeit    Tatsächlich
    0                    1/256 (0.39%)              ~2%  ⚠️
    1                    1/256 (0.39%)              ~1%  ⚠️
    2                    1/256 (0.39%)              ~0.5% ⚠️
```

>[!caution] Empfehlung (falls RC4 verwendet werden MUSS)
>Verwerfe die ersten 256-3072 Bytes des Keystreams!

## 3. Related-Key Attacks

>Bei WEP: Initialization Vector (IV) wird mit Schlüssel kombiniert
>→ Ermöglicht Angriffe durch IV-Wiederverwendung

```
Packet 1: IV₁ + Key → RC4 → Keystream₁
Packet 2: IV₂ + Key → RC4 → Keystream₂
Packet 3: IV₁ + Key → RC4 → Keystream₁ (GLEICH WIE PACKET 1!)

→ Angreifer sammelt Pakete und findet Wiederholungen
→ WEP kann in Minuten geknackt werden
```

## 4. BEAST und CRIME Angriffe (TLS)

>Ausnutzung von RC4-Schwächen in Kombination mit TLS-Features.

---

# RC4 vs. Moderne Verschlüsselung

| Merkmal | RC4 | [[02 - RESOURCES/Notes/AES\|AES]] | ChaCha20 |
|---------|-----|---------|----------|
| **Typ** | Stream Cipher | Block Cipher | Stream Cipher |
| **Geschwindigkeit** | Sehr schnell | Schnell (mit AES-NI) | Sehr schnell |
| **Sicherheit** | ❌ Unsicher | ✅ Sicher | ✅ Sicher |
| **Schlüssellänge** | 40-2048 Bit | 128/192/256 Bit | 256 Bit |
| **Status** | Veraltet | Standard | Modern |
| **Verwendung** | ❌ Nicht verwenden! | HTTPS, VPN, Disk | TLS 1.3, VPN |

---

# Zeitstrahl: RC4

```
1987: RC4 entwickelt (Ron Rivest)
      │
      ↓
1994: RC4-Algorithmus geleakt (vorher Trade Secret)
      │
      ↓
1990er-2000er: Weit verbreitet (SSL, WEP, WPA)
      │
      ↓
2001: Erste Schwächen in WEP entdeckt
      │
      ↓
2013: Royal Holloway-Angriff auf RC4 in TLS
      │
      ↓
2015: RFC 7465 - RC4 in TLS VERBOTEN
      │
      ↓
Heute: ❌ Nicht mehr verwenden!
```

---

# Alternativen zu RC4

>[!success] Empfohlene Alternativen

## Für Stream-Verschlüsselung:
- **ChaCha20** (modern, schnell, sicher)
- **Salsa20** (Vorgänger von ChaCha20)

## Für Block-Verschlüsselung:
- **AES** (Standard, hardware-beschleunigt)
- **AES-GCM** (mit Authentifizierung)

## Beispiel: ChaCha20 (Python)

```python
from cryptography.hazmat.primitives.ciphers import Cipher, algorithms, modes
import os

key = os.urandom(32)  # 256-bit key
nonce = os.urandom(16)  # 128-bit nonce

cipher = Cipher(algorithms.ChaCha20(key, nonce), mode=None)
encryptor = cipher.encryptor()

plaintext = b"HALLO"
ciphertext = encryptor.update(plaintext)

print(f"Verschlüsselt: {ciphertext.hex()}")
```

---

# Zusammenfassung

>[!summary] Kernpunkte
>- **RC4** = Stream Cipher, entwickelt 1987 von Ron Rivest
>- **Funktionsweise**: KSA (Key Scheduling) + PRGA (Keystream-Generierung)
>- **Sehr schnell**, aber **UNSICHER**
>- **Schwächen**: Schwache Schlüssel, Bias, Related-Key Attacks
>- **Status**: Seit 2015 offiziell **verboten** in TLS
>- **Alternativen**: ChaCha20, AES

>[!danger] Kritisch
>**RC4 NIEMALS mehr verwenden!** Nutze ChaCha20 oder AES.

---

# Verwandte Konzepte

- [[02 - RESOURCES/Notes/AES\|AES]] - Moderner Block Cipher
- [[ChaCha20\|ChaCha20]] - Moderner Stream Cipher (Nachfolger)
- [[02 - RESOURCES/Notes/WEP\|WEP]] - Nutzte RC4 (unsicher)
- [[02 - RESOURCES/Notes/TKIP\|TKIP]] - Nutzte RC4 (unsicher)
- [[02 - RESOURCES/Notes/TLS\|TLS]] - Transportverschlüsselung (RC4 verboten)
- [[Stream Cipher\|Stream Cipher]] - Verschlüsselungsart

---

# Weiterführende Ressourcen

📚 **Papers**:
- "Weaknesses in the Key Scheduling Algorithm of RC4" (Fluhrer, Mantin, Shamir, 2001)
- RFC 7465: Prohibiting RC4 Cipher Suites

🔗 **Online**:
- RC4 on Wikipedia (detaillierte Analyse)
- Computerphile: RC4 Explained (YouTube)
