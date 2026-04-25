---
{"dg-publish":true,"permalink":"/02-resources/notes/docker/","tags":["informatik/virtualisierung/docker","containerisierung"],"noteIcon":"","updated":"2025-11-06T15:31:12.000+01:00","dg-note-properties":{"aliases":["Docker","Container Platform","Docker Engine"],"created_date":"2024-09-04","links":null,"tags":["informatik/virtualisierung/docker","containerisierung"]}}
---

>**Docker** ist eine [[02 - RESOURCES/Notes/Containerisierung\|Containerisierung]]s-Plattform, die Anwendungen in isolierten Umgebungen verpackt und startet.
>>Löst das "auf meinem Computer funktioniert es aber" Problem durch einheitliche [[02 - RESOURCES/Notes/Docker Container\|Docker Container]] Umgebungen.

---

# Visualisierung: Docker vs Virtuelle Maschinen

```
VIRTUELLE MASCHINEN:                    DOCKER CONTAINER:
┌─────────────────────────┐            ┌─────────────────────────┐
│  App A   │   App B      │            │  App A   │   App B      │
├──────────┼──────────────┤            ├──────────┼──────────────┤
│ Guest OS │  Guest OS    │            │  Docker Engine          │
├──────────┴──────────────┤            ├─────────────────────────┤
│   Hypervisor            │            │   Host OS               │
├─────────────────────────┤            ├─────────────────────────┤
│   Host OS               │            │   Hardware              │
├─────────────────────────┤            └─────────────────────────┘
│   Hardware              │
└─────────────────────────┘
❌ GB Speicher              ✅ MB Speicher
❌ Minuten Start            ✅ Sekunden Start
```

---

# Was ist Docker?

>Docker ist eine Software die [[02 - RESOURCES/Notes/Docker Container\|Docker Container]] erstellt und verwaltet.

## Grundkonzepte

```
DOCKER WORKFLOW:
┌──────────────┐    build     ┌──────────────┐    run      ┌──────────────┐
│              │─────────────►│              │────────────►│              │
│  Dockerfile  │              │ Docker Image │             │  Container   │
│  (Rezept)    │              │  (Bauplan)   │             │  (Läuft!)    │
└──────────────┘              └──────────────┘             └──────────────┘
```

| Konzept | Beschreibung | Analogie |
|---------|-------------|----------|
| **[[02 - RESOURCES/Notes/Dockerfile\|Dockerfile]]** | Anleitung wie das Image gebaut wird | Kochrezept |
| **[[02 - RESOURCES/Notes/Docker Image\|Docker Image]]** | Bauplan für den Container | Foto/Vorlage |
| **[[02 - RESOURCES/Notes/Docker Container\|Docker Container]]** | Laufende Instanz vom Image | Laufendes Programm |
| **[[02 - RESOURCES/Notes/Docker Registry\|Docker Registry]]** | Sammlung von Images | App Store |
| **[[02 - RESOURCES/Notes/Docker Hub\|Docker Hub]]** | Öffentliche Registry | Public App Store |

---

# Docker vs Virtuelle Maschinen

| Aspekt | [[02 - RESOURCES/Notes/Docker Container\|Docker Container]] | [[02 - RESOURCES/Notes/Virtuelle Maschinen\|Virtuelle Maschinen]] |
|--------|---------------------|------------------------|
| **Ressourcen** | Teilt Host OS Kernel | Eigenes komplettes OS |
| **Startzeit** | ⚡ Sekunden | 🐌 Minuten |
| **Speicher** | 💾 MB (Megabytes) | 📀 GB (Gigabytes) |
| **Isolation** | Prozess-Level | Hardware-Level |
| **Performance** | ✅ Native | ⚠️ Overhead durch Hypervisor |
| **Portabilität** | ✅ Sehr hoch | ⚠️ OS-abhängig |

---

# Docker Architektur

```
DOCKER ARCHITEKTUR:
┌─────────────────────────────────────────────────────────┐
│                    Docker Client                         │
│           (docker build, docker pull, docker run)        │
└────────────────────┬────────────────────────────────────┘
                     │ Docker API
┌────────────────────▼────────────────────────────────────┐
│                  Docker Daemon                           │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐              │
│  │Container │  │Container │  │Container │              │
│  │    A     │  │    B     │  │    C     │              │
│  └──────────┘  └──────────┘  └──────────┘              │
│                                                          │
│  Images:  nginx │ postgres │ redis │ node │ python     │
└──────────────────────────────────────────────────────────┘
```

**Komponenten:**
- **Docker Client** - Befehlszeilenwerkzeug (CLI)
- **Docker Daemon** - Hintergrundprozess der Container verwaltet
- **Docker Registry** - Speicher für Images (z.B. [[02 - RESOURCES/Notes/Docker Hub\|Docker Hub]])
- **Docker Images** - Read-only Templates
- **Docker Container** - Laufende Image-Instanzen

---

# Installation

## Linux (Ubuntu/Debian)

```bash
# Alte Versionen entfernen
sudo apt-get remove docker docker-engine docker.io containerd runc

# Abhängigkeiten installieren
sudo apt-get update
sudo apt-get install \
    ca-certificates \
    curl \
    gnupg \
    lsb-release

# Docker GPG Key hinzufügen
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg

# Repository hinzufügen
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

# Docker installieren
sudo apt-get update
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-compose-plugin

# Docker ohne sudo verwenden
sudo usermod -aG docker $USER
```

## Windows

```powershell
# Docker Desktop für Windows herunterladen
# https://www.docker.com/products/docker-desktop

# WSL 2 Backend empfohlen
wsl --install
wsl --set-default-version 2
```

## macOS

```bash
# Docker Desktop für Mac herunterladen
# https://www.docker.com/products/docker-desktop

# Oder via Homebrew
brew install --cask docker
```

## Installation prüfen

```bash
# Docker Version
docker --version
# Output: Docker version 24.0.0, build xyz

# Docker läuft?
docker run hello-world
```

---

# Erste Schritte

## Hello World Container

```bash
# Einfachster Container
docker run hello-world

# Was passiert:
# 1. Docker sucht Image lokal
# 2. Wenn nicht gefunden: Download von Docker Hub
# 3. Container wird gestartet
# 4. Container führt Befehl aus
# 5. Container stoppt automatisch
```

## Nginx Web Server starten

```bash
# Nginx Container im Hintergrund starten
docker run -d -p 8080:80 --name mein-webserver nginx

# Öffne Browser: http://localhost:8080
# Du siehst die Nginx Willkommensseite!

# Container stoppen
docker stop mein-webserver

# Container löschen
docker rm mein-webserver
```

**Was bedeutet das?**
- `-d` = Detached (im Hintergrund)
- `-p 8080:80` = Port 8080 (Host) → Port 80 (Container)
- `--name` = Container-Name vergeben
- `nginx` = Image-Name

---

# Wichtige Befehle - Schnellreferenz

## Container Befehle

```bash
# Container starten
docker run nginx
docker run -d nginx              # Hintergrund
docker run -it ubuntu bash       # Interaktiv

# Container verwalten
docker ps                        # Laufende Container
docker ps -a                     # Alle Container
docker stop container-id         # Container stoppen
docker start container-id        # Container starten
docker restart container-id      # Container neustarten
docker rm container-id           # Container löschen
docker rm -f container-id        # Forciert löschen

# Container Infos
docker logs container-id         # Logs anzeigen
docker logs -f container-id      # Live logs
docker top container-id          # Prozesse
docker stats                     # Ressourcen
docker inspect container-id      # Details

# In Container einloggen
docker exec -it container-id bash
```

## Image Befehle

```bash
# Images verwalten
docker images                    # Alle lokalen Images
docker pull nginx                # Image herunterladen
docker build -t name:tag .       # Image bauen
docker tag image new-name:tag    # Image umbenennen
docker push username/image       # Image hochladen
docker rmi image-id              # Image löschen

# Image Infos
docker history image-id          # Image History
docker inspect image-id          # Image Details
```

## System Befehle

```bash
# System Info
docker version                   # Docker Version
docker info                      # System Info
docker system df                 # Speicherverbrauch

# Aufräumen
docker system prune              # Unused data löschen
docker system prune -a           # Alles löschen
docker container prune           # Stopped Container
docker image prune               # Unused Images
docker volume prune              # Unused Volumes
```

---

# Docker Hauptkonzepte

## 
<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/02-resources/notes/docker-container/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




>**Docker Container** sind laufende Instanzen von [[02 - RESOURCES/Notes/Docker Image\|Docker Image]]s mit isolierter Laufzeitumgebung.
>>Wie ein Programm das in seiner eigenen kleinen Welt läuft - komplett getrennt von anderen Containern.

---

# Visualisierung: Container Lifecycle

```
CONTAINER LIFECYCLE:
┌──────────┐   docker run    ┌──────────┐
│          │────────────────►│          │
│  Image   │                 │  Created │
│          │                 │          │
└──────────┘                 └────┬─────┘
                                  │ start
                                  ▼
                             ┌──────────┐
                     ┌───────┤ Running  │
                     │       │          │
                     │       └────┬─────┘
                     │            │
                restart        stop/kill
                     │            │
                     │            ▼
                     │       ┌──────────┐   rm   ┌──────────┐
                     └──────►│ Stopped  │───────►│ Deleted  │
                             │          │        │          │
                             └──────────┘        └──────────┘
```

---

# Container States

| State | Beschreibung | Rückgängig? |
|-------|-------------|-------------|
| **Created** | Container erstellt, aber nicht gestartet | ✅ start |
| **Running** | Container läuft aktiv | ✅ stop/kill |
| **Paused** | Container pausiert | ✅ unpause |
| **Stopped** | Container gestoppt | ✅ start |
| **Deleted** | Container gelöscht | ❌ Permanent |

---

# Container vs Image

```
IMAGE vs CONTAINER:
┌────────────────────────┐
│   Docker Image         │
│   (Read-only)          │
│                        │
│   nginx:latest         │
│   - OS Layer           │
│   - Nginx Layer        │
│   - Config Layer       │
└───────┬────────────────┘
        │ docker run (mehrfach möglich!)
        │
        ├──────┬──────┬──────┐
        ▼      ▼      ▼      ▼
    ┌──────┐ ┌──────┐ ┌──────┐
    │ C1   │ │ C2   │ │ C3   │  ← Laufende Container
    │Running│ │Running│ │Stopped│
    └──────┘ └──────┘ └──────┘
```

**Unterschied:**
- **Image** = Vorlage (unveränderlich)
- **Container** = Laufende Kopie (veränderlich, temporär)

---

# Container erstellen und starten

## Einfacher Start

```bash
# Container starten (foreground)
docker run nginx
# Startet nginx, bindet Terminal

# Container im Hintergrund (detached)
docker run -d nginx
# Gibt Container-ID zurück: 3f2e...

# Mit Namen
docker run -d --name mein-webserver nginx
# Jetzt kannst du "mein-webserver" statt ID verwenden
```

## Interaktive Container

```bash
# Interaktiv mit Terminal
docker run -it ubuntu bash
# -i = Interactive (STDIN offen)
# -t = TTY (Terminal)

# Container erkunden:
root@abc123:/# ls
root@abc123:/# pwd
root@abc123:/# exit  # Container stoppt
```

## Container mit Optionen

```bash
# Port-Weiterleitung (Host:Container)
docker run -d -p 8080:80 nginx
# localhost:8080 → Container Port 80

# Volume mounten
docker run -d -p 8080:80 -v /host/pfad:/usr/share/nginx/html nginx

# Umgebungsvariablen setzen
docker run -d -e DATABASE_URL=postgres://... myapp

# Memory Limit
docker run -d --memory="512m" nginx

# CPU Limit
docker run -d --cpus="1.5" nginx

# Kombiniert
docker run -d \
  --name my-app \
  -p 8080:80 \
  -v $(pwd)/html:/usr/share/nginx/html \
  -e ENV=production \
  --memory="1g" \
  --cpus="2" \
  nginx:alpine
```

## Auto-Remove Container

```bash
# Container automatisch löschen nach Stop
docker run --rm nginx

# Nützlich für Tests:
docker run --rm -it ubuntu bash  # Nach exit automatisch gelöscht
```

---

# Container verwalten

## Container anzeigen

```bash
# Laufende Container
docker ps
# CONTAINER ID   IMAGE     COMMAND    CREATED    STATUS    PORTS    NAMES

# Alle Container (auch gestoppte)
docker ps -a

# Nur IDs anzeigen
docker ps -q

# Custom Format
docker ps --format "table {{.ID}}\t{{.Names}}\t{{.Status}}"

# Filter
docker ps --filter "status=running"
docker ps --filter "name=web"
```

## Container stoppen & starten

```bash
# Container stoppen (graceful)
docker stop container-id
docker stop mein-webserver

# Mehrere Container stoppen
docker stop container1 container2

# Alle laufenden Container stoppen
docker stop $(docker ps -q)

# Container forciert stoppen (SIGKILL)
docker kill container-id

# Container starten
docker start container-id

# Container neustarten
docker restart container-id

# Container pausieren/unpausieren
docker pause container-id
docker unpause container-id
```

---

# Container Informationen

## Logs

```bash
# Logs anzeigen
docker logs container-id

# Live Logs (follow)
docker logs -f container-id

# Letzte 100 Zeilen
docker logs --tail 100 container-id

# Mit Timestamps
docker logs -t container-id

# Seit bestimmter Zeit
docker logs --since "2023-01-01" container-id
docker logs --since "1h" container-id  # Letzte Stunde
```

## Container Details

```bash
# Alle Details (JSON)
docker inspect container-id

# Spezifische Info extrahieren
docker inspect -f '{{.State.Status}}' container-id
docker inspect -f '{{.NetworkSettings.IPAddress}}' container-id
docker inspect -f '{{.Config.Env}}' container-id

# Container Prozesse
docker top container-id

# Ressourcen Live-Überwachung
docker stats
docker stats container-id

# Container Änderungen anzeigen
docker diff container-id
# A = Added, C = Changed, D = Deleted
```

