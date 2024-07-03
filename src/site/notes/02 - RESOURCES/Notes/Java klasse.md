---
tags:
  - java/klassen
dg-publish: true
links: 
path: Notes
created: 2024-06-21 16:38
---

```java
public class Kreis {
	double radius;
	
	// Konstruktoren erzeugen
	Kreis(){
		radius = 0;
	}
	Kreis(double r){
		radius = r;
	}
	
	//Getter und Setter Methoden einrichten
	double getRadius() {
		return radius;
	}
	
	void setRadius(double r) {
		radius = r;
	}
	
	
	double getUmfang() {
		return 2 * Math.PI * radius;
	}
	
	double getFlaeche() {
		return Math.PI * radius * radius;
	}
	
	void setUmfang(double u) {
		radius = u / (2* Math.PI);
	}
	
	void setFlaeche(double f) {
		radius = Math.sqrt(f/Math.PI);
	}

	
}

```

use class Kreis 
```java
import javax.swing.JOptionPane;

public class Kreistest {

	public static void main(String[] args) {
		String kreisradius, einheit;
		double r;
		
		kreisradius = JOptionPane.showInputDialog("Geben Sie den Kreisradius ein: ");
		r = Double.parseDouble(kreisradius);
		einheit = JOptionPane.showInputDialog("Geben Sie die Masseeinheit ein: ");
		
		Kreis k = new Kreis(r);
		
		System.out.println("Kreisradius: " + k.getRadius() + " " + einheit);
		System.out.println("Kreisumfang: " + k.getUmfang() + " " + einheit);
		System.out.println("Kreisflaeche: " + k.getFlaeche() + " " + einheit + '\u00b2');

	}

}
```