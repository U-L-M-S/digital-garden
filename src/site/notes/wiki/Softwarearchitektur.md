---
{"dg-publish":true,"permalink":"/wiki/softwarearchitektur/","tags":["informatik/softwareentwicklung","ausbildung/gfn/ap2/vorbereitung","architektur/software"],"noteIcon":"","updated":"2025-11-07T15:12:00.000+01:00","dg-note-properties":{"tags":["informatik/softwareentwicklung","ausbildung/gfn/ap2/vorbereitung","architektur/software"],"aliases":["Software-Architektur","Architektur","Software Architecture"],"links":null,"created_date":"2025-11-07"}}
---

>**Softwarearchitektur** beschreibt die grundlegende Struktur und Organisation eines [[wiki/Software\|Software]]-Systems.
>>Sie definiert die Hauptkomponenten, ihre Beziehungen zueinander und die Prinzipien, nach denen das System aufgebaut ist.

>[!important] Warum ist Softwarearchitektur wichtig?
>Eine gute Architektur ist das Fundament für:
>- **[[wiki/Wartbarkeit\|Wartbarkeit]]** - Code lässt sich einfacher ändern
>- **Skalierbarkeit** - System kann wachsen
>- **[[wiki/Erweiterbarkeit\|Erweiterbarkeit]]** - Neue Funktionen hinzufügen
>- **Verständlichkeit** - Entwickler finden sich schnell zurecht
>- **Wiederverwendbarkeit** - Komponenten können mehrfach genutzt werden

---

# Architekturmuster

## [[wiki/MVC\|MVC]] - Model View Controller

>[[wiki/MVC\|MVC]] trennt die Anwendung in drei Hauptkomponenten:

**Die drei Schichten:**
- **Model** - Daten und [[wiki/Datenbank\|Datenbank]]-Logik
- **View** - [[wiki/User Interface\|Benutzeroberfläche]]
- **Controller** - Vermittelt zwischen Model und View

>[!example] Beispiel: Web-Anwendung
>```
>┌──────────┐
>│   View   │ ← Zeigt Daten an (HTML, CSS)
>└─────┬────┘
>      │
>┌─────▼────────┐
>│  Controller  │ ← Verarbeitet Anfragen
>└─────┬────────┘
>      │
>┌─────▼────┐
>│  Model   │ ← Datenbankzugriff
>└──────────┘
>```
>
>**Ablauf:**
>1. Benutzer klickt Button (View)
>2. Controller empfängt Request
>3. Controller fragt Model nach Daten
>4. Model holt Daten aus [[wiki/Datenbank\|Datenbank]]
>5. Controller gibt Daten an View
>6. View zeigt Ergebnis an

**Vorteile:**
- ✅ Klare Trennung der Verantwortlichkeiten
- ✅ Testbarkeit (jede Komponente einzeln testbar)
- ✅ Mehrere Views für ein Model möglich

---

## Layered Architecture (Schichtenarchitektur)

>Die Anwendung wird in horizontale Schichten aufgeteilt, wobei jede Schicht nur mit der darunterliegenden kommuniziert.

```
┌─────────────────────────────────┐
│  Presentation Layer (UI)        │ ← Benutzeroberfläche
├─────────────────────────────────┤
│  Business Logic Layer           │ ← Geschäftslogik
├─────────────────────────────────┤
│  Data Access Layer              │ ← Datenbankzugriff
├─────────────────────────────────┤
│  Database Layer                 │ ← Datenspeicherung
└─────────────────────────────────┘
```

**Die 4 Schichten:**

### 1. Presentation Layer (Präsentationsschicht)
- Zeigt Daten dem Benutzer
- Nimmt Eingaben entgegen
- Technologien: HTML, React, JavaFX

### 2. Business Logic Layer (Geschäftslogik)
- Enthält die Geschäftsregeln
- Verarbeitet Daten
- Validiert Eingaben
- Beispiel: "Ein Kunde darf maximal 10.000€ Kredit haben"

### 3. Data Access Layer (Datenzugriffsschicht)
- Kommuniziert mit der [[wiki/Datenbank\|Datenbank]]
- [[wiki/ODBC\|ODBC]], [[wiki/REST API\|REST API]], ORM-Frameworks
- Kapselt SQL-Abfragen

