---
{"dg-publish":true,"permalink":"/00-projects/gfn/ap-2/lf-10-benutzerschnittstellen-gestalten-und-entwickeln/","tags":["GFN/LF10","inProgress"],"noteIcon":"","updated":"2024-08-27T00:58:32.249+02:00"}
---

>In diesem Lernfeld werden wir das Web kennenlernen, einschließlich
>>Frontend, Backend und bestimmter Frameworks.
___
# I. User Interface
___
![[Lernfeld 10a_Kapitel 1_User Interfaces_Präsentation.pdf]]
>Dieses Kapitel ist nur ein Einstieg.
>>Hier werden Benutzeroberflächen betrachtet.  

Zunächst wird klargestellt, wie wichtig die Eingabe und die Ausgabe sind.  

Die Eingabe ermöglicht die Kommunikation des Nutzers mit dem Gerät. Theoretisch ist ein Gerät ohne Eingabe möglich, aber es gibt dann keine Möglichkeit, eine [[02 - RESOURCES/Notes/dynamic\|dynamische]] Ausgabe zu haben. Wie bereits gesagt, ist die Ausgabe die Kommunikation des Geräts mit dem Nutzer.

>[!important] Ausgabe  != Reaktion
Nehmen wir an, ich öffne eine automatische Tür mit einer Chipkarte, 
und diese macht ein "BIP", bevor sie sich automatisch öffnet.
> Das "BIP" ist die Ausgabe, und das Öffnen der Tür ist die Reaktion.

Es ist jedoch wichtig zu beachten, dass manche Systeme keine Ausgabe benötigen, da die Reaktion intuitiv ist und eine Ausgabe für den Nutzer nicht sinnvoll wäre (**Lenkrad**). Achtet bitte darauf, dass dies zu vielen Problemen in der Benutzerschnittstelle führen kann, wenn die [[02 - RESOURCES/Notes/UI\|UI]] nicht intuitiv ist.

## Hier sind die aktuell am häufigsten verwendeten Benutzerschnittstellen

>[!tip] Command Line Interface (CLI)
>![LF10 Benutzerschnittstellen gestalten und entwickeln-20240827002824359.png](/img/user/02%20-%20RESOURCES/Files/LF10%20Benutzerschnittstellen%20gestalten%20und%20entwickeln-20240827002824359.png)
>>Es wird häufig von Programmierer verwendet.
> 
> 
>>[!check] Vorteile
>>- Schnell
>>- Direkt
>>- Effektiv für Profis
>>- Programmierbar (Script)
>>- Remote Access
> 
>>[!fail] Nachteile
>>- Hohe Lernkurve
>>- Nicht einsteigerfreundlich
>>- Fehleranfällig (vertippen)
>>- Eingabe ohne Tastatur schwieri

>[!tip] Menu-Driven Interface
>![LF10 Benutzerschnittstellen gestalten und entwickeln-20240827003945993.png](/img/user/02%20-%20RESOURCES/Files/LF10%20Benutzerschnittstellen%20gestalten%20und%20entwickeln-20240827003945993.png)
>>Einfache Benutzerschnittstelle mit grundlegenden Optionen wird häufig bei Geldautomaten, im BIOS/UEFI und in Kassensystemen verwendet.
>
> 
>>[!check] Vorteile
>>- Schnell
>>- Simpel
>>- Einsteigerfreundlich
>>- Benutzer wird geführt
> 
>>[!fail] Nachteile
>>- Beschränkt auf die vorgesehene Auswahl
>>- Unflexibel
>>- Manchmal unübersichtlich
>>- Keine Hilfe bei Out-of-the-Box-Problemen


>[!tip]  Graphical user interface ([[02 - RESOURCES/Notes/GUI\|GUI]])
>![LF10 Benutzerschnittstellen gestalten und entwickeln-20240827004807000.png](/img/user/02%20-%20RESOURCES/Files/LF10%20Benutzerschnittstellen%20gestalten%20und%20entwickeln-20240827004807000.png)
>>Fast in jeder System verwendet.
>
>
> 
>>[!check] Vorteile
>>- Weit verbreitet
>>- Multi-Channel-Ansatz
>>- Komplexe UIs abbildbar
> 
>>[!fail] Nachteile
>>- Initial hoher Lernaufwand 
>>- Kann schnell unübersichtlich werden

>[!tip] Conversational User Interface
>![LF10 Benutzerschnittstellen gestalten und entwickeln-20240827005332750.png](/img/user/02%20-%20RESOURCES/Files/LF10%20Benutzerschnittstellen%20gestalten%20und%20entwickeln-20240827005332750.png)
>>Interaktive mit menschlicher Sprache.
>
>
> 
>>[!check] Vorteile
>>- Zero Lernkurve
>>- Reagiert wie ein menschlicher Berater
>>- Versteht auch komplexe Eingaben
> 
>>[!fail] Nachteile
>>- Fehlende Akzeptanz: Menschen mögen es nicht, mit Maschinen zu reden!







___
___
___
>[!info] 
>Diese Zusammenfassung basiert auf den Materialien von Herrn [Alfred Walter](https://www.linkedin.com/in/artingo/?originalSubdomain=de).  
>Die Informationen und Konzepte wurden aus den von ihm bereitgestellten Lehrunterlagen und Vorlesungen entnommen. 
>Alle Bilder, die hier gepostet wurden, wurden in meiner eigenen Umgebung erstellt, stammen aus dem Buch [Westermann](https://www.westermann.de/reihe/ITBERUF2020/IT-Berufe?a=1) oder aus den PDF-Präsentationen von Herrn [Alfred Walter](https://www.linkedin.com/in/artingo/?originalSubdomain=de).  
>Mein Ziel war es, die wesentlichen Punkte zusammenzufassen und die Kerninhalte verständlich darzustellen.
