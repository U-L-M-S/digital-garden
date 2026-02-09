---
{"dg-publish":true,"permalink":"/02-resources/notes/ola/","tags":["itsm/verträge","GFN/LF06","itil"],"noteIcon":"","updated":"2025-11-05T13:17:56.000+01:00"}
---


>Ein [[02 - RESOURCES/Notes/OLA\|OLA]] (Operational Level Agreement) ist eine interne Vereinbarung zwischen IT-Abteilungen die regelt wer welchen Service für wen erbringt - wie ein Vertrag zwischen Kollegen.

>>Während [[02 - RESOURCES/Notes/SLA\|SLA]]s mit Kunden geschlossen werden, regeln [[02 - RESOURCES/Notes/OLA\|OLA]]s die Zusammenarbeit **innerhalb** der IT-Organisation.

## Definition

>[!quote] Was ist ein [[02 - RESOURCES/Notes/OLA\|OLA]]?
>Ein [[02 - RESOURCES/Notes/OLA\|OLA]] (Operational Level Agreement) ist eine **interne Vereinbarung** zwischen IT-Support-Einheiten die beschreibt welche Services eine Einheit für eine andere erbringt.

## Abgrenzung zu [[02 - RESOURCES/Notes/SLA\|SLA]] und [[UC\|UC]]

| Vertragsart | Partner | Zweck | Beispiel |
|-------------|---------|-------|----------|
| **[[02 - RESOURCES/Notes/SLA\|SLA]]** | **IT ↔ Kunde** | Externe Service-Zusage | "99,9% Verfügbarkeit" |
| **[[02 - RESOURCES/Notes/OLA\|OLA]]** | **IT-Abteilung ↔ IT-Abteilung** | Interne Zusammenarbeit | "Network-Team antwortet in 2h" |
| **[[UC\|UC]]** | **IT ↔ Externer Lieferant** | Einkauf externer Services | "ISP liefert 1Gbit/s" |

**Zusammenspiel:**
```
SLA (IT → Kunde): "E-Mail 99% erreichbar"
    ↓ unterstützt durch
OLA (Server-Team → Network-Team): "Network liefert Konnektivität"
    ↓ unterstützt durch
UC (IT → Internet-Provider): "ISP liefert Bandbreite"
```

## Typische [[02 - RESOURCES/Notes/OLA\|OLA]]-Szenarien

### 1. Support-Level-Vereinbarung

**[[02 - RESOURCES/Notes/First-Level-Support\|First-Level-Support]] ↔ [[02 - RESOURCES/Notes/Second-Level-Support\|Second-Level-Support]]:**

**[[02 - RESOURCES/Notes/OLA\|OLA]] regelt:**
- [[02 - RESOURCES/Notes/Eskalation\|Eskalation]]skriterien: Wann geht Ticket an L2?
- Reaktionszeit: L2 reagiert binnen 4 Stunden
- Informationspflicht: L2 informiert L1 über Lösung
- Dokumentation: L2 dokumentiert im [[02 - RESOURCES/Notes/Ticketsystem\|Ticketsystem]]

### 2. Infrastruktur-Services

**Application-Team ↔ Network-Team:**

**[[02 - RESOURCES/Notes/OLA\|OLA]] regelt:**
- Network stellt [[02 - RESOURCES/Notes/VLAN\|VLAN]]s bereit
- Reaktionszeit bei [[02 - RESOURCES/Notes/Netzwerk\|Netzwerk]]-Problemen: 2h
- Wartungsfenster: Sonntags 02:00-06:00
- Change-Prozess: 5 Tage Vorlauf für [[02 - RESOURCES/Notes/Netzwerk\|Netzwerk]]-Änderungen

### 3. Plattform-Services

**Development-Team ↔ Operations-Team:**

**[[02 - RESOURCES/Notes/OLA\|OLA]] regelt:**
- Ops stellt [[02 - RESOURCES/Notes/Server\|Server]]-Infrastruktur bereit
- Deployment-Zeitfenster
- [[02 - RESOURCES/Notes/Monitoring\|Monitoring]]-Verantwortlichkeiten
- [[Incident\|Incident]]-Eskalation bei Produktiv-Problemen

## Typische Inhalte eines [[02 - RESOURCES/Notes/OLA\|OLA]]

### Service-Beschreibung
>Was wird genau geliefert?

**Beispiel:**
- "Network-Team stellt Ethernet-Konnektivität für alle [[02 - RESOURCES/Notes/Server\|Server]] im Rechenzentrum bereit"

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

**Beispiel mit [[02 - RESOURCES/Notes/RACI-Matrix\|RACI-Matrix]]:**
- Network-Team: Responsible für [[02 - RESOURCES/Notes/Switch\|Switch]]-Konfiguration
- Security-Team: Consulted bei [[02 - RESOURCES/Notes/Firewall\|Firewall]]-Regeln
- Application-Team: Informed über Changes

