---
{"dg-publish":true,"permalink":"/wiki/bios/","tags":["ausbildung/pruefung","informatik/hardware","informatik/system"],"noteIcon":"","updated":"2026-07-19T03:56:26.682+02:00","dg-note-properties":{"tags":["ausbildung/pruefung","informatik/hardware","informatik/system"],"aliases":["Basic Input Output System","Firmware"],"links":null,"created_date":"2024-12-19"}}
---


> Grundlegende Firmware auf dem [[wiki/Mainboard\|Mainboard]]-Chip - das erste Programm beim Computer-Start.

>> Initialisiert Hardware, führt Selbsttests durch und startet das [[wiki/Betriebssystem\|Betriebssystem]].

>[!info] BIOS-Funktionen
>**Beim Start:**
>- **[[POST\|POST]]** - Power On Self Test durchführen
>- **Hardware initialisieren** - Grundkonfiguration
>- **Boot-Reihenfolge** - welches Gerät zuerst
>- **[[wiki/Betriebssystem\|Betriebssystem]] laden** - vom Boot-Device

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
>Moderne Computer verwenden [[wiki/UEFI\|UEFI]] statt traditionelles BIOS - mehr Features und grafische Oberfläche.

---

# UEFI (Unified Extensible Firmware Interface)

Der Nachfolger des alten BIOS — deutlich moderner & mächtiger:

| Merkmal | **BIOS (alt)** | **[[wiki/UEFI\|UEFI]]** (modern) |
| :--- | :--- | :--- |
| Stand | IBM x86, seit 1981 | seit 2005, abgelöst BIOS |
| Partitionstabelle | **[[MBR\|MBR]]** (Master Boot Record) | **[[GPT\|GPT]]** (GUID Partition Table) |
| Max Partitionen | max. 4 primäre (wegen Platzlimit im MBR) | bis zu **128** Partitionen |
| Max Partitionsgröße | **2 TB** (32-Bit Sektornummern) | **64 ZB** (theoretisch unbegrenzt) |
| Oberfläche | reine Textmode (blauer Bildschirm) | Grafische GUI mit Maus möglich |
| Boot-Möglichkeiten | simpel (nur Festplatte oder USB) | Netzwerk-Boot ([[PXE\|PXE]]), [[Secure Boot\|Secure Boot]] (Signaturen prüfen) |
| Compatibility-Mode | — | CSM (Compatibility Support Module) für alte OSs |

## Boot-Sequenz mit UEFI

1. **POST:** Power-On-Self-Test (Hardware-Check).
2. **Secure Boot (optional):** Bootloader-Signatur prüfen (verhindert Rootkits).
3. **GPT lesen:** Partitionstabelle laden.
4. **EFI-Bootloader laden:** (z.B. GRUB, rEFInd) → Kernel laden.

## GPT vs. MBR

**MBR (alt):**
```
Boot-Sektor (512 Bytes)
├─ Bootloader-Code (446 Byte)
└─ Partitionstabelle (64 Byte = 4 Einträge à 16 Byte)
```
→ Hard-Limit: **4 primäre Partitionen** (oder Umweg mit erweiterter Partition).

**GPT (modern):**
```
Protective MBR (Kompatibilität)
├─ GPT-Header (mit Checksumme)
├─ Partitionstabelle (128 Einträge, je 128 Byte)
└─ Backup GPT-Header
```
→ Flexibel, redundant, Fehlertoleranz.

## Secure Boot

UEFI kann **digitale Signaturen** prüfen:

- **Microsoft Key** im Firmware-speicher.
- Bootloader & Kernel müssen mit Microsoft-Key signiert sein.
- ✅ Verhindert Rootkits beim Boot.
- ❌ Macht Linux-Installation schwieriger (Secure-Boot ausschalten nötig oder eigenen Key generieren).

---

# Boot-Ablauf im Detail (POST bis Kernel)

```
Power-On
  ↓
POST (Power-On Self Test)
  ├─ RAM-Test
  ├─ CPU-Check
  └─ Geräteerkennung (Festplatte, USB, Netzwerk)
  ↓
BIOS/UEFI sucht Bootdevice
  ├─ Fest-Reihenfolge: HDD → USB → Netzwerk (konfigurierbar)
  └─ Liest Boot-Sektor / GPT
  ↓
Bootloader laden (z.B. GRUB)
  ├─ Konfiguration lesen (grub.cfg)
  └─ Kernel & Initramfs in RAM laden
  ↓
Kernel starten
  ├─ MMU aktivieren (virtuelle Speicheradressierung)
  ├─ Gerätetreiber laden (Initramfs)
  ├─ Root-Dateisystem mounten
  └─ init/systemd starten
  ↓
System bereit
```

**Total:** Bei moderner Hardware ~5–10 Sekunden (früher mit HDD: 30+ Sekunden).