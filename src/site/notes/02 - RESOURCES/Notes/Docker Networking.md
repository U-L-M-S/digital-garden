---
{"dg-publish":true,"permalink":"/02-resources/notes/docker-networking/","tags":["informatik/virtualisierung/docker/networking","informatik/netzwerk/virtuell"],"noteIcon":"","updated":"2025-11-06T15:41:44.000+01:00"}
---

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
