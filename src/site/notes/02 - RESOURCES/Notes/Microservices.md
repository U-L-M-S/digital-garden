---
{"dg-publish":true,"permalink":"/02-resources/notes/microservices/","tags":["softwarearchitektur/microservices","architektur/pattern","GFN/prüfungsrelevant/AP2/vorbereitung"],"noteIcon":"","updated":"2025-11-05T12:22:24.000+01:00"}
---


>[[02 - RESOURCES/Notes/Microservices\|Microservices]] ist eine Architektur wo du deine [[02 - RESOURCES/Notes/Software\|Software]] in viele kleine, unabhängige Services aufteilst - jeder macht eine spezifische Aufgabe.

>>Statt einer großen monolithischen Anwendung hast du viele kleine Programme die zusammenarbeiten.

## Grundprinzip

>[!quote] Definition
>Ein [[02 - RESOURCES/Notes/Microservices\|Microservice]] ist ein kleiner, autonomer Service der eine spezifische Business-Funktion erfüllt und unabhängig deployed werden kann.

### Eigenschaften:
- **Klein und fokussiert** - Jeder Service macht genau eine Sache
- **Unabhängig deploybar** - Services können einzeln aktualisiert werden
- **Eigene [[02 - RESOURCES/Notes/Datenbank\|Datenbank]]** - Jeder Service hat seine eigenen Daten
- **Technologie-Unabhängigkeit** - Verschiedene Services können verschiedene Technologien nutzen
- **Kommunikation über [[02 - RESOURCES/Notes/API\|API]]s** - Services sprechen über [[02 - RESOURCES/Notes/REST API\|REST API]] oder Message Queues

## Vergleich zu Monolithen

| Aspekt | Monolith | [[02 - RESOURCES/Notes/Microservices\|Microservices]] |
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
>- **Mehr Infrastruktur** - Braucht [[02 - RESOURCES/Notes/Docker\|Docker]], [[02 - RESOURCES/Notes/Kubernetes\|Kubernetes]], etc.
>- **Datenkonsistenz** - Schwieriger wenn jeder Service eigene [[02 - RESOURCES/Notes/Datenbank\|Datenbank]] hat
>- **Mehr Deployment-Aufwand** - Viele Services = viel zu deployen

## Service-Kommunikation

### Synchrone Kommunikation
>Service ruft anderen Service direkt auf - wartet auf Antwort.

**[[02 - RESOURCES/Notes/REST API\|REST API]]:**
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
>Services starten/stoppen dynamisch - [[02 - RESOURCES/Notes/IP-Adresse\|IP-Adresse]]n ändern sich.

**Lösung:**
- **Service Registry** - Zentrale Liste aller Services (z.B. Consul, Eureka)
- Services registrieren sich beim Start
- Services fragen Registry nach anderen Services

## API Gateway

>[!important] [[API Gateway\|API Gateway]]
>Einstiegspunkt für alle Client-Anfragen - verteilt Requests an richtige Services.

**Funktionen:**
- **Routing** - Leitet Anfragen an richtigen Service
- **[[02 - RESOURCES/Notes/Authentifizierung\|Authentifizierung]]** - Prüft Zugriffsrechte zentral
- **Rate Limiting** - Schützt vor Überlastung
- **Logging** - Zentrale Protokollierung

```
Client → API Gateway → User-Service
                    → Product-Service
                    → Order-Service
```

## Deployment

### Container-Technologie

>[!tip] [[02 - RESOURCES/Notes/Docker\|Docker]] und [[02 - RESOURCES/Notes/Kubernetes\|Kubernetes]]
>[[02 - RESOURCES/Notes/Microservices\|Microservices]] laufen meist in [[02 - RESOURCES/Notes/Docker\|Docker]]-Containern, orchestriert durch [[02 - RESOURCES/Notes/Kubernetes\|Kubernetes]].

**[[02 - RESOURCES/Notes/Docker\|Docker]]:**
- Jeder Service in eigenem Container
- Isoliert und portabel
- Einfaches Deployment

**[[02 - RESOURCES/Notes/Kubernetes\|Kubernetes]]:**
- Automatisches Deployment und Skalierung
- Self-Healing (startet abgestürzte Services neu)
- Load Balancing

## Datenverwaltung

### Database per Service Pattern

>[!important] Eigene [[02 - RESOURCES/Notes/Datenbank\|Datenbank]] pro Service
>Jeder [[02 - RESOURCES/Notes/Microservices\|Microservice]] hat seine eigene [[02 - RESOURCES/Notes/Datenbank\|Datenbank]] - kein Service greift direkt auf Daten anderer Services zu.

**Vorteile:**
- Services sind wirklich unabhängig
- Verschiedene [[02 - RESOURCES/Notes/Datenbank\|Datenbank]]-Typen pro Service möglich
- Keine Kopplungen

**Herausforderungen:**
- [[02 - RESOURCES/Notes/Datenbank\|Datenbank]]-übergreifende Transaktionen schwierig
- Daten-Duplikation manchmal nötig
- Eventual Consistency statt sofortiger Konsistenz

## Testen von [[02 - RESOURCES/Notes/Microservices\|Microservices]]

### Test-Pyramide für [[02 - RESOURCES/Notes/Microservices\|Microservices]]:

1. **[[02 - RESOURCES/Notes/Unit Test\|Unit Tests]]** - Teste einzelne Funktionen
2. **[[02 - RESOURCES/Notes/Integrationstest\|Integrationstests]]** - Teste Service mit seiner [[02 - RESOURCES/Notes/Datenbank\|Datenbank]]
3. **Contract Tests** - Teste [[02 - RESOURCES/Notes/API\|API]]-Verträge zwischen Services
4. **[[02 - RESOURCES/Notes/E2E-Test\|End-to-End Tests]]** - Teste gesamten Workflow

>[!warning] Testing-Herausforderung
>[[02 - RESOURCES/Notes/E2E-Test\|End-to-End-Tests]] sind aufwändig wenn alle Services laufen müssen - nutze Service Mocks wo möglich!

## Monitoring und Observability

>[!important] [[02 - RESOURCES/Notes/Monitoring\|Monitoring]]
>Bei verteilten Systemen ist [[02 - RESOURCES/Notes/Monitoring\|Monitoring]] kritisch!

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

## Wann [[02 - RESOURCES/Notes/Microservices\|Microservices]] nutzen?

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

- [[02 - RESOURCES/Notes/MVC\|MVC]] - Architektur-Pattern
- [[02 - RESOURCES/Notes/REST API\|REST API]] - Kommunikation zwischen Services
- [[02 - RESOURCES/Notes/Docker\|Docker]] - Container-Technologie
- [[02 - RESOURCES/Notes/Kubernetes\|Kubernetes]] - Orchestrierung
- [[API Gateway\|API Gateway]] - Einstiegspunkt
- [[Load Balancing\|Load Balancing]] - Lastverteilung
- [[02 - RESOURCES/Notes/Cloud\|Cloud]] - [[02 - RESOURCES/Notes/Microservices\|Microservices]] laufen oft in [[02 - RESOURCES/Notes/Cloud\|Cloud]]

## Zusammenfassung

>[!quote] Kern-Aussage
>[[02 - RESOURCES/Notes/Microservices\|Microservices]] teilen große Anwendungen in viele kleine, unabhängige Services auf - jeder Service macht eine spezifische Aufgabe und kann unabhängig entwickelt, deployed und skaliert werden.

**Trade-off:**
>Mehr Flexibilität und Skalierbarkeit, aber auch mehr Komplexität in Kommunikation und Deployment.
