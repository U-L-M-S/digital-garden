---
{"dg-publish":true,"permalink":"/02-resources/notes/singleton/","tags":["design-patterns/erzeugung","oop/instanziierung"],"noteIcon":"","updated":"2025-11-10T15:21:33.353+01:00"}
---


>Das [[02 - RESOURCES/Notes/Singleton\|Singleton]]-Pattern gewährleistet, dass von einer Klasse nur genau eine Instanz existiert.

>>Es stellt einen globalen Zugriffspunkt auf diese einzige Instanz bereit.

>[!important] 
>**Singleton-Eigenschaften:**
>- Nur eine Instanz der Klasse
>- Globaler Zugriffspunkt
>- Lazy Initialization (auf Anfrage erstellen)
>- Thread-Safety beachten

>[!example] 
>```java
>public class DatabaseConnection {
>    private static DatabaseConnection instance;
>    
>    // Private Konstruktor verhindert direkte Instanziierung
>    private DatabaseConnection() {}
>    
>    // Thread-safe Singleton
>    public static synchronized DatabaseConnection getInstance() {
>        if (instance == null) {
>            instance = new DatabaseConnection();
>        }
>        return instance;
>    }
>}
>
>// Verwendung
>DatabaseConnection db = DatabaseConnection.getInstance();
>```

>[!warning]
>Kann zu tight coupling führen und Testing erschweren.

---

# 🎯 AP2-Prüfungsaufgabe: Singleton Pattern

>[!example] Typische Prüfungsaufgabe
>**Szenario: Datenbank-Verbindungsmanager**
>
>Eine Anwendung soll nur EINE Datenbankverbindung verwenden, um Ressourcen zu sparen. Mehrere Module greifen auf diese Verbindung zu.
>
>**Aufgabe:**
>1. Implementiere eine `DatabaseConnection`-Klasse als Singleton
>2. Stelle sicher, dass nur eine Instanz existiert
>3. Mache die Implementierung Thread-safe
>4. Demonstriere die Verwendung mit mehreren Aufrufen

---

## 📋 Kochrezept: Singleton Pattern implementieren

