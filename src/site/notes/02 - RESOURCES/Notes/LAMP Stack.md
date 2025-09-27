---
{"dg-publish":true,"permalink":"/02-resources/notes/lamp-stack/","tags":["#web","#GFN/LF10/FISI","#informatik/server"],"noteIcon":"","updated":"2025-09-10T17:01:52.000+02:00"}
---

> Eine **nützliche Kombo!** [[02 - RESOURCES/Notes/LAMP Stack\|LAMP Stack]] ist eine kostenlose Open-Source Sammlung von Software, die zusammen eine Plattform für dynamische Webinhalte ergibt.

> > Ein Stack (Stapel) bedeutet: Mehrere Software-Komponenten arbeiten **zusammen** wie ein Team.

---

# Was ist [[02 - RESOURCES/Notes/LAMP Stack\|LAMP Stack]]?

> **L**inux + **A**pache + **M**ySQL + **P**HP = LAMP  
> Die perfekte Kombination für Webserver!

Stell dir vor: Du willst eine Website bauen, die nicht nur statische Seiten zeigt, sondern **richtig interaktiv** ist – mit Datenbank, Benutzerdaten, etc.  
Dafür brauchst du ein ganzes **Team** von Software. LAMP ist dieses Team!

---

## Apache
> **Meist genutzter [[02 - RESOURCES/Notes/Server\|Server]] weltweit** – über 50% aller Internetseiten laufen über Apache!

- Nutzt [[02 - RESOURCES/Notes/HTTP\|HTTP]], um Anfragen zu bearbeiten und Informationen über das Internet zu versenden
- **Wie ein Kellner**: Nimmt Bestellungen (Anfragen) entgegen und bringt das gewünschte Essen (Webseiten)

> [!example] Beispiel  
> Du tippst `www.example.com` → Apache nimmt die Anfrage entgegen → sendet dir die Website zurück

---

## MySQL / MariaDB [[02 - RESOURCES/Notes/Datenbank\|Datenbank]]

![[LAMP-MySQL.png\|LAMP-MySQL.png]]

> **Relationale Open-Source [[02 - RESOURCES/Notes/Datenbank\|Datenbank]]** – das Gedächtnis deiner Website!

- **Einfaches Lagern** von Informationen
- **Einfaches Abrufen** der Informationen per [[02 - RESOURCES/Notes/SQL\|SQL]]
- Ermöglicht das Erstellen von professionellen Datenbanken auf Unternehmens-Niveau

> [!note]  
> **MariaDB** ist ein Fork von MySQL – praktisch das Gleiche, nur mit anderer Entwicklung

---

## PHP / Perl / Python [[Skriptsprache\|Skriptsprache]]

![[LAMP-PHP.png\|LAMP-PHP.png]]

> **[[02 - RESOURCES/Notes/PHP\|PHP]]: Hypertext Preprocessor** – die Vermittlersprache zwischen Datenbank und Website!

- Eine [[Skriptsprache\|Skriptsprache]], die es ermöglicht, Daten aus der [[02 - RESOURCES/Notes/Datenbank\|Datenbank]] zu lesen und über [[HTML\|HTML]] weiterzugeben
- [[HTML\|HTML]] allein ist dazu **nicht** in der Lage
- Statt [[02 - RESOURCES/Notes/PHP\|PHP]] werden auch häufig **Perl** und **Python** eingesetzt

> [!important]  
> Ohne [[02 - RESOURCES/Notes/PHP\|PHP]] wären Websites nur statisch – mit [[02 - RESOURCES/Notes/PHP\|PHP]] werden sie **dynamisch**!

---

# Funktionsweise

## Statische vs. Dynamische Webseiten

### Statische Webseiten

> Einfach: Es wird der auf dem [[02 - RESOURCES/Notes/Server\|Server]] gespeicherte Inhalt an den Browser übertragen.

**Wie ein Buch**: Immer der gleiche Inhalt, egal wer es liest.

### Dynamische Webseiten

> Hier kommt [[02 - RESOURCES/Notes/LAMP Stack\|LAMP Stack]] ins Spiel! 🎯

**Der Workflow:**

1. **Apache** bekommt eine [[02 - RESOURCES/Notes/PHP\|PHP]]-Abfrage → leitet sie an [[02 - RESOURCES/Notes/PHP\|PHP]] weiter
2. **[[02 - RESOURCES/Notes/PHP\|PHP]]** führt das geforderte Skript aus → fragt Daten per [[02 - RESOURCES/Notes/SQL\|SQL]] aus der [[02 - RESOURCES/Notes/Datenbank\|Datenbank]] ab
3. **[[02 - RESOURCES/Notes/PHP\|PHP]]** bearbeitet die Daten → gibt das Ergebnis an **Apache** weiter
4. **Apache** sendet die entstandene Webseite an den Browser

> [!example] Praktisches Beispiel  
> Du loggst dich bei Facebook ein:  
> → Apache nimmt deine Login-Daten  
> → PHP prüft sie in der MySQL-Datenbank  
> → PHP erstellt **deine persönliche** Startseite  
> → Apache sendet sie an deinen Browser

---

# 🔍 Komponenten-Übersicht

|Komponente|Funktion|Vergleich|
|---|---|---|
|**Linux**|Betriebssystem|Das Fundament des Hauses|
|**Apache**|[[Web-Server\|Web-Server]]|Der Kellner im Restaurant|
|**MySQL**|[[02 - RESOURCES/Notes/Datenbank\|Datenbank]]|Das Gedächtnis/Lager|
|**PHP**|[[Skriptsprache\|Skriptsprache]]|Der Übersetzer/Vermittler|

> [!tip] Merkhilfe  
> **L**eckere **A**pfel **M**achen **P**ause 🍎

---

# Warum LAMP?

✅ **Kostenlos** – Alle Komponenten sind Open-Source  
✅ **Bewährt** – Millionen von Websites nutzen es  
✅ **Flexibel** – Jede Komponente kann ausgetauscht werden  
✅ **Community** – Riesige Entwickler-Community für Support

> [!note] Alternative Stacks
> 
> - **WAMP** (Windows statt Linux)
> - **MAMP** (macOS statt Linux)
> - **LEMP** (Nginx statt Apache)

---

# Von der Theorie zur Praxis

> [!success] Nach LAMP-Installation hast du:
> 
> - Ein laufendes [[Linux\|Linux]]-System
> - Einen funktionierenden [[Web-Server\|Web-Server]] (Apache)
> - Eine einsatzbereite [[02 - RESOURCES/Notes/Datenbank\|Datenbank]] (MySQL)
> - Eine [[Skriptsprache\|Skriptsprache]] (PHP) für dynamische Inhalte

**= Eine komplette Webentwicklungsumgebung! 🚀**