---
{"dg-publish":true,"permalink":"/02-resources/notes/planen-eines-softwareproduktes/","tags":["ausbildung/gfn/ap2/vorbereitung"],"noteIcon":"","updated":"2025-11-24T11:31:14.001+01:00"}
---

>Dieser Teil der Prüfung dauert 90 Minuten und umfasst 100 Punkte (10% der Gesamtprüfung).
>>Hier geht es um die komplette Planung eines [[02 - RESOURCES/Notes/Software\|Software]]-Projekts - von der ersten Idee bis zur technischen Umsetzungsplanung.
___

## [[02 - RESOURCES/Notes/Projektmanagement\|Projektmanagement]]
>[[02 - RESOURCES/Notes/Projektmanagement\|Projektmanagement]] ist wie ein Bauplan für dein [[02 - RESOURCES/Notes/Software\|Software]]-Projekt - ohne Plan läuft alles durcheinander.

### [[02 - RESOURCES/Notes/Scrum\|Scrum]] - Agiles Arbeiten
>[[02 - RESOURCES/Notes/Scrum\|Scrum]] ist ein agiles Vorgehensmodell, bei dem du in kleinen Schritten (Sprints) arbeitest.

**Die wichtigsten [[02 - RESOURCES/Notes/Scrum\|Scrum]]-Rollen:**
- **Product Owner** - entscheidet was gebaut wird
- **Scrum Master** - sorgt dafür dass [[02 - RESOURCES/Notes/Scrum\|Scrum]] funktioniert
- **Development Team** - baut die [[02 - RESOURCES/Notes/Software\|Software]]

**[[02 - RESOURCES/Notes/Scrum\|Scrum]]-Events:**
- **Sprint** - Arbeitsphase von 1-4 Wochen
- **Sprint Planning** - Was machen wir im nächsten Sprint?
- **Daily Standup** - 15 Minuten Update jeden Tag
- **Sprint Review** - Was haben wir geschafft?
- **Sprint Retrospektive** - Was können wir besser machen?

>[!tip] Praktischer Hinweis
>[[02 - RESOURCES/Notes/Scrum\|Scrum]] ist seit 2025 NEU explizit im Prüfungskatalog! 🆕

### [[02 - RESOURCES/Notes/Lastenheft\|Lastenheft]] und [[02 - RESOURCES/Notes/Pflichtenheft\|Pflichtenheft]]
>Das [[02 - RESOURCES/Notes/Lastenheft\|Lastenheft]] beschreibt WAS der Kunde will, das [[02 - RESOURCES/Notes/Pflichtenheft\|Pflichtenheft]] beschreibt WIE du es umsetzt.

| [[02 - RESOURCES/Notes/Lastenheft\|Lastenheft]] | [[02 - RESOURCES/Notes/Pflichtenheft\|Pflichtenheft]] |
|----------------|-------------------|
| Vom Kunden geschrieben | Vom Entwickler geschrieben |
| "Was soll das System können?" | "Wie setzen wir das um?" |
| Grobe Anforderungen | Detaillierte technische Spezifikation |
| Grundlage für Angebote | Grundlage für Entwicklung |

### Ablaufplanung
>Die zeitliche Planung deines Projekts - wer macht wann was?

**Wichtige Planungswerkzeuge:**
- **Gantt-Diagramm** - zeigt Aufgaben auf Zeitachse
- **Netzplan** - zeigt Abhängigkeiten zwischen Aufgaben
- **Meilensteine** - wichtige Zwischenziele

___

## [[02 - RESOURCES/Notes/Softwarearchitektur\|Softwarearchitektur]]
>Die Architektur ist das Grundgerüst deiner [[02 - RESOURCES/Notes/Software\|Software]] - wie Räume in einem Haus verteilt sind.

### [[02 - RESOURCES/Notes/MVC\|MVC]] - Model View Controller
>[[02 - RESOURCES/Notes/MVC\|MVC]] trennt Daten, Darstellung und Logik - so bleibt alles übersichtlich.

- **Model** - Daten und [[02 - RESOURCES/Notes/Datenbank\|Datenbank]]-Zugriff
- **View** - [[02 - RESOURCES/Notes/User Interface\|User Interface]], was der Nutzer sieht
- **Controller** - Logik, verbindet Model und View

### Layered Architecture
>Schichten-Architektur wie Stockwerke - jede Schicht hat ihre Aufgabe.