```
┌─────────────────────────────────────────────────────────┐
│ SCHRITT 1: PRIVATE STATIC INSTANZ                       │
├─────────────────────────────────────────────────────────┤
│ Erstelle eine statische Variable für die eine Instanz:  │
│                                                          │
│ private static DatabaseConnection instance;             │
│                                                          │
│ 📌 WICHTIG:                                             │
│    • private: Nur innerhalb der Klasse zugreifbar       │
│    • static: Eine Instanz für ALLE (klassengebunden)    │
│    • Noch nicht initialisiert (null)                    │
└─────────────────────────────────────────────────────────┘
                         ↓
┌─────────────────────────────────────────────────────────┐
│ SCHRITT 2: PRIVATE KONSTRUKTOR                          │
├─────────────────────────────────────────────────────────┤
│ Verhindere direkte Instanziierung von außen:            │
│                                                          │
│ private DatabaseConnection() {                          │
│     // Initialisierung...                               │
│ }                                                        │
│                                                          │
│ 📌 EFFEKT:                                              │
│    // NICHT MÖGLICH:                                    │
│    DatabaseConnection db = new DatabaseConnection(); ❌ │
│    // Compiler-Fehler: Constructor is private           │
│                                                          │
│    Nur die Klasse selbst kann sich instanziieren!       │
└─────────────────────────────────────────────────────────┘
                         ↓
┌─────────────────────────────────────────────────────────┐
│ SCHRITT 3: PUBLIC STATIC GETTER-METHODE                 │
├─────────────────────────────────────────────────────────┤
│ Biete globalen Zugriffspunkt:                           │
│                                                          │
│ public static DatabaseConnection getInstance() {        │
│     if (instance == null) {                             │
│         instance = new DatabaseConnection();            │
│     }                                                    │
│     return instance;                                     │
│ }                                                        │
│                                                          │
│ 📌 PRINZIP:                                             │
│    • public: Von überall aufrufbar                      │
│    • static: Ohne Objekt aufrufbar                      │
│    • Lazy Initialization: Nur wenn benötigt            │
│                                                          │
│ Aufruf:                                                  │
│ DatabaseConnection db = DatabaseConnection.getInstance();│
└─────────────────────────────────────────────────────────┘
                         ↓
┌─────────────────────────────────────────────────────────┐
│ SCHRITT 4: THREAD-SAFETY HINZUFÜGEN                     │
├─────────────────────────────────────────────────────────┤
│ Problem: Zwei Threads gleichzeitig:                     │
│                                                          │
│ Thread 1: if (instance == null) ✓                       │
│ Thread 2: if (instance == null) ✓                       │
│ Thread 1: instance = new ... // Erste Instanz           │
│ Thread 2: instance = new ... // Zweite Instanz! ❌      │
│                                                          │
│ Lösung 1 - synchronized (einfach):                      │
│ public static synchronized DatabaseConnection           │
│     getInstance() { ... }                               │
│                                                          │
│ Lösung 2 - Double-Checked Locking (effizienter):       │
│ public static DatabaseConnection getInstance() {        │
│     if (instance == null) {                             │
│         synchronized (DatabaseConnection.class) {       │
│             if (instance == null) {                     │
│                 instance = new DatabaseConnection();    │
│             }                                            │
│         }                                                │
│     }                                                    │
│     return instance;                                     │
│ }                                                        │
│                                                          │
│ 📌 FÜR AP2:                                             │
│    synchronized reicht meist aus                        │
└─────────────────────────────────────────────────────────┘
                         ↓
┌─────────────────────────────────────────────────────────┐
│ SCHRITT 5: VERWENDUNG                                   │
├─────────────────────────────────────────────────────────┤
│ In der Anwendung:                                        │
│                                                          │
│ // Modul 1                                               │
│ DatabaseConnection db1 = DatabaseConnection.getInstance();│
│                                                          │
│ // Modul 2                                               │
│ DatabaseConnection db2 = DatabaseConnection.getInstance();│
│                                                          │
│ // Prüfen: db1 == db2 → true ✓                         │
│ // Beide zeigen auf DIESELBE Instanz!                   │
│                                                          │
│ 📌 VORTEIL:                                             │
│    Ressourcen-Einsparung, zentrale Kontrolle            │
└─────────────────────────────────────────────────────────┘
```

---

## ✅ Lösung der Prüfungsaufgabe

```java
public class DatabaseConnection {
    // Schritt 1: Private static Instanz
    private static DatabaseConnection instance;

    // Verbindungsdaten
    private String connectionString;
    private boolean isConnected;
    private int connectionCount = 0;

    // Schritt 2: Private Konstruktor
    private DatabaseConnection() {
        // Simuliere Datenbankverbindung
        this.connectionString = "jdbc:mysql://localhost:3306/mydb";
        this.isConnected = false;
        System.out.println("✓ Neue DatabaseConnection-Instanz erstellt");
        System.out.println("  Connection String: " + connectionString);
    }

    // Schritt 3 + 4: Public static thread-safe Getter
    public static synchronized DatabaseConnection getInstance() {
        if (instance == null) {
            System.out.println("→ Erste Instanz wird erstellt...");
            instance = new DatabaseConnection();
        } else {
            System.out.println("→ Bestehende Instanz wird zurückgegeben");
        }
        return instance;
    }

    // Business-Methoden
    public void connect() {
        if (!isConnected) {
            isConnected = true;
            connectionCount++;
            System.out.println("✓ Verbindung hergestellt (Gesamt: " +
                             connectionCount + " mal)");
        } else {
            System.out.println("⚠ Bereits verbunden");
        }
    }

    public void disconnect() {
        if (isConnected) {
            isConnected = false;
            System.out.println("✓ Verbindung getrennt");
        }
    }

    public void executeQuery(String query) {
        if (isConnected) {
            System.out.println("→ Führe Query aus: " + query);
        } else {
            System.out.println("❌ Keine Verbindung! Bitte zuerst connect()");
        }
    }

    public String getConnectionString() {
        return connectionString;
    }
}
```

