---
{"dg-publish":true,"permalink":"/02-resources/notes/sql/","tags":["code/SQL","GFN/prüfungsrelevant/AP2","datenbank"],"noteIcon":"","updated":"2025-08-26T16:35:07.000+02:00"}
---

>SQL (Structured Query Language) ist eine standardisierte Programmiersprache zur [[02 - RESOURCES/Notes/Verwaltung\|Verwaltung]] und Bearbeitung von Daten in relationalen Datenbanken.
>>Insgesamt ist SQL ein unverzichtbares Werkzeug für Entwickler und Datenanalysten, um mit Daten effizient zu arbeiten.

# Datenbank erstellen

Am besten fangen wir an in den wir lernen wie man einer [[02 - RESOURCES/Notes/SQL Datenbank\|SQL Datenbank]] erstellt.
```sql
CREATE DATABASE schule;
USE schule;
```

<style> .container {font-family: sans-serif; text-align: center;} .button-wrapper button {z-index: 1;height: 40px; width: 100px; margin: 10px;padding: 5px;} .excalidraw .App-menu_top .buttonList { display: flex;} .excalidraw-wrapper { height: 800px; margin: 50px; position: relative;} :root[dir="ltr"] .excalidraw .layer-ui__wrapper .zen-mode-transition.App-menu_bottom--transition-left {transform: none;} </style><script src="https://cdn.jsdelivr.net/npm/react@17/umd/react.production.min.js"></script><script src="https://cdn.jsdelivr.net/npm/react-dom@17/umd/react-dom.production.min.js"></script><script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@excalidraw/excalidraw@0/dist/excalidraw.production.min.js"></script><div id="SQL_2024-10-09_1517.33.excalidraw.md1"></div><script>(function(){const InitialData={"type":"excalidraw","version":2,"source":"https://github.com/zsviczian/obsidian-excalidraw-plugin/releases/tag/2.3.0","elements":[{"type":"ellipse","version":325,"versionNonce":1740327332,"index":"a2","isDeleted":false,"id":"IjvRKumaDsFuPGvtc5jp7","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":182.82710731033245,"y":-642.2413111657164,"strokeColor":"#1e1e1e","backgroundColor":"transparent","width":123.87649400618038,"height":104.66891454936439,"seed":2130821532,"groupIds":[],"frameId":null,"roundness":{"type":2},"boundElements":[],"updated":1728480476212,"link":null,"locked":false},{"type":"line","version":368,"versionNonce":2075300508,"index":"a4","isDeleted":false,"id":"LfVf23JmekxVZW1xO4SS2","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":182.37167902354503,"y":-603.529906788785,"strokeColor":"#1e1e1e","backgroundColor":"transparent","width":1.3662848603622837,"height":128.43077687405463,"seed":1509919396,"groupIds":[],"frameId":null,"roundness":{"type":2},"boundElements":[],"updated":1728480476212,"link":null,"locked":false,"startBinding":null,"endBinding":null,"lastCommittedPoint":null,"startArrowhead":null,"endArrowhead":null,"points":[[0,0],[-1.3662848603622837,128.43077687405463]]},{"type":"line","version":421,"versionNonce":1013609764,"index":"a5","isDeleted":false,"id":"cbUZxU-Bl-m2wgTHXjru1","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":306.12879950918455,"y":-602.5919962741839,"strokeColor":"#1e1e1e","backgroundColor":"transparent","width":1.3662848603622837,"height":128.43077687405463,"seed":390657700,"groupIds":[],"frameId":null,"roundness":{"type":2},"boundElements":[],"updated":1728480476212,"link":null,"locked":false,"startBinding":null,"endBinding":null,"lastCommittedPoint":null,"startArrowhead":null,"endArrowhead":null,"points":[[0,0],[-1.3662848603622837,128.43077687405463]]},{"type":"line","version":499,"versionNonce":1836965660,"index":"a8","isDeleted":false,"id":"ecsuAy7q1GH7WhdQMJxcq","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":183.51361520689693,"y":-559.7485825175754,"strokeColor":"#1e1e1e","backgroundColor":"transparent","width":123.42106571939293,"height":26.414840633670813,"seed":1435370020,"groupIds":[],"frameId":null,"roundness":{"type":2},"boundElements":[],"updated":1728480476212,"link":null,"locked":false,"startBinding":null,"endBinding":null,"lastCommittedPoint":null,"startArrowhead":null,"endArrowhead":null,"points":[[0,0],[65.12624501060218,26.414840633670813],[123.42106571939293,2.277141433937139]]},{"type":"line","version":480,"versionNonce":422064292,"index":"a9","isDeleted":false,"id":"4vp9bb8_x3QYpw8xgXeSb","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":182.60275863332197,"y":-535.1554550310543,"strokeColor":"#1e1e1e","backgroundColor":"transparent","width":123.42106571939293,"height":26.414840633670813,"seed":1239505692,"groupIds":[],"frameId":null,"roundness":{"type":2},"boundElements":[],"updated":1728480476212,"link":null,"locked":false,"startBinding":null,"endBinding":null,"lastCommittedPoint":null,"startArrowhead":null,"endArrowhead":null,"points":[[0,0],[65.12624501060218,26.414840633670813],[123.42106571939293,2.277141433937139]]},{"type":"line","version":494,"versionNonce":288070556,"index":"aA","isDeleted":false,"id":"Vh3SHIuojPNYijo7crqYc","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":182.60275863332197,"y":-504.64175981629666,"strokeColor":"#1e1e1e","backgroundColor":"transparent","width":123.42106571939293,"height":26.414840633670813,"seed":205103900,"groupIds":[],"frameId":null,"roundness":{"type":2},"boundElements":[],"updated":1728480476212,"link":null,"locked":false,"startBinding":null,"endBinding":null,"lastCommittedPoint":null,"startArrowhead":null,"endArrowhead":null,"points":[[0,0],[65.12624501060218,26.414840633670813],[123.42106571939293,2.277141433937139]]},{"type":"line","version":519,"versionNonce":497187876,"index":"aE","isDeleted":false,"id":"PTyiPOV0adIQuLg2Y3QVw","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":181.53951450014284,"y":-476.50983640212354,"strokeColor":"#1e1e1e","backgroundColor":"transparent","width":123.42106571939293,"height":26.414840633670813,"seed":1782664732,"groupIds":[],"frameId":null,"roundness":{"type":2},"boundElements":[],"updated":1728480476212,"link":null,"locked":false,"startBinding":null,"endBinding":null,"lastCommittedPoint":null,"startArrowhead":null,"endArrowhead":null,"points":[[0,0],[65.12624501060218,26.414840633670813],[123.42106571939293,2.277141433937139]]},{"type":"text","version":343,"versionNonce":1626195996,"index":"aF","isDeleted":false,"id":"1JL5BWcW","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":193.8499700166119,"y":-684.3140595629245,"strokeColor":"#1e1e1e","backgroundColor":"transparent","width":97.06228407764708,"height":22.771414339371393,"seed":1979160860,"groupIds":[],"frameId":null,"roundness":null,"boundElements":[],"updated":1728480476212,"link":null,"locked":false,"fontSize":18.217131471497115,"fontFamily":5,"text":"Datenbank","rawText":"Datenbank","textAlign":"left","verticalAlign":"top","containerId":null,"originalText":"Datenbank","autoResize":true,"lineHeight":1.25},{"id":"SpHY2rSB","type":"text","x":219.93420610693556,"y":-603.0162368556959,"width":61.31996154785156,"height":25,"angle":0,"strokeColor":"#1e1e1e","backgroundColor":"transparent","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"groupIds":[],"frameId":null,"index":"aG","roundness":null,"seed":14871964,"version":59,"versionNonce":1902710948,"isDeleted":false,"boundElements":null,"updated":1728480484780,"link":null,"locked":false,"text":"Schule","rawText":"Schule","fontSize":20,"fontFamily":5,"textAlign":"left","verticalAlign":"top","containerId":null,"originalText":"Schule","autoResize":true,"lineHeight":1.25},{"id":"YaDF3DdP","type":"text","x":-55.777682621861274,"y":-205.7843113902566,"width":8,"height":25,"angle":0,"strokeColor":"#1e1e1e","backgroundColor":"transparent","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"groupIds":[],"frameId":null,"index":"a2V","roundness":null,"seed":1168079780,"version":5,"versionNonce":1436512420,"isDeleted":true,"boundElements":null,"updated":1728480459025,"link":null,"locked":false,"text":"","rawText":"","fontSize":20,"fontFamily":5,"textAlign":"center","verticalAlign":"middle","containerId":"IjvRKumaDsFuPGvtc5jp7","originalText":"","autoResize":true,"lineHeight":1.25},{"id":"mur5VPbp","type":"text","x":-55.777682621861274,"y":-205.7843113902566,"width":8,"height":25,"angle":0,"strokeColor":"#1e1e1e","backgroundColor":"transparent","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"groupIds":[],"frameId":null,"index":"a3","roundness":null,"seed":1529942940,"version":5,"versionNonce":1509194524,"isDeleted":true,"boundElements":null,"updated":1728480452789,"link":null,"locked":false,"text":"","rawText":"","fontSize":20,"fontFamily":5,"textAlign":"center","verticalAlign":"middle","containerId":"IjvRKumaDsFuPGvtc5jp7","originalText":"","autoResize":true,"lineHeight":1.25}],"appState":{"theme":"dark","viewBackgroundColor":"#ffffff","currentItemStrokeColor":"#1e1e1e","currentItemBackgroundColor":"transparent","currentItemFillStyle":"solid","currentItemStrokeWidth":2,"currentItemStrokeStyle":"solid","currentItemRoughness":1,"currentItemOpacity":100,"currentItemFontFamily":5,"currentItemFontSize":20,"currentItemTextAlign":"left","currentItemStartArrowhead":null,"currentItemEndArrowhead":"arrow","scrollX":1000.2781548400692,"scrollY":1174.5496891261469,"zoom":{"value":1},"currentItemRoundness":"round","gridSize":null,"gridColor":{"Bold":"#C9C9C9","Regular":"#EDEDED"},"currentStrokeOptions":null,"previousGridSize":null,"frameRendering":{"enabled":true,"clip":true,"name":true,"outline":true},"objectsSnapModeEnabled":false},"files":{}};InitialData.scrollToContent=true;App=()=>{const e=React.useRef(null),t=React.useRef(null),[n,i]=React.useState({width:void 0,height:void 0});return React.useEffect(()=>{i({width:t.current.getBoundingClientRect().width,height:t.current.getBoundingClientRect().height});const e=()=>{i({width:t.current.getBoundingClientRect().width,height:t.current.getBoundingClientRect().height})};return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[t]),React.createElement(React.Fragment,null,React.createElement("div",{className:"excalidraw-wrapper",ref:t},React.createElement(ExcalidrawLib.Excalidraw,{ref:e,width:n.width,height:n.height,initialData:InitialData,viewModeEnabled:!0,zenModeEnabled:!0,gridModeEnabled:!1})))},excalidrawWrapper=document.getElementById("SQL_2024-10-09_1517.33.excalidraw.md1");ReactDOM.render(React.createElement(App),excalidrawWrapper);})();</script>

