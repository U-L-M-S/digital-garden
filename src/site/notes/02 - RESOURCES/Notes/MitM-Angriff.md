---
{"dg-publish":true,"permalink":"/02-resources/notes/mit-m-angriff/","tags":["sicherheit/it-sicherheit","sicherheit/netzwerk-sicherheit","ausbildung/gfn/ap1/vorbereitung"],"noteIcon":"","updated":"2025-11-06T12:03:38.000+01:00","dg-note-properties":{"aliases":["MitM-Angriff","Man-in-the-Middle-Angriff","Man in the Middle","MITM","Mittelsmann-Angriff"],"created_date":"2025-11-06","links":null,"tags":["sicherheit/it-sicherheit","sicherheit/netzwerk-sicherheit","ausbildung/gfn/ap1/vorbereitung"]}}
---

>Ein **Man-in-the-Middle-Angriff (MitM)** ist ein Angriff, bei dem sich ein Angreifer **zwischen** zwei kommunizierende Parteien schaltet, um deren Datenverkehr abzufangen, mitzulesen oder zu manipulieren.
>>Die beiden Kommunikationspartner glauben, direkt miteinander zu kommunizieren, während in Wirklichkeit alle Daten über den Angreifer laufen.

>[!danger] Kritische Gefahr
>MitM-Angriffe können zur Offenlegung sensibler Daten (Passwörter, Kreditkarten, persönliche Informationen) oder zur Manipulation von Transaktionen führen!

---

# Wie funktioniert ein MitM-Angriff?

**Normale Kommunikation:**
```
Alice ◄──────────────────────► Bob
      (direkte Verbindung)
```

**MitM-Angriff:**
```
Alice ◄────► Angreifer ◄────► Bob
             (Mittelsmann)
```

>Der Angreifer gibt sich **gegenüber Alice als Bob** aus und **gegenüber Bob als Alice** aus. Beide Parteien denken, sie kommunizieren direkt miteinander.

---

# Visualisierung: MitM-Angriff im Detail

```
┌────────┐                 ┌────────────┐                 ┌────────┐
│ Alice  │                 │  Angreifer │                 │  Bob   │
│(Client)│                 │ (Mittler)  │                 │(Server)│
└────────┘                 └────────────┘                 └────────┘
    │                             │                             │
    │ "Hallo Bob, hier ist Alice" │                             │
    │────────────────────────────►│                             │
    │                             │ "Hallo Bob, hier ist Alice" │
    │                             │────────────────────────────►│
    │                             │                             │
    │                             │ "Hallo Alice, hier ist Bob" │
    │                             │◄────────────────────────────│
    │ "Hallo Alice, hier ist Bob" │                             │
    │◄────────────────────────────│                             │
    │                             │                             │
    │  Alice denkt: ✓ mit Bob     │  Bob denkt: ✓ mit Alice    │
    │  In Wahrheit: mit Angreifer │  In Wahrheit: mit Angreifer│
```

>[!warning] Gefahr
>Der Angreifer kann:
>- Alle Daten **mitlesen** (Passwörter, Nachrichten)
>- Daten **manipulieren** (Nachrichten verändern)
>- **Aktionen ausführen** im Namen der Opfer

---

# Arten von MitM-Angriffen

## 1. ARP-Spoofing
>**ARP (Address Resolution Protocol)** wird manipuliert, um den Datenverkehr umzuleiten.

**Funktionsweise:**
1. Angreifer sendet gefälschte ARP-Pakete ins Netzwerk
2. Opfer-Computer denkt, die MAC-Adresse des Routers gehört zum Angreifer
3. Router denkt, die MAC-Adresse des Opfers gehört zum Angreifer
4. Gesamter Traffic läuft über den Angreifer

```
Normaler Traffic:
Opfer ──► Router ──► Internet

Nach ARP-Spoofing:
Opfer ──► Angreifer ──► Router ──► Internet
```

>[!example] Tool
>**arpspoof**, **ettercap**, **bettercap**

## 2. DNS-Spoofing
>Der Angreifer fälscht DNS-Antworten, um Opfer auf gefälschte Websites umzuleiten.

**Beispiel:**
```
Opfer fragt: "Wo ist bank.com?"

Echter DNS-Server würde antworten: 93.184.216.34
Angreifer antwortet zuerst:   192.168.1.100 (Fake-Seite)

Opfer landet auf Phishing-Seite des Angreifers!
```

## 3. HTTPS-Spoofing (SSL Stripping)
>Der Angreifer erzwingt eine **unverschlüsselte HTTP-Verbindung** statt HTTPS.

**Ablauf:**
1. Opfer will https://bank.com besuchen
2. Angreifer fängt Anfrage ab
3. Angreifer leitet auf http://bank.com um (ohne SSL)
4. Opfer sieht Website, aber ohne Verschlüsselung
5. Angreifer liest alle Daten im Klartext

```
Opfer ◄──HTTP (unverschlüsselt)──► Angreifer ◄──HTTPS (verschlüsselt)──► Bank
```

