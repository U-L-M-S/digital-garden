---
{"dg-publish":true,"permalink":"/wiki/uml-aktivitaetsdiagramm/","tags":["ausbildung/pruefung","informatik/software"],"noteIcon":"","updated":"2026-07-19T03:56:26.000+02:00","dg-note-properties":{"aliases":["Aktivitätsdiagramm","Activity Diagram"],"created_date":"2025-02-21","links":null,"tags":["ausbildung/pruefung","informatik/software"]}}
---


>Das [[wiki/UML-Aktivitätsdiagramm\|UML-Aktivitätsdiagramm]] zeigt den Ablauf von Aktivitäten in einem System. Es ist wie ein Flussdiagramm für Geschäftsprozesse.

>>Mit einem [[wiki/UML-Aktivitätsdiagramm\|UML-Aktivitätsdiagramm]] kann man darstellen, welche Schritte nacheinander oder parallel ablaufen.

# I. Was ist ein Aktivitätsdiagramm?

>Es zeigt, was in welcher Reihenfolge passiert.

>[!note] Wofür braucht man es?
>**Verwendung:**
>- Ablauf von Geschäftsprozessen zeigen
>- Workflows dokumentieren
>- Algorithmen visualisieren
>- Parallel ablaufende Prozesse darstellen
>
>**Beispiele:**
>- Bestellprozess in einem Online-Shop
>- Login-Vorgang einer App
>- Produktionsablauf in einer Fabrik
>- Genehmigungsverfahren

# II. Die wichtigsten Elemente

>Diese Symbole brauchst du für ein [[wiki/UML-Aktivitätsdiagramm\|UML-Aktivitätsdiagramm]].

