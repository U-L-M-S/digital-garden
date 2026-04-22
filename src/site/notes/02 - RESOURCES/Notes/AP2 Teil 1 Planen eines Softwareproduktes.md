---
{"dg-publish":true,"permalink":"/02-resources/notes/ap-2-teil-1-planen-eines-softwareproduktes/","tags":["ausbildung/gfn/ap2/vorbereitung"],"noteIcon":"","updated":"2026-04-14T22:24:23.930+02:00"}
---


> **Prüfung:** 29.04.2026 | **Bundesland:** BaWü (IHK Südlicher Oberrhein) | **Ziel:** Note 2 (≥81 Pts) **Quellen:** IT-Berufe-Podcast #191/#192 (Stefan Macke), Prüfungskatalog 2025, 7 Altklausuren S22–W25, ap2.online **Stand:** 14.04.2026

> ⚠ **BaWü-Hinweis (Macke, 13.04.2026):** Der neue Katalog gilt offiziell nicht zwingend für BaWü. Beobachtung: S2025 + W2025 BaWü-Prüfungen enthielten aber schon Neu-Katalog-Themen (Hash/Salt, Factory, eRechnung). → Neuen Katalog als Basis, Altkatalog-Themen nicht vernachlässigen.

---

## 1. Reform 2025 — Übersicht

### 1.1 Gestrichene Themen

|Thema|Unterthema|Kommentar|
|---|---|---|
|Trends|Smart Grid, IoT, Industrie 4.0, KI, Blockchain, Big Data, AR|Alle aus dem alten Trend-Katalog raus|
|Algorithmen-Darstellung|Struktogramm (Nassi-Shneiderman), PAP|Ersetzt durch Aktivitätsdiagramm + Pseudocode|
|Netzwerk|Load Balancing|Entfallen|
|Datenhaltung|Data Warehouse|Entfallen|
|Programmierung|Programmierparadigma (Skript-/Compilersprache etc.)|Entfallen|

### 1.2 Neue / erweiterte Themen

|Thema|Unterthema|Wichtig|
|---|---|---|
|Datenbanken|Anomalien/Redundanzen erkennen|🔴|
|Datenbanken|SQL-Beiblatt (2 Seiten, liegt Prüfung bei)|🔴|
|Qualität|Last-/Performance-Tests|🟡|
|Qualität|TDD (Test Driven Development)|🔴 (noch nie geprüft!)|
|Security|Bedrohungsszenarien: MitM, SQL-Injection, DDoS|🔴|
|Security|Kerberos|🔴|
|Netzwerk|NAS, SAN|🔴|
|Netzwerk|ODBC|🟡|
|Netzwerk|Dateifreigaben (SMB/CIFS)|🟡|
|Betrieb|Monitoring + Schwellwerte|🟡|
|Betrieb|Programm-/Konfigurationsdokumentation|🟡|
|Betrieb|Eskalationsstufen (Incident Mgmt)|🟡|
|Architektur|CPS (Cyber-physische Systeme)|🔴 (neu für FIAE)|
|Architektur|Architektur-Pattern (MVC, Microservices)|🔴|
|OOP|Kapselung explizit|🔴|
|Algorithmen|Bubble/Selection/Insertion Sort|🔴 (jetzt alle drei)|
|Software-Qualität|Änderbarkeit/Erweiterbarkeit, Wartbarkeit (ISO 25010)|🟡|
|PM|Scrum explizit im Katalog|🔴|
|PM|Lasten-/Pflichtenheft|🟡|

### 1.3 Unveränderte Dauerbrenner

|Thema|Status|
|---|---|
|UML-Diagramme (Klasse, Use-Case, Aktivität, Sequenz, Zustand)|In jeder Prüfung|
|ERM + Normalisierung (1.–3. NF)|Sehr häufig|
|Stakeholder-Analyse|Dauerbrenner|
|Vorgehensmodelle klassisch vs. agil|Dauerbrenner|
|Verschlüsselung (symmetrisch/asymmetrisch/hybrid/TLS)|Häufig|
|Mockup / Softwareergonomie|Häufig|
|Design Patterns (Singleton, Factory, Observer, Strategy)|Häufig|
|Pseudocode|Häufig|

---

## 2. Vollständige Themenliste Neuer Katalog 2025

Legende: 🔴 hoch | 🟡 mittel | 🟢 niedrig | Hist. = Anzahl Auftritte in den 7 analysierten Klausuren S22–W25

### 2.1 Projektmanagement & Anforderungen

