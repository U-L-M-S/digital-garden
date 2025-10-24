---
{"dg-publish":true,"permalink":"/02-resources/notes/tftp-server/","tags":["informatik/netzwerk","informatik/server","GFN/LF06"],"noteIcon":"","updated":"2025-10-24T13:04:09.616+02:00"}
---


>Ein TFTP-Server (Trivial File Transfer Protocol Server) ist ein einfacher Dateiserver, der das TFTP-Protokoll nutzt, um Dateien über das [[02 - RESOURCES/Notes/Netzwerk\|Netzwerk]] zu übertragen - typischerweise für [[02 - RESOURCES/Notes/PXE-Boot\|PXE-Boot]] und Geräte-Konfigurationen.

>>TFTP ist ein sehr einfaches, aber unsicheres Protokoll ohne Authentifizierung oder [[02 - RESOURCES/Notes/Verschlüsselung\|Verschlüsselung]], hauptsächlich für Boot-Images und Firmware-Updates eingesetzt.

>[!example] Typische Einsatzbereiche
>- **[[02 - RESOURCES/Notes/PXE-Boot\|PXE-Boot]]** - Boot-Images für [[02 - RESOURCES/Notes/PC\|PC]]-Installation bereitstellen
>- **[[02 - RESOURCES/Notes/Netzwerk\|Netzwerk]]geräte** - Firmware-Updates für [[02 - RESOURCES/Notes/Router\|Router]], [[02 - RESOURCES/Notes/Switch\|Switch]], Firewalls
>- **VoIP-Telefone** - Konfigurationsdateien laden
>- **Embedded Systems** - Einfache Dateiübertragung
>- **Thin Clients** - [[02 - RESOURCES/Notes/Betriebssystem\|Betriebssystem]]-Images laden

---

## TFTP vs. FTP

|Eigenschaft|TFTP|FTP|
|---|---|---|
|**Komplexität**|Sehr einfach|Komplex|
|**Port**|UDP 69|TCP 20/21|
|**Authentifizierung**|Keine|Ja (Username/Password)|
|**[[02 - RESOURCES/Notes/Verschlüsselung\|Verschlüsselung]]**|Keine|Optional (FTPS/SFTP)|
|**Verzeichnisse**|Nein|Ja|
|**Use Case**|Boot, Firmware|Allgemeine Dateiübertragung|

>[!important] UDP-basiert
>TFTP nutzt UDP (nicht TCP), daher:
>- Keine Verbindungsgarantie
>- Weniger Overhead
>- Einfacher, aber unsicherer

---

## TFTP-Server-Setup

>[!tip] Bekannte TFTP-Server-Software
>- **tftpd-hpa** (Linux, Standard)
>- **Windows Deployment Services (WDS)** - Integrierter TFTP
>- **SolarWinds TFTP Server** (Windows, kostenlos)
>- **Tftpd64** (Windows, einfach)

>[!example] Linux-Installation (Ubuntu)
>```bash
>sudo apt install tftpd-hpa
>sudo systemctl start tftpd-hpa
>sudo systemctl enable tftpd-hpa
>```
>
>Standardverzeichnis: `/srv/tftp/`

---

## Konfiguration

>[!note] TFTP-Server-Optionen
>- **Root-Verzeichnis**: Wo liegen die Dateien? (z.B. `/srv/tftp`)
>- **Port**: Standard UDP 69
>- **Read-Only vs. Read-Write**: Meist Read-Only für Sicherheit
>- **Timeout**: Wie lange warten auf Client?
>- **Blocksize**: Optimierung für große Dateien

**Beispiel-Konfiguration (Linux /etc/default/tftpd-hpa)**:
>```
>TFTP_USERNAME="tftp"
>TFTP_DIRECTORY="/srv/tftp"
>TFTP_ADDRESS=":69"
>TFTP_OPTIONS="--secure"
>```

---

## Integration mit [[02 - RESOURCES/Notes/PXE-Boot\|PXE-Boot]]

