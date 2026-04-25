---
{"dg-publish":true,"permalink":"/02-resources/notes/kubernetes-services/","tags":["informatik/virtualisierung/kubernetes/services","devops/kubernetes","informatik/netzwerk"],"noteIcon":"","updated":"2025-11-06T16:13:44.000+01:00","dg-note-properties":{"aliases":["Kubernetes Services","K8s Service","Service"],"created_date":"2025-11-06","links":null,"tags":["informatik/virtualisierung/kubernetes/services","devops/kubernetes","informatik/netzwerk"]}}
---

>Ein **Service** in [[02 - RESOURCES/Notes/Kubernetes\|Kubernetes]] ist eine Abstraktion die eine logische Menge von [[02 - RESOURCES/Notes/Kubernetes Pods\|Pods]] exponiert und Load Balancing bereitstellt.
>>Services haben eine stabile IP-Adresse und DNS-Namen, auch wenn Pods dynamisch erstellt/gelöscht werden.

---

# Problem: Warum Services?

```
OHNE SERVICE (Problem):
┌─────┐ ┌─────┐ ┌─────┐
│Pod 1│ │Pod 2│ │Pod 3│
│10.0.│ │10.0.│ │10.0.│
│1.5  │ │1.8  │ │1.12 │
└─────┘ └─────┘ └─────┘
   ▲        ▲       ▲
   └────────┴───────┘
Welchen Pod ansprechen?
IPs ändern sich ständig!

MIT SERVICE (Lösung):
       ┌─────────────┐
       │   SERVICE   │
       │ 10.96.0.100 │ ← Stabile IP
       │  my-service │ ← Stabile DNS
       └──────┬──────┘
              │ Load Balancing
       ┌──────┼──────┐
       ▼      ▼      ▼
    ┌─────┐┌─────┐┌─────┐
    │Pod 1││Pod 2││Pod 3│
    └─────┘└─────┘└─────┘
```

**Services lösen:**
- ✅ **Service Discovery**: Stabile DNS-Namen
- ✅ **Load Balancing**: Traffic auf Pods verteilen
- ✅ **Abstraktion**: Pods können sich ändern, Service bleibt
- ✅ **Externe Erreichbarkeit**: Zugriff von außerhalb

---

# Service-Typen

```
SERVICE TYPEN:
┌──────────────────────────────────────────┐
│   ClusterIP (Standard)                   │
│   Nur innerhalb des Clusters            │
│   ┌─────┐     ┌──────────┐              │
│   │ Pod │────►│ Service  │              │
│   └─────┘     │10.96.0.1 │              │
│               └──────────┘              │
└──────────────────────────────────────────┘

┌──────────────────────────────────────────┐
│   NodePort                               │
│   Auf jedem Node ein Port                │
│   External:30080 → Pod:80                │
│                                          │
│   [Internet]                             │
│        ▼                                 │
│   Node:30080 ───► Service ───► Pod      │
└──────────────────────────────────────────┘

┌──────────────────────────────────────────┐
│   LoadBalancer                           │
│   Cloud Load Balancer                    │
│                                          │
│   [Internet]                             │
│        ▼                                 │
│   Cloud LB ───► Nodes ───► Pods         │
└──────────────────────────────────────────┘
```

---

# ClusterIP Service

>Standard-Typ. Nur innerhalb des Clusters erreichbar.

```yaml
# clusterip-service.yaml
apiVersion: v1
kind: Service
metadata:
  name: my-service
spec:
  type: ClusterIP        # Standard, kann weggelassen werden
  selector:
    app: myapp           # Pods mit diesem Label
  ports:
  - protocol: TCP
    port: 80             # Service Port
    targetPort: 8080     # Pod Port
```

```bash
# Service erstellen
kubectl apply -f clusterip-service.yaml

# Services anzeigen
kubectl get services

# Output:
# NAME         TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)   AGE
# my-service   ClusterIP   10.96.100.50   <none>        80/TCP    10s

# Details
kubectl describe service my-service

# Testen (von innerhalb des Clusters)
kubectl run test --rm -it --image=busybox -- sh
# Im Container:
wget -qO- my-service:80
```