### 4. Database Layer (Datenbankschicht)
- Speichert die Daten
- MySQL, PostgreSQL, MongoDB

>[!success] Vorteile
>- ✅ Klare Strukturierung
>- ✅ Austauschbarkeit einzelner Schichten
>- ✅ Einfache Wartung
>- ✅ Wiederverwendbarkeit

>[!warning] Nachteile
>- ❌ Kann zu starr sein
>- ❌ Performance-Overhead durch Schichten
>- ❌ Änderungen durchlaufen alle Schichten

---

## [[wiki/Microservices\|Microservices]]-Architektur

>Statt einer großen Anwendung (Monolith) baut man viele kleine, unabhängige Services.

```
┌─────────────┐  ┌─────────────┐  ┌─────────────┐
│   User      │  │   Payment   │  │   Order     │
│   Service   │  │   Service   │  │   Service   │
└──────┬──────┘  └──────┬──────┘  └──────┬──────┘
       │                │                │
       └────────────────┼────────────────┘
                        │
                  ┌─────▼─────┐
                  │  API      │
                  │  Gateway  │
                  └───────────┘
```

**Charakteristiken:**
- Jeder Service hat seine eigene [[wiki/Datenbank\|Datenbank]]
- Services kommunizieren über [[wiki/REST API\|REST API]] oder Message Queues
- Unabhängig deploybar
- Können in verschiedenen Programmiersprachen geschrieben sein

>[!success] Vorteile
>- ✅ Unabhängige Entwicklung und Deployment
>- ✅ Skalierbarkeit (nur benötigte Services skalieren)
>- ✅ Fehler isoliert (ein Service-Ausfall ≠ Gesamtausfall)
>- ✅ Technologie-Freiheit

>[!warning] Nachteile
>- ❌ Komplexere Kommunikation
>- ❌ Verteilte Systeme schwerer zu debuggen
>- ❌ Mehr Deployment-Aufwand
>- ❌ Netzwerk-Latenz zwischen Services

---

## Client-Server-Architektur

>Der **Server** stellt Dienste bereit, die **Clients** nutzen.

```
┌─────────┐  ┌─────────┐  ┌─────────┐
│ Client  │  │ Client  │  │ Client  │
│  (PC)   │  │ (Handy) │  │ (Web)   │
└────┬────┘  └────┬────┘  └────┬────┘
     │            │            │
     └────────────┼────────────┘
                  │
            ┌─────▼─────┐
            │  Server   │
            │           │
            └─────┬─────┘
                  │
            ┌─────▼─────┐
            │ Datenbank │
            └───────────┘
```

**Vorteile:**
- ✅ Zentrale Datenhaltung
- ✅ Einfache Wartung (nur Server updaten)
- ✅ Zentrale Sicherheit
- ✅ Ressourcen-Sharing

**Nachteile:**
- ❌ Single Point of Failure (Server fällt aus → alle betroffen)
- ❌ Netzwerk erforderlich
- ❌ Server kann Engpass werden

---

## Monolithische Architektur

>Die gesamte Anwendung ist ein einziges, großes Programm.

```
┌─────────────────────────────────┐
│                                 │
│      Monolithische App          │
│                                 │
│  ┌────────┐  ┌────────┐        │
│  │   UI   │  │ Logic  │        │
│  └────────┘  └────────┘        │
│                                 │
│  ┌──────────────────┐          │
│  │    Database      │          │
│  └──────────────────┘          │
│                                 │
└─────────────────────────────────┘
```

**Vorteile:**
- ✅ Einfach zu entwickeln (für kleine Teams)
- ✅ Einfach zu deployen (eine Datei)
- ✅ Einfach zu testen
- ✅ Keine Netzwerk-Latenz zwischen Komponenten

**Nachteile:**
- ❌ Schwer skalierbar
- ❌ Ein Fehler kann alles zum Absturz bringen
- ❌ Große Code-Basis schwer wartbar
- ❌ Technologie-Lock-in

---

# Architekturprinzipien

## Separation of Concerns (Trennung der Zuständigkeiten)

>Jede Komponente sollte **eine klare Aufgabe** haben.