|Thema|Unterpunkt|Unterunterpunkt|Hist.|Wahrsch. S26|Typ. Pts|Status|
|---|---|---|:-:|:-:|:-:|:-:|
|Vorgehensmodelle|Klassisch (Wasserfall, V-Modell XT, Spiralmodell)|Phasen, starre Planung|4/7|🔴|4–8|Dauerbrenner|
|Vorgehensmodelle|Agil (Scrum, Kanban, XP)|Sprints, Iterationen|4/7|🔴|4–8|Neu im Katalog|
|Scrum|Rollen|PO, SM, Team|2/7|🔴|2–6|NEU expl.|
|Scrum|Artefakte|Product/Sprint Backlog, Increment|2/7|🔴|2–4|NEU expl.|
|Scrum|Events|Sprint, Daily, Review, Retro|2/7|🔴|2–4|NEU expl.|
|Stakeholder-Analyse|Identifikation|Intern / Extern|5/7|🔴|5–12|Dauerbrenner|
|Stakeholder-Analyse|Erwartung/Befürchtung + Maßnahme|Tabellenform|5/7|🔴|6–12|Dauerbrenner|
|Anforderungen|Funktional vs. nicht-funktional|Bsp. Performance, Verfügbarkeit|2/7|🟡|4–12|Altkatalog|
|Anforderungen|User Stories + INVEST|Independent, Negotiable, Valuable, Estimable, Small, Testable|1/7|🟡|3–6|Mittel|
|Anforderungen|Lasten-/Pflichtenheft|Soll-/Ist-Zustand|0/7|🟡|4–6|NEU|
|Machbarkeitsanalyse|Technisch/Wirtschaftlich/Organisatorisch/Rechtlich|Kriterien|2/7|🟢|6–8|Gerade geprüft|
|Risikoanalyse|Problem → Risiko → Maßnahme|Tabellenform|1/7|🟢|8|Gerade geprüft|
|Change Request Mgmt|CR-Prozess|Bewertung, Priorisierung|1/7|🟡|3|Altkatalog|
|Meilensteine / Lessons Learned|Definition|—|1/7|🟡|3–6|Altkatalog|

### 2.2 UML-Diagramme

|Thema|Unterpunkt|Hist.|Wahrsch. S26|Typ. Pts|Status|
|---|---|:-:|:-:|:-:|:-:|
|Use-Case-Diagramm|Akteure, include/extend, Vererbung|3/7|🟡|6–18|Gerade W25 (18P)|
|Klassendiagramm|Attribute, Methoden, Sichtbarkeiten, Assoziation/Aggregation/Komposition, Vererbung|3/7|🔴|7–17|Überfällig|
|Aktivitätsdiagramm|Verzweigung, Fork/Join, Swimlanes|3/7|🟡|14–17|Gerade S25 (17P)|
|Sequenzdiagramm|sync/async-Pfeile, alt/opt/loop-Fragmente, Aktivierungsbalken|2/7|🔴|9–11|2-Jahres-Rhythmus (S22→S24→S26?)|
|Zustandsdiagramm|Zustände, Übergänge, Guards|2/7|🟡|11–15|Alle 2 Jahre|
|Komponenten-/Verteilungsdiagramm|Interfaces, Knoten|0/7|🟢|—|Kaum geprüft|

### 2.3 Datenbanken

|Thema|Unterpunkt|Unterunterpunkt|Hist.|Wahrsch. S26|Typ. Pts|Status|
|---|---|---|:-:|:-:|:-:|:-:|
|ERM|Entitäten, Attribute, Beziehungen, Kardinalitäten (1:1, 1:n, m:n)|Crow's Foot / Chen|3/7|🟡|10–16|Gerade S25 (16P)|
|Normalisierung|1./2./3. NF|"the key, the whole key, and nothing but the key"|1/7|🟢|16|Gerade W25|
|Anomalien|Änderungs-, Einfüge-, Löschanomalie|Beispiel aus Tabelle|1/7|🟡|6|NEU expl.|
|Redundanz|Definition, Erkennen|—|1/7|🟡|2|NEU expl.|
|Relationales Datenbankmodell|PK, FK, Beziehungen auflösen|—|1/7|🟡|16|Gerade W25|
|SQL|SELECT-Aufbau (FROM, WHERE, GROUP BY, HAVING, ORDER BY)|DQL|0/7 PS|🟡|—|Eher EUA|
|SQL|JOINs (INNER, LEFT, RIGHT, FULL)|—|0/7 PS|🟡|—|Eher EUA|
|SQL|Aggregatfunktionen (COUNT, SUM, AVG)|—|0/7 PS|🟡|—|Eher EUA|
|ACID|Atomicity, Consistency, Isolation, Durability|—|1/7|🟡|8|Mittel|
|NoSQL|Dokumentenbasiert (MongoDB), Key/Value, Graph|vs. SQL|2/7|🟡|9–14|Mittel|
|NoSQL|JSON-Dokumente modellieren|Verschachtelung|1/7|🟡|7–14|Mittel|

### 2.4 Objektorientierung & Programmierung

