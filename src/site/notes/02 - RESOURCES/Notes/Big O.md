---
{"dg-publish":true,"permalink":"/02-resources/notes/big-o/","tags":["informatik/code/algorithmus","finished"],"noteIcon":"","updated":"2025-11-10T15:18:28.029+01:00"}
---

>Notation in der Informatik, die verwendet wird, um die Effizienz von Algorithmen zu beschreiben, insbesondere in Bezug auf ihre Laufzeit oder ihren Speicherbedarf, wenn die Größe der Eingabe wächst. 
>>Es bietet eine Möglichkeit, die **Worst-Case-Komplexität** eines [[02 - RESOURCES/Notes/Algorithmus\|Algorithmus]] in Bezug auf die Eingabemenge zu bewerten.

<style> .container {font-family: sans-serif; text-align: center;} .button-wrapper button {z-index: 1;height: 40px; width: 100px; margin: 10px;padding: 5px;} .excalidraw .App-menu_top .buttonList { display: flex;} .excalidraw-wrapper { height: 800px; margin: 50px; position: relative;} :root[dir="ltr"] .excalidraw .layer-ui__wrapper .zen-mode-transition.App-menu_bottom--transition-left {transform: none;} </style><script src="https://cdn.jsdelivr.net/npm/react@17/umd/react.production.min.js"></script><script src="https://cdn.jsdelivr.net/npm/react-dom@17/umd/react-dom.production.min.js"></script><script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@excalidraw/excalidraw@0/dist/excalidraw.production.min.js"></script><div id="Big_O_2024-08-06_1507.18.excalidraw.md1"></div><script>(function(){const InitialData={"type":"excalidraw","version":2,"source":"https://github.com/zsviczian/obsidian-excalidraw-plugin/releases/tag/2.5.2","elements":[{"type":"line","version":84,"versionNonce":6892358,"index":"a0","isDeleted":false,"id":"1mJiTiT4y8ZrZ1hj_PiTE","fillStyle":"solid","strokeWidth":4,"strokeStyle":"solid","roughness":2,"opacity":100,"angle":0,"x":-402.75,"y":-350.2421875,"strokeColor":"#1e1e1e","backgroundColor":"transparent","width":3,"height":573,"seed":1501122310,"groupIds":[],"frameId":null,"roundness":{"type":2},"boundElements":[],"updated":1722949667262,"link":null,"locked":false,"startBinding":null,"endBinding":null,"lastCommittedPoint":null,"startArrowhead":null,"endArrowhead":null,"points":[[0,0],[3,573]]},{"type":"line","version":131,"versionNonce":1665479110,"index":"a1","isDeleted":false,"id":"HLOmSvmRWonI91gntLdv_","fillStyle":"solid","strokeWidth":4,"strokeStyle":"solid","roughness":2,"opacity":100,"angle":0,"x":-398.75,"y":224.7578125,"strokeColor":"#1e1e1e","backgroundColor":"transparent","width":722,"height":10,"seed":166711942,"groupIds":[],"frameId":null,"roundness":{"type":2},"boundElements":[],"updated":1722949678349,"link":null,"locked":false,"startBinding":null,"endBinding":null,"lastCommittedPoint":null,"startArrowhead":null,"endArrowhead":null,"points":[[0,0],[722,-10]]},{"type":"line","version":87,"versionNonce":1949962374,"index":"a2","isDeleted":false,"id":"MVLd3bhsrXQ0DDZXRnxMp","fillStyle":"solid","strokeWidth":4,"strokeStyle":"solid","roughness":2,"opacity":100,"angle":0,"x":-424.75,"y":-315.2421875,"strokeColor":"#1e1e1e","backgroundColor":"transparent","width":19,"height":35,"seed":1887897862,"groupIds":[],"frameId":null,"roundness":{"type":2},"boundElements":[],"updated":1722949694404,"link":null,"locked":false,"startBinding":null,"endBinding":null,"lastCommittedPoint":null,"startArrowhead":null,"endArrowhead":null,"points":[[0,0],[19,-35]]},{"type":"line","version":26,"versionNonce":1707220422,"index":"a3","isDeleted":false,"id":"heTRFoUlOtaaxFS62LnvR","fillStyle":"solid","strokeWidth":4,"strokeStyle":"solid","roughness":2,"opacity":100,"angle":0,"x":-402.75,"y":-349.2421875,"strokeColor":"#1e1e1e","backgroundColor":"transparent","width":16,"height":24,"seed":888278982,"groupIds":[],"frameId":null,"roundness":{"type":2},"boundElements":[],"updated":1722949700522,"link":null,"locked":false,"startBinding":null,"endBinding":null,"lastCommittedPoint":null,"startArrowhead":null,"endArrowhead":null,"points":[[0,0],[16,24]]},{"type":"line","version":6,"versionNonce":1939390982,"index":"a4","isDeleted":false,"id":"mu7z-cICyx9EZFYWom1di","fillStyle":"solid","strokeWidth":4,"strokeStyle":"solid","roughness":2,"opacity":100,"angle":0,"x":322.25,"y":212.7578125,"strokeColor":"#1e1e1e","backgroundColor":"transparent","width":25,"height":11,"seed":1820751110,"groupIds":[],"frameId":null,"roundness":{"type":2},"boundElements":[],"updated":1722949703441,"link":null,"locked":false,"startBinding":null,"endBinding":null,"lastCommittedPoint":null,"startArrowhead":null,"endArrowhead":null,"points":[[0,0],[-25,-11]]},{"type":"line","version":12,"versionNonce":2045432262,"index":"a5","isDeleted":false,"id":"KmiB5PBgGQwkPsG5GOG2E","fillStyle":"solid","strokeWidth":4,"strokeStyle":"solid","roughness":2,"opacity":100,"angle":0,"x":323.25,"y":214.7578125,"strokeColor":"#1e1e1e","backgroundColor":"transparent","width":20,"height":14,"seed":142512454,"groupIds":[],"frameId":null,"roundness":{"type":2},"boundElements":[],"updated":1722949705509,"link":null,"locked":false,"startBinding":null,"endBinding":null,"lastCommittedPoint":null,"startArrowhead":null,"endArrowhead":null,"points":[[0,0],[-20,14]]},{"type":"text","version":94,"versionNonce":1426517786,"index":"a7","isDeleted":false,"id":"VmkzD7Od","fillStyle":"solid","strokeWidth":4,"strokeStyle":"solid","roughness":2,"opacity":100,"angle":0,"x":-107.75,"y":224.7578125,"strokeColor":"#1e1e1e","backgroundColor":"transparent","width":166.18069458007812,"height":37.800000000000004,"seed":1313352646,"groupIds":[],"frameId":null,"roundness":null,"boundElements":[],"updated":1722949791805,"link":null,"locked":false,"fontSize":28,"fontFamily":6,"text":"Input Size (n)","rawText":"Input Size (n)","textAlign":"left","verticalAlign":"top","containerId":null,"originalText":"Input Size (n)","autoResize":true,"lineHeight":1.35},{"type":"text","version":109,"versionNonce":1204102618,"index":"a8","isDeleted":false,"id":"5x527qAh","fillStyle":"solid","strokeWidth":4,"strokeStyle":"solid","roughness":2,"opacity":100,"angle":4.723593972811037,"x":-471.2557155376151,"y":-162.74233332136933,"strokeColor":"#1e1e1e","backgroundColor":"transparent","width":63.63618469238281,"height":37.800000000000004,"seed":624022918,"groupIds":[],"frameId":null,"roundness":null,"boundElements":[],"updated":1722949802192,"link":null,"locked":false,"fontSize":28,"fontFamily":6,"text":"Time","rawText":"Time","textAlign":"left","verticalAlign":"top","containerId":null,"originalText":"Time","autoResize":true,"lineHeight":1.35},{"type":"arrow","version":111,"versionNonce":1031209882,"index":"aA","isDeleted":false,"id":"aC7CyNDVept5uXE_2_gBq","fillStyle":"solid","strokeWidth":4,"strokeStyle":"solid","roughness":0,"opacity":100,"angle":0,"x":-397.37068965517244,"y":217.8612607758621,"strokeColor":"#2f9e44","backgroundColor":"transparent","width":684,"height":13,"seed":420727578,"groupIds":[],"frameId":null,"roundness":{"type":2},"boundElements":[],"updated":1722949985657,"link":null,"locked":false,"startBinding":null,"endBinding":null,"lastCommittedPoint":null,"startArrowhead":null,"endArrowhead":"arrow","points":[[0,0],[684,-13]]},{"type":"text","version":104,"versionNonce":2107439363,"index":"aC","isDeleted":false,"id":"ove21sdO","fillStyle":"solid","strokeWidth":4,"strokeStyle":"solid","roughness":2,"opacity":100,"angle":0,"x":183.97413793103442,"y":179.48195043103453,"strokeColor":"#2f9e44","backgroundColor":"transparent","width":118.84893798828125,"height":21.6,"seed":119911898,"groupIds":[],"frameId":null,"roundness":null,"boundElements":[],"updated":1730546730535,"link":"[[02 - RESOURCES/Notes/1. Big O(1)\|1. Big O(1)]]","locked":false,"fontSize":16,"fontFamily":6,"text":"📍[[02 - RESOURCES/Notes/1. Big O(1)\|1. Big O(1)]]","rawText":"[[02 - RESOURCES/Notes/1. Big O(1)\|1. Big O(1)]]","textAlign":"left","verticalAlign":"top","containerId":null,"originalText":"📍[[02 - RESOURCES/Notes/1. Big O(1)\|1. Big O(1)]]","autoResize":true,"lineHeight":1.35},{"type":"arrow","version":240,"versionNonce":1644971547,"index":"aD","isDeleted":false,"id":"LoOgqMW6t1kt8BWy6ifxC","fillStyle":"solid","strokeWidth":4,"strokeStyle":"solid","roughness":0,"opacity":100,"angle":0,"x":-396.05685881451797,"y":220.8150583681798,"strokeColor":"#1971c2","backgroundColor":"transparent","width":701.3793103448274,"height":295.1724137931034,"seed":1027489222,"groupIds":[],"frameId":null,"roundness":{"type":2},"boundElements":[],"updated":1722982121448,"link":null,"locked":false,"startBinding":null,"endBinding":null,"lastCommittedPoint":null,"startArrowhead":null,"endArrowhead":"arrow","points":[[0,0],[701.3793103448274,-295.1724137931034]]},{"type":"text","version":150,"versionNonce":902833499,"index":"aE","isDeleted":false,"id":"i4UmpN6W","fillStyle":"solid","strokeWidth":4,"strokeStyle":"solid","roughness":0,"opacity":100,"angle":5.826417420157298,"x":186.76629652870386,"y":-81.60150254208267,"strokeColor":"#1971c2","backgroundColor":"transparent","width":118.40093994140625,"height":21.6,"seed":1549971782,"groupIds":[],"frameId":null,"roundness":null,"boundElements":[],"updated":1722982208212,"link":"[[02 - RESOURCES/Notes/4. Big O(n)\|4. Big O(n)]]","locked":false,"fontSize":16,"fontFamily":6,"text":"📍[[02 - RESOURCES/Notes/4. Big O(n)\|4. Big O(n)]]","rawText":"[[02 - RESOURCES/Notes/4. Big O(n)\|4. Big O(n)]]","textAlign":"left","verticalAlign":"top","containerId":null,"originalText":"📍[[02 - RESOURCES/Notes/4. Big O(n)\|4. Big O(n)]]","autoResize":true,"lineHeight":1.35},{"type":"arrow","version":266,"versionNonce":605427910,"index":"aF","isDeleted":false,"id":"K_YrlPaXFrNzOuku5zMjm","fillStyle":"solid","strokeWidth":4,"strokeStyle":"solid","roughness":0,"opacity":100,"angle":0,"x":-396.05685881451797,"y":221.50471354059363,"strokeColor":"#2f9e44","backgroundColor":"transparent","width":436.551724137931,"height":514.4827586206895,"seed":415027846,"groupIds":[],"frameId":null,"roundness":{"type":2},"boundElements":[],"updated":1722950215422,"link":null,"locked":false,"startBinding":null,"endBinding":null,"lastCommittedPoint":null,"startArrowhead":null,"endArrowhead":"arrow","points":[[0,0],[304.13793103448273,-269.6551724137931],[436.551724137931,-514.4827586206895]]},{"type":"text","version":103,"versionNonce":1404924358,"index":"aG","isDeleted":false,"id":"2T6On7Gk","fillStyle":"solid","strokeWidth":4,"strokeStyle":"solid","roughness":0,"opacity":100,"angle":5.237953054781757,"x":-65.79966964122752,"y":-254.71903501786153,"strokeColor":"#2f9e44","backgroundColor":"transparent","width":124.48095703125,"height":21.6,"seed":1152393626,"groupIds":[],"frameId":null,"roundness":null,"boundElements":[],"updated":1722950584687,"link":"[[02 - RESOURCES/Notes/6. Big O(n²)\|6. Big O(n²)]]","locked":false,"fontSize":16,"fontFamily":6,"text":"📍[[02 - RESOURCES/Notes/6. Big O(n²)\|6. Big O(n²)]]","rawText":"[[02 - RESOURCES/Notes/6. Big O(n²)\|6. Big O(n²)]]","textAlign":"left","verticalAlign":"top","containerId":null,"originalText":"📍[[02 - RESOURCES/Notes/6. Big O(n²)\|6. Big O(n²)]]","autoResize":true,"lineHeight":1.35},{"type":"arrow","version":331,"versionNonce":1788196315,"index":"aH","isDeleted":false,"id":"hDEszIvcG4CXTYRTbn2g3","fillStyle":"solid","strokeWidth":4,"strokeStyle":"solid","roughness":0,"opacity":100,"angle":0,"x":-393.2982381248628,"y":218.7460928509384,"strokeColor":"#1e1e1e","backgroundColor":"transparent","width":331.0344827586206,"height":526.206896551724,"seed":1824666202,"groupIds":[],"frameId":null,"roundness":{"type":2},"boundElements":[],"updated":1722982139388,"link":null,"locked":false,"startBinding":null,"endBinding":null,"lastCommittedPoint":null,"startArrowhead":null,"endArrowhead":"arrow","points":[[0,0],[236.55172413793093,-315.8620689655172],[331.0344827586206,-526.206896551724]]},{"type":"text","version":102,"versionNonce":1157996373,"index":"aI","isDeleted":false,"id":"jxgYVaI0","fillStyle":"solid","strokeWidth":4,"strokeStyle":"solid","roughness":0,"opacity":100,"angle":5.181153299986048,"x":-180.5687530330257,"y":-225.59345473334994,"strokeColor":"#1e1e1e","backgroundColor":"transparent","width":124.48095703125,"height":21.6,"seed":2140206726,"groupIds":[],"frameId":null,"roundness":null,"boundElements":[],"updated":1722982246379,"link":"[[02 - RESOURCES/Notes/7. Big O(n³)\|7. Big O(n³)]]","locked":false,"fontSize":16,"fontFamily":6,"text":"📍[[02 - RESOURCES/Notes/7. Big O(n³)\|7. Big O(n³)]]","rawText":"[[02 - RESOURCES/Notes/7. Big O(n³)\|7. Big O(n³)]]","textAlign":"left","verticalAlign":"top","containerId":null,"originalText":"📍[[02 - RESOURCES/Notes/7. Big O(n³)\|7. Big O(n³)]]","autoResize":true,"lineHeight":1.35},{"type":"arrow","version":758,"versionNonce":805558232,"index":"aJ","isDeleted":false,"id":"75FCY_-VWEWGY4TpMk4pr","fillStyle":"solid","strokeWidth":4,"strokeStyle":"solid","roughness":0,"opacity":100,"angle":0,"x":-393.9878932972766,"y":220.12540319576607,"strokeColor":"#e03131","backgroundColor":"transparent","width":702.4802435085813,"height":110.29992721924208,"seed":533527642,"groupIds":[],"frameId":null,"roundness":{"type":2},"boundElements":[],"updated":1730555396042,"link":null,"locked":false,"startBinding":null,"endBinding":null,"lastCommittedPoint":null,"startArrowhead":null,"endArrowhead":"arrow","points":[[0,0],[301.5182577812396,-98.46701478683252],[702.4802435085813,-110.29992721924208]]},{"type":"text","version":303,"versionNonce":889753256,"index":"aK","isDeleted":false,"id":"HvrhOTay","fillStyle":"solid","strokeWidth":4,"strokeStyle":"solid","roughness":0,"opacity":100,"angle":6.255329072462841,"x":135.1974901063778,"y":75.88423459021385,"strokeColor":"#e03131","backgroundColor":"transparent","width":145.71299743652344,"height":21.6,"seed":848139462,"groupIds":[],"frameId":null,"roundness":null,"boundElements":[],"updated":1730555408725,"link":"[[02 - RESOURCES/Notes/2. Big O(log n)\|2. Big O(log n)]]","locked":false,"fontSize":16,"fontFamily":6,"text":"📍[[02 - RESOURCES/Notes/2. Big O(log n)\|2. Big O(log n)]]","rawText":"[[02 - RESOURCES/Notes/2. Big O(log n)\|2. Big O(log n)]]","textAlign":"left","verticalAlign":"top","containerId":null,"originalText":"📍[[02 - RESOURCES/Notes/2. Big O(log n)\|2. Big O(log n)]]","autoResize":true,"lineHeight":1.35},{"type":"arrow","version":499,"versionNonce":954186587,"index":"aL","isDeleted":false,"id":"mYQV5hambHMjNu5K-bxmW","fillStyle":"solid","strokeWidth":4,"strokeStyle":"solid","roughness":0,"opacity":100,"angle":0,"x":-392.608582952449,"y":217.36678250611084,"strokeColor":"#f08c00","backgroundColor":"transparent","width":640.6896551724138,"height":431.03448275862064,"seed":2140808710,"groupIds":[],"frameId":null,"roundness":{"type":2},"boundElements":[],"updated":1722982127967,"link":null,"locked":false,"startBinding":null,"endBinding":null,"lastCommittedPoint":null,"startArrowhead":null,"endArrowhead":"arrow","points":[[0,0],[321.3793103448275,-114.4827586206896],[640.6896551724138,-431.03448275862064]]},{"type":"text","version":105,"versionNonce":1528169173,"index":"aM","isDeleted":false,"id":"GpNEZvAY","fillStyle":"solid","strokeWidth":4,"strokeStyle":"solid","roughness":0,"opacity":100,"angle":5.494143481980993,"x":111.41482865525556,"y":-191.19674092030877,"strokeColor":"#f08c00","backgroundColor":"transparent","width":159.04103088378906,"height":21.6,"seed":492345946,"groupIds":[],"frameId":null,"roundness":null,"boundElements":[],"updated":1722982288645,"link":"[[02 - RESOURCES/Notes/5. Big O(n log n)\|5. Big O(n log n)]]","locked":false,"fontSize":16,"fontFamily":6,"text":"📍[[02 - RESOURCES/Notes/5. Big O(n log n)\|5. Big O(n log n)]]","rawText":"[[02 - RESOURCES/Notes/5. Big O(n log n)\|5. Big O(n log n)]]","textAlign":"left","verticalAlign":"top","containerId":null,"originalText":"📍[[02 - RESOURCES/Notes/5. Big O(n log n)\|5. Big O(n log n)]]","autoResize":true,"lineHeight":1.35},{"type":"arrow","version":189,"versionNonce":392747029,"index":"aN","isDeleted":false,"id":"Q1yZvAhafkAOA5skbeiZH","fillStyle":"solid","strokeWidth":4,"strokeStyle":"solid","roughness":0,"opacity":100,"angle":0,"x":-388.4706519179663,"y":213.91850664404188,"strokeColor":"#e03131","backgroundColor":"transparent","width":213.1034482758621,"height":533.7931034482758,"seed":868755994,"groupIds":[],"frameId":null,"roundness":{"type":2},"boundElements":[],"updated":1722982143987,"link":null,"locked":false,"startBinding":null,"endBinding":null,"lastCommittedPoint":null,"startArrowhead":null,"endArrowhead":"arrow","points":[[0,0],[161.37931034482756,-277.24137931034477],[213.1034482758621,-533.7931034482758]]},{"type":"text","version":91,"versionNonce":305734939,"index":"aO","isDeleted":false,"id":"K5cYE9rH","fillStyle":"solid","strokeWidth":4,"strokeStyle":"solid","roughness":0,"opacity":100,"angle":4.85990474664134,"x":-267.9075993321572,"y":-275.7660945425127,"strokeColor":"#e03131","backgroundColor":"transparent","width":123.88800048828125,"height":21.6,"seed":546186202,"groupIds":[],"frameId":null,"roundness":null,"boundElements":[],"updated":1722982249051,"link":"[[02 - RESOURCES/Notes/8. Big O(2ⁿ)\|8. Big O(2ⁿ)]]","locked":false,"fontSize":16,"fontFamily":6,"text":"📍[[02 - RESOURCES/Notes/8. Big O(2ⁿ)\|8. Big O(2ⁿ)]]","rawText":"[[02 - RESOURCES/Notes/8. Big O(2ⁿ)\|8. Big O(2ⁿ)]]","textAlign":"left","verticalAlign":"top","containerId":null,"originalText":"📍[[02 - RESOURCES/Notes/8. Big O(2ⁿ)\|8. Big O(2ⁿ)]]","autoResize":true,"lineHeight":1.35},{"type":"arrow","version":91,"versionNonce":1160222421,"index":"aP","isDeleted":false,"id":"v5QeKWt6o0lzlj-yuuORf","fillStyle":"solid","strokeWidth":4,"strokeStyle":"solid","roughness":0,"opacity":100,"angle":0,"x":-388.4706519179663,"y":217.36678250611084,"strokeColor":"#f08c00","backgroundColor":"transparent","width":76.55172413793105,"height":557.9310344827586,"seed":457171098,"groupIds":[],"frameId":null,"roundness":{"type":2},"boundElements":[],"updated":1722982147959,"link":null,"locked":false,"startBinding":null,"endBinding":null,"lastCommittedPoint":null,"startArrowhead":null,"endArrowhead":"arrow","points":[[0,0],[59.31034482758622,-277.24137931034477],[76.55172413793105,-557.9310344827586]]},{"type":"text","version":124,"versionNonce":958071669,"index":"aQ","isDeleted":false,"id":"V5LK8xlr","fillStyle":"solid","strokeWidth":4,"strokeStyle":"solid","roughness":0,"opacity":100,"angle":4.8159130645368435,"x":-391.5195219796958,"y":-291.7358426950329,"strokeColor":"#f08c00","backgroundColor":"transparent","width":122.17695617675781,"height":21.6,"seed":1535307994,"groupIds":[],"frameId":null,"roundness":null,"boundElements":[],"updated":1722982251124,"link":"[[02 - RESOURCES/Notes/9. Big O(n!)\|9. Big O(n!)]]","locked":false,"fontSize":16,"fontFamily":6,"text":"📍[[02 - RESOURCES/Notes/9. Big O(n!)\|9. Big O(n!)]]","rawText":"[[02 - RESOURCES/Notes/9. Big O(n!)\|9. Big O(n!)]]","textAlign":"left","verticalAlign":"top","containerId":null,"originalText":"📍[[02 - RESOURCES/Notes/9. Big O(n!)\|9. Big O(n!)]]","autoResize":true,"lineHeight":1.35},{"type":"arrow","version":154,"versionNonce":1318098392,"index":"aR","isDeleted":false,"id":"2C7Sje0P3c9Pn2L7vIKqv","fillStyle":"solid","strokeWidth":4,"strokeStyle":"solid","roughness":0,"opacity":100,"angle":0,"x":-390.5396174352076,"y":218.05643767852467,"strokeColor":"#1e1e1e","backgroundColor":"transparent","width":702.7586206896551,"height":224.82758620689657,"seed":1811878874,"groupIds":[],"frameId":null,"roundness":{"type":2},"boundElements":[],"updated":1730555675660,"link":null,"locked":false,"startBinding":null,"endBinding":{"elementId":"A3ve2Rqf","focus":-0.6787074296707147,"gap":4.925045869990129,"fixedPoint":null},"lastCommittedPoint":null,"startArrowhead":null,"endArrowhead":"arrow","points":[[0,0],[338.27425366818903,-157.55682530368705],[702.7586206896551,-224.82758620689657]]},{"type":"text","version":113,"versionNonce":1756371672,"index":"aS","isDeleted":false,"id":"A3ve2Rqf","fillStyle":"solid","strokeWidth":4,"strokeStyle":"solid","roughness":0,"opacity":100,"angle":6.029878855035,"x":202.02195938544872,"y":-13.475971316665552,"strokeColor":"#1e1e1e","backgroundColor":"transparent","width":103.94728088378906,"height":17.665279322811056,"seed":653868954,"groupIds":[],"frameId":null,"roundness":null,"boundElements":[{"id":"2C7Sje0P3c9Pn2L7vIKqv","type":"arrow"}],"updated":1730555675660,"link":"[[02 - RESOURCES/Notes/3. Big O(√n)\|3. Big O(√n)]]","locked":false,"fontSize":13.085392090971151,"fontFamily":6,"text":"📍[[02 - RESOURCES/Notes/3. Big O(√n)\|3. Big O(√n)]]","rawText":"[[02 - RESOURCES/Notes/3. Big O(√n)\|3. Big O(√n)]]","textAlign":"left","verticalAlign":"top","containerId":null,"originalText":"📍[[02 - RESOURCES/Notes/3. Big O(√n)\|3. Big O(√n)]]","autoResize":true,"lineHeight":1.35}],"appState":{"theme":"dark","viewBackgroundColor":"#ffffff","currentItemStrokeColor":"#d91212","currentItemBackgroundColor":"#a62f08","currentItemFillStyle":"hachure","currentItemStrokeWidth":4,"currentItemStrokeStyle":"solid","currentItemRoughness":0,"currentItemOpacity":100,"currentItemFontFamily":6,"currentItemFontSize":16,"currentItemTextAlign":"left","currentItemStartArrowhead":null,"currentItemEndArrowhead":"arrow","currentItemArrowType":"round","scrollX":559.1033248113617,"scrollY":435.62813317012717,"zoom":{"value":1},"currentItemRoundness":"round","gridSize":20,"gridStep":5,"gridModeEnabled":false,"gridColor":{"Bold":"rgba(217, 217, 217, 0.5)","Regular":"rgba(230, 230, 230, 0.5)"},"currentStrokeOptions":null,"frameRendering":{"enabled":true,"clip":true,"name":true,"outline":true},"objectsSnapModeEnabled":false,"activeTool":{"type":"selection","customType":null,"locked":false,"lastActiveTool":null}},"files":{}};InitialData.scrollToContent=true;App=()=>{const e=React.useRef(null),t=React.useRef(null),[n,i]=React.useState({width:void 0,height:void 0});return React.useEffect(()=>{i({width:t.current.getBoundingClientRect().width,height:t.current.getBoundingClientRect().height});const e=()=>{i({width:t.current.getBoundingClientRect().width,height:t.current.getBoundingClientRect().height})};return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[t]),React.createElement(React.Fragment,null,React.createElement("div",{className:"excalidraw-wrapper",ref:t},React.createElement(ExcalidrawLib.Excalidraw,{ref:e,width:n.width,height:n.height,initialData:InitialData,viewModeEnabled:!0,zenModeEnabled:!0,gridModeEnabled:!1})))},excalidrawWrapper=document.getElementById("Big_O_2024-08-06_1507.18.excalidraw.md1");ReactDOM.render(React.createElement(App),excalidrawWrapper);})();</script>

