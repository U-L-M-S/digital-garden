---
{"dg-publish":true,"permalink":"/02-resources/notes/uml-anwendungsfalldiagramm/","tags":["ausbildung/gfn/ap1/vorbereitung","uml/anwendungsfalldiagramm"],"noteIcon":"","updated":"2025-11-23T14:04:26.000+01:00"}
---

>Ein UML-Anwendungsfalldiagramm ist eine grafische Darstellung, die zeigt, wie Nutzer (Akteure) mit einem System interagieren können.
>>Es beschreibt die verschiedenen *Use Cases* (Anwendungsfälle) und die Beziehungen zwischen ihnen und den Akteuren. Solche Diagramme helfen, die Anforderungen an ein System zu verstehen und zu planen, indem sie die Funktionen aus Sicht der Benutzer visualisieren.

![TEQoGCUjPw4PopfwMAIGuFwSrY.png](/img/user/02%20-%20RESOURCES/Files/TEQoGCUjPw4PopfwMAIGuFwSrY.png)

---

# Zweck und Verwendung

>[!info] Wofür werden Use-Case-Diagramme verwendet?
>Anwendungsfalldiagramme dienen der **Anforderungsanalyse** und helfen dabei:
>- System-Funktionalitäten aus **Nutzersicht** zu definieren
>- **Systemgrenzen** klar zu ziehen
>- **Beziehungen zwischen Akteuren** und Use Cases zu visualisieren
>- **Projektumfang** festzulegen

**Typische Einsatzbereiche:**
```text
┌────────────────────────────────────────┐
│  Anforderungsanalyse                   │
│  ↓                                     │
│  System-Design                         │
│  ↓                                     │
│  Kommunikation mit Stakeholdern        │
│  ↓                                     │
│  Testplanung                           │
└────────────────────────────────────────┘
```

---

# Grundelemente

>Ein Anwendungsfalldiagramm besteht aus **vier Hauptelementen**:

1. **Akteure (Actors)** - Wer nutzt das System?
2. **Use Cases** - Was kann das System tun?
3. **Beziehungen** - Wie hängen Use Cases zusammen?
4. **Systemgrenzen** - Was gehört zum System?

**Visuelles Beispiel:**

```text
     O                    ┌───────────────────────────┐
    /|\                   │     SYSTEM                │
    / \                   │                           │
   Kunde ──────────►  (Use Case 1)                │
                          │         │                │
     O                    │         │                │
    /|\                   │         ↓                │
    / \                   │    (Use Case 2)          │
   Admin ──────────►  │                           │
                          └───────────────────────────┘
```

---

# Komponenten im Detail

>Um Anwendungsfalldiagramme vollständig zu verstehen, müssen wir die einzelnen Komponenten kennen:

- [[02 - RESOURCES/Notes/UML-Use-Case-Akteur\|UML-Use-Case-Akteur]]
- [[02 - RESOURCES/Notes/UML-Use-Case-Include\|UML-Use-Case-Include]]
- [[02 - RESOURCES/Notes/UML-Use-Case-Extend\|UML-Use-Case-Extend]]
- [[02 - RESOURCES/Notes/UML-Use-Case-Generalisierung\|UML-Use-Case-Generalisierung]]

---

# Vollständiges Beispiel: Bibliotheks-System

```text
                    ┌────────────────────────────────────────────┐
                    │        BIBLIOTHEKS-SYSTEM                  │
                    │                                            │
     O              │  ┌─────────────────────┐                  │
    /|\             │  │ Katalog durchsuchen │                  │
    / \             │  └─────────────────────┘                  │
  Besucher ────────┼────────────┘                               │
                    │                                            │
     △              │                                            │
     │              │  ┌─────────────────┐                      │
  ───┴───           │  │ Buch ausleihen  │                      │
  │     │           │  └─────────────────┘                      │
  O     O           │         │                                  │
 /|\   /|\          │         │ <<include>>                     │
 / \   / \          │         ↓                                  │
Gast Mitglied──────┼───►┌──────────────┐                       │
       │            │    │Benutzer prüfen│                      │
       │            │    └──────────────┘                       │
       │            │                                            │
       ├────────────┼───►┌─────────────────┐                   │
       │            │    │ Buch verlängern │                   │
       │            │    └─────────────────┘                   │
       │            │                                            │
       └────────────┼───►┌─────────────────┐                   │
                    │    │  Reservieren    │                   │
                    │    └─────────────────┘                   │
                    │         △                                  │
                    │         │ <<extend>>                      │
                    │         │                                  │
                    │    ┌─────────────────────────┐            │
                    │    │ E-Mail-Benachrichtigung │            │
                    │    └─────────────────────────┘            │
                    │                                            │
                    └────────────────────────────────────────────┘
```

