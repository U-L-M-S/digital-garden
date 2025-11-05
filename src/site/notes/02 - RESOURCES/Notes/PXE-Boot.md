---
{"dg-publish":true,"permalink":"/02-resources/notes/pxe-boot/","tags":["netzwerk/boot","GFN/LF06","system-administration"],"noteIcon":"","updated":"2025-11-05T13:17:53.981+01:00"}
---


>[[02 - RESOURCES/Notes/PXE-Boot\|PXE-Boot]] ermöglicht es einem Computer sich über das [[02 - RESOURCES/Notes/Netzwerk\|Netzwerk]] zu starten ohne lokales [[02 - RESOURCES/Notes/Betriebssystem\|Betriebssystem]] - wie ein Fernseher der sein Programm aus dem Internet holt statt von DVD.

>>Perfekt um viele [[PC\|PC]]s gleichzeitig zu installieren oder Diagnose-Tools zu starten ohne Festplatte.

## Definition

>[!quote] Was ist [[02 - RESOURCES/Notes/PXE-Boot\|PXE-Boot]]?
>[[02 - RESOURCES/Notes/PXE-Boot\|PXE-Boot]] (Preboot Execution Environment) ist ein Verfahren um Computer über das [[02 - RESOURCES/Notes/Netzwerk\|Netzwerk]] zu starten bevor ein lokales [[02 - RESOURCES/Notes/Betriebssystem\|Betriebssystem]] lädt.

## Funktionsweise

### Ablauf Schritt-für-Schritt:

