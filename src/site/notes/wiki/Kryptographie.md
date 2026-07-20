---
{"dg-publish":true,"permalink":"/wiki/kryptographie/","tags":["informatik/sicherheit"],"noteIcon":"","updated":"2026-07-19T03:56:26.000+02:00","dg-note-properties":{"tags":["informatik/sicherheit"],"links":null,"created_date":"2024-10-22","aliases":["cryptography"]}}
---

>Kryptographie ist die Wissenschaft, die Informationen verschlüsselt. Das bedeutet: Die Informationen werden so verändert, dass fremde Personen sie nicht lesen können.
>Nur Personen mit dem richtigen Schlüssel können die Informationen wieder lesen.

>[!important] Wichtig
>Es gibt zwei Arten von Sicherheit in der Kryptographie:
>1. Einfache [[wiki/Verschlüsselung\|Verschlüsselung]] - schützt vor normalen Personen
>2. Starke [[wiki/Verschlüsselung\|Verschlüsselung]] - schützt vor Regierungen und Geheimdiensten
>
>Alles dazwischen ist nicht sicher genug!
# I. Grundlagen der Kryptographie

>Kryptographie besteht aus vielen verschiedenen Techniken. Zusammen bilden sie ein System zum Schutz von Daten.
>Die Geschichte der Kryptographie ist über 2000 Jahre alt.
___

## Kryptographie - Die Basis

>Kryptographie macht aus lesbaren Daten (Klartext) einen unlesbaren Text (Geheimtext). Später kann man den Geheimtext wieder in lesbaren Text verwandeln.

**Die drei Hauptziele:**
- **[[wiki/Vertraulichkeit\|Vertraulichkeit]]** - Nur du und der Empfänger können die Nachricht lesen (wie ein Brief im verschlossenen Umschlag)
- **[[wiki/Integrität\|Integrität]]** - Niemand kann die Nachricht heimlich ändern (wie ein Siegel auf einem Brief)
- **[[wiki/Authentizität\|Authentizität]]** - Du weißt genau, wer die Nachricht geschickt hat (wie eine Unterschrift)

## [[wiki/Verschlüsselung\|Verschlüsselung]] vs [[wiki/Entschlüsselung\|Entschlüsselung]]

>[[wiki/Verschlüsselung\|Verschlüsselung]] macht aus lesbarem Text einen Geheimcode. [[wiki/Entschlüsselung\|Entschlüsselung]] verwandelt den Geheimcode wieder zurück in lesbaren Text.

### Einfaches Beispiel:
1. Du schreibst: "Hallo Welt" (Klartext)
2. [[wiki/Verschlüsselung\|Verschlüsselung]]: "Hallo Welt" → "Xp2mK9sL" (Geheimtext)
3. Dein Freund erhält: "Xp2mK9sL"
4. [[wiki/Entschlüsselung\|Entschlüsselung]]: "Xp2mK9sL" → "Hallo Welt"

## Schlüssel - Das Geheimnis

>Ein Schlüssel ist wie ein Passwort für deine [[wiki/Verschlüsselung\|Verschlüsselung]]. Ohne den richtigen Schlüssel kann niemand den Geheimtext lesen.

**Schlüssellänge:** Je länger der Schlüssel, desto sicherer ist die Verschlüsselung.
- 128 [[wiki/Bit\|Bit]] = $2^{128}$ mögliche Schlüssel (sehr viele!)
- 256 [[wiki/Bit\|Bit]] = $2^{256}$ mögliche Schlüssel (fast unmöglich zu knacken)

___

# II. [[wiki/Symmetrische Verschlüsselung\|Symmetrische Verschlüsselung]]

>Bei [[wiki/Symmetrische Verschlüsselung\|Symmetrische Verschlüsselung]] benutzen Sender und Empfänger denselben Schlüssel. Das ist wie zwei Personen, die beide denselben Tresor-Code kennen.

**Das Problem:** Wie bringst du den Schlüssel sicher zum Empfänger? Das nennt man das Schlüsselaustausch-Problem.
___

## Block-Chiffre vs Stream-Chiffre

>Es gibt zwei verschiedene Methoden für [[wiki/Symmetrische Verschlüsselung\|Symmetrische Verschlüsselung]]: Entweder verschlüsselt man Datenblöcke oder einzelne Zeichen.

