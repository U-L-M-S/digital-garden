---
{"dg-publish":true,"permalink":"/02-resources/notes/observer/","tags":["design-patterns/verhalten","oop/benachrichtigung"],"noteIcon":"","updated":"2025-10-29T12:59:08.771+01:00"}
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