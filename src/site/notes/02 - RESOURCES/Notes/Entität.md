---
{"dg-publish":true,"permalink":"/02-resources/notes/entitaet/","tags":["datenbank","psychologie"],"noteIcon":"","updated":"2025-07-12T13:31:41.294+02:00"}
---

> Es ist nicht anders als ein **Ding** oder **Objekt**.
> Hauptsache alles was man ein Attribut geben kann.

|        | Person |     |
| ------ | ------ | --- |
| string | ID     | PK  |
| string | name   | FK  |
| int    | alter  | FK  |

|        | Auto          |     |
| ------ | ------------- | --- |
| string | kennzeichnung | PK  |
| string | model         | FK  |
| int    | baujahr       | FK  |