|Thema|Unterpunkt|Unterunterpunkt|Hist.|Wahrsch. S26|Typ. Pts|Status|
|---|---|---|:-:|:-:|:-:|:-:|
|OOP-Prinzipien|Kapselung|private/public/protected, Getter/Setter|0/7 expl.|🔴|3–6|NEU expl.|
|OOP-Prinzipien|Vererbung / Spezialisierung|IS-A Beziehung|1/7|🟡|3|Mittel|
|OOP-Prinzipien|Polymorphie|Overriding, dynamische Bindung|0/7|🟡|3–5|Selten|
|OOP-Prinzipien|Abstraktion / abstrakte Klassen|—|1/7|🟡|6–9|S25 gefragt|
|OOP-Prinzipien|Interface|vs. abstrakte Klasse|1/7|🟡|3|Selten|
|OOP-Beziehungen|Aggregation vs. Komposition|gefüllte vs. leere Raute|1/7|🔴|3–5|Häufig in Klassendiagrammen|
|OOP-Beziehungen|Multiplizitäten (1, _, 0..1, 1.._)|—|1/7|🔴|3|Häufig in Klassendiagrammen|
|Generics|Generische Klassen (List<T>)|—|0/7|🟢|2|Selten|
|Design Patterns|Singleton|Eine Instanz, private Constructor|0/7|🟡|3–6|Überfällig|
|Design Patterns|Factory (Method / Abstract)|Objekterzeugung delegieren|1/7|🟡|12|Gerade S25|
|Design Patterns|Observer|1:n-Benachrichtigung|1/7|🟡|10|Alle 2–3 Jahre|
|Design Patterns|Strategy|Austauschbare Algorithmen|0/7|🟡|3–5|Selten|
|Design Patterns|Adapter, Decorator, Iterator|—|0/7|🟢|2–3|Nice-to-know|
|Architektur-Pattern|MVC|Model/View/Controller|0/7|🔴|3–6|NEU, überfällig|
|Architektur-Pattern|Microservices|vs. Monolith|0/7|🟢|2–4|NEU|
|Architektur-Pattern|3-Schicht-Architektur|Präsentation/Logik/Daten|0/7|🟡|4|NEU|
|Algorithmen|Bubble/Selection/Insertion Sort|Ablauf, Pseudocode|0/7 PS|🟡|4–6|NEU expl. (eher EUA)|
|Algorithmen|Lineare / Binäre Suche|—|0/7 PS|🟢|—|Eher EUA|
|Pseudocode|OO-Syntax (`for each`, `method.add()`, `if/else`)|Sprachneutral|3/7|🔴|4–15|Dauerbrenner|

### 2.5 IT-Sicherheit & Datenschutz

|Thema|Unterpunkt|Unterunterpunkt|Hist.|Wahrsch. S26|Typ. Pts|Status|
|---|---|---|:-:|:-:|:-:|:-:|
|Verschlüsselung|Symmetrisch (AES)|Schneller, Shared-Secret nötig|1/7|🟡|3|Mittel|
|Verschlüsselung|Asymmetrisch (RSA)|Public/Private Key|1/7|🟡|3|Mittel|
|Verschlüsselung|Hybrid (TLS/SSL)|Asymm. für Key-Exchange, symm. für Daten|3/7|🔴|4–9|Dauerbrenner. ⚠ TLS = HYBRID (nicht asymmetrisch!)|
|Hash-Funktionen|SHA-256, MD5|Einwegfunktion|1/7|🔴|3|NEU S25|
|Hash + Salt|Passwort-Speicherung|Gegen Rainbow Tables|1/7|🔴|3|NEU expl.|
|Zertifikate|X.509, CA, Signaturen|Vertrauenskette|2/7|🟡|3–9|Mittel|
|Authentifizierung|OAuth2|Resource Owner/Server, Access Token, Auth Code|1/7|🟡|4|Mittel|
|Authentifizierung|Kerberos|Ticket-basiert, KDC|0/7|🔴|3–5|NEU expl.|
|Authentifizierung|SSO / Identity Provider|Vor-/Nachteile|1/7|🟡|6|Mittel|
|Bedrohungen|Man-in-the-Middle (MitM)|Abfangen + Manipulation|0/7|🔴|3–5|NEU expl.|
|Bedrohungen|SQL-Injection|Gegenmaßnahme: Prepared Statements|0/7|🔴|3–5|NEU expl.|
|Bedrohungen|DDoS|Verteilte Überlast|0/7|🔴|3–5|NEU expl.|
|Bedrohungen|XSS, CSRF|Input-Validation, Tokens|0/7|🟡|3|NEU|
|OWASP Top 10|Injection, Broken Auth, Misconfig|—|0/7|🟡|3|Mittel|
|Datenschutz|DSGVO-Grundsätze|Zweckbindung, Datensparsamkeit, Löschpflicht|1/7|🔴|4|Dauerbrenner|
|Datenschutz|TOM (Technisch-organisatorische Maßnahmen)|Zutritt/Zugang/Zugriff|0/7|🟡|3–4|NEU|
|Datenschutz|Einwilligung (Art. 7)|Freiwillig, informiert, nachweisbar|1/7|🟡|4|Mittel|

### 2.6 Netzwerk & Schnittstellen

|Thema|Unterpunkt|Unterunterpunkt|Hist.|Wahrsch. S26|Typ. Pts|Status|
|---|---|---|:-:|:-:|:-:|:-:|
|Netzwerkkonzepte|LAN / WAN / PAN / MAN|Reichweite|1/7|🟡|3|Altkatalog|
|Netzwerkkonzepte|LPWAN|IoT-Netze (geringe Bandbreite, große Reichweite)|1/7|🟢|3|W24|
|Netzwerkkonzepte|NAS vs. SAN vs. DAS|File-Level vs. Block-Level|0/7|🔴|3–6|NEU expl.|
|Ethernet|Frame-Aufbau (Preamble, MAC, Type, Payload, FCS)|—|1/7|🟢|6|W24|
|Adressierung|MAC-Adresse|OUI + Host|1/7|🟡|3|Mittel|
|Adressierung|IPv4/IPv6, Subnetting|CIDR-Notation|0/7|🟡|—|Meist EUA/AP1|
|REST-API|Konzept (Ressource, stateless, uniform interface)|—|1/7|🔴|2–4|NEU, überfällig|
|REST-API|CRUD → HTTP-Methoden|POST/GET/PUT-PATCH/DELETE|1/7|🔴|6|NEU, überfällig|
|REST-API|HTTP-Request-Aufbau|URL, Methode, Header, Body|1/7|🔴|3|Überfällig|
|REST-API|HTTP-Statuscodes|2xx/3xx/4xx/5xx|1/7|🔴|3|Überfällig|
|Datenformate|XML|Wohlgeformtheit vs. Gültigkeit (DTD/XSD)|1/7|🟡|13|W22|
|Datenformate|JSON|Syntax, Einsatz|2/7|🟡|7–14|Mittel|
|Datenformate|CSV|Trennzeichen, Quoting|0/7|🟢|—|Selten|
|eRechnung|Pflicht ab 2025 (B2B), Ziele, Format|XRechnung, ZUGFeRD|1/7|🟡|9–15|W25|