| Verfahren | Funktionsweise | Beispiel |
|-----------|---------------|----------|
| Block-Chiffre | Verschlüsselt Daten in festen Blöcken (z.B. 128 [[wiki/Bit\|Bit]]) | [[wiki/AES\|AES]] |
| Stream-Chiffre | Verschlüsselt Daten [[wiki/Bit\|Bit]] für [[wiki/Bit\|Bit]] oder [[wiki/Byte\|Byte]] für [[wiki/Byte\|Byte]] | ChaCha20 |

## [[wiki/AES\|AES]] - Der Standard

>[[wiki/AES\|AES]] (Advanced Encryption Standard) ist der beste Standard für [[wiki/Symmetrische Verschlüsselung\|Symmetrische Verschlüsselung]]. Man benutzt [[wiki/AES\|AES]] überall - von [[wiki/WLAN\|WLAN]] bis zu verschlüsselten Festplatten.

**Eigenschaften von [[wiki/AES\|AES]]:**
- Schlüssellänge: 128, 192 oder 256 [[wiki/Bit\|Bit]]
- Blockgröße: 128 [[wiki/Bit\|Bit]]
- Sehr schnell (funktioniert gut in Hardware und [[wiki/Software\|Software]])
- Gilt als unknackbar, wenn man es richtig benutzt

>[!example] Wo wird [[wiki/AES\|AES]] benutzt?
>- [[wiki/HTTPS\|HTTPS]]-Verbindungen (zusammen mit [[wiki/TLS\|TLS]])
>- Verschlüsselte Festplatten
>- [[wiki/VPN\|VPN]]-Verbindungen
>- Messenger-Apps (wie Signal, WhatsApp)

## Betriebsmodus

>Block-Chiffren wie [[wiki/AES\|AES]] brauchen einen Betriebsmodus. Der Betriebsmodus sagt, wie man mehrere Blöcke nacheinander verschlüsselt.

**Wichtige Betriebsmodi:**
- **ECB** (Electronic Codebook) - Verschlüsselt jeden Block einzeln, UNSICHER bei gleichen Blöcken
- **CBC** (Cipher Block Chaining) - Jeder Block hängt vom vorherigen Block ab
- **CTR** (Counter Mode) - Verwandelt Block-Chiffre in Stream-Chiffre
- **GCM** (Galois/Counter Mode) - CTR + [[wiki/Authentizität\|Authentizität]], moderner Standard

___

# III. [[wiki/Asymmetrische Verschlüsselung\|Asymmetrische Verschlüsselung]]

>[[wiki/Asymmetrische Verschlüsselung\|Asymmetrische Verschlüsselung]] löst das Schlüsselaustausch-Problem auf elegante Weise: Jede Person hat zwei Schlüssel - einen öffentlichen und einen privaten Schlüssel.

**Einfach erklärt:**
- Der **öffentliche Schlüssel** ist wie deine Adresse (jeder darf sie kennen)
- Der **private Schlüssel** ist wie dein Haustürschlüssel (nur für dich!)
___

## Public-Key-Kryptographie - Das Konzept

>Bei Public-Key-Kryptographie gibt es zwei mathematisch verbundene Schlüssel: Was mit dem einen Schlüssel verschlüsselt wird, kann nur mit dem anderen Schlüssel entschlüsselt werden.

### So funktioniert es:
1. Alice möchte Bob eine Nachricht schicken
2. Alice holt sich Bobs öffentlichen Schlüssel (jeder kann ihn sehen)
3. Alice verschlüsselt die Nachricht mit Bobs öffentlichem Schlüssel
4. Nur Bob kann mit seinem privaten Schlüssel die Nachricht [[wiki/Entschlüsselung\|entschlüsseln]]

## [[wiki/RSA\|RSA]] - Der Klassiker

>[[wiki/RSA\|RSA]] ist das bekannteste asymmetrische Verfahren. [[wiki/RSA\|RSA]] basiert auf einem mathematischen Problem: Es ist sehr schwer, große Zahlen in ihre [[wiki/Primfaktoren\|Primfaktoren]] zu zerlegen.

**Mathematische Basis:**
Zwei große Primzahlen $p$ und $q$ multiplizieren ist einfach: $n = p \times q$
Aber aus $n$ wieder $p$ und $q$ herauszufinden ist extrem schwer (bei großen Zahlen)!

**[[wiki/RSA\|RSA]]-Parameter:**
- Schlüssellänge: mindestens 2048 [[wiki/Bit\|Bit]], besser 4096 [[wiki/Bit\|Bit]]
- Langsamer als [[wiki/Symmetrische Verschlüsselung\|Symmetrische Verschlüsselung]]
- Wird meist nur für Schlüsselaustausch benutzt

