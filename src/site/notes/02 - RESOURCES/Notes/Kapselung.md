---
{"dg-publish":true,"permalink":"/02-resources/notes/kapselung/","tags":["oop/prinzipien","programmierung/konzepte","AP2025/betont"],"noteIcon":"","updated":"2025-09-16T23:41:26.771+02:00"}
---


>[[02 - RESOURCES/Notes/Kapselung\|Kapselung]] ist das [[02 - RESOURCES/Notes/OOP\|OOP]]-Prinzip, Daten und Funktionen in Objekten zusammenzufassen und zu verbergen.

>>Objekt-interne Details werden vor äußerem Zugriff geschützt, Zugang erfolgt über definierte Schnittstellen.

>[!important] 
>**Kapselungs-Mechanismen:**
>- Private Attribute (nicht direkt zugänglich)
>- Public Methoden (kontrollierter Zugriff)
>- Getter/Setter-Methoden
>- Access Modifier (public, private, protected)

>[!example] 
>```java
>public class BankKonto {
>    private double saldo; // Privat - gekapselt
>    
>    public void einzahlen(double betrag) { // Public Interface
>        if (betrag > 0) saldo += betrag;
>    }
>    
>    public double getSaldo() { return saldo; }
>}
>```

>[!success] 
>Schützt Datenintegrität und reduziert Abhängigkeiten.