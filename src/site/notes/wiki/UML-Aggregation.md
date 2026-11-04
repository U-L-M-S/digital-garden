---
{"dg-publish":true,"permalink":"/wiki/uml-aggregation/","tags":["informatik/software","ausbildung/pruefung"],"noteIcon":"","updated":"2026-07-19T03:56:26.000+02:00","dg-note-properties":{"aliases":["Aggregation","UML Aggregation"],"created_date":"2024-11-06","links":null,"tags":["informatik/software","ausbildung/pruefung"]}}
---

>Aggregation ist eine spezielle Form der [[wiki/UML-Assoziation\|UML-Assoziation]], die eine "hat-eine"-Beziehung darstellt, bei der das Teil-Objekt unabhängig vom Ganzen existieren kann.
>>In UML wird Aggregation durch eine Linie mit einer **hohlen Raute** (◇) dargestellt. Die Raute zeigt zur "Ganzes"-Klasse.

>[!summary] Kernpunkte
>**Aggregation** ist eine schwache "HAS-A"-Beziehung:
>- Darstellung: **Hohle Raute** (◇) + Linie
>- Bedeutung: "hat" / "besteht aus"
>- **Teil kann ohne Ganzes existieren** (Hauptunterschied zur [[wiki/UML-Komposition\|UML-Komposition]])
>- Raute zeigt immer zur "Ganzes"-Klasse
>- Beispiel: Auto hat Räder (Räder können auch ohne Auto existieren)

## ASCII-Diagramm: UML-Aggregation

```
AGGREGATION (SCHWACHE BESITZBEZIEHUNG)

┌────────────────┐           ┌────────────────┐
│   UNIVERSITÄT  │◇──────────│    STUDENT     │
├────────────────┤           ├────────────────┤
│ - name: String │           │ - name: String │
│ - ort: String  │           │ - matrikel: int│
└────────────────┘           └────────────────┘
      ◇ Hohle Raute

BEDEUTUNG:
→ Universität "hat" Studenten
→ Student kann ohne Universität existieren
   (Student kann Uni wechseln)
→ ◇ zeigt zur "Ganzes"-Klasse (Universität)
```

## Aggregation vs. Komposition vs. Assoziation

```
VERGLEICH DER BEZIEHUNGEN

ASSOZIATION (einfache Linie)
┌────────┐           ┌────────┐
│PERSON  │───────────│ ADRESSE│
└────────┘           └────────┘
→ Kennt sich
→ Keine Besitzbeziehung


AGGREGATION (hohle Raute)
┌────────┐           ┌────────┐
│FIRMA   │◇──────────│ANGESTELL│
└────────┘           └────────┘
→ "Hat"-Beziehung
→ Teil kann ohne Ganzes existieren
→ Angestellter kann Firma wechseln


KOMPOSITION (gefüllte Raute)  → [[UML-Komposition]]
┌────────┐           ┌────────┐
│ HAUS   │◆──────────│ ZIMMER │
└────────┘           └────────┘
→ "Besteht aus"-Beziehung
→ Teil stirbt mit Ganzem
→ Zimmer kann ohne Haus nicht existieren
```

## Java-Code-Beispiel

```java
// AGGREGATION: Abteilung hat Mitarbeiter

public class Abteilung {
    private String name;
    private List<Mitarbeiter> mitarbeiter;  // ← Aggregation

    public Abteilung(String name) {
        this.name = name;
        this.mitarbeiter = new ArrayList<>();
    }

    public void mitarbeiterHinzufuegen(Mitarbeiter m) {
        mitarbeiter.add(m);
    }

    public void mitarbeiterEntfernen(Mitarbeiter m) {
        mitarbeiter.remove(m);
    }
}

public class Mitarbeiter {
    private String name;

    public Mitarbeiter(String name) {
        this.name = name;
    }
}

// VERWENDUNG
Mitarbeiter anna = new Mitarbeiter("Anna");
Mitarbeiter max = new Mitarbeiter("Max");

Abteilung it = new Abteilung("IT");
it.mitarbeiterHinzufuegen(anna);
it.mitarbeiterHinzufuegen(max);

// Wenn it gelöscht wird, existieren anna und max weiter!
it = null;
// anna und max können zu anderer Abteilung wechseln
```

