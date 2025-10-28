---
{"dg-publish":true,"permalink":"/02-resources/notes/pxe/","tags":["informatik/netzwerk","informatik/deployment","GFN/LF06"],"noteIcon":"","updated":"2025-10-24T13:04:08.000+02:00"}
---


>PXE (Preboot Execution Environment) ist ein Industriestandard, der es Computern ermöglicht, über das [[02 - RESOURCES/Notes/Netzwerk\|Netzwerk]] zu booten, bevor ein lokales [[02 - RESOURCES/Notes/Betriebssystem\|Betriebssystem]] geladen wird.

>>PXE ist die Grundlage für [[02 - RESOURCES/Notes/PXE-Boot\|PXE-Boot]] und ermöglicht zentrale Verwaltung, Deployment und Diagnose von [[02 - RESOURCES/Notes/PC\|PC]]s über das [[02 - RESOURCES/Notes/Netzwerk\|Netzwerk]].

>[!info] Technischer Hintergrund
>- Entwickelt von Intel
>- Teil der Unified Extensible Firmware Interface (UEFI) und BIOS-Standards
>- Ermöglicht Boot von [[02 - RESOURCES/Notes/Netzwerk\|Netzwerk]]-Ressourcen statt Festplatte/USB
>- Nutzt DHCP und TFTP-Protokolle

---

## Funktionsweise

>[!example] PXE-Komponenten
>- **PXE-fähige Netzwerkkarte** - In fast allen modernen [[02 - RESOURCES/Notes/PC\|PC]]s
>- **[[02 - RESOURCES/Notes/DHCP-Server\|DHCP-Server]]** - Vergibt [[02 - RESOURCES/Notes/IP-Adresse\|IP-Adresse]] und Boot-Informationen
>- **[[02 - RESOURCES/Notes/TFTP-Server\|TFTP-Server]]** - Liefert Boot-Dateien
>- **PXE-Server** - Verwaltet Boot-Images

>[!important] Boot-Prozess
>1. [[02 - RESOURCES/Notes/PC\|PC]] startet, Netzwerkkarte sendet DHCP-Request
>2. [[02 - RESOURCES/Notes/DHCP-Server\|DHCP-Server]] antwortet mit [[02 - RESOURCES/Notes/IP-Adresse\|IP-Adresse]], [[02 - RESOURCES/Notes/TFTP-Server\|TFTP-Server]]-Adresse und Boot-Dateiname
>3. PXE-Client lädt Boot-Image vom [[02 - RESOURCES/Notes/TFTP-Server\|TFTP-Server]]
>4. Boot-Image wird ausgeführt (z.B. Installer, Diagnose-Tool)

---

## Einsatzbereiche

>[!example] Typische Anwendungen
>- **[[02 - RESOURCES/Notes/Betriebssystem\|Betriebssystem]]-Installation** - Windows, Linux auf vielen [[02 - RESOURCES/Notes/PC\|PC]]s
>- **Thin Clients** - Diskless Workstations
>- **Rescue-Systeme** - Datenrettung, Virenscanner
>- **Hardware-Diagnose** - Memtest86, Festplatten-Tests
>- **Live-Systeme** - Ubuntu Live, Gparted

>[!tip] Mass-Deployment
>PXE ist ideal für Szenarien wie:
>- Schul-Computerräume (100+ [[02 - RESOURCES/Notes/PC\|PC]]s)
>- Call-Center
>- Unternehmensneuausrüstung
>- Rechenzentren

---

## DHCP-Konfiguration für PXE

>[!note] DHCP-Optionen
>Der [[02 - RESOURCES/Notes/DHCP-Server\|DHCP-Server]] muss zusätzliche Optionen bereitstellen:
>- **Option 66**: [[02 - RESOURCES/Notes/TFTP-Server\|TFTP-Server]]-Adresse (z.B. 192.168.1.100)
>- **Option 67**: Boot-Dateiname (z.B. pxelinux.0)

**Beispiel (Linux DHCP-Config)**:
>```
>subnet 192.168.1.0 netmask 255.255.255.0 {
>  option tftp-server-name "192.168.1.100";
>  option bootfile-name "pxelinux.0";
>}
>```

---

## Sicherheit

>[!danger] Sicherheitsbedenken
>- **Keine [[02 - RESOURCES/Notes/Verschlüsselung\|Verschlüsselung]]**: TFTP ist unverschlüsselt
>- **Keine Authentifizierung**: Jeder kann booten
>- **Man-in-the-Middle**: Angriffe möglich

>[!tip] Absicherung
>- PXE nur in isolierten/sicheren [[02 - RESOURCES/Notes/Netzwerk\|Netzwerk]]en
>- VLANs für Deployment
>- iPXE mit HTTPS-Support nutzen
>- MAC-Adressen-Filterung
>- Secure Boot (UEFI)

---

## Moderne Erweiterungen

>[!info] iPXE
>iPXE ist eine Open-Source-Erweiterung von PXE mit zusätzlichen Features:
>- **HTTP/HTTPS-Support** - Schneller und sicherer als TFTP
>- **Scripting** - Komplexe Boot-Logik
>- **DNS-Auflösung** - Boot von Hostnamen
>- **iSCSI-Support** - Boot von SAN

>[!example] Cloud-Integration
>Moderne PXE-Systeme können [[02 - RESOURCES/Notes/Betriebssystem\|Betriebssystem]]e aus der Cloud booten oder automatisch in Cloud-Umgebungen deployen.

---

## Troubleshooting

>[!caution] Häufige Probleme
>- **PXE-Boot not found** - BIOS/UEFI-Einstellung, [[02 - RESOURCES/Notes/DHCP-Server\|DHCP-Server]] antwortet nicht
>- **TFTP Timeout** - [[02 - RESOURCES/Notes/TFTP-Server\|TFTP-Server]] nicht erreichbar, Firewall blockt
>- **Boot-Image lädt nicht** - Falscher Pfad in DHCP-Option 67
>- **[[02 - RESOURCES/Notes/Netzwerk\|Netzwerk]]-Probleme** - Kabel, [[02 - RESOURCES/Notes/Switch\|Switch]], VLAN-Konfiguration

>[!tip] Diagnose
>1. BIOS/UEFI: PXE aktiviert?
>2. [[02 - RESOURCES/Notes/Netzwerk\|Netzwerk]]-Verbindung: Kabel, Link-LED?
>3. [[02 - RESOURCES/Notes/DHCP-Server\|DHCP-Server]]: Antwortet er? (Option 66, 67 gesetzt?)
>4. [[02 - RESOURCES/Notes/TFTP-Server\|TFTP-Server]]: Erreichbar? (TFTP-Test manuell)
>5. Boot-Image: Korrekt und vollständig?

>[!important] [[02 - RESOURCES/Notes/ITIL\|ITIL]]-Kontext
>PXE ist ein wichtiges Werkzeug in [[02 - RESOURCES/Notes/Service Transition\|Service Transition]] für [[02 - RESOURCES/Notes/Release Management\|Release Management]] und Deployment-Prozesse.
