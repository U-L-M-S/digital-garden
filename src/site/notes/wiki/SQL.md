---
{"dg-publish":true,"permalink":"/wiki/sql/","tags":["ausbildung/pruefung","informatik/datenbank"],"noteIcon":"","updated":"2026-07-19T03:56:26.000+02:00","dg-note-properties":{"aliases":["Structured Query Language","sql"],"created":"2024-06-25 15:35","links":null,"path":"Notes","tags":["ausbildung/pruefung","informatik/datenbank"]}}
---

>SQL (Structured Query Language) ist eine standardisierte Programmiersprache zur [[wiki/Verwaltung\|Verwaltung]] und Bearbeitung von Daten in relationalen Datenbanken.
>>Insgesamt ist SQL ein unverzichtbares Werkzeug für Entwickler und Datenanalysten, um mit Daten effizient zu arbeiten.

```
ASCII-Übersicht: SQL-Befehle

         ┌──────────────────────────────┐
         │      SQL BEFEHLE             │
         └──────────────────────────────┘
                     │
         ┌───────────┴───────────┐
         │                       │
    ┌────▼────┐            ┌─────▼─────┐
    │   DDL   │            │    DML    │
    │ (Data   │            │  (Data    │
    │ Def.)   │            │   Manip.) │
    └────┬────┘            └─────┬─────┘
         │                       │
    ┌────┴────┐          ┌───────┼───────┐
    │         │          │       │       │
  CREATE   ALTER      SELECT  INSERT  UPDATE
  DROP     TRUNCATE            DELETE

Datenfluss bei SQL-Operationen:

Anwendung                 SQL-Engine              Datenbank
    │                          │                       │
    │  SQL-Befehl senden       │                       │
    ├─────────────────────────>│                       │
    │                          │  Befehl parsen        │
    │                          ├─────────┐             │
    │                          │         │             │
    │                          │<────────┘             │
    │                          │  Zugriff auf Daten    │
    │                          ├──────────────────────>│
    │                          │                       │
    │                          │<──────────────────────┤
    │                          │  Daten zurück         │
    │  Ergebnis anzeigen       │                       │
    │<─────────────────────────┤                       │
    │                          │                       │
```

>[!summary] SQL-Grundoperationen (CRUD)
>- **C**reate: INSERT - Neue Daten einfügen
>- **R**ead: SELECT - Daten lesen/abfragen
>- **U**pdate: UPDATE - Bestehende Daten ändern
>- **D**elete: DELETE - Daten löschen

## SQL-Befehle nach Kategorie

<div class="excalidraw-svg"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 850 261.75" width="850" height="261.75" class="excalidraw-svg" style="max-width: 100%; height: auto; width: 860px;"><!-- svg-source:excalidraw --><metadata/><defs><style class="style-fonts">      @font-face { font-family: Cascadia; src: url(data:font/woff2;base64,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); }</style></defs><rect x="0" y="0" width="850" height="261.75" fill="#ffffff"/><g stroke-linecap="round" transform="translate(350 10) rotate(0 75 22)"><path d="M0 0 L150 0 L150 44 L0 44" stroke="none" stroke-width="0" fill="#ffec99"/><path d="M0 0 C37.72 0, 75.44 0, 150 0 M0 0 C37.19 0, 74.37 0, 150 0 M150 0 C150 13.89, 150 27.77, 150 44 M150 0 C150 10.38, 150 20.77, 150 44 M150 44 C99.63 44, 49.25 44, 0 44 M150 44 C113.21 44, 76.41 44, 0 44 M0 44 C0 32.05, 0 20.11, 0 0 M0 44 C0 28.82, 0 13.64, 0 0" stroke="#1e1e1e" stroke-width="2" fill="none"/></g><g transform="translate(362.17138671875 21) rotate(0 62.82861328125 10.625)"><text x="62.82861328125" y="15.21533203125" font-family="Helvetica, sans-serif, Segoe UI Emoji" font-size="17px" fill="#1e1e1e" text-anchor="middle" style="white-space: pre;" direction="ltr" dominant-baseline="alphabetic">SQL Commands</text></g><g stroke-linecap="round"><g transform="translate(425 54) rotate(0 -170 18)"><path d="M0 0 C-85.5 9.05, -171.01 18.11, -340 36 M0 0 C-114.2 12.09, -228.4 24.18, -340 36" stroke="#868e96" stroke-width="1" fill="none"/></g></g><mask/><g stroke-linecap="round"><g transform="translate(425 54) rotate(0 -85 18)"><path d="M0 0 C-42.75 9.05, -85.51 18.11, -170 36 M0 0 C-47.58 10.08, -95.16 20.15, -170 36" stroke="#868e96" stroke-width="1" fill="none"/></g></g><mask/><g stroke-linecap="round"><g transform="translate(425 54) rotate(0 0 18)"><path d="M0 0 C0 9.05, 0 18.11, 0 36 M0 0 C0 8.06, 0 16.12, 0 36" stroke="#868e96" stroke-width="1" fill="none"/></g></g><mask/><g stroke-linecap="round"><g transform="translate(425 54) rotate(0 85 18)"><path d="M0 0 C42.76 9.05, 85.51 18.11, 170 36 M0 0 C62.53 13.24, 125.07 26.48, 170 36" stroke="#868e96" stroke-width="1" fill="none"/></g></g><mask/><g stroke-linecap="round"><g transform="translate(425 54) rotate(0 170 18)"><path d="M0 0 C85.52 9.05, 171.03 18.11, 340 36 M0 0 C106.02 11.23, 212.05 22.45, 340 36" stroke="#868e96" stroke-width="1" fill="none"/></g></g><mask/><g stroke-linecap="round" transform="translate(10 90) rotate(0 75 25)"><path d="M0 0 L150 0 L150 50 L0 50" stroke="none" stroke-width="0" fill="#b2f2bb"/><path d="M0 0 C45.15 0, 90.31 0, 150 0 M0 0 C34.43 0, 68.85 0, 150 0 M150 0 C150 13, 150 26, 150 50 M150 0 C150 19.74, 150 39.47, 150 50 M150 50 C116.02 50, 82.05 50, 0 50 M150 50 C94.65 50, 39.31 50, 0 50 M0 50 C0 38, 0 26, 0 0 M0 50 C0 35.66, 0 21.32, 0 0" stroke="#1e1e1e" stroke-width="2" fill="none"/></g><g transform="translate(66.99560546875 104) rotate(0 18.00439453125 11.25)"><text x="18.00439453125" y="16.1103515625" font-family="Helvetica, sans-serif, Segoe UI Emoji" font-size="18px" fill="#1e1e1e" text-anchor="middle" style="white-space: pre;" direction="ltr" dominant-baseline="alphabetic">DDL</text></g><g transform="translate(49.84375 158) rotate(0 35.15625 46.875)"><text x="35.15625" y="14.5751953125" font-family="Cascadia, monospace, Segoe UI Emoji" font-size="15px" fill="#1e1e1e" text-anchor="middle" style="white-space: pre;" direction="ltr" dominant-baseline="alphabetic">CREATE</text><text x="35.15625" y="33.3251953125" font-family="Cascadia, monospace, Segoe UI Emoji" font-size="15px" fill="#1e1e1e" text-anchor="middle" style="white-space: pre;" direction="ltr" dominant-baseline="alphabetic">DROP</text><text x="35.15625" y="52.0751953125" font-family="Cascadia, monospace, Segoe UI Emoji" font-size="15px" fill="#1e1e1e" text-anchor="middle" style="white-space: pre;" direction="ltr" dominant-baseline="alphabetic">ALTER</text><text x="35.15625" y="70.8251953125" font-family="Cascadia, monospace, Segoe UI Emoji" font-size="15px" fill="#1e1e1e" text-anchor="middle" style="white-space: pre;" direction="ltr" dominant-baseline="alphabetic">TRUNCATE</text><text x="35.15625" y="89.5751953125" font-family="Cascadia, monospace, Segoe UI Emoji" font-size="15px" fill="#1e1e1e" text-anchor="middle" style="white-space: pre;" direction="ltr" dominant-baseline="alphabetic">RENAME</text></g><g stroke-linecap="round" transform="translate(180 90) rotate(0 75 25)"><path d="M0 0 L150 0 L150 50 L0 50" stroke="none" stroke-width="0" fill="#ffe8cc"/><path d="M0 0 C52.59 0, 105.17 0, 150 0 M0 0 C31.67 0, 63.33 0, 150 0 M150 0 C150 10.22, 150 20.43, 150 50 M150 0 C150 17.67, 150 35.34, 150 50 M150 50 C102.42 50, 54.85 50, 0 50 M150 50 C106.1 50, 62.2 50, 0 50 M0 50 C0 39.58, 0 29.15, 0 0 M0 50 C0 38.57, 0 27.15, 0 0" stroke="#1e1e1e" stroke-width="2" fill="none"/></g><g transform="translate(235.998046875 104) rotate(0 19.001953125 11.25)"><text x="19.001953125" y="16.1103515625" font-family="Helvetica, sans-serif, Segoe UI Emoji" font-size="18px" fill="#1e1e1e" text-anchor="middle" style="white-space: pre;" direction="ltr" dominant-baseline="alphabetic">DML</text></g><g transform="translate(228.6328125 158) rotate(0 26.3671875 37.5)"><text x="26.3671875" y="14.5751953125" font-family="Cascadia, monospace, Segoe UI Emoji" font-size="15px" fill="#1e1e1e" text-anchor="middle" style="white-space: pre;" direction="ltr" dominant-baseline="alphabetic">INSERT</text><text x="26.3671875" y="33.3251953125" font-family="Cascadia, monospace, Segoe UI Emoji" font-size="15px" fill="#1e1e1e" text-anchor="middle" style="white-space: pre;" direction="ltr" dominant-baseline="alphabetic">UPDATE</text><text x="26.3671875" y="52.0751953125" font-family="Cascadia, monospace, Segoe UI Emoji" font-size="15px" fill="#1e1e1e" text-anchor="middle" style="white-space: pre;" direction="ltr" dominant-baseline="alphabetic">DELETE</text><text x="26.3671875" y="70.8251953125" font-family="Cascadia, monospace, Segoe UI Emoji" font-size="15px" fill="#1e1e1e" text-anchor="middle" style="white-space: pre;" direction="ltr" dominant-baseline="alphabetic">MERGE</text></g><g stroke-linecap="round" transform="translate(350 90) rotate(0 75 25)"><path d="M0 0 L150 0 L150 50 L0 50" stroke="none" stroke-width="0" fill="#c3fae8"/><path d="M0 0 C30.02 0, 60.04 0, 150 0 M0 0 C58.91 0, 117.81 0, 150 0 M150 0 C150 17.44, 150 34.87, 150 50 M150 0 C150 15.61, 150 31.22, 150 50 M150 50 C118.82 50, 87.64 50, 0 50 M150 50 C117.55 50, 85.1 50, 0 50 M0 50 C0 31.15, 0 12.31, 0 0 M0 50 C0 31.48, 0 12.97, 0 0" stroke="#1e1e1e" stroke-width="2" fill="none"/></g><g transform="translate(407.99755859375 104) rotate(0 17.00244140625 11.25)"><text x="17.00244140625" y="16.1103515625" font-family="Helvetica, sans-serif, Segoe UI Emoji" font-size="18px" fill="#1e1e1e" text-anchor="middle" style="white-space: pre;" direction="ltr" dominant-baseline="alphabetic">TCL</text></g><g transform="translate(359.08203125 158) rotate(0 65.91796875 37.5)"><text x="65.91796875" y="14.5751953125" font-family="Cascadia, monospace, Segoe UI Emoji" font-size="15px" fill="#1e1e1e" text-anchor="middle" style="white-space: pre;" direction="ltr" dominant-baseline="alphabetic">COMMIT</text><text x="65.91796875" y="33.3251953125" font-family="Cascadia, monospace, Segoe UI Emoji" font-size="15px" fill="#1e1e1e" text-anchor="middle" style="white-space: pre;" direction="ltr" dominant-baseline="alphabetic">ROLLBACK</text><text x="65.91796875" y="52.0751953125" font-family="Cascadia, monospace, Segoe UI Emoji" font-size="15px" fill="#1e1e1e" text-anchor="middle" style="white-space: pre;" direction="ltr" dominant-baseline="alphabetic">SAVEPOINT</text><text x="65.91796875" y="70.8251953125" font-family="Cascadia, monospace, Segoe UI Emoji" font-size="15px" fill="#1e1e1e" text-anchor="middle" style="white-space: pre;" direction="ltr" dominant-baseline="alphabetic">SET TRANSACTION</text></g><g stroke-linecap="round" transform="translate(520 90) rotate(0 75 25)"><path d="M0 0 L150 0 L150 50 L0 50" stroke="none" stroke-width="0" fill="#fcc2d7"/><path d="M0 0 C37.45 0, 74.91 0, 150 0 M0 0 C56.15 0, 112.29 0, 150 0 M150 0 C150 14.65, 150 29.31, 150 50 M150 0 C150 13.55, 150 27.09, 150 50 M150 50 C105.22 50, 60.44 50, 0 50 M150 50 C99 50, 48 50, 0 50 M0 50 C0 32.73, 0 15.46, 0 0 M0 50 C0 34.4, 0 18.79, 0 0" stroke="#1e1e1e" stroke-width="2" fill="none"/></g><g transform="translate(576.99560546875 104) rotate(0 18.00439453125 11.25)"><text x="18.00439453125" y="16.1103515625" font-family="Helvetica, sans-serif, Segoe UI Emoji" font-size="18px" fill="#1e1e1e" text-anchor="middle" style="white-space: pre;" direction="ltr" dominant-baseline="alphabetic">DCL</text></g><g transform="translate(568.6328125 158) rotate(0 26.3671875 18.75)"><text x="26.3671875" y="14.5751953125" font-family="Cascadia, monospace, Segoe UI Emoji" font-size="15px" fill="#1e1e1e" text-anchor="middle" style="white-space: pre;" direction="ltr" dominant-baseline="alphabetic">GRANT</text><text x="26.3671875" y="33.3251953125" font-family="Cascadia, monospace, Segoe UI Emoji" font-size="15px" fill="#1e1e1e" text-anchor="middle" style="white-space: pre;" direction="ltr" dominant-baseline="alphabetic">REVOKE</text></g><g stroke-linecap="round" transform="translate(690 90) rotate(0 75 25)"><path d="M0 0 L150 0 L150 50 L0 50" stroke="none" stroke-width="0" fill="#ffc9c9"/><path d="M0 0 C44.89 0, 89.78 0, 150 0 M0 0 C53.39 0, 106.77 0, 150 0 M150 0 C150 11.87, 150 23.74, 150 50 M150 0 C150 11.48, 150 22.96, 150 50 M150 50 C91.62 50, 33.24 50, 0 50 M150 50 C110.45 50, 70.9 50, 0 50 M0 50 C0 34.31, 0 18.62, 0 0 M0 50 C0 37.31, 0 24.62, 0 0" stroke="#1e1e1e" stroke-width="2" fill="none"/></g><g transform="translate(746.49462890625 104) rotate(0 18.50537109375 11.25)"><text x="18.50537109375" y="16.1103515625" font-family="Helvetica, sans-serif, Segoe UI Emoji" font-size="18px" fill="#1e1e1e" text-anchor="middle" style="white-space: pre;" direction="ltr" dominant-baseline="alphabetic">DQL</text></g><g transform="translate(738.6328125 158) rotate(0 26.3671875 9.375)"><text x="26.3671875" y="14.5751953125" font-family="Cascadia, monospace, Segoe UI Emoji" font-size="15px" fill="#1e1e1e" text-anchor="middle" style="white-space: pre;" direction="ltr" dominant-baseline="alphabetic">SELECT</text></g></svg></div>

