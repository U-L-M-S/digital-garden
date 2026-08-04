---
{"dg-publish":true,"permalink":"/wiki/virtualisierung/","tags":["informatik/system"],"noteIcon":"","updated":"2026-07-19T03:56:26.000+02:00","dg-note-properties":{"aliases":null,"created_date":"2025-03-24","links":null,"tags":["informatik/system"]}}
---

> Erstellen einer **virtuellen Umgebung** (z.B. virtuelle Maschinen) auf echter Hardware. Mehrere virtuelle Systeme können parallel auf einem physischen Rechner laufen.

> [!note] Was kann virtualisiert werden?
> 
> - **Server** (z.B. Webserver, Datenbankserver)
> - **Netzwerke** (z.B. [[wiki/VLAN\|VLAN]], virtuelle Switches)
> - **Speicher** (z.B. virtueller Speicher, Storage-Pools)
> - **Desktops** (z.B. Remote-Desktop, VDI)

> [!tip] Warum Virtualisierung?
> 
> - **Bessere Auslastung** der Hardware
> - **Kosteneinsparung** (weniger physische Server)
> - **Flexibilität** und **schnelle Bereitstellung** neuer Systeme
> - **Snapshots & Backups** einfacher möglich

---
> 🔄 **Unterschied zu [[wiki/Virtualisierung\|Virtualisierung]] und [[wiki/Emulation\|Emulation]]**
> 
> > Simulation stellt **Verhalten** nach – keine echte Ausführung oder Hardware-Umgebung.

| [[wiki/Virtualisierung\|Virtualisierung]]             | [[wiki/Emulation\|Emulation]]                | [[wiki/Simulation\|Simulation]]                      |
| ------------------------------- | ---------------------------- | ----------------------------------- |
| Echte Ausführung auf echter CPU | Nachbildung fremder Hardware | Nachbildung des **Verhaltens**      |
| Sehr schnell (nativ)            | Langsam (wegen Übersetzung)  | Geschwindigkeit variabel            |
| Beispiel: VMware, KVM           | Beispiel: QEMU, Yuzu         | Beispiel: GNS3, Flugsimulator, NS-3 |


---

> [!note] Arten der Virtualisierung:
> 
> - **Bare-Metal (Typ 1 Hypervisor)**  
>     Virtualisierung läuft direkt auf der Hardware (z.B. VMware ESXi).
>     
> - **Hosted (Typ 2 Hypervisor)**  
>     Virtualisierung läuft auf einem bestehenden [[wiki/Betriebssystem\|Betriebssystem]] (z.B. VirtualBox, VMware Workstation).
>     
> - **Desktopvirtualisierung (VDI)**  
>     Benutzer arbeiten auf einem **virtuellen Desktop**, der zentral im Rechenzentrum läuft (z.B. Citrix, VMware Horizon).
>     
