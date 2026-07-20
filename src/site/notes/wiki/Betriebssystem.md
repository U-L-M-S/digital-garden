---
{"dg-publish":true,"permalink":"/wiki/betriebssystem/","tags":["ausbildung/pruefung","informatik/system"],"noteIcon":"","updated":"2026-07-19T03:56:26.000+02:00","dg-note-properties":{"tags":["ausbildung/pruefung","informatik/system"],"aliases":["OS","Operating System","System-Software"],"links":null,"created_date":"2024-12-19"}}
---


> Der Chef im Computer - verwaltet Hardware, koordiniert Programme und stellt dem Benutzer eine bedienbare Oberfläche bereit.

>> Sammlung von Programmen, die es ermöglichen, den Rechner zu betreiben und Anwendungen darauf auszuführen.

>[!info] Hauptaufgaben
>**Verwaltung von:**
>- **[[wiki/Speicherverwaltung\|Speicherverwaltung]]** - RAM-Verteilung an Programme
>- **[[wiki/Prozessverwaltung\|Prozessverwaltung]]** - Programme starten/stoppen
>- **[[wiki/Dateiverwaltung\|Dateiverwaltung]]** - Ordner- und Datei-Organisation
>- **[[wiki/Geräteverwaltung\|Geräteverwaltung]]** - Hardware-Kommunikation
>- **[[Rechteverwaltung\|Rechteverwaltung]]** - Benutzer und Berechtigungen

>[!info] OS-Klassifizierung
>**Nach Betriebsart:**
>- **Batch** - Stapelverarbeitung
>- **Dialog** - Interaktive Bedienung
>- **Realzeit** - Zeitkritische Systeme
>
>**Nach Benutzern:**
>- **Einbenutzer** - Ein Nutzer (MS-DOS)
>- **Mehrbenutzer** - Mehrere Nutzer (Linux, Windows Server)

>[!example] Bekannte Betriebssysteme
>```
>Desktop:    Windows 10/11, macOS, Linux
>Server:     Windows Server, Linux, Unix
>Mobil:      Android, iOS
>Embedded:   FreeRTOS, Windows IoT
>```

>[!important] Abstraktion
>Das [[wiki/Betriebssystem\|Betriebssystem]] versteckt die komplexe Hardware hinter einfachen Befehlen - Programme müssen nicht wissen, wie eine Festplatte funktioniert.

>[!tip] 
>Moderne OS sind meist **multitasking** (mehrere Programme gleichzeitig) und **multiuser** (mehrere Benutzer).

---

# Kernel-Typen

Der [[Kernel\|Kernel]] (Systemkern) ist der absolut notwendige Teil des BS — der Prozess mit **direktem Hardwarezugriff**. Es gibt verschiedene Philosophien:

| Typ | Umfang | Beispiel | Vorteile / Nachteile |
| :--- | :--- | :--- | :--- |
| **[[Mikrokernel\|Mikrokernel]]** | nur Hardwarezugriff + Basis-Prozess-/Speicherverwaltung, Rest in anderen Prozessen | — | ✅ modular, fault-tolerant (Fehler isoliert) / ❌ mehr Kontext-Wechsel |
| **[[Monolithischer Kernel\|Monolithischer Kernel]]** | voller Umfang (Prozess, Speicher, Datei, Device alles im Kernel) | **Linux**, **UNIX** | ✅ schnell (weniger Aufrufe) / ❌ großer, fehleranfällig |
| **[[Hybridkernel\|Hybridkernel]]** | Mischung (Kernel-Kern klein, aber mehr Treiber/Services direkt) | **Windows**, **macOS** | ✅ Kompromiss (Performance + Stabilität) |

---

# Boot-Sequenz (POST, Bootloader, Kernel)

Das **Booten** (Bootstrapping) ist das Henne-Ei-Problem: Um das BS zu laden, bräuchte man schon ein BS! Gelöst durch [[Firmware\|Firmware]] und einen **[[Bootloader\|Bootloader]]**:

1. **Power On Self Test (POST):** Firmware testet Basis-Hardware (RAM, CPU, Speicher).
2. **Bootloader suchen:** Firmware liest die **Partitionstabelle** ([[MBR\|MBR]] / [[GPT\|GPT]]) → findet aktive Partition.
3. **Bootloader laden:** Bootloader (z.B. **GRUB** unter Linux, **Bootmgr** unter Windows) liest die Boot-Konfiguration.
4. **Kernel laden:** Bootloader lädt den [[Kernel\|Kernel]] in den RAM und springt zum Entry Point.
5. **Kernel lädt BS:** Der Kernel initialisiert die Hardware, startet System-Dämonen, gibt Kontrolle an die Shell / GUI.

| Phase | Wer macht's | Hardware-Zugriff |
| :--- | :--- | :--- |
| POST | Firmware (im ROM) | direkt |
| Bootloader | Firmware → Bootloader | direkt (noch im 16-Bit/32-Bit-Modus) |
| Kernel | Bootloader → Kernel | direkt (Kernel schaltet auf 64-Bit um, aktiviert virtuelle Speicheradressierung) |
| BS/Apps | Kernel | über **Systemaufrufe** ([[System-Call\|System-Call]]) |

---

# Systemaufrufe (System Calls)

Programme können die Hardware nicht direkt steuern (wäre unsicher/chaotisch). Sie müssen über den **Kernel** gehen:

```
Anwendungsprogramm (User-Mode)
        │ printf("Hallo")
        ↓ (Systemaufruf: write)
    Kernel (Kernel-Mode) — hat Hardwarezugriff
        │ schreibt zum Monitor
        ↓
    Bildschirm
```

**Ablauf:**
1. Programm ruft eine **Bibliotheksfunktion** auf (z.B. `write()` in C).
2. Diese setzt die Register mit Parametern & Systemaufruf-Nummer.
3. **Interrupt auslösen** (z.B. `int 0x80` in x86 / `syscall` in x86-64).
4. CPU springt in Kernel (Kernel-Mode).
5. Kernel prüft Berechtigung & führt aus.
6. Kernel springt zurück zu Programm (User-Mode).

→ Das BS kontrolliert damit, dass Programme sich nicht gegenseitig / die Hardware zerstören.