---

# In Container arbeiten

## Befehle ausführen

```bash
# In laufenden Container einloggen
docker exec -it container-id bash
docker exec -it container-id sh  # Wenn bash nicht verfügbar

# Als root User (wenn Container non-root läuft)
docker exec -it -u root container-id bash

# Einzelnen Befehl ausführen
docker exec container-id ls -la
docker exec container-id cat /etc/nginx/nginx.conf
docker exec container-id ps aux

# Mit Umgebungsvariablen
docker exec -e VAR=value container-id printenv
```

## Dateien kopieren

```bash
# Aus Container kopieren
docker cp container-id:/app/log.txt ./
docker cp container-id:/etc/nginx/nginx.conf ./backup/

# In Container kopieren
docker cp ./config.json container-id:/app/
docker cp ./files/ container-id:/data/

# Beispiel: Backup erstellen
docker cp mysql-container:/var/lib/mysql ./backup/
```

---

# Container löschen

## Einzeln löschen

```bash
# Container löschen (muss gestoppt sein)
docker rm container-id
docker rm mein-webserver

# Forciert löschen (auch laufende)
docker rm -f container-id

# Mehrere Container löschen
docker rm container1 container2 container3
```

## Bulk-Operationen

```bash
# Alle gestoppten Container löschen
docker container prune
# WARNING! This will remove all stopped containers.
# Are you sure? [y/N] y

# Alle Container stoppen UND löschen
docker stop $(docker ps -q)
docker rm $(docker ps -aq)

# Oder kombiniert:
docker ps -aq | xargs docker rm -f
```

---

# Container Persistenz

>[!warning] Wichtig
>Container sind **ephemeral** (vergänglich). Alle Änderungen im Container gehen verloren wenn er gelöscht wird!

```
OHNE VOLUME:                    MIT VOLUME:
┌──────────────┐               ┌──────────────┐
│  Container   │               │  Container   │
│              │               │              │
│  /data/      │               │  /data/ ─────┼───┐
│  file.txt    │               │              │   │
└──────────────┘               └──────────────┘   │
       │                                           │
    docker rm                                      │
       │                                           │
       ▼                                           ▼
   ❌ Verloren!                          ┌──────────────┐
                                         │   Volume     │
                                         │              │
                                         │  file.txt ✓  │
                                         └──────────────┘
                                         Bleibt erhalten!
```

**Lösung:** Verwende [[02 - RESOURCES/Notes/Docker Volumes\|Docker Volumes]] für persistente Daten!

```bash
# Mit Named Volume
docker run -d -v mydata:/data nginx

# Volume bleibt nach Container-Löschung erhalten
docker rm container-id  # Volume "mydata" existiert noch
```

---

# Container Networking

## Port-Mapping

```bash
# Port weiterleiten
docker run -d -p 8080:80 nginx
# Host:8080 → Container:80

# Mehrere Ports
docker run -d -p 8080:80 -p 8443:443 nginx

# Nur auf localhost binden
docker run -d -p 127.0.0.1:8080:80 nginx

# Alle Ports automatisch mappen
docker run -d -P nginx

# UDP Ports
docker run -d -p 5000:5000/udp myapp
```

## Container IP

```bash
# Container IP-Adresse anzeigen
docker inspect -f '{{.NetworkSettings.IPAddress}}' container-id

# Alle Netzwerk-Infos
docker inspect container-id | grep IPAddress
```

---

# Praktische Beispiele

## Web Server mit Custom HTML

```bash
# HTML Verzeichnis erstellen
mkdir -p ~/mywebsite
echo "<h1>Hello Docker!</h1>" > ~/mywebsite/index.html

# Nginx mit Custom HTML
docker run -d \
  --name mywebsite \
  -p 8080:80 \
  -v ~/mywebsite:/usr/share/nginx/html:ro \
  nginx:alpine

# Öffne: http://localhost:8080
```

## Datenbank Container

```bash
# PostgreSQL
docker run -d \
  --name postgres-db \
  -e POSTGRES_PASSWORD=secret \
  -e POSTGRES_USER=myuser \
  -e POSTGRES_DB=mydb \
  -v postgres-data:/var/lib/postgresql/data \
  -p 5432:5432 \
  postgres:14

# MySQL
docker run -d \
  --name mysql-db \
  -e MYSQL_ROOT_PASSWORD=secret \
  -e MYSQL_DATABASE=mydb \
  -v mysql-data:/var/lib/mysql \
  -p 3306:3306 \
  mysql:8.0

# Redis Cache
docker run -d \
  --name redis-cache \
  -p 6379:6379 \
  redis:alpine
```

## Development Container

```bash
# Node.js Development
docker run -it --rm \
  --name node-dev \
  -v $(pwd):/app \
  -w /app \
  -p 3000:3000 \
  node:16 \
  bash

# Im Container:
# npm init -y
# npm install express
# node server.js
```

---

# Container Monitoring

## Ressourcen überwachen

```bash
# Live Stats
docker stats

# Output:
# CONTAINER ID   NAME      CPU %   MEM USAGE / LIMIT   MEM %   NET I/O
# 3f2e5d1a      nginx     0.05%   2.5MB / 512MB       0.48%   1.2MB / 800KB

# Nur ein Container
docker stats mein-webserver

# Einmalige Anzeige (kein Stream)
docker stats --no-stream

# Custom Format
docker stats --format "table {{.Name}}\t{{.CPUPerc}}\t{{.MemUsage}}"
```

## Health Checks

```bash
# Container mit Health Check starten
docker run -d \
  --name webapp \
  --health-cmd="curl -f http://localhost/ || exit 1" \
  --health-interval=30s \
  --health-timeout=3s \
  --health-retries=3 \
  nginx

# Health Status prüfen
docker ps  # Zeigt "(healthy)" oder "(unhealthy)"
docker inspect --format='{{.State.Health.Status}}' webapp
```

---

# Troubleshooting

## Container startet nicht

```bash
# 1. Logs prüfen
docker logs container-id

# 2. Details ansehen
docker inspect container-id

# 3. Interaktiv testen
docker run -it image-name bash
# Manuell testen was schief läuft
```

## Container läuft langsam

```bash
# Ressourcen prüfen
docker stats container-id

# Events überwachen
docker events --filter container=container-id

# Prozesse im Container
docker top container-id
```

## Port-Konflikte

```bash
# Fehler: "port is already allocated"

# Lösung 1: Anderen Port verwenden
docker run -p 8081:80 nginx  # Statt 8080

# Lösung 2: Alten Container stoppen
docker ps  # Finde Container am Port
docker stop conflicting-container

# Lösung 3: Welcher Prozess nutzt Port?
# Linux/Mac:
lsof -i :8080
# Windows:
netstat -ano | findstr :8080
```

---

# Zusammenfassung

>[!summary] Docker Container Kernpunkte
>- **Lifecycle**: Created → Running → Stopped → Deleted
>- **Ephemeral**: Container-Daten gehen verloren ohne Volumes
>- **Isolation**: Jeder Container läuft isoliert
>- **Portabel**: Gleicher Container läuft überall gleich
>- **Leichtgewichtig**: Teilt Host OS Kernel
>- **Schnell**: Startet in Sekunden

>[!tip] Best Practices
>- Verwende `--name` für Container-Namen
>- Nutze `-d` für Hintergrund-Container
>- Setze Resource Limits (`--memory`, `--cpus`)
>- Verwende Volumes für persistente Daten
>- Nutze `--rm` für temporäre Container
>- Prüfe Logs mit `docker logs`

---

# Verwandte Konzepte

- [[02 - RESOURCES/Notes/Docker\|Docker]] - Hauptnotiz
- [[02 - RESOURCES/Notes/Docker Image\|Docker Image]] - Container werden aus Images erstellt
- [[02 - RESOURCES/Notes/Docker Volumes\|Docker Volumes]] - Persistente Daten
- [[02 - RESOURCES/Notes/Docker Networking\|Docker Networking]] - Container-Kommunikation
- [[02 - RESOURCES/Notes/Docker Compose\|Docker Compose]] - Multi-Container Management


</div></div>


## 
<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/02-resources/notes/docker-image/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




>**Docker Image**s sind Blaupausen oder Vorlagen für [[02 - RESOURCES/Notes/Docker Container\|Docker Container]] - wie Fotos die nicht verändert werden können.
>>Enthalten alles was die Anwendung braucht: OS, Libraries, Code und Konfiguration.

---

# Visualisierung: Image Layers

```
DOCKER IMAGE LAYERS:
┌────────────────────────┐
│   nginx:latest         │ ← Image Tag
├────────────────────────┤
│ Layer 5: CMD nginx     │ ← Startbefehl (5 KB)
├────────────────────────┤
│ Layer 4: COPY config   │ ← Konfiguration (50 KB)
├────────────────────────┤
│ Layer 3: RUN apt...    │ ← Nginx installiert (100 MB)
├────────────────────────┤
│ Layer 2: WORKDIR /app  │ ← Verzeichnis (1 KB)
├────────────────────────┤
│ Layer 1: FROM ubuntu   │ ← Base OS (80 MB)
└────────────────────────┘
Gesamt: ~180 MB
```

**Layer Eigenschaften:**
- Jeder Layer ist **read-only** (unveränderlich)
- Layers werden **geteilt** zwischen Images
- Nur neue Layers werden heruntergeladen
- **Caching** beschleunigt Builds

---

# Image vs Container

```
IMAGE → CONTAINER:
┌─────────────────┐
│  Docker Image   │ (Rezept/Bauplan)
│  nginx:latest   │
│  Read-only      │
└────────┬────────┘
         │ docker run (erstellt Container)
         ├──────┬──────┬──────┐
         ▼      ▼      ▼      ▼
     ┌─────┐┌─────┐┌─────┐┌─────┐
     │ C1  ││ C2  ││ C3  ││ C4  │ (Laufende Container)
     │R/W  ││R/W  ││R/W  ││R/W  │ (Writable Layer)
     └─────┘└─────┘└─────┘└─────┘
```

**Unterschied:**
- **Image** = Vorlage, unveränderlich, wiederverwendbar
- **Container** = Laufende Instanz, hat writable layer

---

# Image Tags

```
IMAGE NAMING:
<registry>/<repository>:<tag>
    │           │          │
    │           │          └─ Version (z.B. latest, 1.21, alpine)
    │           └─ Image Name (z.B. nginx, postgres)
    └─ Registry (z.B. docker.io, gcr.io)

BEISPIELE:
nginx:latest             → docker.io/nginx:latest
nginx:1.21-alpine        → Spezifische Version + Variant
ubuntu:20.04             → Ubuntu Version 20.04
postgres:14              → PostgreSQL Version 14
node:16-alpine           → Node.js 16 auf Alpine Linux
myuser/myapp:v1.0        → Custom Image auf Docker Hub
gcr.io/project/image:tag → Google Container Registry
```

---

# Images suchen und herunterladen

## Von Docker Hub suchen

```bash
# Image suchen
docker search nginx
docker search --limit 5 postgres

# Output:
# NAME          DESCRIPTION                          STARS   OFFICIAL
# nginx         Official build of Nginx.             15000   [OK]
```

## Images herunterladen (Pull)

```bash
# Image herunterladen
docker pull nginx
docker pull nginx:latest     # Explizit latest
docker pull nginx:1.21       # Spezifische Version
docker pull ubuntu:20.04

# Alle Tags eines Images
docker pull --all-tags nginx  # Vorsicht: Viele GB!

# Von anderer Registry
docker pull gcr.io/project/image:tag
```

## Lokale Images anzeigen

```bash
# Alle lokalen Images
docker images
docker image ls

# Output:
# REPOSITORY   TAG       IMAGE ID       CREATED        SIZE
# nginx        latest    605c77e624dd   2 weeks ago    141MB
# ubuntu       20.04     ba6acccedd29   3 weeks ago    72.8MB

# Nach Name filtern
docker images nginx
docker images ubuntu

# Nur IDs
docker images -q

# Mit Digest
docker images --digests

# Dangling Images (ohne Tag)
docker images -f dangling=true
```

---

# Image Details

## Image inspizieren

```bash
# Alle Details (JSON)
docker inspect nginx

# Spezifische Infos extrahieren
docker inspect -f '{{.Architecture}}' nginx
docker inspect -f '{{.Os}}' nginx
docker inspect -f '{{.Size}}' nginx

# Environment Variablen
docker inspect -f '{{.Config.Env}}' nginx

# Exposed Ports
docker inspect -f '{{.Config.ExposedPorts}}' nginx
```

## Image History

```bash
# Layer History anzeigen
docker history nginx

# Output:
# IMAGE          CREATED        CREATED BY                SIZE
# 605c77e624dd   2 weeks ago    /bin/sh -c #(nop) CMD    0B
# <missing>      2 weeks ago    /bin/sh -c #(nop) EXPOSE 80   0B
# <missing>      2 weeks ago    RUN /bin/sh -c apt...    100MB

# Ohne abgeschnittene Zeilen
docker history --no-trunc nginx

# Human-readable Größen
docker history -H nginx
```

## Image Layers

```bash
# Layer Details
docker image inspect nginx --format='{{.RootFS.Layers}}'

# Output:
# [
#   sha256:abc123...
#   sha256:def456...
#   sha256:ghi789...
# ]
```

---

# Images verwalten

## Images umbenennen (Tag)

```bash
# Image taggen
docker tag nginx mynginx:v1.0
docker tag nginx:1.21 nginx:production

# Für eigene Registry
docker tag myapp:latest username/myapp:latest
docker tag myapp:latest registry.company.com/myapp:v1.0

# Mehrere Tags für gleiches Image
docker tag nginx nginx:backup
docker tag nginx nginx:stable
```

## Images löschen

