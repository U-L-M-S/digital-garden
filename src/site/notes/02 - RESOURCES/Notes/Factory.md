---
{"dg-publish":true,"permalink":"/02-resources/notes/factory/","tags":["design-patterns/erzeugung","oop/objekterstellung"],"noteIcon":"","updated":"2025-10-29T12:59:05.993+01:00"}
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