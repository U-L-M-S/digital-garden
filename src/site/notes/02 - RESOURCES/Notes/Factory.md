---
{"dg-publish":true,"permalink":"/02-resources/notes/factory/","tags":["design-patterns/erzeugung","oop/objekterstellung"],"noteIcon":"","updated":"2025-11-10T15:22:11.771+01:00"}
---


>Das [[02 - RESOURCES/Notes/Factory\|Factory]]-Pattern erstellt Objekte ohne die konkrete Klasse zu spezifizieren.

>>Es definiert eine Schnittstelle für Objekt-Erstellung, Subklassen entscheiden über konkrete Implementierung.

>[!important] 
>**Factory-Varianten:**
>- **Simple Factory**: Statische Methode für Objekt-Erstellung
>- **Factory Method**: Subklassen implementieren Erstellungs-Methode
>- **Abstract Factory**: Familie verwandter Objekte

>[!example] 
>```java
>// Abstract Factory
>abstract class VehicleFactory {
>    abstract Vehicle createVehicle();
>}
>
>// Concrete Factory
>class CarFactory extends VehicleFactory {
>    Vehicle createVehicle() {
>        return new Car();
>    }
>}
>
>class BikeFactory extends VehicleFactory {
>    Vehicle createVehicle() {
>        return new Bike();
>    }
>}
>
>// Verwendung
>VehicleFactory factory = new CarFactory();
>Vehicle vehicle = factory.createVehicle(); // Erstellt Car
>```

>[!success]
>Entkoppelt Objekt-Erstellung von konkreten Implementierungen.

---

# 🎯 AP2-Prüfungsaufgabe: Factory Pattern

>[!example] Typische Prüfungsaufgabe
>**Szenario: Benachrichtigungs-System**
>
>Eine App soll Benachrichtigungen per Email, SMS oder Push versenden. Der konkrete Typ wird zur Laufzeit entschieden.
>
>**Aufgabe:**
>1. Erstelle Interface `Notification` mit Methode `send()`
>2. Implementiere `EmailNotification`, `SMSNotification`, `PushNotification`
>3. Erstelle Factory-Klasse mit `createNotification(type)`
>4. Demonstriere Verwendung

---

## ✅ Kompakte Lösung

```java
// 1. Interface
interface Notification {
    void send(String message);
}

// 2. Konkrete Implementierungen
class EmailNotification implements Notification {
    public void send(String message) {
        System.out.println("📧 Email: " + message);
    }
}

class SMSNotification implements Notification {
    public void send(String message) {
        System.out.println("📱 SMS: " + message);
    }
}

class PushNotification implements Notification {
    public void send(String message) {
        System.out.println("🔔 Push: " + message);
    }
}

// 3. Factory
class NotificationFactory {
    public static Notification createNotification(String type) {
        switch (type.toLowerCase()) {
            case "email": return new EmailNotification();
            case "sms": return new SMSNotification();
            case "push": return new PushNotification();
            default: throw new IllegalArgumentException("Unbekannter Typ: " + type);
        }
    }
}

// 4. Verwendung
public class Main {
    public static void main(String[] args) {
        Notification n1 = NotificationFactory.createNotification("email");
        n1.send("Willkommen!");

        Notification n2 = NotificationFactory.createNotification("sms");
        n2.send("Code: 1234");
    }
}
```

>[!check] AP2-Checkliste
>- ✅ Interface/abstrakte Klasse definiert
>- ✅ Konkrete Klassen implementieren Interface
>- ✅ Factory-Methode gibt Interface-Typ zurück (nicht konkrete Klasse)
>- ✅ Switch/If für Typ-Auswahl
>- ✅ Client kennt keine konkreten Klassen

>[!warning] Häufige Fehler
>- ❌ Factory gibt konkrete Klasse zurück statt Interface
>- ❌ new im Client-Code (sollte nur Factory nutzen)
>- ❌ Kein default-Case bei switch

---

## 🔗 Weiterführende Themen

- [[02 - RESOURCES/Notes/Singleton\|Singleton]] - Eine Instanz für alle
- [[02 - RESOURCES/Notes/Observer\|Observer]] - Benachrichtigungsmuster
- [[02 - RESOURCES/Notes/Design Patterns\|Design Patterns]] - Alle Muster im Überblick