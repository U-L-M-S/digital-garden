---
{"dg-publish":true,"permalink":"/02-resources/notes/git-commit/","tags":["git/commit"],"noteIcon":"","updated":"2025-09-05T10:12:29.626+02:00"}
---

>Mit dem Befehl `git commit` und der Nachricht `this is a commit` kannst du einen Save Point speichern. Das bedeutet, hier wird ein Save Point gesetzt, und mit dem Befehl [[02 - RESOURCES/Notes/git log\|git log]] können sogar alle deine Save Points eingesehen werden. 
>Du kannst dann mit dem Befehl [[02 - RESOURCES/Notes/git checkout\|git checkout]] in der Zeit zurückkehren.
```bash
git commit -m "this is a commit"
```


>[!tip] 
>Du kannst ```git commit -m "Titel #ENTER Kurz Beschreibung #ENTER"```
>eingeben. Somit  wird in deinen GitHub so aussehen:
>![Pasted image 20230804162548.png](/img/user/02%20-%20RESOURCES/Files/IMG/Pasted%20image%2020230804162548.png)
>![Pasted image 20230804162651.png](/img/user/02%20-%20RESOURCES/Files/IMG/Pasted%20image%2020230804162651.png)

# --amend
```bash
git commit --amend
```

>Auf diese Weise kannst du Informationen zu einem Commit hinzufügen, anstatt einen neuen Commit zu erstellen.