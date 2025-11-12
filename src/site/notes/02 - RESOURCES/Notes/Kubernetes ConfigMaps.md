---
{"dg-publish":true,"permalink":"/02-resources/notes/kubernetes-config-maps/","tags":["informatik/virtualisierung/kubernetes/config","devops/kubernetes"],"noteIcon":"","updated":"2025-11-06T16:19:07.000+01:00"}
---

>**ConfigMaps** in [[02 - RESOURCES/Notes/Kubernetes\|Kubernetes]] speichern nicht-vertrauliche Konfigurationsdaten in Key-Value Paaren.
>>Trennt Konfiguration von Container-Images - gleicher Code, verschiedene Configs pro Umgebung.

---

# ConfigMap erstellen

```yaml
# configmap.yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: app-config
data:
  # Einfache Key-Value
  database_host: "postgres.production.svc.cluster.local"
  database_port: "5432"
  log_level: "info"

  # Datei-Inhalt als Value
  nginx.conf: |
    server {
      listen 80;
      server_name example.com;
      location / {
        proxy_pass http://backend:8080;
      }
    }

  app.properties: |
    app.name=MyApp
    app.version=1.0.0
    app.environment=production
```

```bash
# Aus YAML
kubectl apply -f configmap.yaml

# Aus Literal
kubectl create configmap app-config \
  --from-literal=database_host=postgres \
  --from-literal=database_port=5432

# Aus Datei
kubectl create configmap nginx-config \
  --from-file=nginx.conf

# Aus Verzeichnis
kubectl create configmap app-configs \
  --from-file=configs/

# ConfigMaps anzeigen
kubectl get configmaps
kubectl describe configmap app-config
```

---

# ConfigMap in Pod verwenden

## Als Umgebungsvariablen

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: app
spec:
  containers:
  - name: app
    image: myapp:v1
    env:
    # Einzelner Key
    - name: DATABASE_HOST
      valueFrom:
        configMapKeyRef:
          name: app-config
          key: database_host

    # Alle Keys als Env Vars
    envFrom:
    - configMapRef:
        name: app-config
```

## Als Volume

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: nginx
spec:
  containers:
  - name: nginx
    image: nginx
    volumeMounts:
    - name: config
      mountPath: /etc/nginx/conf.d
      readOnly: true

  volumes:
  - name: config
    configMap:
      name: nginx-config
```

**Resultat:** `/etc/nginx/conf.d/nginx.conf`

---

# ConfigMap aktualisieren

```bash
# ConfigMap bearbeiten
kubectl edit configmap app-config

# Aus Datei aktualisieren
kubectl create configmap app-config \
  --from-file=config.yaml \
  --dry-run=client -o yaml | kubectl apply -f -

# ⚠️ Pod restart nötig für Umgebungsvariablen
# ✅ Volume-Mounts werden automatisch aktualisiert (bis zu 1 Min)
```

---

# Zusammenfassung

>[!summary] ConfigMaps
>- **Non-Confidential**: Keine Passwörter/Secrets!
>- **Key-Value**: Einfache Konfiguration
>- **Als Env**: Environment Variables
>- **Als Volume**: Config-Dateien
>- **Pro Umgebung**: dev/staging/prod

---

# Verwandte Konzepte

- [[02 - RESOURCES/Notes/Kubernetes\|Kubernetes]] - Hauptnotiz
- [[02 - RESOURCES/Notes/Kubernetes Secrets\|Kubernetes Secrets]] - Vertrauliche Daten
- [[02 - RESOURCES/Notes/Kubernetes Pods\|Kubernetes Pods]] - Verwenden ConfigMaps
