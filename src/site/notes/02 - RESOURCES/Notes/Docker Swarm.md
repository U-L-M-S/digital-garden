---
{"dg-publish":true,"permalink":"/02-resources/notes/docker-swarm/","tags":["informatik/virtualisierung/docker/orchestration","informatik/virtualisierung/docker/cluster"],"noteIcon":"","updated":"2025-11-06T15:43:56.000+01:00"}
---

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
