---
{"dg-publish":true,"permalink":"/02-resources/notes/server-virtualisierung/","tags":["informatik/virtualisierung","GFN/LF10/FISI"],"noteIcon":"","updated":"2025-10-29T12:59:10.072+01:00"}
---

>Jetzt dass du [[02 - RESOURCES/Notes/Server - Grundlagen\|Server - Grundlagen]] gelernt hast. lass uns auf [[02 - RESOURCES/Notes/Virtualisierung\|Virtualisierung]] fokusieren.

# Was ist [[02 - RESOURCES/Notes/Virtualisierung\|Virtualisierung]] ?

> > **Virtualisierung:** <mark style="background: #BBFABBA6;">Nachbildung eines Hardware- oder Softwareobjekts durch ein ähnliches Objekt vom selben Typ.</mark>

Stell dir mal vor: Du hast ein kleines [[02 - RESOURCES/Notes/Unternehmen\|Unternehmen]] und nur einen einzigen [[02 - RESOURCES/Notes/Tower-Server\|Tower-Server]].  
Jetzt brauchst du aber drei [[02 - RESOURCES/Notes/Server\|Server]]: einen für die Datenbank, einen für den Kundendienst und einen für die Tests der Devs.  
Was machst du? Kaufst du dir zwei weitere [[02 - RESOURCES/Notes/Tower-Server\|Tower-Server]]? Das kostet natürlich Geld – und davon hast du nicht viel zur Verfügung.

💡 Du kannst einfach den Server, den du bereits hast, in drei virtuelle [[02 - RESOURCES/Notes/Server\|Server]] aufteilen – und alles virtualisieren. 😊

## [[02 - RESOURCES/Notes/Virtualisierung\|Virtualisierung]] / [[02 - RESOURCES/Notes/Emulation\|Emulation]] / [[02 - RESOURCES/Notes/Simulation\|Simulation]]

> 🔄 **Unterschied zu [[02 - RESOURCES/Notes/Virtualisierung\|Virtualisierung]] ,  [[02 - RESOURCES/Notes/Emulation\|Emulation]] und [[02 - RESOURCES/Notes/Simulation\|Simulation]]**

| [[02 - RESOURCES/Notes/Virtualisierung\|Virtualisierung]]             | [[02 - RESOURCES/Notes/Emulation\|Emulation]]                | [[02 - RESOURCES/Notes/Simulation\|Simulation]]                      |
| ------------------------------- | ---------------------------- | ----------------------------------- |
| Echte Ausführung auf echter CPU | Nachbildung fremder Hardware | Nachbildung des **Verhaltens**      |
| Sehr schnell (nativ)            | Langsam (wegen Übersetzung)  | Geschwindigkeit variabel            |
| Beispiel: VMware, KVM           | Beispiel: QEMU, Yuzu         | Beispiel: GNS3, Flugsimulator, NS-3 |

# Gründe für [[02 - RESOURCES/Notes/Virtualisierung\|Virtualisierung]]

## ✅ Vorteile:

- **💰 Kosten und Energieeinsparung:** Hardware wird besser ausgenutzt
- **📈 Einfache Skalierung:** Ressourcen lassen sich je nach Anforderung verteilen
- **📸 Snapshots:** VMs können eingefroren werden → Änderungen einfach rückgängig machen
- **🔄 Einfaches Klonen:** Neue VMs sehr schnell bereitstellen
- **🔒 Isolierung:** Programme stören sich nicht gegenseitig

## ❌ Nachteile:

- **⚠️ Single Point of Failure:** Fällt Host-System aus → alle VMs betroffen
- **🔄 Ressourcen teilen:** Verbraucht eine VM viel → beeinflusst andere VMs

# Arten der [[02 - RESOURCES/Notes/Virtualisierung\|Virtualisierung]]

## [[Hardware-Virtualisierung\|Hardware-Virtualisierung]]

> **[[Hypervisor\|Hypervisor]]:** Software, die virtuelle Maschinen verwaltet

### [[Hypervisor\|Hypervisor]] Type 1: Bare Metal

- Läuft direkt auf Hardware
- **Beispiel:** VMware ESXi, Microsoft Hyper-V

### [[Hypervisor\|Hypervisor]] Type 2: Hosted

- Läuft auf einem Betriebssystem
- **Beispiel:** VMware Workstation, VirtualBox

### Voll-[[02 - RESOURCES/Notes/Virtualisierung\|Virtualisierung]]

- Komplette Hardware wird vorgetäuscht
- Gast-OS weiß nichts von [[02 - RESOURCES/Notes/Virtualisierung\|Virtualisierung]]
- ✅ Jedes OS kann virtualisiert werden
- ❌ Hoher Ressourcenverbrauch

### Para-[[02 - RESOURCES/Notes/Virtualisierung\|Virtualisierung]]

- Gast-OS kommuniziert direkt mit [[Hypervisor\|Hypervisor]] über API
- ✅ Bessere Performance
- ❌ Nur modifizierte Gastsysteme möglich

## [[Software-Virtualisierung\|Software-Virtualisierung]]

> **Application [[02 - RESOURCES/Notes/Virtualisierung\|Virtualisierung]]:** Apps laufen isoliert ohne Installation

- ✅ Zentrale Bereitstellung und Verwaltung
- ✅ Schutz vor Schadcode
- ✅ Keine Rückstände auf System
- ❌ Nicht alle Apps virtualisierbar
- **Beispiel:** [[02 - RESOURCES/Notes/JVM\|JVM]], .NET Framework

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
- **Beispiel:** [[02 - RESOURCES/Notes/Docker\|Docker]], Kubernetes

|Art|Isolation|Performance|Beispiel|
|---|---|---|---|
|[[Hardware-Virtualisierung\|Hardware-Virtualisierung]]|Komplett|Mittel|VMware|
|[[Container-Virtualisierung\|Container-Virtualisierung]]|Prozess|Hoch|[[02 - RESOURCES/Notes/Docker\|Docker]]|
|[[Software-Virtualisierung\|Software-Virtualisierung]]|App|Hoch|[[02 - RESOURCES/Notes/JVM\|JVM]]|
|[[Desktop-Virtualisierung\|Desktop-Virtualisierung]]|Desktop|Mittel|VDI|