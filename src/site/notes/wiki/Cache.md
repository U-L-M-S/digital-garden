---
{"dg-publish":true,"permalink":"/wiki/cache/","tags":["performance/optimierung","speicher/zwischenspeicher"],"noteIcon":"","updated":"2026-07-11T09:09:09.277+02:00","dg-note-properties":{"aliases":["Zwischenspeicher","Caching"],"created_date":"2024-09-04","links":null,"tags":["performance/optimierung","speicher/zwischenspeicher"]}}
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