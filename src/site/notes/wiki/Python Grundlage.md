---
{"dg-publish":true,"permalink":"/wiki/python-grundlage/","tags":["informatik/code"],"noteIcon":"","updated":"2026-07-19T03:56:26.604+02:00","dg-note-properties":{"aliases":["Python Grundlage","python Grundlage"],"created_date":"2024-11-02","links":null,"tags":["informatik/code"]}}
---

> Hier lernst du die Syntax der wichtigsten Befehle, um mit der [[wiki/Python\|Python]]-Sprache umzugehen.

Wie [[wiki/Java\|Java]] ist [[wiki/Python\|Python]] eine vielseitige Programmiersprache, die verschiedene Paradigmen unterstützt, einschließlich [[wiki/OOP\|Objektorientierte Programmierung]]. 
[[wiki/Python\|Python]]-Programme können in einem [[wiki/Interpreter\|Interpreter]] ausgeführt werden, ohne dass eine Kompilierung erforderlich ist.
```python
def my_function():
    # <do something>
    pass
```
>[!summary]
> [[wiki/Python\|Python]] erlaubt viele [[Paradigmen\|Paradigmen]] wie [[wiki/OOP\|OOP]], [[Funktional\|funktionale Programmierung]] und [[Imperative Programmierung\|imperative Programmierung]].

# [[wiki/Python Variable\|Python Variable]]
In [[wiki/Python\|Python]] ist es nicht notwendig, den [[wiki/Datentyp\|Datentyp]] bei der Variablendeklaration anzugeben, da die Sprache [[wiki/dynamic\|dynamisch]] typisiert ist.
```python
# Integer
number = 42

# Float
decimal_value = 3.14

# String
text = "Hello, World!"

# Boolean
is_true = True
```
>[!note]
> [[wiki/Python\|Python]] erkennt automatisch den Typ, basierend auf dem zugewiesenen Wert.

# [[Python List\|Python List]]
Eine Liste ist eine Sammlung, die geordnet und veränderbar ist. Elemente können verschiedene Datentypen enthalten.
```python
# Erstellen einer Liste
fruits = ["Apple", "Banana", "Cherry"]

# Zugriff auf Elemente
print(fruits[0])  # Ausgabe: Apple
```

>[!note]
>Listen sind sehr flexibel und erlauben sowohl den Zugriff als auch die Änderung ihrer Elemente.

# [[Python Bedingung\|Python Bedingung]]
Bedingungen wie [[Python if\|Python if]], [[Python elif\|Python elif]] und [[Python else\|Python else]] steuern den Programmfluss.
```python
number = -5

if number > 0:
    print("Die Zahl ist positiv.")
elif number < 0:
    print("Die Zahl ist negativ.")
else:
    print("Die Zahl ist null.")
```

# [[Python Loop\|Python Loop]]
Schleifen wiederholen eine Aktion, bis eine [[wiki/Bedingung\|Bedingung]] erfüllt ist.
```python
# for-Schleife
for i in range(5):
    print("Dies ist die Iteration:", i)

# while-Schleife
j = 0
while j < 5:
    print("Dies ist die Iteration:", j)
    j += 1
```
>[!note]
> Schleifen sind nützlich, um repetitive Aufgaben effizient auszuführen.

# [[Python Function\|Python Function]]
Eine [[wiki/Funktion\|Funktion]] ist ein Block von Code, der eine bestimmte Aufgabe erfüllt. Funktionen erleichtern die Strukturierung und Wiederverwendbarkeit des Codes.
```python
def addiere(a, b):
    return a + b

summe = addiere(5, 10)
print("Die Summe ist:", summe)
```
>[!note]
> Funktionen können Parameter akzeptieren und einen Wert zurückgeben. 
