---
{"dg-publish":true,"permalink":"/02-resources/notes/dhc-pv6/","tags":["informatik/netzwerk/ip/ipv6/protokoll"],"noteIcon":"","updated":"2025-09-16T23:41:26.000+02:00"}
---

> Dynamic Host Configuration Protocol ist die neue Version von [[02 - RESOURCES/Notes/DHCPv4\|DHCPv4]] für [[02 - RESOURCES/Notes/IPv6\|IPv6]]-[[02 - RESOURCES/Notes/Netzwerk\|Netzwerk]]e. Wie ein Upgrade vom alten zum neuen System.
> 
> > Während [[02 - RESOURCES/Notes/DHCPv4\|DHCPv4]] für [[02 - RESOURCES/Notes/IPv4\|IPv4]] arbeitet, kümmert sich [[02 - RESOURCES/Notes/DHCPv6\|DHCPv6]] um die automatische Vergabe von [[02 - RESOURCES/Notes/IPv6\|IPv6]] Adressen und Konfiguration.
> > Anders als bei [[02 - RESOURCES/Notes/IPv4\|IPv4]] haben [[02 - RESOURCES/Notes/IPv6\|IPv6]]-Geräte oft schon automatisch eine Adresse - [[02 - RESOURCES/Notes/DHCPv6\|DHCPv6]] gibt dann zusätzliche Infos.
---

## Unterschiede zu [[02 - RESOURCES/Notes/DHCPv4\|DHCPv4]]:

- **Adressen**: Vergibt [[02 - RESOURCES/Notes/IPv6\|IPv6]]-Adressen statt [[02 - RESOURCES/Notes/IPv4\|IPv4]]
- **[[02 - RESOURCES/Notes/Multicast\|Multicast]]**: Nutzt [[02 - RESOURCES/Notes/Multicast\|Multicast]] statt [[02 - RESOURCES/Notes/Broadcast\|Broadcast]]
- **Stateless**: Kann auch nur Zusatzinfos geben ohne Adresse
- **[[02 - RESOURCES/Notes/PORT\|Port]]s**: Verwendet [[02 - RESOURCES/Notes/PORT\|Port]] 546 (Client) und 547 (Server)


