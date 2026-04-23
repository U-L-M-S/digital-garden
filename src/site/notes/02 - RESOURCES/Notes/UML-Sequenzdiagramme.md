---
{"dg-publish":true,"permalink":"/02-resources/notes/uml-sequenzdiagramme/","tags":["uml/sequenzdiagramme","ausbildung/gfn/ap1/vorbereitung","informatik/softwareentwicklung"],"noteIcon":"","updated":"2025-11-07T15:10:47.000+01:00"}
---

>Ein **Sequenzdiagramm** ist ein [[02 - RESOURCES/Notes/UML\|UML]]-Diagramm, das die zeitliche Abfolge von Nachrichten zwischen mehreren Objekten oder Akteuren darstellt.
>>Es visualisiert, wie Objekte miteinander interagieren und in welcher Reihenfolge Methoden aufgerufen werden. Sequenzdiagramme zeigen den **dynamischen** Aspekt eines Systems.

>[!important] Wichtig für die Prüfung
>Sequenzdiagramme sind essentiell für:
>- Darstellung von Objektinteraktionen über Zeit
>- Visualisierung von Methodenaufrufen zwischen Objekten
>- Analyse von Programmabläufen
>- Dokumentation von API-Kommunikation

---

# Wann verwendet man Sequenzdiagramme?

>Sequenzdiagramme eignen sich besonders für:
>- **Objektkommunikation**: Wie Objekte Nachrichten austauschen
>- **Use-Case-Realisierung**: Wie ein Anwendungsfall technisch umgesetzt wird
>- **API-Dokumentation**: Wie verschiedene Systeme miteinander kommunizieren
>- **Fehleranalyse**: Wo in der Kommunikation Probleme auftreten

>[!example] Typische Beispiele
>- Login-Prozess (Benutzer → UI → Controller → Datenbank)
>- Bestellvorgang in E-Commerce-Systemen
>- REST-API Aufrufe
>- Authentifizierung und Autorisierung
>- Zahlungsabwicklung

---

# Grundelemente eines Sequenzdiagramms

## Akteur / Objekt (Lifeline)
>Ein **Akteur** oder **Objekt** wird als Box am oberen Rand dargestellt. Von dieser Box verläuft eine gestrichelte Linie nach unten - die **Lebenslinie** (Lifeline).

```
┌─────────────┐
│   :Kunde    │
└─────────────┘
       │
       │  (Lebenslinie)
       │
       ▼
```

**Notation**:
- **Akteur**: `:AkteurName` (z.B. `:Benutzer`)
- **Objekt**: `:KlassenName` oder `objektName:KlassenName`

>[!info] Lebenslinie
>Die gestrichelte vertikale Linie zeigt die Lebenszeit des Objekts im dargestellten Szenario.

## Nachricht (Message)
>Eine **Nachricht** ist ein Pfeil zwischen zwei Lebenslinien. Sie repräsentiert einen Methodenaufruf oder eine Kommunikation.

**Synchrone Nachricht** (wartet auf Antwort):
```
:Objekt A  ──────►  :Objekt B
          methodenname()
```
**Symbol**: Ausgefüllter Pfeil `────►`

**Asynchrone Nachricht** (wartet nicht):
```
:Objekt A  ────>  :Objekt B
          nachricht()
```
**Symbol**: Offener Pfeil `────>`

**Rückantwort**:
```
:Objekt A  ◄---- :Objekt B
          return wert
```
**Symbol**: Gestrichelter Pfeil `◄----`

## Aktivierungsbalken (Activation Box)
>Der **Aktivierungsbalken** ist ein schmales Rechteck auf der Lebenslinie. Er zeigt, dass ein Objekt gerade aktiv ist und eine Operation ausführt.

```
┌─────────┐
│ :Objekt │
└─────────┘
     │
     ┃  ← Aktivierungsbalken
     ┃     (Objekt ist aktiv)
     ┃
     │
```

## Selbstaufruf (Self-Call)
>Ein **Selbstaufruf** ist, wenn ein Objekt eine eigene Methode aufruft.

```
    :Objekt
       │
       ┃
       ┃──┐ eigenMethode()
       ┃  │
       ┃◄─┘
       ┃
```

---

# Visuelles Beispiel: Login-Prozess

