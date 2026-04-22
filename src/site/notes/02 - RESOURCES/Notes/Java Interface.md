---
{"dg-publish":true,"permalink":"/02-resources/notes/java-interface/","tags":["informatik/code/oop/vererbung","informatik/programmierung/sprachen/java","ausbildung/gfn/ap1/vorbereitung"],"noteIcon":"","updated":"2025-11-07T15:47:27.000+01:00"}
---

>Ein **Interface** (Schnittstelle) in [[02 - RESOURCES/Notes/Java\|Java]] ist ein Vertrag, der definiert, **welche Methoden** eine [[02 - RESOURCES/Notes/Klasse\|Klasse]] implementieren muss, aber **nicht wie**.
>>Interfaces ermöglichen [[Polymorphismus\|Polymorphismus]] und Multiple Inheritance (Mehrfachvererbung von Verhalten), da eine [[02 - RESOURCES/Notes/Klasse\|Klasse]] mehrere Interfaces implementieren kann.

>[!important] Wichtig
>Bei [[02 - RESOURCES/Notes/Java Vererbung\|Java Vererbung]] kann eine Child-[[02 - RESOURCES/Notes/Klasse\|Klasse]] nur von **einer** Parent-[[02 - RESOURCES/Notes/Klasse\|Klasse]] erben.
>Mit **Interfaces** kann eine [[02 - RESOURCES/Notes/Klasse\|Klasse]] **mehrere Interfaces** implementieren und somit Mehrfachvererbung simulieren.

---

# Grundkonzept

## Was ist ein Interface?

>Ein Interface ist wie ein **Bauplan** oder **Vertrag**:
>- Definiert **was** eine [[02 - RESOURCES/Notes/Klasse\|Klasse]] können muss
>- Definiert **nicht wie** es gemacht wird
>- Enthält nur Methodensignaturen (vor Java 8)
>- Kann keine Instanzvariablen haben (nur Konstanten)

>[!example] Analogie
>**Interface = Führerschein-Prüfung**
>- Der Führerschein sagt: "Du musst Auto fahren, bremsen und parken können"
>- Aber er sagt NICHT, WIE du das machst
>- Jeder Fahrer implementiert es unterschiedlich

---

# Syntax

## Interface definieren

```java
public interface InterfaceName {
    // Abstrakte Methoden (implizit public abstract)
    void methode1();
    int methode2(String parameter);

    // Konstanten (implizit public static final)
    int MAX_VALUE = 100;
}
```

## Interface implementieren

```java
public class KlassenName implements Interface1, Interface2 {
    // MUSS alle Methoden implementieren
    @Override
    public void methode1() {
        // Implementierung
    }

    @Override
    public int methode2(String parameter) {
        // Implementierung
        return 42;
    }
}
```

>[!warning] Wichtig
>Eine [[02 - RESOURCES/Notes/Klasse\|Klasse]], die ein Interface implementiert, **MUSS alle Methoden** des Interfaces überschreiben, sonst gibt es einen Compiler-Fehler.

---

# Praktisches Beispiel: Prey und Predator

```java
// Interface für Beutetiere
public interface Prey {
    void flee();  // Beutetiere können fliehen
}

// Interface für Raubtiere
public interface Predator {
    void hunt();  // Raubtiere können jagen
}

// Rabbit ist nur Beute
public class Rabbit implements Prey {
    @Override
    public void flee() {
        System.out.println("🐰 Der Hase flieht!");
    }
}

// Wolf ist nur Raubtier
public class Wolf implements Predator {
    @Override
    public void hunt() {
        System.out.println("🐺 Der Wolf jagt!");
    }
}

// Fish kann BEIDES sein (Multiple Inheritance!)
public class Fish implements Predator, Prey {
    private boolean isPredator;

    public Fish(boolean isPredator) {
        this.isPredator = isPredator;
    }

    @Override
    public void flee() {
        if (!isPredator) {
            System.out.println("🐟 Der Fisch flieht!");
        } else {
            System.out.println("🦈 Dieser Fisch jagt und flieht nicht!");
        }
    }

    @Override
    public void hunt() {
        if (isPredator) {
            System.out.println("🦈 Der Fisch jagt kleinere Fische!");
        } else {
            System.out.println("🐟 Dieser Fisch ist ein Beutetier!");
        }
    }
}

// Verwendung
public class Main {
    public static void main(String[] args) {
        Rabbit rabbit = new Rabbit();
        rabbit.flee();  // 🐰 Der Hase flieht!

        Wolf wolf = new Wolf();
        wolf.hunt();    // 🐺 Der Wolf jagt!

        Fish predatorFish = new Fish(true);
        predatorFish.hunt();  // 🦈 Der Fisch jagt kleinere Fische!

        Fish preyFish = new Fish(false);
        preyFish.flee();      // 🐟 Der Fisch flieht!
    }
}
```