Alle SQL-Befehle lassen sich in **5 Kategorien** einteilen:

| Kürzel | Name | Aufgabe | Befehle |
| :--- | :--- | :--- | :--- |
| **DDL** | Data Definition Language | Datenbank-**Struktur** definieren | `CREATE` `DROP` `ALTER` `TRUNCATE` `RENAME` |
| **DML** | Data Manipulation Language | **Daten** bearbeiten | `INSERT` `UPDATE` `DELETE` `MERGE` |
| **TCL** | Transaction Control Language | **Transaktionen** steuern | `COMMIT` `ROLLBACK` `SAVEPOINT` `SET TRANSACTION` |
| **DCL** | Data Control Language | **Zugriffsrechte** steuern | `GRANT` `REVOKE` |
| **DQL** | Data Query Language | Daten **abfragen** | `SELECT` |

# Datenbank erstellen

Am besten fangen wir an, indem wir lernen, wie man eine [[wiki/SQL Datenbank\|SQL Datenbank]] erstellt.
```sql
CREATE DATABASE schule;
USE schule;
```

<div class="excalidraw-svg"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 146.59807164296012 255.05470415381916" width="146.59807164296012" height="255.05470415381916" class="excalidraw-svg" style="max-width: 100%; height: auto;"><!-- svg-source:excalidraw --><metadata/><defs><style class="style-fonts">      @font-face { font-family: Excalifont; src: url(data:font/woff2;base64,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); }</style></defs><rect x="0" y="0" width="146.59807164296012" height="255.05470415381916" fill="#ffffff"/><g stroke-linecap="round" transform="translate(12.322844482755556 52.0727483972081) rotate(0 61.9382470030902 52.334457274682165)"><path d="M41.51 2.66 C49.73 -0.69, 61.76 -1.51, 71.28 -0.24 C80.79 1.02, 90.7 5.33, 98.58 10.24 C106.46 15.15, 114.29 21.99, 118.55 29.21 C122.81 36.44, 124.52 45.46, 124.14 53.59 C123.75 61.72, 121.06 70.77, 116.23 78 C111.39 85.22, 103.29 92.45, 95.12 96.92 C86.95 101.4, 76.56 104.33, 67.23 104.87 C57.9 105.41, 47.8 103.26, 39.13 100.16 C30.46 97.06, 21.53 92.55, 15.23 86.27 C8.94 80, 3.46 70.54, 1.35 62.52 C-0.76 54.49, 0.19 45.89, 2.59 38.12 C5 30.35, 8.51 22.1, 15.78 15.91 C23.05 9.72, 40.57 3.18, 46.22 0.97 C51.86 -1.24, 49.51 1.81, 49.63 2.67 M44.92 0.79 C53.86 -1.69, 66.36 0.1, 76.05 1.91 C85.73 3.73, 96.02 6.45, 103.02 11.67 C110.02 16.88, 114.76 25.85, 118.06 33.2 C121.36 40.56, 123.73 47.73, 122.83 55.79 C121.94 63.84, 117.62 74.43, 112.68 81.54 C107.73 88.65, 101.46 94.66, 93.16 98.44 C84.87 102.22, 72.64 103.97, 62.89 104.24 C53.15 104.51, 43.27 103.53, 34.69 100.06 C26.11 96.59, 17.07 89.83, 11.4 83.44 C5.74 77.05, 2.07 69.81, 0.7 61.73 C-0.67 53.65, 0.11 42.87, 3.18 34.97 C6.25 27.07, 12.34 19.91, 19.12 14.33 C25.9 8.76, 39.26 3.38, 43.86 1.51 C48.47 -0.36, 46.13 2.43, 46.75 3.11" stroke="#1e1e1e" stroke-width="2" fill="none"/></g><g stroke-linecap="round"><g transform="translate(11.867416195968133 90.78415277413956) rotate(0 -0.3020860992460541 64.6856867893573)"><path d="M0.58 0.71 C0.33 22.27, -0.29 107.93, -0.63 129.33 M-0.57 0.04 C-1 21.28, -0.91 106.49, -1.18 127.68" stroke="#1e1e1e" stroke-width="2" fill="none"/></g></g><mask/><g stroke-linecap="round"><g transform="translate(135.62453668160765 91.72206328874063) rotate(0 -0.18778007456074874 64.23724374374115)"><path d="M0.76 0.47 C0.79 21.81, -0.14 107.34, -0.6 128.81 M-0.29 -0.33 C-0.29 20.57, -0.68 105.6, -1.14 126.88" stroke="#1e1e1e" stroke-width="2" fill="none"/></g></g><mask/><g stroke-linecap="round"><g transform="translate(13.009352379320035 134.5654770453491) rotate(0 61.002408677160204 13.101713107935552)"><path d="M-0.08 -1.14 C10.85 3.41, 44.15 26.76, 64.76 27.34 C85.37 27.91, 113.75 6.46, 123.59 2.28 M-1.58 0.87 C9.23 5.1, 42.87 25.24, 63.62 25.7 C84.37 26.15, 112.8 7.32, 122.91 3.6" stroke="#1e1e1e" stroke-width="2" fill="none"/></g></g><mask/><g stroke-linecap="round"><g transform="translate(12.098495805745074 159.1586045318702) rotate(0 60.774618645689856 13.546146334701064)"><path d="M0.06 0.59 C10.77 5.29, 43.86 26.93, 64.33 27.23 C84.81 27.53, 112.95 6.56, 122.91 2.41 M-1.36 -0.14 C9.72 4.31, 46.09 24.88, 66.63 25.54 C87.17 26.19, 112.19 7.47, 121.88 3.79" stroke="#1e1e1e" stroke-width="2" fill="none"/></g></g><mask/><g stroke-linecap="round"><g transform="translate(12.098495805745074 189.67229974662786) rotate(0 61.37413940055521 13.25593475405293)"><path d="M-0.51 -0.93 C10.54 3.51, 45.19 27.03, 65.82 27.43 C86.45 27.84, 113.5 5.81, 123.26 1.51 M1.42 1.2 C12.41 5.25, 45.08 25.64, 65.24 25.85 C85.41 26.05, 112.42 6.33, 122.41 2.42" stroke="#1e1e1e" stroke-width="2" fill="none"/></g></g><mask/><g stroke-linecap="round"><g transform="translate(11.035251672565948 217.80422316080097) rotate(0 61.16856832130105 13.229405120699965)"><path d="M-1.04 0.17 C9.8 4.8, 44.57 26.91, 65.3 27.25 C86.04 27.58, 113.55 6.3, 123.37 2.17 M0.62 -0.79 C11.29 3.56, 44.12 24.86, 64.45 25.56 C84.77 26.26, 112.51 7.08, 122.58 3.43" stroke="#1e1e1e" stroke-width="2" fill="none"/></g></g><mask/><g transform="translate(23.34570718903501 10) rotate(0 46.999969482421875 11.385707169685702)"><text x="0" y="16.049292826388957" font-family="Excalifont, Xiaolai, sans-serif, Segoe UI Emoji" font-size="18.217131471497115px" fill="#1e1e1e" text-anchor="start" style="white-space: pre;" direction="ltr" dominant-baseline="alphabetic">Datenbank</text></g><g transform="translate(49.42994327935867 91.29782270722865) rotate(0 30.02997589111328 12.5)"><text x="0" y="17.619999999999997" font-family="Excalifont, Xiaolai, sans-serif, Segoe UI Emoji" font-size="20px" fill="#1e1e1e" text-anchor="start" style="white-space: pre;" direction="ltr" dominant-baseline="alphabetic">Schule</text></g></svg></div>

