---
{"dg-publish":true,"permalink":"/02-resources/notes/user-interface/","tags":["GFN/LF10"],"noteIcon":"","updated":"2024-08-28T10:59:17.000+02:00"}
---

>Schnittstelle, über die Menschen mit Computern oder [[02 - RESOURCES/Notes/Software\|Software]] interagieren. Sie umfasst alle visuellen Elemente wie Schaltflächen, Menüs und Symbole, die zur Bedienung verwendet werden. 
>Ziel ist es, die Nutzung intuitiv und einfach zu gestalten.
>>Zunächst wird klargestellt, wie wichtig die **Eingabe** und die **Ausgabe** sind.  

Die Eingabe ermöglicht die Kommunikation des Nutzers mit dem Gerät. Theoretisch ist ein Gerät ohne Eingabe möglich, aber es gibt dann keine Möglichkeit, eine [[02 - RESOURCES/Notes/dynamic\|dynamische]] Ausgabe zu haben. Wie bereits gesagt, ist die Ausgabe die Kommunikation des Geräts mit dem Nutzer.

>[!important] Ausgabe  != Reaktion
Nehmen wir an, ich öffne eine automatische Tür mit einer Chipkarte, 
und diese macht ein "BIP", bevor sie sich automatisch öffnet.
> Das "BIP" ist die Ausgabe, und das Öffnen der Tür ist die Reaktion.

Es ist jedoch wichtig zu beachten, dass manche Systeme keine Ausgabe benötigen, da die Reaktion intuitiv ist und eine Ausgabe für den Nutzer nicht sinnvoll wäre (**Lenkrad**). 
Achtet bitte darauf, dass dies zu vielen Problemen in der Benutzerschnittstelle führen kann, wenn die [[02 - RESOURCES/Notes/UI\|UI]] nicht intuitiv ist.

>[!summary] 
>Okay. Lass uns zusammenzufassen.
>Jeder Gerät/[[02 - RESOURCES/Notes/Software\|Software]] besitzt eine Benutzerschnittstelle. Diese können enthalten:
>- Eingabe
>- Ausgabe
>- Eingabe & Ausgabe

#### Hier sind die aktuell am häufigsten verwendeten Benutzerschnittstellen

>[!tip] Command Line Interface (CLI)
>![LF10 Benutzerschnittstellen gestalten und entwickeln-20240827002824359.png](/img/user/02%20-%20RESOURCES/Files/IMG/LF10%20Benutzerschnittstellen%20gestalten%20und%20entwickeln-20240827002824359.png)
>>Es wird häufig von Programmierern verwendet.
>>>- Bash
>>>- Windows Command Prompt
>>>- [[02 - RESOURCES/Notes/Git\|Git]] Bash
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
>![LF10 Benutzerschnittstellen gestalten und entwickeln-20240827003945993.png](/img/user/02%20-%20RESOURCES/Files/IMG/LF10%20Benutzerschnittstellen%20gestalten%20und%20entwickeln-20240827003945993.png)
>>Einfache Benutzerschnittstellen mit grundlegenden Optionen werden häufig bei Geldautomaten, im BIOS/UEFI und in Kassensystemen verwendet.
>>>- BIOS Setup
>>>- ATM
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
>![LF10 Benutzerschnittstellen gestalten und entwickeln-20240827004807000.png](/img/user/02%20-%20RESOURCES/Files/IMG/LF10%20Benutzerschnittstellen%20gestalten%20und%20entwickeln-20240827004807000.png)
>>Fast in jedem System verwendet.
>>>- Windows 11
>>>- macOS Finder
>>>- Google Chrome
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
>![LF10 Benutzerschnittstellen gestalten und entwickeln-20240827005332750.png](/img/user/02%20-%20RESOURCES/Files/IMG/LF10%20Benutzerschnittstellen%20gestalten%20und%20entwickeln-20240827005332750.png)
>>Interaktion mit menschlicher Sprache.
>>>- Siri 
>>>- Amazon Alexa
>>>- Cortana
>
>>[!check] Vorteile
>>- Zero Lernkurve
>>- Reagiert wie ein menschlicher Berater
>>- Versteht auch komplexe Eingaben
> 
>>[!fail] Nachteile
>>- Fehlende Akzeptanz (Menschen mögen es nicht, mit Maschinen zu reden!)

>[!tip] Virtual reality user interface
>![User Interface-20240827215259892.png](/img/user/02%20-%20RESOURCES/Files/IMG/User%20Interface-20240827215259892.png)
>>Weiterentwicklung des [[02 - RESOURCES/Notes/GUI\|GUI]]s.
>>>- Handgestensteuerung
>>>- Virtuelle Controller
>>>- Blicksteuerung
>
> 
>>[!check] Vorteile
>>- Immersive Erfahrung
>>- Natürliche Interaktion
> 
>>[!fail] Nachteile
>>- Ermüdung und Unwohlsein
>>- Hohe technische Anforderungen



>[!summary] 
>Wie bereits gesagt, ist die [[02 - RESOURCES/Notes/GUI\|GUI]] in unserer heutigen Zeit am weitesten verbreitet.
>
>Weitere Gründe dafür sind die Arbeit mit mehreren Fenstern (Multitasking) und die intuitive Bedienung, als würde der Nutzer ein analoges Werkzeug verwenden.