---
{"dg-publish":true,"permalink":"/wiki/gradle/","tags":["informatik/software"],"noteIcon":"","updated":"2026-07-19T03:56:26.681+02:00","dg-note-properties":{"aliases":["gradle","gradle build"],"created":"2026-05-19 19:00","links":"https://gradle.org/","path":"Notes","tags":["informatik/software"]}}
---

>[[wiki/Gradle\|Gradle]] ist ein Build-Tool für [[wiki/Java\|Java]] (Alternative zu Maven).
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
| [[wiki/providedCompile\|providedCompile]] | Compile-only (im Container vorhanden) |
| `mavenCentral()` | Maven-Repository |

# III. Mein Workflow
___
1. In [[wiki/Eclipse\|Eclipse]] über [[wiki/Buildship\|Buildship]]-Plugin → Gradle Tasks → `build`
2. Erzeugt `build/libs/<app>.war`
3. `.war` in `standalone/deployments/` kopieren = [[wiki/Hot-Deploy\|Hot-Deploy]]

>[!tip] .NET-Vergleich
>Wie `dotnet build` + `.csproj`.