Es gibt insgesamt 9 Möglichkeiten. Diese sind:
- [[02 - RESOURCES/Notes/1. Big O(1)\|1. Big O(1)]]
- [[02 - RESOURCES/Notes/2. Big O(log n)\|2. Big O(log n)]]
- [[02 - RESOURCES/Notes/3. Big O(√n)\|3. Big O(√n)]]
- [[02 - RESOURCES/Notes/4. Big O(n)\|4. Big O(n)]]
- [[02 - RESOURCES/Notes/5. Big O(n log n)\|5. Big O(n log n)]]
- [[02 - RESOURCES/Notes/6. Big O(n²)\|6. Big O(n²)]]
- [[02 - RESOURCES/Notes/7. Big O(n³)\|7. Big O(n³)]]
- [[02 - RESOURCES/Notes/8. Big O(2ⁿ)\|8. Big O(2ⁿ)]]
- [[02 - RESOURCES/Notes/9. Big O(n!)\|9. Big O(n!)]]

>[!example] Bsp 
>Mit diesem Code kannst du herausfinden, um welche Zeitkomplexität es sich handelt. In der `example_function` solltest du die [[02 - RESOURCES/Notes/Funktion\|Funktion]] einsetzen, deren [[02 - RESOURCES/Notes/Big O\|Zeitkomplexität]] du ermitteln möchtest.
>```python
>import time
>import matplotlib.pyplot as plt
>
>def example_function(n):
>    # Beispielcode mit O(n) Zeitkomplexität
>    return sum(range(n))
>
>sizes = []
>times = []
>
>for n in range(1, 1001, 100):  # Teste von 1 bis 1000, in Schritten von 100
>    start_time = time.time()
>    example_function(n)
>    end_time = time.time()
>    
>    sizes.append(n)
>    times.append(end_time - start_time)
>
># Diagramm erstellen
>plt.plot(sizes, times, marker='o')
>plt.title('Laufzeit der Funktion')
>plt.xlabel('Eingabegröße (n)')
>plt.ylabel('Zeit (in Sekunden)')
>plt.grid()
>plt.show()
>```