## Multiplizität bei Aggregation

```
KARDINALITÄTEN

     1              1..*
┌─────────┐     ┌─────────┐
│  TEAM   │◇────│ SPIELER │
└─────────┘     └─────────┘

→ Ein Team hat mindestens einen Spieler
→ Spieler können Team wechseln
→ Wenn Team aufgelöst wird, existieren Spieler weiter
```

>[!important] Wichtig für AP2
>**Aggregation Merkmale:**
>- **Notation:** Hohle Raute (◇) + Linie
>- **Bedeutung:** "hat" / schwache Besitzbeziehung
>- **Raute zeigt zum Ganzen** (nicht zum Teil!)
>- **Teil existiert unabhängig** vom Ganzen
>
>**Unterschiede:**
>- **Aggregation:** ◇─── (hohle Raute) - Teil kann ohne Ganzes existieren
>- **Komposition:** ◆─── (gefüllte Raute) - Teil stirbt mit Ganzem
>- **Assoziation:** ─── (einfache Linie) - nur Referenz
>
>**Typische Prüfungsfrage:** "Was ist der Unterschied zwischen Aggregation und Komposition?"
>→ Antwort: Bei Aggregation kann Teil ohne Ganzes existieren, bei Komposition nicht!

>[!example] Praxis-Beispiel

```
BEISPIEL: BIBLIOTHEK

┌─────────────┐         ┌─────────────┐
│ BIBLIOTHEK  │◇────────│    BUCH     │
├─────────────┤    1  * ├─────────────┤
│ - name      │         │ - titel     │
│ - ort       │         │ - isbn      │
└─────────────┘         └─────────────┘

→ Bibliothek "hat" Bücher
→ Wenn Bibliothek geschlossen wird, existieren Bücher weiter
   (können an andere Bibliothek verkauft werden)
→ AGGREGATION (◇)
```

>[!tip] Praxis-Tipps für AP2
>1. **Rauten-Richtung:** Hohle Raute zeigt immer zum "Ganzen" (Container)
>2. **Test für Aggregation:** "Kann Teil ohne Ganzes existieren?" → Ja = Aggregation
>3. **Eselsbrücke:** "Hohle Raute = Hohlraum = Teile können raus (unabhängig existieren)"
>4. **Typischer Fehler:** Raute auf falsche Seite zeichnen

## Verwandte Konzepte
- [[wiki/UML-Komposition\|UML-Komposition]] - Starke Besitzbeziehung
- [[wiki/UML-Assoziation\|UML-Assoziation]] - Einfache Beziehung
- [[wiki/Vererbung\|Vererbung]] - IS-A Beziehung