## [[wiki/ECC\|ECC]] - Elliptic Curve Cryptography

>[[wiki/ECC\|ECC]] ist die moderne Alternative zu [[wiki/RSA\|RSA]]. [[wiki/ECC\|ECC]] basiert auf elliptischen Kurven und braucht viel kürzere Schlüssel für dieselbe Sicherheit.

| Sicherheitslevel | [[wiki/RSA\|RSA]] Schlüssellänge | [[wiki/ECC\|ECC]] Schlüssellänge |
|------------------|---------------------------|---------------------------|
| Standard | 2048 [[wiki/Bit\|Bit]] | 256 [[wiki/Bit\|Bit]] |
| Hoch | 3072 [[wiki/Bit\|Bit]] | 384 [[wiki/Bit\|Bit]] |
| Sehr hoch | 4096 [[wiki/Bit\|Bit]] | 512 [[wiki/Bit\|Bit]] |

**Vorteile von [[wiki/ECC\|ECC]]:**
- Kleinere Schlüssel = weniger Speicher und Bandbreite
- Schneller als [[wiki/RSA\|RSA]] bei gleicher Sicherheit
- Ideal für mobile Geräte und IoT-Geräte

___

# IV. [[wiki/Hash-Funktion\|Hash-Funktion]]en

>[[wiki/Hash-Funktion\|Hash-Funktion]]en sind wie digitale Fingerabdrücke: Sie verwandeln beliebig lange Daten in eine kurze, eindeutige Zeichenkette mit fester Länge.

**Wichtig:** Eine [[wiki/Hash-Funktion\|Hash-Funktion]] ist eine Einbahnstraße - aus dem Hash-Wert kann man die Originaldaten nicht zurückrechnen.
___

## Kryptographische [[wiki/Hash-Funktion\|Hash-Funktion]] - Eigenschaften

>Eine gute kryptographische [[wiki/Hash-Funktion\|Hash-Funktion]] muss drei wichtige Eigenschaften haben, damit sie sicher ist.

**Die drei Sicherheitseigenschaften:**
- **Einwegfunktion** - Aus dem Hash-Wert kann niemand die Originaldaten berechnen
- **Kollisionsresistenz** - Es ist praktisch unmöglich, zwei unterschiedliche Eingaben mit gleichem Hash-Wert zu finden
- **Lawineneffekt** - Die kleinste Änderung der Eingabe ändert den Hash-Wert komplett

>[!example] Lawineneffekt Beispiel
>- Eingabe: "Hallo" → Hash-Wert: "a3f5b8c9..."
>- Eingabe: "Hallo!" → Hash-Wert: "7d2e1f4a..." (völlig anders!)

## SHA-Familie - Die Standards

>Die SHA-Familie (Secure Hash Algorithm) sind die am meisten benutzten [[wiki/Hash-Funktion\|Hash-Funktion]]en. SHA-2 und SHA-3 gelten heute als sicher.

| [[wiki/Algorithmus\|Algorithmus]] | Hash-Wert-Länge | Status |
|-------------|-------------------|--------|
| SHA-1 | 160 [[wiki/Bit\|Bit]] | ❌ UNSICHER - nicht mehr verwenden! |
| [[wiki/SHA-256\|SHA-256]] | 256 [[wiki/Bit\|Bit]] | ✅ Sicher - weit verbreitet |
| SHA-512 | 512 [[wiki/Bit\|Bit]] | ✅ Sehr sicher |
| SHA-3 | 224-512 [[wiki/Bit\|Bit]] | ✅ Neuester Standard |

## Anwendungen von [[wiki/Hash-Funktion\|Hash-Funktion]]en

>[[wiki/Hash-Funktion\|Hash-Funktion]]en sind überall - oft ohne dass du es merkst. Sie schützen deine Passwörter und prüfen die [[wiki/Integrität\|Integrität]] von Daten.

**Typische Einsatzgebiete:**
- Passwort-Speicherung - Websites speichern nur den Hash-Wert deines Passworts, nie das Passwort selbst
- Checksummen - Prüfen, ob eine heruntergeladene Datei korrekt ist
- [[wiki/Digitale Signatur\|Digitale Signatur]] - Signiert wird der Hash-Wert, nicht die ganze Datei
- Blockchain - Jeder Block enthält den Hash-Wert des vorherigen Blocks

