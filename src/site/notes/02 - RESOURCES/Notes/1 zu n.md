---
{"dg-publish":true,"permalink":"/02-resources/notes/1-zu-n/","tags":["informatik/datenbank/kardinalität","informatik/er-modell","GFN/prüfungsrelevant/AP2"],"noteIcon":"","updated":"2025-11-12T15:03:02.000+01:00"}
---

>Eine 1:n-Beziehung (eins-zu-viele) liegt vor, wenn eine Instanz einer Entität mit mehreren Instanzen einer anderen Entität verbunden sein kann.
>>Die "1"-Seite hat genau einen Partner, die "n"-Seite kann viele haben. Die häufigste [[02 - RESOURCES/Notes/Relationship\|Relationship]]-Form in Datenbanken.

>[!summary] Kernpunkte
>Die **1:n-Beziehung** ist die **häufigste** Form einer [[02 - RESOURCES/Notes/Relationship\|Relationship]]:
>- Eine [[02 - RESOURCES/Notes/Entität\|Entität]] auf der "1"-Seite kann mit **vielen** [[02 - RESOURCES/Notes/Entität\|Entität]]en auf der "n"-Seite verbunden sein
>- Eine [[02 - RESOURCES/Notes/Entität\|Entität]] auf der "n"-Seite gehört zu **genau einer** [[02 - RESOURCES/Notes/Entität\|Entität]] auf der "1"-Seite
>- Beispiele: Kunde hat viele Bestellungen, Person besitzt viele Autos, Firma hat viele Mitarbeiter
>- **Foreign Key** kommt auf die "n"-Seite (die "viele"-Seite)

## ASCII-Diagramm: 1:n-Beziehung

```
1:n BEZIEHUNG (EINS-ZU-VIELE)

┌──────────────┐         ╱─────────╲         ┌──────────────┐
│    KUNDE     │────────<   hat     >────────│  BESTELLUNG  │
│              │    1                     n   │              │
├──────────────┤         ╲─────────╱         ├──────────────┤
│ KundenID(PK) │                             │ BestellID(PK)│
│ Name         │                             │ Datum        │
│ Email        │                             │ Betrag       │
│ Adresse      │                             │ KundenID(FK) │← FK!
└──────────────┘                             └──────────────┘

BEDEUTUNG:
→ Ein Kunde kann VIELE Bestellungen haben
→ Eine Bestellung gehört zu GENAU EINEM Kunden
```

## Visualisierung: 1:n im Detail

```
EINS-ZU-VIELE ZUORDNUNG (1:n)

Kunde (1)          Bestellungen (n)
    A    ─────────── Best_1
         ─────────── Best_2
         ─────────── Best_3

    B    ─────────── Best_4
         ─────────── Best_5

    C    (keine Bestellungen)

REGELN:
• Kunde A hat 3 Bestellungen
• Kunde B hat 2 Bestellungen
• Kunde C hat 0 Bestellungen (möglich!)
• Jede Bestellung gehört zu EINEM Kunden
• Eine Bestellung kann NICHT zu 2 Kunden gehören
```

## Implementierung in Datenbanken

```
FOREIGN KEY AUF DER "n"-SEITE

Tabelle: KUNDE (die "1"-Seite)
┌──────────┬─────────┬─────────────────┬────────────────┐
│KundenID  │  Name   │     Email       │    Adresse     │
├──────────┼─────────┼─────────────────┼────────────────┤
│    1     │ Müller  │ anna@mail.de    │ Berlin Str. 10 │
│    2     │ Schmidt │ max@mail.de     │ Hamburg Weg 5  │
│    3     │ Klein   │ lea@mail.de     │ München Pl. 8  │
└──────────┴─────────┴─────────────────┴────────────────┘

Tabelle: BESTELLUNG (die "n"-Seite)
┌──────────┬────────────┬─────────┬──────────┐
│BestellID │   Datum    │ Betrag  │KundenID  │ ← Foreign Key!
├──────────┼────────────┼─────────┼──────────┤
│   101    │ 2025-11-01 │  99.99€ │    1     │ (Müller)
│   102    │ 2025-11-05 │ 149.50€ │    1     │ (Müller)
│   103    │ 2025-11-08 │  79.99€ │    1     │ (Müller)
│   104    │ 2025-11-10 │ 199.00€ │    2     │ (Schmidt)
│   105    │ 2025-11-12 │  59.90€ │    2     │ (Schmidt)
└──────────┴────────────┴─────────┴──────────┘

→ Kunde 1 (Müller) hat 3 Bestellungen
→ Kunde 2 (Schmidt) hat 2 Bestellungen
→ Kunde 3 (Klein) hat 0 Bestellungen
```

