---
{"dg-publish":true,"permalink":"/wiki/kapselung/","tags":["informatik/software","informatik/code","ausbildung/pruefung"],"noteIcon":"","updated":"2026-07-19T03:56:26.976+02:00","dg-note-properties":{"tags":["informatik/software","informatik/code","ausbildung/pruefung"],"aliases":["Encapsulation","Data Hiding","Datenkapselung"],"links":null,"created_date":"2025-09-16"}}
---


>[[wiki/Kapselung\|Kapselung]] ist das [[wiki/OOP\|OOP]]-Prinzip, Daten und Funktionen in Objekten zusammenzufassen und zu verbergen.

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