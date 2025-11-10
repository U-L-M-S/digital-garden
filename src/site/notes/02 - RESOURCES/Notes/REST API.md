---
{"dg-publish":true,"permalink":"/02-resources/notes/rest-api/","tags":["informatik/code","tools"],"noteIcon":"","updated":"2025-11-10T15:24:35.829+01:00"}
---

Representational State Transfer – [[02 - RESOURCES/Notes/API\|API]]
> 
>> Eine REST API ist eine spezielle Art von [[02 - RESOURCES/Notes/API\|API]], die auf dem [[02 - RESOURCES/Notes/HTTP\|HTTP]]-Protokoll basiert. Sie folgt festen Regeln, um Daten zwischen Client und [[02 - RESOURCES/Notes/Server\|Server]] auszutauschen – oft im JSON-Format.


> 📌 **Beispiel:**  
> Eine Wetter-App fragt bei einer REST [[02 - RESOURCES/Notes/API\|API]] das Wetter in Berlin ab:  
> `GET https://api.wetter.com/data?city=Berlin`

> ✅ Vorteile:

- Plattformunabhängig
- Einfach zu verwenden
- Klare Struktur und Regeln    

## Wichtig ❗
> REST ist **zustandslos** – jeder [[02 - RESOURCES/Notes/API\|API]]-Request ist unabhängig.    
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
- `DELETE` (Daten löschen
### Bsp
```bash
GET     /users         → alle Nutzer abrufen  
GET     /users/1       → Nutzer mit ID 1 abrufen  
POST    /users         → neuen Nutzer erstellen  
PUT     /users/1       → Nutzer mit ID 1 aktualisieren  
DELETE  /users/1       → Nutzer mit ID 1 löschen
```

---

# 🎯 AP2-Prüfungsaufgabe: REST API

>[!example] Typische Prüfungsaufgabe
>**Szenario:** Entwickle eine REST API für Produktverwaltung.
>
>**Aufgabe:**
>1. Definiere Endpoints für CRUD-Operationen
>2. Ordne HTTP-Methoden zu
>3. Beispiel-JSON für Produkt
>4. Welche Status-Codes für welche Operationen?

---

## ✅ Kompakte Lösung

**1. REST Endpoints:**
```
GET    /api/products          → Alle Produkte
GET    /api/products/5        → Produkt mit ID 5
POST   /api/products          → Neues Produkt erstellen
PUT    /api/products/5        → Produkt 5 aktualisieren
DELETE /api/products/5        → Produkt 5 löschen
```

**2. Beispiel-JSON:**
```json
{
  "id": 5,
  "name": "Laptop ThinkPad",
  "price": 899.99,
  "inStock": true,
  "category": "Electronics"
}
```

**3. HTTP Status-Codes:**
- **200 OK**: GET erfolgreich
- **201 Created**: POST erfolgreich (neues Produkt)
- **204 No Content**: DELETE erfolgreich
- **400 Bad Request**: Ungültige Daten
- **404 Not Found**: Produkt existiert nicht
- **500 Internal Server Error**: Serverfehler

>[!check] AP2-Checkliste
>- ✅ REST Prinzipien: Zustandslos, einheitliche Schnittstelle
>- ✅ HTTP-Methoden: GET, POST, PUT, DELETE
>- ✅ JSON als Datenformat
>- ✅ Status-Codes 2xx (Erfolg), 4xx (Client-Fehler), 5xx (Server-Fehler)
>- ✅ Ressourcen-orientierte URLs (/products nicht /getProducts)

>[!warning] Häufige Fehler
>- ❌ Verben in URLs: `/getProduct` statt `/products`
>- ❌ POST für Abfragen verwenden
>- ❌ Falscher Status-Code (z.B. 200 statt 201 bei Erstellung)

---

## 🔗 Weiterführende Themen

- [[02 - RESOURCES/Notes/JSON\|JSON]] - Datenformat
- [[02 - RESOURCES/Notes/API\|API]] - Allgemeine APIs
- [[02 - RESOURCES/Notes/HTTP\|HTTP]] - Protokoll