>[!example] Beispiel
>❌ **Schlecht**: Eine [[wiki/Klasse\|Klasse]] macht Datenbankzugriff, UI-Rendering UND Geschäftslogik
>
>✅ **Gut**:
>- `UserRepository` - Datenbankzugriff
>- `UserService` - Geschäftslogik
>- `UserController` - UI-Logik

## Loose Coupling (Lose Kopplung)

>Komponenten sollten **möglichst unabhängig** voneinander sein.

**Vorteil:** Änderungen in einer Komponente beeinflussen andere nicht.

## High Cohesion (Hohe Kohäsion)

>Verwandte Funktionen sollten **zusammen** in einer Komponente sein.

## Don't Repeat Yourself (DRY)

>Vermeide Code-Duplikation - schreibe wiederverwendbare Komponenten.

---

# Architekturentscheidungen

>[!question] Welche Architektur wählen?

**Kleine Anwendung, kleines Team:**
→ **Monolith** oder **Layered Architecture**

**Mittlere Anwendung, klare Trennung UI/Logik/Daten:**
→ **[[wiki/MVC\|MVC]]** oder **Layered Architecture**

**Große Anwendung, viele Teams, hohe Skalierung:**
→ **[[wiki/Microservices\|Microservices]]**

**Web-Anwendung:**
→ **Client-Server** mit **[[wiki/MVC\|MVC]]**

---

# Cloud vs. On-Premises

| Aspekt | [[wiki/Cloud\|Cloud]] | [[wiki/On-Premises\|On-Premises]] |
|--------|-----------|-----------------|
| **Hosting** | Server bei Anbieter | Eigene Server |
| **Kosten** | Monatlich (OpEx) | Anfangsinvestition (CapEx) |
| **Skalierung** | Flexibel | Fixe Kapazität |
| **Wartung** | Anbieter | Eigenes IT-Team |
| **Kontrolle** | Begrenzt | Volle Kontrolle |
| **Setup-Zeit** | Minuten | Wochen/Monate |

**Cloud-Modelle:**
- **[[wiki/SaaS\|SaaS]]** - Software as a Service (z.B. Microsoft 365)
- **[[wiki/PaaS\|PaaS]]** - Platform as a Service (z.B. Azure App Service)
- **[[wiki/IaaS\|IaaS]]** - Infrastructure as a Service (z.B. AWS EC2)

---

# Speicher-Architekturen

## [[wiki/NAS\|NAS]] - Network Attached Storage

>Datei-basierter Speicher im Netzwerk - wie ein gemeinsamer Ordner.

**Verwendung:**
- Datei-Sharing
- Backup-Speicher
- Medienserver

## [[wiki/SAN\|SAN]] - Storage Area Network

>Block-basierter Speicher - wie eine lokale [[Festplatte\|Festplatte]] über Netzwerk.

**Verwendung:**
- [[wiki/Datenbank\|Datenbank]]-Server
- Virtualisierung
- Hochperformante Anwendungen

| [[wiki/NAS\|NAS]] | [[wiki/SAN\|SAN]] |
|---------|---------|
| Datei-basiert | Block-basiert |
| Einfach einzurichten | Komplex |
| Günstiger | Teurer |
| Langsamer | Schneller |

---

# Best Practices

>[!success] Gute Architektur
>- ✅ **Modular** - Komponenten unabhängig austauschbar
>- ✅ **Dokumentiert** - Architektur-Diagramme und Beschreibungen
>- ✅ **Testbar** - Komponenten isoliert testbar
>- ✅ **Skalierbar** - System kann wachsen
>- ✅ **Sicher** - Security von Anfang an mitgedacht
>- ✅ **Performance** - Engpässe vermeiden

>[!warning] Häufige Fehler
>- ❌ Keine klare Architektur (Code wächst chaotisch)
>- ❌ Zu komplexe Architektur für einfache Probleme
>- ❌ Architektur nicht dokumentiert
>- ❌ Komponenten zu stark gekoppelt
>- ❌ Security als Nachgedanke

---

**Siehe auch:**
- [[wiki/MVC\|MVC]]
- [[wiki/Microservices\|Microservices]]
- [[wiki/Design Patterns\|Design Patterns]]
- [[wiki/Softwarequalität\|Softwarequalität]]
- [[wiki/Wartbarkeit\|Wartbarkeit]]
- [[wiki/UML\|UML]]
- [[wiki/REST API\|REST API]]
