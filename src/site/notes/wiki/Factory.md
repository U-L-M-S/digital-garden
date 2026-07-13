---
{"dg-publish":true,"permalink":"/wiki/factory/","tags":["design-patterns/erzeugung","informatik/programmierung/konzepte/oop/objekterstellung"],"noteIcon":"","updated":"2026-07-02T13:17:19.747+02:00","dg-note-properties":{"tags":["design-patterns/erzeugung","informatik/programmierung/konzepte/oop/objekterstellung"],"aliases":["Factory-Pattern","Factory Pattern","Fabrik-Muster","Factory Method"],"links":null,"created_date":"2025-09-16"}}
---


>Das [[wiki/Factory\|Factory]]-Pattern erstellt Objekte ohne die konkrete Klasse zu spezifizieren.

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