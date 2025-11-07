---
{"dg-publish":true,"permalink":"/00-projects/gfn/ap-1/lf-04-schutzbedarfsanalyse-im-eigenen-arbeitsbereich-durchfuehren/","tags":["GFN/LF04","finished"],"noteIcon":"","updated":"2025-11-07T12:07:27.496+01:00"}
---

> Du kannst gerne unter [meinem GitHub](https://github.com/U-L-M-S/digital-garden) mithelfen.

[[LF04V2_Tag_5_Beschäftigungsmöglichkeiten Zertifizierungen_Präsentation 1.pdf]]
[[15_LF04V2_Tag_5_Urheberrecht Copyright Markenrecht und Lizenzen_Präsentation_neu 1.pdf]]
[[14_LF04V2_Tag_5_Überblick Hacking und Hackingprozess_Präsentation_neu 1.pdf]]
[[13_LF04V2_Tag_4_Schutzbedarfsanalyse_Präsentation_neu 1.pdf]]
[[12_LF04V2_Tag_3_TOM_Präsentation_neu 1.pdf]]
[[11_LF04V2_Tag_3_Social Engineering_Präsentation_neu 1.pdf]]
[[10_LF04V2_Tag_3_Malware_Präsentation_neu 1.pdf]]
[[09_LF04V2_Tag_2_Verschlüsselung + Kennwort + Hash Co_Präsentation_neu 1.pdf]]
[[08_LF04V2_Tag_2_Kryptographie + Verschlüsselungsziele Beispiele_Präsentation_neu 1.pdf]]
[[07_LF04V2_Tag_2_Elementare Gefährdungen und Risiko_Präsentation_neu 1.pdf]]
[[06_LF04V2_Tag_1_IT Grundschutz und Ziele_Präsentation_neu 1.pdf]]
[[05_LF04V2_Tag_1_Gesetze Aufsichtsbehörden_Präsentation_neu 1.pdf]]
[[03_LF04V2_Tag_1_Informationsquellen_Präsentation_neu 1.pdf]]
[[02_LF04V2_Tag_1_IT-Sicherheit_Präsentation_neu 1.pdf]]
[[01_LF04V2_Tag_1_Kursüberblick_Präsentation_neu 1.pdf]]


>Dieses Lernfeld führt dich in die Grundlagen der [[02 - RESOURCES/Notes/Cybersecurity\|Cybersecurity]] im Betrieb ein.
>>Du bewertest, wie wichtig Informationen und Systeme sind, welche Risiken bestehen und welche Maßnahmen sinnvoll sind, um sie zu schützen.

# I. Ziel der [[Schutzbedarfsanalyse\|Schutzbedarfsanalyse]]
>Du ordnest Werte (Daten, Prozesse, Systeme) nach ihrem Schutzbedarf ein, damit du passende Sicherheitsmaßnahmen auswählst.
>>Ergebnis: „normal“, „hoch“ oder „sehr hoch“ je Schutzziel der [[02 - RESOURCES/Notes/CIA-Triade\|CIA-Triade]].
___

## Vorgehen (einfach erklärt)
- Werte erfassen: Welche Daten/Prozesse/Systeme sind wichtig?
- Schäden denken: Was passiert bei Verlust von [[02 - RESOURCES/Notes/Vertraulichkeit\|Vertraulichkeit]], [[02 - RESOURCES/Notes/Integrität\|Integrität]], [[02 - RESOURCES/Notes/Verfügbarkeit\|Verfügbarkeit]]?
- Einstufen: normal/hoch/sehr hoch je Schutzziel festlegen.
- Maßnahmen ableiten: passende [[02 - RESOURCES/Notes/TOM\|TOM]]s auswählen und dokumentieren.

### Beispiel-Denkmuster
| Wert | Vertraulichkeit | Integrität | Verfügbarkeit |
|------|------------------|-----------|---------------|
| Kundendaten | hoch | hoch | normal |
| Produktionssystem | normal | hoch | sehr hoch |

# II. Rahmen: [[BSI IT-Grundschutz\|BSI IT-Grundschutz]]
>Praktischer Leitfaden aus Bausteinen, Gefährdungen und Maßnahmen.
>>Hilft dir, Standard-Sicherheitsniveau strukturiert einzuführen und nachzuweisen.
___

## Bausteine (vereinfacht)
- Organisation: Rollen, Policies, Schulungen
- Infrastruktur: Gebäude, Rechenraum, Energie, Klima
- IT-Systeme/Netze: Server, [[02 - RESOURCES/Notes/Netzwerk\|Netzwerk]], Endgeräte
- Anwendungen/Daten: Backup, Berechtigungen, Updates

# III. Begriffe: Gefährdung, Schwachstelle, Risiko
>Drei Bausteine, die zusammen das Risiko erklären.
>>Faustformel: Risiko = Eintrittswahrscheinlichkeit × Schadensausmaß.
___

## Denken in Risiken
- Gefährdung: etwas, das schaden kann (z. B. [[02 - RESOURCES/Notes/Malware\|Malware]], Feuer, Fehlbedienung)
- Schwachstelle: Lücke, die die Gefährdung nutzbar macht (z. B. fehlendes Patch)
- Risiko: Kombination aus beidem bezogen auf einen konkreten Wert

>[!tip]
>Erst verstehen, was wirklich wehtut (Schadenswirkung), dann Maßnahmen wählen.

# IV. [[02 - RESOURCES/Notes/Kryptographie\|Kryptographie]]-Ziele und Basics
>Warum verschlüsseln? Um Schutzziele umzusetzen:
>>Vertraulichkeit, Integrität, Authentizität/Verbindlichkeit.
___

## Bausteine
- [[02 - RESOURCES/Notes/Verschlüsselung\|Verschlüsselung]]: symmetrisch (schnell), asymmetrisch (Schlüsselpaare)
- Hash: Fingerabdruck für Integrität (z. B. SHA‑256)
- Digitale Signatur: beweist Echtheit und Unverändertheit
- Praxis: [[02 - RESOURCES/Notes/TLS\|TLS]], [[02 - RESOURCES/Notes/VPN\|VPN]], Passwort-Hashing (mit Salt/Iteration), [[MFA\|MFA]]

# V. [[02 - RESOURCES/Notes/Malware\|Malware]] und [[02 - RESOURCES/Notes/Social Engineering\|Social Engineering]]
>Zwei häufigste Ursachen für Sicherheitsvorfälle.
>>Technik hilft – aber Verhalten der Menschen ist genauso wichtig.
___

## Kurzüberblick
- Malware: Virus, Wurm, Trojaner, [[02 - RESOURCES/Notes/Ransomware\|Ransomware]] – Schutz: Patchen, AV, Least Privilege, Backup
- Social Engineering: [[02 - RESOURCES/Notes/Phishing\|Phishing]], Spear‑Phishing, Pretexting – Schutz: Sensibilisierung, MFA, Prozesse

# VI. [[02 - RESOURCES/Notes/TOM\|TOM]]: Technische und organisatorische Maßnahmen
>Maßnahmen, die du aus Schutzbedarf und Risiko ableitest.
>>Immer verhältnismäßig: so viel wie nötig, so wenig wie möglich.
___

## Technisch (Auswahl)
- [[02 - RESOURCES/Notes/Firewall 1\|Firewall 1]], IDS/IPS, Netzwerk‑Segmentierung
- Patch‑/Vulnerability‑Management, sichere Konfiguration
- [[02 - RESOURCES/Notes/Backup\|Backup]]/Restore‑Tests, Logging/Monitoring

## Organisatorisch (Auswahl)
- Richtlinien, Rollen/Berechtigungen, Vier‑Augen‑Prinzip
- Schulungen, Notfallmanagement, Lieferantenmanagement
- Dokumentation der Schutzbedarfe und Entscheidungen

# VII. Rechtlicher Rahmen (kurz)
>Wichtige Orientierung für Umgang mit Daten und Pflichten.
>>Details stehen in eigenen Notizen; hier nur Einordnung.
___

- [[02 - RESOURCES/Notes/DSGVO\|DSGVO]]: Regeln für [[02 - RESOURCES/Notes/Personenbezogene Daten\|Personenbezogene Daten]] (Rechte, Pflichten, Nachweise)
- [[02 - RESOURCES/Notes/BDSG\|BDSG]]: nationale Ergänzung in [[02 - RESOURCES/Notes/Deutschland\|Deutschland]]
- Urheber‑/Markenrecht: Nutzung von Werken/Software klären

>[!important]
>Datenschutz ≠ Datensicherheit: Datenschutz schützt Personen, Datensicherheit schützt Werte. Beide greifen zusammen.

# VIII. Ergebnis nutzen und leben
>Schutzbedarf ist keine Schublade, sondern Arbeitsgrundlage.
>>Regelmäßig prüfen, wenn sich Werte, Bedrohungen oder Umgebung ändern.
___

### Mini‑Checkliste für den Alltag
- Habe ich den Wert und sein Schutzziel verstanden?
- Welche Top‑3‑Gefährdungen sind realistisch?
- Welche 2–3 [[02 - RESOURCES/Notes/TOM\|TOM]]s mindern Risiko am meisten?
- Ist das dokumentiert, getestet und kommuniziert?

