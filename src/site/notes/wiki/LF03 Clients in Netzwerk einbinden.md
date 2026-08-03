---
{"dg-publish":true,"permalink":"/wiki/lf-03-clients-in-netzwerk-einbinden/","tags":["informatik/netzwerk","ausbildung/gfn","meta/status"],"noteIcon":"","updated":"2026-07-19T03:56:26.000+02:00","dg-note-properties":{"tags":["informatik/netzwerk","ausbildung/gfn","meta/status"],"links":"https://lernplattform.gfn.de/course/view.php?id=12581","reference":null,"created":"2024-05-03 18:07"}}
---

> Du kannst gerne unter [meinem GitHub](https://github.com/U-L-M-S/digital-garden) mithelfen.
# I. Einführung in das Netzwerk

---

> Dieses Kapitel ist eine kleine Einführung in Netzwerke. Es wird gezeigt, wie alles in einem [[wiki/Betrieb\|Betrieb]] verbunden ist – durch Kabel und drahtlose Verbindungen.
> 
> > Dabei wird erläutert, dass es nicht nur das [[wiki/Netzwerk\|Netzwerk]] über das Internet gibt, wie wir es kennen, sondern auch andere Arten wie [[wiki/Bluetooth\|Bluetooth]] und das Telefonnetz.

## Was ist ein [[wiki/Netzwerk\|Netzwerk]]?

Ein [[wiki/Netzwerk\|Netzwerk]] ist der Zusammenschluss selbstständiger elektronischer Systeme wie [[Computer\|Computer]] oder andere Komponenten, die miteinander kommunizieren können. Stell dir vor, du arbeitest in einem Büro - warum sollte jeder seinen eigenen Drucker haben, wenn alle denselben nutzen können?

**Warum [[wiki/Netzwerk\|Netzwerk]]e?**

- [[wiki/Gemeinsame Nutzung von Ressourcen\|Gemeinsame Nutzung von Ressourcen]]
- [[wiki/Erhöhter Datenschutz und Datensicherheit\|Erhöhter Datenschutz und Datensicherheit]]
- [[wiki/Nutzung gemeinsamer Datenbestände\|Nutzung gemeinsamer Datenbestände]]
- [[wiki/Zentrale Steuerung von Programmen und Daten\|Zentrale Steuerung von Programmen und Daten]]

## Netzwerktypen nach Organisation

### [[wiki/Peer-to-Peer-Netzwerk\|Peer-to-Peer-Netzwerk]] (P2P)

Stell dir vor, in einer WG teilt jeder seine Sachen mit anderen - jeder ist gleichzeitig Geber und Nehmer. So funktioniert auch ein [[wiki/P2P-Netzwerk\|P2P-Netzwerk]], wo jeder Rechner gleichzeitig [[wiki/Client\|Client]] und [[wiki/Server\|Server]] ist.

### [[wiki/Client-Server-Netzwerk\|Client-Server-Netzwerk]]

In größeren Organisationen braucht man Ordnung. Hier gibt es [[wiki/dedizierte Server\|dedizierte Server]], die wie ein Hausmeister für bestimmte Aufgaben zuständig sind - [[wiki/File-Server\|File-Server]], [[wiki/Print-Server\|Print-Server]], [[wiki/Mail-Server\|Mail-Server]], [[DNS-Server\|DNS-Server]], usw.

## Netzwerktypen nach Reichweite

### [[wiki/LAN\|LAN]] (Local Area Network)

Das ist dein "Zuhause-Netzwerk" - verbindet Computer in einem Gebäude oder einer Etage. Ab drei Systemen brauchst du [[wiki/Kopplungselemente\|Kopplungselemente]] wie einen [[wiki/Hub\|HUB]] oder [[wiki/Switch\|Switch]].

### [[wiki/WLAN\|WLAN]] (Wireless Local Area Network)

Drahtlose Verbindung innerhalb eines [[wiki/LAN\|LAN]]s - perfekt für [[wiki/mobile Endgeräte\|mobile Endgeräte]] wie [[wiki/Laptops\|Laptops]], [[wiki/Tablets\|Tablets]] und [[wiki/Smartphones\|Smartphones]].

### [[wiki/VLAN\|VLAN]] (Virtual Local Area Network)

Hier wird es clever: Du kannst [[wiki/physische LANs\|physische LANs]] in isolierte, virtuelle Teilnetze unterteilen. So können verschiedene Abteilungen im gleichen Gebäude getrennte Netzwerke haben.

### [[wiki/VPN\|VPN]] (Virtual Private Network)

Das ist wie ein sicherer Tunnel durch das gefährliche Internet. Mit [[wiki/IP-Tunneling\|IP-Tunneling]] und [[wiki/Verschlüsselung\|Verschlüsselung]] verbindest du entfernte Standorte sicher miteinander.

### [[wiki/WAN\|WAN]], [[wiki/Metropolitan Area Network\|Metropolitan Area Network]], [[wiki/GAN\|GAN]]

- [[wiki/WAN\|WAN]]: Weite geografische Bereiche, betrieben von [[wiki/Providern\|Providern]]
- [[wiki/Metropolitan Area Network\|Metropolitan Area Network]]: Stadtweite Netzwerke
- [[wiki/GAN\|GAN]]: Globale Vernetzung mehrerer [[wiki/WAN\|WAN]]s

# II. Datenübertragung verstehen

---

> Bevor wir tiefer einsteigen, müssen wir verstehen, wie Daten eigentlich übertragen werden. Warum dauert es manchmal ewig, ein Video herunterzuladen? Und wie berechnet man, ob die Internetverbindung schnell genug ist?

## Grundlagen der [[wiki/Datenübertragung\|Datenübertragung]]

Stell dir vor, du willst einem Freund 1000 Fotos schicken. Die Frage ist nicht nur "Wie viele?", sondern auch "Wie schnell?".

### Wichtige Kenngrößen

- [[wiki/Datenmenge\|Datenmenge]] (D): Wie viel? (Bit oder Byte)
- [[wiki/Zeit\|Zeit]] (t): Wie lange? (Sekunden)
- [[wiki/Datenübertragungsrate\|Datenübertragungsrate]] (C): Wie schnell? (Bit/s oder Byte/s)

**Formel:** C = D/t

### Beispiel aus der Praxis

Eine 2 GB Videodatei mit 16 Mbit/s übertragen:

- D = 2 GB = 16 Gbit = 16 × 10⁹ bit
- C = 16 Mbit/s = 16 × 10⁶ b/s
- t = 16 × 10⁹ / 16 × 10⁶ = 1000 s = 16 Minuten 40 Sekunden

## [[wiki/Signalgeschwindigkeit\|Signalgeschwindigkeit]] in verschiedenen Medien

### Bei [[wiki/Kupferleitungen\|Kupferleitungen]]

c = c₀ × [[wiki/NVP\|NVP]] (Verkürzungsfaktor)

### Bei [[wiki/Lichtwellenleitern\|Lichtwellenleitern]]

c = c₀/n (Brechungsindex) Typisch: 2/3 der Lichtgeschwindigkeit im Vakuum

## [[wiki/Adressierungsarten\|Adressierungsarten]]

- [[wiki/Unicast\|Unicast]]: Einer zu Einem
- [[wiki/Multicast\|Multicast]]: Einer zu Vielen (bestimmte Gruppe)
- [[wiki/Broadcast\|Broadcast]]: Einer zu Allen
- [[wiki/Anycast\|Anycast]]: Einer zu Irgendeinem aus der Gruppe

# III. OSI-Modell und Protokolle

---

> Wie sprechen Computer miteinander? Sie brauchen gemeinsame Regeln - Protokolle. Das [[wiki/OSI-Modell\|OSI-Modell]] ist wie ein Bauplan dafür, wie Kommunikation zwischen Computern funktioniert.

## Das [[wiki/OSI-Schichtenmodell\|OSI-Schichtenmodell]]

Stell dir vor, du schickst einen Brief ins Ausland. Verschiedene Personen/Systeme kümmern sich um verschiedene Aspekte:

|Schicht|Layer|Aufgabe|Beispiel|
|---|---|---|---|
|7|[[wiki/Application Layer\|Application Layer]]|Anwendungsfunktionen|E-Mail-Programm|
|6|[[wiki/Presentation Layer\|Presentation Layer]]|Verschlüsselung, Formatierung|Komprimierung|
|5|[[wiki/Session Layer\|Session Layer]]|Verbindungssteuerung|Login-Session|
|4|[[wiki/Transport Layer\|Transport Layer]]|Ende-zu-Ende Übertragung|[[wiki/TCP\|TCP]]/[[wiki/UDP\|UDP]]|
|3|[[wiki/Network Layer\|Network Layer]]|Routing, Adressierung|[[wiki/IP\|IP]], [[wiki/Router\|Router]]|
|2|[[wiki/Data Link Layer\|Data Link Layer]]|Fehlererkennung|[[wiki/Ethernet\|Ethernet]], [[wiki/Switch\|Switch]]|
|1|[[wiki/Physical Layer\|Physical Layer]]|Physische Übertragung|Kabel, [[wiki/WLAN\|WLAN]]|

## Wichtige Protokolle

### [[wiki/TCP\|TCP]] vs [[wiki/UDP\|UDP]]

- [[wiki/TCP\|TCP]]: Zuverlässig, aber langsamer - wie ein Einschreiben
- [[wiki/UDP\|UDP]]: Schnell, aber unsicher - wie eine Postkarte

### [[wiki/Ethernet\|Ethernet]] (IEEE 802.3)

Das ist das "Grundgesetz" für [[wiki/LAN\|LAN]]-Kommunikation. Daten werden in [[wiki/Ethernetframes\|Ethernetframes]] verpackt mit:

- [[MAC-Adresse\|MAC-Adresse]] (Absender/Empfänger)
- [[wiki/EtherType\|EtherType]] (Welches Protokoll?)
- Nutzdaten
- [[wiki/Prüfsumme\|Prüfsumme]]

### [[wiki/Ports\|Ports]]

Wie Hausnummern für Programme:

- [[wiki/IP-Adresse\|IP-Adresse]]: Das ist die Straße
- [[wiki/PORT\|Port]]: Das ist die Hausnummer
- Zusammen: Vollständige Adresse

**Port-Kategorien:**

- 0-1.023: [[wiki/Well Known Ports\|Well Known Ports]] (HTTP=80, HTTPS=443, SSH=22)
- 1.024-49.151: [[wiki/Registered Ports\|Registered Ports]]
- 49.152-65.535: [[wiki/Dynamically Allocated Ports\|Dynamically Allocated Ports]]

# IV. Switching und Layer-2 Technologien

---

> Jetzt wird es praktisch! [[wiki/Switch\|Switch]]es sind die Verkehrspolizisten im [[wiki/LAN\|LAN]]. Sie entscheiden, welche Daten wohin gehen, damit nicht alle gleichzeitig reden und Chaos entsteht.

## Wie [[wiki/Switch\|Switch]]es arbeiten

Ein [[wiki/Switch\|Switch]] ist wie ein intelligenter Postbote, der sich merkt, wer wo wohnt:

### [[MAC-Adresse\|MAC-Adresse]]n lernen

1. **Lernen**: [[wiki/Switch\|Switch]] merkt sich, über welchen Port welche [[MAC-Adresse\|MAC-Adresse]] erreichbar ist
2. **Weiterleiten**: Bekannte Adressen werden direkt weitergeleitet
3. **Fluten**: Unbekannte Adressen werden an alle Ports gesendet ([[wiki/Broadcast\|Broadcast]])
4. **Altern**: Alte Einträge werden gelöscht

### [[wiki/arp\|ARP]] (Address Resolution Protocol)

Wie findet man die [[MAC-Adresse\|MAC-Adresse]] zu einer [[wiki/IP-Adresse\|IP-Adresse]]?

- [[wiki/ARP-Request\|ARP-Request]]: "Wer hat IP 192.168.1.10?" ([[wiki/Broadcast\|Broadcast]])
- [[wiki/ARP-Reply\|ARP-Reply]]: "Ich! Meine MAC ist XX:XX:XX:XX:XX:XX" ([[wiki/Unicast\|Unicast]])

### Switching-Verfahren

- [[wiki/Cut-Through\|Cut-Through]]: Sofort weiterleiten (schnell, aber fehleranfällig)
- [[wiki/Store-and-Forward\|Store-and-Forward]]: Erst prüfen, dann weiterleiten (sicher, aber langsamer)
- [[wiki/Fragment-Free\|Fragment-Free]]: Erste 64 Bytes prüfen (Kompromiss)

## Switch-Typen

- [[wiki/Unmanaged Switch\|Unmanaged Switch]]: Plug-and-Play, keine Konfiguration
- [[wiki/Web-Smart Switch\|Web-Smart Switch]]: Verwaltung über Browser
- [[wiki/Managed Switch\|Managed Switch]]: Vollprofessionell mit [[wiki/SNMP\|SNMP]], [[wiki/VLAN\|VLAN]], [[QoS\|QoS]]
- [[wiki/Industrielle Switche\|Industrielle Switche]]: Für harte Umgebungen

## [[wiki/VLAN\|VLAN]]s

Warum sollte die Buchhaltung im gleichen Netzwerksegment sein wie die Praktikanten?

**Vorteile:**

- [[wiki/Broadcast-Domänen\|Broadcast-Domänen]] trennen
- Sicherheit erhöhen
- Netzwerk-Organisation

**[[wiki/Trunking und Tagging\|Trunking und Tagging]]:** Wie transportiert man mehrere [[wiki/VLAN\|VLAN]]s über ein Kabel? Mit Tags - wie Gepäckanhänger am Flughafen.

# V. Routing und Layer-3 Technologien

---

> [[wiki/Router\|Router]] sind die Wegweiser des Internets. Ohne sie würde kein Datenpaket seinen Weg von deinem Computer zu einem Server in Japan finden.

## Was macht ein [[wiki/Router\|Router]]?

Stell dir vor, du willst von Berlin nach München. Der [[wiki/Router\|Router]] schaut auf die [[wiki/IP-Adresse\|IP-Adresse]] (Zieladresse) und entscheidet: "Welcher Weg ist der beste?"

### [[wiki/Routing\|Routing]]-Arten

- [[wiki/Statisches Routing\|Statisches Routing]]: Feste Wege, wie eine gedruckte Straßenkarte
- [[wiki/Dynamisches Routing\|Dynamisches Routing]]: Anpassung an Verkehr, wie ein GPS-System

### [[wiki/IGP\|IGP]] und [[wiki/EGP\|EGP]]

- [[wiki/IGP\|IGP]] (Interior Gateway Protocol): Routing innerhalb eines [[Autonomen Systems\|Autonomen Systems]]
- [[wiki/EGP\|EGP]] (Exterior Gateway Protocol): Routing zwischen verschiedenen [[Autonomen Systemen\|Autonomen Systemen]]

# VI. IP-Adressierung und Subnetting

---

> [[IP-Adressen\|IP-Adressen]] sind wie Postanschriften im Internet. Aber warum gibt es verschiedene Arten? Und wie teilt man große Netzwerke sinnvoll auf?

## [[wiki/IPv4-Adressen\|IPv4-Adressen]]

32 Bit = 4,3 Milliarden mögliche Adressen. Klingt viel, ist aber längst nicht mehr genug!

### Öffentlich vs. Privat

- [[wiki/Öffentliche IP-Adressen\|Öffentliche IP-Adressen]]: Im Internet routbar
- [[wiki/Private IP-Adressen\|Private IP-Adressen]]: Nur im [[wiki/LAN\|LAN]] sichtbar
    - 10.0.0.0 - 10.255.255.255
    - 172.16.0.0 - 172.31.255.255
    - 192.168.0.0 - 192.168.255.255

### [[wiki/Subnetzmaske\|Subnetzmaske]] verstehen

Die [[wiki/Subnetzmaske\|Subnetzmaske]] trennt [[wiki/Netzanteil\|Netzanteil]] und [[wiki/Hostanteil\|Hostanteil]]:

- Netzanteil: Welches Netzwerk?
- Hostanteil: Welches Gerät im Netzwerk?

### [[wiki/Subnetting\|Subnetting]]

Warum ein großes Netzwerk in kleinere aufteilen?

- [[wiki/Netzlast\|Netzlast]] verteilen
- Sicherheit erhöhen
- [[wiki/Broadcast\|Broadcast]]-Verkehr reduzieren

**[[wiki/Subnetting IPv4\|Subnetting IPv4]]-Algorithmus:**

1. Wie viele Subnetze brauche ich? → 2^n ≥ Anzahl Subnetze
2. [[wiki/Netzanteil erweitern\|Netzanteil erweitern]] um n Bits
3. [[wiki/Netz-ID\|Netz-ID]] und [[wiki/Broadcast-ID\|Broadcast-ID]] berechnen

**Beispiel:** 192.168.0.0/24 in 4 Subnetze

- Brauche 2 Bits (2² = 4)
- Neue Maske: /26
- Subnetze: 192.168.0.0/26, 192.168.0.64/26, 192.168.0.128/26, 192.168.0.192/26

### [[wiki/Subnetting IPv6\|Subnetting IPv6]]

Funktioniert ähnlich wie [[wiki/IPv4\|IPv4]], aber:

- Kein [[wiki/Broadcast\|Broadcast]], kein [[wiki/Netz-ID\|Netz-ID]]
- 128 Bit statt 32 Bit
- [[wiki/Subnetting\|Subnetting]] passiert im [[wiki/IPv6 Präfix\|IPv6 Präfix]]-Bereich
- Standard-Präfix: /64

# VII. DHCP und Automatisierung

---

> Stell dir vor, du müsstest jedem neuen Gerät im Netzwerk manuell eine [[wiki/IP-Adresse\|IP-Adresse]], [[wiki/Gateway\|Gateway]] und [[DNS-Server\|DNS-Server]] zuweisen. Bei 100 Geräten wärst du Wochen beschäftigt!

## [[wiki/DHCPv4\|DHCPv4]] (Dynamic Host Configuration Protocol)

[[wiki/DHCPv4\|DHCPv4]] ist wie ein automatischer Rezeptionist, der jedem neuen Gast ein Zimmer mit allem Nötigen zuweist.

### Der [[wiki/DHCP-Prozess\|DHCP-Prozess]] (DORA-Prinzip)

1. **Discovery**: Client ruft "Hallo, ich brauche eine IP!" ([[wiki/Broadcast\|Broadcast]])
2. **Offer**: Server antwortet "Hier ist eine Adresse für dich!"
3. **Request**: Client sagt "Ja, die nehme ich!"
4. **ACK**: Server bestätigt "Alles klar, gehört dir!"

### Probleme ohne [[wiki/DHCPv4\|DHCPv4]]

- [[wiki/Manuelle Konfiguration\|Manuelle Konfiguration]]: Zeitaufwendig und fehleranfällig
- [[wiki/IP-Konflikte\|IP-Konflikte]]: Zwei Geräte mit gleicher Adresse
- Keine zentrale Verwaltung

### [[Auto-Konfiguration\|Auto-Konfiguration]] ohne DHCP

- [[IPAC/APIPA\|IPAC/APIPA]]: Windows nutzt 169.254.x.x automatisch
- [[wiki/Zero Configuration Networking\|Zero Configuration Networking]]: Automatische Netzwerkkonfiguration

# VIII. DNS - Das Telefonbuch des Internets

---

> Könntest du dir merken, dass Google unter 142.250.185.78 erreichbar ist? [[wiki/DNS\|DNS]] übersetzt menschenfreundliche Namen in maschinenlesbare [[IP-Adressen\|IP-Adressen]].

## Wie [[wiki/DNS\|DNS]] funktioniert

Das [[wiki/Domain Name System\|Domain Name System]] ist wie ein riesiges, verteiltes Telefonbuch:

### DNS-Hierarchie

1. [[wiki/Root-Server\|Root-Server]]: Wissen, wo [[wiki/TLD-Server\|TLD-Server]] sind
2. [[wiki/TLD-Server\|TLD-Server]]: Verwalten .com, .de, .org
3. [[wiki/Autoritative Nameserver\|Autoritative Nameserver]]: Kennen die finale [[wiki/IP-Adresse\|IP-Adresse]]

### DNS-Abfrage Schritt für Schritt

1. **Lokaler Cache**: Schon mal nach example.com gesucht?
2. **Rekursiver Resolver**: DNS-Server des Providers fragen
3. **Root-Server**: "Für .com frag den TLD-Server"
4. **TLD-Server**: "Für example.com frag Server X"
5. **Autoritativer Server**: "example.com = 93.184.216.34"

### Wichtige [[wiki/DNS-Einträge\|DNS-Einträge]]

- **A**: Domain → IPv4-Adresse
- **AAAA**: Domain → IPv6-Adresse
- **CNAME**: Alias (www.example.com → example.com)
- **MX**: Mail-Server
- **TXT**: Beliebiger Text (oft für Verifikation)

### DNS-Sicherheitsrisiken

- [[wiki/DNS-Spoofing\|DNS-Spoofing]]: Gefälschte Antworten
- [[wiki/DNS-Cache Poisoning\|DNS-Cache Poisoning]]: Vergiftung des Caches
- [[wiki/DNS-Amplification\|DNS-Amplification]]: Verstärkte DDoS-Angriffe

**Schutzmaßnahmen:**

- [[wiki/DNSSEC\|DNSSEC]]: Signierung von DNS-Daten
- [[wiki/DNS-over-HTTPS\|DNS-over-HTTPS]] (DoH) / [[wiki/DNS-over-TLS\|DNS-over-TLS]] (DoT)

# IX. NAT - Die IPv4-Rettung

---

> 4,3 Milliarden [[wiki/IPv4-Adressen\|IPv4-Adressen]] reichen nicht für alle Geräte der Welt. [[wiki/NAT\|NAT]] ist der clevere Trick, wie trotzdem jeder ins Internet kann.

## [[wiki/NAT\|NAT]] (Network Address Translation)

Stell dir eine Firma vor: Alle Mitarbeiter haben interne Durchwahlen, aber nach außen gibt es nur eine Hauptnummer.

### Das Problem

- [[wiki/IPv4\|IPv4]]: Nur 4,3 Milliarden Adressen
- Geräte: Smartphones, Tablets, IoT-Geräte, Computer...
- Lösung: [[wiki/Private IP-Adressen\|Private IP-Adressen]] + [[wiki/NAT\|NAT]]

### Wie [[wiki/Source NAT\|Source NAT]] funktioniert

1. Host im [[wiki/LAN\|LAN]] (192.168.1.2) will ins Internet
2. [[wiki/Router\|Router]] tauscht Quell-IP gegen eigene öffentliche IP
3. Internet-Server antwortet an öffentliche IP
4. Router übersetzt zurück und leitet an Host weiter

**Vorteile:**

- Löst [[wiki/IPv4-Adressenmangel\|IPv4-Adressenmangel]]
- Versteckt interne Struktur (etwas mehr Sicherheit)

**Nachteile:**

- Bricht [[wiki/Ende-zu-Ende-Design\|Ende-zu-Ende-Design]]
- Kompliziert bestimmte Anwendungen (IP-Telefonie)
- Zusätzliche Latenz

# X. WAN-Technologien

---

> Wie kommen deine Daten vom heimischen [[wiki/LAN\|LAN]] ins Internet? Über [[wiki/WAN\|WAN]]-Verbindungen, die verschiedene Technologien nutzen.

## [[wiki/WAN\|WAN]]-Grundlagen

[[Wide Area Network\|Wide Area Network]] verbindet entfernte Standorte:

### [[wiki/Dual Stack\|Dual Stack]]

Gleichzeitiger Betrieb von [[wiki/IPv4\|IPv4]] und [[wiki/IPv6\|IPv6]]

### Wichtige WAN-Technologien

- [[wiki/DSL\|DSL]]: Digital Subscriber Line
- [[Kabel-Internet\|Kabel-Internet]]: Über TV-Kabel
- [[Glasfaser\|Glasfaser]]: [[Lichtwellenleiter\|Lichtwellenleiter]] bis ins Haus
- [[Mobilfunk\|Mobilfunk]]: 4G/5G

# XI. Sicherheitsaspekte

---

> Ein Netzwerk ohne Sicherheit ist wie ein Haus ohne Türschloss. [[wiki/Firewalls\|Firewalls]], [[wiki/ACL\|ACL]]s und [[wiki/DMZ\|DMZ]]s schützen vor unerwünschten Gästen.

## Sicherheitsaspekte ([[wiki/CIA-Triade\|CIA-Triade]])

- [[wiki/Vertraulichkeit\|Vertraulichkeit]]: Nur Berechtigte können Daten lesen
- [[wiki/Integrität\|Integrität]]: Daten sind unverändert und korrekt
- [[wiki/Verfügbarkeit\|Verfügbarkeit]]: Systeme sind erreichbar, wenn gebraucht
- [[wiki/Authentizität\|Authentizität]]: Identität ist nachweisbar

## [[wiki/Firewall 1\|Firewall 1]]

Eine digitale "Brandschutzmauer":

### Arten von Firewalls

- [[wiki/Paketfilter\|Paketfilter]]: Prüft IP-Adressen und Ports
- [[wiki/Stateful Packet Inspection\|Stateful Packet Inspection]]: Merkt sich Verbindungen
- [[wiki/Application Firewall\|Application Firewall]]: Analysiert Anwendungsdaten

### Firewall-Strategien

- [[wiki/Whitelisting\|Whitelisting]]: Alles gesperrt, nur Erlaubtes durch
- [[wiki/Blacklisting\|Blacklisting]]: Alles offen, nur Bekannt-Gefährliches gesperrt

### [[wiki/ACL\|ACL]] (Access Control Lists)

Regeln, die definieren: Wer darf was?

### [[wiki/DMZ\|DMZ]] (Demilitarized Zone)

Ein spezielles Netzwerksegment für Server, die sowohl vom [[wiki/LAN\|LAN]] als auch vom Internet erreichbar sein müssen (Webserver, Mailserver).

# XII. WLAN und Funktechnologien

---

> Kabel sind praktisch, aber manchmal braucht man Bewegungsfreiheit. [[wiki/WLAN\|WLAN]] und andere Funktechnologien machen Mobilität möglich.

## [[wiki/WLAN\|WLAN]]/[[WiFi\|WiFi]]

### Modi

- [[wiki/Infrastrukturmodus\|Infrastrukturmodus]]: Mit [[Access Point\|Access Point]]
- [[wiki/Ad-Hoc-Modus\|Ad-Hoc-Modus]]: Direkte Geräteverbindung

### Sicherheit

- [[wiki/WPA2\|WPA2]]: Aktueller Standard mit [[wiki/AES\|AES]]
- [[wiki/PSK\|PSK]]: Pre-Shared Key
- [[wiki/IEEE 802.1x\|IEEE 802.1x]]: Enterprise-Authentifizierung

### [[wiki/Beamforming\|Beamforming]]

Intelligente Antennen-Technik: Fokussiert das Signal auf den Client statt es in alle Richtungen zu senden.

## Andere Funktechnologien

### [[wiki/RFID\|RFID]]

Automatische Identifikation durch Radiowellen:

- [[wiki/Passive Transponder\|Passive Transponder]]: Keine eigene Batterie
- [[wiki/Aktive Transponder\|Aktive Transponder]]: Mit Batterie, größere Reichweite

### [[wiki/Bluetooth\|Bluetooth]]

Kurzstrecken-Kommunikation im 2,4 GHz Band:

- [[wiki/Piconet\|Piconet]]: Bis zu 8 Geräte
- [[wiki/Scatternet\|Scatternet]]: Mehrere verbundene Piconets
- [[wiki/Frequency-Hopping\|Frequency-Hopping]]: Schneller Kanalwechsel gegen Störungen

# XIII. Speichertechnologien und Datensicherung

---

> Daten sind das wertvollste Gut eines Unternehmens. Wie schützt man sie vor Verlust? Durch kluge [[Speichertechnologien\|Speichertechnologien]] und durchdachte [[wiki/Backup-Strategien\|Backup-Strategien]].

## [[wiki/RAID\|RAID]]-Systeme

Mehrere Festplatten arbeiten zusammen für mehr Sicherheit oder Performance:

### Wichtige RAID-Level

- [[wiki/RAID 0\|RAID 0]]: Striping - schnell, aber keine Sicherheit
- [[wiki/RAID 1\|RAID 1]]: Mirroring - hohe Sicherheit, halbe Kapazität
- [[wiki/RAID 5\|RAID 5]]: Striping mit Parität - guter Kompromiss
- [[wiki/RAID 6\|RAID 6]]: Doppelte Parität - sehr sicher
- [[wiki/RAID 10\|RAID 10]]: Kombination aus RAID 1 und 0

### Implementation

- [[wiki/Hardware-RAID\|Hardware-RAID]]: Eigener Controller, hohe Performance
- [[wiki/Software-RAID\|Software-RAID]]: Über Betriebssystem, günstig
- [[wiki/Hybrid-RAID\|Hybrid-RAID]]: Mischung beider Ansätze

## [[wiki/Backup-Strategien\|Backup-Strategien]]

### Arten von Backups

- [[wiki/Vollsicherung\|Vollsicherung]]: Alle Daten (langsam, aber vollständig)
- [[wiki/Inkrementelle Sicherung\|Inkrementelle Sicherung]]: Nur Änderungen seit letztem Backup
- [[wiki/Differentielle Sicherung\|Differentielle Sicherung]]: Änderungen seit letzter Vollsicherung

### [[wiki/3-2-1-Regel\|3-2-1-Regel]]

- **3** Kopien der wichtigen Daten
- **2** verschiedene Speichermedien
- **1** Kopie extern/offline

### Was ist **kein** Backup?

- [[wiki/Wiederherstellungspunkte\|Wiederherstellungspunkte]]
- Lokale [[wiki/Snapshots\|Snapshots]]
- [[RAID-Systeme\|RAID-Systeme]] (schützen nicht vor Löschung/Korruption)

# XIV. Verfügbarkeit und USV

---

> Was nützt das beste Netzwerk, wenn es bei jedem Stromausfall zusammenbricht? [[wiki/Hochverfügbarkeit\|Hochverfügbarkeit]] und [[USV-Systeme\|USV-Systeme]] sorgen dafür, dass kritische Systeme immer laufen.

## [[wiki/Verfügbarkeit\|Verfügbarkeit]]

Berechnung: (Betriebszeit × 100%) / Gesamtzeit

### [[wiki/Verfügbarkeitsklassen\|Verfügbarkeitsklassen]]

- [[VK 3\|VK 3]]: 99,99% = max. 53 Minuten Ausfall pro Jahr
- [[wiki/Hochverfügbarkeit\|Hochverfügbarkeit]]: 99,9% oder höher

### Maßnahmen für hohe Verfügbarkeit

- [[wiki/Redundanz\|Redundanz]]: Mehrere Komponenten als Backup
- [[wiki/Failover\|Failover]]: Automatischer Wechsel bei Ausfall
- [[wiki/Monitoring\|Monitoring]]: Früherkennung von Problemen
- [[Wartung\|Wartung]]: Regelmäßige Instandhaltung

## [[wiki/USV\|USV]] (Unterbrechungsfreie Stromversorgung)

Wie ein Notstromaggregat, nur für IT-Geräte:

### USV-Klassen

1. [[wiki/VFI\|VFI]] (Online-USV): Immer aktiv, keine Umschaltzeit
2. [[wiki/VI\|VI]] (Line-Interactive): Bei Problemen aktiv, kurze Umschaltzeit
3. [[wiki/VFD\|VFD]] (Offline): Nur bei Ausfall aktiv, längere Umschaltzeit

### Dimensionierung

Wichtige Werte:

- [[wiki/Scheinleistung\|Scheinleistung]] (VA)
- [[wiki/Wirkleistung\|Wirkleistung]] (W)
- [[wiki/Unterstützungszeit\|Unterstützungszeit]]
- [[wiki/Akkulaufzeit\|Akkulaufzeit]]

# XV. Cloud-Computing und moderne IT-Infrastruktur

---

> Eigene Server sind teuer und aufwendig. [[Cloud-Computing\|Cloud-Computing]] verspricht: Miete statt kaufen, skaliere nach Bedarf. Aber was sind die Unterschiede?

## Cloud-Servicemodelle

### [[wiki/IaaS\|IaaS]] (Infrastructure as a Service)

Du bekommst: Virtuelle Server, Speicher, Netzwerk Du kümmerst dich um: Betriebssystem, Anwendungen, Daten

**Vorteile:** Skalierbar, wenig Wartung, geringe Anfangsinvestition **Nachteile:** Anbieter-Abhängigkeit, Online-Abhängigkeit

### [[wiki/PaaS\|PaaS]] (Platform as a Service)

Du bekommst: Komplette Entwicklungsumgebung Du kümmerst dich um: Nur deine Anwendung

**Vorteile:** Weniger Programmieraufwand, Fokus auf Entwicklung **Nachteile:** Architektur-Vorgaben, weniger Kontrolle

### [[wiki/SaaS\|SaaS]] (Software as a Service)

Du bekommst: Fertige Software (Gmail, Office 365) Du kümmerst dich um: Nur die Nutzung

**Vorteile:** Keine Administration, einfache Abrechnung **Nachteile:** Wenig Anpassung, Anbieter-Bindung

## Moderne Infrastrukturen

### [[wiki/Rechenzentren\|Rechenzentren]]

- [[wiki/On-Premise\|On-Premise]]: Eigene Server im Haus
- [[wiki/Off-Premise\|Off-Premise]]: Externe Rechenzentren
- [[wiki/Colocation\|Colocation]]: Eigene Hardware in fremdem Rechenzentrum

### Client-Technologien

- [[wiki/Fat Client\|Fat Client]]: Vollständiger Computer
- [[wiki/Thin Client\|Thin Client]]: Nutzt entfernte Rechenleistung
- [[wiki/BYOD\|BYOD]]: Bring Your Own Device

---