1. **Presentation Layer** - [[02 - RESOURCES/Notes/UI\|UI]] für den Nutzer
2. **Business Logic Layer** - Geschäftslogik und Regeln
3. **Data Access Layer** - [[02 - RESOURCES/Notes/Datenbank\|Datenbank]]-Zugriff
4. **Database Layer** - Daten speichern

### [[02 - RESOURCES/Notes/Microservices\|Microservices]]
>Statt eine große [[02 - RESOURCES/Notes/Software\|Software]] baust du viele kleine Services - jeder macht eine Sache.

**Vorteile:**
- Einzelne Services können unabhängig entwickelt werden
- Verschiedene Technologien für verschiedene Services
- Skalierung nur wo nötig

**Nachteile:**
- Komplexere Kommunikation zwischen Services
- Mehr Aufwand für Deployment
- Verteilte Systeme sind schwerer zu debuggen

___

## [[02 - RESOURCES/Notes/Design Patterns\|Design Patterns]]
>[[02 - RESOURCES/Notes/Design Patterns\|Design Patterns]] sind bewährte Lösungen für typische Programmier-Probleme - wie Rezepte zum Kochen.

### [[02 - RESOURCES/Notes/Singleton\|Singleton]]
>Sorgt dafür dass es von einer [[02 - RESOURCES/Notes/Java klasse\|Klasse]] nur ein einziges [[02 - RESOURCES/Notes/Java Objekt\|Objekt]] gibt.

**Verwendung:**
- [[02 - RESOURCES/Notes/Datenbank\|Datenbank]]-Verbindung
- Logger
- Konfigurations-Manager

### [[02 - RESOURCES/Notes/Factory\|Factory-Pattern]]
>Erstellt [[02 - RESOURCES/Notes/Java Objekt\|Objekte]] ohne die genaue [[02 - RESOURCES/Notes/Java klasse\|Klasse]] zu kennen - wie eine Fabrik die Produkte herstellt.

### [[02 - RESOURCES/Notes/Observer\|Observer-Pattern]]
>Ein [[02 - RESOURCES/Notes/Java Objekt\|Objekt]] beobachtet andere und wird benachrichtigt bei Änderungen.

**Beispiel:** Newsletter-System - Abonnenten werden informiert bei neuen Artikeln

### [[02 - RESOURCES/Notes/Strategy Pattern\|Strategy Pattern]]
>Verschiedene Algorithmen austauschbar machen - wähle zur Laufzeit welcher verwendet wird.

___

## [[02 - RESOURCES/Notes/UML\|UML]] - Unified Modeling Language
>[[02 - RESOURCES/Notes/UML\|UML]] ist die Planungssprache für [[02 - RESOURCES/Notes/Software\|Software]] - damit zeichnest du deine Ideen auf bevor du programmierst.

### [[02 - RESOURCES/Notes/UML-Klassendiagramm\|UML-Klassendiagramm]]
>Zeigt Klassen mit ihren Attributen, Methoden und Beziehungen.

**Aufbau:**
```
┌─────────────────┐
│  Klassenname    │
├─────────────────┤
│ + attribut1     │ ← Attribute
│ - attribut2     │
├─────────────────┤
│ + methode1()    │ ← Methoden
│ - methode2()    │
└─────────────────┘
```

**Sichtbarkeiten:**
- **+** public - jeder kann zugreifen
- **-** private - nur die [[02 - RESOURCES/Notes/Java klasse\|Klasse]] selbst
- **#** protected - [[02 - RESOURCES/Notes/Java klasse\|Klasse]] und Unterklassen

### [[02 - RESOURCES/Notes/UML-Anwendungsfalldiagramm\|UML-Anwendungsfalldiagramm]]
>Zeigt WAS das System für WEN tun soll - die Funktionen aus Nutzersicht.

**Elemente:**
- **Akteur** - Strichmännchen (Benutzer, System)
- **Anwendungsfall** - Ovale mit Verben ("Geld abheben")
- **System-Grenze** - Rechteck um alle Anwendungsfälle

### [[02 - RESOURCES/Notes/UML-Sequenzdiagramme\|UML-Sequenzdiagramme]]
>Zeigt zeitliche Abläufe - wie Objekte miteinander kommunizieren.

**Elemente:**
- **Lebenslinien** - senkrechte gestrichelte Linien
- **Nachrichten** - Pfeile zwischen Objekten
- **Zeit** - läuft von oben nach unten

### [[02 - RESOURCES/Notes/UML-Aktivitätsdiagramm\|UML-Aktivitätsdiagramm]]
>Zeigt Ablauf und Entscheidungen - wie ein Flussdiagramm.

