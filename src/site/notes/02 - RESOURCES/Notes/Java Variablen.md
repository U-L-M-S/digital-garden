---
{"dg-publish":true,"permalink":"/02-resources/notes/java-variablen/","tags":["code/java/variable"],"noteIcon":"","updated":"2024-09-19T13:44:53.161+02:00"}
---

>Syntax
>`[[02 - RESOURCES/Notes/Datentyp\|Datentyp]]  [[Variable]]-Name = valuer`

```java
public class AwesomeJavaProgram{
	public static void main(String[] args){
		int myAge=28;
		double pi=3.14;
		char sympleLetter='A';
		String myName="Levi";
	
		System.out.println(myAge);
		System.out.println(pi);
		System.out.println(sympleLetter);
		System.out.println(myName);
	}
}
```

>[!hint] Regeln zur Vergabe von Variablennamen:
>- Ein Variablenname muss mit einem Buchstaben, Unterstrich (`_`) oder Dollarzeichen (`$`) beginnen, aber nicht mit einer Zahl.
>  
>- Ein Variablenname darf Buchstaben, Ziffern, Unterstriche und Dollarzeichen enthalten.
>  
>- Der Name muss sinnvoll und beschreibend sein (z. B. `myAge` statt nur `a`).
>  
>- Groß- und Kleinschreibung ist wichtig (z. B. `myAge` und `MyAge` sind verschiedene Variablen).
>  
>- Es dürfen keine reservierten Schlüsselwörter von Java verwendet werden (z. B. `int`, `class`, `public`, etc.).

[[02 - RESOURCES/Notes/String\|String]] ist großgeschrieben, weil es in die Wirklichkeit keine [[Datentyp]] ist, sonder eine [[02 - RESOURCES/Notes/Klasse\|Klasse]].