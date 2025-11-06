---
{"dg-publish":true,"permalink":"/02-resources/notes/kubernetes/","tags":["informatik/virtualisierung/kubernetes","informatik/orchestrierung","devops/kubernetes"],"noteIcon":"","updated":"2025-11-06T16:09:02.357+01:00"}
---

>**Kubernetes** (K8s) ist eine Open-Source-Plattform zur Container-Orchestrierung, die das Deployment, Skalierung und Management von containerisierten Anwendungen automatisiert.
>>Entwickelt von Google, jetzt von CNCF verwaltet - der De-facto-Standard für Container-Orchestrierung in Production.

---

# Was ist Kubernetes?

```
KUBERNETES CLUSTER:
┌─────────────────────────────────────────────────────────┐
│                  CONTROL PLANE                          │
│  ┌──────────────┐  ┌────────────┐  ┌────────────────┐  │
│  │ API Server   │  │ Scheduler  │  │ Controller Mgr │  │
│  └──────────────┘  └────────────┘  └────────────────┘  │
│  ┌──────────────┐                                       │
│  │    etcd      │  (State Store)                        │
│  └──────────────┘                                       │
└────────────┬────────────────────────────────────────────┘
             │
     ┌───────┴────────┐
     │                │
┌────▼────────┐  ┌────▼────────┐  ┌────────────┐
│ Worker Node │  │ Worker Node │  │Worker Node │
├─────────────┤  ├─────────────┤  ├────────────┤
│   kubelet   │  │   kubelet   │  │  kubelet   │
│   kube-proxy│  │   kube-proxy│  │kube-proxy  │
│             │  │             │  │            │
│ ┌─────────┐ │  │ ┌─────────┐ │  │┌─────────┐ │
│ │  Pod 1  │ │  │ │  Pod 2  │ │  ││  Pod 3  │ │
│ │┌───┐┌──┐│ │  │ │┌───┐    │ │  ││┌───┐    │ │
│ ││C1 ││C2││ │  │ ││C3 │    │ │  │││C4 │    │ │
│ │└───┘└──┘│ │  │ │└───┘    │ │  ││└───┘    │ │
│ └─────────┘ │  │ └─────────┘ │  │└─────────┘ │
└─────────────┘  └─────────────┘  └────────────┘
```

**Kernkonzepte:**
- **Control Plane**: Verwaltet den Cluster (API, Scheduler, Controller)
- **Worker Nodes**: Führen Container-Workloads aus
- **Pods**: Kleinste deploybare Einheit (1+ Container)
- **Services**: Netzwerk-Abstraktion für Pods
- **Deployments**: Deklaratives Management von Pods

---

# Warum Kubernetes?

>[!info] Probleme die K8s löst
>**Ohne Kubernetes:**
>- Manuelle Container-Verwaltung über mehrere Hosts
>- Kein automatisches Failover
>- Schwierige Load-Balancing-Konfiguration
>- Manuelles Scaling
>- Komplexe Service Discovery
>
>**Mit Kubernetes:**
>- ✅ Automatisches Container-Scheduling
>- ✅ Self-Healing (Container-Neustart bei Fehler)
>- ✅ Automatisches Load Balancing
>- ✅ Horizontal Auto-Scaling
>- ✅ Service Discovery & DNS

**Vergleich:**

```
DOCKER SWARM:              KUBERNETES:
✅ Einfach                 ⚠️ Komplex
✅ Schnelles Setup         ⚠️ Steile Lernkurve
⚠️ Basic Features          ✅ Advanced Features
⚠️ Kleines Ecosystem       ✅ Riesiges Ecosystem
→ Klein/Mittel            → Enterprise
```

---

# Kubernetes Architektur

## Control Plane Komponenten

```
CONTROL PLANE:
┌─────────────────────────────────────────┐
│                                         │
│  ┌─────────────────┐                   │
│  │   API Server    │ ← REST API        │
│  └────────┬────────┘   (kubectl)       │
│           │                             │
│    ┌──────┼────────┐                   │
│    │      │        │                   │
│    ▼      ▼        ▼                   │
│  ┌────┐ ┌───────┐ ┌──────────────┐    │
│  │etcd│ │Schedu-│ │  Controller  │    │
│  │    │ │ ler   │ │   Manager    │    │
│  └────┘ └───────┘ └──────────────┘    │
│   │        │            │              │
│   └────────┴────────────┘              │
│          State                         │
└─────────────────────────────────────────┘
```

