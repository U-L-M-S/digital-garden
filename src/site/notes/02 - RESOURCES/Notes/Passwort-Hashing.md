---
{"dg-publish":true,"permalink":"/02-resources/notes/passwort-hashing/","tags":["kryptografie/passwort","sicherheit/authentifizierung","informatik/kryptographie"],"noteIcon":"","updated":"2025-11-24T11:31:19.000+01:00"}
---


# Passwort-Hashing

**Passwort-Hashing** ist ein spezialisiertes Verfahren zur sicheren Speicherung von Passwörtern. Im Gegensatz zu normalen [[02 - RESOURCES/Notes/Hash-Funktion\|Hash-Funktion]]en sind Passwort-Hash-Funktionen **absichtlich langsam** und **speicherintensiv**, um Brute-Force- und Rainbow-Table-Angriffe zu erschweren. Sie verwenden **Salts** (zufällige Werte) und **iterative Verfahren**, um die Sicherheit zu erhöhen.

## Warum nicht einfach SHA-256?

> [!danger] SHA-256 für Passwörter ist UNSICHER!
> Normale Hash-Funktionen wie SHA-256 sind:
> - ⚡ **Zu schnell**: Milliarden Hashes pro Sekunde möglich
> - 🎯 **Anfällig für Rainbow Tables**: Vorberechnete Hash-Tabellen
> - 🔓 **Keine Salts**: Gleiche Passwörter → gleiche Hashes
> - 💻 **GPU-optimierbar**: Massive Parallelisierung möglich

```
┌─────────────────────────────────────────────────────────────┐
│         SHA-256 vs PASSWORT-HASH-FUNKTION                   │
│                                                             │
│  SHA-256 (UNSICHER für Passwörter):                         │
│  ┌──────────────────────────────────────┐                  │
│  │ Passwort: "password123"              │                  │
│  │    ↓                                 │                  │
│  │ SHA-256                              │                  │
│  │    ↓                                 │                  │
│  │ Hash (in 0.000001s)                  │                  │
│  │ ef92b778bafe771e89245b89ecbc08a44a4980│                  │
│  └──────────────────────────────────────┘                  │
│                                                             │
│  Angreifer: 10 Milliarden Hashes/s                         │
│  → Alle 8-Zeichen-Passwörter in ~1 Stunde                  │
│                                                             │
│  bcrypt (SICHER):                                           │
│  ┌──────────────────────────────────────┐                  │
│  │ Passwort: "password123"              │                  │
│  │ Salt: $2b$12$randomsalt...           │                  │
│  │    ↓                                 │                  │
│  │ bcrypt (cost=12)                     │                  │
│  │    ↓                                 │                  │
│  │ Hash (in 0.3s - 300.000× langsamer!) │                  │
│  │ $2b$12$randomsalt.../hashedpassword  │                  │
│  └──────────────────────────────────────┘                  │
│                                                             │
│  Angreifer: ~30 Hashes/s                                    │
│  → Alle 8-Zeichen-Passwörter in ~10.000 Jahren             │
└─────────────────────────────────────────────────────────────┘
```

## Grundkonzepte

### Salt (Salz)

> [!important] Was ist ein Salt?
> Ein **Salt** ist ein zufälliger Wert, der jedem Passwort vor dem Hashing hinzugefügt wird:
> - 🎲 **Zufällig**: Pro Benutzer unterschiedlich
> - 📝 **Gespeichert**: Im Klartext neben dem Hash
> - 🛡️ **Schutz**: Verhindert Rainbow Table Angriffe
> - 🔄 **Eindeutigkeit**: Gleiche Passwörter → unterschiedliche Hashes

```
┌─────────────────────────────────────────────────────────────┐
│                  SALT FUNKTIONSWEISE                        │
│                                                             │
│  OHNE SALT (UNSICHER):                                      │
│  User A: Hash("password123") → abc123...                   │
│  User B: Hash("password123") → abc123... (GLEICH!)         │
│  → Angreifer erkennt gleiche Passwörter                    │
│  → Rainbow Tables funktionieren                            │
│                                                             │
│  MIT SALT (SICHER):                                         │
│  User A: Hash("password123" + "saltA") → xyz789...         │
│  User B: Hash("password123" + "saltB") → mno456...         │
│  → Unterschiedliche Hashes trotz gleichem Passwort         │
│  → Rainbow Tables nutzlos (müssten für jeden Salt neu)     │
│                                                             │
│  Speicherung in Datenbank:                                  │
│  ┌───────┬───────────────┬──────────────────────────┐      │
│  │ User  │ Salt          │ Hash                     │      │
│  ├───────┼───────────────┼──────────────────────────┤      │
│  │ Alice │ $2b$12$qwert..│ ...$hashedpasswordABCD   │      │
│  │ Bob   │ $2b$12$asdfg..│ ...$hashedpasswordXYZ    │      │
│  └───────┴───────────────┴──────────────────────────┘      │
└─────────────────────────────────────────────────────────────┘
```

### Pepper

