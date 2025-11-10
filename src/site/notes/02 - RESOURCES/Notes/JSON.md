---
{"dg-publish":true,"permalink":"/02-resources/notes/json/","tags":["datenformat/leichtgewicht","web/apis"],"noteIcon":"","updated":"2025-11-10T15:24:53.610+01:00"}
---


>[[02 - RESOURCES/Notes/JSON\|JSON]] (JavaScript Object Notation) ist ein leichtgewichtiges Datenformat für den Datenaustausch.

>>Es ist menschenlesbar, kompakt und wird hauptsächlich in Web-[[02 - RESOURCES/Notes/API\|API]]s verwendet.

>[!important] 
>**JSON-Datentypen:**
>- Strings, Numbers, Booleans
>- Objects (Key-Value-Paare)
>- Arrays
>- null

>[!example] 
>```json
>{
>  "name": "Max Mustermann",
>  "alter": 25,
>  "skills": ["Java", "Python", "SQL"],
>  "aktiv": true
>}
>```

>[!success]
>Standard für [[02 - RESOURCES/Notes/REST API\|REST API]]s und moderne Web-Anwendungen.

---

# 🎯 AP2-Prüfungsaufgabe: JSON

>[!example] Typische Prüfungsaufgabe
>**Aufgabe:** Erstelle JSON für einen Studenten mit: Name, Matrikelnummer, Kurse (Array), Aktiv (Boolean), Adresse (Objekt mit Straße, PLZ, Stadt).

---

## ✅ Kompakte Lösung

```json
{
  "name": "Max Mustermann",
  "matrikelnummer": 12345,
  "aktiv": true,
  "kurse": ["Informatik", "Mathematik", "Datenbanken"],
  "adresse": {
    "strasse": "Hauptstraße 1",
    "plz": "10115",
    "stadt": "Berlin"
  }
}
```

**Java-Parsing Beispiel:**
```java
import org.json.JSONObject;
import org.json.JSONArray;

String jsonString = "...";
JSONObject student = new JSONObject(jsonString);

String name = student.getString("name");
int matrikel = student.getInt("matrikelnummer");
boolean aktiv = student.getBoolean("aktiv");

JSONArray kurse = student.getJSONArray("kurse");
String ersterkurs = kurse.getString(0);

JSONObject adresse = student.getJSONObject("adresse");
String stadt = adresse.getString("stadt");
```

>[!check] AP2-Checkliste
>- ✅ Datentypen: String, Number, Boolean, null, Object, Array
>- ✅ Keys in Anführungszeichen: `"name"`
>- ✅ Arrays mit `[ ]`, Objekte mit `{ }`
>- ✅ Komma zwischen Elementen (KEIN Komma nach letztem!)
>- ✅ Verschachtelte Strukturen möglich

>[!warning] Häufige Fehler
>- ❌ Komma nach letztem Element
>- ❌ Einfache Anführungszeichen `'name'` statt `"name"`
>- ❌ Trailing Commas in Arrays
>- ❌ Fehlende Anführungszeichen bei Keys

---

## 🔗 Weiterführende Themen

- [[02 - RESOURCES/Notes/REST API\|REST API]] - Nutzt JSON
- [[02 - RESOURCES/Notes/API\|API]] - Allgemeine APIs