**Komponenten:**

1. **API Server**
   - Zentrale Management-Komponente
   - RESTful API für alle Operationen
   - Authentifizierung und Autorisierung

2. **etcd**
   - Distributed Key-Value Store
   - Speichert gesamten Cluster-State
   - Hochverfügbar und konsistent

3. **Scheduler**
   - Weist Pods zu Worker Nodes zu
   - Berücksichtigt Ressourcen, Constraints
   - Optimiert Pod-Platzierung

4. **Controller Manager**
   - Läuft Control Loops
   - Node Controller, Replication Controller, etc.
   - Überwacht und korrigiert Cluster-State

---

## Worker Node Komponenten

```
WORKER NODE:
┌─────────────────────────────────────┐
│                                     │
│  ┌──────────┐                       │
│  │ kubelet  │ ← Agent auf Node      │
│  └────┬─────┘                       │
│       │                             │
│       ├─► Container Runtime         │
│       │    (containerd, CRI-O)      │
│       │                             │
│  ┌────┴─────┐                       │
│  │kube-proxy│ ← Network Proxy       │
│  └──────────┘                       │
│                                     │
│  ┌──────────────────────────────┐  │
│  │         PODS                 │  │
│  │  ┌─────┐  ┌─────┐  ┌─────┐  │  │
│  │  │ Pod │  │ Pod │  │ Pod │  │  │
│  │  └─────┘  └─────┘  └─────┘  │  │
│  └──────────────────────────────┘  │
└─────────────────────────────────────┘
```

**Komponenten:**

1. **kubelet**
   - Agent auf jedem Node
   - Kommuniziert mit API Server
   - Verwaltet Pods und Container

2. **kube-proxy**
   - Network Proxy auf jedem Node
   - Implementiert Service-Abstraktion
   - Load Balancing für Services

3. **Container Runtime**
   - containerd (Standard)
   - CRI-O, Docker (deprecated)
   - Führt Container aus

---

# Installation

## Minikube (Lokal, Single-Node)

```bash
# Minikube installieren (Linux)
curl -LO https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64
sudo install minikube-linux-amd64 /usr/local/bin/minikube

# Cluster starten
minikube start

# Status prüfen
minikube status

# kubectl verwenden
kubectl cluster-info
kubectl get nodes
```

## kubectl installieren

```bash
# Linux
curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"
sudo install kubectl /usr/local/bin/kubectl

# Version prüfen
kubectl version --client

# Cluster-Info
kubectl cluster-info
```

## kubeadm (Production, Multi-Node)

```bash
# Auf allen Nodes: Container Runtime installieren
sudo apt update
sudo apt install -y containerd

# kubeadm, kubelet, kubectl installieren
sudo apt install -y kubeadm kubelet kubectl

# Auf Master Node: Cluster initialisieren
sudo kubeadm init --pod-network-cidr=10.244.0.0/16

# kubectl konfigurieren
mkdir -p $HOME/.kube
sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config

# Pod Network installieren (z.B. Flannel)
kubectl apply -f https://raw.githubusercontent.com/flannel-io/flannel/master/Documentation/kube-flannel.yml

# Worker Nodes joinen (Token vom init-Output)
sudo kubeadm join <master-ip>:6443 --token <token> --discovery-token-ca-cert-hash <hash>
```

---

# Grundlegende Konzepte

## Pod Lifecycle

```
POD LIFECYCLE:
┌──────────┐   kubectl apply   ┌──────────┐
│          │──────────────────►│          │
│ Manifest │                   │ Pending  │
└──────────┘                   └────┬─────┘
                                    │ Scheduler
                                    ▼
                               ┌──────────┐
                       ┌───────┤ Running  │
                       │       └────┬─────┘
                  restart        success│fail
                       │               ▼
                       └──────►┌──────────┐   ┌──────────┐
                               │Succeeded │   │ Failed   │
                               └──────────┘   └──────────┘
```

## Deployment → ReplicaSet → Pods

```
HIERARCHIE:
┌────────────────────────────────┐
│        Deployment              │ ← Verwaltet ReplicaSets
│  (nginx-deployment)            │
└──────────┬─────────────────────┘
           │
           ▼
┌────────────────────────────────┐
│        ReplicaSet              │ ← Stellt Replicas sicher
│  (nginx-rs-abc123)             │
└──────────┬─────────────────────┘
           │
     ┌─────┼─────┐
     ▼     ▼     ▼
  ┌───┐ ┌───┐ ┌───┐
  │Pod│ │Pod│ │Pod│ ← Laufen auf Nodes
  └───┘ └───┘ └───┘
```

