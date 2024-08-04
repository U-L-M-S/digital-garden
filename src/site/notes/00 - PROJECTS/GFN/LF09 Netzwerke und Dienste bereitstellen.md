---
{"dg-publish":true,"permalink":"/00-projects/gfn/lf-09-netzwerke-und-dienste-bereitstellen/","tags":["LF09","inProgress","GFN","netzwerk"],"noteIcon":"","updated":"2024-08-04T20:52:30.460+02:00"}
---

# I. Switching
___
Wie der Name schon sagt, es geht hier hauptsächlich um [[02 - RESOURCES/Notes/Switch\|Switch]]es.
Andere Themen sowie [[02 - RESOURCES/Notes/MAC Adresse\|MAC Adresse]]n, [[02 - RESOURCES/Notes/Broadcast\|Broadcast]], [[02 - RESOURCES/Notes/ARP\|ARP]] und [[02 - RESOURCES/Notes/STP\|STP]] werden hier auch berücksichtigen.

- Hier muss du in der Lager sein zu verstehen was eine [[02 - RESOURCES/Notes/Switch\|Switch]] und wie diese funktioniert.
- [[02 - RESOURCES/Notes/MAC Adresse\|MAC Adresse]] muss du in der Lager sein zu wissen wo man es findet.
- [[02 - RESOURCES/Notes/ARP\|ARP]] wird nur benutzt um anzuzeigen alle Rechner in das [[02 - RESOURCES/Notes/Netzwerk\|Netzwerk]].
- Über [[02 - RESOURCES/Notes/STP\|STP]] muss du nur wissen, dass es verwendet wird um Loops  (Endlosschleifen) in [[02 - RESOURCES/Notes/Switch\|Switch]]es zu stoppen.
- Was [[02 - RESOURCES/Notes/PDU\|PDU]] ist und die Informationen was jeder Layer in die [[02 - RESOURCES/Notes/Datenpakete\|Datenpakete]] einsetzt ([[02 - RESOURCES/Notes/IPv4 Header\|IPv4 Header]]).

# II. [[02 - RESOURCES/Notes/VLAN\|VLAN]]s
___
Folgenden Themen über [[02 - RESOURCES/Notes/VLAN\|VLAN]]s werden hier berücksichtigen:
- Was sind [[02 - RESOURCES/Notes/VLAN\|VLAN]]s, wo werden sie meistens eingesetzt und warum.
- [[02 - RESOURCES/Notes/Broadcast\|Broadcast]] ? Ja, Nein ?
- [[02 - RESOURCES/Notes/Trunking und Tagging\|Trunking und Tagging]], was ist das und wofür man es braucht.

# III.  [[02 - RESOURCES/Notes/Routing\|Routing]]
___
Der [[02 - RESOURCES/Notes/Router\|Router]] ist einer der wichtigsten Geräte in die [[02 - RESOURCES/Notes/Netzwerk\|Netzwerk]], er ermögliche hauptsächliche unsere Verbindung mit den Welt ([[02 - RESOURCES/Notes/Internet\|Internet]]).
- Was macht der [[02 - RESOURCES/Notes/Router\|Router]].
- [[02 - RESOURCES/Notes/Routing\|Routing]], was ist das und welche Art von [[02 - RESOURCES/Notes/Routing\|Routing]] gibt es und wie diesen funktionieren.
- [[02 - RESOURCES/Notes/Dynamisches Routing\|Dynamisches Routing]] und wie es funktioniert.

## [[02 - RESOURCES/Notes/IGP\|IGP]] und [[02 - RESOURCES/Notes/EGP\|EGP]]
Die [[02 - RESOURCES/Notes/IGP\|IGP]] und [[02 - RESOURCES/Notes/EGP\|EGP]] sind Arten von [[02 - RESOURCES/Notes/Routing\|Routing]]s, und es ist wichtig, sie zu verstehen, da  [[02 - RESOURCES/Notes/Autonome Systeme\|Autonome Systeme]] mit diese Protokollen verbunden werden.
![LF09 Netzwerke und Dienste bereitstellen-20240723143614522.png](/img/user/02%20-%20RESOURCES/Files/LF09%20Netzwerke%20und%20Dienste%20bereitstellen-20240723143614522.png)
![LF09 Netzwerke und Dienste bereitstellen-20240724112516020.png](/img/user/02%20-%20RESOURCES/Files/LF09%20Netzwerke%20und%20Dienste%20bereitstellen-20240724112516020.png)