# Tabellen erstellen

>[!info] Als nächstes erstellen wir ein paar [[wiki/SQL Tabelle\|SQL Tabelle]]n.

```sql
CREATE TABLE Schueler (
    schueler_id INT PRIMARY KEY,      -- Primärschlüssel
    vorname VARCHAR(50),
    nachname VARCHAR(50),
    geburtsdatum DATE
);
```

```sql
CREATE TABLE Kurse (
    kurs_id INT PRIMARY KEY,          -- Primärschlüssel
    kurs_name VARCHAR(100),
    lehrer_name VARCHAR(100)
);
```

```sql
CREATE TABLE Einschreibung (
    einschreibung_id INT PRIMARY KEY, -- Primärschlüssel
    schueler_id INT,                  -- Fremdschlüssel zu Schueler
    kurs_id INT,                      -- Fremdschlüssel zu Kurse
    einschreibedatum DATE,
    FOREIGN KEY (schueler_id) REFERENCES Schueler(schueler_id),
    FOREIGN KEY (kurs_id) REFERENCES Kurse(kurs_id)
);
```

<div class="excalidraw-svg"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 544.918906428572 480.5" width="544.918906428572" height="480.5" class="excalidraw-svg" style="max-width: 100%; height: auto;"><!-- svg-source:excalidraw --><metadata/><defs><style class="style-fonts">      @font-face { font-family: Excalifont; src: url(data:font/woff2;base64,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); }</style></defs><rect x="0" y="0" width="544.918906428572" height="480.5" fill="#ffffff"/><g stroke-linecap="round" transform="translate(12.544165811320113 156.38973548260086) rotate(0 61.9382470030902 52.334457274682194)"><path d="M59.89 0.22 C69.07 -0.87, 79.97 1.69, 88.47 5.14 C96.98 8.6, 105.26 14.66, 110.94 20.94 C116.62 27.22, 121.05 34.86, 122.58 42.82 C124.1 50.77, 123.01 60.64, 120.1 68.66 C117.2 76.68, 111.84 85.44, 105.15 90.94 C98.46 96.43, 89.25 99.45, 79.96 101.64 C70.67 103.82, 58.82 105.47, 49.42 104.04 C40.01 102.61, 30.98 98.08, 23.54 93.06 C16.1 88.04, 8.63 81.56, 4.78 73.93 C0.93 66.3, -0.2 55.48, 0.44 47.3 C1.07 39.13, 3.38 31.47, 8.59 24.87 C13.79 18.27, 22.65 11.92, 31.66 7.71 C40.67 3.51, 57.2 0.88, 62.65 -0.35 C68.1 -1.57, 64.44 -0.54, 64.34 0.36 M42.69 2.49 C51.04 -0.4, 63.12 -0.99, 72.8 0.31 C82.49 1.6, 93.33 5.09, 100.8 10.27 C108.27 15.44, 113.67 23.74, 117.63 31.36 C121.59 38.98, 124.91 48.18, 124.56 55.99 C124.21 63.81, 120.72 71.26, 115.55 78.27 C110.39 85.28, 101.73 93.51, 93.56 98.06 C85.39 102.6, 76.25 105.24, 66.53 105.53 C56.81 105.82, 44.28 103.29, 35.26 99.82 C26.25 96.35, 18.14 90.99, 12.43 84.7 C6.73 78.41, 2.83 70.29, 1.03 62.08 C-0.77 53.87, -1.32 43.38, 1.63 35.45 C4.59 27.52, 11.95 19.9, 18.76 14.48 C25.56 9.07, 38.1 4.91, 42.44 2.95 C46.78 0.98, 44.33 1.95, 44.82 2.71" stroke="#1e1e1e" stroke-width="2" fill="none"/></g><g stroke-linecap="round"><g transform="translate(12.08873752453269 195.1011398595323) rotate(0 -1.0955614510220357 64.25049396310207)"><path d="M-0.1 -0.64 C-0.28 21.01, -1.04 107.61, -1.22 129.15 M-1.62 1.63 C-1.92 23.02, -2.06 106.01, -2.09 127.4" stroke="#1e1e1e" stroke-width="2" fill="none"/></g></g><mask/><g stroke-linecap="round"><g transform="translate(135.8458580101722 196.03905037413338) rotate(0 -0.9232517479401992 65.11333575448228)"><path d="M0.15 0.71 C-0.03 22.25, -0.93 107.37, -1.16 128.57 M-1.23 0.04 C-1.54 21.85, -1.89 108.69, -1.99 130.18" stroke="#1e1e1e" stroke-width="2" fill="none"/></g></g><mask/><g stroke-linecap="round"><g transform="translate(13.230673707884591 238.88246413074185) rotate(0 61.229779387537775 13.178147938123232)"><path d="M0.21 0.14 C11.07 4.34, 44.73 25.64, 65.3 25.91 C85.86 26.17, 114.11 5.77, 123.6 1.71 M-1.14 -0.83 C9.56 3.46, 43.76 26.58, 64.44 27.18 C85.12 27.77, 113.36 6.88, 122.93 2.73" stroke="#1e1e1e" stroke-width="2" fill="none"/></g></g><mask/><g stroke-linecap="round"><g transform="translate(12.31981713430963 263.4755916172629) rotate(0 61.646673576275276 12.638795864288518)"><path d="M0.17 -0.51 C11.02 3.77, 44.96 25.51, 65.3 25.84 C85.65 26.18, 112.56 5.41, 122.22 1.52 M-1.2 -1.82 C9.49 2.6, 43.5 26.37, 64.45 27.08 C85.4 27.79, 114.66 6.33, 124.49 2.44" stroke="#1e1e1e" stroke-width="2" fill="none"/></g></g><mask/><g stroke-linecap="round"><g transform="translate(12.31981713430963 293.9892868320205) rotate(0 61.04141249132567 13.114695842620412)"><path d="M0.18 -0.57 C10.8 3.79, 43.41 25.14, 63.93 25.66 C84.44 26.17, 113.17 6.28, 123.27 2.51 M-1.19 1.74 C9.77 6.29, 45.41 26.43, 66.01 26.79 C86.61 27.16, 113.14 8.27, 122.43 3.96" stroke="#1e1e1e" stroke-width="2" fill="none"/></g></g><mask/><g stroke-linecap="round"><g transform="translate(11.256573001130505 322.12121024619364) rotate(0 61.68017938545199 12.95333818206839)"><path d="M-1.2 -0.76 C9.6 3.78, 44.02 26.02, 64.98 26.65 C85.94 27.29, 115 7.17, 124.56 3.05 M0.37 1.46 C10.99 5.66, 43.28 24.71, 63.95 24.65 C84.62 24.6, 114.72 4.75, 124.39 1.12" stroke="#1e1e1e" stroke-width="2" fill="none"/></g></g><mask/><g transform="translate(23.567028517599567 114.31698708539275) rotate(0 46.999969482421875 11.385707169685702)"><text x="0" y="16.049292826388957" font-family="Excalifont, Xiaolai, sans-serif, Segoe UI Emoji" font-size="18.217131471497115px" fill="#1e1e1e" text-anchor="start" style="white-space: pre;" direction="ltr" dominant-baseline="alphabetic">Datenbank</text></g><g transform="translate(49.651264607923224 195.6148097926214) rotate(0 30.02997589111328 12.5)"><text x="0" y="17.619999999999997" font-family="Excalifont, Xiaolai, sans-serif, Segoe UI Emoji" font-size="20px" fill="#1e1e1e" text-anchor="start" style="white-space: pre;" direction="ltr" dominant-baseline="alphabetic">Schule</text></g><g stroke-linecap="round" transform="translate(282.8534726582563 44) rotate(0 124 47.5)"><path d="M23.75 0 C95.51 -0.72, 169.37 0.31, 224.25 0 M23.75 0 C71.32 1.55, 119.93 1.05, 224.25 0 M224.25 0 C240.54 -1.44, 246.73 8.18, 248 23.75 M224.25 0 C241.35 0.24, 249.26 5.72, 248 23.75 M248 23.75 C249.49 36.58, 248.12 51.12, 248 71.25 M248 23.75 C247.17 38.48, 248.25 54.13, 248 71.25 M248 71.25 C246.06 87.99, 240.83 94.26, 224.25 95 M248 71.25 C247.5 87.49, 240.5 95.68, 224.25 95 M224.25 95 C173.59 92.3, 123.63 92.67, 23.75 95 M224.25 95 C154.86 94.05, 84.18 93.68, 23.75 95 M23.75 95 C8.1 94.78, -1.63 88.35, 0 71.25 M23.75 95 C8 93.81, 0.29 85.03, 0 71.25 M0 71.25 C1.49 56.92, 1.52 41.45, 0 23.75 M0 71.25 C0.86 55.9, -0.53 39.84, 0 23.75 M0 23.75 C-1 7.93, 7.2 -1.65, 23.75 0 M0 23.75 C0.89 7.26, 6.01 -0.33, 23.75 0" stroke="#1e1e1e" stroke-width="2" fill="none"/></g><g stroke-linecap="round"><g transform="translate(335.8534726582563 44) rotate(0 -0.06892551530152602 46.836450880058095)"><path d="M-0.17 -0.11 C-0.24 15.65, -0.67 77.84, -0.74 93.58 M-1.72 -1.22 C-1.37 14.8, 1.58 78.73, 1.58 94.89" stroke="#1e1e1e" stroke-width="2" fill="none"/></g></g><mask/><g stroke-linecap="round"><g transform="translate(402.92239817355784 44.16354911994188) rotate(0 0.048082199147081894 46.63810801432467)"><path d="M0.29 -0.52 C0.35 14.86, 1.17 77.28, 1.11 92.86 M-1.01 1.82 C-1.08 17.26, 0.72 78.48, 0.74 93.8" stroke="#1e1e1e" stroke-width="2" fill="none"/></g></g><mask/><g stroke-linecap="round"><g transform="translate(469.8053904591092 42.3618919856753) rotate(0 -0.148118726420428 47.78732782134787)"><path d="M0.25 0.7 C0.18 16.2, -1.06 78.39, -1.19 94.01 M-1.07 0.02 C-0.73 16.25, 0.98 80.17, 0.89 95.55" stroke="#1e1e1e" stroke-width="2" fill="none"/></g></g><mask/><g stroke-linecap="round"><g transform="translate(282.8534726582563 66) rotate(0 124.5519662277028 -0.952101491708305)"><path d="M0.92 0.52 C42.15 0.37, 205.97 -0.2, 246.99 -0.54 M-0.06 -0.25 C41.57 -0.8, 207.59 -2.39, 249.17 -2.42" stroke="#1e1e1e" stroke-width="2" fill="none"/></g></g><mask/><g stroke-linecap="round"><g transform="translate(282.3015064305535 90.95210149170828) rotate(0 124.18793190999887 -0.6012169603258428)"><path d="M1.12 0.4 C42.57 0.06, 206.82 -1.44, 248.13 -1.6 M0.25 -0.43 C41.61 -0.67, 205.83 0, 247.25 -0.38" stroke="#1e1e1e" stroke-width="2" fill="none"/></g></g><mask/><g stroke-linecap="round"><g transform="translate(282.30150643055345 112.95210149170828) rotate(0 123.65371861099264 -0.7780797247495599)"><path d="M0.47 1.11 C41.8 0.8, 206.92 -0.2, 248.05 -0.7 M-0.75 0.64 C40.42 0.47, 205.38 -2.38, 247.13 -2.66" stroke="#1e1e1e" stroke-width="2" fill="none"/></g></g><mask/><g transform="translate(282.8534726582563 10) rotate(0 39.51996612548828 12.5)"><text x="0" y="17.619999999999997" font-family="Excalifont, Xiaolai, sans-serif, Segoe UI Emoji" font-size="20px" fill="#1e1e1e" text-anchor="start" style="white-space: pre;" direction="ltr" dominant-baseline="alphabetic">Schueler</text></g><g stroke-linecap="round" transform="translate(286.91890642857203 375.5) rotate(0 124 47.5)"><path d="M23.75 0 C96.96 2.07, 172.11 0.89, 224.25 0 M23.75 0 C89.26 -1.23, 153.32 -0.37, 224.25 0 M224.25 0 C240.19 1.98, 248.07 8.97, 248 23.75 M224.25 0 C240.9 1.03, 247.64 7.52, 248 23.75 M248 23.75 C246.85 35.11, 249.1 45.77, 248 71.25 M248 23.75 C247.2 36.11, 246.96 48.26, 248 71.25 M248 71.25 C246.71 88.89, 239.53 94.01, 224.25 95 M248 71.25 C249.55 87.71, 239.88 93.69, 224.25 95 M224.25 95 C176.67 96.48, 130.84 96.7, 23.75 95 M224.25 95 C155.64 95.69, 87.19 95.52, 23.75 95 M23.75 95 C7.83 96.44, -1.45 88.1, 0 71.25 M23.75 95 C7.95 95.78, 0.32 88.63, 0 71.25 M0 71.25 C1.63 63.01, -0.02 52.44, 0 23.75 M0 71.25 C-0.7 60.03, -0.01 49.86, 0 23.75 M0 23.75 C0.29 6.43, 7.37 1.03, 23.75 0 M0 23.75 C1.4 9.78, 6.62 2.17, 23.75 0" stroke="#1e1e1e" stroke-width="2" fill="none"/></g><g stroke-linecap="round"><g transform="translate(339.91890642857203 375.5) rotate(0 0.31470352738816487 46.38166637123562)"><path d="M0.19 -0.31 C0.29 15.54, -0.52 78.52, -0.6 94.28 M-1.17 -1.52 C-0.57 14.02, 1.8 76.11, 1.8 92.3" stroke="#1e1e1e" stroke-width="2" fill="none"/></g></g><mask/><g stroke-linecap="round"><g transform="translate(406.9878319438735 375.6635491199419) rotate(0 -0.0322868723608547 46.809398904005064)"><path d="M-0.6 0.28 C-0.67 16.04, -0.52 78.81, -0.27 94.24 M1.29 -0.62 C1.02 14.78, -1.24 76.54, -1.36 92.24" stroke="#1e1e1e" stroke-width="2" fill="none"/></g></g><mask/><g stroke-linecap="round"><g transform="translate(473.87082422942495 373.8618919856753) rotate(0 0.7776471628444241 46.5416511769034)"><path d="M-0.27 0.24 C-0.02 15.66, 0.88 77.22, 0.9 92.84 M1.79 -0.68 C2.02 14.82, 0.89 77.77, 0.43 93.77" stroke="#1e1e1e" stroke-width="2" fill="none"/></g></g><mask/><g stroke-linecap="round"><g transform="translate(286.91890642857203 397.5) rotate(0 123.90182910143398 -0.21171383609348382)"><path d="M0.9 -1.16 C42.26 -1.37, 206.69 -1.24, 247.88 -1.02 M-0.08 0.84 C41.13 0.82, 205.64 0.9, 246.87 0.51" stroke="#1e1e1e" stroke-width="2" fill="none"/></g></g><mask/><g stroke-linecap="round"><g transform="translate(286.3669402008692 422.4521014917083) rotate(0 123.21228226288221 -0.5485489106901156)"><path d="M-0.12 -0.02 C41.08 0.21, 206.7 0.25, 248.06 0.19 M-1.64 -1.07 C39.32 -1.05, 205.66 -1.09, 247.15 -1.31" stroke="#1e1e1e" stroke-width="2" fill="none"/></g></g><mask/><g stroke-linecap="round"><g transform="translate(286.3669402008692 444.4521014917083) rotate(0 123.3378952076938 -0.4851135344710187)"><path d="M0.06 1.19 C41.42 1.13, 206.65 -0.09, 248.04 -0.37 M-1.37 0.77 C39.85 0.36, 205.57 -1.61, 247.12 -2.16" stroke="#1e1e1e" stroke-width="2" fill="none"/></g></g><mask/><g transform="translate(286.91890642857203 341.5) rotate(0 68.47994232177734 12.5)"><text x="0" y="17.619999999999997" font-family="Excalifont, Xiaolai, sans-serif, Segoe UI Emoji" font-size="20px" fill="#1e1e1e" text-anchor="start" style="white-space: pre;" direction="ltr" dominant-baseline="alphabetic">Einschreibung </text></g><g stroke-linecap="round" transform="translate(284.94781290750973 211.5) rotate(0 124 47.5)"><path d="M23.75 0 C83.67 2.19, 148.63 -0.39, 224.25 0 M23.75 0 C84.74 -1.76, 144.37 -0.01, 224.25 0 M224.25 0 C240.68 0.39, 247.17 7.25, 248 23.75 M224.25 0 C241.19 -1.9, 246.86 7.81, 248 23.75 M248 23.75 C248.96 34.5, 247.51 43.83, 248 71.25 M248 23.75 C248.11 36.68, 249.01 49.24, 248 71.25 M248 71.25 C248.53 88.94, 240.63 93.43, 224.25 95 M248 71.25 C248.45 87.3, 237.87 95.07, 224.25 95 M224.25 95 C159.06 95.24, 96.07 94.93, 23.75 95 M224.25 95 C165.98 93.86, 107.51 94.23, 23.75 95 M23.75 95 C9.34 95.33, 0.4 86.64, 0 71.25 M23.75 95 C7.4 93.25, -2.23 86.3, 0 71.25 M0 71.25 C-1.85 60.24, 1.63 49.24, 0 23.75 M0 71.25 C0.66 61.2, 0.05 51.74, 0 23.75 M0 23.75 C0.76 8.62, 9.62 -0.18, 23.75 0 M0 23.75 C-1.17 7.32, 6.91 0.04, 23.75 0" stroke="#1e1e1e" stroke-width="2" fill="none"/></g><g stroke-linecap="round"><g transform="translate(354.94781290750973 213.5) rotate(0 0.09976846163646869 48.157477625198666)"><path d="M0.73 1.2 C0.69 17.04, -1.02 78.43, -0.99 94 M-0.35 0.78 C0.04 16.92, 1.05 80.24, 1.19 95.54" stroke="#1e1e1e" stroke-width="2" fill="none"/></g></g><mask/><g stroke-linecap="round"><g transform="translate(455.0167384228112 215.66354911994188) rotate(0 -0.06602108515799188 46.77337495578453)"><path d="M-0.99 0 C-0.97 15.57, 0.51 79.12, 0.86 94.59 M0.68 -1.05 C0.56 14.67, 0.33 77.02, 0.37 92.78" stroke="#1e1e1e" stroke-width="2" fill="none"/></g></g><mask/><g stroke-linecap="round"><g transform="translate(284.94781290750973 233.5) rotate(0 124.34058801578358 -0.24945164095610295)"><path d="M1.12 -1.17 C42.38 -1.24, 207.23 0.11, 248.44 0.17 M0.24 0.84 C41.31 0.41, 206.46 -1.31, 247.72 -1.33" stroke="#1e1e1e" stroke-width="2" fill="none"/></g></g><mask/><g stroke-linecap="round"><g transform="translate(284.39584667980694 258.4521014917083) rotate(0 123.78291017295793 -0.7973946682086677)"><path d="M0.44 1.17 C41.64 1.24, 207.18 -0.34, 248.36 -0.77 M-0.79 0.74 C40.19 0.53, 206.39 -2.6, 247.6 -2.77" stroke="#1e1e1e" stroke-width="2" fill="none"/></g></g><mask/><g stroke-linecap="round"><g transform="translate(284.39584667980694 280.4521014917083) rotate(0 123.29520278053359 -0.5846214111894383)"><path d="M0.36 0.23 C41.54 -0.2, 206.13 -1.03, 247.5 -1.4 M-0.91 -0.69 C40.03 -0.44, 204.79 0.01, 246.29 -0.07" stroke="#1e1e1e" stroke-width="2" fill="none"/></g></g><mask/><g transform="translate(284.94781290750973 177.5) rotate(0 26.22997283935547 12.5)"><text x="0" y="17.619999999999997" font-family="Excalifont, Xiaolai, sans-serif, Segoe UI Emoji" font-size="20px" fill="#1e1e1e" text-anchor="start" style="white-space: pre;" direction="ltr" dominant-baseline="alphabetic">Kurse</text></g><g transform="translate(291.16711079149684 48.97075753167911) rotate(0 20.10729217529297 7.022045640146473)"><text x="0" y="9.898275534350471" font-family="Excalifont, Xiaolai, sans-serif, Segoe UI Emoji" font-size="11.235273024234361px" fill="#3600fa" text-anchor="start" style="white-space: pre;" direction="ltr" dominant-baseline="alphabetic">PK_key</text></g><g transform="translate(301.7749832519261 215.75008565953723) rotate(0 20.10729217529297 7.022045640146473)"><text x="0" y="9.898275534350471" font-family="Excalifont, Xiaolai, sans-serif, Segoe UI Emoji" font-size="11.235273024234361px" fill="#3600fa" text-anchor="start" style="white-space: pre;" direction="ltr" dominant-baseline="alphabetic">PK_key</text></g><g transform="translate(295.3132151957844 380.3587213427616) rotate(0 20.10729217529297 7.022045640146477)"><text x="0" y="9.898275534350471" font-family="Excalifont, Xiaolai, sans-serif, Segoe UI Emoji" font-size="11.235273024234361px" fill="#3600fa" text-anchor="start" style="white-space: pre;" direction="ltr" dominant-baseline="alphabetic">PK_key</text></g><g transform="translate(294.61085819358965 403.40903862961557) rotate(0 19.215057373046875 6.552404531022901)"><text x="0" y="9.23626942692988" font-family="Excalifont, Xiaolai, sans-serif, Segoe UI Emoji" font-size="10.48384724963664px" fill="#12d957" text-anchor="start" style="white-space: pre;" direction="ltr" dominant-baseline="alphabetic">FR_key</text></g><g transform="translate(294.1949279577098 426.4565034035197) rotate(0 19.215057373046875 6.552404531022901)"><text x="0" y="9.23626942692988" font-family="Excalifont, Xiaolai, sans-serif, Segoe UI Emoji" font-size="10.48384724963664px" fill="#12d957" text-anchor="start" style="white-space: pre;" direction="ltr" dominant-baseline="alphabetic">FR_key</text></g><g stroke-linecap="round"><g transform="translate(134.27823279190181 261.16522224760524) rotate(0 74.04573837605281 -84.82037327233019)"><path d="M-0.77 -0.7 C24.18 -29.09, 123.79 -140.88, 148.86 -169.17 M1.03 1.54 C25.89 -26.72, 123.21 -142.65, 147.93 -171.18" stroke="#1e1e1e" stroke-width="2" fill="none"/></g></g><mask/><g stroke-linecap="round"><g transform="translate(135.92266997550888 260.7541129517035) rotate(0 74.76594353706078 -3.7151379289772493)"><path d="M0.77 1.11 C25.84 -0.48, 124.95 -7.08, 149.82 -8.54 M-0.29 0.64 C24.7 -0.82, 124.01 -5.26, 148.97 -6.95" stroke="#1e1e1e" stroke-width="2" fill="none"/></g></g><mask/><g stroke-linecap="round"><g transform="translate(136.3337792714106 259.10967576809645) rotate(0 74.87432129382819 81.97274866542612)"><path d="M-1.06 0.73 C24.27 28, 125.64 136.81, 150.8 163.88 M0.59 0.07 C25.93 26.93, 125.49 134.53, 150.25 161.89" stroke="#1e1e1e" stroke-width="2" fill="none"/></g></g><mask/><g stroke-linecap="round"><g transform="translate(286.16711079149684 55.89280317182556) rotate(0 -15.920981764649262 177.01006246871606)"><path d="M0 0 C-5.47 -0.48, -12.92 1.24, -19 0 M0 0 C-4.68 -0.47, -8.55 -0.4, -19 0 M-19 0 C-30.97 1.53, -36.67 6.46, -35 16 M-19 0 C-27.47 0.18, -34.25 7.56, -35 16 M-35 16 C-34.26 118.41, -34.12 220.76, -35 337.97 M-35 16 C-34.42 102.98, -34.26 190.46, -35 337.97 M-35 337.97 C-33.37 346.67, -29.15 354.16, -19 353.97 M-35 337.97 C-35.08 350.07, -28.65 353.05, -19 353.97 M-19 353.97 C-9.42 355.06, -3.72 353.37, 3.44 353.97 M-19 353.97 C-13.66 353.56, -6.98 354.98, 3.44 353.97" stroke="#6741d9" stroke-width="1" fill="none"/></g><g transform="translate(286.16711079149684 55.89280317182556) rotate(0 -15.920981764649262 177.01006246871606)"><path d="M-14.31 361.33 C-7.65 358.53, -2.93 357.83, 3.44 353.97 M-14.31 361.33 C-10.43 359.46, -5.67 357.8, 3.44 353.97" stroke="#6741d9" stroke-width="1" fill="none"/></g><g transform="translate(286.16711079149684 55.89280317182556) rotate(0 -15.920981764649262 177.01006246871606)"><path d="M-14.89 348.19 C-7.92 349.75, -3.01 353.41, 3.44 353.97 M-14.89 348.19 C-10.76 349.41, -5.87 350.83, 3.44 353.97" stroke="#6741d9" stroke-width="1" fill="none"/></g></g><mask/><g stroke-linecap="round"><g transform="translate(279.94781290750973 222.93205772874123) rotate(0 -13.648688745233684 105.31029700731956)"><path d="M0 0 C-6.83 -0.05, -10.57 0.61, -19 0 M0 0 C-8.46 0.41, -14.87 0.08, -19 0 M-19 0 C-28.12 1.39, -33.76 4.59, -35 16 M-19 0 C-27.86 -1.07, -33.92 6.51, -35 16 M-35 16 C-33.45 85.38, -34.71 153.93, -35 193.98 M-35 16 C-37.16 86.24, -36.96 155.65, -35 193.98 M-35 193.98 C-33.93 204.3, -29.14 210.75, -19 209.98 M-35 193.98 C-36.52 206.76, -29.47 210.32, -19 209.98 M-19 209.98 C-12.19 209.18, -7.52 212, 9.25 209.98 M-19 209.98 C-7.96 209.51, 2.13 210.06, 9.25 209.98" stroke="#6741d9" stroke-width="1" fill="none"/></g><g transform="translate(279.94781290750973 222.93205772874123) rotate(0 -13.648688745233684 105.31029700731956)"><path d="M-11.6 217.39 C-6.47 214.77, 1.91 213.23, 9.25 209.98 M-11.6 217.39 C-4.42 215.14, 4.98 211.87, 9.25 209.98" stroke="#6741d9" stroke-width="1" fill="none"/></g><g transform="translate(279.94781290750973 222.93205772874123) rotate(0 -13.648688745233684 105.31029700731956)"><path d="M-11.49 202.26 C-6.4 204.2, 1.94 207.22, 9.25 209.98 M-11.49 202.26 C-4.21 205.99, 5.14 208.7, 9.25 209.98" stroke="#6741d9" stroke-width="1" fill="none"/></g></g><mask/></svg></div>

