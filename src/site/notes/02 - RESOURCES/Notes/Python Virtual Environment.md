---
{"dg-publish":true,"permalink":"/02-resources/notes/python-virtual-environment/","tags":["code/python"],"noteIcon":"","updated":"2024-12-01T22:41:33.000+01:00"}
---

>Manche [[02 - RESOURCES/Notes/Python\|Python]]-Scripts müssen in einer Virtual Environment laufen, um Paketkonflikte zu vermeiden, das System-Python zu schützen und eine saubere Entwicklungsumgebung zu gewährleisten. 
>Virtuelle Environments ermöglichen zudem die einfache Reproduzierbarkeit von Projekten, indem Abhängigkeiten isoliert und spezifische Versionen von Bibliotheken verwendet werden.

# Bsp

## Environment erstellen

```sh
python -m venv <env_name>
```

## Aktivieren

### Windows

```sh
<env_name>\Scripts\activate
```

### Linux/Mac

```sh
source <env_name>/bin/activate
```

## Deaktivieren

```sh
deactivate
```