---
{"dg-publish":true,"permalink":"/02-resources/notes/kubernetes-secrets/","tags":["informatik/virtualisierung/kubernetes/secrets","devops/kubernetes","sicherheit"],"noteIcon":"","updated":"2025-11-06T16:19:08.520+01:00"}
---

>**Secrets** in [[02 - RESOURCES/Notes/Kubernetes\|Kubernetes]] speichern vertrauliche Daten wie Passwörter, API-Keys, und Zertifikate.
>>Base64-kodiert (nicht verschlüsselt!), sollten mit Encryption-at-Rest geschützt werden.

---

# Secret erstellen

```yaml
# secret.yaml
apiVersion: v1
kind: Secret
metadata:
  name: db-secret
type: Opaque
data:
  # Base64-kodiert
  username: YWRtaW4=        # admin
  password: c2VjcmV0MTIz    # secret123
```

```bash
# Base64 kodieren
echo -n "admin" | base64
echo -n "secret123" | base64

# Aus Literal
kubectl create secret generic db-secret \
  --from-literal=username=admin \
  --from-literal=password=secret123

# Aus Datei
kubectl create secret generic tls-secret \
  --from-file=tls.key \
  --from-file=tls.crt

# TLS Secret
kubectl create secret tls tls-secret \
  --cert=tls.crt \
  --key=tls.key

# Docker Registry Secret
kubectl create secret docker-registry regcred \
  --docker-server=registry.example.com \
  --docker-username=user \
  --docker-password=pass

# Secrets anzeigen
kubectl get secrets
kubectl describe secret db-secret
# Values sind versteckt!

# Secret anzeigen (dekodiert)
kubectl get secret db-secret -o jsonpath='{.data.password}' | base64 -d
```

---

# Secret Types

```yaml
# Opaque (Standard)
type: Opaque

# TLS Certificate
type: kubernetes.io/tls

# Docker Registry
type: kubernetes.io/dockerconfigjson

# Basic Auth
type: kubernetes.io/basic-auth

# SSH Auth
type: kubernetes.io/ssh-auth

# Service Account Token
type: kubernetes.io/service-account-token
```

---

# Secret in Pod verwenden

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
    - name: DB_USERNAME
      valueFrom:
        secretKeyRef:
          name: db-secret
          key: username
    - name: DB_PASSWORD
      valueFrom:
        secretKeyRef:
          name: db-secret
          key: password
```

## Als Volume

```yaml
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
      secretName: db-secret
```

**Resultat:**
```
/etc/secrets/
├── username  (Inhalt: admin)
└── password  (Inhalt: secret123)
```

## ImagePullSecrets

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: app
spec:
  containers:
  - name: app
    image: registry.example.com/myapp:v1
  imagePullSecrets:
  - name: regcred
```

---

# Best Practices

>[!warning] Secret Security

**1. Encryption at Rest**
```bash
# K8s Secrets sind nur base64, nicht verschlüsselt!
# Aktiviere Encryption-at-Rest in kube-apiserver
```

**2. RBAC verwenden**
```yaml
# Limitiere Secret-Zugriff
apiVersion: rbac.authorization.k8s.io/v1
kind: Role
metadata:
  name: secret-reader
rules:
- apiGroups: [""]
  resources: ["secrets"]
  verbs: ["get", "list"]
```

**3. Externe Secret Management**
- HashiCorp Vault
- AWS Secrets Manager
- Azure Key Vault
- Google Secret Manager

**4. Nie in Git committen!**
```bash
# ❌ Schlecht
git add secret.yaml

# ✅ Gut: Sealed Secrets, SOPS
```

---

# Zusammenfassung

>[!summary] Kubernetes Secrets
>- **Confidential**: Passwörter, Keys, Tokens
>- **Base64**: Nicht verschlüsselt!
>- **Types**: Opaque, TLS, Docker Registry
>- **Als Env**: Umgebungsvariablen
>- **Als Volume**: Files in /etc/secrets
>- **RBAC**: Zugriff limitieren

---

# Verwandte Konzepte

- [[02 - RESOURCES/Notes/Kubernetes\|Kubernetes]] - Hauptnotiz
- [[02 - RESOURCES/Notes/Kubernetes ConfigMaps\|Kubernetes ConfigMaps]] - Non-confidential Config
- [[02 - RESOURCES/Notes/Kubernetes Pods\|Kubernetes Pods]] - Verwenden Secrets