>[!success] Vorteil von Interfaces
>Der `Fish` kann **beide Interfaces** implementieren, weil Interfaces Mehrfachvererbung ermöglichen!

---

# Interface-Eigenschaften

## Methoden in Interfaces

### Abstrakte Methoden (Standard)
>Methoden ohne Implementierung (bis Java 8).

```java
public interface Drawable {
    void draw();  // Abstrakt (implizit public abstract)
}
```

### Default-Methoden (seit Java 8)
>Methoden mit Implementierung, können überschrieben werden.

```java
public interface Drawable {
    // Abstrakte Methode
    void draw();

    // Default-Methode (mit Implementierung)
    default void display() {
        System.out.println("Anzeige auf Bildschirm");
    }
}

public class Circle implements Drawable {
    @Override
    public void draw() {
        System.out.println("Zeichne Kreis");
    }

    // display() muss nicht überschrieben werden (optional)
}
```

### Statische Methoden (seit Java 8)
>Utility-Methoden, die zum Interface gehören.

```java
public interface MathOperations {
    static int add(int a, int b) {
        return a + b;
    }

    static int multiply(int a, int b) {
        return a * b;
    }
}

// Verwendung
int result = MathOperations.add(5, 3);  // 8
```

### Private Methoden (seit Java 9)
>Hilfsmethoden für default-Methoden.

```java
public interface Logger {
    default void logInfo(String message) {
        log("INFO", message);
    }

    default void logError(String message) {
        log("ERROR", message);
    }

    // Private Hilfsmethode
    private void log(String level, String message) {
        System.out.println("[" + level + "] " + message);
    }
}
```

---

## Konstanten in Interfaces

>Alle Variablen in Interfaces sind automatisch `public static final` (Konstanten).

```java
public interface GameSettings {
    // Implizit: public static final
    int MAX_PLAYERS = 4;
    String GAME_NAME = "Super Game";
    double VERSION = 1.5;
}

// Verwendung
System.out.println(GameSettings.MAX_PLAYERS);  // 4
```

>[!tip] Konvention
>Konstanten werden in **GROSSBUCHSTABEN** geschrieben mit Unterstrichen: `MAX_PLAYERS`

---

# Vererbung bei Interfaces

## Interface erweitert Interface

>Interfaces können andere Interfaces erweitern (`extends`).

```java
public interface Animal {
    void eat();
}

public interface Mammal extends Animal {
    void breathe();
}

public class Dog implements Mammal {
    @Override
    public void eat() {
        System.out.println("Hund frisst");
    }

    @Override
    public void breathe() {
        System.out.println("Hund atmet");
    }
}
```

## Multiple Interface Inheritance

```java
public interface Flyable {
    void fly();
}

public interface Swimmable {
    void swim();
}

// Duck kann sowohl fliegen als auch schwimmen
public class Duck implements Flyable, Swimmable {
    @Override
    public void fly() {
        System.out.println("🦆 Ente fliegt");
    }

    @Override
    public void swim() {
        System.out.println("🦆 Ente schwimmt");
    }
}
```

---

# Interface vs. Abstrakte Klasse

| Eigenschaft | **Interface** | **[[02 - RESOURCES/Notes/Java abstrakte Klasse\|Java abstrakte Klasse]]** |
|-------------|--------------|-------------------------------|
| **Methoden** | Nur abstrakt (vor Java 8) | Abstrakt + konkret |
| **Attribute** | Nur Konstanten (`final`) | Normale Instanzvariablen |
| **Konstruktor** | ❌ Kein Konstruktor | ✅ Hat Konstruktor |
| **Mehrfachvererbung** | ✅ Ja (mehrere Interfaces) | ❌ Nein (nur eine Klasse) |
| **Zugriffsmodifikatoren** | Alles `public` | `public`, `protected`, `private` |
| **Verwendung** | "kann"-Beziehung | "ist-ein"-Beziehung |
| **Keyword** | `implements` | `extends` |

>[!tip] Wann was verwenden?

**Interface verwenden, wenn:**
- ✅ Du eine "**kann**"-Beziehung modellierst (Flyable, Swimmable)
- ✅ Mehrere Interfaces kombiniert werden sollen
- ✅ Keine gemeinsame Implementierung benötigt wird

**Abstrakte Klasse verwenden, wenn:**
- ✅ Du eine "**ist-ein**"-Beziehung modellierst (Animal, Vehicle)
- ✅ Gemeinsame Implementierung geteilt werden soll
- ✅ Instanzvariablen benötigt werden

