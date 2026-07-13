---
{"dg-publish":true,"permalink":"/wiki/django/","tags":["informatik/programmierung/sprachen/python/framework"],"noteIcon":"","updated":"2026-07-02T18:15:59.564+02:00","dg-note-properties":{"aliases":["django"],"created":"2025-10-29 12:00","links":null,"path":"Notes","tags":["informatik/programmierung/sprachen/python/framework"]}}
---

>**Django** ist ein [[wiki/Framework\|Framework]] für [[wiki/Python\|Python]], mit dem man schnell und strukturiert Web-Anwendungen bauen kann.
>>Es liefert viele fertige Bausteine mit (Datenbankzugriff, Admin-Oberfläche, URL-Routing), damit man nicht bei null anfangen muss.

# I. Beispiel
___
```python
from django.http import HttpResponse

def hello(request):
    return HttpResponse("Hello, World!")  # Gibt Text als HTTP-Antwort zurück
```

>[!tip]
>Django folgt dem **"Batteries included"**-Prinzip: ORM, Admin-Panel und Authentifizierung sind direkt eingebaut, statt separat installiert werden zu müssen.