## Weitere Beispiele für 1:n-Beziehungen

```
TYPISCHE 1:n-BEZIEHUNGEN

┌─────────────────────────────────────────────────┐
│  PERSON (1) <──> AUTO (n)                       │
│  → Eine Person besitzt mehrere Autos            │
│  → Ein Auto gehört zu einer Person              │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│  FIRMA (1) <──> MITARBEITER (n)                 │
│  → Eine Firma hat viele Mitarbeiter             │
│  → Ein Mitarbeiter arbeitet für eine Firma      │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│  BUCH (1) <──> KAPITEL (n)                      │
│  → Ein Buch hat viele Kapitel                   │
│  → Ein Kapitel gehört zu einem Buch             │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│  KATEGORIE (1) <──> PRODUKT (n)                 │
│  → Eine Kategorie enthält viele Produkte        │
│  → Ein Produkt gehört zu einer Kategorie        │
└─────────────────────────────────────────────────┘
```

## n:1 vs. 1:n (gleiche Bedeutung!)

```
n:1 IST DASSELBE WIE 1:n

VARIANTE 1: "1:n" Perspektive
┌─────────┐      ┌──────────┐
│ KUNDE   │──1:n─│BESTELLUNG│
└─────────┘      └──────────┘
"Ein Kunde hat n Bestellungen"


VARIANTE 2: "n:1" Perspektive
┌──────────┐      ┌─────────┐
│BESTELLUNG│──n:1─│ KUNDE   │
└──────────┘      └─────────┘
"n Bestellungen gehören zu einem Kunden"

→ BEIDE SIND GLEICH!
→ Nur unterschiedliche Leserichtung
→ Foreign Key ist IMMER auf der "n"-Seite
```

## 1:n in beiden Richtungen

```
ZWEI 1:n-BEZIEHUNGEN KOMBINIERT

┌──────────────┐         ┌──────────────┐         ┌──────────────┐
│  ABTEILUNG   │────1:n──│ MITARBEITER  │──n:1────│    PROJEKT   │
│              │         │              │         │              │
├──────────────┤         ├──────────────┤         ├──────────────┤
│AbteilungID   │         │MitarbeiterID │         │ ProjektID    │
│Name          │         │Name          │         │ Titel        │
└──────────────┘         │AbteilungID(FK)│        │              │
                         │ProjektID (FK)│         └──────────────┘
                         └──────────────┘

→ Eine Abteilung hat viele Mitarbeiter (1:n)
→ Ein Projekt hat viele Mitarbeiter (1:n)
→ Ein Mitarbeiter gehört zu einer Abteilung (n:1)
→ Ein Mitarbeiter arbeitet an einem Projekt (n:1)
```

>[!important] Wichtig für AP2
>**1:n-Beziehung Merkmale:**
>- **Häufigste** Beziehungsart in Datenbanken
>- Foreign Key kommt **IMMER auf die "n"-Seite** (die "viele"-Seite)
>- "1"-Seite = **Parent/Eltern**, "n"-Seite = **Child/Kinder**
>
>**Implementierung:**
>- FK auf der "n"-Seite verweist auf PK der "1"-Seite
>- FK darf **NULL** sein (wenn "n"-Seite optional ist)
>- FK ist **NICHT UNIQUE** (sonst wäre es [[02 - RESOURCES/Notes/1 zu 1\|1 zu 1]]!)
>
>**Typische Prüfungsfrage:** "Wo kommt der Foreign Key bei einer 1:n-Beziehung hin?"
>→ Antwort: Auf die "n"-Seite (die "viele"-Seite)

