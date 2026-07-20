---
{"dg-publish":true,"permalink":"/wiki/null/","tags":["informatik/code"],"noteIcon":"","updated":"2026-07-19T03:56:26.000+02:00","dg-note-properties":{"aliases":["None","Undefined","NIL"],"created_date":"2024-10-11","links":null,"tags":["informatik/code"]}}
---

>Wir wissen, dass jede [[wiki/Variable\|Variable]] einen [[wiki/Datentyp\|Datentyp]] hat und einen Wert.  
>Nun... was machen wir, wenn wir eine [[wiki/Variable\|Variable]] haben, aber ihren Wert noch nicht kennen? 
>Um zukünftige Probleme im Code zu vermeiden, setzt man [[wiki/NULL\|NULL]] in die [[wiki/Variable\|Variable]].
>>Somit existiert die [[wiki/Variable\|Variable]], aber ihr Wert ist noch nicht bekannt.

```python
x = None  # None ist gleichbedeutend mit NULL in Python

if x is None:
    print("x hat keinen Wert")
else:
    print("x hat einen Wert")
```

>[!important] 
>NULL != 0
