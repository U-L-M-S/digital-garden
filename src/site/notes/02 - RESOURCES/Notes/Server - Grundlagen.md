---
{"dg-publish":true,"permalink":"/02-resources/notes/server-grundlagen/","noteIcon":"","updated":"2025-07-21T11:17:51.000+02:00"}
---

> Bevor wir in das Thema gehen, frage ich dich: Was ist ein [[02 - RESOURCES/Notes/Server\|Server]]? Was macht er?

Viele Leute hören oft: "[[02 - RESOURCES/Notes/Server\|Server]]", "[[02 - RESOURCES/Notes/Server\|Server]] ist down", "mit dem [[02 - RESOURCES/Notes/Server\|Server]] verbinden".  
Aber was ist ein [[02 - RESOURCES/Notes/Server\|Server]] wirklich?

Einfach gesagt: Ein [[02 - RESOURCES/Notes/Server\|Server]] ist auch ein Computer, wie der, den du gerade benutzt.  
Der Unterschied: Ein [[02 - RESOURCES/Notes/Server\|Server]] arbeitet 24/7. Er ist dafür da, anderen Computern oder Geräten etwas zu geben oder zu helfen.

## CPU
![image-89.png](/img/user/02%20-%20RESOURCES/Files/image-89.png)

Weil ein [[02 - RESOURCES/Notes/Server\|Server]] oft vielen Nutzern gleichzeitig helfen muss, braucht er stärkere Hardware als ein normaler Computer.  
Vor allem die CPU ist wichtig. [[02 - RESOURCES/Notes/Server\|Server]] haben oft 2 oder mehr CPUs.

Die CPU ist das „Gehirn“ vom Computer. Je mehr CPUs, desto mehr Dinge kann er gleichzeitig machen.

Wenn wir über „gleichzeitig“ sprechen, meinen wir:

- **Parallel Processing**: Mehrere Aufgaben werden gleichzeitig gemacht.
  - Beispiel: Du kochst Suppe, während du gleichzeitig Gemüse schneidest. Du machst zwei Dinge zur gleichen Zeit.
- **Multi Processing**: Mehrere Hardware-Teile arbeiten gleichzeitig.
  - Beispiel: Du und dein Freund kochen zusammen.  
    Du kochst die Nudeln, dein Freund macht die Soße.  
    Zwei „Köpfe“ (Personen) arbeiten gleichzeitig an verschiedenen Aufgaben.

> [!note]  
> So wie im echten Leben ist Multi Processing **häufig** schneller als Parallel Processing.

## [[02 - RESOURCES/Notes/RAM\|RAM]]
![image-85.png](/img/user/02%20-%20RESOURCES/Files/image-85.png)

> "Ein [[02 - RESOURCES/Notes/Server\|Server]] ist auch ein Computer, wie der, den du gerade benutzt." Behalt das im Hinterkopf.

Bevor wir weitermachen, lies bitte diese echte Geschichte, die wirklich passiert ist:

> [!cite] Belgien Wahl Bit-Flip  
> 2003 gab es in Belgien (Schaerbeek) einen Fall, bei dem eine Kandidatin plötzlich 4.096 Stimmen zu viel bekam. Ursache war ein sogenannter [[02 - RESOURCES/Notes/Bit\|Bit]]-Flip: Ein kosmisches Teilchen traf die Speicherzelle des Wahlcomputers und kippte ein [[02 - RESOURCES/Notes/Bit\|Bit]] von 0 auf 1. Dadurch wurde die Stimmenzahl falsch gezählt.  
> Der Fehler wurde entdeckt, weil die Gesamtzahl der Stimmen größer war als die Anzahl der Wähler.

|                   $2^{12}$                    | $2^{11}$ | $2^{10}$ | $2^{9}$ | $2^{8}$ | $2^{7}$ | $2^{6}$ | $2^{5}$ | $2^{4}$ | $2^{3}$ | $2^{2}$ | $2^{1}$ | $2^{0}$ |
| :-------------------------------------------: | :------: | :------: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: |
|                     4096                      |   2048   |   1024   |   512   |   256   |   128   |   64    |   32    |   16    |    8    |    4    |    2    |    1    |
| <mark style="background: #FFF3A3A6;">1</mark> |    0     |    0     |    0    |    0    |    0    |    0    |    0    |    0    |    0    |    0    |    0    |    0    |
|                 Bit-Flip hier                 |          |          |         |         |         |         |         |         |         |         |         |         |

Wie dein Rechner oder Handy besitzt auch ein [[02 - RESOURCES/Notes/Server\|Server]] [[02 - RESOURCES/Notes/RAM\|RAM]].  
Wie du in der spannenden Geschichte gelesen hast, dürfen [[02 - RESOURCES/Notes/Server\|Server]] einfach keine Fehler machen.  
Daher gibt es einen speziellen [[02 - RESOURCES/Notes/RAM\|RAM]]-Typ für [[02 - RESOURCES/Notes/Server\|Server]]: [[02 - RESOURCES/Notes/ECC RAM\|ECC RAM]].