# [[02 - RESOURCES/Notes/Zeitkomplexität analysieren\|Zeitkomplexität analysieren]]

---

# 🎯 AP2-Prüfungsaufgabe: Zeitkomplexität analysieren

>[!example] Typische Prüfungsaufgabe
>**Szenario: Code-Review - Algorithmenanalyse**
>
>Ein Entwicklerteam hat mehrere Funktionen implementiert. Als Senior-Entwickler sollst du die Zeitkomplexität (Big O) jeder Funktion bestimmen und die langsamste identifizieren.
>
>**Aufgabe:**
>Bestimme die Zeitkomplexität für folgende Code-Snippets:
>
>```java
>// Funktion A
>public void funktionA(int[] arr) {
>    for (int i = 0; i < arr.length; i++) {
>        System.out.println(arr[i]);
>    }
>}
>
>// Funktion B
>public void funktionB(int[] arr) {
>    for (int i = 0; i < arr.length; i++) {
>        for (int j = 0; j < arr.length; j++) {
>            System.out.println(arr[i] + arr[j]);
>        }
>    }
>}
>
>// Funktion C
>public int funktionC(int[] arr, int target) {
>    int left = 0, right = arr.length - 1;
>    while (left <= right) {
>        int mid = left + (right - left) / 2;
>        if (arr[mid] == target) return mid;
>        if (arr[mid] < target) left = mid + 1;
>        else right = mid - 1;
>    }
>    return -1;
>}
>
>// Funktion D
>public int funktionD(int n) {
>    if (n <= 1) return 1;
>    return funktionD(n-1) + funktionD(n-1);
>}
>```