### Warum nicht direkt das Passwort speichern?
1. Du gibst Passwort "geheim123" ein
2. [[wiki/Server\|Server]] berechnet Hash-Wert: [[wiki/SHA-256\|SHA-256]]("geheim123") = "a3f5b8..."
3. [[wiki/Server\|Server]] speichert nur "a3f5b8..." in der [[wiki/Datenbank\|Datenbank]]
4. Wenn die [[wiki/Datenbank\|Datenbank]] gehackt wird, sehen Angreifer nur den Hash-Wert, nicht dein Passwort

## HMAC - Hash mit Schlüssel

>HMAC (Hash-based Message Authentication Code) kombiniert eine [[wiki/Hash-Funktion\|Hash-Funktion]] mit einem geheimen Schlüssel. So garantiert man [[wiki/Integrität\|Integrität]] UND [[wiki/Authentizität\|Authentizität]].

**Funktionsweise:**
$$\text{HMAC}(K, M) = H((K \oplus \text{opad}) || H((K \oplus \text{ipad}) || M))$$

Einfach gesagt: Die [[wiki/Hash-Funktion\|Hash-Funktion]] wird zweimal angewendet und mit einem Schlüssel $K$ gemischt

**Verwendung:**
- [[wiki/API\|API]]-[[wiki/Authentifizierung\|Authentifizierung]] (z.B. bei REST-APIs)
- [[wiki/TLS\|TLS]]-Verbindungen für [[wiki/Integrität\|Integrität]]
- JWT (JSON Web Tokens)

___

# V. [[wiki/Digitale Signatur\|Digitale Signatur]]en

>[[wiki/Digitale Signatur\|Digitale Signatur]]en sind wie deine handschriftliche Unterschrift in der digitalen Welt - sie beweisen, dass DU eine Nachricht geschickt hast und sie nicht verändert wurde.

**Unterschied zur [[wiki/Verschlüsselung\|Verschlüsselung]]:** Verschlüsselung hält Nachrichten geheim. [[wiki/Digitale Signatur\|Digitale Signatur]]en beweisen [[wiki/Authentizität\|Authentizität]] und [[wiki/Integrität\|Integrität]].
___

## Wie funktioniert eine [[wiki/Digitale Signatur\|Digitale Signatur]]?

>[[wiki/Digitale Signatur\|Digitale Signatur]]en nutzen [[wiki/Asymmetrische Verschlüsselung\|Asymmetrische Verschlüsselung]], aber andersherum: Du signierst mit deinem privaten Schlüssel, andere prüfen mit deinem öffentlichen Schlüssel.

### Schritt-für-Schritt: Signieren
1. Alice schreibt Nachricht "Überweise 100€ an Bob"
2. Alice berechnet Hash-Wert der Nachricht: [[wiki/SHA-256\|SHA-256]](...) = "a3f5..."
3. Alice verschlüsselt den Hash-Wert mit ihrem privaten Schlüssel → [[wiki/Digitale Signatur\|Digitale Signatur]]
4. Alice schickt: Nachricht + [[wiki/Digitale Signatur\|Digitale Signatur]]

### Schritt-für-Schritt: Prüfen
1. Bob erhält: Nachricht + [[wiki/Digitale Signatur\|Digitale Signatur]]
2. Bob berechnet Hash-Wert der Nachricht: [[wiki/SHA-256\|SHA-256]](...) = "a3f5..."
3. Bob entschlüsselt [[wiki/Digitale Signatur\|Digitale Signatur]] mit Alice's öffentlichem Schlüssel → sollte "a3f5..." ergeben
4. Stimmen die Hash-Werte überein? ✅ Signatur ist gültig!

## [[wiki/RSA\|RSA]]-Signatur vs ECDSA

>Genau wie bei [[wiki/Verschlüsselung\|Verschlüsselung]] gibt es auch bei [[wiki/Digitale Signatur\|Digitale Signatur]]en verschiedene Algorithmen. Die wichtigsten sind RSA-Signatur und ECDSA.

| Eigenschaft | RSA-Signatur | ECDSA |
|-------------|-----------------|-----------|
| Basis | Primfaktorzerlegung | Elliptische Kurven |
| Signaturgröße | 2048-4096 [[wiki/Bit\|Bit]] | 256-512 [[wiki/Bit\|Bit]] |
| Geschwindigkeit | Langsamer | Schneller |
| Verwendung | [[wiki/TLS\|TLS]], X.509-Zertifikate | Bitcoin, moderne Systeme |

