---
{"dg-publish":true,"permalink":"/02-resources/notes/kubernetes-volumes/","tags":["informatik/virtualisierung/kubernetes/storage","devops/kubernetes"],"noteIcon":"","updated":"2025-11-06T16:16:47.000+01:00"}
---

>**Volumes** in [[02 - RESOURCES/Notes/Kubernetes\|Kubernetes]] ermöglichen [[02 - RESOURCES/Notes/Kubernetes Pods\|Pods]] Daten persistent zu speichern über Container-Neustarts hinweg.
>>Unterschied zu Docker: K8s Volumes haben Pod-Lifetime (nicht Container-Lifetime) und unterstützen viele Storage-Backends.

---

# Problem: Ephemere Container

```
OHNE VOLUME:
┌──────────┐
│  Pod     │
│ ┌──────┐ │
│ │ App  │ │
│ │ Data │ │  ← Im Container-Filesystem
│ └──────┘ │
└──────────┘
     │
  Container crashed
     │
     ▼
  ❌ Daten verloren!

MIT VOLUME:
┌──────────┐     ┌────────────┐
│  Pod     │     │   Volume   │
│ ┌──────┐ │────►│            │
│ │ App  │ │     │    Data    │
│ │      │ │     │            │
│ └──────┘ │     └────────────┘
└──────────┘
     │
  Container crashed
     │
     ▼
┌──────────┐     ┌────────────┐
│  Pod     │     │   Volume   │
│ ┌──────┐ │────►│            │
│ │ App  │ │     │    Data    │ ← Noch da!
│ │      │ │     │            │
│ └──────┘ │     └────────────┘
└──────────┘
```

---

# Volume-Typen

## emptyDir

>Temporäres Volume,lebt so lange wie der Pod.

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: emptydir-pod
spec:
  containers:
  - name: app
    image: nginx
    volumeMounts:
    - name: cache
      mountPath: /cache

  - name: sidecar
    image: busybox
    command: ['sh', '-c', 'tail -f /cache/access.log']
    volumeMounts:
    - name: cache
      mountPath: /cache

  volumes:
  - name: cache
    emptyDir: {}    # Leeres Verzeichnis auf Node
```

**Eigenschaften:**
- Erstellt wenn Pod gestartet wird
- Gelöscht wenn Pod beendet wird
- Auf Node-Disk (oder RAM mit `emptyDir: {medium: Memory}`)

**Use Cases:**
- Temporäre Dateien
- Cache
- Shared Logs zwischen Containern

## hostPath

>Mountet Verzeichnis vom Node ins Pod.

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: hostpath-pod
spec:
  containers:
  - name: app
    image: nginx
    volumeMounts:
    - name: host-volume
      mountPath: /data

  volumes:
  - name: host-volume
    hostPath:
      path: /mnt/data      # Pfad auf Node
      type: Directory      # Directory, DirectoryOrCreate, File, etc.
```

**⚠️ Security Risk!**
- Pod hat Zugriff auf Node-Filesystem
- Nur für System-Pods verwenden

**Use Cases:**
- Node-Monitoring (read `/sys`, `/proc`)
- Docker Socket mounting (`/var/run/docker.sock`)

---

# PersistentVolumes (PV) & PersistentVolumeClaims (PVC)

```
STORAGE ABSTRAKTION:
┌─────────────────────────────────────────┐
│  Pod                                    │
│  ┌──────────────────────────────────┐  │
│  │  Container                       │  │
│  │  /data ← mountPath               │  │
│  └───────────────┬──────────────────┘  │
└──────────────────┼─────────────────────┘
                   │
                   ▼
         ┌──────────────────┐
         │      PVC         │ ← Request (z.B. 10GB)
         │   (my-claim)     │
         └────────┬─────────┘
                  │ binds to
                  ▼
         ┌──────────────────┐
         │       PV         │ ← Actual Storage
         │   (pv-aws-ebs)   │
         └────────┬─────────┘
                  │
                  ▼
         ┌──────────────────┐
         │  Storage Backend │
         │  (AWS EBS, NFS)  │
         └──────────────────┘
```

## PersistentVolume (PV)

>Cluster-Ressource die Storage repräsentiert.

```yaml
# pv.yaml
apiVersion: v1
kind: PersistentVolume
metadata:
  name: pv-nfs
spec:
  capacity:
    storage: 10Gi
  accessModes:
  - ReadWriteOnce     # RWO
  persistentVolumeReclaimPolicy: Retain
  storageClassName: standard
  nfs:
    server: 192.168.1.100
    path: /exports/data
```

