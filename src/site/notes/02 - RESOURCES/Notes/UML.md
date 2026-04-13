---
{"dg-publish":true,"permalink":"/02-resources/notes/uml/","tags":["ausbildung/gfn/ap2","GFN/prüfungsrelevant/AP2","uml"],"noteIcon":"","updated":"2025-11-12T15:21:12.000+01:00","dg-note-properties":{"aliases":["Unified Modeling Language","uml"],"created_date":"2024-09-26","links":null,"tags":["ausbildung/gfn/ap2","GFN/prüfungsrelevant/AP2","uml"]}}
---


>[[02 - RESOURCES/Notes/UML\|UML]] (Unified Modeling Language) ist eine Sprache um Software zu zeichnen. Mit Bildern und Diagrammen zeigt man, wie ein Programm aufgebaut ist.

>>[[02 - RESOURCES/Notes/UML\|UML]] hilft, komplexe Software zu planen und zu dokumentieren. Es ist wie eine Bauzeichnung für Gebäude - nur für Programme.

# I. Was ist UML?

>Eine einheitliche Sprache für Software-Diagramme.

>[!note] Einfach erklärt
>Stell dir vor, du willst ein Haus bauen:
>- **Ohne Plan:** Jeder Handwerker macht, was er denkt
>- **Mit Plan:** Alle wissen genau, was zu tun ist
>
>[[02 - RESOURCES/Notes/UML\|UML]] ist der "Bauplan" für Software!
>
>**Vorteile:**
>- Entwickler verstehen sich besser
>- Fehler werden früh erkannt
>- Dokumentation ist automatisch da
>- Planung ist einfacher

```
UML = Universelle Bilder-Sprache für Software

    Idee im Kopf
         │
         ▼
    ┌─────────┐
    │   UML   │  → Zeichnung/Diagramm
    │ Diagram │
    └────┬────┘
         │
         ▼
    Echter Code
```

# II. Die wichtigsten UML-Diagramm-Arten

>[[02 - RESOURCES/Notes/UML\|UML]] hat verschiedene Diagramm-Typen für verschiedene Zwecke.

>[!important] Hauptkategorien
>**Struktur-Diagramme** (WIE ist es aufgebaut?)
>- Zeigen den Aufbau des Systems
>- Statisch (ändert sich nicht während Laufzeit)
>
>**Verhaltens-Diagramme** (WAS macht es?)
>- Zeigen Abläufe und Aktionen
>- Dynamisch (während Programm läuft)

```
UML-Diagramme

├── STRUKTUR (Aufbau)
│   ├── Klassendiagramm ⭐⭐⭐
│   ├── Komponentendiagramm
│   ├── Paketdiagramm
│   └── Verteilungsdiagramm
│
└── VERHALTEN (Ablauf)
    ├── Anwendungsfalldiagramm ⭐⭐⭐
    ├── Aktivitätsdiagramm ⭐⭐⭐
    ├── Sequenzdiagramm ⭐⭐
    └── Zustandsdiagramm ⭐

⭐⭐⭐ = Sehr wichtig für Prüfung!
```

# III. Die wichtigsten Diagramme im Detail

>Diese Diagramme musst du für die Prüfung kennen.

## 1. Klassendiagramm ⭐⭐⭐

>Zeigt den Aufbau von Klassen und ihre Beziehungen.

>[!important] [[02 - RESOURCES/Notes/UML-Klassendiagramm\|UML-Klassendiagramm]]
>**Wofür?**
>- Struktur von Klassen zeigen
>- Attribute und Methoden dokumentieren
>- Beziehungen zwischen Klassen
>
>**Beispiel:**
>```
>┌─────────────────┐
>│     Auto        │
>├─────────────────┤
>│ - marke: String │
>│ - baujahr: int  │
>├─────────────────┤
>│ + starten()     │  ← [[Methode]]n
>│ + fahren()      │
>└─────────────────┘
>```
>
>*Zeigt [[02 - RESOURCES/Notes/Vererbung\|Vererbung]], [[02 - RESOURCES/Notes/UML-Assoziation\|UML-Assoziation]]en zwischen Klassen*
>
>Siehe: [[02 - RESOURCES/Notes/UML-Klassendiagramm\|UML-Klassendiagramm]] für Details

