---
{"dg-publish":true,"permalink":"/02-resources/notes/java-variable/","tags":["informatik/programmierung/sprachen/java"],"noteIcon":"","updated":"2025-10-29T12:59:07.236+01:00"}
---

# Syntax
[[02 - RESOURCES/Notes/Datentyp\|Datentyp]]  [[02 - RESOURCES/Notes/Variable\|Variable]]-Name = Wert

```java
Datentyp variableName = valuer;
```
# Bsp

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

# Notz

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

[[02 - RESOURCES/Notes/String\|String]] ist großgeschrieben, weil es in die Wirklichkeit keine [[02 - RESOURCES/Notes/Datentyp\|Datentyp]] ist, sonder eine [[02 - RESOURCES/Notes/Klasse\|Klasse]].