---
{"dg-publish":true,"permalink":"/02-resources/notes/kubernetes-daemon-sets/","tags":["informatik/virtualisierung/kubernetes/daemonsets","devops/kubernetes"],"noteIcon":"","updated":"2025-11-06T16:30:47.773+01:00"}
---

>**DaemonSets** stellen sicher dass auf jedem Node (oder ausgewählten Nodes) genau ein [[02 - RESOURCES/Notes/Kubernetes Pods\|Pod]] läuft.
>>Ideal für Node-Level Services wie Monitoring, Logging, oder Netzwerk-Plugins die auf allen Nodes laufen müssen.

---

# DaemonSet Konzept

```
DAEMONSET:
┌───────────────────────────────────────────┐
│          KUBERNETES CLUSTER               │
│                                           │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐  │
│  │ Node 1  │  │ Node 2  │  │ Node 3  │  │
│  ├─────────┤  ├─────────┤  ├─────────┤  │
│  │[Logger] │  │[Logger] │  │[Logger] │  │
│  │  Pod    │  │  Pod    │  │  Pod    │  │
│  └─────────┘  └─────────┘  └─────────┘  │
│                                           │
│  Neuer Node wird hinzugefügt:            │
│  ┌─────────┐                              │
│  │ Node 4  │ ← DaemonSet erstellt        │
│  ├─────────┤   automatisch Pod!          │
│  │[Logger] │                              │
│  │  Pod    │                              │
│  └─────────┘                              │
└───────────────────────────────────────────┘
```

---

# DaemonSet erstellen

```yaml
# daemonset.yaml
apiVersion: apps/v1
kind: DaemonSet
metadata:
  name: node-exporter
spec:
  selector:
    matchLabels:
      app: node-exporter
  template:
    metadata:
      labels:
        app: node-exporter
    spec:
      containers:
      - name: node-exporter
        image: prom/node-exporter:latest
        ports:
        - containerPort: 9100
        volumeMounts:
        - name: proc
          mountPath: /host/proc
          readOnly: true
        - name: sys
          mountPath: /host/sys
          readOnly: true

      volumes:
      - name: proc
        hostPath:
          path: /proc
      - name: sys
        hostPath:
          path: /sys
```

```bash
# DaemonSet erstellen
kubectl apply -f daemonset.yaml

# DaemonSets anzeigen
kubectl get daemonsets

# Pods anzeigen (1 pro Node)
kubectl get pods -l app=node-exporter -o wide
```

---

# Node Selector

```yaml
apiVersion: apps/v1
kind: DaemonSet
metadata:
  name: ssd-monitor
spec:
  selector:
    matchLabels:
      app: ssd-monitor
  template:
    spec:
      nodeSelector:
        disktype: ssd    # ← Nur auf Nodes mit diesem Label
      containers:
      - name: monitor
        image: monitor:v1
```

```bash
# Nodes labeln
kubectl label nodes node1 disktype=ssd
kubectl label nodes node2 disktype=ssd

# DaemonSet läuft nur auf node1 und node2
```

---

# Use Cases

**Monitoring & Logging:**
- Prometheus Node Exporter
- Fluentd Log Collector
- Datadog Agent

**Networking:**
- CNI Plugins (Flannel, Calico)
- kube-proxy

**Storage:**
- Ceph OSD
- GlusterFS

**Security:**
- Security Scanning
- Intrusion Detection

---

# Update Strategy

```yaml
spec:
  updateStrategy:
    type: RollingUpdate
    rollingUpdate:
      maxUnavailable: 1    # Max 1 Pod down gleichzeitig
```

---

# Zusammenfassung

>[!summary] DaemonSets
>- **1 Pod pro Node**: Automatisch
>- **Node-Level Services**: Monitoring, Logging
>- **Auto-Scaling**: Neue Nodes → Neuer Pod
>- **Node Selector**: Nur bestimmte Nodes
>- **Use Case**: System-Services auf allen Nodes

---

# Verwandte Konzepte

- [[02 - RESOURCES/Notes/Kubernetes\|Kubernetes]] - Hauptnotiz
- [[02 - RESOURCES/Notes/Kubernetes Deployments\|Kubernetes Deployments]] - Für Replicas
- [[02 - RESOURCES/Notes/Kubernetes StatefulSets\|Kubernetes StatefulSets]] - Für Stateful Apps
- [[02 - RESOURCES/Notes/Kubernetes Pods\|Kubernetes Pods]] - DaemonSet verwaltet Pods
