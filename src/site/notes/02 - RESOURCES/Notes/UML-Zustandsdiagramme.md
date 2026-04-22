---
{"dg-publish":true,"permalink":"/02-resources/notes/uml-zustandsdiagramme/","tags":["ausbildung/gfn/ap1/vorbereitung","uml/zustandsdiagramm","informatik/softwareentwicklung"],"noteIcon":"","updated":"2025-11-06T11:48:14.000+01:00"}
---

>Ein **Zustandsdiagramm** ist ein [[02 - RESOURCES/Notes/UML\|UML]]-Diagramm, das das Verhalten eines Objekts über seinen gesamten Lebenszyklus darstellt, indem es die verschiedenen Zustände und die Übergänge zwischen diesen Zustände visualisiert.
>>Zustandsdiagramme werden verwendet, um zu modellieren, wie sich ein Objekt in Reaktion auf Ereignisse verhält. Sie zeigen, welche Zustände ein Objekt annehmen kann und unter welchen Bedingungen es von einem Zustand in einen anderen wechselt.

>[!important] Wichtig für die Prüfung
>Zustandsdiagramme sind besonders wichtig für:
>- Modellierung von Objektverhalten über Zeit
>- Darstellung von Lebenszyklen (z.B. Bestellung, Ticket, Verbindung)
>- Ereignisgesteuerte Systeme
>- Zustandsabhängiges Verhalten

---

# Wann verwendet man Zustandsdiagramme?

>Zustandsdiagramme eignen sich besonders für:
>- **Objekte mit verschiedenen Zuständen**: z.B. Aufträge (neu, in Bearbeitung, abgeschlossen, storniert)
>- **Ereignisgesteuerte Systeme**: Reaktion auf Benutzeraktionen oder Systemereignisse
>- **Lebenszyklen**: Modellierung der verschiedenen Phasen eines Objekts
>- **Protokolle und Verbindungen**: z.B. TCP-Verbindungen (CLOSED, LISTEN, ESTABLISHED)

>[!example] Typische Beispiele
>- Bestellstatus in einem Online-Shop
>- Ampelsteuerung
>- Tür (offen/geschlossen/verriegelt)
>- Ticket-System (offen, in Bearbeitung, geschlossen)
>- Spielerzustand (spielend, pausiert, game over)

---

# Grundelemente eines Zustandsdiagramms

## Startzustand (Initial State)
>Der **Startzustand** markiert den Beginn des Zustandsdiagramms. Jedes Diagramm hat **genau einen** Startzustand.

**Symbol**: Ausgefüllter schwarzer Kreis ⚫

```
⚫ ──→ [Erster Zustand]
```

## Zustand (State)
>Ein **Zustand** repräsentiert eine Phase oder Situation, in der sich ein Objekt befinden kann. In diesem Zustand wartet das Objekt auf Ereignisse.

**Symbol**: Rechteck mit abgerundeten Ecken

```
┌─────────────────┐
│  Zustandsname   │
├─────────────────┤
│ entry / Aktion  │
│ do / Aktivität  │
│ exit / Aktion   │
└─────────────────┘
```

>[!info] Zustandskomponenten
>- **Name**: Beschreibt den Zustand (z.B. "Wartend", "Aktiv")
>- **entry**: Aktionen beim Betreten des Zustands
>- **do**: Aktivitäten während des Zustands
>- **exit**: Aktionen beim Verlassen des Zustands

## Übergang (Transition)
>Ein **Übergang** ist eine Verbindung zwischen zwei Zuständen. Er wird ausgelöst durch ein Ereignis und kann eine Bedingung und Aktion haben.

**Symbol**: Pfeil von einem Zustand zum anderen

```
[Zustand A] ─── Ereignis [Bedingung] / Aktion ──→ [Zustand B]
```

**Syntax**: `Ereignis [Bedingung] / Aktion`

- **Ereignis**: Was löst den Übergang aus? (z.B. "Knopf drücken")
- **Bedingung** [optional]: Unter welcher Bedingung? (z.B. `[Geld >= Preis]`)
- **Aktion** [optional]: Was wird beim Übergang gemacht? (z.B. `/ Getränk ausgeben`)

