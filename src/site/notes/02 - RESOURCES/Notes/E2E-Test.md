---
{"dg-publish":true,"permalink":"/02-resources/notes/e2-e-test/","tags":["testing/end-to-end","qualitaetssicherung/workflow","AP2025/neu"],"noteIcon":"","updated":"2025-09-16T23:41:26.743+02:00"}
---


>[[02 - RESOURCES/Notes/E2E-Test\|E2E-Test]] (End-to-End-Test) testet komplette Benutzer-Workflows von Anfang bis Ende.

>>Er simuliert reale Benutzer-Interaktionen durch die gesamte Anwendung.

>[!important] 
>**E2E-Test Charakteristika:**
>- **Vollständiger Stack**: UI, API, Datenbank
>- **Reale Szenarien**: Echte Benutzer-Workflows
>- **Cross-Browser**: Verschiedene Browser/Geräte
>- **Produktionsähnlich**: Staging-Umgebung

>[!example] 
>**E2E-Test-Tools:**
>- **Web**: Selenium, Playwright, Cypress
>- **Mobile**: Appium, Detox
>- **API**: Postman, REST Assured

>**Beispiel-Workflow:**
>1. Benutzer registrieren
>2. Login durchführen
>3. Produkt suchen und kaufen
>4. Bestellung bestätigen
>5. Logout

>[!warning] 
>Langsam und wartungsintensiv - sparsam einsetzen für kritische Pfade.