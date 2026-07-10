---
{"dg-publish":true,"permalink":"/wiki/lf-09-netzwerke-und-dienste-bereitstellen/","tags":["GFN/LF09","informatik/netzwerk","status/fertig"],"noteIcon":"","updated":"2026-07-02T12:18:59.000+02:00","dg-note-properties":{"tags":["GFN/LF09","informatik/netzwerk","status/fertig"],"links":"https://lernplattform.gfn.de/course/view.php?id=13592","reference":"[[wiki/LF03 Clients in Netzwerk einbinden\|LF03 Clients in Netzwerk einbinden]]","path":"GFN","created":"2024-07-01 09:02"}}
---

>Dieses Lernfeld ist eine Erweiterung von [[wiki/LF03 Clients in Netzwerk einbinden\|LF03 Clients in Netzwerk einbinden]]. 
>>Hier werden wir das Thema [[wiki/Netzwerk\|Netzwerk]] nun etwas tiefer behandeln.
# I. Switching
___
Wie der Name schon sagt, es geht hier hauptsächlich um [[wiki/Switch\|Switch]]es.
Andere Themen sowie [[wiki/MAC Adresse\|MAC Adresse]]n, [[wiki/Broadcast\|Broadcast]], [[wiki/arp\|arp]] und [[wiki/STP\|STP]] werden hier auch berücksichtigen.

- Hier muss du in der Lager sein zu verstehen was eine [[wiki/Switch\|Switch]] und wie diese funktioniert.
- [[wiki/MAC Adresse\|MAC Adresse]] muss du in der Lager sein zu wissen wo man es findet.
- [[wiki/arp\|arp]] wird nur benutzt um anzuzeigen alle Rechner in das [[wiki/Netzwerk\|Netzwerk]].
- Über [[wiki/STP\|STP]] muss du nur wissen, dass es verwendet wird um Loops  (Endlosschleifen) in [[wiki/Switch\|Switch]]es zu stoppen.
- Was [[wiki/PDU\|PDU]] ist und die Informationen was jeder Layer in die [[wiki/Datenpakete\|Datenpakete]] einsetzt ([[IPv5 Header\|IPv5 Header]]).

# II. [[wiki/VLAN\|VLAN]]s
___
Folgenden Themen über [[wiki/VLAN\|VLAN]]s werden hier berücksichtigen:
- Was sind [[wiki/VLAN\|VLAN]]s, wo werden sie meistens eingesetzt und warum.
- [[wiki/Broadcast\|Broadcast]] ? Ja, Nein ?
- [[wiki/Trunking und Tagging\|Trunking und Tagging]], was ist das und wofür man es braucht.

# III.  [[wiki/Routing\|Routing]]
___
Der [[wiki/Router\|Router]] ist einer der wichtigsten Geräte in die [[wiki/Netzwerk\|Netzwerk]], er ermögliche hauptsächliche unsere Verbindung mit den Welt ([[wiki/Internet\|Internet]]).
- Was macht der [[wiki/Router\|Router]].
- [[wiki/Routing\|Routing]], was ist das und welche Art von [[wiki/Routing\|Routing]] gibt es und wie diesen funktionieren.
- [[wiki/Dynamisches Routing\|Dynamisches Routing]] und wie es funktioniert.

## [[wiki/IGP\|IGP]] und [[wiki/EGP\|EGP]]
Die [[wiki/IGP\|IGP]] und [[wiki/EGP\|EGP]] sind Arten von [[wiki/Routing\|Routing]]s, und es ist wichtig, sie zu verstehen, da  [[wiki/Autonome Systeme\|Autonome Systeme]] mit diese Protokollen verbunden werden.
![LF09 Netzwerke und Dienste bereitstellen-20240723143614522.png](/img/user/assets/IMG/LF09%20Netzwerke%20und%20Dienste%20bereitstellen-20240723143614522.png)
![LF09 Netzwerke und Dienste bereitstellen-20240724112516020.png\|666](/img/user/assets/IMG/LF09%20Netzwerke%20und%20Dienste%20bereitstellen-20240724112516020.png)