## Zertifikat und PKI

>Ein Zertifikat ist wie ein digitaler Personalausweis - es bescheinigt, dass ein öffentlicher Schlüssel wirklich zu einer bestimmten Person oder Website gehört.

**Das Problem ohne Zertifikat:**
Woher weißt du, dass der öffentliche Schlüssel von "Alice" wirklich von Alice ist und nicht von einem Angreifer?

**Die Lösung: PKI (Public Key Infrastructure)**
- **Certificate Authority (CA)** - Vertrauenswürdige Organisation, die Zertifikate ausstellt
- **Root-Zertifikat** - Die CAs, denen dein Browser/System vertraut
- **Zertifikatskette** - Hierarchie von Zertifikaten bis zur Root-CA

>[!example] Beispiel: [[wiki/HTTPS\|HTTPS]]-Verbindung
>1. Du besuchst [[wiki/HTTPS\|https]]://bank.de
>2. Server schickt X.509-Zertifikat mit öffentlichem Schlüssel
>3. Zertifikat ist von CA "DigiCert" signiert
>4. Dein Browser prüft: Ist DigiCert eine vertrauenswürdige Root-CA? ✅
>5. Ist die [[wiki/Digitale Signatur\|Digitale Signatur]] der CA gültig? ✅
>6. Browser zeigt 🔒 - Verbindung ist sicher!

___

# VI. Kryptographische Protokolle

>Kryptographische Protokolle kombinieren verschiedene Verfahren ([[wiki/Verschlüsselung\|Verschlüsselung]], [[wiki/Hash-Funktion\|Hash-Funktion]]en, [[wiki/Digitale Signatur\|Digitale Signatur]]en), um sichere Kommunikation zu ermöglichen.

**Was ist ein Protokoll?** Ein Protokoll ist wie ein Rezept: Es definiert genau, wer wann was macht, damit am Ende sichere Kommunikation steht.
___

## [[wiki/Diffie-Hellman\|Diffie-Hellman]] - Schlüsselaustausch

>[[wiki/Diffie-Hellman\|Diffie-Hellman]] löst ein fundamentales Problem: Wie können zwei Personen über eine unsichere Leitung einen gemeinsamen geheimen Schlüssel vereinbaren?

### Die Idee (vereinfacht):
1. Alice und Bob einigen sich öffentlich auf Startwerte $g$ und $p$
2. Alice wählt geheime Zahl $a$, berechnet $A = g^a \mod p$ und schickt $A$ an Bob
3. Bob wählt geheime Zahl $b$, berechnet $B = g^b \mod p$ und schickt $B$ an Alice
4. Alice berechnet: $K = B^a \mod p$
5. Bob berechnet: $K = A^b \mod p$
6. Beide haben jetzt denselben geheimen Schlüssel $K$! 🎉

**Warum ist das sicher?**
Ein Angreifer sieht $g$, $p$, $A$ und $B$, aber aus diesen öffentlichen Werten $a$ oder $b$ zu berechnen ist extrem schwer (Diskreter Logarithmus-Problem)

## [[wiki/TLS\|TLS]] - Transport Layer Security

>[[wiki/TLS\|TLS]] (früher SSL genannt) ist DAS Protokoll für sichere [[wiki/Internet\|Internet]]-Verbindungen. Jede [[wiki/HTTPS\|HTTPS]]-Website nutzt [[wiki/TLS\|TLS]].

**Was macht [[wiki/TLS\|TLS]]?**
- **[[wiki/Authentizität\|Authentizität]]** - [[wiki/Server\|Server]] beweist Identität mit Zertifikat
- **[[wiki/Vertraulichkeit\|Vertraulichkeit]]** - Daten werden verschlüsselt übertragen
- **[[wiki/Integrität\|Integrität]]** - Daten können nicht unbemerkt verändert werden

### [[wiki/TLS\|TLS]]-Handshake - So läuft es ab:
1. **Client Hello:** Browser sagt welche Verschlüsselungen er unterstützt
2. **[[wiki/Server\|Server]] Hello:** Server wählt Verschlüsselung und schickt Zertifikat
3. **Schlüsselaustausch:** Mit [[wiki/Diffie-Hellman\|Diffie-Hellman]] oder [[wiki/RSA\|RSA]] wird gemeinsamer Schlüssel erzeugt
4. **Fertig:** Ab jetzt wird mit [[wiki/Symmetrische Verschlüsselung\|Symmetrische Verschlüsselung]] ([[wiki/AES\|AES]]) kommuniziert

