---
{"dg-publish":true,"permalink":"/02-resources/notes/buildship/","tags":["informatik/code/java/tools"],"noteIcon":"","updated":"2026-05-19T18:40:02.022+07:00","dg-note-properties":{"aliases":["buildship","eclipse gradle plugin"],"created":"2026-05-19 19:00","links":"https://projects.eclipse.org/projects/tools.buildship","path":"Notes","tags":["informatik/code/java/tools"]}}
---

>[[02 - RESOURCES/Notes/Buildship\|Buildship]] ist das offizielle [[02 - RESOURCES/Notes/Gradle\|Gradle]]-Plugin für [[02 - RESOURCES/Notes/Eclipse\|Eclipse]].
>>Macht [[02 - RESOURCES/Notes/Gradle\|Gradle]]-Projekte in Eclipse nutzbar.

# I. Was kann es?
___
- Gradle-Projekte importieren
- "Gradle Tasks"-View → Tasks per Doppelklick starten
- Dependencies im Eclipse Classpath
- Hot Reload bei `build.gradle`-Änderungen

# II. Mein Use Case
___
1. Projekt in Eclipse öffnen → Buildship erkennt `build.gradle`
2. Rechte Maus → "Refresh Gradle Project" wenn Dependencies neu
3. Gradle Tasks → `build` doppelklicken → erzeugt `.war`

>[!tip]
>Alternative ohne Eclipse: direkt `gradlew.bat build` in PowerShell.
