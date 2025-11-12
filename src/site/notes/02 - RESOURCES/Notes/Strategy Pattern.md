---
{"dg-publish":true,"permalink":"/02-resources/notes/strategy-pattern/","tags":["design-patterns/behavioral","oop/patterns","GFN/prüfungsrelevant/AP2/vorbereitung"],"noteIcon":"","updated":"2025-11-05T12:23:12.000+01:00"}
---


>Das [[02 - RESOURCES/Notes/Strategy Pattern\|Strategy Pattern]] erlaubt es dir, verschiedene Algorithmen austauschbar zu machen - du kannst zur Laufzeit entscheiden welchen Algorithmus du verwendest.

>>Wie verschiedene Zahlungsmethoden: Kreditkarte, PayPal, Überweisung - alle machen das Gleiche (bezahlen), aber auf unterschiedliche Weise.

## Grundidee

>[!quote] Definition
>Das [[02 - RESOURCES/Notes/Strategy Pattern\|Strategy Pattern]] definiert eine Familie von Algorithmen, kapselt jeden einzelnen und macht sie austauschbar.

### Problem ohne Strategy Pattern:

```java
class Bezahlung {
    void bezahlen(String methode, double betrag) {
        if (methode.equals("Kreditkarte")) {
            // Kreditkarten-Logik
            System.out.println("Bezahle " + betrag + " mit Kreditkarte");
        } else if (methode.equals("PayPal")) {
            // PayPal-Logik
            System.out.println("Bezahle " + betrag + " mit PayPal");
        } else if (methode.equals("Überweisung")) {
            // Überweisungs-Logik
            System.out.println("Bezahle " + betrag + " per Überweisung");
        }
    }
}
```

**Problem:**
- Viele if-else Statements
- Schwer erweiterbar (neue Zahlungsmethode = Code ändern)
- Verletzt [[02 - RESOURCES/Notes/OOP\|OOP]]-Prinzipien

## Lösung mit Strategy Pattern

### 1. Strategy Interface

```java
// Das Interface definiert die Strategie
interface BezahlStrategy {
    void bezahlen(double betrag);
}
```

### 2. Konkrete Strategien

```java
// Konkrete Strategie: Kreditkarte
class KreditkarteStrategy implements BezahlStrategy {
    private String kartenNummer;

    public KreditkarteStrategy(String kartenNummer) {
        this.kartenNummer = kartenNummer;
    }

    public void bezahlen(double betrag) {
        System.out.println("Bezahle " + betrag + " mit Kreditkarte " + kartenNummer);
    }
}

// Konkrete Strategie: PayPal
class PayPalStrategy implements BezahlStrategy {
    private String email;

    public PayPalStrategy(String email) {
        this.email = email;
    }

    public void bezahlen(double betrag) {
        System.out.println("Bezahle " + betrag + " mit PayPal-Konto " + email);
    }
}

// Konkrete Strategie: Überweisung
class ÜberweisungStrategy implements BezahlStrategy {
    private String iban;

    public ÜberweisungStrategy(String iban) {
        this.iban = iban;
    }

    public void bezahlen(double betrag) {
        System.out.println("Überweise " + betrag + " an IBAN " + iban);
    }
}
```

### 3. Context-Klasse

```java
class Warenkorb {
    private BezahlStrategy bezahlStrategy;

    // Setze Strategie zur Laufzeit
    public void setBezahlStrategy(BezahlStrategy strategy) {
        this.bezahlStrategy = strategy;
    }

    // Verwende aktuelle Strategie
    public void checkout(double betrag) {
        bezahlStrategy.bezahlen(betrag);
    }
}
```

### 4. Verwendung

```java
public class Main {
    public static void main(String[] args) {
        Warenkorb warenkorb = new Warenkorb();

        // Kunde wählt Kreditkarte
        warenkorb.setBezahlStrategy(
            new KreditkarteStrategy("1234-5678-9012")
        );
        warenkorb.checkout(100.0);  // Bezahle 100.0 mit Kreditkarte

        // Kunde wechselt zu PayPal
        warenkorb.setBezahlStrategy(
            new PayPalStrategy("kunde@email.com")
        );
        warenkorb.checkout(50.0);   // Bezahle 50.0 mit PayPal
    }
}
```

## UML-Diagramm

```
┌─────────────────┐
│   Warenkorb     │
├─────────────────┤
│ - strategy      │
├─────────────────┤
│ + setStrategy() │
│ + checkout()    │
└────────┬────────┘
         │
         │ verwendet
         ▼
┌─────────────────────┐
│ <<interface>>       │
│  BezahlStrategy     │
├─────────────────────┤
│ + bezahlen(betrag)  │
└──────────▲──────────┘
           │
           │ implementiert
     ┌─────┴─────┬─────────────┐
     │           │             │
┌────┴────┐ ┌───┴────┐ ┌──────┴──────┐
│Kredit-  │ │PayPal- │ │Überweisungs-│
│karte    │ │Strategy│ │Strategy     │
└─────────┘ └────────┘ └─────────────┘
```

## Vorteile

