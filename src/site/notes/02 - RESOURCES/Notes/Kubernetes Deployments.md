---
{"dg-publish":true,"permalink":"/02-resources/notes/kubernetes-deployments/","tags":["informatik/virtualisierung/kubernetes/deployments","devops/kubernetes"],"noteIcon":"","updated":"2025-11-06T16:12:09.000+01:00"}
---

>Ein **Deployment** ist ein [[02 - RESOURCES/Notes/Kubernetes\|Kubernetes]]-Controller der deklarativ [[02 - RESOURCES/Notes/Kubernetes Pods\|Pods]] und ReplicaSets verwaltet.
>>Deployments ermöglichen Rolling Updates, Rollbacks, und stellen sicher dass die gewünschte Anzahl Pods läuft.

---

# Was ist ein Deployment?

```
DEPLOYMENT HIERARCHIE:
┌────────────────────────────────┐
│        Deployment              │ ← Verwaltet ReplicaSets
│  (nginx-deployment)            │   Beschreibt gewünschten State
│  Replicas: 3                   │
└──────────┬─────────────────────┘
           │ erstellt/verwaltet
           ▼
┌────────────────────────────────┐
│        ReplicaSet              │ ← Stellt sicher: 3 Pods laufen
│  (nginx-rs-abc123)             │   Managed by Deployment
│  Desired: 3, Current: 3        │
└──────────┬─────────────────────┘
           │ erstellt
     ┌─────┼─────┐
     ▼     ▼     ▼
  ┌───┐ ┌───┐ ┌───┐
  │Pod│ │Pod│ │Pod│ ← Laufen auf Worker Nodes
  └───┘ └───┘ └───┘
```

**Warum Deployments statt Pods?**
- ✅ **Self-Healing**: Pod crashed → Automatisch neu erstellt
- ✅ **Scaling**: Einfach Replicas erhöhen/senken
- ✅ **Rolling Updates**: Zero-Downtime Updates
- ✅ **Rollback**: Zurück zur vorherigen Version
- ✅ **Deklarativ**: Beschreibe gewünschten Zustand

---

# Einfaches Deployment

```yaml
# deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-deployment
  labels:
    app: nginx
spec:
  # Anzahl der gewünschten Pods
  replicas: 3

  # Welche Pods gehören zu diesem Deployment?
  selector:
    matchLabels:
      app: nginx

  # Pod Template
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
      - name: nginx
        image: nginx:1.21-alpine
        ports:
        - containerPort: 80
```

```bash
# Deployment erstellen
kubectl apply -f deployment.yaml

# Deployments anzeigen
kubectl get deployments

# Output:
# NAME               READY   UP-TO-DATE   AVAILABLE   AGE
# nginx-deployment   3/3     3            3           1m

# Pods anzeigen
kubectl get pods -l app=nginx

# Output:
# NAME                               READY   STATUS    RESTARTS   AGE
# nginx-deployment-5d59d67564-7x2m9   1/1     Running   0          1m
# nginx-deployment-5d59d67564-kj8p1   1/1     Running   0          1m
# nginx-deployment-5d59d67564-zt9w4   1/1     Running   0          1m
```

---

# Deployment erstellen

## Imperativ (Quick)

```bash
# Einfaches Deployment
kubectl create deployment nginx --image=nginx:alpine

# Mit Replicas
kubectl create deployment nginx --image=nginx:alpine --replicas=3

# YAML generieren (Dry Run)
kubectl create deployment nginx --image=nginx --replicas=3 --dry-run=client -o yaml > deployment.yaml
```

## Deklarativ (Best Practice)

```yaml
# production-deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: myapp
  labels:
    app: myapp
    environment: production
spec:
  replicas: 5
  selector:
    matchLabels:
      app: myapp
  template:
    metadata:
      labels:
        app: myapp
        version: v1
    spec:
      containers:
      - name: myapp
        image: myapp:v1.2.0
        ports:
        - containerPort: 8080
        env:
        - name: ENVIRONMENT
          value: "production"
        resources:
          requests:
            memory: "256Mi"
            cpu: "250m"
          limits:
            memory: "512Mi"
            cpu: "500m"
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

```bash
# Deployment erstellen/aktualisieren
kubectl apply -f production-deployment.yaml
```

---

# Deployment Management

## Anzeigen

```bash
# Alle Deployments
kubectl get deployments

# Mit mehr Details
kubectl get deployments -o wide

# Details anzeigen
kubectl describe deployment nginx-deployment

# Als YAML
kubectl get deployment nginx-deployment -o yaml

