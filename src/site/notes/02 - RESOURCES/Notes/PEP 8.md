---
{"dg-publish":true,"permalink":"/02-resources/notes/pep-8/","tags":["code/python"],"noteIcon":"","updated":"2025-08-26T16:35:06.516+02:00"}
---

>**Python Enhancement Proposal 8**
>>Es ist ein Dokument, das die **offizielle Stilrichtlinie** für Python-Code definiert. 
>>Es hilft Entwicklern, **konsistenten und lesbaren Code** zu schreiben, was besonders in Teams wichtig ist.
## Die wichtigsten Punkte von PEP 8:

1. **Einrückungen**:
    
    - Verwende **4 Leerzeichen** pro Einrückungsebene, keine Tabs.
2. **Maximale Zeilenlänge**:
    
    - Beschränke Zeilen auf **79 Zeichen** (72 Zeichen für Kommentare und Docstrings).
3. **Leerzeilen**:
    
    - Nutze Leerzeilen, um Funktionen, Klassen und große Abschnitte zu trennen.
4. **Kommentare**:
    
    - Schreib sinnvolle, erklärende Kommentare.
    - Für mehrzeilige Kommentare nutze `#` für jede Zeile.
5. **Funktionen und Variablen**:
    
    - Funktionsnamen: `snake_case` (z. B. `calculate_sum`).
    - Konstanten: Großbuchstaben mit Unterstrichen (z. B. `MAX_VALUE`).
6. **Imports**:
    
    - Schreibe **je einen Import pro Zeile**.
    - Gruppiere sie in dieser Reihenfolge:
        1. Standardbibliotheken (`import os`).
        2. Drittanbieter-Bibliotheken (`import requests`).
        3. Eigene Module (`import my_module`).
7. **Leerzeichen**:
    
    - Setze **keine Leerzeichen** vor Klammern:
        
        ```python
        def example(a, b):
            return a + b
        ```
        
    - Vermeide mehrere Leerzeichen, außer für Ausrichtung:
        
        ```python
        x = 42    # richtig
        ```
        
8. **Zeichenketten**:
    
    - Für Strings entweder einfache oder doppelte Anführungszeichen verwenden, aber konsistent bleiben.

## Beispiel für PEP-8-konformen Code:

```python
def add_numbers(a, b):
    """Add two numbers and return the result."""
    result = a + b
    return result
```

PEP 8 kannst du mit Tools wie `flake8` oder `pylint` überprüfen lassen!