---
{"dg-publish":true,"permalink":"/wiki/java-variable/","tags":["informatik/software"],"noteIcon":"","updated":"2026-07-19T03:56:26.778+02:00","dg-note-properties":{"created":"2023-08-20 16:42","links":null,"path":"Notes","tags":["informatik/software"]}}
---

# Syntax
[[wiki/Datentyp\|Datentyp]]  [[wiki/Variable\|Variable]]-Name = Wert

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

# Notiz

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

[[wiki/String\|String]] ist großgeschrieben, weil es in Wirklichkeit kein [[wiki/Datentyp\|Datentyp]] ist, sondern eine [[wiki/Java klasse\|Klasse]].