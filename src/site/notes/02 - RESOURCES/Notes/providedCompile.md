---
{"dg-publish":true,"permalink":"/02-resources/notes/provided-compile/","tags":["informatik/code/java/build-tool"],"noteIcon":"","updated":"2026-05-19T13:40:18.215+02:00","dg-note-properties":{"aliases":["provided compile","gradle providedCompile"],"created":"2026-05-19 19:00","links":null,"path":"Notes","tags":["informatik/code/java/build-tool"]}}
---

>[[02 - RESOURCES/Notes/providedCompile\|providedCompile]] ist eine [[02 - RESOURCES/Notes/Gradle\|Gradle]]-Dependency-Konfiguration für Libraries, die **nicht** ins [[02 - RESOURCES/Notes/WAR\|WAR]] gepackt werden.
>>Der [[02 - RESOURCES/Notes/WildFly\|WildFly]]-Container liefert sie zur Laufzeit.

# I. Beispiel
___
```groovy
dependencies {
    providedCompile 'jakarta.platform:jakarta.jakartaee-api:10.0.0'
}
```

# II. Warum?
___
Wenn die [[02 - RESOURCES/Notes/Jakarta EE\|Jakarta EE]]-API **doppelt** im Classpath wäre (im WAR **und** im Container), gibt es `ClassCastException`-Probleme. Daher: **NUR** zum Kompilieren benutzen.

# III. Pendants
___
| [[02 - RESOURCES/Notes/Gradle\|Gradle]] | Bedeutung |
|---|---|
| `implementation` | Compile + Runtime + im WAR |
| [[02 - RESOURCES/Notes/providedCompile\|providedCompile]] | Compile only, NICHT im WAR |
| `testImplementation` | Nur Tests |

>[!tip] .NET-Vergleich
>Wie `FrameworkReference` in einer `.csproj`.