### Kommunikationswege
>Wie wird kommuniziert?

**Beispiel:**
- Incidents: Via [[02 - RESOURCES/Notes/Ticketsystem\|Ticketsystem]]
- Dringende Fälle: Telefon-Hotline
- Geplante Änderungen: E-Mail 5 Tage vorher

## Warum [[02 - RESOURCES/Notes/OLA\|OLA]]s wichtig sind

>[!check] Vorteile von [[02 - RESOURCES/Notes/OLA\|OLA]]s
>- **Klarheit** - Jeder weiß was er von anderen erwarten kann
>- **Messbarkeit** - Leistung kann bewertet werden
>- **Verantwortlichkeit** - Keine "nicht mein Job"-Mentalität
>- **SLA-Erfüllung** - Interne [[02 - RESOURCES/Notes/OLA\|OLA]]s ermöglichen externe [[02 - RESOURCES/Notes/SLA\|SLA]]s
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
>Um [[02 - RESOURCES/Notes/SLA\|SLA]] zu erfüllen, müssen [[02 - RESOURCES/Notes/OLA\|OLA]]s funktionieren. Um [[02 - RESOURCES/Notes/OLA\|OLA]]s zu erfüllen, müssen [[UC\|UC]]s funktionieren.

## Beispiel-[[02 - RESOURCES/Notes/OLA\|OLA]]

### Network Support [[02 - RESOURCES/Notes/OLA\|OLA]]

**Zwischen:** Application-Team und Network-Team

**Service:** Netzwerk-Konnektivität und -Support

**Service-Zeiten:**
- Standard-Support: Mo-Fr 8-18 Uhr
- On-Call: 24/7 für kritische Incidents

**Leistungsziele:**
- Reaktionszeit bei Incidents: 2 Stunden
- [[02 - RESOURCES/Notes/Netzwerk\|Netzwerk]]-Verfügbarkeit: 99,5%
- Geplante Änderungen: 5 Arbeitstage Vorlauf

**Eskalation:**
- L1: Network-Support-Team (2h)
- L2: Senior Network Engineer (4h)
- L3: Network Manager (8h)

**Verantwortlichkeiten:**
- Network-Team: [[02 - RESOURCES/Notes/Switch\|Switch]], [[02 - RESOURCES/Notes/Router\|Router]], [[02 - RESOURCES/Notes/Firewall\|Firewall]]
- Application-Team: Application-spezifische Ports freischalten lassen

**Kommunikation:**
- Incidents: [[02 - RESOURCES/Notes/Ticketsystem\|Ticketsystem]], Kategorie "Network"
- Changes: E-Mail an network-changes@firma.de

## Prüfungsrelevanz LF06

>[!important] Für LF06 wichtig
>- **Definition**: Interne Vereinbarung zwischen IT-Einheiten
>- **Abgrenzung**: [[02 - RESOURCES/Notes/OLA\|OLA]] (intern) vs. [[02 - RESOURCES/Notes/SLA\|SLA]] (extern) vs. [[UC\|UC]] (Lieferant)
>- **Zweck**: Interne Zusammenarbeit regeln
>- **Hierarchie**: [[02 - RESOURCES/Notes/OLA\|OLA]]s unterstützen [[02 - RESOURCES/Notes/SLA\|SLA]]s

**Typische Prüfungsfrage:**
>"Erklären Sie den Unterschied zwischen SLA, OLA und UC anhand von Beispielen."

## Verwandte Konzepte

- [[02 - RESOURCES/Notes/SLA\|SLA]] - Service Level Agreement (mit Kunde)
- [[UC\|UC]] - Underpinning Contract (mit Lieferant)
- [[Service-Level Management\|Service-Level Management]] - [[ITIL\|ITIL]]-Prozess
- [[ITSM\|ITSM]] - Rahmenwerk
- [[ITIL\|ITIL]] - Best Practices

## Zusammenfassung

>[!quote] Kern-Aussage
>[[02 - RESOURCES/Notes/OLA\|OLA]]s sind interne Vereinbarungen zwischen IT-Teams die regeln wer welchen Service für wen erbringt - die Basis damit externe [[02 - RESOURCES/Notes/SLA\|SLA]]s erfüllt werden können.

**Merksatz:**
>"[[02 - RESOURCES/Notes/OLA\|OLA]] = Interner Vertrag zwischen IT-Teams - damit [[02 - RESOURCES/Notes/SLA\|SLA]] ans Kunde funktioniert!"

**Die Hierarchie:**
>[[UC\|UC]] (Lieferant liefert) → [[02 - RESOURCES/Notes/OLA\|OLA]] (IT-Teams liefern) → [[02 - RESOURCES/Notes/SLA\|SLA]] (IT liefert an Kunde)