>[!info] Die [[wiki/SQL Tabelle\|SQL Tabelle]]n wurden erstellt, sind aber noch leer.

# Werten in die Tabellen einsetzen

>Mit [[wiki/SQL INSERT\|SQL INSERT]] können wir [[wiki/SQL Zeile\|SQL Zeile]]n in die [[wiki/SQL Spalte\|SQL Spalte]]n einsetzen.

```sql
INSERT INTO Schueler (schueler_id, vorname, nachname, geburtsdatum) VALUES
(1, 'Max', 'Muster', '2005-04-15'),
(2, 'Anna', 'Beispiel', '2006-05-20'),
(3, 'Tom', 'Schneider', '2004-08-12'),
(4, 'Lisa', 'Müller', '2005-11-01');
```

```sql
INSERT INTO Kurse (kurs_id, kurs_name, lehrer_name) VALUES
(1, 'Mathematik', 'Schmidt'),
(2, 'Deutsch', 'Müller'),
(3, 'Biologie', 'Wagner'),
(4, 'Chemie', 'Schmidt');
```

```sql
INSERT INTO Einschreibung (einschreibung_id, schueler_id, kurs_id, einschreibedatum) VALUES
(1, 1, 1, '2023-09-01')
(2, 1, 2, '2023-09-01'),
(3, 2, 1, '2023-09-01'), 
(4, 3, 3, '2023-09-01'),  
(5, 4, 4, '2023-09-01');  
```

