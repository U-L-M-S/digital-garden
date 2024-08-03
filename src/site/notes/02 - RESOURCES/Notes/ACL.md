---
{"dg-publish":true,"permalink":"/02-resources/notes/acl/","tags":["netzwerk/firewall"],"noteIcon":"","updated":"2024-08-04T00:02:57.936+02:00"}
---

![ACL-20240804000247511.png](/img/user/02%20-%20RESOURCES/Files/ACL-20240804000247511.png)
>Access Control List
>> Ein Werkzeug zur Filterung von [[02 - RESOURCES/Notes/Datenpakete\|Netzwerkpakete]]. 
>> Diese kann Verbindungen erlauben oder verbieten. Es wird in den [[02 - RESOURCES/Notes/Router\|Router]] / [[02 - RESOURCES/Notes/Switch\|Switch]] eingesetzt.

## Filterung
>Diese sind die Begriffen, die verwendet wird für die Filterung:
- Quelle- und Ziel-[[02 - RESOURCES/Notes/IP\|IP Adresse]]
- [[02 - RESOURCES/Notes/TCP\|TCP]]- und [[02 - RESOURCES/Notes/UDP\|UDP]]-Ports
- [[02 - RESOURCES/Notes/ICMP\|ICMP]] und andere [[02 - RESOURCES/Notes/Protokoll\|Protokoll]]en

>>Jeder Netzwerkpakete wird anhand von einer Regel-Liste (von oben nach unter), wenn eine Regel getroffen wird, wird diese getriggert und durchgeführt und der Vorgang beendet.