---
{"dg-publish":true,"permalink":"/02-resources/notes/polymorphie/","tags":["GFN/prüfungsrelevant/AP1/vorbereitung","informatik/code/java","informatik/code/OOP"],"noteIcon":"","updated":"2025-09-10T16:33:09.521+02:00"}
---

> **[[02 - RESOURCES/Notes/Polymorphie\|Polymorphie]]** _(„Vielgestaltigkeit“)_  
> In der [[02 - RESOURCES/Notes/OOP\|OOP]] bedeutet Polymorphie, dass eine [[02 - RESOURCES/Notes/Programmierung Methode\|Programmierung Methode]] oder ein Objekt **in verschiedenen Formen** genutzt werden kann, obwohl der gleiche Name verwendet wird.

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
    
    - Eine **Unterklasse** überschreibt eine [[02 - RESOURCES/Notes/Programmierung Methode\|Programmierung Methode]] der **Oberklasse**.
    - Beispiel:
        
        ```java
        class Tier { void lautGeben() { System.out.println("Geräusch"); } }  
        class Hund extends Tier { void lautGeben() { System.out.println("Wuff"); } }
        ```