```
1. Computer startet
   ↓
2. BIOS/UEFI aktiviert Netzwerkkarte
   ↓
3. Sucht [[02 - RESOURCES/Notes/DHCP-Server\|DHCP-Server]]
   ↓
4. [[02 - RESOURCES/Notes/DHCP-Server\|DHCP-Server]] antwortet mit:
   - [[02 - RESOURCES/Notes/IP-Adresse\|IP-Adresse]]
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

#### 2. [[02 - RESOURCES/Notes/DHCP-Server\|DHCP-Server]]
>Verteilt [[02 - RESOURCES/Notes/IP-Adresse\|IP-Adresse]]n und PXE-Infos.

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
>[[TFTP\|TFTP]] ist **unverschlüsselt** - nur in sicheren internen [[02 - RESOURCES/Notes/Netzwerk\|Netzwerk]]en nutzen!

#### 4. Boot-Image
>Das [[02 - RESOURCES/Notes/Betriebssystem\|Betriebssystem]] oder Tool das startet.

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
- Alle sollen identisches [[02 - RESOURCES/Notes/Betriebssystem\|Betriebssystem]]
- [[02 - RESOURCES/Notes/PXE-Boot\|PXE-Boot]] zu Windows Deployment Services (WDS)
- Automatische Installation über [[02 - RESOURCES/Notes/Netzwerk\|Netzwerk]]

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
- [[PC\|PC]] bootet immer über [[02 - RESOURCES/Notes/Netzwerk\|Netzwerk]]
- [[02 - RESOURCES/Notes/Betriebssystem\|Betriebssystem]] läuft aus RAM
- Daten auf [[02 - RESOURCES/Notes/Server\|Server]]

### 3. Hardware-Diagnose
>Computer testen ohne installiertES [[02 - RESOURCES/Notes/Betriebssystem\|OS]].

**Diagnose-Tools:**
- Memtest86+ (RAM-Test)
- DBAN (Festplatte sicher löschen)
- Hardware-Inventory-Tools

**Vorteil:**
- Funktioniert auch wenn [[02 - RESOURCES/Notes/Betriebssystem\|Betriebssystem]] kaputt
- Keine bootfähigen USBs nötig

### 4. Rescue-Systeme
>Kaputte Systeme retten.

**Anwendung:**
- Live-Linux booten
- Daten sichern
- [[02 - RESOURCES/Notes/Betriebssystem\|Betriebssystem]] reparieren
- [[02 - RESOURCES/Notes/Backup\|Backup]] wiederherstellen

### 5. Betriebssystem-Installation
>OS-Installation über [[02 - RESOURCES/Notes/Netzwerk\|Netzwerk]].

**Für:**
- Windows Deployment Services (WDS)
- Linux-Installer (Debian, Ubuntu, etc.)
- Zentrale Image-Verwaltung

## Konfiguration Beispiel

### [[02 - RESOURCES/Notes/DHCP-Server\|DHCP-Server]]-Konfiguration (Linux):

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

>[!check] Warum [[02 - RESOURCES/Notes/PXE-Boot\|PXE-Boot]]?
>- **Zentrale Verwaltung** - Images an einem Ort
>- **Zeitsparend** - Parallel-Installation vieler [[PC\|PC]]s
>- **Keine Medien** - Keine USB-Sticks/DVDs
>- **Immer aktuell** - Neueste Images automatisch
>- **Flexibel** - Verschiedene Images für verschiedene Zwecke

## Nachteile

>[!fail] Limitationen
>- **Netzwerk nötig** - Ohne [[02 - RESOURCES/Notes/Netzwerk\|Netzwerk]] geht nichts
>- **Langsamer** als lokale Installation (bei langsamem [[02 - RESOURCES/Notes/Netzwerk\|Netzwerk]])
>- **Sicherheit** - TFTP unverschlüsselt
>- **Komplexe Einrichtung** - Initial-Setup aufwändig
>- **BIOS-Support nötig** - Alte Geräte unterstützen PXE nicht immer

## Troubleshooting

### Häufige Probleme:

**1. [[PC\|PC]] findet [[02 - RESOURCES/Notes/DHCP-Server\|DHCP-Server]] nicht**
- VLAN-Konfiguration prüfen
- [[DHCP\|DHCP]]-Relay bei mehreren Netzen

**2. Boot-Datei nicht gefunden**
- [[TFTP-Server\|TFTP-Server]]-Pfad prüfen
- Dateiname in [[DHCP\|DHCP]] korrekt?
- [[02 - RESOURCES/Notes/Firewall\|Firewall]] blockiert Port 69 (TFTP)?

**3. Boot startet aber crashed**
- Image-Datei korrupt
- Inkompatible Kernel-Version
- RAM zu wenig

## Moderne Alternativen

### iPXE
>Erweiterter PXE-Client mit mehr Features.

**Vorteile:**
- HTTP statt TFTP (schneller)
- [[02 - RESOURCES/Notes/HTTPS\|HTTPS]] möglich (sicher)
- Scripting-Unterstützung

### UEFI Network Boot
>Moderner Nachfolger von Legacy-PXE.

**Features:**
- Secure Boot Support
- IPv6-Unterstützung
- HTTP Boot

## Prüfungsrelevanz LF06

>[!important] Für LF06 wichtig
>- **Definition**: Boot über [[02 - RESOURCES/Notes/Netzwerk\|Netzwerk]]
>- **Komponenten**: [[DHCP-Server]], [[TFTP-Server]], Boot-Image
>- **Anwendung**: Mass-Deployment, Diagnose, Installation
>- **Sicherheit**: TFTP unverschlüsselt

**Typische Prüfungsfrage:**
>"Erklären Sie den PXE-Boot-Prozess und nennen Sie zwei praktische Anwendungsfälle."

## Verwandte Konzepte

- [[DHCP-Server]] - Verteilt [[IP-Adresse]]n und Boot-Info
- [[TFTP-Server]] - Liefert Boot-Dateien
- WDS - Windows Deployment Services
- [[Netboot\|Netboot]] - Generischer Begriff
- [[Diskless Workstation\|Diskless Workstation]] - [[PC\|PC]] ohne Festplatte

## Zusammenfassung

>[!quote] Kern-Aussage
>[[02 - RESOURCES/Notes/PXE-Boot\|PXE-Boot]] startet Computer über [[02 - RESOURCES/Notes/Netzwerk\|Netzwerk]] statt von lokaler Festplatte - ideal für Mass-Deployment und Diagnose.

**Merksatz:**
>"PXE = Computer holt [[02 - RESOURCES/Notes/Betriebssystem\|Betriebssystem]] aus dem [[02 - RESOURCES/Notes/Netzwerk\|Netzwerk]] wie Fernseher Programm aus dem Internet!"

**Der Ablauf:**
>[[PC\|PC]] startet → [[DHCP\|DHCP]] gibt IP + Boot-Info → [[TFTP\|TFTP]] liefert Image → [[PC\|PC]] bootet
