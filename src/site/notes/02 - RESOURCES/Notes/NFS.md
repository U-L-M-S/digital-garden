---
{"dg-publish":true,"permalink":"/02-resources/notes/nfs/","tags":["dateisystem/netzwerk","unix/linux-protokolle"],"noteIcon":"","updated":"2025-09-16T23:41:26.783+02:00"}
---


>[[02 - RESOURCES/Notes/NFS\|NFS]] (Network File System) ermöglicht das Mounten entfernter Dateisysteme über das Netzwerk.

>>Es stellt transparenten Zugriff auf Remote-Dateien bereit, als wären sie lokal vorhanden.

>[!important] 
>**NFS-Versionen:**
>- **NFSv3**: Stateless, UDP/TCP, weit verbreitet
>- **NFSv4**: Stateful, nur TCP, integrierte Sicherheit
>- **NFSv4.1**: Parallelität, Sessions, Performance

>[!example] 
>```bash
># NFS-Server konfigurieren (/etc/exports)
>/home/shared 192.168.1.0/24(rw,sync,no_root_squash)
>
># NFS-Mount auf Client
>sudo mount -t nfs 192.168.1.100:/home/shared /mnt/nfs
>
># Permanent in /etc/fstab
>192.168.1.100:/home/shared /mnt/nfs nfs defaults 0 0
>```

>[!success] 
>Standard für Unix/Linux-Umgebungen, heute auch Windows-Support verfügbar.