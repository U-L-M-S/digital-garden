---
{"dg-publish":true,"permalink":"/wiki/power-shell/","tags":["informatik/system"],"noteIcon":"","updated":"2026-07-19T03:56:26.000+02:00","dg-note-properties":{"tags":["informatik/system"],"aliases":["PowerShell-Skript","PS1","Windows PowerShell"],"links":null,"created_date":"2025-09-16"}}
---


>[[wiki/PowerShell\|PowerShell]] ist eine objektorientierte Shell und Scripting-Sprache von Microsoft.

>>Sie ermöglicht Systemverwaltung und Automatisierung durch Cmdlets und .NET-Integration.

>[!important] 
>**PowerShell-Features:**
>- Objektorientiert (nicht nur Text)
>- Cmdlet-Syntax (Verb-Noun)
>- .NET Framework Integration
>- Remote-Management (WinRM)

>[!example] 
>```powershell
># Services auflisten
>Get-Service | Where-Object {$_.Status -eq "Running"}
>
># Dateien kopieren
>Copy-Item -Path "C:\source" -Destination "C:\target" -Recurse
>```

>[!success] 
>Standard-Tool für Windows-Administration und Office 365.