---
{"dg-publish":true,"permalink":"/02-resources/notes/java-schaltjahr/","tags":["code/java","code/algorithmus"],"noteIcon":"","updated":"2025-09-05T10:12:30.000+02:00"}
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