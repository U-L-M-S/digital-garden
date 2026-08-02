---
{"dg-publish":true,"permalink":"/wiki/komponententest/","tags":["informatik/software","wirtschaft/qualitaet"],"noteIcon":"","updated":"2026-07-19T03:56:26.869+02:00","dg-note-properties":{"tags":["informatik/software","wirtschaft/qualitaet"],"aliases":["Unit Test","Modultest","Einheitstest"],"links":null,"created_date":"2025-09-16"}}
---


>[[wiki/Komponententest\|Komponententest]] (Unit Test) prüft die kleinsten testbaren Einheiten einer Software isoliert.

>>Er verifiziert einzelne Methoden, Klassen oder Module unabhängig von anderen Komponenten.

>[!important] 
>**Unit Test Eigenschaften:**
>- **Isolation**: Keine Abhängigkeiten zu anderen Units
>- **Automatisiert**: Teil der Build-Pipeline
>- **Schnell**: Ausführung in Millisekunden
>- **Deterministisch**: Immer gleiches Ergebnis

>[!example] 
>```java
>@Test
>public void testAddition() {
>    // Arrange
>    Calculator calc = new Calculator();
>    
>    // Act
>    int result = calc.add(2, 3);
>    
>    // Assert
>    assertEquals(5, result);
>}
>```

>[!success] 
>**Test-Frameworks:**
>- JUnit (Java), NUnit (C#), pytest (Python)
>- Jest (JavaScript), PHPUnit (PHP)