---

# Polymorphismus mit Interfaces

>Interfaces ermöglichen [[Polymorphismus\|Polymorphismus]] - verschiedene Objekte können über das gleiche Interface angesprochen werden.

```java
public interface Playable {
    void play();
}

public class Guitar implements Playable {
    @Override
    public void play() {
        System.out.println("🎸 Spiele Gitarre");
    }
}

public class Piano implements Playable {
    @Override
    public void play() {
        System.out.println("🎹 Spiele Klavier");
    }
}

public class Drum implements Playable {
    @Override
    public void play() {
        System.out.println("🥁 Spiele Schlagzeug");
    }
}

// Polymorphismus in Aktion
public class Main {
    public static void main(String[] args) {
        // Array von verschiedenen Instrumenten
        Playable[] instruments = {
            new Guitar(),
            new Piano(),
            new Drum()
        };

        // Alle spielen ihre Musik
        for (Playable instrument : instruments) {
            instrument.play();
        }
    }
}
```

**Ausgabe:**
```
🎸 Spiele Gitarre
🎹 Spiele Klavier
🥁 Spiele Schlagzeug
```

>[!success] Vorteil
>Du kannst neue Instrumente hinzufügen, ohne den bestehenden Code zu ändern!

---

# Praktisches Beispiel: Payment System

```java
// Interface für Zahlungsmethoden
public interface PaymentMethod {
    boolean pay(double amount);
    String getPaymentType();
}

// Kreditkartenzahlung
public class CreditCard implements PaymentMethod {
    private String cardNumber;
    private double balance;

    public CreditCard(String cardNumber, double balance) {
        this.cardNumber = cardNumber;
        this.balance = balance;
    }

    @Override
    public boolean pay(double amount) {
        if (balance >= amount) {
            balance -= amount;
            System.out.println("💳 Zahlung von " + amount + "€ mit Kreditkarte");
            return true;
        }
        System.out.println("❌ Nicht genug Guthaben");
        return false;
    }

    @Override
    public String getPaymentType() {
        return "Kreditkarte";
    }
}

// PayPal-Zahlung
public class PayPal implements PaymentMethod {
    private String email;
    private double balance;

    public PayPal(String email, double balance) {
        this.email = email;
        this.balance = balance;
    }

    @Override
    public boolean pay(double amount) {
        if (balance >= amount) {
            balance -= amount;
            System.out.println("💰 Zahlung von " + amount + "€ mit PayPal");
            return true;
        }
        System.out.println("❌ Nicht genug Guthaben");
        return false;
    }

    @Override
    public String getPaymentType() {
        return "PayPal";
    }
}

// Shop-System
public class Shop {
    public void checkout(PaymentMethod payment, double amount) {
        System.out.println("Verarbeite Zahlung mit: " + payment.getPaymentType());

        if (payment.pay(amount)) {
            System.out.println("✅ Zahlung erfolgreich!");
        } else {
            System.out.println("❌ Zahlung fehlgeschlagen!");
        }
    }
}

// Verwendung
public class Main {
    public static void main(String[] args) {
        Shop shop = new Shop();

        PaymentMethod cc = new CreditCard("1234-5678-9012", 500.0);
        PaymentMethod pp = new PayPal("user@email.com", 100.0);

        shop.checkout(cc, 50.0);   // Kreditkarte
        shop.checkout(pp, 30.0);   // PayPal
    }
}
```

>[!success] Vorteile
>- ✅ Neue Zahlungsmethoden einfach hinzufügbar (Bitcoin, Apple Pay, etc.)
>- ✅ Shop-Code muss nicht geändert werden
>- ✅ Alle Zahlungsmethoden über gleiche Schnittstelle
>- ✅ Testbar (Mock-Zahlungsmethoden)

---

# Functional Interfaces (seit Java 8)

>Ein **Functional Interface** hat **genau eine abstrakte Methode** und kann als Lambda-Ausdruck verwendet werden.

```java
@FunctionalInterface
public interface Calculator {
    int calculate(int a, int b);
}

// Verwendung mit Lambda
public class Main {
    public static void main(String[] args) {
        // Addition
        Calculator add = (a, b) -> a + b;
        System.out.println(add.calculate(5, 3));  // 8

        // Multiplikation
        Calculator multiply = (a, b) -> a * b;
        System.out.println(multiply.calculate(5, 3));  // 15

        // Subtraktion
        Calculator subtract = (a, b) -> a - b;
        System.out.println(subtract.calculate(5, 3));  // 2
    }
}
```

