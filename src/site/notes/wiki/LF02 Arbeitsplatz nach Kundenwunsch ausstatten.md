---
{"dg-publish":true,"permalink":"/wiki/lf-02-arbeitsplatz-nach-kundenwunsch-ausstatten/","tags":["ausbildung/gfn","ausbildung/pruefung","meta/status"],"noteIcon":"","updated":"2026-07-19T03:56:26.832+02:00","dg-note-properties":{"tags":["ausbildung/gfn","ausbildung/pruefung","meta/status"],"links":["https://lernplattform.gfn.de/course/view.php?id=12341"],"reference":null,"path":["GFN"],"created":"2024-03-11 08:55"}}
---

> Du kannst gerne unter [meinem GitHub](https://github.com/U-L-M-S/digital-garden) mithelfen.

> Das sind die IT-Grundlagen für Fachinformatiker - alles was du für die Prüfung und den Job brauchst.
> 
> > Von Hardware bis [[wiki/Netzwerk\|Netzwerk]], von [[wiki/Software\|Software]] bis [[wiki/Projektmanagement\|Projektmanagement]] - die wichtigsten Konzepte einfach erklärt.

# I. Computer-Grundlagen
> Jeder Computer funktioniert nach dem [[wiki/EVA-Prinzip\|EVA-Prinzip]] - wie eine einfache Maschine die Sachen annimmt, verarbeitet und wieder rausgibt.

## [[wiki/EVA-Prinzip\|EVA-Prinzip]]:

- **Eingabe** - Daten rein (Tastatur, Maus)
- **Verarbeitung** - Computer rechnet
- **Ausgabe** - Ergebnis raus (Bildschirm, Drucker)

## Die 5 wichtigsten Teile:

- Prozessor - das Gehirn, macht alle Rechnungen
- [[wiki/RAM\|RAM]] - kurzzeitiges Gedächtnis
- Speicher - dauerhaftes Gedächtnis
- Eingabe und Ausgabe - Kommunikation mit dir

# II. Hardware
> Hardware sind alle Teile die du anfassen kannst - das Innenleben deines Computers.

## [[wiki/CPU\|CPU]] (Prozessor)
> Das Herzstück - führt alle Befehle aus wie ein sehr schneller Rechner.

### Wichtige Teile:

- [[wiki/Steuerwerk\|Steuerwerk]] - der Chef, sagt was gemacht wird
- [[wiki/Rechenwerk\|Rechenwerk]] - macht die Mathematik
- [[wiki/Cache\|Cache]] - Notizzettel für oft gebrauchte Sachen

## [[wiki/RAM\|RAM]] (Arbeitsspeicher)
> Wie dein Schreibtisch - je größer, desto mehr Programme kannst du gleichzeitig nutzen.

- [[wiki/DDR-RAM\|DDR-RAM]] - verschiedene Geschwindigkeiten
- Alles weg wenn Strom aus ist ([[volatil\|volatil]])
- [[wiki/ECC-Speicher\|ECC-Speicher]] - kann Fehler korrigieren (für [[wiki/Server\|Server]])

## [[wiki/Mainboard\|Mainboard]]
> Wie die Straßen einer Stadt - verbindet alle Teile miteinander.

Wichtige Anschlüsse:

- [[wiki/Prozessorsockel\|Prozessorsockel]] - für die [[wiki/CPU\|CPU]]
- [[wiki/RAM-Steckplätze\|RAM-Steckplätze]] - für [[Arbeitsspeicher\|Arbeitsspeicher]]
- [[wiki/PCI-Slots\|PCI-Slots]] - für Erweiterungen

## [[wiki/Speicher\|Speicher]]

### [[wiki/HDD\|HDD]] vs [[wiki/SSD\|SSD]]:

- [[wiki/HDD\|HDD]] - günstig, langsam, mechanisch (wie Schallplatte)
- [[wiki/SSD\|SSD]] - schnell, teurer, elektronisch (wie USB-Stick)

# III. [[wiki/Netzwerk\|Netzwerk]]
> [[wiki/Netzwerk\|Netzwerk]]e verbinden Computer - wie Straßen zwischen Häusern.

## [[wiki/Switch\|Switch]] und [[wiki/Router\|Router]]

- [[wiki/Switch\|Switch]] - Verteiler im gleichen [[wiki/Netzwerk\|Netzwerk]]
- [[wiki/Router\|Router]] - Wegweiser zwischen verschiedenen [[wiki/Netzwerk\|Netzwerk]]en

## [[wiki/IP-Adresse\|IP-Adresse]]n
> Jeder Computer braucht eine Adresse - wie Hausnummern.

### [[wiki/IPv4\|IPv4]] vs [[wiki/IPv6\|IPv6]]:

- [[wiki/IPv4\|IPv4]]: 192.168.1.1 (4 Zahlen, wird knapp)
- [[wiki/IPv6\|IPv6]]: 2001:db8::1 (viel länger, reicht ewig)

## [[wiki/Subnetting\|Subnetting]]
> Große [[wiki/Netzwerk\|Netzwerk]]e in kleinere aufteilen - wie Stadtteile.

$$2^{\text{Hostbits}} - 2 = \text{nutzbare Adressen}$$

Beispiel /24: $2^8 - 2 = 254$ Computer möglich

## [[wiki/DHCPv4\|DHCPv4]]
> Automatische [[wiki/IP-Adresse\|IP-Adresse]]n-Vergabe - wie Nummern ziehen im Amt.

[[wiki/DHCP-Prozess\|DHCP-Prozess]]:

1. Computer: "Ich brauche eine [[wiki/IP-Adresse\|IP-Adresse]]"
2. [[wiki/DHCP-Server\|DHCP-Server]]: "Hier ist 192.168.1.100"
3. Computer: "Danke!"
4. Server: "Gehört dir für 24 Stunden"

# IV. [[wiki/Betriebssystem\|Betriebssystem]]
> [[wiki/Betriebssystem\|Betriebssystem]] ist der Chef im Computer - verwaltet alles.

## Aufgaben:

- [[wiki/Speicherverwaltung\|Speicherverwaltung]] - wer bekommt wie viel [[wiki/RAM\|RAM]]
- [[wiki/Prozessverwaltung\|Prozessverwaltung]] - welches Programm läuft wann
- [[wiki/Dateiverwaltung\|Dateiverwaltung]] - Ordnung bei Dateien
- [[wiki/Geräteverwaltung\|Geräteverwaltung]] - spricht mit Hardware

## [[wiki/BIOS\|BIOS]]/[[wiki/UEFI\|UEFI]]
> Das erste Programm beim Start - prüft ob alles da ist.

[[wiki/Power On Self Test\|Power On Self Test]]-Check:

1. [[wiki/CPU\|CPU]] da?
2. [[wiki/RAM\|RAM]] funktioniert?
3. Festplatte erreichbar?
4. [[wiki/Betriebssystem\|Betriebssystem]] starten

# V. IT-Sicherheit
> Schützt deine Daten vor bösen Menschen und Unfällen.

## [[wiki/CIA-Triade\|CIA-Triade]]:

- **[[wiki/Vertraulichkeit\|Vertraulichkeit]]** - nur du siehst deine Daten
- **[[wiki/Integrität\|Integrität]]** - Daten sind korrekt und unverändert
- **[[wiki/Verfügbarkeit\|Verfügbarkeit]]** - du kommst immer an deine Daten

## Häufige Gefahren:

- [[wiki/Malware\|Malware]] - böse Software
- [[wiki/Phishing\|Phishing]] - gefälschte E-Mails
- [[wiki/DOS Attack\|DOS Attack]] - Website überlasten
- [[wiki/DDOS Attack\|DDOS Attack]] - Wie bei [[wiki/DOS Attack\|DOS Attack]], aber mit mehrere Rechner
# VI. [[wiki/Projektmanagement\|Projektmanagement]]
> Projekte sind einmalige Aufgaben mit Ziel und Deadline.

## [[wiki/Lastenheft\|Lastenheft]] vs [[wiki/Pflichtenheft\|Pflichtenheft]]:

- [[wiki/Lastenheft\|Lastenheft]] - **WAS** und **WARUM**
- [[wiki/Pflichtenheft\|Pflichtenheft]] - **WIE** und **WOMIT**

## [[wiki/Projektmanagement#Merkmalen\|Projektmanagement#Merkmalen]]:

- Einmaligkeit - nicht Routine
- Zeitliche Begrenzung - hat Ende
- Komplexität - viele Teile hängen zusammen

# VII. Kalkulation
> Preise berechnen damit Firma Gewinn macht.

## [[wiki/Handelskalkulation\|Handelskalkulation]]:

```
Einkaufspreis
- Rabatte
+ Bezugskosten  
= Bezugspreis
+ Handlungskosten
+ Gewinn
= Verkaufspreis
```

## [[wiki/TCO\|TCO]] (Total Cost of Ownership)
> Alle Kosten über die komplette Zeit.

- Kaufpreis + Betrieb + Wartung + Entsorgung = [[wiki/TCO\|TCO]]

## [[wiki/Rentabilität\|Rentabilität]] (ROI-Return of Investiment)

$$ \text{ROI} = \frac{\text{Gewinn}}{\text{Investition}} \times 100\% $$

# VIII. [[wiki/Cloud Computing\|Cloud Computing]]
> Computer und Software aus dem Internet mieten statt kaufen.

## Service-Arten:

- [[wiki/SaaS\|SaaS]] - Software mieten (wie Netflix)
- [[wiki/PaaS\|PaaS]] - Entwicklungsumgebung mieten
- [[wiki/IaaS\|IaaS]] - Computer mieten

## Cloud-Typen:

- Public Cloud - für alle (Amazon, Google)
- Private Cloud - nur für dich
- Hybrid Cloud - Mischung

# IX. [[wiki/Beschaffung\|Beschaffung]]
> Sachen für die Firma einkaufen - clever und günstig.

## [[wiki/ABC-Analyse\|ABC-Analyse]]:

- **A-Artikel** - 20% der Artikel, 80% des Wertes (wichtig!)
- **B-Artikel** - 30% der Artikel, 10% des Wertes
- **C-Artikel** - 50% der Artikel, 10% des Wertes (unwichtig)

## Angebotsvergleich:

Nicht nur Preis wichtig:

- Qualität
- Lieferzeit
- Service
- Garantie

# X. [[Verträge\|Verträge]] und Recht
> Regeln zwischen Firmen - was jeder machen muss.

## Kaufvertrag:

- Verkäufer gibt Ware
- Käufer zahlt Geld
- Beide happy

## Gewährleistung:

- Verbraucher - 2 Jahre Zeit für Reklamation
- Handelskauf - sofort prüfen und meckern

# XI. [[wiki/Arbeitssicherheit\|Arbeitssicherheit]]
> Nicht verletzen bei der Arbeit.

## [[wiki/Elektrische Sicherheit\|Elektrische Sicherheit]] - 5 Regeln:

1. **Freischalten** - Strom aus
2. **Sichern** - Sicherung raus
3. **Spannungsfreiheit prüfen** - wirklich aus?
4. **Erden** - sicher machen
5. **Abdecken** - gefährliche Teile verstecken


> [!info] Diese Zusammenfassung basiert auf den Materialien von Herrn Thomas Hochgesang. Die Informationen und Konzepte wurden aus den von ihm bereitgestellten Lehrunterlagen und Vorlesungen entnommen. Alle Bilder, die hier gepostet wurden, stammen aus dem Buch [Westermann](https://www.westermann.de/reihe/ITBERUF2020/IT-Berufe?a=1) oder aus den PDF-Präsentationen von Herrn Thomas Hochgesang. Mein Ziel war es, die wesentlichen Punkte zusammenzufassen und die Kerninhalte verständlich darzustellen.