<style> .container {font-family: sans-serif; text-align: center;} .button-wrapper button {z-index: 1;height: 40px; width: 100px; margin: 10px;padding: 5px;} .excalidraw .App-menu_top .buttonList { display: flex;} .excalidraw-wrapper { height: 800px; margin: 50px; position: relative;} :root[dir="ltr"] .excalidraw .layer-ui__wrapper .zen-mode-transition.App-menu_bottom--transition-left {transform: none;} </style><script src="https://cdn.jsdelivr.net/npm/react@17/umd/react.production.min.js"></script><script src="https://cdn.jsdelivr.net/npm/react-dom@17/umd/react-dom.production.min.js"></script><script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@excalidraw/excalidraw@0/dist/excalidraw.production.min.js"></script><div id="SARRexcalidraw.md1"></div><script>(function(){const InitialData={"type":"excalidraw","version":2,"source":"https://github.com/zsviczian/obsidian-excalidraw-plugin/releases/tag/2.15.2","elements":[{"id":"xZwSAYpds-jo1UlzGHJFn","type":"line","x":-247.0065910858982,"y":-301.2507686525548,"width":3,"height":608,"angle":0,"strokeColor":"#1e1e1e","backgroundColor":"transparent","fillStyle":"solid","strokeWidth":4,"strokeStyle":"solid","roughness":1,"opacity":100,"groupIds":[],"frameId":null,"index":"a0","roundness":{"type":2},"seed":487555290,"version":177,"versionNonce":1677555674,"isDeleted":false,"boundElements":[],"updated":1757945816182,"link":null,"locked":false,"points":[[0,0],[3,608]],"lastCommittedPoint":null,"startBinding":null,"endBinding":null,"startArrowhead":null,"endArrowhead":null,"polygon":false},{"id":"W6T9jOpvFSOH2ss5-xndv","type":"line","x":186.57972346114047,"y":-307.2126379892195,"width":3,"height":608,"angle":0,"strokeColor":"#1e1e1e","backgroundColor":"transparent","fillStyle":"solid","strokeWidth":4,"strokeStyle":"solid","roughness":1,"opacity":100,"groupIds":[],"frameId":null,"index":"a1","roundness":{"type":2},"seed":333338010,"version":170,"versionNonce":1475701914,"isDeleted":false,"boundElements":[],"updated":1757945816182,"link":null,"locked":false,"points":[[0,0],[3,608]],"lastCommittedPoint":null,"startBinding":null,"endBinding":null,"startArrowhead":null,"endArrowhead":null,"polygon":false},{"id":"wH0ew5I9","type":"text","x":-272.0065910858982,"y":-352.2507686525548,"width":54.27995300292969,"height":25,"angle":0,"strokeColor":"#1e1e1e","backgroundColor":"transparent","fillStyle":"solid","strokeWidth":1,"strokeStyle":"solid","roughness":1,"opacity":100,"groupIds":[],"frameId":null,"index":"a2","roundness":null,"seed":460624474,"version":91,"versionNonce":445696346,"isDeleted":false,"boundElements":[],"updated":1757945816182,"link":null,"locked":false,"text":"Client","rawText":"Client","fontSize":20,"fontFamily":5,"textAlign":"left","verticalAlign":"top","containerId":null,"originalText":"Client","autoResize":true,"lineHeight":1.25},{"id":"p3ukSnYL","type":"text","x":115.50367665718721,"y":-352.3144358500874,"width":188.94078063964844,"height":25,"angle":0,"strokeColor":"#1e1e1e","backgroundColor":"transparent","fillStyle":"solid","strokeWidth":4,"strokeStyle":"solid","roughness":1,"opacity":100,"groupIds":[],"frameId":null,"index":"a3","roundness":null,"seed":1990539034,"version":169,"versionNonce":1394773530,"isDeleted":false,"boundElements":[],"updated":1757945816182,"link":"[[02 - RESOURCES/Notes/DHCP-Server\|DHCP-Server]]","locked":false,"text":"📍[[02 - RESOURCES/Notes/DHCP-Server\|DHCP-Server]]","rawText":"[[02 - RESOURCES/Notes/DHCP-Server\|DHCP-Server]]","fontSize":20,"fontFamily":5,"textAlign":"left","verticalAlign":"top","containerId":null,"originalText":"📍[[02 - RESOURCES/Notes/DHCP-Server\|DHCP-Server]]","autoResize":true,"lineHeight":1.25},{"id":"F5u4BI6p","type":"text","x":-96.8956861264005,"y":-272.01752967556854,"width":209.9807891845703,"height":25,"angle":0,"strokeColor":"#1e1e1e","backgroundColor":"transparent","fillStyle":"solid","strokeWidth":1,"strokeStyle":"solid","roughness":1,"opacity":100,"groupIds":[],"frameId":null,"index":"a4","roundness":null,"seed":367215578,"version":142,"versionNonce":1701205274,"isDeleted":false,"boundElements":[],"updated":1757945951398,"link":"[[02 - RESOURCES/Notes/DHCPSOLICIT\|DHCPSOLICIT]]","locked":false,"text":"📍[[02 - RESOURCES/Notes/DHCPSOLICIT\|DHCPSOLICIT]]","rawText":"[[02 - RESOURCES/Notes/DHCPSOLICIT\|DHCPSOLICIT]]","fontSize":20,"fontFamily":5,"textAlign":"left","verticalAlign":"top","containerId":null,"originalText":"📍[[02 - RESOURCES/Notes/DHCPSOLICIT\|DHCPSOLICIT]]","autoResize":true,"lineHeight":1.25},{"id":"WFb8GqQGeqeu3UwJdzrXm","type":"arrow","x":-245.29337357027327,"y":-277.37208540807933,"width":430.6592682005174,"height":120.0950357148867,"angle":0,"strokeColor":"#1e1e1e","backgroundColor":"transparent","fillStyle":"solid","strokeWidth":1,"strokeStyle":"solid","roughness":1,"opacity":100,"groupIds":[],"frameId":null,"index":"a5","roundness":{"type":2},"seed":1665251482,"version":201,"versionNonce":596987802,"isDeleted":false,"boundElements":[],"updated":1757945816182,"link":null,"locked":false,"points":[[0,0],[430.6592682005174,120.0950357148867]],"lastCommittedPoint":null,"startBinding":null,"endBinding":null,"startArrowhead":null,"endArrowhead":"arrow","elbowed":false},{"id":"pX837Bml5rP-lkt62YUQn","type":"arrow","x":185.3658946302441,"y":-140.44844596244423,"width":428.36445860086985,"height":81.84820905409475,"angle":0,"strokeColor":"#1e1e1e","backgroundColor":"transparent","fillStyle":"solid","strokeWidth":1,"strokeStyle":"solid","roughness":1,"opacity":100,"groupIds":[],"frameId":null,"index":"a6","roundness":{"type":2},"seed":242455898,"version":157,"versionNonce":1312574554,"isDeleted":false,"boundElements":[],"updated":1757945816182,"link":null,"locked":false,"points":[[0,0],[-428.36445860086985,81.84820905409475]],"lastCommittedPoint":null,"startBinding":null,"endBinding":null,"startArrowhead":null,"endArrowhead":"arrow","elbowed":false},{"id":"dr6BnwLT","type":"text","x":-106.83986105820645,"y":-137.3886998295809,"width":241.8607940673828,"height":25,"angle":0,"strokeColor":"#1e1e1e","backgroundColor":"transparent","fillStyle":"solid","strokeWidth":1,"strokeStyle":"solid","roughness":1,"opacity":100,"groupIds":[],"frameId":null,"index":"a7","roundness":null,"seed":1489754650,"version":90,"versionNonce":2126789062,"isDeleted":false,"boundElements":[],"updated":1757945935288,"link":"[[02 - RESOURCES/Notes/DHCPADVERTISE\|DHCPADVERTISE]]","locked":false,"text":"📍[[02 - RESOURCES/Notes/DHCPADVERTISE\|DHCPADVERTISE]]","rawText":"[[02 - RESOURCES/Notes/DHCPADVERTISE\|DHCPADVERTISE]]","fontSize":20,"fontFamily":5,"textAlign":"left","verticalAlign":"top","containerId":null,"originalText":"📍[[02 - RESOURCES/Notes/DHCPADVERTISE\|DHCPADVERTISE]]","autoResize":true,"lineHeight":1.25},{"id":"w0tmo-n89xj52DrEKu1In","type":"arrow","x":-245.29337357027327,"y":-37.182013978305974,"width":429.8943316673015,"height":105.56124158378583,"angle":0,"strokeColor":"#1e1e1e","backgroundColor":"transparent","fillStyle":"solid","strokeWidth":1,"strokeStyle":"solid","roughness":1,"opacity":100,"groupIds":[],"frameId":null,"index":"a8","roundness":{"type":2},"seed":1631422170,"version":144,"versionNonce":1904508378,"isDeleted":false,"boundElements":[],"updated":1757945816182,"link":null,"locked":false,"points":[[0,0],[429.8943316673015,105.56124158378583]],"lastCommittedPoint":null,"startBinding":null,"endBinding":null,"startArrowhead":null,"endArrowhead":"arrow","elbowed":false},{"id":"8MDeNNfP","type":"text","x":-74.71252666314103,"y":-25.707965980068366,"width":222.3607940673828,"height":25,"angle":0,"strokeColor":"#1e1e1e","backgroundColor":"transparent","fillStyle":"solid","strokeWidth":1,"strokeStyle":"solid","roughness":1,"opacity":100,"groupIds":[],"frameId":null,"index":"a9","roundness":null,"seed":1885051802,"version":98,"versionNonce":1789637274,"isDeleted":false,"boundElements":[],"updated":1757945816182,"link":"[[02 - RESOURCES/Notes/DHCPREQUEST\|DHCPREQUEST]]","locked":false,"text":"📍[[02 - RESOURCES/Notes/DHCPREQUEST\|DHCPREQUEST]]","rawText":"[[02 - RESOURCES/Notes/DHCPREQUEST\|DHCPREQUEST]]","fontSize":20,"fontFamily":5,"textAlign":"left","verticalAlign":"top","containerId":null,"originalText":"📍[[02 - RESOURCES/Notes/DHCPREQUEST\|DHCPREQUEST]]","autoResize":true,"lineHeight":1.25},{"id":"StArg_3O-ckV4zOudziOE","type":"arrow","x":185.3658946302441,"y":90.56238706873916,"width":429.1293951340857,"height":65.78454185656221,"angle":0,"strokeColor":"#1e1e1e","backgroundColor":"transparent","fillStyle":"solid","strokeWidth":1,"strokeStyle":"solid","roughness":1,"opacity":100,"groupIds":[],"frameId":null,"index":"aA","roundness":{"type":2},"seed":1146689626,"version":151,"versionNonce":1250840410,"isDeleted":false,"boundElements":[],"updated":1757945816182,"link":null,"locked":false,"points":[[0,0],[-429.1293951340857,65.78454185656221]],"lastCommittedPoint":null,"startBinding":null,"endBinding":null,"startArrowhead":null,"endArrowhead":"arrow","elbowed":false},{"id":"hHOoxi86","type":"text","x":-70.88784399706208,"y":85.20783133622825,"width":198.30079650878906,"height":25,"angle":0,"strokeColor":"#1e1e1e","backgroundColor":"transparent","fillStyle":"solid","strokeWidth":1,"strokeStyle":"solid","roughness":1,"opacity":100,"groupIds":[],"frameId":null,"index":"aB","roundness":null,"seed":1560870170,"version":100,"versionNonce":179671002,"isDeleted":false,"boundElements":[],"updated":1757945917784,"link":"[[DHCPREPLAY\|DHCPREPLAY]]","locked":false,"text":"📍[[DHCPREPLAY\|DHCPREPLAY]]","rawText":"[[DHCPREPLAY\|DHCPREPLAY]]","fontSize":20,"fontFamily":5,"textAlign":"left","verticalAlign":"top","containerId":null,"originalText":"📍[[DHCPREPLAY\|DHCPREPLAY]]","autoResize":true,"lineHeight":1.25}],"appState":{"theme":"dark","viewBackgroundColor":"#ffffff","currentItemStrokeColor":"#1e1e1e","currentItemBackgroundColor":"transparent","currentItemFillStyle":"solid","currentItemStrokeWidth":2,"currentItemStrokeStyle":"solid","currentItemRoughness":1,"currentItemOpacity":100,"currentItemFontFamily":5,"currentItemFontSize":20,"currentItemTextAlign":"left","currentItemStartArrowhead":null,"currentItemEndArrowhead":"arrow","currentItemArrowType":"round","currentItemFrameRole":null,"scrollX":632.7395629882812,"scrollY":490.2104797363281,"zoom":{"value":1},"currentItemRoundness":"round","gridSize":20,"gridStep":5,"gridModeEnabled":false,"gridColor":{"Bold":"rgba(217, 217, 217, 0.5)","Regular":"rgba(230, 230, 230, 0.5)"},"currentStrokeOptions":null,"frameRendering":{"enabled":true,"clip":true,"name":true,"outline":true,"markerName":true,"markerEnabled":true},"objectsSnapModeEnabled":false,"activeTool":{"type":"selection","customType":null,"locked":false,"fromSelection":false,"lastActiveTool":null}},"files":{}};InitialData.scrollToContent=true;App=()=>{const e=React.useRef(null),t=React.useRef(null),[n,i]=React.useState({width:void 0,height:void 0});return React.useEffect(()=>{i({width:t.current.getBoundingClientRect().width,height:t.current.getBoundingClientRect().height});const e=()=>{i({width:t.current.getBoundingClientRect().width,height:t.current.getBoundingClientRect().height})};return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[t]),React.createElement(React.Fragment,null,React.createElement("div",{className:"excalidraw-wrapper",ref:t},React.createElement(ExcalidrawLib.Excalidraw,{ref:e,width:n.width,height:n.height,initialData:InitialData,viewModeEnabled:!0,zenModeEnabled:!0,gridModeEnabled:!1})))},excalidrawWrapper=document.getElementById("SARRexcalidraw.md1");ReactDOM.render(React.createElement(App),excalidrawWrapper);})();</script>
Die Verbindung funktioniert genau wie bei [[02 - RESOURCES/Notes/DORA-Prinzip\|DORA-Prinzip]].
Es hat nur andere Begriffen.