## 2. Anwendungsfalldiagramm ⭐⭐⭐

>Zeigt, was ein System alles kann.

>[!important] Use Case Diagram
>**Wofür?**
>- Funktionen des Systems zeigen
>- Wer (Akteur) macht was (Use Case)
>- Überblick über Systemfunktionen
>
>**Beispiel:**
>```
>    ┌────┐
>    │ 🧑 │ Kunde
>    └─┬──┘
>      │
>      │    ┌─────────────────────┐
>      ├───→│  Produkt bestellen  │
>      │    └─────────────────────┘
>      │
>      │    ┌─────────────────────┐
>      └───→│  Rechnung ansehen   │
>           └─────────────────────┘
>```
>
>Siehe: [[02 - RESOURCES/Notes/UML-Anwendungsfalldiagramm\|UML-Anwendungsfalldiagramm]] für Details

## 3. Aktivitätsdiagramm ⭐⭐⭐

>Zeigt Abläufe und Prozesse.

>[!important] [[02 - RESOURCES/Notes/UML-Aktivitätsdiagramm\|UML-Aktivitätsdiagramm]]
>**Wofür?**
>- Geschäftsprozesse dokumentieren
>- Workflows zeigen
>- Algorithmen visualisieren
>- Parallele Abläufe darstellen
>
>**Beispiel:**
>```
>    ● Start
>    │
>    ▼
>┌─────────┐
>│ Login   │
>└────┬────┘
>     │
>     ▼
>    ◆
>   ╱ ╲
>[OK?]
>  ╱   ╲
> ▼     ▼
>Weiter Ende
>```
>
>Siehe: [[02 - RESOURCES/Notes/UML-Aktivitätsdiagramm\|UML-Aktivitätsdiagramm]] für Details

## 4. Sequenzdiagramm ⭐⭐

>Zeigt zeitliche Abfolge von Nachrichten zwischen Objekten.

>[!note] Sequence Diagram
>**Wofür?**
>- Kommunikation zwischen Objekten
>- Zeitlicher Ablauf von Methodenaufrufen
>- Interaktion zwischen Systemteilen
>
>**Beispiel:**
>```
>Kunde    System    Datenbank
>  │        │           │
>  ├───────→│ login()   │
>  │        ├──────────→│ prüfe()
>  │        │←──────────┤ OK
>  │←───────┤ erfolg    │
>  │        │           │
>```
>
>Siehe: [[02 - RESOURCES/Notes/UML-Sequenzdiagramme\|UML-Sequenzdiagramme]] für Details

## 5. Zustandsdiagramm ⭐

>Zeigt verschiedene Zustände eines Objekts.

>[!note] State Diagram
>**Wofür?**
>- Zustände und Übergänge
>- Lebenszyklus von Objekten
>- Reaktion auf Ereignisse
>
>**Beispiel:**
>```
>  ┌─────────┐  starten   ┌─────────┐
>  │   Aus   │──────────→ │   An    │
>  └─────────┘            └─────────┘
>       ↑                      │
>       └──────────────────────┘
>          ausschalten
>```
>
>Siehe: [[02 - RESOURCES/Notes/UML-Zustandsdiagramme\|UML-Zustandsdiagramme]] für Details

# IV. Wann welches Diagramm?

>So wählst du das richtige Diagramm aus.

