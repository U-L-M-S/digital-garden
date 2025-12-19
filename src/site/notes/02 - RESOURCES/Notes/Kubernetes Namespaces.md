---
{"dg-publish":true,"permalink":"/02-resources/notes/kubernetes-namespaces/","tags":["informatik/virtualisierung/kubernetes/namespaces","devops/kubernetes"],"noteIcon":"","updated":"2025-11-06T16:15:11.535+01:00"}
---

>Ein **Namespace** ist eine virtuelle Trennung innerhalb eines [[02 - RESOURCES/Notes/Kubernetes\|Kubernetes]]-Clusters die Ressourcen isoliert und organisiert.
>>Namespaces ermöglichen Multi-Tenancy, Umgebungs-Trennung (dev/staging/prod), und Ressourcen-Quotas pro Team/Projekt.

---

# Was sind Namespaces?

```
KUBERNETES CLUSTER MIT NAMESPACES:
┌──────────────────────────────────────────────────────┐
│                  KUBERNETES CLUSTER                  │
│                                                      │
│  ┌──────────────┐  ┌──────────────┐                 │
│  │   default    │  │ kube-system  │                 │
│  │              │  │              │                 │
│  │ ┌────┐┌────┐ │  │ ┌────┐┌────┐ │                 │
│  │ │Pod ││Svc │ │  │ │DNS ││Proxy│                 │
│  │ └────┘└────┘ │  │ └────┘└────┘ │                 │
│  └──────────────┘  └──────────────┘                 │
│                                                      │
│  ┌──────────────┐  ┌──────────────┐                 │
│  │  production  │  │  development │                 │
│  │              │  │              │                 │
│  │ ┌────┐┌────┐ │  │ ┌────┐┌────┐ │                 │
│  │ │App ││DB  │ │  │ │App ││DB  │ │                 │
│  │ └────┘└────┘ │  │ └────┘└────┘ │                 │
│  └──────────────┘  └──────────────┘                 │
└──────────────────────────────────────────────────────┘
```

**Use Cases:**
- **Umgebungs-Trennung**: dev, staging, production
- **Team-Isolation**: frontend-team, backend-team, data-team
- **Mandantenfähigkeit**: kunde-a, kunde-b, kunde-c
- **Ressourcen-Quotas**: Limits pro Namespace

---

# Standard-Namespaces

```bash
# Alle Namespaces anzeigen
kubectl get namespaces
# Oder kürzer:
kubectl get ns

# Output:
# NAME              STATUS   AGE
# default           Active   10d
# kube-node-lease   Active   10d
# kube-public       Active   10d
# kube-system       Active   10d
```

## default

>Standard-Namespace für Ressourcen ohne spezifischen Namespace.

```bash
# Ohne -n Flag landet alles in default
kubectl get pods
# = kubectl get pods -n default
```

## kube-system

>Kubernetes System-Komponenten (DNS, Dashboard, etc.).

```bash
# System Pods anzeigen
kubectl get pods -n kube-system

# Output:
# coredns-...
# kube-proxy-...
# etcd-...
```

## kube-public

>Öffentlich lesbar von allen (auch nicht-authentifizierten Usern).

```bash
# cluster-info ConfigMap
kubectl get configmap -n kube-public
```

## kube-node-lease

>Heartbeats der Nodes (für Performance).

---

# Namespace erstellen

## Imperativ

```bash
# Namespace erstellen
kubectl create namespace development
kubectl create namespace staging
kubectl create namespace production

# Namespace anzeigen
kubectl get namespace development

# Namespace löschen
kubectl delete namespace development
```

## Deklarativ

```yaml
# development-namespace.yaml
apiVersion: v1
kind: Namespace
metadata:
  name: development
  labels:
    environment: development
    team: backend
```

```bash
# Namespace erstellen
kubectl apply -f development-namespace.yaml

# Namespace Details
kubectl describe namespace development
```

---

# Ressourcen in Namespaces

## Ressourcen erstellen

```yaml
# app-in-namespace.yaml
apiVersion: v1
kind: Pod
metadata:
  name: myapp-pod
  namespace: development    # ← Namespace angeben
spec:
  containers:
  - name: myapp
    image: myapp:v1
```

```bash
# Mit -n Flag
kubectl apply -f app.yaml -n development

# Ohne namespace in YAML:
kubectl apply -f app.yaml --namespace=development

# Ressourcen anzeigen
kubectl get pods -n development
kubectl get all -n development

# Alle Namespaces
kubectl get pods --all-namespaces
# Oder kürzer:
kubectl get pods -A
```

## Default-Namespace setzen