```bash
# Image löschen
docker rmi nginx
docker rmi nginx:1.21
docker image rm nginx

# Mit Image ID
docker rmi 605c77e624dd

# Forciert löschen
docker rmi -f nginx

# Mehrere Images
docker rmi nginx ubuntu postgres

# Alle Images löschen
docker rmi $(docker images -q)

# Dangling Images löschen
docker image prune

# Alle unbenutzten Images
docker image prune -a
# WARNING! This will remove all images without at least one container

# Mit Filter
docker image prune -a --filter "until=24h"
```

---

# Images bauen

## Aus Dockerfile

```bash
# Image aus Dockerfile bauen
docker build -t myapp:1.0 .
#            ↑          ↑
#         Tag Name   Build Context

# Mit anderem Dockerfile
docker build -t myapp -f Dockerfile.dev .

# Ohne Cache
docker build --no-cache -t myapp .

# Mit Build Arguments
docker build --build-arg VERSION=1.0 -t myapp .
docker build --build-arg NODE_ENV=production -t myapp .

# Target Stage (Multi-stage)
docker build --target production -t myapp .

# Mit Progress
docker build --progress=plain -t myapp .
```

## Aus Container

```bash
# Laufenden Container als Image speichern
docker commit container-id myimage:v1.0

# Mit Autor und Nachricht
docker commit \
  -a "Max Mustermann" \
  -m "Added custom config" \
  container-id \
  myimage:v1.0
```

---

# Images teilen

## Push to Registry

```bash
# Bei Docker Hub anmelden
docker login

# Image pushen
docker push username/myapp:1.0
docker push username/myapp:latest

# Alle Tags pushen
docker push username/myapp --all-tags

# Zu privater Registry
docker push registry.company.com/myapp:v1.0
```

## Image exportieren/importieren

```bash
# Image als Tar-Datei speichern
docker save nginx:latest > nginx.tar
docker save -o nginx.tar nginx:latest

# Mehrere Images
docker save -o images.tar nginx:latest ubuntu:20.04

# Image laden
docker load < nginx.tar
docker load -i nginx.tar
```

---

# Layer Caching verstehen

```
LAYER CACHING:
Dockerfile:                    Beim 2. Build:
┌────────────────────┐
│ FROM node:16       │  ← Cached (nicht neu geholt)
├────────────────────┤
│ WORKDIR /app       │  ← Cached
├────────────────────┤
│ COPY package*.json │  ← Cached (Files unverändert)
├────────────────────┤
│ RUN npm install    │  ← Cached (package.json gleich)
├────────────────────┤
│ COPY . .           │  ← ⚠️ NEU! (Code geändert)
├────────────────────┤
│ CMD ["node","app"] │  ← NEU gebaut (nach COPY)
└────────────────────┘
```

**Optimierung:**
```dockerfile
# ❌ SCHLECHT - Code-Änderung rebuilt alles
COPY . .
RUN npm install

# ✅ GUT - npm install wird gecached
COPY package*.json ./
RUN npm install
COPY . .
```

---

# Multi-Architektur Images

```bash
# Image für mehrere Architekturen bauen
docker buildx build --platform linux/amd64,linux/arm64 -t myapp:latest .

# Buildx aktivieren
docker buildx create --use

# Verfügbare Plattformen
docker buildx inspect --bootstrap
```

---

# Praktische Beispiele

## Custom Nginx Image

```dockerfile
# Dockerfile
FROM nginx:alpine
COPY ./html /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
```

```bash
# Bauen
docker build -t mycustom-nginx:1.0 .

# Starten
docker run -d -p 8080:80 mycustom-nginx:1.0
```

## Python App Image

```dockerfile
FROM python:3.9-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY . .
CMD ["python", "app.py"]
```

```bash
docker build -t python-app:1.0 .
docker run -d -p 5000:5000 python-app:1.0
```

---

# Image Optimierung

## Kleinere Images

```bash
# Alpine Linux verwenden (viel kleiner)
FROM node:16-alpine  # ~100MB
# statt
FROM node:16         # ~900MB
```

## Multi-stage Builds

```dockerfile
# Build Stage
FROM node:16 AS builder
WORKDIR /app
COPY . .
RUN npm ci --only=production

# Production Stage
FROM node:16-alpine
COPY --from=builder /app ./
CMD ["node", "server.js"]
```

## .dockerignore

```
# .dockerignore
node_modules
.git
*.log
.env
.DS_Store
README.md
```

---

# Image Security

## Vulnerabilities scannen

```bash
# Docker Scout (integriert)
docker scout quickview nginx:latest
docker scout cves nginx:latest

# Empfehlungen
docker scout recommendations nginx:latest
```

## Best Practices

```dockerfile
# ✅ Spezifische Version verwenden
FROM node:16-alpine

# ❌ Nicht latest in Production
FROM node:latest

# ✅ Non-root User
RUN adduser -D -s /bin/sh appuser
USER appuser

# ✅ Nur notwendige Files
COPY --chown=appuser:appuser package*.json ./
```

---

# Image Speicher-Management

```bash
# Speicherverbrauch prüfen
docker system df

# Output:
# TYPE            TOTAL   ACTIVE   SIZE      RECLAIMABLE
# Images          15      3        2.5GB     1.8GB (72%)
# Containers      5       2        100MB     50MB (50%)
# Local Volumes   3       1        500MB     200MB (40%)

# Details anzeigen
docker system df -v

# Aufräumen
docker image prune              # Dangling Images
docker image prune -a           # Alle unbenutzten
docker system prune -a --volumes  # Alles aufräumen
```

---

# Zusammenfassung

>[!summary] Docker Image Kernpunkte
>- **Read-only**: Images sind unveränderlich
>- **Layered**: Bestehen aus mehreren Schichten
>- **Cached**: Layers werden wiederverwendet
>- **Tagged**: Versionierung mit Tags (latest, 1.0, alpine)
>- **Shareable**: Über Registry verteilen
>- **Base für Container**: Ein Image → viele Container

>[!tip] Best Practices
>- Verwende spezifische Tags (nicht `latest` in Prod)
>- Nutze Alpine Images für kleinere Größe
>- Multi-stage Builds für Optimierung
>- .dockerignore für Build Context
>- Images regelmäßig auf Vulnerabilities scannen
>- Layer Caching optimal nutzen

---

# Verwandte Konzepte

- [[02 - RESOURCES/Notes/Docker\|Docker]] - Hauptnotiz
- [[02 - RESOURCES/Notes/Docker Container\|Docker Container]] - Container werden aus Images erstellt
- [[02 - RESOURCES/Notes/Dockerfile\|Dockerfile]] - Images mit Dockerfile bauen
- [[02 - RESOURCES/Notes/Docker Registry\|Docker Registry]] - Images speichern und teilen
- [[02 - RESOURCES/Notes/Docker Hub\|Docker Hub]] - Öffentliche Image Registry


</div></div>


## 
<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/02-resources/notes/dockerfile/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




>**Dockerfile** ist eine Textdatei mit Anweisungen wie ein [[02 - RESOURCES/Notes/Docker Image\|Docker Image]] gebaut werden soll.
>>Wie ein Kochrezept das Schritt für Schritt erklärt was in den Container gehört.

---

# Visualisierung: Dockerfile → Image

```
DOCKERFILE BUILD PROCESS:
┌───────────────────┐
│   Dockerfile      │
│                   │
│ FROM ubuntu       │─┐
│ RUN apt-get...    │ ├─► docker build
│ COPY app.py .     │ │
│ CMD python app.py │─┘
└───────────────────┘
         │
         ├─ Layer 1: ubuntu
         ├─ Layer 2: apt-get install
         ├─ Layer 3: copy app.py
         └─ Layer 4: CMD
         │
         ▼
┌───────────────────┐
│   Docker Image    │
│   myapp:latest    │
└───────────────────┘
         │
         │ docker run
         ▼
┌───────────────────┐
│   Container       │
│   (Running)       │
└───────────────────┘
```

---

# Grundstruktur

## Minimal Dockerfile

```dockerfile
# Kommentar: Base Image auswählen
FROM ubuntu:20.04

# Arbeitsverzeichnis setzen
WORKDIR /app

# Dateien kopieren
COPY . .

# Befehl ausführen
RUN apt-get update && apt-get install -y python3

# Standard Startbefehl
CMD ["python3", "app.py"]
```

## Vollständiges Beispiel

```dockerfile
# Base Image (immer zuerst!)
FROM node:16-alpine

# Maintainer Info (optional)
LABEL maintainer="max@example.com"
LABEL version="1.0"
LABEL description="My awesome app"

# Arbeitsverzeichnis
WORKDIR /app

# System-Dependencies
RUN apk add --no-cache \
    python3 \
    make \
    g++

# Package Files kopieren (für Caching!)
COPY package*.json ./

# Dependencies installieren
RUN npm ci --only=production

# App Code kopieren
COPY . .

# Port dokumentieren
EXPOSE 3000

# Umgebungsvariablen
ENV NODE_ENV=production
ENV PORT=3000

# Nicht-root User
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser

# Health Check
HEALTHCHECK --interval=30s --timeout=3s \
  CMD wget --no-verbose --tries=1 --spider http://localhost:3000/health || exit 1

# Volume definieren
VOLUME ["/app/data"]

# Startbefehl
CMD ["node", "server.js"]
```

---

# Dockerfile Befehle

## FROM - Base Image

```dockerfile
# Offizielle Images
FROM ubuntu:20.04
FROM node:16-alpine
FROM python:3.9-slim

# Multi-stage: Named Stage
FROM node:16 AS builder

# Scratch (leeres Image)
FROM scratch
```

## RUN - Befehle ausführen

```dockerfile
# Einfacher Befehl
RUN apt-get update

# Mehrere Befehle (kombiniert für weniger Layers)
RUN apt-get update && \
    apt-get install -y \
        python3 \
        python3-pip \
    && rm -rf /var/lib/apt/lists/*

# Shell Form vs Exec Form
RUN apt-get update              # Shell: /bin/sh -c
RUN ["apt-get", "update"]       # Exec: Direkt ausführen
```

## COPY & ADD

```dockerfile
# COPY - Dateien kopieren
COPY app.py /app/
COPY . /app/
COPY --chown=user:group file.txt /app/

# ADD - Kopieren + Auto-Extract
ADD app.tar.gz /app/           # Wird automatisch entpackt
ADD https://example.com/file /app/  # URLs herunterladen

# Best Practice: COPY bevorzugen
COPY package*.json ./          # Nur was gebraucht wird
```

## WORKDIR

```dockerfile
# Arbeitsverzeichnis setzen
WORKDIR /app
# Erstellt Verzeichnis wenn nicht existiert

# Relativ zum vorherigen WORKDIR
WORKDIR /app
WORKDIR src      # Jetzt: /app/src
```

## CMD - Default Command

```dockerfile
# Exec Form (empfohlen)
CMD ["node", "server.js"]
CMD ["python", "app.py"]

# Shell Form
CMD node server.js

# Mit ENTRYPOINT kombiniert
ENTRYPOINT ["python"]
CMD ["app.py"]  # Default Argument
```

## ENTRYPOINT

```dockerfile
# Container als Executable
ENTRYPOINT ["python"]
CMD ["app.py"]

# Startet als: python app.py
# Override möglich: docker run image other.py
```

## ENV - Umgebungsvariablen

```dockerfile
# Einzeln
ENV NODE_ENV=production
ENV PORT=3000

# Mehrere
ENV NODE_ENV=production \
    PORT=3000 \
    LOG_LEVEL=info

# Verwendet in anderen Befehlen
ENV APP_HOME=/app
WORKDIR $APP_HOME
```

## EXPOSE - Port dokumentieren

```dockerfile
# Port freigeben (nur Dokumentation!)
EXPOSE 80
EXPOSE 443
EXPOSE 3000/tcp
EXPOSE 53/udp

# Tatsächliches Publishing: docker run -p
```

## VOLUME

```dockerfile
# Mount Point definieren
VOLUME /data
VOLUME ["/var/log", "/var/db"]

# Anonymous Volume zur Runtime
docker run -v /data myimage
```

## USER

```dockerfile
# Benutzer wechseln
USER node
USER 1000:1000

# Best Practice: Non-root
RUN adduser -D appuser
USER appuser
```

## ARG - Build Arguments

```dockerfile
# Build-Time Variable
ARG VERSION=1.0
ARG NODE_ENV

# Verwenden
FROM node:${VERSION}
RUN echo "Building for $NODE_ENV"

# Übergeben beim Build
docker build --build-arg VERSION=16 --build-arg NODE_ENV=prod .
```

## HEALTHCHECK

```dockerfile
# Health Check definieren
HEALTHCHECK --interval=30s --timeout=3s --retries=3 \
  CMD curl -f http://localhost/ || exit 1

# Oder
HEALTHCHECK CMD wget --quiet --tries=1 --spider http://localhost:8080/health || exit 1

# Deaktivieren
HEALTHCHECK NONE
```

## LABEL

```dockerfile
# Metadata hinzufügen
LABEL version="1.0"
LABEL description="My Application"
LABEL maintainer="max@example.com"
```

---

# Multi-Stage Builds

## Warum Multi-Stage?

```
SINGLE STAGE:                  MULTI-STAGE:
┌──────────────────┐          ┌──────────────────┐
│ Build Tools      │          │ Build Tools      │
│ Dependencies     │          │ Dependencies     │
│ Source Code      │          │ Source Code      │
│ Compiled App     │          │ Compiled App     │
└──────────────────┘          └────────┬─────────┘
   Image: 1.5 GB                       │ Copy only app
                               ┌───────▼──────────┐
                               │ Compiled App     │
                               │ Runtime Only     │
                               └──────────────────┘
                                  Image: 100 MB ✅
```

## Node.js Beispiel

```dockerfile
# Build Stage
FROM node:16 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Production Stage
FROM node:16-alpine
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY package*.json ./
USER node
CMD ["node", "dist/server.js"]
```

## Go Beispiel

```dockerfile
# Build
FROM golang:1.19 AS builder
WORKDIR /app
COPY go.* ./
RUN go mod download
COPY . .
RUN CGO_ENABLED=0 GOOS=linux go build -o myapp

# Production (minimal!)
FROM alpine:latest
RUN apk --no-cache add ca-certificates
WORKDIR /root/
COPY --from=builder /app/myapp .
CMD ["./myapp"]
```