**Access Modes:**
- `ReadWriteOnce` (RWO): 1 Node, read-write
- `ReadOnlyMany` (ROX): Viele Nodes, read-only
- `ReadWriteMany` (RWX): Viele Nodes, read-write

**Reclaim Policy:**
- `Retain`: PV bleibt nach Claim-Löschung
- `Delete`: PV wird gelöscht
- `Recycle`: Daten löschen, PV wiederverwenden (deprecated)

## PersistentVolumeClaim (PVC)

>Request für Storage von User/Pod.

```yaml
# pvc.yaml
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: my-pvc
spec:
  accessModes:
  - ReadWriteOnce
  resources:
    requests:
      storage: 5Gi
  storageClassName: standard
```

```bash
# PV und PVC erstellen
kubectl apply -f pv.yaml
kubectl apply -f pvc.yaml

# Status prüfen
kubectl get pv
# STATUS: Available → Bound

kubectl get pvc
# STATUS: Pending → Bound
```

## Pod mit PVC

```yaml
# pod-with-pvc.yaml
apiVersion: v1
kind: Pod
metadata:
  name: app-with-storage
spec:
  containers:
  - name: app
    image: nginx
    volumeMounts:
    - name: storage
      mountPath: /data

  volumes:
  - name: storage
    persistentVolumeClaim:
      claimName: my-pvc    # ← Referenz zu PVC
```

---

# StorageClass

>Dynamische PV-Bereitstellung.

```yaml
# storageclass.yaml
apiVersion: storage.k8s.io/v1
kind: StorageClass
metadata:
  name: fast-ssd
provisioner: kubernetes.io/aws-ebs
parameters:
  type: gp3
  iops: "3000"
allowVolumeExpansion: true
volumeBindingMode: WaitForFirstConsumer
```

```yaml
# pvc mit StorageClass
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: dynamic-pvc
spec:
  accessModes:
  - ReadWriteOnce
  storageClassName: fast-ssd    # ← StorageClass
  resources:
    requests:
      storage: 20Gi
```

**Provisioners:**
- AWS EBS: `kubernetes.io/aws-ebs`
- GCP PD: `kubernetes.io/gce-pd`
- Azure Disk: `kubernetes.io/azure-disk`
- NFS: `nfs-client`
- Ceph RBD: `kubernetes.io/rbd`

```bash
# StorageClasses anzeigen
kubectl get storageclass

# Standard StorageClass
kubectl get storageclass standard -o yaml
```

---

# ConfigMap als Volume

```yaml
# configmap.yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: app-config
data:
  config.yaml: |
    server:
      port: 8080
      host: 0.0.0.0
  app.properties: |
    app.name=MyApp
    app.version=1.0
---
# pod.yaml
apiVersion: v1
kind: Pod
metadata:
  name: app
spec:
  containers:
  - name: app
    image: myapp:v1
    volumeMounts:
    - name: config
      mountPath: /etc/config    # ← Verzeichnis

  volumes:
  - name: config
    configMap:
      name: app-config
```

**Resultat im Container:**
```
/etc/config/
├── config.yaml
└── app.properties
```

---

# Secret als Volume

```yaml
# secret.yaml
apiVersion: v1
kind: Secret
metadata:
  name: app-secret
type: Opaque
data:
  username: YWRtaW4=           # base64("admin")
  password: c2VjcmV0MTIz       # base64("secret123")
---
# pod.yaml
apiVersion: v1
kind: Pod
metadata:
  name: app
spec:
  containers:
  - name: app
    image: myapp:v1
    volumeMounts:
    - name: secrets
      mountPath: /etc/secrets
      readOnly: true

  volumes:
  - name: secrets
    secret:
      secretName: app-secret
```

**Resultat im Container:**
```
/etc/secrets/
├── username    (Inhalt: admin)
└── password    (Inhalt: secret123)
```

---

# StatefulSet mit Volumes

```yaml
# statefulset.yaml
apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: postgres
spec:
  serviceName: postgres
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
        volumeMounts:
        - name: data
          mountPath: /var/lib/postgresql/data

  # Volume Claim Template
  volumeClaimTemplates:
  - metadata:
      name: data
    spec:
      accessModes: [ "ReadWriteOnce" ]
      storageClassName: fast-ssd
      resources:
        requests:
          storage: 10Gi
```

**Resultat:**
- Jeder Pod bekommt eigenes PVC
- `postgres-0` → `data-postgres-0`
- `postgres-1` → `data-postgres-1`
- `postgres-2` → `data-postgres-2`

---

# Volume Expansion