# Tabellen erstellen

>[!info] Als nächstes erstellen wir ein paar [[02 - RESOURCES/Notes/SQL Tabelle\|SQL Tabelle]]n.

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

<div id="SQL_2024-10-10_1359.18.excalidraw.md2"></div><script>(function(){const InitialData={"type":"excalidraw","version":2,"source":"https://github.com/zsviczian/obsidian-excalidraw-plugin/releases/tag/2.3.0","elements":[{"type":"ellipse","version":424,"versionNonce":1904061259,"index":"a0","isDeleted":false,"id":"IY_pQzTFfD6SVrwrFupAL","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":-365.8093068469362,"y":-190.04776451739914,"strokeColor":"#1e1e1e","backgroundColor":"transparent","width":123.87649400618038,"height":104.66891454936439,"seed":283055333,"groupIds":[],"frameId":null,"roundness":{"type":2},"boundElements":[],"updated":1728561907858,"link":null,"locked":false},{"type":"line","version":467,"versionNonce":450890219,"index":"a1","isDeleted":false,"id":"2rF7QTESijIREJRqj3nCI","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":-366.2647351337236,"y":-151.3363601404677,"strokeColor":"#1e1e1e","backgroundColor":"transparent","width":1.3662848603622837,"height":128.43077687405463,"seed":139800645,"groupIds":[],"frameId":null,"roundness":{"type":2},"boundElements":[],"updated":1728561907858,"link":null,"locked":false,"startBinding":null,"endBinding":null,"lastCommittedPoint":null,"startArrowhead":null,"endArrowhead":null,"points":[[0,0],[-1.3662848603622837,128.43077687405463]]},{"type":"line","version":520,"versionNonce":834507915,"index":"a2","isDeleted":false,"id":"tlQbG58TEljvomzhZ-shX","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":-242.5076146480841,"y":-150.39844962586662,"strokeColor":"#1e1e1e","backgroundColor":"transparent","width":1.3662848603622837,"height":128.43077687405463,"seed":355524517,"groupIds":[],"frameId":null,"roundness":{"type":2},"boundElements":[],"updated":1728561907858,"link":null,"locked":false,"startBinding":null,"endBinding":null,"lastCommittedPoint":null,"startArrowhead":null,"endArrowhead":null,"points":[[0,0],[-1.3662848603622837,128.43077687405463]]},{"type":"line","version":598,"versionNonce":902875947,"index":"a3","isDeleted":false,"id":"_JOggTbic-CCEchIItuqS","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":-365.1227989503717,"y":-107.55503586925815,"strokeColor":"#1e1e1e","backgroundColor":"transparent","width":123.42106571939293,"height":26.414840633670813,"seed":497001221,"groupIds":[],"frameId":null,"roundness":{"type":2},"boundElements":[],"updated":1728561907858,"link":null,"locked":false,"startBinding":null,"endBinding":null,"lastCommittedPoint":null,"startArrowhead":null,"endArrowhead":null,"points":[[0,0],[65.12624501060218,26.414840633670813],[123.42106571939293,2.277141433937139]]},{"type":"line","version":579,"versionNonce":1266953675,"index":"a4","isDeleted":false,"id":"sZwypDuCqbeL2xDPq_7rt","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":-366.03365552394666,"y":-82.96190838273705,"strokeColor":"#1e1e1e","backgroundColor":"transparent","width":123.42106571939293,"height":26.414840633670813,"seed":1713306213,"groupIds":[],"frameId":null,"roundness":{"type":2},"boundElements":[],"updated":1728561907858,"link":null,"locked":false,"startBinding":null,"endBinding":null,"lastCommittedPoint":null,"startArrowhead":null,"endArrowhead":null,"points":[[0,0],[65.12624501060218,26.414840633670813],[123.42106571939293,2.277141433937139]]},{"type":"line","version":593,"versionNonce":636632171,"index":"a5","isDeleted":false,"id":"fMjTBFHt81D_Fhd4ES3F6","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":-366.03365552394666,"y":-52.448213167979446,"strokeColor":"#1e1e1e","backgroundColor":"transparent","width":123.42106571939293,"height":26.414840633670813,"seed":1199334853,"groupIds":[],"frameId":null,"roundness":{"type":2},"boundElements":[],"updated":1728561907858,"link":null,"locked":false,"startBinding":null,"endBinding":null,"lastCommittedPoint":null,"startArrowhead":null,"endArrowhead":null,"points":[[0,0],[65.12624501060218,26.414840633670813],[123.42106571939293,2.277141433937139]]},{"type":"line","version":618,"versionNonce":820344587,"index":"a6","isDeleted":false,"id":"YK1ttGK_Ppy1STYXTnAnh","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":-367.0968996571258,"y":-24.31628975380633,"strokeColor":"#1e1e1e","backgroundColor":"transparent","width":123.42106571939293,"height":26.414840633670813,"seed":617964837,"groupIds":[],"frameId":null,"roundness":{"type":2},"boundElements":[],"updated":1728561907858,"link":null,"locked":false,"startBinding":null,"endBinding":null,"lastCommittedPoint":null,"startArrowhead":null,"endArrowhead":null,"points":[[0,0],[65.12624501060218,26.414840633670813],[123.42106571939293,2.277141433937139]]},{"type":"text","version":442,"versionNonce":2061000107,"index":"a7","isDeleted":false,"id":"hgKEhREb","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":-354.7864441406567,"y":-232.12051291460725,"strokeColor":"#1e1e1e","backgroundColor":"transparent","width":95.29402160644531,"height":22.771414339371393,"seed":563574917,"groupIds":[],"frameId":null,"roundness":null,"boundElements":[],"updated":1728561907858,"link":null,"locked":false,"fontSize":18.217131471497115,"fontFamily":5,"text":"Datenbank","rawText":"Datenbank","textAlign":"left","verticalAlign":"top","containerId":null,"originalText":"Datenbank","autoResize":true,"lineHeight":1.25},{"type":"text","version":158,"versionNonce":1593143371,"index":"a8","isDeleted":false,"id":"cABqnY0o","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":-328.70220805033307,"y":-150.8226902073786,"strokeColor":"#1e1e1e","backgroundColor":"transparent","width":61.31996154785156,"height":25,"seed":394272741,"groupIds":[],"frameId":null,"roundness":null,"boundElements":[],"updated":1728561907858,"link":null,"locked":false,"fontSize":20,"fontFamily":5,"text":"Schule","rawText":"Schule","textAlign":"left","verticalAlign":"top","containerId":null,"originalText":"Schule","autoResize":true,"lineHeight":1.25},{"type":"rectangle","version":43,"versionNonce":689390987,"index":"a9","isDeleted":false,"id":"gfb9_MfdkeY371euZtX3c","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":-95.5,"y":-302.4375,"strokeColor":"#1e1e1e","backgroundColor":"transparent","width":248,"height":95,"seed":1948658405,"groupIds":[],"frameId":null,"roundness":{"type":3},"boundElements":[],"updated":1728561575520,"link":null,"locked":false},{"type":"line","version":76,"versionNonce":973079051,"index":"aA","isDeleted":false,"id":"l-uArE5_6Pn2EsHsoZbIs","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":-42.5,"y":-302.4375,"strokeColor":"#1e1e1e","backgroundColor":"transparent","width":0,"height":94,"seed":1489787947,"groupIds":[],"frameId":null,"roundness":{"type":2},"boundElements":[],"updated":1728561621616,"link":null,"locked":false,"startBinding":null,"endBinding":null,"lastCommittedPoint":null,"startArrowhead":null,"endArrowhead":null,"points":[[0,0],[0,94]]},{"type":"line","version":103,"versionNonce":81030597,"index":"aB","isDeleted":false,"id":"hK6k81UnEIek629BDpw3K","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":24.568925515301522,"y":-302.2739508800581,"strokeColor":"#1e1e1e","backgroundColor":"transparent","width":0,"height":94,"seed":145735045,"groupIds":[],"frameId":null,"roundness":{"type":2},"boundElements":[],"updated":1728561617651,"link":null,"locked":false,"startBinding":null,"endBinding":null,"lastCommittedPoint":null,"startArrowhead":null,"endArrowhead":null,"points":[[0,0],[0,94]]},{"type":"line","version":108,"versionNonce":2006040235,"index":"aC","isDeleted":false,"id":"onqlkquLELgDim5ahTcf0","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":91.45191780085293,"y":-304.0756080143247,"strokeColor":"#1e1e1e","backgroundColor":"transparent","width":0,"height":94,"seed":630314789,"groupIds":[],"frameId":null,"roundness":{"type":2},"boundElements":[],"updated":1728561612586,"link":null,"locked":false,"startBinding":null,"endBinding":null,"lastCommittedPoint":null,"startArrowhead":null,"endArrowhead":null,"points":[[0,0],[0,94]]},{"type":"line","version":106,"versionNonce":805846091,"index":"aD","isDeleted":false,"id":"WPyUdl-RbZJl79umUSIcP","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":-95.5,"y":-280.4375,"strokeColor":"#1e1e1e","backgroundColor":"transparent","width":248,"height":1,"seed":86588235,"groupIds":[],"frameId":null,"roundness":{"type":2},"boundElements":[],"updated":1728561635326,"link":null,"locked":false,"startBinding":null,"endBinding":null,"lastCommittedPoint":null,"startArrowhead":null,"endArrowhead":null,"points":[[0,0],[248,-1]]},{"type":"line","version":168,"versionNonce":920900011,"index":"aE","isDeleted":false,"id":"xt2LdX_8lFHwisru7xXIo","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":-96.0519662277028,"y":-255.48539850829172,"strokeColor":"#1e1e1e","backgroundColor":"transparent","width":248,"height":1,"seed":1751862437,"groupIds":[],"frameId":null,"roundness":{"type":2},"boundElements":[],"updated":1728561644306,"link":null,"locked":false,"startBinding":null,"endBinding":null,"lastCommittedPoint":null,"startArrowhead":null,"endArrowhead":null,"points":[[0,0],[248,-1]]},{"type":"line","version":148,"versionNonce":722314891,"index":"aF","isDeleted":false,"id":"VegPrhw5vrqn-8g2kKFyQ","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":-96.05196622770282,"y":-233.48539850829172,"strokeColor":"#1e1e1e","backgroundColor":"transparent","width":248,"height":1,"seed":502961477,"groupIds":[],"frameId":null,"roundness":{"type":2},"boundElements":[],"updated":1728561651070,"link":null,"locked":false,"startBinding":null,"endBinding":null,"lastCommittedPoint":null,"startArrowhead":null,"endArrowhead":null,"points":[[0,0],[248,-1]]},{"type":"text","version":37,"versionNonce":1338906827,"index":"aG","isDeleted":false,"id":"W9ZPIsNb","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":-95.5,"y":-336.4375,"strokeColor":"#1e1e1e","backgroundColor":"transparent","width":80.79994201660156,"height":25,"seed":866356843,"groupIds":[],"frameId":null,"roundness":null,"boundElements":[],"updated":1728561671510,"link":null,"locked":false,"fontSize":20,"fontFamily":5,"text":"Schueler","rawText":"Schueler","textAlign":"left","verticalAlign":"top","containerId":null,"originalText":"Schueler","autoResize":true,"lineHeight":1.25},{"type":"rectangle","version":195,"versionNonce":453568875,"index":"aH","isDeleted":false,"id":"GkazbWg620_EcmtsLl0LX","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":-91.43456622968428,"y":29.0625,"strokeColor":"#1e1e1e","backgroundColor":"transparent","width":248,"height":95,"seed":158549061,"groupIds":[],"frameId":null,"roundness":{"type":3},"boundElements":[],"updated":1728561723454,"link":null,"locked":false},{"type":"line","version":228,"versionNonce":144606219,"index":"aI","isDeleted":false,"id":"SjIv3tBB-FNCAzUHocnQ7","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":-38.43456622968428,"y":29.0625,"strokeColor":"#1e1e1e","backgroundColor":"transparent","width":0,"height":94,"seed":1902932901,"groupIds":[],"frameId":null,"roundness":{"type":2},"boundElements":[],"updated":1728561723454,"link":null,"locked":false,"startBinding":null,"endBinding":null,"lastCommittedPoint":null,"startArrowhead":null,"endArrowhead":null,"points":[[0,0],[0,94]]},{"type":"line","version":255,"versionNonce":1911016107,"index":"aJ","isDeleted":false,"id":"ph00zjH_dcRzD7YTllW6s","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":28.634359285617222,"y":29.226049119941877,"strokeColor":"#1e1e1e","backgroundColor":"transparent","width":0,"height":94,"seed":357086981,"groupIds":[],"frameId":null,"roundness":{"type":2},"boundElements":[],"updated":1728561723454,"link":null,"locked":false,"startBinding":null,"endBinding":null,"lastCommittedPoint":null,"startArrowhead":null,"endArrowhead":null,"points":[[0,0],[0,94]]},{"type":"line","version":260,"versionNonce":2072984907,"index":"aK","isDeleted":false,"id":"kXZ2uu1YkugHkLp-iOiuW","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":95.51735157116866,"y":27.4243919856753,"strokeColor":"#1e1e1e","backgroundColor":"transparent","width":0,"height":94,"seed":797281893,"groupIds":[],"frameId":null,"roundness":{"type":2},"boundElements":[],"updated":1728561723454,"link":null,"locked":false,"startBinding":null,"endBinding":null,"lastCommittedPoint":null,"startArrowhead":null,"endArrowhead":null,"points":[[0,0],[0,94]]},{"type":"line","version":258,"versionNonce":1357863915,"index":"aL","isDeleted":false,"id":"1v1NY53fmBlxxGLKWjEfZ","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":-91.43456622968428,"y":51.0625,"strokeColor":"#1e1e1e","backgroundColor":"transparent","width":248,"height":1,"seed":1324382661,"groupIds":[],"frameId":null,"roundness":{"type":2},"boundElements":[],"updated":1728561723454,"link":null,"locked":false,"startBinding":null,"endBinding":null,"lastCommittedPoint":null,"startArrowhead":null,"endArrowhead":null,"points":[[0,0],[248,-1]]},{"type":"line","version":320,"versionNonce":1309845131,"index":"aM","isDeleted":false,"id":"00k2u3Tn3ZH_jTBBEsVjX","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":-91.98653245738709,"y":76.01460149170828,"strokeColor":"#1e1e1e","backgroundColor":"transparent","width":248,"height":1,"seed":1286011173,"groupIds":[],"frameId":null,"roundness":{"type":2},"boundElements":[],"updated":1728561723454,"link":null,"locked":false,"startBinding":null,"endBinding":null,"lastCommittedPoint":null,"startArrowhead":null,"endArrowhead":null,"points":[[0,0],[248,-1]]},{"type":"line","version":300,"versionNonce":1773378859,"index":"aN","isDeleted":false,"id":"O86OG1Gp-Z5DdQsOTWXIl","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":-91.9865324573871,"y":98.01460149170828,"strokeColor":"#1e1e1e","backgroundColor":"transparent","width":248,"height":1,"seed":35032197,"groupIds":[],"frameId":null,"roundness":{"type":2},"boundElements":[],"updated":1728561723454,"link":null,"locked":false,"startBinding":null,"endBinding":null,"lastCommittedPoint":null,"startArrowhead":null,"endArrowhead":null,"points":[[0,0],[248,-1]]},{"type":"text","version":191,"versionNonce":67954213,"index":"aO","isDeleted":false,"id":"oF3nVAjE","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":-91.43456622968428,"y":-4.9375,"strokeColor":"#1e1e1e","backgroundColor":"transparent","width":136.9598846435547,"height":25,"seed":1056748517,"groupIds":[],"frameId":null,"roundness":null,"boundElements":[],"updated":1728562251086,"link":null,"locked":false,"fontSize":20,"fontFamily":5,"text":"Einschreibung ","rawText":"Einschreibung ","textAlign":"left","verticalAlign":"top","containerId":null,"originalText":"Einschreibung ","autoResize":true,"lineHeight":1.25},{"type":"rectangle","version":177,"versionNonce":359729035,"index":"aQ","isDeleted":false,"id":"1IZMdGwPZqiVw7-7WmXtP","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":-93.40565975074657,"y":-134.9375,"strokeColor":"#1e1e1e","backgroundColor":"transparent","width":248,"height":95,"seed":2136207467,"groupIds":[],"frameId":null,"roundness":{"type":3},"boundElements":[{"id":"33VwlA7yb9fn7l7dJyAKn","type":"arrow"}],"updated":1728562165724,"link":null,"locked":false},{"type":"line","version":226,"versionNonce":1187502917,"index":"aR","isDeleted":false,"id":"XyQDHyFGdqAzy22EDkt6Y","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":-23.405659750746565,"y":-132.9375,"strokeColor":"#1e1e1e","backgroundColor":"transparent","width":0,"height":94,"seed":1542499083,"groupIds":[],"frameId":null,"roundness":{"type":2},"boundElements":[],"updated":1728561719605,"link":null,"locked":false,"startBinding":null,"endBinding":null,"lastCommittedPoint":null,"startArrowhead":null,"endArrowhead":null,"points":[[0,0],[0,94]]},{"type":"line","version":285,"versionNonce":1712728741,"index":"aS","isDeleted":false,"id":"Ao2oSoaiX02XedrmbcgDO","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":76.66326576455494,"y":-130.77395088005812,"strokeColor":"#1e1e1e","backgroundColor":"transparent","width":0,"height":94,"seed":106762667,"groupIds":[],"frameId":null,"roundness":{"type":2},"boundElements":[],"updated":1728561719605,"link":null,"locked":false,"startBinding":null,"endBinding":null,"lastCommittedPoint":null,"startArrowhead":null,"endArrowhead":null,"points":[[0,0],[0,94]]},{"type":"line","version":239,"versionNonce":1503890949,"index":"aU","isDeleted":false,"id":"NiBNY3Ou7JEF_qUgTlHlH","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":-93.40565975074657,"y":-112.9375,"strokeColor":"#1e1e1e","backgroundColor":"transparent","width":248,"height":1,"seed":1073668843,"groupIds":[],"frameId":null,"roundness":{"type":2},"boundElements":[],"updated":1728561719605,"link":null,"locked":false,"startBinding":null,"endBinding":null,"lastCommittedPoint":null,"startArrowhead":null,"endArrowhead":null,"points":[[0,0],[248,-1]]},{"type":"line","version":301,"versionNonce":1886225765,"index":"aV","isDeleted":false,"id":"GktBsl99RRnO4cOQpoo_Z","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":-93.95762597844939,"y":-87.98539850829172,"strokeColor":"#1e1e1e","backgroundColor":"transparent","width":248,"height":1,"seed":1603882379,"groupIds":[],"frameId":null,"roundness":{"type":2},"boundElements":[],"updated":1728561719605,"link":null,"locked":false,"startBinding":null,"endBinding":null,"lastCommittedPoint":null,"startArrowhead":null,"endArrowhead":null,"points":[[0,0],[248,-1]]},{"type":"line","version":281,"versionNonce":1036095685,"index":"aW","isDeleted":false,"id":"TMV_nLfFrIILCHRGBKIW8","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":-93.95762597844939,"y":-65.98539850829172,"strokeColor":"#1e1e1e","backgroundColor":"transparent","width":248,"height":1,"seed":30237739,"groupIds":[],"frameId":null,"roundness":{"type":2},"boundElements":[],"updated":1728561719605,"link":null,"locked":false,"startBinding":null,"endBinding":null,"lastCommittedPoint":null,"startArrowhead":null,"endArrowhead":null,"points":[[0,0],[248,-1]]},{"type":"text","version":176,"versionNonce":2021928363,"index":"aX","isDeleted":false,"id":"J72f255N","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":-93.40565975074657,"y":-168.9375,"strokeColor":"#1e1e1e","backgroundColor":"transparent","width":52.71995544433594,"height":25,"seed":2122688203,"groupIds":[],"frameId":null,"roundness":null,"boundElements":[],"updated":1728561890912,"link":null,"locked":false,"fontSize":20,"fontFamily":5,"text":"Kurse","rawText":"Kurse","textAlign":"left","verticalAlign":"top","containerId":null,"originalText":"Kurse","autoResize":true,"lineHeight":1.25},{"type":"text","version":113,"versionNonce":1860970635,"index":"aa","isDeleted":false,"id":"jZZDUmX3","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":-87.18636186675946,"y":-297.4667424683209,"strokeColor":"#3600fa","backgroundColor":"transparent","width":41.2626953125,"height":14.044091280292951,"seed":1172994379,"groupIds":[],"frameId":null,"roundness":null,"boundElements":[{"id":"o2NGM_YruF8oWjoAqg5DG","type":"arrow"}],"updated":1728562137125,"link":null,"locked":false,"fontSize":11.235273024234361,"fontFamily":5,"text":"PK_key","rawText":"PK_key","textAlign":"left","verticalAlign":"top","containerId":null,"originalText":"PK_key","autoResize":true,"lineHeight":1.25},{"type":"text","version":108,"versionNonce":467129637,"index":"aq","isDeleted":false,"id":"b61LIRMY","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":-76.57848940633022,"y":-130.68741434046277,"strokeColor":"#3600fa","backgroundColor":"transparent","width":41.2626953125,"height":14.044091280292951,"seed":1928090821,"groupIds":[],"frameId":null,"roundness":null,"boundElements":[],"updated":1728561801786,"link":null,"locked":false,"fontSize":11.235273024234361,"fontFamily":5,"text":"PK_key","rawText":"PK_key","textAlign":"left","verticalAlign":"top","containerId":null,"originalText":"PK_key","autoResize":true,"lineHeight":1.25},{"type":"text","version":129,"versionNonce":768877579,"index":"ay","isDeleted":false,"id":"sfFaV1fD","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":-83.04025746247191,"y":33.92122134276161,"strokeColor":"#3600fa","backgroundColor":"transparent","width":41.2626953125,"height":14.044091280292951,"seed":2118986117,"groupIds":[],"frameId":null,"roundness":null,"boundElements":[{"id":"o2NGM_YruF8oWjoAqg5DG","type":"arrow"}],"updated":1728562150181,"link":null,"locked":false,"fontSize":11.235273024234361,"fontFamily":5,"text":"PK_key","rawText":"PK_key","textAlign":"left","verticalAlign":"top","containerId":null,"originalText":"PK_key","autoResize":true,"lineHeight":1.25},{"type":"text","version":229,"versionNonce":354271691,"index":"b08","isDeleted":false,"id":"AZR3NI5U","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":-83.74261446466664,"y":56.971538629615566,"strokeColor":"#12d957","backgroundColor":"transparent","width":38.87571716308594,"height":13.104809062045799,"seed":1139434917,"groupIds":[],"frameId":null,"roundness":null,"boundElements":[{"id":"o2NGM_YruF8oWjoAqg5DG","type":"arrow"}],"updated":1728562137125,"link":null,"locked":false,"fontSize":10.48384724963664,"fontFamily":5,"text":"FR_key","rawText":"FR_key","textAlign":"left","verticalAlign":"top","containerId":null,"originalText":"FR_key","autoResize":true,"lineHeight":1.25},{"type":"text","version":191,"versionNonce":1496768715,"index":"b09","isDeleted":false,"id":"ANzRaSC5","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":-84.15854470054649,"y":80.01900340351972,"strokeColor":"#12d957","backgroundColor":"transparent","width":38.87571716308594,"height":13.104809062045799,"seed":2147301899,"groupIds":[],"frameId":null,"roundness":null,"boundElements":[{"id":"33VwlA7yb9fn7l7dJyAKn","type":"arrow"}],"updated":1728562165724,"link":null,"locked":false,"fontSize":10.48384724963664,"fontFamily":5,"text":"FR_key","rawText":"FR_key","textAlign":"left","verticalAlign":"top","containerId":null,"originalText":"FR_key","autoResize":true,"lineHeight":1.25},{"type":"line","version":88,"versionNonce":991986405,"index":"b0K","isDeleted":false,"id":"27ipKmT9nX8Xa-YS4lvRN","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":-244.07523986635448,"y":-85.27227775239473,"strokeColor":"#1e1e1e","backgroundColor":"transparent","width":148.82156511643853,"height":169.37702991152673,"seed":1416729765,"groupIds":[],"frameId":null,"roundness":{"type":2},"boundElements":[],"updated":1728562081228,"link":null,"locked":false,"startBinding":null,"endBinding":null,"lastCommittedPoint":null,"startArrowhead":null,"endArrowhead":null,"points":[[0,0],[148.82156511643853,-169.37702991152673]]},{"type":"line","version":142,"versionNonce":1058008773,"index":"b0L","isDeleted":false,"id":"TphduWKCncMS2IXRQX_RG","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":-242.4308026827474,"y":-85.68338704829651,"strokeColor":"#1e1e1e","backgroundColor":"transparent","width":149.64378370824204,"height":8.633295213937032,"seed":70835781,"groupIds":[],"frameId":null,"roundness":{"type":2},"boundElements":[],"updated":1728562093971,"link":null,"locked":false,"startBinding":null,"endBinding":null,"lastCommittedPoint":null,"startArrowhead":null,"endArrowhead":null,"points":[[0,0],[149.64378370824204,-8.633295213937032]]},{"type":"line","version":180,"versionNonce":1622767691,"index":"b0M","isDeleted":false,"id":"VELMrY_6sF6jvvvs2ingo","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":-242.0196933868457,"y":-87.32782423190355,"strokeColor":"#1e1e1e","backgroundColor":"transparent","width":150.05489300414382,"height":163.62149976890203,"seed":1393544741,"groupIds":[],"frameId":null,"roundness":{"type":2},"boundElements":[],"updated":1728562119193,"link":null,"locked":false,"startBinding":null,"endBinding":null,"lastCommittedPoint":null,"startArrowhead":null,"endArrowhead":null,"points":[[0,0],[150.05489300414382,163.62149976890203]]},{"type":"arrow","version":268,"versionNonce":2105940773,"index":"b0N","isDeleted":false,"id":"o2NGM_YruF8oWjoAqg5DG","fillStyle":"solid","strokeWidth":1,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":-92.18636186675946,"y":-290.54469682817444,"strokeColor":"#6741d9","backgroundColor":"transparent","width":38.44374740209281,"height":353.9686399888129,"seed":1948918155,"groupIds":[],"frameId":null,"roundness":null,"boundElements":[],"updated":1728562211036,"link":null,"locked":false,"startBinding":{"elementId":"jZZDUmX3","focus":0.014240864432481362,"gap":5,"fixedPoint":[-0.12189188344683821,0.4928795677837593]},"endBinding":{"elementId":"AZR3NI5U","focus":0.015261572988438337,"gap":5,"fixedPoint":[-0.12935300111607329,0.49236921350578083]},"lastCommittedPoint":null,"startArrowhead":null,"endArrowhead":"arrow","points":[[0,0],[-35,0],[-35,353.9686399888129],[3.4437474020928107,353.9686399888129]],"elbowed":true},{"type":"arrow","version":101,"versionNonce":208442789,"index":"b0O","isDeleted":false,"id":"33VwlA7yb9fn7l7dJyAKn","fillStyle":"solid","strokeWidth":1,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":-98.40565975074657,"y":-123.50544227125877,"strokeColor":"#6741d9","backgroundColor":"transparent","width":44.24711505020008,"height":209.97685020580138,"seed":1227759851,"groupIds":[],"frameId":null,"roundness":null,"boundElements":[],"updated":1728562204475,"link":null,"locked":false,"startBinding":{"elementId":"1IZMdGwPZqiVw7-7WmXtP","focus":0.7593251004475527,"gap":5,"fixedPoint":[-0.020161290322580645,0.12033744977622345]},"endBinding":{"elementId":"ANzRaSC5","focus":0.015261572988442678,"gap":5,"fixedPoint":[-0.12935300111607329,0.49236921350577867]},"lastCommittedPoint":null,"startArrowhead":null,"endArrowhead":"arrow","points":[[0,0],[-35,0],[-35,209.97685020580138],[9.24711505020008,209.97685020580138]],"elbowed":true}],"appState":{"theme":"dark","viewBackgroundColor":"#ffffff","currentItemStrokeColor":"#6741d9","currentItemBackgroundColor":"transparent","currentItemFillStyle":"solid","currentItemStrokeWidth":1,"currentItemStrokeStyle":"solid","currentItemRoughness":1,"currentItemOpacity":100,"currentItemFontFamily":5,"currentItemFontSize":20,"currentItemTextAlign":"left","currentItemStartArrowhead":null,"currentItemEndArrowhead":"arrow","scrollX":787.3940194439703,"scrollY":434.46875,"zoom":{"value":1},"currentItemRoundness":"round","gridSize":null,"gridColor":{"Bold":"#C9C9C9","Regular":"#EDEDED"},"currentStrokeOptions":null,"previousGridSize":null,"frameRendering":{"enabled":true,"clip":true,"name":true,"outline":true},"objectsSnapModeEnabled":false},"files":{}};InitialData.scrollToContent=true;App=()=>{const e=React.useRef(null),t=React.useRef(null),[n,i]=React.useState({width:void 0,height:void 0});return React.useEffect(()=>{i({width:t.current.getBoundingClientRect().width,height:t.current.getBoundingClientRect().height});const e=()=>{i({width:t.current.getBoundingClientRect().width,height:t.current.getBoundingClientRect().height})};return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[t]),React.createElement(React.Fragment,null,React.createElement("div",{className:"excalidraw-wrapper",ref:t},React.createElement(ExcalidrawLib.Excalidraw,{ref:e,width:n.width,height:n.height,initialData:InitialData,viewModeEnabled:!0,zenModeEnabled:!0,gridModeEnabled:!1})))},excalidrawWrapper=document.getElementById("SQL_2024-10-10_1359.18.excalidraw.md2");ReactDOM.render(React.createElement(App),excalidrawWrapper);})();</script>

>[!info] Die [[02 - RESOURCES/Notes/SQL Tabelle\|SQL Tabelle]]n wurden erstellt, sind aber noch leer.

# Werten in die Tabellen einsetzen

>Mit [[02 - RESOURCES/Notes/SQL INSERT\|SQL INSERT]] können wir [[02 - RESOURCES/Notes/SQL Zeile\|SQL Zeile]]n in die [[02 - RESOURCES/Notes/SQL Spalte\|SQL Spalte]]n einsetzen.

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

So sehen die [[02 - RESOURCES/Notes/SQL Tabelle\|SQL Tabelle]]n aus (in Tabell Format):

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
>Jetzt wissen wir wie man ein Datenbank erstellt und wie man Tabellen erstellt.
>Nun.... Wie lesen kriegen wir die Werten ?
>>Das lernen wir als nächstes


# Werte aus den Tabellen extrahieren
>Bevor wir anfangen, ist es wichtig zu verstehen, wie [[02 - RESOURCES/Notes/SQL\|SQL]] unter der Haube funktioniert.
>>Es ist dir wahrscheinlich aufgefallen, dass [[02 - RESOURCES/Notes/SQL\|SQL]] mit [[02 - RESOURCES/Notes/SQL Tabelle\|SQL Tabelle]]n arbeitet.  
>>Jede [[02 - RESOURCES/Notes/SQL Tabelle\|SQL Tabelle]] hat ihre eigenen [[02 - RESOURCES/Notes/SQL Spalte\|SQL Spalte]]n ([[02 - RESOURCES/Notes/Variable\|Variable]]n) und kann mit [[02 - RESOURCES/Notes/SQL SELECT\|SQL SELECT]] und [[02 - RESOURCES/Notes/SQL FROM\|SQL FROM]] abgefragt werden.
>
>```sql
>SELECT *
>FROM Tabellename;
>```


In unser Bsp wurde etwas so aussehen:
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

>[!info] [[02 - RESOURCES/Notes/SQL WHERE\|SQL WHERE]]
>Es ist das **IF** in [[02 - RESOURCES/Notes/SQL\|SQL]].

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
>Jetzt, dass du die Grundlage über SQL gelernt hast.
>Es ist Zeit auf die Vertiefung an den Thema.
>>Ab hier wirst du bestimmten Anweisungen, Syntax und noch viel mehr.

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

1. Welche [[02 - RESOURCES/Notes/SQL Spalte\|SQL Spalte]]n sind hier gefragt ?
   >Vorname, Nachname, Datum und KG
   >>Deise füge ich in den [[02 - RESOURCES/Notes/SQL SELECT\|SQL SELECT]] ein.
   
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
2. Welchen Tabellen werden hier benötigen?
   >Patient und Weight
   >>Diese füge ich in den [[02 - RESOURCES/Notes/SQL FROM\|SQL FROM]] ein.
   
```sql
SELECT Patient.first_name, Patient.last_name, Weight.date, Weight.kg
FROM Patient, Weight
```

3. Welchen Bedingungen müssen erfühlen werden?
   >Bei diese Aufgabe, müssen die `patient_ID` und `weight_ID` übereinstimmen.
   >>Diese Bedingung kommt in den [[02 - RESOURCES/Notes/SQL WHERE\|SQL WHERE]].
   
```sql
SELECT Patient.first_name, Patient.last_name, Weight.date, Weight.kg
FROM Patient, Weight
WHERE Patient.patient_ID = Weight.patient_ID; 
```

>[!note] und das war's!!!

## JOINs
>Wir haben gelernt, dass man mit [[02 - RESOURCES/Notes/SQL FROM\|SQL FROM]] und [[02 - RESOURCES/Notes/SQL WHERE\|SQL WHERE]] eine Verbindung zwischen [[02 - RESOURCES/Notes/SQL Tabelle\|SQL Tabelle]] herstellen kann, indem man die [[02 - RESOURCES/Notes/Primary Key\|Primärschlüssel]] verwendet, um nur die relevanten [[02 - RESOURCES/Notes/Datensatz\|Datensätze]] zu filtern. 
>>Im Vergleich dazu ermöglicht ein **[[02 - RESOURCES/Notes/INNER JOIN\|INNER JOIN]]** eine klarere und effizientere Methode zur Verknüpfung von Tabellen, indem die Beziehung zwischen ihnen explizit definiert wird, wodurch die Abfrage lesbarer und die Verarbeitungsgeschwindigkeit optimiert wird.


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/02-resources/notes/sql-join/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




>JOINs in [[02 - RESOURCES/Notes/SQL\|SQL]] sind nur da, um [[02 - RESOURCES/Notes/SQL Tabelle\|SQL Tabelle]] zu verbinden. 
>Es gibt natürlicherweise andere Wege, um das zu machen, man verwendet aber `JOIN`, um die Übersichtlichkeit nicht zu verlieren. 
>>Mit JOINs kann man spezifische Verknüpfungen zwischen Tabellen herstellen, wie [[02 - RESOURCES/Notes/INNER JOIN\|INNER JOIN]], [[02 - RESOURCES/Notes/LEFT JOIN\|LEFT JOIN]] und [[02 - RESOURCES/Notes/RIGHT JOIN\|RIGHT JOIN]], die es ermöglichen, Daten gezielt auszuwählen und nur die relevanten Zeilen anzuzeigen. 
>><mark style="background: #FFF3A3A6;">Dies verbessert nicht nur die Lesbarkeit der Abfragen, sondern auch die Effizienz, da nur die notwendigen Daten verarbeitet werden. </mark>
>>Durch die Verwendung von JOINs wird die Datenbankabfrage klar strukturiert, was die Wartung und das Verständnis der Abfragen erleichtert.

[[02 - RESOURCES/Notes/INNER JOIN\|INNER JOIN]]

[[02 - RESOURCES/Notes/LEFT JOIN\|LEFT JOIN]]

[[02 - RESOURCES/Notes/RIGHT JOIN\|RIGHT JOIN]]

</div></div>
