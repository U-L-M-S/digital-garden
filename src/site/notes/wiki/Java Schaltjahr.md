---
{"dg-publish":true,"permalink":"/wiki/java-schaltjahr/","tags":["informatik/programmierung/algorithmen","informatik/programmierung/sprachen/java"],"noteIcon":"","updated":"2026-07-02T13:17:19.000+02:00","dg-note-properties":{"aliases":["Java Schaltjahr","java Schaltjahr"],"created_date":"2024-09-18","links":null,"tags":["informatik/programmierung/algorithmen","informatik/programmierung/sprachen/java"]}}
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