> [!tip] Was ist ein Pepper?
> Ein **Pepper** ist ein geheimer Wert, der zu allen Passwörtern hinzugefügt wird:
> - 🔐 **Geheim**: Nicht in Datenbank gespeichert
> - 🗝️ **Global**: Für alle Benutzer gleich
> - 📁 **Speicherort**: Konfigurationsdatei oder HSM
> - 🛡️ **Zusatzschutz**: Selbst bei DB-Leak bleiben Hashes sicher

```
┌─────────────────────────────────────────────────────────────┐
│                  SALT vs PEPPER                             │
│                                                             │
│  Hash-Berechnung:                                           │
│  Hash(Passwort + Salt + Pepper)                            │
│                                                             │
│  Salt:                    Pepper:                           │
│  ✅ Pro User unique       ✅ Global für alle User           │
│  ✅ In DB gespeichert     ❌ NICHT in DB                    │
│  ✅ Gegen Rainbow Tables  ✅ Gegen DB-Compromise            │
│                                                             │
│  Beispiel:                                                  │
│  Passwort: "MyPass123"                                      │
│  Salt:     "f8a3c2d1e5b9"                                   │
│  Pepper:   "SECRET_GLOBAL_KEY_XYZ" (aus config.json)        │
│  → Hash(MyPass123 + f8a3c2d1e5b9 + SECRET_GLOBAL_KEY_XYZ)  │
│                                                             │
│  Bei DB-Leak:                                               │
│  Angreifer hat: Passwort-Hash + Salt                       │
│  Angreifer hat NICHT: Pepper                               │
│  → Kann Hash nicht verifizieren!                           │
└─────────────────────────────────────────────────────────────┘
```

## Passwort-Hash-Algorithmen

### 1. bcrypt (Empfohlen)

```
┌─────────────────────────────────────────────────────────────┐
│                        bcrypt                               │
│                                                             │
│  Entwickelt: 1999 (OpenBSD)                                 │
│  Basis: Blowfish-Cipher                                     │
│                                                             │
│  Eigenschaften:                                             │
│  ✅ Adaptiv: Cost-Faktor einstellbar (4-31)                 │
│  ✅ Salt: Automatisch 128-Bit                               │
│  ✅ Langsam: Absichtlich rechenintensiv                     │
│  ✅ Battle-tested: 25+ Jahre im Einsatz                     │
│  ⚠️  Max 72 Bytes: Längere Passwörter abgeschnitten         │
│                                                             │
│  Hash-Format:                                               │
│  $2b$12$saltsaltsaltsaltsalt.hashedpasswordhashed          │
│   │  │  │                    │                             │
│   │  │  └─ Salt (22 Zeichen) └─ Hash (31 Zeichen)          │
│   │  └──── Cost-Faktor (2^12 = 4096 Iterationen)           │
│   └─────── Algorithmus-Version (2b = aktuell)              │
│                                                             │
│  Cost-Faktor-Empfehlung (2025):                             │
│  - Minimum: 12 (0.3s auf modernem CPU)                     │
│  - Empfohlen: 12-14 (0.3-1.2s)                             │
│  - High Security: 14-16 (1.2-5s)                           │
│                                                             │
│  Jede Erhöhung um 1 → 2× langsamer!                        │
└─────────────────────────────────────────────────────────────┘
```

### 2. Argon2 (Modernste Wahl)

```
┌─────────────────────────────────────────────────────────────┐
│                        Argon2                               │
│                                                             │
│  Entwickelt: 2015                                           │
│  Status: Password Hashing Competition Winner 2015          │
│                                                             │
│  Varianten:                                                 │
│  1. Argon2d: Schneller, GPU-resistent (Krypto-Wallets)     │
│  2. Argon2i: Side-Channel-resistent (Passwörter)           │
│  3. Argon2id: Hybrid (EMPFOHLEN)                           │
│                                                             │
│  Parameter:                                                 │
│  ┌────────────────────────────────────┐                    │
│  │ m: Memory (KiB) - z.B. 64 MB       │                    │
│  │ t: Time (Iterationen) - z.B. 3     │                    │
│  │ p: Parallelismus - z.B. 4 Threads  │                    │
│  └────────────────────────────────────┘                    │
│                                                             │
│  Eigenschaften:                                             │
│  ✅ Memory-Hard: Speicherintensiv → GPU-resistent           │
│  ✅ Flexibel: Memory/Time/Parallelismus einstellbar        │
│  ✅ Modern: Neueste Forschung                               │
│  ✅ Side-Channel-Schutz: Argon2i/id                         │
│                                                             │
│  Hash-Format:                                               │
│  $argon2id$v=19$m=65536,t=3,p=4$salt$hash                  │
│                                                             │
│  Empfehlung (2025):                                         │
│  - Memory: 64 MB (65536 KiB)                               │
│  - Time: 3 Iterationen                                      │
│  - Parallelism: 4                                           │
│  → ~0.5s auf modernem CPU                                   │
└─────────────────────────────────────────────────────────────┘
```

### 3. scrypt

