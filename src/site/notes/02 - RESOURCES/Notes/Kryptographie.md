---
{"dg-publish":true,"permalink":"/02-resources/notes/kryptographie/","tags":["kryptografie","informatik/sicherheit"],"noteIcon":"","updated":"2025-11-07T10:23:10.000+01:00","dg-note-properties":{"tags":["kryptografie","informatik/sicherheit"],"links":null,"created_date":"2024-10-22","aliases":["cryptography"]}}
---

>Kryptographie ist die Wissenschaft, die Informationen verschlüsselt. Das bedeutet: Die Informationen werden so verändert, dass fremde Personen sie nicht lesen können.
>Nur Personen mit dem richtigen Schlüssel können die Informationen wieder lesen.

>[!important] Wichtig
>Es gibt zwei Arten von Sicherheit in der Kryptographie:
>1. Einfache [[02 - RESOURCES/Notes/Verschlüsselung\|Verschlüsselung]] - schützt vor normalen Personen
>2. Starke [[02 - RESOURCES/Notes/Verschlüsselung\|Verschlüsselung]] - schützt vor Regierungen und Geheimdiensten
>
>Alles dazwischen ist nicht sicher genug!
# I. Grundlagen der Kryptographie

>Kryptographie besteht aus vielen verschiedenen Techniken. Zusammen bilden sie ein System zum Schutz von Daten.
>Die Geschichte der Kryptographie ist über 2000 Jahre alt.
___

## Kryptographie - Die Basis

>Kryptographie macht aus lesbaren Daten (Klartext) einen unlesbaren Text (Geheimtext). Später kann man den Geheimtext wieder in lesbaren Text verwandeln.

**Die drei Hauptziele:**
- **[[02 - RESOURCES/Notes/Vertraulichkeit\|Vertraulichkeit]]** - Nur du und der Empfänger können die Nachricht lesen (wie ein Brief im verschlossenen Umschlag)
- **[[02 - RESOURCES/Notes/Integrität\|Integrität]]** - Niemand kann die Nachricht heimlich ändern (wie ein Siegel auf einem Brief)
- **[[02 - RESOURCES/Notes/Authentizität\|Authentizität]]** - Du weißt genau, wer die Nachricht geschickt hat (wie eine Unterschrift)

## [[02 - RESOURCES/Notes/Verschlüsselung\|Verschlüsselung]] vs [[02 - RESOURCES/Notes/Entschlüsselung\|Entschlüsselung]]

>[[02 - RESOURCES/Notes/Verschlüsselung\|Verschlüsselung]] macht aus lesbarem Text einen Geheimcode. [[02 - RESOURCES/Notes/Entschlüsselung\|Entschlüsselung]] verwandelt den Geheimcode wieder zurück in lesbaren Text.

### Einfaches Beispiel:
1. Du schreibst: "Hallo Welt" (Klartext)
2. [[02 - RESOURCES/Notes/Verschlüsselung\|Verschlüsselung]]: "Hallo Welt" → "Xp2mK9sL" (Geheimtext)
3. Dein Freund erhält: "Xp2mK9sL"
4. [[02 - RESOURCES/Notes/Entschlüsselung\|Entschlüsselung]]: "Xp2mK9sL" → "Hallo Welt"

## Schlüssel - Das Geheimnis

>Ein Schlüssel ist wie ein Passwort für deine [[02 - RESOURCES/Notes/Verschlüsselung\|Verschlüsselung]]. Ohne den richtigen Schlüssel kann niemand den Geheimtext lesen.

**Schlüssellänge:** Je länger der Schlüssel, desto sicherer ist die Verschlüsselung.
- 128 [[02 - RESOURCES/Notes/Bit\|Bit]] = $2^{128}$ mögliche Schlüssel (sehr viele!)
- 256 [[02 - RESOURCES/Notes/Bit\|Bit]] = $2^{256}$ mögliche Schlüssel (fast unmöglich zu knacken)

___

# II. [[02 - RESOURCES/Notes/Symmetrische Verschlüsselung\|Symmetrische Verschlüsselung]]

>Bei [[02 - RESOURCES/Notes/Symmetrische Verschlüsselung\|Symmetrische Verschlüsselung]] benutzen Sender und Empfänger denselben Schlüssel. Das ist wie zwei Personen, die beide denselben Tresor-Code kennen.

**Das Problem:** Wie bringst du den Schlüssel sicher zum Empfänger? Das nennt man das Schlüsselaustausch-Problem.
___

## Block-Chiffre vs Stream-Chiffre

>Es gibt zwei verschiedene Methoden für [[02 - RESOURCES/Notes/Symmetrische Verschlüsselung\|Symmetrische Verschlüsselung]]: Entweder verschlüsselt man Datenblöcke oder einzelne Zeichen.