>[!tip] Tipp
>Nicht alle Teile müssen immer angegeben werden. Oft reicht nur das Ereignis.

## Endzustand (Final State)
>Der **Endzustand** markiert das Ende des Lebenszyklus. Ein Diagramm kann **mehrere** Endzustände haben oder gar keinen (bei Endlosschleifen).

**Symbol**: Ausgefüllter schwarzer Kreis mit Ring ⊚

```
[Letzter Zustand] ──→ ⊚
```

---

# Visuelles Beispiel: Tür-Zustandsdiagramm

```
         ⚫ (Start)
          │
          │
          ↓
    ┌──────────┐
    │   Zu     │
    └──────────┘
          │
          │ öffnen
          ↓
    ┌──────────┐
    │  Offen   │◄────┐
    └──────────┘     │
          │          │
          │ schließen│ entriegeln
          ↓          │
    ┌──────────┐     │
    │   Zu     │─────┤
    └──────────┘     │
          │          │
          │ verriegeln
          ↓
    ┌──────────┐
    │ Verriegelt│
    └──────────┘
```

---

# Praktisches Beispiel: Bestellsystem

```
                    ⚫ (Start)
                     │
                     │ Bestellung aufgeben
                     ↓
              ┌─────────────┐
              │    Neu      │
              └─────────────┘
                     │
                     │ bezahlen [Zahlung erfolgreich] / Rechnung erstellen
                     ↓
              ┌─────────────┐
              │  Bezahlt    │
              └─────────────┘
                     │
                     │ versenden / Tracking-Nummer vergeben
                     ↓
              ┌─────────────┐
              │  Versendet  │
              └─────────────┘
                     │
                     │ zustellen
                     ↓
              ┌─────────────┐
              │ Zugestellt  │
              └─────────────┘
                     │
                     │
                     ↓
                     ⊚ (Ende)
```

>[!example] Beschreibung des Ablaufs
>1. **Start**: Kunde gibt Bestellung auf
>2. **Neu**: Bestellung ist im System erfasst
>3. **Bezahlt**: Zahlung wurde erfolgreich durchgeführt, Rechnung wird erstellt
>4. **Versendet**: Ware wurde verschickt, Tracking-Nummer wurde vergeben
>5. **Zugestellt**: Bestellung ist beim Kunden angekommen
>6. **Ende**: Lebenszyklus der Bestellung ist abgeschlossen

---

# Code-Beispiel: Ampelsteuerung

```java
public class Ampel {
    // Enum für die verschiedenen Zustände
    enum Zustand {
        ROT, ROT_GELB, GRUEN, GELB
    }

    private Zustand aktuellerZustand;

    // Konstruktor: Ampel startet im Zustand ROT
    public Ampel() {
        this.aktuellerZustand = Zustand.ROT;
    }

    // Methode für den Übergang zum nächsten Zustand
    public void naechsterZustand() {
        switch (aktuellerZustand) {
            case ROT:
                aktuellerZustand = Zustand.ROT_GELB;
                System.out.println("Übergang: ROT → ROT_GELB");
                break;
            case ROT_GELB:
                aktuellerZustand = Zustand.GRUEN;
                System.out.println("Übergang: ROT_GELB → GRÜN");
                break;
            case GRUEN:
                aktuellerZustand = Zustand.GELB;
                System.out.println("Übergang: GRÜN → GELB");
                break;
            case GELB:
                aktuellerZustand = Zustand.ROT;
                System.out.println("Übergang: GELB → ROT");
                break;
        }
    }

    public Zustand getAktuellerZustand() {
        return aktuellerZustand;
    }
}
```

**Zugehöriges Zustandsdiagramm:**

```
           ⚫ (Start)
            │
            ↓
      ┌──────────┐
      │   ROT    │◄────────┐
      └──────────┘         │
            │              │
            │ Timer        │ Timer
            ↓              │
      ┌──────────┐         │
      │ ROT_GELB │         │
      └──────────┘         │
            │              │
            │ Timer        │
            ↓              │
      ┌──────────┐         │
      │  GRÜN    │         │
      └──────────┘         │
            │              │
            │ Timer        │
            ↓              │
      ┌──────────┐         │
      │   GELB   │─────────┘
      └──────────┘
```

