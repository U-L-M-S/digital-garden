---
{"dg-publish":true,"permalink":"/02-resources/notes/docker-volumes/","tags":["informatik/virtualisierung/docker/storage","informatik/virtualisierung/docker/persistence"],"noteIcon":"","updated":"2025-11-06T15:39:16.000+01:00"}
---

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