**Use Cases:**
- Inter-Pod Kommunikation
- Backend-Services
- Datenbanken (nicht von außen erreichbar)

---

# NodePort Service

>Exponiert Service auf jedem Node über einen statischen Port (30000-32767).

```yaml
# nodeport-service.yaml
apiVersion: v1
kind: Service
metadata:
  name: my-nodeport-service
spec:
  type: NodePort
  selector:
    app: myapp
  ports:
  - protocol: TCP
    port: 80           # Service Port
    targetPort: 8080   # Pod Port
    nodePort: 30080    # Node Port (optional, auto-assigned wenn nicht angegeben)
```

```bash
# Service erstellen
kubectl apply -f nodeport-service.yaml

# Services anzeigen
kubectl get services

# Output:
# NAME                  TYPE       CLUSTER-IP      EXTERNAL-IP   PORT(S)        AGE
# my-nodeport-service   NodePort   10.96.100.51   <none>        80:30080/TCP   10s

# Testen (von außerhalb)
# http://<any-node-ip>:30080
curl http://192.168.49.2:30080

# Mit Minikube
minikube service my-nodeport-service --url
```

```
NODEPORT TRAFFIC FLOW:
[Client]
   │
   ▼
Node1:30080 ──┐
Node2:30080 ──┼──► Service ──┐
Node3:30080 ──┘               │
                              ▼
                         ┌─────┬─────┬─────┐
                         │Pod 1│Pod 2│Pod 3│
                         └─────┴─────┴─────┘
```

**Use Cases:**
- Testing/Development
- Zugriff von außen ohne Cloud Load Balancer
- On-Premise Setups

---

# LoadBalancer Service

>Erstellt externen Load Balancer (Cloud Provider erforderlich).

```yaml
# loadbalancer-service.yaml
apiVersion: v1
kind: Service
metadata:
  name: my-loadbalancer
spec:
  type: LoadBalancer
  selector:
    app: myapp
  ports:
  - protocol: TCP
    port: 80
    targetPort: 8080
```

```bash
# Service erstellen
kubectl apply -f loadbalancer-service.yaml

# Services anzeigen
kubectl get services

# Output:
# NAME               TYPE           CLUSTER-IP      EXTERNAL-IP      PORT(S)        AGE
# my-loadbalancer    LoadBalancer   10.96.100.52   35.225.123.45   80:31234/TCP   2m

# Testen
curl http://35.225.123.45
```

```
LOADBALANCER TRAFFIC FLOW:
[Internet]
   │
   ▼
[Cloud Load Balancer]
 External IP: 35.225.123.45
   │
   ├──► Node1:31234 ──┐
   ├──► Node2:31234 ──┼──► Service ──┐
   └──► Node3:31234 ──┘               │
                                      ▼
                                 ┌─────┬─────┬─────┐
                                 │Pod 1│Pod 2│Pod 3│
                                 └─────┴─────┴─────┘
```

**Requirements:**
- Cloud Provider (AWS, GCP, Azure)
- Oder MetalLB für On-Premise

**Use Cases:**
- Production Web Apps
- Öffentliche APIs
- Internet-facing Services

---

# ExternalName Service

>Mappt Service zu externem DNS-Namen.

```yaml
# externalname-service.yaml
apiVersion: v1
kind: Service
metadata:
  name: external-database
spec:
  type: ExternalName
  externalName: db.example.com
```

```bash
# Service erstellen
kubectl apply -f externalname-service.yaml

# Von Pods aus:
# mysql -h external-database -u user -p
# → Verbindet zu db.example.com
```

**Use Cases:**
- Externe Datenbanken
- Externe APIs
- Migration von Services

---

# Service erstellen

## Imperativ

