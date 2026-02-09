---
{"dg-publish":true,"permalink":"/02-resources/notes/entitaet/","tags":["informatik/datenbank","informatik/er-modell","GFN/prüfungsrelevant/AP2","psychologie"],"noteIcon":"","updated":"2025-11-12T14:58:55.000+01:00"}
---

>Eine Entität ist ein eindeutig identifizierbares Objekt der realen Welt oder der Vorstellungswelt.
>>Im ER-Modell repräsentiert eine Entität ein "Ding" oder "Objekt", dem Attribute zugeordnet werden können (z.B. Person, Auto, Produkt).

>[!summary] Kernpunkte
>Eine **Entität** (Entity) ist ein zentrales Konzept im **Entity-Relationship-Modell (ER-Modell)**:
>- Repräsentiert ein Objekt der realen oder abstrakten Welt
>- Wird durch **Attribute** beschrieben
>- Hat einen **eindeutigen Schlüssel** (Primary Key)
>- Steht in **Beziehungen** ([[02 - RESOURCES/Notes/Relationship\|Relationship]]) zu anderen Entitäten

## ASCII-Diagramm: Entität im ER-Modell

```
ENTITÄT (ENTITY)

┌───────────────────────────────┐
│         PERSON                │  ← Entitätstyp
├───────────────────────────────┤
│ PersonID (PK)  : int          │  ← Primary Key
│ Name           : string       │  ← Attribut
│ Vorname        : string       │  ← Attribut
│ Geburtsdatum   : date         │  ← Attribut
│ Email          : string       │  ← Attribut
└───────────────────────────────┘

BEISPIELE (Entitäten = Instanzen):
┌──────────────────────────────────┐
│ PersonID: 1                      │
│ Name: Müller                     │
│ Vorname: Anna                    │
│ Geburtsdatum: 1995-03-15         │
│ Email: anna@beispiel.de          │
└──────────────────────────────────┘

┌──────────────────────────────────┐
│ PersonID: 2                      │
│ Name: Schmidt                    │
│ Vorname: Max                     │
│ Geburtsdatum: 1988-07-22         │
│ Email: max@beispiel.de           │
└──────────────────────────────────┘
```

## Entitätstyp vs. Entität

```
UNTERSCHIED: TYP vs. INSTANZ

┌─────────────────────────────────────────────┐
│         ENTITÄTSTYP                         │
│         (Entity Type)                       │
│                                             │
│  = Blueprint / Vorlage / Klasse             │
│  = Beschreibt STRUKTUR                      │
│                                             │
│  Beispiel: "AUTO"                           │
│  - Kennzeichen (PK)                         │
│  - Modell                                   │
│  - Baujahr                                  │
│  - Farbe                                    │
└─────────────────────────────────────────────┘
              │
              │ wird konkretisiert zu
              ↓
┌─────────────────────────────────────────────┐
│         ENTITÄTEN                           │
│         (Entities = Instanzen)              │
│                                             │
│  = Konkrete Ausprägungen                    │
│  = DATEN                                    │
│                                             │
│  Beispiel 1:                                │
│  - Kennzeichen: "B-AB-1234"                 │
│  - Modell: "VW Golf"                        │
│  - Baujahr: 2020                            │
│  - Farbe: "Blau"                            │
│                                             │
│  Beispiel 2:                                │
│  - Kennzeichen: "M-CD-5678"                 │
│  - Modell: "BMW X5"                         │
│  - Baujahr: 2022                            │
│  - Farbe: "Schwarz"                         │
└─────────────────────────────────────────────┘
```

## Beispiel: Person und Auto

```
ER-DIAGRAMM MIT ENTITÄTEN

┌───────────────┐              ┌───────────────┐
│    PERSON     │              │     AUTO      │
├───────────────┤              ├───────────────┤
│ PersonID (PK) │              │ Kennz. (PK)   │
│ Name          │──besitzt──>  │ Modell        │
│ Vorname       │    (1:n)     │ Baujahr       │
│ Alter         │              │ Farbe         │
└───────────────┘              └───────────────┘
```

**Attribute und Datentypen:**

|        | Person      |     |
| ------ | ----------- | --- |
| int    | PersonID    | PK  |
| string | Name        |     |
| string | Vorname     |     |
| int    | Alter       |     |

|        | Auto          |     |
| ------ | ------------- | --- |
| string | Kennzeichnung | PK  |
| string | Modell        |     |
| int    | Baujahr       |     |
| string | Farbe         |     |