Kurz gesagt: Dieses Teil existiert, um solche Fehler zu vermeiden. [[02 - RESOURCES/Notes/ECC RAM\|ECC RAM]] nutzt den [[02 - RESOURCES/Notes/Hamming Code(7,4)\|Hamming Code(7,4)]]-Algorithmus, um Bit-Flips (0 → 1 oder 1 → 0) zu erkennen und zu korrigieren. [[02 - RESOURCES/Notes/ECC RAM\|ECC RAM]] hat einen extra Speicherchip **nur** für diesen Zweck (daher immer ungerade Anzahl an Speicherchips/Modulen bei [[02 - RESOURCES/Notes/ECC RAM\|ECC RAM]]).

> [!note]  
> Du musst [[02 - RESOURCES/Notes/Hamming Code(7,4)\|Hamming Code(7,4)]] nicht verstehen (wie er funktioniert).  
> Du musst aber wissen, dass er existiert und bei [[02 - RESOURCES/Notes/ECC RAM\|ECC RAM]] verwendet wird 😊.

## HDDs: SAS
![image-90.png](/img/user/02%20-%20RESOURCES/Files/image-90.png)

> Ein [Server](https://gfn.uinclis.de/02-resources/notes/server/) muss oft viele Daten schnell lesen und speichern.  
> Dafür nutzt man oft spezielle Festplatten: SAS-HDDs.

SAS bedeutet **Serial Attached SCSI**.  
Früher war SCSI eine parallele Verbindung. Heute ist SAS **seriell** und hat Punkt-zu-Punkt-Verbindungen.

### Warum SAS?

- **Leitungsbündelung**:  
  Zwei Ports können gleichzeitig Daten übertragen → schneller.
- **Dual-Porting**:  
  Zwei Systeme können gleichzeitig auf dieselbe [[02 - RESOURCES/Notes/HDD\|HDD]] zugreifen.  
  > Beispiel: Zwei Köche können gleichzeitig auf denselben Topf zugreifen, ohne sich zu stören.

### Kompatibilität

- SAS-HDDs brauchen zwingend einen SAS-Anschluss.
- SATA-HDDs funktionieren auch an einem SAS-Anschluss.

Außerdem kann man bis zu 4 SAS-HDDs an einen SAS-Controller anschließen.

> [!note] [[02 - RESOURCES/Notes/HDD\|HDD]] vs [[02 - RESOURCES/Notes/SSD\|SSD]]  
> "[[02 - RESOURCES/Notes/SSD\|SSD]] ist aber schneller und besser.  
> Warum werden sie nicht in Servern verwendet?" 🤓  
>
> Du hast voll recht! 
> [[02 - RESOURCES/Notes/HDD\|HDD]] ist standardmäßig besser als [[02 - RESOURCES/Notes/SSD\|SSD]].  
> Aber [[02 - RESOURCES/Notes/HDD\|HDD]]s sind stabiler, günstiger, und haben eine geringere Wahrscheinlichkeit für Datenverlust.  
> Deshalb wurde SAS in [[02 - RESOURCES/Notes/HDD\|HDD]]s als 'Booster' eingesetzt.

## Riser Cards
![image-91.png](/img/user/02%20-%20RESOURCES/Files/image-91.png)

> Viele Server haben eine flache Bauweise.  
> Was heißt das?  
>> Das heißt so viel, dass ein [[02 - RESOURCES/Notes/Server\|Server]] so aufgebaut ist (Standard), damit man mit wenig oder keinem Aufwand andere Hardwareteile einsetzen kann.

Kiste öffnen → Hardware einstecken → Kiste schließen → Fertig.

# Server-Formfaktoren

> Wir haben bereits gelernt, wie ein Server **innen** aussehen kann.  
> Aber nicht alle Server sehen **von außen** gleich aus.  
> Es gibt **drei Standard-Gehäuseformen** für Server.

## Tower 
<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/02-resources/notes/tower-server/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





![image-92.png](/img/user/02%20-%20RESOURCES/Files/image-92.png)

> Sehr ähnlich zu einem normalen **Desktop-PC**, wie man ihn zu Hause hat.  
> Hat aber mehr Möglichkeiten zur Erweiterung, z. B. mit [[Riser Cards\|Riser Cards]].

- Beliebt bei kleinen [[02 - RESOURCES/Notes/Unternehmen\|Unternehmen]]
- **Kompakt**, **günstig** und **einfach erweiterbar**
- Gutes **Preis-Leistungs-Verhältnis**

</div></div>


## Rackmount 
<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/02-resources/notes/rackmount-server/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




![image-93.png](/img/user/02%20-%20RESOURCES/Files/image-93.png)

> Speziell für Rechenzentren gemacht.  
> Wird in ein standardisiertes **Rack** eingebaut und hat viele praktische Features:

- Hat **Gleitschienen** und ein **aufklappbares Gehäuse** → einfacher Zugriff auf die Hardware
- Viele Teile sind **hot-swappable** → z. B. Festplatten oder Netzteile lassen sich **im Betrieb tauschen**
- **Mehr Platz** für Komponenten als beim Tower
- **Bessere Organisation** → ideal für viele [[02 - RESOURCES/Notes/Server\|Server]] nebeneinander
- **Teurer** als Tower, aber **platzsparender** und **effizienter**


## 19" Server Rack ![[19%22 Server Rack\|19" Server Rack]]
 

</div></div>


## Blade 
<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/02-resources/notes/blade/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




 
![image-95.png](/img/user/02%20-%20RESOURCES/Files/image-95.png)

> Blade-Server bestehen aus einem Gehäuse, in das mehrere sogenannte **Server-Blades** gesteckt werden.  
> Diese Bauform spart Platz und ist besonders modular.

- Jedes **Blade** ist eine **einzelne Platine** mit CPU, [[02 - RESOURCES/Notes/RAM\|RAM]], [[02 - RESOURCES/Notes/Netzwerk\|Netzwerk]] usw.
- Mehrere Blades werden **nebeneinander oder untereinander** ins Gehäuse eingesetzt
- Die Verbindung läuft über die **Rückseite** → dort sitzen alle nötigen Anschlüsse
- Das Gehäuse stellt **Strom** und **Kühlung** für alle Blades bereit

> Ideal für große Rechenzentren mit vielen Servern auf engem Raum


</div></div>


>[!note] 
>Ja. Blade ist nicht nur Cooler. Es ist einfach die Beste von alle 3 😍.
>Aber extrem TEUER!


# Server-Stromversorgung
>Ja. wie zu erwartet benötige diese Riesige Machinen Strom und zwar VIELE Strom. Daher verbrauchen sie deutig mehr Strom als ein standard PC von 5 Watts ([[02 - RESOURCES/Notes/elektrische Leistung\|elektrische Leistung]]) bis 150 Watts, je nach den Hardware Teil.

| Komponent          | Typischer Stromverbrauch                 |
| ------------------ | ---------------------------------------- |
| Motherboard        | ~30 W (Ohne RAM und CPU)                 |
| Speicher           | ~30 W pro 2 GB                           |
| CPU                | ~45 W - 150 W, je nach CPU               |
| HDD                | ~5 W - 15 W                              |
| Optische Laufwerk  | ~5 - 20 W                                |
| Erweiterungskarten | ~5 - 30 W, GPUs verbraucht deutlich mehr |

## Redundante Stromversorgung

> [!important]  
> "Ein [[02 - RESOURCES/Notes/Server\|Server]] arbeitet 24/7 – das ist sein Job."  
> Damit er das kann, muss die **Stromversorgung im Server selbst zuverlässig** sein.  
> Aber was passiert, wenn **ein Netzteil kaputt geht** oder **ausgesteckt wird**?  
> → Genau dafür gibt es **Redundante Stromversorgung** – **nicht** für Stromausfälle im Gebäude!

- [[02 - RESOURCES/Notes/Server\|Server]] haben oft **zwei Netzteile** oder besser gesagt: zwei [[02 - RESOURCES/Notes/Stromkreis\|Stromkreis]]en
- Wenn eins ausfällt, übernimmt das andere **nahtlos**
- Ziel: **Keine Unterbrechung**, kein Neustart

> [!tip]  
> Gegen Stromausfälle im ganzen Haus hilft nur eine **USV** (unterbrechungsfreie Stromversorgung).

---

### Modi der Redundanz
![image-97.png](/img/user/02%20-%20RESOURCES/Files/image-97.png)

> Unterschiedliche Arten, wie die Netzteile zusammenarbeiten:

- **Lastverteilung (aktiv/aktiv)**  
  → Beide Netzteile arbeiten gleichzeitig und teilen sich die Last
- **Active-Passive (aktiv/passiv)**  
  → Nur eins ist aktiv, das zweite springt **erst bei Ausfall** ein

#### ✅ Vorteile:

- Schutz vor **defektem Netzteil**
- Kein manueller Eingriff nötig
- **Wartung ohne Shutdown** möglich

---

### Hotswap
![image-98.png](/img/user/02%20-%20RESOURCES/Files/image-98.png)

> [[02 - RESOURCES/Notes/Server\|Server]] laufen oft **tagelang oder wochenlang** ohne Pause.  
> Trotzdem kann Hardware kaputt gehen.  
> → Mit **Hotswap** kann man sie **im laufenden Betrieb austauschen.**

- Bedeutet: Du tauschst defekte Hardware **ohne Herunterfahren**
- Beispiele: **Festplatten**, **Netzteile**, **Netzwerkkarten (NICs)**
- Häufig in Kombination mit **Redundanz**, z. B. 2 Netzteile → eins bleibt aktiv

#### ✅ Vorteile:

- **Keine Downtime**
- **Schneller Austausch**
- Nützlich bei Wartung oder Notfällen



### 🔍 Vergleich: Redundanz vs. Hotswap

| Merkmal                   | Redundante Stromversorgung             | Hotswap                                      |
| ------------------------- | -------------------------------------- | -------------------------------------------- |
| **Ziel**                  | Ausfall **verhindern**                 | Austausch **im Betrieb** ermöglichen         |
| **Betrifft**              | Vor allem **Netzteile**                | Verschiedene Hardware: HDDs, Netzteile, NICs |
| **Funktionsweise**        | Zwei Netzteile, einer aktiv/alle aktiv | Hardware wird live gezogen/ersetzt           |
| **Voraussetzung für ...** | Kann **Hotswap ermöglichen**           | **Benötigt oft Redundanz**                   |
| **Vorteil**               | Kein Stromausfall                      | Kein Neustart nötig                          |
| **Einsatzgebiet**         | Rechenzentren, produktive Server       | Rechenzentren, Hochverfügbarkeit             |

> Du kannst sagen: **[[02 - RESOURCES/Notes/Redundanz\|Redundanz]] schützt** – **Hotswap repariert im Betrieb**


## [[02 - RESOURCES/Notes/USV\|USV]] – Schutz vor Stromausfall
![image-99.png](/img/user/02%20-%20RESOURCES/Files/image-99.png)

> Eine **[[02 - RESOURCES/Notes/USV\|USV]] (Unterbrechungsfreie Stromversorgung)** schützt den Serverraum bei Stromproblemen.  
> Sie springt ein, wenn der **externe Strom wegfällt** – für ein paar Minuten bis zur sicheren Abschaltung oder Umschaltung auf Notstrom.

- Überwacht die **Stromversorgung rund um die Uhr**
- Schützt vor **Spannungsspitzen**, **Kurzunterbrechungen** oder **kompletten Stromausfällen**
- Viele Systeme führen automatisch einen **sicheren Shutdown** aus, wenn die [[02 - RESOURCES/Notes/USV\|USV]] anspringt
- USVs können Berichte generieren und über eine **Konsole überwacht** werden

#### ✅ Vorteile:

- Verhindert **Datenverlust** bei plötzlichem Stromausfall
- Gibt Zeit für automatische oder manuelle Reaktion
- Ideal in Kombination mit Redundante Stromversorgung und Hotswap



## Server-Kühlung
![image-100.png](/img/user/02%20-%20RESOURCES/Files/image-100.png)

> Du weißt bestimmt, dass Maschinen mit der Zeit heiß werden –  
> vor allem durch Strom und die aktiven Hardwarekomponenten.  
> Jetzt stell dir mal eine **Super-Maschine** vor, die **24/7** läuft und extrem viel Strom verbraucht.  
> Yeah... **this shit gets hot** 😉.

Um **Defekte** und **Probleme** zu vermeiden, muss der Serverraum **ständig gekühlt** werden –  
selbst im Sommer 😆.

Die Kühlung erfolgt meistens über **Klimaanlagen**, aber es gibt bestimmte Maßnahmen, die zusätzlich beachtet werden müssen:

---

### Shrouds
> Das sind Luftkanäle im Gehäuse, durch die die Luft **gezielt** gelenkt wird.  
> Sie bestehen meist aus Kunststoff und sorgen dafür, dass **die gesamte Hardware** gekühlt wird.  
> Besonders wichtig gegen sogenannte **Dead Spots** – das sind Stellen im Gehäuse, wo **keine Luft** hinkommt.

---

### Raumkühlung – Regeln
> Auch der Raum selbst muss richtig organisiert sein – sonst bringt die beste Klimaanlage nichts.

- [[02 - RESOURCES/Notes/Server\|Server]] sollten **alle in die gleiche Richtung** stehen  
  → So behindern sie sich **nicht gegenseitig** beim Luftstrom
- **Kalte Luft sinkt**, **warme Luft steigt**  
  → Klimaanlage bzw. Kaltluftzufuhr gehört **nach oben**
- Warmluft sollte **nach oben abziehen** können, z. B. durch Abluftkanäle

> Ohne richtige Kühlung = 🔥💻 = 💀