**Notation:**
- **Startknoten** - schwarzer Punkt ●
- **Endknoten** - Punkt im Kreis ⦿
- **Aktivität** - abgerundetes Rechteck
- **Entscheidung** - Raute ◇

___

## [[02 - RESOURCES/Notes/Softwarequalität\|Softwarequalität]]
>Qualität bedeutet: Die [[02 - RESOURCES/Notes/Software\|Software]] tut was sie soll - zuverlässig, sicher und benutzerfreundlich.

### ISO 25010 Qualitätskriterien

#### [[02 - RESOURCES/Notes/Wartbarkeit\|Wartbarkeit]]
>Wie einfach lässt sich die [[02 - RESOURCES/Notes/Software\|Software]] ändern und erweitern?

🆕 **Neu verstärkt im Katalog 2025!**

- Code ist gut strukturiert und dokumentiert
- Neue Funktionen sind einfach zu ergänzen
- Fehler sind schnell zu finden

#### [[02 - RESOURCES/Notes/Änderbarkeit\|Änderbarkeit]] und [[02 - RESOURCES/Notes/Erweiterbarkeit\|Erweiterbarkeit]]
>Kann die [[02 - RESOURCES/Notes/Software\|Software]] an neue Anforderungen angepasst werden?

- Modularer Aufbau ermöglicht Änderungen
- Klare Schnittstellen zwischen Komponenten
- Änderungen haben minimale Auswirkungen

#### Weitere Qualitätskriterien:
- **Funktionale Vollständigkeit** - Sind alle Funktionen da?
- **Funktionale Korrektheit** - Funktioniert alles richtig?
- **[[02 - RESOURCES/Notes/Usability\|Gebrauchstauglichkeit]]** - Ist es einfach zu bedienen?
- **Sicherheit** - Sind Daten geschützt?
- **Zuverlässigkeit** - Läuft es stabil?
- **Performanz** - Ist es schnell genug?

___

## Anforderungsanalyse
>Was soll die [[02 - RESOURCES/Notes/Software\|Software]] eigentlich können? Hier sammelst du alle Anforderungen.

### Funktionale Anforderungen
>Beschreiben WAS das System können muss.

**Beispiele:**
- "Der Nutzer kann sich einloggen"
- "Das System kann PDFs erstellen"
- "Daten werden in der [[02 - RESOURCES/Notes/Datenbank\|Datenbank]] gespeichert"

### Nicht-funktionale Anforderungen
>Beschreiben WIE gut das System funktionieren muss.

**Beispiele:**
- **Performance:** "Login in unter 2 Sekunden"
- **Sicherheit:** "Passwörter [[02 - RESOURCES/Notes/Passwort-Hashing\|gehasht]] speichern"
- **[[02 - RESOURCES/Notes/Usability\|Usability]]:** "Bedienung ohne Schulung möglich"
- **[[02 - RESOURCES/Notes/Verfügbarkeit\|Verfügbarkeit]]:** "99,9% Uptime"

___

## Testing-Konzepte
>Tests finden Fehler bevor der Kunde sie findet - je früher desto besser!

### [[02 - RESOURCES/Notes/Test Driven Development\|Test Driven Development]] (TDD)
>Erst den Test schreiben, dann den Code - so bist du sicher dass alles getestet ist.

🆕 **Neu im Katalog 2025!**

**TDD-Zyklus:**
1. **Red** - Test schreiben der fehlschlägt
2. **Green** - Minimalen Code schreiben damit Test läuft
3. **Refactor** - Code verbessern ohne Funktionalität zu ändern

### Test-Pyramide
>Viele kleine Tests, wenige große Tests.

```
        /\
       /E2E\      ← Wenige End-to-End Tests
      /──────\
     /Integr.\   ← Mittlere Anzahl Integrationstests
    /──────────\
   /Unit Tests \  ← Viele Unit Tests
  /──────────────\
```

### [[02 - RESOURCES/Notes/Last- und Performancetest\|Last- und Performancetest]]
>Wie verhält sich die [[02 - RESOURCES/Notes/Software\|Software]] unter Last?

🆕 **Neu im Katalog 2025!**

**Was wird getestet:**
- Wie viele gleichzeitige Nutzer verkraftet das System?
- Wie schnell reagiert es unter Last?
- Wo sind die Engpässe?

___

## Datenbankentwurf
>Eine gute [[02 - RESOURCES/Notes/Datenbank\|Datenbank]]-Struktur ist das Fundament - schlecht geplant wird es später teuer.

