---
{"dg-publish":true,"permalink":"/02-resources/notes/er-modell/","tags":["datenmodellierung/konzeptionell","datenbank/design"],"noteIcon":"","updated":"2025-09-16T16:45:37.430+02:00"}
---


>Das [[02 - RESOURCES/Notes/ER-Modell\|ER-Modell]] ist ein konzeptionelles Datenmodell zur Beschreibung von Entitäten und ihren Beziehungen.

>>Es stellt die Datenstruktur unabhängig von der technischen Implementierung dar.

>[!important] 
>**ER-Komponenten:**
>- **Entitäten** (Rechtecke): Objekte der realen Welt
>- **Attribute** (Ovale): Eigenschaften von Entitäten
>- **Beziehungen** (Rauten): Verbindungen zwischen Entitäten
>- **[[02 - RESOURCES/Notes/Kardinalität\|Kardinalität]]** (1:1, 1:n, n:m)

>[!example] 
>**Beispiel:**
>```
>KUNDE ----< BESTELLT >---- PRODUKT
>  |                           |
>Name                        Preis
>```

>[!success] 
>Grundlage für relationale Datenbank-Design.