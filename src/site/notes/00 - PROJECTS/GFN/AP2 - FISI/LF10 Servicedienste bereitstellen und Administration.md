---
{"dg-publish":true,"permalink":"/00-projects/gfn/ap-2-fisi/lf-10-servicedienste-bereitstellen-und-administration/","noteIcon":"","updated":"2025-07-13T22:06:59.455+02:00"}
---

# [[02 - RESOURCES/Notes/Server\|Server]] Grundlagen – Aufbau und Architektur

> Bevor wir in das Thema gehen, frage ich dich: Was ist ein [[02 - RESOURCES/Notes/Server\|Server]]? Was macht er?

Viele Leute hören oft: "[[02 - RESOURCES/Notes/Server\|Server]]", "[[02 - RESOURCES/Notes/Server\|Server]] ist down", "mit dem [[02 - RESOURCES/Notes/Server\|Server]] verbinden".  
Aber was ist ein [[02 - RESOURCES/Notes/Server\|Server]] wirklich?

Einfach gesagt: Ein [[02 - RESOURCES/Notes/Server\|Server]] ist auch ein Computer, wie der, den du gerade benutzt.  
Der Unterschied: Ein [[02 - RESOURCES/Notes/Server\|Server]] arbeitet 24/7. Er ist dafür da, anderen Computern oder Geräten etwas zu geben oder zu helfen.

## CPU
![image-86.png](/img/user/02%20-%20RESOURCES/Files/image-86.png)
>Weil ein [[02 - RESOURCES/Notes/Server\|Server]] oft vielen Nutzern gleichzeitig helfen muss, braucht er stärkere Hardware als ein normaler Computer.  
>>Vor allem die CPU ist wichtig. [[02 - RESOURCES/Notes/Server\|Server]] haben oft 2 oder mehr CPUs.

Die CPU ist das „Gehirn“ vom Computer. Je mehr CPUs (oder Kerne), desto mehr Dinge kann er gleichzeitig machen.

Wenn wir über „gleichzeitig“ sprechen, meinen wir:

- **Parallel Processing**: Mehrere Aufgaben werden gleichzeitig gemacht.
    
    - Beispiel: Du kochst Suppe, während du gleichzeitig Gemüse schneidest. Du machst zwei Dinge zur gleichen Zeit.
        
- **Multi Processing**: Mehrere Hardware-Teile (z. B. mehrere CPUs) arbeiten gleichzeitig.
    
    - Beispiel: Du und dein Freund kochen zusammen.  
        Du kochst die Nudeln, dein Freund macht die Soße.  
        Zwei „Köpfe“ (Personen) arbeiten gleichzeitig an verschiedenen Aufgaben.
        

> [!note]  
> So wie im echten Leben ist Multi Processing oft **schneller** als Parallel Processing.


## [[02 - RESOURCES/Notes/RAM\|RAM]]
![image-85.png](/img/user/02%20-%20RESOURCES/Files/image-85.png)
>"Ein [[02 - RESOURCES/Notes/Server\|Server]] ist auch ein Computer, wie der, den du gerade benutzt." Behalt das in den Hinterkopf.

Bevor wir weitermachen liest bitte dieses echtes Geschichte, die passiert ist.

>[!cite] Belgien Wahl Bit-Flip
>2003 gab es in Belgien (Schaerbeek) einen Fall, bei dem eine Kandidatin plötzlich 4.096 Stimmen zu viel bekam. Ursache war ein sogenannter Bit-Flip: Ein kosmisches Teilchen traf die Speicherzelle des Wahlcomputers und kippte ein Bit von 0 auf 1. Dadurch wurde die Stimmenzahl falsch gezählt.
>Der Fehler wurde entdeckt, weil die Gesamtzahl der Stimmen größer war als die Anzahl der Wähler.

Wie in deine Rechner/Handy besitzt [[02 - RESOURCES/Notes/Server\|Server]]s auch ein [[02 - RESOURCES/Notes/RAM\|RAM]].
Wie du in die spannende Geschichte gelesen hast darf [[02 - RESOURCES/Notes/Server\|Server]]s einfach keine Fehler machen. Daher existiert eine bestimmte [[02 - RESOURCES/Notes/RAM\|RAM]] für [[02 - RESOURCES/Notes/Server\|Server]]s: [[02 - RESOURCES/Notes/ECC RAM\|ECC RAM]].

Kurz gesagt: Das Ding existiert um solche Fälle zu vermeiden.
[[02 - RESOURCES/Notes/ECC RAM\|ECC RAM]] hat die Eigenschaft die [[02 - RESOURCES/Notes/Hamming Code(7,4)\|Hamming Code(7,4)]] Algorithmus zu benutzen um Bit Flips (0 -> 1 ODER 1->0) zu erkennen und reparieren.
[[02 - RESOURCES/Notes/ECC RAM\|ECC RAM]] hat eine extra Speicherchip **NUR** um das zu machen (IMMER Ungerade Speicherchipsanzahl/Module bei [[02 - RESOURCES/Notes/ECC RAM\|ECC RAM]]) 