### Verwendung und Test

```java
public class SingletonDemo {
    public static void main(String[] args) {
        System.out.println("=== SINGLETON PATTERN DEMONSTRATION ===\n");

        // Modul 1: User-Service
        System.out.println("--- USER SERVICE ---");
        DatabaseConnection db1 = DatabaseConnection.getInstance();
        db1.connect();
        db1.executeQuery("SELECT * FROM users");
        System.out.println();

        // Modul 2: Product-Service
        System.out.println("--- PRODUCT SERVICE ---");
        DatabaseConnection db2 = DatabaseConnection.getInstance();
        db2.connect();
        db2.executeQuery("SELECT * FROM products");
        System.out.println();

        // Modul 3: Order-Service
        System.out.println("--- ORDER SERVICE ---");
        DatabaseConnection db3 = DatabaseConnection.getInstance();
        db3.connect();
        db3.executeQuery("INSERT INTO orders VALUES (...)");
        System.out.println();

        // Identitätsprüfung
        System.out.println("=== IDENTITÄTSPRÜFUNG ===");
        System.out.println("db1 == db2: " + (db1 == db2));
        System.out.println("db2 == db3: " + (db2 == db3));
        System.out.println("db1 == db3: " + (db1 == db3));
        System.out.println("\n→ Alle drei Variablen zeigen auf DIESELBE Instanz! ✓");

        // Speicheradressen
        System.out.println("\n=== SPEICHERADRESSEN ===");
        System.out.println("db1: " + System.identityHashCode(db1));
        System.out.println("db2: " + System.identityHashCode(db2));
        System.out.println("db3: " + System.identityHashCode(db3));
        System.out.println("→ Identische HashCodes bestätigen: Eine Instanz! ✓");

        // Verbindungszähler zeigt gemeinsame Nutzung
        System.out.println("\n=== RESSOURCEN-ERSPARNIS ===");
        System.out.println("Connection String: " + db1.getConnectionString());
        System.out.println("Statt 3 Verbindungen → Nur 1 Verbindung erstellt");
    }
}
```

**Output:**
```
=== SINGLETON PATTERN DEMONSTRATION ===

--- USER SERVICE ---
→ Erste Instanz wird erstellt...
✓ Neue DatabaseConnection-Instanz erstellt
  Connection String: jdbc:mysql://localhost:3306/mydb
✓ Verbindung hergestellt (Gesamt: 1 mal)
→ Führe Query aus: SELECT * FROM users

--- PRODUCT SERVICE ---
→ Bestehende Instanz wird zurückgegeben
⚠ Bereits verbunden
→ Führe Query aus: SELECT * FROM products

--- ORDER SERVICE ---
→ Bestehende Instanz wird zurückgegeben
⚠ Bereits verbunden
→ Führe Query aus: INSERT INTO orders VALUES (...)

=== IDENTITÄTSPRÜFUNG ===
db1 == db2: true
db2 == db3: true
db1 == db3: true

→ Alle drei Variablen zeigen auf DIESELBE Instanz! ✓

=== SPEICHERADRESSEN ===
db1: 1435804085
db2: 1435804085
db3: 1435804085
→ Identische HashCodes bestätigen: Eine Instanz! ✓

=== RESSOURCEN-ERSPARNIS ===
Connection String: jdbc:mysql://localhost:3306/mydb
Statt 3 Verbindungen → Nur 1 Verbindung erstellt
```

---

## 📝 Prüfungs-Checkliste