## Spezifischen Stage bauen

```bash
# Nur builder Stage
docker build --target builder -t myapp:build .

# Production Stage (default)
docker build -t myapp:prod .
```

---

# Best Practices

## 1. Layer Caching optimal nutzen

```dockerfile
# ❌ SCHLECHT - Bei jeder Code-Änderung neu installieren
COPY . .
RUN npm install

# ✅ GUT - npm install wird gecached
COPY package*.json ./
RUN npm install
COPY . .
```

## 2. Layers minimieren

```dockerfile
# ❌ SCHLECHT - Viele Layers
RUN apt-get update
RUN apt-get install -y python3
RUN apt-get install -y pip
RUN apt-get clean

# ✅ GUT - Ein Layer
RUN apt-get update && \
    apt-get install -y \
        python3 \
        python3-pip \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*
```

## 3. .dockerignore verwenden

```
# .dockerignore
node_modules
npm-debug.log
.git
.gitignore
README.md
.env
.DS_Store
dist
coverage
*.log
```

## 4. Alpine Images

```dockerfile
# ✅ Klein und sicher
FROM node:16-alpine        # ~100MB
FROM python:3.9-alpine     # ~50MB

# ❌ Groß
FROM node:16               # ~900MB
FROM python:3.9            # ~900MB
```

## 5. Non-root User

```dockerfile
# ✅ Sicher
RUN adduser -D -s /bin/sh appuser
USER appuser

# ❌ Unsicher - läuft als root
# (Standard wenn nicht angegeben)
```

## 6. Spezifische Tags

```dockerfile
# ✅ Vorhersagbar
FROM node:16.14.2-alpine

# ❌ Unvorhersagbar - ändert sich!
FROM node:latest
```

---

# Praktische Beispiele

## Python Flask App

```dockerfile
FROM python:3.9-slim

WORKDIR /app

# Dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# App Code
COPY . .

# Non-root
RUN useradd -m appuser && chown -R appuser:appuser /app
USER appuser

EXPOSE 5000
CMD ["flask", "run", "--host=0.0.0.0"]
```

## React Build

```dockerfile
# Build Stage
FROM node:16-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Production Stage
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

## Java Spring Boot

```dockerfile
FROM openjdk:17-jdk-slim AS build
WORKDIR /app
COPY pom.xml .
COPY src ./src
RUN mvn clean package -DskipTests

FROM openjdk:17-jre-slim
WORKDIR /app
COPY --from=build /app/target/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]
```

---

# Troubleshooting

## Build schlägt fehl

```bash
# Mit Details
docker build --progress=plain -t myapp .

# Ohne Cache (clean build)
docker build --no-cache -t myapp .

# Bestimmten Layer anschauen
docker build --target builder -t myapp:debug .
docker run -it myapp:debug sh
```

## Image zu groß

```bash
# Layers analysieren
docker history myapp:latest

# Layer Größen
docker history --no-trunc myapp:latest

# Tools verwenden
docker run --rm -v /var/run/docker.sock:/var/run/docker.sock \
  wagoodman/dive:latest myapp:latest
```

---

# Zusammenfassung

>[!summary] Dockerfile Kernpunkte
>- **Rezept für Images**: Schritt-für-Schritt Anleitung
>- **Layers**: Jeder Befehl = Ein Layer
>- **Caching**: Layers werden wiederverwendet
>- **Multi-stage**: Kleine Production Images
>- **Best Practices**: Alpine, Non-root, .dockerignore

>[!tip] Dockerfile Checkliste
>- [ ] Spezifischen Base Image Tag verwenden
>- [ ] .dockerignore erstellt
>- [ ] Dependencies vor Code kopieren (Caching)
>- [ ] RUN Befehle kombinieren
>- [ ] Alpine Image verwenden
>- [ ] Non-root User erstellen
>- [ ] Multi-stage für kleine Images
>- [ ] HEALTHCHECK definieren

---

# Verwandte Konzepte

- [[02 - RESOURCES/Notes/Docker\|Docker]] - Hauptnotiz
- [[02 - RESOURCES/Notes/Docker Image\|Docker Image]] - Dockerfile erstellt Images
- [[02 - RESOURCES/Notes/Docker Container\|Docker Container]] - Images werden zu Containern
- [[02 - RESOURCES/Notes/Docker Compose\|Docker Compose]] - Orchestrierung mit docker-compose.yml


</div></div>


## 
<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/02-resources/notes/docker-compose/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




>**Docker Compose** orchestriert mehrere [[02 - RESOURCES/Notes/Docker Container\|Docker Container]] mit einer einzigen YAML Datei.
>>Perfekt für Anwendungen die mehrere Services brauchen wie Web App + Datenbank + Cache.

---

# Visualisierung: Multi-Container Setup

```
OHNE COMPOSE (Manuell):               MIT COMPOSE (docker-compose.yml):
┌──────────────────────┐             ┌──────────────────────┐
│ docker run nginx...  │             │ version: '3.8'       │
│ docker run postgres..│             │                      │
│ docker run redis...  │             │ services:            │
│ docker network...    │             │   web:               │
│ docker volume...     │             │     image: nginx     │
└──────────────────────┘             │   db:                │
5+ Befehle einzeln                   │     image: postgres  │
                                     │   cache:             │
                                     │     image: redis     │
                                     └──────────────────────┘
                                     1 Befehl: docker-compose up
```

---

# Was ist Docker Compose?

>Docker Compose ist ein Tool zum Definieren und Starten von Multi-Container Docker-Anwendungen.

**Vorteile:**
- 📄 **Deklarativ**: Infrastruktur als Code (YAML)
- 🚀 **Einfach**: Ein Befehl startet alles
- 🔄 **Wiederholbar**: Gleiche Umgebung überall
- 🎯 **Versioniert**: YAML-Datei im Git

---

# Installation

## Linux

```bash
# Docker Compose V2 (Plugin)
sudo apt-get update
sudo apt-get install docker-compose-plugin

# Prüfen
docker compose version
# Output: Docker Compose version v2.20.0
```

## Windows/Mac

```bash
# In Docker Desktop enthalten
docker compose version
```

---

# docker-compose.yml Grundstruktur

## Minimal Beispiel

```yaml
version: '3.8'

services:
  web:
    image: nginx
    ports:
      - "8080:80"

  db:
    image: postgres:14
    environment:
      POSTGRES_PASSWORD: secret
```

```bash
# Starten
docker compose up -d

# Web: http://localhost:8080
# DB: localhost:5432
```

---

# Services definieren

## Mit Image

```yaml
services:
  nginx:
    image: nginx:alpine
    container_name: my-nginx
    ports:
      - "8080:80"
    restart: unless-stopped
```

## Mit Dockerfile

```yaml
services:
  app:
    build:
      context: .
      dockerfile: Dockerfile
    image: myapp:latest
    ports:
      - "3000:3000"
```

## Mit Build Args

```yaml
services:
  app:
    build:
      context: .
      args:
        - NODE_ENV=production
        - VERSION=1.0
```

---

# Ports & Networking

```yaml
services:
  web:
    image: nginx
    ports:
      - "8080:80"        # Host:Container
      - "8443:443"
      - "127.0.0.1:3000:3000"  # Nur localhost

  api:
    image: node:16
    expose:
      - "3000"           # Nur für andere Services
    networks:
      - frontend
      - backend

networks:
  frontend:
  backend:
    driver: bridge
```

---

# Volumes & Persistenz

## Named Volumes

```yaml
services:
  db:
    image: postgres:14
    volumes:
      - postgres-data:/var/lib/postgresql/data

volumes:
  postgres-data:
```

## Bind Mounts

```yaml
services:
  web:
    image: nginx
    volumes:
      - ./html:/usr/share/nginx/html
      - ./nginx.conf:/etc/nginx/nginx.conf:ro  # Read-only
```

## Tmpfs

```yaml
services:
  app:
    image: myapp
    tmpfs:
      - /tmp
      - /run
```

---

# Environment Variablen

## Direkt in YAML

```yaml
services:
  app:
    image: node:16
    environment:
      - NODE_ENV=production
      - DATABASE_URL=postgres://user:pass@db:5432/mydb
      - DEBUG=false
```

## .env Datei

```bash
# .env
DATABASE_PASSWORD=secret123
API_KEY=your-key
DEBUG=true
```

```yaml
# docker-compose.yml
services:
  app:
    image: myapp
    environment:
      - DATABASE_PASSWORD=${DATABASE_PASSWORD}
      - API_KEY=${API_KEY}
      - DEBUG=${DEBUG:-false}  # Default: false
```

## Aus Datei laden

```yaml
services:
  app:
    image: myapp
    env_file:
      - .env
      - .env.production
```

---

# Dependencies & Startup Order

```yaml
services:
  web:
    image: nginx
    depends_on:
      - api
      - db

  api:
    image: node:16
    depends_on:
      db:
        condition: service_healthy

  db:
    image: postgres:14
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U postgres"]
      interval: 10s
      timeout: 5s
      retries: 5
```

---

# Vollständiges Beispiel: MERN Stack

```yaml
version: '3.8'

services:
  # MongoDB
  mongo:
    image: mongo:6
    container_name: mongodb
    restart: always
    ports:
      - "27017:27017"
    environment:
      MONGO_INITDB_ROOT_USERNAME: admin
      MONGO_INITDB_ROOT_PASSWORD: secret
    volumes:
      - mongo-data:/data/db
    networks:
      - mern-network

  # Express API
  api:
    build:
      context: ./backend
      dockerfile: Dockerfile
    container_name: express-api
    restart: always
    ports:
      - "5000:5000"
    environment:
      - NODE_ENV=production
      - MONGODB_URI=mongodb://admin:secret@mongo:27017/mydb?authSource=admin
    depends_on:
      - mongo
    volumes:
      - ./backend:/app
      - /app/node_modules
    networks:
      - mern-network

  # React Frontend
  frontend:
    build:
      context: ./frontend
      dockerfile: Dockerfile
    container_name: react-app
    restart: always
    ports:
      - "3000:80"
    depends_on:
      - api
    networks:
      - mern-network

  # Nginx Reverse Proxy
  nginx:
    image: nginx:alpine
    container_name: nginx-proxy
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx/nginx.conf:/etc/nginx/nginx.conf
      - ./nginx/ssl:/etc/nginx/ssl
    depends_on:
      - frontend
      - api
    networks:
      - mern-network

volumes:
  mongo-data:

networks:
  mern-network:
    driver: bridge
```

---

# Docker Compose Befehle

## Starten & Stoppen

```bash
# Services starten
docker compose up
docker compose up -d              # Detached (Hintergrund)
docker compose up --build         # Mit rebuild
docker compose up web db          # Nur bestimmte Services

# Stoppen
docker compose stop
docker compose stop web           # Nur ein Service

# Stoppen & Löschen
docker compose down
docker compose down -v            # Mit Volumes
docker compose down --rmi all     # Mit Images
```

## Service Management

```bash
# Status anzeigen
docker compose ps
docker compose ps -a

# Logs
docker compose logs
docker compose logs web
docker compose logs -f            # Follow
docker compose logs -f --tail 100 web

# Service skalieren
docker compose up -d --scale web=3

# In Service einloggen
docker compose exec web bash
docker compose exec -u root db sh

# Befehle ausführen
docker compose exec web ls -la
docker compose run web npm test
```

## Build & Updates

```bash
# Images bauen
docker compose build
docker compose build --no-cache web

# Services neu erstellen
docker compose up -d --force-recreate

# Images aktualisieren
docker compose pull
```

---

# Profiles für Umgebungen

```yaml
version: '3.8'

services:
  app:
    image: myapp
    profiles: ["dev", "prod"]

  db:
    image: postgres
    profiles: ["dev", "prod"]

  debug-tools:
    image: debug-tools
    profiles: ["dev"]

  monitoring:
    image: prometheus
    profiles: ["prod"]
```

```bash
# Nur dev Profile
docker compose --profile dev up

# Mehrere Profile
docker compose --profile dev --profile monitoring up
```

---

# Override Files

```yaml
# docker-compose.yml (Base)
version: '3.8'
services:
  web:
    image: nginx
    ports:
      - "80:80"
```

```yaml
# docker-compose.override.yml (Development)
version: '3.8'
services:
  web:
    volumes:
      - ./src:/usr/share/nginx/html
    environment:
      - DEBUG=true
```

```yaml
# docker-compose.prod.yml (Production)
version: '3.8'
services:
  web:
    deploy:
      replicas: 3
    environment:
      - DEBUG=false
```

```bash
# Development (automatisch mit override)
docker compose up

# Production
docker compose -f docker-compose.yml -f docker-compose.prod.yml up
```

---

# Best Practices

>[!tip] Compose Best Practices

**1. .env für Secrets**
```yaml
# ✅ GUT
environment:
  - DB_PASSWORD=${DB_PASSWORD}

# ❌ SCHLECHT - Hardcoded
environment:
  - DB_PASSWORD=secret123
```

**2. Health Checks**
```yaml
healthcheck:
  test: ["CMD", "curl", "-f", "http://localhost/health"]
  interval: 30s
  timeout: 10s
  retries: 3
```

**3. Resource Limits**
```yaml
deploy:
  resources:
    limits:
      cpus: '0.5'
      memory: 512M
```

**4. Named Volumes**
```yaml
# ✅ Persistent
volumes:
  - db-data:/var/lib/mysql

# ❌ Anonymous - schwer zu managen
volumes:
  - /var/lib/mysql
```

---

# Troubleshooting

## Services starten nicht

```bash
# Logs prüfen
docker compose logs
docker compose logs web

# Container Status
docker compose ps

# Config validieren
docker compose config

# Verbose Output
docker compose up --verbose
```

## Port-Konflikte

```bash
# Fehler: "port is already allocated"

# Lösung: Port in docker-compose.yml ändern
ports:
  - "8081:80"  # Statt 8080
