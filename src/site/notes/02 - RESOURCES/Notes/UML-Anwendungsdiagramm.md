---
{"dg-publish":true,"permalink":"/02-resources/notes/uml-anwendungsdiagramm/","tags":["GFN/prüfungsrelevant/AP1/vorbereitung","UML/Anwendungsdiagramm"],"updated":"2025-03-21T13:50:24.078+01:00"}
---

>Ein **Anwendungsfall-Diagramm** ist ein [[02 - RESOURCES/Notes/UML\|UML]]-Diagramm, das zeigt, wie externe Akteure (z. B. Benutzer oder andere Systeme) mit dem System über verschiedene Anwendungsfälle (Use Cases) interagieren.  
>Es wird verwendet, um die funktionalen Anforderungen eines Systems aus der Sicht der Benutzer darzustellen und die Beziehungen zwischen Akteuren und Anwendungsfällen zu visualisieren.

> > Anwendungsfall-Diagramme helfen dabei, die Erwartungen und Bedürfnisse der Nutzer besser zu verstehen und die Systemfunktionen zu planen.

## Syntax
![[UML-Anwendungsdiagramm 2025-03-21 11.18.28.excalidra\|UML-Anwendungsdiagramm 2025-03-21 11.18.28.excalidra]]

--> Akteure werden durch Strichmännchen oder Kisten symbolisiert....

Anwendungsfällee* sind Ovale mit der Beschreibung der Funktion.  
>Die Verbindungen zeigen, welche Akteure mit welchen Anwendungsfällen interagieren..


## Beziehungen zwischen den Anwendungsfällen
 
>-**include**: Wenn eine Anwendungsfall ausgeführt wird, muss einer anderer vorher ausgeführt werden.
>-**extend**: optionale Erweiterung eines Anwendungsfalls
>-**generalization**: Vererbung zwischen Akteuren oder Anwendungsfällen

## Bsp

```plaintext
Akteur: Benutzer
Anwendungsfall: Artikel kaufen
include: Zahlung abwickeln
extend: Rabatt anwenden
```

> Dieses Diagramm hilft uns, die Funktionalitäten und Benutzerinteraktionen besser zu verstehen.