```bash
# Aktuellen Context anzeigen
kubectl config current-context

# Default-Namespace für Context setzen
kubectl config set-context --current --namespace=development

# Jetzt ist development der Default
kubectl get pods
# = kubectl get pods -n development

# Zurück zu default
kubectl config set-context --current --namespace=default
```

---

# Namespace-Organisation

## Umgebungen trennen

```
UMGEBUNGS-STRATEGIE:
┌──────────────┐  ┌──────────────┐  ┌──────────────┐
│   dev        │  │   staging    │  │  production  │
│              │  │              │  │              │
│ ┌──────┐     │  │ ┌──────┐     │  │ ┌──────┐     │
│ │myapp │     │  │ │myapp │     │  │ │myapp │     │
│ │v1.0  │     │  │ │v1.1  │     │  │ │v1.0  │     │
│ └──────┘     │  │ └──────┘     │  │ └──────┘     │
│              │  │              │  │              │
│ Resources:   │  │ Resources:   │  │ Resources:   │
│ Limits: Low  │  │ Limits: Med  │  │ Limits: High │
└──────────────┘  └──────────────┘  └──────────────┘
```

```yaml
# deployment-dev.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: myapp
  namespace: dev
spec:
  replicas: 1        # Weniger Replicas in dev
  template:
    spec:
      containers:
      - name: myapp
        image: myapp:latest
        resources:
          limits:
            memory: "256Mi"
            cpu: "200m"
---
# deployment-prod.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: myapp
  namespace: production
spec:
  replicas: 5        # Mehr Replicas in prod
  template:
    spec:
      containers:
      - name: myapp
        image: myapp:v1.2.0    # Spezifische Version
        resources:
          limits:
            memory: "1Gi"
            cpu: "1000m"
```

## Team-Isolation

```
TEAM-STRATEGIE:
┌──────────────┐  ┌──────────────┐  ┌──────────────┐
│  frontend    │  │  backend     │  │  data-team   │
│              │  │              │  │              │
│ ┌──────┐     │  │ ┌──────┐     │  │ ┌──────┐     │
│ │React │     │  │ │API   │     │  │ │ETL   │     │
│ │App   │     │  │ │Server│     │  │ │Jobs  │     │
│ └──────┘     │  │ └──────┘     │  │ └──────┘     │
│              │  │              │  │              │
│ Team: Alice  │  │ Team: Bob    │  │ Team: Carol  │
└──────────────┘  └──────────────┘  └──────────────┘
```

---

# Cross-Namespace Communication

## Service Discovery

```yaml
# Backend Service in backend Namespace
apiVersion: v1
kind: Service
metadata:
  name: api-service
  namespace: backend
spec:
  selector:
    app: api
  ports:
  - port: 8080
---
# Frontend Pod in frontend Namespace
apiVersion: v1
kind: Pod
metadata:
  name: frontend-pod
  namespace: frontend
spec:
  containers:
  - name: frontend
    image: frontend:v1
    env:
    # DNS: <service>.<namespace>.svc.cluster.local
    - name: API_URL
      value: "http://api-service.backend.svc.cluster.local:8080"
```

**DNS-Format:**
```
<service-name>.<namespace>.svc.cluster.local

Beispiele:
api-service.backend.svc.cluster.local
database.production.svc.cluster.local
cache.shared.svc.cluster.local
```

```bash
# Von frontend Namespace zu backend Service
kubectl exec -n frontend frontend-pod -- wget -qO- api-service.backend:8080
```

---

# ResourceQuotas

>Limitiere Ressourcen pro Namespace.

```yaml
# quota.yaml
apiVersion: v1
kind: ResourceQuota
metadata:
  name: dev-quota
  namespace: development
spec:
  hard:
    # Compute Resources
    requests.cpu: "4"           # Max 4 CPU Requests
    requests.memory: 8Gi        # Max 8 GB Memory Requests
    limits.cpu: "8"             # Max 8 CPU Limits
    limits.memory: 16Gi         # Max 16 GB Memory Limits

    # Storage
    persistentvolumeclaims: "10"  # Max 10 PVCs
    requests.storage: 100Gi       # Max 100 GB Storage

    # Object Counts
    pods: "50"                  # Max 50 Pods
    services: "20"              # Max 20 Services
    configmaps: "20"            # Max 20 ConfigMaps
    secrets: "20"               # Max 20 Secrets
```

```bash
# ResourceQuota erstellen
kubectl apply -f quota.yaml

# Quotas anzeigen
kubectl get resourcequota -n development

# Details
kubectl describe resourcequota dev-quota -n development

# Output zeigt:
# - Hard Limits
# - Used Resources
# - Remaining Resources
```