## Perfect Forward Secrecy

>Perfect Forward Secrecy (PFS) bedeutet: Selbst wenn der private Schlüssel des Servers gestohlen wird, bleiben alte Verbindungen sicher.

**Wie funktioniert das?**
Statt [[wiki/RSA\|RSA]] wird [[wiki/Diffie-Hellman\|Diffie-Hellman]] mit temporären Schlüsseln benutzt. Für jede Verbindung wird ein neuer Schlüssel generiert und danach gelöscht.

**Moderne [[wiki/TLS\|TLS]]-Versionen:**
- **[[wiki/TLS\|TLS]] 1.2** - Aktueller Standard, PFS optional
- **[[wiki/TLS\|TLS]] 1.3** - Neueste Version, PFS verpflichtend, schnellerer Handshake

___

# VII. Mathematische Grundlagen

>Moderne Kryptographie basiert auf mathematischen Problemen. Diese Probleme sind in eine Richtung leicht zu lösen, aber in die andere Richtung extrem schwer.

**Wichtig:** Du musst kein Mathe-Genie sein, aber die Grundideen zu verstehen hilft dir, Kryptographie richtig einzusetzen.
___

## Primzahlen und Primfaktorzerlegung

>Primzahlen sind die Bausteine der Zahlentheorie und die Basis für [[wiki/RSA\|RSA]].

**Die Einbahnstraße:**
- **Einfach:** Zwei Primzahlen multiplizieren: $61 \times 53 = 3233$ ⚡
- **Schwer:** Von $3233$ zurück zu $61$ und $53$ finden 🐌

>[!note] Warum ist das schwer?
>Bei kleinen Zahlen ist es noch machbar. Aber bei [[wiki/RSA\|RSA]] benutzen wir Primzahlen mit 300+ Stellen. Die Primfaktorzerlegung würde selbst für Supercomputer Jahrmillionen dauern!

## Modulare Arithmetik

>Modulare Arithmetik ist wie Rechnen mit einer Uhr - nach 12 geht es wieder bei 1 los. In Kryptographie: nach $p$ geht es bei 0 los.

**Notation:** $a \equiv b \pmod{m}$
Bedeutet: $a$ und $b$ haben denselben Rest bei Division durch $m$

**Beispiele:**
- $17 \equiv 5 \pmod{12}$ (wie 17 Uhr = 5 Uhr am Nachmittag)
- $25 \equiv 4 \pmod{7}$ (Rest von 25 ÷ 7 ist 4)
- $10 \times 10 \equiv 2 \pmod{7}$ (100 mod 7 = 2)

## Diskreter Logarithmus

>Das Diskreter Logarithmus-Problem ist die mathematische Basis für [[wiki/Diffie-Hellman\|Diffie-Hellman]] und [[wiki/ECC\|ECC]].

**Das Problem:**
- **Einfach:** Gegeben $g$, $x$, $p$, berechne $y = g^x \mod p$ ⚡
- **Schwer:** Gegeben $g$, $y$, $p$, finde $x$ sodass $y = g^x \mod p$ 🐌

**Beispiel:**
- Einfach: $3^5 \mod 17 = 243 \mod 17 = 5$
- Schwer: Finde $x$, wenn $3^x \mod 17 = 5$ (Antwort: $x=5$, aber nur durch Ausprobieren!)

## Elliptische Kurven

>Elliptische Kurven sind spezielle mathematische Kurven mit einer Gruppenstruktur. [[wiki/ECC\|ECC]] nutzt diese für sehr effiziente Kryptographie.

**Kurven-Gleichung:** $y^2 = x^3 + ax + b$

**Punkt-Addition auf der Kurve:**
Man kann zwei Punkte auf der Kurve "addieren" und erhält einen neuen Punkt auf der Kurve. Diese Operation ist effizient, aber schwer umkehrbar.

>[!tip] Warum sind Elliptische Kurven gut?
>- Das Diskreter Logarithmus-Problem auf Kurven ist NOCH schwerer
>- Deshalb braucht man viel kürzere Schlüssel
>- 256-[[wiki/Bit\|Bit]] [[wiki/ECC\|ECC]] ≈ 3072-[[wiki/Bit\|Bit]] [[wiki/RSA\|RSA]]

