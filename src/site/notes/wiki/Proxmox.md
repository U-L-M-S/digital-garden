---
{"dg-publish":true,"permalink":"/wiki/proxmox/","tags":["informatik/system"],"noteIcon":"","updated":"2026-07-19T03:56:26.604+02:00","dg-note-properties":{"aliases":["Proxmox VE"],"created":"2025-01-07","path":"Notes","tags":["informatik/system"]}}
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

## Einsatz mit [[wiki/Firewall\|Firewall]]

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
