---
{"dg-publish":true,"permalink":"/02-resources/notes/vererbung/","tags":["informatik/oop","informatik/java","informatik/uml","GFN/prüfungsrelevant/AP2"],"noteIcon":"","updated":"2025-11-12T15:05:55.000+01:00"}
---

>Vererbung (Inheritance) ist ein Grundprinzip der Objektorientierung, bei dem eine Klasse (Kindklasse) Eigenschaften und Methoden einer anderen Klasse (Elternklasse) übernimmt.
>>Ermöglicht Code-Wiederverwendung und Hierarchien. In Java mit `extends` realisiert.

>[!summary] Kernpunkte
>**Vererbung** ist eines der vier OOP-Prinzipien (neben Kapselung, Abstraktion, Polymorphismus):
>- **Kindklasse (Subclass)** erbt von **Elternklasse (Superclass)**
>- Kindklasse erhält automatisch alle Attribute und Methoden der Elternklasse
>- Kindklasse kann Methoden **überschreiben** (override)
>- Kindklasse kann **zusätzliche** Attribute/Methoden haben
>- Java-Keyword: `class Kind extends Eltern`

## ASCII-Diagramm: Vererbungshierarchie

```
VERERBUNG (IS-A BEZIEHUNG)

         ┌────────────┐
         │   TIER     │  ← Superclass (Elternklasse)
         ├────────────┤
         │ + name     │
         │ + alter    │
         │ + essen()  │
         │ + schlafen()│
         └─────▲──────┘
               │ extends (erbt von)
      ┌────────┴─────────┐
      │                  │
┌─────┴──────┐    ┌──────┴─────┐
│    HUND    │    │   KATZE    │ ← Subclasses (Kindklassen)
├────────────┤    ├────────────┤
│ + rasse    │    │ + fellfarbe│
│ + bellen() │    │ + miauen() │
└────────────┘    └────────────┘

BEDEUTUNG:
→ Hund IS-A (ist ein) Tier
→ Katze IS-A (ist ein) Tier
→ Hund erbt name, alter, essen(), schlafen()
→ Katze erbt name, alter, essen(), schlafen()
→ Hund hat zusätzlich: rasse, bellen()
→ Katze hat zusätzlich: fellfarbe, miauen()
```

## Java-Code-Beispiel

```java
// SUPERCLASS (Elternklasse)
public class Tier {
    protected String name;  // protected = Kinder können zugreifen
    protected int alter;

    public Tier(String name, int alter) {
        this.name = name;
        this.alter = alter;
    }

    public void essen() {
        System.out.println(name + " isst.");
    }

    public void schlafen() {
        System.out.println(name + " schläft.");
    }
}

// SUBCLASS (Kindklasse)
public class Hund extends Tier {  // ← extends = erbt von
    private String rasse;

    public Hund(String name, int alter, String rasse) {
        super(name, alter);  // ← ruft Konstruktor der Elternklasse auf
        this.rasse = rasse;
    }

    public void bellen() {  // ← neue Methode, nur bei Hund
        System.out.println(name + " bellt: Wuff!");
    }

    @Override  // ← überschreibt Methode der Elternklasse
    public void essen() {
        System.out.println(name + " frisst Hundefutter.");
    }
}

// SUBCLASS (Kindklasse)
public class Katze extends Tier {
    private String fellfarbe;

    public Katze(String name, int alter, String fellfarbe) {
        super(name, alter);
        this.fellfarbe = fellfarbe;
    }

    public void miauen() {  // ← neue Methode, nur bei Katze
        System.out.println(name + " miaut: Miau!");
    }
}
```

## UML-Klassendiagramm

```
UML: VERERBUNG (GENERALISIERUNG)

┌─────────────────────────┐
│        <<Tier>>         │  ← Abstrakt/Superclass
├─────────────────────────┤
│ - name: String          │
│ - alter: int            │
├─────────────────────────┤
│ + essen(): void         │
│ + schlafen(): void      │
└───────────▲─────────────┘
            │
            │ ▲ Vererbungspfeil (zeigt zur Elternklasse)
            │
    ┌───────┴────────┐
    │                │
┌───┴────────────┐  ┌┴──────────────┐
│      Hund      │  │     Katze     │
├────────────────┤  ├───────────────┤
│ - rasse: String│  │ - fellfarbe:  │
├────────────────┤  │   String      │
│ + bellen():void│  ├───────────────┤
└────────────────┘  │ + miauen():void│
                    └───────────────┘

NOTATION:
─────▷  Leerer Pfeil = Vererbung (Generalisierung)
```