### 2.7 Qualitätssicherung & Testen

|Thema|Unterpunkt|Unterunterpunkt|Hist.|Wahrsch. S26|Typ. Pts|Status|
|---|---|---|:-:|:-:|:-:|:-:|
|Testverfahren|Unit / Integration / System / Abnahme|Testpyramide|2/7|🟡|6–12|Mittel|
|Testverfahren|Black Box vs. White Box|mit/ohne Code-Kenntnis|1/7|🟡|3|Mittel|
|Testverfahren|Last-/Performance-Test|—|0/7|🟡|3–4|NEU expl.|
|Testverfahren|Regressionstest, Smoketest|—|0/7|🟢|2|Nice-to-know|
|TDD|Red-Green-Refactor|Test zuerst|0/7|🔴|3–6|NEU, NIE geprüft|
|Testkonzept|Inhalte (Ziele, Umfang, Daten, Strategie)|—|1/7|🟡|6|W23|
|QS-Maßnahmen|Code Review, Pair Programming, CI/CD|—|2/7|🟡|6|Mittel|
|Prototyping|Low-/High-Fidelity, Throwaway vs. Evolutionary|—|1/7|🟢|6|Gerade W25|
|ISO 25010|Qualitätsmerkmale (Wartbarkeit, Zuverlässigkeit etc.)|8 Hauptmerkmale|0/7|🟡|3–4|NEU erweitert|

### 2.8 UI / UX / Softwareergonomie

|Thema|Unterpunkt|Unterunterpunkt|Hist.|Wahrsch. S26|Typ. Pts|Status|
|---|---|---|:-:|:-:|:-:|:-:|
|Mockup zeichnen|Formular mit Beschriftung, Buttons|Abbrechen / Speichern|2/7|🟡|7–8|Mittel|
|Mockup bewerten|Usability-Mängel identifizieren|—|2/7|🟡|4–6|Mittel|
|Usability|EN ISO 9241-110 (7 Dialoggrundsätze)|Aufgabenangemessen, Selbstbeschreibend, Lernförderlich, Steuerbar, Erwartungskonform, Individualisierbar, Fehlertolerant|1/7|🟡|7|Mittel|
|UX|Barrierefreiheit, Farbkontraste|—|0/7|🟢|2–4|Nice-to-know|

### 2.9 CPS / Infra / Sonstiges

|Thema|Unterpunkt|Hist.|Wahrsch. S26|Typ. Pts|Status|
|---|---|:-:|:-:|:-:|:-:|
|Cloud|On-Premises vs. SaaS / IaaS / PaaS|1/7|🟡|3–4|Mittel|
|CPS|Sensoren/Aktoren, Zugriff, Bibliotheken|0/7|🟡|3–6|NEU expl.|
|Monitoring|Schwellwerte, Daten festlegen|0/7|🟢|2–4|NEU|
|CI/CD|Pipeline, Rollback|1/7|🟡|6|W22|
|Open Source|Lizenzen, Vor-/Nachteile|1/7|🟢|9|W22|
|Versionsverwaltung (Git)|Branch, Merge, Pull/Push|0/7|🟢|2–4|Selten|

---

## 3. Lernprioritäten für Note 2

Zielpunktverteilung: **60–65 Pts sicher** (Must-Know) + **15–20 Pts** (Should-Know) + **Rest** (Nice-to-Know) = **81+ Pts**

|🔴 MUST-KNOW (~65 Pts sichern)|🟡 SHOULD-KNOW (~20 Pts)|🟢 NICE-TO-KNOW (Rest)|
|---|---|---|
|Klassendiagramm (inkl. OOP-Beziehungen, Sichtbarkeiten)|Zustandsdiagramm|Verteilungs-/Komponentendiagramm|
|Sequenzdiagramm (alt/opt/loop)|Aktivitätsdiagramm (Wiederholung)|ISO 25010 Detail-Merkmale|
|Pseudocode OO-Style|Use-Case-Diagramm (Wiederholung)|Git-Workflows|
|Design Patterns: Singleton + Factory + Observer + Strategy|Design Patterns: Adapter, Decorator|Microservices / Container|
|OOP-Prinzipien (Kapselung, Vererbung, Abstraktion)|Aggregation vs. Komposition in Detail|Reactive Programming|
|REST-API + CRUD + HTTP-Methoden + Statuscodes|eRechnung|LPWAN / Ethernet-Frame-Details|
|Stakeholder-Analyse (Tabelle)|Machbarkeitsanalyse|Open Source Lizenzen|
|Klassisch vs. Agil + Scrum (Rollen/Events/Artefakte)|Risikoanalyse|Prototyping-Varianten|
|Hybride Verschlüsselung / TLS|Funktional vs. nichtfunktional|Barrierefreiheit Details|
|Hash + Salt (Passwörter)|Zertifikate + CA + OAuth2|CPS-Details|
|Bedrohungen: MitM, SQL-Injection, DDoS + Gegenmaßnahmen|Kerberos|RAID-Level|
|DSGVO-Grundsätze|TOM|3V/4V Big Data|
|ERM (wenn klein gefragt)|NoSQL/JSON modellieren|XML/XSLT|
|Anomalien + Redundanz|ACID|DTD Details|
|Mockup zeichnen + bewerten|Testverfahren (Unit/Integration/System)|MVP, MVVM|
|Pseudocode Sortierverfahren (Bubble/Selection/Insertion)|TDD|Exotischere Design Patterns|
|Architektur-Pattern: MVC|3-Schicht-Architektur|—|

