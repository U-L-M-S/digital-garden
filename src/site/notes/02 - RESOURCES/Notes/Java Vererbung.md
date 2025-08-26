---
{"dg-publish":true,"permalink":"/02-resources/notes/java-vererbung/","tags":["code/OOP/vererbung"],"noteIcon":"","updated":"2025-08-26T16:35:05.193+02:00"}
---

>In [[02 - RESOURCES/Notes/Java\|Java]] ermöglicht die [[02 - RESOURCES/Notes/UML-Vererbung\|Vererbung]], dass eine [[02 - RESOURCES/Notes/Klasse\|Klasse]] (die _Kindklasse_ oder _Subklasse_) von einer anderen [[02 - RESOURCES/Notes/Klasse\|Klasse]] (der _Elternklasse_ oder _Superklasse_) erbt. 
>>Die Subklasse übernimmt damit die Attribute und Methoden der Superklasse und kann zusätzliche Funktionen hinzufügen oder vorhandene Methoden überschreiben.
```Java
#PARENT CLASS
public class Luftfahrzeug {
	
	//Atributen der Klasse
	protected String bezeichnung;
	protected double gewicht;
	protected int baujahr;
	
	public Luftfahrzeug() {
		this.bezeichnung = "unbekannt";
		this.gewicht = 0.0;
		this.baujahr = 0;
	}
	
	//GETTER und SETTER Methoden der Klasse
	public String getBezeichnung() {
		return this.bezeichnung;
	}
	public void setBezeichnung(String bezeichnung) {
		this.bezeichnung = bezeichnung;
	}
	
	public double getGewicht() {
		return this.gewicht;
	}
	public void setGewicht(double gewicht) {
		this.gewicht = gewicht;
	}
	
	public double getBaujahr() {
		return this.baujahr;
	}
	public void setBaujahr(int baujahr) {
		this.baujahr = baujahr;
	}
	
	
	//Weitere Methode
	public String getDaten() {
		String daten = "Bezeichnung: " + this.bezeichnung + " \n" + "Gewicht: " + this.gewicht + "\n" + "Baujahr: " + this.baujahr + " \n";
		return daten;
	}
}
```
```Java
#CHILD CLASS
public class Flugzeug extends Luftfahrzeug {
	private double spannweite;
	private int motorAnzahl;
	
	public Flugzeug() {
		this.spannweite = 0.0;
		this.motorAnzahl = 0;
	}

	public double getSpannweite() {
		return spannweite;
	}

	public void setSpannweite(double spannweite) {
		this.spannweite = spannweite;
	}

	public int getMotorAnzahl() {
		return motorAnzahl;
	}

	public void setMotorAnzahl(int motorAnzahl) {
		this.motorAnzahl = motorAnzahl;
	}
	
	public String getDaten() {
		String daten = "Bezeichnung: " + this.bezeichnung + " \n" + "Gewicht: " + this.gewicht + "\n" + "Baujahr: " + this.baujahr + " \n" + "Spannweite: " + this.spannweite + "\n" + "MotorAnzahl: " + this.motorAnzahl + "\n";
		return daten;
	}
	
}
```
```Java
public class ProgramA {

	public static void main(String[] args) {
		
		Luftfahrzeug bspLuftfahrzeug = new Luftfahrzeug();
		bspLuftfahrzeug.setBezeichnung("A310");
		bspLuftfahrzeug.setGewicht(71069);
		bspLuftfahrzeug.setBaujahr(1995);
		
		System.out.println(bspLuftfahrzeug.getDaten());
		
	}
}
```
OUTPUT:
```bash
Bezeichnung: A310 
Gewicht: 71069.0
Baujahr: 1995 
```

>[!note] 
>PARENT CLASSES sind als standard [[02 - RESOURCES/Notes/Java abstrakte Klasse\|Java abstrakte Klasse]]n.

>[!summary] 
>Durch die [[02 - RESOURCES/Notes/UML-Vererbung\|Vererbung]] können allgemeine Eigenschaften und Methoden in der Elternklasse definiert werden, sodass sie nicht in jeder Kindklasse neu geschrieben werden müssen.
>

>[!important] 
>Eine CHILD Klasse kann nur von ein PARENT Klasse vererben. Wenn dieser von zwei oder mehrere [[02 - RESOURCES/Notes/Java klasse\|Java klasse]]n vererben muss. Sollst du [[02 - RESOURCES/Notes/Java Interface\|Java Interface]] verwenden.
