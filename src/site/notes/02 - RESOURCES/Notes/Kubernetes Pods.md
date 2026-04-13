---
{"dg-publish":true,"permalink":"/02-resources/notes/kubernetes-pods/","tags":["informatik/virtualisierung/kubernetes/pods","devops/kubernetes"],"noteIcon":"","updated":"2025-11-06T16:10:44.000+01:00","dg-note-properties":{"aliases":["Kubernetes Pods","K8s Pod","Pod"],"created_date":"2025-11-06","links":null,"tags":["informatik/virtualisierung/kubernetes/pods","devops/kubernetes"]}}
---

>Ein **Pod** ist die kleinste deploybare Einheit in [[02 - RESOURCES/Notes/Kubernetes\|Kubernetes]] und besteht aus einem oder mehreren Containern die zusammen auf einem Node laufen.
>>Pods teilen sich Netzwerk, Storage und haben die gleiche Lifecycle - sie sind ephemer und werden bei Fehler neu erstellt.

---

# Was ist ein Pod?

```
POD ANATOMIE:
┌────────────────────────────────────────────┐
│              POD (nginx-pod)               │
│                                            │
│  ┌──────────────────────────────────────┐ │
│  │       Shared Network Namespace       │ │
│  │       IP: 10.244.1.5                 │ │
│  └──────────────────────────────────────┘ │
│                                            │
│  ┌──────────────┐      ┌──────────────┐  │
│  │  Container 1 │      │  Container 2 │  │
│  │   (nginx)    │      │  (sidecar)   │  │
│  │              │      │              │  │
│  │  Port: 80    │      │  Port: 9090  │  │
│  └──────────────┘      └──────────────┘  │
│                                            │
│  ┌──────────────────────────────────────┐ │
│  │      Shared Volumes                  │ │
│  │      /var/log, /data                 │ │
│  └──────────────────────────────────────┘ │
└────────────────────────────────────────────┘
```

**Kern-Eigenschaften:**
- **Shared Network**: Container im Pod teilen IP-Adresse
- **Shared Storage**: Volumes zwischen Containern teilbar
- **Co-Located**: Laufen auf dem gleichen Node
- **Co-Scheduled**: Werden zusammen deployed
- **Ephemeral**: Pods sind temporär, nicht persistent

---

# Pod vs. Container

```
DOCKER:                    KUBERNETES:
┌──────────┐              ┌──────────────────┐
│Container │              │       Pod        │
│          │              │  ┌────────────┐  │
│  nginx   │              │  │  Container │  │
│          │              │  │   nginx    │  │
└──────────┘              │  └────────────┘  │
                          └──────────────────┘

Mehrere Container:        Mehrere Container in Pod:
┌──────────┐              ┌──────────────────┐
│Container │              │       Pod        │
│  nginx   │              │  ┌────────────┐  │
└──────────┘              │  │   nginx    │  │
                          │  └────────────┘  │
┌──────────┐              │  ┌────────────┐  │
│Container │              │  │  sidecar   │  │
│ sidecar  │              │  └────────────┘  │
└──────────┘              └──────────────────┘
Separate IPs              Shared IP!
```

---

# Einfacher Pod

```yaml
# pod.yaml
apiVersion: v1
kind: Pod
metadata:
  name: nginx-pod
  labels:
    app: nginx
    tier: frontend
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

# Output:
# NAME        READY   STATUS    RESTARTS   AGE
# nginx-pod   1/1     Running   0          30s

# Pod Details
kubectl describe pod nginx-pod

# Logs anzeigen
kubectl logs nginx-pod

# In Pod einloggen
kubectl exec -it nginx-pod -- sh
```

---

# Multi-Container Pod

```yaml
# multi-container-pod.yaml
apiVersion: v1
kind: Pod
metadata:
  name: app-with-sidecar
spec:
  containers:
  # Haupt-Container
  - name: app
    image: myapp:v1
    ports:
    - containerPort: 8080
    volumeMounts:
    - name: shared-logs
      mountPath: /var/log/app

  # Sidecar-Container (Log Aggregator)
  - name: log-aggregator
    image: fluentd:v1
    volumeMounts:
    - name: shared-logs
      mountPath: /var/log/app

  volumes:
  - name: shared-logs
    emptyDir: {}
```