## Zufallszahlen und Entropie

>Gute Zufallszahlen sind EXTREM wichtig für Kryptographie. Schlechte Zufallszahlen = unsichere [[wiki/Verschlüsselung\|Verschlüsselung]].

**Unterschied:**
- **Pseudozufallszahlen** - Von [[wiki/Algorithmus\|Algorithmus]] berechnet, vorhersagbar wenn man den Startwert kennt
- **Kryptographisch sichere Zufallszahlen** - Nicht vorhersagbar, aus Entropie-Quellen (Mausbewegungen, Netzwerk-Timing, Hardware-Rauschen)

>[!important] Wichtig für Entwickler
>✅ Verwende: `/dev/urandom`, `CryptGenRandom()`, `crypto.getRandomValues()`
>❌ NICHT verwenden: `rand()`, `Math.random()` für Kryptographie

___

# VIII. Praktische Anwendungen

>Jetzt wird es konkret: Kryptographie ist nicht nur Theorie, sondern schützt dich jeden Tag im Internet, auf deinem Smartphone und beim Online-Banking.

**Als IT-Profi musst du wissen:** WANN welche Verfahren eingesetzt werden - und vor allem welche Fehler du vermeiden solltest.
___

## [[wiki/Passwort-Hashing\|Passwort-Hashing]] richtig gemacht

>NIEMALS Passwörter im Klartext oder mit einfachem [[wiki/SHA-256\|SHA-256]] speichern! Verwende spezialisierte Passwort-Hash-Funktionen.

**Die richtigen Werkzeuge:**

| Verfahren | Status | Verwendung |
|-----------|--------|-----------|
| bcrypt | ✅ Empfohlen | Standard für Web-Apps |
| scrypt | ✅ Sehr gut | Hoher Speicherbedarf gegen Hardware-Angriffe |
| Argon2 | ✅ Neuester Standard | Gewinner Password Hashing Competition 2015 |
| MD5, SHA-1 | ❌ UNSICHER | Nie für Passwörter verwenden! |

>[!warning] Warum nicht einfach [[wiki/SHA-256\|SHA-256]]?
>- [[wiki/SHA-256\|SHA-256]] ist ZU schnell - Angreifer können Milliarden Passwörter pro Sekunde testen
>- bcrypt, scrypt, Argon2 sind absichtlich langsam
>- Sie verwenden Salt, um Rainbow Table-Angriffe zu verhindern

## [[wiki/HTTPS\|HTTPS]] und [[wiki/TLS\|TLS]] in der Praxis

>Jede moderne Website MUSS [[wiki/HTTPS\|HTTPS]] benutzen. Ohne [[wiki/TLS\|TLS]] können Angreifer im WLAN alle Daten mitlesen.

**[[wiki/TLS\|TLS]]-Best-Practices:**
- Verwende TLS 1.3 oder mindestens TLS 1.2
- Deaktiviere TLS 1.0 und TLS 1.1 (unsicher)
- Aktiviere Perfect Forward Secrecy (PFS)
- Verwende starke Cipher Suites (z.B. mit AES-GCM)
- Nutze HSTS (HTTP Strict Transport Security)

>[!tip] Tools zum Testen
>- SSL Labs Server Test - bewertet deine [[wiki/TLS\|TLS]]-Konfiguration
>- Let's Encrypt - Kostenlose Zertifikate
>- Certbot - Automatische Zertifikats-Erneuerung

## End-to-End-Verschlüsselung

>Bei End-to-End-Verschlüsselung (E2EE) können nur Sender und Empfänger die Nachricht lesen - nicht mal der Server-Betreiber.

**Beispiele für E2EE:**
- Signal-Protokoll - Wird in Signal, WhatsApp, Facebook Messenger benutzt
- PGP - Für verschlüsselte E-Mails
- Matrix - Offenes Protokoll für verschlüsselte Chats

## VPN und IPsec

>VPNs verschlüsseln deinen gesamten Netzwerk-Traffic. [[wiki/IPSec\|IPsec]] ist das Standard-Protokoll dafür.

**IPsec-Modi:**
- **Transport Mode** - Nur Daten werden verschlüsselt
- **Tunnel Mode** - Komplettes [[wiki/Datenpakete\|IP-Pakete]] wird verschlüsselt (für VPNs)