| Verfahren | Funktionsweise | Beispiel |
|-----------|---------------|----------|
| Block-Chiffre | Verschlüsselt Daten in festen Blöcken (z.B. 128 [[02 - RESOURCES/Notes/Bit\|Bit]]) | [[02 - RESOURCES/Notes/AES\|AES]] |
| Stream-Chiffre | Verschlüsselt Daten [[02 - RESOURCES/Notes/Bit\|Bit]] für [[02 - RESOURCES/Notes/Bit\|Bit]] oder [[02 - RESOURCES/Notes/Byte\|Byte]] für [[02 - RESOURCES/Notes/Byte\|Byte]] | ChaCha20 |

## [[02 - RESOURCES/Notes/AES\|AES]] - Der Standard

>[[02 - RESOURCES/Notes/AES\|AES]] (Advanced Encryption Standard) ist der beste Standard für [[02 - RESOURCES/Notes/Symmetrische Verschlüsselung\|Symmetrische Verschlüsselung]]. Man benutzt [[02 - RESOURCES/Notes/AES\|AES]] überall - von [[02 - RESOURCES/Notes/WLAN\|WLAN]] bis zu verschlüsselten Festplatten.

**Eigenschaften von [[02 - RESOURCES/Notes/AES\|AES]]:**
- Schlüssellänge: 128, 192 oder 256 [[02 - RESOURCES/Notes/Bit\|Bit]]
- Blockgröße: 128 [[02 - RESOURCES/Notes/Bit\|Bit]]
- Sehr schnell (funktioniert gut in Hardware und [[02 - RESOURCES/Notes/Software\|Software]])
- Gilt als unknackbar, wenn man es richtig benutzt

>[!example] Wo wird [[02 - RESOURCES/Notes/AES\|AES]] benutzt?
>- [[02 - RESOURCES/Notes/HTTPS\|HTTPS]]-Verbindungen (zusammen mit [[02 - RESOURCES/Notes/TLS\|TLS]])
>- Verschlüsselte Festplatten
>- [[02 - RESOURCES/Notes/VPN\|VPN]]-Verbindungen
>- Messenger-Apps (wie Signal, WhatsApp)

## Betriebsmodus

>Block-Chiffren wie [[02 - RESOURCES/Notes/AES\|AES]] brauchen einen Betriebsmodus. Der Betriebsmodus sagt, wie man mehrere Blöcke nacheinander verschlüsselt.

**Wichtige Betriebsmodi:**
- **ECB** (Electronic Codebook) - Verschlüsselt jeden Block einzeln, UNSICHER bei gleichen Blöcken
- **CBC** (Cipher Block Chaining) - Jeder Block hängt vom vorherigen Block ab
- **CTR** (Counter Mode) - Verwandelt Block-Chiffre in Stream-Chiffre
- **GCM** (Galois/Counter Mode) - CTR + [[02 - RESOURCES/Notes/Authentizität\|Authentizität]], moderner Standard

___

# III. [[02 - RESOURCES/Notes/Asymmetrische Verschlüsselung\|Asymmetrische Verschlüsselung]]

>[[02 - RESOURCES/Notes/Asymmetrische Verschlüsselung\|Asymmetrische Verschlüsselung]] löst das Schlüsselaustausch-Problem auf elegante Weise: Jede Person hat zwei Schlüssel - einen öffentlichen und einen privaten Schlüssel.

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
4. Nur Bob kann mit seinem privaten Schlüssel die Nachricht [[02 - RESOURCES/Notes/Entschlüsselung\|entschlüsseln]]

## [[02 - RESOURCES/Notes/RSA\|RSA]] - Der Klassiker

>[[02 - RESOURCES/Notes/RSA\|RSA]] ist das bekannteste asymmetrische Verfahren. [[02 - RESOURCES/Notes/RSA\|RSA]] basiert auf einem mathematischen Problem: Es ist sehr schwer, große Zahlen in ihre [[02 - RESOURCES/Notes/Primfaktoren\|Primfaktoren]] zu zerlegen.

**Mathematische Basis:**
Zwei große Primzahlen $p$ und $q$ multiplizieren ist einfach: $n = p \times q$
Aber aus $n$ wieder $p$ und $q$ herauszufinden ist extrem schwer (bei großen Zahlen)!

**[[02 - RESOURCES/Notes/RSA\|RSA]]-Parameter:**
- Schlüssellänge: mindestens 2048 [[02 - RESOURCES/Notes/Bit\|Bit]], besser 4096 [[02 - RESOURCES/Notes/Bit\|Bit]]
- Langsamer als [[02 - RESOURCES/Notes/Symmetrische Verschlüsselung\|Symmetrische Verschlüsselung]]
- Wird meist nur für Schlüsselaustausch benutzt

## [[02 - RESOURCES/Notes/ECC\|ECC]] - Elliptic Curve Cryptography

>[[02 - RESOURCES/Notes/ECC\|ECC]] ist die moderne Alternative zu [[02 - RESOURCES/Notes/RSA\|RSA]]. [[02 - RESOURCES/Notes/ECC\|ECC]] basiert auf elliptischen Kurven und braucht viel kürzere Schlüssel für dieselbe Sicherheit.