<div class="excalidraw-svg"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 774.9836953424663 361.9345397949219" width="774.9836953424663" height="361.9345397949219" class="excalidraw-svg" style="max-width: 100%; height: auto;"><!-- svg-source:excalidraw --><metadata/><defs><style class="style-fonts">      @font-face { font-family: Excalifont; src: url(data:font/woff2;base64,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); }</style></defs><rect x="0" y="0" width="774.9836953424663" height="361.9345397949219" fill="#ffffff"/><g stroke-linecap="round" transform="translate(10 202.51858520507812) rotate(0 135.06076049804688 74.70797729492188)"><path d="M37.35 0 C79.17 -1.46, 118.23 -2.65, 232.77 0 M37.35 0 C105.55 -0.07, 174.07 -0.43, 232.77 0 M232.77 0 C257.89 1.45, 268.92 12.7, 270.12 37.35 M232.77 0 C257.63 1.29, 267.93 13.08, 270.12 37.35 M270.12 37.35 C269.75 58.99, 271.14 83.1, 270.12 112.06 M270.12 37.35 C269.58 59.67, 271.29 81.38, 270.12 112.06 M270.12 112.06 C268.92 137.36, 256.06 148.92, 232.77 149.42 M270.12 112.06 C269.75 137.54, 255.38 149.41, 232.77 149.42 M232.77 149.42 C157.1 147.91, 82.68 148.86, 37.35 149.42 M232.77 149.42 C184 147.02, 134.73 146.95, 37.35 149.42 M37.35 149.42 C13.3 148.26, 1.15 138.05, 0 112.06 M37.35 149.42 C14.16 148.82, -1.99 136.69, 0 112.06 M0 112.06 C1.86 92.75, 1.95 75.28, 0 37.35 M0 112.06 C-1.14 88.51, 0.59 67.44, 0 37.35 M0 37.35 C-0.08 10.82, 14.24 -0.7, 37.35 0 M0 37.35 C-0.03 14.11, 10.16 -1.65, 37.35 0" stroke="#000000" stroke-width="1" fill="none"/></g><g stroke-linecap="round"><g transform="translate(12.42535400390625 241.0751953125) rotate(0 134.69818305054682 -0.731906997058541)"><path d="M-0.05 -0.75 C44.58 -1.01, 223.75 -1.04, 268.62 -1.13 M-1.53 1.47 C43.41 0.82, 225.96 -2.12, 270.93 -2.94" stroke="#000000" stroke-width="1" fill="none"/></g></g><mask/><g transform="translate(87.43815267314204 207.015625) rotate(0 45.179969787597656 12.5)"><text x="0" y="17.619999999999997" font-family="Excalifont, Xiaolai, sans-serif, Segoe UI Emoji" font-size="20px" fill="#1e1e1e" text-anchor="start" style="white-space: pre;" direction="ltr" dominant-baseline="alphabetic">Tastatur</text></g><g stroke-linecap="round" transform="translate(492.76143063351515 199.30764770507812) rotate(0 135.06076049804688 74.70797729492188)"><path d="M37.35 0 C102.07 3.53, 164.76 2.3, 232.77 0 M37.35 0 C91.13 -1.02, 143.56 -0.67, 232.77 0 M232.77 0 C257.44 1.77, 269.48 11.28, 270.12 37.35 M232.77 0 C258.46 2.09, 272.19 11.51, 270.12 37.35 M270.12 37.35 C268.94 62.09, 268 83.75, 270.12 112.06 M270.12 37.35 C268.88 57.03, 268.72 77.49, 270.12 112.06 M270.12 112.06 C269 136.91, 259.09 149.3, 232.77 149.42 M270.12 112.06 C270.54 139.13, 258.78 149.74, 232.77 149.42 M232.77 149.42 C172.38 152.53, 111.73 152.37, 37.35 149.42 M232.77 149.42 C176.13 150.87, 118.93 149.32, 37.35 149.42 M37.35 149.42 C13.97 149.66, 1.56 138.62, 0 112.06 M37.35 149.42 C13.19 148.23, -0.75 138.56, 0 112.06 M0 112.06 C0.11 89.45, 1.23 67.17, 0 37.35 M0 112.06 C0.14 91.95, -0.26 72.98, 0 37.35 M0 37.35 C1.86 12.95, 11.8 -1.54, 37.35 0 M0 37.35 C1.4 12.69, 14.09 0.82, 37.35 0" stroke="#000000" stroke-width="1" fill="none"/></g><g stroke-linecap="round"><g transform="translate(495.1867846374214 237.8642578125) rotate(0 135.04529785045423 -0.39340066545642927)"><path d="M1.15 -0.87 C46.28 -1.24, 225.13 -1.99, 269.8 -2.08 M0.29 1.29 C45.39 1.07, 224.4 0.08, 269.07 -0.72" stroke="#000000" stroke-width="1" fill="none"/></g></g><mask/><g transform="translate(610.438152673142 206.015625) rotate(0 13.269989013671875 12.5)"><text x="0" y="17.619999999999997" font-family="Excalifont, Xiaolai, sans-serif, Segoe UI Emoji" font-size="20px" fill="#1e1e1e" text-anchor="start" style="white-space: pre;" direction="ltr" dominant-baseline="alphabetic">PC</text></g><g stroke-linecap="round"><g transform="translate(285.1215209960938 279.015625) rotate(0 101.31995481871064 0.6991136298367486)"><path d="M0 0 C66.66 0.41, 132.29 2.93, 202.64 0 M0 0 C44.2 1.15, 89.86 1.17, 202.64 0" stroke="#1e1e1e" stroke-width="2" fill="none"/></g><g transform="translate(285.1215209960938 279.015625) rotate(0 101.31995481871064 0.6991136298367486)"><path d="M202.35 -0.14 L190.14 3.81 L177.31 1.55 L192 -4.53 L201.86 -0.29" stroke="none" stroke-width="0" fill="#ffffff" fill-rule="evenodd"/><path d="M202.64 0 C199.85 0.93, 196.34 4.3, 191.81 5.16 M202.64 0 C199.89 1.32, 198.17 2.47, 191.81 5.16 M191.81 5.16 C186.78 4.2, 183.63 3.34, 178.64 0 M191.81 5.16 C188.63 3.78, 186.03 2.8, 178.64 0 M178.64 0 C183.1 -0.6, 187.44 -2.75, 191.72 -4.98 M178.64 0 C184.38 -1.35, 189.33 -4.04, 191.72 -4.98 M191.72 -4.98 C193.86 -4.16, 197.85 -2.26, 202.64 0 M191.72 -4.98 C194.84 -3.96, 198.1 -2.27, 202.64 0 M202.64 0 C202.64 0, 202.64 0, 202.64 0 M202.64 0 C202.64 0, 202.64 0, 202.64 0" stroke="#1e1e1e" stroke-width="2" fill="none"/></g></g><mask/><g stroke-opacity="0.4" fill-opacity="0.4" transform="translate(357.6168476712331 113.5) rotate(0 43.5 63.5)" stroke="none"><path fill="#1e1e1e" d="M 2.89,-1.89 Q 2.89,-1.89 5.24,1.90 7.59,5.70 11.75,12.70 15.91,19.69 19.51,25.83 23.12,31.97 26.09,37.35 29.07,42.73 32.19,48.62 35.32,54.52 37.22,58.34 39.13,62.16 41.31,65.68 43.48,69.21 45.53,72.44 47.57,75.68 49.28,78.11 50.99,80.54 52.54,82.85 54.09,85.17 55.37,86.90 56.66,88.63 57.88,90.41 59.10,92.19 60.65,93.81 62.20,95.44 63.92,97.98 65.64,100.53 67.84,102.93 70.03,105.33 71.27,107.22 72.50,109.11 74.41,111.60 76.32,114.09 78.64,115.85 80.96,117.61 83.15,118.49 85.33,119.38 87.06,119.79 88.79,120.20 89.83,120.66 90.87,121.13 91.70,121.90 92.54,122.67 93.08,123.67 93.63,124.67 93.83,125.79 94.02,126.91 93.85,128.03 93.68,129.16 93.16,130.17 92.64,131.18 91.83,131.97 91.01,132.76 89.99,133.25 88.96,133.74 87.83,133.88 86.70,134.02 85.59,133.79 84.47,133.56 83.49,132.98 82.51,132.41 81.76,131.55 81.02,130.69 80.58,129.64 80.15,128.59 80.07,127.46 80.00,126.32 80.29,125.22 80.58,124.12 81.21,123.17 81.83,122.22 82.73,121.52 83.63,120.83 84.70,120.45 85.77,120.07 86.91,120.06 88.05,120.04 89.13,120.39 90.21,120.74 91.12,121.42 92.04,122.10 92.69,123.03 93.34,123.96 93.66,125.06 93.97,126.15 93.93,127.29 93.88,128.42 93.47,129.48 93.06,130.54 92.34,131.42 91.61,132.30 90.64,132.89 89.68,133.49 88.57,133.75 87.46,134.01 86.33,133.90 85.20,133.79 85.20,133.79 85.20,133.79 83.88,133.28 82.56,132.77 79.97,131.68 77.38,130.58 75.28,129.61 73.19,128.64 71.06,127.19 68.94,125.74 67.55,124.01 66.17,122.29 64.74,119.73 63.32,117.18 61.62,114.49 59.92,111.79 58.20,109.46 56.47,107.13 55.38,104.75 54.28,102.36 53.46,100.26 52.64,98.16 51.27,95.49 49.90,92.83 48.86,90.82 47.83,88.81 46.62,86.38 45.41,83.95 44.01,81.31 42.62,78.66 40.74,75.37 38.86,72.08 36.54,68.36 34.21,64.65 32.30,60.90 30.39,57.16 27.24,51.34 24.08,45.53 21.07,40.26 18.07,35.00 14.36,28.94 10.66,22.88 6.42,16.06 2.18,9.24 -0.35,5.56 -2.89,1.89 -3.07,1.51 -3.26,1.14 -3.35,0.73 -3.44,0.33 -3.43,-0.08 -3.42,-0.50 -3.31,-0.90 -3.20,-1.30 -2.99,-1.67 -2.79,-2.03 -2.51,-2.33 -2.22,-2.64 -1.87,-2.87 -1.52,-3.10 -1.13,-3.23 -0.74,-3.37 -0.32,-3.41 0.08,-3.45 0.49,-3.39 0.91,-3.33 1.29,-3.17 1.68,-3.01 2.02,-2.77 2.35,-2.52 2.62,-2.21 2.89,-1.89 2.89,-1.89 L 2.89,-1.89 Z"/></g><g stroke-opacity="0.4" fill-opacity="0.4" transform="translate(387.6168476712331 230.5) rotate(0 32.5 -1.75)" stroke="none"><path fill="#1e1e1e" d="M 1.26,-3.79 Q 1.26,-3.79 3.89,-3.03 6.51,-2.26 10.58,0.15 14.65,2.57 19.24,5.34 23.83,8.10 27.24,10.12 30.65,12.13 35.12,14.45 39.59,16.77 44.39,19.24 49.20,21.72 52.23,22.87 55.27,24.03 58.11,24.60 60.95,25.18 60.16,22.28 59.36,19.38 59.24,17.24 59.12,15.11 59.10,12.48 59.09,9.85 59.39,5.72 59.70,1.59 59.88,-2.31 60.07,-6.22 60.08,-9.46 60.08,-12.70 59.97,-14.94 59.86,-17.18 59.81,-21.37 59.77,-25.56 59.68,-27.78 59.58,-30.00 59.56,-31.53 59.54,-33.05 59.70,-33.92 59.85,-34.79 60.27,-35.56 60.69,-36.34 61.34,-36.94 61.98,-37.54 62.79,-37.90 63.59,-38.26 64.47,-38.35 65.35,-38.43 66.20,-38.24 67.06,-38.04 67.81,-37.58 68.57,-37.11 69.13,-36.44 69.69,-35.76 70.01,-34.93 70.33,-34.11 70.37,-33.23 70.41,-32.35 70.16,-31.50 69.92,-30.66 69.42,-29.93 68.91,-29.21 68.21,-28.68 67.50,-28.15 66.66,-27.88 65.82,-27.61 64.94,-27.62 64.06,-27.63 63.23,-27.92 62.39,-28.21 61.70,-28.75 61.00,-29.29 60.51,-30.02 60.03,-30.76 59.80,-31.61 59.57,-32.46 59.63,-33.34 59.68,-34.22 60.02,-35.04 60.35,-35.85 60.93,-36.52 61.51,-37.19 62.27,-37.63 63.03,-38.08 63.89,-38.26 64.76,-38.44 65.63,-38.34 66.51,-38.23 67.30,-37.85 68.10,-37.47 68.73,-36.86 69.37,-36.25 69.77,-35.46 70.18,-34.68 70.31,-33.81 70.45,-32.94 70.45,-32.94 70.45,-32.94 70.39,-31.34 70.33,-29.75 70.06,-27.33 69.79,-24.90 69.46,-21.04 69.13,-17.19 69.02,-14.95 68.91,-12.71 68.92,-9.47 68.93,-6.23 69.13,-2.33 69.32,1.56 69.65,5.66 69.97,9.76 70.00,12.28 70.03,14.81 70.07,18.61 70.12,22.41 69.98,24.54 69.84,26.68 68.50,29.36 67.17,32.03 65.18,33.00 63.19,33.97 61.01,33.45 58.83,32.93 55.75,31.51 52.67,30.09 49.58,28.63 46.49,27.16 41.63,24.83 36.76,22.49 32.01,20.26 27.25,18.02 23.83,16.09 20.42,14.16 15.72,11.70 11.01,9.23 7.42,7.47 3.83,5.71 1.28,4.75 -1.26,3.79 -1.70,3.59 -2.13,3.38 -2.51,3.08 -2.88,2.77 -3.17,2.38 -3.46,2.00 -3.65,1.55 -3.84,1.11 -3.92,0.63 -4.00,0.16 -3.96,-0.31 -3.92,-0.79 -3.77,-1.25 -3.61,-1.71 -3.36,-2.12 -3.10,-2.53 -2.75,-2.86 -2.40,-3.20 -1.98,-3.44 -1.57,-3.68 -1.10,-3.81 -0.64,-3.95 -0.16,-3.97 0.32,-3.99 0.79,-3.89 1.26,-3.79 1.26,-3.79 L 1.26,-3.79 Z"/></g><g transform="translate(95.11684767123307 57) rotate(0 91.75 -1)" stroke="none"><path fill="#1e1e1e" d="M -0.26,-4.07 Q -0.26,-4.07 4.20,-4.16 8.67,-4.26 11.61,-4.50 14.54,-4.74 19.00,-4.62 23.46,-4.50 27.28,-4.62 31.11,-4.75 34.74,-4.98 38.38,-5.21 42.29,-5.28 46.21,-5.34 49.31,-5.50 52.40,-5.65 55.16,-5.80 57.91,-5.95 61.10,-6.01 64.29,-6.06 66.93,-6.17 69.58,-6.28 72.14,-6.38 74.71,-6.48 77.09,-6.57 79.47,-6.67 82.07,-6.73 84.66,-6.79 88.32,-6.98 91.99,-7.17 95.11,-7.34 98.22,-7.50 101.66,-7.61 105.09,-7.73 108.03,-7.63 110.96,-7.53 113.74,-7.58 116.52,-7.63 119.13,-7.70 121.75,-7.77 125.77,-7.73 129.78,-7.69 132.00,-7.67 134.22,-7.65 137.65,-7.69 141.09,-7.73 143.36,-7.70 145.63,-7.67 149.10,-7.70 152.57,-7.74 155.31,-7.80 158.04,-7.86 160.26,-7.92 162.47,-7.98 165.39,-8.01 168.31,-8.04 171.97,-8.02 175.64,-8.00 179.57,-8.07 183.50,-8.14 184.56,-7.97 185.62,-7.80 186.57,-7.29 187.52,-6.79 188.26,-6.01 189.00,-5.23 189.45,-4.25 189.90,-3.27 190.02,-2.20 190.13,-1.13 189.90,-0.08 189.67,0.96 189.12,1.88 188.56,2.80 187.74,3.50 186.92,4.19 185.92,4.59 184.92,4.99 183.85,5.05 182.78,5.10 181.74,4.82 180.70,4.53 179.81,3.92 178.92,3.32 178.27,2.46 177.62,1.61 177.28,0.59 176.93,-0.42 176.93,-1.50 176.93,-2.57 177.28,-3.59 177.62,-4.61 178.27,-5.47 178.92,-6.32 179.81,-6.93 180.70,-7.53 181.74,-7.82 182.78,-8.10 183.85,-8.05 184.93,-7.99 185.92,-7.59 186.92,-7.19 187.74,-6.49 188.56,-5.80 189.12,-4.88 189.67,-3.95 189.90,-2.90 190.13,-1.85 190.02,-0.78 189.90,0.28 189.45,1.25 189.00,2.23 188.26,3.01 187.52,3.79 186.57,4.29 185.62,4.80 184.55,4.97 183.49,5.14 183.49,5.14 183.49,5.14 179.57,5.07 175.64,5.00 171.97,5.02 168.31,5.04 165.39,5.01 162.47,4.98 160.26,4.92 158.04,4.86 155.31,4.80 152.57,4.74 149.10,4.70 145.63,4.67 143.36,4.70 141.09,4.73 137.65,4.69 134.22,4.64 132.00,4.67 129.78,4.69 125.75,4.73 121.73,4.76 119.07,4.68 116.42,4.60 113.40,4.47 110.37,4.35 107.73,4.04 105.09,3.73 101.66,3.61 98.22,3.50 95.11,3.34 91.99,3.17 88.32,2.98 84.66,2.79 82.07,2.73 79.47,2.67 77.09,2.58 74.71,2.48 72.15,2.39 69.59,2.29 66.95,2.19 64.30,2.08 61.13,2.04 57.96,2.00 55.23,1.88 52.49,1.77 49.44,1.69 46.38,1.61 42.58,1.73 38.79,1.84 35.10,2.04 31.41,2.24 27.47,2.44 23.54,2.65 19.21,2.87 14.87,3.10 12.01,3.10 9.15,3.11 4.70,3.59 0.26,4.07 -0.22,4.04 -0.71,4.01 -1.18,3.87 -1.66,3.72 -2.08,3.47 -2.50,3.22 -2.85,2.87 -3.20,2.52 -3.45,2.10 -3.71,1.68 -3.86,1.22 -4.01,0.75 -4.04,0.26 -4.07,-0.23 -3.98,-0.71 -3.90,-1.19 -3.70,-1.64 -3.50,-2.09 -3.19,-2.48 -2.89,-2.87 -2.51,-3.17 -2.12,-3.48 -1.67,-3.68 -1.22,-3.89 -0.74,-3.98 -0.26,-4.07 -0.26,-4.07 L -0.26,-4.07 Z"/></g><g transform="translate(278.6168476712331 55.5) rotate(0 69.5 -12.5)" stroke="none"><path fill="#1e1e1e" d="M -1.67,-3.71 Q -1.67,-3.71 2.85,-5.54 7.39,-7.38 12.56,-9.93 17.73,-12.48 22.14,-14.69 26.55,-16.90 30.85,-19.24 35.15,-21.57 38.73,-23.47 42.32,-25.38 45.49,-27.23 48.67,-29.08 50.83,-30.47 53.00,-31.86 55.80,-33.77 58.61,-35.67 61.27,-37.42 63.93,-39.16 66.33,-40.86 68.74,-42.55 70.88,-43.92 73.01,-45.29 75.11,-46.94 77.20,-48.58 79.51,-49.93 81.83,-51.28 84.18,-51.28 86.54,-51.28 90.31,-49.02 94.07,-46.77 97.15,-44.14 100.22,-41.50 102.93,-39.20 105.65,-36.90 108.67,-34.71 111.70,-32.53 113.97,-30.92 116.24,-29.30 118.35,-28.11 120.46,-26.92 122.80,-25.87 125.14,-24.82 127.73,-23.49 130.31,-22.17 133.01,-20.22 135.72,-18.28 137.94,-16.82 140.15,-15.36 142.50,-13.03 144.85,-10.70 143.67,-6.34 142.49,-1.99 140.38,0.18 138.28,2.36 135.98,3.75 133.69,5.13 131.71,6.54 129.72,7.95 127.77,8.82 125.82,9.69 123.89,10.88 121.96,12.07 118.92,13.65 115.88,15.24 113.34,16.48 110.80,17.73 107.86,18.99 104.92,20.25 102.79,21.17 100.67,22.10 98.11,22.94 95.54,23.79 93.25,24.78 90.96,25.77 88.14,26.79 85.32,27.81 82.99,27.87 80.65,27.93 78.32,27.93 75.99,27.94 73.27,27.94 70.55,27.93 66.20,27.09 61.85,26.25 59.39,25.46 56.94,24.67 54.81,24.06 52.68,23.45 50.38,22.66 48.08,21.88 43.93,20.55 39.77,19.23 35.96,18.07 32.15,16.92 29.56,16.13 26.97,15.34 24.07,14.58 21.16,13.82 18.61,12.95 16.06,12.08 12.78,12.05 9.49,12.03 8.37,11.84 7.25,11.66 6.24,11.13 5.24,10.59 4.45,9.77 3.67,8.94 3.19,7.91 2.72,6.87 2.59,5.74 2.47,4.61 2.72,3.50 2.96,2.39 3.55,1.41 4.14,0.44 5.00,-0.29 5.87,-1.02 6.93,-1.44 7.99,-1.87 9.12,-1.93 10.26,-1.99 11.35,-1.68 12.45,-1.38 13.39,-0.74 14.33,-0.10 15.02,0.80 15.71,1.70 16.07,2.78 16.44,3.86 16.44,5.00 16.44,6.14 16.07,7.21 15.71,8.29 15.02,9.20 14.33,10.10 13.39,10.74 12.45,11.38 11.35,11.68 10.25,11.99 9.12,11.93 7.98,11.86 6.92,11.44 5.87,11.02 5.00,10.28 4.13,9.55 3.55,8.57 2.96,7.60 2.72,6.48 2.47,5.37 2.59,4.24 2.72,3.11 3.20,2.08 3.68,1.04 4.46,0.22 5.24,-0.60 6.25,-1.13 7.25,-1.66 8.38,-1.85 9.50,-2.03 9.50,-2.03 9.50,-2.03 11.54,-2.01 13.59,-1.98 15.79,-1.60 17.99,-1.22 20.20,-0.57 22.41,0.08 24.61,0.84 26.81,1.60 28.92,2.28 31.03,2.96 33.48,3.80 35.93,4.65 39.61,5.70 43.29,6.76 45.75,7.37 48.22,7.98 52.10,9.09 55.97,10.20 58.36,10.70 60.75,11.21 62.82,11.70 64.89,12.19 68.78,12.62 72.67,13.05 74.99,13.05 77.31,13.06 79.96,13.24 82.61,13.42 85.66,12.11 88.71,10.81 90.81,9.99 92.92,9.18 95.13,8.47 97.34,7.76 100.21,6.50 103.08,5.24 105.22,4.33 107.36,3.42 110.10,2.18 112.84,0.93 114.81,-0.33 116.78,-1.59 119.58,-3.11 122.39,-4.64 124.49,-5.75 126.59,-6.86 128.60,-8.17 130.62,-9.49 132.99,-10.59 135.35,-11.68 135.17,-6.83 134.98,-1.97 133.17,-3.38 131.36,-4.80 129.41,-6.24 127.46,-7.68 124.75,-9.60 122.04,-11.52 119.67,-12.70 117.29,-13.89 114.55,-15.48 111.80,-17.07 109.17,-18.86 106.53,-20.65 104.10,-22.48 101.68,-24.32 98.34,-26.82 95.01,-29.33 92.14,-31.87 89.27,-34.42 87.77,-37.39 86.26,-40.36 84.21,-39.18 82.16,-38.01 80.34,-36.86 78.52,-35.72 76.19,-34.62 73.86,-33.52 71.28,-32.20 68.70,-30.89 65.77,-29.59 62.83,-28.29 59.60,-26.93 56.37,-25.58 54.07,-24.57 51.76,-23.56 48.46,-21.79 45.17,-20.02 41.65,-18.15 38.13,-16.27 33.83,-13.77 29.53,-11.26 25.21,-8.86 20.89,-6.46 15.66,-3.56 10.43,-0.66 6.05,1.52 1.67,3.71 1.20,3.85 0.73,4.00 0.24,4.03 -0.24,4.06 -0.72,3.97 -1.20,3.88 -1.65,3.68 -2.10,3.48 -2.48,3.18 -2.87,2.88 -3.17,2.49 -3.48,2.11 -3.68,1.66 -3.88,1.21 -3.97,0.73 -4.06,0.25 -4.03,-0.23 -4.00,-0.72 -3.86,-1.19 -3.71,-1.66 -3.46,-2.08 -3.20,-2.50 -2.86,-2.85 -2.51,-3.20 -2.09,-3.45 -1.67,-3.71 -1.67,-3.71 L -1.67,-3.71 Z"/></g></svg></div>
