---
{"dg-publish":true,"permalink":"/wiki/acl/","tags":["informatik/netzwerk/firewall","informatik/sicherheit/it-sicherheit"],"noteIcon":"","updated":"2026-07-02T15:37:49.000+02:00","dg-note-properties":{"aliases":["ACL","Access Control List"],"created":"2024-08-02 18:31","links":null,"path":"Notes","tags":["informatik/netzwerk/firewall","informatik/sicherheit/it-sicherheit"]}}
---

![ACL-20240804000247511.png](/img/user/assets/IMG/ACL-20240804000247511.png)
>Access Control List
>> Ein Werkzeug zur Filterung von [[wiki/Datenpakete\|Netzwerkpakete]]. 
>> Diese kann Verbindungen erlauben oder verbieten. Es wird in den [[wiki/Router\|Router]] / [[wiki/Switch\|Switch]] eingesetzt.

## Filterung
>Diese sind die Begriffen, die verwendet wird für die Filterung:
- Quelle- und Ziel-[[02 - RESOURCES/Notes/IP\|IP Adresse]]
- [[wiki/TCP\|TCP]]- und [[wiki/UDP\|UDP]]-Ports
- [[wiki/ICMP\|ICMP]] und andere [[wiki/Netzwerkprotokolle\|Netzwerkprotokolle]]en

>>Jeder [[wiki/Datenpakete\|Netzwerkpakete]] wird anhand von einer Regel-Liste (von oben nach unter), wenn eine Regel getroffen wird, wird diese getriggert und durchgeführt und der Vorgang beendet.