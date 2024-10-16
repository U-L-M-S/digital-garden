---
{"dg-publish":true,"permalink":"/02-resources/notes/asymmetrische-verschluesselung/","tags":["kryptografie/encryption","kryptografie/decryption"],"noteIcon":"","updated":"2024-10-05T01:27:30.404+02:00"}
---

>Asymmetrische Verschlüsselung ist eine Methode der Kryptographie, bei der zwei verschiedene Schlüssel verwendet werden: ein **öffentlicher Schlüssel** (public key) und ein **privater Schlüssel** (private key).

- Der öffentliche Schlüssel wird verwendet, um Daten zu **verschlüsseln**.
- Der private Schlüssel wird verwendet, um diese Daten wieder zu **entschlüsseln**.

Da nur der Besitzer des privaten Schlüssels die verschlüsselten Daten entschlüsseln kann, bietet dieses Verfahren hohe Sicherheit. Ein bekanntes Beispiel ist **[[02 - RESOURCES/Notes/RSA\|RSA]]**. Es wird oft in sicheren Kommunikationsprotokollen wie **SSL/TLS** eingesetzt.

### Abgedeckte Bausteine der Sicherheit:

1. **[[02 - RESOURCES/Notes/Vertraulichkeit\|Vertraulichkeit]]:** Asymmetrische Verschlüsselung sorgt dafür, dass nur der beabsichtigte Empfänger auf die verschlüsselten Daten zugreifen kann, was unbefugten Zugriff verhindert.

2. **[[Authentizität\|Authentizität]]:** Durch die Verwendung von digitalen Signaturen wird sichergestellt, dass die Identität des Absenders überprüft werden kann, was Betrug und Identitätsdiebstahl reduziert.

3. **[[02 - RESOURCES/Notes/Integrität\|Integrität]]:** Die Verschlüsselung und digitalen Signaturen gewährleisten, dass die übermittelten Daten nicht manipuliert wurden, was Vertrauen in die [[02 - RESOURCES/Notes/Integrität\|Integrität]] der Informationen schafft.

4. **[[02 - RESOURCES/Notes/Nicht-Abstreitbarkeit\|Nicht-Abstreitbarkeit]]:** Der Sender kann nicht verneinen, dass er eine Nachricht gesendet hat, da nur er in der Lage ist, sie mit seinem privaten Schlüssel zu signieren, was rechtliche und betriebliche Konsequenzen absichert.