---
{"dg-publish":true,"permalink":"/02-resources/notes/fisi-teil1/","noteIcon":"","updated":"2026-04-23T01:31:44.230+02:00"}
---

## ⚠️ Wichtige Klarstellung vorab (online-bestätigt)

`SQL` und `RAID` wurden **nur aus AP1 (Zwischenprüfung)** gestrichen — in **AP2 Teil 1 sind sie sogar EXKLUSIV-Pflicht**. Verwechslung-Falle. Du musst beides können.

Neu im Katalog 2025 für AP2 Teil 1: **Zero Trust, Least Privilege, Container, MDM/BYOD, KI-Grundlagen, eRechnung, IPv6** — Sommer 2025 hat Zero Trust + Härtung + MDM bereits gebracht ✅

---

## 🔥 Sommer-Heatmap (BW + ZPA gemischt, weil BW Themen aus ZPA übernimmt)

```
Legende:  ✅ = Hauptaufgabe (>10P)   ◐ = Teilaufgabe   ─ = nicht dran
```

|#|Thema|S22 BW|S23 BW|S24 BW|S24 ZPA|S25 ZPA|Frequenz|
|---|---|---|---|---|---|---|---|
|1|**Netzwerk: VLAN/Subnetting/IPv4(+IPv6)**|✅ 28P|✅ 15P|✅ 9P|─|─|**3/3 BW** 🔴|
|2|**IT-Sicherheit (CIA: Vertr./Integr./Auth.)**|◐|✅ 6P|◐|✅ 4P|✅ 3P|**5/5** 🔴|
|3|**Verschlüsselung sym/asym/hybrid (TLS!)**|─|✅ 5P|─|─|◐|2/5|
|4|**Authentifizierung (2FA, AAA/RADIUS)**|◐ 3P|✅ 12P|─|─|◐|3/5|
|5|**Cloud (IaaS/PaaS/SaaS, Pub/Priv/Hybrid)**|─|─|✅ 13P|✅ 14P|◐|**3/5** 🔴|
|6|**Wirtschaftlichkeit (Nutzwert/TCO/CAL)**|─|─|✅ 13P|✅ 6P|✅ 4P|**3/5** 🔴|
|7|**RAID-Berechnung (5/6/10 + Hot Spare)**|─|─|─|✅ 7P|✅ 7P|2/5 (Winter ++)|
|8|**Backup (3-2-1, Voll/Diff/Ink, Archivbit)**|─|─|─|─|✅ 13P|1/5 (Winter ++)|
|9|**SQL (SELECT/INSERT/UPDATE/DELETE/JOIN)**|✅ 20P|─|✅ 14P|─|─|2/5|
|10|**ER-Modell/Datenbank-Design**|✅|─|✅ 4P|─|─|2/5|
|11|**VPN (IPsec, Anforderungen, S2S/Client)**|─|─|◐ 2P|─|─|1/5|
|12|**DSGVO/personenbez. Daten/TOM**|─|✅ 3P|─|✅ 10P|✅ 3P|**3/5** 🔴|
|13|**Virtualisierung (Hypervisor T1/T2)**|─|─|─|─|✅ 14P|1/5 (NEU stark)|
|14|**Härtung/Zero Trust/Least Privilege** 🆕|─|─|─|─|✅ 10P|1/1 (NEU 2025)|
|15|**MDM/BYOD/Mobile Security** 🆕|─|─|─|✅|✅ 11P|2/2|
|16|**Hochverfügbarkeit (USV/Redundanz)**|─|─|─|✅ 6P|✅ 5P|2/5|
|17|**IoT/Edge/Cyber-physische Systeme**|─|─|✅ 21P|─|─|1/5|
|18|**Geschäftsprozesse (ePK/BPMN)**|─|─|✅ 14P|─|─|1/5|
|19|**Skript-Analyse (Bash/CSV/Algorithmus)**|─|◐|◐|✅ 15P|─|2/5|

---

## 🛣️ PATH ERKANNT — die "Sommer-DNA" (was IMMER kommt)

```
┌─────────────────────────────────────────────────────┐
│  CORE 4 — In JEDER Sommer-Prüfung Pflicht           │
├─────────────────────────────────────────────────────┤
│  1. IT-SICHERHEIT  (CIA + Auth + Verschl.)  ~20P   │
│  2. CLOUD/WIRTSCHAFTL.  (NWA, TCO, Modelle) ~15P   │
│  3. STORAGE  (RAID ODER Backup ODER beides) ~15P   │
│  4. NETZWERK-KONFIG  (BW: IPv4/VLAN-lastig) ~25P   │
└─────────────────────────────────────────────────────┘
                       ║
        ┌──────────────╬──────────────┐
        ▼              ▼              ▼
   ROTATION-1     ROTATION-2     ROTATION-3
   SQL/DB         Virtualisier.  IoT/Edge
   (alle 2 J.)    (NEU stark)    (selten)
                       ║
                       ▼
            ╔═══════════════════════╗
            ║  NEU 2025 PFLICHT 🆕  ║
            ║  • Zero Trust         ║
            ║  • Least Privilege    ║
            ║  • Härtung            ║
            ║  • MDM / BYOD         ║
            ║  • Container (Docker) ║
            ║  • IPv6-Aspekte       ║
            ║  • eRechnung (WiSo)   ║
            ╚═══════════════════════╝
```

---

## 🎯 Sommer 2026 Prognose — TOP-PRIORITÄT zum Beherrschen

**Beherrsch diese 7 Themen → ~80 P bist du sicher dabei:**

|Rang|Thema|Warum jetzt?|
|---|---|---|
|🥇 1|**IT-Sicherheit-Trio (CIA + sym/asym/hybrid + 2FA/AAA)**|5/5 Sommer, BW liebt 6-Punkter dazu|
|🥈 2|**Cloud-Modelle + Nutzwertanalyse**|3/5 Sommer mit 13–14P-Brockern|
|🥉 3|**RAID-Tabelle (0/1/5/6/10) + Hot Spare**|letzten 2 Sommer ZPA, BW überfällig|
|4|**Backup 3-2-1 + Archivbit-Tabelle**|Sommer 25 stark, BW Pendant überfällig|
|5|**VLAN + Subnetting (IPv4 + IPv6 /56-Aspekte)**|BW IMMER (3/3)|
|6|**Härtung / Zero Trust / Least Privilege** 🆕|KATALOG 2025 — sicheres Comeback|
|7|**Virtualisierung Hypervisor T1/T2**|S25 mit 14P → wahrscheinlich Replay|