---

## 4. Pro Must-Know-Thema: Was genau lernen?

### 4.1 Klassendiagramm 🔴

|Aspekt|Inhalt|
|---|---|
|Kerndefinition|UML-Strukturdiagramm: Klassen mit Attributen, Methoden, Sichtbarkeiten und Beziehungen|
|IHK-Keywords|Sichtbarkeit (`-` private, `#` protected, `+` public, `~` package), abstrakte Klasse (kursiv), Interface (`<<interface>>`), Assoziation (Linie), Aggregation (○─), Komposition (●─), Vererbung (△─), Multiplizität (1, _, 0..1, 1.._)|
|Fallstricke|Sichtbarkeit `+` statt `-` für private; Komposition vs. Aggregation verwechselt (● = teil-von, existentiell; ○ = hat-ein, austauschbar); Vererbungspfeil verkehrt gezeichnet|
|Übung|W2024 Aufg 3 (17P) + S2022 Aufg 3a (7P)|

**ASCII-Beispiel:**

```
┌──────────────────────┐
│   <<abstract>>       │
│      Fahrzeug        │
├──────────────────────┤
│ # marke: String      │
│ - preis: double      │
├──────────────────────┤
│ + getMarke(): String │
│ + fahren(): void     │  (abstract)
└──────────┬───────────┘
           △
           │ (Vererbung)
┌──────────┴───────────┐
│         Auto         │
├──────────────────────┤
│ - tueren: int        │
├──────────────────────┤
│ + fahren(): void     │
└──────────────────────┘
```

### 4.2 Sequenzdiagramm 🔴

|Aspekt|Inhalt|
|---|---|
|Kerndefinition|UML-Verhaltensdiagramm: zeitlicher Ablauf von Nachrichtenaustausch zwischen Objekten|
|IHK-Keywords|Lebenslinie (gestrichelt), Aktivierungsbalken, synchron (➡ ausgefüllt), asynchron (➡ offen), return (← gestrichelt), Fragmente `alt` (Alternative), `opt` (Optional), `loop` (Schleife), `par` (Parallel)|
|Fallstricke|Rückgabepfeil (gestrichelt, nicht durchgezogen); `alt`-Fragment bei if/else vergessen; Aktivierungsbalken fehlen|
|Übung|S2024 Aufg 2e (11P) + S2022 Aufg 3c (9P)|

**ASCII-Beispiel:**

```
  :App        :Service      :DB
    │            │           │
    │──GET──────▶│           │
    │            │──query───▶│
    │            │◀──data────│
    │◀──200──────│           │
    │            │           │
```

### 4.3 Pseudocode (OO-Style) 🔴

|Aspekt|Inhalt|
|---|---|
|Kerndefinition|Sprachneutrale Darstellung von Algorithmen, für Dritte ohne Programmiersprachen-Kenntnis lesbar|
|IHK-Keywords|`for each (X : liste) { ... }`, `if (bedingung) { ... } else { ... }`, `while (bedingung)`, `liste.add(element)`, `return ergebnis`, Methodensignatur `+ name(param: Typ): Rückgabe`|
|Fallstricke|Java-Syntax statt Pseudocode (z.B. `List<Type>` Generics zu konkret); Null-Check vergessen; OO-Methode nicht als `obj.methode()` aufrufen|
|Übung|S2024 Aufg 3ba/bb/bc (3×5P) + S2022 Aufg 3cb (4P)|

**Template:**

```
+ methodenname(param: Typ): Rueckgabetyp
{
    lokalVar: Typ
    lokalVar = False
    
    for each (Element e : liste) {
        if (e.getId().equals(zielId)) {
            lokalVar = True
        }
    }
    
    return lokalVar
}
```

### 4.4 Design Patterns 🔴

|Pattern|Kategorie|Zweck|Erkennungsmerkmal im Code|Typisches Klassendiagr.|
|---|---|---|---|---|
|Singleton|Erzeugung|Genau 1 Instanz|`private Constructor`, `static getInstance()`|1 Klasse mit `-instance` + `+getInstance()`|
|Factory Method|Erzeugung|Objekterzeugung delegieren|Abstrakte `createXxx()`-Methode|Abstrakte Basisklasse `Factory` + Unterklassen|
|Observer|Verhalten|1:n-Benachrichtigung|`attach/detach`, `notify`, `update`|Subject-Interface + Observer-Interface|
|Strategy|Verhalten|Algorithmen austauschbar|Interface + Kontext mit Referenz|Kontext hat-ein Strategy-Interface|