So sehen die [[wiki/SQL Tabelle\|SQL Tabelle]]n aus (in Tabell Format):

Schueler:

| schueler_id | vorname | nachname  | geburtsdatum |
| :---------: | :-----: | :-------: | :----------: |
|      1      |   Max   |  Muster   |  2005-04-15  |
|      2      |  Anna   | Beispiel  |  2006-05-20  |
|      3      |   Tom   | Schneider |  2004-08-12  |
|      4      |  Lisa   |  Müller   |  2005-11-01  |

Kurse:
 
| kurs_id | kurs_name  | lehrer_name |
| :-----: | :--------: | :---------: |
|    1    | Mathematik |   Schmidt   |
|    2    |  Deutsch   |   Müller    |
|    3    |  Biologie  |   Wagner    |
|    4    |   Chemie   |   Schmidt   |

Einschreibung:

| einschreibung_id | schueler_id | kurs_id | einschreibedatum |
| :--------------: | :---------: | :-----: | :--------------: |
|        1         |      1      |    1    |    2023-09-01    |
|        2         |      1      |    2    |    2023-09-01    |
|        3         |      2      |    1    |    2023-09-01    |
|        4         |      3      |    3    |    2023-09-01    |
|        5         |      4      |    4    |    2023-09-01    |

>[!note] 
>Jetzt wissen wir, wie man eine Datenbank erstellt und wie man Tabellen erstellt.
>Nun.... Wie lesen wir die Werte?
>>Das lernen wir gleich 😊