---

## 📋 Kochrezept: Big O Zeitkomplexität bestimmen

```
┌─────────────────────────────────────────────────────────┐
│ SCHRITT 1: SCHLEIFEN ZÄHLEN                             │
├─────────────────────────────────────────────────────────┤
│ Wie viele verschachtelte Schleifen gibt es?             │
│                                                          │
│ 🔢 REGEL:                                               │
│ • 0 Schleifen → O(1)                                    │
│ • 1 Schleife → O(n)                                     │
│ • 2 verschachtelte Schleifen → O(n²)                   │
│ • 3 verschachtelte Schleifen → O(n³)                   │
│                                                          │
│ Beispiel:                                                │
│ for (int i = 0; i < n; i++)          // 1 Schleife     │
│     for (int j = 0; j < n; j++)      // 2 verschachtelt│
│         doSomething();                // → O(n²)        │
│                                                          │
│ 📌 ACHTUNG:                                             │
│    Zwei Schleifen HINTEREINANDER sind O(n + n) = O(n)  │
│    Nicht O(n²)!                                         │
└─────────────────────────────────────────────────────────┘
                         ↓
┌─────────────────────────────────────────────────────────┐
│ SCHRITT 2: HALBIERUNG ERKENNEN                          │
├─────────────────────────────────────────────────────────┤
│ Wird die Eingabe wiederholt halbiert?                   │
│                                                          │
│ 🔍 INDIZIEN für O(log n):                              │
│ • while-Schleife mit mid = (left + right) / 2           │
│ • Suchbereich wird halbiert: left = mid + 1             │
│ • Rekursion mit n/2                                      │
│                                                          │
│ Beispiel - Binary Search:                                │
│ while (left <= right) {                                  │
│     int mid = (left + right) / 2;  // Halbierung!       │
│     if (arr[mid] == target) return mid;                 │
│     if (arr[mid] < target) left = mid + 1;              │
│     else right = mid - 1;                                │
│ }                                                        │
│ → O(log n)                                              │
│                                                          │
│ 📌 MERKSATZ:                                            │
│    "Halbieren = log n"                                   │
└─────────────────────────────────────────────────────────┘
                         ↓
┌─────────────────────────────────────────────────────────┐
│ SCHRITT 3: REKURSION ANALYSIEREN                        │
├─────────────────────────────────────────────────────────┤
│ Wie oft ruft sich die Funktion selbst auf?              │
│                                                          │
│ 🌳 REKURSIONSBAUM zeichnen:                             │
│                                                          │
│ 1 Aufruf pro Rekursion:                                 │
│ func(n) → func(n-1) → func(n-2) → ...                  │
│ → O(n)                                                  │
│                                                          │
│ 2 Aufrufe pro Rekursion:                                │
│ func(n) → func(n-1) + func(n-1)                        │
│     1                                                    │
│    / \                                                   │
│   2   2      → Jede Ebene verdoppelt                    │
│  / \ / \     → 2^n Aufrufe total                        │
│ → O(2^n)                                                │
│                                                          │
│ Halbierung in Rekursion:                                 │
│ func(n) → func(n/2)                                     │
│ → O(log n)                                              │
│                                                          │
│ 📌 FAUSTREGEL:                                          │
│    func(n-1): O(n)                                      │
│    2 * func(n-1): O(2^n)                                │
│    func(n/2): O(log n)                                  │
└─────────────────────────────────────────────────────────┘
                         ↓
┌─────────────────────────────────────────────────────────┐
│ SCHRITT 4: KONSTANTEN IGNORIEREN                        │
├─────────────────────────────────────────────────────────┤
│ Big O interessiert nur das Wachstum, nicht Konstanten!  │
│                                                          │
│ ❌ FALSCH:                                              │
│ • O(2n) → RICHTIG: O(n)                                 │
│ • O(3n²) → RICHTIG: O(n²)                              │
│ • O(n + 100) → RICHTIG: O(n)                            │
│ • O(n²/2) → RICHTIG: O(n²)                             │
│                                                          │
│ Beispiel:                                                │
│ for (int i = 0; i < n*2; i++)  // 2n Durchläufe        │
│     doSomething();              // → O(n), nicht O(2n)! │
│                                                          │
│ 📌 REGEL:                                               │
│    Streiche alle Konstanten und Koeffizienten           │
└─────────────────────────────────────────────────────────┘
                         ↓
┌─────────────────────────────────────────────────────────┐
│ SCHRITT 5: DOMINANTE TERM FINDEN                        │
├─────────────────────────────────────────────────────────┤
│ Bei mehreren Termen: Behalte nur den größten!           │
│                                                          │
│ 📈 WACHSTUMS-REIHENFOLGE (langsam → schnell):          │
│ O(1) < O(log n) < O(n) < O(n log n) <                  │
│ O(n²) < O(n³) < O(2^n) < O(n!)                         │
│                                                          │
│ Beispiele:                                               │
│ • O(n² + n) → O(n²)    (n² dominiert n)                │
│ • O(n + log n) → O(n)  (n dominiert log n)             │
│ • O(2^n + n²) → O(2^n) (2^n dominiert n²)             │
│ • O(n! + 2^n) → O(n!)  (n! dominiert 2^n)             │
│                                                          │
│ Code-Beispiel:                                           │
│ // Schleife 1: O(n)                                     │
│ for (int i = 0; i < n; i++) { }                         │
│ // Schleife 2: O(n²)                                    │
│ for (int i = 0; i < n; i++)                             │
│     for (int j = 0; j < n; j++) { }                     │
│                                                          │
│ → Gesamt: O(n + n²) = O(n²)                            │
│                                                          │
│ 📌 REGEL:                                               │
│    Behalte nur den Term mit höchstem Wachstum           │
└─────────────────────────────────────────────────────────┘
                         ↓
┌─────────────────────────────────────────────────────────┐
│ SCHRITT 6: BEST/AVERAGE/WORST CASE                      │
├─────────────────────────────────────────────────────────┤
│ Unterscheide die drei Fälle:                            │
│                                                          │
│ Beispiel - [[02 - RESOURCES/Notes/Linear Search\|Linear Search]]:                           │
│ • Best-Case: O(1)    - Element ist erstes               │
│ • Average: O(n/2)    - Element in der Mitte             │
│ • Worst-Case: O(n)   - Element ist letztes              │
│                                                          │
│ Für AP2-Prüfung:                                        │
│ → Immer Worst-Case angeben, wenn nicht anders gefragt!  │
│                                                          │
│ 📌 STANDARD:                                            │
│    Big O = Worst-Case Zeitkomplexität                   │
└─────────────────────────────────────────────────────────┘
```