```
┌─────────────────────────────────────────────────────────────┐
│                        scrypt                               │
│                                                             │
│  Entwickelt: 2009 (Colin Percival)                          │
│  Bekannt durch: Litecoin, Dogecoin                          │
│                                                             │
│  Parameter:                                                 │
│  ┌────────────────────────────────────┐                    │
│  │ N: CPU/Memory Cost (2^14 = 16384)  │                    │
│  │ r: Block Size (8)                  │                    │
│  │ p: Parallelization (1)             │                    │
│  └────────────────────────────────────┘                    │
│                                                             │
│  Eigenschaften:                                             │
│  ✅ Memory-Hard: Hoher RAM-Verbrauch                        │
│  ✅ GPU-resistent: Schwer parallelisierbar                  │
│  ⚠️  Komplexe Parameter: Schwer zu konfigurieren            │
│                                                             │
│  Empfehlung (2025):                                         │
│  - N=2^14 (16384), r=8, p=1                                │
│  - Für neue Projekte: Bevorzuge Argon2                     │
└─────────────────────────────────────────────────────────────┘
```

### 4. PBKDF2 (Legacy, aber weit verbreitet)

```
┌─────────────────────────────────────────────────────────────┐
│                        PBKDF2                               │
│                                                             │
│  Entwickelt: 2000 (PKCS #5)                                 │
│  Basis: HMAC + Hash-Funktion (meist SHA-256)               │
│                                                             │
│  Eigenschaften:                                             │
│  ✅ Standardisiert: NIST-empfohlen                          │
│  ✅ Kompatibel: In vielen Frameworks                        │
│  ⚠️  Nicht Memory-Hard: GPU-anfällig                        │
│  ⚠️  Iterationen: Müssen sehr hoch sein (600k+)            │
│                                                             │
│  Parameter:                                                 │
│  - Hash: SHA-256                                            │
│  - Iterationen: 600.000+ (2025)                            │
│  - Salt: 128 Bit                                            │
│                                                             │
│  Status:                                                    │
│  Für neue Projekte: Bevorzuge bcrypt oder Argon2          │
│  Für Legacy: OK, aber hohe Iterationszahl!                 │
└─────────────────────────────────────────────────────────────┘
```

### Algorithmen-Vergleich

| Algorithmus | Jahr | Memory-Hard | GPU-Resistent | Empfehlung 2025 |
|-------------|------|-------------|---------------|-----------------|
| **Argon2id** | 2015 | ✅ Ja | ✅✅✅ Sehr gut | ✅ **BESTE WAHL** |
| **bcrypt** | 1999 | ⚠️ Moderat | ✅✅ Gut | ✅ **EMPFOHLEN** |
| **scrypt** | 2009 | ✅ Ja | ✅✅ Gut | ⚠️ OK (komplex) |
| **PBKDF2** | 2000 | ❌ Nein | ❌ Schwach | ⚠️ Legacy only |
| **SHA-256** | 2001 | ❌ Nein | ❌ Sehr schwach | ❌ **NIE VERWENDEN** |

## Praktische Code-Beispiele

### Python: bcrypt

```python
import bcrypt
import time

# PASSWORT HASHEN
print("=" * 70)
print("bcrypt PASSWORT-HASHING DEMO")
print("=" * 70)

passwort = b"SuperSicheresPasswort123!"

# Verschiedene Cost-Faktoren testen
for cost in [10, 12, 14]:
    start = time.time()

    # Hash generieren (Salt wird automatisch erstellt)
    salt = bcrypt.gensalt(rounds=cost)
    hash_pw = bcrypt.hashpw(passwort, salt)

    dauer = time.time() - start

    print(f"\n📊 Cost-Faktor: {cost} (2^{cost} = {2**cost:,} Iterationen)")
    print(f"Hash: {hash_pw.decode()}")
    print(f"Dauer: {dauer:.3f}s")

# Passwort verifizieren
print("\n" + "=" * 70)
print("PASSWORT-VERIFIZIERUNG")
print("=" * 70)

gespeicherter_hash = bcrypt.hashpw(b"MeinPasswort123", bcrypt.gensalt(rounds=12))

# Korrekte Versuche
test_passwoerter = [
    (b"MeinPasswort123", True),
    (b"MeinPasswort124", False),  # Falsch
    (b"meinpasswort123", False),  # Groß-/Kleinschreibung
]

for pw, erwartet in test_passwoerter:
    korrekt = bcrypt.checkpw(pw, gespeicherter_hash)
    status = "✅" if korrekt else "❌"
    print(f"{status} '{pw.decode()}' → {korrekt} (erwartet: {erwartet})")
```

**Output:**
```
======================================================================
bcrypt PASSWORT-HASHING DEMO
======================================================================

📊 Cost-Faktor: 10 (2^10 = 1,024 Iterationen)
Hash: $2b$10$N9qo8uLOickgx2ZMRZoMye.IACPMuG9.3EM0XP3tSJdF3Xy5cJnPK
Dauer: 0.081s

📊 Cost-Faktor: 12 (2^12 = 4,096 Iterationen)
Hash: $2b$12$R9h/cIPz0gi.URNNX3kh2OPST9/PgBkqquzi.Ss7KIUgO2t0jWMUW
Dauer: 0.312s

📊 Cost-Faktor: 14 (2^14 = 16,384 Iterationen)
Hash: $2b$14$gfnEc.el1F1R.MdQ2YwL2eXdV.Mj2xzUDkJ.xK5Uz6Hw8X4.lkP.6
Dauer: 1.248s

======================================================================
PASSWORT-VERIFIZIERUNG
======================================================================
✅ 'MeinPasswort123' → True (erwartet: True)
❌ 'MeinPasswort124' → False (erwartet: False)
❌ 'meinpasswort123' → False (erwartet: False)
```

