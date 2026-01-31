---
{"dg-publish":true,"permalink":"/02-resources/notes/relationship/","tags":["informatik/datenbank","informatik/er-modell","GFN/prüfungsrelevant/AP2"],"noteIcon":"","updated":"2025-11-12T15:00:24.181+01:00"}
---

>Eine Relationship (Beziehung) beschreibt die Verbindung zwischen zwei oder mehr Entitäten im ER-Modell.
>>Sie definiert, wie [[02 - RESOURCES/Notes/Entität\|Entität]]en miteinander in Beziehung stehen (z.B. "Student belegt Kurs", "Person besitzt Auto").

>[!summary] Kernpunkte
>Eine **Relationship** (Beziehung) ist das Verbindungselement im **Entity-Relationship-Modell**:
>- Verbindet zwei oder mehr [[02 - RESOURCES/Notes/Entität\|Entität]]en miteinander
>- Wird durch **Kardinalitäten** spezifiziert ([[02 - RESOURCES/Notes/1 zu 1\|1 zu 1]], [[02 - RESOURCES/Notes/1 zu n\|1 zu n]], [[02 - RESOURCES/Notes/n zu m\|n zu m]])
>- Im ER-Diagramm als **Raute** dargestellt
>- Kann eigene **Attribute** haben (selten)

## ASCII-Diagramm: Relationship im ER-Modell

```
RELATIONSHIP (BEZIEHUNG)

┌───────────┐          ╱────────╲          ┌───────────┐
│  STUDENT  │─────────< belegt  >─────────│   KURS    │
└───────────┘          ╲────────╱          └───────────┘
   Entität A            Beziehung            Entität B
  (Rechteck)             (Raute)             (Rechteck)
      │                     │                     │
      │                     │                     │
    n:m                 Verbindung              n:m
(viele zu viele)       (Relationship)      (viele zu viele)


BEDEUTUNG:
→ Ein Student kann VIELE Kurse belegen
→ Ein Kurs kann von VIELEN Studenten belegt werden
→ Kardinalität: n:m (viele-zu-viele)
```

## Kardinalitäten: Übersicht

```
DREI HAUPTTYPEN VON BEZIEHUNGEN

┌─────────────────────────────────────────────────┐
│  1:1 (eins-zu-eins)                             │
│                                                 │
│  ┌─────────┐        ┌──────────┐               │
│  │ PERSON  │───1:1──│  REISE-  │               │
│  │         │        │   PASS   │               │
│  └─────────┘        └──────────┘               │
│                                                 │
│  → Eine Person hat EINEN Reisepass             │
│  → Ein Reisepass gehört EINER Person           │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│  1:n (eins-zu-viele)                            │
│                                                 │
│  ┌─────────┐        ┌──────────┐               │
│  │ KUNDE   │──1:n───│ BESTELLUNG│              │
│  │         │        │          │               │
│  └─────────┘        └──────────┘               │
│                                                 │
│  → Ein Kunde kann VIELE Bestellungen haben     │
│  → Eine Bestellung gehört zu EINEM Kunden      │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│  n:m (viele-zu-viele)                           │
│                                                 │
│  ┌─────────┐        ┌──────────┐               │
│  │ STUDENT │──n:m───│   KURS   │               │
│  │         │        │          │               │
│  └─────────┘        └──────────┘               │
│                                                 │
│  → Ein Student belegt VIELE Kurse              │
│  → Ein Kurs wird von VIELEN Studenten belegt   │
└─────────────────────────────────────────────────┘
```

## Relationship mit Attributen

```
BEZIEHUNG MIT EIGENEN ATTRIBUTEN (selten)

┌───────────────┐          ╱──────────╲          ┌───────────────┐
│   MITARBEITER │─────────<  arbeitet >─────────│    PROJEKT    │
│               │          │   an     │          │               │
│ • MitarbeiterID│         ╲──────────╱          │ • ProjektID   │
│ • Name        │              │                 │ • Name        │
└───────────────┘              │                 └───────────────┘
                               │
                          ┌────┴────┐
                          │ Attribute│
                          │ der      │
                          │ Beziehung│
                          ├─────────┤
                          │ • Rolle  │
                          │ • seit   │
                          │ • Std/W  │
                          └─────────┘

BEISPIEL:
Mitarbeiter "Anna" arbeitet an Projekt "Website":
- Rolle: Frontend-Entwickler
- seit: 2025-01-10
- Stunden/Woche: 20
```

## ER-Diagramm: Vollständiges Beispiel

