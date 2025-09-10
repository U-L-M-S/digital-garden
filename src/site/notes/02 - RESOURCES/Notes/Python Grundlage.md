---
{"dg-publish":true,"permalink":"/02-resources/notes/python-grundlage/","tags":["informatik/code/python"],"noteIcon":"","updated":"2025-09-10T16:33:10.154+02:00"}
---

> Hier lernst du die Syntax der wichtigsten Befehle, um mit der [[02 - RESOURCES/Notes/Python\|Python]]-Sprache umzugehen.

Wie [[02 - RESOURCES/Notes/Java\|Java]] ist [[02 - RESOURCES/Notes/Python\|Python]] eine vielseitige Programmiersprache, die verschiedene Paradigmen unterstützt, einschließlich [[02 - RESOURCES/Notes/OOP\|Objektorientierte Programmierung]]. 
[[02 - RESOURCES/Notes/Python\|Python]]-Programme können in einem [[02 - RESOURCES/Notes/Interpreter\|Interpreter]] ausgeführt werden, ohne dass eine Kompilierung erforderlich ist.
```python
def my_function():
    # <do something>
    pass
```
>[!summary]
> [[02 - RESOURCES/Notes/Python\|Python]] erlaubt viele [[Paradigmen\|Paradigmen]] wie [[02 - RESOURCES/Notes/OOP\|OOP]], [[Funktional\|funktionale Programmierung]] und [[Imperative Programmierung\|imperative Programmierung]].

# [[02 - RESOURCES/Notes/Python Variable\|Python Variable]]
In [[02 - RESOURCES/Notes/Python\|Python]] ist es nicht notwendig, den [[02 - RESOURCES/Notes/Datentyp\|Datentyp]] bei der Variablendeklaration anzugeben, da die Sprache [[02 - RESOURCES/Notes/dynamic\|dynamisch]] typisiert ist.
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
> [[02 - RESOURCES/Notes/Python\|Python]] erkennt automatisch den Typ, basierend auf dem zugewiesenen Wert.

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
Schleifen wiederholen eine Aktion, bis eine [[02 - RESOURCES/Notes/Bedingung\|Bedingung]] erfüllt ist.
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
Eine [[02 - RESOURCES/Notes/Funktion\|Funktion]] ist ein Block von Code, der eine bestimmte Aufgabe erfüllt. Funktionen erleichtern die Strukturierung und Wiederverwendbarkeit des Codes.
```python
def addiere(a, b):
    return a + b

summe = addiere(5, 10)
print("Die Summe ist:", summe)
```
>[!note]
> Funktionen können Parameter akzeptieren und einen Wert zurückgeben. 
