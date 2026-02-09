---
{"dg-publish":true,"permalink":"/02-resources/notes/methode/","tags":["informatik/oop","informatik/java","GFN/prüfungsrelevant/AP2"],"noteIcon":"","updated":"2025-11-12T15:13:06.000+01:00"}
---

>Eine Methode ist ein Block von Code innerhalb einer Klasse, der eine bestimmte Aufgabe ausführt und wiederverwendbar ist.
>>Methoden gehören zu Objekten (Instanzmethoden) oder zur Klasse selbst (statische Methoden) und können Parameter entgegennehmen und Werte zurückgeben.

>[!summary] Kernpunkte
>**Methoden** sind das Verhalten von Objekten in der OOP:
>- Gehören zu einer Klasse/Objekt
>- Führen Aktionen aus (z.B. berechnen, ausgeben, ändern)
>- Können **Parameter** (Eingaben) haben
>- Können **Rückgabewerte** (Ausgaben) haben
>- Syntax: `Sichtbarkeit Rückgabetyp methodenName(Parameter) { ... }`

## ASCII-Diagramm: Methoden-Anatomie

```
METHODEN-STRUKTUR IN JAVA

┌────────────────────────────────────────────────────┐
│  public int berechneSum me(int a, int b) {         │
│  └──┬─┘ └┬┘ └──────┬──────┘ └────┬─────┘  └─┬─┘   │
│     │    │         │             │           │     │
│     │    │         │             │         Körper  │
│     │    │         │          Parameter            │
│     │    │       Name                              │
│     │  Rückgabe-                                   │
│     │   typ                                        │
│  Sichtbarkeit                                      │
│                                                    │
│    return a + b;  ← Rückgabewert                  │
│  }                                                 │
└────────────────────────────────────────────────────┘

KOMPONENTEN:
① Sichtbarkeit: public, private, protected
② Rückgabetyp: int, String, void (nichts), etc.
③ Methodenname: camelCase (z.B. berechnenSumme)
④ Parameter: Eingabewerte (optional)
⑤ Körper: Code-Block mit Anweisungen
⑥ return: Rückgabe eines Wertes (bei void nicht nötig)
```

## Methode vs. Funktion

```
UNTERSCHIED: METHODE VS. FUNKTION

FUNKTION  → [[02 - RESOURCES/Notes/Funktion\|Funktion]]
┌─────────────────────────────────────────┐
│ • Gehört NICHT zu einer Klasse         │
│ • Eigenständig                          │
│ • Beispiel: Python, C                   │
│                                         │
│ def addiere(a, b):                      │
│     return a + b                        │
└─────────────────────────────────────────┘


METHODE (Java, OOP)
┌─────────────────────────────────────────┐
│ • Gehört ZU einer Klasse                │
│ • Teil eines Objekts                    │
│ • Beispiel: Java, C++, C#               │
│                                         │
│ class Rechner {                         │
│     public int addiere(int a, int b) {  │
│         return a + b;                   │
│     }                                   │
│ }                                       │
└─────────────────────────────────────────┘

→ In Java gibt es NUR Methoden (keine freien Funktionen)!
```

## Instanzmethoden vs. Statische Methoden

```
ZWEI ARTEN VON METHODEN

INSTANZMETHODE (gehört zum Objekt)
┌────────────────────────────────────────┐
│ public class Auto {                    │
│     private String marke;              │
│                                        │
│     public void starten() {            │← Instanzmethode
│         System.out.println(            │  (kein static)
│           marke + " startet"           │
│         );                             │
│     }                                  │
│ }                                      │
│                                        │
│ // Aufruf:                             │
│ Auto auto = new Auto();                │
│ auto.starten();  ← braucht Objekt!     │
└────────────────────────────────────────┘


STATISCHE METHODE (gehört zur Klasse)
┌────────────────────────────────────────┐
│ public class Rechner {                 │
│                                        │
│     public static int addiere(         │← Statische Methode
│         int a, int b                   │  (mit static)
│     ) {                                │
│         return a + b;                  │
│     }                                  │
│ }                                      │
│                                        │
│ // Aufruf:                             │
│ Rechner.addiere(5, 3);                 │
│ ↑ Klassenname (kein Objekt nötig!)     │
└────────────────────────────────────────┘
```

## Methoden-Signatur

```
METHODEN-SIGNATUR

┌────────────────────────────────────────────┐
│  public int berechne(int a, String text)   │
│         └─────────┬──────────────────┘     │
│               SIGNATUR                     │
│                                            │
│  Signatur besteht aus:                     │
│  ① Methodenname: berechne                  │
│  ② Parametertypen: int, String             │
│  (NOT Rückgabetyp!)                        │
└────────────────────────────────────────────┘

WICHTIG FÜR ÜBERLADUNG (Overloading):
┌────────────────────────────────────────────┐
│  public int addiere(int a, int b)          │← Signatur 1
│  public int addiere(int a, int b, int c)   │← Signatur 2
│  public double addiere(double a, double b) │← Signatur 3
│                                            │
│  → Gleicher Name, aber unterschiedliche   │
│    Parameter → Methodenüberladung!         │
└────────────────────────────────────────────┘
```

## Java-Code-Beispiel

