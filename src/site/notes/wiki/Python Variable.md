---
{"dg-publish":true,"permalink":"/wiki/python-variable/","tags":["informatik/code"],"noteIcon":"","updated":"2026-07-19T03:56:26.000+02:00","dg-note-properties":{"aliases":["Python Variable"],"created_date":"2024-11-02","links":null,"tags":["informatik/code"]}}
---

>In vielen Computersprachen müssen die Variablen mit dem [[wiki/Datentyp\|Datentyp]] definiert werden.
>In Python wird das nicht gemacht. Es erkennt automatisch den [[wiki/Datentyp\|Datentyp]] bei Erstellung einer Variable. 

```python
variable_integer = 3
variable_integer = 33333333
variable_string = 'Levi'
variable_double = 3.14
variable_integer = 465432431357413543
variable_list = ['orange', 'apple', 'pear', 'banana', 'kiwi', 'apple', 'banana']
variable_dictionary = {  
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964  
}
variable_tuple = ("John", 35, "Python Developer")


print(variable_integer)
print(variable_string)
print(variable_double)
print(variable_integer)
print(variable_list)
print(variable_dictionary)
print(variable_dictionary["model"])
print(variable_tuple)

print('--------')

print(type(variable_integer))
print(type(variable_string))
print(type(variable_double))
print(type(variable_integer))
print(type(variable_list))
print(type(variable_dictionary))
print(type(variable_tuple))
```

>[!important] 
>Python erkennt einen Variablen-[[wiki/Datentyp\|Datentyp]] nur solange der Wert im Code definiert wurde.
>Sobald der Nutzer einen Wert über das Terminal eingibt, wird dieser als String gesehen.

```python
user_input = input("Gib bitte ein Wert ein: ")

print(user_input)
print(type(user_input)) # <class 'str'>
```
