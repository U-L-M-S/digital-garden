---
{"dg-publish":true,"permalink":"/02-resources/notes/dateiverwaltung/","tags":["software/betriebssystem","informatik/dateisystem"],"noteIcon":"","updated":"2025-09-16T23:41:26.740+02:00"}
---


> [[02 - RESOURCES/Notes/Betriebssystem\|Betriebssystem]]-Komponente für Organisation, Speicherung und Zugriff auf Dateien und Ordner.

>> Stellt Funktionen für Erstellen, Kopieren, Verschieben, Löschen und Suchen von Dateien bereit.

>[!info] Grundfunktionen
>**Datei-Operationen:**
>- **Erstellen** - neue Datei anlegen
>- **Lesen/Schreiben** - Dateiinhalt bearbeiten
>- **Kopieren/Verschieben** - Dateien duplizieren/verlagern
>- **Löschen** - Dateien entfernen
>- **Suchen** - Dateien finden
>- **Metadaten ändern** - Rechte, Attribute setzen

>[!info] Dateisystem-Typen
>**Windows:**
>- **NTFS** - Modern, Berechtigungen, große Dateien
>- **FAT32** - Kompatibel, aber limitiert auf 4GB
>- **exFAT** - Für USB-Sticks und SD-Karten
>
>**Linux:**
>- **ext4** - Standard Linux-Dateisystem
>- **Btrfs** - Modern mit Snapshots
>- **ZFS** - Enterprise mit Fehlerkorrektur

>[!example] Datei-Hierarchie
>```
>C:\ (Windows)           / (Linux)
>├─ Program Files        ├─ bin (Programme)
>├─ Users                ├─ home (Benutzer)
>├─ Windows              ├─ etc (Konfiguration)
>└─ Temp                 └─ var (Variable Daten)
>```

>[!tip] Dateisystem-Features
>- **Journaling** - verhindert Datenverlust bei Absturz
>- **Kompression** - spart Speicherplatz
>- **Verschlüsselung** - schützt sensible Daten

---