```

## Volumes nicht persistent

```bash
# Volume muss deklariert sein!
volumes:
  db-data:  # ← Wichtig!
```

---

# Zusammenfassung

>[!summary] Docker Compose Kernpunkte
>- **Multi-Container**: Mehrere Services mit einem Befehl
>- **YAML Config**: Deklarative Infrastruktur
>- **Networking**: Automatische Container-Kommunikation
>- **Volumes**: Persistente Daten-Verwaltung
>- **Profiles**: Verschiedene Umgebungen (dev/prod)
>- **Override**: Konfiguration erweitern

>[!tip] Workflow
>1. `docker-compose.yml` erstellen
>2. `docker compose up -d` - Starten
>3. `docker compose logs -f` - Logs prüfen
>4. `docker compose down` - Stoppen & Aufräumen

---

# Verwandte Konzepte

- [[02 - RESOURCES/Notes/Docker\|Docker]] - Hauptnotiz
- [[02 - RESOURCES/Notes/Docker Container\|Docker Container]] - Container-Verwaltung
- [[02 - RESOURCES/Notes/Docker Networking\|Docker Networking]] - Netzwerk zwischen Containern
- [[02 - RESOURCES/Notes/Docker Volumes\|Docker Volumes]] - Persistente Daten
- [[02 - RESOURCES/Notes/Dockerfile\|Dockerfile]] - Images für Services bauen


</div></div>


## 
<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/02-resources/notes/docker-volumes/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




>**Docker Volumes** sind Dockers Art Daten dauerhaft zu speichern außerhalb des [[02 - RESOURCES/Notes/Docker Container\|Docker Container]]s.
>>Ohne Volumes gehen alle Daten verloren wenn der Container gelöscht wird!

---

# Visualisierung: Volume Types

```
DOCKER STORAGE OPTIONEN:
┌─────────────────────────────────────────────────────┐
│                   HOST SYSTEM                        │
│                                                      │
│  ┌────────────────┐  ┌────────────────┐  ┌────────┐│
│  │ Named Volume   │  │  Bind Mount    │  │ tmpfs  ││
│  │ (Docker        │  │ (Host Dir)     │  │ (RAM)  ││
│  │  managed)      │  │                │  │        ││
│  └───────┬────────┘  └───────┬────────┘  └───┬────┘│
│          │                   │                │     │
└──────────┼───────────────────┼────────────────┼─────┘
           │                   │                │
    ┌──────▼───────────────────▼────────────────▼────┐
    │              Container                          │
    │  /data      /app/src        /tmp                │
    │  (Volume)   (Bind)          (tmpfs)             │
    └─────────────────────────────────────────────────┘
```

---

# Container ohne Volume - Problem

```
CONTAINER LIFECYCLE (OHNE VOLUME):
┌──────────────────┐
│  Container       │
│  ┌────────────┐  │
│  │ /data/     │  │
│  │ file.txt   │  │
│  │ database   │  │
│  └────────────┘  │
└────────┬─────────┘
         │
    docker rm
         │
         ▼
    ❌ ALLES VERLOREN!
```

```
CONTAINER MIT VOLUME:
┌──────────────────┐     ┌──────────────┐
│  Container       │     │   Volume     │
│  ┌────────────┐  │────►│              │
│  │ /data/─────┼──┘     │  file.txt    │
│  └────────────┘  │     │  database    │
└────────┬─────────┘     └──────────────┘
         │                       │
    docker rm                    │
         │                       ▼
         ▼                  ✅ BLEIBT!
    Container weg,
    Daten sicher!
```

---

# Named Volumes

>Von Docker verwaltete Volumes - empfohlen für Production!

## Erstellen & Verwenden

```bash
# Volume erstellen
docker volume create mydata
docker volume create --driver local postgres-data

# Container mit Volume starten
docker run -d \
  --name myapp \
  -v mydata:/data \
  nginx

# Alternative Syntax
docker run -d \
  --name myapp \
  --mount source=mydata,target=/data \
  nginx
```

## Volume Management

```bash
# Alle Volumes anzeigen
docker volume ls

# Output:
# DRIVER    VOLUME NAME
# local     mydata
# local     postgres-data

# Volume Details
docker volume inspect mydata
# Zeigt: Mountpoint, Driver, Options

# Volume löschen
docker volume rm mydata

# Alle unbenutzten Volumes löschen
docker volume prune
# WARNING! This will remove all local volumes not used by at least one container.
```

## Praktisches Beispiel: PostgreSQL

```bash
# Volume erstellen
docker volume create postgres-data

# PostgreSQL mit persistenten Daten
docker run -d \
  --name postgres \
  -e POSTGRES_PASSWORD=secret \
  -v postgres-data:/var/lib/postgresql/data \
  -p 5432:5432 \
  postgres:14

# Container löschen
docker rm -f postgres

# Neuer Container mit gleichen Daten!
docker run -d \
  --name postgres-new \
  -e POSTGRES_PASSWORD=secret \
  -v postgres-data:/var/lib/postgresql/data \
  -p 5432:5432 \
  postgres:14

# Datenbank ist noch da! ✅
```

---

# Bind Mounts

>Host-Verzeichnisse direkt in Container mounten - gut für Development!

## Verwendung

```bash
# Aktuelles Verzeichnis mounten
docker run -d \
  -v $(pwd):/app \
  node:16

# Windows
docker run -d \
  -v C:\Users\Max\myapp:/app \
  node:16

# Read-only Mount
docker run -d \
  -v $(pwd)/config:/etc/myapp:ro \
  myapp

# Mount mit --mount (explicit)
docker run -d \
  --mount type=bind,source=$(pwd),target=/app \
  node:16
```

## Praktisches Beispiel: Live Development

```bash
# HTML Files live editieren
mkdir ~/website
echo "<h1>Hello!</h1>" > ~/website/index.html

docker run -d \
  --name dev-nginx \
  -p 8080:80 \
  -v ~/website:/usr/share/nginx/html \
  nginx

# Änderungen in ~/website/index.html sind sofort sichtbar!
# http://localhost:8080
```

---

# tmpfs Mounts (Linux)

>Temporärer Speicher im RAM - schnell, nicht persistent!

```bash
# tmpfs Mount (nur Linux)
docker run -d \
  --tmpfs /tmp \
  --tmpfs /run:size=100M,mode=1777 \
  nginx

# Gut für:
# - Temporäre Files
# - Secrets (nicht auf Disk)
# - Cache
```

---

# Named Volumes vs Bind Mounts

| Feature | Named Volumes | Bind Mounts |
|---------|--------------|-------------|
| **Location** | Von Docker verwaltet | Host-Pfad |
| **Portabilität** | ✅ Hoch | ⚠️ OS-abhängig |
| **Performance** | ✅ Optimal | ⚠️ Kann langsamer sein |
| **Management** | Docker CLI | Host Filesystem |
| **Backup** | Docker Commands | Standard Tools |
| **Use Case** | **Production** | **Development** |

```
WANN WAS VERWENDEN:
┌──────────────────────┐     ┌──────────────────────┐
│   Named Volumes      │     │    Bind Mounts       │
├──────────────────────┤     ├──────────────────────┤
│ ✅ Datenbanken       │     │ ✅ Source Code       │
│ ✅ Production        │     │ ✅ Development       │
│ ✅ Backup/Restore    │     │ ✅ Config Files      │
│ ✅ Sharing zwischen  │     │ ✅ Live Reload       │
│    Containern        │     │ ✅ Log Files         │
└──────────────────────┘     └──────────────────────┘
```

---

# Volume Sharing

## Zwischen Containern teilen

```bash
# Volume erstellen
docker volume create shared-data

# Container 1 schreibt
docker run -d \
  --name writer \
  -v shared-data:/data \
  ubuntu bash -c "echo 'Hello' > /data/message.txt"

# Container 2 liest
docker run --rm \
  -v shared-data:/data \
  ubuntu cat /data/message.txt
# Output: Hello
```

## Mit --volumes-from

```bash
# Data Container
docker run -d \
  --name data-container \
  -v /data \
  ubuntu

# App nutzt Volumes vom data-container
docker run -d \
  --name app \
  --volumes-from data-container \
  myapp
```

---

# Backup & Restore

## Backup erstellen

```bash
# Named Volume Backup
docker run --rm \
  -v mydata:/data \
  -v $(pwd):/backup \
  ubuntu \
  tar czf /backup/backup.tar.gz -C /data .

# Erklärt:
# --rm           : Container nach Ausführung löschen
# -v mydata:/data: Volume mounten
# -v $(pwd):/backup: Host-Verzeichnis für Backup
# tar czf        : Komprimieren
```

## Restore

```bash
# Volume erstellen (wenn nicht existiert)
docker volume create mydata

# Backup wiederherstellen
docker run --rm \
  -v mydata:/data \
  -v $(pwd):/backup \
  ubuntu \
  tar xzf /backup/backup.tar.gz -C /data
```

## Automatisches Backup Script

```bash
#!/bin/bash
# backup-volumes.sh

VOLUMES="postgres-data redis-data app-data"
BACKUP_DIR="/backups"
DATE=$(date +%Y%m%d-%H%M%S)

for VOLUME in $VOLUMES; do
    echo "Backing up $VOLUME..."
    docker run --rm \
        -v $VOLUME:/data:ro \
        -v $BACKUP_DIR:/backup \
        ubuntu \
        tar czf /backup/${VOLUME}-${DATE}.tar.gz -C /data .
done

echo "Backups completed!"
```

---

# Docker Compose mit Volumes

```yaml
version: '3.8'

services:
  # Named Volume
  db:
    image: postgres:14
    volumes:
      - postgres-data:/var/lib/postgresql/data

  # Bind Mount
  web:
    image: nginx
    volumes:
      - ./html:/usr/share/nginx/html
      - ./nginx.conf:/etc/nginx/nginx.conf:ro

  # Beide kombiniert
  app:
    image: node:16
    volumes:
      - app-data:/app/data          # Named Volume
      - ./src:/app/src               # Bind Mount (Development)
      - /app/node_modules            # Anonymous Volume

volumes:
  postgres-data:
    driver: local
  app-data:
    driver: local
    driver_opts:
      type: none
      device: /mnt/data
      o: bind
```

---

# Volume Drivers

## Local Driver (Standard)

```bash
docker volume create \
  --driver local \
  --opt type=none \
  --opt device=/mnt/storage \
  --opt o=bind \
  myvolume
```

## NFS Driver

```bash
docker volume create \
  --driver local \
  --opt type=nfs \
  --opt o=addr=192.168.1.100,rw \
  --opt device=:/path/to/share \
  nfs-volume
```

## Cloud Volumes (Plugins)

```bash
# AWS EBS
docker volume create \
  --driver rexray/ebs \
  --opt size=20 \
  aws-volume

# Azure File Share
docker volume create \
  --driver azure-file \
  --opt share=myshare \
  azure-volume
```

---

# Troubleshooting

## Volume nicht persistent

```bash
# ❌ FALSCH - Anonymous Volume
docker run -v /data myapp
# Container-ID ist im Volume-Namen!

# ✅ RICHTIG - Named Volume
docker run -v mydata:/data myapp
```

## Permission Probleme

```bash
# Problem: Permission denied in Container

# Lösung 1: Ownership ändern
docker run \
  -v mydata:/data \
  ubuntu chown -R 1000:1000 /data

# Lösung 2: User im Container setzen
docker run \
  --user 1000:1000 \
  -v mydata:/data \
  myapp
```

## Volume voll

```bash
# Speicher prüfen
docker system df -v

# Volume Größe in Compose beschränken
services:
  app:
    volumes:
      - type: volume
        source: mydata
        target: /data
        volume:
          nocopy: true
    tmpfs:
      - /tmp:size=100M
```

---

# Best Practices

>[!tip] Volume Best Practices

**1. Named Volumes für Production**
```bash
# ✅ Gut
docker run -v postgres-data:/var/lib/postgresql/data postgres

# ❌ Schlecht - Anonymous
docker run -v /var/lib/postgresql/data postgres
```

**2. Bind Mounts für Development**
```bash
# Live Code Reload
docker run -v $(pwd)/src:/app/src node:16
```

**3. Read-only wenn möglich**
```bash
docker run -v $(pwd)/config:/etc/app:ro myapp
```

**4. Regelmäßige Backups**
```bash
# Automatisierte Backups einrichten
# Cron Job für tägliche Backups
```

**5. Volume Cleanup**
```bash
# Alte Volumes regelmäßig löschen
docker volume prune
```

---

# Zusammenfassung

>[!summary] Docker Volumes Kernpunkte
>- **Persistenz**: Daten überleben Container-Löschung
>- **Named Volumes**: Docker-managed, für Production
>- **Bind Mounts**: Host-Verzeichnisse, für Development
>- **tmpfs**: RAM-Speicher, temporär
>- **Sharing**: Volumes zwischen Containern teilen
>- **Backup**: Regelmäßige Sicherungen wichtig

>[!warning] Wichtig
>Ohne Volumes gehen Container-Daten verloren!
>Immer Volumes für Datenbanken und wichtige Daten verwenden!

---

# Verwandte Konzepte

- [[02 - RESOURCES/Notes/Docker\|Docker]] - Hauptnotiz
- [[02 - RESOURCES/Notes/Docker Container\|Docker Container]] - Container brauchen Volumes
- [[02 - RESOURCES/Notes/Docker Compose\|Docker Compose]] - Volumes in Compose definieren
- [[02 - RESOURCES/Notes/Docker Networking\|Docker Networking]] - Volumes + Networking = Stack


</div></div>


## 
<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/02-resources/notes/docker-networking/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




>**Docker Networking** erstellt virtuelle Netzwerke damit [[02 - RESOURCES/Notes/Docker Container\|Docker Container]] miteinander kommunizieren können.
>>Jeder Container bekommt eigene IP-Adresse in seinem Netzwerk - wie ein virtuelles LAN.

---

# Visualisierung: Docker Netzwerk-Typen

```
DOCKER NETWORK MODES:
┌─────────────────────────────────────────────────────────┐
│                    HOST SYSTEM                           │
│                                                          │
│  ┌──────────────────────────────────────────────────┐  │
│  │  BRIDGE NETWORK (Standard)                       │  │
│  │  ┌──────────┐  ┌──────────┐  ┌──────────┐       │  │
│  │  │Container │  │Container │  │Container │       │  │
│  │  │ 172.17.0.2  │ 172.17.0.3  │ 172.17.0.4       │  │
│  │  └─────┬────┘  └─────┬────┘  └─────┬────┘       │  │
│  │        └──────────────┴──────────────┘           │  │
│  │              docker0 Bridge                      │  │
│  └──────────────────────┬───────────────────────────┘  │
│                         │                              │
│  ┌──────────────────────┴───────────────────────────┐  │
│  │  HOST NETWORK (kein Namespace)                   │  │
│  │  Container nutzt direkt Host-IP                  │  │
│  └──────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────┘
```

---

# Netzwerk-Modi

## Bridge (Standard)

>Container auf gleicher Maschine kommunizieren

```bash
# Bridge ist Default
docker run -d --name web1 nginx
docker run -d --name web2 nginx

