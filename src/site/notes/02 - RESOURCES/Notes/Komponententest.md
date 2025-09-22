---
{"dg-publish":true,"permalink":"/02-resources/notes/komponententest/","tags":["testing/unit","qualitaetssicherung/modul"],"noteIcon":"","updated":"2025-09-16T23:41:26.000+02:00"}
---


>[[02 - RESOURCES/Notes/Komponententest\|Komponententest]] (Unit Test) prüft die kleinsten testbaren Einheiten einer Software isoliert.

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