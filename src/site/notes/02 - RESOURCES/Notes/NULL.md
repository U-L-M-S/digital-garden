---
{"dg-publish":true,"permalink":"/02-resources/notes/null/","tags":["informatik/code"],"noteIcon":"","updated":"2025-10-29T12:59:08.741+01:00"}
---

>Wir wissen, dass jede [[02 - RESOURCES/Notes/Variable\|Variable]] einen [[02 - RESOURCES/Notes/Datentyp\|Datentyp]] hat und einen Wert.  
>Nun... was machen wir, wenn wir eine [[02 - RESOURCES/Notes/Variable\|Variable]] haben, aber ihren Wert noch nicht kennen? 
>Um zukünftige Probleme im Code zu vermeiden, setzt man [[02 - RESOURCES/Notes/NULL\|NULL]] in die [[02 - RESOURCES/Notes/Variable\|Variable]].
>>Somit existiert die [[02 - RESOURCES/Notes/Variable\|Variable]], aber ihr Wert ist noch nicht bekannt.

```python
x = None  # None ist gleichbedeutend mit NULL in Python

if x is None:
    print("x hat keinen Wert")
else:
    print("x hat einen Wert")
```

>[!important] 
>NULL != 0
