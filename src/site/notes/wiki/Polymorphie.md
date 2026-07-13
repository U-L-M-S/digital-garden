---
{"dg-publish":true,"permalink":"/wiki/polymorphie/","tags":["ausbildung/gfn/ap1/vorbereitung","informatik/programmierung/konzepte/oop","informatik/programmierung/sprachen/java"],"noteIcon":"","updated":"2026-07-02T13:17:19.821+02:00","dg-note-properties":{"aliases":["Vielgestaltigkeit"],"created_date":"2025-03-16","links":null,"tags":["ausbildung/gfn/ap1/vorbereitung","informatik/programmierung/konzepte/oop","informatik/programmierung/sprachen/java"]}}
---

> **[[wiki/Polymorphie\|Polymorphie]]** _(„Vielgestaltigkeit“)_  
> In der [[wiki/OOP\|OOP]] bedeutet Polymorphie, dass eine [[wiki/Programmierung Methode\|Programmierung Methode]] oder ein Objekt **in verschiedenen Formen** genutzt werden kann, obwohl der gleiche Name verwendet wird.

## 📌 Arten:

1. **Methodenüberladung (compile time)**
    
    - Gleicher Methodenname, aber **unterschiedliche Parameter**.
    - Beispiel:
        
        ```java
		class Drucker {
		    void drucke(String text) {
		        System.out.println("Text drucken: " + text);
		    }
		
		    void drucke(int seiten) {
		        System.out.println("Drucke " + seiten + " leere Seiten.");
		    }
		
		    void drucke(boolean farbe) {
		        if (farbe) {
		            System.out.println("Drucke in Farbe.");
		        } else {
		            System.out.println("Drucke in Schwarz-Weiß.");
		        }
		    }
		}
        ```
    
2. **Methodenüberschreibung (runtime)**
    
    - Eine **Unterklasse** überschreibt eine [[wiki/Programmierung Methode\|Programmierung Methode]] der **Oberklasse**.
    - Beispiel:
        
        ```java
        class Tier { void lautGeben() { System.out.println("Geräusch"); } }  
        class Hund extends Tier { void lautGeben() { System.out.println("Wuff"); } }
        ```
