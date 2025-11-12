---
{"dg-publish":true,"permalink":"/02-resources/notes/kubernetes-networking/","tags":["informatik/virtualisierung/kubernetes/networking","informatik/netzwerk","devops/kubernetes"],"noteIcon":"","updated":"2025-11-06T16:20:11.000+01:00"}
---

>**Kubernetes Networking** verbindet [[02 - RESOURCES/Notes/Kubernetes Pods\|Pods]], [[02 - RESOURCES/Notes/Kubernetes Services\|Services]] und externe Clients über ein Cluster-weites Netzwerk.
>>Jeder Pod hat eine eindeutige IP, alle Pods können ohne NAT miteinander kommunizieren.

---

# Networking Modell

```
KUBERNETES NETWORKING:
┌─────────────────────────────────────────────┐
│           KUBERNETES CLUSTER                │
│                                             │
│  Node 1: 10.0.1.0/24    Node 2: 10.0.2.0/24│
│  ┌────────────────┐     ┌────────────────┐ │
│  │ Pod 1          │     │ Pod 3          │ │
│  │ 10.244.1.5     │────►│ 10.244.2.8     │ │
│  └────────────────┘     └────────────────┘ │
│  ┌────────────────┐     ┌────────────────┐ │
│  │ Pod 2          │     │ Pod 4          │ │
│  │ 10.244.1.12    │     │ 10.244.2.15    │ │
│  └────────────────┘     └────────────────┘ │
└─────────────────────────────────────────────┘

Networking Regeln:
✅ Alle Pods können sich ohne NAT erreichen
✅ Nodes können alle Pods erreichen
✅ Pods sehen ihre eigene IP
```

---

# CNI Plugins

**Container Network Interface Plugins:**

```bash
# Flannel (einfach)
kubectl apply -f https://github.com/flannel-io/flannel/releases/latest/download/kube-flannel.yml

# Calico (erweitert, mit NetworkPolicies)
kubectl apply -f https://docs.projectcalico.org/manifests/calico.yaml

# Weave Net
kubectl apply -f https://github.com/weaveworks/weave/releases/download/v2.8.1/weave-daemonset-k8s.yaml
```

**CNI Vergleich:**
- **Flannel**: Einfach, VXLAN
- **Calico**: NetworkPolicies, BGP
- **Weave**: Einfach, Verschlüsselung
- **Cilium**: eBPF, erweiterte Features

---

# Pod-to-Pod Communication

```yaml
# backend-pod.yaml
apiVersion: v1
kind: Pod
metadata:
  name: backend
spec:
  containers:
  - name: api
    image: myapi:v1
    ports:
    - containerPort: 8080
---
# frontend-pod.yaml
apiVersion: v1
kind: Pod
metadata:
  name: frontend
spec:
  containers:
  - name: web
    image: frontend:v1
    env:
    # Direkte Pod-IP (nicht empfohlen!)
    - name: BACKEND_URL
      value: "http://10.244.1.5:8080"
```

**❌ Problem:** Pod-IPs ändern sich!
**✅ Lösung:** [[02 - RESOURCES/Notes/Kubernetes Services\|Services]] verwenden

---

# NetworkPolicies

>Firewall-Regeln für Pods.

```yaml
# deny-all.yaml
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: deny-all
  namespace: production
spec:
  podSelector: {}    # Alle Pods
  policyTypes:
  - Ingress
  - Egress
  # Keine Rules = Alles blockiert
---
# allow-frontend-to-backend.yaml
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: allow-frontend-to-backend
  namespace: production
spec:
  podSelector:
    matchLabels:
      app: backend
  policyTypes:
  - Ingress
  ingress:
  - from:
    - podSelector:
        matchLabels:
          app: frontend
    ports:
    - protocol: TCP
      port: 8080
```

```bash
# NetworkPolicies anzeigen
kubectl get networkpolicies -n production

# Details
kubectl describe networkpolicy allow-frontend-to-backend -n production
```

---

# DNS

```
KUBERNETES DNS:
┌──────────────────────────────────────────┐
│  CoreDNS (kube-dns)                      │
│  IP: 10.96.0.10                          │
└───────────┬──────────────────────────────┘
            │
    ┌───────┼───────┐
    ▼       ▼       ▼
  Pod 1   Pod 2   Pod 3

DNS Namen:
<service>.<namespace>.svc.cluster.local
<pod-ip>.<namespace>.pod.cluster.local
```

```bash
# DNS testen
kubectl run test --rm -it --image=busybox -- sh

# Im Pod:
nslookup kubernetes
nslookup my-service
nslookup my-service.default.svc.cluster.local

# Pod DNS
nslookup 10-244-1-5.default.pod.cluster.local
```

---

# Service Types & Networking

```
ClusterIP (intern):
Pod ──► Service (ClusterIP) ──► Backend Pods

NodePort (extern):
Client ──► Node:30080 ──► Service ──► Pods

LoadBalancer (Cloud):
Client ──► Cloud LB ──► Nodes ──► Service ──► Pods
```

---

# Zusammenfassung

>[!summary] Kubernetes Networking
>- **Pod IPs**: Jeder Pod eindeutige IP
>- **No NAT**: Direkte Pod-to-Pod Kommunikation
>- **CNI**: Flannel, Calico, Weave
>- **Services**: Load Balancing & Discovery
>- **NetworkPolicies**: Firewall-Regeln
>- **DNS**: Automatic Service Discovery

---

# Verwandte Konzepte

- [[02 - RESOURCES/Notes/Kubernetes\|Kubernetes]] - Hauptnotiz
- [[02 - RESOURCES/Notes/Kubernetes Services\|Kubernetes Services]] - Load Balancing
- [[02 - RESOURCES/Notes/Kubernetes Ingress\|Kubernetes Ingress]] - L7 Routing
- [[02 - RESOURCES/Notes/Kubernetes Pods\|Kubernetes Pods]] - Network Namespace
