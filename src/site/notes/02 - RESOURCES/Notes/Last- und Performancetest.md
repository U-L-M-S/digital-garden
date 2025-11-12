---
{"dg-publish":true,"permalink":"/02-resources/notes/last-und-performancetest/","tags":["qualitaetssicherung/performance","testing/nonfunctional","AP2025/neu","GFN/prüfungsrelevant/AP2"],"noteIcon":"","updated":"2025-11-12T09:52:58.767+01:00"}
---

>Last- und Performancetest prüfen, wie sich Software unter verschiedenen Belastungen verhält.
>>Sie messen, ob ein System schnell genug ist und auch unter hoher Last stabil läuft.

>[!summary] Was sind Last- und Performancetests?
>- **Belastungstest:** Funktioniert es unter Last?
>- **Geschwindigkeitstest:** Ist es schnell genug?
>- **Stabilitätstest:** Bleibt es stabil?

```
LAST- UND PERFORMANCETEST - KONZEPT

Normale Situation       Hohe Last
     │                     │
     ▼                     ▼
┌─────────┐          ┌─────────┐
│ 10 User │          │1000 User│
└─────────┘          └─────────┘
     │                     │
     ▼                     ▼
 Schnell?             Schnell?
 Stabil?              Stabil?

 Ziel: System muss IMMER funktionieren!
```

>[!important] Test-Arten (🆕 NEU 2025)
>
>**1. Load Testing (Lasttest)**
>```
>Normale erwartete Last simulieren
>
>Beispiel: 100 gleichzeitige Benutzer
>         ├─> Server antwortet in < 2 Sek?
>         └─> Keine Fehler?
>```
>
>**2. Stress Testing (Stresstest)**
>```
>System bis zur Grenze belasten
>
>Beispiel: Immer mehr User hinzufügen
>         100 → 500 → 1000 → 5000 User
>         Wann bricht System zusammen?
>```
>
>**3. Volume Testing (Volumentest)**
>```
>Große Datenmengen verarbeiten
>
>Beispiel: Datenbank mit 1 Mio. Einträgen
>         Ist Suche noch schnell?
>```
>
>**4. Spike Testing (Spitzentest)**
>```
>Plötzliche Laststeigerung
>
>Beispiel: Black Friday - 10 → 10.000 User
>         Verkraftet Server den Ansturm?
>```

```
TEST-ARTEN VISUALISIERT

Last über Zeit

LOAD TEST
Last│ ████████████████  (konstant)
    └──────────────────> Zeit

STRESS TEST
Last│          ████████ (steigend bis Crash)
    │       ████
    │    ███
    └──────────────────> Zeit

SPIKE TEST
Last│    ███            (plötzlich hoch)
    │  ██   ██
    │ █       █
    └──────────────────> Zeit

VOLUME TEST
Daten│ ████████████████ (große Menge)
     └──────────────────> Zeit
```

>[!example] Performance-Metriken (Was wird gemessen?)
>
>**1. Response Time (Antwortzeit)**
>```
>User klickt → Wie lange bis Antwort?
>
>Gut:      < 1 Sekunde
>OK:       1-3 Sekunden
>Schlecht: > 3 Sekunden
>```
>
>**2. Throughput (Durchsatz)**
>```
>Wie viele Anfragen pro Sekunde?
>
>Beispiel: 1000 Requests/Sekunde
>```
>
>**3. Concurrent Users (Gleichzeitige Nutzer)**
>```
>Wie viele User gleichzeitig?
>
>Beispiel: System unterstützt 500 gleichzeitige User
>```
>
>**4. Resource Utilization (Ressourcenverbrauch)**
>```
>CPU: 80%  ⚠️ (zu hoch!)
>RAM: 60%  ✓  (OK)
>Disk: 40% ✓  (OK)
>```

```
PERFORMANCE-TEST ABLAUF

┌────────────────────────┐
│ 1. BASELINE MESSEN     │
│  Wie schnell ist es    │
│  ohne Last?            │
└────────────────────────┘
          ↓
┌────────────────────────┐
│ 2. LAST SIMULIEREN     │
│  Virtuelle User        │
│  erzeugen              │
└────────────────────────┘
          ↓
┌────────────────────────┐
│ 3. METRIKEN SAMMELN    │
│  Antwortzeiten,        │
│  Fehlerrate, CPU etc.  │
└────────────────────────┘
          ↓
┌────────────────────────┐
│ 4. ENGPÄSSE FINDEN     │
│  Wo wird es langsam?   │
│  Was bricht zuerst?    │
└────────────────────────┘
          ↓
┌────────────────────────┐
│ 5. OPTIMIEREN          │
│  Probleme beheben      │
└────────────────────────┘
```

>[!tip] Warum sind diese Tests wichtig?
>**Verhindert Probleme in Produktion:**
>- ✅ Kein Serverabsturz bei vielen Usern
>- ✅ Schnelle Ladezeiten bleiben erhalten
>- ✅ Skalierbarkeit ist gesichert
>- ✅ Bessere Benutzererfahrung

>[!example] Praxis-Beispiel
>**Online-Shop startet Rabattaktion:**
>```
>Vor Aktion:  100 User/Minute
>Bei Aktion: 5000 User/Minute
>
>Performance-Test zeigt:
>  ├─> Datenbank zu langsam
>  ├─> Webserver Überlastung
>  └─> Lösung: Caching + mehr Server
>
>Ergebnis: Aktion läuft reibungslos! ✓
>```

>[!warning] Häufige Probleme
>- **Speicherlecks:** RAM läuft voll
>- **Datenbankflaschenhals:** Zu langsame Queries
>- **Netzwerkprobleme:** Bandbreite zu gering
>- **Ineffizienter Code:** Algorithmen zu langsam

>[!note] Tools für Performance-Tests
>- **JMeter:** Open Source Lasttesting
>- **Gatling:** Für Web-Anwendungen
>- **LoadRunner:** Enterprise-Tool
>- **Apache Bench:** Einfaches CLI-Tool