---
{"dg-publish":true,"permalink":"/02-resources/notes/referentielle-integritaet/","tags":["informatik/datenbank"],"noteIcon":"","updated":"2025-10-28T16:29:34.000+01:00"}
---

>Regel: Jeder [[02 - RESOURCES/Notes/Foreign Key\|Foreign Key]] verweist auf einen existierenden [[02 - RESOURCES/Notes/Primary Key\|Primary Key]].
>>Verhindert „verwaiste“ Datensätze und schützt Konsistenz im [[02 - RESOURCES/Notes/Datenmodell\|Datenmodell]].

>[!summary]
>- Aktionen: RESTRICT/NO ACTION, CASCADE, SET NULL/DEFAULT
>- Prüfen per DB‑Constraint; Änderungen erfolgen transaktionssicher