---

## ✅ Lösung der Prüfungsaufgabe

### Funktion A - Analyse
```java
public void funktionA(int[] arr) {
    for (int i = 0; i < arr.length; i++) {  // 1 Schleife, n Durchläufe
        System.out.println(arr[i]);          // O(1) pro Durchlauf
    }
}
```
**Analyse:**
- 1 Schleife von 0 bis n
- Jede Iteration: O(1)
- Gesamt: O(n)

**Antwort: O(n) - Lineare Zeitkomplexität**

---

### Funktion B - Analyse
```java
public void funktionB(int[] arr) {
    for (int i = 0; i < arr.length; i++) {      // Äußere Schleife: n
        for (int j = 0; j < arr.length; j++) {  // Innere Schleife: n
            System.out.println(arr[i] + arr[j]); // O(1)
        }
    }
}
```
**Analyse:**
- 2 verschachtelte Schleifen
- Äußere: n Durchläufe
- Innere: n Durchläufe (für jedes i)
- Gesamt: n × n = n²

**Antwort: O(n²) - Quadratische Zeitkomplexität**

---

### Funktion C - Analyse
```java
public int funktionC(int[] arr, int target) {
    int left = 0, right = arr.length - 1;
    while (left <= right) {                       // Halbierung!
        int mid = left + (right - left) / 2;
        if (arr[mid] == target) return mid;
        if (arr[mid] < target) left = mid + 1;    // Suchbereich halbiert
        else right = mid - 1;                      // Suchbereich halbiert
    }
    return -1;
}
```
**Analyse:**
- [[02 - RESOURCES/Notes/Binary Search\|Binary Search]] - Suchbereich wird halbiert
- Bei jedem Durchlauf: n → n/2 → n/4 → ...
- Anzahl Halbierungen bis 1: log₂(n)

