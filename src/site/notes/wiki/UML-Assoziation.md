---
{"dg-publish":true,"permalink":"/wiki/uml-assoziation/","tags":["informatik/software","ausbildung/pruefung"],"noteIcon":"","updated":"2026-07-19T03:56:26.000+02:00","dg-note-properties":{"aliases":["UML-Assoziation","Assoziation"],"created_date":"2024-11-06","links":null,"tags":["informatik/software","ausbildung/pruefung"]}}
---

>Eine Assoziation ist eine Beziehung zwischen zwei Klassen, die anzeigt, dass Objekte der einen Klasse mit Objekten der anderen Klasse in Verbindung stehen.
>>Zwei Klassen werden mit einer **einfachen Linie** verbunden. Eine Klasse kann eine Referenz auf eine Instanz der anderen Klasse enthalten.

>[!summary] Kernpunkte
>**Assoziation** ist die allgemeinste Form einer Beziehung in UML:
>- Darstellung: **Einfache Linie** zwischen Klassen
>- Bedeutung: "kennt" oder "hat Referenz auf"
>- Keine Besitzbeziehung (im Gegensatz zu [[wiki/UML-Komposition\|UML-Komposition]])
>- Objekte können unabhängig voneinander existieren
>- Bidirektional oder unidirektional

## ASCII-Diagramm: UML-Assoziation

```
ASSOZIATION (EINFACHE BEZIEHUNG)

┌────────────────┐           ┌────────────────┐
│    STUDENT     │───────────│     KURS       │
├────────────────┤           ├────────────────┤
│ - name: String │           │ - titel: String│
│ - matrikel: int│           │ - credits: int │
├────────────────┤           ├────────────────┤
│ + belegen()    │           │ + starten()    │
└────────────────┘           └────────────────┘

BEDEUTUNG:
→ Student "kennt" Kurs
→ Einfache Linie = Assoziation
→ Keine Besitzbeziehung
→ Beide können unabhängig existieren
```

## Unidirektionale vs. Bidirektionale Assoziation

```
UNIDIREKTIONAL (Pfeil zeigt Navigationsrichtung)

┌────────────┐         ┌────────────┐
│  PERSON    │────────>│  ADRESSE   │
└────────────┘         └────────────┘
→ Person kennt Adresse
→ Adresse kennt Person NICHT


BIDIREKTIONAL (keine Pfeile oder Pfeile in beide Richtungen)

┌────────────┐         ┌────────────┐
│  KUNDE     │─────────│ BESTELLUNG │
└────────────┘         └────────────┘
→ Kunde kennt Bestellung
→ Bestellung kennt Kunde
```

## Multiplizität (Kardinalität)

```
MULTIPLIZITÄT BEI ASSOZIATIONEN

     1              *
┌─────────┐     ┌─────────┐
│ PERSON  │─────│  AUTO   │
└─────────┘     └─────────┘

Bedeutung:
1 = genau eine
* = beliebig viele (0..*)
0..1 = optional (0 oder 1)
1..* = mindestens eine

Beispiel:
→ Eine Person (1) besitzt mehrere (*) Autos
→ Ein Auto (*) gehört zu einer (1) Person
```

## Java-Code-Beispiel

```java
// ASSOZIATION: Student kennt Kurs

public class Student {
    private String name;
    private Kurs[] kurse;  // ← Assoziation (Referenz auf Kurs)

    public Student(String name) {
        this.name = name;
        this.kurse = new Kurs[10];
    }

    public void kursBesuchen(Kurs kurs) {
        // Student nimmt Kurs auf
        // Kurs existiert unabhängig vom Student
    }
}

public class Kurs {
    private String titel;

    public Kurs(String titel) {
        this.titel = titel;
    }
}

// VERWENDUNG
Kurs mathe = new Kurs("Mathematik");
Student anna = new Student("Anna");
anna.kursBesuchen(mathe);  // Assoziation

// Wenn anna gelöscht wird, existiert mathe weiter!
anna = null;
// mathe existiert noch
```

>[!important] Wichtig für AP2
>**Assoziation Merkmale:**
>- **Notation:** Einfache Linie (───) zwischen Klassen
>- **Bedeutung:** "kennt" / "hat Referenz auf"
>- **Unabhängigkeit:** Beide Objekte existieren unabhängig
>- **Keine Besitzbeziehung** (im Gegensatz zu [[wiki/UML-Komposition\|UML-Komposition]] oder [[wiki/UML-Aggregation\|UML-Aggregation]])
>
>**Unterschiede:**
>- **Assoziation:** ─── (einfache Linie)
>- **Aggregation:** ◇─── (leere Raute)
>- **Komposition:** ◆─── (gefüllte Raute)
>- **Vererbung:** ───▷ (leerer Pfeil)