>[!info] Tool
>**SSLstrip**, **mitmproxy**

## 4. Wi-Fi-Eavesdropping (Evil Twin)
>Der Angreifer erstellt einen **gefälschten WLAN-Hotspot** mit vertrautem Namen.

**Beispiel:**
```
Echtes Netzwerk:   "Starbucks WiFi" (legitim)
Fake Netzwerk:     "Starbucks WiFi" (Angreifer)
```

>Opfer verbindet sich mit dem Fake-Netzwerk → gesamter Traffic läuft über Angreifer.

>[!warning] Besonders gefährlich
>In öffentlichen WLANs (Flughäfen, Cafés, Hotels) ist dieses Risiko sehr hoch!

## 5. Session Hijacking
>Der Angreifer **stiehlt Session-Cookies**, um sich als Opfer auszugeben.

**Beispiel:**
1. Opfer loggt sich bei Website ein
2. Angreifer fängt Session-Cookie ab
3. Angreifer verwendet Cookie → ist eingeloggt als Opfer

---

# Praktisches Beispiel: ARP-Spoofing mit Ettercap

**Szenario:** Angreifer im selben WLAN wie das Opfer

**Schritt 1: Netzwerk scannen**
```bash
# Verfügbare Hosts im Netzwerk finden
sudo ettercap -T -i wlan0 -P remote_browser //
```

**Schritt 2: ARP-Spoofing starten**
```bash
# Opfer: 192.168.1.100
# Router: 192.168.1.1
sudo ettercap -T -M arp:remote /192.168.1.1// /192.168.1.100//
```

**Schritt 3: Traffic analysieren**
```bash
# Mit Wireshark mitschneiden
sudo wireshark -i wlan0
```

>[!danger] Nur zu Testzwecken!
>Diese Techniken dürfen **nur** in autorisierten Penetrationstests oder Lernumgebungen verwendet werden!

---

# Was kann ein Angreifer mit MitM machen?

>[!danger] Mögliche Angriffe
>- **Passwörter stehlen**: Login-Daten abfangen
>- **Banking-Daten**: Transaktionen manipulieren
>- **E-Mails lesen**: Kommunikation mitlesen
>- **Malware injizieren**: Schädlichen Code einschleusen
>- **Identitätsdiebstahl**: Als Opfer agieren
>- **Datenmanipulation**: Nachrichten/Dateien verändern

**Beispiel - Login-Daten abfangen:**
```
POST /login HTTP/1.1
Host: example.com
Content-Type: application/x-www-form-urlencoded

username=alice&password=geheim123
```
>Der Angreifer liest diese Daten im Klartext (bei HTTP) oder nach SSL-Stripping.

---

# Schutzmaßnahmen gegen MitM-Angriffe

## 1. HTTPS verwenden
>**Immer HTTPS** statt HTTP verwenden! HTTPS verschlüsselt den Datenverkehr.

```
✅ https://bank.com (sicher)
❌ http://bank.com  (unsicher)
```

>[!tip] Browser-Prüfung
>Achte auf das **Schloss-Symbol** in der Adressleiste!

**HSTS (HTTP Strict Transport Security):**
```http
Strict-Transport-Security: max-age=31536000; includeSubDomains
```
>Erzwingt HTTPS und verhindert Downgrade-Angriffe.

## 2. VPN verwenden
>Ein **Virtual Private Network (VPN)** verschlüsselt allen Traffic.

```
Ohne VPN:  Gerät ──► Angreifer ──► Internet (ungeschützt)
Mit VPN:   Gerät ──► VPN-Tunnel ──► Internet (verschlüsselt)
```

>[!success] Besonders wichtig
>Immer VPN in **öffentlichen WLANs** verwenden!

## 3. Zertifikate prüfen
>Bei **SSL-Warnungen** niemals ignorieren!

**Browser-Warnung:**
```
⚠️ Diese Verbindung ist nicht sicher
   Das Zertifikat ist ungültig

   [Zurück] [Erweitert]
```

>[!warning] Niemals fortfahren!
>Solche Warnungen können auf MitM-Angriffe hindeuten.

## 4. Statische ARP-Einträge
>Verhindert ARP-Spoofing durch feste MAC-Adressen-Zuordnung.

```bash
# Statischen ARP-Eintrag hinzufügen (Linux)
sudo arp -s 192.168.1.1 00:11:22:33:44:55

# Windows
arp -s 192.168.1.1 00-11-22-33-44-55
```

## 5. Sichere DNS-Server
>Verschlüsselte DNS-Anfragen verwenden.

**DNS over HTTPS (DoH):**
- Cloudflare: 1.1.1.1
- Google: 8.8.8.8

**DNS over TLS (DoT):**
- Verhindert DNS-Spoofing

## 6. Netzwerk-Monitoring
>Überwachen auf verdächtige Aktivitäten.

**Tools:**
- **XArp** - ARP-Spoofing Detection
- **Arpwatch** - Überwacht ARP-Tabellen
- **Wireshark** - Netzwerk-Traffic-Analyse

