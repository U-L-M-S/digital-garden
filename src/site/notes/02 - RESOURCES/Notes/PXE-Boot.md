---
{"dg-publish":true,"permalink":"/02-resources/notes/pxe-boot/","tags":["informatik/netzwerk","informatik/deployment","GFN/LF06"],"noteIcon":"","updated":"2025-10-24T13:01:54.746+02:00"}
---


>PXE-Boot (Preboot Execution Environment) ist eine Technologie, die es ermöglicht, Computer über das [[02 - RESOURCES/Notes/Netzwerk\|Netzwerk]] zu starten, ohne lokales [[02 - RESOURCES/Notes/Betriebssystem\|Betriebssystem]] oder Bootmedium.

>>[[02 - RESOURCES/Notes/PXE\|PXE]] wird häufig für Mass-Deployment von [[02 - RESOURCES/Notes/Betriebssystem\|Betriebssystem]]en, Diagnose-Tools und zentrale Verwaltung von [[02 - RESOURCES/Notes/PC\|PC]]s eingesetzt.

>[!example] Einsatzbereiche
>- **Mass-Deployment** - 100+ [[02 - RESOURCES/Notes/PC\|PC]]s gleichzeitig installieren
>- **Thin Clients** - Computer ohne eigene Festplatte
>- **Diagnose und Wiederherstellung** - Hardware-Tests, Virenscans
>- **Live-Systeme** - Temporäre [[02 - RESOURCES/Notes/Betriebssystem\|Betriebssystem]]e ohne Installation
>- **Diskless Workstations** - System läuft komplett vom [[02 - RESOURCES/Notes/Netzwerk\|Netzwerk]]

---

## PXE-Boot-Prozess

>[!important] Ablauf

```
1. [[02 - RESOURCES/Notes/PC\|PC]] startet, BIOS/UEFI aktiviert PXE
   ↓
2. [[02 - RESOURCES/Notes/Netzwerk\|Netzwerk]]karte sendet DHCP-Request
   ↓
3. [[02 - RESOURCES/Notes/DHCP-Server\|DHCP-Server]] antwortet mit:
   - [[02 - RESOURCES/Notes/IP-Adresse\|IP-Adresse]] für den Client
   - [[02 - RESOURCES/Notes/TFTP-Server\|TFTP-Server]]-Adresse
   - Boot-Dateiname
   ↓
4. Client kontaktiert [[02 - RESOURCES/Notes/TFTP-Server\|TFTP-Server]]
   ↓
5. [[TFTP-Server]] sendet Boot-Image (z.B. Linux-Kernel)
   ↓
6. Client lädt und startet das Image
   ↓
7. [[02 - RESOURCES/Notes/Betriebssystem\|Betriebssystem]]/Tool läuft
```

---

## Benötigte Komponenten

|Komponente|Funktion|
|---|---|
|**[[02 - RESOURCES/Notes/DHCP-Server\|DHCP-Server]]**|Vergibt [[IP-Adresse]] und PXE-Informationen|
|**[[TFTP-Server]]**|Liefert Boot-Dateien (sehr einfaches Protokoll)|
|**PXE-Server**|Verwaltet Boot-Images und Deployment|
|**Boot-Images**|[[Betriebssystem]]-Installer, Diagnose-Tools|

>[!tip] Bekannte PXE-Systeme
>- **Windows Deployment Services (WDS)**
>- **Microsoft System Center Configuration Manager (SCCM)**
>- **FOG Project** (Open Source)
>- **Cobbler** (Linux)
>- **iPXE** (Erweitertes PXE mit HTTP-Support)

---

## BIOS/UEFI-Konfiguration

>[!note] PXE aktivieren
>Im BIOS/UEFI muss PXE-Boot aktiviert und in der Boot-Reihenfolge priorisiert werden:
>
>1. BIOS/UEFI aufrufen (F2, F12, Del)
>2. Boot-Optionen
>3. PXE/Network Boot aktivieren
>4. Boot-Reihenfolge: [[02 - RESOURCES/Notes/Netzwerk\|Netzwerk]] vor Festplatte

---

## Sicherheitsaspekte

>[!danger] Sicherheitsrisiken

**Probleme**:
>- [[02 - RESOURCES/Notes/PXE\|PXE]] ist **unverschlüsselt** (TFTP hat keine [[02 - RESOURCES/Notes/Verschlüsselung\|Verschlüsselung]])
>- Jeder im [[02 - RESOURCES/Notes/Netzwerk\|Netzwerk]] kann Boot-Images abrufen
>- Manipulation von Boot-Images möglich
>- Keine Authentifizierung

**Absicherung**:
>>[!tip] Best Practices
>>- PXE nur in **isolierten/sicheren [[02 - RESOURCES/Notes/Netzwerk\|Netzwerk]]en** nutzen
>>- VLANs für Deployment-[[02 - RESOURCES/Notes/Netzwerk\|Netzwerk]]
>>- iPXE mit HTTPS verwenden
>>- MAC-Adressen-Filterung
>>- [[02 - RESOURCES/Notes/Netzwerk\|Netzwerk]]-Segmentierung

---

## Vorteile und Nachteile

>[!success] Vorteile
>- **Effizienz**: Viele [[02 - RESOURCES/Notes/PC\|PC]]s parallel installieren
>- **Zentral**: Ein Image für alle
>- **Kein Medium**: Keine USB-Sticks oder DVDs nötig
>- **Remote**: Installation aus der Ferne
>- **Diagnose**: Hardware-Tests ohne lokales System

>[!caution] Nachteile
>- **[[02 - RESOURCES/Notes/Netzwerk\|Netzwerk]]-abhängig**: Ohne [[Netzwerk]] funktioniert nichts
>- **Sicherheit**: Unverschlüsselt
>- **Komplexität**: Setup von [[02 - RESOURCES/Notes/DHCP-Server\|DHCP-Server]], [[TFTP-Server]] etc.
>- **Performance**: Langsamer als lokale Installation

---

## Praktisches Beispiel

>[!example] Windows-Installation via PXE

**Setup**:
>1. Windows Deployment Services (WDS) auf [[02 - RESOURCES/Notes/Server\|Server]] installieren
>2. [[DHCP-Server]] konfigurieren (Option 66, 67)
>3. Windows-Image zu WDS hinzufügen
>4. [[02 - RESOURCES/Notes/PC\|PC]]s per [[02 - RESOURCES/Notes/PXE\|PXE]] booten
>5. Automatische Installation startet

**Nutzen**: 100 [[PC]]s in einer Schule in 2 Stunden statt 2 Wochen!

>[!important] [[02 - RESOURCES/Notes/Service Transition\|Service Transition]]
>[[02 - RESOURCES/Notes/PXE-Boot\|PXE-Boot]] ist ein wichtiges Werkzeug für [[02 - RESOURCES/Notes/Service Transition\|Service Transition]] und Deployment-Prozesse im [[02 - RESOURCES/Notes/ITIL\|ITIL]]-Kontext.
