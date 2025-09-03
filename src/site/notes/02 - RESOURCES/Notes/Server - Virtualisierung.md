---
{"dg-publish":true,"permalink":"/02-resources/notes/server-virtualisierung/","tags":["informatik/virtualisierung"],"noteIcon":"","updated":"2025-08-26T16:35:07.449+02:00"}
---

>Jetzt dass du [[02 - RESOURCES/Notes/Server - Grundlagen\|Server - Grundlagen]] gelernt hast. lass uns auf [[02 - RESOURCES/Notes/Virtualisierung\|Virtualisierung]] fokusieren.

# Was ist [[02 - RESOURCES/Notes/Virtualisierung\|Virtualisierung]] ?

> > **Virtualisierung:** <mark style="background: #BBFABBA6;">Nachbildung eines Hardware- oder Softwareobjekts durch ein ähnliches Objekt vom selben Typ.</mark>

Stell dir mal vor: Du hast ein kleines [[02 - RESOURCES/Notes/Unternehmen\|Unternehmen]] und nur einen einzigen [[02 - RESOURCES/Notes/Tower-Server\|Tower-Server]].  
Jetzt brauchst du aber drei [[02 - RESOURCES/Notes/Server\|Server]]: einen für die Datenbank, einen für den Kundendienst und einen für die Tests der Devs.  
Was machst du? Kaufst du dir zwei weitere [[02 - RESOURCES/Notes/Tower-Server\|Tower-Server]]? Das kostet natürlich Geld – und davon hast du nicht viel zur Verfügung.

💡 Du kannst einfach den Server, den du bereits hast, in drei virtuelle [[02 - RESOURCES/Notes/Server\|Server]] aufteilen – und alles virtualisieren. 😊

## [[02 - RESOURCES/Notes/Virtualisierung\|Virtualisierung]] / [[02 - RESOURCES/Notes/Emulation\|Emulation]] / [[02 - RESOURCES/Notes/Simulation\|Simulation]]

> 🔄 **Unterschied zu [[02 - RESOURCES/Notes/Virtualisierung\|Virtualisierung]] ,  [[02 - RESOURCES/Notes/Emulation\|Emulation]] und [[02 - RESOURCES/Notes/Simulation\|Simulation]]**

| [[02 - RESOURCES/Notes/Virtualisierung\|Virtualisierung]]             | [[02 - RESOURCES/Notes/Emulation\|Emulation]]                | [[02 - RESOURCES/Notes/Simulation\|Simulation]]                      |
| ------------------------------- | ---------------------------- | ----------------------------------- |
| Echte Ausführung auf echter CPU | Nachbildung fremder Hardware | Nachbildung des **Verhaltens**      |
| Sehr schnell (nativ)            | Langsam (wegen Übersetzung)  | Geschwindigkeit variabel            |
| Beispiel: VMware, KVM           | Beispiel: QEMU, Yuzu         | Beispiel: GNS3, Flugsimulator, NS-3 |

# Gründe für [[02 - RESOURCES/Notes/Virtualisierung\|Virtualisierung]]