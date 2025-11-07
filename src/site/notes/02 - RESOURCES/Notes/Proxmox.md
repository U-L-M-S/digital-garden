---
{"dg-publish":true,"permalink":"/02-resources/notes/proxmox/","tags":["informatik/virtualisierung","informatik/server"],"noteIcon":"","updated":"2025-11-07T12:04:06.665+01:00"}
---

> Proxmox VE (Virtual Environment)

**Proxmox** ist eine Virtualisierungs-Plattform. Du kannst damit mehrere virtuelle Maschinen (VMs) und Container auf einem physischen Server laufen lassen.

---

## Hauptfunktionen

```
  Proxmox VE
      │
  ┌───┴───┐
  │       │
  ▼       ▼
┌────┐ ┌────┐
│ VM │ │LXC │  ← Zwei Technologien
│KVM │ │    │
└────┘ └────┘
  │      │
Voll   Leicht
OS     gewicht
```

- **Virtuelle Maschinen** (KVM): Vollständige VMs
- **Linux Container** (LXC): Leichtgewichtige Container
- **Web-Interface**: Verwaltung über Browser
- **Backup/Restore**: Automatische Sicherungen
- **High Availability**: Ausfallsicherheit
- **Storage Management**: Verschiedene Storage-Typen

## Einsatz mit [[02 - RESOURCES/Notes/Firewall\|Firewall]]

```
Physischer Server
  │
  ├─► Proxmox VE (Hypervisor)
       │
       ├─► VM 1: OpenSense (Firewall)
       ├─► VM 2: Linux Server
       ├─► VM 3: Windows Server
       └─► Container: Docker Host
```

## Web-Interface

Erreichbar unter: `https://<IP>:8006`

**Navigation:**
- Dashboard: Übersicht aller VMs/Container
- Datacenter: Storage, Backup, HA
- Node: System, Updates, Shell
- VMs: Starten, stoppen, konfigurieren
