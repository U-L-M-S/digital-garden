---
{"dg-publish":true,"permalink":"/02-resources/notes/bios/","tags":["hardware/firmware","software/system","GFN/prüfungsrelevant/AP1/vorbereitung"],"noteIcon":"","updated":"2025-09-16T10:51:03.034+02:00"}
---


> Grundlegende Firmware auf dem [[02 - RESOURCES/Notes/Mainboard\|Mainboard]]-Chip - das erste Programm beim Computer-Start.

>> Initialisiert Hardware, führt Selbsttests durch und startet das [[02 - RESOURCES/Notes/Betriebssystem\|Betriebssystem]].

>[!info] BIOS-Funktionen
>**Beim Start:**
>- **[[POST\|POST]]** - Power On Self Test durchführen
>- **Hardware initialisieren** - Grundkonfiguration
>- **Boot-Reihenfolge** - welches Gerät zuerst
>- **[[02 - RESOURCES/Notes/Betriebssystem\|Betriebssystem]] laden** - vom Boot-Device

>[!info] BIOS-Einstellungen
>**Konfiguration:**
>- **Hardware-Parameter** - CPU-Takt, RAM-Timing
>- **Boot-Optionen** - Reihenfolge der Laufwerke
>- **Sicherheit** - BIOS-Passwort setzen
>- **Power-Management** - Energiespar-Modi

>[!info] CMOS-RAM
>**Einstellungs-Speicher:**
>- **Batterie-gepuffert** - Einstellungen bleiben erhalten
>- **Datum/Uhrzeit** - System-Zeit auch bei Stromausfall
>- **Hardware-Konfiguration** - erkannte Geräte

>[!example] BIOS-Zugriff
>```
>Beim Einschalten drücken:
>- F2, F10, F12 oder DEL
>- Je nach Hersteller verschieden
>- Kurzzeitig beim Start angezeigt
>```

>[!caution] BIOS-Update
>- **Riskant** - falsches Update kann Mainboard "bricken"
>- **Nur wenn nötig** - für CPU-Kompatibilität oder Bugfixes
>- **Stabile Stromversorgung** - USV empfohlen

>[!tip] 
>Moderne Computer verwenden [[02 - RESOURCES/Notes/UEFI\|UEFI]] statt traditionelles BIOS - mehr Features und grafische Oberfläche.

---