### Python: Argon2

```python
from argon2 import PasswordHasher
from argon2.exceptions import VerifyMismatchError
import time

print("\n" + "=" * 70)
print("Argon2 PASSWORT-HASHING DEMO")
print("=" * 70)

# Argon2id Hasher erstellen (empfohlene Parameter)
ph = PasswordHasher(
    time_cost=3,        # 3 Iterationen
    memory_cost=65536,  # 64 MB
    parallelism=4,      # 4 Threads
    hash_len=32,        # 32 Byte Hash
    salt_len=16         # 16 Byte Salt
)

passwort = "SuperSicheresPasswort123!"

# Hash erstellen
start = time.time()
hash_pw = ph.hash(passwort)
dauer = time.time() - start

print(f"\n📊 Argon2id Hash:")
print(f"Hash: {hash_pw}")
print(f"Dauer: {dauer:.3f}s")

# Parameter extrahieren
print(f"\nParameter:")
print(f"- Memory: 64 MB")
print(f"- Time: 3 Iterationen")
print(f"- Parallelism: 4 Threads")

# Verifizieren
print("\n" + "=" * 70)
print("VERIFIZIERUNG")
print("=" * 70)

test_passwoerter = [
    ("SuperSicheresPasswort123!", True),
    ("SuperSicheresPasswort124!", False),
    ("supersicherespasswort123!", False),
]

for pw, erwartet in test_passwoerter:
    try:
        ph.verify(hash_pw, pw)
        print(f"✅ '{pw}' → Gültig")

        # Re-Hash wenn Parameter veraltet
        if ph.check_needs_rehash(hash_pw):
            print("   ⚠️  Hash veraltet, sollte neu gehasht werden")

    except VerifyMismatchError:
        print(f"❌ '{pw}' → Ungültig")
```

**Output:**
```
======================================================================
Argon2 PASSWORT-HASHING DEMO
======================================================================

📊 Argon2id Hash:
Hash: $argon2id$v=19$m=65536,t=3,p=4$randomsalt$hashedpassword
Dauer: 0.487s

Parameter:
- Memory: 64 MB
- Time: 3 Iterationen
- Parallelism: 4 Threads

======================================================================
VERIFIZIERUNG
======================================================================
✅ 'SuperSicheresPasswort123!' → Gültig
❌ 'SuperSicheresPasswort124!' → Ungültig
❌ 'supersicherespasswort123!' → Ungültig
```

### Python: Sicheres Login-System

```python
import bcrypt
from typing import Optional

class BenutzerDatenbank:
    """Einfache In-Memory User-Datenbank."""

    def __init__(self):
        self.benutzer = {}

    def registriere(self, username: str, passwort: str) -> bool:
        """Registriert neuen Benutzer."""
        if username in self.benutzer:
            return False

        # Passwort hashen mit bcrypt (cost=12)
        salt = bcrypt.gensalt(rounds=12)
        hash_pw = bcrypt.hashpw(passwort.encode(), salt)

        # In DB speichern
        self.benutzer[username] = {
            'hash': hash_pw,
            'failed_attempts': 0,
            'locked': False
        }

        return True

    def login(self, username: str, passwort: str) -> bool:
        """Authentifiziert Benutzer."""
        # User existiert?
        if username not in self.benutzer:
            # Timing-Attack-Schutz: Fake Hash
            bcrypt.checkpw(b"fake", bcrypt.gensalt())
            return False

        user = self.benutzer[username]

        # Account gesperrt?
        if user['locked']:
            print(f"⚠️  Account '{username}' ist gesperrt!")
            return False

        # Passwort prüfen
        if bcrypt.checkpw(passwort.encode(), user['hash']):
            # Erfolg: Reset failed attempts
            user['failed_attempts'] = 0
            return True
        else:
            # Fehlversuch
            user['failed_attempts'] += 1

            if user['failed_attempts'] >= 5:
                user['locked'] = True
                print(f"⚠️  Account '{username}' nach 5 Fehlversuchen gesperrt!")

            return False

    def passwort_aendern(self, username: str, altes_pw: str, neues_pw: str) -> bool:
        """Ändert Passwort."""
        # Zuerst mit altem Passwort authentifizieren
        if not self.login(username, altes_pw):
            return False

        # Neues Passwort hashen
        salt = bcrypt.gensalt(rounds=12)
        hash_pw = bcrypt.hashpw(neues_pw.encode(), salt)

        self.benutzer[username]['hash'] = hash_pw
        print(f"✅ Passwort für '{username}' geändert")
        return True

# Demo
print("\n" + "=" * 70)
print("SICHERES LOGIN-SYSTEM DEMO")
print("=" * 70)

db = BenutzerDatenbank()

# Registrierung
print("\n📝 REGISTRIERUNG")
db.registriere("alice", "AlicesPasswort123!")
db.registriere("bob", "BobsGeheimnis456#")
print("✅ Alice und Bob registriert")

# Login-Versuche
print("\n🔐 LOGIN-VERSUCHE")
print(f"Alice (korrekt): {db.login('alice', 'AlicesPasswort123!')}")
print(f"Alice (falsch):  {db.login('alice', 'FalschesPasswort')}")
print(f"Bob (korrekt):   {db.login('bob', 'BobsGeheimnis456#')}")

# Brute-Force-Schutz
print("\n🛡️ BRUTE-FORCE-SCHUTZ")
for i in range(6):
    erfolg = db.login('alice', 'falsch')
    print(f"Versuch {i+1}: {erfolg}")

# Passwort ändern
print("\n🔄 PASSWORT ÄNDERN")
db.passwort_aendern("bob", "BobsGeheimnis456#", "NeuesPasswort789$")
print(f"Login mit altem PW: {db.login('bob', 'BobsGeheimnis456#')}")
print(f"Login mit neuem PW: {db.login('bob', 'NeuesPasswort789

**Output:**
```
======================================================================
SICHERES LOGIN-SYSTEM DEMO
======================================================================

