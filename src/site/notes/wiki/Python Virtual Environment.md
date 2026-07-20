---
{"dg-publish":true,"permalink":"/wiki/python-virtual-environment/","tags":["informatik/code"],"noteIcon":"","updated":"2026-07-19T03:56:26.000+02:00","dg-note-properties":{"aliases":["python virtual environment"],"created_date":"2024-12-01","links":null,"tags":["informatik/code"]}}
---

>Manche [[wiki/Python\|Python]]-Scripts müssen in einer Virtual Environment laufen, um Paketkonflikte zu vermeiden, das System-Python zu schützen und eine saubere Entwicklungsumgebung zu gewährleisten. 
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