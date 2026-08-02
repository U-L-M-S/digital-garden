---
{"dg-publish":true,"permalink":"/wiki/ternaerer-operator/","tags":["informatik/code"],"noteIcon":"","updated":"2026-07-19T03:56:26.738+02:00","dg-note-properties":{"aliases":["ternären Bedingungsoperator","Ternären Bedingungsoperator","Ternären Operator","Ternary Operator","ternary operator"],"created_date":"2024-09-19","links":null,"tags":["informatik/code"]}}
---

>[[wiki/IF-Bedingung\|IF-Bedingung]] in Programierung, aber in eine Zeile verkürzt.
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