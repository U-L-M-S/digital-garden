---
{"dg-publish":true,"permalink":"/02-resources/notes/i-pv6-adressen/","tags":["informatik/netzwerk/ip/ipv6"],"noteIcon":"","updated":"2025-09-10T16:35:22.000+02:00"}
---

> [[02 - RESOURCES/Notes/IPv6\|IPv6]] verwendet keine Klassen wie bei [[02 - RESOURCES/Notes/IPv4\|IPv4]] ([[02 - RESOURCES/Notes/IPv4-Klassennetze\|IPv4-Klassennetze]]).
> Sonder, es verwendet 3 Arten von Adressen und jeder Adresse ist für irgendwas bestimmt.


>[!note]Adressenarten  
Man kann erkennen, um welche Art von Adresse es sich handelt, 
indem man die ersten Bits der Adresse betrachtet.


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/02-resources/notes/i-pv6-public/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




>Für die Kommunikation zwischen [[02 - RESOURCES/Notes/Router\|Router]] und [[02 - RESOURCES/Notes/Internet\|Internet]]. Beginnt mit **2000::/3**.
>> Kann [[02 - RESOURCES/Notes/Unicast\|Unicast]] oder [[02 - RESOURCES/Notes/Anycast\|Anycast]] sein. **Beispiel**: `2001:db8::1` könnte eine öffentliche Adresse eines Webservers sein, die für den Zugriff über das Internet verwendet wird.


</div></div>



<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/02-resources/notes/i-pv6-private/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





> Für die Kommunikation innerhalb eines Netzwerks. 
> Hinter dem [[02 - RESOURCES/Notes/Router\|Router]].

## 
<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/02-resources/notes/i-pv6-link-local-adresse/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




> Beginnt mit **FE80::/10**. Ist [[02 - RESOURCES/Notes/Unicast\|Unicast]] und nur im lokalen Netzwerk verwendbar. **Beispiel**: `fe80::1` könnte eine Adresse eines Geräts innerhalb eines lokalen Netzwerks sein, wie ein Drucker oder ein Computer, der nur für lokale Kommunikation genutzt wird.

</div></div>


## 
<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/02-resources/notes/i-pv6-unique-local-adresse/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




> Beginnt mit **FC00::/7**. Ist [[02 - RESOURCES/Notes/Unicast\|Unicast]] und für lokale Netzwerke bestimmt, ähnlich wie private IPv4-Adressen. **Beispiel**: `fc00::1234:5678:9abc:def0` könnte eine Adresse eines internen Servers in einem Unternehmensnetzwerk sein, der nicht von außen erreichbar ist.

</div></div>


## 
<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/02-resources/notes/i-pv6-multicast/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




> Für die Kommunikation mit mehreren Empfängern gleichzeitig. Beginnt mit **FF00::/8**. Kann in verschiedenen Bereichen wie Link-Local, Site-Local oder Global verwendet werden. **Beispiel**: `ff02::1` ist eine Link-Local Multicast-Adresse, die alle Geräte im lokalen Netzwerksegment anspricht, z.B. für Netzwerk-Discovery-Protokolle oder automatische Geräteerkennung.


</div></div>


</div></div>

