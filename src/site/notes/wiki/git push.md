---
{"dg-publish":true,"permalink":"/wiki/git-push/","tags":["informatik/system"],"noteIcon":"","updated":"2026-07-19T03:56:26.000+02:00","dg-note-properties":{"tags":["informatik/system"]}}
---

>Befehl wird verwendet, um das, was bei mir (Lokal) steht, an das Git zu verschicken.

```bash
git push
```


>[!important] 
> Bei deinem ersten Push ist es sehr normal, dass ein Fehler passiert.
> Wie Branch-Names [[wiki/git checkout\|git checkout]] **ODER** dein Branch wurde noch nicht angelegt: `git push -u origin main`

>[!important] 
> Falls du ein Commit mit `git commit --amend` überschreibst. Wird dein Commit-Hash sich ändern (Lokal) und somit wird es nicht möglich sein zu pushen. 
> Was du machen kannst, ist ein `git push --force origin <branch-name>` **ABER** es ist sehr gefährlich. Da du einen Commit mit `--force` löschen wirst.