## Syntax
<div class="excalidraw-svg"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1035 1219.5" width="1035" height="1219.5" class="excalidraw-svg" style="max-width: 100%; height: auto;"><!-- svg-source:excalidraw --><metadata/><defs><style class="style-fonts">      @font-face { font-family: Excalifont; src: url(data:font/woff2;base64,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); }</style></defs><rect x="0" y="0" width="1035" height="1219.5" fill="#ffffff"/><g stroke-linecap="round" transform="translate(427 10) rotate(0 27 25.5)"><path d="M17.77 1.04 C22.93 -0.87, 30.76 -0.27, 36.3 1.85 C41.83 3.98, 48.02 9.04, 50.99 13.8 C53.96 18.56, 55.44 25.26, 54.11 30.43 C52.78 35.6, 47.53 41.53, 43.01 44.83 C38.49 48.13, 32.59 50.35, 26.97 50.21 C21.36 50.07, 13.85 47.38, 9.3 43.98 C4.75 40.57, 0.45 34.95, -0.35 29.77 C-1.15 24.6, 1.04 17.62, 4.48 12.93 C7.92 8.23, 17.5 3.59, 20.29 1.6 C23.08 -0.4, 21.37 0.72, 21.23 0.95 M21.58 -0.69 C26.77 -2.15, 34.78 -0.76, 39.77 2.29 C44.77 5.34, 49.31 12.28, 51.54 17.62 C53.78 22.95, 54.82 29.52, 53.19 34.31 C51.55 39.1, 46.9 43.61, 41.73 46.34 C36.57 49.07, 28.12 51.48, 22.17 50.7 C16.23 49.92, 9.79 45.66, 6.05 41.64 C2.3 37.63, -0.13 31.95, -0.3 26.59 C-0.48 21.23, 1.24 13.99, 4.98 9.48 C8.72 4.97, 19.25 0.73, 22.12 -0.48 C25 -1.69, 22.26 1.85, 22.23 2.23" stroke="none" stroke-width="0" fill="#ffffff"/><path d="M29.06 -0.02 C34.41 0.01, 41.35 3.45, 45.37 7.39 C49.39 11.32, 52.46 18.22, 53.19 23.61 C53.92 29, 53.14 35.35, 49.76 39.72 C46.38 44.1, 38.52 48.53, 32.92 49.86 C27.32 51.19, 21.4 50.11, 16.16 47.71 C10.92 45.31, 3.92 40.38, 1.49 35.47 C-0.95 30.57, -0.04 23.48, 1.56 18.28 C3.17 13.09, 5.86 7.27, 11.1 4.29 C16.35 1.32, 28.69 0.58, 33.03 0.42 C37.37 0.26, 37.19 2.82, 37.16 3.33 M18.55 -0.32 C24.07 -1.65, 33.08 0.84, 38.53 3.39 C43.98 5.94, 48.99 10.39, 51.25 14.97 C53.51 19.55, 53.66 25.53, 52.07 30.88 C50.47 36.22, 46.23 43.7, 41.69 47.06 C37.15 50.42, 30.25 51.65, 24.84 51.03 C19.42 50.42, 13.38 47.37, 9.22 43.35 C5.05 39.33, 0.46 32.18, -0.14 26.93 C-0.74 21.67, 2.16 16.29, 5.63 11.8 C9.1 7.31, 18.23 1.55, 20.68 -0.02 C23.12 -1.6, 20.44 1.97, 20.31 2.34" stroke="#1e1e1e" stroke-width="2" fill="none"/></g><g stroke-linecap="round" transform="translate(369 124) rotate(0 85.5 42)"><path d="M21 0 C67.56 -0.44, 106.55 1.14, 150 0 C167.52 -0.21, 173.31 4.03, 171 21 C167.58 37.05, 173.03 53.11, 171 63 C168.39 80.34, 165.01 86.43, 150 84 C114.27 81.94, 79.41 82.42, 21 84 C6.18 85.29, -2.77 74.22, 0 63 C0.01 50.42, -1.36 36.35, 0 21 C1.17 9.12, 8.4 -3.44, 21 0" stroke="none" stroke-width="0" fill="#ffffff"/><path d="M21 0 C67.41 2.27, 111.87 -0.78, 150 0 M21 0 C50.62 -1.36, 78.54 -1.49, 150 0 M150 0 C162.52 1.7, 170.65 7.16, 171 21 M150 0 C162.41 0.62, 172.07 7.83, 171 21 M171 21 C169.14 30.99, 170.11 42.7, 171 63 M171 21 C169.89 32.17, 171.57 45.49, 171 63 M171 63 C170.94 77.13, 164.38 83.76, 150 84 M171 63 C171.68 75.56, 165.47 83.26, 150 84 M150 84 C112.11 86.24, 70.98 83.35, 21 84 M150 84 C123.55 83.66, 97.43 84.01, 21 84 M21 84 C8.72 85.55, -0.3 76.32, 0 63 M21 84 C8.86 84.98, 0.01 74.89, 0 63 M0 63 C0.04 53.53, 1.27 47.09, 0 21 M0 63 C-0.41 49.35, 0.82 35.6, 0 21 M0 21 C-1.76 5.22, 5.9 -0.74, 21 0 M0 21 C0.9 5.34, 7.98 -0.88, 21 0" stroke="#1e1e1e" stroke-width="2" fill="none"/></g><g transform="translate(406.92003631591797 153.5) rotate(0 47.57996368408203 12.5)"><text x="47.57996368408203" y="17.619999999999997" font-family="Excalifont, Xiaolai, sans-serif, Segoe UI Emoji" font-size="20px" fill="#1e1e1e" text-anchor="middle" style="white-space: pre;" direction="ltr" dominant-baseline="alphabetic">stehe auf</text></g><g stroke-linecap="round" transform="translate(364 276) rotate(0 99.5 36)"><path d="M18 0 C65.29 4.65, 112.72 1.37, 181 0 C191.87 -2.04, 201.35 3.37, 199 18 C199.88 27.92, 198.64 32.75, 199 54 C201.05 64.56, 191.11 74.31, 181 72 C125.67 70.87, 71.83 74.25, 18 72 C7.46 69.3, 1.79 66.22, 0 54 C2.92 42.44, 0.69 28.87, 0 18 C2.37 6.96, 3.97 2.82, 18 0" stroke="none" stroke-width="0" fill="#ffffff"/><path d="M18 0 C67.61 1.72, 111.93 -0.64, 181 0 M18 0 C65.89 0.98, 115.52 0.73, 181 0 M181 0 C192.69 -1.83, 199.75 6.54, 199 18 M181 0 C191.13 1.78, 197.44 5.48, 199 18 M199 18 C198.96 28.13, 199.89 41.78, 199 54 M199 18 C199.11 29.9, 199.18 39.66, 199 54 M199 54 C198.4 66.21, 191.76 73.91, 181 72 M199 54 C199.93 64.29, 193.94 70.53, 181 72 M181 72 C125.6 71.58, 66.85 71.57, 18 72 M181 72 C145.57 73.77, 108.14 72.99, 18 72 M18 72 C6.71 73.72, 0.67 66.65, 0 54 M18 72 C7.92 71.67, 0.93 65.25, 0 54 M0 54 C-0.5 43.29, 0.07 31.94, 0 18 M0 54 C-0.75 40.3, 0.58 26.38, 0 18 M0 18 C0.7 5.26, 6.46 -0.5, 18 0 M0 18 C-1.46 7.35, 4.9 2.12, 18 0" stroke="#1e1e1e" stroke-width="2" fill="none"/></g><g transform="translate(382.5200500488281 299.5) rotate(0 80.97994995117188 12.5)"><text x="80.97994995117188" y="17.619999999999997" font-family="Excalifont, Xiaolai, sans-serif, Segoe UI Emoji" font-size="20px" fill="#1e1e1e" text-anchor="middle" style="white-space: pre;" direction="ltr" dominant-baseline="alphabetic">Putze die Zähne</text></g><g stroke-linecap="round" transform="translate(387 403) rotate(0 76.5 22.5)"><path d="M11.25 0 C48.3 -3.32, 85.54 -3.7, 141.75 0 C147.47 -1.72, 156.22 0.48, 153 11.25 C154.25 18.76, 151.1 21.81, 153 33.75 C149.73 41.92, 145.74 41.65, 141.75 45 C110.39 40.59, 75.6 45.65, 11.25 45 C5.35 47.93, 1.71 42.29, 0 33.75 C2.27 26.26, -2.41 23.15, 0 11.25 C-1.53 0.57, 2.47 -2.18, 11.25 0" stroke="none" stroke-width="0" fill="#ffffff"/><path d="M11.25 0 C38.81 -0.51, 66.29 1.64, 141.75 0 M11.25 0 C51.44 0.11, 90.04 1.13, 141.75 0 M141.75 0 C150.62 -1.83, 153.84 3.77, 153 11.25 M141.75 0 C150.28 -0.39, 152.88 1.88, 153 11.25 M153 11.25 C151.19 18.7, 151.82 26.92, 153 33.75 M153 11.25 C152.07 18.04, 152.78 25.52, 153 33.75 M153 33.75 C152.02 39.67, 147.77 46.94, 141.75 45 M153 33.75 C152.67 40.99, 149.48 46.62, 141.75 45 M141.75 45 C89.07 46.28, 38.59 45.1, 11.25 45 M141.75 45 C101.57 44.45, 60.58 43.73, 11.25 45 M11.25 45 C2.58 45.61, 1.72 40.81, 0 33.75 M11.25 45 C6.04 43.37, 2.16 41.24, 0 33.75 M0 33.75 C1.94 26.12, -1.28 19.41, 0 11.25 M0 33.75 C-0.38 24.4, -0.25 16.22, 0 11.25 M0 11.25 C-1.31 2.71, 4.11 -0.98, 11.25 0 M0 11.25 C0.93 4.91, 4.07 0.8, 11.25 0" stroke="#1e1e1e" stroke-width="2" fill="none"/></g><g transform="translate(428.7100296020508 413) rotate(0 34.78997039794922 12.5)"><text x="34.78997039794922" y="17.619999999999997" font-family="Excalifont, Xiaolai, sans-serif, Segoe UI Emoji" font-size="20px" fill="#1e1e1e" text-anchor="middle" style="white-space: pre;" direction="ltr" dominant-baseline="alphabetic">Dusche</text></g><g stroke-linecap="round" transform="translate(766 777) rotate(0 76 30)"><path d="M15 0 C59.64 2.41, 99.99 2.17, 137 0 C144.15 -2.79, 154.19 5.19, 152 15 C149.4 24.04, 149.97 32.42, 152 45 C153.77 56.93, 149.35 58.16, 137 60 C110.5 56.42, 82.96 61.32, 15 60 C7.07 58.49, 0.64 52.24, 0 45 C-2.47 39.04, -1.27 26.1, 0 15 C1.29 4.61, 2.7 -1.96, 15 0" stroke="none" stroke-width="0" fill="#ffffff"/><path d="M15 0 C42.35 -1.57, 70.69 -1.01, 137 0 M15 0 C52.2 -0.32, 90.1 0.07, 137 0 M137 0 C145.12 -0.92, 153.94 3.57, 152 15 M137 0 C147.15 1.46, 151.4 6.09, 152 15 M152 15 C153.83 26.67, 151.5 38.62, 152 45 M152 15 C151.86 23.59, 151.45 31.92, 152 45 M152 45 C151.82 55.92, 147.81 61.83, 137 60 M152 45 C149.92 54.64, 146.07 59.29, 137 60 M137 60 C102.21 59.12, 67.55 57.15, 15 60 M137 60 C89.86 59.86, 43.55 59.61, 15 60 M15 60 C6.28 58.22, -0.64 54.95, 0 45 M15 60 C4.82 61.82, -1.14 55.56, 0 45 M0 45 C0.85 36.28, -1.14 28.34, 0 15 M0 45 C-0.25 35.31, -0.75 25.51, 0 15 M0 15 C-0.22 6.72, 6.04 0.59, 15 0 M0 15 C1.8 3.43, 4.23 -1.03, 15 0" stroke="#1e1e1e" stroke-width="2" fill="none"/></g><g transform="translate(796.9900360107422 782) rotate(0 45.00996398925781 25)"><text x="45.00996398925781" y="17.619999999999997" font-family="Excalifont, Xiaolai, sans-serif, Segoe UI Emoji" font-size="20px" fill="#1e1e1e" text-anchor="middle" style="white-space: pre;" direction="ltr" dominant-baseline="alphabetic">fahre zur</text><text x="45.00996398925781" y="42.62" font-family="Excalifont, Xiaolai, sans-serif, Segoe UI Emoji" font-size="20px" fill="#1e1e1e" text-anchor="middle" style="white-space: pre;" direction="ltr" dominant-baseline="alphabetic">Arbeit</text></g><g stroke-linecap="round" transform="translate(781 888) rotate(0 60 25)"><path d="M12.5 0 C48.86 2.14, 83.56 2.32, 107.5 0 C116.98 -2.09, 117.13 5.52, 120 12.5 C120.15 23.02, 123.08 24.42, 120 37.5 C121.98 43.5, 118.44 47.24, 107.5 50 C72.19 46.11, 40.84 51.43, 12.5 50 C3.17 51.01, -1.92 42.64, 0 37.5 C-0.27 30.56, 2.89 15.92, 0 12.5 C3.07 6.9, 7.6 -1.94, 12.5 0" stroke="none" stroke-width="0" fill="#ffffff"/><path d="M12.5 0 C41.82 1.28, 70.49 -0.82, 107.5 0 M12.5 0 C33.47 -0.08, 54.16 1.28, 107.5 0 M107.5 0 C116.98 -0.84, 120.36 2.63, 120 12.5 M107.5 0 C115.49 -2.23, 120.11 2.26, 120 12.5 M120 12.5 C120.59 21.58, 118.6 30, 120 37.5 M120 12.5 C119.73 20.33, 119.54 28.33, 120 37.5 M120 37.5 C118.13 45.08, 117.77 49.84, 107.5 50 M120 37.5 C117.89 45.77, 117.24 52.18, 107.5 50 M107.5 50 C76.2 51.17, 46.2 49.57, 12.5 50 M107.5 50 C85.18 49.29, 61.61 50.09, 12.5 50 M12.5 50 C5.86 48.07, 0.19 45.44, 0 37.5 M12.5 50 C2.7 50.42, -1.62 47.27, 0 37.5 M0 37.5 C0.19 31.41, 1.68 19.91, 0 12.5 M0 37.5 C0.56 27.64, 0.71 18.98, 0 12.5 M0 12.5 C0.98 5.66, 4.7 -0.7, 12.5 0 M0 12.5 C-2.06 3.47, 3.63 2.14, 12.5 0" stroke="#1e1e1e" stroke-width="2" fill="none"/></g><g transform="translate(805.8600311279297 900.5) rotate(0 35.13996887207031 12.5)"><text x="35.13996887207031" y="17.619999999999997" font-family="Excalifont, Xiaolai, sans-serif, Segoe UI Emoji" font-size="20px" fill="#1e1e1e" text-anchor="middle" style="white-space: pre;" direction="ltr" dominant-baseline="alphabetic">Arbeite</text></g><g stroke-linecap="round" transform="translate(460 1168.5) rotate(0 14.5 15)"><path d="M17.88 -0.14 C20.71 0.34, 23.57 2.96, 25.48 5.52 C27.38 8.07, 29.42 11.94, 29.31 15.21 C29.21 18.48, 26.89 22.61, 24.84 25.13 C22.8 27.65, 20.07 29.82, 17.04 30.32 C14.01 30.82, 9.43 29.91, 6.66 28.15 C3.9 26.4, 1.38 22.97, 0.46 19.81 C-0.46 16.65, -0.14 12.23, 1.12 9.21 C2.38 6.18, 5.17 3.16, 8.02 1.65 C10.86 0.15, 16.36 0.35, 18.19 0.18 C20.02 0.01, 19.04 0.38, 18.99 0.63 M14.77 -0.03 C17.63 -0.13, 21.35 1.37, 23.6 3.48 C25.86 5.6, 27.79 9.57, 28.3 12.68 C28.82 15.79, 28.12 19.27, 26.69 22.15 C25.27 25.03, 22.73 28.73, 19.75 29.96 C16.78 31.19, 11.79 30.92, 8.83 29.53 C5.87 28.14, 3.38 24.63, 2.01 21.63 C0.64 18.62, 0 14.61, 0.59 11.5 C1.17 8.4, 3.17 5, 5.53 3.01 C7.89 1.01, 13.32 -0.01, 14.77 -0.47 C16.22 -0.93, 14.07 -0.01, 14.2 0.26" stroke="none" stroke-width="0" fill="#ffffff"/><path d="M12.54 -0.4 C15.56 -0.93, 20.08 0.79, 22.71 2.72 C25.34 4.66, 27.43 8.12, 28.32 11.19 C29.21 14.27, 29.21 18.33, 28.03 21.19 C26.86 24.05, 24.08 26.98, 21.27 28.34 C18.46 29.7, 14.19 30.06, 11.18 29.34 C8.17 28.62, 5.07 26.59, 3.22 24.02 C1.37 21.46, -0.04 17.19, 0.1 13.97 C0.24 10.76, 1.8 7.06, 4.05 4.72 C6.31 2.39, 12.1 0.77, 13.61 -0.04 C15.12 -0.85, 13.26 -0.46, 13.13 -0.15 M15.42 -0.26 C18.35 -0.2, 22.47 2.57, 24.64 4.97 C26.81 7.37, 28.05 10.9, 28.45 14.12 C28.85 17.34, 28.67 21.75, 27.06 24.29 C25.45 26.82, 22.02 28.68, 18.79 29.33 C15.56 29.98, 10.68 29.44, 7.66 28.18 C4.64 26.91, 1.91 24.54, 0.69 21.74 C-0.53 18.94, -0.65 14.43, 0.34 11.39 C1.33 8.34, 4.01 5.41, 6.61 3.47 C9.22 1.53, 14.46 0.21, 15.96 -0.26 C17.46 -0.74, 15.76 0.19, 15.6 0.62" stroke="#1e1e1e" stroke-width="2" fill="none"/></g><g stroke-linecap="round" transform="translate(448 1158.5) rotate(0 27 25.5)"><path d="M38.75 2.06 C43.85 3.76, 48.97 8.96, 51.51 13.96 C54.04 18.95, 55.39 26.69, 53.95 32.03 C52.52 37.38, 47.72 42.87, 42.91 46.04 C38.1 49.21, 30.73 51.48, 25.1 51.07 C19.46 50.65, 13.34 47.55, 9.08 43.55 C4.82 39.55, 0.42 32.38, -0.48 27.06 C-1.37 21.74, 0.31 15.96, 3.73 11.61 C7.14 7.26, 13.59 2.32, 20.02 0.96 C26.45 -0.39, 38.35 2.6, 42.29 3.48 C46.23 4.37, 43.91 5.95, 43.66 6.27 M35.85 0.78 C40.74 1.59, 45.37 5.93, 48.14 10.68 C50.91 15.43, 52.95 23.64, 52.46 29.29 C51.96 34.94, 49.03 40.73, 45.18 44.59 C41.34 48.45, 35.06 52.34, 29.4 52.45 C23.75 52.57, 16.08 48.72, 11.26 45.29 C6.43 41.85, 2.06 36.83, 0.47 31.86 C-1.13 26.89, -0.98 20.27, 1.69 15.47 C4.36 10.66, 10.75 5.34, 16.48 3.01 C22.2 0.68, 33.22 1.54, 36.04 1.49 C38.86 1.45, 33.97 2.61, 33.4 2.74" stroke="#1e1e1e" stroke-width="2" fill="none"/></g><g stroke-linecap="round"><g transform="translate(456 66) rotate(0 1.2392651660934462 29.30459194377997)"><path d="M-0.34 -0.36 C-0.39 9.54, 0.06 48.79, 0.41 58.78 M1.69 -1.6 C1.97 8.55, 2.86 50.34, 2.82 60.21" stroke="#1e1e1e" stroke-width="2" fill="none"/></g><g transform="translate(456 66) rotate(0 1.2392651660934462 29.30459194377997)"><path d="M-5.98 36.81 C-3.54 44.29, -0.12 54.99, 2.82 60.21 M-5.98 36.81 C-3.39 44.29, 0.89 53.42, 2.82 60.21" stroke="#1e1e1e" stroke-width="2" fill="none"/></g><g transform="translate(456 66) rotate(0 1.2392651660934462 29.30459194377997)"><path d="M11.12 36.62 C7.39 44.13, 4.64 54.89, 2.82 60.21 M11.12 36.62 C7.71 44.25, 6 53.45, 2.82 60.21" stroke="#1e1e1e" stroke-width="2" fill="none"/></g></g><mask/><g stroke-linecap="round"><g transform="translate(460 214) rotate(0 1.4696197035322172 26.97420157520566)"><path d="M-0.7 -0.78 C-0.54 8.21, 0.86 44.34, 1.29 53.81 M1.14 1.42 C1.66 10.52, 3.65 45.93, 3.63 54.73" stroke="#1e1e1e" stroke-width="2" fill="none"/></g><g transform="translate(460 214) rotate(0 1.4696197035322172 26.97420157520566)"><path d="M-5.66 31.52 C-3.94 38.01, -1.56 46.62, 3.63 54.73 M-5.66 31.52 C-3.01 41.24, 1.28 50.31, 3.63 54.73" stroke="#1e1e1e" stroke-width="2" fill="none"/></g><g transform="translate(460 214) rotate(0 1.4696197035322172 26.97420157520566)"><path d="M11.43 30.98 C7.55 37.54, 4.32 46.33, 3.63 54.73 M11.43 30.98 C7.46 40.83, 5.14 50.11, 3.63 54.73" stroke="#1e1e1e" stroke-width="2" fill="none"/></g></g><mask/><g stroke-linecap="round"><g transform="translate(462.7822939189946 349.44195354818646) rotate(0 1.843963285329437 25.801236908047354)"><path d="M0.41 -0.68 C1.27 7.94, 3.75 42.35, 4.52 51.28 M-0.83 1.58 C-0.07 10.36, 2.7 44.06, 3.61 52.28" stroke="#1e1e1e" stroke-width="2" fill="none"/></g><g transform="translate(462.7822939189946 349.44195354818646) rotate(0 1.843963285329437 25.801236908047354)"><path d="M-7.1 29.69 C-5.67 35.33, -3.62 41.78, 3.61 52.28 M-7.1 29.69 C-2.73 37.93, 0.92 45.45, 3.61 52.28" stroke="#1e1e1e" stroke-width="2" fill="none"/></g><g transform="translate(462.7822939189946 349.44195354818646) rotate(0 1.843963285329437 25.801236908047354)"><path d="M9.92 28.09 C7.16 34.18, 5.01 41.03, 3.61 52.28 M9.92 28.09 C8.3 37.05, 5.96 45.14, 3.61 52.28" stroke="#1e1e1e" stroke-width="2" fill="none"/></g></g><mask/><g stroke-linecap="round" transform="translate(338 524) rotate(0 127.5 93)"><path d="M160 23.5 C179.13 37.43, 201.18 52.5, 223 70.5 M160 23.5 C173.13 32.98, 186.34 43.06, 223 70.5 M223 70.5 C255.76 94.22, 253.96 94.75, 223 117.5 M223 70.5 C253.58 93.9, 255.28 95.63, 223 117.5 M223 117.5 C201.53 133.34, 176.4 152.35, 160 162.5 M223 117.5 C207.68 128.45, 190.27 141.19, 160 162.5 M160 162.5 C126.02 185.83, 129.52 186.22, 96 162.5 M160 162.5 C126.42 183.97, 127.89 184.34, 96 162.5 M96 162.5 C84.48 153.88, 68.94 144.32, 32 117.5 M96 162.5 C78.87 150.21, 60.99 138.34, 32 117.5 M32 117.5 C-0.94 95.41, 1.85 93.9, 32 70.5 M32 117.5 C0.68 94.59, 1.97 95.71, 32 70.5 M32 70.5 C56.48 51.4, 82.11 34.28, 96 23.5 M32 70.5 C47.1 59.61, 62.26 49.58, 96 23.5 M96 23.5 C128.98 -1.66, 126.34 -0.14, 160 23.5 M96 23.5 C127.35 0.4, 127.96 0.26, 160 23.5" stroke="#1e1e1e" stroke-width="2" fill="none"/></g><g transform="translate(408.8910217285156 575.75) rotate(0 56.858978271484375 41.25)"><text x="56.858978271484375" y="19.381999999999998" font-family="Excalifont, Xiaolai, sans-serif, Segoe UI Emoji" font-size="22px" fill="#1e1e1e" text-anchor="middle" style="white-space: pre;" direction="ltr" dominant-baseline="alphabetic">Heute</text><text x="56.858978271484375" y="46.882" font-family="Excalifont, Xiaolai, sans-serif, Segoe UI Emoji" font-size="22px" fill="#1e1e1e" text-anchor="middle" style="white-space: pre;" direction="ltr" dominant-baseline="alphabetic">Wocheende</text><text x="56.858978271484375" y="74.382" font-family="Excalifont, Xiaolai, sans-serif, Segoe UI Emoji" font-size="22px" fill="#1e1e1e" text-anchor="middle" style="white-space: pre;" direction="ltr" dominant-baseline="alphabetic">?</text></g><g stroke-linecap="round" transform="translate(237.99999999999994 57.00000000000003) rotate(0 210.50000000000003 217.50000000000003)"><path d="M32 0 C149.62 -0.11, 268.34 -1.57, 389 0 M32 0 C109.19 -0.17, 186.41 0.13, 389 0 M389 0 C411.74 1.89, 421.4 11.75, 421 32 M389 0 C409.68 -0.31, 420.96 10.56, 421 32 M421 32 C422.03 148.31, 423.08 266.29, 421 403 M421 32 C422.81 113.98, 422.23 196.43, 421 403 M421 403 C422.05 425.62, 411.68 434.73, 389 435 M421 403 C420.16 425.26, 408.86 434.65, 389 435 M389 435 C310.78 435.85, 234.62 435.22, 32 435 M389 435 C301.6 436.78, 214.13 436.59, 32 435 M32 435 C10.59 436.33, -1.36 424.58, 0 403 M32 435 C8.99 435.2, -1.59 422.95, 0 403 M0 403 C1.22 321.25, 1.16 238.52, 0 32 M0 403 C-1.44 291.59, -0.97 180.83, 0 32 M0 32 C-1.64 9.38, 11.43 -1.78, 32 0 M0 32 C0.91 10.04, 11.93 -0.03, 32 0" stroke="#1e1e1e" stroke-width="2" fill="none"/></g><g transform="translate(252 67) rotate(0 74.53596496582031 13.75)"><text x="0" y="19.381999999999998" font-family="Excalifont, Xiaolai, sans-serif, Segoe UI Emoji" font-size="22px" fill="#1e1e1e" text-anchor="start" style="white-space: pre;" direction="ltr" dominant-baseline="alphabetic">Morgenroutine</text></g><g stroke-linecap="round" transform="translate(664 699) rotate(0 180.5 149)"><path d="M32 0 C94 0.06, 158.97 0.97, 329 0 M32 0 C140.14 0.77, 247.14 1.38, 329 0 M329 0 C351.55 -0.49, 359.08 11.67, 361 32 M329 0 C351.69 2.22, 358.8 10.89, 361 32 M361 32 C361.01 80.58, 361.75 125.71, 361 266 M361 32 C362.49 120.24, 362.78 206.3, 361 266 M361 266 C359.21 288.53, 348.93 297.04, 329 298 M361 266 C360.11 289.51, 348.09 296.53, 329 298 M329 298 C257.29 296.78, 188.36 296.44, 32 298 M329 298 C247.09 300.36, 164.21 299.97, 32 298 M32 298 C11.72 299.76, -1.87 286.57, 0 266 M32 298 C8.84 298.16, -0.45 288.65, 0 266 M0 266 C-1.37 180.71, 0.23 96.15, 0 32 M0 266 C1.43 204.42, 0.98 142.42, 0 32 M0 32 C-1.91 10.09, 9.83 -0.4, 32 0 M0 32 C-1.72 12.23, 9.44 1.93, 32 0" stroke="#1e1e1e" stroke-width="2" fill="none"/></g><g transform="translate(674 709) rotate(0 61.85894012451172 12.08907069301739)"><text x="0" y="17.040754048877318" font-family="Excalifont, Xiaolai, sans-serif, Segoe UI Emoji" font-size="19.342513108827827px" fill="#1e1e1e" text-anchor="start" style="white-space: pre;" direction="ltr" dominant-baseline="alphabetic">Arbeitroutine</text></g><g stroke-linecap="round" transform="translate(115 810) rotate(0 100.5 40.5)"><path d="M20.25 0 C69.47 -1.37, 119.88 1.79, 180.75 0 M20.25 0 C84.93 1.13, 149.32 0.92, 180.75 0 M180.75 0 C193.34 -0.19, 202.29 6.73, 201 20.25 M180.75 0 C193.86 1.99, 203.27 7.46, 201 20.25 M201 20.25 C201.58 30.26, 199.97 39.37, 201 60.75 M201 20.25 C201.55 36.54, 200.48 51.31, 201 60.75 M201 60.75 C200.31 75.96, 193.55 82.14, 180.75 81 M201 60.75 C199.05 74.25, 196.22 83.09, 180.75 81 M180.75 81 C139.15 80.67, 99.58 81.13, 20.25 81 M180.75 81 C123.46 80.05, 65.42 80.46, 20.25 81 M20.25 81 C8.69 82.14, -1.24 74.7, 0 60.75 M20.25 81 C8.84 80.82, -1.52 74.54, 0 60.75 M0 60.75 C1.58 49.56, -0.19 42.73, 0 20.25 M0 60.75 C-0.8 52.28, -0.04 43.18, 0 20.25 M0 20.25 C-0.86 6.18, 4.86 1.99, 20.25 0 M0 20.25 C2.05 5.91, 7.35 -1.23, 20.25 0" stroke="#1e1e1e" stroke-width="2" fill="none"/></g><g transform="translate(157.84901428222656 836.75) rotate(0 57.65098571777344 13.75)"><text x="57.65098571777344" y="19.381999999999998" font-family="Excalifont, Xiaolai, sans-serif, Segoe UI Emoji" font-size="22px" fill="#1e1e1e" text-anchor="middle" style="white-space: pre;" direction="ltr" dominant-baseline="alphabetic">Frührstuck</text></g><g stroke-linecap="round" transform="translate(120 945) rotate(0 96.5 41.5)"><path d="M20.75 0 C80.03 0.77, 140.4 -0.35, 172.25 0 M20.75 0 C68.14 0.77, 116.55 -0.05, 172.25 0 M172.25 0 C186.4 -0.56, 194.01 5.35, 193 20.75 M172.25 0 C186.4 -1.83, 194.1 8.67, 193 20.75 M193 20.75 C194.09 30.66, 194.69 42.79, 193 62.25 M193 20.75 C191.69 30.68, 192.96 39.69, 193 62.25 M193 62.25 C194.92 74.9, 186 81.99, 172.25 83 M193 62.25 C193.05 75.15, 187.16 82.18, 172.25 83 M172.25 83 C124.53 81.53, 78.01 80.94, 20.75 83 M172.25 83 C129.89 85.22, 86.91 85.25, 20.75 83 M20.75 83 C8.28 82.3, -1.06 74.75, 0 62.25 M20.75 83 C6.1 82.03, 1.73 75.85, 0 62.25 M0 62.25 C1.93 45.49, -1.2 33.17, 0 20.75 M0 62.25 C-0.05 51.48, 0.68 40.37, 0 20.75 M0 20.75 C-0.48 7.24, 8.4 -0.59, 20.75 0 M0 20.75 C-1.32 9.16, 6.67 -0.64, 20.75 0" stroke="#1e1e1e" stroke-width="2" fill="none"/></g><g transform="translate(162.5670166015625 959) rotate(0 53.9329833984375 27.5)"><text x="53.9329833984375" y="19.381999999999998" font-family="Excalifont, Xiaolai, sans-serif, Segoe UI Emoji" font-size="22px" fill="#1e1e1e" text-anchor="middle" style="white-space: pre;" direction="ltr" dominant-baseline="alphabetic">Fernsehen</text><text x="53.9329833984375" y="46.882" font-family="Excalifont, Xiaolai, sans-serif, Segoe UI Emoji" font-size="22px" fill="#1e1e1e" text-anchor="middle" style="white-space: pre;" direction="ltr" dominant-baseline="alphabetic">anschauen</text></g><g stroke-linecap="round" transform="translate(10 690) rotate(0 186.5 190.49999999999997)"><path d="M32 0 C117.88 -2.4, 202.25 -1.8, 341 0 M32 0 C141.05 1.6, 250.54 1.18, 341 0 M341 0 C361.63 -0.59, 371.55 9.61, 373 32 M341 0 C364.33 -0.09, 374.89 11.16, 373 32 M373 32 C373.17 98.12, 373.43 166.89, 373 349 M373 32 C374.31 118.45, 374.24 204.44, 373 349 M373 349 C373.9 368.58, 364.16 382.71, 341 381 M373 349 C372.09 371.82, 360.48 381.09, 341 381 M341 381 C220.92 380.67, 101.46 378.92, 32 381 M341 381 C229.28 380.64, 115.44 381.46, 32 381 M32 381 C12.43 382.29, -1.38 371.9, 0 349 M32 381 C12.75 379.26, 2.15 372.04, 0 349 M0 349 C-1.53 248.6, -0.65 149.37, 0 32 M0 349 C-1.72 251.07, -1.26 153.34, 0 32 M0 32 C0.44 12.62, 11.44 -0.28, 32 0 M0 32 C1.79 10.19, 9.66 -1.43, 32 0" stroke="#1e1e1e" stroke-width="2" fill="none"/></g><g transform="translate(29 704) rotate(0 72.98497009277344 13.75)"><text x="0" y="19.381999999999998" font-family="Excalifont, Xiaolai, sans-serif, Segoe UI Emoji" font-size="22px" fill="#1e1e1e" text-anchor="start" style="white-space: pre;" direction="ltr" dominant-baseline="alphabetic">Chillingroutine</text></g><g stroke-linecap="round"><g transform="translate(471.1588733384038 449.9591215167883) rotate(0 -0.7376013413895777 40.37375639947969)"><path d="M-0.75 0.67 C-1.14 13.93, -2.28 66.26, -2.53 79.24 M1.06 -0.03 C1.07 13.47, 0.55 67.53, -0.17 80.78" stroke="#1e1e1e" stroke-width="2" fill="none"/></g><g transform="translate(471.1588733384038 449.9591215167883) rotate(0 -0.7376013413895777 40.37375639947969)"><path d="M-8.05 57.05 C-4.77 62.76, -3.63 69.93, -0.17 80.78 M-8.05 57.05 C-5.2 62.07, -4.73 69.32, -0.17 80.78" stroke="#1e1e1e" stroke-width="2" fill="none"/></g><g transform="translate(471.1588733384038 449.9591215167883) rotate(0 -0.7376013413895777 40.37375639947969)"><path d="M9.04 57.54 C7.45 63, 3.72 70.03, -0.17 80.78 M9.04 57.54 C7.77 62.52, 4.12 69.65, -0.17 80.78" stroke="#1e1e1e" stroke-width="2" fill="none"/></g></g><mask/><g stroke-linecap="round"><g transform="translate(598 616.9) rotate(0 122.55571608780188 77.5496043847699)"><path d="M0 0 C53.62 1.84, 104.92 1.88, 227.9 0 M0 0 C73.7 1.4, 146.97 1.23, 227.9 0 M227.9 0 C240.46 1.27, 242.43 5.06, 243.9 16 M227.9 0 C240.48 -0.07, 244.3 4.8, 243.9 16 M243.9 16 C245.36 71.01, 245.66 123.76, 243.9 155.1 M243.9 16 C245.18 63.27, 245.47 109.94, 243.9 155.1" stroke="#1e1e1e" stroke-width="2" fill="none"/></g><g transform="translate(598 616.9) rotate(0 122.55571608780188 77.5496043847699)"><path d="M235.89 131.42 C238.68 137.22, 238.89 142.74, 243.9 155.1 M235.89 131.42 C239.08 139.99, 241.55 147.4, 243.9 155.1" stroke="#1e1e1e" stroke-width="2" fill="none"/></g><g transform="translate(598 616.9) rotate(0 122.55571608780188 77.5496043847699)"><path d="M252.98 131.81 C251.83 137.38, 248.08 142.81, 243.9 155.1 M252.98 131.81 C250.67 140.2, 247.63 147.49, 243.9 155.1" stroke="#1e1e1e" stroke-width="2" fill="none"/></g></g><mask/><g stroke-linecap="round"><g transform="translate(333 616.9) rotate(0 -58.9462773989778 93.71997541946479)"><path d="M0 0 C-25.45 -1.92, -47.52 1.08, -101.6 0 M0 0 C-26.52 0.01, -50.78 0.1, -101.6 0 M-101.6 0 C-111.42 0.36, -117.23 3.98, -117.6 16 M-101.6 0 C-110.04 2.2, -119.71 5.48, -117.6 16 M-117.6 16 C-118.73 77.98, -116.03 145.11, -117.6 188.1 M-117.6 16 C-117.55 73.24, -117.59 127.76, -117.6 188.1" stroke="#1e1e1e" stroke-width="2" fill="none"/></g><g transform="translate(333 616.9) rotate(0 -58.9462773989778 93.71997541946479)"><path d="M-126.15 164.61 C-125.66 168.2, -121.81 176.74, -117.6 188.1 M-126.15 164.61 C-124.73 171.34, -121.25 177.35, -117.6 188.1" stroke="#1e1e1e" stroke-width="2" fill="none"/></g><g transform="translate(333 616.9) rotate(0 -58.9462773989778 93.71997541946479)"><path d="M-109.04 164.61 C-112.59 168.21, -112.76 176.74, -117.6 188.1 M-109.04 164.61 C-111.94 171.22, -112.76 177.22, -117.6 188.1" stroke="#1e1e1e" stroke-width="2" fill="none"/></g></g><mask/><g stroke-linecap="round"><g transform="translate(841.9 842) rotate(0 -0.44099475792462783 20.5)"><path d="M0 0 C0.47 13.62, -0.57 26.41, -1 41 M0 0 C-0.39 14.18, -0.55 27.56, -1 41" stroke="#1e1e1e" stroke-width="2" fill="none"/></g><g transform="translate(841.9 842) rotate(0 -0.44099475792462783 20.5)"><path d="M-7.47 21.54 C-4.65 28.43, -3.36 34.5, -1 41 M-7.47 21.54 C-5.25 28.37, -2.86 34.4, -1 41" stroke="#1e1e1e" stroke-width="2" fill="none"/></g><g transform="translate(841.9 842) rotate(0 -0.44099475792462783 20.5)"><path d="M6.56 21.94 C5 28.71, 1.91 34.66, -1 41 M6.56 21.94 C3.99 28.63, 1.59 34.52, -1 41" stroke="#1e1e1e" stroke-width="2" fill="none"/></g></g><mask/><g stroke-linecap="round"><g transform="translate(850 946) rotate(0 -177.7631731697423 119.4961617474903)"><path d="M0 0 C-1.16 58.75, -1.11 117.4, 0 221.4 M0 0 C0.54 75.57, 0.71 151.44, 0 221.4 M0 221.4 C0.68 232.88, -6.29 236.97, -16 237.4 M0 221.4 C1.14 232.35, -6.12 238.37, -16 237.4 M-16 237.4 C-137.61 239.94, -257.98 239.06, -356 237.4 M-16 237.4 C-99.81 235.98, -183.69 236.54, -356 237.4" stroke="#1e1e1e" stroke-width="2" fill="none"/></g><g transform="translate(850 946) rotate(0 -177.7631731697423 119.4961617474903)"><path d="M-332.55 228.74 C-338.63 231.94, -344.72 234.95, -356 237.4 M-332.55 228.74 C-339.82 232.21, -347.6 235.81, -356 237.4" stroke="#1e1e1e" stroke-width="2" fill="none"/></g><g transform="translate(850 946) rotate(0 -177.7631731697423 119.4961617474903)"><path d="M-332.47 245.84 C-338.46 244.56, -344.57 243.09, -356 237.4 M-332.47 245.84 C-339.76 243.49, -347.56 241.29, -356 237.4" stroke="#1e1e1e" stroke-width="2" fill="none"/></g></g><mask/><g stroke-linecap="round"><g transform="translate(215.39999999999998 896) rotate(0 0.5501180496425206 22)"><path d="M0 0 C0.6 11.03, 1.38 20.92, 1 44 M0 0 C0.42 10.65, 1.02 21.73, 1 44" stroke="#1e1e1e" stroke-width="2" fill="none"/></g><g transform="translate(215.39999999999998 896) rotate(0 0.5501180496425206 22)"><path d="M-6.68 23.38 C-4.49 28.89, -2.14 33.28, 1 44 M-6.68 23.38 C-4.65 28.17, -2.39 33.4, 1 44" stroke="#1e1e1e" stroke-width="2" fill="none"/></g><g transform="translate(215.39999999999998 896) rotate(0 0.5501180496425206 22)"><path d="M8.37 23.27 C7.03 28.87, 5.84 33.29, 1 44 M8.37 23.27 C6.63 28.09, 5.13 33.34, 1 44" stroke="#1e1e1e" stroke-width="2" fill="none"/></g></g><mask/><g stroke-linecap="round"><g transform="translate(216.39999999999998 1033) rotate(0 112.71987022210828 75.65760414258762)"><path d="M0 0 C-0.78 54.63, -2.16 104.94, 0 134.9 M0 0 C-0.54 38.91, 0.13 78.54, 0 134.9 M0 134.9 C1.05 147.49, 5.02 151.41, 16 150.9 M0 134.9 C2.17 147.58, 5.07 152.92, 16 150.9 M16 150.9 C96.83 151.54, 175.87 149.62, 226.6 150.9 M16 150.9 C86.81 150.82, 157.1 150.78, 226.6 150.9" stroke="#1e1e1e" stroke-width="2" fill="none"/></g><g transform="translate(216.39999999999998 1033) rotate(0 112.71987022210828 75.65760414258762)"><path d="M203.1 159.42 C211.78 157.39, 219.68 151.1, 226.6 150.9 M203.1 159.42 C210.09 156.48, 217.57 154.49, 226.6 150.9" stroke="#1e1e1e" stroke-width="2" fill="none"/></g><g transform="translate(216.39999999999998 1033) rotate(0 112.71987022210828 75.65760414258762)"><path d="M203.12 142.32 C211.77 147.04, 219.66 147.5, 226.6 150.9 M203.12 142.32 C210.02 144.35, 217.5 147.31, 226.6 150.9" stroke="#1e1e1e" stroke-width="2" fill="none"/></g></g><mask/><g transform="translate(628 559) rotate(0 20.162986755371094 13.75)"><text x="0" y="19.381999999999998" font-family="Excalifont, Xiaolai, sans-serif, Segoe UI Emoji" font-size="22px" fill="#1e1e1e" text-anchor="start" style="white-space: pre;" direction="ltr" dominant-baseline="alphabetic">nein</text></g><g transform="translate(259 564) rotate(0 9.943992614746094 13.75)"><text x="0" y="19.381999999999998" font-family="Excalifont, Xiaolai, sans-serif, Segoe UI Emoji" font-size="22px" fill="#1e1e1e" text-anchor="start" style="white-space: pre;" direction="ltr" dominant-baseline="alphabetic">ja</text></g></svg></div>

