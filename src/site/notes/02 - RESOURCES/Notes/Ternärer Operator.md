---
{"dg-publish":true,"permalink":"/02-resources/notes/ternaerer-operator/","tags":["informatik/code"],"noteIcon":"","updated":"2025-10-29T12:59:10.000+01:00","dg-note-properties":{"aliases":["ternären Bedingungsoperator","Ternären Bedingungsoperator","Ternären Operator","Ternary Operator","ternary operator"],"created_date":"2024-09-19","links":null,"tags":["informatik/code"]}}
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