### [[02 - RESOURCES/Notes/ER-Modell\|ER-Modell]]
>Entity-Relationship-Modell zeigt Entitäten und ihre Beziehungen.

**Elemente:**
- **Entitäten** - Dinge über die du Daten speicherst (Kunde, Bestellung)
- **Attribute** - Eigenschaften (Name, Preis, Datum)
- **Beziehungen** - Wie hängen Entitäten zusammen?

### [[02 - RESOURCES/Notes/Kardinalität\|Kardinalität]]
>Beschreibt wie viele Entitäten zueinander in Beziehung stehen.

- **1:1** - Ein Kunde hat eine Kundennummer
- **1:n** - Ein Kunde hat viele Bestellungen
- **n:m** - Viele Produkte in vielen Bestellungen

### Normalisierung
>Daten so organisieren dass keine Redundanzen entstehen.

#### [[02 - RESOURCES/Notes/1. Normalform\|1. Normalform]]
- Jede Tabellenzelle enthält nur einen Wert
- Keine Listen in Zellen

#### [[02 - RESOURCES/Notes/2. Normalform\|2. Normalform]]
- Erfüllt [[02 - RESOURCES/Notes/1. Normalform\|1. Normalform]]
- Alle Attribute hängen vom kompletten Primärschlüssel ab

#### [[02 - RESOURCES/Notes/3. Normalform\|3. Normalform]]
- Erfüllt [[02 - RESOURCES/Notes/2. Normalform\|2. Normalform]]
- Keine Abhängigkeiten zwischen Nicht-Schlüssel-Attributen

### [[02 - RESOURCES/Notes/Anomalien\|Anomalien]] und [[02 - RESOURCES/Notes/Redundanzen\|Redundanzen]]
>Probleme die entstehen wenn die [[02 - RESOURCES/Notes/Datenbank\|Datenbank]] schlecht strukturiert ist.

🆕 **Verstärkt im Katalog 2025!**

**Arten von Anomalien:**
- **Einfüge-Anomalie** - Du kannst Daten nicht speichern ohne andere Daten
- **Update-Anomalie** - Daten müssen an mehreren Stellen geändert werden
- **Lösch-Anomalie** - Beim Löschen gehen ungewollt andere Daten verloren

**[[02 - RESOURCES/Notes/Redundanzen\|Redundanzen]]:**
- Gleiche Daten mehrfach gespeichert
- Verschwendet [[02 - RESOURCES/Notes/Speicher\|Speicher]]
- Führt zu Inkonsistenzen

___

## Schnittstellen
>Schnittstellen verbinden verschiedene Systeme - wie Steckdosen für Daten.

### [[02 - RESOURCES/Notes/REST API\|REST API]]
>Standard-Weg für [[02 - RESOURCES/Notes/Software\|Software]] um über HTTP zu kommunizieren.

**HTTP-Methoden:**
- **GET** - Daten abrufen
- **POST** - Neue Daten erstellen
- **PUT** - Daten aktualisieren
- **DELETE** - Daten löschen

### [[02 - RESOURCES/Notes/ODBC\|ODBC]]
>Open Database Connectivity - Standard-Schnittstelle für [[02 - RESOURCES/Notes/Datenbank\|Datenbank]]-Zugriff.

🆕 **Neu im Katalog 2025!**

- Ermöglicht einheitlichen Zugriff auf verschiedene [[02 - RESOURCES/Notes/Datenbank\|Datenbank]]en
- Anwendung muss nicht wissen welche [[02 - RESOURCES/Notes/Datenbank\|Datenbank]] dahinter steckt

### Datenaustauschformate

#### [[02 - RESOURCES/Notes/JSON\|JSON]]
>JavaScript Object Notation - leichtgewichtig und lesbar.

```json
{
  "name": "Max Mustermann",
  "alter": 25,
  "skills": ["Java", "Python"]
}
```

#### [[02 - RESOURCES/Notes/XML\|XML]]
>Extensible Markup Language - strukturiert und erweiterbar.

```xml
<person>
  <name>Max Mustermann</name>
  <alter>25</alter>
</person>
```

#### [[02 - RESOURCES/Notes/CSV\|CSV]]
>Comma-Separated Values - einfachstes Format für Tabellen.

```
Name,Alter,Stadt
Max,25,Berlin
Anna,30,Hamburg
```

___

## Security-Konzepte
>Sicherheit muss von Anfang an mitgedacht werden - nachträglich wird es teuer.