---

# Erste Schritte

## Einfacher Pod

```yaml
# pod.yaml
apiVersion: v1
kind: Pod
metadata:
  name: nginx-pod
  labels:
    app: nginx
spec:
  containers:
  - name: nginx
    image: nginx:alpine
    ports:
    - containerPort: 80
```

```bash
# Pod erstellen
kubectl apply -f pod.yaml

# Pods anzeigen
kubectl get pods

# Pod Details
kubectl describe pod nginx-pod

# Logs
kubectl logs nginx-pod

# In Pod einloggen
kubectl exec -it nginx-pod -- sh

# Pod löschen
kubectl delete pod nginx-pod
```

## Einfaches Deployment

```yaml
# deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-deployment
spec:
  replicas: 3
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
      - name: nginx
        image: nginx:alpine
        ports:
        - containerPort: 80
```

```bash
# Deployment erstellen
kubectl apply -f deployment.yaml

# Deployments anzeigen
kubectl get deployments

# Pods vom Deployment
kubectl get pods -l app=nginx

# Skalieren
kubectl scale deployment nginx-deployment --replicas=5

# Rollout-Status
kubectl rollout status deployment nginx-deployment
```

## Service erstellen

```yaml
# service.yaml
apiVersion: v1
kind: Service
metadata:
  name: nginx-service
spec:
  selector:
    app: nginx
  ports:
  - protocol: TCP
    port: 80
    targetPort: 80
  type: LoadBalancer
```

```bash
# Service erstellen
kubectl apply -f service.yaml

# Services anzeigen
kubectl get services

# Service-Details
kubectl describe service nginx-service

# Mit Minikube: Service URL
minikube service nginx-service --url
```

---

# kubectl Grundbefehle

## Ressourcen verwalten

```bash
# Ressource erstellen
kubectl apply -f <file.yaml>
kubectl create -f <file.yaml>

# Ressourcen anzeigen
kubectl get pods
kubectl get deployments
kubectl get services
kubectl get all

# Details anzeigen
kubectl describe pod <pod-name>
kubectl describe service <service-name>

# Logs
kubectl logs <pod-name>
kubectl logs -f <pod-name>  # Follow

# In Container einloggen
kubectl exec -it <pod-name> -- /bin/bash

# Ressource löschen
kubectl delete pod <pod-name>
kubectl delete -f <file.yaml>
```

## Debugging

```bash
# Cluster-Info
kubectl cluster-info
kubectl get nodes

# Events anzeigen
kubectl get events

# Ressourcen-Verwendung
kubectl top nodes
kubectl top pods

# Port-Forwarding (lokaler Zugriff)
kubectl port-forward pod/<pod-name> 8080:80

# Yaml ausgeben
kubectl get pod <pod-name> -o yaml
kubectl get deployment <name> -o yaml
```

---

# Deklaratives vs. Imperatives Management

```
IMPERATIV (Befehle):
kubectl run nginx --image=nginx
kubectl create deployment nginx --image=nginx
kubectl expose deployment nginx --port=80
↓ Schnell für Tests, aber nicht reproduzierbar


DEKLARATIV (YAML):
kubectl apply -f deployment.yaml
kubectl apply -f service.yaml
kubectl apply -f .
↓ Best Practice für Production!
```

**Vorteile deklarativ:**
- ✅ Versionskontrolle (Git)
- ✅ Reproduzierbar
- ✅ Review-fähig
- ✅ Rollback möglich
- ✅ Infrastructure as Code

---

# Namespaces

```
NAMESPACES (Virtuelle Cluster):
┌──────────────────────────────────────────┐
│             KUBERNETES CLUSTER           │
│                                          │
│  ┌────────────┐  ┌────────────┐         │
│  │  default   │  │kube-system │         │
│  │            │  │            │         │
│  │ ┌────┐     │  │ ┌────┐     │         │
│  │ │App │     │  │ │DNS │     │         │
│  │ └────┘     │  │ └────┘     │         │
│  └────────────┘  └────────────┘         │
│                                          │
│  ┌────────────┐  ┌────────────┐         │
│  │   prod     │  │    dev     │         │
│  │            │  │            │         │
│  │ ┌────┐     │  │ ┌────┐     │         │
│  │ │App │     │  │ │App │     │         │
│  │ └────┘     │  │ └────┘     │         │
│  └────────────┘  └────────────┘         │
└──────────────────────────────────────────┘
```

