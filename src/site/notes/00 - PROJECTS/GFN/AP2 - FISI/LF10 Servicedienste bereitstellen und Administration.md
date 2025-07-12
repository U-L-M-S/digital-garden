---
{"dg-publish":true,"permalink":"/00-projects/gfn/ap-2-fisi/lf-10-servicedienste-bereitstellen-und-administration/","noteIcon":"","updated":"2025-07-12T14:26:20.968+02:00"}
---

# [[02 - RESOURCES/Notes/Server\|Server]] Grundlagen – Aufbau und Architektur

> Bevor wir in das Thema gehen, frage ich dich: Was ist ein [[02 - RESOURCES/Notes/Server\|Server]]? Was macht er?

Viele Leute hören oft: "[[02 - RESOURCES/Notes/Server\|Server]]", "[[02 - RESOURCES/Notes/Server\|Server]] ist down", "mit dem [[02 - RESOURCES/Notes/Server\|Server]] verbinden".  
Aber was ist ein [[02 - RESOURCES/Notes/Server\|Server]] wirklich?

Einfach gesagt: Ein [[02 - RESOURCES/Notes/Server\|Server]] ist auch ein Computer, wie der, den du gerade benutzt.  
Der Unterschied: Ein [[02 - RESOURCES/Notes/Server\|Server]] arbeitet 24/7. Er ist dafür da, anderen Computern oder Geräten etwas zu geben oder zu helfen.

## CPU

Weil ein [[02 - RESOURCES/Notes/Server\|Server]] oft vielen Nutzern gleichzeitig helfen muss, braucht er stärkere Hardware als ein normaler Computer.  
Vor allem die CPU ist wichtig. [[02 - RESOURCES/Notes/Server\|Server]] haben oft 2 oder mehr CPUs.

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