>[!example] Praxis-Beispiel

```
BEISPIEL: BANK-SYSTEM

┌─────────────┐         ┌─────────────┐
│   KUNDE     │─────────│    KONTO    │
├─────────────┤    1  * ├─────────────┤
│ - name      │         │ - kontonr   │
│ - id        │         │ - saldo     │
└─────────────┘         └─────────────┘

→ Ein Kunde kann mehrere Konten haben
→ Wenn Kunde gelöscht wird, bleiben Konten bestehen
   (können anderen Kunden zugeordnet werden)
→ ASSOZIATION (keine Besitzbeziehung)
```

>[!tip] Praxis-Tipps für AP2
>1. **Assoziation = einfachste Beziehung** (nur Linie, keine Raute)
>2. **Test:** "Wenn A gelöscht wird, kann B weiter existieren?" → Ja = Assoziation
>3. **Typische Prüfungsfrage:** "Was ist der Unterschied zwischen Assoziation und Komposition?"
>   → Antwort: Bei Assoziation keine Besitzbeziehung, bei Komposition stirbt Teil mit Ganzem

## Verwandte Konzepte
- [[wiki/UML-Aggregation\|UML-Aggregation]] - Schwache Besitzbeziehung
- [[wiki/UML-Komposition\|UML-Komposition]] - Starke Besitzbeziehung
- [[wiki/Vererbung\|Vererbung]] - IS-A Beziehung
- [[wiki/Relationship\|Relationship]] - ER-Modell Beziehung
- [[wiki/UML-Klassendiagramm\|UML-Klassendiagramm]] - Übergeordnetes Konzept