```
:Benutzer    :LoginUI    :Controller    :UserService    :Datenbank
    │            │              │              │              │
    │──login()──►│              │              │              │
    │            │              │              │              │
    │            │──validate()─►│              │              │
    │            │              │              │              │
    │            │              │─getUser(id)─►│              │
    │            │              │              │              │
    │            │              │              │──SELECT *──►│
    │            │              │              │              │
    │            │              │              │◄───userData──│
    │            │              │              │              │
    │            │              │◄──User Obj───│              │
    │            │              │              │              │
    │            │◄─checkPass()─│              │              │
    │            │              │              │              │
    │◄─showHome()│              │              │              │
    │            │              │              │              │
```

>[!example] Beschreibung des Ablaufs
>1. **Benutzer** ruft `login()` in der LoginUI auf
>2. **LoginUI** validiert die Eingabe mit `validate()` im Controller
>3. **Controller** fragt den UserService nach dem User mit `getUser(id)`
>4. **UserService** führt eine SQL-Abfrage in der Datenbank aus
>5. **Datenbank** gibt die User-Daten zurück
>6. **UserService** erstellt ein User-Objekt und gibt es zurück
>7. **Controller** prüft das Passwort
>8. **LoginUI** zeigt die Homepage an

---

# Praktisches Beispiel: Online-Bestellung

```
:Kunde    :WebUI    :BestellController    :LagerSystem    :Zahlungssystem
   │         │              │                    │                │
   │─bestellen()►│          │                    │                │
   │         │              │                    │                │
   │         │─createOrder()►                    │                │
   │         │              │                    │                │
   │         │              │─checkStock(id)────►│                │
   │         │              │                    │                │
   │         │              │◄──available: true──│                │
   │         │              │                    │                │
   │         │              │─reserveItem()─────►│                │
   │         │              │                    │                │
   │         │─requestPayment()──────────────────────────────────►│
   │         │              │                    │                │
   │         │◄─────────────────────────paymentSuccess───────────│
   │         │              │                    │                │
   │         │─confirmOrder()►                   │                │
   │         │              │                    │                │
   │◄showConfirmation()    │                    │                │
   │         │              │                    │                │
```

---

# Kontrollstrukturen

## Alternative (alt)
>Eine **Alternative** zeigt verschiedene Pfade basierend auf Bedingungen (wie if-else).

```
        ┌────────────────alt─────────────────┐
        │ [Passwort korrekt]                 │
        │    :UI ──success()──► :Controller  │
        ├────────────────────────────────────┤
        │ [Passwort falsch]                  │
        │    :UI ──error()────► :Controller  │
        └────────────────────────────────────┘
```

>[!info] Notation
>- `alt` = Alternative (if-else)
>- Bedingungen in eckigen Klammern `[Bedingung]`

## Schleife (loop)
>Eine **Schleife** zeigt wiederholte Aktionen.

```
        ┌────────────loop [für jedes Item]────────┐
        │                                          │
        │    :Cart ──addItem(item)──► :Database   │
        │                                          │
        └──────────────────────────────────────────┘
```

## Optional (opt)
>**Optional** zeigt Aktionen, die nur unter bestimmten Bedingungen ausgeführt werden.

```
        ┌────────────opt [Premium-Kunde]──────────┐
        │                                          │
        │    :System ──applyDiscount()──► :Order  │
        │                                          │
        └──────────────────────────────────────────┘
```

---

# Code-Beispiel: Login-System

```java
// Benutzer-Klasse
public class User {
    private String username;
    private String password;

    public User(String username, String password) {
        this.username = username;
        this.password = password;
    }

    public String getUsername() {
        return username;
    }

    public boolean checkPassword(String password) {
        return this.password.equals(password);
    }
}

// UserService-Klasse
public class UserService {
    private Database db;

    public User getUser(String username) {
        return db.query("SELECT * FROM users WHERE username = ?", username);
    }
}

// LoginController-Klasse
public class LoginController {
    private UserService userService;

    public boolean login(String username, String password) {
        User user = userService.getUser(username);

        if (user == null) {
            return false;
        }

        return user.checkPassword(password);
    }
}
```

**Zugehöriges Sequenzdiagramm:**

