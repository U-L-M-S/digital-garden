---
{"dg-publish":true,"permalink":"/02-resources/notes/ternaeren-operator/","tags":["code"],"updated":"2024-09-19T13:59:29.000+02:00"}
---

>IF in Programierung, aber in eine Zeile verkürzt.
>> `(BEDINGUNG) ? TRUE : FALSE;`

```java
public class ConditionalOperator {
	public static void main(String[] args) {
		int a = 3, b = 5, max;
		max = (a > b) ? a : b;

		System.out.println("Der groesste Wert ist: " + max);
	}
}
```