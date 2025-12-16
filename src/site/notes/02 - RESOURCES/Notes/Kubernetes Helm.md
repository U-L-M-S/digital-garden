---
{"dg-publish":true,"permalink":"/02-resources/notes/kubernetes-helm/","tags":["informatik/virtualisierung/kubernetes/helm","devops/kubernetes","tools/package-manager"],"noteIcon":"","updated":"2025-11-06T16:31:49.947+01:00"}
---

>**Helm** ist ein Package Manager für [[02 - RESOURCES/Notes/Kubernetes\|Kubernetes]] der komplexe Applikationen als wiederverwendbare Charts verpackt.
>>Vereinfacht Deployment, Upgrade und Rollback von K8s-Anwendungen mit Templates und Values.

---

# Helm Konzept

```
HELM CHART:
┌────────────────────────────────┐
│      Chart (Package)           │
│  ┌──────────────────────────┐  │
│  │   templates/             │  │
│  │   ├─ deployment.yaml     │  │
│  │   ├─ service.yaml        │  │
│  │   └─ ingress.yaml        │  │
│  │                          │  │
│  │   values.yaml            │  │ ← Default Config
│  │   Chart.yaml             │  │ ← Metadata
│  └──────────────────────────┘  │
└────────────────────────────────┘
         │
         ▼
    helm install
         │
         ▼
┌────────────────────────────────┐
│   Kubernetes Resources         │
│   Deployment, Service, Ingress │
└────────────────────────────────┘
```

---

# Helm installieren

```bash
# Linux/Mac
curl https://raw.githubusercontent.com/helm/helm/main/scripts/get-helm-3 | bash

# Version prüfen
helm version

# Repos hinzufügen
helm repo add stable https://charts.helm.sh/stable
helm repo add bitnami https://charts.bitnami.com/bitnami

# Repo-Liste aktualisieren
helm repo update

# Verfügbare Charts suchen
helm search repo nginx
helm search hub wordpress
```

---

# Chart installieren

```bash
# Chart installieren
helm install my-nginx bitnami/nginx

# Mit Custom Values
helm install my-nginx bitnami/nginx \
  --set service.type=LoadBalancer \
  --set replicaCount=3

# Aus values.yaml
helm install my-nginx bitnami/nginx -f custom-values.yaml

# Releases anzeigen
helm list

# Release Status
helm status my-nginx

# Release löschen
helm uninstall my-nginx
```

---

# values.yaml

```yaml
# custom-values.yaml
replicaCount: 3

image:
  repository: nginx
  tag: "1.21-alpine"

service:
  type: LoadBalancer
  port: 80

ingress:
  enabled: true
  hosts:
    - host: example.com
      paths:
        - path: /
          pathType: Prefix

resources:
  limits:
    cpu: 500m
    memory: 512Mi
  requests:
    cpu: 250m
    memory: 256Mi
```

---

# Chart upgrade

```bash
# Upgrade
helm upgrade my-nginx bitnami/nginx \
  --set replicaCount=5

# Rollback
helm rollback my-nginx 1

# History
helm history my-nginx
```

---

# Eigenen Chart erstellen

```bash
# Chart erstellen
helm create mychart

# Struktur:
# mychart/
# ├── Chart.yaml
# ├── values.yaml
# ├── templates/
# │   ├── deployment.yaml
# │   ├── service.yaml
# │   └── ingress.yaml
# └── charts/

# Chart installieren
helm install my-release ./mychart

# Chart packagein
helm package mychart
# → mychart-0.1.0.tgz
```

---

# Beliebte Charts

```bash
# Databases
helm install postgres bitnami/postgresql
helm install mysql bitnami/mysql
helm install mongodb bitnami/mongodb

# Monitoring
helm install prometheus prometheus-community/prometheus
helm install grafana grafana/grafana

# Ingress
helm install nginx-ingress ingress-nginx/ingress-nginx

# Cert Manager
helm install cert-manager jetstack/cert-manager
```

---

# Zusammenfassung

>[!summary] Helm
>- **Package Manager**: Für Kubernetes
>- **Charts**: Wiederverwendbare Packages
>- **Templates**: Parametrisierte YAMLs
>- **Values**: Konfiguration
>- **Releases**: Installierte Charts
>- **Upgrade/Rollback**: Einfaches Management

>[!tip] Quick Reference
>```bash
># Chart installieren
>helm install myapp bitnami/nginx
>
># Upgrade
>helm upgrade myapp bitnami/nginx --set replicaCount=3
>
># Rollback
>helm rollback myapp 1
>
># Löschen
>helm uninstall myapp
>```

---

# Verwandte Konzepte

- [[02 - RESOURCES/Notes/Kubernetes\|Kubernetes]] - Hauptnotiz
- [[02 - RESOURCES/Notes/Kubernetes kubectl\|Kubernetes kubectl]] - CLI Tool