```yaml
# pvc.yaml
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: expandable-pvc
spec:
  accessModes:
  - ReadWriteOnce
  storageClassName: standard
  resources:
    requests:
      storage: 10Gi    # Initial
```

```yaml
# pvc-expanded.yaml
spec:
  resources:
    requests:
      storage: 20Gi    # ← Erhöht auf 20Gi
```

```bash
# Volume erweitern
kubectl apply -f pvc-expanded.yaml

# Status prüfen
kubectl describe pvc expandable-pvc
# Conditions: FileSystemResizePending → FileSystemResizeSuccessful
```

**Requirements:**
- StorageClass mit `allowVolumeExpansion: true`
- Online-Expansion (je nach Provisioner)

---

# Snapshot & Restore

```yaml
# volumesnapshot.yaml
apiVersion: snapshot.storage.k8s.io/v1
kind: VolumeSnapshot
metadata:
  name: my-snapshot
spec:
  volumeSnapshotClassName: csi-snapclass
  source:
    persistentVolumeClaimName: my-pvc
```

```yaml
# restore-from-snapshot.yaml
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: restored-pvc
spec:
  dataSource:
    name: my-snapshot
    kind: VolumeSnapshot
    apiGroup: snapshot.storage.k8s.io
  accessModes:
  - ReadWriteOnce
  resources:
    requests:
      storage: 10Gi
```

---

# Best Practices

>[!tip] Volume Best Practices

**1. Verwende PVC statt hostPath**
```yaml
# ✅ Gut
volumes:
- name: data
  persistentVolumeClaim:
    claimName: my-pvc

# ❌ Schlecht (außer System-Pods)
volumes:
- name: data
  hostPath:
    path: /mnt/data
```

**2. StorageClass für dynamisches Provisioning**
```yaml
# ✅ Automatisch
apiVersion: v1
kind: PersistentVolumeClaim
spec:
  storageClassName: fast-ssd
  resources:
    requests:
      storage: 10Gi
```

**3. Reclaim Policy beachten**
```yaml
# Production: Retain (Datenverlust verhindern)
persistentVolumeReclaimPolicy: Retain

# Development: Delete (automatisch aufräumen)
persistentVolumeReclaimPolicy: Delete
```

**4. Access Mode richtig wählen**
```
ReadWriteOnce (RWO): Datenbank (1 Pod)
ReadOnlyMany (ROX):  Static Content
ReadWriteMany (RWX): Shared Storage (NFS)
```

---

# Troubleshooting

## PVC bleibt Pending

```bash
# PVC Status
kubectl describe pvc my-pvc

# Events prüfen
# Common Issues:
# - Kein passender PV gefunden
# - Insufficient Capacity
# - StorageClass nicht gefunden

# PVs anzeigen
kubectl get pv

# StorageClasses anzeigen
kubectl get storageclass
```

## Pod kann nicht starten (Volume Mount Fehler)

```bash
# Pod Events
kubectl describe pod my-pod

# Volume nicht gemountet?
# Häufige Fehler:
# - PVC existiert nicht
# - Volume wird noch erstellt
# - Mount-Permissions

# PVC Status
kubectl get pvc
# STATUS muss "Bound" sein
```

---

# Zusammenfassung

>[!summary] Kubernetes Volumes
>- **emptyDir**: Temporär, Pod-Lifetime
>- **hostPath**: Node-Verzeichnis (Security Risk!)
>- **PV/PVC**: Persistent Storage Abstraktion
>- **StorageClass**: Dynamische Bereitstellung
>- **ConfigMap/Secret**: Als Volume mounten
>- **Access Modes**: RWO, ROX, RWX

>[!tip] Quick Reference
>```bash
># PVC erstellen
>kubectl apply -f pvc.yaml
>
># PV/PVC Status
>kubectl get pv
>kubectl get pvc
>
># Volume in Pod
>volumeMounts:
>  - name: data
>    mountPath: /data
>volumes:
>  - name: data
>    persistentVolumeClaim:
>      claimName: my-pvc
>```

---

# Verwandte Konzepte

- [[02 - RESOURCES/Notes/Kubernetes\|Kubernetes]] - Hauptnotiz
- [[02 - RESOURCES/Notes/Kubernetes Pods\|Kubernetes Pods]] - Verwenden Volumes
- [[02 - RESOURCES/Notes/Kubernetes StatefulSets\|Kubernetes StatefulSets]] - Persistent Storage
- [[02 - RESOURCES/Notes/Kubernetes ConfigMaps\|Kubernetes ConfigMaps]] - Als Volume
- [[02 - RESOURCES/Notes/Kubernetes Secrets\|Kubernetes Secrets]] - Als Volume
