---
{"dg-publish":true,"permalink":"/wiki/rest-api/","tags":["informatik/programmierung","tools"],"noteIcon":"","updated":"2026-07-02T13:17:19.000+02:00","dg-note-properties":{"aliases":null,"created_date":"2025-07-21","links":null,"tags":["informatik/programmierung","tools"]}}
---

Representational State Transfer – [[wiki/API\|API]]
> 
>> Eine REST API ist eine spezielle Art von [[wiki/API\|API]], die auf dem [[wiki/HTTP\|HTTP]]-Protokoll basiert. Sie folgt festen Regeln, um Daten zwischen Client und [[wiki/Server\|Server]] auszutauschen – oft im JSON-Format.


> 📌 **Beispiel:**  
> Eine Wetter-App fragt bei einer REST [[wiki/API\|API]] das Wetter in Berlin ab:  
> `GET https://api.wetter.com/data?city=Berlin`

> ✅ Vorteile:

- Plattformunabhängig
- Einfach zu verwenden
- Klare Struktur und Regeln    

## Wichtig ❗
> REST ist **zustandslos** – jeder [[wiki/API\|API]]-Request ist unabhängig.    
> D.h. bei jeder Abfrage muss der Nutzer seine Autorisierung bestätigen.

## Datenformat
> Daten werden oft im **JSON-Format** übertragen.

### Bsp
```bash
{
  "id": 1,
  "name": "Torva",
  "email": "torva@example.com",
  "active": true
}
```
## Struktur
> REST-APIs sind **leichtgewichtig**, **einfach zu benutzen** und funktionieren mit den bekannten HTTP-Methoden wie:

- `GET` (Daten abrufen)
- `POST` (Daten senden/anlegen)    
- `PUT` (Daten aktualisieren)
- `DELETE` (Daten löschen)
### Bsp
```bash
GET     /users         → alle Nutzer abrufen  
GET     /users/1       → Nutzer mit ID 1 abrufen  
POST    /users         → neuen Nutzer erstellen  
PUT     /users/1       → Nutzer mit ID 1 aktualisieren  
DELETE  /users/1       → Nutzer mit ID 1 löschen
```