---
{"dg-publish":true,"permalink":"/02-resources/notes/dockerfile/","tags":["informatik/virtualisierung/docker/build","informatik/virtualisierung/docker/images"],"noteIcon":"","updated":"2025-11-06T15:35:16.346+01:00"}
---

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
