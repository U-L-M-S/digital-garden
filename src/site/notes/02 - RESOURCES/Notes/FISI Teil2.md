---
{"dg-publish":true,"permalink":"/02-resources/notes/fisi-teil2/","noteIcon":"","updated":"2026-04-23T01:40:43.691+02:00"}
---

# 📊 Frequenz-Matrix Sommer-Prüfungen S22 → S25

**Datenbasis (6 Prüfungen, alle "Analyse und Entwicklung von Netzwerken"):**

- S22 BW · S23 BW · S23 ZPA · S24 BW · S24 ZPA · S25 ZPA
- ⚠️ Block "Konzeption/Administration IT-Systeme" hab ich **keine** Sommer-Prüfungen im Projekt — Matrix gilt nur für den Netzwerke-Block

---

## 🔴 TIER 1 — PFLICHT (in 4–6 von 6 Sommern)

|Hauptthema|Unterthema|Unterunterpunkt (was konkret gefragt)|Σ|Punkte typisch|
|---|---|---|---|---|
|**IPv6**|Subnetting|Präfix splitten in /64 (z. B. /58 → 64 Netze; /56 → 256 Netze)|**5/6**|5–8|
|**IPv6**|Adresstypen|`fe80::` link-local vs. `2001::` global|3/6|2–4|
|**IPv4**|VLSM|Subnetz/Maske/Hosts pro VLAN in Tabelle eintragen|**4/6**|4–8|
|**IPv4**|CIDR|Notation erklären + dotted-decimal umrechnen|**4/6**|2|
|**IPv4**|Hostzahl|2^h − 2 ausrechnen, Standardgateway nennen|**4/6**|3–5|
|**Routing**|Statische Tabelle|Lücken füllen (Netz-ID, Maske, Next-Hop, IF)|**4/6**|6–9|
|**Routing**|Default-Route|`0.0.0.0/0` Bedeutung, wann setzen|**4/6**|2|
|**VPN**|3 Varianten|End-to-End / End-to-Site / Site-to-Site abgrenzen + Beispiel|3/6|4–5|
|**VPN**|Lösungstechnik|IPsec (Tunnel/Transport) **oder** WireGuard (CA-frei)|3/6|4–8|
|**Firewall**|Regelwerk|Tabelle (Quell-IP, Ziel-IP, Port, Richtung, allow/deny)|3/6|6–9|
|**Firewall**|Zonen|DMZ-Funktion erklären|3/6|2–4|
|**DHCP**|DORA|4 Pakete (Discover→Offer→Request→Ack) nennen|3/6|4|
|**DHCP**|Relay/Helper|warum nötig (Broadcast endet an Layer-3)|3/6|3–4|
|**DHCP**|APIPA|`169.254.0.0/16` erkennen + Ursache|3/6|2–4|
|**VLAN**|Vorteile|Broadcast-Domain, Sicherheit, Skalierung|3/6|4–6|
|**VLAN**|Tagging|802.1Q Trunk, native VLAN, VLAN-Hopping|3/6|3–4|

---

## 🟡 TIER 2 — HOCH (2–3 von 6, oft große Punkte)

|Hauptthema|Unterthema|Unterunterpunkt|Σ|
|---|---|---|---|
|**NAT/PAT**|Funktion|Source-NAT erklären (interne→öffentliche IP+Port)|2/6|
|**NAT/PAT**|Portforwarding|Destination-NAT für Webserver in DMZ|2/6|
|**DNS**|Auflösung|rekursiv vs iterativ; Root → DE → ihk.de Kette|2/6|
|**DNS**|Internes DNS|warum interner Server (öffentl. löst keine LAN-Namen)|2/6|
|**WLAN**|Sicherheit|WPA2/3 PSK vs **Enterprise+RADIUS+EAP**|2/6|
|**WLAN**|Verschlüsselung|AES/CCMP, TKIP veraltet|2/6|
|**Switching**|STP|warum Port "blocked" → Loop-Vermeidung|2/6|
|**Switching**|Link-Aggregation|Bündelung Bandbreite/Redundanz, Verhalten bei Ausfall|2/6|
|**Monitoring**|SNMP|Trap-Funktion + SNMPv2 vs **SNMPv3** (Verschlüsselung)|2/6|
|**Sicherheit**|Schutzziele|C-I-A (Vertraulichkeit, Integrität, Verfügbarkeit)|2/6|
|**Sicherheit**|Personendaten|DSGVO-Bezug, was zählt dazu|1/6|
|**Virtualisierung**|Hypervisor|Typ 1/2 Aufgaben vs VM-Aufgaben|1/6|

---

## 🟢 TIER 3 — KATALOG 2.0 NEU (nur 0–1 von 6, aber S2026 wahrscheinlich)

|Thema|warum relevant|
|---|---|
|**Cloud** IaaS/PaaS/SaaS + Shared Responsibility|Katalog 2.0, S25 noch wenig — S26 fällig|
|**Container/Docker** vs Hypervisor|NEU im Katalog|
|**Zero Trust** "never trust, always verify"|NEU im Katalog|
|**Belegsätze** lesen (Datenblatt/Rechnung)|Pflicht laut Katalog 2.0|
|**Binärpräfix-Rechnung** (KiB/MiB/GiB + Bandbreite)|S25 hat Bandbreite gerechnet (MQTT)|
|**WireGuard** explizit|S25 Premiere — wird bleiben|
|**BPMN/UML**|ersetzen Struktogramm/PAP|

---

## 🗑️ NICHT MEHR IM KATALOG (ab S25 raus)

```
❌ Struktogramm  (S24 hatte noch eins)
❌ PAP           (S24 hatte noch einen)
```

→ **NICHT mehr lernen** für S26

---

# 🎯 Dein Lern-Path (priorisiert für die nächsten 6 Tage)

```
Stufe 1 (DO+FR):  IPv4-VLSM ▸ IPv6-Subnetting ▸ Routing-Tabelle ▸ Default-Route
Stufe 2 (SA):     VPN (3 Var. + IPsec + WireGuard) ▸ Firewall-Regelwerk ▸ DMZ
Stufe 3 (SO):     DHCP (DORA+Relay+APIPA) ▸ DNS (rekursiv) ▸ VLAN+Trunk
Stufe 4 (MO):     NAT/PAT ▸ STP/LinkAgg ▸ WLAN+RADIUS ▸ Cloud/Container/Zero Trust
Stufe 5 (DI):     Mock-Klausur S2025 ZPA komplett auf Zeit (90 Min)
```

