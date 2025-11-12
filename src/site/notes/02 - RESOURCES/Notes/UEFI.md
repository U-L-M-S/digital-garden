---
{"dg-publish":true,"permalink":"/02-resources/notes/uefi/","tags":["hardware/firmware","software/system"],"noteIcon":"","updated":"2025-10-29T12:59:10.000+01:00"}
---


> Moderner Nachfolger des [[02 - RESOURCES/Notes/BIOS\|BIOS]] mit erweiterten Funktionen und grafischer Benutzeroberfläche.

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
>- **UEFI-Mode** - moderne [[02 - RESOURCES/Notes/Betriebssystem\|Betriebssystem]]e
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