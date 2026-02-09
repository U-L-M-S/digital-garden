---
{"dg-publish":true,"permalink":"/02-resources/notes/linux-grundlage/","tags":["GFN/LF10/FISI","informatik/betriebssystem/linux/command"],"noteIcon":"","updated":"2025-10-29T12:59:07.000+01:00"}
---

# Linux Grundlagen

> Linux ist ein freies, mehrbenutzerfähiges [[02 - RESOURCES/Notes/Betriebssystem\|Betriebssystem]], das auf [[Unix\|Unix]] basiert und unter der [[GNU GPL\|GNU GPL]] steht.

> > **Warum Linux lernen?** Weil es auf den meisten [[02 - RESOURCES/Notes/Server\|Server]]n läuft und du als IT-ler früher oder später damit konfrontiert wirst. Plus: Es ist kostenlos! 😉

## Was ist Linux?

### Die drei wichtigsten Eigenschaften:

> [!info] Open source
> 
> - Quellcode ist offen zugänglich
> - Jeder kann sein eigenes Linux basteln
> - Community-Entwicklung möglich

> [!info] Mehrbenutzersystem
> 
> - Mehrere User können **gleichzeitig** arbeiten
> - Im Gegensatz zu Windows (zumindest früher)
> - Perfekt für [[02 - RESOURCES/Notes/Server\|Server]]-Umgebungen

> [!info] Kostenlos
> 
> - Keine Lizenzkosten für das OS selbst
> - Support, Handbücher etc. können Geld [[02 - RESOURCES/Notes/Kosten\|kosten]]
> - Ideal für [[02 - RESOURCES/Notes/Unternehmen\|Unternehmen]] = weniger Ausgaben

## [[GNU GPL\|GNU GPL]] - General Public License

> Die GPL sorgt dafür, dass Linux **frei** bleibt.

> [!quote] GNU steht für: "GNU's not Unix"
> 
> - Sammlung von über 380 freien Tools
> - Alternative zu proprietärem Unix
> - Tools sind Unix-ähnlich aber frei von Unix-Code

### Die 4 Freiheiten der GPL:

1. **Nutzen** des Programms
2. **Untersuchen/Studieren** des Codes
3. **Teilen/Weitergeben** des Programms
4. **Ändern** des Programms

> [!important] Copyleft-Prinzip Wenn du das Programm änderst, musst du es unter den **gleichen Bedingungen** weitergeben!

---

## Geschichte von Linux

### Der Weg zu Linux:

**Unix (1970er)** → **BSD (1980er)** → **MINIX (1987)** → **Linux (1991)**

> [!example] Die berühmte erste E-Mail von Linus Torvalds (1991): "Ich arbeite an einem (freien) Betriebssystem (nur ein Hobby, wird nicht groß und professionell sein wie GNU) für 386(486)AT-kompatible Rechner..."
> 
> **Spoiler:** Es wurde doch etwas größer 😄

### Interessante Facts:

> [!tip] Name-Entstehung
> 
> - Ursprünglich sollte es **FREAX** heißen (Freak + Free + Unix)
> - Der Server-Admin fand den Namen doof
> - Nannte den Upload-Bereich einfach "Linux" (Arbeitstitel)
> - So blieb es dabei

> [!info] Maskottchen: Tux der Pinguin Linus wollte einen Pinguin, der aussieht "als hätte er gerade eine Maß Bier genossen und den besten Sex seines Lebens gehabt" 🐧

---

## Die wichtigsten Linux-Distributionen

> Eine **Distribution** = Linux-Kernel + Software-Paket + Paketmanager + [[02 - RESOURCES/Notes/GUI\|GUI]]

### Für Einsteiger:

|Distribution|Eigenschaften|Einsatzgebiet|
|---|---|---|
|**[[Ubuntu\|Ubuntu]]**|Benutzerfreundlich, viel Software|Desktop + Server|
|**[[Linux Mint\|Linux Mint]]**|Sehr Windows-ähnlich|Desktop für Umsteiger|
|**[[openSUSE\|openSUSE]]**|Früher sehr beliebt|Enterprise|

### Für Profis:

|Distribution|Eigenschaften|Einsatzgebiet|
|---|---|---|
|**[[Debian\|Debian]]**|Sehr stabil, Basis für viele andere|Server, Professional|
|**[[Arch Linux\|Arch Linux]]**|Minimalistisch, für Experten|Enthusiasten|
|**[[LFS\|LFS]]** (Linux from Scratch)|Hardcore-Version aus Quellcode|Lernzwecke|

> [!tip] Empfehlung für den Anfang
> 
> - **Desktop:** Linux Mint (Windows-ähnlich)
> - **Server:** Ubuntu Server (gut dokumentiert)
> - **Lernen:** Debian (stabil, weit verbreitet)

> [!warning] Arch Linux Arch ist wie ein Sportwagen - sehr mächtig, aber nur für erfahrene Fahrer. Die Wahrscheinlichkeit einer Ansteckung mit dem "BTW, I use Arch"-Virus liegt bei 95% 😏

---

## Shell & Navigation

> Die **Shell** ist deine Kommandozentrale - hier passiert die echte Linux-Magie!

### Grundlegende Befehle:

```bash
pwd                    # Wo bin ich? (print working directory)
cd /pfad/zum/ziel     # Wechsle Verzeichnis (absolut)
cd ordner             # Wechsle Verzeichnis (relativ)
cd ~                  # Zurück ins Home-Verzeichnis
cd ..                 # Eine Ebene hoch
ls                    # Was ist hier? (list)
su                    # Wechsle User (substitute user)
sudo                  # Führe als root aus
```

