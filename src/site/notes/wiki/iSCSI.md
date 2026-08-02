---
{"dg-publish":true,"permalink":"/wiki/i-scsi/","tags":["informatik/netzwerk","informatik/hardware"],"noteIcon":"","updated":"2026-07-19T03:56:26.662+02:00","dg-note-properties":{"tags":["informatik/netzwerk","informatik/hardware"],"aliases":["Internet Small Computer System Interface","IP-SAN"],"links":null,"created_date":"2025-09-16"}}
---


>[[wiki/iSCSI\|iSCSI]] (Internet Small Computer System Interface) überträgt SCSI-Kommandos über [[wiki/TCP\|TCP]]/IP-Netzwerke.

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
>Kostengünstige Alternative zu Fiber Channel für [[wiki/SAN\|SAN]]s.