# Tabellen bearbeiten - ALTER

>[!info] 
>Mit [[wiki/SQL ALTER\|SQL ALTER]] kannst du die Struktur einer bereits existierenden [[wiki/SQL Tabelle\|SQL Tabelle]] ändern.
>>Du kannst [[wiki/SQL Spalte\|SQL Spalte]]n hinzufügen, entfernen, umbenennen oder deren Datentyp ändern.

## Spalte hinzufügen
```sql
ALTER TABLE Schueler 
ADD email VARCHAR(100);
````

> [!example] Unsere Schueler-Tabelle bekommt jetzt eine neue Spalte "email":

|schueler_id|vorname|nachname|geburtsdatum|email|
|:-:|:-:|:-:|:-:|:-:|
|1|Max|Muster|2005-04-15|NULL|
|2|Anna|Beispiel|2006-05-20|NULL|
|3|Tom|Schneider|2004-08-12|NULL|
|4|Lisa|Müller|2005-11-01|NULL|

## Spalte entfernen

```sql
ALTER TABLE Schueler 
DROP COLUMN email;
```

## Spalte umbenennen

```sql
ALTER TABLE Schueler 
RENAME COLUMN vorname TO first_name;
```

## Datentyp ändern

```sql
ALTER TABLE Schueler 
MODIFY nachname VARCHAR(75);
```

> [!important] Bei [[wiki/SQL ALTER\|SQL ALTER]] solltest du vorsichtig sein! Änderungen an der Tabellenstruktur können Daten verloren gehen lassen. Mache immer ein Backup bevor du ALTER verwendest.

> [!note] [[wiki/SQL ALTER\|SQL ALTER]] ist besonders nützlich wenn deine [[wiki/SQL Datenbank\|SQL Datenbank]] bereits produktiv läuft und du nachträglich Änderungen brauchst.

```