- Was ist [[02 - RESOURCES/Notes/IGP\|IGP]], [[02 - RESOURCES/Notes/EGP\|EGP]], [[02 - RESOURCES/Notes/Autonome Systeme\|Autonome Systeme]] und wo und wie funktioniert [[02 - RESOURCES/Notes/IGP\|IGP]] und [[02 - RESOURCES/Notes/EGP\|EGP]].



>[!note] Thema IV. existiert nicht.

# V. [[02 - RESOURCES/Notes/Subnetting\|Subnetting]]
>Notwendige Kenntnisse für jeden ITler.
___
In diese Bereich geht es hauptsächlich um [[02 - RESOURCES/Notes/Subnetting\|Subnetting]]. Hier wird deine Kenntnissen in [[02 - RESOURCES/Notes/IPv4\|IPv4]] und [[02 - RESOURCES/Notes/IPv6\|IPv6]] vertiefen.
- [[02 - RESOURCES/Notes/IPv4\|IPv4]]
	- [[02 - RESOURCES/Notes/Subnetting IPv4\|Subnetting IPv4]]
		- [[02 - RESOURCES/Notes/Netzwerkmaske\|Netzwerkmaske]]
			- [[02 - RESOURCES/Notes/CIDR\|CIDR]]
			- [[02 - RESOURCES/Notes/Hostanteil\|Hostanteil]]
			- [[02 - RESOURCES/Notes/Netzanteil\|Netzanteil]]
- [[02 - RESOURCES/Notes/IPv6\|IPv6]]
	- [[02 - RESOURCES/Notes/Subnetting IPv6\|Subnetting IPv6]]
	- [[02 - RESOURCES/Notes/IPv6-Verkürzung\|iPv6 Verkürzung]]

# VI. [[02 - RESOURCES/Notes/DHCP\|DHCP]] und [[02 - RESOURCES/Notes/DNS\|DNS]]
___
[[02 - RESOURCES/Notes/DHCP\|DHCP]], [[02 - RESOURCES/Notes/DHCP-Server\|DHCP-Server]] und [[02 - RESOURCES/Notes/DNS\|DNS]] sollen nach diesem Kapitel keine Fremdwörter mehr für dich sein. Es ist relativ klein, aber wichtig.
>Du musst unbedingt wissen, wie der [[02 - RESOURCES/Notes/DHCP-Prozess\|DHCP-Prozess]] funktioniert und was [[02 - RESOURCES/Notes/DNS\|DNS]] ist und was es macht.

# VII. [[02 - RESOURCES/Notes/WAN\|WAN]]
___
Hier geht es um den Bereich [[02 - RESOURCES/Notes/Internet\|Internet]]. Du wirst lernen, wie man aus dem internen [[02 - RESOURCES/Notes/Netzwerk\|Netz]] herauskommt. Es geht nicht nur um [[02 - RESOURCES/Notes/Router\|Router]], es gibt auch andere Hardware, die du kennenlernen wirst.

Die Hauptpunkte hier sind:
- [[02 - RESOURCES/Notes/WAN\|WAN]]
- [[02 - RESOURCES/Notes/Dual Stack\|Dual Stack]]
- [[02 - RESOURCES/Notes/NAT\|NAT]]

# VIII. [[02 - RESOURCES/Notes/ACL\|ACL]] und [[02 - RESOURCES/Notes/DMZ\|DMZ]] 
___
>Kleine, aber wichtige Themen! 
>Es geht um die Sicherheit im [[02 - RESOURCES/Notes/Netzwerk\|Netzwerk]], insbesondere um Verbindungen von außen nach innen. 
>Diese Konzepte und Werkzeuge werden in Firewalls verwendet.

# IX. [[02 - RESOURCES/Notes/WLAN\|WLAN]]
___
