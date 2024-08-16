---
tags:
  - code/java/klassen/vererbung
dg-publish: true
links: 
path: Notes
created: 2024-06-21 16:24
---

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
