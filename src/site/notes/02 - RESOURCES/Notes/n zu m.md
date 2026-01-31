---
{"dg-publish":true,"permalink":"/02-resources/notes/n-zu-m/","tags":["informatik/datenbank/kardinalität","informatik/er-modell","GFN/prüfungsrelevant/AP2"],"noteIcon":"","updated":"2025-11-19T21:01:23.000+01:00"}
---

>Eine n:m-Beziehung (viele-zu-viele) liegt vor, wenn mehrere Instanzen einer Entität mit mehreren Instanzen einer anderen Entität verbunden sein können.
>>Beide Seiten der [[02 - RESOURCES/Notes/Relationship\|Relationship]] haben die Kardinalität "viele" - erfordert IMMER eine Zwischentabelle (Assoziationstabelle) zur Implementierung.

>[!summary] Kernpunkte
>Die **n:m-Beziehung** ist die komplexeste [[02 - RESOURCES/Notes/Relationship\|Relationship]]-Form:
>- Eine [[02 - RESOURCES/Notes/Entität\|Entität]] auf Seite A kann mit **vielen** [[02 - RESOURCES/Notes/Entität\|Entität]]en auf Seite B verbunden sein
>- Eine [[02 - RESOURCES/Notes/Entität\|Entität]] auf Seite B kann mit **vielen** [[02 - RESOURCES/Notes/Entität\|Entität]]en auf Seite A verbunden sein
>- **WICHTIG:** Kann NICHT direkt in Datenbanken implementiert werden!
>- **Lösung:** Zwischentabelle (Assoziationstabelle) mit zwei Foreign Keys

## ASCII-Diagramm: n:m-Beziehung

```
n:m BEZIEHUNG (VIELE-ZU-VIELE)

┌──────────────┐         ╱─────────╲         ┌──────────────┐
│   STUDENT    │────────<  belegt   >────────│     KURS     │
│              │    n                     m   │              │
├──────────────┤         ╲─────────╱         ├──────────────┤
│ StudentID(PK)│                             │ KursID (PK)  │
│ Name         │                             │ Titel        │
│ Matrikel     │                             │ Credits      │
│ Email        │                             │ Dozent       │
└──────────────┘                             └──────────────┘

BEDEUTUNG:
→ Ein Student kann VIELE Kurse belegen
→ Ein Kurs kann von VIELEN Studenten belegt werden
→ PROBLEM: Kann nicht direkt implementiert werden!
```

## Visualisierung: n:m im Detail

```
VIELE-ZU-VIELE ZUORDNUNG (n:m)

Student               Kurse
  Anna  ─────────────── Mathe
        ─────────────── Informatik
        ─────────────── Physik

  Max   ─────────────── Mathe
        ─────────────── Chemie

  Lisa  ─────────────── Informatik
        ─────────────── Chemie
        ─────────────── Mathe

REGELN:
• Anna belegt 3 Kurse
• Max belegt 2 Kurse
• Lisa belegt 3 Kurse
• Mathe wird von 3 Studenten belegt
• Informatik wird von 2 Studenten belegt
• Chemie wird von 2 Studenten belegt
→ VIELE ZU VIELE!
```

## Auflösung mit Zwischentabelle (WICHTIG!)

```
n:m WIRD ZU ZWEI 1:n-BEZIEHUNGEN

SCHRITT 1: PROBLEM (n:m direkt - GEHT NICHT!)
┌──────────┐         ┌──────────┐
│ STUDENT  │───n:m───│   KURS   │
└──────────┘         └──────────┘
❌ Kann nicht direkt implementiert werden!


SCHRITT 2: LÖSUNG (Zwischentabelle einfügen)
┌──────────┐       ┌──────────────┐       ┌──────────┐
│ STUDENT  │──1:n──│  BELEGUNG    │──n:1──│   KURS   │
│          │       │ (Zwischen-   │       │          │
├──────────┤       │  tabelle)    │       ├──────────┤
│StudentID │       ├──────────────┤       │ KursID   │
│Name      │       │StudentID (FK)│       │ Titel    │
└──────────┘       │KursID (FK)   │       └──────────┘
                   │Note          │
                   │Semester      │
                   └──────────────┘
✓ Zwischentabelle hat ZWEI Foreign Keys!
```

## Implementierung in Datenbanken

