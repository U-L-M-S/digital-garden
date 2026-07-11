---
{"dg-publish":true,"permalink":"/wiki/ola/","tags":["itsm/verträge","GFN/LF06","itil"],"noteIcon":"","updated":"2025-11-05T13:17:56.000+01:00","dg-note-properties":{"tags":["itsm/verträge","GFN/LF06","itil"],"aliases":["Operational Level Agreement","OLA","Betriebsvereinbarung"],"links":null,"created_date":"2025-11-05"}}
---


>Ein [[wiki/OLA\|OLA]] (Operational Level Agreement) ist eine interne Vereinbarung zwischen IT-Abteilungen die regelt wer welchen Service für wen erbringt - wie ein Vertrag zwischen Kollegen.

>>Während [[wiki/SLA\|SLA]]s mit Kunden geschlossen werden, regeln [[wiki/OLA\|OLA]]s die Zusammenarbeit **innerhalb** der IT-Organisation.

## Definition

>[!quote] Was ist ein [[wiki/OLA\|OLA]]?
>Ein [[wiki/OLA\|OLA]] (Operational Level Agreement) ist eine **interne Vereinbarung** zwischen IT-Support-Einheiten die beschreibt welche Services eine Einheit für eine andere erbringt.

## Abgrenzung zu [[wiki/SLA\|SLA]] und [[UC\|UC]]

| Vertragsart | Partner | Zweck | Beispiel |
|-------------|---------|-------|----------|
| **[[wiki/SLA\|SLA]]** | **IT ↔ Kunde** | Externe Service-Zusage | "99,9% Verfügbarkeit" |
| **[[wiki/OLA\|OLA]]** | **IT-Abteilung ↔ IT-Abteilung** | Interne Zusammenarbeit | "Network-Team antwortet in 2h" |
| **[[UC\|UC]]** | **IT ↔ Externer Lieferant** | Einkauf externer Services | "ISP liefert 1Gbit/s" |

**Zusammenspiel:**
```
SLA (IT → Kunde): "E-Mail 99% erreichbar"
    ↓ unterstützt durch
OLA (Server-Team → Network-Team): "Network liefert Konnektivität"
    ↓ unterstützt durch
UC (IT → Internet-Provider): "ISP liefert Bandbreite"
```

## Typische [[wiki/OLA\|OLA]]-Szenarien

### 1. Support-Level-Vereinbarung

**[[wiki/First-Level-Support\|First-Level-Support]] ↔ [[wiki/Second-Level-Support\|Second-Level-Support]]:**

**[[wiki/OLA\|OLA]] regelt:**
- [[wiki/Eskalation\|Eskalation]]skriterien: Wann geht Ticket an L2?
- Reaktionszeit: L2 reagiert binnen 4 Stunden
- Informationspflicht: L2 informiert L1 über Lösung
- Dokumentation: L2 dokumentiert im [[wiki/Ticketsystem\|Ticketsystem]]

### 2. Infrastruktur-Services

**Application-Team ↔ Network-Team:**

**[[wiki/OLA\|OLA]] regelt:**
- Network stellt [[wiki/VLAN\|VLAN]]s bereit
- Reaktionszeit bei [[wiki/Netzwerk\|Netzwerk]]-Problemen: 2h
- Wartungsfenster: Sonntags 02:00-06:00
- Change-Prozess: 5 Tage Vorlauf für [[wiki/Netzwerk\|Netzwerk]]-Änderungen

### 3. Plattform-Services

**Development-Team ↔ Operations-Team:**

**[[wiki/OLA\|OLA]] regelt:**
- Ops stellt [[wiki/Server\|Server]]-Infrastruktur bereit
- Deployment-Zeitfenster
- [[wiki/Monitoring\|Monitoring]]-Verantwortlichkeiten
- [[Incident\|Incident]]-Eskalation bei Produktiv-Problemen

## Typische Inhalte eines [[wiki/OLA\|OLA]]

### Service-Beschreibung
>Was wird genau geliefert?

**Beispiel:**
- "Network-Team stellt Ethernet-Konnektivität für alle [[wiki/Server\|Server]] im Rechenzentrum bereit"

### Service-Zeiten
>Wann ist der Service verfügbar?

**Beispiel:**
- Support: Mo-Fr 8-18 Uhr
- Notfall-Support: 24/7 On-Call
- Geplante Wartung: Sonntags 02:00-06:00

### Leistungskennzahlen
>Wie schnell/gut muss geliefert werden?

**Beispiele:**
- Reaktionszeit: 2 Stunden
- Lösungszeit: 8 Stunden
- Verfügbarkeit: 99,5%

### Eskalationspfade
>Was passiert bei Problemen?

**Beispiel:**
- Nach 2h ohne Reaktion: Eskalation an Team-Lead
- Nach 4h: Eskalation an IT-Manager
- Kritische Incidents: Sofortige Manager-Information

### Verantwortlichkeiten
>Wer ist wofür zuständig?

