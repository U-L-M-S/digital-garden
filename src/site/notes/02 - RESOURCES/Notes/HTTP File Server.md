---
{"dg-publish":true,"permalink":"/02-resources/notes/http-file-server/","tags":["code/python","software/server","netzwerk/protocol"],"noteIcon":"","updated":"2025-09-03T15:05:26.160+02:00"}
---

>Ein [[02 - RESOURCES/Notes/HTTP\|HTTP]]-Server starten.
>>Der Server wird alles Dateien im aktuellen Verzeichnis über den Webbrowser zugänglich machen.

```python
python -m http.server 8080
```

>>>Alle Geräte können jetzt über das Browser auf die Dateien zugreifen. Sie brauchen nur den [[02 - RESOURCES/Notes/IP\|IP-Adresse]] von den Rechner und die [[02 - RESOURCES/Notes/PORT\|Ports]].
>>>
>>>In Browser:

```bash
server-ip:8080
```