---
{"dg-publish":true,"permalink":"/02-resources/notes/symmetrische-verschluesselung/","tags":["kryptografie","it-sicherheit"],"noteIcon":"","updated":"2024-11-02T17:34:59.227+01:00"}
---

>Symmetrische Verschlüsselung ist eine Methode der Kryptographie, bei der nur ein einziger Schlüssel verwendet wird: der **geheime Schlüssel**.

- Dieser Schlüssel wird verwendet, um Daten sowohl zu **verschlüsseln** als auch zu **entschlüsseln**.

Da derselbe Schlüssel von beiden Kommunikationsparteien geteilt wird, ist das Verfahren schnell und effizient, aber der Schlüssel muss sicher zwischen den Parteien ausgetauscht werden. Ein bekanntes Beispiel ist **AES** (Advanced Encryption Standard). Symmetrische Verschlüsselung wird häufig für die **sichere Datenübertragung innerhalb von Netzwerken** eingesetzt.

### Abgedeckte Bausteine der Sicherheit:

1. **[[02 - RESOURCES/Notes/Vertraulichkeit\|Vertraulichkeit]]:** Symmetrische Verschlüsselung stellt sicher, dass nur diejenigen, die den geheimen Schlüssel besitzen, auf die verschlüsselten Daten zugreifen können, wodurch ein unbefugter Zugriff verhindert wird.

2. **[[02 - RESOURCES/Notes/Integrität\|Integrität]]:** Durch den verschlüsselten Austausch wird die Manipulation der Daten erschwert, was die [[02 - RESOURCES/Notes/Integrität\|Integrität]] der Informationen sicherstellt.

3. **Schnelligkeit**: Da nur ein Schlüssel verwendet wird und der Algorithmus recheneffizient ist, bietet die symmetrische Verschlüsselung eine schnelle Verschlüsselung und Entschlüsselung, die für große Datenmengen besonders nützlich ist.


>[!note] [[02 - RESOURCES/Notes/Asymmetrische Verschlüsselung\|Asymetrische Verschlüsselung]] ist ein Good To Know ;D