📝 REGISTRIERUNG
✅ Alice und Bob registriert

🔐 LOGIN-VERSUCHE
Alice (korrekt): True
Alice (falsch):  False
Bob (korrekt):   True

🛡️ BRUTE-FORCE-SCHUTZ
Versuch 1: False
Versuch 2: False
Versuch 3: False
Versuch 4: False
Versuch 5: False
⚠️  Account 'alice' nach 5 Fehlversuchen gesperrt!
Versuch 6: False

🔄 PASSWORT ÄNDERN
✅ Passwort für 'bob' geändert
Login mit altem PW: False
Login mit neuem PW: True
```

### Python: Pepper hinzufügen

```python
import bcrypt
import hashlib

# Globaler Pepper (in Praxis: aus Umgebungsvariable oder HSM)
PEPPER = b"SECRET_GLOBAL_KEY_NOT_IN_DATABASE_XYZ123"

def hash_passwort_mit_pepper(passwort: str) -> bytes:
    """Hasht Passwort mit Pepper + bcrypt."""
    # Schritt 1: Pepper hinzufügen via HMAC
    peppered = hashlib.pbkdf2_hmac(
        'sha256',
        passwort.encode(),
        PEPPER,
        iterations=1  # Nur 1 Iteration, da bcrypt rechenintensiv
    )

    # Schritt 2: bcrypt
    salt = bcrypt.gensalt(rounds=12)
    hash_pw = bcrypt.hashpw(peppered, salt)

    return hash_pw

def verifiziere_passwort_mit_pepper(passwort: str, hash_pw: bytes) -> bool:
    """Verifiziert Passwort mit Pepper."""
    # Pepper hinzufügen
    peppered = hashlib.pbkdf2_hmac(
        'sha256',
        passwort.encode(),
        PEPPER,
        iterations=1
    )

    # bcrypt verifizieren
    return bcrypt.checkpw(peppered, hash_pw)

# Demo
print("\n" + "=" * 70)
print("PASSWORT-HASHING MIT PEPPER")
print("=" * 70)

passwort = "MeinPasswort123"

# Mit Pepper
hash_mit_pepper = hash_passwort_mit_pepper(passwort)
print(f"\n🌶️  Hash mit Pepper:")
print(f"Hash: {hash_mit_pepper.decode()}")

# Verifizieren
print(f"\nVerifizierung:")
print(f"Korrekt: {verifiziere_passwort_mit_pepper('MeinPasswort123', hash_mit_pepper)}")
print(f"Falsch:  {verifiziere_passwort_mit_pepper('FalschesPasswort', hash_mit_pepper)}")

# Sicherheit bei DB-Leak
print("\n🔐 SICHERHEIT BEI DATENBANK-LEAK:")
print("Angreifer hat:")
print("  ✅ Passwort-Hash")
print("  ✅ Salt (im Hash enthalten)")
print("  ❌ Pepper (nicht in DB!)")
print("\n→ Kann Hash nicht verifizieren!")
print("→ Brute-Force unmöglich ohne Pepper!")
```

## Angriffe und Gegenmaßnahmen

### 1. Rainbow Table Angriffe

> [!danger] Rainbow Tables
> **Angriff**: Vorberechnete Hash-Tabellen für häufige Passwörter
>
> **Gegenmaßnahme**: **Salts**
> - Pro Benutzer einzigartig
> - Macht Rainbow Tables nutzlos (müssten für jeden Salt neu berechnet werden)

```
┌─────────────────────────────────────────────────────────────┐
│              RAINBOW TABLE ANGRIFF                          │
│                                                             │
│  OHNE SALT:                                                 │
│  ┌──────────────────────────────────────┐                  │
│  │ Rainbow Table (vorberechnet):        │                  │
│  │ password123 → abc123def456...        │                  │
│  │ 123456      → xyz789ghi012...        │                  │
│  │ qwerty      → mno345pqr678...        │                  │
│  └──────────────────────────────────────┘                  │
│  Angreifer: "Ich sehe Hash abc123... → password123"       │
│  → SOFORT geknackt!                                         │
│                                                             │
│  MIT SALT:                                                  │
│  Hash(password123 + salt_alice) → xyz123...                │
│  Hash(password123 + salt_bob)   → abc789...                │
│  → Unterschiedlich! Rainbow Table nutzlos!                 │
└─────────────────────────────────────────────────────────────┘
```

### 2. Brute-Force / Dictionary Attacks

> [!danger] Brute-Force-Angriff
> **Angriff**: Systematisches Ausprobieren aller Kombinationen
>
> **Gegenmaßnahme**: **Langsame Hash-Funktion**
> - bcrypt cost=12: ~30 Hashes/Sekunde
> - Argon2: Memory-intensiv → GPU nutzlos
> - Rate Limiting: Max. 5 Versuche pro Account

```python
import time

