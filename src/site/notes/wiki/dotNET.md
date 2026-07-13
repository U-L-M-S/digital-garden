---
{"dg-publish":true,"permalink":"/wiki/dot-net/","tags":["informatik/programmierung/sprachen/csharp/dotnet"],"noteIcon":"","updated":"2026-07-02T13:17:19.905+02:00","dg-note-properties":{"aliases":["dotnet",".net","microsoft .net"],"created":"2026-05-19 19:00","links":"https://dotnet.microsoft.com/","path":"Notes","tags":["informatik/programmierung/sprachen/csharp/dotnet"]}}
---

>[[wiki/dotNET\|dotNET]] ist Microsofts plattformübergreifende Entwicklungsplattform für Web-, Desktop-, Mobile-, Cloud- und Spiele-Apps.
>>Mentales Modell: das Microsoft-Pendant zu [[wiki/Java\|Java]] / [[wiki/Jakarta EE\|Jakarta EE]].

# I. Was ist [[wiki/dotNET\|dotNET]]?
___
[[wiki/dotNET\|dotNET]] ist eine **Runtime + Bibliotheken + Tools**, mit denen du in [[wiki/C Sharp\|C#]], F# oder VB Anwendungen baust, die auf Windows, Linux und macOS laufen.

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

>[!tip] [[wiki/Java\|Java]]-Vergleich
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

>[!warning] "[[wiki/dotNET\|.NET]]" ohne Zahl meint heute **.NET 5+** (also .NET 8 / 9). Nicht das alte ".NET Framework"!

# III. Hauptkomponenten
___

## [[CLR\|CLR]] — Common Language Runtime
- Führt deinen Code aus.
- JIT-kompiliert [[IL\|IL]] → Maschinencode.
- [[Garbage Collector\|Garbage Collector]] managt Speicher (wie [[wiki/JVM\|JVM]]).

## [[BCL\|BCL]] — Base Class Library
- `System.*`, `System.Collections`, `System.IO`, ...
- Wie `java.lang.*` und `java.util.*` zusammen.

## [[NuGet\|NuGet]]
- Package Manager (wie [[Maven\|Maven]] / [[wiki/Gradle\|Gradle]] in Java, npm in Node).
- `dotnet add package <name>`.

## [[MSBuild\|MSBuild]]
- Build-System (wie [[wiki/Gradle\|Gradle]]).
- `.csproj` = Projekt-Datei (wie `build.gradle`).

# IV. Sprachen auf [[wiki/dotNET\|dotNET]]
___
| Sprache | Stil | Use Case |
|---|---|---|
| [[wiki/C Sharp\|C#]] | OOP + funktional | Default, 99% aller Projekte |
| F# | funktional | Data Science, Finance |
| VB.NET | OOP | Legacy-Code |

Alle drei kompilieren zu derselben [[IL\|IL]] → laufen auf der gleichen [[CLR\|CLR]].

# V. App-Typen
___
Was du mit [[wiki/dotNET\|dotNET]] bauen kannst:

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

- **[[wiki/ASP.NET\|ASP.NET]] Core** — Web (siehe [[wiki/ASP.NET Core Web App\|ASP.NET Core Web App]], [[wiki/ASP.NET Core Web App (MVC)\|ASP.NET Core Web App (MVC)]], [[wiki/ASP.NET Core Web App (Razor Pages)\|ASP.NET Core Web App (Razor Pages)]])
- **WPF / WinForms** — Windows Desktop
- **MAUI** — Mobile + Desktop (Cross-Platform)
- **Blazor** — Web-UI in C# statt JavaScript
- **Console App** — CLI-Tools

# VI. Mapping zu [[wiki/Jakarta EE\|Jakarta EE]]
___
Meine mentale Brücke beim Jakarta-EE-Lernen bei [[inbox/Muckenhirn\|Muckenhirn]]:

| [[wiki/dotNET\|dotNET]] | [[wiki/Jakarta EE\|Jakarta EE]] |
|---|---|
| `AddScoped` | [[wiki/@Stateless\|@Stateless]] |
| `AddSingleton` | [[wiki/Singleton\|@Singleton]] |
| Session State | [[wiki/@Stateful\|@Stateful]] |
| `[Inject]` / Constructor DI | [[wiki/@EJB\|@EJB]] / [[wiki/@Inject\|@Inject]] |
| `IServiceProvider` | [[wiki/JNDI\|JNDI]] |
| `DbContext` ([[wiki/Entity Framework Core\|EF Core]]) | [[wiki/EntityManager\|EntityManager]] ([[wiki/JPA\|JPA]]) |
| `[Table]`, `[Key]` | [[wiki/@Entity\|@Entity]], `@Id` |
| `TransactionScope` | [[wiki/CMT\|CMT]] |
| `appsettings.json` | `standalone.xml` |
| `dotnet publish` + IIS Restart | `.war` drop = [[wiki/Hot-Deploy\|Hot-Deploy]] |
| `FrameworkReference` | [[wiki/providedCompile\|providedCompile]] |
| Castle DynamicProxy | [[wiki/Container-Proxy\|Container-Proxy]] |

# VII. Castle DynamicProxy
___
[[wiki/dotNET\|dotNET]]s Equivalent zum [[wiki/Container-Proxy\|Container-Proxy]] — generiert Proxy-Klassen zur Laufzeit. Beispiel: [[wiki/Entity Framework Core\|EF Core]] Lazy-Loading-Proxies.

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
- [[wiki/C Sharp\|C Sharp]] — die Hauptsprache
- [[wiki/ASP.NET\|ASP.NET]] — Web-Framework
- [[wiki/ASP.NET Core Web App\|ASP.NET Core Web App]] — Web-App-Setup
- [[wiki/Entity Framework Core\|Entity Framework Core]] — ORM
- [[wiki/Unit Test .Net\|Unit Test .Net]] — Testing
- [[wiki/Enterprise Java Bean\|Enterprise Java Bean]] — das Java-Pendant