| Sicherheitslevel | [[02 - RESOURCES/Notes/RSA\|RSA]] Schlüssellänge | [[02 - RESOURCES/Notes/ECC\|ECC]] Schlüssellänge |
|------------------|---------------------------|---------------------------|
| Standard | 2048 [[02 - RESOURCES/Notes/Bit\|Bit]] | 256 [[02 - RESOURCES/Notes/Bit\|Bit]] |
| Hoch | 3072 [[02 - RESOURCES/Notes/Bit\|Bit]] | 384 [[02 - RESOURCES/Notes/Bit\|Bit]] |
| Sehr hoch | 4096 [[02 - RESOURCES/Notes/Bit\|Bit]] | 512 [[02 - RESOURCES/Notes/Bit\|Bit]] |

**Vorteile von [[02 - RESOURCES/Notes/ECC\|ECC]]:**
- Kleinere Schlüssel = weniger Speicher und Bandbreite
- Schneller als [[02 - RESOURCES/Notes/RSA\|RSA]] bei gleicher Sicherheit
- Ideal für mobile Geräte und IoT-Geräte

___

# IV. [[02 - RESOURCES/Notes/Hash-Funktion\|Hash-Funktion]]en

>[[02 - RESOURCES/Notes/Hash-Funktion\|Hash-Funktion]]en sind wie digitale Fingerabdrücke: Sie verwandeln beliebig lange Daten in eine kurze, eindeutige Zeichenkette mit fester Länge.

**Wichtig:** Eine [[02 - RESOURCES/Notes/Hash-Funktion\|Hash-Funktion]] ist eine Einbahnstraße - aus dem Hash-Wert kann man die Originaldaten nicht zurückrechnen.
___

## Kryptographische [[02 - RESOURCES/Notes/Hash-Funktion\|Hash-Funktion]] - Eigenschaften

>Eine gute kryptographische [[02 - RESOURCES/Notes/Hash-Funktion\|Hash-Funktion]] muss drei wichtige Eigenschaften haben, damit sie sicher ist.

**Die drei Sicherheitseigenschaften:**
- **Einwegfunktion** - Aus dem Hash-Wert kann niemand die Originaldaten berechnen
- **Kollisionsresistenz** - Es ist praktisch unmöglich, zwei unterschiedliche Eingaben mit gleichem Hash-Wert zu finden
- **Lawineneffekt** - Die kleinste Änderung der Eingabe ändert den Hash-Wert komplett

>[!example] Lawineneffekt Beispiel
>- Eingabe: "Hallo" → Hash-Wert: "a3f5b8c9..."
>- Eingabe: "Hallo!" → Hash-Wert: "7d2e1f4a..." (völlig anders!)

## SHA-Familie - Die Standards

>Die SHA-Familie (Secure Hash Algorithm) sind die am meisten benutzten [[02 - RESOURCES/Notes/Hash-Funktion\|Hash-Funktion]]en. SHA-2 und SHA-3 gelten heute als sicher.

| [[02 - RESOURCES/Notes/Algorithmus\|Algorithmus]] | Hash-Wert-Länge | Status |
|-------------|-------------------|--------|
| SHA-1 | 160 [[02 - RESOURCES/Notes/Bit\|Bit]] | ❌ UNSICHER - nicht mehr verwenden! |
| [[02 - RESOURCES/Notes/SHA-256\|SHA-256]] | 256 [[02 - RESOURCES/Notes/Bit\|Bit]] | ✅ Sicher - weit verbreitet |
| SHA-512 | 512 [[02 - RESOURCES/Notes/Bit\|Bit]] | ✅ Sehr sicher |
| SHA-3 | 224-512 [[02 - RESOURCES/Notes/Bit\|Bit]] | ✅ Neuester Standard |

## Anwendungen von [[02 - RESOURCES/Notes/Hash-Funktion\|Hash-Funktion]]en

>[[02 - RESOURCES/Notes/Hash-Funktion\|Hash-Funktion]]en sind überall - oft ohne dass du es merkst. Sie schützen deine Passwörter und prüfen die [[02 - RESOURCES/Notes/Integrität\|Integrität]] von Daten.

**Typische Einsatzgebiete:**
- Passwort-Speicherung - Websites speichern nur den Hash-Wert deines Passworts, nie das Passwort selbst
- Checksummen - Prüfen, ob eine heruntergeladene Datei korrekt ist
- [[02 - RESOURCES/Notes/Digitale Signatur\|Digitale Signatur]] - Signiert wird der Hash-Wert, nicht die ganze Datei
- Blockchain - Jeder Block enthält den Hash-Wert des vorherigen Blocks