>[!important] TFTP + DHCP + PXE
>Für [[02 - RESOURCES/Notes/PXE-Boot\|PXE-Boot]] benötigt man:
>
>1. **[[02 - RESOURCES/Notes/DHCP-Server\|DHCP-Server]]** - Vergibt [[02 - RESOURCES/Notes/IP-Adresse\|IP-Adresse]] und TFTP-Server-Info
>2. **TFTP-Server** - Liefert Boot-Image (z.B. pxelinux.0, initrd)
>3. **Boot-Images** - Im TFTP-Root-Verzeichnis

**Ablauf**:
>```
>1. [[PC]] bootet, sendet DHCP-Request
>2. [[DHCP-Server]]: "Deine [[IP-Adresse]] ist 192.168.1.50,
>   TFTP-Server ist 192.168.1.100,
>   Boot-Datei: pxelinux.0"
>3. [[PC]] kontaktiert TFTP-Server: "Gib mir pxelinux.0"
>4. TFTP-Server sendet pxelinux.0
>5. [[PC]] startet pxelinux.0
>```

---

## Sicherheit

>[!danger] Sicherheitsprobleme
>- **Keine Authentifizierung** - Jeder kann Dateien abrufen
>- **Keine [[02 - RESOURCES/Notes/Verschlüsselung\|Verschlüsselung]]** - Übertragung im Klartext
>- **Keine Integritätsprüfung** - Manipulation möglich
>- **UDP** - Spoofing-Anfälligkeit

>[!tip] Best Practices
>- **Isoliertes [[02 - RESOURCES/Notes/Netzwerk\|Netzwerk]]** - TFTP nur in Management-VLANs
>- **Read-Only-Modus** - Schreibzugriff deaktivieren
>- **Firewall** - Port 69 nur für vertrauenswürdige Quellen
>- **Minimale Dateien** - Nur notwendige Boot-Images
>- **iPXE + HTTP** - Moderne Alternative mit HTTPS

>[!caution] Nicht für sensible Daten
>TFTP sollte NIEMALS für vertrauliche Daten verwendet werden - keine [[02 - RESOURCES/Notes/DSGVO\|DSGVO]]-Konformität!

---

## Troubleshooting

>[!caution] Häufige Probleme
>- **TFTP Timeout** - Server nicht erreichbar, Firewall blockt UDP 69
>- **File not found** - Falsche Pfade, Berechtigungen
>- **Permission denied** - TFTP-User hat keine Leserechte
>- **Slow transfer** - Blocksize zu klein, [[02 - RESOURCES/Notes/Netzwerk\|Netzwerk]]-Probleme

>[!example] Diagnose-Befehle
>```bash
># TFTP-Verbindung testen (Linux)
>tftp <server-ip>
>tftp> get testfile
>
># TFTP-Server-Status prüfen
>sudo systemctl status tftpd-hpa
>
># Logs prüfen
>sudo journalctl -u tftpd-hpa
>
># Firewall-Regel prüfen
>sudo ufw status
>```

---

## Moderne Alternativen

>[!info] HTTP/HTTPS für Boot
>Moderne Systeme nutzen HTTP/HTTPS statt TFTP:
>- **iPXE** - Open-Source-Bootloader mit HTTP-Support
>- **Schneller** - TCP statt UDP
>- **Sicherer** - HTTPS mit [[02 - RESOURCES/Notes/Verschlüsselung\|Verschlüsselung]]
>- **Flexibler** - Größere Dateien, besseres Caching

>[!note] [[02 - RESOURCES/Notes/ITIL\|ITIL]]-Integration
>TFTP-Server sind Teil der [[02 - RESOURCES/Notes/Configuration Management\|Configuration Management]]-Datenbank ([[02 - RESOURCES/Notes/CMDB\|CMDB]]) und unterstützen [[02 - RESOURCES/Notes/Service Transition\|Service Transition]] bei Deployments.
