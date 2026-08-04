---
{"dg-publish":true,"permalink":"/wiki/git-pull/","tags":["informatik/system"],"noteIcon":"","updated":"2026-07-19T03:56:26.000+02:00","dg-note-properties":{"tags":["informatik/system"]}}
---

>Es funktioniert fast wie [[wiki/git clone\|git clone]]. Wird aber oft verwendet, wenn du im Team arbeitest und die neueste Version deines Codes (das, was in GitHub ist) willst.

```bash
git pull
```

# --rebase

```sh
git pull --rebase
```

>Der Befehl git pull --rebase aktualisiert deinen Branch, indem er deine lokalen Änderungen auf die neuesten Änderungen im entfernten Repository "umlegt", anstatt einen Merge-Commit zu erstellen. 
>>Dadurch bleibt die Historie linear und übersichtlicher.

>[!summary] 
>Es ist ein "Safe" `git pull`.

