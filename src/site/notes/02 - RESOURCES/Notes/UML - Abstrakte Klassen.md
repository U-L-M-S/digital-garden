---
{"dg-publish":true,"permalink":"/02-resources/notes/uml-abstrakte-klassen/","tags":["uml/klassendiagramm","informatik/oop","ausbildung/gfn/ap1/vorbereitung"],"noteIcon":"","updated":"2025-11-07T15:46:11.000+01:00","dg-note-properties":{"tags":["uml/klassendiagramm","informatik/oop","ausbildung/gfn/ap1/vorbereitung"],"aliases":["UML abstrakte Klasse","abstrakte Klasse UML","UML abstract class","abstrakte Methoden UML"],"links":null,"created_date":"2025-11-07"}}
---

>In [[02 - RESOURCES/Notes/UML-Klassendiagramm\|UML-Klassendiagramm]]en werden **abstrakte Klassen** als Klassen dargestellt, die **nicht direkt instanziiert** werden können und als **Vorlage** für andere Klassen dienen.
>>Abstrakte Klassen enthalten oft abstrakte Methoden, die keine Implementierung haben und von den [[02 - RESOURCES/Notes/UML-Vererbung\|Unterklassen]] überschrieben werden müssen.

# Darstellung in UML

>[!important] Notation von abstrakten Klassen
>Es gibt **zwei Möglichkeiten**, abstrakte Klassen in UML zu kennzeichnen:
>
>1. **Kursive Schreibweise**: Der Klassenname wird _kursiv_ geschrieben
>2. **Stereotyp**: Der Klassenname wird mit `<<abstract>>` gekennzeichnet
>
>Beide Notationen sind in der UML-Spezifikation akzeptiert.

## Abstrakte Methoden

>**Abstrakte Methoden** werden ebenfalls _kursiv_ geschrieben oder mit dem Stereotyp `<<abstract>>` gekennzeichnet.
>>Sie haben **keine Implementierung** in der abstrakten Klasse und müssen in den Unterklassen überschrieben werden.

# Eigenschaften

>[!note] Eigenschaften abstrakter Klassen
>- Können **nicht direkt instanziiert** werden
>- Können sowohl **abstrakte** als auch **konkrete** Methoden enthalten
>- Können **Attribute** haben
>- Dienen als **Basisklassen** für andere Klassen
>- Definieren einen **gemeinsamen Bauplan** für verwandte Klassen

# Beispiel

>[!example] Abstrakte Klasse "Fahrzeug"
>```
>┌─────────────────────────┐
>│   <<abstract>>          │
>│      Fahrzeug           │
>├─────────────────────────┤
>│ - marke: String         │
>│ - geschwindigkeit: int  │
>├─────────────────────────┤
>│ + starten(): void       │
>│ + beschleunigen(): void │
>│ + bremsen(): void       │
>└─────────────────────────┘
>          △
>          │
>    ┌─────┴─────┐
>    │           │
>┌───────┐  ┌──────────┐
>│  Auto │  │ Motorrad │
>└───────┘  └──────────┘
>```
>
>In diesem Beispiel ist **Fahrzeug** eine abstrakte Klasse, die von **Auto** und **Motorrad** geerbt wird.

## Java-Beispiel

```java
// Abstrakte Klasse
public abstract class Fahrzeug {
    protected String marke;
    protected int geschwindigkeit;

    public Fahrzeug(String marke) {
        this.marke = marke;
        this.geschwindigkeit = 0;
    }

    // Konkrete Methode
    public void starten() {
        System.out.println(marke + " wird gestartet.");
    }

    // Abstrakte Methode (muss überschrieben werden)
    public abstract void beschleunigen();

    // Abstrakte Methode
    public abstract void bremsen();
}

// Konkrete Klasse
public class Auto extends Fahrzeug {
    public Auto(String marke) {
        super(marke);
    }

    @Override
    public void beschleunigen() {
        geschwindigkeit += 10;
        System.out.println("Auto beschleunigt auf " + geschwindigkeit + " km/h");
    }

    @Override
    public void bremsen() {
        geschwindigkeit -= 10;
        System.out.println("Auto bremst auf " + geschwindigkeit + " km/h");
    }
}
```

# Von konkreter zu abstrakter Klasse

