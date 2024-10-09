---
{"dg-publish":true,"permalink":"/02-resources/notes/sql/","tags":["code/SQL"],"updated":"2024-10-09T15:30:16.126+02:00"}
---

>SQL (Structured Query Language) ist eine standardisierte Programmiersprache zur [[02 - RESOURCES/Notes/Verwaltung\|Verwaltung]] und Bearbeitung von Daten in relationalen Datenbanken.
>>Insgesamt ist SQL ein unverzichtbares Werkzeug für Entwickler und Datenanalysten, um mit Daten effizient zu arbeiten.

Am besten fangen wir an in den wir lernen wie man einer [[02 - RESOURCES/Notes/SQL Datenbank\|SQL Datenbank]] erstellt.
```sql
CREATE DATABASE schule;
USE schule;
```
<style> .container {font-family: sans-serif; text-align: center;} .button-wrapper button {z-index: 1;height: 40px; width: 100px; margin: 10px;padding: 5px;} .excalidraw .App-menu_top .buttonList { display: flex;} .excalidraw-wrapper { height: 800px; margin: 50px; position: relative;} :root[dir="ltr"] .excalidraw .layer-ui__wrapper .zen-mode-transition.App-menu_bottom--transition-left {transform: none;} </style><script src="https://cdn.jsdelivr.net/npm/react@17/umd/react.production.min.js"></script><script src="https://cdn.jsdelivr.net/npm/react-dom@17/umd/react-dom.production.min.js"></script><script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@excalidraw/excalidraw@0/dist/excalidraw.production.min.js"></script><div id="SQL_2024-10-09_1517.33.excalidraw.md1"></div><script>(function(){const InitialData={"type":"excalidraw","version":2,"source":"https://github.com/zsviczian/obsidian-excalidraw-plugin/releases/tag/2.3.0","elements":[{"type":"ellipse","version":325,"versionNonce":1740327332,"index":"a2","isDeleted":false,"id":"IjvRKumaDsFuPGvtc5jp7","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":182.82710731033245,"y":-642.2413111657164,"strokeColor":"#1e1e1e","backgroundColor":"transparent","width":123.87649400618038,"height":104.66891454936439,"seed":2130821532,"groupIds":[],"frameId":null,"roundness":{"type":2},"boundElements":[],"updated":1728480476212,"link":null,"locked":false},{"type":"line","version":368,"versionNonce":2075300508,"index":"a4","isDeleted":false,"id":"LfVf23JmekxVZW1xO4SS2","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":182.37167902354503,"y":-603.529906788785,"strokeColor":"#1e1e1e","backgroundColor":"transparent","width":1.3662848603622837,"height":128.43077687405463,"seed":1509919396,"groupIds":[],"frameId":null,"roundness":{"type":2},"boundElements":[],"updated":1728480476212,"link":null,"locked":false,"startBinding":null,"endBinding":null,"lastCommittedPoint":null,"startArrowhead":null,"endArrowhead":null,"points":[[0,0],[-1.3662848603622837,128.43077687405463]]},{"type":"line","version":421,"versionNonce":1013609764,"index":"a5","isDeleted":false,"id":"cbUZxU-Bl-m2wgTHXjru1","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":306.12879950918455,"y":-602.5919962741839,"strokeColor":"#1e1e1e","backgroundColor":"transparent","width":1.3662848603622837,"height":128.43077687405463,"seed":390657700,"groupIds":[],"frameId":null,"roundness":{"type":2},"boundElements":[],"updated":1728480476212,"link":null,"locked":false,"startBinding":null,"endBinding":null,"lastCommittedPoint":null,"startArrowhead":null,"endArrowhead":null,"points":[[0,0],[-1.3662848603622837,128.43077687405463]]},{"type":"line","version":499,"versionNonce":1836965660,"index":"a8","isDeleted":false,"id":"ecsuAy7q1GH7WhdQMJxcq","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":183.51361520689693,"y":-559.7485825175754,"strokeColor":"#1e1e1e","backgroundColor":"transparent","width":123.42106571939293,"height":26.414840633670813,"seed":1435370020,"groupIds":[],"frameId":null,"roundness":{"type":2},"boundElements":[],"updated":1728480476212,"link":null,"locked":false,"startBinding":null,"endBinding":null,"lastCommittedPoint":null,"startArrowhead":null,"endArrowhead":null,"points":[[0,0],[65.12624501060218,26.414840633670813],[123.42106571939293,2.277141433937139]]},{"type":"line","version":480,"versionNonce":422064292,"index":"a9","isDeleted":false,"id":"4vp9bb8_x3QYpw8xgXeSb","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":182.60275863332197,"y":-535.1554550310543,"strokeColor":"#1e1e1e","backgroundColor":"transparent","width":123.42106571939293,"height":26.414840633670813,"seed":1239505692,"groupIds":[],"frameId":null,"roundness":{"type":2},"boundElements":[],"updated":1728480476212,"link":null,"locked":false,"startBinding":null,"endBinding":null,"lastCommittedPoint":null,"startArrowhead":null,"endArrowhead":null,"points":[[0,0],[65.12624501060218,26.414840633670813],[123.42106571939293,2.277141433937139]]},{"type":"line","version":494,"versionNonce":288070556,"index":"aA","isDeleted":false,"id":"Vh3SHIuojPNYijo7crqYc","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":182.60275863332197,"y":-504.64175981629666,"strokeColor":"#1e1e1e","backgroundColor":"transparent","width":123.42106571939293,"height":26.414840633670813,"seed":205103900,"groupIds":[],"frameId":null,"roundness":{"type":2},"boundElements":[],"updated":1728480476212,"link":null,"locked":false,"startBinding":null,"endBinding":null,"lastCommittedPoint":null,"startArrowhead":null,"endArrowhead":null,"points":[[0,0],[65.12624501060218,26.414840633670813],[123.42106571939293,2.277141433937139]]},{"type":"line","version":519,"versionNonce":497187876,"index":"aE","isDeleted":false,"id":"PTyiPOV0adIQuLg2Y3QVw","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":181.53951450014284,"y":-476.50983640212354,"strokeColor":"#1e1e1e","backgroundColor":"transparent","width":123.42106571939293,"height":26.414840633670813,"seed":1782664732,"groupIds":[],"frameId":null,"roundness":{"type":2},"boundElements":[],"updated":1728480476212,"link":null,"locked":false,"startBinding":null,"endBinding":null,"lastCommittedPoint":null,"startArrowhead":null,"endArrowhead":null,"points":[[0,0],[65.12624501060218,26.414840633670813],[123.42106571939293,2.277141433937139]]},{"type":"text","version":343,"versionNonce":1626195996,"index":"aF","isDeleted":false,"id":"1JL5BWcW","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":193.8499700166119,"y":-684.3140595629245,"strokeColor":"#1e1e1e","backgroundColor":"transparent","width":97.06228407764708,"height":22.771414339371393,"seed":1979160860,"groupIds":[],"frameId":null,"roundness":null,"boundElements":[],"updated":1728480476212,"link":null,"locked":false,"fontSize":18.217131471497115,"fontFamily":5,"text":"Datenbank","rawText":"Datenbank","textAlign":"left","verticalAlign":"top","containerId":null,"originalText":"Datenbank","autoResize":true,"lineHeight":1.25},{"id":"SpHY2rSB","type":"text","x":219.93420610693556,"y":-603.0162368556959,"width":61.31996154785156,"height":25,"angle":0,"strokeColor":"#1e1e1e","backgroundColor":"transparent","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"groupIds":[],"frameId":null,"index":"aG","roundness":null,"seed":14871964,"version":59,"versionNonce":1902710948,"isDeleted":false,"boundElements":null,"updated":1728480484780,"link":null,"locked":false,"text":"Schule","rawText":"Schule","fontSize":20,"fontFamily":5,"textAlign":"left","verticalAlign":"top","containerId":null,"originalText":"Schule","autoResize":true,"lineHeight":1.25},{"id":"YaDF3DdP","type":"text","x":-55.777682621861274,"y":-205.7843113902566,"width":8,"height":25,"angle":0,"strokeColor":"#1e1e1e","backgroundColor":"transparent","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"groupIds":[],"frameId":null,"index":"a2V","roundness":null,"seed":1168079780,"version":5,"versionNonce":1436512420,"isDeleted":true,"boundElements":null,"updated":1728480459025,"link":null,"locked":false,"text":"","rawText":"","fontSize":20,"fontFamily":5,"textAlign":"center","verticalAlign":"middle","containerId":"IjvRKumaDsFuPGvtc5jp7","originalText":"","autoResize":true,"lineHeight":1.25},{"id":"mur5VPbp","type":"text","x":-55.777682621861274,"y":-205.7843113902566,"width":8,"height":25,"angle":0,"strokeColor":"#1e1e1e","backgroundColor":"transparent","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"groupIds":[],"frameId":null,"index":"a3","roundness":null,"seed":1529942940,"version":5,"versionNonce":1509194524,"isDeleted":true,"boundElements":null,"updated":1728480452789,"link":null,"locked":false,"text":"","rawText":"","fontSize":20,"fontFamily":5,"textAlign":"center","verticalAlign":"middle","containerId":"IjvRKumaDsFuPGvtc5jp7","originalText":"","autoResize":true,"lineHeight":1.25}],"appState":{"theme":"dark","viewBackgroundColor":"#ffffff","currentItemStrokeColor":"#1e1e1e","currentItemBackgroundColor":"transparent","currentItemFillStyle":"solid","currentItemStrokeWidth":2,"currentItemStrokeStyle":"solid","currentItemRoughness":1,"currentItemOpacity":100,"currentItemFontFamily":5,"currentItemFontSize":20,"currentItemTextAlign":"left","currentItemStartArrowhead":null,"currentItemEndArrowhead":"arrow","scrollX":1000.2781548400692,"scrollY":1174.5496891261469,"zoom":{"value":1.02728020147834},"currentItemRoundness":"round","gridSize":null,"gridColor":{"Bold":"#C9C9C9","Regular":"#EDEDED"},"currentStrokeOptions":null,"previousGridSize":null,"frameRendering":{"enabled":true,"clip":true,"name":true,"outline":true},"objectsSnapModeEnabled":false},"files":{}};InitialData.scrollToContent=true;App=()=>{const e=React.useRef(null),t=React.useRef(null),[n,i]=React.useState({width:void 0,height:void 0});return React.useEffect(()=>{i({width:t.current.getBoundingClientRect().width,height:t.current.getBoundingClientRect().height});const e=()=>{i({width:t.current.getBoundingClientRect().width,height:t.current.getBoundingClientRect().height})};return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[t]),React.createElement(React.Fragment,null,React.createElement("div",{className:"excalidraw-wrapper",ref:t},React.createElement(ExcalidrawLib.Excalidraw,{ref:e,width:n.width,height:n.height,initialData:InitialData,viewModeEnabled:!0,zenModeEnabled:!0,gridModeEnabled:!1})))},excalidrawWrapper=document.getElementById("SQL_2024-10-09_1517.33.excalidraw.md1");ReactDOM.render(React.createElement(App),excalidrawWrapper);})();</script>

Als nächstes setzen wir ein paar [[02 - RESOURCES/Notes/SQL Tabelle\|SQL Tabelle]]n