**Antwort: O(log n) - Logarithmische Zeitkomplexität**

---

### Funktion D - Analyse
```java
public int funktionD(int n) {
    if (n <= 1) return 1;                         // Base Case
    return funktionD(n-1) + funktionD(n-1);      // 2 rekursive Aufrufe!
}
```
**Analyse:**
- Rekursionsbaum:
```
         f(5)
        /    \
      f(4)  f(4)
      / \    / \
   f(3) f(3) f(3) f(3)
   ...
```
- Jede Ebene verdoppelt die Aufrufe
- Tiefe: n
- Gesamtaufrufe: 2^n

**Antwort: O(2^n) - Exponentielle Zeitkomplexität**

---

### Zusammenfassung

| Funktion | Zeitkomplexität | Bewertung |
|---|---|---|
| A | O(n) | ✅ Akzeptabel |
| B | O(n²) | ⚠️ Langsam bei großen n |
| C | O(log n) | ⚡ Sehr schnell |
| D | O(2^n) | ❌ SEHR langsam - Optimierung nötig! |

**Langsamste Funktion: D mit O(2^n)** 🐌

---

## 📝 Prüfungs-Checkliste

>[!check] Big O richtig bestimmen
>- ✅ Schleifen zählen (verschachtelt = Multiplikation)
>- ✅ Halbierung = log n erkennen
>- ✅ Rekursionsbaum zeichnen
>- ✅ Konstanten ignorieren (O(2n) → O(n))
>- ✅ Dominanten Term behalten (O(n²+n) → O(n²))
>- ✅ Worst-Case angeben