# Status
kubectl rollout status deployment nginx-deployment
```

## Skalieren

```bash
# Replicas ändern (imperativ)
kubectl scale deployment nginx-deployment --replicas=5

# Verifikation
kubectl get deployment nginx-deployment
# Output: READY 5/5

# Autoscaling (HPA)
kubectl autoscale deployment nginx-deployment --min=3 --max=10 --cpu-percent=80
```

## Aktualisieren

```bash
# Image aktualisieren (imperativ)
kubectl set image deployment nginx-deployment nginx=nginx:1.22-alpine

# Oder: YAML bearbeiten und apply
kubectl apply -f deployment.yaml

# Rollout-Status überwachen
kubectl rollout status deployment nginx-deployment

# History anzeigen
kubectl rollout history deployment nginx-deployment
```

## Löschen

```bash
# Deployment löschen (inkl. Pods)
kubectl delete deployment nginx-deployment

# Aus YAML
kubectl delete -f deployment.yaml
```

---

# Rolling Updates

>Rolling Updates aktualisieren Pods schrittweise ohne Downtime.

```
ROLLING UPDATE PROZESS:
Alte Version (v1):        Neue Version (v2):
┌───┐ ┌───┐ ┌───┐
│v1 │ │v1 │ │v1 │        ┌───┐
└───┘ └───┘ └───┘        │v2 │
                         └───┘
  ▼
┌───┐ ┌───┐              ┌───┐ ┌───┐
│v1 │ │v1 │              │v2 │ │v2 │
└───┘ └───┘              └───┘ └───┘
  ▼
┌───┐                    ┌───┐ ┌───┐ ┌───┐
│v1 │                    │v2 │ │v2 │ │v2 │
└───┘                    └───┘ └───┘ └───┘
  ▼
                         ┌───┐ ┌───┐ ┌───┐
                         │v2 │ │v2 │ │v2 │
                         └───┘ └───┘ └───┘
```

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: myapp
spec:
  replicas: 3
  strategy:
    type: RollingUpdate
    rollingUpdate:
      maxSurge: 1        # Max +1 Pod während Update
      maxUnavailable: 1  # Max 1 Pod down während Update
  template:
    spec:
      containers:
      - name: myapp
        image: myapp:v2.0
```

```bash
# Image aktualisieren
kubectl set image deployment myapp myapp=myapp:v2.0

# Rollout überwachen
kubectl rollout status deployment myapp

# Output:
# Waiting for deployment "myapp" rollout to finish: 1 out of 3 new replicas have been updated...
# Waiting for deployment "myapp" rollout to finish: 2 out of 3 new replicas have been updated...
# Waiting for deployment "myapp" rollout to finish: 3 new replicas have been updated...
# deployment "myapp" successfully rolled out

# Rollout pausieren (bei Problemen)
kubectl rollout pause deployment myapp

# Rollout fortsetzen
kubectl rollout resume deployment myapp
```

---

# Rollback

```bash
# Rollout History
kubectl rollout history deployment myapp

# Output:
# REVISION  CHANGE-CAUSE
# 1         kubectl apply --filename=deployment.yaml
# 2         kubectl set image deployment myapp myapp=myapp:v2.0

# Zu vorheriger Version
kubectl rollout undo deployment myapp

# Zu spezifischer Revision
kubectl rollout undo deployment myapp --to-revision=1

# Rollout-Status
kubectl rollout status deployment myapp
```

---

# Update-Strategien

## RollingUpdate (Standard)

```yaml
spec:
  strategy:
    type: RollingUpdate
    rollingUpdate:
      maxSurge: 1        # Wie viele Pods extra während Update
      maxUnavailable: 0  # Wie viele Pods down sein dürfen
```

**Beispiel: maxSurge=1, maxUnavailable=0**
```
Replicas: 3

Schritt 1: Neuer Pod wird gestartet (3+1=4 Pods)
[v1] [v1] [v1] [v2]

Schritt 2: v2 ready → v1 wird gelöscht (zurück zu 3)
[v1] [v1] [v2]

Schritt 3: Neuer v2 Pod
[v1] [v1] [v2] [v2]

Schritt 4: v1 gelöscht
[v1] [v2] [v2]

Schritt 5: Letzter v2 Pod
[v1] [v2] [v2] [v2]

Schritt 6: Letzter v1 gelöscht
[v2] [v2] [v2]
```

## Recreate

>Alle Pods werden gelöscht, dann neu erstellt. **Downtime!**

```yaml
spec:
  strategy:
    type: Recreate
```

```
RECREATE STRATEGIE:
[v1] [v1] [v1]
  ▼
  Alle löschen
  ▼
[ ]  [ ]  [ ]  ← DOWNTIME!
  ▼
  Neue starten
  ▼
[v2] [v2] [v2]
```

