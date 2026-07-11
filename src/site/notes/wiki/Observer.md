---
{"dg-publish":true,"permalink":"/wiki/observer/","tags":["design-patterns/verhalten","informatik/programmierung/konzepte/oop/benachrichtigung"],"noteIcon":"","updated":"2026-07-02T13:17:19.000+02:00","dg-note-properties":{"tags":["design-patterns/verhalten","informatik/programmierung/konzepte/oop/benachrichtigung"],"aliases":["Observer-Pattern","Observer Pattern","Beobachter-Muster","Publisher-Subscriber"],"links":null,"created_date":"2025-09-16"}}
---


>Das [[wiki/Observer\|Observer]]-Pattern definiert eine 1:n-Abhängigkeit zwischen Objekten für automatische Benachrichtigungen.

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