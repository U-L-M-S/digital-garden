---
{"dg-publish":true,"permalink":"/02-resources/notes/power-on-self-test/","tags":["hardware/firmware","diagnostik/test"],"noteIcon":"","updated":"2025-10-29T12:59:09.240+01:00"}
---


> Automatischer Selbsttest beim Computer-Start - prüft ob grundlegende Hardware-Komponenten funktionsfähig sind.

>> Wird vom [[02 - RESOURCES/Notes/BIOS\|BIOS]]/[[02 - RESOURCES/Notes/UEFI\|UEFI]] durchgeführt bevor das [[02 - RESOURCES/Notes/Betriebssystem\|Betriebssystem]] gestartet wird.

>[!info] POST-Ablauf
>**Test-Reihenfolge:**
>1. **[[Prozessor\|Prozessor]]** - CPU-Grundfunktionen
>2. **[[02 - RESOURCES/Notes/RAM\|RAM]]** - Speicher-Tests
>3. **Grafikkarte** - Video-Ausgabe initialisieren
>4. **Tastatur/Maus** - Eingabegeräte prüfen
>5. **Festplatten** - Storage-Devices erkennen
>6. **Andere Hardware** - Peripheriegeräte scannen

>[!info] Fehler-Signale
>**Bei Problemen:**
>- **Piep-Codes** - verschiedene Signaltöne
>- **LED-Codes** - Mainboard-Lämpchen
>- **POST-Karten** - Diagnosekarten mit Codes
>- **Bildschirm-Meldungen** - wenn Display funktioniert

>[!example] Typische Piep-Codes
>```
>1 kurzer Piep:    Alles OK, normaler Start
>3 lange Pieps:    RAM-Problem  
>Endlos-Piepen:    CPU oder Mainboard defekt
>Kein Piep:        Netzteil oder kompletter Ausfall
>```

>[!success] Erfolgreicher POST
>Nach erfolgreichem Test:
>- Hardware-Übersicht anzeigen
>- Boot-Geräte in eingestellter Reihenfolge prüfen
>- [[02 - RESOURCES/Notes/Betriebssystem\|Betriebssystem]] vom ersten verfügbaren Gerät laden

>[!caution] POST-Fehler
>**Häufige Ursachen:**
>- **RAM nicht richtig eingesteckt**
>- **Grafikkarte lose**
>- **CPU-Überhitzung**
>- **Netzteil zu schwach**

>[!tip] 
>Bei POST-Fehlern: alle Verbindungen prüfen, RAM neu einsetzen, minimale Konfiguration testen.

---