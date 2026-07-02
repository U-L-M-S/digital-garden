---
{"dg-publish":true,"permalink":"/02-resources/notes/dot-net/","tags":["informatik/programmierung/sprachen/csharp/dotnet"],"noteIcon":"","updated":"2026-07-02T13:17:19.905+02:00","dg-note-properties":{"aliases":["dotnet",".net","microsoft .net"],"created":"2026-05-19 19:00","links":"https://dotnet.microsoft.com/","path":"Notes","tags":["informatik/programmierung/sprachen/csharp/dotnet"]}}
---

>[[02 - RESOURCES/Notes/dotNET\|dotNET]] ist Microsofts plattformübergreifende Entwicklungsplattform für Web-, Desktop-, Mobile-, Cloud- und Spiele-Apps.
>>Mentales Modell: das Microsoft-Pendant zu [[02 - RESOURCES/Notes/Java\|Java]] / [[02 - RESOURCES/Notes/Jakarta EE\|Jakarta EE]].

# I. Was ist [[02 - RESOURCES/Notes/dotNET\|dotNET]]?
___
[[02 - RESOURCES/Notes/dotNET\|dotNET]] ist eine **Runtime + Bibliotheken + Tools**, mit denen du in [[02 - RESOURCES/Notes/C Sharp\|C#]], F# oder VB Anwendungen baust, die auf Windows, Linux und macOS laufen.

```
┌──────────────────────────────────────────────┐
│  Deine App (C# / F# / VB)                    │
├──────────────────────────────────────────────┤
│  BCL — Base Class Library (System.*, ...)    │
├──────────────────────────────────────────────┤
│  CLR — Common Language Runtime               │
│  ├─ JIT-Compiler (IL → Maschinencode)        │
│  ├─ Garbage Collector                        │
│  └─ Type System                              │
├──────────────────────────────────────────────┤
│  OS (Windows / Linux / macOS)                │
└──────────────────────────────────────────────┘
```

>[!tip] [[02 - RESOURCES/Notes/Java\|Java]]-Vergleich
>CLR ≈ JVM, BCL ≈ JDK Standard Library, IL ≈ Bytecode.

# II. Editionen — der Versions-Dschungel
___
Microsoft hat mehrmals umbenannt. Aktuell gilt:

| Edition | Plattform | Status |
|---|---|---|
| **.NET Framework** (1.0 – 4.8) | nur Windows | Legacy, nur noch Bugfixes |
| **.NET Core** (1.0 – 3.1) | Cross-Platform | Legacy, ersetzt durch .NET 5+ |
| **.NET 5 / 6 / 7 / 8 / 9** | Cross-Platform | ✅ Aktuell |
| **Mono / Xamarin** | Mobile (alt) | abgelöst durch MAUI |

>[!warning] "[[02 - RESOURCES/Notes/dotNET\|.NET]]" ohne Zahl meint heute **.NET 5+** (also .NET 8 / 9). Nicht das alte ".NET Framework"!

# III. Hauptkomponenten
___

## [[CLR\|CLR]] — Common Language Runtime
- Führt deinen Code aus.
- JIT-kompiliert [[IL\|IL]] → Maschinencode.
- [[Garbage Collector\|Garbage Collector]] managt Speicher (wie [[02 - RESOURCES/Notes/JVM\|JVM]]).

## [[BCL\|BCL]] — Base Class Library
- `System.*`, `System.Collections`, `System.IO`, ...
- Wie `java.lang.*` und `java.util.*` zusammen.

## [[NuGet\|NuGet]]
- Package Manager (wie [[Maven\|Maven]] / [[02 - RESOURCES/Notes/Gradle\|Gradle]] in Java, npm in Node).
- `dotnet add package <name>`.

## [[MSBuild\|MSBuild]]
- Build-System (wie [[02 - RESOURCES/Notes/Gradle\|Gradle]]).
- `.csproj` = Projekt-Datei (wie `build.gradle`).

# IV. Sprachen auf [[02 - RESOURCES/Notes/dotNET\|dotNET]]
___
| Sprache | Stil | Use Case |
|---|---|---|
| [[02 - RESOURCES/Notes/C Sharp\|C#]] | OOP + funktional | Default, 99% aller Projekte |
| F# | funktional | Data Science, Finance |
| VB.NET | OOP | Legacy-Code |

Alle drei kompilieren zu derselben [[IL\|IL]] → laufen auf der gleichen [[CLR\|CLR]].

# V. App-Typen
___
Was du mit [[02 - RESOURCES/Notes/dotNET\|dotNET]] bauen kannst:

```
                  ┌─────────────────┐
                  │     .NET 8      │
                  └────────┬────────┘
        ┌──────────┬───────┼────────┬──────────┐
        │          │       │        │          │
    ┌───▼───┐  ┌───▼───┐ ┌─▼──┐ ┌───▼───┐  ┌───▼───┐
    │ASP.NET│  │  WPF  │ │MAUI│ │Console│  │ Blazor│
    │  Core │  │WinForm│ │    │ │       │  │       │
    └───────┘  └───────┘ └────┘ └───────┘  └───────┘
       Web      Desktop  Mobile   CLI        Web-UI
```

- **[[02 - RESOURCES/Notes/ASP.NET\|ASP.NET]] Core** — Web (siehe [[02 - RESOURCES/Notes/ASP.NET Core Web App\|ASP.NET Core Web App]], [[02 - RESOURCES/Notes/ASP.NET Core Web App (MVC)\|ASP.NET Core Web App (MVC)]], [[02 - RESOURCES/Notes/ASP.NET Core Web App (Razor Pages)\|ASP.NET Core Web App (Razor Pages)]])
- **WPF / WinForms** — Windows Desktop
- **MAUI** — Mobile + Desktop (Cross-Platform)
- **Blazor** — Web-UI in C# statt JavaScript
- **Console App** — CLI-Tools

# VI. Mapping zu [[02 - RESOURCES/Notes/Jakarta EE\|Jakarta EE]]
___
Meine mentale Brücke beim Jakarta-EE-Lernen bei [[02 - RESOURCES/Notes/Muckenhirn\|Muckenhirn]]:

| [[02 - RESOURCES/Notes/dotNET\|dotNET]] | [[02 - RESOURCES/Notes/Jakarta EE\|Jakarta EE]] |
|---|---|
| `AddScoped` | [[02 - RESOURCES/Notes/@Stateless\|@Stateless]] |
| `AddSingleton` | [[02 - RESOURCES/Notes/Singleton\|@Singleton]] |
| Session State | [[02 - RESOURCES/Notes/@Stateful\|@Stateful]] |
| `[Inject]` / Constructor DI | [[02 - RESOURCES/Notes/@EJB\|@EJB]] / [[02 - RESOURCES/Notes/@Inject\|@Inject]] |
| `IServiceProvider` | [[02 - RESOURCES/Notes/JNDI\|JNDI]] |
| `DbContext` ([[02 - RESOURCES/Notes/Entity Framework Core\|EF Core]]) | [[02 - RESOURCES/Notes/EntityManager\|EntityManager]] ([[02 - RESOURCES/Notes/JPA\|JPA]]) |
| `[Table]`, `[Key]` | [[02 - RESOURCES/Notes/@Entity\|@Entity]], `@Id` |
| `TransactionScope` | [[02 - RESOURCES/Notes/CMT\|CMT]] |
| `appsettings.json` | `standalone.xml` |
| `dotnet publish` + IIS Restart | `.war` drop = [[02 - RESOURCES/Notes/Hot-Deploy\|Hot-Deploy]] |
| `FrameworkReference` | [[02 - RESOURCES/Notes/providedCompile\|providedCompile]] |
| Castle DynamicProxy | [[02 - RESOURCES/Notes/Container-Proxy\|Container-Proxy]] |

# VII. Castle DynamicProxy
___
[[02 - RESOURCES/Notes/dotNET\|dotNET]]s Equivalent zum [[02 - RESOURCES/Notes/Container-Proxy\|Container-Proxy]] — generiert Proxy-Klassen zur Laufzeit. Beispiel: [[02 - RESOURCES/Notes/Entity Framework Core\|EF Core]] Lazy-Loading-Proxies.

# VIII. Bsp — Hello World
___
```csharp
using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Hello, .NET!");
    }
}
```

Build + Run:
```bash
dotnet new console -n HelloApp
cd HelloApp
dotnet run
```

# IX. Verwandte Notizen
___
- [[02 - RESOURCES/Notes/C Sharp\|C Sharp]] — die Hauptsprache
- [[02 - RESOURCES/Notes/ASP.NET\|ASP.NET]] — Web-Framework
- [[02 - RESOURCES/Notes/ASP.NET Core Web App\|ASP.NET Core Web App]] — Web-App-Setup
- [[02 - RESOURCES/Notes/Entity Framework Core\|Entity Framework Core]] — ORM
- [[02 - RESOURCES/Notes/Unit Test .Net\|Unit Test .Net]] — Testing
- [[02 - RESOURCES/Notes/Enterprise Java Bean\|Enterprise Java Bean]] — das Java-Pendant
