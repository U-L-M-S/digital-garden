---
{"dg-publish":true,"permalink":"/02-resources/notes/kubernetes-ingress/","tags":["informatik/virtualisierung/kubernetes/ingress","informatik/netzwerk","devops/kubernetes"],"noteIcon":"","updated":"2025-11-06T16:20:14.000+01:00"}
---

>**Ingress** ist eine [[02 - RESOURCES/Notes/Kubernetes\|Kubernetes]] API zur Verwaltung externen HTTP/HTTPS Zugriffs auf [[02 - RESOURCES/Notes/Kubernetes Services\|Services]].
>>Ermöglicht URL-basiertes Routing, TLS-Terminierung und Name-based Virtual Hosting - alles mit einer einzigen IP.

---

# Ingress vs. LoadBalancer Service

```
MIT LOADBALANCER SERVICES (teuer):
┌────────────────────────────────────┐
│ LoadBalancer 1  (IP: 1.2.3.4)     │ → Service A
│ LoadBalancer 2  (IP: 1.2.3.5)     │ → Service B
│ LoadBalancer 3  (IP: 1.2.3.6)     │ → Service C
└────────────────────────────────────┘
3 External IPs = 3 Load Balancers = $$

MIT INGRESS (günstig):
┌────────────────────────────────────┐
│ Ingress Controller (IP: 1.2.3.4)  │
│   ├─ /api    → Service A          │
│   ├─ /web    → Service B          │
│   └─ /admin  → Service C          │
└────────────────────────────────────┘
1 External IP = 1 Load Balancer = $
```

---

# Ingress Controller installieren

```bash
# NGINX Ingress Controller
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.8.1/deploy/static/provider/cloud/deploy.yaml

# Traefik
helm install traefik traefik/traefik

# HAProxy
helm install haproxy haproxytech/kubernetes-ingress

# Ingress Controller prüfen
kubectl get pods -n ingress-nginx
```

---

# Einfaches Ingress

```yaml
# ingress.yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: my-ingress
spec:
  rules:
  - host: example.com
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: web-service
            port:
              number: 80
```

```bash
# Ingress erstellen
kubectl apply -f ingress.yaml

# Ingress anzeigen
kubectl get ingress

# Details
kubectl describe ingress my-ingress
```

---

# Path-based Routing

```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: path-routing
spec:
  rules:
  - host: example.com
    http:
      paths:
      - path: /api
        pathType: Prefix
        backend:
          service:
            name: api-service
            port:
              number: 8080

      - path: /web
        pathType: Prefix
        backend:
          service:
            name: web-service
            port:
              number: 80
```

**Routing:**
- `example.com/api/*` → api-service:8080
- `example.com/web/*` → web-service:80

---

# Host-based Routing

```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: host-routing
spec:
  rules:
  - host: api.example.com
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: api-service
            port:
              number: 8080

  - host: www.example.com
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: web-service
            port:
              number: 80
```

**Routing:**
- `api.example.com` → api-service:8080
- `www.example.com` → web-service:80

---

# TLS/HTTPS

```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: tls-ingress
spec:
  tls:
  - hosts:
    - example.com
    secretName: tls-secret    # ← TLS Certificate
  rules:
  - host: example.com
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: web-service
            port:
              number: 80
```

```bash
# TLS Secret erstellen
kubectl create secret tls tls-secret \
  --cert=tls.crt \
  --key=tls.key
```

---

# Annotations

```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: annotated-ingress
  annotations:
    # NGINX specific
    nginx.ingress.kubernetes.io/rewrite-target: /
    nginx.ingress.kubernetes.io/ssl-redirect: "true"
    nginx.ingress.kubernetes.io/rate-limit: "100"

    # Traefik specific
    traefik.ingress.kubernetes.io/router.middlewares: default-redirect-https@kubernetescrd
spec:
  rules:
  - host: example.com
    http:
      paths:
      - path: /api
        pathType: Prefix
        backend:
          service:
            name: api-service
            port:
              number: 8080
```

---

# Default Backend

```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: ingress-with-default
spec:
  defaultBackend:
    service:
      name: default-service    # 404 Page
      port:
        number: 80
  rules:
  - host: example.com
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: web-service
            port:
              number: 80
```

---

# Zusammenfassung

>[!summary] Kubernetes Ingress
>- **L7 Load Balancing**: HTTP/HTTPS Routing
>- **Path-based**: `/api`, `/web` routing
>- **Host-based**: `api.example.com`, `www.example.com`
>- **TLS**: HTTPS Terminierung
>- **1 IP**: Mehrere Services hinter einer IP
>- **Controller**: NGINX, Traefik, HAProxy

>[!tip] Quick Reference
>```bash
># Ingress Controller installieren
>kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/...
>
># Ingress erstellen
>kubectl apply -f ingress.yaml
>
># Ingress anzeigen
>kubectl get ingress
>```

---

# Verwandte Konzepte

- [[02 - RESOURCES/Notes/Kubernetes\|Kubernetes]] - Hauptnotiz
- [[02 - RESOURCES/Notes/Kubernetes Services\|Kubernetes Services]] - Backend Services
- [[02 - RESOURCES/Notes/Kubernetes Networking\|Kubernetes Networking]] - Cluster Networking