|Aspekt|Inhalt|
|---|---|
|IHK-Keywords|GoF-Kategorien: **Creational / Structural / Behavioral**; "zur Entkopplung von …"; "austauschbar zur Laufzeit"; "Observer benachrichtigt alle registrierten …"|
|Fallstricke|Singleton mit public Constructor; Observer: `update()` im falschen Interface; Strategy mit Vererbung statt Interface|
|Übung|S2025 Aufg 4 (Factory, 12P) + S2022 Aufg 3b (Observer, 10P)|

### 4.5 Use-Case-Diagramm 🟡 (gerade geprüft, als Wiederholung)

|Aspekt|Inhalt|
|---|---|
|Kerndefinition|Funktionale Sicht: Wer (Akteur) kann was (Use Case) mit dem System tun?|
|IHK-Keywords|Akteur (Strichmännchen), Systemgrenze (Rechteck), Use Case (Ellipse), `<<include>>` (pflichtig, vom Haupt- zum Sub-UC), `<<extend>>` (optional, vom Sub- zum Haupt-UC), Akteur-Vererbung (△ vom speziellen zum allgemeinen)|
|Fallstricke|`<<include>>` und `<<extend>>` Pfeilrichtung verwechselt; Akteur innerhalb Systemgrenze; Vererbungsrichtung falsch|
|Übung|W2025 Aufg 2a (18P) + S2024 Aufg 3a (14P)|

### 4.6 Aktivitätsdiagramm 🟡 (gerade geprüft, als Wiederholung)

|Aspekt|Inhalt|
|---|---|
|Kerndefinition|UML-Verhaltensdiagramm: Ablauf von Aktionen inkl. Verzweigungen und Parallelität|
|IHK-Keywords|Startknoten (●), Endknoten (⊙), Aktion (abgerundetes Rechteck), Verzweigung/Zusammenführung (Raute ◇), Fork/Join (Balken ▬), Swimlanes (Spalten für Rollen), Guards `[bedingung]`|
|Fallstricke|Fork ohne zugehörigen Join; Guards vergessen; Swimlane-Zuordnung unklar|
|Übung|S2025 Aufg 3a (17P) + W2023 Aufg 2c (15P)|

### 4.7 Zustandsdiagramm 🟡

|Aspekt|Inhalt|
|---|---|
|Kerndefinition|UML-Verhaltensdiagramm: Zustände eines Objekts + Übergänge durch Ereignisse|
|IHK-Keywords|Zustand (abgerundetes Rechteck), Anfangszustand (●), Endzustand (⊙), Übergang (Pfeil mit `event[guard]/action`), Self-Transition|
|Fallstricke|Anfangszustand vergessen; Übergangsbeschriftung fehlt; Endzustand nicht erreichbar|
|Übung|W2024 Aufg 4a (15P) + W2022 Aufg 4b (11P)|

### 4.8 OOP-Prinzipien (Kapselung, Vererbung) 🔴

|Prinzip|Kerndefinition|Keywords|Fallstrick|
|---|---|---|---|
|Kapselung|Datenzugriff nur über definierte Methoden; interne Repräsentation verborgen|`private` Attribute, `public` Getter/Setter, Geheimnisprinzip, Information Hiding|Attribute public machen; keine Invarianten im Setter prüfen|
|Vererbung|Unterklasse erbt Attribute/Methoden der Oberklasse|IS-A, `extends`, Überschreiben, `super`|Komposition statt Vererbung, wenn HAS-A; Vererbungstiefe >3|
|Polymorphie|Gleicher Methodenaufruf, unterschiedliches Verhalten je Typ|dynamisches Binden, Overriding, Interface-Typ|Static Binding mit Overloading verwechseln|
|Abstraktion|Nur relevante Eigenschaften modellieren; abstrakte Klasse/Interface|`abstract`, Interface, kein `new` möglich|Abstrakte Klasse instanziieren wollen|

### 4.9 Verschlüsselung & TLS 🔴

|Verfahren|Funktionsweise|Vorteil|Nachteil|
|---|---|---|---|
|Symmetrisch (AES)|1 Schlüssel für Ver-/Entschlüsselung|Schnell|Schlüssel-Austausch (Pre-Shared-Secret) problematisch|
|Asymmetrisch (RSA)|Public Key verschlüsselt, Private Key entschlüsselt|Kein Shared Secret nötig|Rechenaufwendig|
|Hybrid (TLS)|Asymmetrisch für Schlüsselaustausch, dann symmetrisch für Daten|Schnell + sicher|Komplexität, CA nötig|

**⚠ IHK-Fallstrick (W2025-Lösung):** TLS als „asymmetrisch" = **0 Punkte**. Richtig: **hybrid**.

### 4.10 Hash + Salt 🔴

|Aspekt|Inhalt|
|---|---|
|Kerndefinition|Hash: Einweg-Funktion, feste Länge. Salt: zufälliger Wert pro Passwort, verhindert Rainbow-Table-Angriffe|
|Keywords|SHA-256, bcrypt, `Hash(Passwort + Salt)`, pro User eigenes Salt, Salt wird mit Hash in DB gespeichert|
|Fallstricke|MD5/SHA1 als sicher bezeichnen; Salt vergessen; Salt global statt per User|

### 4.11 Bedrohungen + Gegenmaßnahmen 🔴