>[!example] Praxis-Beispiel: Blog-System

**Szenario:** Ein Blog hat mehrere Artikel

```
ER-DIAGRAMM: BLOG-SYSTEM

┌──────────────┐         ╱─────────╲         ┌──────────────┐
│    AUTOR     │────────< schreibt  >────────│   ARTIKEL    │
│              │    1                     n   │              │
├──────────────┤         ╲─────────╱         ├──────────────┤
│ AutorID (PK) │                             │ ArtikelID(PK)│
│ Name         │                             │ Titel        │
│ Email        │                             │ Inhalt       │
│ Bio          │                             │ Datum        │
└──────────────┘                             │ AutorID (FK) │← FK!
                                             └──────────────┘


DATEN-BEISPIEL:

Tabelle: AUTOR
┌─────────┬──────────┬──────────────────┬────────────────────────┐
│ AutorID │   Name   │      Email       │          Bio           │
├─────────┼──────────┼──────────────────┼────────────────────────┤
│    1    │  Anna    │ anna@blog.de     │ Tech-Bloggerin         │
│    2    │  Max     │ max@blog.de      │ Reise-Blogger          │
└─────────┴──────────┴──────────────────┴────────────────────────┘

Tabelle: ARTIKEL
┌──────────┬────────────────────┬─────────────┬─────────┐
│ArtikelID │       Titel        │    Datum    │ AutorID │
├──────────┼────────────────────┼─────────────┼─────────┤
│   101    │ Java Basics        │ 2025-11-01  │    1    │
│   102    │ Python Tutorial    │ 2025-11-05  │    1    │
│   103    │ SQL für Anfänger   │ 2025-11-08  │    1    │
│   104    │ Reise nach Spanien │ 2025-11-10  │    2    │
│   105    │ Thailand Tipps     │ 2025-11-12  │    2    │
└──────────┴────────────────────┴─────────────┴─────────┘

→ Autorin Anna (ID=1) hat 3 Artikel geschrieben
→ Autor Max (ID=2) hat 2 Artikel geschrieben

SQL-ABFRAGE: Alle Artikel von Anna
SELECT * FROM ARTIKEL WHERE AutorID = 1;

SQL-ABFRAGE: Wie viele Artikel pro Autor?
SELECT AutorID, COUNT(*) AS Anzahl
FROM ARTIKEL
GROUP BY AutorID;
```

>[!tip] Praxis-Tipps für AP2
>1. **Eselsbrücke:** "1:n = Ein Vater, n Kinder" (FK bei den Kindern!)
>2. **FK-Regel:** Foreign Key IMMER auf der "n"-Seite (viele-Seite)
>3. **Erkennungs-Tipp:** Wenn eine Seite "kann mehrere haben" sagt → 1:n
>4. **Parent-Child:** "1"-Seite = Parent, "n"-Seite = Child
>5. **Typische Fehler:**
>   - FK auf falsche Seite (auf "1" statt "n")
>   - 1:n mit [[02 - RESOURCES/Notes/n zu m\|n zu m]] verwechseln (n:m braucht Zwischentabelle!)
>6. **SQL-Tipp:** `JOIN` zwischen Tabellen über FK auf "n"-Seite

## Verwandte Konzepte
- [[02 - RESOURCES/Notes/Relationship\|Relationship]] - Übergeordnetes Konzept
- [[02 - RESOURCES/Notes/1 zu 1\|1 zu 1]] - Eins-zu-eins-Beziehung
- [[02 - RESOURCES/Notes/n zu m\|n zu m]] - Viele-zu-viele-Beziehung
- [[02 - RESOURCES/Notes/Entität\|Entität]] - Objekte in Beziehungen
- [[02 - RESOURCES/Notes/ER-Modell\|ER-Modell]] - Entity-Relationship-Modell
- [[02 - RESOURCES/Notes/Foreign Key\|Foreign Key]] - Fremdschlüssel zur Verbindung
- [[02 - RESOURCES/Notes/Primary Key\|Primary Key]] - Primärschlüssel

```mermaid
flowchart LR
    Besitzer <-- 1:n --> Auto

```