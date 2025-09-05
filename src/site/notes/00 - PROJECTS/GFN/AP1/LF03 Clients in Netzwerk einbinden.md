---
{"dg-publish":true,"permalink":"/00-projects/gfn/ap-1/lf-03-clients-in-netzwerk-einbinden/","tags":["netzwerk","GFN/LF03","finished"],"noteIcon":"","updated":"2025-09-05T10:38:03.772+02:00"}
---

> Du kannst gerne unter [meinem GitHub](https://github.com/U-L-M-S/digital-garden) mithelfen.

# I. Einführung in das Netzwerk

---

> Dieses Kapitel ist eine kleine Einführung in Netzwerke. Es wird gezeigt, wie alles in einem [[02 - RESOURCES/Notes/Betrieb\|Betrieb]] verbunden ist – durch Kabel und drahtlose Verbindungen.
> 
> > Dabei wird erläutert, dass es nicht nur das [[02 - RESOURCES/Notes/Netzwerk\|Netzwerk]] über das Internet gibt, wie wir es kennen, sondern auch andere Arten wie [[02 - RESOURCES/Notes/Bluetooth\|Bluetooth]] und das Telefonnetz.

## Was ist ein [[02 - RESOURCES/Notes/Netzwerk\|Netzwerk]]?

Ein [[02 - RESOURCES/Notes/Netzwerk\|Netzwerk]] ist der Zusammenschluss selbstständiger elektronischer Systeme wie [[Computer\|Computer]] oder andere Komponenten, die miteinander kommunizieren können. Stell dir vor, du arbeitest in einem Büro - warum sollte jeder seinen eigenen Drucker haben, wenn alle denselben nutzen können?

**Warum [[02 - RESOURCES/Notes/Netzwerk\|Netzwerk]]e?**

- [[02 - RESOURCES/Notes/Gemeinsame Nutzung von Ressourcen\|Gemeinsame Nutzung von Ressourcen]]
- [[02 - RESOURCES/Notes/Erhöhter Datenschutz und Datensicherheit\|Erhöhter Datenschutz und Datensicherheit]]
- [[02 - RESOURCES/Notes/Nutzung gemeinsamer Datenbestände\|Nutzung gemeinsamer Datenbestände]]
- [[02 - RESOURCES/Notes/Zentrale Steuerung von Programmen und Daten\|Zentrale Steuerung von Programmen und Daten]]

## Netzwerktypen nach Organisation

### [[02 - RESOURCES/Notes/Peer-to-Peer-Netzwerk\|Peer-to-Peer-Netzwerk]] (P2P)

Stell dir vor, in einer WG teilt jeder seine Sachen mit anderen - jeder ist gleichzeitig Geber und Nehmer. So funktioniert auch ein [[02 - RESOURCES/Notes/P2P-Netzwerk\|P2P-Netzwerk]], wo jeder Rechner gleichzeitig [[02 - RESOURCES/Notes/Client\|Client]] und [[02 - RESOURCES/Notes/Server\|Server]] ist.

### [[02 - RESOURCES/Notes/Client-Server-Netzwerk\|Client-Server-Netzwerk]]

In größeren Organisationen braucht man Ordnung. Hier gibt es [[02 - RESOURCES/Notes/dedizierte Server\|dedizierte Server]], die wie ein Hausmeister für bestimmte Aufgaben zuständig sind - [[02 - RESOURCES/Notes/File-Server\|File-Server]], [[02 - RESOURCES/Notes/Print-Server\|Print-Server]], [[02 - RESOURCES/Notes/Mail-Server\|Mail-Server]], [[DNS-Server\|DNS-Server]], usw.

## Netzwerktypen nach Reichweite

### [[02 - RESOURCES/Notes/LAN\|LAN]] (Local Area Network)

Das ist dein "Zuhause-Netzwerk" - verbindet Computer in einem Gebäude oder einer Etage. Ab drei Systemen brauchst du [[02 - RESOURCES/Notes/Kopplungselemente\|Kopplungselemente]] wie einen [[02 - RESOURCES/Notes/Hub\|HUB]] oder [[02 - RESOURCES/Notes/Switch\|Switch]].

### [[02 - RESOURCES/Notes/WLAN\|WLAN]] (Wireless Local Area Network)

Drahtlose Verbindung innerhalb eines [[02 - RESOURCES/Notes/LAN\|LAN]]s - perfekt für [[02 - RESOURCES/Notes/mobile Endgeräte\|mobile Endgeräte]] wie [[02 - RESOURCES/Notes/Laptops\|Laptops]], [[02 - RESOURCES/Notes/Tablets\|Tablets]] und [[02 - RESOURCES/Notes/Smartphones\|Smartphones]].

### [[02 - RESOURCES/Notes/VLAN\|VLAN]] (Virtual Local Area Network)

Hier wird es clever: Du kannst [[02 - RESOURCES/Notes/physische LANs\|physische LANs]] in isolierte, virtuelle Teilnetze unterteilen. So können verschiedene Abteilungen im gleichen Gebäude getrennte Netzwerke haben.

### [[02 - RESOURCES/Notes/VPN\|VPN]] (Virtual Private Network)

Das ist wie ein sicherer Tunnel durch das gefährliche Internet. Mit [[02 - RESOURCES/Notes/IP-Tunneling\|IP-Tunneling]] und [[02 - RESOURCES/Notes/Verschlüsselung\|Verschlüsselung]] verbindest du entfernte Standorte sicher miteinander.

### [[02 - RESOURCES/Notes/WAN\|WAN]], [[02 - RESOURCES/Notes/MAN\|MAN]], [[02 - RESOURCES/Notes/GAN\|GAN]]

- [[02 - RESOURCES/Notes/WAN\|WAN]]: Weite geografische Bereiche, betrieben von [[02 - RESOURCES/Notes/Providern\|Providern]]
- [[02 - RESOURCES/Notes/MAN\|MAN]]: Stadtweite Netzwerke
- [[02 - RESOURCES/Notes/GAN\|GAN]]: Globale Vernetzung mehrerer [[02 - RESOURCES/Notes/WAN\|WAN]]s

# II. Datenübertragung verstehen

---

> Bevor wir tiefer einsteigen, müssen wir verstehen, wie Daten eigentlich übertragen werden. Warum dauert es manchmal ewig, ein Video herunterzuladen? Und wie berechnet man, ob die Internetverbindung schnell genug ist?

## Grundlagen der [[02 - RESOURCES/Notes/Datenübertragung\|Datenübertragung]]

Stell dir vor, du willst einem Freund 1000 Fotos schicken. Die Frage ist nicht nur "Wie viele?", sondern auch "Wie schnell?".

### Wichtige Kenngrößen

- [[02 - RESOURCES/Notes/Datenmenge\|Datenmenge]] (D): Wie viel? (Bit oder Byte)
- [[02 - RESOURCES/Notes/Zeit\|Zeit]] (t): Wie lange? (Sekunden)
- [[02 - RESOURCES/Notes/Datenübertragungsrate\|Datenübertragungsrate]] (C): Wie schnell? (Bit/s oder Byte/s)

**Formel:** C = D/t

### Beispiel aus der Praxis

Eine 2 GB Videodatei mit 16 Mbit/s übertragen:

- D = 2 GB = 16 Gbit = 16 × 10⁹ bit
- C = 16 Mbit/s = 16 × 10⁶ b/s
- t = 16 × 10⁹ / 16 × 10⁶ = 1000 s = 16 Minuten 40 Sekunden

## [[02 - RESOURCES/Notes/Signalgeschwindigkeit\|Signalgeschwindigkeit]] in verschiedenen Medien

### Bei [[02 - RESOURCES/Notes/Kupferleitungen\|Kupferleitungen]]

c = c₀ × [[02 - RESOURCES/Notes/NVP\|NVP]] (Verkürzungsfaktor)

### Bei [[02 - RESOURCES/Notes/Lichtwellenleitern\|Lichtwellenleitern]]

c = c₀/n (Brechungsindex) Typisch: 2/3 der Lichtgeschwindigkeit im Vakuum

## [[02 - RESOURCES/Notes/Adressierungsarten\|Adressierungsarten]]

- [[02 - RESOURCES/Notes/Unicast\|Unicast]]: Einer zu Einem
- [[02 - RESOURCES/Notes/Multicast\|Multicast]]: Einer zu Vielen (bestimmte Gruppe)
- [[02 - RESOURCES/Notes/Broadcast\|Broadcast]]: Einer zu Allen
- [[02 - RESOURCES/Notes/Anycast\|Anycast]]: Einer zu Irgendeinem aus der Gruppe

# III. OSI-Modell und Protokolle

---

> Wie sprechen Computer miteinander? Sie brauchen gemeinsame Regeln - Protokolle. Das [[02 - RESOURCES/Notes/OSI-Modell\|OSI-Modell]] ist wie ein Bauplan dafür, wie Kommunikation zwischen Computern funktioniert.

## Das [[02 - RESOURCES/Notes/OSI-Schichtenmodell\|OSI-Schichtenmodell]]

Stell dir vor, du schickst einen Brief ins Ausland. Verschiedene Personen/Systeme kümmern sich um verschiedene Aspekte:

|Schicht|Layer|Aufgabe|Beispiel|
|---|---|---|---|
|7|[[02 - RESOURCES/Notes/Application Layer\|Application Layer]]|Anwendungsfunktionen|E-Mail-Programm|
|6|[[02 - RESOURCES/Notes/Presentation Layer\|Presentation Layer]]|Verschlüsselung, Formatierung|Komprimierung|
|5|[[02 - RESOURCES/Notes/Session Layer\|Session Layer]]|Verbindungssteuerung|Login-Session|
|4|[[02 - RESOURCES/Notes/Transport Layer\|Transport Layer]]|Ende-zu-Ende Übertragung|[[02 - RESOURCES/Notes/TCP\|TCP]]/[[02 - RESOURCES/Notes/UDP\|UDP]]|
|3|[[02 - RESOURCES/Notes/Network Layer\|Network Layer]]|Routing, Adressierung|[[02 - RESOURCES/Notes/IP\|IP]], [[02 - RESOURCES/Notes/Router\|Router]]|
|2|[[02 - RESOURCES/Notes/Data Link Layer\|Data Link Layer]]|Fehlererkennung|[[02 - RESOURCES/Notes/Ethernet\|Ethernet]], [[02 - RESOURCES/Notes/Switch\|Switch]]|
|1|[[02 - RESOURCES/Notes/Physical Layer\|Physical Layer]]|Physische Übertragung|Kabel, [[02 - RESOURCES/Notes/WLAN\|WLAN]]|

## Wichtige Protokolle

### [[02 - RESOURCES/Notes/TCP\|TCP]] vs [[02 - RESOURCES/Notes/UDP\|UDP]]

- [[02 - RESOURCES/Notes/TCP\|TCP]]: Zuverlässig, aber langsamer - wie ein Einschreiben
- [[02 - RESOURCES/Notes/UDP\|UDP]]: Schnell, aber unsicher - wie eine Postkarte

### [[02 - RESOURCES/Notes/Ethernet\|Ethernet]] (IEEE 802.3)

Das ist das "Grundgesetz" für [[02 - RESOURCES/Notes/LAN\|LAN]]-Kommunikation. Daten werden in [[02 - RESOURCES/Notes/Ethernetframes\|Ethernetframes]] verpackt mit:

- [[MAC-Adresse\|MAC-Adresse]] (Absender/Empfänger)
- [[02 - RESOURCES/Notes/EtherType\|EtherType]] (Welches Protokoll?)
- Nutzdaten
- [[02 - RESOURCES/Notes/Prüfsumme\|Prüfsumme]]

### [[02 - RESOURCES/Notes/Ports\|Ports]]

Wie Hausnummern für Programme:

- [[02 - RESOURCES/Notes/IP-Adresse\|IP-Adresse]]: Das ist die Straße
- [[02 - RESOURCES/Notes/PORT\|Port]]: Das ist die Hausnummer
- Zusammen: Vollständige Adresse

**Port-Kategorien:**

- 0-1.023: [[02 - RESOURCES/Notes/Well Known Ports\|Well Known Ports]] (HTTP=80, HTTPS=443, SSH=22)
- 1.024-49.151: [[02 - RESOURCES/Notes/Registered Ports\|Registered Ports]]
- 49.152-65.535: [[02 - RESOURCES/Notes/Dynamically Allocated Ports\|Dynamically Allocated Ports]]

# IV. Switching und Layer-2 Technologien

---

> Jetzt wird es praktisch! [[02 - RESOURCES/Notes/Switch\|Switch]]es sind die Verkehrspolizisten im [[02 - RESOURCES/Notes/LAN\|LAN]]. Sie entscheiden, welche Daten wohin gehen, damit nicht alle gleichzeitig reden und Chaos entsteht.

## Wie [[02 - RESOURCES/Notes/Switch\|Switch]]es arbeiten

Ein [[02 - RESOURCES/Notes/Switch\|Switch]] ist wie ein intelligenter Postbote, der sich merkt, wer wo wohnt:

### [[MAC-Adresse\|MAC-Adresse]]n lernen

1. **Lernen**: [[02 - RESOURCES/Notes/Switch\|Switch]] merkt sich, über welchen Port welche [[MAC-Adresse\|MAC-Adresse]] erreichbar ist
2. **Weiterleiten**: Bekannte Adressen werden direkt weitergeleitet
3. **Fluten**: Unbekannte Adressen werden an alle Ports gesendet ([[02 - RESOURCES/Notes/Broadcast\|Broadcast]])
4. **Altern**: Alte Einträge werden gelöscht

### [[02 - RESOURCES/Notes/arp\|ARP]] (Address Resolution Protocol)

Wie findet man die [[MAC-Adresse\|MAC-Adresse]] zu einer [[02 - RESOURCES/Notes/IP-Adresse\|IP-Adresse]]?

- [[02 - RESOURCES/Notes/ARP-Request\|ARP-Request]]: "Wer hat IP 192.168.1.10?" ([[02 - RESOURCES/Notes/Broadcast\|Broadcast]])
- [[02 - RESOURCES/Notes/ARP-Reply\|ARP-Reply]]: "Ich! Meine MAC ist XX:XX:XX:XX:XX:XX" ([[02 - RESOURCES/Notes/Unicast\|Unicast]])

### Switching-Verfahren

- [[02 - RESOURCES/Notes/Cut-Through\|Cut-Through]]: Sofort weiterleiten (schnell, aber fehleranfällig)
- [[02 - RESOURCES/Notes/Store-and-Forward\|Store-and-Forward]]: Erst prüfen, dann weiterleiten (sicher, aber langsamer)
- [[02 - RESOURCES/Notes/Fragment-Free\|Fragment-Free]]: Erste 64 Bytes prüfen (Kompromiss)

## Switch-Typen

- [[02 - RESOURCES/Notes/Unmanaged Switch\|Unmanaged Switch]]: Plug-and-Play, keine Konfiguration
- [[02 - RESOURCES/Notes/Web-Smart Switch\|Web-Smart Switch]]: Verwaltung über Browser
- [[02 - RESOURCES/Notes/Managed Switch\|Managed Switch]]: Vollprofessionell mit [[02 - RESOURCES/Notes/SNMP\|SNMP]], [[02 - RESOURCES/Notes/VLAN\|VLAN]], [[QoS\|QoS]]
- [[02 - RESOURCES/Notes/Industrielle Switche\|Industrielle Switche]]: Für harte Umgebungen

## [[02 - RESOURCES/Notes/VLAN\|VLAN]]s

Warum sollte die Buchhaltung im gleichen Netzwerksegment sein wie die Praktikanten?

**Vorteile:**

- [[02 - RESOURCES/Notes/Broadcast-Domänen\|Broadcast-Domänen]] trennen
- Sicherheit erhöhen
- Netzwerk-Organisation

**[[02 - RESOURCES/Notes/Trunking und Tagging\|Trunking und Tagging]]:** Wie transportiert man mehrere [[02 - RESOURCES/Notes/VLAN\|VLAN]]s über ein Kabel? Mit Tags - wie Gepäckanhänger am Flughafen.

# V. Routing und Layer-3 Technologien

---

> [[02 - RESOURCES/Notes/Router\|Router]] sind die Wegweiser des Internets. Ohne sie würde kein Datenpaket seinen Weg von deinem Computer zu einem Server in Japan finden.

## Was macht ein [[02 - RESOURCES/Notes/Router\|Router]]?

Stell dir vor, du willst von Berlin nach München. Der [[02 - RESOURCES/Notes/Router\|Router]] schaut auf die [[02 - RESOURCES/Notes/IP-Adresse\|IP-Adresse]] (Zieladresse) und entscheidet: "Welcher Weg ist der beste?"

### [[02 - RESOURCES/Notes/Routing\|Routing]]-Arten

- [[02 - RESOURCES/Notes/Statisches Routing\|Statisches Routing]]: Feste Wege, wie eine gedruckte Straßenkarte
- [[02 - RESOURCES/Notes/Dynamisches Routing\|Dynamisches Routing]]: Anpassung an Verkehr, wie ein GPS-System

### [[02 - RESOURCES/Notes/IGP\|IGP]] und [[02 - RESOURCES/Notes/EGP\|EGP]]

- [[02 - RESOURCES/Notes/IGP\|IGP]] (Interior Gateway Protocol): Routing innerhalb eines [[Autonomen Systems\|Autonomen Systems]]
- [[02 - RESOURCES/Notes/EGP\|EGP]] (Exterior Gateway Protocol): Routing zwischen verschiedenen [[Autonomen Systemen\|Autonomen Systemen]]

# VI. IP-Adressierung und Subnetting

---

> [[IP-Adressen\|IP-Adressen]] sind wie Postanschriften im Internet. Aber warum gibt es verschiedene Arten? Und wie teilt man große Netzwerke sinnvoll auf?

## [[02 - RESOURCES/Notes/IPv4-Adressen\|IPv4-Adressen]]

32 Bit = 4,3 Milliarden mögliche Adressen. Klingt viel, ist aber längst nicht mehr genug!

### Öffentlich vs. Privat

- [[02 - RESOURCES/Notes/Öffentliche IP-Adressen\|Öffentliche IP-Adressen]]: Im Internet routbar
- [[02 - RESOURCES/Notes/Private IP-Adressen\|Private IP-Adressen]]: Nur im [[02 - RESOURCES/Notes/LAN\|LAN]] sichtbar
    - 10.0.0.0 - 10.255.255.255
    - 172.16.0.0 - 172.31.255.255
    - 192.168.0.0 - 192.168.255.255

### [[02 - RESOURCES/Notes/Subnetzmaske\|Subnetzmaske]] verstehen

Die [[02 - RESOURCES/Notes/Subnetzmaske\|Subnetzmaske]] trennt [[02 - RESOURCES/Notes/Netzanteil\|Netzanteil]] und [[02 - RESOURCES/Notes/Hostanteil\|Hostanteil]]:

- Netzanteil: Welches Netzwerk?
- Hostanteil: Welches Gerät im Netzwerk?

### [[02 - RESOURCES/Notes/Subnetting\|Subnetting]]

Warum ein großes Netzwerk in kleinere aufteilen?

- [[02 - RESOURCES/Notes/Netzlast\|Netzlast]] verteilen
- Sicherheit erhöhen
- [[02 - RESOURCES/Notes/Broadcast\|Broadcast]]-Verkehr reduzieren

**[[02 - RESOURCES/Notes/Subnetting IPv4\|Subnetting IPv4]]-Algorithmus:**

1. Wie viele Subnetze brauche ich? → 2^n ≥ Anzahl Subnetze
2. [[02 - RESOURCES/Notes/Netzanteil erweitern\|Netzanteil erweitern]] um n Bits
3. [[02 - RESOURCES/Notes/Netz-ID\|Netz-ID]] und [[02 - RESOURCES/Notes/Broadcast-ID\|Broadcast-ID]] berechnen

**Beispiel:** 192.168.0.0/24 in 4 Subnetze

- Brauche 2 Bits (2² = 4)
- Neue Maske: /26
- Subnetze: 192.168.0.0/26, 192.168.0.64/26, 192.168.0.128/26, 192.168.0.192/26

### [[02 - RESOURCES/Notes/Subnetting IPv6\|Subnetting IPv6]]

Funktioniert ähnlich wie [[02 - RESOURCES/Notes/IPv4\|IPv4]], aber:

- Kein [[02 - RESOURCES/Notes/Broadcast\|Broadcast]], kein [[02 - RESOURCES/Notes/Netz-ID\|Netz-ID]]
- 128 Bit statt 32 Bit
- [[02 - RESOURCES/Notes/Subnetting\|Subnetting]] passiert im [[02 - RESOURCES/Notes/IPv6 Präfix\|IPv6 Präfix]]-Bereich
- Standard-Präfix: /64

# VII. DHCP und Automatisierung

---

> Stell dir vor, du müsstest jedem neuen Gerät im Netzwerk manuell eine [[02 - RESOURCES/Notes/IP-Adresse\|IP-Adresse]], [[02 - RESOURCES/Notes/Gateway\|Gateway]] und [[DNS-Server\|DNS-Server]] zuweisen. Bei 100 Geräten wärst du Wochen beschäftigt!

## [[02 - RESOURCES/Notes/DHCP\|DHCP]] (Dynamic Host Configuration Protocol)

[[02 - RESOURCES/Notes/DHCP\|DHCP]] ist wie ein automatischer Rezeptionist, der jedem neuen Gast ein Zimmer mit allem Nötigen zuweist.

### Der [[02 - RESOURCES/Notes/DHCP-Prozess\|DHCP-Prozess]] (DORA-Prinzip)

1. **Discovery**: Client ruft "Hallo, ich brauche eine IP!" ([[02 - RESOURCES/Notes/Broadcast\|Broadcast]])
2. **Offer**: Server antwortet "Hier ist eine Adresse für dich!"
3. **Request**: Client sagt "Ja, die nehme ich!"
4. **ACK**: Server bestätigt "Alles klar, gehört dir!"

### Probleme ohne [[02 - RESOURCES/Notes/DHCP\|DHCP]]

- [[02 - RESOURCES/Notes/Manuelle Konfiguration\|Manuelle Konfiguration]]: Zeitaufwendig und fehleranfällig
- [[02 - RESOURCES/Notes/IP-Konflikte\|IP-Konflikte]]: Zwei Geräte mit gleicher Adresse
- Keine zentrale Verwaltung

### [[Auto-Konfiguration\|Auto-Konfiguration]] ohne DHCP

- [[IPAC/APIPA\|IPAC/APIPA]]: Windows nutzt 169.254.x.x automatisch
- [[02 - RESOURCES/Notes/Zero Configuration Networking\|Zero Configuration Networking]]: Automatische Netzwerkkonfiguration

# VIII. DNS - Das Telefonbuch des Internets

---

> Könntest du dir merken, dass Google unter 142.250.185.78 erreichbar ist? [[02 - RESOURCES/Notes/DNS\|DNS]] übersetzt menschenfreundliche Namen in maschinenlesbare [[IP-Adressen\|IP-Adressen]].

## Wie [[02 - RESOURCES/Notes/DNS\|DNS]] funktioniert

Das [[02 - RESOURCES/Notes/Domain Name System\|Domain Name System]] ist wie ein riesiges, verteiltes Telefonbuch:

### DNS-Hierarchie

1. [[02 - RESOURCES/Notes/Root-Server\|Root-Server]]: Wissen, wo [[02 - RESOURCES/Notes/TLD-Server\|TLD-Server]] sind
2. [[02 - RESOURCES/Notes/TLD-Server\|TLD-Server]]: Verwalten .com, .de, .org
3. [[02 - RESOURCES/Notes/Autoritative Nameserver\|Autoritative Nameserver]]: Kennen die finale [[02 - RESOURCES/Notes/IP-Adresse\|IP-Adresse]]

### DNS-Abfrage Schritt für Schritt

1. **Lokaler Cache**: Schon mal nach example.com gesucht?
2. **Rekursiver Resolver**: DNS-Server des Providers fragen
3. **Root-Server**: "Für .com frag den TLD-Server"
4. **TLD-Server**: "Für example.com frag Server X"
5. **Autoritativer Server**: "example.com = 93.184.216.34"

### Wichtige [[02 - RESOURCES/Notes/DNS-Einträge\|DNS-Einträge]]

- **A**: Domain → IPv4-Adresse
- **AAAA**: Domain → IPv6-Adresse
- **CNAME**: Alias (www.example.com → example.com)
- **MX**: Mail-Server
- **TXT**: Beliebiger Text (oft für Verifikation)

### DNS-Sicherheitsrisiken

- [[02 - RESOURCES/Notes/DNS-Spoofing\|DNS-Spoofing]]: Gefälschte Antworten
- [[02 - RESOURCES/Notes/DNS-Cache Poisoning\|DNS-Cache Poisoning]]: Vergiftung des Caches
- [[02 - RESOURCES/Notes/DNS-Amplification\|DNS-Amplification]]: Verstärkte DDoS-Angriffe

**Schutzmaßnahmen:**

- [[02 - RESOURCES/Notes/DNSSEC\|DNSSEC]]: Signierung von DNS-Daten
- [[02 - RESOURCES/Notes/DNS-over-HTTPS\|DNS-over-HTTPS]] (DoH) / [[02 - RESOURCES/Notes/DNS-over-TLS\|DNS-over-TLS]] (DoT)

# IX. NAT - Die IPv4-Rettung

---

> 4,3 Milliarden [[02 - RESOURCES/Notes/IPv4-Adressen\|IPv4-Adressen]] reichen nicht für alle Geräte der Welt. [[02 - RESOURCES/Notes/NAT\|NAT]] ist der clevere Trick, wie trotzdem jeder ins Internet kann.

## [[02 - RESOURCES/Notes/NAT\|NAT]] (Network Address Translation)

Stell dir eine Firma vor: Alle Mitarbeiter haben interne Durchwahlen, aber nach außen gibt es nur eine Hauptnummer.

### Das Problem

- [[02 - RESOURCES/Notes/IPv4\|IPv4]]: Nur 4,3 Milliarden Adressen
- Geräte: Smartphones, Tablets, IoT-Geräte, Computer...
- Lösung: [[02 - RESOURCES/Notes/Private IP-Adressen\|Private IP-Adressen]] + [[02 - RESOURCES/Notes/NAT\|NAT]]

### Wie [[02 - RESOURCES/Notes/Source NAT\|Source NAT]] funktioniert

1. Host im [[02 - RESOURCES/Notes/LAN\|LAN]] (192.168.1.2) will ins Internet
2. [[02 - RESOURCES/Notes/Router\|Router]] tauscht Quell-IP gegen eigene öffentliche IP
3. Internet-Server antwortet an öffentliche IP
4. Router übersetzt zurück und leitet an Host weiter

**Vorteile:**

- Löst [[02 - RESOURCES/Notes/IPv4-Adressenmangel\|IPv4-Adressenmangel]]
- Versteckt interne Struktur (etwas mehr Sicherheit)

**Nachteile:**

- Bricht [[02 - RESOURCES/Notes/Ende-zu-Ende-Design\|Ende-zu-Ende-Design]]
- Kompliziert bestimmte Anwendungen (IP-Telefonie)
- Zusätzliche Latenz

# X. WAN-Technologien

---

> Wie kommen deine Daten vom heimischen [[02 - RESOURCES/Notes/LAN\|LAN]] ins Internet? Über [[02 - RESOURCES/Notes/WAN\|WAN]]-Verbindungen, die verschiedene Technologien nutzen.

## [[02 - RESOURCES/Notes/WAN\|WAN]]-Grundlagen

[[Wide Area Network\|Wide Area Network]] verbindet entfernte Standorte:

### [[02 - RESOURCES/Notes/Dual Stack\|Dual Stack]]

Gleichzeitiger Betrieb von [[02 - RESOURCES/Notes/IPv4\|IPv4]] und [[02 - RESOURCES/Notes/IPv6\|IPv6]]

### Wichtige WAN-Technologien

- [[02 - RESOURCES/Notes/DSL\|DSL]]: Digital Subscriber Line
- [[Kabel-Internet\|Kabel-Internet]]: Über TV-Kabel
- [[Glasfaser\|Glasfaser]]: [[Lichtwellenleiter\|Lichtwellenleiter]] bis ins Haus
- [[Mobilfunk\|Mobilfunk]]: 4G/5G

# XI. Sicherheitsaspekte

---

> Ein Netzwerk ohne Sicherheit ist wie ein Haus ohne Türschloss. [[02 - RESOURCES/Notes/Firewalls\|Firewalls]], [[02 - RESOURCES/Notes/ACL\|ACL]]s und [[02 - RESOURCES/Notes/DMZ\|DMZ]]s schützen vor unerwünschten Gästen.

## Sicherheitsaspekte ([[02 - RESOURCES/Notes/CIA-Triade\|CIA-Triade]])

- [[02 - RESOURCES/Notes/Vertraulichkeit\|Vertraulichkeit]]: Nur Berechtigte können Daten lesen
- [[02 - RESOURCES/Notes/Integrität\|Integrität]]: Daten sind unverändert und korrekt
- [[02 - RESOURCES/Notes/Verfügbarkeit\|Verfügbarkeit]]: Systeme sind erreichbar, wenn gebraucht
- [[02 - RESOURCES/Notes/Authentizität\|Authentizität]]: Identität ist nachweisbar

## [[00 - PROJECTS/Firewall\|Firewall]]

Eine digitale "Brandschutzmauer":

### Arten von Firewalls

- [[02 - RESOURCES/Notes/Paketfilter\|Paketfilter]]: Prüft IP-Adressen und Ports
- [[02 - RESOURCES/Notes/Stateful Packet Inspection\|Stateful Packet Inspection]]: Merkt sich Verbindungen
- [[02 - RESOURCES/Notes/Application Firewall\|Application Firewall]]: Analysiert Anwendungsdaten

### Firewall-Strategien

- [[02 - RESOURCES/Notes/Whitelisting\|Whitelisting]]: Alles gesperrt, nur Erlaubtes durch
- [[02 - RESOURCES/Notes/Blacklisting\|Blacklisting]]: Alles offen, nur Bekannt-Gefährliches gesperrt

### [[02 - RESOURCES/Notes/ACL\|ACL]] (Access Control Lists)

Regeln, die definieren: Wer darf was?

### [[02 - RESOURCES/Notes/DMZ\|DMZ]] (Demilitarized Zone)

Ein spezielles Netzwerksegment für Server, die sowohl vom [[02 - RESOURCES/Notes/LAN\|LAN]] als auch vom Internet erreichbar sein müssen (Webserver, Mailserver).

# XII. WLAN und Funktechnologien

---

> Kabel sind praktisch, aber manchmal braucht man Bewegungsfreiheit. [[02 - RESOURCES/Notes/WLAN\|WLAN]] und andere Funktechnologien machen Mobilität möglich.

## [[02 - RESOURCES/Notes/WLAN\|WLAN]]/[[WiFi\|WiFi]]

### Modi

- [[02 - RESOURCES/Notes/Infrastrukturmodus\|Infrastrukturmodus]]: Mit [[Access Point\|Access Point]]
- [[02 - RESOURCES/Notes/Ad-Hoc-Modus\|Ad-Hoc-Modus]]: Direkte Geräteverbindung

### Sicherheit

- [[02 - RESOURCES/Notes/WPA2\|WPA2]]: Aktueller Standard mit [[02 - RESOURCES/Notes/AES\|AES]]
- [[02 - RESOURCES/Notes/PSK\|PSK]]: Pre-Shared Key
- [[02 - RESOURCES/Notes/IEEE 802.1x\|IEEE 802.1x]]: Enterprise-Authentifizierung

### [[02 - RESOURCES/Notes/Beamforming\|Beamforming]]

Intelligente Antennen-Technik: Fokussiert das Signal auf den Client statt es in alle Richtungen zu senden.

## Andere Funktechnologien

### [[02 - RESOURCES/Notes/RFID\|RFID]]

Automatische Identifikation durch Radiowellen:

- [[02 - RESOURCES/Notes/Passive Transponder\|Passive Transponder]]: Keine eigene Batterie
- [[02 - RESOURCES/Notes/Aktive Transponder\|Aktive Transponder]]: Mit Batterie, größere Reichweite

### [[02 - RESOURCES/Notes/Bluetooth\|Bluetooth]]

Kurzstrecken-Kommunikation im 2,4 GHz Band:

- [[02 - RESOURCES/Notes/Piconet\|Piconet]]: Bis zu 8 Geräte
- [[02 - RESOURCES/Notes/Scatternet\|Scatternet]]: Mehrere verbundene Piconets
- [[02 - RESOURCES/Notes/Frequency-Hopping\|Frequency-Hopping]]: Schneller Kanalwechsel gegen Störungen

# XIII. Speichertechnologien und Datensicherung

---

> Daten sind das wertvollste Gut eines Unternehmens. Wie schützt man sie vor Verlust? Durch kluge [[Speichertechnologien\|Speichertechnologien]] und durchdachte [[02 - RESOURCES/Notes/Backup-Strategien\|Backup-Strategien]].

## [[02 - RESOURCES/Notes/RAID\|RAID]]-Systeme

Mehrere Festplatten arbeiten zusammen für mehr Sicherheit oder Performance:

### Wichtige RAID-Level

- [[02 - RESOURCES/Notes/RAID 0\|RAID 0]]: Striping - schnell, aber keine Sicherheit
- [[02 - RESOURCES/Notes/RAID 1\|RAID 1]]: Mirroring - hohe Sicherheit, halbe Kapazität
- [[02 - RESOURCES/Notes/RAID 5\|RAID 5]]: Striping mit Parität - guter Kompromiss
- [[02 - RESOURCES/Notes/RAID 6\|RAID 6]]: Doppelte Parität - sehr sicher
- [[02 - RESOURCES/Notes/RAID 10\|RAID 10]]: Kombination aus RAID 1 und 0

### Implementation

- [[02 - RESOURCES/Notes/Hardware-RAID\|Hardware-RAID]]: Eigener Controller, hohe Performance
- [[02 - RESOURCES/Notes/Software-RAID\|Software-RAID]]: Über Betriebssystem, günstig
- [[02 - RESOURCES/Notes/Hybrid-RAID\|Hybrid-RAID]]: Mischung beider Ansätze

## [[02 - RESOURCES/Notes/Backup-Strategien\|Backup-Strategien]]

### Arten von Backups

- [[02 - RESOURCES/Notes/Vollsicherung\|Vollsicherung]]: Alle Daten (langsam, aber vollständig)
- [[02 - RESOURCES/Notes/Inkrementelle Sicherung\|Inkrementelle Sicherung]]: Nur Änderungen seit letztem Backup
- [[02 - RESOURCES/Notes/Differentielle Sicherung\|Differentielle Sicherung]]: Änderungen seit letzter Vollsicherung

### [[02 - RESOURCES/Notes/3-2-1-Regel\|3-2-1-Regel]]

- **3** Kopien der wichtigen Daten
- **2** verschiedene Speichermedien
- **1** Kopie extern/offline

### Was ist **kein** Backup?

- [[02 - RESOURCES/Notes/Wiederherstellungspunkte\|Wiederherstellungspunkte]]
- Lokale [[02 - RESOURCES/Notes/Snapshots\|Snapshots]]
- [[RAID-Systeme\|RAID-Systeme]] (schützen nicht vor Löschung/Korruption)

# XIV. Verfügbarkeit und USV

---

> Was nützt das beste Netzwerk, wenn es bei jedem Stromausfall zusammenbricht? [[02 - RESOURCES/Notes/Hochverfügbarkeit\|Hochverfügbarkeit]] und [[USV-Systeme\|USV-Systeme]] sorgen dafür, dass kritische Systeme immer laufen.

## [[02 - RESOURCES/Notes/Verfügbarkeit\|Verfügbarkeit]]

Berechnung: (Betriebszeit × 100%) / Gesamtzeit

### [[02 - RESOURCES/Notes/Verfügbarkeitsklassen\|Verfügbarkeitsklassen]]

- [[VK 3\|VK 3]]: 99,99% = max. 53 Minuten Ausfall pro Jahr
- [[02 - RESOURCES/Notes/Hochverfügbarkeit\|Hochverfügbarkeit]]: 99,9% oder höher

### Maßnahmen für hohe Verfügbarkeit

- [[02 - RESOURCES/Notes/Redundanz\|Redundanz]]: Mehrere Komponenten als Backup
- [[02 - RESOURCES/Notes/Failover\|Failover]]: Automatischer Wechsel bei Ausfall
- [[02 - RESOURCES/Notes/Monitoring\|Monitoring]]: Früherkennung von Problemen
- [[Wartung\|Wartung]]: Regelmäßige Instandhaltung

## [[02 - RESOURCES/Notes/USV\|USV]] (Unterbrechungsfreie Stromversorgung)

Wie ein Notstromaggregat, nur für IT-Geräte:

### USV-Klassen

1. [[02 - RESOURCES/Notes/VFI\|VFI]] (Online-USV): Immer aktiv, keine Umschaltzeit
2. [[02 - RESOURCES/Notes/VI\|VI]] (Line-Interactive): Bei Problemen aktiv, kurze Umschaltzeit
3. [[02 - RESOURCES/Notes/VFD\|VFD]] (Offline): Nur bei Ausfall aktiv, längere Umschaltzeit

### Dimensionierung

Wichtige Werte:

- [[02 - RESOURCES/Notes/Scheinleistung\|Scheinleistung]] (VA)
- [[02 - RESOURCES/Notes/Wirkleistung\|Wirkleistung]] (W)
- [[02 - RESOURCES/Notes/Unterstützungszeit\|Unterstützungszeit]]
- [[02 - RESOURCES/Notes/Akkulaufzeit\|Akkulaufzeit]]

# XV. Cloud-Computing und moderne IT-Infrastruktur

---

> Eigene Server sind teuer und aufwendig. [[Cloud-Computing\|Cloud-Computing]] verspricht: Miete statt kaufen, skaliere nach Bedarf. Aber was sind die Unterschiede?

## Cloud-Servicemodelle

### [[02 - RESOURCES/Notes/IaaS\|IaaS]] (Infrastructure as a Service)

Du bekommst: Virtuelle Server, Speicher, Netzwerk Du kümmerst dich um: Betriebssystem, Anwendungen, Daten

**Vorteile:** Skalierbar, wenig Wartung, geringe Anfangsinvestition **Nachteile:** Anbieter-Abhängigkeit, Online-Abhängigkeit

### [[02 - RESOURCES/Notes/PaaS\|PaaS]] (Platform as a Service)

Du bekommst: Komplette Entwicklungsumgebung Du kümmerst dich um: Nur deine Anwendung

**Vorteile:** Weniger Programmieraufwand, Fokus auf Entwicklung **Nachteile:** Architektur-Vorgaben, weniger Kontrolle

### [[02 - RESOURCES/Notes/SaaS\|SaaS]] (Software as a Service)

Du bekommst: Fertige Software (Gmail, Office 365) Du kümmerst dich um: Nur die Nutzung

**Vorteile:** Keine Administration, einfache Abrechnung **Nachteile:** Wenig Anpassung, Anbieter-Bindung

## Moderne Infrastrukturen

### [[02 - RESOURCES/Notes/Rechenzentren\|Rechenzentren]]

- [[02 - RESOURCES/Notes/On-Premise\|On-Premise]]: Eigene Server im Haus
- [[02 - RESOURCES/Notes/Off-Premise\|Off-Premise]]: Externe Rechenzentren
- [[02 - RESOURCES/Notes/Colocation\|Colocation]]: Eigene Hardware in fremdem Rechenzentrum

### Client-Technologien

- [[02 - RESOURCES/Notes/Fat Client\|Fat Client]]: Vollständiger Computer
- [[02 - RESOURCES/Notes/Thin Client\|Thin Client]]: Nutzt entfernte Rechenleistung
- [[02 - RESOURCES/Notes/BYOD\|BYOD]]: Bring Your Own Device

---