>[!warning] Häufige Fehler in der Prüfung
>**❌ Fehler 1:** Zwei Schleifen hintereinander als O(n²)
>```java
>// FALSCH: O(n²)
>for (int i = 0; i < n; i++) { }  // O(n)
>for (int j = 0; j < n; j++) { }  // O(n)
>// → O(n + n) = O(2n) = O(n) ✓
>
>// RICHTIG für O(n²): Verschachtelt!
>for (int i = 0; i < n; i++) {
>    for (int j = 0; j < n; j++) { }
>}
>```
>
>**❌ Fehler 2:** Konstanten nicht streichen
>```
>// FALSCH: "Die Komplexität ist O(3n + 5)"
>// RICHTIG: "Die Komplexität ist O(n)"
>```
>
>**❌ Fehler 3:** log n nicht erkennen
>```java
>// Dies ist O(log n), nicht O(n)!
>while (n > 1) {
>    n = n / 2;  // Halbierung = log n
>}
>```
>
>**❌ Fehler 4:** Komplexitäten falsch vergleichen
>```
>// FALSCH: O(n²) ist schneller als O(n log n)
>// RICHTIG: O(n log n) < O(n²)
>// n log n wächst langsamer als n²
>```

>[!tip] Prüfungstipp: Schnelle Erkennung
>**Code-Pattern → Big O Tabelle:**
>
>| Code-Pattern | Big O | Beispiel |
>|---|---|---|
>| Einzelne Operation | O(1) | `return arr[0]` |
>| Eine Schleife | O(n) | `for (i=0; i<n; i++)` |
>| Verschachtelte Schleifen | O(n²) | Doppelte for-Schleife |
>| Halbierung in Schleife | O(log n) | [[02 - RESOURCES/Notes/Binary Search\|Binary Search]] |
>| Schleife + Halbierung | O(n log n) | [[02 - RESOURCES/Notes/Quicksort\|Quicksort]], Merge Sort |
>| 2 rekursive Aufrufe | O(2^n) | Fibonacci rekursiv |
>| Permutationen | O(n!) | Alle Kombinationen |