>[!tip] Entscheidungshilfe
>**"Was kann das System?"**
>→ [[02 - RESOURCES/Notes/UML-Anwendungsfalldiagramm\|UML-Anwendungsfalldiagramm]]
>
>**"Wie ist das System aufgebaut?"**
>→ [[02 - RESOURCES/Notes/UML-Klassendiagramm\|UML-Klassendiagramm]]
>
>**"Wie läuft ein Prozess ab?"**
>→ [[02 - RESOURCES/Notes/UML-Aktivitätsdiagramm\|UML-Aktivitätsdiagramm]]
>
>**"Wie kommunizieren Objekte?"**
>→ [[02 - RESOURCES/Notes/UML-Sequenzdiagramme\|UML-Sequenzdiagramme]]
>
>**"Welche Zustände gibt es?"**
>→ [[02 - RESOURCES/Notes/UML-Zustandsdiagramme\|UML-Zustandsdiagramme]]

```
Projektphasen und passende Diagramme:

PHASE 1: ANFORDERUNGEN
└→ Anwendungsfalldiagramm
   "Was soll das System können?"

PHASE 2: DESIGN
├→ Klassendiagramm
│  "Welche Klassen brauchen wir?"
└→ Aktivitätsdiagramm
   "Wie laufen Prozesse ab?"

PHASE 3: IMPLEMENTIERUNG
└→ Sequenzdiagramm
   "Wie rufen Objekte sich auf?"

PHASE 4: TEST
└→ Zustandsdiagramm
   "Alle Zustände getestet?"
```

# V. UML in der Praxis

>So nutzt du [[02 - RESOURCES/Notes/UML\|UML]] im echten Projekt.

>[!example] Beispiel: Online-Shop entwickeln
>**Schritt 1 - Anforderungen sammeln:**
>```
>Anwendungsfalldiagramm erstellen:
>- Akteure: Kunde, Admin, System
>- Use Cases: Bestellen, Bezahlen, Verwalten
>```
>
>**Schritt 2 - Struktur planen:**
>```
>Klassendiagramm erstellen:
>- Klassen: Kunde, Produkt, Warenkorb, Bestellung
>- Beziehungen: Kunde hat Warenkorb, etc.
>```
>
>**Schritt 3 - Prozesse definieren:**
>```
>Aktivitätsdiagramm für Bestellprozess:
>- Produkt wählen → In Warenkorb → Bezahlen → Bestätigen
>```
>
>**Schritt 4 - Kommunikation klären:**
>```
>Sequenzdiagramm für Login:
>- Kunde → System → Datenbank → System → Kunde
>```

# VI. Wichtige UML-Grundregeln

>Diese Regeln gelten für alle Diagramme.

>[!important] Grundprinzipien
>**1. Klarheit vor Schönheit:**
>- Diagramm muss verständlich sein
>- Nicht zu komplex
>- Beschriftungen verwenden
>
>**2. Konsistenz:**
>- Gleiche Namen in allen Diagrammen
>- Einheitliche Notation
>- Standards einhalten
>
>**3. Vollständigkeit:**
>- Alle wichtigen Elemente zeigen
>- Aber nicht überladen
>- Fokus auf das Wesentliche
>
>**4. Aktualität:**
>- Diagramme bei Änderungen anpassen
>- Als "lebende Dokumentation"
>- Teil der Projektdokumentation

# VII. Häufige Fehler vermeiden

>Das solltest du nicht machen.

>[!warning] Typische Fehler
>**1. Zu detailliert:**
>```
>❌ FALSCH:
>Jede kleine Methode im Klassendiagramm
>→ Unübersichtlich!
>
>✅ RICHTIG:
>Nur wichtige Methoden zeigen
>→ Klarer Überblick
>```
>
>**2. Falsche Notation:**
>```
>❌ FALSCH:
>Eigene Symbole erfinden
>→ Niemand versteht es
>
>✅ RICHTIG:
>Standard-UML-Symbole nutzen
>→ Alle verstehen es
>```
>
>**3. Keine Beschriftung:**
>```
>❌ FALSCH:
>Pfeile ohne Text
>→ Bedeutung unklar
>
>✅ RICHTIG:
>Pfeile beschriften
>→ Jeder weiß, was gemeint ist
>```
>
>**4. Veraltet:**
>```
>❌ FALSCH:
>Diagramm von vor 6 Monaten
>→ Entspricht nicht mehr dem Code
>
>✅ RICHTIG:
>Diagramm aktuell halten
>→ Dokumentation ist nützlich
>```

