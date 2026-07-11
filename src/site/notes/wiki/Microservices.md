---
{"dg-publish":true,"permalink":"/wiki/microservices/","tags":["softwarearchitektur/microservices","architektur/pattern","GFN/prüfungsrelevant/AP2/vorbereitung"],"noteIcon":"","updated":"2025-11-05T12:22:24.000+01:00","dg-note-properties":{"tags":["softwarearchitektur/microservices","architektur/pattern","GFN/prüfungsrelevant/AP2/vorbereitung"],"aliases":["Microservice","Mikroservices","Microservice-Architektur"],"links":null,"created_date":"2025-11-05"}}
---


>[[wiki/Microservices\|Microservices]] ist eine Architektur wo du deine [[wiki/Software\|Software]] in viele kleine, unabhängige Services aufteilst - jeder macht eine spezifische Aufgabe.

>>Statt einer großen monolithischen Anwendung hast du viele kleine Programme die zusammenarbeiten.

## Grundprinzip

>[!quote] Definition
>Ein [[wiki/Microservices\|Microservice]] ist ein kleiner, autonomer Service der eine spezifische Business-Funktion erfüllt und unabhängig deployed werden kann.

### Eigenschaften:
- **Klein und fokussiert** - Jeder Service macht genau eine Sache
- **Unabhängig deploybar** - Services können einzeln aktualisiert werden
- **Eigene [[wiki/Datenbank\|Datenbank]]** - Jeder Service hat seine eigenen Daten
- **Technologie-Unabhängigkeit** - Verschiedene Services können verschiedene Technologien nutzen
- **Kommunikation über [[wiki/API\|API]]s** - Services sprechen über [[wiki/REST API\|REST API]] oder Message Queues

## Vergleich zu Monolithen

| Aspekt | Monolith | [[wiki/Microservices\|Microservices]] |
|--------|----------|-------------------|
| Größe | Eine große Anwendung | Viele kleine Services |
| Deployment | Alles zusammen | Einzeln pro Service |
| Skalierung | Gesamte App | Nur benötigte Services |
| Technologie | Eine für alles | Verschiedene möglich |
| Komplexität | Einfach zu starten | Komplex zu orchestrieren |

## Architektur-Beispiel

>[!example] E-Commerce-System
>Statt einer App hast du:
>- **User-Service** - Verwaltung von Nutzerdaten
>- **Product-Service** - Produktkatalog
>- **Order-Service** - Bestellungen
>- **Payment-Service** - Zahlungsabwicklung
>- **Shipping-Service** - Versand
>
>Jeder kann unabhängig entwickelt, getestet und deployed werden.

## Vorteile

>[!check] Vorteile
>- **Skalierbarkeit** - Nur stark genutzte Services skalieren
>- **Unabhängige Entwicklung** - Teams arbeiten parallel
>- **Technologie-Freiheit** - Bestes Tool für jeden Service
>- **Fehler-Isolierung** - Ein Service-Ausfall stoppt nicht alles
>- **Schnellere Releases** - Services können einzeln aktualisiert werden

**Beispiel Skalierung:**
>Wenn zu Weihnachten viele bestellen, skalierst du nur Order-Service und Payment-Service - nicht das komplette System!

## Nachteile

>[!fail] Nachteile
>- **Komplexe Kommunikation** - Services müssen miteinander sprechen
>- **Verteiltes System** - Schwerer zu debuggen
>- **Mehr Infrastruktur** - Braucht [[wiki/Docker\|Docker]], [[wiki/Kubernetes\|Kubernetes]], etc.
>- **Datenkonsistenz** - Schwieriger wenn jeder Service eigene [[wiki/Datenbank\|Datenbank]] hat
>- **Mehr Deployment-Aufwand** - Viele Services = viel zu deployen

## Service-Kommunikation

### Synchrone Kommunikation
>Service ruft anderen Service direkt auf - wartet auf Antwort.

**[[wiki/REST API\|REST API]]:**
```
User-Service → GET /products → Product-Service
Product-Service → Response mit Produkten → User-Service
```

**Vorteile:**
- Einfach zu verstehen
- Sofortiges Feedback

**Nachteile:**
- Services müssen verfügbar sein
- Kann langsam werden bei vielen Aufrufen

### Asynchrone Kommunikation
>Service sendet Nachricht - wartet nicht auf Antwort.

**Message Queue (z.B. RabbitMQ, Kafka):**
```
Order-Service → "Bestellung erstellt" → Message Queue
Payment-Service liest Nachricht → Verarbeitet Zahlung
Shipping-Service liest Nachricht → Bereitet Versand vor
```

**Vorteile:**
- Services müssen nicht gleichzeitig laufen
- Entkopplung
- Besser skalierbar

**Nachteile:**
- Komplexer zu entwickeln
- Eventual Consistency (Daten sind nicht sofort überall aktuell)

## Service Discovery

>[!info] Service Discovery
>Wie finden Services einander in einem dynamischen System?

**Problem:**
>Services starten/stoppen dynamisch - [[wiki/IP-Adresse\|IP-Adresse]]n ändern sich.

**Lösung:**
- **Service Registry** - Zentrale Liste aller Services (z.B. Consul, Eureka)
- Services registrieren sich beim Start
- Services fragen Registry nach anderen Services

## API Gateway

>[!important] [[API Gateway\|API Gateway]]
>Einstiegspunkt für alle Client-Anfragen - verteilt Requests an richtige Services.