>[!example] Beispiel: Abstrahierung von Formen
>**Ausgangssituation - Konkrete Klassen mit Duplikation:**
>
>Wir haben drei konkrete Klassen mit gemeinsamen Eigenschaften:
>
>```java
>// Konkrete Klasse 1
>public class Kreis {
>    private String farbe;
>    private double radius;
>
>    public void zeichnen() {
>        System.out.println("Zeichne einen " + farbe + "en Kreis");
>    }
>
>    public double berechneFlaeche() {
>        return Math.PI * radius * radius;
>    }
>}
>
>// Konkrete Klasse 2
>public class Rechteck {
>    private String farbe;
>    private double breite;
>    private double hoehe;
>
>    public void zeichnen() {
>        System.out.println("Zeichne ein " + farbe + "es Rechteck");
>    }
>
>    public double berechneFlaeche() {
>        return breite * hoehe;
>    }
>}
>
>// Konkrete Klasse 3
>public class Dreieck {
>    private String farbe;
>    private double basis;
>    private double hoehe;
>
>    public void zeichnen() {
>        System.out.println("Zeichne ein " + farbe + "es Dreieck");
>    }
>
>    public double berechneFlaeche() {
>        return (basis * hoehe) / 2;
>    }
>}
>```
>
>**Problem:**
>- Alle Klassen haben das Attribut `farbe`
>- Alle Klassen haben die Methode `zeichnen()` mit ähnlicher Logik
>- Alle Klassen haben `berechneFlaeche()`, aber unterschiedliche Implementierungen
>- **Code-Duplizierung** und keine gemeinsame Schnittstelle

## UML: Vorher vs. Nachher

**Vorher (konkrete Klassen ohne Abstraktion):**
```
┌──────────────┐   ┌──────────────┐   ┌──────────────┐
│    Kreis     │   │  Rechteck    │   │   Dreieck    │
├──────────────┤   ├──────────────┤   ├──────────────┤
│- farbe: String│   │- farbe: String│   │- farbe: String│
│- radius: double│  │- breite: double│  │- basis: double│
│              │   │- hoehe: double│   │- hoehe: double│
├──────────────┤   ├──────────────┤   ├──────────────┤
│+ zeichnen()  │   │+ zeichnen()  │   │+ zeichnen()  │
│+ berechneFlaeche()│ │+ berechneFlaeche()│ │+ berechneFlaeche()│
└──────────────┘   └──────────────┘   └──────────────┘
```

**Nachher (mit abstrakter Basisklasse):**
```
        ┌─────────────────────────┐
        │   <<abstract>>          │
        │        Form             │
        ├─────────────────────────┤
        │ # farbe: String         │
        ├─────────────────────────┤
        │ + zeichnen(): void      │
        │ + berechneFlaeche(): double (abstract) │
        │ + getFarbe(): String    │
        │ + setFarbe(String): void│
        └─────────────────────────┘
                   △
                   │
        ┌──────────┼──────────┐
        │          │          │
┌───────────┐ ┌──────────┐ ┌──────────┐
│   Kreis   │ │ Rechteck │ │ Dreieck  │
├───────────┤ ├──────────┤ ├──────────┤
│- radius   │ │- breite  │ │- basis   │
│           │ │- hoehe   │ │- hoehe   │
├───────────┤ ├──────────┤ ├──────────┤
│+ berechneFlaeche()│ │+ berechneFlaeche()│ │+ berechneFlaeche()│
└───────────┘ └──────────┘ └──────────┘
```

## Abstrahierte Lösung in Code

```java
// Abstrakte Basisklasse
public abstract class Form {
    protected String farbe;

    public Form(String farbe) {
        this.farbe = farbe;
    }

    // Konkrete Methode (gemeinsam für alle)
    public void zeichnen() {
        System.out.println("Zeichne eine " + farbe + "e Form");
    }

    // Abstrakte Methode (muss von Unterklassen implementiert werden)
    public abstract double berechneFlaeche();

    // Getter und Setter
    public String getFarbe() {
        return farbe;
    }

    public void setFarbe(String farbe) {
        this.farbe = farbe;
    }
}

// Konkrete Unterklassen
public class Kreis extends Form {
    private double radius;

    public Kreis(String farbe, double radius) {
        super(farbe);
        this.radius = radius;
    }

    @Override
    public double berechneFlaeche() {
        return Math.PI * radius * radius;
    }

    @Override
    public void zeichnen() {
        System.out.println("Zeichne einen " + farbe + "en Kreis mit Radius " + radius);
    }
}

public class Rechteck extends Form {
    private double breite;
    private double hoehe;

    public Rechteck(String farbe, double breite, double hoehe) {
        super(farbe);
        this.breite = breite;
        this.hoehe = hoehe;
    }

    @Override
    public double berechneFlaeche() {
        return breite * hoehe;
    }

    @Override
    public void zeichnen() {
        System.out.println("Zeichne ein " + farbe + "es Rechteck " + breite + "x" + hoehe);
    }
}

public class Dreieck extends Form {
    private double basis;
    private double hoehe;

    public Dreieck(String farbe, double basis, double hoehe) {
        super(farbe);
        this.basis = basis;
        this.hoehe = hoehe;
    }

    @Override
    public double berechneFlaeche() {
        return (basis * hoehe) / 2;
    }

    @Override
    public void zeichnen() {
        System.out.println("Zeichne ein " + farbe + "es Dreieck");
    }
}
```

