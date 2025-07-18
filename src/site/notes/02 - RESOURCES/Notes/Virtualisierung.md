---
{"dg-publish":true,"permalink":"/02-resources/notes/virtualisierung/","tags":["informatik/virtualisierung"],"noteIcon":"","updated":"2025-07-18T15:12:25.038+02:00"}
---

> Erstellen einer **virtuellen Umgebung** (z.B. virtuelle Maschinen) auf echter Hardware. Mehrere virtuelle Systeme können parallel auf einem physischen Rechner laufen.

> [!note] Was kann virtualisiert werden?
> 
> - **Server** (z.B. Webserver, Datenbankserver)
> - **Netzwerke** (z.B. VLAN, virtuelle Switches)
> - **Speicher** (z.B. virtueller Speicher, Storage-Pools)
> - **Desktops** (z.B. Remote-Desktop, VDI)

> [!tip] Warum Virtualisierung?
> 
> - **Bessere Auslastung** der Hardware
> - **Kosteneinsparung** (weniger physische Server)
> - **Flexibilität** und **schnelle Bereitstellung** neuer Systeme
> - **Snapshots & Backups** einfacher möglich

---

> 🔄 **Unterschied Virtualisierung vs. Emulation**
> 
> > Beide erzeugen eine virtuelle Umgebung, aber:

|Virtualisierung|Emulation|
|---|---|
|Virtuelle Systeme nutzen die echte CPU|CPU und Hardware werden **nachgebildet**|
|Läuft fast wie ein echtes System (nativ)|Deutlich langsamer, da „alles simuliert“ wird|
|Beispiel: VMware, Hyper-V, KVM|Beispiel: QEMU, Retro-Game-Emulatoren|

---

> [!note] Arten der Virtualisierung:
> 
> - **Bare-Metal (Typ 1 Hypervisor)**  
>     Virtualisierung läuft direkt auf der Hardware (z.B. VMware ESXi).
>     
> - **Hosted (Typ 2 Hypervisor)**  
>     Virtualisierung läuft auf einem bestehenden [[Betriebssystem\|Betriebssystem]] (z.B. VirtualBox, VMware Workstation).
>     
> - **Desktopvirtualisierung (VDI)**  
>     Benutzer arbeiten auf einem **virtuellen Desktop**, der zentral im Rechenzentrum läuft (z.B. Citrix, VMware Horizon).
>     