### Warum nicht direkt das Passwort speichern?
1. Du gibst Passwort "geheim123" ein
2. [[02 - RESOURCES/Notes/Server\|Server]] berechnet Hash-Wert: [[02 - RESOURCES/Notes/SHA-256\|SHA-256]]("geheim123") = "a3f5b8..."
3. [[02 - RESOURCES/Notes/Server\|Server]] speichert nur "a3f5b8..." in der [[02 - RESOURCES/Notes/Datenbank\|Datenbank]]
4. Wenn die [[02 - RESOURCES/Notes/Datenbank\|Datenbank]] gehackt wird, sehen Angreifer nur den Hash-Wert, nicht dein Passwort

## HMAC - Hash mit Schlüssel

>HMAC (Hash-based Message Authentication Code) kombiniert eine [[02 - RESOURCES/Notes/Hash-Funktion\|Hash-Funktion]] mit einem geheimen Schlüssel. So garantiert man [[02 - RESOURCES/Notes/Integrität\|Integrität]] UND [[02 - RESOURCES/Notes/Authentizität\|Authentizität]].

**Funktionsweise:**
$$\text{HMAC}(K, M) = H((K \oplus \text{opad}) || H((K \oplus \text{ipad}) || M))$$

Einfach gesagt: Die [[02 - RESOURCES/Notes/Hash-Funktion\|Hash-Funktion]] wird zweimal angewendet und mit einem Schlüssel $K$ gemischt

**Verwendung:**
- [[02 - RESOURCES/Notes/API\|API]]-[[02 - RESOURCES/Notes/Authentifizierung\|Authentifizierung]] (z.B. bei REST-APIs)
- [[02 - RESOURCES/Notes/TLS\|TLS]]-Verbindungen für [[02 - RESOURCES/Notes/Integrität\|Integrität]]
- JWT (JSON Web Tokens)

___

# V. [[02 - RESOURCES/Notes/Digitale Signatur\|Digitale Signatur]]en

>[[02 - RESOURCES/Notes/Digitale Signatur\|Digitale Signatur]]en sind wie deine handschriftliche Unterschrift in der digitalen Welt - sie beweisen, dass DU eine Nachricht geschickt hast und sie nicht verändert wurde.

**Unterschied zur [[02 - RESOURCES/Notes/Verschlüsselung\|Verschlüsselung]]:** Verschlüsselung hält Nachrichten geheim. [[02 - RESOURCES/Notes/Digitale Signatur\|Digitale Signatur]]en beweisen [[02 - RESOURCES/Notes/Authentizität\|Authentizität]] und [[02 - RESOURCES/Notes/Integrität\|Integrität]].
___

## Wie funktioniert eine [[02 - RESOURCES/Notes/Digitale Signatur\|Digitale Signatur]]?

>[[02 - RESOURCES/Notes/Digitale Signatur\|Digitale Signatur]]en nutzen [[02 - RESOURCES/Notes/Asymmetrische Verschlüsselung\|Asymmetrische Verschlüsselung]], aber andersherum: Du signierst mit deinem privaten Schlüssel, andere prüfen mit deinem öffentlichen Schlüssel.

### Schritt-für-Schritt: Signieren
1. Alice schreibt Nachricht "Überweise 100€ an Bob"
2. Alice berechnet Hash-Wert der Nachricht: [[02 - RESOURCES/Notes/SHA-256\|SHA-256]](...) = "a3f5..."
3. Alice verschlüsselt den Hash-Wert mit ihrem privaten Schlüssel → [[02 - RESOURCES/Notes/Digitale Signatur\|Digitale Signatur]]
4. Alice schickt: Nachricht + [[02 - RESOURCES/Notes/Digitale Signatur\|Digitale Signatur]]

### Schritt-für-Schritt: Prüfen
1. Bob erhält: Nachricht + [[02 - RESOURCES/Notes/Digitale Signatur\|Digitale Signatur]]
2. Bob berechnet Hash-Wert der Nachricht: [[02 - RESOURCES/Notes/SHA-256\|SHA-256]](...) = "a3f5..."
3. Bob entschlüsselt [[02 - RESOURCES/Notes/Digitale Signatur\|Digitale Signatur]] mit Alice's öffentlichem Schlüssel → sollte "a3f5..." ergeben
4. Stimmen die Hash-Werte überein? ✅ Signatur ist gültig!

## [[02 - RESOURCES/Notes/RSA\|RSA]]-Signatur vs ECDSA

>Genau wie bei [[02 - RESOURCES/Notes/Verschlüsselung\|Verschlüsselung]] gibt es auch bei [[02 - RESOURCES/Notes/Digitale Signatur\|Digitale Signatur]]en verschiedene Algorithmen. Die wichtigsten sind RSA-Signatur und ECDSA.

| Eigenschaft | RSA-Signatur | ECDSA |
|-------------|-----------------|-----------|
| Basis | Primfaktorzerlegung | Elliptische Kurven |
| Signaturgröße | 2048-4096 [[02 - RESOURCES/Notes/Bit\|Bit]] | 256-512 [[02 - RESOURCES/Notes/Bit\|Bit]] |
| Geschwindigkeit | Langsamer | Schneller |
| Verwendung | [[02 - RESOURCES/Notes/TLS\|TLS]], X.509-Zertifikate | Bitcoin, moderne Systeme |