>[!note] 
>Du muss [[02 - RESOURCES/Notes/Hamming Code(7,4)\|Hamming Code(7,4)]] nicht verstehen (wie es funktioniert).
>Du muss aber wissen dass es existiert und dass bei [[02 - RESOURCES/Notes/ECC RAM\|ECC RAM]] verwendet wird 😊.


## HDDs: SAS
![image-88.png](/img/user/02%20-%20RESOURCES/Files/image-88.png)
> Ein [[02 - RESOURCES/Notes/Server\|Server]] muss oft viele Daten schnell lesen und speichern.
> Dafür nutzt man oft spezielle Festplatten: SAS-HDDs.

SAS bedeutet **Serial Attached SCSI**.  
Früher war SCSI eine parallele Verbindung. Heute ist SAS **seriell** und hat Punkt-zu-Punkt-Verbindungen.

**Warum SAS?**

- **Leitungsbündelung**:  
   Zwei Ports können gleichzeitig Daten übertragen → schneller. 
- **Dual-Porting**:  
    Zwei Systeme können gleichzeitig auf dieselbe HDD zugreifen.
    > Beispiel: Zwei Köche können gleichzeitig auf denselben Topf zugreifen, ohne sich zu stören.
 

**Kompatibilität**

- SAS-HDDs brauchen zwingend einen SAS-Anschluss.
- SATA-HDDs funktionieren auch an einem SAS-Anschluss.

Außerdem kann man bis zu 4 SAS-HDDs an einen SAS-Controller anschließen.



> [!note] HDD vs SSD
> "SSD ist aber schneller und besser. 
> Warum werden sie nicht in Server verwenden?"🤓 
> 
> Du hast voll recht. [[02 - RESOURCES/Notes/SSD\|SSD]] ist standardig besser als [[02 - RESOURCES/Notes/HDD\|HDD]].
> Nun sind [[02 - RESOURCES/Notes/HDD\|HDD]]s stabiler, günstiger, geringer chance um Datenverlusten.
> Daher wurde die SAS in die [[02 - RESOURCES/Notes/HDD\|HDD]]s eingesetzt als 'Booster'.

































---

Nun gehen wir einen Schritt zurück: "Ein [[02 - RESOURCES/Notes/Server\|Server]] ist auch ein Computer, wie der, den du gerade benutzt."

Ich habe schon gesagt, dass ein [[02 - RESOURCES/Notes/Server\|Server]] ein Computer ist. Aber er muss **stärker** sein, um viele Anfragen gleichzeitig zu bearbeiten (Parallel Processing oder/und Multi Processing).  
Wie kann es sein, dass ein [[02 - RESOURCES/Notes/Server\|Server]] stärker ist als ein normaler Computer? Liegt es nur an der CPU?

... Also ...

... Njaein 🤗.

Die CPUs in einem [[02 - RESOURCES/Notes/Server\|Server]] sind natürlich schneller und besser. Aber das allein reicht nicht.

Die CPUs haben oft mehr **Kerne** als ein normaler Rechner (außer du hast einen Gaming-PC wie Levi 😁).  
Außerdem haben sie **extra Hardware** direkt mit eingebaut. Genau: Hardware in der Hardware.

Diese Extras sind zum Beispiel:

- **keine integrierte GPU**
    - Server-CPUs haben meist **keine eingebaute Grafikeinheit**, weil Server normalerweise keine Bildschirmausgabe brauchen.

- **größerer Cache**
    - Ein sehr schneller Speicher. Cache ist schneller als normaler Speicher. Server-CPUs haben oft viel mehr Cache als normale CPUs.
  
- **mehr PCIe-Lanes**
    - Für mehr Verbindungen, z. B. für Netzwerkkarten, [[02 - RESOURCES/Notes/SSD\|SSD]]s oder andere Karten. Server brauchen viele dieser Lanes, um viele Geräte gleichzeitig zu verbinden.

- **unterstützt [[02 - RESOURCES/Notes/ECC RAM\|ECC RAM]]** → #GFN/prüfungsrelevant/AP2
    - Erkennt und korrigiert Bit-Fehler (z. B. Bit-Flip), zum Beispiel mit [[02 - RESOURCES/Notes/Hamming Code(7,4)\|Hamming Code(7,4)]].

- **unterstützt sehr viel RAM**
    - Server-CPUs können sehr viel mehr RAM verwalten, oft mehrere Terabyte.
  
- **registrierter (gepufferter) RAM**
    - Server benutzen oft sogenannten **Registered RAM**. Damit kann die CPU einfacher mit großem Speicher arbeiten, weil ein Extra-Chip (Register) die Arbeit koordiniert.
	