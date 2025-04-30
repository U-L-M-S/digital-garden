---
{"dg-publish":true,"permalink":"/02-resources/notes/5-programmierungregeln/","tags":["code","code/algorithmus"]}
---

>Das sind die fünf Standard-Programmierungsregeln, die von Rob Pike erstellt wurden, und ich werde ihnen ab jetzt schrittweise folgen.  
>>Sie haben das Ziel, den Code einfacher, effizienter und lesbarer zu machen.
___

1. **Du sollst nicht auf Geschwindigkeit optimieren.**

>	Optimierung sollte nur dann geschehen, wenn es ein bewiesenes Problem gibt.
>	Frühzeitige Optimierungen führen oft zu kompliziertem und weniger verständlichem Code.

2. **Lass die Maschinen machen, was sie gut können.**
    
>	Maschinen sind darauf ausgelegt, repetitive und schnelle Berechnungen durchzuführen. 
>	Code sollte die Stärken der Maschine nutzen und nicht versuchen, 
>	Arbeit zu "übernehmen", die der Compiler oder die Laufzeitumgebung besser erledigen kann.

3. **Lies deinen Code laut vor.**
    
>	Wenn Code schwer verständlich klingt, dann ist er es wahrscheinlich auch.
>	Klarheit im Code wird durch eine klare Ausdrucksweise gefördert.

4. **Arbeite mit den Werkzeugen, nicht gegen sie.**
    
>	Nutze die Tools und Standardmethoden der Sprache, um Aufgaben zu lösen, anstatt „workarounds“ zu suchen, die das Verständnis des Codes erschweren.

5. **Programmiere so, als würdest du die Arbeit an jemanden abgeben.**
    
>	Schreibe deinen Code, als ob ein anderer Entwickler oder dein zukünftiges Ich ihn verstehen und erweitern muss.