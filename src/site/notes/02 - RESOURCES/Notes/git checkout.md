---
{"dg-publish":true,"permalink":"/02-resources/notes/git-checkout/","tags":["git/checkout","git/branch"],"noteIcon":"","updated":"2024-10-15T11:13:15.000+02:00"}
---

>Es bietet viele Möglichkeiten, die du mit diesem Befehl ausführen kannst.
```bash
git checkout
```

>[!attention] 
>Gefährlicher Befehl.

Hier sind einige nützliche Optionen:

```bash
git checkout <commit-hash>
``` 


Mit dem Befehl kannst du zu einem bestimmten Commit wechseln. Ich möchte dir jedoch **dringend** empfehlen, dass du, wenn du zu einem Commit zurückkehrst, einen neuen Branch erstellst. (Bild)

``` bash
git checkout -b <new-branch-name>
``` 

Somit erstellst du eine neue Brach und kannst deine vorherige Commits nicht überschreiben.
![Pasted image 20230806113223.png](/img/user/02%20-%20RESOURCES/Files/IMGs/Pasted%20image%2020230806113223.png)

```bash
git checkout <branch-name>
```


wechseln zu eine andere Branch.

```bash
git checkout -- <file-name>
```

Setzt eine bestimmte Datei wie es war (als es commited wurde).

```bash
git checkout .
git checkout -- .
```
Sie sehen ähnlich aus, machen fast das gleiche. 
- I) Dieser Befehl <mark style="background: #FFF3A3A6;">verwirft alle Änderungen</mark> in den veränderten Dateien im <mark style="background: #FFF3A3A6;">aktuellen Verzeichnis</mark>. Dateien werden auf die <mark style="background: #FFF3A3A6;">letzten Commit-Zustand zurückzusetzen</mark>.

- II) Es macht das selbe wie `git checkout .`, betrifft jedoch <mark style="background: #FFF3A3A6;">sämtliche Unterverzeichnisse.</mark>