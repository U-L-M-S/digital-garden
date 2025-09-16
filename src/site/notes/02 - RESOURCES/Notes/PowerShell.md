---
{"dg-publish":true,"permalink":"/02-resources/notes/power-shell/","tags":["scripting/windows","automation/microsoft"],"noteIcon":"","updated":"2025-09-16T16:45:03.370+02:00"}
---


>[[02 - RESOURCES/Notes/PowerShell\|PowerShell]] ist eine objektorientierte Shell und Scripting-Sprache von Microsoft.

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