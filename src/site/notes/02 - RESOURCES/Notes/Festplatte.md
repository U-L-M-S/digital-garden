---
{"dg-publish":true,"permalink":"/02-resources/notes/festplatte/","tags":["hardware/speicher","informatik/hardware","ausbildung/gfn/ap1/vorbereitung"],"noteIcon":"","updated":"2025-11-07T15:14:39.528+01:00"}
---

>Eine **Festplatte** (Hard Disk Drive, HDD) ist ein magnetisches [[02 - RESOURCES/Notes/Speicher\|Speicher]]medium zur dauerhaften Speicherung von Daten.
>>Festplatten speichern Daten auf rotierenden Magnetscheiben und verwenden Schreib-/Leseköpfe zum Zugriff.

>[!important] Hauptmerkmale
>- **Nicht-flüchtig** - Daten bleiben ohne Strom erhalten
>- **Große Kapazität** - Bis zu 20 TB und mehr
>- **Mechanisch** - Bewegliche Teile (im Gegensatz zu SSDs)
>- **Günstig** - Niedriger Preis pro GB

---

# Funktionsweise einer HDD

## Aufbau

```
┌──────────────────────────────────┐
│  Schreib-/Lesekopf               │
│         │                        │
│         ▼                        │
│    ═════════════                 │  ← Magnetscheibe (Platter)
│    ═════════════                 │     rotiert mit 5400-15000 RPM
│         │                        │
│    ┌────▼────┐                   │
│    │ Spindel │                   │
│    └─────────┘                   │
└──────────────────────────────────┘
```

**Komponenten:**
- **Magnetscheiben (Platters)** - Speichern die Daten
- **Schreib-/Leseköpfe** - Lesen/Schreiben Daten magnetisch
- **Spindel** - Motor dreht die Scheiben
- **Arm** - Bewegt die Köpfe über die Scheibe
- **Controller** - Steuert Zugriffe

## Datenorganisation

**Spuren (Tracks):**
>Konzentrische Kreise auf der Scheibe

**Sektoren:**
>Kleinste adressierbare Einheit (meist 512 Bytes oder 4 KB)

**Zylinder:**
>Alle Spuren auf gleicher Position über alle Platten

```
        Spur 0
     ┌──────────┐
    Spur 1      │
   ┌──────────┐ │
  Spur 2      │ │
 ┌──────────┐ │ │
 │  Sektor  │ │ │
 │          │ │ │
 └──────────┘ │ │
  └──────────┘ │
   └──────────┘
```

---

# Technische Spezifikationen

## Drehgeschwindigkeit (RPM)

>**RPM** = Rotations Per Minute (Umdrehungen pro Minute)

| RPM | Verwendung | Geschwindigkeit |
|-----|------------|-----------------|
| 5400 RPM | Notebooks, Externe HDDs | Langsam, stromsparend |
| 7200 RPM | Desktop-PCs, Server | Standard |
| 10000 RPM | Server | Schnell |
| 15000 RPM | Enterprise-Server | Sehr schnell |

>[!tip] Faustregel
>Höhere RPM = Schneller, aber auch lauter und mehr Stromverbrauch

## Zugriffszeit

>Zeit, bis der Lesekopf an die richtige Position gelangt.

- **Suchzeit (Seek Time)** - Kopf bewegt sich zur richtigen Spur
- **Rotationslatenz** - Warten bis richtiger Sektor vorbeikommt
- **Übertragungszeit** - Daten lesen/schreiben

**Typisch:**
- HDD: 8-15 ms
- SSD: 0,1 ms (100x schneller!)

## Übertragungsrate

>Wie schnell können Daten gelesen/geschrieben werden?

**Typische Werte:**
- HDD 5400 RPM: ~100 MB/s
- HDD 7200 RPM: ~150 MB/s
- SSD SATA: ~550 MB/s
- NVMe SSD: ~3500 MB/s

---

# Schnittstellen

## SATA (Serial ATA)

>**Standard-Schnittstelle** für Festplatten und SSDs.

| Version | Geschwindigkeit | Verwendung |
|---------|-----------------|------------|
| SATA I | 1,5 Gbit/s (~150 MB/s) | Veraltet |
| SATA II | 3 Gbit/s (~300 MB/s) | Veraltet |
| SATA III | 6 Gbit/s (~600 MB/s) | Standard heute |

**Kabel:**
- Daten: 7-poliges SATA-Kabel
- Strom: 15-poliger SATA-Strom

## IDE/PATA (veraltet)

>**Parallel ATA** - alte Schnittstelle mit breiten Flachbandkabeln.