```java
public class Taschenrechner {
    // INSTANZMETHODE (braucht Objekt)
    public int addiere(int a, int b) {
        return a + b;
    }

    // INSTANZMETHODE MIT void (kein Rückgabewert)
    public void ausgeben(String text) {
        System.out.println(text);
    }

    // STATISCHE METHODE (Klassenmethode)
    public static double berechneKreis(double radius) {
        return Math.PI * radius * radius;
    }

    // PRIVATE METHODE (nur intern nutzbar)
    private int verdopple(int zahl) {
        return zahl * 2;
    }

    // ÜBERLADENE METHODEN (gleicher Name, andere Parameter)
    public int multipliziere(int a, int b) {
        return a * b;
    }

    public int multipliziere(int a, int b, int c) {
        return a * b * c;
    }
}

// VERWENDUNG
Taschenrechner rechner = new Taschenrechner();
int summe = rechner.addiere(5, 3);  // 8
rechner.ausgeben("Hallo");          // "Hallo"

// Statische Methode: kein Objekt nötig
double flaeche = Taschenrechner.berechneKreis(5.0);
```

## Getter und Setter (wichtig!)

```
GETTER & SETTER METHODEN

┌─────────────────────────────────────────────┐
│ public class Person {                       │
│     private String name;  // private!       │
│                                             │
│     // GETTER: Wert auslesen                │
│     public String getName() {               │
│         return name;                        │
│     }                                       │
│                                             │
│     // SETTER: Wert setzen                  │
│     public void setName(String name) {      │
│         this.name = name;                   │
│     }                                       │
│ }                                           │
│                                             │
│ // Verwendung:                              │
│ Person p = new Person();                    │
│ p.setName("Anna");  // Setter               │
│ String n = p.getName();  // Getter          │
└─────────────────────────────────────────────┘

WARUM GETTER/SETTER?
→ Kapselung: private Attribute schützen
→ Validierung möglich:
  public void setAlter(int alter) {
      if (alter >= 0) {  // Prüfung!
          this.alter = alter;
      }
  }
```

>[!important] Wichtig für AP2
>**Methoden-Basics:**
>- **Syntax:** `Sichtbarkeit Rückgabetyp name(Parameter) { ... }`
>- **void** = keine Rückgabe
>- **return** = Wert zurückgeben (außer bei void)
>- **this.** = Zugriff auf Instanzvariablen
>
>**Instanz vs. Statisch:**
>- **Instanzmethode:** Braucht Objekt (`objekt.methode()`)
>- **Statische Methode:** Braucht kein Objekt (`Klasse.methode()`)
>
>**Signatur:**
>- Name + Parametertypen (NICHT Rückgabetyp!)
>- Für Überladung wichtig
>
>**Typische Prüfungsfrage:** "Was ist der Unterschied zwischen Instanz- und statischer Methode?"
>→ Antwort: Instanzmethode braucht Objekt, statische Methode gehört zur Klasse

>[!example] Praxis-Beispiel: Bankkonto

```java
public class Bankkonto {
    private double saldo;  // private!
    private String kontonummer;

    // KONSTRUKTOR (spezielle Methode)
    public Bankkonto(String kontonummer) {
        this.kontonummer = kontonummer;
        this.saldo = 0.0;
    }

    // INSTANZMETHODE: Einzahlen
    public void einzahlen(double betrag) {
        if (betrag > 0) {
            saldo += betrag;
            System.out.println(betrag + "€ eingezahlt.");
        }
    }

    // INSTANZMETHODE: Abheben
    public boolean abheben(double betrag) {
        if (betrag > 0 && saldo >= betrag) {
            saldo -= betrag;
            System.out.println(betrag + "€ abgehoben.");
            return true;  // Erfolgreich
        }
        return false;  // Nicht genug Geld
    }

    // GETTER
    public double getSaldo() {
        return saldo;
    }

    public String getKontonummer() {
        return kontonummer;
    }

    // PRIVATE HILFSMETHODE
    private void protokollieren(String nachricht) {
        System.out.println("[LOG] " + nachricht);
    }

    // STATISCHE METHODE
    public static String getBankname() {
        return "Sparkasse";
    }
}

// VERWENDUNG
Bankkonto konto = new Bankkonto("DE12345");
konto.einzahlen(100.0);   // 100€ eingezahlt
konto.abheben(30.0);      // 30€ abgehoben
double saldo = konto.getSaldo();  // 70.0

String bank = Bankkonto.getBankname();  // "Sparkasse"
```

>[!tip] Praxis-Tipps für AP2
>1. **Naming:** Methoden beginnen mit Kleinbuchstabe (camelCase)
>2. **Verben nutzen:** berechnen(), ausgeben(), starten() (Methoden = Aktionen!)
>3. **return-Regel:** Nach return wird nichts mehr ausgeführt!
>4. **void vs. Rückgabe:** void = keine Rückgabe, sonst Typ angeben
>5. **Typische Fehler:**
>   - return bei void-Methode
>   - Kein return bei Nicht-void-Methode
>   - Statische Methode auf Objekt aufrufen
>6. **Überladung:** Gleicher Name, andere Parameter = erlaubt!

## Verwandte Konzepte
- [[Funktion]] - Standalone, nicht in Klasse
- [[02 - RESOURCES/Notes/Konstruktor\|Konstruktor]] - Spezielle Methode zum Erstellen von Objekten
- [[02 - RESOURCES/Notes/Vererbung\|Vererbung]] - Methoden werden vererbt
- [[Polymorphismus\|Polymorphismus]] - Methoden-Überschreibung
- [[02 - RESOURCES/Notes/Klasse\|Klasse]] - Container für Methoden
- [[Objekt\|Objekt]] - Ruft Methoden auf
