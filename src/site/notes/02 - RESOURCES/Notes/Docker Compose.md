---
{"dg-publish":true,"permalink":"/02-resources/notes/docker-compose/","tags":["informatik/virtualisierung/docker/compose","informatik/virtualisierung/docker/orchestration"],"noteIcon":"","updated":"2025-11-06T15:39:08.000+01:00"}
---

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