```
VOLLSTÄNDIGES ER-DIAGRAMM

┌──────────────┐         ╱─────────╲        ┌──────────────┐
│   PERSON     │────────< besitzt  >───────│     AUTO     │
│              │    1    ╲─────────╱    n   │              │
├──────────────┤                            ├──────────────┤
│ PersonID(PK) │                            │ Kennz. (PK)  │
│ Name         │                            │ Marke        │
│ Vorname      │                            │ Modell       │
│ Geburtsdatum │                            │ Baujahr      │
└──────────────┘                            │ PersonID(FK) │
                                            └──────────────┘

LESEWEISE:
→ Eine Person (1) besitzt viele (n) Autos
→ Ein Auto (n) gehört zu einer (1) Person

IMPLEMENTIERUNG IN TABELLEN:

Tabelle: PERSON
┌──────────┬────────┬─────────┬──────────────┐
│PersonID  │ Name   │ Vorname │ Geburtsdatum │
├──────────┼────────┼─────────┼──────────────┤
│ 1        │ Müller │ Anna    │ 1990-05-12   │
│ 2        │ Schmidt│ Max     │ 1985-03-22   │
└──────────┴────────┴─────────┴──────────────┘

Tabelle: AUTO
┌────────────┬────────┬────────┬─────────┬──────────┐
│ Kennzeichen│ Marke  │ Modell │ Baujahr │PersonID  │
├────────────┼────────┼────────┼─────────┼──────────┤
│ B-AB-1234  │ VW     │ Golf   │ 2020    │    1     │← FK
│ B-CD-5678  │ BMW    │ X5     │ 2022    │    1     │← FK
│ M-EF-9012  │ Audi   │ A4     │ 2019    │    2     │← FK
└────────────┴────────┴────────┴─────────┴──────────┘
```

## n:m Beziehung mit Zwischentabelle

```
N:M BEZIEHUNG AUFLÖSEN (WICHTIG!)

PROBLEM: n:m kann nicht direkt implementiert werden!

┌─────────────┐         ╱────────╲         ┌─────────────┐
│   STUDENT   │────────<  belegt  >───────│    KURS     │
└─────────────┘    n    ╲────────╱    m    └─────────────┘

LÖSUNG: Zwischentabelle (Assoziationstabelle)

┌─────────────┐       ┌──────────────┐      ┌─────────────┐
│   STUDENT   │──1:n──│ BELEGUNG     │──n:1─│    KURS     │
│             │       │ (Zwischen-   │      │             │
├─────────────┤       │  tabelle)    │      ├─────────────┤
│ StudentID   │       ├──────────────┤      │ KursID      │
│ Name        │       │StudentID (FK)│      │ Titel       │
└─────────────┘       │KursID (FK)   │      │ Credits     │
                      │ Note         │      └─────────────┘
                      │ Semester     │
                      └──────────────┘


IMPLEMENTIERUNG:

Tabelle: STUDENT
┌───────────┬──────────┐
│ StudentID │   Name   │
├───────────┼──────────┤
│    1      │  Anna    │
│    2      │  Max     │
└───────────┴──────────┘

Tabelle: KURS
┌─────────┬─────────────┬─────────┐
│ KursID  │    Titel    │ Credits │
├─────────┼─────────────┼─────────┤
│   101   │  Mathe      │    5    │
│   102   │  Informatik │    6    │
└─────────┴─────────────┴─────────┘

Tabelle: BELEGUNG (Zwischentabelle)
┌───────────┬─────────┬──────┬──────────┐
│ StudentID │ KursID  │ Note │ Semester │
├───────────┼─────────┼──────┼──────────┤
│    1      │  101    │ 1.7  │ WS2025   │
│    1      │  102    │ 2.0  │ WS2025   │
│    2      │  101    │ 1.3  │ WS2025   │
└───────────┴─────────┴──────┴──────────┘

→ Anna belegt Mathe (Note 1.7) und Informatik (2.0)
→ Max belegt Mathe (Note 1.3)
```

>[!important] Wichtig für AP2
>**Relationship-Notation im ER-Diagramm:**
>- **Raute** = Beziehung zwischen Entitäten
>- **Rechteck** = [[02 - RESOURCES/Notes/Entität\|Entität]]
>- **Oval** = Attribut
>
>**Kardinalitäten:**
>- **1:1** → [[02 - RESOURCES/Notes/1 zu 1\|1 zu 1]] (eins-zu-eins)
>- **1:n** → [[02 - RESOURCES/Notes/1 zu n\|1 zu n]] (eins-zu-viele)
>- **n:m** → [[02 - RESOURCES/Notes/n zu m\|n zu m]] (viele-zu-viele, braucht Zwischentabelle!)
>
>**Wichtig:** Bei **n:m-Beziehungen** muss eine **Zwischentabelle** (Assoziationstabelle) erstellt werden!

>[!example] Praxis-Beispiel: Bibliothek