## Vererbungskette (Mehrstufig)

```
MEHRSTUFIGE VERERBUNG

      ┌─────────────┐
      │   OBJEKT    │  ← Alle Java-Klassen erben von Object
      └──────▲──────┘
             │
      ┌──────┴──────┐
      │  LEBEWESEN  │
      └──────▲──────┘
             │
      ┌──────┴──────┐
      │    TIER     │
      └──────▲──────┘
             │
      ┌──────┴──────┐
      │   SÄUGETIER │
      └──────▲──────┘
             │
      ┌──────┴──────┐
      │    HUND     │
      └─────────────┘

→ Hund erbt von Säugetier
→ Säugetier erbt von Tier
→ Tier erbt von Lebewesen
→ Lebewesen erbt von Object
→ Hund hat ALLE Methoden aller Elternklassen!
```

## super vs. this

```
SUPER VS. THIS

┌─────────────────────────────────────────────┐
│  this                                       │
│  → Verweist auf AKTUELLE Instanz            │
│  → Zugriff auf eigene Attribute/Methoden    │
│                                             │
│  Beispiel:                                  │
│  this.name = "Bello";                       │
│  this.bellen();                             │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│  super                                      │
│  → Verweist auf ELTERNKLASSE                │
│  → Zugriff auf Eltern-Attribute/Methoden    │
│  → Aufruf des Eltern-Konstruktors           │
│                                             │
│  Beispiel:                                  │
│  super(name, alter);  // Eltern-Konstruktor │
│  super.essen();       // Eltern-Methode     │
└─────────────────────────────────────────────┘
```

## Vererbung vs. Komposition

```
VERERBUNG VS. KOMPOSITION

VERERBUNG ("IS-A" Beziehung)
┌────────────────────────────────┐
│  class Hund extends Tier       │
│  → Hund IST EIN Tier           │
└────────────────────────────────┘

    ┌────────┐
    │  Tier  │
    └────▲───┘
         │ extends
    ┌────┴───┐
    │  Hund  │
    └────────┘


KOMPOSITION ("HAS-A" Beziehung)  → [[02 - RESOURCES/Notes/UML-Komposition\|UML-Komposition]]
┌────────────────────────────────┐
│  class Auto {                  │
│    Motor motor;  // HAS-A      │
│  }                             │
│  → Auto HAT EINEN Motor        │
└────────────────────────────────┘

    ┌────────┐
    │  Auto  │◆────┐
    └────────┘     │
                   │ hat
              ┌────┴───┐
              │ Motor  │
              └────────┘
```

>[!important] Wichtig für AP2
>**Vererbung Grundregeln:**
>- In Java: **Nur Einfachvererbung** (eine Klasse kann nur von EINER Superclass erben)
>- Keyword: `extends` für Vererbung
>- `super()` im Konstruktor der Kindklasse ruft Eltern-Konstruktor auf
>- `@Override` Annotation beim Überschreiben von Methoden
>
>**Sichtbarkeitsmodifikatoren:**
>- `private`: Nur in eigener Klasse sichtbar (NICHT vererbt!)
>- `protected`: In eigener Klasse + Kindklassen sichtbar
>- `public`: Überall sichtbar
>
>**IS-A vs. HAS-A:**
>- IS-A → Vererbung (Hund ist ein Tier)
>- HAS-A → Komposition (Auto hat einen Motor)

>[!example] Praxis-Beispiel: Fahrzeug-Hierarchie

**Szenario:** Verschiedene Fahrzeugtypen mit gemeinsamen Eigenschaften