### [[02 - RESOURCES/Notes/SQL Injection\|SQL Injection]]
>Angreifer schmuggeln SQL-Code in Eingabefelder ein.

🆕 **Neu im Katalog 2025!**

**Beispiel Angriff:**
```sql
' OR '1'='1
```

**Schutz:**
- Prepared Statements verwenden
- Eingaben validieren
- Niemals SQL aus Nutzereingaben bauen

### [[02 - RESOURCES/Notes/DDOS Attack\|DDoS Attack]]
>Distributed Denial of Service - System mit Anfragen überlasten.

🆕 **Neu im Katalog 2025!**

**Wie funktioniert es:**
- Viele Computer greifen gleichzeitig an
- Server ist überlastet und fällt aus
- Legitime Nutzer kommen nicht mehr rein

**Schutz:**
- Rate Limiting
- CDN verwenden
- Traffic-Filterung

### [[02 - RESOURCES/Notes/Man-in-the-Middle Attack\|Man-in-the-Middle Attack]]
>Angreifer sitzt zwischen Kommunikationspartnern und hört mit.

🆕 **Neu im Katalog 2025!**

**Schutz:**
- [[02 - RESOURCES/Notes/HTTPS\|HTTPS]] verwenden
- Zertifikate prüfen
- Keine öffentlichen WLANs für sensible Daten

### [[02 - RESOURCES/Notes/Kerberos\|Kerberos]]
>Authentifizierungs-Protokoll für sichere Zugriffskontrolle.

🆕 **Neu im Katalog 2025!**

- Nutzt Tickets für Authentifizierung
- Keine Passwörter über Netzwerk
- Standard in Windows Active Directory

___

## Dokumentation
>Gute Dokumentation spart Zeit - für dich und andere Entwickler.

### [[02 - RESOURCES/Notes/Programm- und Konfigurationsdokumentation\|Programm- und Konfigurationsdokumentation]]
>Beschreibt wie die [[02 - RESOURCES/Notes/Software\|Software]] funktioniert und konfiguriert wird.

🆕 **Neu explizit im Katalog 2025!**

**Programmdokumentation:**
- Code-Kommentare
- [[02 - RESOURCES/Notes/API\|API]]-Dokumentation
- Architektur-Übersicht

**Konfigurationsdokumentation:**
- Welche Einstellungen gibt es?
- Was bedeuten die Parameter?
- Wie wird das System aufgesetzt?

___

## System-Architektur
>Wie sind die verschiedenen Teile des Systems verteilt?

### Client-Server
>Server stellt Dienste bereit, Clients nutzen diese.

**Vorteile:**
- Zentrale Datenhaltung
- Einfache Wartung
- Zentrale Sicherheit

### [[02 - RESOURCES/Notes/NAS\|NAS]] und [[02 - RESOURCES/Notes/SAN\|SAN]]
>Spezialisierte Speicherlösungen für Netzwerke.

🆕 **Explizit neu im Katalog 2025!**

| [[02 - RESOURCES/Notes/NAS\|NAS]] | [[02 - RESOURCES/Notes/SAN\|SAN]] |
|---------|---------|
| Network Attached Storage | Storage Area Network |
| Datei-basiert | Block-basiert |
| Über Netzwerk wie ein Ordner | Wie eine lokale [[02 - RESOURCES/Notes/Festplatte\|Festplatte]] |
| Einfacher einzurichten | Schneller und professioneller |

### [[02 - RESOURCES/Notes/Cloud\|Cloud]] vs [[02 - RESOURCES/Notes/On-Premises\|On-Premises]]
>Hosting in der Cloud oder auf eigenen Servern?

| [[02 - RESOURCES/Notes/Cloud\|Cloud]] | [[02 - RESOURCES/Notes/On-Premises\|On-Premises]] |
|-----------|-----------------|
| Server bei Anbieter | Eigene Server im [[02 - RESOURCES/Notes/Betrieb\|Betrieb]] |
| Flexibel skalierbar | Fixe Kapazität |
| Monatliche Kosten | Hohe Anfangsinvestition |
| Schnell verfügbar | Längere Setupzeit |

**Cloud-Modelle:**
- **[[02 - RESOURCES/Notes/SaaS\|SaaS]]** - Software as a Service (z.B. Microsoft 365)
- **[[02 - RESOURCES/Notes/PaaS\|PaaS]]** - Platform as a Service (z.B. Azure App Service)
- **[[02 - RESOURCES/Notes/IaaS\|IaaS]]** - Infrastructure as a Service (z.B. virtuelle Server)