```
DREI TABELLEN FÜR n:m-BEZIEHUNG

Tabelle: STUDENT
┌───────────┬──────────┬───────────┬─────────────────┐
│ StudentID │   Name   │ Matrikel  │      Email      │
├───────────┼──────────┼───────────┼─────────────────┤
│    1      │  Anna    │  12345    │ anna@uni.de     │
│    2      │  Max     │  12346    │ max@uni.de      │
│    3      │  Lisa    │  12347    │ lisa@uni.de     │
└───────────┴──────────┴───────────┴─────────────────┘

Tabelle: KURS
┌─────────┬─────────────┬─────────┬─────────────┐
│ KursID  │    Titel    │ Credits │   Dozent    │
├─────────┼─────────────┼─────────┼─────────────┤
│  101    │  Mathe      │    5    │ Prof. Müller│
│  102    │  Informatik │    6    │ Prof. Meyer │
│  103    │  Physik     │    5    │ Prof. Klein │
│  104    │  Chemie     │    4    │ Prof. Braun │
└─────────┴─────────────┴─────────┴─────────────┘

Tabelle: BELEGUNG (Zwischentabelle!)
┌───────────┬─────────┬──────┬──────────┬─────────────┐
│ BelegungID│StudentID│KursID│   Note   │  Semester   │ ← PK
│    (PK)   │  (FK)   │ (FK) │          │             │
├───────────┼─────────┼──────┼──────────┼─────────────┤
│     1     │    1    │ 101  │   1.7    │  WS2025     │ Anna → Mathe
│     2     │    1    │ 102  │   2.0    │  WS2025     │ Anna → Info
│     3     │    1    │ 103  │   2.3    │  WS2025     │ Anna → Physik
│     4     │    2    │ 101  │   1.3    │  WS2025     │ Max → Mathe
│     5     │    2    │ 104  │   1.0    │  WS2025     │ Max → Chemie
│     6     │    3    │ 102  │   1.7    │  WS2025     │ Lisa → Info
│     7     │    3    │ 104  │   2.7    │  WS2025     │ Lisa → Chemie
│     8     │    3    │ 101  │   3.0    │  WS2025     │ Lisa → Mathe
└───────────┴─────────┴──────┴──────────┴─────────────┘

→ Anna belegt 3 Kurse (Mathe, Info, Physik)
→ Max belegt 2 Kurse (Mathe, Chemie)
→ Lisa belegt 3 Kurse (Info, Chemie, Mathe)
→ Mathe wird von 3 Studenten belegt (Anna, Max, Lisa)
```

## Weitere Beispiele für n:m-Beziehungen

```
TYPISCHE n:m-BEZIEHUNGEN

┌─────────────────────────────────────────────────┐
│  AUTOR (n) <──> BUCH (m)                        │
│  → Ein Autor schreibt mehrere Bücher            │
│  → Ein Buch kann mehrere Autoren haben          │
│  Zwischentabelle: AUTORSCHAFT                   │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│  SCHAUSPIELER (n) <──> FILM (m)                 │
│  → Ein Schauspieler spielt in mehreren Filmen   │
│  → Ein Film hat mehrere Schauspieler            │
│  Zwischentabelle: BESETZUNG                     │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│  PRODUKT (n) <──> BESTELLUNG (m)                │
│  → Ein Produkt wird in mehreren Bestellungen    │
│  → Eine Bestellung enthält mehrere Produkte     │
│  Zwischentabelle: BESTELLPOSITION               │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│  ARZT (n) <──> PATIENT (m)                      │
│  → Ein Arzt behandelt mehrere Patienten         │
│  → Ein Patient wird von mehreren Ärzten behandelt│
│  Zwischentabelle: BEHANDLUNG                    │
└─────────────────────────────────────────────────┘
```

## Primärschlüssel der Zwischentabelle

```
ZWEI VARIANTEN FÜR PRIMARY KEY

VARIANTE 1: Composite Key (beide FKs zusammen)
┌─────────────────────────────────────────┐
│ BELEGUNG                                │
├─────────────────────────────────────────┤
│ StudentID (PK, FK)  ┐                   │
│ KursID (PK, FK)     ├→ Composite Key    │
│ Note                │                   │
│ Semester            │                   │
└─────────────────────────────────────────┘
PRO: Spart ID-Spalte
CON: Komplexer bei weiteren Beziehungen


VARIANTE 2: Eigener Primary Key (häufiger!)
┌─────────────────────────────────────────┐
│ BELEGUNG                                │
├─────────────────────────────────────────┤
│ BelegungID (PK)     → Eigener PK        │
│ StudentID (FK)                          │
│ KursID (FK)                             │
│ Note                                    │
│ Semester                                │
└─────────────────────────────────────────┘
PRO: Einfacher, besser erweiterbar
CON: Zusätzliche Spalte
```

>[!important] Wichtig für AP2
>**n:m-Beziehung Merkmale:**
>- Kann **NICHT direkt** in Datenbanken implementiert werden
>- **IMMER Zwischentabelle** (Assoziationstabelle) erforderlich!
>- Zwischentabelle enthält **zwei Foreign Keys** (zu beiden Original-Entitäten)
>- n:m wird zu **zwei 1:n-Beziehungen** aufgelöst
>
>**Implementierung:**
>1. Erstelle Zwischentabelle
>2. Füge FK zu Entität A hinzu
>3. Füge FK zu Entität B hinzu
>4. Optional: Weitere Attribute (z.B. Note, Datum)
>
>**Typische Prüfungsfrage:** "Wie implementiert man eine n:m-Beziehung?"
>→ Antwort: Mit einer Zwischentabelle, die zwei Foreign Keys enthält

>[!example] Praxis-Beispiel: Online-Shop