# Beide im gleichen bridge-Netzwerk
# Können aber NICHT per Namen kommunizieren (nur IP)
```

## Host

>Container nutzt Host-Netzwerk direkt

```bash
# Direkt auf Host-Netzwerk
docker run -d --network host nginx

# Kein Port-Mapping nötig!
# localhost:80 ist direkt erreichbar
# ⚠️ Port-Konflikte möglich
```

## None

>Kein Netzwerk - komplett isoliert

```bash
# Kein Netzwerk
docker run -d --network none alpine

# Gut für Security oder Offline-Container
```

## Overlay

>Multi-Host Networking für [[02 - RESOURCES/Notes/Docker Swarm\|Docker Swarm]]

```bash
# Für Swarm-Cluster
docker network create --driver overlay myoverlay

# Container auf verschiedenen Hosts können kommunizieren
```

---

# Custom Bridge Networks

## Warum Custom Network?

```
DEFAULT BRIDGE:                 CUSTOM BRIDGE:
Container können nur            Container können per
per IP kommunizieren            NAMEN kommunizieren! ✅

┌──────────┐                    ┌──────────┐
│ web      │                    │ web      │
│ 172.17.0.2│──┐              │  │          │──┐
└──────────┘  │                └──────────┘  │
              │                              │
┌──────────┐  │                ┌──────────┐  │
│ db       │  │                │ db       │  │
│ 172.17.0.3│◄─┘              │          │◄─┘
└──────────┘                    └──────────┘
Verbindung:                     Verbindung:
172.17.0.3:5432 ❌             db:5432 ✅
```

## Custom Network erstellen

```bash
# Bridge Netzwerk erstellen
docker network create mynetwork

# Mit spezifischen Einstellungen
docker network create \
  --driver bridge \
  --subnet 172.20.0.0/16 \
  --gateway 172.20.0.1 \
  mynetwork

# Container im Netzwerk starten
docker run -d \
  --name web \
  --network mynetwork \
  nginx

docker run -d \
  --name db \
  --network mynetwork \
  postgres

# Im web-Container kann jetzt:
# curl http://db:5432  ← Per Name! ✅
```

---

# Network Management

## Netzwerke anzeigen

```bash
# Alle Netzwerke
docker network ls

# Output:
# NETWORK ID     NAME       DRIVER    SCOPE
# abc123...      bridge     bridge    local
# def456...      host       host      local
# ghi789...      none       null      local
# jkl012...      mynetwork  bridge    local

# Netzwerk Details
docker network inspect mynetwork
# Zeigt: Connected Container, Subnet, Gateway, IP-Adressen
```

## Container zu Netzwerk hinzufügen

```bash
# Laufenden Container zu Netzwerk hinzufügen
docker network connect mynetwork web

# Container kann jetzt in BEIDEN Netzwerken sein!

# Von Netzwerk trennen
docker network disconnect mynetwork web
```

## Netzwerk löschen

```bash
# Netzwerk löschen (keine Container verbunden)
docker network rm mynetwork

# Unbenutzte Netzwerke aufräumen
docker network prune
```

---

# Port-Mapping

## Basics

```bash
# Port weiterleiten (Host:Container)
docker run -d -p 8080:80 nginx
# localhost:8080 → Container Port 80

# Mehrere Ports
docker run -d \
  -p 8080:80 \
  -p 8443:443 \
  nginx

# Nur auf localhost binden
docker run -d -p 127.0.0.1:8080:80 nginx

# Alle Ports automatisch
docker run -d -P nginx
# Docker wählt zufällige Host-Ports
```

## Port-Ranges

```bash
# Port-Range
docker run -d -p 8080-8090:8080-8090 myapp

# UDP Ports
docker run -d -p 5000:5000/udp myapp

# TCP und UDP
docker run -d \
  -p 5000:5000/tcp \
  -p 5000:5000/udp \
  myapp
```

## Ports finden

```bash
# Welche Ports sind gemappt?
docker port container-name

# Output:
# 80/tcp -> 0.0.0.0:8080
# 443/tcp -> 0.0.0.0:8443
```

---

# Container-Kommunikation

## Per Namen (Custom Network)

```bash
# Netzwerk erstellen
docker network create webnet

# Container starten
docker run -d \
  --name api \
  --network webnet \
  -e DATABASE_URL=postgres://db:5432/mydb \
  myapi

docker run -d \
  --name db \
  --network webnet \
  postgres

# Im api-Container:
# ping db  ← Funktioniert! ✅
# curl http://db:5432  ← Per Name!
```

## Per IP (Default Bridge)

```bash
# Container IP finden
docker inspect -f '{{.NetworkSettings.IPAddress}}' db
# Output: 172.17.0.3

# Im anderen Container:
docker exec api curl http://172.17.0.3:5432
```

## Links (Deprecated)

```bash
# Alte Methode (nicht empfohlen)
docker run -d --name db postgres
docker run -d --link db:database myapp

# Besser: Custom Network verwenden!
```

---

# Praktisches Beispiel: LAMP Stack

```bash
# Custom Network
docker network create lamp-net

# MySQL
docker run -d \
  --name mysql \
  --network lamp-net \
  -e MYSQL_ROOT_PASSWORD=secret \
  -e MYSQL_DATABASE=myapp \
  mysql:8.0

# PHP-Apache
docker run -d \
  --name web \
  --network lamp-net \
  -p 8080:80 \
  -v $(pwd)/html:/var/www/html \
  php:apache

# Im PHP Code:
# $conn = mysqli_connect("mysql", "root", "secret", "myapp");
#                         ↑ Hostname = Container-Name!
```

---

# Docker Compose Networking

## Automatisches Netzwerk

```yaml
version: '3.8'

services:
  web:
    image: nginx
    ports:
      - "8080:80"

  api:
    image: node:16
    # Kann web per Namen erreichen!

  db:
    image: postgres
    # Kann api und web per Namen erreichen!

# Compose erstellt automatisch ein Netzwerk!
# Alle Services können sich per Namen erreichen
```

## Custom Networks in Compose

```yaml
version: '3.8'

services:
  web:
    image: nginx
    networks:
      - frontend

  api:
    image: node:16
    networks:
      - frontend
      - backend

  db:
    image: postgres
    networks:
      - backend

networks:
  frontend:
    driver: bridge
  backend:
    driver: bridge
    internal: true  # Kein Zugriff von außen!
```

**Ergebnis:**
- `web` kann `api` erreichen (beide in frontend)
- `api` kann `db` erreichen (beide in backend)
- `web` kann `db` NICHT erreichen (verschiedene Netzwerke)

---

# DNS & Service Discovery

## Automatisches DNS

```
DOCKER EMBEDDED DNS:
┌────────────────────────────────────┐
│  Custom Network                    │
│                                    │
│  Container: web                    │
│  ├─ Hostname: web                  │
│  ├─ IP: 172.20.0.2                 │
│  └─ DNS: 127.0.0.11 (Docker DNS)   │
│                                    │
│  Container: db                     │
│  ├─ Hostname: db                   │
│  ├─ IP: 172.20.0.3                 │
│  └─ DNS: 127.0.0.11 (Docker DNS)   │
│                                    │
│  DNS Resolver:                     │
│  web → 172.20.0.2 ✅               │
│  db  → 172.20.0.3 ✅               │
└────────────────────────────────────┘
```

## Alias Names

```bash
# Container mit Alias
docker run -d \
  --name mydb \
  --network mynet \
  --network-alias database \
  --network-alias mysql \
  postgres

# Erreichbar per:
# - mydb
# - database
# - mysql
```

---

# Network Security

## Internal Networks

```bash
# Internes Netzwerk (kein Internet-Zugang)
docker network create \
  --internal \
  backend-net

docker run -d \
  --name secure-db \
  --network backend-net \
  postgres

# DB hat kein Internet! Sicherer! ✅
```

## Network Encryption (Overlay)

```bash
# Encrypted Overlay Network
docker network create \
  --driver overlay \
  --opt encrypted \
  secure-overlay

# Traffic zwischen Hosts ist verschlüsselt
```

---

# Troubleshooting

## Container können sich nicht erreichen

```bash
# Problem: Container in verschiedenen Netzwerken

# Lösung 1: Gleiches Netzwerk
docker network connect mynet container1
docker network connect mynet container2

# Lösung 2: Docker Compose (automatisch gleiches Netz)
```

## DNS funktioniert nicht

```bash
# Problem: Default bridge hat kein DNS

# Lösung: Custom Network verwenden
docker network create mynet
docker run --network mynet ...
```

## Port-Konflikte

```bash
# Problem: "port is already allocated"

# Lösung 1: Anderen Port
docker run -p 8081:80 nginx  # Statt 8080

# Lösung 2: Container stoppen
docker ps | grep 8080
docker stop conflicting-container
```

---

# Network Performance

## Bridge vs Host

```
BRIDGE NETWORK:               HOST NETWORK:
Container → docker0           Container → Host-Stack
  → iptables                  (Direkt)
  → Host
Overhead: ~5%                 Overhead: ~0%

Für Production mit hohem      Nur wenn maximale
Traffic: Bridge ok           Performance nötig!
```

## Macvlan (Advanced)

```bash
# Container bekommt eigene MAC-Adresse
docker network create -d macvlan \
  --subnet=192.168.1.0/24 \
  --gateway=192.168.1.1 \
  -o parent=eth0 \
  macvlan-net

# Container erscheint als physisches Gerät im Netzwerk
```

---

# Best Practices

>[!tip] Network Best Practices

**1. Custom Networks verwenden**
```bash
# ✅ Gut
docker network create mynet
docker run --network mynet ...

# ❌ Schlecht - Default bridge
docker run ...  # Kein DNS!
```

**2. Network Segmentation**
```yaml
# Frontend und Backend trennen
networks:
  frontend:
  backend:
    internal: true  # Kein Internet
```

**3. Port-Exposition minimieren**
```bash
# ✅ Nur notwendige Ports
-p 80:80

# ❌ Alle Ports
-P  # Nicht in Production!
```

**4. DNS Namen verwenden**
```bash
# ✅ Gut
DATABASE_URL=postgres://db:5432/mydb

# ❌ Schlecht - hardcoded IP
DATABASE_URL=postgres://172.17.0.3:5432/mydb
```

---

# Zusammenfassung

>[!summary] Docker Networking Kernpunkte
>- **Bridge**: Standard, Container-Kommunikation
>- **Host**: Container nutzt Host-Netzwerk direkt
>- **Custom Networks**: DNS-basierte Kommunikation per Namen
>- **Port-Mapping**: `-p Host:Container`
>- **Isolation**: Verschiedene Networks = Isolation
>- **Service Discovery**: Automatisches DNS in Custom Networks

>[!tip] Quick Reference
>```bash
># Network erstellen
>docker network create mynet
>
># Container starten
>docker run --network mynet --name web nginx
>docker run --network mynet --name db postgres
>
># Im web-Container:
># curl http://db:5432  ← Per Name!
>```

---

# Verwandte Konzepte

- [[02 - RESOURCES/Notes/Docker\|Docker]] - Hauptnotiz
- [[02 - RESOURCES/Notes/Docker Container\|Docker Container]] - Container brauchen Networking
- [[02 - RESOURCES/Notes/Docker Compose\|Docker Compose]] - Automatisches Networking
- [[02 - RESOURCES/Notes/Docker Swarm\|Docker Swarm]] - Overlay Networks für Cluster


</div></div>


## 
<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/02-resources/notes/docker-registry/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





>[[02 - RESOURCES/Notes/Docker Registry\|Docker Registry]] ist eine Sammlung von [[02 - RESOURCES/Notes/Docker Image\|Docker Image]]s - wie ein App Store für [[02 - RESOURCES/Notes/Docker Container\|Docker Container]].
>>[[02 - RESOURCES/Notes/Docker Hub\|Docker Hub]] ist die öffentliche [[Registry\|Registry]], private [[Registries\|Registries]] für Firmen möglich.

>[!tip] Registry Typen
>- **Public** - [[02 - RESOURCES/Notes/Docker Hub\|Docker Hub]], frei zugänglich
>- **Private** - Eigene [[Registry\|Registry]] für sensitive [[Images\|Images]]
>- **Local** - Lokale [[Registry\|Registry]] für Development

</div></div>


## 
<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/02-resources/notes/docker-hub/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




>**Docker Hub** ist die öffentliche [[02 - RESOURCES/Notes/Docker Registry\|Docker Registry]] von Docker Inc.
>>Größte Sammlung von Docker Images - wie der App Store für Container.

---

# Was ist Docker Hub?

>Docker Hub ist die zentrale Registry für Docker Images - kostenlos für öffentliche Images.

**Features:**
- 🆓 **Kostenlos** für öffentliche Images
- 🔒 **Private Repositories** (1 kostenlos, mehr kostenpflichtig)
- ✅ **Official Images** - Von Docker verifiziert
- 🤖 **Automated Builds** - Automatischer Build aus GitHub
- 👥 **Teams & Organizations** - Kollaboration
- 📊 **Analytics** - Download-Statistiken

**URL:** https://hub.docker.com

---

# Docker Hub Account

## Registrierung

```bash
# 1. Account erstellen auf hub.docker.com