>[!check] Vorteile
>- **Austauschbarkeit** - Algorithmen zur Laufzeit wechseln
>- **Erweiterbarkeit** - Neue Strategien einfach hinzufügen
>- **Keine if-else Kaskaden** - Sauberer Code
>- **[[Open-Closed Principle\|Open-Closed Principle]]** - Offen für Erweiterung, geschlossen für Änderung
>- **Testbarkeit** - Jede Strategie einzeln testbar

## Nachteile

>[!fail] Nachteile
>- **Mehr Klassen** - Jede Strategie ist eine eigene [[02 - RESOURCES/Notes/Java klasse\|Klasse]]
>- **Client muss Strategien kennen** - Muss wissen welche es gibt
>- **Overhead** - Für einfache Fälle eventuell zu komplex

## Weitere Beispiele

### Sortier-Strategien

```java
interface SortStrategy {
    void sort(int[] arr);
}

class BubbleSortStrategy implements SortStrategy {
    public void sort(int[] arr) {
        // Bubble Sort Implementierung
    }
}

class QuickSortStrategy implements SortStrategy {
    public void sort(int[] arr) {
        // Quick Sort Implementierung
    }
}

class Sortierer {
    private SortStrategy strategy;

    public void setStrategy(SortStrategy strategy) {
        this.strategy = strategy;
    }

    public void sortieren(int[] arr) {
        strategy.sort(arr);
    }
}
```

**Verwendung:**
```java
Sortierer sortierer = new Sortierer();

// Für kleine Arrays
sortierer.setStrategy(new BubbleSortStrategy());
sortierer.sortieren(kleinesArray);

// Für große Arrays
sortierer.setStrategy(new QuickSortStrategy());
sortierer.sortieren(großesArray);
```

### Kompressions-Strategien

```java
interface KompressionsStrategy {
    byte[] komprimiere(byte[] daten);
}

class ZipStrategy implements KompressionsStrategy {
    public byte[] komprimiere(byte[] daten) {
        // ZIP Kompression
        return komprimierteDaten;
    }
}

class GzipStrategy implements KompressionsStrategy {
    public byte[] komprimiere(byte[] daten) {
        // GZIP Kompression
        return komprimierteDaten;
    }
}
```

## Wann Strategy Pattern nutzen?

>[!success] Nutze Strategy Pattern wenn:
>- Du mehrere Varianten eines Algorithmus hast
>- Du Algorithmen zur Laufzeit wechseln willst
>- Du viele if-else oder switch-Statements vermeiden willst
>- Algorithmen unabhängig vom Client sein sollen

>[!fail] Nutze es NICHT wenn:
>- Du nur einen Algorithmus hast
>- Strategien sich nie ändern
>- Overhead zu groß für einfache Fälle

## Unterschied zu anderen Patterns

### Strategy vs [[Factory Pattern\|Factory Pattern]]

| Aspekt | [[02 - RESOURCES/Notes/Strategy Pattern\|Strategy Pattern]] | [[Factory Pattern\|Factory Pattern]] |
|--------|---------------------|---------------------|
| Zweck | Algorithmus austauschbar machen | [[02 - RESOURCES/Notes/Java Objekt\|Objekte]] erstellen |
| Wann wählen | Zur Laufzeit | Bei Erstellung |
| Fokus | Verhalten | Erzeugung |

### Strategy vs State Pattern

| Aspekt | [[02 - RESOURCES/Notes/Strategy Pattern\|Strategy Pattern]] | State Pattern |
|--------|---------------------|---------------|
| Zweck | Algorithmus wechseln | Zustand wechseln |
| Wechsel | Von außen | Automatisch intern |
| Beispiel | Zahlungsmethode wählen | Automaten-Zustände |

## Prüfungsrelevanz AP2

>[!important] Für AP2 wichtig
>- **Definition** erklären können
>- **UML-Diagramm** zeichnen
>- **Vorteile/Nachteile** nennen
>- **Beispiel-Code** verstehen
>- **Wann einsetzen** begründen

**Typische Prüfungsfrage:**
>"Erkläre das Strategy Pattern anhand eines Beispiels und zeige den Unterschied zu einer if-else Lösung."

## Verwandte Konzepte

- [[02 - RESOURCES/Notes/Design Patterns\|Design Patterns]] - Übergeordnetes Konzept
- [[Factory Pattern\|Factory Pattern]] - Erzeugungsmuster
- [[Observer Pattern\|Observer Pattern]] - Verhaltensmuster
- [[02 - RESOURCES/Notes/Singleton\|Singleton]] - Erzeugungsmuster
- [[02 - RESOURCES/Notes/OOP\|OOP]] - Objektorientierte Programmierung
- [[02 - RESOURCES/Notes/Polymorphie\|Polymorphie]] - Basis-Konzept für Strategy
- [[02 - RESOURCES/Notes/Java Interface\|Java Interface]] - Technische Umsetzung

## Zusammenfassung

>[!quote] Kern-Aussage
>Das [[02 - RESOURCES/Notes/Strategy Pattern\|Strategy Pattern]] macht Algorithmen austauschbar, indem es sie in separate Klassen kapselt und über ein gemeinsames [[02 - RESOURCES/Notes/Java Interface\|Interface]] zugänglich macht.

**Merksatz:**
>"Verschiedene Wege führen zum Ziel - wähle den Weg zur Laufzeit!"