**Pod erstellen mit Quota:**

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: myapp
  namespace: development
spec:
  containers:
  - name: myapp
    image: myapp:v1
    resources:
      requests:              # MUSS gesetzt sein bei Quota!
        memory: "256Mi"
        cpu: "250m"
      limits:
        memory: "512Mi"
        cpu: "500m"
```

**⚠️ Mit ResourceQuota MÜSSEN Pods Requests/Limits haben!**

---

# LimitRanges

>Default und Min/Max Ressourcen-Werte pro Namespace.

```yaml
# limitrange.yaml
apiVersion: v1
kind: LimitRange
metadata:
  name: resource-limits
  namespace: development
spec:
  limits:
  # Container Limits
  - type: Container
    default:              # Default Limits
      cpu: 500m
      memory: 512Mi
    defaultRequest:       # Default Requests
      cpu: 250m
      memory: 256Mi
    max:                  # Maximum
      cpu: 2000m
      memory: 2Gi
    min:                  # Minimum
      cpu: 100m
      memory: 128Mi

  # Pod Limits
  - type: Pod
    max:
      cpu: 4000m
      memory: 4Gi

  # PVC Limits
  - type: PersistentVolumeClaim
    max:
      storage: 10Gi
    min:
      storage: 1Gi
```

```bash
# LimitRange erstellen
kubectl apply -f limitrange.yaml

# LimitRanges anzeigen
kubectl get limitrange -n development

# Details
kubectl describe limitrange resource-limits -n development
```

**Effekt:**
- Pods ohne Requests/Limits bekommen Default-Werte
- Pods über Max werden abgelehnt
- Pods unter Min werden abgelehnt

---

# NetworkPolicies pro Namespace

```yaml
# network-policy.yaml
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: deny-from-other-namespaces
  namespace: production
spec:
  podSelector: {}        # Alle Pods in production
  policyTypes:
  - Ingress
  ingress:
  # Nur von production Namespace
  - from:
    - podSelector: {}    # Alle Pods in gleichem Namespace
```

```bash
# NetworkPolicy erstellen
kubectl apply -f network-policy.yaml

# NetworkPolicies anzeigen
kubectl get networkpolicy -n production
```

**Resultat:**
- Pods in `production` können nur von anderen `production` Pods erreicht werden
- `frontend` Namespace kann nicht auf `production` zugreifen

---

# Namespace-Labels

```yaml
# labeled-namespace.yaml
apiVersion: v1
kind: Namespace
metadata:
  name: production
  labels:
    environment: production
    team: platform
    cost-center: "1234"
    monitoring: "enabled"
```

```bash
# Namespaces mit Labels filtern
kubectl get namespaces -l environment=production
kubectl get namespaces -l team=platform

# Label hinzufügen
kubectl label namespace development environment=dev

# Label entfernen
kubectl label namespace development environment-
```

---

# Praktisches Beispiel: Multi-Environment

```yaml
# namespaces.yaml
apiVersion: v1
kind: Namespace
metadata:
  name: dev
  labels:
    environment: dev
---
apiVersion: v1
kind: Namespace
metadata:
  name: staging
  labels:
    environment: staging
---
apiVersion: v1
kind: Namespace
metadata:
  name: production
  labels:
    environment: production
---
# quotas.yaml
apiVersion: v1
kind: ResourceQuota
metadata:
  name: dev-quota
  namespace: dev
spec:
  hard:
    requests.cpu: "2"
    requests.memory: 4Gi
    pods: "20"
---
apiVersion: v1
kind: ResourceQuota
metadata:
  name: prod-quota
  namespace: production
spec:
  hard:
    requests.cpu: "10"
    requests.memory: 20Gi
    pods: "100"
```

```bash
# Alle erstellen
kubectl apply -f namespaces.yaml
kubectl apply -f quotas.yaml

# App in dev deployen
kubectl apply -f app.yaml -n dev

# App in prod deployen
kubectl apply -f app.yaml -n production
```

---

# Namespace Management

## Wechseln zwischen Namespaces

```bash
# Aktueller Namespace
kubectl config view --minify | grep namespace

# Namespace wechseln
kubectl config set-context --current --namespace=development

# Mit kubens (Tool)
kubens development
kubens production
```

## Namespace-spezifische Configs

```bash
# Context für Namespace erstellen
kubectl config set-context dev --namespace=development --cluster=mycluster --user=myuser
kubectl config set-context prod --namespace=production --cluster=mycluster --user=myuser

# Context wechseln
kubectl config use-context dev
kubectl config use-context prod
```

---

# Namespace löschen

```bash
# Namespace löschen
kubectl delete namespace development