# 2. Anmelden
docker login

# Login mit Username/Password:
# Username: maxmustermann
# Password: ********
# Login Succeeded

# Mit Token (empfohlen)
docker login -u maxmustermann -p <access-token>

# Status prüfen
docker info | grep Username
```

## Ausloggen

```bash
# Ausloggen
docker logout

# Von spezifischer Registry
docker logout registry.example.com
```

---

# Images suchen

## Über CLI

```bash
# Images suchen
docker search nginx

# Output:
# NAME                      DESCRIPTION                     STARS   OFFICIAL
# nginx                     Official build of Nginx.        15000   [OK]
# jwilder/nginx-proxy      Automated nginx proxy           2000
# bitnami/nginx            Bitnami nginx image             500

# Mit Limit
docker search --limit 5 postgres

# Nach Official Images filtern
docker search --filter "is-official=true" nginx

# Nach Stars filtern
docker search --filter "stars=100" nginx
```

## Über Web

```
https://hub.docker.com

Suche nach:
- Official Images (von Docker verifiziert)
- Verified Publisher (von Firmen verifiziert)
- Community Images (von Usern)
```

---

# Images herunterladen

```bash
# Latest Version
docker pull nginx
docker pull nginx:latest

# Spezifische Version
docker pull nginx:1.21
docker pull postgres:14
docker pull node:16-alpine

# Vollständiger Name
docker pull docker.io/nginx:latest
#           ↑ Registry  ↑ Image  ↑ Tag

# Von anderem User
docker pull username/myimage:latest

# Multi-Arch Images
docker pull --platform linux/amd64 nginx
docker pull --platform linux/arm64 nginx
```

---

# Eigene Images hochladen

## Image vorbereiten

```bash
# 1. Image bauen oder taggen
docker build -t myapp:1.0 .

# 2. Mit Username taggen (WICHTIG!)
docker tag myapp:1.0 username/myapp:1.0
docker tag myapp:1.0 username/myapp:latest

# Naming Convention:
# <username>/<repository>:<tag>
```

## Image pushen

```bash
# Bei Docker Hub angemeldet sein!
docker login

# Image hochladen
docker push username/myapp:1.0
docker push username/myapp:latest

# Alle Tags pushen
docker push username/myapp --all-tags

# Output zeigt Upload-Fortschritt:
# The push refers to repository [docker.io/username/myapp]
# abc123: Pushed
# def456: Pushed
# 1.0: digest: sha256:abc... size: 1234
```

---

# Repositories verwalten

## Public Repository

```bash
# Public Repo erstellen (über Web oder automatisch beim Push)

# Jeder kann pullen:
docker pull username/myapp:latest

# Kostenlos, unbegrenzt viele
```

## Private Repository

```bash
# Private Repo (über Web erstellen oder beim ersten Push)

# Nur du (und Team-Mitglieder) können pullen
docker pull username/private-app:latest
# Erfordert: docker login

# Kostenlos: 1 private Repo
# Kostenpflichtig: Mehr private Repos
```

---

# Official Images

>Von Docker geprüft und optimiert

```bash
# Erkennbar am "Official Image" Badge

# Beliebte Official Images:
docker pull nginx          # Web Server
docker pull postgres       # Datenbank
docker pull redis          # Cache
docker pull node           # JavaScript Runtime
docker pull python         # Python Runtime
docker pull mysql          # Datenbank
docker pull mongo          # NoSQL DB
docker pull ubuntu         # OS
docker pull alpine         # Minimal OS
```

**Vorteile:**
- ✅ Sicher und geprüft
- ✅ Best Practices
- ✅ Regelmäßig aktualisiert
- ✅ Gut dokumentiert

---

# Verified Publisher

>Von Firmen verifiziert

```bash
# Beispiele:
docker pull bitnami/nginx
docker pull gitlab/gitlab-ce
docker pull microsoft/mssql-server-linux

# Erkennbar am "Verified Publisher" Badge
```

---

# Automated Builds

## GitHub Integration

```yaml
# 1. Repository auf hub.docker.com erstellen
# 2. GitHub Account verknüpfen
# 3. Automated Build aktivieren

# Bei jedem Git-Push:
# → Docker Hub baut automatisch neues Image
# → Tag basiert auf Git-Branch/Tag

# Beispiel:
# Git Tag: v1.0   → Image Tag: 1.0
# Git Branch: main → Image Tag: latest
```

---

# Praktisches Beispiel

## Image erstellen und teilen

```bash
# 1. Dockerfile erstellen
cat > Dockerfile <<EOF
FROM nginx:alpine
COPY index.html /usr/share/nginx/html/
EOF

# 2. HTML Datei
echo "<h1>My Docker Image</h1>" > index.html

# 3. Image bauen
docker build -t mywebsite:1.0 .

# 4. Mit Username taggen
docker tag mywebsite:1.0 maxmustermann/mywebsite:1.0
docker tag mywebsite:1.0 maxmustermann/mywebsite:latest

# 5. Anmelden
docker login

# 6. Hochladen
docker push maxmustermann/mywebsite:1.0
docker push maxmustermann/mywebsite:latest

# 7. Von überall abrufbar!
docker pull maxmustermann/mywebsite:latest
docker run -d -p 8080:80 maxmustermann/mywebsite:latest
```

---

# Tagging Strategie

## Semantic Versioning

```bash
# Version Tags
docker tag myapp username/myapp:1.0.0
docker tag myapp username/myapp:1.0
docker tag myapp username/myapp:1
docker tag myapp username/myapp:latest

# Push alle
docker push username/myapp --all-tags

# User können wählen:
# docker pull username/myapp:latest    # Neueste
# docker pull username/myapp:1         # Major Version 1
# docker pull username/myapp:1.0       # Minor Version 1.0
# docker pull username/myapp:1.0.0     # Exact Version
```

## Environment Tags

```bash
# Development
docker tag myapp username/myapp:dev

# Staging
docker tag myapp username/myapp:staging

# Production
docker tag myapp username/myapp:prod
docker tag myapp username/myapp:latest
```

---

# Image Beschreibung & README

```markdown
# README auf Docker Hub

Über Web-Interface editierbar:
- Beschreibung
- Verwendung
- Umgebungsvariablen
- Beispiele
- Links

Unterstützt Markdown!
```

---

# Docker Hub Limits

## Pull Rate Limits

```
ANONYMOUS:          100 pulls / 6 Stunden
FREE ACCOUNT:       200 pulls / 6 Stunden
PRO/TEAM:          Unlimited

Pro IP-Adresse!
```

```bash
# Limit prüfen
curl -s "https://auth.docker.io/token?service=registry.docker.io&scope=repository:ratelimitpreview/test:pull" | \
  jq -r '.token' | \
  xargs -I {} curl -s -H "Authorization: Bearer {}" https://registry-1.docker.io/v2/ratelimitpreview/test/manifests/latest -I | \
  grep RateLimit

# Output:
# ratelimit-limit: 200;w=21600
# ratelimit-remaining: 195;w=21600
```

## Workarounds

```bash
# 1. Anmelden
docker login  # Höheres Limit

# 2. Private Registry verwenden
# 3. Caching Proxy einrichten
# 4. Pro Account kaufen
```

---

# Best Practices

>[!tip] Docker Hub Best Practices

**1. Spezifische Tags verwenden**
```bash
# ✅ Gut
FROM node:16.14.2-alpine

# ❌ Schlecht - ändert sich!
FROM node:latest
```

**2. README pflegen**
```markdown
# Ausführliche Beschreibung
# Verwendungsbeispiele
# Environment Variables
# Volumes
# Ports
```

**3. Multi-Arch Images**
```bash
# Baue für mehrere Plattformen
docker buildx build --platform linux/amd64,linux/arm64 -t username/myapp:latest .
```

**4. Image scannen**
```bash
# Vulnerabilities prüfen
docker scout quickview username/myapp:latest
docker scout cves username/myapp:latest
```

**5. Automated Builds**
```bash
# GitHub Integration für Auto-Builds
# CI/CD Pipeline einrichten
```

---

# Alternativen zu Docker Hub

```
ANDERE PUBLIC REGISTRIES:
- GitHub Container Registry (ghcr.io)
- Google Container Registry (gcr.io)
- Amazon ECR Public (public.ecr.aws)
- Red Hat Quay.io

PRIVATE REGISTRIES:
- AWS ECR
- Google GCR
- Azure ACR
- Harbor (Self-hosted)
- GitLab Container Registry
```

---

# Zusammenfassung

>[!summary] Docker Hub Kernpunkte
>- **Zentrale Registry**: Größte Image-Sammlung
>- **Official Images**: Geprüft und sicher
>- **Kostenlos**: Public Repos unbegrenzt
>- **Private Repos**: 1 kostenlos, mehr kostenpflichtig
>- **Automated Builds**: GitHub Integration
>- **Rate Limits**: 100-200 pulls/6h

>[!tip] Workflow
>1. Account erstellen auf hub.docker.com
>2. `docker login`
>3. Image mit Username taggen
>4. `docker push username/image:tag`
>5. Image ist öffentlich verfügbar!

---

# Verwandte Konzepte

- [[02 - RESOURCES/Notes/Docker\|Docker]] - Hauptnotiz
- [[02 - RESOURCES/Notes/Docker Image\|Docker Image]] - Images hochladen/herunterladen
- [[02 - RESOURCES/Notes/Docker Registry\|Docker Registry]] - Private Registries
- [[02 - RESOURCES/Notes/Dockerfile\|Dockerfile]] - Images bauen für Hub


</div></div>


## 
<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/02-resources/notes/docker-swarm/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




>**Docker Swarm** ist Dockers eingebaute Lösung für Container-Orchestrierung über mehrere Hosts.
>>Verwandelt mehrere Docker Hosts in einen virtuellen Docker Host - Cluster Management.

---

# Was ist Docker Swarm?

```
DOCKER SWARM CLUSTER:
┌───────────────────────────────────────────────────────┐
│                   SWARM CLUSTER                        │
│                                                        │
│  ┌─────────────────┐         ┌─────────────────┐     │
│  │  Manager Node   │◄────────┤  Manager Node   │     │
│  │  (Leader)       │         │                 │     │
│  ├─────────────────┤         ├─────────────────┤     │
│  │ ┌─────┐ ┌─────┐│         │ ┌─────┐ ┌─────┐ │     │
│  │ │Task │ │Task ││         │ │Task │ │Task │ │     │
│  │ └─────┘ └─────┘│         │ └─────┘ └─────┘ │     │
│  └─────────────────┘         └─────────────────┘     │
│           │                           │               │
│           ▼                           ▼               │
│  ┌─────────────────┐         ┌─────────────────┐     │
│  │  Worker Node    │         │  Worker Node    │     │
│  ├─────────────────┤         ├─────────────────┤     │
│  │ ┌─────┐ ┌─────┐│         │ ┌─────┐ ┌─────┐ │     │
│  │ │Task │ │Task ││         │ │Task │ │Task │ │     │
│  │ └─────┘ └─────┘│         │ └─────┘ └─────┘ │     │
│  └─────────────────┘         └─────────────────┘     │
└───────────────────────────────────────────────────────┘
```

**Kernkonzepte:**
- **Manager Nodes**: Cluster-Management & Orchestrierung
- **Worker Nodes**: Führen Container aus
- **Services**: Deklarative Service-Definition
- **Tasks**: Laufende Container-Instanzen
- **Stack**: Multi-Service Deployment

---

# Swarm initialisieren

## Swarm erstellen

```bash
# Manager Node erstellen
docker swarm init

# Output:
# Swarm initialized: current node (abc123) is now a manager.
# To add a worker to this swarm, run the following command:
#
#     docker swarm join --token SWMTKN-1-xyz... 192.168.1.100:2377

# Mit spezifischer IP
docker swarm init --advertise-addr 192.168.1.100
```

## Worker hinzufügen

```bash
# Auf Worker-Host ausführen
docker swarm join --token SWMTKN-1-xyz... 192.168.1.100:2377

# Output:
# This node joined a swarm as a worker.
```

## Manager hinzufügen

```bash
# Token für Manager anzeigen (auf Manager Node)
docker swarm join-token manager

# Auf neuem Manager-Host
docker swarm join --token SWMTKN-1-abc... 192.168.1.100:2377
```

---

# Swarm Management

## Nodes anzeigen

```bash
# Alle Nodes
docker node ls

# Output:
# ID        HOSTNAME    STATUS  AVAILABILITY  MANAGER STATUS
# abc123    manager1    Ready   Active        Leader
# def456    worker1     Ready   Active
# ghi789    worker2     Ready   Active

# Node Details
docker node inspect manager1
```

## Node Rollen

```bash
# Worker zu Manager promoten
docker node promote worker1

# Manager zu Worker degradieren
docker node demote manager1

# Node aus Cluster entfernen
docker node rm worker1
# Node muss vorher geleaved haben:
# docker swarm leave (auf dem Node ausführen)
```

---

# Services erstellen

## Einfacher Service

```bash
# Service mit 3 Replicas erstellen
docker service create \
  --name web \
  --replicas 3 \
  -p 8080:80 \
  nginx

# Service anzeigen
docker service ls

# Output:
# ID        NAME  MODE        REPLICAS  IMAGE
# abc123    web   replicated  3/3       nginx:latest

# Tasks (Container) anzeigen
docker service ps web
```

## Service mit Constraints

```bash
# Nur auf Manager Nodes
docker service create \
  --name monitoring \
  --constraint 'node.role==manager' \
  prometheus

# Nur auf Nodes mit SSD
docker service create \
  --name database \
  --constraint 'node.labels.storage==ssd' \
  postgres