- [[02 - RESOURCES/Notes/DHCPSOLICIT\|DHCPSOLICIT]]
- [[02 - RESOURCES/Notes/DHCPADVERTISE\|DHCPADVERTISE]]
- [[02 - RESOURCES/Notes/DHCPREQUEST\|DHCPREQUEST]]
- [[02 - RESOURCES/Notes/DHCPREPLY\|DHCPREPLY]]
# I. [[02 - RESOURCES/Notes/DHCPv6\|DHCPv6]]-Modi

> [[02 - RESOURCES/Notes/DHCPv6\|DHCPv6]] kann auf verschiedene Arten arbeiten - je nachdem was dein [[02 - RESOURCES/Notes/Netzwerk\|Netzwerk]] braucht.
> 
> > Wie verschiedene Betriebsmodi an einer Maschine - jeder für einen anderen Zweck.

---

## Stateful [[02 - RESOURCES/Notes/DHCPv6\|DHCPv6]]

- **Vollständige Kontrolle**: Server vergibt [[02 - RESOURCES/Notes/IPv6\|IPv6]]-[[Adresse\|Adresse]]n komplett
- **Tracking**: Server merkt sich welche Adresse welchem Gerät gehört
- **Wie [[02 - RESOURCES/Notes/DHCPv4\|DHCPv4]]v4**: Ähnlich zum klassischen [[02 - RESOURCES/Notes/DHCPv4\|DHCPv4]]