**Beispiel mit [[wiki/RACI-Matrix\|RACI-Matrix]]:**
- Network-Team: Responsible für [[wiki/Switch\|Switch]]-Konfiguration
- Security-Team: Consulted bei [[wiki/Firewall\|Firewall]]-Regeln
- Application-Team: Informed über Changes

### Kommunikationswege
>Wie wird kommuniziert?

**Beispiel:**
- Incidents: Via [[wiki/Ticketsystem\|Ticketsystem]]
- Dringende Fälle: Telefon-Hotline
- Geplante Änderungen: E-Mail 5 Tage vorher

## Warum [[wiki/OLA\|OLA]]s wichtig sind

>[!check] Vorteile von [[wiki/OLA\|OLA]]s
>- **Klarheit** - Jeder weiß was er von anderen erwarten kann
>- **Messbarkeit** - Leistung kann bewertet werden
>- **Verantwortlichkeit** - Keine "nicht mein Job"-Mentalität
>- **SLA-Erfüllung** - Interne [[wiki/OLA\|OLA]]s ermöglichen externe [[wiki/SLA\|SLA]]s
>- **Konflikt-Vermeidung** - Klare Regeln statt Streit

### Hierarchie der Vereinbarungen

```
        ┌─────────────┐
        │ SLA         │  ← Extern, mit Kunde
        │ (höchste    │
        │  Priorität) │
        └──────┬──────┘
               │ unterstützt durch
        ┌──────▼──────┐
        │ OLA         │  ← Intern, zwischen Teams
        │ (mittlere   │
        │  Priorität) │
        └──────┬──────┘
               │ unterstützt durch
        ┌──────▼──────┐
        │ UC          │  ← Extern, mit Lieferant
        │ (Basis)     │
        └─────────────┘
```

**Logik:**
>Um [[wiki/SLA\|SLA]] zu erfüllen, müssen [[wiki/OLA\|OLA]]s funktionieren. Um [[wiki/OLA\|OLA]]s zu erfüllen, müssen [[UC\|UC]]s funktionieren.

## Beispiel-[[wiki/OLA\|OLA]]

### Network Support [[wiki/OLA\|OLA]]

**Zwischen:** Application-Team und Network-Team

**Service:** Netzwerk-Konnektivität und -Support

**Service-Zeiten:**
- Standard-Support: Mo-Fr 8-18 Uhr
- On-Call: 24/7 für kritische Incidents

**Leistungsziele:**
- Reaktionszeit bei Incidents: 2 Stunden
- [[wiki/Netzwerk\|Netzwerk]]-Verfügbarkeit: 99,5%
- Geplante Änderungen: 5 Arbeitstage Vorlauf

**Eskalation:**
- L1: Network-Support-Team (2h)
- L2: Senior Network Engineer (4h)
- L3: Network Manager (8h)

**Verantwortlichkeiten:**
- Network-Team: [[wiki/Switch\|Switch]], [[wiki/Router\|Router]], [[wiki/Firewall\|Firewall]]
- Application-Team: Application-spezifische Ports freischalten lassen

**Kommunikation:**
- Incidents: [[wiki/Ticketsystem\|Ticketsystem]], Kategorie "Network"
- Changes: E-Mail an network-changes@firma.de

## Prüfungsrelevanz LF06

>[!important] Für LF06 wichtig
>- **Definition**: Interne Vereinbarung zwischen IT-Einheiten
>- **Abgrenzung**: [[wiki/OLA\|OLA]] (intern) vs. [[wiki/SLA\|SLA]] (extern) vs. [[UC\|UC]] (Lieferant)
>- **Zweck**: Interne Zusammenarbeit regeln
>- **Hierarchie**: [[wiki/OLA\|OLA]]s unterstützen [[wiki/SLA\|SLA]]s

**Typische Prüfungsfrage:**
>"Erklären Sie den Unterschied zwischen SLA, OLA und UC anhand von Beispielen."

## Verwandte Konzepte

- [[wiki/SLA\|SLA]] - Service Level Agreement (mit Kunde)
- [[UC\|UC]] - Underpinning Contract (mit Lieferant)
- [[Service-Level Management\|Service-Level Management]] - [[ITIL\|ITIL]]-Prozess
- [[ITSM\|ITSM]] - Rahmenwerk
- [[ITIL\|ITIL]] - Best Practices

## Zusammenfassung

>[!quote] Kern-Aussage
>[[wiki/OLA\|OLA]]s sind interne Vereinbarungen zwischen IT-Teams die regeln wer welchen Service für wen erbringt - die Basis damit externe [[wiki/SLA\|SLA]]s erfüllt werden können.

**Merksatz:**
>"[[wiki/OLA\|OLA]] = Interner Vertrag zwischen IT-Teams - damit [[wiki/SLA\|SLA]] ans Kunde funktioniert!"

**Die Hierarchie:**
>[[UC\|UC]] (Lieferant liefert) → [[wiki/OLA\|OLA]] (IT-Teams liefern) → [[wiki/SLA\|SLA]] (IT liefert an Kunde)
