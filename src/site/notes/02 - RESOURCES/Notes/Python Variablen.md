---
{"dg-publish":true,"permalink":"/02 - RESOURCES/Notes/Python Variablen/","tags":["code/python"],"noteIcon":"","updated":"2024-08-19T19:54:08.319+02:00"}
---

>In viele Computersprachen müssen die Variablen mit den [[02 - RESOURCES/Notes/Datentyp\|Datentyp]] definiert werden.
>In Python wird das nicht gemacht. Er erkennt automatisch die [[02 - RESOURCES/Notes/Datentyp\|Datentyp]] bei Erstellung von eine Variable. 

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
>Python erkennt eine Variable [[02 - RESOURCES/Notes/Datentyp\|Datentyp]] nur solange das Wert in den Code definiert wurde.
>Sobald den Nutzer ein Wert über Terminal eingibt wird diese als String gesehen.

```python
user_input = input("Gib bitte ein Wert ein: ")

print(user_input)
print(type(user_input)) # <class 'str'>
```
