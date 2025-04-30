---
{"dg-publish":true,"permalink":"/02-resources/notes/acl/","tags":["netzwerk/firewall"]}
---

![ACL-20240804000247511.png](/img/user/02%20-%20RESOURCES/Files/IMG/ACL-20240804000247511.png)
>Access Control List
>> Ein Werkzeug zur Filterung von [[02 - RESOURCES/Notes/Datenpakete\|Netzwerkpakete]]. 
>> Diese kann Verbindungen erlauben oder verbieten. Es wird in den [[02 - RESOURCES/Notes/Router\|Router]] / [[02 - RESOURCES/Notes/Switch\|Switch]] eingesetzt.

## Filterung
>Diese sind die Begriffen, die verwendet wird für die Filterung:
- Quelle- und Ziel-[[02 - RESOURCES/Notes/IP\|IP Adresse]]
- [[02 - RESOURCES/Notes/TCP\|TCP]]- und [[02 - RESOURCES/Notes/UDP\|UDP]]-Ports
- [[02 - RESOURCES/Notes/ICMP\|ICMP]] und andere [[02 - RESOURCES/Notes/Netzwerkprotokolle\|Netzwerkprotokolle]]en

>>Jeder [[02 - RESOURCES/Notes/Datenpakete\|Netzwerkpakete]] wird anhand von einer Regel-Liste (von oben nach unter), wenn eine Regel getroffen wird, wird diese getriggert und durchgeführt und der Vorgang beendet.