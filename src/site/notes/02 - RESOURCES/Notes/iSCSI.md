---
{"dg-publish":true,"permalink":"/02-resources/notes/i-scsi/","tags":["storage/protokolle","netzwerk/storage"],"noteIcon":"","updated":"2025-09-16T23:41:26.000+02:00"}
---


>[[02 - RESOURCES/Notes/iSCSI\|iSCSI]] (Internet Small Computer System Interface) überträgt SCSI-Kommandos über [[02 - RESOURCES/Notes/TCP\|TCP]]/IP-Netzwerke.

>>Es ermöglicht Block-Level-Storage-Zugriff über Standard-Ethernet ohne teure Fiber Channel Hardware.

>[!important] 
>**iSCSI-Komponenten:**
>- **Initiator**: Client (Server)
>- **Target**: Storage-System
>- **IQN**: iSCSI Qualified Name (Identifikation)

>[!example] 
>**iSCSI vs Fiber Channel:**
>- iSCSI: IP-basiert, kostengünstig
>- FC: Dedicated, höchste Performance

>[!success] 
>Kostengünstige Alternative zu Fiber Channel für [[02 - RESOURCES/Notes/SAN\|SAN]]s.