## Zertifikat und PKI

>Ein Zertifikat ist wie ein digitaler Personalausweis - es bescheinigt, dass ein öffentlicher Schlüssel wirklich zu einer bestimmten Person oder Website gehört.

**Das Problem ohne Zertifikat:**
Woher weißt du, dass der öffentliche Schlüssel von "Alice" wirklich von Alice ist und nicht von einem Angreifer?

**Die Lösung: PKI (Public Key Infrastructure)**
- **Certificate Authority (CA)** - Vertrauenswürdige Organisation, die Zertifikate ausstellt
- **Root-Zertifikat** - Die CAs, denen dein Browser/System vertraut
- **Zertifikatskette** - Hierarchie von Zertifikaten bis zur Root-CA

>[!example] Beispiel: [[02 - RESOURCES/Notes/HTTPS\|HTTPS]]-Verbindung
>1. Du besuchst [[02 - RESOURCES/Notes/HTTPS\|https]]://bank.de
>2. Server schickt X.509-Zertifikat mit öffentlichem Schlüssel
>3. Zertifikat ist von CA "DigiCert" signiert
>4. Dein Browser prüft: Ist DigiCert eine vertrauenswürdige Root-CA? ✅
>5. Ist die [[02 - RESOURCES/Notes/Digitale Signatur\|Digitale Signatur]] der CA gültig? ✅
>6. Browser zeigt 🔒 - Verbindung ist sicher!

___

# VI. Kryptographische Protokolle

>Kryptographische Protokolle kombinieren verschiedene Verfahren ([[02 - RESOURCES/Notes/Verschlüsselung\|Verschlüsselung]], [[02 - RESOURCES/Notes/Hash-Funktion\|Hash-Funktion]]en, [[02 - RESOURCES/Notes/Digitale Signatur\|Digitale Signatur]]en), um sichere Kommunikation zu ermöglichen.

**Was ist ein Protokoll?** Ein Protokoll ist wie ein Rezept: Es definiert genau, wer wann was macht, damit am Ende sichere Kommunikation steht.
___

## [[02 - RESOURCES/Notes/Diffie-Hellman\|Diffie-Hellman]] - Schlüsselaustausch

>[[02 - RESOURCES/Notes/Diffie-Hellman\|Diffie-Hellman]] löst ein fundamentales Problem: Wie können zwei Personen über eine unsichere Leitung einen gemeinsamen geheimen Schlüssel vereinbaren?

### Die Idee (vereinfacht):
1. Alice und Bob einigen sich öffentlich auf Startwerte $g$ und $p$
2. Alice wählt geheime Zahl $a$, berechnet $A = g^a \mod p$ und schickt $A$ an Bob
3. Bob wählt geheime Zahl $b$, berechnet $B = g^b \mod p$ und schickt $B$ an Alice
4. Alice berechnet: $K = B^a \mod p$
5. Bob berechnet: $K = A^b \mod p$
6. Beide haben jetzt denselben geheimen Schlüssel $K$! 🎉

**Warum ist das sicher?**
Ein Angreifer sieht $g$, $p$, $A$ und $B$, aber aus diesen öffentlichen Werten $a$ oder $b$ zu berechnen ist extrem schwer (Diskreter Logarithmus-Problem)

## [[02 - RESOURCES/Notes/TLS\|TLS]] - Transport Layer Security

>[[02 - RESOURCES/Notes/TLS\|TLS]] (früher SSL genannt) ist DAS Protokoll für sichere [[02 - RESOURCES/Notes/Internet\|Internet]]-Verbindungen. Jede [[02 - RESOURCES/Notes/HTTPS\|HTTPS]]-Website nutzt [[02 - RESOURCES/Notes/TLS\|TLS]].

**Was macht [[02 - RESOURCES/Notes/TLS\|TLS]]?**
- **[[02 - RESOURCES/Notes/Authentizität\|Authentizität]]** - [[02 - RESOURCES/Notes/Server\|Server]] beweist Identität mit Zertifikat
- **[[02 - RESOURCES/Notes/Vertraulichkeit\|Vertraulichkeit]]** - Daten werden verschlüsselt übertragen
- **[[02 - RESOURCES/Notes/Integrität\|Integrität]]** - Daten können nicht unbemerkt verändert werden

### [[02 - RESOURCES/Notes/TLS\|TLS]]-Handshake - So läuft es ab:
1. **Client Hello:** Browser sagt welche Verschlüsselungen er unterstützt
2. **[[02 - RESOURCES/Notes/Server\|Server]] Hello:** Server wählt Verschlüsselung und schickt Zertifikat
3. **Schlüsselaustausch:** Mit [[02 - RESOURCES/Notes/Diffie-Hellman\|Diffie-Hellman]] oder [[02 - RESOURCES/Notes/RSA\|RSA]] wird gemeinsamer Schlüssel erzeugt
4. **Fertig:** Ab jetzt wird mit [[02 - RESOURCES/Notes/Symmetrische Verschlüsselung\|Symmetrische Verschlüsselung]] ([[02 - RESOURCES/Notes/AES\|AES]]) kommuniziert