**Szenario:** Eine Bibliothek verwaltet Bücher und Ausleihvorgänge

```
ER-DIAGRAMM: BIBLIOTHEK

┌──────────────┐        ╱─────────╲        ┌──────────────┐
│    BENUTZER  │───────<  leiht   >───────│     BUCH     │
│              │   n    │   aus    │   m   │              │
├──────────────┤        ╲─────────╱        ├──────────────┤
│ BenutzerID   │            │              │ ISBN (PK)    │
│ Name         │            │              │ Titel        │
│ Email        │       ┌────┴────┐         │ Autor        │
└──────────────┘       │Attribute│         │ Verlag       │
                       ├─────────┤         └──────────────┘
                       │ von     │
                       │ bis     │
                       │ verlängt│
                       └─────────┘

AUFLÖSUNG MIT ZWISCHENTABELLE:

┌──────────────┐      ┌──────────────┐      ┌──────────────┐
│   BENUTZER   │─1:n──│   AUSLEIHE   │──n:1─│     BUCH     │
├──────────────┤      ├──────────────┤      ├──────────────┤
│ BenutzerID   │      │ AusleiheID   │      │ ISBN (PK)    │
│ Name         │      │ BenutzerID(FK)│     │ Titel        │
│ Email        │      │ ISBN (FK)    │      │ Autor        │
└──────────────┘      │ von          │      └──────────────┘
                      │ bis          │
                      │ verlängert   │
                      └──────────────┘


DATEN-BEISPIEL:

BENUTZER:
┌────────────┬──────────┬──────────────────┐
│ BenutzerID │   Name   │      Email       │
├────────────┼──────────┼──────────────────┤
│    1       │  Anna    │ anna@mail.de     │
│    2       │  Max     │ max@mail.de      │
└────────────┴──────────┴──────────────────┘

BUCH:
┌───────────────┬──────────────────┬────────────┐
│     ISBN      │      Titel       │   Autor    │
├───────────────┼──────────────────┼────────────┤
│ 978-3-12345   │ Java lernen      │ Schmidt    │
│ 978-3-67890   │ Python Basics    │ Müller     │
└───────────────┴──────────────────┴────────────┘

AUSLEIHE:
┌───────────┬────────────┬───────────────┬────────────┬────────────┬──────────┐
│ AusleiheID│ BenutzerID │     ISBN      │    von     │    bis     │verlängert│
├───────────┼────────────┼───────────────┼────────────┼────────────┼──────────┤
│     1     │     1      │ 978-3-12345   │ 2025-11-01 │ 2025-11-15 │   Nein   │
│     2     │     1      │ 978-3-67890   │ 2025-11-05 │ 2025-11-19 │   Ja     │
│     3     │     2      │ 978-3-12345   │ 2025-11-10 │ 2025-11-24 │   Nein   │
└───────────┴────────────┴───────────────┴────────────┴────────────┴──────────┘

→ Anna hat beide Bücher ausgeliehen
→ Max hat "Java lernen" ausgeliehen
```

>[!tip] Praxis-Tipps für AP2
>1. **Rauten-Regel:** Beziehungen sind IMMER Rauten im ER-Diagramm
>2. **Eselsbrücke:** "Relationship = Verbindungslinie zwischen Entitäten"
>3. **n:m merken:** Bei n:m IMMER Zwischentabelle erstellen!
>4. **Leserichtung:** Beziehung immer als Verb formulieren ("besitzt", "belegt", "kauft")
>5. **Typische Prüfungsfrage:** "Wie wird eine n:m-Beziehung in Tabellen umgesetzt?"
>   → Antwort: Mit einer Zwischentabelle (Assoziationstabelle), die Foreign Keys zu beiden Entitäten enthält
>6. **Foreign Key:** Bei 1:n kommt der FK auf die "viele"-Seite

## Verwandte Konzepte
- [[02 - RESOURCES/Notes/Entität\|Entität]] - Objekte, die in Beziehung stehen
- [[02 - RESOURCES/Notes/1 zu 1\|1 zu 1]] - Eins-zu-eins-Beziehung
- [[02 - RESOURCES/Notes/1 zu n\|1 zu n]] - Eins-zu-viele-Beziehung
- [[02 - RESOURCES/Notes/n zu m\|n zu m]] - Viele-zu-viele-Beziehung
- [[02 - RESOURCES/Notes/ER-Modell\|ER-Modell]] - Entity-Relationship-Modell
- [[02 - RESOURCES/Notes/Foreign Key\|Foreign Key]] - Fremdschlüssel zur Verbindung
- [[02 - RESOURCES/Notes/Primary Key\|Primary Key]] - Primärschlüssel der Entitäten
