---
{"dg-publish":true,"permalink":"/02-resources/notes/ternaerer-operator/","tags":["informatik/code"],"noteIcon":"","updated":"2025-09-10T16:33:13.914+02:00"}
---

>[[02 - RESOURCES/Notes/IF-Bedingung\|IF-Bedingung]] in Programierung, aber in eine Zeile verkürzt.
# Syntax
```java
(BEDINGUNG) ? <TRUE> : <FALSE>;
```
# Bsp
```java
public class ConditionalOperator {
	public static void main(String[] args) {
		int a = 3, b = 5, max;
		max = (a > b) ? a : b;

		System.out.println("Der groesste Wert ist: " + max);
	}
}
```