## Perfect Forward Secrecy

>Perfect Forward Secrecy (PFS) bedeutet: Selbst wenn der private Schlüssel des Servers gestohlen wird, bleiben alte Verbindungen sicher.

**Wie funktioniert das?**
Statt [[02 - RESOURCES/Notes/RSA\|RSA]] wird [[02 - RESOURCES/Notes/Diffie-Hellman\|Diffie-Hellman]] mit temporären Schlüsseln benutzt. Für jede Verbindung wird ein neuer Schlüssel generiert und danach gelöscht.

**Moderne [[02 - RESOURCES/Notes/TLS\|TLS]]-Versionen:**
- **[[02 - RESOURCES/Notes/TLS\|TLS]] 1.2** - Aktueller Standard, PFS optional
- **[[02 - RESOURCES/Notes/TLS\|TLS]] 1.3** - Neueste Version, PFS verpflichtend, schnellerer Handshake

___

# VII. Mathematische Grundlagen

>Moderne Kryptographie basiert auf mathematischen Problemen. Diese Probleme sind in eine Richtung leicht zu lösen, aber in die andere Richtung extrem schwer.

**Wichtig:** Du musst kein Mathe-Genie sein, aber die Grundideen zu verstehen hilft dir, Kryptographie richtig einzusetzen.
___

## Primzahlen und Primfaktorzerlegung

>Primzahlen sind die Bausteine der Zahlentheorie und die Basis für [[02 - RESOURCES/Notes/RSA\|RSA]].

**Die Einbahnstraße:**
- **Einfach:** Zwei Primzahlen multiplizieren: $61 \times 53 = 3233$ ⚡
- **Schwer:** Von $3233$ zurück zu $61$ und $53$ finden 🐌

>[!note] Warum ist das schwer?
>Bei kleinen Zahlen ist es noch machbar. Aber bei [[02 - RESOURCES/Notes/RSA\|RSA]] benutzen wir Primzahlen mit 300+ Stellen. Die Primfaktorzerlegung würde selbst für Supercomputer Jahrmillionen dauern!

## Modulare Arithmetik

>Modulare Arithmetik ist wie Rechnen mit einer Uhr - nach 12 geht es wieder bei 1 los. In Kryptographie: nach $p$ geht es bei 0 los.

**Notation:** $a \equiv b \pmod{m}$
Bedeutet: $a$ und $b$ haben denselben Rest bei Division durch $m$

**Beispiele:**
- $17 \equiv 5 \pmod{12}$ (wie 17 Uhr = 5 Uhr am Nachmittag)
- $25 \equiv 4 \pmod{7}$ (Rest von 25 ÷ 7 ist 4)
- $10 \times 10 \equiv 2 \pmod{7}$ (100 mod 7 = 2)

## Diskreter Logarithmus

>Das Diskreter Logarithmus-Problem ist die mathematische Basis für [[02 - RESOURCES/Notes/Diffie-Hellman\|Diffie-Hellman]] und [[02 - RESOURCES/Notes/ECC\|ECC]].

**Das Problem:**
- **Einfach:** Gegeben $g$, $x$, $p$, berechne $y = g^x \mod p$ ⚡
- **Schwer:** Gegeben $g$, $y$, $p$, finde $x$ sodass $y = g^x \mod p$ 🐌

**Beispiel:**
- Einfach: $3^5 \mod 17 = 243 \mod 17 = 5$
- Schwer: Finde $x$, wenn $3^x \mod 17 = 5$ (Antwort: $x=5$, aber nur durch Ausprobieren!)

## Elliptische Kurven

>Elliptische Kurven sind spezielle mathematische Kurven mit einer Gruppenstruktur. [[02 - RESOURCES/Notes/ECC\|ECC]] nutzt diese für sehr effiziente Kryptographie.

**Kurven-Gleichung:** $y^2 = x^3 + ax + b$

**Punkt-Addition auf der Kurve:**
Man kann zwei Punkte auf der Kurve "addieren" und erhält einen neuen Punkt auf der Kurve. Diese Operation ist effizient, aber schwer umkehrbar.

>[!tip] Warum sind Elliptische Kurven gut?
>- Das Diskreter Logarithmus-Problem auf Kurven ist NOCH schwerer
>- Deshalb braucht man viel kürzere Schlüssel
>- 256-[[02 - RESOURCES/Notes/Bit\|Bit]] [[02 - RESOURCES/Notes/ECC\|ECC]] ≈ 3072-[[02 - RESOURCES/Notes/Bit\|Bit]] [[02 - RESOURCES/Notes/RSA\|RSA]]

