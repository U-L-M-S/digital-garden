---
{"dg-publish":true,"permalink":"/02-resources/notes/docker-image/","tags":["informatik/virtualisierung/docker/images","informatik/virtualisierung/docker/grundlagen"],"noteIcon":"","updated":"2025-11-06T15:35:10.000+01:00","dg-note-properties":{"aliases":["Docker Image","Image","Container Image"],"created_date":"2024-09-04","links":null,"tags":["informatik/virtualisierung/docker/images","informatik/virtualisierung/docker/grundlagen"]}}
---

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
