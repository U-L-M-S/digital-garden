---
{"dg-publish":true,"permalink":"/wiki/pxe-boot/","tags":["netzwerk/boot","GFN/LF06","system-administration"],"noteIcon":"","updated":"2025-11-05T13:17:53.000+01:00","dg-note-properties":{"tags":["netzwerk/boot","GFN/LF06","system-administration"],"aliases":["PXE","Preboot Execution Environment","Network Boot"],"links":null,"created_date":"2025-11-05"}}
---


>[[wiki/PXE-Boot\|PXE-Boot]] ermöglicht es einem Computer sich über das [[wiki/Netzwerk\|Netzwerk]] zu starten ohne lokales [[Betriebssystem\|Betriebssystem]] - wie ein Fernseher der sein Programm aus dem Internet holt statt von DVD.

>>Perfekt um viele [[PC\|PC]]s gleichzeitig zu installieren oder Diagnose-Tools zu starten ohne Festplatte.

## Definition

>[!quote] Was ist [[wiki/PXE-Boot\|PXE-Boot]]?
>[[wiki/PXE-Boot\|PXE-Boot]] (Preboot Execution Environment) ist ein Verfahren um Computer über das [[wiki/Netzwerk\|Netzwerk]] zu starten bevor ein lokales [[Betriebssystem\|Betriebssystem]] lädt.

## Funktionsweise

### Ablauf Schritt-für-Schritt:

```
1. Computer startet
   ↓
2. BIOS/UEFI aktiviert Netzwerkkarte
   ↓
3. Sucht [[wiki/DHCP-Server\|DHCP-Server]]
   ↓
4. [[wiki/DHCP-Server\|DHCP-Server]] antwortet mit:
   - [[wiki/IP-Adresse\|IP-Adresse]]
   - [[TFTP-Server\|TFTP-Server]]-Adresse
   - Boot-Datei-Name
   ↓
5. Lädt Boot-Image von [[TFTP-Server\|TFTP-Server]]
   ↓
6. Startet Boot-Image
   ↓
7. Weiterer Boot-Prozess (OS-Installation, Live-System, etc.)
```

### Komponenten

#### 1. PXE-fähige Netzwerkkarte
>[[PC\|PC]] braucht [[NIC\|NIC]] mit PXE-Support.

**Aktivierung:**
- Im BIOS: Network Boot aktivieren
- Boot-Reihenfolge: Network vor Festplatte
- Modern: Fast alle Netzwerkkarten unterstützen PXE

#### 2. [[wiki/DHCP-Server\|DHCP-Server]]
>Verteilt [[wiki/IP-Adresse\|IP-Adresse]]n und PXE-Infos.

**PXE-spezifische DHCP-Optionen:**
- **Option 66:** [[TFTP-Server\|TFTP-Server]]-IP
- **Option 67:** Boot-Datei-Name (z.B. "pxelinux.0")

#### 3. [[TFTP-Server\|TFTP-Server]]
>Trivial File Transfer Protocol - schickt Boot-Image.

**Warum TFTP:**
- Sehr einfaches Protokoll
- Funktioniert in Pre-Boot-Umgebung
- Keine Authentifizierung nötig

**Warnung:**
>[!warning] Sicherheit
>[[TFTP\|TFTP]] ist **unverschlüsselt** - nur in sicheren internen [[wiki/Netzwerk\|Netzwerk]]en nutzen!

#### 4. Boot-Image
>Das [[Betriebssystem\|Betriebssystem]] oder Tool das startet.

**Typen:**
- Windows PE (für Windows-Installation)
- Linux initramfs (für Linux-Installation)
- Live-Systeme
- Diagnose-Tools

## Anwendungsfälle

### 1. Mass-Deployment
>Viele Computer gleichzeitig installieren.

**Szenario:**
- 100 neue [[PC\|PC]]s im Büro
- Alle sollen identisches [[Betriebssystem\|Betriebssystem]]
- [[wiki/PXE-Boot\|PXE-Boot]] zu Windows Deployment Services (WDS)
- Automatische Installation über [[wiki/Netzwerk\|Netzwerk]]

**Vorteile:**
- Keine USB-Sticks für jeden [[PC\|PC]]
- Zentralisierte Images
- Parallel-Installation

### 2. Diskless Workstations
>[[PC\|PC]]s ohne Festplatte betreiben.

**Use Case:**
- Thin Clients
- Öffentliche Terminals
- Sicherheit: Keine lokalen Daten

**Wie:**
- [[PC\|PC]] bootet immer über [[wiki/Netzwerk\|Netzwerk]]
- [[Betriebssystem\|Betriebssystem]] läuft aus RAM
- Daten auf [[wiki/Server\|Server]]

### 3. Hardware-Diagnose
>Computer testen ohne installiertES [[Betriebssystem\|OS]].

**Diagnose-Tools:**
- Memtest86+ (RAM-Test)
- DBAN (Festplatte sicher löschen)
- Hardware-Inventory-Tools

**Vorteil:**
- Funktioniert auch wenn [[Betriebssystem\|Betriebssystem]] kaputt
- Keine bootfähigen USBs nötig

