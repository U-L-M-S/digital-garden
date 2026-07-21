---
{"dg-publish":true,"permalink":"/wiki/cache/","tags":["informatik/system","informatik/hardware"],"noteIcon":"","updated":"2026-07-19T03:56:26.000+02:00","dg-note-properties":{"aliases":["Zwischenspeicher","Caching"],"created_date":"2024-09-04","links":null,"tags":["informatik/system","informatik/hardware"]}}
---


>[[wiki/Cache\|Cache]] speichert häufig benötigte Daten zwischen für schnelleren Zugriff.
>>Wie ein Notizzettel mit den wichtigsten Sachen für schnellen Zugriff.

>[!example] Cache Typen
>- **[[wiki/Docker\|Docker]] Layer [[wiki/Cache\|Cache]]** - Beschleunigt Image Builds
>- **Application [[wiki/Cache\|Cache]]** - Redis, Memcached
>- **DNS [[wiki/Cache\|Cache]]** - Beschleunigt Name Resolution
>- **Web [[wiki/Cache\|Cache]]** - Nginx, Varnish

# CPU-Cache (Hardware)
___
>Schneller Zwischenspeicher zwischen [[wiki/Register\|Register]]n und [[wiki/RAM\|RAM]], der den ==von-Neumann-Flaschenhals== entschärft (siehe [[wiki/von-Neumann-Zyklus\|von-Neumann-Zyklus]]). Hält **häufig benutzte** Daten vor.

- Kriterium = **Lokalität**:
	- *zeitlich*: zuletzt benutzte Daten kommen bald wieder dran.
	- *räumlich*: benachbarte Daten werden vermutlich auch bald gebraucht → es wird gleich der **ganze Block** geladen.
- 3 Ebenen: **L1** (am nächsten an der CPU, am schnellsten) → L2 → L3. L1+L2 pro Core, **L3 gemeinsam**. Einordnung: siehe [[wiki/Speicherhierarchie\|Speicherhierarchie]].

>[!example] Block-Mapping (Modulo)
>L2-Cache mit **512 Zeilen**, Zeilengröße 64 Byte. Byte mit Adresse 222433:
>$$\text{Block} = \left\lfloor \tfrac{222433}{64} \right\rfloor = 3475 \quad\Rightarrow\quad \text{Zeile} = 3475 \bmod 512 = 403$$
>Ist die Zeile schon belegt → alter Inhalt wird verdrängt (Cache Eviction). Echte Caches haben mehrere Spalten = **Assoziativität** (z.B. 8-fach assoziativ).

>[!warning] Cache & Sicherheit
>Unterschiedliche Ladezeiten (Cache-Hit vs. -Miss) werden für **Cache-Timing-Angriffe** ausgenutzt — auch [[wiki/Meltdown & Spectre\|Meltdown & Spectre]] (2017) basieren darauf.

# Cache-Hierarchie: L1, L2, L3

| | **L1-Cache** | **L2-Cache** | **L3-Cache** |
| :--- | :--- | :--- | :--- |
| Größe | KB (1–64 KB) | 256 KB – 1 MB | 2–32 MB |
| Latenz | ~1–4 Takte | ~10–20 Takte | ~40–75 Takte |
| Lage | pro Core (je eine für Daten & Befehle) | pro Core | **gemeinsam für alle Cores** |
| Zugriffszeit | < 1 ns | ~4 ns | ~8 ns |

- **L1 ist am schnellsten, aber teuer** → kleine Größe. **L3 ist größer, dafür langsamer**, teilt sich aber alle Cores (spart Platz).
- **Hit-Rate** (wie oft ist Daten/Befehle schon im Cache): L1 typisch 90–95%, L2/L3 niedriger. Bei Cache-Miss muss langsam aus RAM geholt werden.

# Write-Through vs. Write-Back

Wie werden Änderungen behandelt, wenn Daten im Cache sind?

| | **Write-Through** | **Write-Back** (Dirty-Bit) |
| :--- | :--- | :--- |
| Schreib-Strategie | sofort RAM updaten | nur Cache ändern, später → RAM |
| Konsistenz | RAM immer aktuell (Multicore-sicher) | RAM könnte veraltet sein |
| Performance | langsamer (RAM ist 100× langsamer) | schneller (wartet nicht auf RAM) |
| Vorteil | Fehler beim Absturz weniger dramatisch | hohe Performance |
| Nachteil | Performance-Einbuße | braucht Fehlerbehandlung |

- **Write-Back ist Standard** in modernen Systemen; Betriebssystem regelt das Zurückschreiben. Problem: Absturz zwischen Änderung im Cache und Rückschreib → Datenverlust.

# Cache-Kohärenz (Multi-Core)

Wenn mehrere Cores je ihren eigenen L1-Cache haben, können sie **veraltete Kopien** derselben Daten halten → **Cache-Kohärenz-Problem**.

> **Szenario:** Core A liest Wert aus der Adresse `0x1000` (= 5) in seinen L1. Core B schreibt eine 7 dahin. Core A sieht immer noch 5!

**Lösungsansätze:**
- **[[Snoopy Cache\|Snoopy Cache]]** (einfach, teuer): Alle Cores beobachten die Busleitungen → wenn einer schreibt, invalidierten die anderen ihre Kopie.
- **[[Directory-based\|Directory-based]]** (für viele Cores): zentrale Liste, wer den Block wo hat. Nur betroffene Cores werden benachrichtigt.

- De facto alle modernen Prozessoren (x86, ARM) nutzen **Kohärenzprotokolle** automatisch — der Programmierer merkt davon nichts (ist aber wichtig für richtige Multithread-Programmierung).