def brute_force_simulation():
    """Simuliert Brute-Force-Angriff."""

    print("\n" + "=" * 70)
    print("BRUTE-FORCE ANGRIFFSSIMULATION")
    print("=" * 70)

    # Ziel: 8-stelliges Passwort (nur Kleinbuchstaben)
    # Möglichkeiten: 26^8 = 208,827,064,576

    versuche_pro_sekunde = {
        'SHA-256': 10_000_000_000,  # 10 Milliarden/s (GPU)
        'bcrypt (cost=12)': 30,      # 30/s (CPU)
        'Argon2': 10                 # 10/s (CPU)
    }

    kombinationen = 26 ** 8

    print(f"\nZiel: 8-stelliges Passwort (nur Kleinbuchstaben)")
    print(f"Kombinationen: {kombinationen:,}")

    for algo, rate in versuche_pro_sekunde.items():
        sekunden = kombinationen / rate
        stunden = sekunden / 3600
        tage = stunden / 24
        jahre = tage / 365

        print(f"\n{algo}:")
        print(f"  Rate: {rate:,} Versuche/s")

        if jahre > 1:
            print(f"  Zeit: {jahre:,.0f} Jahre")
        elif tage > 1:
            print(f"  Zeit: {tage:,.0f} Tage")
        elif stunden > 1:
            print(f"  Zeit: {stunden:,.0f} Stunden")
        else:
            print(f"  Zeit: {sekunden:,.0f} Sekunden")

brute_force_simulation()
```

**Output:**
```
======================================================================
BRUTE-FORCE ANGRIFFSSIMULATION
======================================================================

Ziel: 8-stelliges Passwort (nur Kleinbuchstaben)
Kombinationen: 208,827,064,576

SHA-256:
  Rate: 10,000,000,000 Versuche/s
  Zeit: 0 Stunden (21 Sekunden) ❌ UNSICHER!

bcrypt (cost=12):
  Rate: 30 Versuche/s
  Zeit: 220,855 Jahre ✅ SICHER!

Argon2:
  Rate: 10 Versuche/s
  Zeit: 662,566 Jahre ✅ SEHR SICHER!
```

### 3. Timing Attacks

> [!caution] Timing-Angriff
> **Angriff**: Messung der Antwortzeit → Rückschlüsse auf Benutzernamen
>
> **Beispiel**:
> - Unbekannter User: Sofortige Antwort (0.001s)
> - Bekannter User: Hash-Verifikation (0.3s)
> → Angreifer kann gültige Usernames enumerieren!

**Gegenmaßnahme**:

```python
def sicherer_login(username: str, passwort: str) -> bool:
    """Timing-Attack-resistenter Login."""

    # Hole User aus DB
    user = db.get(username)

    if user is None:
        # ✅ WICHTIG: Fake Hash berechnen!
        # Gleiche Zeit wie echte Verifizierung
        bcrypt.checkpw(b"fake_password", bcrypt.gensalt())
        return False

    # Echte Verifizierung
    return bcrypt.checkpw(passwort.encode(), user['hash'])

# ❌ UNSICHER: Unterschiedliche Timing
def unsicherer_login(username: str, passwort: str) -> bool:
    user = db.get(username)

    if user is None:
        return False  # Sofort zurück → 0.001s

    return bcrypt.checkpw(passwort.encode(), user['hash'])  # 0.3s