>[!success] Vorteile der Abstraktion
>**Durch die Abstraktion haben wir erreicht:**
>- ✅ **Weniger Code-Duplikation**: `farbe` nur einmal definiert
>- ✅ **Gemeinsame Schnittstelle**: Alle Formen haben `berechneFlaeche()`
>- ✅ **Polymorphismus möglich**: `Form form = new Kreis("rot", 5.0);`
>- ✅ **Einfachere Wartung**: Änderungen an gemeinsamen Eigenschaften nur an einer Stelle
>- ✅ **Flexibilität**: Neue Formen können einfach hinzugefügt werden
>- ✅ **Erzwungene Implementierung**: Jede Form **muss** `berechneFlaeche()` implementieren

## Verwendung mit Polymorphismus

```java
public class Main {
    public static void main(String[] args) {
        // Polymorphismus: Form-Referenz auf verschiedene Objekte
        Form[] formen = new Form[3];
        formen[0] = new Kreis("rot", 5.0);
        formen[1] = new Rechteck("blau", 4.0, 6.0);
        formen[2] = new Dreieck("grün", 3.0, 4.0);

        // Einheitliche Schnittstelle dank Abstraktion
        for (Form form : formen) {
            form.zeichnen();
            System.out.println("Fläche: " + form.berechneFlaeche());
            System.out.println("---");
        }
    }
}
```

**Ausgabe:**
```
Zeichne einen roten Kreis mit Radius 5.0
Fläche: 78.53981633974483
---
Zeichne ein blaues Rechteck 4.0x6.0
Fläche: 24.0
---
Zeichne ein grünes Dreieck
Fläche: 6.0
---
```

---

# Unterschied zu Interfaces

>[!tip] Abstrakte Klasse vs. Interface
>**Abstrakte Klassen:**
>- Können sowohl abstrakte als auch konkrete Methoden haben
>- Können Attribute (Instanzvariablen) haben
>- Können Konstruktoren haben
>- Eine Klasse kann nur **eine** abstrakte Klasse erben
>
>**[[Interface\|Interface]]:**
>- Alle Methoden sind abstrakt (bis Java 8, dann default-Methoden möglich)
>- Können nur Konstanten haben
>- Keine Konstruktoren
>- Eine Klasse kann **mehrere** Interfaces implementieren

# Verwendung

>[!success] Wann abstrakte Klassen verwenden?
>Verwende abstrakte Klassen, wenn:
>- Mehrere verwandte Klassen **gemeinsamen Code teilen** sollen
>- Du **Attribute oder konkrete Methoden** definieren möchtest
>- Du **nicht-öffentliche** Member benötigst
>- Du eine **"ist-ein"**-Beziehung modellieren möchtest
>
>Beispiele:
>- `Fahrzeug` → `Auto`, `Motorrad`, `LKW`
>- `Tier` → `Hund`, `Katze`, `Vogel`
>- `Form` → `Kreis`, `Rechteck`, `Dreieck`

>[!warning] Wichtige Regeln
>- Eine abstrakte Klasse kann **nicht instanziiert** werden
>- Wenn eine Klasse mindestens eine abstrakte Methode hat, **muss** die Klasse auch abstrakt sein
>- Unterklassen müssen **alle abstrakten Methoden** implementieren, sonst müssen sie selbst abstrakt sein
>- Abstrakte Klassen können **konkrete Methoden** enthalten, die nicht überschrieben werden müssen

---

**Siehe auch:**
- [[02 - RESOURCES/Notes/Abstrakt\|Abstrakt]]
- [[02 - RESOURCES/Notes/Java abstrakte Klasse\|Java abstrakte Klasse]]
- [[02 - RESOURCES/Notes/UML-Klassendiagramm\|UML-Klassendiagramm]]
- [[02 - RESOURCES/Notes/UML-Vererbung\|UML-Vererbung]]
- [[02 - RESOURCES/Notes/Java Interface\|Java Interface]]
- [[02 - RESOURCES/Notes/Klasse\|Klasse]]