**Use Cases für Multi-Container Pods:**
- **Sidecar**: Log Aggregation, Monitoring
- **Ambassador**: Proxy zu externen Services
- **Adapter**: Daten-Transformation für Monitoring

---

# Pod Lifecycle

```
POD LIFECYCLE STATES:
┌──────────┐
│ Pending  │ ← Pod wurde akzeptiert, Container noch nicht gestartet
└────┬─────┘
     │
     ▼
┌──────────┐
│ Running  │ ← Mindestens 1 Container läuft
└────┬─────┘
     │
     ├──────────┬──────────┐
     ▼          ▼          ▼
┌──────────┐┌────────┐┌────────┐
│Succeeded ││ Failed ││Unknown │
└──────────┘└────────┘└────────┘
```

**Pod Phases:**
- **Pending**: Scheduling, Image Download
- **Running**: Container laufen
- **Succeeded**: Alle Container erfolgreich beendet
- **Failed**: Container mit Fehler beendet
- **Unknown**: Pod-Status kann nicht abgerufen werden

**Container States:**
- **Waiting**: Image wird heruntergeladen
- **Running**: Container läuft
- **Terminated**: Container wurde beendet

```bash
# Pod Phase anzeigen
kubectl get pod nginx-pod -o jsonpath='{.status.phase}'

# Container States
kubectl get pod nginx-pod -o jsonpath='{.status.containerStatuses[*].state}'
```

---

# Pod Management

## Pod erstellen

```bash
# Aus YAML
kubectl apply -f pod.yaml

# Imperativ (Quick Test)
kubectl run nginx --image=nginx:alpine

# Mit Port
kubectl run nginx --image=nginx --port=80

# Mit Labels
kubectl run nginx --image=nginx --labels="app=web,tier=frontend"

# Dry Run (YAML generieren)
kubectl run nginx --image=nginx --dry-run=client -o yaml > pod.yaml
```

## Pod anzeigen

```bash
# Alle Pods
kubectl get pods

# Mit mehr Details
kubectl get pods -o wide

# Bestimmter Pod
kubectl get pod nginx-pod

# Als YAML
kubectl get pod nginx-pod -o yaml

# Als JSON
kubectl get pod nginx-pod -o json

# Mit Labels filtern
kubectl get pods -l app=nginx
kubectl get pods -l tier=frontend,app=nginx
```

## Pod beschreiben

```bash
# Vollständige Details
kubectl describe pod nginx-pod

# Zeigt:
# - Events (Was ist passiert?)
# - Container-Details
# - Volumes
# - Conditions
# - IP-Adresse
```

## Pod löschen

```bash
# Pod löschen
kubectl delete pod nginx-pod

# Aus YAML
kubectl delete -f pod.yaml

# Alle Pods mit Label
kubectl delete pods -l app=nginx

# Mit Force (sofort)
kubectl delete pod nginx-pod --force --grace-period=0
```

---

# Pod Logs

```bash
# Logs anzeigen
kubectl logs nginx-pod

# Follow (Live)
kubectl logs -f nginx-pod

# Letzte 100 Zeilen
kubectl logs --tail=100 nginx-pod

# Seit bestimmter Zeit
kubectl logs --since=1h nginx-pod

# Multi-Container: Container auswählen
kubectl logs nginx-pod -c sidecar-container

# Vorheriger Container (nach Restart)
kubectl logs nginx-pod --previous
```

---

# Pod Execute (In Container einloggen)

```bash
# Shell öffnen
kubectl exec -it nginx-pod -- /bin/sh
kubectl exec -it nginx-pod -- /bin/bash

# Einzelnen Befehl ausführen
kubectl exec nginx-pod -- ls /var/log
kubectl exec nginx-pod -- cat /etc/nginx/nginx.conf

# Multi-Container: Container auswählen
kubectl exec -it nginx-pod -c app-container -- sh

# Umgebungsvariablen anzeigen
kubectl exec nginx-pod -- env
```

---

# Port Forwarding

```bash
# Port forwarding (lokal testen)
kubectl port-forward pod/nginx-pod 8080:80

# Jetzt erreichbar: http://localhost:8080

# Mit anderem Port
kubectl port-forward pod/nginx-pod 3000:80

# Hintergrund laufen lassen
kubectl port-forward pod/nginx-pod 8080:80 &
```

