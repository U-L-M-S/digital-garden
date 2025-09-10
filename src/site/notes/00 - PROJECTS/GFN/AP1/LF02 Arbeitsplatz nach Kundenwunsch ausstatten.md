---
{"dg-publish":true,"permalink":"/00-projects/gfn/ap-1/lf-02-arbeitsplatz-nach-kundenwunsch-ausstatten/","tags":["GFN/LF02","GFN/prüfungsrelevant/AP1","inProgress"],"noteIcon":"","updated":"2025-09-05T10:37:28.000+02:00"}
---

> Das sind die IT-Grundlagen für Fachinformatiker - alles was du für die Prüfung und den Job brauchst.
> 
> > Von [[Hardware\|Hardware]] bis [[02 - RESOURCES/Notes/Netzwerk\|Netzwerk]], von [[02 - RESOURCES/Notes/Software\|Software]] bis [[02 - RESOURCES/Notes/Projektmanagement\|Projektmanagement]] - die wichtigsten Konzepte einfach erklärt.

# I. Computer-Grundlagen
> Jeder Computer funktioniert nach dem [[02 - RESOURCES/Notes/EVA-Prinzip\|EVA-Prinzip]] - wie eine einfache Maschine die Sachen annimmt, verarbeitet und wieder rausgibt.

## [[02 - RESOURCES/Notes/EVA-Prinzip\|EVA-Prinzip]]:

- **Eingabe** - Daten rein (Tastatur, Maus)
- **Verarbeitung** - Computer rechnet
- **Ausgabe** - Ergebnis raus (Bildschirm, Drucker)

## Die 5 wichtigsten Teile:

- Prozessor - das Gehirn, macht alle Rechnungen
- [[02 - RESOURCES/Notes/RAM\|RAM]] - kurzzeitiges Gedächtnis
- Speicher - dauerhaftes Gedächtnis
- Eingabe und Ausgabe - Kommunikation mit dir

# II. [[Hardware\|Hardware]]
> [[Hardware\|Hardware]] sind alle Teile die du anfassen kannst - das Innenleben deines Computers.

## [[Prozessor\|Prozessor]] (CPU)
> Das Herzstück - führt alle Befehle aus wie ein sehr schneller Rechner.

### Wichtige Teile:

- [[Steuerwerk\|Steuerwerk]] - der Chef, sagt was gemacht wird
- [[Rechenwerk\|Rechenwerk]] - macht die Mathematik
- [[02 - RESOURCES/Notes/Cache\|Cache]] - Notizzettel für oft gebrauchte Sachen

## [[Arbeitsspeicher\|Arbeitsspeicher]] (RAM)
> Wie dein Schreibtisch - je größer, desto mehr Programme kannst du gleichzeitig nutzen.

- [[DDR-RAM\|DDR-RAM]] - verschiedene Geschwindigkeiten
- Alles weg wenn Strom aus ist ([[volatil\|volatil]])
- [[ECC-Speicher\|ECC-Speicher]] - kann Fehler korrigieren (für [[02 - RESOURCES/Notes/Server\|Server]])

## [[Mainboard\|Mainboard]]
> Wie die Straßen einer Stadt - verbindet alle Teile miteinander.

Wichtige Anschlüsse:

- [[Prozessorsockel\|Prozessorsockel]] - für die [[CPU\|CPU]]
- [[RAM-Steckplätze\|RAM-Steckplätze]] - für [[Arbeitsspeicher\|Arbeitsspeicher]]
- [[PCI-Slots\|PCI-Slots]] - für Erweiterungen

## [[Speicher\|Speicher]]

### [[02 - RESOURCES/Notes/HDD\|HDD]] vs [[02 - RESOURCES/Notes/SSD\|SSD]]:

- [[02 - RESOURCES/Notes/HDD\|HDD]] - günstig, langsam, mechanisch (wie Schallplatte)
- [[02 - RESOURCES/Notes/SSD\|SSD]] - schnell, teurer, elektronisch (wie USB-Stick)

# III. [[02 - RESOURCES/Notes/Netzwerk\|Netzwerk]]
> [[02 - RESOURCES/Notes/Netzwerk\|Netzwerk]]e verbinden Computer - wie Straßen zwischen Häusern.

## [[02 - RESOURCES/Notes/Switch\|Switch]] und [[02 - RESOURCES/Notes/Router\|Router]]