> [!tip] Pfade verstehen
> 
> - **Absolut:** `/home/user/dokumente` (beginnt mit /)
> - **Relativ:** `dokumente/projekt` (von aktueller Position)
> - **~** = Home-Verzeichnis
> - **/** = Root (Wurzel des Systems)

### [[Root\|Root]]-User vs. normale User:

> [!danger] Root hat ALLE Rechte!
> 
> - UID: 0 (User-ID Null)
> - Kann **alles** ändern/löschen
> - **Nicht** für normale Arbeit gedacht!
> - Daher: lieber `sudo` verwenden

---

## Linux-Ordnerstruktur (FHS - Filesystem Hierarchy Standard)

> **Alles** in Linux ist eine Datei. Auch Hardware-Geräte!

### Die wichtigsten Verzeichnisse:

|Ordner|Zweck|Inhalt|
|---|---|---|
|**`/`**|Root - die Wurzel|Alles beginnt hier|
|**`/bin`**|Binaries|Programme für alle User (ls, cat, apt)|
|**`/sbin`**|System Binaries|Programme nur für Admins|
|**`/etc`**|Configuration|Alle Konfigurationsdateien|
|**`/home`**|User-Daten|Persönliche Ordner der Benutzer|
|**`/var`**|Variable Daten|Logs, temporäre Dateien|
|**`/usr`**|Unix System Resources|Geteilte Programme & Daten|

### Besondere Ordner:

> [!example] `/dev` - Device Files Hier werden Hardware-Geräte als Dateien dargestellt:
> 
> - `/dev/null` = Mülleimer (alles verschwindet)
> - `/dev/zero` = Unendliche Nullen
> - `/dev/random` = Zufallsdaten
> - `/dev/lp0` = Drucker (einfach Text reinschreiben = drucken!)

> [!info] `/proc` - Process Information
> 
> - Virtuelle Dateien über laufende Prozesse
> - Einblick ins laufende System
> - `/proc/sys` = Systemeinstellungen ändern

> [!tip] `/tmp` - Temporary Files
> 
> - Hier dürfen **alle** User schreiben
> - Wird bei Neustart oft geleert
> - Perfekt für temporäre Dateien

### Mount-Points:

|Ordner|Zweck|
|---|---|
|**`/media`**|USB-Sticks, CDs (permanent)|
|**`/mnt`**|Temporäres Mounten für Admins|

> [!hint] Mounting erklärt In Linux werden Laufwerke nicht als C:, D: angezeigt, sondern in Ordner "eingehängt" (gemountet). Ein USB-Stick erscheint z.B. unter `/media/usb-stick/`

---

## Wichtige Konzepte

### Symbole & Links:

> [!info] Symbolische Links (Symlinks)
> 
> - `/bin` → `/usr/bin` (Verknüpfung)
> - Wie Windows-Verknüpfungen, nur besser
> - Ermöglichen Kompatibilität mit alten Unix-Programmen

### Dateisystem-Philosophie:

> [!quote] "Everything is a file" In Unix/Linux ist **alles** eine Datei:
> 
> - Hardware-Geräte
> - Prozesse
> - [[02 - RESOURCES/Notes/Netzwerk\|Netzwerk]]-Verbindungen
> - Konfiguration

Das macht das System sehr einheitlich und vorhersagbar!

---

## Linux heute

> [!success] Vorteile von Linux
> 
> - **Stabilität** (Server laufen monatelang ohne Neustart)
> - **Sicherheit** (weniger Malware, bessere Rechteverwaltung)
> - **Erweiterbarkeit** (offener Quellcode)
> - **Keine Lizenzkosten**
> - **Performance** (läuft auch auf alter Hardware)

> [!info] Desktop-Komfort
> 
> - GUIs wie [[KDE\|KDE]] und [[GNOME\|GNOME]] bieten Windows-ähnlichen Komfort
> - [[Wine\|Wine]] ermöglicht Windows-Programme
> - Je neuer/komplexer die Software, desto mehr Probleme möglich

> [!tip] Einsatzgebiete
> 
> - **Server:** Dominiert den Markt (Apache, Nginx, Datenbanken)
> - **Embedded Systems:** [[02 - RESOURCES/Notes/Router\|Router]], Smart-TVs, Android
> - **Supercomputer:** Fast alle laufen Linux
> - **Desktop:** Wächst langsam aber stetig

---

## Zusammenfassung

> [!summary] Das Wichtigste auf einen Blick:
> 
> - **Linux** = freies, mehrbenutzerfähiges OS
> - **GPL** sorgt für Freiheit der Software
> - **Distributionen** = Linux + Software-Pakete
> - **Shell** = mächtiges Kommando-Interface
> - **FHS** = strukturierte Ordner-Hierarchie
> - **"Everything is a file"** = Unix-Philosophie

> [!important] Für die Praxis merken:
> 
> - Ubuntu/Mint für Einsteiger
> - Debian für [[02 - RESOURCES/Notes/Server\|Server]]
> - Shell-Befehle: `pwd`, `cd`, `ls`, `sudo`
> - Wichtige Ordner: `/`, `/etc`, `/home`, `/var`

Du kennst jetzt die Grundlagen! Als nächstes solltest du [[Linux Kommandos\|Linux Kommandos]] und [[Linux Benutzerrechte\|Linux Benutzerrechte]] lernen.