```bash
# Namespaces anzeigen
kubectl get namespaces

# In Namespace arbeiten
kubectl get pods -n kube-system
kubectl apply -f app.yaml -n production

# Namespace erstellen
kubectl create namespace production
kubectl create namespace development

# Standard-Namespace setzen
kubectl config set-context --current --namespace=production
```

---

# YAML-Struktur

**Grundstruktur jeder Ressource:**

```yaml
apiVersion: <api-version>    # API Version
kind: <resource-type>        # Typ (Pod, Deployment, Service, etc.)
metadata:                    # Metadaten
  name: <name>
  labels:
    key: value
  annotations:
    key: value
spec:                        # Spezifikation (unterschiedlich je nach kind)
  # ... ressourcenspezifisch
```

**Beispiel:**

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-app
  labels:
    app: my-app
    version: v1
spec:
  replicas: 3
  selector:
    matchLabels:
      app: my-app
  template:
    metadata:
      labels:
        app: my-app
    spec:
      containers:
      - name: app
        image: myapp:v1
        ports:
        - containerPort: 8080
        env:
        - name: ENV_VAR
          value: "production"
        resources:
          limits:
            memory: "512Mi"
            cpu: "500m"
          requests:
            memory: "256Mi"
            cpu: "250m"
```

---

# Best Practices

>[!tip] Kubernetes Best Practices

**1. Deklaratives Management**
```bash
# ✅ Gut
kubectl apply -f deployment.yaml

# ❌ Schlecht
kubectl run nginx --image=nginx
```

**2. Resource Limits setzen**
```yaml
resources:
  limits:
    memory: "512Mi"
    cpu: "500m"
  requests:
    memory: "256Mi"
    cpu: "250m"
```

**3. Health Checks definieren**
```yaml
livenessProbe:
  httpGet:
    path: /health
    port: 8080
  initialDelaySeconds: 30
  periodSeconds: 10
readinessProbe:
  httpGet:
    path: /ready
    port: 8080
  initialDelaySeconds: 5
  periodSeconds: 5
```

**4. Labels verwenden**
```yaml
metadata:
  labels:
    app: myapp
    version: v1
    environment: production
```

**5. Namespaces nutzen**
```bash
# Umgebungen trennen
kubectl apply -f app.yaml -n production
kubectl apply -f app.yaml -n development
```

---

# Zusammenfassung

>[!summary] Kubernetes Kernpunkte
>- **Container-Orchestrierung**: Automatisches Management von Containern
>- **Control Plane**: API Server, Scheduler, Controller Manager, etcd
>- **Worker Nodes**: kubelet, kube-proxy, Container Runtime
>- **Pods**: Kleinste deploybare Einheit (1+ Container)
>- **Deployments**: Deklaratives Management von Pods mit Replicas
>- **Services**: Load Balancing und Service Discovery
>- **kubectl**: CLI-Tool für Cluster-Management

>[!tip] Quick Start
>```bash
># Cluster starten (Minikube)
>minikube start
>
># Deployment erstellen
>kubectl create deployment nginx --image=nginx
>
># Skalieren
>kubectl scale deployment nginx --replicas=3
>
># Service exponieren
>kubectl expose deployment nginx --port=80 --type=LoadBalancer
>```

---

# Verwandte Konzepte

- [[02 - RESOURCES/Notes/Kubernetes Pods\|Kubernetes Pods]] - Kleinste deploybare Einheit
- [[Kubernetes Deployments\|Kubernetes Deployments]] - Deklaratives Management
- [[Kubernetes Services\|Kubernetes Services]] - Load Balancing & Discovery
- [[Kubernetes Volumes\|Kubernetes Volumes]] - Datenpersistenz
- [[Kubernetes Networking\|Kubernetes Networking]] - Container-Kommunikation
- [[Kubernetes Ingress\|Kubernetes Ingress]] - HTTP/HTTPS Routing
- [[Kubernetes kubectl\|Kubernetes kubectl]] - CLI-Tool
- [[Kubernetes Helm\|Kubernetes Helm]] - Package Manager
- [[02 - RESOURCES/Notes/Docker\|Docker]] - Container-Technologie