```bash
# Deployment exponieren (ClusterIP)
kubectl expose deployment myapp --port=80 --target-port=8080

# NodePort
kubectl expose deployment myapp --type=NodePort --port=80

# LoadBalancer
kubectl expose deployment myapp --type=LoadBalancer --port=80

# YAML generieren
kubectl expose deployment myapp --port=80 --dry-run=client -o yaml > service.yaml
```

## Deklarativ

```yaml
# complete-service.yaml
apiVersion: v1
kind: Service
metadata:
  name: myapp-service
  labels:
    app: myapp
spec:
  type: LoadBalancer
  selector:
    app: myapp
    tier: backend
  ports:
  - name: http
    protocol: TCP
    port: 80
    targetPort: 8080

  - name: https
    protocol: TCP
    port: 443
    targetPort: 8443

  # Session Affinity (Sticky Sessions)
  sessionAffinity: ClientIP
  sessionAffinityConfig:
    clientIP:
      timeoutSeconds: 3600
```

```bash
# Service erstellen/aktualisieren
kubectl apply -f complete-service.yaml
```

---

# Service Discovery

## Über DNS

```
SERVICE DNS FORMAT:
<service-name>.<namespace>.svc.cluster.local

Beispiele:
my-service.default.svc.cluster.local
database.production.svc.cluster.local
api.staging.svc.cluster.local
```

```yaml
# Beispiel: Frontend → Backend Communication
apiVersion: v1
kind: Pod
metadata:
  name: frontend
spec:
  containers:
  - name: frontend
    image: frontend:v1
    env:
    # Im gleichen Namespace
    - name: BACKEND_URL
      value: "http://backend-service:80"

    # In anderem Namespace
    - name: DATABASE_URL
      value: "http://database.production.svc.cluster.local:5432"
```

```bash
# DNS testen (von Pod aus)
kubectl run test --rm -it --image=busybox -- sh

# Im Container:
nslookup my-service
nslookup my-service.default
nslookup my-service.default.svc.cluster.local

# HTTP Request
wget -qO- my-service:80
```

## Über Environment Variables

>Kubernetes injiziert automatisch Env-Variablen für Services.

```bash
# Service existiert: my-service (Port 80)
# Pods bekommen automatisch:
MY_SERVICE_SERVICE_HOST=10.96.100.50
MY_SERVICE_SERVICE_PORT=80
MY_SERVICE_PORT=tcp://10.96.100.50:80
MY_SERVICE_PORT_80_TCP=tcp://10.96.100.50:80
MY_SERVICE_PORT_80_TCP_PROTO=tcp
MY_SERVICE_PORT_80_TCP_PORT=80
MY_SERVICE_PORT_80_TCP_ADDR=10.96.100.50
```

**⚠️ Reihenfolge wichtig!**
- Service muss VOR Pod existieren
- DNS ist preferred (flexibler)

---

# Endpoints

>Endpoints sind die Pod-IPs hinter einem Service.

```bash
# Endpoints anzeigen
kubectl get endpoints my-service

# Output:
# NAME         ENDPOINTS                              AGE
# my-service   10.244.1.5:8080,10.244.2.3:8080,...   5m

# Details
kubectl describe endpoints my-service
```

```yaml
# Service
apiVersion: v1
kind: Service
metadata:
  name: my-service
spec:
  selector:
    app: myapp    # ← Wählt Pods aus
  ports:
  - port: 80
    targetPort: 8080
```

**Automatische Endpoints:**
- K8s erstellt automatisch Endpoints für Pods mit passendem Label
- Endpoints werden aktualisiert wenn Pods hinzukommen/entfernt werden

---

# Headless Service

>Service ohne Cluster-IP für direkte Pod-Adressierung.

```yaml
# headless-service.yaml
apiVersion: v1
kind: Service
metadata:
  name: headless-service
spec:
  clusterIP: None     # ← Headless!
  selector:
    app: myapp
  ports:
  - port: 80
    targetPort: 8080
```