<div class="excalidraw-svg"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 299.3174691777676 440.20501708984375" width="299.3174691777676" height="440.20501708984375" class="excalidraw-svg" style="max-width: 100%; height: auto;"><!-- svg-source:excalidraw --><metadata/><defs><style class="style-fonts">      @font-face { font-family: Excalifont; src: url(data:font/woff2;base64,d09GMgABAAAAAAbQAA4AAAAAC2wAAAZ9AAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGhYbgUwcNAZgAFwRCAqMPIlNCxIAATYCJAMgBCAFgxgHIBv4CFGUT1KV7GdCxZOJXjuS5NKWtmLHF17Ph/hT391H0qQwfwpuC1SQGUwTIbvbIyQlGiELhGQTFcGMSohCy6qk/wH8+0/qUnt9j6KkCGz7rlu6d9jfq7XCEypEKPD5v3fas3QN/ku0LZ7Hc2K3tj1s6FgUaIJpOLZtjDZ1Agk7aeDaMHZxGQIQgDFBNUUQIvZcgES4VthBk5oLx7VnJwMct051LXA8q7q0gyMWgH+j5qjr1A5iiGmwaJAgUPmxD4EuKnFE8P9Nmr3+32XbjUARlOdhtoQFxaQJ53AZFkFd61AIBEOueQBrIdazySUTwBFnFC0EkIIGIQsEv2jWxFzVpE3HAch1Lrr9G4WTRpJu7sB8ACBPP2H3PSJUyACsMS5XwtIFTUtcqxqlkKJKHYPO8+mRx7/6/4AdasqyWAQk3Q+pFgMA8/MFaE3yN7DSKPYrQ9Bzf9LhffQKA/82vAjPvvgfY3ENixqODokErqsz9USME2xyErJNGLvF6+GCvZ6yPQMDh6MS7jhPaFvDH1ZOw0pZOdyjknOOOIPsgUm1wwuZbMr+0ZEW6bQthJx2A5cp2Kkg401xEBvc3NyOq+dbPPr2o1cMImPs8RQ5l4g1kXCUJF03ir6Efij1ktYX9Z+K+sMY0j/1jV71R4UtLSstEz2HTdC8bM7Fd5hGSaj/pu5SKcmKfTwRdJt7y4H2m5hAx+Ns8EyMQnaiDFvPDZ+O7PFaGA6cT91vqTSwI+kjeXok4mgm7Phtv3cQOdbY9uABm5ychbtXfsinfG4KB8Z4JCHDR9X9urkkRFZkI1KyM49TZMajPpccIqmW+lyjLoT4IqzfE2QVxtlAqYCe33i+cDwqbepVNzuvtF5tC6v2tQ1JC1rSJyvqTT0RfzqXdir6/dDn8y3vWxqdyTtn1D0VmFB6nEtKvZaZwzl8nXi09UKDH2PRXcxW3Zo9XrWnch69mOTI505ZKSejC4VGDlmYypGlp3xoSK6UBc5HNsHNBptAtGdx8fF3G1JJufaXggoX4kU2WK9DlkZj+qJ2kn8WjWXFb3OQmWx93UVvfNFZMi2PTFGNsJ1pLTV+zAu7amuXm6/wssq8XF7wrevCL/NatfKndSkZRNp32GC9G6LdzMuVJ4RWO840pZYTDw/3IVKy8lm4LM1Cz4lzrWadXMp/5Tu4Kzpf31IbHoqC7qeH8k54UYe5UFL0qSpepObaeHTtkHpqf6Kt0ZiezCHTA1JmLDRlu1o3mysSxlL8YOIRZQgno/fkKSRT6GTSs9hK6/bVkMurButL5a7mvhYKy12xubN3dFApuEwT8/KBk/zfeQs25sp6657dtYyn0WwH81mxzta1TO/k7wMzOTv8SLZD6+E2mq4l8b9adzGS6uhNzPXNPHR9xd0e5yy2yjMS2/iN4G8o5l/Knu9CndbQJZKZXCppreo2OHNEa7vcEt26ke8iB74LU690SMkXvTiU2Wzta9958Nt1jz29T7PKwvyclN/mEzxWBc+36XZ5ojkO8Y/l9r5jm29k5NkEkkD1zuBaz4k6swyRRdOs2DOlJePs0u08S+zHmmawv8E11Ss0h70jV9rK/ZQdcxVlFtdJnzod00MUmczKJhdu7sA2OcJvPuJd39wqK9X+U82BjlmtfdmsIsbWRma4d9J0eXXqYKuBx28rO/l4Wj8almmblcEqAlRexa+6c52/yiUuNOeJbFxHG+vTQsNCDLSyO36P9LU3EUmkJxyp9FxwT1tnN9qfY7QSkxCTnaKpesKo3dcvNul1HPLR6qpPrPDaZcnGNlLnU5OjuoXMS1PkOcqjNNWXnPi2z0u9czjqwXyM2KzqprPJHsplfdhy/b5+Zej395vzPhbGKMofiSw6evTrBwAA4c/o+R7vVmGW+FUsZV4AwMOegSoAeLTode//Q96bfcXGARCjLTxfcKKyLBHvTx8Q2mPERTXUWQLQD9LUITRt4BsHOHmIyLjBHwGIXQcPACiApDNtQFsPkWIMUhoBMLiEkCGs7WMoUxsYRqBhDMtbNcNpxfsRPG+AWg81qhg0qddeO12EyFanQVcGVTrJV6eTzprKqt1FCBWuI4G2nPbUQSP6ce5kQgnc+ZMRCGIE9K7Hvb234VVyaKVLaNXOdC8NKl100LPEkUaDRsY1F9QIcCEIN4ORGNV6Mm1tUauT/353odzJGRi4tw93jgXrXFIX7IaraoViaLb+/8MBAA==); }</style></defs><rect x="0" y="0" width="299.3174691777676" height="440.20501708984375" fill="#ffffff"/><g stroke-linecap="round" transform="translate(16.459822839498486 10) rotate(0 135.06076049804688 74.70797729492188)"><path d="M37.35 0 C97.81 -2.03, 159.02 0.52, 232.77 0 M37.35 0 C104.99 -1.12, 173.07 -2.17, 232.77 0 M232.77 0 C257.09 1.2, 272.1 10.76, 270.12 37.35 M232.77 0 C259.41 1.85, 268.41 10.27, 270.12 37.35 M270.12 37.35 C267.85 57.04, 270.48 76.53, 270.12 112.06 M270.12 37.35 C270.98 66.28, 271.25 96.9, 270.12 112.06 M270.12 112.06 C268.94 138.71, 256.36 151.34, 232.77 149.42 M270.12 112.06 C269.56 138.72, 258.04 149.83, 232.77 149.42 M232.77 149.42 C165.46 148.92, 98.63 150, 37.35 149.42 M232.77 149.42 C168.06 149.6, 104.71 150.15, 37.35 149.42 M37.35 149.42 C10.74 148.04, -1.15 137.66, 0 112.06 M37.35 149.42 C13.53 147.8, -1.08 135.83, 0 112.06 M0 112.06 C1.71 86.73, 2.02 59.38, 0 37.35 M0 112.06 C0.19 88.42, 0.42 65.64, 0 37.35 M0 37.35 C-1.58 10.8, 11.61 -0.39, 37.35 0 M0 37.35 C-1.24 13.58, 10.85 0.11, 37.35 0" stroke="#000000" stroke-width="1" fill="none"/></g><g stroke-linecap="round"><g transform="translate(18.885176843404736 48.556610107421875) rotate(0 134.9762022357434 -1.4333636289089924)"><path d="M-0.48 0.13 C44.47 -0.04, 225.51 -1.02, 270.43 -1.17 M1.47 -0.84 C46.28 -1.35, 225.6 -2.71, 270.03 -3" stroke="#000000" stroke-width="1" fill="none"/></g></g><mask/><g transform="translate(111.42882316913452 14.497039794921875) rotate(0 37.129966735839844 12.5)"><text x="0" y="17.619999999999997" font-family="Excalifont, Xiaolai, sans-serif, Segoe UI Emoji" font-size="20px" fill="#1e1e1e" text-anchor="start" style="white-space: pre;" direction="ltr" dominant-baseline="alphabetic">KlasseA</text></g><g stroke-linecap="round" transform="translate(10 280.7890625) rotate(0 135.06076049804688 74.70797729492188)"><path d="M37.35 0 C106.73 -0.9, 174.72 0.21, 232.77 0 M37.35 0 C105.59 -0.27, 173.74 -0.17, 232.77 0 M232.77 0 C256.89 1.85, 270.87 11.03, 270.12 37.35 M232.77 0 C257.03 -0.63, 269.84 11.3, 270.12 37.35 M270.12 37.35 C268.41 62.21, 269.72 91.66, 270.12 112.06 M270.12 37.35 C270.26 65.69, 270.3 92.83, 270.12 112.06 M270.12 112.06 C268.64 135.17, 256.39 150.12, 232.77 149.42 M270.12 112.06 C268.65 137.43, 258.26 151.33, 232.77 149.42 M232.77 149.42 C177.91 148.1, 119.85 151.11, 37.35 149.42 M232.77 149.42 C188.46 150.81, 145.69 152.16, 37.35 149.42 M37.35 149.42 C14.34 150.33, -1.64 138.24, 0 112.06 M37.35 149.42 C11.13 147.23, -0.18 136.51, 0 112.06 M0 112.06 C-0.02 89.02, -0.92 65.5, 0 37.35 M0 112.06 C-0.16 95.01, 0.71 78.17, 0 37.35 M0 37.35 C1.33 12.04, 11.22 1.38, 37.35 0 M0 37.35 C-1.87 14.5, 10.19 1.07, 37.35 0" stroke="#000000" stroke-width="1" fill="none"/></g><g stroke-linecap="round"><g transform="translate(12.42535400390625 319.3456726074219) rotate(0 133.85835307650265 -0.8488283913582535)"><path d="M-1.17 -0.91 C43.75 -1.09, 223.92 -1.07, 268.88 -1.12 M0.42 1.22 C45.2 0.7, 222.56 -2.17, 267.67 -2.92" stroke="#000000" stroke-width="1" fill="none"/></g></g><mask/><g transform="translate(104.969000329636 285.2861022949219) rotate(0 37.97996520996094 12.5)"><text x="0" y="17.619999999999997" font-family="Excalifont, Xiaolai, sans-serif, Segoe UI Emoji" font-size="20px" fill="#1e1e1e" text-anchor="start" style="white-space: pre;" direction="ltr" dominant-baseline="alphabetic">KlasseB</text></g><g stroke-linecap="round"><g transform="translate(147.42882316913452 164.41595458984375) rotate(0 -0.5382855516507181 55.686553955078125)"><path d="M0 0 C-1.84 26.33, -1.64 52.62, 0 111.37 M0 0 C0.2 43.89, 0.4 89.12, 0 111.37" stroke="#1e1e1e" stroke-width="2" fill="none"/></g></g><mask/></svg></div>