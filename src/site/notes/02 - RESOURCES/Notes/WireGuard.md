---
{"dg-publish":true,"permalink":"/02-resources/notes/wire-guard/","tags":["informatik/netzwerk/vpn","kryptographie","sicherheit/it-sicherheit"],"noteIcon":"","updated":"2025-11-07T11:31:38.000+01:00"}
---

> Modernes [[02 - RESOURCES/Notes/VPN\|VPN]]-Protokoll

**WireGuard** ist ein modernes [[02 - RESOURCES/Notes/VPN\|VPN]]-Protokoll. Es ist einfacher, schneller und sicherer als [[02 - RESOURCES/Notes/OpenVPN\|OpenVPN]] oder [[02 - RESOURCES/Notes/IPSec\|IPsec]].

---

## Vorteile

- **Moderne Kryptographie**: ChaCha20, Poly1305
- **Weniger Code**: ~4.000 Zeilen (vs. 100.000+ bei [[02 - RESOURCES/Notes/OpenVPN\|OpenVPN]])
- **Bessere Performance**: Schneller als [[02 - RESOURCES/Notes/OpenVPN\|OpenVPN]]
- **Einfachere Konfiguration**: Weniger komplex
- **Native Linux-Kernel-Integration**: Seit Linux 5.6
- **Bessere mobile Unterstützung**: Roaming-fähig

## Funktionsweise

```
WireGuard arbeitet mit Public Key Cryptography:

Server                    Client
  │                          │
  ├─► Public Key A          Public Key B ◄─┤
  │   Private Key A         Private Key B   │
  │                                         │
  └────────── Encrypted Tunnel ────────────┘
```

**Jeder Peer benötigt:**
- Private Key (geheim)
- Public Key (wird ausgetauscht)
- Allowed IPs (welche IPs über Tunnel)

## [[Split Tunneling\|Split Tunneling]] vs. [[Full Tunnel\|Full Tunnel]]

**[[Split Tunneling\|Split Tunneling]]:**
```ini
# Nur interne Netze
AllowedIPs = 10.10.10.0/24, 192.168.1.0/24
```

**[[Full Tunnel\|Full Tunnel]]:**
```ini
# Gesamter Traffic über VPN
AllowedIPs = 0.0.0.0/0, ::/0
```

## Standard-Port

**UDP 51820**

## Client-Plattformen

- Linux (native)
- Windows (GUI)
- macOS (GUI)
- Android (App)
- iOS (App)