|Bedrohung|Mechanismus|Gegenmaßnahme|
|---|---|---|
|Man-in-the-Middle|Angreifer sitzt zwischen Sender/Empfänger|TLS + Zertifikat-Validierung, HSTS|
|SQL-Injection|User-Input wird als SQL ausgeführt|Prepared Statements, Parameter Binding, Input-Validation|
|DDoS|Viele Requests überlasten Server|Rate Limiting, CDN, WAF, Cloud-Scaling|
|XSS|Fremd-Skript im Browser des Opfers|Output-Encoding, CSP-Header|
|CSRF|Gefälschte Request im Namen des Users|CSRF-Token, SameSite-Cookie|
|Phishing|Social-Engineering-Mails|Schulung, 2FA, E-Mail-Filter|

### 4.12 REST-API 🔴

|Aspekt|Inhalt|
|---|---|
|Kerndefinition|Architekturstil: Ressourcen über URLs adressierbar, zustandslos, einheitliche Schnittstelle|
|CRUD → HTTP|Create = POST/PUT, Read = GET, Update = PUT/PATCH, Delete = DELETE|
|Request-Bestandteile|URL (Endpoint), Methode, Header (Content-Type, Auth), Body (JSON)|
|Statuscodes|2xx Erfolg, 3xx Redirect, 4xx Client-Fehler (400 Bad Request, 401 Unauth, 404 Not Found), 5xx Server-Fehler|
|Fallstricke|POST und PUT beide für Create; Statuscode 200 bei Fehler|
|Übung|S2024 Aufg 2 komplett (a–e, 25P)|

### 4.13 Stakeholder-Analyse 🔴