- [[02 - RESOURCES/Notes/Switch\|Switch]] - Verteiler im gleichen [[02 - RESOURCES/Notes/Netzwerk\|Netzwerk]]
- [[02 - RESOURCES/Notes/Router\|Router]] - Wegweiser zwischen verschiedenen [[02 - RESOURCES/Notes/Netzwerk\|Netzwerk]]en

## [[02 - RESOURCES/Notes/IP-Adresse\|IP-Adresse]]n
> Jeder Computer braucht eine Adresse - wie Hausnummern.

### [[02 - RESOURCES/Notes/IPv4\|IPv4]] vs [[02 - RESOURCES/Notes/IPv6\|IPv6]]:

- [[02 - RESOURCES/Notes/IPv4\|IPv4]]: 192.168.1.1 (4 Zahlen, wird knapp)
- [[02 - RESOURCES/Notes/IPv6\|IPv6]]: 2001:db8::1 (viel länger, reicht ewig)

## [[02 - RESOURCES/Notes/Subnetting\|Subnetting]]
> Große [[02 - RESOURCES/Notes/Netzwerk\|Netzwerk]]e in kleinere aufteilen - wie Stadtteile.

$$2^{\text{Hostbits}} - 2 = \text{nutzbare Adressen}$$

Beispiel /24: $2^8 - 2 = 254$ Computer möglich

## [[02 - RESOURCES/Notes/DHCP\|DHCP]]
> Automatische [[02 - RESOURCES/Notes/IP-Adresse\|IP-Adresse]]n-Vergabe - wie Nummern ziehen im Amt.

[[02 - RESOURCES/Notes/DHCP-Prozess\|DHCP-Prozess]]:

1. Computer: "Ich brauche eine [[02 - RESOURCES/Notes/IP-Adresse\|IP-Adresse]]"
2. [[02 - RESOURCES/Notes/DHCP-Server\|DHCP-Server]]: "Hier ist 192.168.1.100"
3. Computer: "Danke!"
4. Server: "Gehört dir für 24 Stunden"

# IV. [[Betriebssystem\|Betriebssystem]]
> [[Betriebssystem\|Betriebssystem]] ist der Chef im Computer - verwaltet alles.

## Aufgaben:

- [[Speicherverwaltung\|Speicherverwaltung]] - wer bekommt wie viel [[02 - RESOURCES/Notes/RAM\|RAM]]
- [[Prozessverwaltung\|Prozessverwaltung]] - welches Programm läuft wann
- [[Dateiverwaltung\|Dateiverwaltung]] - Ordnung bei Dateien
- [[Geräteverwaltung\|Geräteverwaltung]] - spricht mit [[Hardware\|Hardware]]

## [[BIOS\|BIOS]]/[[UEFI\|UEFI]]
> Das erste Programm beim Start - prüft ob alles da ist.

[[POST\|POST]]-Check:

1. [[Prozessor\|Prozessor]] da?
2. [[02 - RESOURCES/Notes/RAM\|RAM]] funktioniert?
3. [[Festplatte\|Festplatte]] erreichbar?
4. [[Betriebssystem\|Betriebssystem]] starten

# V. [[IT-Sicherheit\|IT-Sicherheit]]
> Schützt deine Daten vor bösen Menschen und Unfällen.

## [[CIA-Modell\|CIA-Modell]]:

- **[[02 - RESOURCES/Notes/Vertraulichkeit\|Vertraulichkeit]]** - nur du siehst deine Daten
- **[[02 - RESOURCES/Notes/Integrität\|Integrität]]** - Daten sind korrekt und unverändert
- **[[02 - RESOURCES/Notes/Verfügbarkeit\|Verfügbarkeit]]** - du kommst immer an deine Daten

## Häufige Gefahren:

- [[Malware\|Malware]] - böse Software
- [[02 - RESOURCES/Notes/Phishing\|Phishing]] - gefälschte E-Mails
- [[02 - RESOURCES/Notes/DOS Attack\|DOS Attack]] - Website überlasten
- [[02 - RESOURCES/Notes/DDOS Attack\|DDOS Attack]] - Wie bei [[02 - RESOURCES/Notes/DOS Attack\|DOS Attack]], aber mit mehrere Rechner
# VI. [[02 - RESOURCES/Notes/Projektmanagement\|Projektmanagement]]
> Projekte sind einmalige Aufgaben mit Ziel und Deadline.

## [[02 - RESOURCES/Notes/Lastenheft\|Lastenheft]] vs [[02 - RESOURCES/Notes/Pflichtenheft\|Pflichtenheft]]:

- [[02 - RESOURCES/Notes/Lastenheft\|Lastenheft]] - **WAS** und **WARUM**
- [[02 - RESOURCES/Notes/Pflichtenheft\|Pflichtenheft]] - **WIE** und **WOMIT**

## [[02 - RESOURCES/Notes/Projektmanagement#Merkmalen\|Projektmanagement#Merkmalen]]:

- Einmaligkeit - nicht Routine
- Zeitliche Begrenzung - hat Ende
- Komplexität - viele Teile hängen zusammen

# VII. Kalkulation
> Preise berechnen damit Firma Gewinn macht.

## [[Handelskalkulation\|Handelskalkulation]]:

```
Einkaufspreis
- Rabatte
+ Bezugskosten  
= Bezugspreis
+ Handlungskosten
+ Gewinn
= Verkaufspreis
```

## [[TCO\|TCO]] (Total Cost of Ownership)
> Alle Kosten über die komplette Zeit.

- Kaufpreis + Betrieb + Wartung + Entsorgung = [[TCO\|TCO]]

## [[ROI\|ROI]] (Return on Investment)

$$ \text{ROI} = \frac{\text{Gewinn}}{\text{Investition}} \times 100\% $$

# VIII. [[02 - RESOURCES/Notes/Cloud Computing\|Cloud Computing]]
> Computer und Software aus dem Internet mieten statt kaufen.

## Service-Arten:

- [[02 - RESOURCES/Notes/SaaS\|SaaS]] - Software mieten (wie Netflix)
- [[02 - RESOURCES/Notes/PaaS\|PaaS]] - Entwicklungsumgebung mieten
- [[02 - RESOURCES/Notes/IaaS\|IaaS]] - Computer mieten

## Cloud-Typen:

- [[Public Cloud\|Public Cloud]] - für alle (Amazon, Google)
- [[Private Cloud\|Private Cloud]] - nur für dich
- [[Hybrid Cloud\|Hybrid Cloud]] - Mischung

# IX. [[02 - RESOURCES/Notes/Beschaffung\|Beschaffung]]
> Sachen für die Firma einkaufen - clever und günstig.

## [[ABC-Analyse\|ABC-Analyse]]:

- **A-Artikel** - 20% der Artikel, 80% des Wertes (wichtig!)
- **B-Artikel** - 30% der Artikel, 10% des Wertes
- **C-Artikel** - 50% der Artikel, 10% des Wertes (unwichtig)

## [[Angebotsvergleich\|Angebotsvergleich]]:

Nicht nur Preis wichtig:

- [[Qualität\|Qualität]]
- [[Lieferzeit\|Lieferzeit]]
- [[Service\|Service]]
- [[Garantie\|Garantie]]

# X. [[Verträge\|Verträge]] und Recht
> Regeln zwischen Firmen - was jeder machen muss.

## [[Kaufvertrag\|Kaufvertrag]]:

- Verkäufer gibt Ware
- Käufer zahlt Geld
- Beide happy

## [[Gewährleistung\|Gewährleistung]]:

- [[Verbraucher\|Verbraucher]] - 2 Jahre Zeit für Reklamation
- [[Handelskauf\|Handelskauf]] - sofort prüfen und meckern

# XI. [[Arbeitssicherheit\|Arbeitssicherheit]]
> Nicht verletzen bei der Arbeit.

## [[Elektrische Sicherheit\|Elektrische Sicherheit]] - 5 Regeln:

1. **[[Freischalten\|Freischalten]]** - Strom aus
2. **[[Sichern\|Sichern]]** - Sicherung raus
3. **[[Spannungsfreiheit prüfen\|Spannungsfreiheit prüfen]]** - wirklich aus?
4. **[[Erden\|Erden]]** - sicher machen
5. **[[Abdecken\|Abdecken]]** - gefährliche Teile verstecken


> [!info] Diese Zusammenfassung basiert auf den Materialien von Herrn Thomas Hochgesang. Die Informationen und Konzepte wurden aus den von ihm bereitgestellten Lehrunterlagen und Vorlesungen entnommen. Alle Bilder, die hier gepostet wurden, stammen aus dem Buch [Westermann](https://www.westermann.de/reihe/ITBERUF2020/IT-Berufe?a=1) oder aus den PDF-Präsentationen von Herrn Thomas Hochgesang. Mein Ziel war es, die wesentlichen Punkte zusammenzufassen und die Kerninhalte verständlich darzustellen.