**Funktionen:**
- **Routing** - Leitet Anfragen an richtigen Service
- **[[wiki/Authentifizierung\|Authentifizierung]]** - Prüft Zugriffsrechte zentral
- **Rate Limiting** - Schützt vor Überlastung
- **Logging** - Zentrale Protokollierung

```
Client → API Gateway → User-Service
                    → Product-Service
                    → Order-Service
```

## Deployment

### Container-Technologie

>[!tip] [[wiki/Docker\|Docker]] und [[wiki/Kubernetes\|Kubernetes]]
>[[wiki/Microservices\|Microservices]] laufen meist in [[wiki/Docker\|Docker]]-Containern, orchestriert durch [[wiki/Kubernetes\|Kubernetes]].

**[[wiki/Docker\|Docker]]:**
- Jeder Service in eigenem Container
- Isoliert und portabel
- Einfaches Deployment

**[[wiki/Kubernetes\|Kubernetes]]:**
- Automatisches Deployment und Skalierung
- Self-Healing (startet abgestürzte Services neu)
- Load Balancing

## Datenverwaltung

### Database per Service Pattern

>[!important] Eigene [[wiki/Datenbank\|Datenbank]] pro Service
>Jeder [[wiki/Microservices\|Microservice]] hat seine eigene [[wiki/Datenbank\|Datenbank]] - kein Service greift direkt auf Daten anderer Services zu.

**Vorteile:**
- Services sind wirklich unabhängig
- Verschiedene [[wiki/Datenbank\|Datenbank]]-Typen pro Service möglich
- Keine Kopplungen

**Herausforderungen:**
- [[wiki/Datenbank\|Datenbank]]-übergreifende Transaktionen schwierig
- Daten-Duplikation manchmal nötig
- Eventual Consistency statt sofortiger Konsistenz

## Testen von [[wiki/Microservices\|Microservices]]

### Test-Pyramide für [[wiki/Microservices\|Microservices]]:

1. **[[wiki/Unit Test\|Unit Tests]]** - Teste einzelne Funktionen
2. **[[wiki/Integrationstest\|Integrationstests]]** - Teste Service mit seiner [[wiki/Datenbank\|Datenbank]]
3. **Contract Tests** - Teste [[wiki/API\|API]]-Verträge zwischen Services
4. **[[wiki/E2E-Test\|End-to-End Tests]]** - Teste gesamten Workflow

>[!warning] Testing-Herausforderung
>[[wiki/E2E-Test\|End-to-End-Tests]] sind aufwändig wenn alle Services laufen müssen - nutze Service Mocks wo möglich!

## Monitoring und Observability

>[!important] [[wiki/Monitoring\|Monitoring]]
>Bei verteilten Systemen ist [[wiki/Monitoring\|Monitoring]] kritisch!

**Was monitoren:**
- **Service Health** - Läuft der Service?
- **Response Times** - Wie schnell antwortet er?
- **Error Rates** - Wie viele Fehler?
- **Dependencies** - Welche Services sind betroffen wenn einer ausfällt?

**Tools:**
- **Prometheus** - Metriken sammeln
- **Grafana** - Visualisierung
- **Jaeger/Zipkin** - Distributed Tracing (verfolge Request durch alle Services)
- **ELK Stack** - Log-Aggregation

## Wann [[wiki/Microservices\|Microservices]] nutzen?

>[!success] Gut geeignet für:
>- Große, komplexe Anwendungen
>- Viele Teams arbeiten parallel
>- Verschiedene Skalierungsanforderungen
>- Langfristige Projekte
>- Wenn schnelle Releases wichtig sind

>[!fail] Nicht geeignet für:
>- Kleine Projekte mit 1-2 Entwicklern
>- Projekte wo einfache Architektur ausreicht
>- Wenn du keine Container/Orchestrierung-Expertise hast
>- Startup-MVPs (Minimum Viable Products)

## Prüfungsrelevanz AP2

>[!important] Für AP2 wichtig
>- **Vorteile/Nachteile** kennen
>- **Unterschied zu Monolith** erklären können
>- **Kommunikationsmuster** (synchron/asynchron)
>- **Wann einsetzen, wann nicht**
>- **Service Discovery** und **[[API Gateway\|API Gateway]]** Konzepte

## Verwandte Konzepte

- [[wiki/MVC\|MVC]] - Architektur-Pattern
- [[wiki/REST API\|REST API]] - Kommunikation zwischen Services
- [[wiki/Docker\|Docker]] - Container-Technologie
- [[wiki/Kubernetes\|Kubernetes]] - Orchestrierung
- [[API Gateway\|API Gateway]] - Einstiegspunkt
- [[Load Balancing\|Load Balancing]] - Lastverteilung
- [[wiki/Cloud\|Cloud]] - [[wiki/Microservices\|Microservices]] laufen oft in [[wiki/Cloud\|Cloud]]

## Zusammenfassung

>[!quote] Kern-Aussage
>[[wiki/Microservices\|Microservices]] teilen große Anwendungen in viele kleine, unabhängige Services auf - jeder Service macht eine spezifische Aufgabe und kann unabhängig entwickelt, deployed und skaliert werden.

**Trade-off:**
>Mehr Flexibilität und Skalierbarkeit, aber auch mehr Komplexität in Kommunikation und Deployment.
