---
{"dg-publish":true,"permalink":"/wiki/uefi/","tags":["informatik/hardware","informatik/system"],"noteIcon":"","updated":"2026-07-19T03:56:26.601+02:00","dg-note-properties":{"tags":["informatik/hardware","informatik/system"],"aliases":["Unified Extensible Firmware Interface","Moderne Firmware"],"links":null,"created_date":"2024-12-19"}}
---


> Moderner Nachfolger des [[wiki/BIOS\|BIOS]] mit erweiterten Funktionen und grafischer Benutzeroberfläche.

>> Unterstützt größere Festplatten, schnelleren Boot und bessere Sicherheitsfeatures.

>[!info] UEFI vs BIOS
>**UEFI-Vorteile:**
>- **Grafische Oberfläche** - Maus-Bedienung möglich
>- **Größere Festplatten** - über 2TB mit GPT
>- **Schnellerer Boot** - Fast Boot Modi
>- **Netzwerk-Support** - Updates über Internet
>- **Secure Boot** - Schutz vor Malware

>[!info] Boot-Modi
>**UEFI kann:**
>- **UEFI-Mode** - moderne [[wiki/Betriebssystem\|Betriebssystem]]e
>- **Legacy/CSM** - alte BIOS-Kompatibilität
>- **Secure Boot** - nur signierte OS erlaubt

>[!info] Partitionierung
>**GPT statt MBR:**
>- **Unlimited Partitions** - nicht auf 4 beschränkt
>- **Große Festplatten** - über 2TB möglich
>- **Backup-Tabelle** - bessere Ausfallsicherheit

>[!example] UEFI-Features
>```
>Boot-Manager:    Mehrere OS auswählen
>Hardware-Info:   Temperaturen, Lüfter-Drehzahl
>Overclocking:    CPU/RAM übertakten
>Diagnose:        Hardware-Tests
>Updates:         Firmware über Netzwerk
>```

>[!success] Sicherheit
>**Secure Boot:**
>- Nur signierte Bootloader erlaubt
>- Schutz vor Root-Kits und Boot-Malware
>- Windows und Linux unterstützt

>[!tip] 
>UEFI-Einstellungen sind meist intuitiver als alte BIOS-Menüs und unterstützen verschiedene Sprachen.

---