**Wann verwenden?**
- Datenbank-Upgrades (State-Probleme)
- Volume-Konflikte
- Wenn Downtime akzeptabel ist

---

# Deployment mit ConfigMap & Secret

```yaml
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
        app: myapp
    spec:
      containers:
      - name: myapp
        image: myapp:v1
        env:
        # Aus ConfigMap
        - name: DATABASE_URL
          valueFrom:
            configMapKeyRef:
              name: app-config
              key: database_url

        # Aus Secret
        - name: DB_PASSWORD
          valueFrom:
            secretKeyRef:
              name: app-secret
              key: password

        # ConfigMap als Volume
        volumeMounts:
        - name: config
          mountPath: /etc/config

        # Secret als Volume
        - name: secrets
          mountPath: /etc/secrets
          readOnly: true

      volumes:
      - name: config
        configMap:
          name: app-config

      - name: secrets
        secret:
          secretName: app-secret
```

---

# Health Checks in Deployments

```yaml
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
        app: myapp
    spec:
      containers:
      - name: myapp
        image: myapp:v1
        ports:
        - containerPort: 8080

        # Liveness: Container läuft?
        livenessProbe:
          httpGet:
            path: /health
            port: 8080
          initialDelaySeconds: 30
          periodSeconds: 10
          timeoutSeconds: 5
          failureThreshold: 3

        # Readiness: Bereit für Traffic?
        readinessProbe:
          httpGet:
            path: /ready
            port: 8080
          initialDelaySeconds: 5
          periodSeconds: 5
          timeoutSeconds: 3
          failureThreshold: 3

        # Startup: Für langsam startende Apps
        startupProbe:
          httpGet:
            path: /startup
            port: 8080
          failureThreshold: 30
          periodSeconds: 10
```

**Probe-Effekt auf Rolling Update:**
- **readinessProbe failed** → Pod erhält keinen Traffic
- Alte Pods bleiben bis neue ready sind
- Zero-Downtime garantiert

---

# Resource Limits

```yaml
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
        app: myapp
    spec:
      containers:
      - name: myapp
        image: myapp:v1
        resources:
          # Requests: Für Scheduling (garantiert)
          requests:
            memory: "256Mi"
            cpu: "250m"

          # Limits: Maximum
          limits:
            memory: "512Mi"
            cpu: "500m"
```

```bash
# Resource-Nutzung anzeigen
kubectl top pods -l app=myapp

# Node-Ressourcen
kubectl top nodes
```

---

# Label Selectors

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: myapp
spec:
  selector:
    # matchLabels: Einfache Gleichheit
    matchLabels:
      app: myapp
      tier: frontend

    # matchExpressions: Komplexere Logik
    matchExpressions:
    - key: environment
      operator: In
      values:
      - production
      - staging

    - key: version
      operator: NotIn
      values:
      - alpha
      - beta

  template:
    metadata:
      labels:
        app: myapp
        tier: frontend
        environment: production
        version: v1
```

**Operators:**
- `In`: Label-Wert in Liste
- `NotIn`: Label-Wert nicht in Liste
- `Exists`: Label existiert
- `DoesNotExist`: Label existiert nicht

---

# Pod Disruption Budget

>Schützt vor zu vielen gleichzeitigen Pod-Ausfällen.

```yaml
# pdb.yaml
apiVersion: policy/v1
kind: PodDisruptionBudget
metadata:
  name: myapp-pdb
spec:
  minAvailable: 2      # Mindestens 2 Pods müssen laufen
  selector:
    matchLabels:
      app: myapp
```

```yaml
# Alternative: maxUnavailable
apiVersion: policy/v1
kind: PodDisruptionBudget
metadata:
  name: myapp-pdb
spec:
  maxUnavailable: 1    # Max 1 Pod darf down sein
  selector:
    matchLabels:
      app: myapp
```

```bash
# PDB anzeigen
kubectl get pdb

# Details
kubectl describe pdb myapp-pdb
```

**Anwendungsfälle:**
- Node-Wartung
- Cluster-Upgrades
- Voluntary Disruptions

---

# Affinity & Anti-Affinity

## Node Affinity

>Pods auf bestimmten Nodes platzieren.

```yaml
spec:
  template:
    spec:
      affinity:
        nodeAffinity:
          requiredDuringSchedulingIgnoredDuringExecution:
            nodeSelectorTerms:
            - matchExpressions:
              - key: disktype
                operator: In
                values:
                - ssd

          preferredDuringSchedulingIgnoredDuringExecution:
          - weight: 1
            preference:
              matchExpressions:
              - key: region
                operator: In
                values:
                - us-west