```
:Client    :LoginController    :UserService    :Database
   │               │                  │              │
   │──login()─────►│                  │              │
   │               │                  │              │
   │               │──getUser(name)──►│              │
   │               │                  │              │
   │               │                  │──SELECT *──►│
   │               │                  │              │
   │               │                  │◄──userData───│
   │               │                  │              │
   │               │◄────User Obj─────│              │
   │               │                  │              │
   │               │──checkPassword() (Selbstaufruf) │
   │               │                  │              │
   │◄─return true──│                  │              │
   │               │                  │              │
```

---

# Unterschied zu anderen UML-Diagrammen

| Diagramm | Zweck | Fokus |
|----------|-------|-------|
| [[02 - RESOURCES/Notes/UML-Sequenzdiagramme\|UML-Sequenzdiagramme]] | **Interaktion** zwischen mehreren Objekten **über Zeit** | Zeitliche Reihenfolge von Nachrichten |
| [[02 - RESOURCES/Notes/UML-Zustandsdiagramme\|UML-Zustandsdiagramme]] | Verhalten eines **einzelnen Objekts** über Zeit | Zustände und Zustandsübergänge |
| [[02 - RESOURCES/Notes/UML-Aktivitätsdiagramm\|UML-Aktivitätsdiagramm]] | Ablauf von **Aktivitäten** im System | Prozessschritte und Workflow |
| [[02 - RESOURCES/Notes/UML-Klassendiagramm\|UML-Klassendiagramm]] | **Struktur** des Systems | Statische Klassen und Beziehungen |

>[!tip] Merkhilfe
>- **Sequenzdiagramm** = "WER ruft WEN WANN auf?"
>- **Zustandsdiagramm** = "Wie ändert sich EIN Objekt?"
>- **Aktivitätsdiagramm** = "Welche Schritte werden durchlaufen?"

---

# Best Practices

>[!success] Gute Praktiken
>- **Von links nach rechts** anordnen (wie Leserichtung)
>- **Akteure links**, technische Objekte rechts
>- **Klare Methodennamen** verwenden
>- **Nicht zu komplex**: Max. 5-7 Objekte pro Diagramm
>- **Rückantworten** nur bei wichtigen Werten zeigen

>[!caution] Häufige Fehler
>- ❌ Zu viele Objekte (unübersichtlich)
>- ❌ Keine klare zeitliche Abfolge
>- ❌ Fehlende Aktivierungsbalken
>- ❌ Verwechslung synchron/asynchron
>- ❌ Zu detailliert (jede kleine Aktion)

---

# Erweiterte Konzepte

## Objekterzeugung
>Wenn ein Objekt erst während des Ablaufs erstellt wird:

```
:Factory  ──create()──►  :Product
                        ┌─────────┐
                        │:Product │ ← Objekt wird hier erstellt
                        └─────────┘
```

**Symbol**: Gestrichelter Pfeil zur Box (nicht zur Lebenslinie)

## Objektzerstörung
>Wenn ein Objekt zerstört wird:

```
:Object
   │
   ┃
   ┃
   X  ← Großes X markiert Ende der Lebenszeit
```

---

# Zusammenfassung

>[!summary] Kernpunkte
>- **Sequenzdiagramme** zeigen die zeitliche Abfolge von **Nachrichten** zwischen **Objekten**
>- **Lebenslinien** (gestrichelte vertikale Linien) repräsentieren die Objekte
>- **Nachrichten** (Pfeile) zeigen Methodenaufrufe
>- **Aktivierungsbalken** zeigen, wann ein Objekt aktiv ist
>- **Von oben nach unten** = zeitlicher Ablauf
>- Ideal für: API-Dokumentation, Use-Case-Realisierung, Fehleranalyse

---

# Verwandte Konzepte

- [[02 - RESOURCES/Notes/UML\|UML]] - Unified Modeling Language Übersicht
- [[02 - RESOURCES/Notes/UML-Klassendiagramm\|UML-Klassendiagramm]] - Struktur der Objekte
- [[02 - RESOURCES/Notes/UML-Zustandsdiagramme\|UML-Zustandsdiagramme]] - Verhalten einzelner Objekte
- [[02 - RESOURCES/Notes/UML-Aktivitätsdiagramm\|UML-Aktivitätsdiagramm]] - Prozessabläufe
- [[02 - RESOURCES/Notes/UML-Anwendungsfalldiagramm\|UML-Anwendungsfalldiagramm]] - Use Cases