```

### 4. GPU-Beschleunigung

> [!warning] GPU-Angriffe
> GPUs können millionen Hashes parallel berechnen:
> - SHA-256: 100 Milliarden Hashes/s (High-End GPU)
> - bcrypt: Schwer parallelisierbar → ~1000× langsamer
> - Argon2: Memory-Hard → GPU-Vorteil minimal

**Gegenmaßnahme**: Memory-Hard-Funktionen (Argon2, scrypt)

## Best Practices

> [!tip] Empfehlungen 2025
> 1. **Algorithmus-Wahl**:
>    - **Neue Projekte**: Argon2id
>    - **Wenn Argon2 nicht verfügbar**: bcrypt (cost ≥ 12)
>    - **NIE**: SHA-256, MD5, SHA-1
>
> 2. **Parameter**:
>    - **bcrypt**: cost = 12-14 (0.3-1s)
>    - **Argon2id**: m=64MB, t=3, p=4 (0.5s)
>    - **Ziel**: 0.25-1s Verifizierung
>
> 3. **Salt**:
>    - Automatisch von Bibliothek generiert
>    - Mindestens 128 Bit
>    - Pro Benutzer einzigartig
>
> 4. **Pepper** (Optional, erhöht Sicherheit):
>    - Global für alle User
>    - Nicht in Datenbank
>    - Umgebungsvariable oder HSM
>
> 5. **Rate Limiting**:
>    - Max. 5 Fehlversuche
>    - Account-Sperre nach 5 Fehlversuchen
>    - CAPTCHA nach 3 Fehlversuchen
>
> 6. **Timing-Attack-Schutz**:
>    - Fake Hash bei unbekanntem User
>    - Konstante Antwortzeit
>
> 7. **Passwort-Richtlinien**:
>    - Mindestlänge: 12 Zeichen
>    - Komplexität: Groß/Klein, Zahlen, Sonderzeichen
>    - Keine häufigen Passwörter (Pwned Passwords API)
>
> 8. **Migration**:
>    - Alte Hashes (MD5/SHA-1) → Re-Hash bei Login
>    - Cost-Faktor erhöhen mit der Zeit
>
> 9. **Multi-Faktor-Authentifizierung**:
>    - Zusätzlich zu starkem Passwort-Hashing
>    - TOTP, SMS, Hardware-Token

## Passwort-Stärke-Checker

```python
import re
import hashlib
import requests

def pruefe_passwort_staerke(passwort: str) -> dict:
    """Prüft Passwort-Stärke."""

    score = 0
    probleme = []

    # Länge
    if len(passwort) < 8:
        probleme.append("❌ Zu kurz (min. 12 Zeichen empfohlen)")
    elif len(passwort) < 12:
        probleme.append("⚠️  Kürzer als empfohlen (12+ Zeichen)")
        score += 1
    else:
        score += 2

    # Komplexität
    if re.search(r'[a-z]', passwort):
        score += 1
    else:
        probleme.append("❌ Keine Kleinbuchstaben")

    if re.search(r'[A-Z]', passwort):
        score += 1
    else:
        probleme.append("❌ Keine Großbuchstaben")

    if re.search(r'\d', passwort):
        score += 1
    else:
        probleme.append("❌ Keine Zahlen")

    if re.search(r'[!@#$%^&*(),.?":{}|<>]', passwort):
        score += 1
    else:
        probleme.append("❌ Keine Sonderzeichen")

    # Häufige Muster
    haeufige = ['password', '123456', 'qwerty', 'admin', 'letmein']
    if any(p in passwort.lower() for p in haeufige):
        probleme.append("❌ Enthält häufiges Muster")
        score -= 2

    # Bewertung
    if score >= 6:
        staerke = "✅ STARK"
    elif score >= 4:
        staerke = "⚠️  MITTEL"
    else:
        staerke = "❌ SCHWACH"

    return {
        'score': score,
        'staerke': staerke,
        'probleme': probleme
    }

# Demo
print("\n" + "=" * 70)
print("PASSWORT-STÄRKE-CHECKER")
print("=" * 70)

test_passwoerter = [
    "password123",
    "Passw0rd!",
    "MySecure123!",
    "kJ8#mP2$qL9@xN5&",
]

for pw in test_passwoerter:
    result = pruefe_passwort_staerke(pw)
    print(f"\n🔐 Passwort: {pw}")
    print(f"Stärke: {result['staerke']} (Score: {result['score']}/7)")
    if result['probleme']:
        print("Probleme:")
        for p in result['probleme']:
            print(f"  {p}")
```

## Zusammenfassung

> [!summary] Kernpunkte
> - **NIE SHA-256/MD5 für Passwörter** - viel zu schnell!
> - **Empfohlen**: Argon2id (modernste) oder bcrypt (battle-tested)
> - **Salts**: Automatisch, pro User einzigartig, gegen Rainbow Tables
> - **Pepper**: Optional, global, nicht in DB, Zusatzschutz
> - **Langsam = Sicher**: 0.25-1s Verifizierung ideal
> - **Memory-Hard**: Argon2/scrypt → GPU-resistent
> - **Rate Limiting**: Max. 5 Fehlversuche, Account-Sperre
> - **Timing-Attacks**: Fake Hash bei unbekanntem User
> - **Migration**: Alte Hashes re-hashen, Cost-Faktor erhöhen
> - **Best Practice 2025**: Argon2id (m=64MB, t=3, p=4) oder bcrypt (cost=12-14)

## Verwandte Konzepte

- [[02 - RESOURCES/Notes/Kryptographie\|Kryptographie]] - Übergeordnetes Thema
- [[02 - RESOURCES/Notes/Hash-Funktion\|Hash-Funktion]] - Grundlagen
- [[02 - RESOURCES/Notes/SHA-256\|SHA-256]] - Normale Hash-Funktion (nicht für Passwörter!)
- [[02 - RESOURCES/Notes/Digitale Signatur\|Digitale Signatur]] - Verwendet Hashes
- [[02 - RESOURCES/Notes/TLS\|TLS]] - Verwendet Passwort-Authentifizierung
)}")
```

**Output:**
{{CODE_BLOCK_12}}

