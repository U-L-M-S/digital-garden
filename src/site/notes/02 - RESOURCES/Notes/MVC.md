---
{"dg-publish":true,"permalink":"/02-resources/notes/mvc/","noteIcon":"","updated":"2025-05-06T14:40:42.000+02:00"}
---

>Es ist ein Architekturdesign, das häufig in der Softwareentwicklung verwendet wird, insbesondere in Webanwendungen wie [[02 - RESOURCES/Notes/ASP.NET Core Web App (Razor Pages)\|ASP.NET Core Web App (Razor Pages)]].
>>Es teilt eine Anwendung in drei Hauptkomponenten, um die Entwicklung und Wartung zu erleichtern:

1. **Model**:
    
    - Repräsentiert die Daten und die Geschäftslogik der Anwendung.
    - Verarbeitet Datenoperationen (z. B. Datenbankzugriffe).
    - Ist unabhängig von der [[02 - RESOURCES/Notes/Benutzeroberfläche\|Benutzeroberfläche]].
2. **View**:
    
    - Präsentiert die Daten aus dem Model in einer benutzerfreundlichen Weise.
    - Zuständig für die [[02 - RESOURCES/Notes/Benutzeroberfläche\|Benutzeroberfläche]] ([[02 - RESOURCES/Notes/UI\|UI]]).
    - Zeigt keine Geschäftslogik an, sondern nur Informationen.
3. **Controller**:
    
    - Verarbeitet Benutzeranfragen und Eingaben.
    - Interagiert mit dem Model, um Daten abzurufen oder zu ändern.
    - Leitet Daten an die View weiter, um die [[02 - RESOURCES/Notes/UI\|UI]] zu aktualisieren.

### Vorteile:

- **Trennung der Verantwortlichkeiten**: Macht den Code sauberer und wartbarer.
- **Flexibilität**: Ermöglicht unabhängige Entwicklung und Testung der einzelnen Teile.
- **Wiederverwendbarkeit**: Views und Models können leicht wiederverwendet werden.

### Beispiel in [[02 - RESOURCES/Notes/ASP.NET Core Web App (Razor Pages)\|ASP.NET Core Web App (Razor Pages)]]:

- Ein **Controller** empfängt eine Anfrage (z. B. `/Products/Details/1`), ruft das entsprechende **Model** auf, um Produktdetails zu laden, und gibt diese an eine **View** weiter, um die Daten anzuzeigen.