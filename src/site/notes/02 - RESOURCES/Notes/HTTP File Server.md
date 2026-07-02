---
{"dg-publish":true,"permalink":"/02-resources/notes/http-file-server/","tags":["informatik/netzwerk/protokoll","informatik/programmierung/sprachen/python","software/server"],"noteIcon":"","updated":"2026-05-13T08:39:42.371+02:00","dg-note-properties":{"aliases":["HTTP Starten"],"created":"2024-08-03 20:18","links":null,"path":["Notes"],"tags":["informatik/netzwerk/protokoll","informatik/programmierung/sprachen/python","software/server"]}}
---

>Ein [[02 - RESOURCES/Notes/HTTP\|HTTP]]-Server starten.
>>Der Server wird alle Dateien im aktuellen Verzeichnis über den Webbrowser zugänglich machen.

```python
python -m http.server 8080
```

>>>Alle Geräte können jetzt über den Browser auf die Dateien zugreifen. Sie brauchen nur die [[02 - RESOURCES/Notes/IP\|IP-Adresse]] vom Rechner und die [[02 - RESOURCES/Notes/PORT\|Ports]].
>>>
>>>Im Browser:

```bash
server-ip:8080
```