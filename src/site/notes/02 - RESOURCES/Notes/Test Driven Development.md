---
{"dg-publish":true,"permalink":"/02-resources/notes/test-driven-development/","tags":["programmierung/methoden","qualitaetssicherung/agile","AP2025/neu"],"noteIcon":"","updated":"2025-10-29T12:59:10.792+01:00"}
---


>[[02 - RESOURCES/Notes/Test Driven Development\|Test Driven Development]] (TDD) ist eine Entwicklungsmethode, bei der Tests vor dem Produktionscode geschrieben werden.

>>TDD folgt dem Red-Green-Refactor-Zyklus: fehlschlagender Test → Code zum Bestehen → Code verbessern.

>[!important] 
>**TDD-Zyklus:**
>1. **Red**: Test schreiben (schlägt fehl)
>2. **Green**: Minimal nötigen Code schreiben
>3. **Refactor**: Code und Tests verbessern

>[!example] 
>```java
>// 1. Test zuerst schreiben
>@Test
>public void testAddition() {
>    assertEquals(5, calculator.add(2, 3));
>}
>
>// 2. Implementation
>public int add(int a, int b) {
>    return a + b;
>}
>```

>[!success] 
>**TDD-Vorteile:**
>- Sauberer, testbarer Code
>- Schnelle Fehlererkennung
>- Besseres Design
>- Hohe Testabdeckung

>[!warning] 
>Erfordert Disziplin und kann initial mehr Zeit kosten.