## Zufallszahlen und Entropie

>Gute Zufallszahlen sind EXTREM wichtig für Kryptographie. Schlechte Zufallszahlen = unsichere [[02 - RESOURCES/Notes/Verschlüsselung\|Verschlüsselung]].

**Unterschied:**
- **Pseudozufallszahlen** - Von [[02 - RESOURCES/Notes/Algorithmus\|Algorithmus]] berechnet, vorhersagbar wenn man den Startwert kennt
- **Kryptographisch sichere Zufallszahlen** - Nicht vorhersagbar, aus Entropie-Quellen (Mausbewegungen, Netzwerk-Timing, Hardware-Rauschen)

>[!important] Wichtig für Entwickler
>✅ Verwende: `/dev/urandom`, `CryptGenRandom()`, `crypto.getRandomValues()`
>❌ NICHT verwenden: `rand()`, `Math.random()` für Kryptographie

___

# VIII. Praktische Anwendungen

>Jetzt wird es konkret: Kryptographie ist nicht nur Theorie, sondern schützt dich jeden Tag im Internet, auf deinem Smartphone und beim Online-Banking.

**Als IT-Profi musst du wissen:** WANN welche Verfahren eingesetzt werden - und vor allem welche Fehler du vermeiden solltest.
___

## [[02 - RESOURCES/Notes/Passwort-Hashing\|Passwort-Hashing]] richtig gemacht

>NIEMALS Passwörter im Klartext oder mit einfachem [[02 - RESOURCES/Notes/SHA-256\|SHA-256]] speichern! Verwende spezialisierte Passwort-Hash-Funktionen.

**Die richtigen Werkzeuge:**

| Verfahren | Status | Verwendung |
|-----------|--------|-----------|
| bcrypt | ✅ Empfohlen | Standard für Web-Apps |
| scrypt | ✅ Sehr gut | Hoher Speicherbedarf gegen Hardware-Angriffe |
| Argon2 | ✅ Neuester Standard | Gewinner Password Hashing Competition 2015 |
| MD5, SHA-1 | ❌ UNSICHER | Nie für Passwörter verwenden! |

>[!warning] Warum nicht einfach [[02 - RESOURCES/Notes/SHA-256\|SHA-256]]?
>- [[02 - RESOURCES/Notes/SHA-256\|SHA-256]] ist ZU schnell - Angreifer können Milliarden Passwörter pro Sekunde testen
>- bcrypt, scrypt, Argon2 sind absichtlich langsam
>- Sie verwenden Salt, um Rainbow Table-Angriffe zu verhindern

## [[02 - RESOURCES/Notes/HTTPS\|HTTPS]] und [[02 - RESOURCES/Notes/TLS\|TLS]] in der Praxis

>Jede moderne Website MUSS [[02 - RESOURCES/Notes/HTTPS\|HTTPS]] benutzen. Ohne [[02 - RESOURCES/Notes/TLS\|TLS]] können Angreifer im WLAN alle Daten mitlesen.

**[[02 - RESOURCES/Notes/TLS\|TLS]]-Best-Practices:**
- Verwende TLS 1.3 oder mindestens TLS 1.2
- Deaktiviere TLS 1.0 und TLS 1.1 (unsicher)
- Aktiviere Perfect Forward Secrecy (PFS)
- Verwende starke Cipher Suites (z.B. mit AES-GCM)
- Nutze HSTS (HTTP Strict Transport Security)

>[!tip] Tools zum Testen
>- SSL Labs Server Test - bewertet deine [[02 - RESOURCES/Notes/TLS\|TLS]]-Konfiguration
>- Let's Encrypt - Kostenlose Zertifikate
>- Certbot - Automatische Zertifikats-Erneuerung

## End-to-End-Verschlüsselung

>Bei End-to-End-Verschlüsselung (E2EE) können nur Sender und Empfänger die Nachricht lesen - nicht mal der Server-Betreiber.

**Beispiele für E2EE:**
- Signal-Protokoll - Wird in Signal, WhatsApp, Facebook Messenger benutzt
- PGP - Für verschlüsselte E-Mails
- Matrix - Offenes Protokoll für verschlüsselte Chats

## VPN und IPsec

>VPNs verschlüsseln deinen gesamten Netzwerk-Traffic. [[02 - RESOURCES/Notes/IPSec\|IPsec]] ist das Standard-Protokoll dafür.

**IPsec-Modi:**
- **Transport Mode** - Nur Daten werden verschlüsselt
- **Tunnel Mode** - Komplettes [[02 - RESOURCES/Notes/Datenpakete\|IP-Pakete]] wird verschlüsselt (für VPNs)

**Moderne [[02 - RESOURCES/Notes/VPN\|VPN]]-Protokolle:**
- **WireGuard** - Sehr schnell, modernes Design, nur 4000 Zeilen Code
- **OpenVPN** - Etabliert, flexibel, aber komplex
- **IKEv2/[[02 - RESOURCES/Notes/IPSec\|IPsec]]** - Standard für Firmen-VPNs

