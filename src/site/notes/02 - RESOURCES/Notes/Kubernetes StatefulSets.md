---
{"dg-publish":true,"permalink":"/02-resources/notes/kubernetes-stateful-sets/","tags":["informatik/virtualisierung/kubernetes/statefulsets","devops/kubernetes"],"noteIcon":"","updated":"2025-11-06T16:30:46.693+01:00"}
---

>**StatefulSets** verwalten [[02 - RESOURCES/Notes/Kubernetes Pods\|Pods]] mit stabilen Identitäten und persistentem Storage für Stateful Applications.
>>Im Gegensatz zu [[02 - RESOURCES/Notes/Kubernetes Deployments\|Deployments]]: Pods haben stabile Namen, Reihenfolge beim Starten/Stoppen, und eigene persistente Volumes.

---

# StatefulSet vs. Deployment

```
DEPLOYMENT (Stateless):           STATEFULSET (Stateful):
┌──────────────────────┐          ┌──────────────────────┐
│  web-abc123          │          │  postgres-0          │
│  web-def456          │          │  postgres-1          │
│  web-ghi789          │          │  postgres-2          │
└──────────────────────┘          └──────────────────────┘
- Zufällige Namen                 - Stabile Namen (0,1,2)
- Paralleles Starten              - Sequenzielles Starten
- Kein persistent Storage         - Persistent Storage pro Pod
- Austauschbar                    - Eindeutige Identität
```

---

# StatefulSet erstellen

```yaml
# statefulset.yaml
apiVersion: v1
kind: Service
metadata:
  name: postgres
spec:
  clusterIP: None    # Headless Service!
  selector:
    app: postgres
  ports:
  - port: 5432
---
apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: postgres
spec:
  serviceName: postgres    # ← Headless Service
  replicas: 3
  selector:
    matchLabels:
      app: postgres
  template:
    metadata:
      labels:
        app: postgres
    spec:
      containers:
      - name: postgres
        image: postgres:14
        ports:
        - containerPort: 5432
        volumeMounts:
        - name: data
          mountPath: /var/lib/postgresql/data

  # Volume Claim Template
  volumeClaimTemplates:
  - metadata:
      name: data
    spec:
      accessModes: [ "ReadWriteOnce" ]
      resources:
        requests:
          storage: 10Gi
```

```bash
# StatefulSet erstellen
kubectl apply -f statefulset.yaml

# Pods werden sequenziell erstellt:
# postgres-0 → Ready → postgres-1 → Ready → postgres-2

# Pods anzeigen
kubectl get pods -l app=postgres
# postgres-0   1/1   Running
# postgres-1   1/1   Running
# postgres-2   1/1   Running

# PVCs anzeigen
kubectl get pvc
# data-postgres-0   Bound
# data-postgres-1   Bound
# data-postgres-2   Bound
```

---

# Pod-Identität

```
STABILE IDENTITÄT:
Pod Name:  postgres-0
DNS Name:  postgres-0.postgres.default.svc.cluster.local
PVC Name:  data-postgres-0

Pod Name:  postgres-1
DNS Name:  postgres-1.postgres.default.svc.cluster.local
PVC Name:  data-postgres-1
```

```bash
# Von anderem Pod aus:
nslookup postgres-0.postgres.default.svc.cluster.local
nslookup postgres-1.postgres.default.svc.cluster.local

# Direkter Zugriff zu spezifischem Pod
psql -h postgres-0.postgres -U postgres
```

---

# Update Strategy

```yaml
spec:
  updateStrategy:
    type: RollingUpdate
    rollingUpdate:
      partition: 0    # Update ab Pod-Index 0
```

**Partition Update:**
```yaml
# Update nur Pods >= 2
updateStrategy:
  rollingUpdate:
    partition: 2    # postgres-2 wird geupdatet, 0 und 1 nicht
```

---

# Scaling

```bash
# Skalieren
kubectl scale statefulset postgres --replicas=5

# Scale down (von 5 auf 3)
# postgres-4 wird zuerst gelöscht, dann postgres-3
# Immer in umgekehrter Reihenfolge!

# Scale up (von 3 auf 5)
# postgres-3 wird erstellt, dann postgres-4
# Immer sequenziell!
```

---

# Use Cases

- **Databases**: PostgreSQL, MySQL, MongoDB
- **Message Queues**: Kafka, RabbitMQ
- **Caches**: Redis Cluster
- **Distributed Systems**: ZooKeeper, etcd

---

# Zusammenfassung

>[!summary] StatefulSets
>- **Stable Identity**: Pods haben feste Namen (0,1,2)
>- **Ordered**: Sequenzielles Erstellen/Löschen
>- **Persistent Storage**: Eigenes PVC pro Pod
>- **Headless Service**: Direkte Pod-Adressierung
>- **Use Case**: Datenbanken, Stateful Apps

---

# Verwandte Konzepte

- [[02 - RESOURCES/Notes/Kubernetes\|Kubernetes]] - Hauptnotiz
- [[02 - RESOURCES/Notes/Kubernetes Deployments\|Kubernetes Deployments]] - Für Stateless Apps
- [[02 - RESOURCES/Notes/Kubernetes Volumes\|Kubernetes Volumes]] - Persistent Storage
- [[02 - RESOURCES/Notes/Kubernetes Services\|Kubernetes Services]] - Headless Service