Diese Ergänzung fügt sich nahtlos in deine bestehende SQL-Notiz ein und folgt deinem Stil mit praktischen Beispielen und der gleichen Formatierung.
```


# Werten anpassen / updaten

> [!info] Mit [[wiki/SQL UPDATE\|SQL UPDATE]] kannst du bereits existierende Daten in einer [[wiki/SQL Tabelle\|SQL Tabelle]] ändern.
> 
> > Du bearbeitest die Werte in den [[wiki/SQL Spalte\|SQL Spalte]]n, ohne neue [[wiki/SQL Zeile\|SQL Zeile]]n hinzuzufügen.

```sql
UPDATE Schueler 
SET vorname = 'Maximilian' 
WHERE schueler_id = 1;
```

> [!example] Vorher:

| schueler_id | vorname | nachname | geburtsdatum |
| :---------: | :-----: | :------: | :----------: |
|      1      |   Max   |  Muster  |  2005-04-15  |
|      2      |  Anna   | Beispiel |  2006-05-20  |

> [!example] Nachher:

| schueler_id |  vorname   | nachname | geburtsdatum |
| :---------: | :--------: | :------: | :----------: |
|      1      | Maximilian |  Muster  |  2005-04-15  |
|      2      |    Anna    | Beispiel |  2006-05-20  |

## Mehrere Spalten gleichzeitig ändern

```sql
UPDATE Schueler 
SET vorname = 'Maximilian', 
    nachname = 'Mustermann' 
WHERE schueler_id = 1;
```

## Alle Zeilen ändern

```sql
UPDATE Kurse 
SET lehrer_name = 'Neu';
```

> [!important] Ohne [[wiki/SQL WHERE\|SQL WHERE]] wird **ALLES** geändert! Immer WHERE verwenden, außer du willst wirklich alle [[wiki/SQL Zeile\|SQL Zeile]]n ändern.

> [!note] [[wiki/SQL UPDATE\|SQL UPDATE]] ändert nur existierende Daten. Für neue Daten nutze [[wiki/SQL INSERT\|SQL INSERT]].


# Werten löschen / entfernen

> [!info] Mit [[wiki/SQL DELETE\|SQL DELETE]] kannst du komplette [[wiki/SQL Zeile\|SQL Zeile]]n aus einer [[wiki/SQL Tabelle\|SQL Tabelle]] entfernen.
> 
> > Du löschst ganze Datensätze, nicht nur einzelne [[wiki/SQL Spalte\|SQL Spalte]]n.

```sql
DELETE FROM Schueler 
WHERE schueler_id = 1;
```

> [!example] Vorher:

| schueler_id | vorname | nachname  | geburtsdatum |
| :---------: | :-----: | :-------: | :----------: |
|      1      |   Max   |  Muster   |  2005-04-15  |
|      2      |  Anna   | Beispiel  |  2006-05-20  |
|      3      |   Tom   | Schneider |  2004-08-12  |

> [!example] Nachher:

| schueler_id | vorname | nachname  | geburtsdatum |
| :---------: | :-----: | :-------: | :----------: |
|      2      |  Anna   | Beispiel  |  2006-05-20  |
|      3      |   Tom   | Schneider |  2004-08-12  |

## Mehrere Zeilen löschen

```sql
DELETE FROM Schueler 
WHERE YEAR(geburtsdatum) < 2005;
```

## Alle Zeilen löschen

```sql
DELETE FROM Kurse;
```

> [!important] Ohne [[wiki/SQL WHERE\|SQL WHERE]] wird **ALLES** gelöscht! Die [[wiki/SQL Tabelle\|SQL Tabelle]] bleibt bestehen, aber komplett leer.

> [!note] [[wiki/SQL DELETE\|SQL DELETE]] löscht komplette Datensätze. Für einzelne [[wiki/SQL Spalte\|SQL Spalte]]n nutze [[wiki/SQL UPDATE\|SQL UPDATE]] mit NULL.

# Werte aus den Tabellen extrahieren
>Bevor wir anfangen, ist es wichtig zu verstehen, wie [[wiki/SQL\|SQL]] unter der Haube funktioniert.
>>Es ist dir wahrscheinlich aufgefallen, dass [[wiki/SQL\|SQL]] mit [[wiki/SQL Tabelle\|SQL Tabelle]]n arbeitet.  
>>Jede [[wiki/SQL Tabelle\|SQL Tabelle]] hat ihre eigenen [[wiki/SQL Spalte\|SQL Spalte]]n ([[wiki/Variable\|Variable]]n) und kann mit [[wiki/SQL SELECT\|SQL SELECT]] und [[wiki/SQL FROM\|SQL FROM]] abgefragt werden.

```sql
SELECT *
FROM Tabellename;
```


In unserem Bsp würde es so aussehen:
```sql
SELECT *
FROM Schueler;
``` 

| schueler_id | vorname | nachname  | geburtsdatum |
| :---------: | :-----: | :-------: | :----------: |
|      1      |   Max   |  Muster   |  2005-04-15  |
|      2      |  Anna   | Beispiel  |  2006-05-20  |
|      3      |   Tom   | Schneider |  2004-08-12  |
|      4      |  Lisa   |  Müller   |  2005-11-01  |

>[!info] [[wiki/SQL WHERE\|SQL WHERE]]
>Es ist das **IF** in [[wiki/SQL\|SQL]].

>Alle Schüler, die vor 2005 geboren sind:

```sql
SELECT vorname, nachname, geburtsdatum
FROM Schueler
WHERE geburtsdatum <= '2005-12-31';
```

**ODER**

```sql
SELECT vorname, nachname, geburtsdatum
FROM Schueler
WHERE YEAR(geburtsdatum) <= 2005;
```

___
>[!info] 
>Jetzt, wo du die Grundlagen von SQL gelernt hast,
>ist es Zeit für die Vertiefung des Themas.
>>Ab hier wirst du bestimmte Anweisungen, Syntax und noch viel mehr lernen.

# SQL Algorithmus
>Es gibt unendlich viele Wege, um eine Aufgabe in SQL zu lösen.
>Ich zeige dir, wie **ich** es immer mache.

Patient:

| patient_ID | first_name | last_name | birthdate  |
| ---------- | ---------- | --------- | ---------- |
| 1          | Max        | Müller    | 1980-01-15 |
| 2          | Maria      | Doe       | 1975-09-10 |
| 3          | Lux        | Schmitz   | 1992-05-22 |
Weight:

| weight_ID | patient_ID | date       | kg   |
| --------- | ---------- | ---------- | ---- |
| 1         | 1          | 2024-10-10 | 82.5 |
| 2         | 1          | 2024-11-15 | 80.0 |
| 3         | 2          | 2024-10-05 | 68.4 |
| 4         | 3          | 2024-10-12 | 90.2 |

>[!note] Aufgabe
>Erstelle eine SQL-Abfrage, die den Vornamen, Nachnamen, das Datum und das Gewicht (kg) jedes Patienten anzeigt.

1. Welche [[wiki/SQL Spalte\|SQL Spalte]]n sind hier gefragt ?
   >Vorname, Nachname, Datum und KG
   >>Diese füge ich in den [[wiki/SQL SELECT\|SQL SELECT]] ein.
   
```sql
SELECT Patient.first_name, Patient.last_name, Weight.date, Weight.kg
```
   
| patient_ID | <mark style="background: #FFF3A3A6;">first_name</mark> | <mark style="background: #FFF3A3A6;">last_name</mark> | birthdate  |
| ---------- | ------------------------------------------------------ | ----------------------------------------------------- | ---------- |
| 1          | Max                                                    | Müller                                                | 1980-01-15 |
| 2          | Maria                                                  | Doe                                                   | 1975-09-10 |
| 3          | Lux                                                    | Schmitz                                               | 1992-05-22 |

| weight_ID | patient_ID | <mark style="background: #FFF3A3A6;">date</mark> | <mark style="background: #FFF3A3A6;">kg</mark> |
| --------- | ---------- | ------------------------------------------------ | ---------------------------------------------- |
| 1         | 1          | 2024-10-10                                       | 82.5                                           |
| 2         | 1          | 2024-11-15                                       | 80.0                                           |
| 3         | 2          | 2024-10-05                                       | 68.4                                           |
| 4         | 3          | 2024-10-12                                       | 90.2                                           |
2. Welche Tabellen werden hier benötigt?
   >Patient und Weight
   >>Diese füge ich in den [[wiki/SQL FROM\|SQL FROM]] ein.
   
```sql
SELECT Patient.first_name, Patient.last_name, Weight.date, Weight.kg
FROM Patient, Weight
```

3. Welche Bedingungen müssen erfüllt werden?
   >Bei dieser Aufgabe müssen die `patient_ID` und `weight_ID` übereinstimmen.
   >>Diese Bedingung kommt in den [[wiki/SQL WHERE\|SQL WHERE]].
   
```sql
SELECT Patient.first_name, Patient.last_name, Weight.date, Weight.kg
FROM Patient, Weight
WHERE Patient.patient_ID = Weight.patient_ID; 
```

>[!note] und das war's!!!

## JOINs
>Wir haben gelernt, dass man mit [[wiki/SQL FROM\|SQL FROM]] und [[wiki/SQL WHERE\|SQL WHERE]] eine Verbindung zwischen [[wiki/SQL Tabelle\|SQL Tabelle]] herstellen kann, indem man die [[wiki/Primary Key\|Primärschlüssel]] verwendet, um nur die relevanten [[wiki/Datensatz\|Datensätze]] zu filtern. 
>>Im Vergleich dazu ermöglicht ein **[[wiki/INNER JOIN\|INNER JOIN]]** eine klarere und effizientere Methode zur Verknüpfung von Tabellen, indem die Beziehung zwischen ihnen explizit definiert wird, wodurch die Abfrage lesbarer und die Verarbeitungsgeschwindigkeit optimiert wird.


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/wiki/sql-join/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




>JOINs in [[wiki/SQL\|SQL]] sind Befehle, um [[wiki/SQL Tabelle\|SQL Tabelle]]n miteinander zu verbinden.
>>Mit JOINs kann man spezifische Verknüpfungen zwischen Tabellen herstellen, wie [[wiki/INNER JOIN\|INNER JOIN]], [[wiki/LEFT JOIN\|LEFT JOIN]] und [[wiki/RIGHT JOIN\|RIGHT JOIN]], die es ermöglichen, Daten gezielt auszuwählen und nur die relevanten Zeilen anzuzeigen.
>><mark style="background: #FFF3A3A6;">Dies verbessert nicht nur die Lesbarkeit der Abfragen, sondern auch die Effizienz, da nur die notwendigen Daten verarbeitet werden.</mark>
>>Durch die Verwendung von JOINs wird die Datenbankabfrage klar strukturiert, was die Wartung und das Verständnis der Abfragen erleichtert.

```
JOIN-Typen Übersicht:

          Tabelle A          Tabelle B
          ┌────────┐         ┌────────┐
          │   A    │         │   B    │
          └────────┘         └────────┘
               │                  │
               └────────┬─────────┘
                        │
         ┌──────────────┼──────────────┐
         │              │              │
    ┌────▼────┐    ┌───▼────┐    ┌───▼─────┐
    │ INNER   │    │ LEFT   │    │ RIGHT   │
    │ JOIN    │    │ JOIN   │    │ JOIN    │
    └─────────┘    └────────┘    └─────────┘

