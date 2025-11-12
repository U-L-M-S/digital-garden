---
{"dg-publish":true,"permalink":"/02-resources/notes/docker-container/","tags":["informatik/virtualisierung/docker/container","containerisierung"],"noteIcon":"","updated":"2025-11-06T15:32:40.749+01:00"}
---

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
