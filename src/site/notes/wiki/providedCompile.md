---
{"dg-publish":true,"permalink":"/wiki/provided-compile/","tags":["informatik/programmierung/sprachen/java/build-tool"],"noteIcon":"","updated":"2026-07-02T13:17:19.914+02:00","dg-note-properties":{"aliases":["provided compile","gradle providedCompile"],"created":"2026-05-19 19:00","links":null,"path":"Notes","tags":["informatik/programmierung/sprachen/java/build-tool"]}}
---

>[[wiki/providedCompile\|providedCompile]] ist eine [[wiki/Gradle\|Gradle]]-Dependency-Konfiguration für Libraries, die **nicht** ins [[wiki/WAR\|WAR]] gepackt werden.
>>Der [[wiki/WildFly\|WildFly]]-Container liefert sie zur Laufzeit.

# I. Beispiel
___
```groovy
dependencies {
    providedCompile 'jakarta.platform:jakarta.jakartaee-api:10.0.0'
}
```

# II. Warum?
___
Wenn die [[wiki/Jakarta EE\|Jakarta EE]]-API **doppelt** im Classpath wäre (im WAR **und** im Container), gibt es `ClassCastException`-Probleme. Daher: **NUR** zum Kompilieren benutzen.

# III. Pendants
___
| [[wiki/Gradle\|Gradle]] | Bedeutung |
|---|---|
| `implementation` | Compile + Runtime + im WAR |
| [[wiki/providedCompile\|providedCompile]] | Compile only, NICHT im WAR |
| `testImplementation` | Nur Tests |

>[!tip] .NET-Vergleich
>Wie `FrameworkReference` in einer `.csproj`.
