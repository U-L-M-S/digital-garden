---
{"dg-publish":true,"permalink":"/02-resources/notes/java-schaltjahr/","tags":["informatik/code/algorithmus","informatik/programmierung/sprachen/java"],"noteIcon":"","updated":"2025-10-29T12:59:07.000+01:00"}
---

```java
public class LeapYearChecker {
    public static void main(String[] args) {
        int year = 2024; // Ersetze dies durch das Jahr, das du überprüfen möchtest
        boolean isLeapYear = isLeapYear(year);

        if (isLeapYear) {
            System.out.println(year + " ist ein Schaltjahr.");
        } else {
            System.out.println(year + " ist kein Schaltjahr.");
        }
    }

    public static boolean isLeapYear(int year) {
        return (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0));
    }
}
```