## Schlüssel (Keys)

```
SCHLÜSSELTYPEN

┌────────────────────────────────────────────┐
│  PRIMARY KEY (PK)                          │
│  = Primärschlüssel                         │
│  → Identifiziert Entität EINDEUTIG         │
│  → Darf NICHT NULL sein                    │
│  → Pro Tabelle NUR EINER                   │
│                                            │
│  Beispiel: PersonID, Kennzeichen           │
└────────────────────────────────────────────┘

┌────────────────────────────────────────────┐
│  FOREIGN KEY (FK)                          │
│  = Fremdschlüssel                          │
│  → Verweist auf PK einer anderen Tabelle   │
│  → Stellt Beziehung her                    │
│  → Kann mehrfach vorkommen                 │
│                                            │
│  Beispiel: PersonID in Tabelle "Auto"      │
│  (verweist auf Person)                     │
└────────────────────────────────────────────┘
```

>[!important] Wichtig für AP2
>**Entität = Objekt mit eindeutiger Identität**
>- Jede Entität braucht einen **Primary Key (PK)**
>- Entitäten haben **Attribute** (Eigenschaften)
>- Entitäten stehen in **Beziehungen** zueinander
>
>**Unterschied:**
>- **Entitätstyp** = Struktur/Schema (z.B. "Auto")
>- **Entität** = Konkrete Instanz (z.B. "B-AB-1234")
>
>**ER-Modell Notation:**
>- Rechteck = Entitätstyp
>- Raute = [[02 - RESOURCES/Notes/Relationship\|Relationship]] (Beziehung)
>- Oval = Attribut

>[!example] Praxis-Beispiel: Online-Shop

**Szenario:** Ein Online-Shop hat Kunden und Bestellungen

```
ER-DIAGRAMM: ONLINE-SHOP

┌─────────────────┐              ┌─────────────────┐
│     KUNDE       │              │   BESTELLUNG    │
├─────────────────┤              ├─────────────────┤
│ KundenID (PK)   │              │ BestellNr (PK)  │
│ Name            │──tätigt──>   │ Datum           │
│ Email           │    (1:n)     │ Betrag          │
│ Adresse         │              │ Status          │
└─────────────────┘              └─────────────────┘

ENTITÄT KUNDE (Beispiel):
┌──────────────────────────────┐
│ KundenID: 12345              │
│ Name: Anna Müller            │
│ Email: anna@mail.de          │
│ Adresse: Berliner Str. 10    │
└──────────────────────────────┘

ENTITÄT BESTELLUNG (Beispiel):
┌──────────────────────────────┐
│ BestellNr: 98765             │
│ Datum: 2025-11-12            │
│ Betrag: 149.99€              │
│ Status: Versandt             │
│ KundenID: 12345 (FK)         │  ← Foreign Key!
└──────────────────────────────┘
```

>[!tip] Praxis-Tipps für AP2
>1. **Eselsbrücke:** "Entität = Ein Ding mit ID"
>2. **Rechteck-Regel:** Im ER-Diagramm sind Entitäten immer **Rechtecke**
>3. **PK-Regel:** Jede Entität braucht einen eindeutigen Schlüssel (meist ID)
>4. **Typische Prüfungsfrage:** "Was ist der Unterschied zwischen Entitätstyp und Entität?"
>   → Antwort: Entitätstyp = Schema/Struktur, Entität = konkrete Dateninstanz
>5. **Attribute benennen:** Immer sprechende Namen (nicht "Feld1", sondern "Name")

## Verwandte Konzepte
- [[02 - RESOURCES/Notes/Relationship\|Relationship]] - Beziehungen zwischen Entitäten
- [[02 - RESOURCES/Notes/ER-Modell\|ER-Modell]] - Entity-Relationship-Modell
- [[02 - RESOURCES/Notes/1 zu 1\|1 zu 1]] - Kardinalität von Beziehungen
- [[02 - RESOURCES/Notes/1 zu n\|1 zu n]] - Kardinalität von Beziehungen
- [[02 - RESOURCES/Notes/n zu m\|n zu m]] - Kardinalität von Beziehungen
- [[02 - RESOURCES/Notes/Primary Key\|Primary Key]] - Primärschlüssel
- [[02 - RESOURCES/Notes/Foreign Key\|Foreign Key]] - Fremdschlüssel
- [[02 - RESOURCES/Notes/Attribut\|Attribut]] - Eigenschaften einer Entität
