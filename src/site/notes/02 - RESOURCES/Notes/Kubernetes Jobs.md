---
{"dg-publish":true,"permalink":"/02-resources/notes/kubernetes-jobs/","tags":["informatik/virtualisierung/kubernetes/jobs","devops/kubernetes"],"noteIcon":"","updated":"2025-11-06T16:30:48.649+01:00"}
---

>**Jobs** in [[02 - RESOURCES/Notes/Kubernetes\|Kubernetes]] führen [[02 - RESOURCES/Notes/Kubernetes Pods\|Pods]] aus die eine Aufgabe abschließen und dann beenden.
>>Im Gegensatz zu [[02 - RESOURCES/Notes/Kubernetes Deployments\|Deployments]]: Pods sollen NICHT dauerhaft laufen, sondern eine Task ausführen und terminieren.

---

# Job vs. Deployment

```
DEPLOYMENT:                    JOB:
┌────────────┐                ┌────────────┐
│   Pod      │                │   Pod      │
│  Running   │ ← Immer        │  Running   │
│  Restart   │   laufend      │  Completed │ ← Fertig!
└────────────┘                └────────────┘
```

---

# Einfacher Job

```yaml
# job.yaml
apiVersion: batch/v1
kind: Job
metadata:
  name: pi-calculation
spec:
  template:
    spec:
      containers:
      - name: pi
        image: perl:5.34
        command: ["perl", "-Mbignum=bpi", "-wle", "print bpi(2000)"]
      restartPolicy: Never    # ← Wichtig!
  backoffLimit: 4             # Max 4 Retries
```

```bash
# Job erstellen
kubectl apply -f job.yaml

# Jobs anzeigen
kubectl get jobs

# Output:
# NAME              COMPLETIONS   DURATION   AGE
# pi-calculation    1/1           5s         10s

# Pods anzeigen
kubectl get pods

# Logs
kubectl logs job/pi-calculation
```

---

# Job mit Parallelität

```yaml
apiVersion: batch/v1
kind: Job
metadata:
  name: parallel-job
spec:
  completions: 10        # 10 Tasks insgesamt
  parallelism: 3         # 3 Pods parallel
  template:
    spec:
      containers:
      - name: worker
        image: busybox
        command: ["sh", "-c", "echo Processing task && sleep 30"]
      restartPolicy: Never
```

**Ablauf:**
```
Start: 3 Pods laufen
Pod 1 fertig → Pod 4 startet
Pod 2 fertig → Pod 5 startet
...bis 10 Completions erreicht
```

---

# CronJob

>Job der nach Schedule läuft (wie cron).

```yaml
# cronjob.yaml
apiVersion: batch/v1
kind: CronJob
metadata:
  name: backup-job
spec:
  schedule: "0 2 * * *"    # Täglich um 2 Uhr
  jobTemplate:
    spec:
      template:
        spec:
          containers:
          - name: backup
            image: backup:v1
            command: ["/bin/sh", "-c", "backup.sh"]
          restartPolicy: OnFailure
  successfulJobsHistoryLimit: 3
  failedJobsHistoryLimit: 1
```

**Cron Schedule:**
```
┌───────────── Minute (0 - 59)
│ ┌───────────── Stunde (0 - 23)
│ │ ┌───────────── Tag (1 - 31)
│ │ │ ┌───────────── Monat (1 - 12)
│ │ │ │ ┌───────────── Wochentag (0 - 6)
│ │ │ │ │
* * * * *

Beispiele:
"0 2 * * *"      - Täglich um 2 Uhr
"*/15 * * * *"   - Alle 15 Minuten
"0 0 * * 0"      - Sonntags um Mitternacht
"0 9-17 * * 1-5" - Mo-Fr, 9-17 Uhr
```

```bash
# CronJob erstellen
kubectl apply -f cronjob.yaml

# CronJobs anzeigen
kubectl get cronjobs

# Manuell ausführen
kubectl create job --from=cronjob/backup-job manual-backup

# Jobs vom CronJob
kubectl get jobs
```

---

# Use Cases

**Jobs:**
- Datenbank-Migration
- Batch Processing
- ETL Jobs
- Image Processing

**CronJobs:**
- Backups
- Report Generation
- Cleanup Tasks
- Health Checks

---

# Zusammenfassung

>[!summary] Jobs & CronJobs
>- **Job**: Einmalige Task
>- **CronJob**: Schedule-basiert
>- **Completions**: Anzahl erfolgreicher Runs
>- **Parallelism**: Gleichzeitige Pods
>- **restartPolicy**: Never oder OnFailure
>- **Use Case**: Batch Processing, Backups

---

# Verwandte Konzepte

- [[02 - RESOURCES/Notes/Kubernetes\|Kubernetes]] - Hauptnotiz
- [[02 - RESOURCES/Notes/Kubernetes Pods\|Kubernetes Pods]] - Jobs erstellen Pods
- [[02 - RESOURCES/Notes/Kubernetes Deployments\|Kubernetes Deployments]] - Für Long-Running