>[!check] Punkte für volle Punktzahl
>- ✅ Private static Instanzvariable
>- ✅ Private Konstruktor
>- ✅ Public static getInstance()-Methode
>- ✅ Null-Check in getInstance()
>- ✅ Thread-Safety (synchronized)
>- ✅ Lazy Initialization erklärt
>- ✅ Verwendungsbeispiel gezeigt

>[!warning] Häufige Fehler in der Prüfung
>**❌ Fehler 1:** Konstruktor ist public
>```java
>// FALSCH: Jeder kann Instanzen erstellen!
>public DatabaseConnection() { }
>
>// RICHTIG: Nur die Klasse selbst
>private DatabaseConnection() { }
>```
>
>**❌ Fehler 2:** getInstance() nicht static
>```java
>// FALSCH: Braucht Instanz um aufzurufen!
>public DatabaseConnection getInstance() { }
>// DatabaseConnection db = ??? // Wie erste Instanz bekommen?
>
>// RICHTIG: Static = ohne Instanz aufrufbar
>public static DatabaseConnection getInstance() { }
>```
>
>**❌ Fehler 3:** Kein Null-Check
>```java
>// FALSCH: Überschreibt Instanz bei jedem Aufruf!
>public static DatabaseConnection getInstance() {
>    instance = new DatabaseConnection(); // Immer neu!
>    return instance;
>}
>
>// RICHTIG: Nur wenn null
>public static DatabaseConnection getInstance() {
>    if (instance == null) {
>        instance = new DatabaseConnection();
>    }
>    return instance;
>}
>```
>
>**❌ Fehler 4:** Thread-Safety vergessen
>```java
>// GEFAHR: Zwei Threads können gleichzeitig Instanz erstellen
>public static DatabaseConnection getInstance() {
>    if (instance == null) {
>        instance = new DatabaseConnection(); // Race Condition!
>    }
>    return instance;
>}
>
>// RICHTIG: synchronized
>public static synchronized DatabaseConnection getInstance() {
>    if (instance == null) {
>        instance = new DatabaseConnection();
>    }
>    return instance;
>}
>```

>[!tip] Prüfungstipp: Wann Singleton verwenden?
>**✅ GUTE Anwendungsfälle:**
>- Datenbankverbindungen
>- Logger (Logging-System)
>- Konfigurationsmanager
>- Thread-Pools
>- Cache-Manager
>- Hardware-Zugriff (Drucker, Kamera)
>
>**❌ SCHLECHTE Anwendungsfälle:**
>- User-Objekte (viele Instanzen nötig)
>- Produkte in Shop (viele Instanzen)
>- Normale Business-Objekte
>- Wenn Unit-Tests schwierig werden

>[!tip] Prüfungstipp: Singleton Varianten
>**Einfaches Singleton (für AP2 ausreichend):**
>```java
>public static synchronized DatabaseConnection getInstance() {
>    if (instance == null) {
>        instance = new DatabaseConnection();
>    }
>    return instance;
>}
>```
>
>**Eager Initialization (alternative Methode):**
>```java
>// Instanz sofort erstellen (nicht lazy)
>private static final DatabaseConnection instance =
>    new DatabaseConnection();
>
>public static DatabaseConnection getInstance() {
>    return instance; // Immer da, kein null-check
>}
>```
>Vorteil: Automatisch thread-safe
>Nachteil: Immer erstellt, auch wenn nicht gebraucht

---

## 🔗 Weiterführende Themen

- [[02 - RESOURCES/Notes/Factory\|Factory]] - Objekte erstellen ohne konkrete Klasse
- [[02 - RESOURCES/Notes/Observer\|Observer]] - Benachrichtigung bei Zustandsänderungen
- [[02 - RESOURCES/Notes/Design Patterns\|Design Patterns]] - Übersicht aller Muster
- [[02 - RESOURCES/Notes/MVC\|MVC]] - Model-View-Controller Architektur
- Dependency Injection - Alternative zu Singleton