```

## Pod Anti-Affinity

>Pods auf verschiedene Nodes verteilen (High Availability).

```yaml
spec:
  template:
    spec:
      affinity:
        podAntiAffinity:
          requiredDuringSchedulingIgnoredDuringExecution:
          - labelSelector:
              matchExpressions:
              - key: app
                operator: In
                values:
                - myapp
            topologyKey: kubernetes.io/hostname
```

**Ergebnis:** Jeder Pod auf anderem Node.

---

# Troubleshooting

## Deployment wird nicht deployed

```bash
# Deployment-Status
kubectl get deployment myapp

# Events anzeigen
kubectl describe deployment myapp

# ReplicaSets prüfen
kubectl get rs -l app=myapp

# Pods prüfen
kubectl get pods -l app=myapp

# Pod Events
kubectl describe pod <pod-name>
```

**Häufige Probleme:**
- **ImagePullBackOff**: Image nicht gefunden
- **CrashLoopBackOff**: Container crashed
- **Insufficient resources**: Node hat nicht genug CPU/Memory
- **Selector mismatch**: selector und labels passen nicht

## Rolling Update hängt

```bash
# Status prüfen
kubectl rollout status deployment myapp

# History
kubectl rollout history deployment myapp

# Pause (bei Problemen)
kubectl rollout pause deployment myapp

# Inspect old/new ReplicaSets
kubectl get rs -l app=myapp

# Rollback
kubectl rollout undo deployment myapp

# Resume
kubectl rollout resume deployment myapp
```

---

# Best Practices

>[!tip] Deployment Best Practices

**1. Verwende Deployments, nicht Pods/ReplicaSets direkt**
```bash
# ✅ Gut
kubectl create deployment myapp --image=myapp:v1

# ❌ Schlecht
kubectl run myapp --image=myapp:v1
```

**2. Setze Resource Requests/Limits**
```yaml
resources:
  requests:
    memory: "256Mi"
    cpu: "250m"
  limits:
    memory: "512Mi"
    cpu: "500m"
```

**3. Definiere Health Checks**
```yaml
livenessProbe:
  httpGet:
    path: /health
    port: 8080
readinessProbe:
  httpGet:
    path: /ready
    port: 8080
```

**4. Verwende spezifische Image-Tags**
```yaml
# ✅ Gut
image: myapp:v1.2.3

# ❌ Schlecht
image: myapp:latest
```

**5. Rolling Update Strategie**
```yaml
strategy:
  type: RollingUpdate
  rollingUpdate:
    maxSurge: 1
    maxUnavailable: 0  # Zero-Downtime
```

**6. Pod Disruption Budget**
```yaml
apiVersion: policy/v1
kind: PodDisruptionBudget
metadata:
  name: myapp-pdb
spec:
  minAvailable: 2
  selector:
    matchLabels:
      app: myapp
```

**7. Labels verwenden**
```yaml
metadata:
  labels:
    app: myapp
    version: v1
    environment: production
    tier: backend
```

---

# Zusammenfassung

>[!summary] Kubernetes Deployments
>- **Controller**: Verwaltet ReplicaSets und Pods
>- **Deklarativ**: Beschreibe gewünschten Zustand
>- **Self-Healing**: Pods werden automatisch neu erstellt
>- **Rolling Updates**: Zero-Downtime Updates
>- **Rollback**: Zurück zur vorherigen Version
>- **Scaling**: Einfach Replicas ändern

>[!tip] Quick Reference
>```bash
># Deployment erstellen
>kubectl create deployment myapp --image=myapp:v1 --replicas=3
>
># Deployment anzeigen
>kubectl get deployments
>
># Skalieren
>kubectl scale deployment myapp --replicas=5
>
># Image aktualisieren
>kubectl set image deployment myapp myapp=myapp:v2
>
># Rollback
>kubectl rollout undo deployment myapp
>```

---

# Verwandte Konzepte

- [[02 - RESOURCES/Notes/Kubernetes\|Kubernetes]] - Hauptnotiz
- [[02 - RESOURCES/Notes/Kubernetes Pods\|Kubernetes Pods]] - Von Deployments verwaltet
- [[02 - RESOURCES/Notes/Kubernetes Services\|Kubernetes Services]] - Pods exponieren
- [[02 - RESOURCES/Notes/Kubernetes StatefulSets\|Kubernetes StatefulSets]] - Für Stateful Apps
- [[02 - RESOURCES/Notes/Kubernetes DaemonSets\|Kubernetes DaemonSets]] - Ein Pod pro Node