## Blockchain und Kryptowährungen

>Blockchain kombiniert [[02 - RESOURCES/Notes/Hash-Funktion\|Hash-Funktion]]en, [[02 - RESOURCES/Notes/Digitale Signatur\|Digitale Signatur]]en und Proof-of-Work zu einem dezentralen, manipulationssicheren System.

**Wie Blockchain Kryptographie nutzt:**
- **Hash-Kette** - Jeder Block enthält Hash-Wert des vorherigen Blocks
- **[[02 - RESOURCES/Notes/Digitale Signatur\|Digitale Signatur]]** - Transaktionen werden mit [[02 - RESOURCES/Notes/Digitale Signatur\|ECDSA]] signiert
- **Merkle-Tree** - Effiziente Verkettung vieler Transaktionen mit [[02 - RESOURCES/Notes/Hash-Funktion\|Hash-Funktion]]en
- **Public Key** = deine Bitcoin-Adresse (vereinfacht)

>[!example] Bitcoin-Transaktion
>1. Alice signiert mit ihrem privaten Schlüssel: "Sende 0.5 BTC an Bob"
>2. [[02 - RESOURCES/Notes/Netzwerk\|Netzwerk]] prüft [[02 - RESOURCES/Notes/Digitale Signatur\|Digitale Signatur]] mit Alice's öffentlichem Schlüssel
>3. Miner packen Transaktion in Block
>4. Block wird mit Hash-Wert des vorherigen Blocks verkettet

## Häufige Fehler vermeiden

>Selbst beste Kryptographie wird unsicher, wenn man sie falsch benutzt. Hier die Top-Fehler:

>[!danger] ❌ NIEMALS machen
>- **Eigene Kryptographie erfinden** - Verwende etablierte Bibliotheken!
>- **ECB-Modus verwenden** - Verwende CBC, CTR oder GCM
>- **Schlüssel hardcoden** - Verwende Key Management Systeme
>- **Kleine Schlüssel** - Mindestens 128 [[02 - RESOURCES/Notes/Bit\|Bit]] für symmetrisch, 2048 [[02 - RESOURCES/Notes/Bit\|Bit]] für [[02 - RESOURCES/Notes/RSA\|RSA]]
>- **Kein Salt** - Immer Salt bei [[02 - RESOURCES/Notes/Passwort-Hashing\|Passwort-Hashing]]!
>- **MD5 oder SHA-1 für Sicherheit** - Nur für Checksummen, nicht für Kryptographie
>- **Keine IV (Initialization Vector)** - Bei CBC und CTR verpflichtend und zufällig!

>[!success] ✅ Empfohlene Bibliotheken
>**[[02 - RESOURCES/Notes/Python\|Python]]:** `cryptography`, `PyNaCl`
>**JavaScript:** `crypto` (Node.js), `Web Crypto API`
>**[[02 - RESOURCES/Notes/Java\|Java]]:** `javax.crypto`, `Bouncy Castle`
>**[[02 - RESOURCES/Notes/C Sprache\|C]]/[[02 - RESOURCES/Notes/C++\|C++]]:** `OpenSSL`, `libsodium`

___

# Zusammenfassung 🎯

**Die wichtigsten Punkte:**

1. **[[02 - RESOURCES/Notes/Symmetrische Verschlüsselung\|Symmetrische Verschlüsselung]]** ([[02 - RESOURCES/Notes/AES\|AES]]) = schnell, beide haben gleichen Schlüssel
2. **[[02 - RESOURCES/Notes/Asymmetrische Verschlüsselung\|Asymmetrische Verschlüsselung]]** ([[02 - RESOURCES/Notes/RSA\|RSA]], [[02 - RESOURCES/Notes/ECC\|ECC]]) = löst Schlüsselaustausch, aber langsam
3. **[[02 - RESOURCES/Notes/Hash-Funktion\|Hash-Funktion]]en** ([[02 - RESOURCES/Notes/SHA-256\|SHA-256]]) = digitaler Fingerabdruck, Einbahnstraße
4. **[[02 - RESOURCES/Notes/Digitale Signatur\|Digitale Signatur]]en** = beweisen [[02 - RESOURCES/Notes/Authentizität\|Authentizität]] und [[02 - RESOURCES/Notes/Integrität\|Integrität]]
5. **Protokolle** ([[02 - RESOURCES/Notes/TLS\|TLS]], [[02 - RESOURCES/Notes/Diffie-Hellman\|Diffie-Hellman]]) = kombinieren alles zu sicherer Kommunikation
6. **In der Praxis:** Verwende etablierte Bibliotheken, niemals selbst programmieren!

>[!quote] 💡 Goldene Regel
>"Don't roll your own crypto!" - Verwende immer erprobte, standardisierte Verfahren und Bibliotheken. Kryptographie ist zu komplex, um sie selbst zu erfinden.