```java
// SUPERCLASS
public class Fahrzeug {
    protected String marke;
    protected int baujahr;
    protected double preis;

    public Fahrzeug(String marke, int baujahr, double preis) {
        this.marke = marke;
        this.baujahr = baujahr;
        this.preis = preis;
    }

    public void starten() {
        System.out.println(marke + " startet.");
    }

    public void info() {
        System.out.println("Marke: " + marke + ", Baujahr: " + baujahr);
    }
}

// SUBCLASS 1
public class Auto extends Fahrzeug {
    private int anzahlTueren;

    public Auto(String marke, int baujahr, double preis, int anzahlTueren) {
        super(marke, baujahr, preis);  // Eltern-Konstruktor
        this.anzahlTueren = anzahlTueren;
    }

    @Override
    public void starten() {
        System.out.println(marke + " (Auto) startet mit Schlüssel.");
    }

    public void tuereOeffnen() {
        System.out.println("Türe wird geöffnet.");
    }
}

// SUBCLASS 2
public class Motorrad extends Fahrzeug {
    private boolean hatBeiwagen;

    public Motorrad(String marke, int baujahr, double preis, boolean hatBeiwagen) {
        super(marke, baujahr, preis);
        this.hatBeiwagen = hatBeiwagen;
    }

    @Override
    public void starten() {
        System.out.println(marke + " (Motorrad) startet mit Kickstarter.");
    }

    public void wheelie() {
        System.out.println("Motorrad macht Wheelie!");
    }
}

// VERWENDUNG
public class Main {
    public static void main(String[] args) {
        Auto auto = new Auto("VW Golf", 2020, 25000, 5);
        Motorrad motorrad = new Motorrad("Harley", 2021, 18000, false);

        auto.starten();        // "VW Golf (Auto) startet mit Schlüssel."
        auto.info();           // Von Fahrzeug geerbt
        auto.tuereOeffnen();   // Nur bei Auto

        motorrad.starten();    // "Harley (Motorrad) startet mit Kickstarter."
        motorrad.info();       // Von Fahrzeug geerbt
        motorrad.wheelie();    // Nur bei Motorrad
    }
}
```

```
HIERARCHIE:

         ┌────────────────┐
         │   FAHRZEUG     │
         ├────────────────┤
         │ + marke        │
         │ + baujahr      │
         │ + preis        │
         │ + starten()    │
         │ + info()       │
         └────────▲───────┘
                  │
         ┌────────┴────────┐
         │                 │
    ┌────┴────────┐  ┌─────┴─────────┐
    │    AUTO     │  │   MOTORRAD    │
    ├─────────────┤  ├───────────────┤
    │+anzahlTueren│  │+hatBeiwagen   │
    │+tuereOeffnen│  │+wheelie()     │
    └─────────────┘  └───────────────┘
```

>[!tip] Praxis-Tipps für AP2
>1. **Eselsbrücke:** "extends = erweitert die Elternklasse"
>2. **IS-A Test:** Wenn "Kind IS-A Eltern" Sinn macht → Vererbung!
>3. **super() Regel:** MUSS als erstes im Konstruktor der Kindklasse stehen
>4. **@Override:** Immer verwenden beim Überschreiben (hilft Fehler vermeiden)
>5. **Typische Prüfungsfrage:** "Was erbt eine Kindklasse von der Elternklasse?"
>   → Antwort: Alle public/protected Attribute und Methoden (NICHT private!)
>6. **UML-Pfeil merken:** Leerer Pfeil zeigt IMMER zur Elternklasse (▷)

## Verwandte Konzepte
- [[02 - RESOURCES/Notes/UML-Assoziation\|UML-Assoziation]] - Andere UML-Beziehung
- [[UML-Komposition]] - HAS-A Beziehung
- [[02 - RESOURCES/Notes/UML-Aggregation\|UML-Aggregation]] - Schwache HAS-A Beziehung
- [[Polymorphismus\|Polymorphismus]] - Vielgestaltigkeit (nutzt Vererbung)
- [[Abstrakte Klasse\|Abstrakte Klasse]] - Spezielle Elternklasse
- [[Interface\|Interface]] - Alternative zu Vererbung
- [[02 - RESOURCES/Notes/Methode\|Methode]] - Werden vererbt und überschrieben