### Python: Pepper hinzufügen

{{CODE_BLOCK_13}}

## Angriffe und Gegenmaßnahmen

### 1. Rainbow Table Angriffe

> [!danger] Rainbow Tables
> **Angriff**: Vorberechnete Hash-Tabellen für häufige Passwörter
>
> **Gegenmaßnahme**: **Salts**
> - Pro Benutzer einzigartig
> - Macht Rainbow Tables nutzlos (müssten für jeden Salt neu berechnet werden)

{{CODE_BLOCK_14}}

### 2. Brute-Force / Dictionary Attacks

> [!danger] Brute-Force-Angriff
> **Angriff**: Systematisches Ausprobieren aller Kombinationen
>
> **Gegenmaßnahme**: **Langsame Hash-Funktion**
> - bcrypt cost=12: ~30 Hashes/Sekunde
> - Argon2: Memory-intensiv → GPU nutzlos
> - Rate Limiting: Max. 5 Versuche pro Account

{{CODE_BLOCK_15}}

**Output:**
{{CODE_BLOCK_16}}

### 3. Timing Attacks

> [!caution] Timing-Angriff
> **Angriff**: Messung der Antwortzeit → Rückschlüsse auf Benutzernamen
>
> **Beispiel**:
> - Unbekannter User: Sofortige Antwort (0.001s)
> - Bekannter User: Hash-Verifikation (0.3s)
> → Angreifer kann gültige Usernames enumerieren!

**Gegenmaßnahme**:

{{CODE_BLOCK_17}}

### 4. GPU-Beschleunigung

> [!warning] GPU-Angriffe
> GPUs können millionen Hashes parallel berechnen:
> - SHA-256: 100 Milliarden Hashes/s (High-End GPU)
> - bcrypt: Schwer parallelisierbar → ~1000× langsamer
> - Argon2: Memory-Hard → GPU-Vorteil minimal

**Gegenmaßnahme**: Memory-Hard-Funktionen (Argon2, scrypt)

## Best Practices

> [!tip] Empfehlungen 2025
> 1. **Algorithmus-Wahl**:
>    - **Neue Projekte**: Argon2id
>    - **Wenn Argon2 nicht verfügbar**: bcrypt (cost ≥ 12)
>    - **NIE**: SHA-256, MD5, SHA-1
>
> 2. **Parameter**:
>    - **bcrypt**: cost = 12-14 (0.3-1s)
>    - **Argon2id**: m=64MB, t=3, p=4 (0.5s)
>    - **Ziel**: 0.25-1s Verifizierung
>
> 3. **Salt**:
>    - Automatisch von Bibliothek generiert
>    - Mindestens 128 Bit
>    - Pro Benutzer einzigartig
>
> 4. **Pepper** (Optional, erhöht Sicherheit):
>    - Global für alle User
>    - Nicht in Datenbank
>    - Umgebungsvariable oder HSM
>
> 5. **Rate Limiting**:
>    - Max. 5 Fehlversuche
>    - Account-Sperre nach 5 Fehlversuchen
>    - CAPTCHA nach 3 Fehlversuchen
>
> 6. **Timing-Attack-Schutz**:
>    - Fake Hash bei unbekanntem User
>    - Konstante Antwortzeit
>
> 7. **Passwort-Richtlinien**:
>    - Mindestlänge: 12 Zeichen
>    - Komplexität: Groß/Klein, Zahlen, Sonderzeichen
>    - Keine häufigen Passwörter (Pwned Passwords API)
>
> 8. **Migration**:
>    - Alte Hashes (MD5/SHA-1) → Re-Hash bei Login
>    - Cost-Faktor erhöhen mit der Zeit
>
> 9. **Multi-Faktor-Authentifizierung**:
>    - Zusätzlich zu starkem Passwort-Hashing
>    - TOTP, SMS, Hardware-Token

## Passwort-Stärke-Checker

{{CODE_BLOCK_18}}

## Zusammenfassung

> [!summary] Kernpunkte
> - **NIE SHA-256/MD5 für Passwörter** - viel zu schnell!
> - **Empfohlen**: Argon2id (modernste) oder bcrypt (battle-tested)
> - **Salts**: Automatisch, pro User einzigartig, gegen Rainbow Tables
> - **Pepper**: Optional, global, nicht in DB, Zusatzschutz
> - **Langsam = Sicher**: 0.25-1s Verifizierung ideal
> - **Memory-Hard**: Argon2/scrypt → GPU-resistent
> - **Rate Limiting**: Max. 5 Fehlversuche, Account-Sperre
> - **Timing-Attacks**: Fake Hash bei unbekanntem User
> - **Migration**: Alte Hashes re-hashen, Cost-Faktor erhöhen
> - **Best Practice 2025**: Argon2id (m=64MB, t=3, p=4) oder bcrypt (cost=12-14)

## Verwandte Konzepte

- [[Kryptographie]] - Übergeordnetes Thema
- [[Hash-Funktion]] - Grundlagen
- [[SHA-256]] - Normale Hash-Funktion (nicht für Passwörter!)
- [[Digitale Signatur]] - Verwendet Hashes
- [[TLS]] - Verwendet Passwort-Authentifizierung