```bash
# DNS Lookup gibt Pod-IPs zurück (nicht Service-IP)
kubectl run test --rm -it --image=busybox -- sh

# Im Container:
nslookup headless-service

# Output:
# Name:      headless-service.default.svc.cluster.local
# Address 1: 10.244.1.5 pod-1.headless-service.default.svc.cluster.local
# Address 2: 10.244.2.3 pod-2.headless-service.default.svc.cluster.local
# Address 3: 10.244.3.7 pod-3.headless-service.default.svc.cluster.local
```

**Use Cases:**
- [[02 - RESOURCES/Notes/Kubernetes StatefulSets\|StatefulSets]] (individuelle Pod-Adressierung)
- Clustered Datenbanken (Cassandra, Elasticsearch)
- Custom Load Balancing

---

# Multi-Port Service

```yaml
# multi-port-service.yaml
apiVersion: v1
kind: Service
metadata:
  name: multi-port-service
spec:
  selector:
    app: myapp
  ports:
  - name: http
    protocol: TCP
    port: 80
    targetPort: 8080

  - name: https
    protocol: TCP
    port: 443
    targetPort: 8443

  - name: metrics
    protocol: TCP
    port: 9090
    targetPort: 9090
```

**⚠️ Bei Multi-Port MUSS name gesetzt sein!**

---

# Session Affinity

>Sticky Sessions - Client bleibt bei gleichem Pod.

```yaml
apiVersion: v1
kind: Service
metadata:
  name: sticky-service
spec:
  selector:
    app: myapp
  sessionAffinity: ClientIP    # ← Sticky Sessions
  sessionAffinityConfig:
    clientIP:
      timeoutSeconds: 3600     # 1 Stunde
  ports:
  - port: 80
    targetPort: 8080
```

**Optionen:**
- `None`: Kein Affinity (Standard)
- `ClientIP`: Gleiche Client-IP → Gleicher Pod

**Use Cases:**
- Session-basierte Apps ohne Shared Storage
- WebSocket-Verbindungen
- Shopping Carts

---

# Service mit Deployment

**Vollständiges Beispiel:**

```yaml
# app-deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: myapp
spec:
  replicas: 3
  selector:
    matchLabels:
      app: myapp
  template:
    metadata:
      labels:
        app: myapp        # ← Service selektiert über dieses Label
    spec:
      containers:
      - name: myapp
        image: myapp:v1
        ports:
        - containerPort: 8080
---
# app-service.yaml
apiVersion: v1
kind: Service
metadata:
  name: myapp-service
spec:
  type: LoadBalancer
  selector:
    app: myapp          # ← Matcht Pods mit app=myapp
  ports:
  - protocol: TCP
    port: 80            # Service Port
    targetPort: 8080    # Container Port
```

```bash
# Beide erstellen
kubectl apply -f app-deployment.yaml

# Service exponiert automatisch alle Pods
kubectl get endpoints myapp-service
```

---

# Service Testing

```bash
# Service testen (von innerhalb)
kubectl run test-pod --rm -it --image=busybox -- sh

# Im Container:
wget -qO- myapp-service:80
nslookup myapp-service

# Service Port-Forward (lokal testen)
kubectl port-forward service/myapp-service 8080:80

# Browser: http://localhost:8080
```

---

# Troubleshooting

## Service erreichbar, Pods nicht

```bash
# 1. Endpoints prüfen
kubectl get endpoints my-service

# Leer? → Selector passt nicht!
# 2. Labels prüfen
kubectl get pods --show-labels

# 3. Selector prüfen
kubectl get service my-service -o yaml | grep selector -A 5

# 4. Pods müssen Ready sein
kubectl get pods -l app=myapp
```

## Service nicht erreichbar

```bash
# 1. Service existiert?
kubectl get services

# 2. Service Typ prüfen
kubectl describe service my-service

# 3. NodePort: Firewall?
# 4. LoadBalancer: External IP pending?
kubectl get service my-service

# 5. DNS testen
kubectl run test --rm -it --image=busybox -- nslookup my-service
```