|Aspekt|Inhalt|
|---|---|
|Kerndefinition|Identifikation aller Interessengruppen + deren Erwartung/Befürchtung + Gegenmaßnahme|
|Tabellen-Template|`Stakeholder|
|Typische Stakeholder|Vorstand, Mitarbeiter (intern), Kunden, Behörden, Cloud-Anbieter, IT-Dienstleister (extern)|
|Fallstricke|Nur 1 Stakeholder nennen; Befürchtung = Risiko statt aus Sicht des Stakeholders|
|Übung|S2022 Aufg 1b (12P) + S2024 Aufg 1d (5P) + S2025 Aufg 1b (10P)|

### 4.14 Klassisch vs. Agil (Scrum) 🔴

|Aspekt|Klassisch (Wasserfall)|Agil (Scrum)|
|---|---|---|
|Anforderungen|Vorab detailliert, dokumentiert|Iterativ, im Backlog|
|Planung|Komplett vorab|Pro Sprint|
|Flexibilität|Gering, Änderungen teuer|Hoch, Änderungen erwünscht|
|Auslieferung|Am Ende|Inkrementell nach jedem Sprint|
|Kundenbeteiligung|Am Anfang und Ende|Kontinuierlich|

**Scrum-Kernelemente:**

- **Rollen:** Product Owner (Backlog), Scrum Master (Prozess), Development Team (Umsetzung)
- **Artefakte:** Product Backlog, Sprint Backlog, Increment
- **Events:** Sprint (2–4 Wochen), Daily (15 min), Sprint Planning, Sprint Review, Retrospektive
- **Fallstrick:** Scrum Master als Chef/Projektleiter bezeichnen → FALSCH (ist Coach/Servant Leader)

### 4.15 DSGVO-Grundsätze 🔴

|Grundsatz|Bedeutung|
|---|---|
|Rechtmäßigkeit|Gesetzliche Grundlage nötig (Einwilligung, Vertrag, berechtigtes Interesse)|
|Zweckbindung|Daten nur für den angegebenen Zweck nutzen|
|Datenminimierung|So wenig Daten wie nötig|
|Richtigkeit|Korrekte, aktuelle Daten|
|Speicherbegrenzung|Löschung nach Zweckerfüllung|
|Integrität/Vertraulichkeit|Angemessene Sicherheit (TOM)|
|Rechenschaftspflicht|Nachweis der Einhaltung|

**Betroffenenrechte:** Auskunft, Berichtigung, Löschung, Einschränkung, Übertragbarkeit, Widerspruch

### 4.16 Mockup + Usability 🔴

|Aspekt|Inhalt|
|---|---|
|Mockup-Elemente|Überschrift, beschriftete Eingabefelder, Dropdown bei festem Wertebereich, Primär-Button (rechts unten) + Abbrechen-Button (links)|
|ISO 9241-110|Aufgabenangemessenheit, Selbstbeschreibung, Lernförderlichkeit, Steuerbarkeit, Erwartungskonformität, Individualisierbarkeit, Fehlertoleranz|
|Fallstricke|Fehlende Feldbeschriftungen; kein Abbrechen-Button; unklare Button-Hierarchie; Modal-Dialog überlagert Kontext|
|Übung|S2024 Aufg 4bb (7P) + S2025 Aufg 2b (8P)|

### 4.17 Anomalien + Redundanz 🔴

|Anomalie|Definition|Beispiel aus Bewertungs-Tabelle|
|---|---|---|
|Änderungsanomalie|Attribut ändern erfordert Update in mehreren Sätzen|Cesar-Salat umbenennen → alle Datensätze ändern|
|Einfügeanomalie|Neuen Datensatz einfügen nicht möglich ohne Füllwerte|Neuen Gast registrieren ohne Besuch → leere Pflichtfelder|
|Löschanomalie|Datensatz löschen verliert andere Infos|Einzigen Tiramisu-Eintrag löschen → Leistung komplett weg|
|Redundanz|Gleiche Info mehrfach gespeichert|Gastkontaktdaten bei jedem Besuch|

### 4.18 ERM (gerade geprüft — falls klein in S26)

|Aspekt|Inhalt|
|---|---|
|Kerndefinition|Entity-Relationship-Modell: konzeptuelles Datenmodell mit Entitäten, Attributen, Beziehungen + Kardinalitäten|
|Notation|Entität (Rechteck), Attribut (Ellipse), Beziehung (Raute), PK (unterstrichen), Kardinalität an Beziehung (1, n, m)|
|m:n-Auflösung|Zusätzliche Tabelle mit zusammengesetztem PK aus beiden FKs + evtl. Attribute (Bewertung, Zeitstempel)|
|Fallstricke|PK vergessen; m:n-Beziehung ohne Zwischentabelle; Attribute an Beziehung vergessen|

---

## 5. 16-Tage-Lernplan (15.04.–30.04.2026)

|Tag|Datum|Thema|Aktivität|Dauer|
|:-:|:-:|---|---|:-:|
|1|Di 15.04|Klassendiagramm + OOP-Beziehungen|W2024 Aufg 3 auf Papier lösen + Zettel [[Klassendiagramm UML\|Klassendiagramm UML]] anlegen|90 min|
|2|Mi 16.04|OOP-Prinzipien (Kapselung, Vererbung, Polymorphie, Abstraktion)|Eigene Karteikarten schreiben, Klassen-Beispiele in Java/Python skizzieren|60 min|
|3|Do 17.04|Design Patterns (Singleton, Factory, Observer, Strategy)|S2025 Aufg 4 + S2022 Aufg 3b lösen, Pattern-Spickzettel anlegen|90 min|
|4|Fr 18.04|Sequenzdiagramm|S2024 Aufg 2e + S2022 Aufg 3c lösen, alt/opt/loop-Fragmente üben|90 min|
|5|Sa 19.04|Pseudocode (OO-Style, for-each, if/else)|S2024 Aufg 3ba/bb/bc + S2022 Aufg 3cb lösen, Bubble/Selection/Insertion Sort in Pseudocode|120 min|
|6|So 20.04|ERM + Normalisierung + Anomalien (Sicherung)|S2025 Aufg 2a + W2025 Aufg 4 lösen|90 min|
|7|Mo 21.04|Stakeholder-Analyse + PM klassisch/agil + Scrum|W2025 Aufg 1 + S2025 Aufg 1 + Scrum-Karteikarten|60 min|
|8|Di 22.04|REST-API + CRUD + HTTP (Neu-Katalog, überfällig)|S2024 Aufg 2a–d komplett + eigene Karte [[02 - RESOURCES/Notes/REST API\|REST API]]|75 min|
|9|Mi 23.04|Verschlüsselung (TLS hybrid) + Hash/Salt + Bedrohungen (MitM/SQLi/DDoS)|W2025 Aufg 3a + S2025 Aufg 2c + S2022 Aufg 4bc + Bedrohungs-Spickzettel|90 min|
|10|Do 24.04|Zustandsdiagramm + Aktivitätsdiagramm (Wiederholung)|W2024 Aufg 4a + W2022 Aufg 4b + S2025 Aufg 3a|90 min|
|11|Fr 25.04|Use-Case (Wiederholung) + Mockup + Usability ISO 9241|W2025 Aufg 2a + S2024 Aufg 4bb + S2025 Aufg 2b|90 min|
|12|Sa 26.04|**SIMULATION 1: W2023/24** (komplett, 90 min Timer, kein Hilfsmittel)|Danach mit Musterlösung abgleichen, Fehler-Notizen|120 min|
|13|So 27.04|**SIMULATION 2: S2025** (komplett, 90 min Timer, kein Hilfsmittel)|Danach mit Musterlösung abgleichen|120 min|
|14|Mo 28.04|Schwachstellen-Closeout aus Simulationen + DSGVO/Datenschutz + eRechnung (falls nötig)|Gezielt die Lücken üben, SQL-Beiblatt einprägen|90 min|
|15|Di 29.04|**PRÜFUNGSTAG 🎯**|—|—|

---

## 6. Kompakte Endzusammenfassung

|#|Kernfrage|Antwort|
|:-:|---|---|
|1|Top-3 Big-Task-Kandidaten S2026?|**Klassendiagramm**, **Sequenzdiagramm**, **Pseudocode ×2-3**|
|2|Wahrscheinliche 2. Big-Task-Gruppe?|**Design Pattern-Erkennung** (Singleton/Factory/Observer)|
|3|Welche NEU-Themen sind überfällig?|**REST-API**, **Kapselung**, **Bedrohungen (MitM/SQLi/DDoS)**, **Hash/Salt**, **MVC**, **TDD**|
|4|Gerade geprüft — eher klein erwartet?|ERM, Normalisierung, Use-Case, Aktivitätsdiagramm, Machbarkeit, Risiko, Prototyping|
|5|BaWü-Risiko?|Katalog gilt offiziell nicht zwingend, faktisch aber sichtbar in S25+W25|
|6|Häufigster Lösungs-Fallstrick?|**TLS = hybrid** (nicht asymmetrisch!)|
|7|Minimum-Punkte für Note 2?|**81 Pts** (Must-Know ~65 + Should-Know ~20)|
|8|Pflicht-Übungen bis zur Prüfung?|2 volle Simulationen (Tag 12+13) + alle Must-Know einmal frisch üben|