---

# Environment Variables

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: env-pod
spec:
  containers:
  - name: app
    image: nginx
    env:
    # Einfache Umgebungsvariable
    - name: ENV_VAR
      value: "production"

    # Aus ConfigMap
    - name: CONFIG_VALUE
      valueFrom:
        configMapKeyRef:
          name: app-config
          key: database_url

    # Aus Secret
    - name: PASSWORD
      valueFrom:
        secretKeyRef:
          name: app-secret
          key: db-password

    # Field Reference (Pod-Info)
    - name: POD_NAME
      valueFrom:
        fieldRef:
          fieldPath: metadata.name

    - name: POD_IP
      valueFrom:
        fieldRef:
          fieldPath: status.podIP
```

```bash
# Umgebungsvariablen anzeigen
kubectl exec env-pod -- env
```

---

# Resource Limits

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: resource-pod
spec:
  containers:
  - name: app
    image: nginx
    resources:
      # Requests: Mindestbedarf (für Scheduling)
      requests:
        memory: "256Mi"
        cpu: "250m"      # 250 millicores = 0.25 CPU

      # Limits: Maximum
      limits:
        memory: "512Mi"
        cpu: "500m"      # 500 millicores = 0.5 CPU
```

**CPU-Einheiten:**
- `1` = 1 CPU Core
- `0.5` = 500m = halber Core
- `250m` = 0.25 Core = Viertel Core

**Memory-Einheiten:**
- `128974848` Bytes
- `129M` Megabyte
- `128Mi` Mebibyte (1024-basiert)
- `1Gi` Gibibyte

```bash
# Resource-Nutzung anzeigen
kubectl top pod resource-pod

# Alle Pods
kubectl top pods
```

---

# Health Checks

## Liveness Probe

>Prüft ob Container läuft. Neustart bei Fehler.

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: liveness-pod
spec:
  containers:
  - name: app
    image: myapp:v1
    livenessProbe:
      httpGet:
        path: /healthz
        port: 8080
      initialDelaySeconds: 30
      periodSeconds: 10
      timeoutSeconds: 5
      failureThreshold: 3
```

## Readiness Probe

>Prüft ob Container bereit ist Traffic zu empfangen.

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: readiness-pod
spec:
  containers:
  - name: app
    image: myapp:v1
    readinessProbe:
      httpGet:
        path: /ready
        port: 8080
      initialDelaySeconds: 5
      periodSeconds: 5
```

## Startup Probe

>Für langsam startende Container.

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: startup-pod
spec:
  containers:
  - name: app
    image: slow-app:v1
    startupProbe:
      httpGet:
        path: /startup
        port: 8080
      failureThreshold: 30
      periodSeconds: 10
```

**Probe-Typen:**
- `httpGet`: HTTP GET Request
- `tcpSocket`: TCP Port Check
- `exec`: Command im Container

```yaml
# TCP Socket Probe
livenessProbe:
  tcpSocket:
    port: 3306
  initialDelaySeconds: 15
  periodSeconds: 20

# Exec Probe
livenessProbe:
  exec:
    command:
    - cat
    - /tmp/healthy
  initialDelaySeconds: 5
  periodSeconds: 5
```

---

# Init Containers

>Laufen VOR den Haupt-Containern und müssen erfolgreich abschließen.

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: init-pod
spec:
  # Init Container
  initContainers:
  - name: init-db
    image: busybox
    command: ['sh', '-c', 'until nslookup db-service; do sleep 2; done;']

  - name: init-files
    image: busybox
    command: ['sh', '-c', 'echo "Ready!" > /work-dir/index.html']
    volumeMounts:
    - name: workdir
      mountPath: /work-dir

  # Haupt-Container
  containers:
  - name: app
    image: nginx
    volumeMounts:
    - name: workdir
      mountPath: /usr/share/nginx/html

  volumes:
  - name: workdir
    emptyDir: {}
```

**Use Cases:**
- Warten auf Services
- Daten vorbereiten
- Konfiguration generieren
- Git Clone

---

# Pod Patterns

## Sidecar Pattern

```
┌────────────────────────┐
│         Pod            │
│  ┌──────┐   ┌──────┐  │
│  │ App  │   │ Log  │  │
│  │      │◄──┤Agent │  │
│  └──────┘   └──────┘  │
└────────────────────────┘
```