>[!important] Wichtig
>Es gibt nur **einen START** und **ein ENDE** pro Diagramm!

## Start/Beginn
>Wo der Ablauf eines Systems beginnt.

<div class="excalidraw-svg"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 105 103" width="105" height="103" class="excalidraw-svg" style="max-width: 100%; height: auto;"><!-- svg-source:excalidraw --><metadata/><defs><style class="style-fonts">/**/</style></defs><rect x="0" y="0" width="105" height="103" fill="#ffffff"/><g stroke-linecap="round" transform="translate(10 10) rotate(0 42.5 41.5)"><path d="M40.22 -0.86 C47.67 -1.84, 58.39 1.56, 65.1 5.4 C71.81 9.24, 77.16 15.43, 80.48 22.2 C83.8 28.96, 85.76 38.58, 85.02 46 C84.28 53.43, 80.85 60.92, 76.02 66.75 C71.19 72.58, 63.35 78.63, 56.03 80.97 C48.71 83.32, 39.44 82.62, 32.12 80.81 C24.79 79.01, 17.4 75.36, 12.08 70.14 C6.77 64.92, 1.67 56.91, 0.24 49.5 C-1.19 42.1, 0.46 32.87, 3.51 25.7 C6.56 18.54, 11.69 10.93, 18.54 6.53 C25.39 2.12, 39.27 0.18, 44.6 -0.73 C49.92 -1.64, 50.48 0.17, 50.47 1.06 M47.72 1.18 C55.01 0.96, 64.28 4, 70.07 8.3 C75.86 12.59, 80.36 20.01, 82.46 26.96 C84.56 33.92, 84.45 42.57, 82.69 50.01 C80.93 57.45, 77.37 66.46, 71.91 71.62 C66.45 76.77, 57.38 79.64, 49.94 80.96 C42.51 82.28, 34.59 82.27, 27.31 79.53 C20.04 76.78, 10.72 70.45, 6.29 64.48 C1.86 58.5, 0.87 51.17, 0.72 43.67 C0.56 36.18, 1.59 25.96, 5.34 19.5 C9.09 13.05, 16.36 8.11, 23.24 4.95 C30.12 1.8, 42.75 1.36, 46.64 0.56 C50.53 -0.24, 46.77 -0.37, 46.58 0.15" stroke="none" stroke-width="0" fill="#ffffff"/><path d="M60.85 3.51 C67.84 6.3, 75.77 14.42, 79.83 20.9 C83.89 27.37, 85.5 35.1, 85.21 42.35 C84.93 49.6, 82.52 58.29, 78.1 64.4 C73.68 70.51, 65.75 75.97, 58.68 79.03 C51.61 82.09, 43.02 83.78, 35.69 82.76 C28.36 81.74, 20.33 77.92, 14.7 72.93 C9.07 67.93, 4 60.06, 1.92 52.78 C-0.15 45.5, -0.12 36.42, 2.25 29.25 C4.62 22.08, 10.19 14.52, 16.15 9.75 C22.1 4.98, 29.91 1.31, 37.96 0.62 C46.01 -0.07, 59.81 4.38, 64.46 5.62 C69.12 6.86, 66.12 7.45, 65.89 8.08 M35.91 -0.5 C42.8 -2.47, 50.59 -0.43, 57.45 2.8 C64.32 6.02, 72.54 12.54, 77.1 18.86 C81.67 25.17, 84.44 33.55, 84.84 40.67 C85.25 47.79, 83.36 55.39, 79.51 61.57 C75.65 67.74, 68.72 74.36, 61.72 77.73 C54.73 81.1, 45.34 82.46, 37.53 81.77 C29.72 81.08, 20.73 78.04, 14.86 73.6 C8.99 69.15, 4.42 61.95, 2.32 55.11 C0.21 48.27, 0.37 39.76, 2.22 32.57 C4.08 25.38, 7.89 17.41, 13.44 11.95 C19 6.5, 31.85 1.85, 35.54 -0.15 C39.22 -2.15, 35.3 -0.89, 35.55 -0.03" stroke="#1e1e1e" stroke-width="2" fill="none"/></g></svg></div>