**Erkennungsmerkmale:**
- Breites, flaches Kabel (40 oder 80 Adern)
- Master/Slave-Konfiguration über Jumper

## NVMe (NVM Express)

>Moderne Schnittstelle für **SSDs** über **PCIe**.

**Vorteile:**
- Bis zu 7000 MB/s (SATA: max. 600 MB/s)
- Geringere Latenz
- Direkte Anbindung an CPU

---

# HDD vs. SSD

| Eigenschaft | HDD | SSD |
|-------------|-----|-----|
| **Technologie** | Magnetisch, mechanisch | Elektronisch (Flash-[[02 - RESOURCES/Notes/Speicher\|Speicher]]) |
| **Geschwindigkeit** | 100-200 MB/s | 500-7000 MB/s |
| **Zugriffszeit** | 8-15 ms | 0,1 ms |
| **Geräusche** | Hörbar (Motor, Köpfe) | Lautlos |
| **Stromverbrauch** | Höher | Niedriger |
| **Stoßfestigkeit** | Empfindlich | Robust (keine beweglichen Teile) |
| **Lebensdauer** | Unbegrenzte Schreibzyklen | Begrenzte Schreibzyklen |
| **Preis/GB** | Günstig (~0,02€/GB) | Teurer (~0,08€/GB) |
| **Kapazität** | Bis 20 TB | Bis 8 TB (Consumer) |
| **Verwendung** | Massenspeicher, Archive | Betriebssystem, Programme |

>[!success] Wann HDD verwenden?
>- ✅ Große Datenmengen (Filme, Fotos, Backups)
>- ✅ Archivierung
>- ✅ Budget-Speicher
>- ✅ [[02 - RESOURCES/Notes/NAS\|NAS]]-Systeme

>[!success] Wann SSD verwenden?
>- ✅ Betriebssystem (schneller Boot)
>- ✅ Programme und Spiele
>- ✅ [[02 - RESOURCES/Notes/Datenbank\|Datenbank]]en
>- ✅ Laptops (robust gegen Stöße)
>- ✅ Wenn Geschwindigkeit wichtig ist

---

# RAID-Systeme

>**RAID** = Redundant Array of Independent Disks
>Mehrere Festplatten werden kombiniert für mehr Geschwindigkeit oder Sicherheit.

## RAID 0 - Striping

```
Datei wird aufgeteilt:
┌─────┐  ┌─────┐
│ A B │  │ C D │
│ E F │  │ G H │
└─────┘  └─────┘
Disk 1   Disk 2
```

**Vorteile:**
- ✅ Doppelte Geschwindigkeit
- ✅ Volle Kapazität (2x 1TB = 2TB)

**Nachteile:**
- ❌ KEINE Redundanz - eine Platte kaputt = alle Daten verloren

## RAID 1 - Mirroring

```
Daten gespiegelt:
┌─────┐  ┌─────┐
│ A B │  │ A B │
│ C D │  │ C D │
└─────┘  └─────┘
Disk 1   Disk 2 (Kopie)
```

**Vorteile:**
- ✅ Hohe Ausfallsicherheit
- ✅ Eine Platte kann ausfallen ohne Datenverlust

**Nachteile:**
- ❌ Nur halbe Kapazität (2x 1TB = 1TB nutzbar)

## RAID 5 - Striping mit Parität

>Mindestens 3 Festplatten, Daten + Parität verteilt

**Vorteile:**
- ✅ Gute Performance
- ✅ Eine Platte kann ausfallen
- ✅ Kapazität = (n-1) × Plattengröße

**Nachteile:**
- ❌ Komplexer
- ❌ Rebuild nach Ausfall dauert lange

## RAID 10 (1+0) - Kombination

>Kombination aus RAID 1 und RAID 0
>Mindestens 4 Platten

**Vorteile:**
- ✅ Hohe Geschwindigkeit
- ✅ Hohe Ausfallsicherheit

**Nachteile:**
- ❌ Teuer (4x 1TB = 2TB nutzbar)

---

# Netzwerkspeicher

## [[02 - RESOURCES/Notes/NAS\|NAS]] - Network Attached Storage

>Festplatten im Netzwerk, die wie ein **Dateiserver** funktionieren.

**Verwendung:**
- Datei-Sharing im Heimnetzwerk
- Backup-Speicher
- Medienserver (Plex, etc.)
- Time Machine Backups (Mac)

**Vorteile:**
- ✅ Zentrale Datenspeicherung
- ✅ Von allen Geräten zugreifbar
- ✅ RAID-Unterstützung
- ✅ Einfach einzurichten