**Erklärung:**
- **Besucher**: Basis-Akteur
- **Gast/Mitglied**: Spezialisierte Akteure (Generalisierung)
- **Katalog durchsuchen**: Für alle Besucher
- **Buch ausleihen** inkludiert **Benutzer prüfen** (Include)
- **Reservieren** kann optional **E-Mail-Benachrichtigung** auslösen (Extend)

---

# Erstellen eines Use-Case-Diagramms

>[!tip] Schritte zum Erstellen
>1. **Akteure identifizieren**: Wer nutzt das System?
>2. **Use Cases definieren**: Was soll das System tun?
>3. **Systemgrenzen zeichnen**: Was ist Teil des Systems?
>4. **Beziehungen modellieren**: Include, Extend, Generalisierung
>5. **Validieren**: Mit Stakeholdern überprüfen

**Beispiel-Workflow:**

```text
Schritt 1: Akteure sammeln
    Kunde, Administrator, Zahlungssystem

Schritt 2: Use Cases sammeln
    Bestellen, Bezahlen, Produkte verwalten

Schritt 3: Systemgrenze ziehen
    [System: Online-Shop]

Schritt 4: Beziehungen hinzufügen
    Bestellen <<include>> Bezahlen
    Bestellen <<extend>> Gutschein einlösen

Schritt 5: Review mit Team
    ✓ Vollständig? Korrekt?
```

---

# Häufige Fehler

>[!warning] Typische Fehler vermeiden
>
>**❌ Zu technische Use Cases:**
>```
>Falsch: "Datenbank abfragen"
>Richtig: "Produkte suchen"
>```
>
>**❌ Implementierungsdetails:**
>```
>Falsch: "SQL-Query ausführen"
>Richtig: "Kundendaten abrufen"
>```
>
>**❌ Falsche Beziehungsrichtung:**
>```
>Falsch: [Anmelden] ◄── <<extend>> ── [Bestellen]
>Richtig: [Bestellen] ──── <<include>> ──► [Anmelden]
>```
>
>**❌ Zu viele Details:**
>```
>Falsch: 50 Use Cases mit allen Spezialfällen
>Richtig: 10-15 Haupt-Use-Cases
>```

---

# Use-Case-Diagramm vs. andere UML-Diagramme

| Diagramm                   | Zweck                            | Perspektive              |
| -------------------------- | -------------------------------- | ------------------------ |
| **Anwendungsfalldiagramm** | Was kann das System?             | Nutzersicht (extern)     |
| [[02 - RESOURCES/Notes/UML-Klassendiagramm\|UML-Klassendiagramm]]    | Wie ist das System strukturiert? | Entwicklersicht (intern) |
| [[02 - RESOURCES/Notes/UML-Sequenzdiagramme\|UML-Sequenzdiagramme]]   | Wie läuft eine Interaktion ab?   | Zeitlicher Ablauf        |
| [[02 - RESOURCES/Notes/UML-Aktivitätsdiagramm\|UML-Aktivitätsdiagramm]] | Wie läuft ein Prozess ab?        | Workflow/Prozess         |
| [[02 - RESOURCES/Notes/UML-Zustandsdiagramme\|UML-Zustandsdiagramme]]  | Welche Zustände hat ein Objekt?  | Zustandsübergänge        |

---

# Zusammenfassung

>[!summary] Anwendungsfalldiagramm - Kernpunkte
>- **Zweck**: System-Funktionalitäten aus Nutzersicht definieren
>- **Hauptelemente**: Akteure, Use Cases, Beziehungen, Systemgrenzen
>- **Beziehungen**: Include (Pflicht), Extend (Optional), Generalisierung (Vererbung)
>- **Verwendung**: Anforderungsanalyse, Projektplanung, Kommunikation
>- **Perspektive**: Externe Sicht auf das System

>[!tip] Merkhilfe
>Anwendungsfalldiagramme beantworten: **"WER macht WAS mit dem System?"**

---

# Verwandte Konzepte

- [[02 - RESOURCES/Notes/UML\|UML]] - Unified Modeling Language
- [[02 - RESOURCES/Notes/UML-Klassendiagramm\|UML-Klassendiagramm]] - Struktur des Systems
- [[02 - RESOURCES/Notes/UML-Sequenzdiagramme\|UML-Sequenzdiagramme]] - Zeitlicher Ablauf
- [[02 - RESOURCES/Notes/UML-Aktivitätsdiagramm\|UML-Aktivitätsdiagramm]] - Prozessabläufe
- [[Requirements Engineering\|Requirements Engineering]] - Anforderungsanalyse
- [[User Stories\|User Stories]] - Alternative Anforderungsdokumentation