# Label zu Node hinzufügen
docker node update --label-add storage=ssd worker1
```

---

# Service Update

```bash
# Service skalieren
docker service scale web=5

# Image aktualisieren (Rolling Update)
docker service update --image nginx:1.21 web

# Mit Update-Konfiguration
docker service update \
  --update-parallelism 2 \
  --update-delay 10s \
  --image nginx:1.21 \
  web

# Rollback
docker service rollback web

# Umgebungsvariable hinzufügen
docker service update \
  --env-add NODE_ENV=production \
  web
```

---

# Service Modi

## Replicated (Standard)

```bash
# X Replicas über Cluster verteilt
docker service create \
  --name web \
  --replicas 5 \
  nginx
```

## Global

```bash
# Genau 1 Container pro Node
docker service create \
  --name monitoring-agent \
  --mode global \
  prometheus/node-exporter

# Läuft auf JEDEM Node (auch neuen!)
```

---

# Overlay Networks

```bash
# Overlay Network für Multi-Host
docker network create \
  --driver overlay \
  --attachable \
  myoverlay

# Service im Overlay Network
docker service create \
  --name web \
  --network myoverlay \
  nginx

docker service create \
  --name api \
  --network myoverlay \
  myapi

# web kann api per Namen erreichen!
# curl http://api:3000
```

---

# Secrets Management

```bash
# Secret erstellen
echo "super-secret-password" | docker secret create db-password -

# Aus Datei
docker secret create db-password ./password.txt

# Secrets anzeigen
docker secret ls

# Service mit Secret
docker service create \
  --name db \
  --secret db-password \
  postgres

# Im Container: /run/secrets/db-password
```

---

# Config Management

```bash
# Config erstellen
docker config create nginx-config ./nginx.conf

# Service mit Config
docker service create \
  --name web \
  --config source=nginx-config,target=/etc/nginx/nginx.conf \
  nginx

# Config ist read-only im Container
```

---

# Docker Stack (Compose für Swarm)

## stack.yml

```yaml
version: '3.8'

services:
  web:
    image: nginx:alpine
    ports:
      - "80:80"
    deploy:
      replicas: 3
      update_config:
        parallelism: 1
        delay: 10s
      restart_policy:
        condition: on-failure
    networks:
      - frontend
    configs:
      - source: nginx-config
        target: /etc/nginx/nginx.conf

  api:
    image: myapi:latest
    deploy:
      replicas: 5
      placement:
        constraints:
          - node.role==worker
    networks:
      - frontend
      - backend
    secrets:
      - api-key
      - db-password
    environment:
      - NODE_ENV=production

  db:
    image: postgres:14
    deploy:
      replicas: 1
      placement:
        constraints:
          - node.labels.database==true
    networks:
      - backend
    secrets:
      - db-password
    volumes:
      - db-data:/var/lib/postgresql/data

networks:
  frontend:
    driver: overlay
  backend:
    driver: overlay
    internal: true

volumes:
  db-data:

secrets:
  api-key:
    external: true
  db-password:
    external: true

configs:
  nginx-config:
    file: ./nginx.conf
```

## Stack deployen

```bash
# Stack deployen
docker stack deploy -c stack.yml myapp

# Stacks anzeigen
docker stack ls

# Stack Services
docker stack services myapp

# Stack löschen
docker stack rm myapp
```

---

# Load Balancing

```
SWARM INGRESS ROUTING:
User Request → Port 80
       │
       ▼
┌──────────────────┐
│  Ingress Load    │  ← Automatisch!
│    Balancer      │
└─────┬────────────┘
      │
      ├──► web.1 (Node 1)
      ├──► web.2 (Node 2)
      └──► web.3 (Node 3)

Jeder Node nimmt Requests an
und leitet sie an verfügbare Tasks!
```

```bash
# Service erstellen
docker service create \
  --name web \
  --replicas 3 \
  -p 8080:80 \
  nginx

# Request an ANY Node:
curl http://node1:8080  ← Funktioniert
curl http://node2:8080  ← Funktioniert auch!
curl http://node3:8080  ← Auch!

# Automatisches Load Balancing!
```

---

# High Availability

## Manager Quorum

```
MANAGER NODES:
1 Manager:  ✅ Funktioniert, ❌ Kein Failover
3 Manager:  ✅ Toleriert 1 Ausfall
5 Manager:  ✅ Toleriert 2 Ausfälle
7 Manager:  ✅ Toleriert 3 Ausfälle

Immer UNGERADE Anzahl!
```

## Health Checks

```yaml
services:
  web:
    image: nginx
    deploy:
      replicas: 3
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost/health"]
      interval: 30s
      timeout: 10s
      retries: 3
      start_period: 40s
```

---

# Praktisches Beispiel: WordPress Cluster

```yaml
version: '3.8'

services:
  wordpress:
    image: wordpress:latest
    ports:
      - "80:80"
    deploy:
      replicas: 3
      update_config:
        parallelism: 1
        delay: 10s
      restart_policy:
        condition: on-failure
    environment:
      WORDPRESS_DB_HOST: db
      WORDPRESS_DB_USER: wordpress
      WORDPRESS_DB_PASSWORD_FILE: /run/secrets/db-password
      WORDPRESS_DB_NAME: wordpress
    secrets:
      - db-password
    networks:
      - wordpress-net

  db:
    image: mysql:8.0
    deploy:
      replicas: 1
      placement:
        constraints:
          - node.role==manager
    environment:
      MYSQL_ROOT_PASSWORD_FILE: /run/secrets/db-root-password
      MYSQL_DATABASE: wordpress
      MYSQL_USER: wordpress
      MYSQL_PASSWORD_FILE: /run/secrets/db-password
    secrets:
      - db-root-password
      - db-password
    volumes:
      - db-data:/var/lib/mysql
    networks:
      - wordpress-net

volumes:
  db-data:

networks:
  wordpress-net:
    driver: overlay

secrets:
  db-root-password:
    external: true
  db-password:
    external: true
```

```bash
# Secrets erstellen
echo "root-secret" | docker secret create db-root-password -
echo "wp-secret" | docker secret create db-password -

# Stack deployen
docker stack deploy -c wordpress.yml wordpress

# Öffne: http://any-node-ip
```

---

# Monitoring & Logging

```bash
# Service Logs
docker service logs web
docker service logs -f web  # Follow

# Node Status
docker node ls

# Service Stats
docker service ps web

# Cluster-weite Events
docker events --filter 'type=service'
```

---

# Swarm vs Kubernetes

| Feature | Docker Swarm | Kubernetes |
|---------|-------------|------------|
| **Komplexität** | ✅ Einfach | ⚠️ Komplex |
| **Setup** | Minuten | Stunden/Tage |
| **Learning Curve** | Flach | Steil |
| **Features** | Basic | Advanced |
| **Ecosystem** | Kleiner | Riesig |
| **Verwenden wenn** | Einfache Setups | Enterprise |

---

# Zusammenfassung

>[!summary] Docker Swarm Kernpunkte
>- **Cluster**: Mehrere Hosts als eine Einheit
>- **Orchestrierung**: Automatisches Service-Management
>- **Scaling**: Einfaches Hoch-/Runterskalieren
>- **Load Balancing**: Automatisch integriert
>- **Secrets**: Sichere Konfiguration
>- **Rolling Updates**: Zero-Downtime Deployments

>[!tip] Quick Start
>```bash
># Manager initialisieren
>docker swarm init
>
># Service erstellen
>docker service create --name web --replicas 3 -p 80:80 nginx
>
># Skalieren
>docker service scale web=5
>```

---

# Verwandte Konzepte

- [[02 - RESOURCES/Notes/Docker\|Docker]] - Hauptnotiz
- [[02 - RESOURCES/Notes/Docker Compose\|Docker Compose]] - Für einzelne Hosts
- [[02 - RESOURCES/Notes/Docker Networking\|Docker Networking]] - Overlay Networks
- [[02 - RESOURCES/Notes/Docker Container\|Docker Container]] - Tasks in Swarm


</div></div>


---

# Praktisches Beispiel: WordPress Setup

```bash
# WordPress mit MySQL Datenbank
docker network create wordpress-net

# MySQL starten
docker run -d \
  --name wordpress-db \
  --network wordpress-net \
  -e MYSQL_ROOT_PASSWORD=secret \
  -e MYSQL_DATABASE=wordpress \
  -e MYSQL_USER=wpuser \
  -e MYSQL_PASSWORD=wppass \
  mysql:8.0

# WordPress starten
docker run -d \
  --name wordpress \
  --network wordpress-net \
  -p 8080:80 \
  -e WORDPRESS_DB_HOST=wordpress-db \
  -e WORDPRESS_DB_USER=wpuser \
  -e WORDPRESS_DB_PASSWORD=wppass \
  -e WORDPRESS_DB_NAME=wordpress \
  wordpress:latest

# Öffne: http://localhost:8080
```

---

# Use Cases

>[!example] Wofür wird Docker verwendet?

**1. Development**
- Einheitliche Entwicklungsumgebung im Team
- "Works on my machine" Problem lösen
- Schnelles Setup für neue Entwickler

**2. Testing**
- Isolierte Testumgebungen
- CI/CD Pipelines
- Verschiedene Versionen parallel testen

**3. Production**
- Microservices Architektur
- Skalierbare Anwendungen
- Cloud Deployments (AWS, Azure, GCP)

**4. Legacy Applications**
- Alte Apps in Containern isolieren
- Migration zu neuen Systemen vereinfachen

---

# Best Practices

>[!tip] Docker Best Practices

**1. Images klein halten**
```dockerfile
# ✅ Alpine verwenden
FROM node:16-alpine

# ❌ Große Base Images vermeiden
FROM node:16  # Viel größer!
```

**2. .dockerignore verwenden**
```
# .dockerignore
node_modules
.git
*.log
.env
```

**3. Multi-stage Builds**
```dockerfile
# Build Stage
FROM node:16 AS builder
WORKDIR /app
COPY . .
RUN npm ci --only=production

# Production Stage
FROM node:16-alpine
COPY --from=builder /app ./
CMD ["node", "server.js"]
```

**4. Non-root User**
```dockerfile
RUN adduser -D -s /bin/sh appuser
USER appuser
```

**5. Ein Prozess pro Container**
```dockerfile
# ✅ Gut - Ein Service
CMD ["nginx"]

# ❌ Schlecht - Mehrere Services
CMD nginx && php-fpm && cron
```

---

# Häufige Fehler vermeiden

>[!warning] Typische Docker-Fehler

**1. Container-Daten nicht persistent**
```bash
# ❌ FALSCH - Daten gehen verloren
docker run postgres

# ✅ RICHTIG - Mit Volume
docker run -v postgres-data:/var/lib/postgresql/data postgres
```

**2. Port bereits belegt**
```bash
# Fehler: Port 8080 bereits verwendet
docker run -p 8080:80 nginx

# Lösung: Anderen Port verwenden
docker run -p 8081:80 nginx
```

**3. Images nicht aufräumen**
```bash
# Speicher voll durch alte Images
docker system df  # Prüfen

# Aufräumen
docker system prune -a
```

**4. Container als root laufen**
```dockerfile
# Security Risk!
# Besser: Non-root User verwenden
USER appuser
```

---

# Troubleshooting

## Container startet nicht

```bash
# 1. Logs prüfen
docker logs container-name

# 2. Container Details
docker inspect container-name

# 3. Interaktiv testen
docker run -it image-name bash
```

## Container läuft langsam

```bash
# Ressourcen prüfen
docker stats

# Memory Limit setzen
docker run -m 512m nginx

# CPU Limit setzen
docker run --cpus="1.5" nginx
```

## Netzwerk-Probleme

```bash
# Container IP prüfen
docker inspect -f '{{.NetworkSettings.IPAddress}}' container-name

# Netzwerke anzeigen
docker network ls

# Container zu Netzwerk hinzufügen
docker network connect netzwerk-name container-name
```

---

# Zusammenfassung

>[!summary] Docker Kernpunkte
>- **Container**: Isolierte, leichtgewichtige Laufzeitumgebungen
>- **Images**: Unveränderliche Vorlagen für Container
>- **Dockerfile**: Rezept zum Bauen von Images
>- **Compose**: Multi-Container Anwendungen orchestrieren
>- **Volumes**: Daten persistent speichern
>- **Networking**: Container-Kommunikation
>- **Registry**: Images speichern und teilen

>[!tip] Lernweg
>1. Grundlagen (Container, Images) ✓
>2. Dockerfile schreiben ✓
>3. Docker Compose verwenden ✓
>4. Volumes und Persistence ✓
>5. Networking verstehen ✓
>6. Production Best Practices
>7. Orchestrierung (Swarm/Kubernetes)

---

# Ressourcen

📚 **Offizielle Dokumentation:**
- [Docker Docs](https://docs.docker.com/)
- [Docker Hub](https://hub.docker.com/)
- [Dockerfile Reference](https://docs.docker.com/engine/reference/builder/)

🎓 **Lernplattformen:**
- [Play with Docker](https://labs.play-with-docker.com/)
- Docker Tutorials (YouTube)
- Udemy Docker Kurse

🛠️ **Tools:**
- Docker Desktop (Windows/Mac)
- Docker CLI
- Docker Compose
- Portainer (GUI)
- Lazydocker (TUI)

📖 **Bücher:**
- "Docker: Up & Running" - Karl Matthias
- "Docker Deep Dive" - Nigel Poulton
- "The Docker Book" - James Turnbull

---

# Verwandte Konzepte

- [[02 - RESOURCES/Notes/Containerisierung\|Containerisierung]] - Container-Technologie allgemein
- [[02 - RESOURCES/Notes/Kubernetes\|Kubernetes]] - Container-Orchestrierung
- [[02 - RESOURCES/Notes/Microservices\|Microservices]] - Architektur-Pattern
- [[CI/CD\|CI/CD]] - Continuous Integration/Deployment
- [[DevOps\|DevOps]] - Development + Operations