Visuelle Darstellung - INNER JOIN:

Tabelle A: Schueler          Tabelle B: Kurse
┌────┬─────────┐             ┌────┬──────────┐
│ ID │ Name    │             │ ID │ Kursname │
├────┼─────────┤             ├────┼──────────┤
│ 1  │ Max     │             │ 1  │ Math     │
│ 2  │ Anna    │             │ 2  │ Deutsch  │
└────┴─────────┘             └────┴──────────┘
       │                            │
       └─────────┬──────────────────┘
                 │
      Tabelle C: Einschreibung
      ┌───────────┬─────────┐
      │ SchuelerID│ KursID  │
      ├───────────┼─────────┤
      │     1     │    1    │
      │     1     │    2    │
      │     2     │    1    │
      └───────────┴─────────┘

SELECT Schueler.Name, Kurse.Kursname
FROM Schueler
INNER JOIN Einschreibung ON Schueler.ID = Einschreibung.SchuelerID
INNER JOIN Kurse ON Einschreibung.KursID = Kurse.ID;

Ergebnis:
┌─────────┬──────────┐
│ Name    │ Kursname │
├─────────┼──────────┤
│ Max     │ Math     │
│ Max     │ Deutsch  │
│ Anna    │ Math     │
└─────────┴──────────┘

Venn-Diagramme der JOINs:

INNER JOIN:              LEFT JOIN:               RIGHT JOIN:
  ┌───┐ ┌───┐           ┌───┐ ┌───┐              ┌───┐ ┌───┐
  │ A │ │ B │           │ A │ │ B │              │ A │ │ B │
  └─┬─┘ └─┬─┘           └─┬─┘ └─┬─┘              └─┬─┘ └─┬─┘
    │ ███ │               │████████                ███████ │
    └─────┘               └─────┘                  └─────┘
   Nur         Alles von A +      Alles von B +
   Überschneidung  Überschneidung   Überschneidung

FULL OUTER JOIN:         CROSS JOIN:
  ┌───┐ ┌───┐           ┌───┐ ┌───┐
  │ A │ │ B │           │ A │ │ B │
  └─┬─┘ └─┬─┘           └─┬─┘ └─┬─┘
████████████              Jede Zeile von A
                         mit jeder Zeile von B
```

## Die JOIN-Typen

>[!summary] Übersicht
>- **[[wiki/INNER JOIN\|INNER JOIN]]**: Nur übereinstimmende Zeilen
>- **[[wiki/LEFT JOIN\|LEFT JOIN]]**: Alle Zeilen von links + Übereinstimmungen
>- **[[wiki/RIGHT JOIN\|RIGHT JOIN]]**: Alle Zeilen von rechts + Übereinstimmungen
>- **FULL OUTER JOIN**: Alle Zeilen von beiden Tabellen
>- **CROSS JOIN**: Kartesisches Produkt (jede mit jeder)

## Syntax-Vergleich

>[!example] INNER JOIN
>```sql
>SELECT s.name, k.kursname
>FROM Schueler s
>INNER JOIN Kurse k ON s.kurs_id = k.id;
>```

>[!example] LEFT JOIN
>```sql
>SELECT s.name, k.kursname
>FROM Schueler s
>LEFT JOIN Kurse k ON s.kurs_id = k.id;
>```

>[!example] Alte Syntax (mit WHERE)
>```sql
>-- Funktioniert, aber NICHT empfohlen
>SELECT s.name, k.kursname
>FROM Schueler s, Kurse k
>WHERE s.kurs_id = k.id;
>```

>[!important] Prüfungsrelevant
>**JOIN vs WHERE:**
>- JOIN ist EXPLIZIT und LESBAR
>- WHERE ist IMPLIZIT und schwerer zu verstehen
>- Moderne SQL nutzt JOIN
>
>**Wichtigste JOIN-Typen:**
>1. **INNER JOIN**: Standard, nur Übereinstimmungen
>2. **LEFT JOIN**: Wichtig für "auch wenn keine Zuordnung"
>3. **RIGHT JOIN**: Selten genutzt (meist umgedreht als LEFT)
>
>**ON vs USING:**
>- `ON`: Flexibel, verschiedene Spaltennamen
>- `USING`: Nur wenn Spalten gleich heißen

>[!tip] Best Practices
>1. **Tabellen-Aliase verwenden**
>   ```sql
>   FROM Schueler s  -- ✓ Kurz und lesbar
>   JOIN Kurse k     -- ✓
>   ```
>
>2. **JOIN statt WHERE**
>   ```sql
>   -- ✓ RICHTIG
>   FROM A JOIN B ON A.id = B.a_id
>
>   -- ✗ VERALTET
>   FROM A, B WHERE A.id = B.a_id
>   ```
>
>3. **Reihenfolge beachten**
>   - Größte Tabelle zuerst
>   - Dann kleinere Tabellen joinen

>[!note] Siehe auch
>- [[wiki/INNER JOIN\|INNER JOIN]] - Nur Übereinstimmungen
>- [[wiki/LEFT JOIN\|LEFT JOIN]] - Alle von links
>- [[wiki/RIGHT JOIN\|RIGHT JOIN]] - Alle von rechts
>- [[wiki/How to multiple Joins\|How to multiple Joins]]
>- [[wiki/SQL FROM\|SQL FROM]] - Tabellen auswählen
>- [[wiki/SQL WHERE\|SQL WHERE]] - Filtern nach JOIN

</div></div>


## GROUP BY

<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/wiki/sql-group-by/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




> Befehl wird verwendet, um [[wiki/SQL Zeile\|SQL Zeile]]n zu gruppieren, die gleiche Werte in bestimmten [[wiki/SQL Spalte\|SQL Spalte]]n haben. Oft mit Aggregatfunktionen wie COUNT, SUM, AVG verwendet.

```sql
-- Grundlegende Gruppierung
SELECT Spalte_Name, COUNT(*)
FROM Tabell_Name
GROUP BY Spalte_Name;
```

```sql
-- Mit mehreren Spalten
SELECT Spalte1, Spalte2, COUNT(*)
FROM Tabell_Name
GROUP BY Spalte1, Spalte2;
```

```sql
-- Mit Aggregatfunktionen
SELECT lehrer_name, COUNT(*) as anzahl_kurse
FROM Kurse
GROUP BY lehrer_name;
```

> [!note] GROUP BY fasst gleiche Werte zusammen und zählt/berechnet sie.


</div></div>


## Having

<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/wiki/sql-having/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




> Befehl wird verwendet, um Bedingungen auf gruppierte Daten anzuwenden. Funktioniert wie [[wiki/SQL WHERE\|SQL WHERE]], aber für [[wiki/SQL GROUP BY\|SQL GROUP BY]] Ergebnisse.

```sql
-- Grundlegende HAVING Bedingung
SELECT Spalte_Name, COUNT(*)
FROM Tabell_Name
GROUP BY Spalte_Name
HAVING COUNT(*) > 1;
```

```sql
-- Mit verschiedenen Aggregatfunktionen
SELECT lehrer_name, COUNT(*) as anzahl
FROM Kurse
GROUP BY lehrer_name
HAVING COUNT(*) >= 2;
```

```sql
-- Kombiniert mit WHERE
SELECT spalte, AVG(wert)
FROM tabelle
WHERE bedingung = 'wert'
GROUP BY spalte
HAVING AVG(wert) > 50;
```

> [!note] WHERE filtert vor GROUP BY, HAVING filtert nach GROUP BY.

</div></div>
