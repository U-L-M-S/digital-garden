---
{"dg-publish":true,"permalink":"/02-resources/notes/statisches-routing/","tags":["netzwerk/paket"],"updated":"2024-11-22T21:31:03.000+01:00"}
---

>Die Konfiguration von  die Routing-Tabellen werden manuell von einem Administrator konfiguriert.

>Jeder Router kennt nur seiner Nachbar(Routing-Tabelle).
>Bei Versendung von Paketen wird nur die Routers-[[02 - RESOURCES/Notes/IP\|02 - RESOURCES/Notes/IP]]s berücksichtig.

>[!note] 
>Wenn ein [[02 - RESOURCES/Notes/Router\|Router]] ausfällt oder den Weg nicht mehr stimmt wegen irgendwelche Grund, funktioniert nicht mehr.
![Statisches Routing-20240723120123303.png](/img/user/02%20-%20RESOURCES/Files/IMG/Statisches%20Routing-20240723120123303.png)
![Statisches Routing-20240723120400462.png](/img/user/02%20-%20RESOURCES/Files/IMG/Statisches%20Routing-20240723120400462.png)

>[!multi-column]
> 
>>[!check] Vorteile
>>- Administrator hat komplette Kontrolle
>>- In kleinen Netzwerken einfach zu erstellen und zu verwalten
>>- Kein Overhead von Routing-Protokollen
>>- Sehr einfach einzurichten in Unternetzen
>>- Es ist sicher: Man bekommt, was man einstellt, kein Automatismus sorgt für Probleme
> 
>>[!fail] Nachteile
>>- In großen Netzwerken schwer zu verwalten und unübersichtlich
>>- Keine automatische Loop-Verhinderung
>>- Ändert sich etwas im Netzwerk, müssen alle betroffenen Routen von Hand geändert werden
>>- Kein automatisches Neurouten bei Ausfall