**Beispiel:** Log-Aggregation

```yaml
spec:
  containers:
  - name: app
    image: myapp
    volumeMounts:
    - name: logs
      mountPath: /var/log

  - name: log-agent
    image: fluentd
    volumeMounts:
    - name: logs
      mountPath: /var/log

  volumes:
  - name: logs
    emptyDir: {}
```

## Ambassador Pattern

```
┌────────────────────────┐
│         Pod            │
│  ┌──────┐   ┌──────┐  │
│  │ App  │──►│Proxy │  │
│  │      │   │      │  │
│  └──────┘   └──────┘  │
└──────────────┬─────────┘
               ▼
          External Service
```

**Beispiel:** Redis Proxy

```yaml
spec:
  containers:
  - name: app
    image: myapp
    env:
    - name: REDIS_URL
      value: "localhost:6379"

  - name: redis-proxy
    image: redis-proxy
    ports:
    - containerPort: 6379
```

## Adapter Pattern

```
┌────────────────────────┐
│         Pod            │
│  ┌──────┐   ┌──────┐  │
│  │ App  │──►│Format│  │
│  │      │   │ter   │  │
│  └──────┘   └──────┘  │
└──────────────┬─────────┘
               ▼
          Monitoring
```

---

# Troubleshooting

## Pod startet nicht

```bash
# Status prüfen
kubectl get pod nginx-pod
# STATUS: ImagePullBackOff, CrashLoopBackOff, Error

# Events anzeigen
kubectl describe pod nginx-pod
# Letzte Zeilen: Events

# Logs prüfen
kubectl logs nginx-pod
kubectl logs nginx-pod --previous
```

**Häufige Probleme:**
- **ImagePullBackOff**: Image nicht gefunden
- **CrashLoopBackOff**: Container startet und crashed sofort
- **Pending**: Nicht genug Ressourcen
- **Error**: Container-Fehler

## Pod läuft nicht richtig

```bash
# In Container einloggen
kubectl exec -it nginx-pod -- sh

# Prozesse prüfen
kubectl exec nginx-pod -- ps aux

# Netzwerk prüfen
kubectl exec nginx-pod -- ping 8.8.8.8

# DNS prüfen
kubectl exec nginx-pod -- nslookup kubernetes.default
```

---

# Best Practices

>[!tip] Pod Best Practices

**1. Verwende Deployments, nicht Pods direkt**
```bash
# ❌ Schlecht
kubectl run nginx --image=nginx

# ✅ Gut
kubectl create deployment nginx --image=nginx
```

**2. Setze Resource Limits**
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

**4. Verwende Labels**
```yaml
metadata:
  labels:
    app: nginx
    version: v1
    tier: frontend
```

**5. Ein Prozess pro Container**
```
❌ Nginx + App im gleichen Container
✅ Nginx Container + App Container (2 Pods)
```

---

# Zusammenfassung

>[!summary] Kubernetes Pods
>- **Kleinste Einheit**: 1+ Container zusammen
>- **Shared Network**: Container teilen IP-Adresse
>- **Ephemeral**: Pods sind temporär
>- **Co-Located**: Laufen auf gleichem Node
>- **Health Checks**: Liveness, Readiness, Startup Probes
>- **Resource Limits**: CPU und Memory begrenzen

>[!tip] Quick Reference
>```bash
># Pod erstellen
>kubectl run nginx --image=nginx
>
># Pods anzeigen
>kubectl get pods
>
># Pod Details
>kubectl describe pod nginx
>
># Logs
>kubectl logs nginx
>
># In Pod einloggen
>kubectl exec -it nginx -- sh
>```

---

# Verwandte Konzepte

- [[02 - RESOURCES/Notes/Kubernetes\|Kubernetes]] - Hauptnotiz
- [[02 - RESOURCES/Notes/Kubernetes Deployments\|Kubernetes Deployments]] - Verwalten Pods
- [[02 - RESOURCES/Notes/Kubernetes Services\|Kubernetes Services]] - Pods exponieren
- [[02 - RESOURCES/Notes/Kubernetes Volumes\|Kubernetes Volumes]] - Pod Storage
- [[02 - RESOURCES/Notes/Kubernetes Namespaces\|Kubernetes Namespaces]] - Pod Isolation
