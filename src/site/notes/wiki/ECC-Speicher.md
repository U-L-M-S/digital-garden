---
{"dg-publish":true,"permalink":"/wiki/ecc-speicher/","tags":["hardware/speicher","informatik/sicherheit/datenintegrität","server/hardware"],"noteIcon":"","updated":"2026-07-02T15:37:49.000+02:00","dg-note-properties":{"tags":["hardware/speicher","informatik/sicherheit/datenintegrität","server/hardware"],"aliases":["Error Correcting Code","Fehlerkorrigierender Speicher"],"links":null,"created_date":"2024-12-19"}}
---


> [[wiki/RAM\|RAM]] mit Fehlererkennung und Fehlerkorrektur für höchste Datensicherheit in kritischen Systemen.

>> Kann 1-Bit Fehler korrigieren und 2-Bit Fehler erkennen - wichtig für [[wiki/Server\|Server]] und Workstations.

>[!info] ECC-Funktionen
>- **1-Bit Fehler**: Erkennung UND Korrektur automatisch
>- **2-Bit Fehler**: Nur Erkennung, System-Benachrichtigung
>- **Mehr-Bit Fehler**: System-Crash zur Datensicherheit

>[!important] Systemanforderungen
>ECC-Speicher benötigt Unterstützung von:
>- **[[wiki/Mainboard\|Mainboard]]** - spezielle ECC-Unterstützung
>- **[[Chipsatz\|Chipsatz]]** - ECC-Controller integriert
>- **[[wiki/BIOS\|BIOS]]/[[wiki/UEFI\|UEFI]]** - ECC-Einstellungen verfügbar

>[!example] Anwendungsgebiete
>- **[[wiki/Server\|Server]]**: Datenbank, Web-Server
>- **Workstations**: CAD, Wissenschaft
>- **Embedded Systems**: Medizintechnik, Flugzeug
>- **Nicht für**: Gaming-PCs, Office-Rechner

>[!note] 
>Häufig kombiniert mit [[RDIMM\|RDIMM]] oder [[FB-DIMM\|FB-DIMM]] für professionelle Anwendungen.

---