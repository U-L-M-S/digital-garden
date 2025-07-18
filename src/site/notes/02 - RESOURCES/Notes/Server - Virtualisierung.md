---
{"dg-publish":true,"permalink":"/02-resources/notes/server-virtualisierung/","tags":["informatik/virtualisierung"],"noteIcon":"","updated":"2025-07-18T15:58:26.195+02:00"}
---

>Jetzt dass du [[02 - RESOURCES/Notes/Server - Grundlagen\|Server - Grundlagen]] gelernt hast. lass uns auf [[02 - RESOURCES/Notes/Virtualisierung\|Virtualisierung]] fokusieren.

# Was ist [[02 - RESOURCES/Notes/Virtualisierung\|Virtualisierung]] ?

>>Virtualisierung: <mark style="background: #BBFABBA6;">Nachbildung eines Hardware- oder Softwareobjekts durch ein ähnliches Objekt vom selben Typ.</mark>

Stell dir mal vor: Du hast eine kleine [[02 - RESOURCES/Notes/Unternehmen\|Unternehmen]] und und hast nur eine kleine [[02 - RESOURCES/Notes/Tower - Server\|Tower - Server]].
Nun brauchst du jetzt 3 Servers: 1 mal für den Datenbank, 1 mal für eine Kundendiensten und 1 mal für den Devs-Tests. Was machst du ? kaufst du dir 2 anderen [[02 - RESOURCES/Notes/Tower - Server\|Tower - Server]] ? Es kostet natürlich Geld und du hast nicht viel zu verfügen. 

	Du kannst einfach den Tower was du bereits hast in 3 Servers teilen und alles virtualisieren. 😊


## [[02 - RESOURCES/Notes/Virtualisierung\|Virtualisierung]] / [[02 - RESOURCES/Notes/Emulation\|Emulation]] / [[02 - RESOURCES/Notes/Simulation\|Simulation]]

> 🔄 **Unterschied zu [[02 - RESOURCES/Notes/Virtualisierung\|Virtualisierung]] ,  [[02 - RESOURCES/Notes/Emulation\|Emulation]] und [[02 - RESOURCES/Notes/Simulation\|Simulation]]**
> 
> > Simulation stellt **Verhalten** nach – keine echte Ausführung oder Hardware-Umgebung.

| [[02 - RESOURCES/Notes/Virtualisierung\|Virtualisierung]]             | [[02 - RESOURCES/Notes/Emulation\|Emulation]]                | [[02 - RESOURCES/Notes/Simulation\|Simulation]]                      |
| ------------------------------- | ---------------------------- | ----------------------------------- |
| Echte Ausführung auf echter CPU | Nachbildung fremder Hardware | Nachbildung des **Verhaltens**      |
| Sehr schnell (nativ)            | Langsam (wegen Übersetzung)  | Geschwindigkeit variabel            |
| Beispiel: VMware, KVM           | Beispiel: QEMU, Yuzu         | Beispiel: GNS3, Flugsimulator, NS-3 |
