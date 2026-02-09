---
{"dg-publish":true,"permalink":"/02-resources/notes/kubernetes-kubectl/","tags":["informatik/virtualisierung/kubernetes/kubectl","devops/kubernetes","tools/cli"],"noteIcon":"","updated":"2025-11-06T16:31:48.000+01:00"}
---

>**kubectl** ist das Command-Line Tool zur Interaktion mit [[02 - RESOURCES/Notes/Kubernetes\|Kubernetes]]-Clustern.
>>Kommuniziert mit dem API Server um Ressourcen zu erstellen, anzeigen, aktualisieren und löschen.

---

# Grundlegende Befehle

```bash
# Cluster-Info
kubectl cluster-info
kubectl version

# Nodes anzeigen
kubectl get nodes

# Pods anzeigen
kubectl get pods
kubectl get pods -A           # Alle Namespaces
kubectl get pods -o wide      # Mit mehr Details

# Deployments
kubectl get deployments

# Services
kubectl get services

# Alles anzeigen
kubectl get all
kubectl get all -A
```

---

# Ressourcen erstellen

```bash
# Aus YAML
kubectl apply -f deployment.yaml
kubectl apply -f https://example.com/app.yaml

# Imperativ
kubectl create deployment nginx --image=nginx
kubectl run nginx --image=nginx

# Dry Run (YAML generieren)
kubectl create deployment nginx --image=nginx --dry-run=client -o yaml > deployment.yaml
```

---

# Ressourcen anzeigen

```bash
# Details
kubectl describe pod nginx
kubectl describe deployment nginx

# Logs
kubectl logs nginx-pod
kubectl logs -f nginx-pod           # Follow
kubectl logs --tail=100 nginx-pod

# Events
kubectl get events
kubectl get events --sort-by='.metadata.creationTimestamp'

# Resource Usage
kubectl top nodes
kubectl top pods
```

---

# Ressourcen bearbeiten

```bash
# Interaktiv bearbeiten
kubectl edit deployment nginx

# Skalieren
kubectl scale deployment nginx --replicas=5

# Image aktualisieren
kubectl set image deployment nginx nginx=nginx:1.22

# Rollout
kubectl rollout status deployment nginx
kubectl rollout history deployment nginx
kubectl rollout undo deployment nginx
```

---

# Ressourcen löschen

```bash
# Einzelne Ressource
kubectl delete pod nginx
kubectl delete deployment nginx

# Aus YAML
kubectl delete -f deployment.yaml

# Nach Label
kubectl delete pods -l app=nginx

# Alle Ressourcen
kubectl delete all --all
```

---

# Exec & Port-Forward

```bash
# In Pod einloggen
kubectl exec -it nginx-pod -- /bin/bash
kubectl exec nginx-pod -- ls /var/log

# Port-Forwarding
kubectl port-forward pod/nginx 8080:80
kubectl port-forward service/nginx 8080:80

# Copy Files
kubectl cp local-file.txt nginx-pod:/tmp/
kubectl cp nginx-pod:/var/log/app.log ./app.log
```

---

# Namespaces

```bash
# In Namespace arbeiten
kubectl get pods -n production
kubectl apply -f app.yaml -n production

# Default-Namespace setzen
kubectl config set-context --current --namespace=production

# Namespace erstellen
kubectl create namespace dev
```

---

# Context & Config

```bash
# Contexts anzeigen
kubectl config get-contexts

# Context wechseln
kubectl config use-context minikube
kubectl config use-context production

# Aktueller Context
kubectl config current-context

# Kubeconfig anzeigen
kubectl config view
```

---

# Output Formats

```bash
# Wide
kubectl get pods -o wide

# YAML
kubectl get pod nginx -o yaml

# JSON
kubectl get pod nginx -o json

# JSONPath
kubectl get pods -o jsonpath='{.items[*].metadata.name}'
kubectl get pods -o jsonpath='{.items[*].status.podIP}'

# Custom Columns
kubectl get pods -o custom-columns=NAME:.metadata.name,IP:.status.podIP
```

---

# Labels & Selectors

```bash
# Nach Labels filtern
kubectl get pods -l app=nginx
kubectl get pods -l app=nginx,tier=frontend

# Labels hinzufügen
kubectl label pod nginx env=production

# Labels entfernen
kubectl label pod nginx env-
```

---

# kubectl Shortcuts

```bash
# Ressourcen-Abkürzungen
kubectl get po       # pods
kubectl get deploy   # deployments
kubectl get svc      # services
kubectl get ns       # namespaces
kubectl get no       # nodes
kubectl get cm       # configmaps

# Explain (Dokumentation)
kubectl explain pod
kubectl explain deployment.spec
```

---

# Zusammenfassung

>[!summary] kubectl Essentials
>- **get**: Ressourcen anzeigen
>- **describe**: Details anzeigen
>- **apply**: Ressourcen erstellen/aktualisieren
>- **delete**: Ressourcen löschen
>- **logs**: Pod-Logs
>- **exec**: In Pod einloggen
>- **port-forward**: Lokaler Zugriff

>[!tip] Quick Reference
>```bash
># Pods
>kubectl get pods
>kubectl logs pod-name
>kubectl exec -it pod-name -- sh
>
># Deployments
>kubectl create deployment app --image=app:v1
>kubectl scale deployment app --replicas=3
>
># Services
>kubectl expose deployment app --port=80
>```

---

# Verwandte Konzepte

- [[02 - RESOURCES/Notes/Kubernetes\|Kubernetes]] - Hauptnotiz
- [[02 - RESOURCES/Notes/Kubernetes Helm\|Kubernetes Helm]] - Package Manager
