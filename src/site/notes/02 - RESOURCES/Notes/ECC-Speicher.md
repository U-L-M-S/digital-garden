---
{"dg-publish":true,"permalink":"/02-resources/notes/ecc-speicher/","tags":["hardware/speicher","sicherheit/datenintegrität","server/hardware"],"noteIcon":"","updated":"2025-10-29T12:59:05.000+01:00"}
---


> [[02 - RESOURCES/Notes/RAM\|RAM]] mit Fehlererkennung und Fehlerkorrektur für höchste Datensicherheit in kritischen Systemen.

>> Kann 1-Bit Fehler korrigieren und 2-Bit Fehler erkennen - wichtig für [[02 - RESOURCES/Notes/Server\|Server]] und Workstations.

>[!info] ECC-Funktionen
>- **1-Bit Fehler**: Erkennung UND Korrektur automatisch
>- **2-Bit Fehler**: Nur Erkennung, System-Benachrichtigung
>- **Mehr-Bit Fehler**: System-Crash zur Datensicherheit

>[!important] Systemanforderungen
>ECC-Speicher benötigt Unterstützung von:
>- **[[02 - RESOURCES/Notes/Mainboard\|Mainboard]]** - spezielle ECC-Unterstützung
>- **[[Chipsatz\|Chipsatz]]** - ECC-Controller integriert
>- **[[02 - RESOURCES/Notes/BIOS\|BIOS]]/[[02 - RESOURCES/Notes/UEFI\|UEFI]]** - ECC-Einstellungen verfügbar

>[!example] Anwendungsgebiete
>- **[[02 - RESOURCES/Notes/Server\|Server]]**: Datenbank, Web-Server
>- **Workstations**: CAD, Wissenschaft
>- **Embedded Systems**: Medizintechnik, Flugzeug
>- **Nicht für**: Gaming-PCs, Office-Rechner

>[!note] 
>Häufig kombiniert mit [[RDIMM\|RDIMM]] oder [[FB-DIMM\|FB-DIMM]] für professionelle Anwendungen.

---