>[!tip] Prüfungstipp: Algorithmen-Komplexitäten auswendig
>**Wichtigste Algorithmen für AP2:**
>
>| Algorithmus | Best | Average | Worst |
>|---|---|---|---|
>| [[02 - RESOURCES/Notes/Linear Search\|Linear Search]] | O(1) | O(n) | O(n) |
>| [[02 - RESOURCES/Notes/Binary Search\|Binary Search]] | O(1) | O(log n) | O(log n) |
>| [[02 - RESOURCES/Notes/Bubble Sort\|Bubble Sort]] | O(n) | O(n²) | O(n²) |
>| [[02 - RESOURCES/Notes/Quicksort\|Quicksort]] | O(n log n) | O(n log n) | O(n²) |
>| Hash Table Lookup | O(1) | O(1) | O(n) |

---

## 🔗 Weiterführende Themen

- [[02 - RESOURCES/Notes/Bubble Sort\|Bubble Sort]] - O(n²) Sortieralgorithmus
- [[02 - RESOURCES/Notes/Quicksort\|Quicksort]] - O(n log n) Sortieralgorithmus
- [[02 - RESOURCES/Notes/Binary Search\|Binary Search]] - O(log n) Suchalgorithmus
- [[Linear Search]] - O(n) Suchalgorithmus
- [[02 - RESOURCES/Notes/1. Big O(1)\|1. Big O(1)]] bis [[02 - RESOURCES/Notes/9. Big O(n!)\|9. Big O(n!)]] - Alle Komplexitäten im Detail