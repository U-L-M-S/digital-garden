---
{"dg-publish":true,"permalink":"/02-resources/notes/aequivalenzklasse/","tags":["informatik/testing","informatik/qualitätssicherung","GFN/prüfungsrelevant/AP2"],"noteIcon":"","updated":"2025-11-12T15:15:09.523+01:00"}
---

>Äquivalenzklassen sind Gruppen von Eingabewerten, die vom System gleich behandelt werden und daher als repräsentativ für die gesamte Gruppe getestet werden können.
>>Statt alle möglichen Werte zu testen, wird aus jeder Äquivalenzklasse EIN Vertreter getestet - spart Zeit und ist effizient.

>[!summary] Kernpunkte
>**Äquivalenzklassenbildung** ist eine Testtechnik:
>- Gruppiert Eingabewerte in **Klassen** (gültige + ungültige)
>- Innerhalb einer Klasse verhalten sich alle Werte **gleich**
>- Aus jeder Klasse wird **ein Vertreter** getestet
>- **Ziel:** Minimale Testfälle bei maximaler Abdeckung
>- Kombiniert mit [[Grenzwertanalyse\|Grenzwertanalyse]] besonders effektiv

## ASCII-Diagramm: Äquivalenzklassen

```
BEISPIEL: ALTERS-EINGABE (0-120 erlaubt)

ZAHLENSTRAHL MIT ÄQUIVALENZKLASSEN:

        UNGÜLTIG    │  GÜLTIG   │  UNGÜLTIG
    ◄───────────────┼───────────┼───────────►
   -∞              0          120         +∞

┌────────────────┬─────────────┬────────────────┐
│   KLASSE 1     │  KLASSE 2   │   KLASSE 3     │
│   (ungültig)   │  (gültig)   │   (ungültig)   │
├────────────────┼─────────────┼────────────────┤
│ Alter < 0      │ 0 ≤ Alter   │ Alter > 120    │
│                │   ≤ 120     │                │
├────────────────┼─────────────┼────────────────┤
│ Beispiele:     │ Beispiele:  │ Beispiele:     │
│ -10, -1, -500  │ 0, 25, 120  │ 121, 150, 999  │
├────────────────┼─────────────┼────────────────┤
│ TESTVERTRETER: │TESTVERTRETER│ TESTVERTRETER: │
│      -5        │     60      │     150        │
└────────────────┴─────────────┴────────────────┘

→ Statt 1000 Werte zu testen: NUR 3 Testfälle!
   (-5, 60, 150)
```

## Vorgehen bei Äquivalenzklassenbildung

```
SCHRITT-FÜR-SCHRITT

SCHRITT 1: SPEZIFIKATION ANALYSIEREN
┌─────────────────────────────────────────┐
│ "Alter muss zwischen 0 und 120 liegen"  │
│ "Nur positive ganze Zahlen"             │
└─────────────────────────────────────────┘

SCHRITT 2: GÜLTIGE KLASSEN BILDEN
┌─────────────────────────────────────────┐
│ Klasse G1: 0 ≤ Alter ≤ 120              │
└─────────────────────────────────────────┘

SCHRITT 3: UNGÜLTIGE KLASSEN BILDEN
┌─────────────────────────────────────────┐
│ Klasse U1: Alter < 0                    │
│ Klasse U2: Alter > 120                  │
│ Klasse U3: Keine Zahl (z.B. "abc")      │
│ Klasse U4: Dezimalzahl (z.B. 25.5)      │
└─────────────────────────────────────────┘

SCHRITT 4: TESTVERTRETER WÄHLEN
┌─────────────────────────────────────────┐
│ G1 → Testvertreter: 60                  │
│ U1 → Testvertreter: -10                 │
│ U2 → Testvertreter: 150                 │
│ U3 → Testvertreter: "abc"               │
│ U4 → Testvertreter: 25.5                │
└─────────────────────────────────────────┘

SCHRITT 5: TESTFÄLLE ERSTELLEN
┌─────────────────────────────────────────┐
│ TC1: Input=60   → Expected: Akzeptiert  │
│ TC2: Input=-10  → Expected: Fehler      │
│ TC3: Input=150  → Expected: Fehler      │
│ TC4: Input="abc"→ Expected: Fehler      │
│ TC5: Input=25.5 → Expected: Fehler      │
└─────────────────────────────────────────┘
```

## Beispiel: Email-Validierung

```
ÄQUIVALENZKLASSEN FÜR EMAIL

SPEZIFIKATION:
"Gültige Email: name@domain.com"

KLASSEN:

┌──────────────────────────────────────────────┐
│ GÜLTIGE KLASSEN (G)                          │
├──────────────────────────────────────────────┤
│ G1: Format "name@domain.com"                 │
│     Testvertreter: test@mail.com             │
├──────────────────────────────────────────────┤
│ G2: Mit Subdomain "name@sub.domain.com"      │
│     Testvertreter: info@support.google.com   │
└──────────────────────────────────────────────┘

┌──────────────────────────────────────────────┐
│ UNGÜLTIGE KLASSEN (U)                        │
├──────────────────────────────────────────────┤
│ U1: Kein @-Zeichen                           │
│     Testvertreter: testmail.com              │
├──────────────────────────────────────────────┤
│ U2: Kein Punkt nach @                        │
│     Testvertreter: test@mailcom              │
├──────────────────────────────────────────────┤
│ U3: @ am Anfang                              │
│     Testvertreter: @mail.com                 │
├──────────────────────────────────────────────┤
│ U4: Leerzeichen enthalten                    │
│     Testvertreter: test user@mail.com        │
├──────────────────────────────────────────────┤
│ U5: Leer                                     │
│     Testvertreter: ""                        │
└──────────────────────────────────────────────┘

→ Ergebnis: 7 Testfälle statt hunderte!
```