```
ASCII-Darstellung:

    ●  ← Startknoten (gefüllter Kreis)
    │
    │  Ablauf beginnt hier
    ▼
```

>[!note] Startknoten
>- Gefüllter schwarzer Kreis
>- Nur EINER pro Diagramm
>- Keine eingehenden Pfeile
>- Ein ausgehender Pfeil

## Ende
>Wo der Ablauf eines Systems endet.

<div class="excalidraw-svg"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 74 71" width="74" height="71" class="excalidraw-svg" style="max-width: 100%; height: auto;"><!-- svg-source:excalidraw --><metadata/><defs><style class="style-fonts">/**/</style></defs><rect x="0" y="0" width="74" height="71" fill="#ffffff"/><g stroke-linecap="round" transform="translate(22 20) rotate(0 14.5 15)"><path d="M12.19 0.25 C15.06 -0.44, 19.28 0.29, 21.94 1.94 C24.6 3.58, 27.08 7.1, 28.14 10.13 C29.19 13.15, 29.31 17.06, 28.25 20.08 C27.18 23.09, 24.55 26.64, 21.75 28.2 C18.94 29.75, 14.49 30.13, 11.44 29.4 C8.38 28.68, 5.27 26.35, 3.43 23.85 C1.6 21.35, 0.46 17.46, 0.42 14.4 C0.38 11.34, 1.11 7.88, 3.19 5.49 C5.26 3.1, 11.24 0.98, 12.88 0.06 C14.51 -0.86, 12.98 -0.21, 13.01 -0.02 M13.79 -0.24 C16.79 -0.43, 21.42 1.63, 23.82 3.75 C26.23 5.87, 27.66 9.43, 28.22 12.48 C28.79 15.52, 28.54 19.3, 27.21 22.03 C25.88 24.76, 23.06 27.6, 20.23 28.88 C17.4 30.16, 13.24 30.85, 10.25 29.71 C7.25 28.56, 4 24.92, 2.24 22 C0.49 19.08, -0.68 15.13, -0.3 12.19 C0.09 9.24, 2.18 6.35, 4.54 4.33 C6.9 2.31, 12.16 0.76, 13.86 0.05 C15.56 -0.66, 14.67 -0.11, 14.75 0.09" stroke="none" stroke-width="0" fill="#ffffff"/><path d="M10.83 0.05 C13.66 -0.77, 18.57 0.33, 21.39 1.8 C24.21 3.27, 26.57 5.89, 27.73 8.86 C28.9 11.83, 29.27 16.47, 28.36 19.61 C27.45 22.76, 24.92 26.09, 22.3 27.75 C19.67 29.41, 15.75 30.05, 12.63 29.58 C9.5 29.12, 5.71 27.25, 3.57 24.95 C1.43 22.65, -0.1 18.91, -0.23 15.77 C-0.36 12.64, 0.72 8.73, 2.77 6.14 C4.82 3.55, 10.54 1.16, 12.06 0.23 C13.59 -0.71, 11.97 0.35, 11.93 0.52 M18.44 1.01 C21.36 1.62, 24.08 3.72, 25.73 6.26 C27.37 8.81, 28.33 13.12, 28.33 16.28 C28.32 19.44, 27.81 23.04, 25.69 25.22 C23.57 27.41, 18.72 29.11, 15.6 29.39 C12.48 29.68, 9.56 28.59, 6.95 26.93 C4.34 25.26, 1 22.4, -0.05 19.39 C-1.11 16.38, -0.67 11.89, 0.62 8.87 C1.91 5.85, 4.9 2.71, 7.69 1.25 C10.47 -0.2, 15.62 0.28, 17.34 0.13 C19.06 -0.02, 18.07 0.17, 18.01 0.38" stroke="#1e1e1e" stroke-width="2" fill="none"/></g><g stroke-linecap="round" transform="translate(10 10) rotate(0 27 25.5)"><path d="M23.55 0.51 C29.05 -0.57, 36.03 0.2, 40.89 3.07 C45.74 5.95, 50.81 12.42, 52.67 17.77 C54.53 23.12, 54.19 30.23, 52.04 35.16 C49.89 40.09, 44.94 44.88, 39.77 47.36 C34.6 49.84, 26.74 51.03, 21 50.04 C15.26 49.06, 8.89 45.6, 5.32 41.47 C1.76 37.33, -0.73 30.74, -0.39 25.24 C-0.05 19.74, 3.04 12.66, 7.38 8.47 C11.72 4.28, 22.03 1.57, 25.67 0.1 C29.31 -1.36, 28.94 -0.63, 29.23 -0.32 M20.13 1 C25.01 -0.55, 32.51 1.13, 38.03 3.53 C43.54 5.92, 50.95 10.63, 53.23 15.38 C55.52 20.12, 53.51 26.93, 51.73 31.99 C49.95 37.06, 47.47 42.59, 42.57 45.77 C37.67 48.95, 28.43 51.62, 22.34 51.08 C16.25 50.55, 9.87 46.71, 6.03 42.56 C2.2 38.4, -0.39 31.63, -0.67 26.13 C-0.94 20.63, 0.7 13.89, 4.37 9.53 C8.04 5.17, 18.76 1.55, 21.36 -0.03 C23.95 -1.6, 19.9 -0.41, 19.92 0.06" stroke="#1e1e1e" stroke-width="2" fill="none"/></g></svg></div>

