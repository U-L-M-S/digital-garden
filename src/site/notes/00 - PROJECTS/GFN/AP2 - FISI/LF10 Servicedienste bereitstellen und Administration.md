---
{"dg-publish":true,"permalink":"/00-projects/gfn/ap-2-fisi/lf-10-servicedienste-bereitstellen-und-administration/","noteIcon":"","updated":"2025-07-17T21:10:37.197+02:00"}
---

![[Server Services and Data Management - podcast.wav]]
> In dieser Zusammenfassung lernst du die Grundlagen von [[02 - RESOURCES/Notes/Server\|Server]]n, [[02 - RESOURCES/Notes/Virtualisierung\|Virtualisierung]], Active Directory, GPOs, Linux Grundlagen, LAMP-Stack und Nextcloud [[02 - RESOURCES/Notes/Server\|Server]]n.

# [[02 - RESOURCES/Notes/Server\|Server]] Grundlagen – Aufbau und Architektur

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
> 2003 gab es in Belgien (Schaerbeek) einen Fall, bei dem eine Kandidatin plötzlich 4.096 Stimmen zu viel bekam. Ursache war ein sogenannter Bit-Flip: Ein kosmisches Teilchen traf die Speicherzelle des Wahlcomputers und kippte ein Bit von 0 auf 1. Dadurch wurde die Stimmenzahl falsch gezählt.  
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
  Zwei Systeme können gleichzeitig auf dieselbe HDD zugreifen.  
  > Beispiel: Zwei Köche können gleichzeitig auf denselben Topf zugreifen, ohne sich zu stören.

### Kompatibilität

- SAS-HDDs brauchen zwingend einen SAS-Anschluss.
- SATA-HDDs funktionieren auch an einem SAS-Anschluss.

Außerdem kann man bis zu 4 SAS-HDDs an einen SAS-Controller anschließen.

> [!note] [[02 - RESOURCES/Notes/HDD\|HDD]] vs [[02 - RESOURCES/Notes/SSD\|SSD]]  
> SSD ist aber schneller und besser.  
> Warum werden sie nicht in Servern verwendet? 🤓  
>
> Du hast voll recht. [SSD](https://gfn.uinclis.de/02-resources/notes/ssd/) ist standardmäßig besser als [HDD](https://gfn.uinclis.de/02-resources/notes/hdd/).  
> Aber [HDD](https://gfn.uinclis.de/02-resources/notes/hdd/)s sind stabiler, günstiger, und haben eine geringere Wahrscheinlichkeit für Datenverlust.  
> Deshalb wurde SAS in [HDD](https://gfn.uinclis.de/02-resources/notes/hdd/)s als 'Booster' eingesetzt.

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
![image-92.png](/img/user/02%20-%20RESOURCES/Files/image-92.png)

> Sehr ähnlich zu einem normalen **Desktop-PC**, wie man ihn zu Hause hat.  
> Hat aber mehr Möglichkeiten zur Erweiterung, z. B. mit [[Riser Cards\|Riser Cards]].

- Beliebt bei kleinen Unternehmen
- **Kompakt**, **günstig** und **einfach erweiterbar**
- Gutes **Preis-Leistungs-Verhältnis**

## Rackmount
![image-93.png](/img/user/02%20-%20RESOURCES/Files/image-93.png)

> Speziell für Rechenzentren gemacht.  
> Wird in ein standardisiertes **Rack** eingebaut und hat viele praktische Features:

- Hat **Gleitschienen** und ein **aufklappbares Gehäuse** → einfacher Zugriff auf die Hardware
- Viele Teile sind **hot-swappable** → z. B. Festplatten oder Netzteile lassen sich **im Betrieb tauschen**
- **Mehr Platz** für Komponenten als beim Tower
- **Bessere Organisation** → ideal für viele Server nebeneinander
- **Teurer** als Tower, aber **platzsparender** und **effizienter**

### 19" Server Rack
![image-94.png](/img/user/02%20-%20RESOURCES/Files/image-94.png)

> Ein Rack ist ein standardisiertes Gehäuse, um mehrere Server ordentlich unterzubringen.  
> Besonders nützlich im Rechenzentrum oder Serverraum.

- **19 Zoll** = Breite der **Frontblende** (entspricht **48,26 cm**) → passt in jedes standardisierte Rack
- Die **Höhe** wird in **HE (Höheneinheiten)** gemessen  
  → 1HE = **1,75 Zoll** = **44,45 mm**  
  → Englisch: **U**
- Die meisten Server brauchen **1–2 HE**

> Beispiel: Ein Server mit 2HE ist **88,90 mm hoch**

### Aufbau (siehe Bild)

- Racks haben Löcher mit **15,88 mm Abstand** (5/8")  
- **3 Löcher = 1 HE**
- Befestigung mit **Schrauben** und **Käfigmuttern**

## Blade 
![image-95.png](/img/user/02%20-%20RESOURCES/Files/image-95.png)

> Blade-Server bestehen aus einem Gehäuse, in das mehrere sogenannte **Server-Blades** gesteckt werden.  
> Diese Bauform spart Platz und ist besonders modular.

- Jedes **Blade** ist eine **einzelne Platine** mit CPU, RAM, Netzwerk usw.
- Mehrere Blades werden **nebeneinander oder untereinander** ins Gehäuse eingesetzt
- Die Verbindung läuft über die **Rückseite** → dort sitzen alle nötigen Anschlüsse
- Das Gehäuse stellt **Strom** und **Kühlung** für alle Blades bereit

> Ideal für große Rechenzentren mit vielen Servern auf engem Raum

>[!note] 
>Ja. Blade ist nicht nur Cooler. Es ist einfach die Beste von alle 3 😍.