# VIII. Prüfungswissen

>Das musst du für die [[02 - RESOURCES/Notes/IHK\|IHK]]-Prüfung können.

>[!important] Prüfungsrelevant
>**Diagramm-Typen kennen:**
>- Klassendiagramm (Struktur)
>- Anwendungsfalldiagramm (Funktionen)
>- Aktivitätsdiagramm (Abläufe)
>- Sequenzdiagramm (Kommunikation)
>- Zustandsdiagramm (Zustände)
>
>**Unterscheiden können:**
>- Strukturdiagramme vs. Verhaltensdiagramme
>- Wann welches Diagramm?
>- Symbole richtig verwenden
>
>**Diagramm erstellen können:**
>- Einfaches Klassendiagramm zeichnen
>- Use Cases mit Akteuren
>- Aktivitätsdiagramm mit Verzweigungen

>[!example] Typische Prüfungsfragen
>**Frage 1:** "Nennen Sie drei UML-Diagrammtypen und deren Einsatzzweck."
>
>**Antwort:**
>1. **Klassendiagramm**: Zeigt die Struktur von Klassen mit ihren Attributen, Methoden und Beziehungen. Wird für das Design der Softwarearchitektur verwendet.
>
>2. **Anwendungsfalldiagramm**: Zeigt die Funktionen des Systems aus Benutzersicht. Wird für die Anforderungsanalyse verwendet.
>
>3. **Aktivitätsdiagramm**: Zeigt Abläufe und Prozesse mit Aktivitäten und Entscheidungen. Wird für die Modellierung von Workflows verwendet.
>
>---
>
>**Frage 2:** "Was ist der Unterschied zwischen Struktur- und Verhaltensdiagrammen?"
>
>**Antwort:**
>**Strukturdiagramme** zeigen den statischen Aufbau des Systems (z.B. Klassendiagramm). Sie ändern sich nicht während das Programm läuft.
>
>**Verhaltensdiagramme** zeigen dynamische Abläufe (z.B. Aktivitätsdiagramm). Sie zeigen, was während der Programmausführung passiert.

# IX. UML-Tools

>Programme zum Erstellen von UML-Diagrammen.

>[!tip] Empfohlene Tools
>**Online (kostenlos):**
>- draw.io (diagrams.net)
>- PlantUML (Code → Diagramm)
>- Lucidchart
>
>**Desktop:**
>- Visual Paradigm
>- Enterprise Architect
>- StarUML
>
>**In IDE integriert:**
>- IntelliJ IDEA (UML-Plugin)
>- Eclipse (UML2 Tools)
>- Visual Studio (Class Designer)

> [!important]
> Dieses Thema kommt **immer** in der [[02 - RESOURCES/Notes/IHK\|IHK]]-Prüfung (Teil 2) vor. Also lerne es gut!

Es gibt verschiedene Arten von UML-Diagrammen, wie [[02 - RESOURCES/Notes/UML-Klassendiagramm\|Klassendiagramme]], [[02 - RESOURCES/Notes/UML-Anwendungsfalldiagramm\|Anwendungsfalldiagramme]], [[02 - RESOURCES/Notes/UML-Anwendungsdiagramm\|UML-Anwendungsdiagramm]], [[02 - RESOURCES/Notes/UML-Sequenzdiagramme\|UML-Sequenzdiagramme]] und [[02 - RESOURCES/Notes/UML-Zustandsdiagramme\|UML-Zustandsdiagramme]], die unterschiedliche Aspekte eines Systems abbilden.