>[!note] Hinweis
>Die Ampel durchläuft die Zustände in einer Endlosschleife - es gibt keinen Endzustand.

---

# Erweiterte Konzepte

## Zusammengesetzte Zustände (Composite States)
>Ein Zustand kann weitere Unterzustände enthalten. Das nennt man einen **zusammengesetzten Zustand**.

```
┌─────────────────────────────────┐
│        Betriebsbereit           │
│  ┌──────────┐    ┌──────────┐  │
│  │  Leerlauf │───→│  Aktiv   │  │
│  └──────────┘    └──────────┘  │
└─────────────────────────────────┘
```

## Parallele Zustände (Concurrent States)
>Objekte können sich gleichzeitig in mehreren Zuständen befinden (parallele Regionen).

>[!warning] Achtung
>Parallele Zustände sind komplex und sollten nur bei echtem Bedarf verwendet werden.

---

# Unterschied zu anderen UML-Diagrammen

| Diagramm | Zweck | Fokus |
|----------|-------|-------|
| [[02 - RESOURCES/Notes/UML-Zustandsdiagramme\|UML-Zustandsdiagramme]] | Verhalten eines **einzelnen Objekts** über Zeit | Zustände und Übergänge |
| [[02 - RESOURCES/Notes/UML-Aktivitätsdiagramm\|UML-Aktivitätsdiagramm]] | Ablauf von **Aktivitäten** im System | Prozessschritte und Kontrolle |
| [[02 - RESOURCES/Notes/UML-Sequenzdiagramme\|UML-Sequenzdiagramme]] | **Interaktion** zwischen mehreren Objekten | Nachrichtenaustausch zeitlich |
| [[02 - RESOURCES/Notes/UML-Klassendiagramm\|UML-Klassendiagramm]] | **Struktur** des Systems | Klassen und Beziehungen |

>[!tip] Merkhilfe
>- **Zustandsdiagramm** = "Wie verhält sich EIN Objekt?"
>- **Aktivitätsdiagramm** = "Was passiert im Prozess?"
>- **Sequenzdiagramm** = "Wie kommunizieren Objekte?"

---

# Best Practices

>[!success] Gute Praktiken
>- Aussagekräftige **Zustandsnamen** verwenden
>- **Einfach halten**: Nur relevante Zustände modellieren
>- **Ereignisse klar benennen**: Was löst den Übergang aus?
>- **Bedingungen in eckigen Klammern** notieren: `[Bedingung]`
>- **Startpunkt immer markieren** ⚫

>[!caution] Häufige Fehler
>- ❌ Zu viele Zustände (Überladung)
>- ❌ Unklare Übergangsbedingungen
>- ❌ Fehlender Startzustand
>- ❌ Verwechslung mit Aktivitätsdiagramm

---

# Zusammenfassung

>[!summary] Kernpunkte
>- **Zustandsdiagramme** modellieren das Verhalten eines Objekts über seinen Lebenszyklus
>- **Zustände** sind die verschiedenen Situationen, in denen sich ein Objekt befinden kann
>- **Übergänge** werden durch **Ereignisse** ausgelöst und können **Bedingungen** und **Aktionen** haben
>- **Ein Startzustand** ⚫, beliebig viele Zustände, **null oder mehr Endzustände** ⊚
>- Ideal für: Bestellsysteme, Tickets, Verbindungen, Spiellogik, Geschäftsprozesse

---

# Verwandte Konzepte

- [[02 - RESOURCES/Notes/UML\|UML]] - Unified Modeling Language Übersicht
- [[02 - RESOURCES/Notes/UML-Aktivitätsdiagramm\|UML-Aktivitätsdiagramm]] - Ablaufmodellierung
- [[02 - RESOURCES/Notes/UML-Sequenzdiagramme\|UML-Sequenzdiagramme]] - Objektinteraktionen
- [[02 - RESOURCES/Notes/UML-Klassendiagramm\|UML-Klassendiagramm]] - Strukturmodellierung
- [[02 - RESOURCES/Notes/UML-Anwendungsfalldiagramm\|UML-Anwendungsfalldiagramm]] - Use Cases
