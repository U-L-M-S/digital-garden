---
{"dg-publish":true,"permalink":"/03-archives/abgeschlossen/git/","tags":["git","finished"]}
---

>Versionskontrollsystem.  
>Damit du mit Git arbeiten kannst, musst du **NUR** ein paar Befehle beherrschen (die Basics). 
>>Natürlich ist es immer gut, etwas fortgeschrittener zu sein, wenn du schneller und professioneller arbeiten möchtest.

Du kannst mit Git auf zwei Arten arbeiten: Offline(Local) oder Online(GitHub).


## Basics (Offline)
![Pasted image 20230803235339.png](/img/user/02%20-%20RESOURCES/Files/IMGs/Pasted%20image%2020230803235339.png)
### 
<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">



## Git init
```bash
git init
```
Mit diesem Befehl startest du Git in deinem aktuellen Verzeichnis. ^967e08



</div></div>

### 
<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">



## Git add

```bash
git add <file>
```

^a7cdab

Mit diesem Befehl kannst du Ordner / Files auswählen, die danach in der Save Point gespeichert wird mit `commit`. ^41cbf7

Mit `git add file1 file2` werden mehrere Dateien ausgewählten werden und `git add *` ODER `git add .` werden ==allem== Dateien und Verzeichnissen ausgewählt. 

</div></div>


<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">



## Git commit

^657b9a

```bash
git commit -m "this is a commit"
```

Mit dem Befehl `git commit` und der Nachricht `this is a commit` kannst du einen Save Point speichern. Das bedeutet, hier wird ein Save Point gesetzt, und mit dem Befehl [[02 - RESOURCES/Notes/git log\|git log]] können sogar alle deine Save Points eingesehen werden. Du kannst dann mit dem Befehl [[02 - RESOURCES/Notes/git checkout\|git checkout]] in der Zeit zurückkehren.

>[!tip] 
>Du kannst ```git commit -m "Titel #ENTER Kurz Beschreibung #ENTER"```
>eingeben. Somit  wird in deinen GitHub so aussehen:
>![Pasted image 20230804162548.png](/img/user/02%20-%20RESOURCES/Files/IMGs/Pasted%20image%2020230804162548.png)
>![Pasted image 20230804162651.png](/img/user/02%20-%20RESOURCES/Files/IMGs/Pasted%20image%2020230804162651.png)

```bash
git commit --amend
```

Auf diese Weise kannst du Informationen zu einem Commit hinzufügen, anstatt einen neuen Commit zu erstellen.

</div></div>



<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">



## git branch

```bash
git branch -M <branch-name>
```

So wechselst du zu eine anderes Branch.

</div></div>



<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">



## git checkout

```bash
git checkout
```

>[!attention] 
>Gefährlicher Befehl.

Es bietet viele Möglichkeiten, die du mit diesem Befehl ausführen kannst. Hier sind einige nützliche Optionen:

```bash
git checkout <commit-hash>
``` 

^ff4e5f

Mit dem Befehl kannst du zu einem bestimmten Commit wechseln. Ich möchte dir jedoch **dringend** empfehlen, dass du, wenn du zu einem Commit zurückkehrst, einen neuen Branch erstellst. (Bild)

``` bash
git checkout -b <new-branch-name>
``` 

Somit erstellst du eine neue Brach und kannst deine vorherige Commits nicht überschreiben.
![Pasted image 20230806113223.png](/img/user/02%20-%20RESOURCES/Files/IMGs/Pasted%20image%2020230806113223.png)

```bash
git checkout <branch-name>
```

^5deb9e

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

</div></div>

## Info Befehlen

<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">



## git status

```bash
git status
```

Diesem Befehl wird verwendet, um **alle** Verzeichnis-/ Dateien-stand anzuzeigen.

</div></div>



<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">



## git log

```bash
git log 
```


Diesem Befehl wird verwendet, um **alle** Save Points (commits) anzuzeigen.

>[!tip] 
>`git log --oneline` mach das selbe wie `git log`,  aber in eine kleinere Version.

</div></div>



<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">



## gitignore

```bash
.gitignore
```

Das ist keine Anweisung, sondern eine Datei, in die du alle Verzeichnisse und Dateien eintragen kannst. Dadurch werden sie von Git ignoriert.

</div></div>


## GitHub
![Pasted image 20230806150949.png](/img/user/02%20-%20RESOURCES/Files/IMGs/Pasted%20image%2020230806150949.png)
Wie du es sehen kannst, GitHub ist nicht anders als eine Klone von deinen Local Git. 


<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">



## git clone

```bash
git clone <repository-url>
```

Lade das gesamte Repository auf deinen PC herunter.

>[!tip] 
> `git clone <repository-url> ~/Downloads`
> 
> So kannst du etwas in eine bestimmte Path herunterlanden. 

---

>[!tip] 
>`git archive --remote=<repository-url> HEAD:<path_to_folder_or_file>`
>
> Auf dieser Weise kannst du nur eine bestimmte File oder Directory herunterladen.

</div></div>



<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">



## git pull

```bash
git pull
```

Es funktioniert fast wie [[02 - RESOURCES/Notes/git clone#git clone\|git clone#git clone]]. Wird aber oft verwendet wenn du in Team arbeitest und das neueste Version von dein Code (das was in GitHub ist) willst.

</div></div>



<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">



## git push
```bash
git push
```

Befehl wird verwendet um was bei mir (Lokal) steht an das Git verschickt wird.

>[!important] 
> In dein erste push, ist sehr normal, dass ein Fehler passiert.
> Wie Branch-Names [[02 - RESOURCES/Notes/git checkout#^5deb9e\|git checkout#^5deb9e]] **ODER** dein Branch wurde noch nicht eingelegt `git push -u origin main`

>[!important] 
> Falls du ein Commit mit `git commit --amend` überschreibst. Wird dein Commit-Hash sich ändern (Lokal) und somit wird es nicht möglich sein zu pushen. 
> Was du machen kannst ist ein `git push --force origin <branch-name>` **ABER** es ist sehr gefährlich. Da du ein Commit löschen wird mit `--force`

</div></div>
