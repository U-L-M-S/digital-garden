---
{"dg-publish":true,"permalink":"/02-resources/notes/gradle/","tags":["informatik/code/java/build-tool"],"noteIcon":"","updated":"2026-05-19T13:40:01.491+02:00","dg-note-properties":{"aliases":["gradle","gradle build"],"created":"2026-05-19 19:00","links":"https://gradle.org/","path":"Notes","tags":["informatik/code/java/build-tool"]}}
---

>[[02 - RESOURCES/Notes/Gradle\|Gradle]] ist ein Build-Tool für [[02 - RESOURCES/Notes/Java\|Java]] (Alternative zu Maven).
>>Konfiguration in `build.gradle` (Groovy oder Kotlin DSL).

# I. Build-Datei
___
```groovy
plugins { id 'war' }

java {
    sourceCompatibility = JavaVersion.VERSION_17
    targetCompatibility = JavaVersion.VERSION_17
}

repositories { mavenCentral() }

dependencies {
    providedCompile 'jakarta.platform:jakarta.jakartaee-api:10.0.0'
}
```

# II. Wichtige Konzepte
___
| Konzept | Wofür |
|---|---|
| `plugins` | Funktionalität laden (`war`, `java`, ...) |
| `dependencies` | Bibliotheken einbinden |
| [[02 - RESOURCES/Notes/providedCompile\|providedCompile]] | Compile-only (im Container vorhanden) |
| `mavenCentral()` | Maven-Repository |

# III. Mein Workflow
___
1. In [[02 - RESOURCES/Notes/Eclipse\|Eclipse]] über [[02 - RESOURCES/Notes/Buildship\|Buildship]]-Plugin → Gradle Tasks → `build`
2. Erzeugt `build/libs/<app>.war`
3. `.war` in `standalone/deployments/` kopieren = [[02 - RESOURCES/Notes/Hot-Deploy\|Hot-Deploy]]

>[!tip] .NET-Vergleich
>Wie `dotnet build` + `.csproj`.