```
ASCII-Darstellung:

    │
    │  Ablauf endet hier
    ▼
    ◉  ← Endknoten (Kreis mit Ring)
```

>[!note] Endknoten
>- Kreis mit Ring (Bull's Eye)
>- Kann mehrere geben (verschiedene Enden)
>- Nur eingehende Pfeile
>- Keine ausgehenden Pfeile

## Aktivitäten
>Eine Aktion oder Tätigkeit im Ablauf.

<div class="excalidraw-svg"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 229 78" width="229" height="78" class="excalidraw-svg" style="max-width: 100%; height: auto;"><!-- svg-source:excalidraw --><metadata/><defs><style class="style-fonts">      @font-face { font-family: Excalifont; src: url(data:font/woff2;base64,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); }</style></defs><rect x="0" y="0" width="229" height="78" fill="#ffffff"/><g stroke-linecap="round" transform="translate(10 10) rotate(0 104.5 29)"><path d="M14.5 0 C63.74 -0.17, 112.33 -0.14, 194.5 0 M14.5 0 C57.46 0.93, 101 1.26, 194.5 0 M194.5 0 C205.25 -0.15, 207.5 5.03, 209 14.5 M194.5 0 C203.1 -2.2, 211.17 3.53, 209 14.5 M209 14.5 C208.06 22.38, 207.49 30.25, 209 43.5 M209 14.5 C208.27 26.43, 208.19 36.26, 209 43.5 M209 43.5 C209.37 51.6, 203.79 57.07, 194.5 58 M209 43.5 C208.02 51.46, 203.29 58.55, 194.5 58 M194.5 58 C148.32 56.32, 101.29 56.76, 14.5 58 M194.5 58 C137.44 57.73, 80.84 58.01, 14.5 58 M14.5 58 C5.94 56.13, 1.48 53.14, 0 43.5 M14.5 58 C4.25 56.67, 1.43 51.1, 0 43.5 M0 43.5 C1.95 32.34, -0.04 19.71, 0 14.5 M0 43.5 C-0.05 36.76, 0.16 29.71, 0 14.5 M0 14.5 C-0.64 5.35, 5.9 -1.37, 14.5 0 M0 14.5 C1.01 4.93, 4.07 1.66, 14.5 0" stroke="#1e1e1e" stroke-width="2" fill="none"/></g><g transform="translate(66.13003540039062 26.5) rotate(0 48.369964599609375 12.5)"><text x="48.369964599609375" y="17.619999999999997" font-family="Excalifont, Xiaolai, sans-serif, Segoe UI Emoji" font-size="20px" fill="#1e1e1e" text-anchor="middle" style="white-space: pre;" direction="ltr" dominant-baseline="alphabetic">Stehe auf</text></g></svg></div>

```
ASCII-Darstellung:

┌──────────────────┐
│ Aktivität Name   │  ← Abgerundetes Rechteck
└──────────────────┘
```

>[!note] Aktivitäten
>**Eigenschaften:**
>- Abgerundetes Rechteck
>- Enthält Beschreibung der Aktion
>- Verben verwenden ("Bestellen", "Prüfen", "Senden")
>- Kurze, klare Beschreibung
>
>**Beispiele:**
>- "Daten eingeben"
>- "Rechnung erstellen"
>- "Email versenden"
>- "Artikel verpacken"

## Entscheidungen (Verzweigungen)

>Wenn der Ablauf sich aufteilt.

```
ASCII-Darstellung:

         │
         ▼
        ◆  ← Raute (Entscheidung)
       ╱ ╲
      ╱   ╲
  [ja]     [nein]
    ╱       ╲
   ▼         ▼
```

>[!important] Verzweigung (Decision)
>**Symbol:** Raute (Diamant)
>
>**Verwendung:**
>- Bedingungen prüfen
>- IF-THEN-ELSE darstellen
>- Mehrere Ausgänge möglich
>- Bedingungen an Pfeile schreiben
>
>**Beispiel:**
>```
>        ◆
>       ╱ ╲
>  [Geld    ]
>  [genug?]
>     ╱     ╲
> [ja]      [nein]
>   ╱         ╲
>  ▼           ▼
>Bestellen  Abbrechen
>```

## Zusammenführung (Merge)

>Mehrere Pfade kommen zusammen.

```
ASCII-Darstellung:

  Pfad 1     Pfad 2
    │          │
    ▼          ▼
     ╲        ╱
      ╲      ╱
       ╲    ╱
        ◆  ← Merge
         │
         ▼
   Weiter geht's
```

## Parallelisierung (Fork)

>Mehrere Aktivitäten laufen gleichzeitig.

```
ASCII-Darstellung:

         │
         ▼
    ═════════  ← Dicker Balken (Fork)
    ║   ║   ║
    ▼   ▼   ▼
  Akt1 Akt2 Akt3  (parallel!)
```

>[!note] Fork (Parallelisierung)
>**Symbol:** Dicker horizontaler Balken
>
>**Bedeutung:**
>- Aktivitäten laufen parallel
>- Alle Pfade werden gleichzeitig gestartet
>- Nicht nacheinander!
>
>**Beispiel:**
>```
>    Bestellung eingegangen
>           │
>           ▼
>      ═════════
>      ║   ║   ║
>      ▼   ▼   ▼
>   Rechnung  Lager  Versand
>   erstellen prüfen vorbereiten
>```

## Synchronisation (Join)

>Warten bis alle parallelen Aktivitäten fertig sind.

```
ASCII-Darstellung:

  Akt1  Akt2  Akt3
    ║    ║    ║
    ▼    ▼    ▼
    ═════════  ← Join
         │
         ▼
  Alle fertig, weiter!
```

## Partitionen (Swimlanes)

>Zeigt, wer für welche Aktivität zuständig ist.

```
ASCII-Darstellung:

┌─────────────┬─────────────┬─────────────┐
│   Kunde     │  System     │   Admin     │
├─────────────┼─────────────┼─────────────┤
│             │             │             │
│ Bestellen   │             │             │
│      │      │             │             │
│      └──────┼──→ Prüfen   │             │
│             │      │      │             │
│             │      └──────┼──→ Freigabe │
│             │             │             │
└─────────────┴─────────────┴─────────────┘
```

>[!note] Swimlanes
>**Verwendung:**
>- Zuständigkeiten zeigen
>- Rollen trennen
>- Abteilungen darstellen
>- Verantwortlichkeiten klar machen

# III. Vollständiges Beispiel: Online-Bestellung

>Ein praktisches Beispiel für den Bestellprozess.

>[!example] Bestellprozess
>```
>Kunde                System              Lager
>  │                    │                   │
>  ● Start              │                   │
>  │                    │                   │
>  ▼                    │                   │
>┌─────────┐            │                   │
>│Produkt  │            │                   │
>│auswählen│            │                   │
>└────┬────┘            │                   │
>     │                 │                   │
>     ▼                 │                   │
>┌─────────┐            │                   │
>│In Waren-│            │                   │
>│korb     │            │                   │
>└────┬────┘            │                   │
>     │                 │                   │
>     └─────────────────┼──→                │
>                       ▼                   │
>                  ┌─────────┐              │
>                  │Bestell- │              │
>                  │ung      │              │
>                  │prüfen   │              │
>                  └────┬────┘              │
>                       │                   │
>                       ▼                   │
>                      ◆                    │
>                     ╱ ╲                   │
>                [Verfügbar?]               │
>                   ╱     ╲                 │
>              [ja]         [nein]          │
>                ╱             ╲            │
>               ▼               ▼           │
>          ══════════      ┌────────┐       │
>          ║      ║        │Kunde   │       │
>          ║      ║        │benach- │       │
>          ║      ║        │richtigen│      │
>          ▼      ▼        └────┬───┘       │
>     ┌────┐  ┌────┐           │           │
>     │Rech│  │────┼───────────┼──→        │
>     │nung│  │    │           ▼           │
>     └──┬─┘  └──┬─┘      ┌─────────┐      │
>        ║       ║        │Artikel  │      │
>        ║       ║        │entnehmen│      │
>        ▼       ▼        └────┬────┘      │
>      ══════════               │           │
>           │                   │           │
>           ▼                   │           │
>      ┌─────────┐              │           │
>      │Versand  │◀─────────────┘           │
>      │         │                           │
>      └────┬────┘                           │
>           │                                │
>           ▼                                │
>           ◉ Ende                           │
>```

# IV. Schritt-für-Schritt Anleitung

>So erstellst du dein eigenes [[wiki/UML-Aktivitätsdiagramm\|UML-Aktivitätsdiagramm]].

>[!tip] Vorgehensweise
>**1. Prozess verstehen:**
>- Was soll ablaufen?
>- Wer ist beteiligt?
>- Was sind die Schritte?
>
>**2. Hauptaktivitäten finden:**
>- Alle wichtigen Schritte auflisten
>- Verben verwenden
>- Reihenfolge festlegen
>
>**3. Entscheidungen identifizieren:**
>- Wo gibt es IF-THEN?
>- Welche Bedingungen?
>- Alternative Pfade?
>
>**4. Parallele Abläufe erkennen:**
>- Was läuft gleichzeitig?
>- Fork und Join einfügen
>
>**5. Swimlanes hinzufügen:**
>- Wer macht was?
>- Zuständigkeiten klären

# V. Häufige Fehler

>Das solltest du vermeiden.

>[!warning] Typische Fehler
>**1. Mehrere Starts:**
>```
>❌ FALSCH:
>● Start 1    ● Start 2
>│            │
>▼            ▼
>
>✅ RICHTIG:
>     ● Start
>     │
>     ▼
>    ◆
>   ╱ ╲
>  ▼   ▼
>```
>
>**2. Aktivitäten ohne Verb:**
>```
>❌ FALSCH:
>┌──────────┐
>│ Rechnung │
>└──────────┘
>
>✅ RICHTIG:
>┌──────────────┐
>│ Rechnung     │
>│ erstellen    │
>└──────────────┘
>```
>
>**3. Fehlende Bedingungen:**
>```
>❌ FALSCH:
>    ◆
>   ╱ ╲
>  ▼   ▼
>(keine Labels!)
>
>✅ RICHTIG:
>      ◆
>     ╱ ╲
>[ja]   [nein]
>   ▼     ▼
>```
>
>**4. Fork ohne Join:**
>```
>❌ FALSCH:
>  ═══════
>  ║  ║  ║
>  ▼  ▼  ▼
>(nie zusammengeführt)
>
>✅ RICHTIG:
>  ═══════
>  ║  ║  ║
>  ▼  ▼  ▼
>  Akt1 Akt2 Akt3
>  ║  ║  ║
>  ▼  ▼  ▼
>  ═══════
>```

# VI. Prüfungswissen

>Was du für die [[wiki/IHK\|IHK]]-Prüfung wissen musst.

>[!important] Prüfungsrelevant
>**Symbole kennen:**
>- ● Start (gefüllter Kreis)
>- ◉ Ende (Kreis mit Ring)
>- Rechteck mit runden Ecken = Aktivität
>- ◆ Raute = Entscheidung
>- ═ Dicker Balken = Fork/Join
>
>**Regeln:**
>- Nur ein Start
>- Kann mehrere Enden haben
>- Aktivitäten mit Verben beschreiben
>- Bedingungen an Pfeile
>- Fork und Join immer paarweise
>
>**Unterschied zu anderen Diagrammen:**
>- [[wiki/UML-Klassendiagramm\|UML-Klassendiagramm]]: Struktur von Klassen
>- [[wiki/UML-Anwendungsfalldiagramm\|UML-Anwendungsfalldiagramm]]: Was System kann
>- [[wiki/UML-Aktivitätsdiagramm\|UML-Aktivitätsdiagramm]]: WIE Abläufe funktionieren

>[!example] Typische Prüfungsfrage
>**Frage:** "Erstellen Sie ein Aktivitätsdiagramm für einen Login-Vorgang."
>
>**Antwort:**
>```
>        ● Start
>        │
>        ▼
>  ┌──────────────┐
>  │ Benutzername │
>  │ eingeben     │
>  └──────┬───────┘
>         │
>         ▼
>  ┌──────────────┐
>  │ Passwort     │
>  │ eingeben     │
>  └──────┬───────┘
>         │
>         ▼
>  ┌──────────────┐
>  │ Daten        │
>  │ prüfen       │
>  └──────┬───────┘
>         │
>         ▼
>        ◆
>       ╱ ╲
>  [korrekt?]
>     ╱     ╲
>[ja]       [nein]
>   ╱         ╲
>  ▼           ▼
>┌──────┐  ┌─────────┐
>│Login │  │Fehler-  │
>│erfolg│  │meldung  │
>└──┬───┘  └────┬────┘
>   │           │
>   ▼           ▼
>   ◉           ◉
> Ende        Ende
>```