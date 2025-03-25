---
{"dg-publish":true,"permalink":"/02-resources/notes/python-server/","tags":["code/python","software/server","netzwerk/protocol"]}
---

>Ein [[02 - RESOURCES/Notes/HTTP\|HTTP]]-Server starten.
>>Ser Server wird alles Dateien im aktuellen Verzeichnis über den Webbrowser zugänglich machen.

```python
python -m http.server 8080
```

>>>Alle Geräte können jetzt über das Browser auf die Dateien zugreifen. Sie brauchen nur den [[02 - RESOURCES/Notes/IP\|IP-Adresse]] von den Rechner und die [[02 - RESOURCES/Notes/PORT\|Ports]].
>>>
>>>In Browser:

```bash
server-ip:8080
```