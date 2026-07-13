---
{"dg-publish":true,"permalink":"/wiki/server-virtualisierung/","tags":["informatik/virtualisierung","GFN/LF10/FISI"],"noteIcon":"","updated":"2026-05-13T08:41:47.691+02:00","dg-note-properties":{"aliases":["server - virtualisierung"],"created_date":"2025-07-18","links":null,"tags":["informatik/virtualisierung","GFN/LF10/FISI"]}}
---

>Jetzt, da du [[wiki/Server - Grundlagen\|Server - Grundlagen]] gelernt hast, lass uns auf [[wiki/Virtualisierung\|Virtualisierung]] fokussieren.

# Was ist [[wiki/Virtualisierung\|Virtualisierung]] ?

> > **Virtualisierung:** <mark style="background: #BBFABBA6;">Nachbildung eines Hardware- oder Softwareobjekts durch ein ähnliches Objekt vom selben Typ.</mark>

Stell dir mal vor: Du hast ein kleines [[wiki/Unternehmen\|Unternehmen]] und nur einen einzigen [[wiki/Tower-Server\|Tower-Server]].  
Jetzt brauchst du aber drei [[wiki/Server\|Server]]: einen für die Datenbank, einen für den Kundendienst und einen für die Tests der Devs.  
Was machst du? Kaufst du dir zwei weitere [[wiki/Tower-Server\|Tower-Server]]? Das kostet natürlich Geld – und davon hast du nicht viel zur Verfügung.

💡 Du kannst einfach den Server, den du bereits hast, in drei virtuelle [[wiki/Server\|Server]] aufteilen – und alles virtualisieren. 😊

## [[wiki/Virtualisierung\|Virtualisierung]] / [[wiki/Emulation\|Emulation]] / [[wiki/Simulation\|Simulation]]

> 🔄 **Unterschied zu [[wiki/Virtualisierung\|Virtualisierung]] ,  [[wiki/Emulation\|Emulation]] und [[wiki/Simulation\|Simulation]]**

| [[wiki/Virtualisierung\|Virtualisierung]]             | [[wiki/Emulation\|Emulation]]                | [[wiki/Simulation\|Simulation]]                      |
| ------------------------------- | ---------------------------- | ----------------------------------- |
| Echte Ausführung auf echter CPU | Nachbildung fremder Hardware | Nachbildung des **Verhaltens**      |
| Sehr schnell (nativ)            | Langsam (wegen Übersetzung)  | Geschwindigkeit variabel            |
| Beispiel: VMware, KVM           | Beispiel: QEMU, Yuzu         | Beispiel: GNS3, Flugsimulator, NS-3 |

# Gründe für [[wiki/Virtualisierung\|Virtualisierung]]

## ✅ Vorteile:

- **💰 Kosten und Energieeinsparung:** Hardware wird besser ausgenutzt
- **📈 Einfache Skalierung:** Ressourcen lassen sich je nach Anforderung verteilen
- **📸 Snapshots:** VMs können eingefroren werden → Änderungen einfach rückgängig machen
- **🔄 Einfaches Klonen:** Neue VMs sehr schnell bereitstellen
- **🔒 Isolierung:** Programme stören sich nicht gegenseitig

## ❌ Nachteile:

- **⚠️ Single Point of Failure:** Fällt Host-System aus → alle VMs betroffen
- **🔄 Ressourcen teilen:** Verbraucht eine VM viel → beeinflusst andere VMs

# Arten der [[wiki/Virtualisierung\|Virtualisierung]]

## [[Hardware-Virtualisierung\|Hardware-Virtualisierung]]

> **[[Hypervisor\|Hypervisor]]:** Software, die virtuelle Maschinen verwaltet

### [[Hypervisor\|Hypervisor]] Type 1: Bare Metal

- Läuft direkt auf Hardware
- **Beispiel:** VMware ESXi, Microsoft Hyper-V

### [[Hypervisor\|Hypervisor]] Type 2: Hosted

- Läuft auf einem Betriebssystem
- **Beispiel:** VMware Workstation, VirtualBox

### Voll-[[wiki/Virtualisierung\|Virtualisierung]]

- Komplette Hardware wird vorgetäuscht
- Gast-OS weiß nichts von [[wiki/Virtualisierung\|Virtualisierung]]
- ✅ Jedes OS kann virtualisiert werden
- ❌ Hoher Ressourcenverbrauch

### Para-[[wiki/Virtualisierung\|Virtualisierung]]

- Gast-OS kommuniziert direkt mit [[Hypervisor\|Hypervisor]] über API
- ✅ Bessere Performance
- ❌ Nur modifizierte Gastsysteme möglich

## [[Software-Virtualisierung\|Software-Virtualisierung]]

> **Application [[wiki/Virtualisierung\|Virtualisierung]]:** Apps laufen isoliert ohne Installation

- ✅ Zentrale Bereitstellung und Verwaltung
- ✅ Schutz vor Schadcode
- ✅ Keine Rückstände auf System
- ❌ Nicht alle Apps virtualisierbar
- **Beispiel:** [[wiki/JVM\|JVM]], .NET Framework

## [[Desktop-Virtualisierung\|Desktop-Virtualisierung]] (VDI)

> **Virtual Desktop Infrastructure:** Arbeitsplätze in virtueller Umgebung

- Zugriff von überall im Netzwerk
- Nur Thin-/Zero-Clients nötig
- ✅ Zentrale Administration
- ✅ Günstige Endgeräte
- ❌ Konstante Netzwerkverbindung erforderlich
- **Anbieter:** Microsoft, VMware, Citrix

## [[Container-Virtualisierung\|Container-Virtualisierung]]

> **[[Container\|Container]]:** Teilen sich OS-Kernel, isolierte Laufzeitumgebungen

- Virtualisierung auf OS-Ebene
- ✅ Minimaler Leistungsverlust
- ✅ Sehr portabel (nur Host-OS benötigt)
- ✅ Geringer Installationsaufwand (100 MB möglich)
- **Beispiel:** [[wiki/Docker\|Docker]], Kubernetes

|Art|Isolation|Performance|Beispiel|
|---|---|---|---|
|[[Hardware-Virtualisierung\|Hardware-Virtualisierung]]|Komplett|Mittel|VMware|
|[[Container-Virtualisierung\|Container-Virtualisierung]]|Prozess|Hoch|[[wiki/Docker\|Docker]]|
|[[Software-Virtualisierung\|Software-Virtualisierung]]|App|Hoch|[[wiki/JVM\|JVM]]|
|[[Desktop-Virtualisierung\|Desktop-Virtualisierung]]|Desktop|Mittel|VDI|