## Kombination mit Grenzwertanalyse

```
ÄQUIVALENZKLASSEN + GRENZWERTE

Beispiel: Rabatt-System (Bestellwert)

KLASSEN:
┌─────────────────────────────────────────┐
│ Bestellwert < 50€    → 0% Rabatt   (U1) │
│ 50€ ≤ Bestellwert < 100€ → 10% Rabatt(G1)│
│ Bestellwert ≥ 100€   → 20% Rabatt  (G2) │
└─────────────────────────────────────────┘

TESTVERTRETER (Äquivalenzklassen):
• U1: 25€ (Mitte der Klasse)
• G1: 75€ (Mitte der Klasse)
• G2: 150€ (Mitte der Klasse)

GRENZWERTE (zusätzlich):
• 49.99€ (untere Grenze von G1)
• 50.00€ (Grenze G1)
• 50.01€ (obere Grenze von U1)
• 99.99€ (untere Grenze von G2)
• 100.00€ (Grenze G2)
• 100.01€ (obere Grenze von G1)

        U1       │      G1        │      G2
    ──────────┬──┼────────────┬───┼──────────►
              49 50          99  100
              ↑  ↑           ↑   ↑
           Grenzwerte testen!
```

>[!important] Wichtig für AP2
>**Äquivalenzklassen-Regeln:**
>1. **Jede Klasse** wird mindestens 1x getestet
>2. **Innerhalb einer Klasse** verhalten sich alle Werte gleich
>3. **Gültige + Ungültige** Klassen bilden
>4. **Testvertreter** aus der Mitte der Klasse wählen
>5. **Kombination** mit Grenzwertanalyse erhöht Abdeckung
>
>**Vorteile:**
>- Reduziert Anzahl der Testfälle drastisch
>- Systematischer Ansatz
>- Hohe Fehlerabdeckung
>
>**Typische Prüfungsfrage:** "Warum verwendet man Äquivalenzklassen?"
>→ Antwort: Um mit wenigen Testfällen viele Eingabewerte abzudecken, da Werte innerhalb einer Klasse gleich behandelt werden

>[!example] Praxis-Beispiel: Ticket-Buchung

**Szenario:** Tickets kosten nach Alter:
- Kinder (0-17): 5€
- Erwachsene (18-64): 10€
- Senioren (65+): 7€

```
ÄQUIVALENZKLASSEN

┌─────────────────────────────────────────────┐
│ KLASSE K1: Kinder (0 ≤ Alter ≤ 17)          │
│ Erwarteter Preis: 5€                        │
│ Testvertreter: 10 Jahre                     │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│ KLASSE E1: Erwachsene (18 ≤ Alter ≤ 64)     │
│ Erwarteter Preis: 10€                       │
│ Testvertreter: 40 Jahre                     │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│ KLASSE S1: Senioren (Alter ≥ 65)            │
│ Erwarteter Preis: 7€                        │
│ Testvertreter: 75 Jahre                     │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│ KLASSE U1: Ungültig (Alter < 0)             │
│ Erwarteter Preis: Fehlermeldung             │
│ Testvertreter: -5 Jahre                     │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│ KLASSE U2: Ungültig (Alter > 120)           │
│ Erwarteter Preis: Fehlermeldung             │
│ Testvertreter: 150 Jahre                    │
└─────────────────────────────────────────────┘

TESTFÄLLE:
┌──────┬────────┬──────────┬──────────┐
│ TC#  │ Alter  │ Klasse   │ Erwartet │
├──────┼────────┼──────────┼──────────┤
│ 001  │   10   │ K1       │   5€     │
│ 002  │   40   │ E1       │  10€     │
│ 003  │   75   │ S1       │   7€     │
│ 004  │   -5   │ U1       │ Fehler   │
│ 005  │  150   │ U2       │ Fehler   │
└──────┴────────┴──────────┴──────────┘

MIT GRENZWERTANALYSE (zusätzlich):
┌──────┬────────┬──────────┬──────────┐
│ TC#  │ Alter  │ Position │ Erwartet │
├──────┼────────┼──────────┼──────────┤
│ 006  │   0    │ Grenze   │   5€     │
│ 007  │  17    │ Grenze   │   5€     │
│ 008  │  18    │ Grenze   │  10€     │
│ 009  │  64    │ Grenze   │  10€     │
│ 010  │  65    │ Grenze   │   7€     │
└──────┴────────┴──────────┴──────────┘

→ 10 Testfälle decken alle Fälle ab!
```

>[!tip] Praxis-Tipps für AP2
>1. **Visualisierung:** Zahlenstrahl zeichnen hilft!
>2. **Gültig ZUERST:** Erst gültige Klassen, dann ungültige
>3. **Mittelwert wählen:** Testvertreter aus Mitte der Klasse
>4. **Kombinieren:** Äquivalenzklassen + Grenzwerte = beste Abdeckung
>5. **Dokumentieren:** Klassen klar benennen (K1, E1, S1, U1, ...)
>6. **Typische Fehler:**
>   - Überlappende Klassen bilden
>   - Grenzwerte als Testvertreter wählen (das ist Grenzwertanalyse!)
>   - Ungültige Klassen vergessen

## Verwandte Konzepte
- [[02 - RESOURCES/Notes/Testfall\|Testfall]] - Konkrete Testbeschreibung
- [[Grenzwertanalyse\|Grenzwertanalyse]] - Testen an Grenzen
- [[Black-Box-Test\|Black-Box-Test]] - Testmethode ohne Code-Kenntnis
- [[Testabdeckung\|Testabdeckung]] - Wie viel wird getestet?
- [[Testplan\|Testplan]] - Sammlung von Tests