## 7. Sichere WLAN-Verbindungen
>[!important] Regeln für öffentliche WLANs
>- ❌ Keine sensiblen Transaktionen (Banking, Shopping)
>- ✅ VPN aktivieren
>- ❌ Nicht auf unbekannte WLANs verbinden
>- ✅ HTTPS erzwingen
>- ❌ Automatische WLAN-Verbindung deaktivieren

---

# Erkennung von MitM-Angriffen

## Warnsignale

>[!warning] Verdächtige Anzeichen
>- 🔴 **SSL-Zertifikat-Warnungen** im Browser
>- 🔴 **Unerwartete Weiterleitungen** auf andere Websites
>- 🔴 **Langsame Verbindungen** (Traffic wird umgeleitet)
>- 🔴 **Doppelte IPs** im Netzwerk (ARP-Spoofing)
>- 🔴 **Unbekannte Geräte** im WLAN

## Tools zur Erkennung

```bash
# ARP-Tabelle prüfen (mehrere IPs mit gleicher MAC?)
arp -a

# Netzwerk-Traffic analysieren
sudo tcpdump -i wlan0

# ARP-Spoofing Detection
sudo arpwatch -i wlan0
```

---

# Code-Beispiel: Einfacher HTTPS-Check (Python)

```python
import ssl
import socket
from urllib.parse import urlparse

def check_https_certificate(url):
    """Prüft, ob ein HTTPS-Zertifikat gültig ist"""
    parsed_url = urlparse(url)
    hostname = parsed_url.hostname
    port = 443

    context = ssl.create_default_context()

    try:
        with socket.create_connection((hostname, port)) as sock:
            with context.wrap_socket(sock, server_hostname=hostname) as ssock:
                cert = ssock.getpeercert()
                print(f"✅ Verbindung zu {hostname} ist sicher")
                print(f"Zertifikat ausgestellt für: {cert['subject']}")
                return True
    except ssl.SSLError as e:
        print(f"❌ SSL-Fehler: {e}")
        print("⚠️ MÖGLICHER MitM-ANGRIFF!")
        return False
    except Exception as e:
        print(f"❌ Verbindungsfehler: {e}")
        return False

# Test
check_https_certificate("https://google.com")
check_https_certificate("https://expired.badssl.com/")  # Ungültiges Zertifikat
```

---

# Unterschied zu anderen Angriffen

| Angriff | Ziel | Methode |
|---------|------|---------|
| **MitM-Angriff** | Kommunikation **abfangen** | Zwischen zwei Parteien schalten |
| [[02 - RESOURCES/Notes/Cross Site Scripting\|Cross Site Scripting]] | Code in Browser **einschleusen** | XSS-Payload in Webseite |
| [[SQL-Injection\|SQL-Injection]] | Datenbank **manipulieren** | SQL-Befehle einschleusen |
| [[02 - RESOURCES/Notes/Phishing\|Phishing]] | Zugangsdaten **stehlen** | Gefälschte Websites/E-Mails |
| [[DDoS\|DDoS]] | Dienst **lahmlegen** | Server überlasten |

---

# Zusammenfassung

>[!summary] Kernpunkte
>- **MitM** = Angreifer schaltet sich zwischen zwei Kommunikationspartner
>- **Ziel**: Daten abfangen, mitlesen, manipulieren
>- **Arten**: ARP-Spoofing, DNS-Spoofing, SSL-Stripping, Evil Twin, Session Hijacking
>- **Schutz**: HTTPS, VPN, Zertifikate prüfen, sichere WLANs, DNS-Verschlüsselung
>- **Besonders gefährlich**: Öffentliche WLANs ohne Verschlüsselung

>[!important] Goldene Regel
>**Niemals sensible Daten über unverschlüsselte Verbindungen** (HTTP) oder **unbekannte WLANs** übertragen!

---

# Verwandte Konzepte

- [[ARP-Spoofing\|ARP-Spoofing]] - Spezielle MitM-Technik
- [[02 - RESOURCES/Notes/DNS-Spoofing\|DNS-Spoofing]] - DNS-Manipulation
- [[02 - RESOURCES/Notes/Phishing\|Phishing]] - Gefälschte Websites
- [[02 - RESOURCES/Notes/Cross Site Scripting\|Cross Site Scripting]] - Web-Sicherheit
- [[02 - RESOURCES/Notes/VPN\|VPN]] - Schutz durch Verschlüsselung
- [[02 - RESOURCES/Notes/HTTPS\|HTTPS]] - Sichere Webkommunikation

---

# Weiterführende Ressourcen

📚 **Dokumentation**:
- OWASP: Man-in-the-Middle Attacks
- NIST: Guidelines on Securing Public Web Servers
- RFC 5246: TLS Protocol

🛠️ **Tools** (nur für autorisierte Tests):
- Ettercap, Bettercap (ARP-Spoofing)
- mitmproxy (HTTPS-Proxy)
- Wireshark (Traffic-Analyse)
