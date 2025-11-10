---
{"dg-publish":true,"permalink":"/02-resources/notes/observer/","tags":["design-patterns/verhalten","oop/benachrichtigung"],"noteIcon":"","updated":"2025-11-10T15:22:31.431+01:00"}
---


>Das [[02 - RESOURCES/Notes/Observer\|Observer]]-Pattern definiert eine 1:n-Abhängigkeit zwischen Objekten für automatische Benachrichtigungen.

>>Wenn sich der Zustand eines Objekts ändert, werden alle abhängigen Objekte automatisch benachrichtigt.

>[!important] 
>**Observer-Komponenten:**
>- **Subject** (Observable): Benachrichtigt Observer
>- **Observer**: Reagiert auf Änderungen
>- **ConcreteSubject**: Implementiert Subject
>- **ConcreteObserver**: Implementiert Observer

>[!example] 
>```java
>// Subject Interface
>interface Observable {
>    void addObserver(Observer o);
>    void notifyObservers();
>}
>
>// Observer Interface  
>interface Observer {
>    void update(String message);
>}
>
>// Verwendung: Newsletter-System
>Newsletter newsletter = new Newsletter();
>newsletter.addObserver(new EmailSubscriber());
>newsletter.addObserver(new SMSSubscriber());
>newsletter.publishArticle("New Article"); // Benachrichtigt alle
>```

>[!success]
>Lose Kopplung zwischen Subject und Observer-Objekten.

---

# 🎯 AP2-Prüfungsaufgabe: Observer Pattern

>[!example] Typische Prüfungsaufgabe
>**Szenario: Aktienkurs-Benachrichtigungssystem**
>
>Ein Aktienkurs ändert sich. Mehrere Displays (Desktop, Mobile, Logger) sollen automatisch benachrichtigt werden.
>
>**Aufgabe:**
>1. Erstelle `Stock` (Subject) mit add/remove/notify Observer
>2. Erstelle `Observer`-Interface mit `update()`
>3. Implementiere `DesktopDisplay`, `MobileDisplay`, `Logger`
>4. Demonstriere: Kursänderung → alle werden benachrichtigt

---

## ✅ Kompakte Lösung

```java
// 1. Observer Interface
interface Observer {
    void update(String stockName, double price);
}

// 2. Subject
class Stock {
    private List<Observer> observers = new ArrayList<>();
    private String name;
    private double price;

    public Stock(String name) { this.name = name; }

    public void addObserver(Observer o) { observers.add(o); }
    public void removeObserver(Observer o) { observers.remove(o); }

    public void setPrice(double price) {
        this.price = price;
        notifyObservers();
    }

    private void notifyObservers() {
        for (Observer o : observers) {
            o.update(name, price);
        }
    }
}

// 3. Concrete Observers
class DesktopDisplay implements Observer {
    public void update(String stock, double price) {
        System.out.println("🖥️ Desktop: " + stock + " = " + price + "€");
    }
}

class MobileDisplay implements Observer {
    public void update(String stock, double price) {
        System.out.println("📱 Mobile: " + stock + " = " + price + "€");
    }
}

// 4. Verwendung
public class Main {
    public static void main(String[] args) {
        Stock apple = new Stock("AAPL");

        apple.addObserver(new DesktopDisplay());
        apple.addObserver(new MobileDisplay());

        apple.setPrice(150.0); // Alle werden benachrichtigt!
        apple.setPrice(155.5); // Erneut benachrichtigt!
    }
}
```

>[!check] AP2-Checkliste
>- ✅ Observer-Interface mit update()
>- ✅ Subject hat Liste von Observers
>- ✅ add/remove/notify Methoden
>- ✅ Bei Zustandsänderung → notifyObservers()
>- ✅ Alle Observer werden in Schleife informiert

>[!warning] Häufige Fehler
>- ❌ notifyObservers() vergessen aufzurufen
>- ❌ Observer-Liste nicht als private
>- ❌ In update() keine Parameter übergeben

---

## 🔗 Weiterführende Themen

- [[02 - RESOURCES/Notes/Singleton\|Singleton]] - Eine Instanz
- [[02 - RESOURCES/Notes/Factory\|Factory]] - Objekterstellung
- [[02 - RESOURCES/Notes/Design Patterns\|Design Patterns]] - Alle Muster