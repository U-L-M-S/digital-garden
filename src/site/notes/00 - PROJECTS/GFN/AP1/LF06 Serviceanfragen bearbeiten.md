---
{"dg-publish":true,"permalink":"/00-projects/gfn/ap-1/lf-06-serviceanfragen-bearbeiten/","tags":["GFN/LF06","inProgress"],"noteIcon":"","updated":"2025-10-22T21:44:46.000+02:00"}
---

![[IT-Berufe_Lernfelder_6-9_Westermann.pdf]]
> Du kannst gerne unter [meinem GitHub](https://github.com/U-L-M-S/digital-garden) mithelfen.

>Serviceanfragen bearbeiten ist das Herzstück vom IT-Service-Management. Du lernst hier, wie du als IT-Profi Anfragen strukturiert bearbeitest und Kunden zufrieden stellst.
> 
>>Das baut auf ITIL auf und zeigt dir die praktischen Tools und Methoden, die du täglich brauchst.

# I. Grundlagen der IT-Services

>IT-Service bedeutet einfach: Du hilfst anderen bei Computer-Problemen. Entweder machst du das selbst oder ein externer Dienstleister macht es für dich.
> 
>> Wichtig ist zu verstehen: Es gibt verschiedene Arten von Services - manche halten dein System am Laufen, andere bringen dich weiter.

---

## Service-Arten nach Zweck

### [[Run-the-Business-Leistungen\|Run-the-Business-Leistungen]]

> Das ist wie der Hausmeister - sorgt dafür, dass alles läuft wie gewohnt.

- **[[Rechenzentrumsbetrieb\|Rechenzentrumsbetrieb]]** - [[02 - RESOURCES/Notes/Server\|Server]] und [[02 - RESOURCES/Notes/Netzwerk\|Netzwerk]] am Leben halten
- **[[Outsourcing\|Outsourcing]]** - Jemand anderes macht deine IT-Arbeit

### [[Change-the-Business-Leistungen\|Change-the-Business-Leistungen]]

> Das ist wie der Architekt - baut was Neues und macht dich besser.

- **[[IT-Beratung\|IT-Beratung]]** - Experten sagen dir, wie du besser wirst
- **Software-Entwicklung** - Programmiert neue Tools nur für dich

## Service-Kanäle

|Kanal|Was passiert|Beispiel|
|---|---|---|
|**[[Helpdesk\|Helpdesk]]**|Telefon oder Online-Support|"Mein Drucker geht nicht"|
|**[[Live-Chat\|Live-Chat]]**|Direkt mit Mensch sprechen|WhatsApp für IT-Probleme|
|**[[Chat-Bot\|Chat-Bot]]**|Computer antwortet automatisch|"Passwort vergessen? Klick hier"|

# II. IT-Service-Management mit ITIL

> [[ITSM\|ITSM]] ist wie ein Kochbuch für IT-Services. [[ITIL\|ITIL]] ist das bekannteste Kochbuch davon.
> 
> > [[ITIL 4\|ITIL 4]] ist die neueste Version und fokussiert sich auf Wertschöpfung statt nur Prozesse.

---

## [[Service Value System\|Service Value System]]

> Das [[Service Value System\|Service Value System]] ist wie eine Fabrik - rein kommt ein Problem, raus kommt eine Lösung die dem Kunden hilft.

### [[ITIL 4\|ITIL 4]] Leitprinzipien:

- **Fokus auf Wertschöpfung** - Bringt es dem Kunden was?
- **Dort anfangen wo du bist** - Was funktioniert schon?
- **Iterative Weiterentwicklung** - Kleine Schritte, schnelles Feedback
- **Zusammenarbeit fördern** - Keine Einzelkämpfer
- **Ganzheitlich denken** - Das große Bild sehen
- **Einfach halten** - Nicht komplizierter als nötig
- **Optimieren und automatisieren** - Erst besser machen, dann automatisieren

## ITSM-Bereiche

### [[Service Strategy\|Service Strategy]]

> Der Plan: Was für Services willst du anbieten?

- Moderne Methoden wie [[Lean\|Lean]], [[Agile\|Agile]], [[DevOps\|DevOps]]
- [[Business-Relationship-Management\|Business-Relationship-Management]] - Gute Beziehung zu Kunden

### [[Service Design\|Service Design]]

> Das Design: Wie sollen die Services genau aussehen?

- **[[Service-Level Management\|Service-Level Management]]** - [[02 - RESOURCES/Notes/SLA\|SLA]]s definieren
- **[[Capacity Management\|Capacity Management]]** - Genug Power für alle
- **[[Availability Management\|Availability Management]]** - System läuft wenn gebraucht

### [[Service Transition\|Service Transition]]

> Der Umzug: Neue Services in den Live-Betrieb bringen.

- **[[Release Management\|Release Management]]** - Software-Updates kontrollieren
- **[[Configuration Management\|Configuration Management]]** - Was gehört zu was? ([[CMDB\|CMDB]])
- **[[Change Management\|Change Management]]** - Änderungen über [[RFC\|RFC]]s steuern

### [[Service Operation\|Service Operation]]

> Der Alltag: Services am Laufen halten.

- **[[Incident Management\|Incident Management]]** - Schnell Probleme lösen
- **[[Problem Management\|Problem Management]]** - Warum ist das passiert?
- **[[Infrastructure Monitoring\|Infrastructure Monitoring]]** - Computer überwachen Computer

# III. Supportmanagement in der Praxis

> Support ist wie eine Feuerwehr mit drei Ebenen - vom Erste-Hilfe-Kasten bis zum Notarzt.
> 
> > Jede Ebene hat ihre Aufgabe und leitet weiter wenn sie nicht helfen kann.

---

## Support-Level

### [[First-Level-Support\|First-Level-Support]]

> Die Rezeption - erste Anlaufstelle für alles.

- Löst **einfache Probleme** sofort
- **"Passwort zurücksetzen"**, **"Drucker ist aus"**
- Leitet komplexere Sachen weiter

### [[Second-Level-Support\|Second-Level-Support]]

> Die Spezialisten - können auch schwierige Sachen.

- **Fachexperten** für verschiedene Bereiche
- Lösen **komplexere technische Probleme**
- Schulen den [[First-Level-Support\|First-Level-Support]]

### [[Third-Level-Support\|Third-Level-Support]]

> Die Profis vom Hersteller - wenn gar nichts mehr geht.

- **Hersteller**, **Entwickler**, externe Experten
- Schwerwiegende technische Probleme
- Kein direkter Kundenkontakt

## Ticketsystem

> Ein Ticketsystem ist wie ein Briefkasten - jedes Problem bekommt eine Nummer und wird verfolgt bis es gelöst ist.

> [!tip] Vorteile
> 
> - Nichts geht verloren
> - Alle sehen den Status
> - Kategorisierung möglich
> - Nachverfolgung funktioniert

> [!warning] Nachteile
> 
> - Kostet Geld und Zeit
> - Manchmal langsamer als Telefonat
> - Muss erst eingerichtet werden

## Eskalation

> Wenn du nicht weiterkommst, gibst du das Problem nach oben weiter - das ist Eskalation.

### Arten:

- **Funktionale Eskalation** - An höheres Support-Level
- **Hierarchische Eskalation** - An den Chef, wenn es politisch wird

# IV. Serviceanfragen analysieren

> Jede Serviceanfrage muss analysiert werden wie ein Detektiv - Was ist passiert? Wer ist betroffen? Wie dringend ist es?
> 
> > Mit der richtigen Analyse löst du Probleme schneller und verhinderst dass sie nochmal passieren.

---

## Analyse-Schritte

### 1. Kategorisierung

> In welche Schublade gehört das Problem?

- **Hardware-Problem** - [[02 - RESOURCES/Notes/Server\|Server]], [[Drucker\|Drucker]], [[PC\|PC]]
- **Software-Problem** - [[Anwendung\|Anwendung]], [[02 - RESOURCES/Notes/Betriebssystem\|Betriebssystem]]
- **[[02 - RESOURCES/Notes/Netzwerk\|Netzwerk]]-Problem** - [[02 - RESOURCES/Notes/Router\|Router]], [[02 - RESOURCES/Notes/Switch\|Switch]], Internet

### 2. Klassifizierung

> Wie groß ist das Problem?

- **Typ**: Was für Problem ist das genau?
- **Umfang**: Wie viele Leute sind betroffen?
- **Betroffene Systeme**: Welche [[02 - RESOURCES/Notes/Server\|Server]] oder Services?

### 3. Priorisierung

> Wie schnell muss es gelöst werden?

|Dringlichkeit|Auswirkung|Beispiel|
|---|---|---|
|Hoch|Hoch|[[02 - RESOURCES/Notes/Server\|Server]] komplett down|
|Hoch|Niedrig|Ein PC geht nicht|
|Niedrig|Hoch|Drucker druckt langsam|

## Ursachenanalyse

### 5-Why-Methode

> Frag fünfmal "Warum?" um die echte Ursache zu finden.

**Beispiel:**

1. Warum ist der [[02 - RESOURCES/Notes/Server\|Server]] down? - Stromausfall
2. Warum war Stromausfall? - [[02 - RESOURCES/Notes/USV\|USV]] defekt
3. Warum war [[02 - RESOURCES/Notes/USV\|USV]] defekt? - Batterie leer
4. Warum war Batterie leer? - Wartung vergessen
5. Warum Wartung vergessen? - Kein Wartungsplan

### [[DMAIC-Zyklus\|DMAIC-Zyklus]]

> Systematische Problemlösung in 5 Schritten.

1. **Define** - Problem genau definieren
2. **Measure** - Aktuellen Zustand messen
3. **Analyse** - Hauptursachen finden
4. **Improve** - Lösungen entwickeln
5. **Control** - Überwachen dass es funktioniert

# V. Kommunikation und Prozesse

> Gute Kommunikation ist die halbe Miete - du kannst das beste technische Wissen haben, aber wenn du es nicht rüberbringst, hilft es nichts.
> 
> > Besonders bei Serviceanfragen musst du mit frustrierten Menschen umgehen können.

---



## [[RACI-Matrix\|RACI-Matrix]]

> Wer macht was? Die [[RACI-Matrix\|RACI-Matrix]] sagt es dir.

- **R - Responsible** - Macht die Arbeit
- **A - Accountable** - Ist verantwortlich wenn's schief geht
- **C - Consulted** - Wird um Rat gefragt
- **I - Informed** - Wird informiert über Fortschritt

## Kommunikationsarten

### Synchron vs. Asynchron

- **Synchron** - Gleichzeitig (Telefon, [[Live-Chat\|Live-Chat]])
- **Asynchron** - Zeitversetzt (E-Mail, [[02 - RESOURCES/Notes/Ticketsystem\|Ticketsystem]])

### Deeskalation

> [!important] Bei wütenden [[02 - RESOURCES/Notes/Kunden\|Kunden]]
> 
> - **Aktives Zuhören** - Lass sie ausreden
> - **Empathie zeigen** - "Das verstehe ich"
> - **Ruhe bewahren** - Nicht persönlich nehmen
> - **Lösungsorientiert** - Was können wir tun?

## [[Eisenhower-Prinzip\|Eisenhower-Prinzip]]

> Wie entscheidest du was zuerst gemacht wird?

||Wichtig|Nicht wichtig|
|---|---|---|
|**Dringend**|Sofort machen|Delegieren|
|**Nicht dringend**|Terminieren|Ignorieren|

# VI. Praktische Tools und Techniken

> Hier kommen die konkreten Werkzeuge die du täglich brauchst - von [[PXE-Boot\|PXE-Boot]] für Installationen bis zu rechtlichen Grundlagen.

---

## [[PXE-Boot\|PXE-Boot]]

> [[PXE\|PXE]] ist wie ein Fernseher - du schaltest den Computer an und er holt sich sein [[02 - RESOURCES/Notes/Betriebssystem\|Betriebssystem]] aus dem [[02 - RESOURCES/Notes/Netzwerk\|Netzwerk]].

### Anwendung:

- **Mass-Deployment** - 100 [[PC\|PC]]s gleichzeitig installieren
- **Hardware-Diagnose** - Testen ohne Festplatte
- **Live-Systeme** - Computer ohne eigenes [[02 - RESOURCES/Notes/Betriebssystem\|OS]] starten

### Prozess:

1. Computer startet und sucht [[02 - RESOURCES/Notes/DHCP-Server\|DHCP-Server]]
2. [[02 - RESOURCES/Notes/DHCP-Server\|DHCP-Server]] gibt [[02 - RESOURCES/Notes/IP-Adresse\|IP-Adresse]] und Boot-Info
3. [[TFTP-Server\|TFTP-Server]] schickt Boot-Image
4. Computer startet das Image

> [!warning] Sicherheit beachten [[PXE\|PXE]] ist unverschlüsselt - nur in sicheren Netzwerken nutzen!

## Service-Verträge

### [[02 - RESOURCES/Notes/SLA\|SLA]] (Service Level Agreement)

> Ein [[02 - RESOURCES/Notes/SLA\|SLA]] ist ein Vertrag der sagt: "So gut sind wir, und wenn nicht, gibt's Geld zurück."

**Typische Inhalte:**

- **Verfügbarkeit** - 99,9% Uptime
- **Reaktionszeiten** - Innerhalb 4 Stunden Antwort
- **Support-Zeiten** - Mo-Fr 8-18 Uhr

### [[OLA\|OLA]] vs. [[UC\|UC]]

- **[[OLA\|OLA]]** - Vereinbarung zwischen IT-Abteilungen
- **[[UC\|UC]]** - Vertrag mit externen Dienstleistern

## Rechtliche Grundlagen

### [[02 - RESOURCES/Notes/DSGVO\|DSGVO]] und Datenschutz

> Bei Serviceanfragen kommen oft persönliche Daten vor - die musst du schützen.

- **Auftragsverarbeitung** - Schriftlicher Vertrag nötig
- **Technische Maßnahmen** - [[02 - RESOURCES/Notes/Verschlüsselung\|Verschlüsselung]], Zugriffskontrolle
- **Löschpflicht** - Daten nach Vertragsende löschen

### Softwarelizenzen

- **Netzwerklizenzen** - Gleichzeitige Nutzer begrenzt
- **Rechnergebunden** - An bestimmten [[PC\|PC]] gebunden
- **Benutzergebunden** - An Person gebunden

> [!tip] Praxistipp Immer dokumentieren welche Lizenzen wo installiert sind - sonst gibt's teure Überraschungen!