**Moderne [[wiki/VPN\|VPN]]-Protokolle:**
- **WireGuard** - Sehr schnell, modernes Design, nur 4000 Zeilen Code
- **OpenVPN** - Etabliert, flexibel, aber komplex
- **IKEv2/[[wiki/IPSec\|IPsec]]** - Standard für Firmen-VPNs

## Blockchain und Kryptowährungen

>Blockchain kombiniert [[wiki/Hash-Funktion\|Hash-Funktion]]en, [[wiki/Digitale Signatur\|Digitale Signatur]]en und Proof-of-Work zu einem dezentralen, manipulationssicheren System.

**Wie Blockchain Kryptographie nutzt:**
- **Hash-Kette** - Jeder Block enthält Hash-Wert des vorherigen Blocks
- **[[wiki/Digitale Signatur\|Digitale Signatur]]** - Transaktionen werden mit [[wiki/Digitale Signatur\|ECDSA]] signiert
- **Merkle-Tree** - Effiziente Verkettung vieler Transaktionen mit [[wiki/Hash-Funktion\|Hash-Funktion]]en
- **Public Key** = deine Bitcoin-Adresse (vereinfacht)

>[!example] Bitcoin-Transaktion
>1. Alice signiert mit ihrem privaten Schlüssel: "Sende 0.5 BTC an Bob"
>2. [[wiki/Netzwerk\|Netzwerk]] prüft [[wiki/Digitale Signatur\|Digitale Signatur]] mit Alice's öffentlichem Schlüssel
>3. Miner packen Transaktion in Block
>4. Block wird mit Hash-Wert des vorherigen Blocks verkettet

## Häufige Fehler vermeiden

>Selbst beste Kryptographie wird unsicher, wenn man sie falsch benutzt. Hier die Top-Fehler:

>[!danger] ❌ NIEMALS machen
>- **Eigene Kryptographie erfinden** - Verwende etablierte Bibliotheken!
>- **ECB-Modus verwenden** - Verwende CBC, CTR oder GCM
>- **Schlüssel hardcoden** - Verwende Key Management Systeme
>- **Kleine Schlüssel** - Mindestens 128 [[wiki/Bit\|Bit]] für symmetrisch, 2048 [[wiki/Bit\|Bit]] für [[wiki/RSA\|RSA]]
>- **Kein Salt** - Immer Salt bei [[wiki/Passwort-Hashing\|Passwort-Hashing]]!
>- **MD5 oder SHA-1 für Sicherheit** - Nur für Checksummen, nicht für Kryptographie
>- **Keine IV (Initialization Vector)** - Bei CBC und CTR verpflichtend und zufällig!

>[!success] ✅ Empfohlene Bibliotheken
>**[[wiki/Python\|Python]]:** `cryptography`, `PyNaCl`
>**JavaScript:** `crypto` (Node.js), `Web Crypto API`
>**[[wiki/Java\|Java]]:** `javax.crypto`, `Bouncy Castle`
>**[[wiki/C Sprache\|C]]/[[wiki/C++\|C++]]:** `OpenSSL`, `libsodium`

___

# Zusammenfassung 🎯

**Die wichtigsten Punkte:**

1. **[[wiki/Symmetrische Verschlüsselung\|Symmetrische Verschlüsselung]]** ([[wiki/AES\|AES]]) = schnell, beide haben gleichen Schlüssel
2. **[[wiki/Asymmetrische Verschlüsselung\|Asymmetrische Verschlüsselung]]** ([[wiki/RSA\|RSA]], [[wiki/ECC\|ECC]]) = löst Schlüsselaustausch, aber langsam
3. **[[wiki/Hash-Funktion\|Hash-Funktion]]en** ([[wiki/SHA-256\|SHA-256]]) = digitaler Fingerabdruck, Einbahnstraße
4. **[[wiki/Digitale Signatur\|Digitale Signatur]]en** = beweisen [[wiki/Authentizität\|Authentizität]] und [[wiki/Integrität\|Integrität]]
5. **Protokolle** ([[wiki/TLS\|TLS]], [[wiki/Diffie-Hellman\|Diffie-Hellman]]) = kombinieren alles zu sicherer Kommunikation
6. **In der Praxis:** Verwende etablierte Bibliotheken, niemals selbst programmieren!

>[!quote] 💡 Goldene Regel
>"Don't roll your own crypto!" - Verwende immer erprobte, standardisierte Verfahren und Bibliotheken. Kryptographie ist zu komplex, um sie selbst zu erfinden.