## LoadBalancer External IP pending

```bash
# Auf Cloud-Provider: Dauert 1-2 Minuten
kubectl get service my-service -w

# Minikube: Tunnel starten
minikube tunnel

# On-Premise: MetalLB installieren
kubectl apply -f https://raw.githubusercontent.com/metallb/metallb/v0.13.0/config/manifests/metallb-native.yaml
```

---

# Service vs. Ingress

```
SERVICE (L4 Load Balancing):
┌─────────────────────────────┐
│  [Internet]                 │
│       ▼                     │
│  LoadBalancer Service       │
│  (1 External IP)            │
│       ▼                     │
│  Pods                       │
└─────────────────────────────┘
→ 1 Service = 1 Load Balancer = 1 IP

INGRESS (L7 Load Balancing):
┌─────────────────────────────┐
│  [Internet]                 │
│       ▼                     │
│  Ingress Controller         │
│  (1 External IP)            │
│       ▼                     │
│  ┌──────────┬──────────┐    │
│  │ Service1 │ Service2 │    │
│  └──────────┴──────────┘    │
│       ▼          ▼          │
│  ┌──────────┐┌──────────┐   │
│  │  Pods    ││  Pods    │   │
│  └──────────┘└──────────┘   │
└─────────────────────────────┘
→ Mehrere Services = 1 IP + Routing
```

---

# Best Practices

>[!tip] Service Best Practices

**1. Verwende Labels konsistent**
```yaml
# Deployment
labels:
  app: myapp
  version: v1
  tier: backend

# Service
selector:
  app: myapp    # Nicht version/tier selektieren!
```

**2. ClusterIP für interne Services**
```yaml
# ✅ Datenbank nur intern
type: ClusterIP

# ❌ Datenbank extern
type: LoadBalancer
```

**3. LoadBalancer nur für Entry Points**
```yaml
# ✅ Frontend/API Gateway
type: LoadBalancer

# Besser: Ingress für Multiple Services
```

**4. Verwende named Ports**
```yaml
# Deployment
ports:
- name: http
  containerPort: 8080

# Service
ports:
- name: http
  port: 80
  targetPort: http  # ← Port-Name statt Number
```

**5. Health Checks in Pods**
```yaml
# Service routet nur zu Ready Pods
readinessProbe:
  httpGet:
    path: /ready
    port: 8080
```

---

# Zusammenfassung

>[!summary] Kubernetes Services
>- **Service Discovery**: Stabile DNS-Namen für Pods
>- **Load Balancing**: Traffic auf Pods verteilen
>- **ClusterIP**: Intern (Standard)
>- **NodePort**: Extern über Node-Port
>- **LoadBalancer**: Cloud Load Balancer
>- **Headless**: Direkte Pod-Adressierung

>[!tip] Quick Reference
>```bash
># Deployment exponieren
>kubectl expose deployment myapp --port=80 --type=LoadBalancer
>
># Services anzeigen
>kubectl get services
>
># Service testen
>kubectl port-forward service/myapp 8080:80
>
># DNS testen
>kubectl run test --rm -it --image=busybox -- nslookup myapp
>```

---

# Verwandte Konzepte

- [[02 - RESOURCES/Notes/Kubernetes\|Kubernetes]] - Hauptnotiz
- [[02 - RESOURCES/Notes/Kubernetes Pods\|Kubernetes Pods]] - Von Services exponiert
- [[02 - RESOURCES/Notes/Kubernetes Deployments\|Kubernetes Deployments]] - Erstellen Pods für Services
- [[02 - RESOURCES/Notes/Kubernetes Ingress\|Kubernetes Ingress]] - L7 Load Balancing
- [[02 - RESOURCES/Notes/Kubernetes Networking\|Kubernetes Networking]] - Cluster-Netzwerk