**Bekannte Functional Interfaces:**
- `Runnable` - `void run()`
- `Callable<V>` - `V call()`
- `Comparator<T>` - `int compare(T o1, T o2)`
- `Predicate<T>` - `boolean test(T t)`
- `Function<T,R>` - `R apply(T t)`
- `Consumer<T>` - `void accept(T t)`

---

# Best Practices

>[!success] Gute Praktiken
>- ✅ **Kleine Interfaces** - Single Responsibility Principle
>- ✅ **Sprechende Namen** - `Readable`, `Closeable`, `Serializable`
>- ✅ **"-able" Suffix** - Zeigt Fähigkeit an
>- ✅ **Dokumentation** - JavaDoc für jede Methode
>- ✅ **@FunctionalInterface** bei Functional Interfaces

>[!warning] Häufige Fehler
>- ❌ Zu große Interfaces (God Interface)
>- ❌ Interfaces nur als Marker (besser: Annotations)
>- ❌ Implementierung in Interface (außer default-Methoden)
>- ❌ Vergessen `@Override` zu nutzen

---

# Interface-Segregation Principle (ISP)

>**SOLID-Prinzip:** Klassen sollten nicht gezwungen werden, Methoden zu implementieren, die sie nicht brauchen.

❌ **Schlecht:**
```java
public interface Worker {
    void work();
    void eat();
    void sleep();
}

// Robot muss eat() und sleep() implementieren, braucht es aber nicht!
public class Robot implements Worker {
    public void work() { /* ... */ }
    public void eat() { /* Robots essen nicht! */ }
    public void sleep() { /* Robots schlafen nicht! */ }
}
```

✅ **Gut:**
```java
public interface Workable {
    void work();
}

public interface Eatable {
    void eat();
}

public interface Sleepable {
    void sleep();
}

// Human implementiert alles
public class Human implements Workable, Eatable, Sleepable {
    public void work() { /* ... */ }
    public void eat() { /* ... */ }
    public void sleep() { /* ... */ }
}

// Robot nur Workable
public class Robot implements Workable {
    public void work() { /* ... */ }
}
```

---

# Marker Interfaces

>Interfaces **ohne Methoden**, die nur zur Markierung dienen.

```java
// Marker Interface
public interface Serializable {
    // Keine Methoden!
}

public class User implements Serializable {
    // Diese Klasse kann serialisiert werden
}
```

**Bekannte Marker Interfaces:**
- `Serializable` - Objekt kann serialisiert werden
- `Cloneable` - Objekt kann geklont werden
- `Remote` - RMI-Objekt

>[!tip] Modern
>Heute werden oft **Annotations** statt Marker Interfaces verwendet:
>```java
>@Serializable
>public class User { }
>```

---

# UML-Darstellung

>In [[02 - RESOURCES/Notes/UML-Klassendiagramm\|UML-Klassendiagramm]]en werden Interfaces mit `<<interface>>` gekennzeichnet.

```
      ┌─────────────────┐
      │  <<interface>>  │
      │    Playable     │
      ├─────────────────┤
      │ + play(): void  │
      └─────────────────┘
             △
             │ implements
      ┌──────┴──────┐
      │             │
┌─────────┐   ┌─────────┐
│ Guitar  │   │  Piano  │
├─────────┤   ├─────────┤
│+ play() │   │+ play() │
└─────────┘   └─────────┘
```

**Symbol:** Gestrichelte Linie mit offenem Dreieck zeigt "implements"

---

# Zusammenfassung

>[!summary] Kernpunkte
>- **Interface** = Vertrag, der definiert **was** (nicht wie)
>- Klasse kann **mehrere Interfaces** implementieren
>- Alle Methoden sind `public abstract` (Standard)
>- Seit Java 8: `default` und `static` Methoden möglich
>- Ermöglicht [[Polymorphismus\|Polymorphismus]] und Mehrfachvererbung
>- Verwende Interfaces für "**kann**"-Beziehungen
>- Abstakte Klassen für "**ist-ein**"-Beziehungen

---

**Siehe auch:**
- [[02 - RESOURCES/Notes/Java abstrakte Klasse\|Java abstrakte Klasse]]
- [[02 - RESOURCES/Notes/Java Vererbung\|Java Vererbung]]
- [[Polymorphismus\|Polymorphismus]]
- [[02 - RESOURCES/Notes/UML-Klassendiagramm\|UML-Klassendiagramm]]
- [[02 - RESOURCES/Notes/Design Patterns\|Design Patterns]]
- [[02 - RESOURCES/Notes/Java klasse\|Java klasse]]
- [[02 - RESOURCES/Notes/Klasse\|Klasse]]