**Szenario:** Kunden bestellen Produkte (ein Kunde kann mehrere Produkte bestellen, ein Produkt kann von mehreren Kunden bestellt werden)

```
ER-DIAGRAMM: ONLINE-SHOP

┌──────────────┐         ╱─────────╲         ┌──────────────┐
│    KUNDE     │────────<  bestellt >────────│   PRODUKT    │
│              │    n                     m   │              │
├──────────────┤         ╲─────────╱         ├──────────────┤
│ KundenID(PK) │                             │ ProduktID(PK)│
│ Name         │                             │ Name         │
│ Email        │                             │ Preis        │
└──────────────┘                             └──────────────┘

AUFLÖSUNG:

┌──────────────┐       ┌────────────────┐       ┌──────────────┐
│    KUNDE     │──1:n──│ BESTELLPOSITION│──n:1──│   PRODUKT    │
├──────────────┤       ├────────────────┤       ├──────────────┤
│ KundenID(PK) │       │ PosID (PK)     │       │ ProduktID(PK)│
│ Name         │       │ KundenID (FK)  │       │ Name         │
│ Email        │       │ ProduktID (FK) │       │ Preis        │
└──────────────┘       │ Menge          │       └──────────────┘
                       │ Datum          │
                       └────────────────┘


DATEN-BEISPIEL:

Tabelle: KUNDE
┌──────────┬─────────┬─────────────────┐
│ KundenID │  Name   │      Email      │
├──────────┼─────────┼─────────────────┤
│    1     │  Anna   │ anna@mail.de    │
│    2     │  Max    │ max@mail.de     │
└──────────┴─────────┴─────────────────┘

Tabelle: PRODUKT
┌───────────┬───────────┬─────────┐
│ ProduktID │   Name    │  Preis  │
├───────────┼───────────┼─────────┤
│   101     │  Laptop   │  899€   │
│   102     │  Maus     │   29€   │
│   103     │  Tastatur │   59€   │
└───────────┴───────────┴─────────┘

Tabelle: BESTELLPOSITION (Zwischentabelle)
┌───────┬──────────┬───────────┬───────┬────────────┐
│ PosID │ KundenID │ ProduktID │ Menge │   Datum    │
├───────┼──────────┼───────────┼───────┼────────────┤
│   1   │    1     │   101     │   1   │ 2025-11-01 │ Anna → Laptop
│   2   │    1     │   102     │   2   │ 2025-11-01 │ Anna → 2x Maus
│   3   │    2     │   102     │   1   │ 2025-11-05 │ Max → Maus
│   4   │    2     │   103     │   1   │ 2025-11-05 │ Max → Tastatur
│   5   │    1     │   103     │   1   │ 2025-11-10 │ Anna → Tastatur
└───────┴──────────┴───────────┴───────┴────────────┘

→ Anna hat Laptop, 2× Maus, Tastatur bestellt
→ Max hat Maus und Tastatur bestellt
→ Laptop wurde 1× bestellt
→ Maus wurde 3× bestellt (2× Anna, 1× Max)
→ Tastatur wurde 2× bestellt
```

>[!tip] Praxis-Tipps für AP2
>1. **Eselsbrücke:** "n:m = Braucht immer eine Brücke (Zwischentabelle)!"
>2. **Erkennungs-Tipp:** Wenn BEIDE Seiten "kann mehrere haben" sagen → n:m
>3. **Zwischentabelle benennen:** Oft Kombination beider Entitäten oder Verb
>   - Student + Kurs → BELEGUNG
>   - Autor + Buch → AUTORSCHAFT
>   - Schauspieler + Film → BESETZUNG
>4. **Typische Fehler:**
>   - n:m direkt implementieren (GEHT NICHT!)
>   - Vergessen, dass Zwischentabelle ZWEI FKs braucht
>5. **SQL-Tipp:** Bei n:m braucht man meist zwei JOINs (über Zwischentabelle)

>[!important]
>Nicht mit [[02 - RESOURCES/Notes/1 zu n\|1 zu n]] verwechseln! Bei 1:n braucht man KEINE Zwischentabelle, bei n:m ist sie ZWINGEND erforderlich!

## Verwandte Konzepte
- [[02 - RESOURCES/Notes/Relationship\|Relationship]] - Übergeordnetes Konzept
- [[02 - RESOURCES/Notes/1 zu 1\|1 zu 1]] - Eins-zu-eins-Beziehung
- [[02 - RESOURCES/Notes/1 zu n\|1 zu n]] - Eins-zu-viele-Beziehung
- [[02 - RESOURCES/Notes/Entität\|Entität]] - Objekte in Beziehungen
- [[02 - RESOURCES/Notes/ER-Modell\|ER-Modell]] - Entity-Relationship-Modell
- [[02 - RESOURCES/Notes/Foreign Key\|Foreign Key]] - Fremdschlüssel in Zwischentabelle
- [[02 - RESOURCES/Notes/Primary Key\|Primary Key]] - Primärschlüssel

```mermaid
flowchart LR
    Student ---|n:m| Kurse
```