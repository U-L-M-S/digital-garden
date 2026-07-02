---
{"dg-publish":true,"permalink":"/02-resources/notes/docker-hub/","tags":["informatik/virtualisierung/docker/registry","informatik/virtualisierung/docker/public"],"noteIcon":"","updated":"2025-11-06T15:41:53.000+01:00","dg-note-properties":{"aliases":["Docker Hub","Hub","Public Registry"],"created_date":"2024-09-04","links":null,"tags":["informatik/virtualisierung/docker/registry","informatik/virtualisierung/docker/public"]}}
---

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
