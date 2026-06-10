---
{"dg-publish":true,"permalink":"/02-resources/notes/hbm2ddl-auto/","tags":["informatik/code/java/framework","informatik/datenbank"],"noteIcon":"","updated":"2026-05-19T18:39:02.858+07:00","dg-note-properties":{"aliases":["hbm2ddl","hibernate hbm2ddl"],"created":"2026-05-19 19:00","links":null,"path":"Notes","tags":["informatik/code/java/framework","informatik/datenbank"]}}
---

>[[02 - RESOURCES/Notes/hbm2ddl.auto\|hbm2ddl.auto]] steuert das Schema-Verhalten von [[02 - RESOURCES/Notes/Hibernate\|Hibernate]] beim Deploy.
>>Wert wird in der [[02 - RESOURCES/Notes/persistence.xml\|persistence.xml]] gesetzt.

# I. Die 5 Modi
___
| Modus | Wirkung | Wann benutzen? |
|---|---|---|
| `none` | macht nichts | Production (Schema extern) |
| `validate` ✅ | prüft [[02 - RESOURCES/Notes/@Entity\|@Entity]] ↔ Tabelle | **Default für mich** |
| `update` | ergänzt fehlende Spalten | Dev (vorsichtig) |
| `create` | dropt + erstellt | Tests |
| `create-drop` | wie create, dropt bei Shutdown | Unit-Tests |

# II. Warum `validate`?
___
- Deploy schlägt **sofort** fehl bei Schema-Mismatch
- Du findest Bugs **vor** dem User
- Keine versehentlichen Schema-Änderungen

# III. Gefahr
___
>[!warning] DATENVERLUST!
>`create` / `create-drop` **löschen alles** beim Deploy. Niemals an einer DB mit echten Daten einstellen!