## Stateless [[02 - RESOURCES/Notes/DHCPv6\|DHCPv6]]

- **Nur Zusatzinfos**: Gerät hat schon [[02 - RESOURCES/Notes/IPv6\|IPv6]]-Adresse durch [[02 - RESOURCES/Notes/SLAAC\|SLAAC]]
- **Konfiguration**: Server gibt nur [[02 - RESOURCES/Notes/DNS\|DNS]], [[02 - RESOURCES/Notes/Domain\|Domain]]s etc.
- **Weniger Arbeit**: Server muss keine Adressen verwalten

## [[02 - RESOURCES/Notes/SLAAC\|SLAAC]] (Stateless Address Autoconfiguration)

- **Automatisch**: Gerät erstellt sich selbst eine [[02 - RESOURCES/Notes/IPv6\|IPv6]]-[[Adresse\|Adresse]]
- **[[02 - RESOURCES/Notes/Router\|Router]] hilft**: Bekommt [[02 - RESOURCES/Notes/Netzwerk\|Netzwerk]]-Prefix vom [[02 - RESOURCES/Notes/Router\|Router]]
- **Eindeutig**: Nutzt [[02 - RESOURCES/Notes/MAC Adresse\|MAC Adresse]] für eindeutige Adresse

# II. [[02 - RESOURCES/Notes/DHCPv6\|DHCPv6]]-Nachrichten