- Was ist [[wiki/IGP\|IGP]], [[wiki/EGP\|EGP]], [[wiki/Autonome Systeme\|Autonome Systeme]] und wo und wie funktioniert [[wiki/IGP\|IGP]] und [[wiki/EGP\|EGP]].



>[!note] Thema IV. existiert nicht.

# V. [[wiki/Subnetting\|Subnetting]]
>Notwendige Kenntnisse für jeden ITler.
___
In diese Bereich geht es hauptsächlich um [[wiki/Subnetting\|Subnetting]]. Hier wird deine Kenntnissen in [[wiki/IPv4\|IPv4]] und [[wiki/IPv6\|IPv6]] vertiefen.
- [[wiki/IPv4\|IPv4]]
	- [[wiki/Subnetting IPv4\|Subnetting IPv4]]
		- [[Netzwerkmaske\|Netzwerkmaske]]
			- [[wiki/CIDR\|CIDR]]
			- [[wiki/Hostanteil\|Hostanteil]]
			- [[wiki/Netzanteil\|Netzanteil]]
- [[wiki/IPv6\|IPv6]]
	- [[wiki/Subnetting IPv6\|Subnetting IPv6]]
	- [[wiki/IPv6-Verkürzung\|iPv6 Verkürzung]]

# VI. [[wiki/DHCPv4\|DHCPv4]] und [[wiki/DNS\|DNS]]
___
[[wiki/DHCPv4\|DHCPv4]], [[wiki/DHCP-Server\|DHCP-Server]] und [[wiki/DNS\|DNS]] sollen nach diesem Kapitel keine Fremdwörter mehr für dich sein. Es ist relativ klein, aber wichtig.
>Du musst unbedingt wissen, wie der [[wiki/DHCP-Prozess\|DHCP-Prozess]] funktioniert und was [[wiki/DNS\|DNS]] ist und was es macht.

# VII. [[wiki/WAN\|WAN]]
___
Hier geht es um den Bereich [[wiki/Internet\|Internet]]. Du wirst lernen, wie man aus dem internen [[wiki/Netzwerk\|Netz]] herauskommt. Es geht nicht nur um [[wiki/Router\|Router]], es gibt auch andere Hardware, die du kennenlernen wirst.

Die Hauptpunkte hier sind:
- [[wiki/WAN\|WAN]]
- [[wiki/Dual Stack\|Dual Stack]]
- [[wiki/NAT\|NAT]]

# VIII. [[wiki/ACL\|ACL]] und [[wiki/DMZ\|DMZ]] 
___
>Kleine, aber wichtige Themen! 
>Es geht um die Sicherheit im [[wiki/Netzwerk\|Netzwerk]], insbesondere um Verbindungen von außen nach innen. 
>Diese Konzepte und Werkzeuge werden in Firewalls verwendet.

# IX. [[wiki/WLAN\|WLAN]]
___
>Dieses Kapitel beschäftigt sich nur mit [[wiki/WLAN\|WLAN]]s: deren Modelle, Frequenzen und Sicherheit. 
>Es wird besonders auf die Thematik der Frequenzbereiche eingegangen.



___
___
___

>[!info] 
>Diese Zusammenfassung basiert auf den Materialien von Herrn Ralf Behnke. 
>Die Informationen und Konzepte wurden aus den von ihm bereitgestellten Lehrunterlagen und Vorlesungen entnommen.
>Alle Bilder, die hier gepostet wurden, stammen aus dem Buch [Westermann](https://www.westermann.de/reihe/ITBERUF2020/IT-Berufe?a=1) oder aus den PDF-Präsentationen von Herrn Ralf Behnke.
>Mein Ziel war es, die wesentlichen Punkte zusammenzufassen und die Kerninhalte verständlich darzustellen.