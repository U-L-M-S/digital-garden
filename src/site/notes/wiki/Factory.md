---
{"dg-publish":true,"permalink":"/wiki/factory/","tags":["informatik/software"],"noteIcon":"","updated":"2026-07-19T03:56:26.000+02:00","dg-note-properties":{"tags":["informatik/software"],"aliases":["Factory-Pattern","Factory Pattern","Fabrik-Muster","Factory Method"],"links":null,"created_date":"2025-09-16"}}
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