> Ähnlich wie das [[02 - RESOURCES/Notes/DORA-Prinzip\|DORA-Prinzip]] bei [[02 - RESOURCES/Notes/DHCPv4\|DHCPv4]]v4, aber mit anderen Namen.
> > Die Unterhaltung zwischen Client und Server läuft etwas anders ab.

---

## Stateful [[02 - RESOURCES/Notes/DHCPv6\|DHCPv6]]-Prozess:

1. **SOLICIT**: Client sucht [[02 - RESOURCES/Notes/DHCPv6\|DHCPv6]]-Server
2. **ADVERTISE**: Server antwortet "Ich bin da"
3. **REQUEST**: Client fragt nach Adresse
4. **REPLY**: Server gibt Adresse und Konfiguration

## Stateless [[02 - RESOURCES/Notes/DHCPv6\|DHCPv6]]-Prozess:

1. **INFORMATION-REQUEST**: Client will nur Zusatzinfos
2. **REPLY**: Server gibt [[02 - RESOURCES/Notes/DNS\|DNS]], [[02 - RESOURCES/Notes/Domain\|Domain]] etc.

> [!info] Info Bei [[02 - RESOURCES/Notes/IPv6\|IPv6]] können Geräte mehrere Adressen gleichzeitig haben - eine durch [[02 - RESOURCES/Notes/SLAAC\|SLAAC]], eine durch [[02 - RESOURCES/Notes/DHCPv6\|DHCPv6]].

# III. Konfigurationsmöglichkeiten

> Was [[02 - RESOURCES/Notes/DHCPv6\|DHCPv6]] alles verteilen kann außer Adressen.
> > Mehr als nur die Hausnummer - auch Postleitzahl, Telefon und Internet-Anbieter.

---

## Typische [[02 - RESOURCES/Notes/DHCPv6\|DHCPv6]]-Optionen:

| Option          | Beschreibung                         | Beispiel             |
| --------------- | ------------------------------------ | -------------------- |
| [[02 - RESOURCES/Notes/DNS\|DNS]] Server  | [[02 - RESOURCES/Notes/IPv6\|IPv6]]-Adressen der [[02 - RESOURCES/Notes/DNS\|DNS]]-Server | 2001:4860:4860::8888 |
| [[02 - RESOURCES/Notes/Domain\|Domain]] Name | [[02 - RESOURCES/Notes/Domain\|Domain]] für [[02 - RESOURCES/Notes/FQDN\|FQDN]]              | beispiel.com         |
| [[NTP\|NTP]] Server  | Zeit-Server für Synchronisation      | 2001:db8::ntp        |
| [[SIP\|SIP]] Server  | VoIP-Telefonie Server                | 2001:db8::sip        |

## [[02 - RESOURCES/Notes/IPv6\|IPv6]]-[[Adresse\|Adresse]]n-Arten:

- **Global Unicast**: Öffentliche [[02 - RESOURCES/Notes/IPv6\|IPv6]]-[[Adresse\|Adresse]]
- **Unique Local**: Private [[02 - RESOURCES/Notes/IPv6\|IPv6]]-[[Adresse\|Adresse]] (wie [[Private IP\|Private IP]])
- **Link-Local**: Nur im lokalen [[02 - RESOURCES/Notes/Netzwerk\|Netzwerk]]

# IV. Praxis-Beispiel

> So könnte eine [[02 - RESOURCES/Notes/DHCPv6\|DHCPv6]]-Konfiguration aussehen.
> 
> > Real-World Beispiel für ein kleines Büro-[[02 - RESOURCES/Notes/Netzwerk\|Netzwerk]].

---

## Scenario: Stateful [[02 - RESOURCES/Notes/DHCPv6\|DHCPv6]]

```
Prefix: 2001:db8:1234::/64
Range: 2001:db8:1234::100 - 2001:db8:1234::200
DNS: 2001:4860:4860::8888, 2001:4860:4860::8844
Domain: buero.local
Lease Time: 24 Stunden
```

## Client bekommt:

- **[[02 - RESOURCES/Notes/IPv6\|IPv6]]-Adresse**: 2001:db8:1234::150/64
- **[[02 - RESOURCES/Notes/DNS\|DNS]] Server**: 2001:4860:4860::8888
- **[[02 - RESOURCES/Notes/Domain\|Domain]]**: buero.local
- **[[02 - RESOURCES/Notes/Gateway\|Gateway]]**: 2001:db8:1234::1

> [!tip] Tipp In vielen [[02 - RESOURCES/Notes/Netzwerk\|Netzwerk]]en läuft [[02 - RESOURCES/Notes/DHCPv6\|DHCPv6]] parallel zu [[02 - RESOURCES/Notes/DHCPv4\|DHCPv4]]v4 - ein Server für alte [[02 - RESOURCES/Notes/IPv4\|IPv4]]-Geräte, einer für neue [[02 - RESOURCES/Notes/IPv6\|IPv6]]-Geräte.

# V. Vorteile von [[02 - RESOURCES/Notes/DHCPv6\|DHCPv6]]

> Warum [[02 - RESOURCES/Notes/DHCPv6\|DHCPv6]] besser ist als manuelle Konfiguration.
> 
> > Automatisierung macht das Leben einfacher - besonders bei vielen Geräten.

---

## Hauptvorteile:

- **Zentrale Verwaltung**: Alle [[02 - RESOURCES/Notes/IPv6\|IPv6]]-Einstellungen an einem Ort
- **Flexibilität**: Stateful oder Stateless je nach Bedarf
- **Skalierbar**: Funktioniert von 2 bis 2000 Geräten
- **[[02 - RESOURCES/Notes/Multicast\|Multicast]]**: Effizienter als [[02 - RESOURCES/Notes/Broadcast\|Broadcast]] bei [[02 - RESOURCES/Notes/IPv4\|IPv4]]
- **Sicherheit**: Bessere Authentifizierung möglich

> [!important] Wichtig [[02 - RESOURCES/Notes/DHCPv6\|DHCPv6]] und [[02 - RESOURCES/Notes/DHCPv4\|DHCPv4]]v4 sind separate Services - du brauchst beide für ein Dual-Stack [[02 - RESOURCES/Notes/Netzwerk\|Netzwerk]]!