### 4. Rescue-Systeme
>Kaputte Systeme retten.

**Anwendung:**
- Live-Linux booten
- Daten sichern
- [[Betriebssystem\|Betriebssystem]] reparieren
- [[wiki/Backup\|Backup]] wiederherstellen

### 5. Betriebssystem-Installation
>OS-Installation über [[wiki/Netzwerk\|Netzwerk]].

**Für:**
- Windows Deployment Services (WDS)
- Linux-Installer (Debian, Ubuntu, etc.)
- Zentrale Image-Verwaltung

## Konfiguration Beispiel

### [[wiki/DHCP-Server\|DHCP-Server]]-Konfiguration (Linux):

```bash
subnet 192.168.1.0 netmask 255.255.255.0 {
    range 192.168.1.100 192.168.1.200;

    # PXE-Boot-Optionen
    next-server 192.168.1.10;        # TFTP-Server
    filename "pxelinux.0";           # Boot-Datei
}
```

### [[TFTP-Server\|TFTP-Server]]-Setup (Linux):

```bash
# TFTP installieren
apt-get install tftpd-hpa

# Boot-Dateien kopieren
cp /usr/lib/syslinux/pxelinux.0 /srv/tftp/
```

## Vorteile

>[!check] Warum [[wiki/PXE-Boot\|PXE-Boot]]?
>- **Zentrale Verwaltung** - Images an einem Ort
>- **Zeitsparend** - Parallel-Installation vieler [[PC\|PC]]s
>- **Keine Medien** - Keine USB-Sticks/DVDs
>- **Immer aktuell** - Neueste Images automatisch
>- **Flexibel** - Verschiedene Images für verschiedene Zwecke

## Nachteile

>[!fail] Limitationen
>- **Netzwerk nötig** - Ohne [[wiki/Netzwerk\|Netzwerk]] geht nichts
>- **Langsamer** als lokale Installation (bei langsamem [[wiki/Netzwerk\|Netzwerk]])
>- **Sicherheit** - TFTP unverschlüsselt
>- **Komplexe Einrichtung** - Initial-Setup aufwändig
>- **BIOS-Support nötig** - Alte Geräte unterstützen PXE nicht immer

## Troubleshooting

### Häufige Probleme:

**1. [[PC\|PC]] findet [[wiki/DHCP-Server\|DHCP-Server]] nicht**
- VLAN-Konfiguration prüfen
- [[DHCP\|DHCP]]-Relay bei mehreren Netzen

**2. Boot-Datei nicht gefunden**
- [[TFTP-Server\|TFTP-Server]]-Pfad prüfen
- Dateiname in [[DHCP\|DHCP]] korrekt?
- [[wiki/Firewall\|Firewall]] blockiert Port 69 (TFTP)?

**3. Boot startet aber crashed**
- Image-Datei korrupt
- Inkompatible Kernel-Version
- RAM zu wenig

## Moderne Alternativen

### iPXE
>Erweiterter PXE-Client mit mehr Features.

**Vorteile:**
- HTTP statt TFTP (schneller)
- [[wiki/HTTPS\|HTTPS]] möglich (sicher)
- Scripting-Unterstützung

### UEFI Network Boot
>Moderner Nachfolger von Legacy-PXE.

**Features:**
- Secure Boot Support
- IPv6-Unterstützung
- HTTP Boot

## Prüfungsrelevanz LF06

>[!important] Für LF06 wichtig
>- **Definition**: Boot über [[wiki/Netzwerk\|Netzwerk]]
>- **Komponenten**: [[wiki/DHCP-Server\|DHCP-Server]], [[TFTP-Server\|TFTP-Server]], Boot-Image
>- **Anwendung**: Mass-Deployment, Diagnose, Installation
>- **Sicherheit**: TFTP unverschlüsselt

**Typische Prüfungsfrage:**
>"Erklären Sie den PXE-Boot-Prozess und nennen Sie zwei praktische Anwendungsfälle."

## Verwandte Konzepte

- [[wiki/DHCP-Server\|DHCP-Server]] - Verteilt [[wiki/IP-Adresse\|IP-Adresse]]n und Boot-Info
- [[TFTP-Server\|TFTP-Server]] - Liefert Boot-Dateien
- WDS - Windows Deployment Services
- [[Netboot\|Netboot]] - Generischer Begriff
- [[Diskless Workstation\|Diskless Workstation]] - [[PC\|PC]] ohne Festplatte

## Zusammenfassung

>[!quote] Kern-Aussage
>[[wiki/PXE-Boot\|PXE-Boot]] startet Computer über [[wiki/Netzwerk\|Netzwerk]] statt von lokaler Festplatte - ideal für Mass-Deployment und Diagnose.

**Merksatz:**
>"PXE = Computer holt [[Betriebssystem\|Betriebssystem]] aus dem [[wiki/Netzwerk\|Netzwerk]] wie Fernseher Programm aus dem Internet!"

**Der Ablauf:**
>[[PC\|PC]] startet → [[DHCP\|DHCP]] gibt IP + Boot-Info → [[TFTP\|TFTP]] liefert Image → [[PC\|PC]] bootet
