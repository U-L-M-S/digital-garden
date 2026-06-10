---
{"dg-publish":true,"permalink":"/02-resources/notes/j-boss-cli/","tags":["informatik/code/java/tools","muckenhirn"],"noteIcon":"","updated":"2026-05-19T18:40:10.361+07:00","dg-note-properties":{"aliases":["jboss cli","jboss-cli.bat","wildfly cli"],"created":"2026-05-19 19:00","links":null,"path":"Notes","tags":["informatik/code/java/tools","muckenhirn"]}}
---

>[[02 - RESOURCES/Notes/JBoss-CLI\|JBoss-CLI]] ist das Kommandozeilen-Tool zum Konfigurieren von [[02 - RESOURCES/Notes/WildFly\|WildFly]].
>>Aufruf über `bin/jboss-cli.bat` (Windows) bzw. `.sh` (Linux).

# I. Verbinden
___
```bash
.\bin\jboss-cli.bat --connect
```

# II. Wichtige Commands
___
```bash
# Read-only (sicher)
/subsystem=datasources:read-resource(recursive=true)
ls /subsystem=datasources/data-source=LeviLearningDS

# Datasource anlegen
data-source add --name=... --jndi-name=... --connection-url=...

# Testen
/subsystem=datasources/data-source=LeviLearningDS:test-connection-in-pool

# Entfernen
data-source remove --name=LeviLearningDS
```

# III. Warum CLI statt XML?
___
- CLI **validiert** Eingaben
- Schreibt `standalone.xml` formatiert
- Hot-Restart-fest
- XML-Tippfehler werden vermieden

>[!warning]
>Vorher **immer** Backup machen: `standalone.xml.backup-YYYYMMDD-HHMMSS`.
