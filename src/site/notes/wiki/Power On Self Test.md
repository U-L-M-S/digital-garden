---
{"dg-publish":true,"permalink":"/wiki/power-on-self-test/","tags":["informatik/hardware","informatik/software"],"noteIcon":"","updated":"2026-07-19T03:56:26.746+02:00","dg-note-properties":{"tags":["informatik/hardware","informatik/software"],"aliases":["Boot-Test"],"links":null,"created_date":"2024-12-19"}}
---


> Automatischer Selbsttest beim Computer-Start - prüft, ob grundlegende Hardware-Komponenten funktionsfähig sind.

>> Wird vom [[wiki/BIOS\|BIOS]]/[[wiki/UEFI\|UEFI]] durchgeführt, bevor das [[wiki/Betriebssystem\|Betriebssystem]] gestartet wird.

>[!info] POST-Ablauf
>**Test-Reihenfolge:**
>1. **[[Prozessor\|Prozessor]]** - CPU-Grundfunktionen
>2. **[[wiki/RAM\|RAM]]** - Speicher-Tests
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
>- [[wiki/Betriebssystem\|Betriebssystem]] vom ersten verfügbaren Gerät laden

>[!caution] POST-Fehler
>**Häufige Ursachen:**
>- **RAM nicht richtig eingesteckt**
>- **Grafikkarte lose**
>- **CPU-Überhitzung**
>- **Netzteil zu schwach**

>[!tip] 
>Bei POST-Fehlern: alle Verbindungen prüfen, RAM neu einsetzen, minimale Konfiguration testen.

---