**Typische NAS-Systeme:**
- Synology
- QNAP
- Selbstgebaut (FreeNAS/TrueNAS)

## [[02 - RESOURCES/Notes/SAN\|SAN]] - Storage Area Network

>Hochperformantes Speichernetzwerk, das wie eine **lokale Festplatte** funktioniert.

**Unterschied zu [[02 - RESOURCES/Notes/NAS\|NAS]]:**

| [[02 - RESOURCES/Notes/NAS\|NAS]] | [[02 - RESOURCES/Notes/SAN\|SAN]] |
|---------|---------|
| Datei-basiert | Block-basiert |
| Ethernet (1-10 GBit/s) | Fibre Channel (16-128 GBit/s) |
| Wie Netzlaufwerk | Wie lokale Festplatte |
| Einfach | Komplex |
| Günstig | Teuer |
| KMU | Enterprise |

**Verwendung:**
- Virtualisierung (VMware, Hyper-V)
- [[02 - RESOURCES/Notes/Datenbank\|Datenbank]]-Server
- Hochverfügbare Systeme

---

# Festplatten-Gesundheit

## S.M.A.R.T.

>**Self-Monitoring, Analysis and Reporting Technology**
>Überwacht Gesundheit der Festplatte.

**Wichtige Werte:**
- **Reallocated Sectors** - Defekte Sektoren
- **Spin Retry Count** - Probleme beim Anlaufen
- **Temperature** - Temperatur (ideal: 20-45°C)
- **Power-On Hours** - Betriebsstunden
- **Seek Error Rate** - Fehler bei Kopfbewegung

>[!warning] Warnsignale
>- ❌ Klickende Geräusche (Click of Death)
>- ❌ Langsame Performance
>- ❌ Dateien verschwinden
>- ❌ Häufige Fehler beim Lesen/Schreiben
>- ❌ Hohe Temperatur (>50°C)

**Tools:**
- CrystalDiskInfo (Windows)
- smartctl (Linux)
- DriveDx (Mac)

---

# Datenrettung

>[!caution] Bei Festplatten-Defekt
>**SOFORT:**
>1. Festplatte ausschalten
>2. NICHT weiter verwenden
>3. Professionelle Datenrettung kontaktieren
>4. Keine eigenen Rettungsversuche bei mechanischen Defekten

**Kosten:**
- Software-Probleme: 100-500€
- Mechanische Defekte: 500-3000€
- Cleanroom-Rettung: 1000-10000€

**Prevention:**
- ✅ Regelmäßige Backups ([[02 - RESOURCES/Notes/NAS\|NAS]], Cloud)
- ✅ 3-2-1 Regel: 3 Kopien, 2 verschiedene Medien, 1 extern
- ✅ S.M.A.R.T.-Überwachung
- ✅ Festplatten alle 3-5 Jahre austauschen

---

# Best Practices

>[!success] Festplatten richtig nutzen
>- ✅ Regelmäßige Backups
>- ✅ S.M.A.R.T.-Werte überwachen
>- ✅ Festplatten nicht zu voll machen (>80%)
>- ✅ Für Kühlung sorgen
>- ✅ Vor Transport herunterfahren (HDD)
>- ✅ Bei wichtigen Daten: RAID 1 oder RAID 10

>[!warning] Häufige Fehler
>- ❌ Keine Backups
>- ❌ Festplatte zu heiß laufen lassen
>- ❌ Laptop/PC im Betrieb bewegen (HDD)
>- ❌ Festplatte über Jahre hinweg nutzen ohne Austausch
>- ❌ Nur eine Kopie wichtiger Daten

---

# Zukunft: HDD vs. SSD

**Trend:**
- HDDs werden seltener in Consumer-Geräten
- SSDs übernehmen bei PCs/Laptops
- HDDs bleiben für:
  - Massenspeicher
  - Archive
  - [[02 - RESOURCES/Notes/NAS\|NAS]]-Systeme
  - Cloud-Rechenzentren

**Neue Technologien:**
- **HAMR** (Heat-Assisted Magnetic Recording) - Bis 50 TB HDDs
- **QLC NAND** - Günstigere SSDs
- **Optane** - Schneller als SSD, teurer

---

**Siehe auch:**
- [[02 - RESOURCES/Notes/Speicher\|Speicher]]
- [[02 - RESOURCES/Notes/NAS\|NAS]]
- [[02 - RESOURCES/Notes/SAN\|SAN]]
- [[02 - RESOURCES/Notes/Cloud\|Cloud]]
- [[02 - RESOURCES/Notes/Softwarearchitektur\|Softwarearchitektur]]