# ⚠️ Löscht ALLE Ressourcen im Namespace!
# Pods, Services, Deployments, etc.

# Status prüfen
kubectl get namespace development
# STATUS: Terminating

# Finalizers entfernen (falls hängt)
kubectl get namespace development -o json > temp.json
# "finalizers": [] in temp.json
kubectl replace --raw "/api/v1/namespaces/development/finalize" -f ./temp.json
```

**⚠️ Warnung:**
- `kube-system` NICHT löschen!
- Namespace-Löschung ist permanent
- Alle Ressourcen werden gelöscht

---

# Namespace-scoped vs. Cluster-scoped Resources

```
NAMESPACE-SCOPED:           CLUSTER-SCOPED:
✅ Pods                      ✅ Nodes
✅ Services                  ✅ PersistentVolumes
✅ Deployments               ✅ StorageClasses
✅ ConfigMaps                ✅ ClusterRoles
✅ Secrets                   ✅ ClusterRoleBindings
✅ Ingresses                 ✅ Namespaces
```

```bash
# Namespace-scoped Resources auflisten
kubectl api-resources --namespaced=true

# Cluster-scoped Resources auflisten
kubectl api-resources --namespaced=false
```

---

# Troubleshooting

## Pod kann nicht erstellt werden (Quota)

```bash
# ResourceQuota prüfen
kubectl describe quota -n development

# Aktueller Verbrauch
kubectl get resourcequota -n development

# Pods ohne Requests/Limits?
kubectl get pods -n development -o yaml | grep -A 5 resources
```

## Cross-Namespace Communication funktioniert nicht

```bash
# Service existiert im Ziel-Namespace?
kubectl get service -n backend

# DNS testen
kubectl run test -n frontend --rm -it --image=busybox -- sh
# Im Container:
nslookup api-service.backend.svc.cluster.local

# NetworkPolicy blockiert?
kubectl get networkpolicy -n backend
```

---

# Best Practices

>[!tip] Namespace Best Practices

**1. Verwende Namespaces für Isolation**
```bash
# ✅ Gut
kubectl create namespace dev
kubectl create namespace staging
kubectl create namespace prod

# ❌ Schlecht
# Alles in default
```

**2. ResourceQuotas setzen**
```yaml
# Verhindert Resource-Exhaustion
apiVersion: v1
kind: ResourceQuota
metadata:
  name: team-quota
  namespace: team-a
spec:
  hard:
    requests.cpu: "10"
    requests.memory: 20Gi
```

**3. LimitRanges für Defaults**
```yaml
# Pods ohne Limits bekommen Defaults
spec:
  limits:
  - type: Container
    default:
      cpu: 500m
      memory: 512Mi
```

**4. Labels verwenden**
```yaml
metadata:
  labels:
    environment: production
    team: backend
    cost-center: "1234"
```

**5. NetworkPolicies für Security**
```yaml
# Isoliere production von dev
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: deny-from-dev
  namespace: production
spec:
  podSelector: {}
  policyTypes:
  - Ingress
```

**6. Nicht in kube-system arbeiten**
```bash
# ❌ Schlecht
kubectl apply -f app.yaml -n kube-system

# ✅ Gut
kubectl apply -f app.yaml -n production
```

---

# Zusammenfassung

>[!summary] Kubernetes Namespaces
>- **Virtuelle Trennung**: Ressourcen isolieren
>- **Multi-Tenancy**: Teams, Umgebungen, Mandanten
>- **ResourceQuotas**: Limits pro Namespace
>- **LimitRanges**: Default Ressourcen-Werte
>- **DNS**: `<service>.<namespace>.svc.cluster.local`
>- **NetworkPolicies**: Netzwerk-Isolation

>[!tip] Quick Reference
>```bash
># Namespace erstellen
>kubectl create namespace dev
>
># In Namespace arbeiten
>kubectl apply -f app.yaml -n dev
>kubectl get pods -n dev
>
># Default-Namespace setzen
>kubectl config set-context --current --namespace=dev
>
># Alle Namespaces
>kubectl get pods -A
>```

---

# Verwandte Konzepte

- [[02 - RESOURCES/Notes/Kubernetes\|Kubernetes]] - Hauptnotiz
- [[02 - RESOURCES/Notes/Kubernetes Pods\|Kubernetes Pods]] - Namespace-scoped
- [[02 - RESOURCES/Notes/Kubernetes Services\|Kubernetes Services]] - Namespace-scoped
- [[02 - RESOURCES/Notes/Kubernetes Networking\|Kubernetes Networking]] - Cross-Namespace Communication
- [[Kubernetes RBAC\|Kubernetes RBAC]] - Namespace-spezifische Berechtigungen
