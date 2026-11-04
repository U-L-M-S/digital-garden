---
{"dg-publish":true,"permalink":"/wiki/dhc-pv6/","tags":["informatik/netzwerk"],"noteIcon":"","updated":"2026-07-19T03:56:26.000+02:00","dg-note-properties":{"tags":["informatik/netzwerk"],"aliases":["Dynamic Host Configuration Protocol"],"links":null,"created_date":"2025-09-15"}}
---

> Dynamic Host Configuration Protocol ist die neue Version von [[wiki/DHCPv4\|DHCPv4]] für [[wiki/IPv6\|IPv6]]-[[wiki/Netzwerk\|Netzwerk]]e. Wie ein Upgrade vom alten zum neuen System.
> 
> > Während [[wiki/DHCPv4\|DHCPv4]] für [[wiki/IPv4\|IPv4]] arbeitet, kümmert sich [[wiki/DHCPv6\|DHCPv6]] um die automatische Vergabe von [[wiki/IPv6\|IPv6]] Adressen und Konfiguration.
> > Anders als bei [[wiki/IPv4\|IPv4]] haben [[wiki/IPv6\|IPv6]]-Geräte oft schon automatisch eine Adresse - [[wiki/DHCPv6\|DHCPv6]] gibt dann zusätzliche Infos.
---

## Unterschiede zu [[wiki/DHCPv4\|DHCPv4]]:

- **Adressen**: Vergibt [[wiki/IPv6\|IPv6]]-Adressen statt [[wiki/IPv4\|IPv4]]
- **[[wiki/Multicast\|Multicast]]**: Nutzt [[wiki/Multicast\|Multicast]] statt [[wiki/Broadcast\|Broadcast]]
- **Stateless**: Kann auch nur Zusatzinfos geben ohne Adresse
- **[[wiki/PORT\|Port]]s**: Verwendet [[wiki/PORT\|Port]] 546 (Client) und 547 (Server)


<div class="excalidraw-svg"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 590.9901108827339 680.0882679231536" width="590.9901108827339" height="680.0882679231536" class="excalidraw-svg" style="max-width: 100%; height: auto;"><!-- svg-source:excalidraw --><metadata/><defs><style class="style-fonts">      @font-face { font-family: Excalifont; src: url(data:font/woff2;base64,d09GMgABAAAAABL4AA4AAAAAIEQAABKlAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGhwbhnocNAZgAIEsEQgKryCifws4AAE2AiQDbAQgBYMYByAb+hhRlLJaB7KvDrI5Yl0rKpVKG3VV1rkzK0928qKgE9H18eNOBPVj/PbdF7WmEkUVk0qoRA2FFmC6hsJP5U3RnP+7d7mLGgkWhyAhBK8mJCTgQYJLBbdfEyom0wI1Q6rPqTmlvyJ6r803u7VbStLy6wkqfP3/XCWpGqkdtTMar/TN2pUpcHeGAwJBVRyhDO7kAUUAtR91+smrvD5Jpp98MCT5gAfEgYMpdxMOe7qmqx3bobbXOE7rlkMfgGVrmc6otV3+ZopKM4naznapTCe09pLx/3+t5Y9Y0xDndEIV74QCJfyZ1TtvdDchmkT04yFaJhRKMWvqbaWCp0rpmzuNFvDDdxPNgb/AtpsnlauHiv91mASoBEChM7JBPGLwqEA5LT3CijkyAYifNVROAuJXlQUTgfh9TnWpAARlmD26vSuoLAWkVACMRiSuAvyHkUAi1UP4feMTkgA4mEB+EEqX//Gi4sjDrSAfDeRRIIo/z3Aq0mDn7CPrxmpyGtWnc3Kt6LxadGhaNeLLrenUeuG6dl3peqkiHaIrrJsat6Ipfpndzk0TZQnneFYUAYaEjIKGjoGJhY2HT8CufzLxQoiw1Qs3rdWIQE/cqRSKig6DI6PF0tk5KYG6K8BaJ+ZI1IszXwACIE9fTqLo5oQHJI7Qn0yQqlIOQsYAJ0J1MkROhqjJECMZwdMJZXaPunQdXVZODLhGnvOnPhJgV12NiFlIMgC2eTXpDuh8A8ifrLtybIkGfcBTbUHtr1kAu3SDtRIAvoeij+mYvSMaBRdqdF/hZILl6A8CYXNSTwYhwkRKlCJNhgIlJilVqVqti0pwslFoNmJ+wvmffn1OuuSCuZmpbRvWrRmKDIJQlbIWpY4Nm7X63BMegdndR4QWkp8uFY1kBkUzELtt/HCjU1Vm3mhHdZA0wKcsNiZhTHBYqpondlAa/dIsC/FwbS+Y/Ypl9QndJTSJyFzpvY7DKW244/G/QPWJjl6lUtO447jpMFgv89IlwEcA0uDk4VftSRbb+/u6XKJLp6vWlD1cDmC8zJEnq8hDJ0Iu4OvHhhR5vdDegL+rWXw5Wsy6F+vVOnJYcUCvDtm7H2a5xMyPXrkRK0BY0+8wr5JK5Ath9PCWdjTtDA4bqteHAOPByN2AYKMlooTjZXWbUANmEKw7YY5yPJOvluSq9ZI6QPVWO5PqA5HTCet0UrOlWVmRdknivxLXsYfBSCe486CCryt+7tGjw0y+yli6MMiuvJvQIFKkSrQxLBQBrf2KIriS1g4PWej1Vl8a5DmO2YapWfyQ8d2ZzK/caL/2QWs4oPoKJIN8Dq2QernphXAkG03IB0ph4hR/y8uOw2egI5qJxXiReSHnCoWAsOYm3roFOKbPv4TJtGRarhtCvDh7oU/y9S2mO37CurzK5KpUl31Jbju+WDQAeVcVnqzuWt9tPWOWIe1/ks1xoSA3hIuC5S4HWgm7gK4L++sTFw89s0LPA41hjBEDrXL6quOtZsw4YZ40/dj3PdKMNhUcDFy32cRgAlxCDC7qcgOXA1V4JG9V5EUeoQBcGeA64nWhYbtbdcgg3NOuupGfnMwcCl0utOiQ7WSlhmLEAYMe0CulrJz8ID/yIkKR5yEUmC8hqybm9rumFxal1g91RWwiQ5RDVQ7oRzfFlhef3tTz4HX25hbD2zhCg8Fc+RgwcANCh4rLa8V55UMpywHTakUXurm6H0LIIrmUY/c5fugFsHr9fW6uX/16hIBBqIyOk+sG8PFvXjgct62PF7pd5yHdZjYMQzR0Abl6e8b/m/RbmBeaxo3qEQQHbH3hAV1k+YE4+hc5/95XO1lZ0UbT44oIN0mUInThhWJJ8p0M+cqPh+zr9qgv0nXCfoe9V03vLYYCDpaA5LCHRrjGH9APP1xkpV9hdNNh/Monr6i7s5mz3LN/xBZDmXpeiPgppaRv9C7RtTapZpgaJzHrvqvbh9acfDNW5AbJMUT9JvKCLv/84MYcanNSpla73VaoOFdFLwD8I6CiH0omYbsiFT/4RKXC+UwzGU3YrpfMEfuWmsmcxBeV9+E1pJ/e8cIAbdgwxHowAMchjGrF+ZRE+45xxs99/3UntKAyY3J1QdM0bfYQ3j/3Y671/MjkWcxUFDlK1EjcLlLoEnShapowxo1e5uuR+aNTeqCGBcQx6vBqun1aHQhdCsadDuOY0KaCO91WGRisqK8uW6WsbL5Z3IFlgpXw40Cryb5k3toViW+6rzQUwY9hHazzucG6m2o6Z7LcIONB7S060N9YBF9IaivcCO+zzLz0zE9IoSByL8HeGVdEF7mAFaCLw1Jow36uo1stqoetdqtPU0dmVCbyjsx3U7UolrHDgmUyGyUv1dj7+dLnBnKlV0e7wmCuqfv020jTuq8va7y6pNv8VEvDyRlzhBNy6/DW7fmZ6eyqDC4g1IpK7MfPXm2evsZO+VgpRua+Luk2s681U2fHZCYdWiFyuk2/NWA6yZWMzrgWeVPzbEdKi5TewdAT5SA8FEItCAzEAGtbm8wp/FqImw1Xm4iPMrsx+aY+NOYfOwxfXgnQSvrZ5qur8WderX187lLYBSSWMnnR4qLsr+r2yyvN+ahw7hSHD2jV1+1Fi3wPxyT0DnXhyJUWVGcZNbp9hVTRC1eI6AaojdXK5H38fvs/aSryE3HYyqooPLJPaJlzFKa9nkqA9RANNA10n7usY4BgKvPXsR/WO4JJTUsyIUotUKOL/O1txknClq9xtOmpUVRED4WAg9/ee+uzz747zlEDZhiGtDEuXFsBbsBIpdANXEAMV7SDQXWgW4cjQh5qVJ5vS3qvr6ehzRnqAMZUt9pUL7F7u8+6UvLKXKWUXPZ341dubIzZMFsbzrVENyTiOEUOA0x+Emuxp54fwWr06HMcV6BFFzdOpI75cKD7X8fS4ctqtOfDcI0Q46v+tp90mM2/d5QtkmkNNYyXVkfaD4j/bmg2/wyuWT/QffY3g/89lm7ig+z1G3MHU4YL2xcKsl26zpuAaIp+4Hl1GG3IgbLUBhebZghW8Ki0EVx3ND9/G2u7nGu9lJn0qWbDh7WeIcavvHTYCcvKu3nHAPENU+6EQ4jkilcwEM6CwelKSIU7Hml9othhGCmBu/LCFvxjcbkkuOra/nytBiSNfpUab2tTytcAoyVwzFTXocPBtrX8krSFwakGh6IqCY7UsgjIiDTkS2mbS8v5GOSUuNjIZgH4d39IccLsjCE2Jf3F608hqcujrb6GUodFAD3CF6NchtnWIKqPbY+wA2F9b0lHpuVf7kW6rRVx+/bhGLvmW2oRxYxQhKQBC/k0BPIdodWlN+iOPXXTF6NkhooxI9ZmjjPL9UeybljuX7yRfeaBwTmfPYepqDO/bFpHKRyn45htRCzWOzwpb1paqQPR5H8cGsbBVEIwN6w0XEWOPw7W03i/bWkzPncsMYVkJBFTbFk+DzC9SUU+yLIM8Z9u379oYM808Xql/9Jly//Bxgec2+it7CkjmIWbjYL9PwuIReWFag8008HE7KZ09xkH/y7yvxnXSrhWI4yxV8bJD3eEEi7nVOgRZyvOyq/BsWg0gXn5ybjGbV3zmEPZF1I2tU+OBd2JnWSrEs0OC8YaFX+ZKTwSrv+vanyxgt+JFbvbWetZsvRxyV7UFBiH9KHczaxPokmVJAbZInWCJkg/zCEF88FXjUMLGir0SiuxKgLyRYJd5yCKJJXZwxgGOcReHcOt7pWAlLaA5gVFogTP7ewjIcyK0P8zSCZKNYO9P8qX5Oue0xbJB6yz8p61HhsSvP/rum8XdjfuSpGy9w3ORcU6lGVkodAEOyXPy0l6nICct06is+HCAb+dRNdZOTcreZgW1WL8XOelwM0XFnkao6eAtCCUoHkZplWk+tXzw73dMz1IeBZ8usyTyt1ED9/6IvmDOsOBS04pfaaQwlQ8aX3c7LgWwO4obCWjEzVgdMpYlMWKcpnmnuAYmlvf6QYzBO2LUgQOuNGk0UMNaYlcFCELLcyI8oxzDk9mqEL+yRmuF3r/Y28ack+K7moQa8tVE+HWHYndUR78NeOjVF6bixra+96DwoYMTxhMSQ23nxf5CIl3PdIQGOgnph+wrbbhq/HJ3FzFfHdzJn9fBEha+zJywS6/LFgx18cucrQQSKrw8RELENAzg1PFHtF/HKwVTgVU5sMxe9mKhV6bCIZhP/l9QGvPRSj24MUch60anbH/1EOAFko+DNkYauW27nNMw0tNsScuLSwmhQWU9OYrUwSioIMJuimuNkFok09JNnVrrtIQ/wXlesSefs55bx16F1rIrshRoIKlLnu9OOZPC3P9iv80rj0gP+eaOTrzyQWGE8AHddO260U7bCVJBcB0HR8AmhPpit/tR8U2a1Wk+RtXeubXMunFQL7kv1/0DcqdXi1utz18DRzu21HJNHIpYQuCRfhJJFz+e3RXDqWGtBexHIMmGY9ZZTO8JqhzfA4URmBWuRXrkKd62ix+NxyYu/d9fTZDR70ZjHXgydPGWS1jTSs4EEoK2zGWOqQAiKIKiZZt25kmZ2mGVcu84c4PKj0MJz/rWhYf4m2b7NI0hnltTXeFVQub0MP3Z7dbQOW3b8H9S3Kn6alY1zQkHVq5xdo9zb4HohwoeP+qCOeqLr/x0VMzPxrGTC4APSKjTwGMxriECxpGutZqYsXA1gqn353DZ45x/JarXhYvTCfqsYKp6PpyFlZOCYXD4QR33Cx1JsEVrPIN5bQtNC6mH9Fjz4hJ4D8ShbxyI2rXJjvGOgM0xQ4D0XYOp7ip2fisyaiyXIWq/X1mve77VOvND/5yh0ykWJ3DpylLn/6plj1ZRPMvrS8svKuev0neEi5EYty4bKQPXa4mVMxUixg2TbaH6/yauR+LZjKMvbXCA8ChPX/6gbD62bqGBb2K6fX2z2MDtJ87vmTvP24+A2U7ZQUTnBL/uVBcn9PnFCUID6M/RA60vXv3IWLz8IvYeSz98G7Uirj6/AS3x1Anl7C4/DQBKPrFZsuNYKvTjrPh/wXwI5QCdgiTilJylonoZGuC+mTFGcZU0xhdsMEl+vfC7fLb1Xjh3I6dhTwNWnMsi1t88BKYeS5vpoqgHvHRdpxPelWo1ok/k9BNdK4IEpKavJh1AV2XBoRRhPW9U/De2KrUSfMGgmNoaBdrQRzCoGRQIjl4C1OIhrGjbNTtGxZscLXox7GB9ec7RSp9wp0h30SYN2LW4I9MnCV21BKCVch7oy3IQbHzRXDqqd4/CEmmLfGXDCMwpJIS2/+wb3jSbSXFH4vheVKryNVMEZrhKEIaZjhOmOnOKz/T2/V2PR16Q7AUIAkRAJez04rCCeNiI+3e5fVVxI5XEWJTUAHfZ9LdC4xtuZH/43acu2WsVMp4D6ZZBbExhGC1SZ76rA6r+migOCLxD33mVfB5f+qKNoD5/Q++OkooWztzuGxr3BL9DF2jvAEGsZPY0+3+2gzoXfZEKzGZKHZ8qjrzL39y2SVPkswLIl7qCaCDKzx3F7bY0YkU6nkxQv3Ho0Hg4Iy0YaiFQvekHyEuCYNoiGTvJnrjObAPoYg4hUUcQ7pqT6hQhpOkhgC/OK4mumKD6bhzGHWJIxaFklnGN5LBCe6MAGjsvSJPLJPf1Es3Teia2OtksXFi0X4ofiYpBvPlixgmHtYjowl9ZHS4ab1wy5y0ziweRhbPDeXRtltaZlK4ylmgspk+J2j0luGhsQw0DBUgJsCbH0pTXjyopDapeKGJxoHrZMee3Fv3jUHcZFpfYNHhYsFmjQtaXqj0vtljGNqyC3TkfDazeoQZZmYgJWav+FeBr/a9dZ9hSkhdSbOFUMPb0zd0J1af3RQQZa2QtIK7RPbgkQuBGSLr3jqhYweQJSlQHHwEugKjaOL06YfXvh/5IbNLWr9GfDXt8qN4fHmPhNAXySTeDzTUmxJCMuYE3DFsZedLjVoDTlxUYeBOwY/Wq6OymGM+kqjoEwD43+BmAoDHjc+bfk/5JsIzQhAASiFiOBehrCJOQML9UAwRb7WjIBeEpFWAG5sBiA9AWEAD9BgEuhgL3EMKnMIZ0ON3nDgKDAUADMR9EB6lgFyQAmDcBJqwAkH4As90Hfint1xCBOx9ACzDwDcYICitBt6hBjDogA4COlwD+EIiJdNccGWnEqlQsJAMgPcu/kgQz0kJwdAtodxMkwgUciXMOArg6qaBVfXy5JikRKEypap5ilOgSI1JclRKVKBSlZKg7hLeNLS6bDRLcEODcsUb2ZP5QMdwJaZbPoA69UwkYmqdTeJZRG+mjCWqqQNh5LJyDQEoEVFxTnAVQM1lOtonfK9luRquQlzkixtz1NEoGAxO8yXxqeoPCpgVoFYhX+RHoaT8CwY=); }</style></defs><rect x="0" y="0" width="590.9901108827339" height="680.0882679231536" fill="#ffffff"/><g stroke-linecap="round"><g transform="translate(35 61.063667197532595) rotate(0 1.6936990537634244 304.16969434544444)"><path d="M0.6 -0.69 C1.36 100.96, 3.65 507.71, 3.93 609.02 M-0.54 1.57 C0.2 102.97, 2.57 506.35, 3.47 607.44" stroke="#1e1e1e" stroke-width="4" fill="none"/></g></g><mask/><g stroke-linecap="round"><g transform="translate(468.5863145470387 55.10179786086792) rotate(0 2.302925050137574 304.4250951903779)"><path d="M0.93 1.02 C1.21 102.34, 2.06 505.94, 2.3 607.21 M-0.04 0.52 C0.58 102.03, 4.42 507.31, 4.65 608.33" stroke="#1e1e1e" stroke-width="4" fill="none"/></g></g><mask/><g transform="translate(10 10.063667197532595) rotate(0 27.139976501464844 12.5)"><text x="0" y="17.619999999999997" font-family="Excalifont, Xiaolai, sans-serif, Segoe UI Emoji" font-size="20px" fill="#1e1e1e" text-anchor="start" style="white-space: pre;" direction="ltr" dominant-baseline="alphabetic">Client</text></g><a href="/wiki/dhcp-server/"><g transform="translate(397.5102677430854 10) rotate(0 91.73992156982422 12.5)"><text x="0" y="17.619999999999997" font-family="Excalifont, Xiaolai, sans-serif, Segoe UI Emoji" font-size="20px" fill="#1e1e1e" text-anchor="start" style="white-space: pre;" direction="ltr" dominant-baseline="alphabetic">📍[[wiki/DHCP-Server\|DHCP-Server]]</text></g></a><a href="/wiki/dhcpsolicit/"><g transform="translate(185.1109049594977 90.29690617451888) rotate(0 102.25992584228516 12.5)"><text x="0" y="17.619999999999997" font-family="Excalifont, Xiaolai, sans-serif, Segoe UI Emoji" font-size="20px" fill="#1e1e1e" text-anchor="start" style="white-space: pre;" direction="ltr" dominant-baseline="alphabetic">📍[[wiki/DHCPSOLICIT\|DHCPSOLICIT]]</text></g></a><g stroke-linecap="round"><g transform="translate(36.71321751562493 84.94235044200809) rotate(0 215.47860725879607 60.19085361677111)"><path d="M0.98 0.46 C72.83 20.74, 359.51 100.63, 430.92 120.72 M0.03 -0.34 C71.77 19.67, 358.16 99.01, 430.11 118.92" stroke="#1e1e1e" stroke-width="1" fill="none"/></g><g transform="translate(36.71321751562493 84.94235044200809) rotate(0 215.47860725879607 60.19085361677111)"><path d="M405.19 120.89 C413.04 120.57, 420.36 117.59, 430.11 118.92 M405.19 120.89 C414 120.59, 423.21 119.52, 430.11 118.92" stroke="#1e1e1e" stroke-width="1" fill="none"/></g><g transform="translate(36.71321751562493 84.94235044200809) rotate(0 215.47860725879607 60.19085361677111)"><path d="M409.75 104.41 C416.18 108.8, 422.21 110.48, 430.11 118.92 M409.75 104.41 C416.71 110.3, 424.2 115.42, 430.11 118.92" stroke="#1e1e1e" stroke-width="1" fill="none"/></g></g><mask/><g stroke-linecap="round"><g transform="translate(467.3724857161423 221.8659898876432) rotate(0 -214.64686510696566 41.32989030341014)"><path d="M0.26 0.62 C-71.49 14.34, -357.95 69.2, -429.56 82.75 M-1.06 -0.1 C-72.55 13.25, -356.48 67.21, -427.47 81.11" stroke="#1e1e1e" stroke-width="1" fill="none"/></g><g transform="translate(467.3724857161423 221.8659898876432) rotate(0 -214.64686510696566 41.32989030341014)"><path d="M-406.02 68.27 C-413.12 71.23, -420.83 76.41, -427.47 81.11 M-406.02 68.27 C-413.39 72.43, -418.7 76.93, -427.47 81.11" stroke="#1e1e1e" stroke-width="1" fill="none"/></g><g transform="translate(467.3724857161423 221.8659898876432) rotate(0 -214.64686510696566 41.32989030341014)"><path d="M-402.79 85.07 C-411.18 81.62, -420.13 80.39, -427.47 81.11 M-402.79 85.07 C-411.06 84.09, -417.36 83.44, -427.47 81.11" stroke="#1e1e1e" stroke-width="1" fill="none"/></g></g><mask/><a href="/wiki/dhcpadvertise/"><g transform="translate(175.16673002769176 224.92573602050652) rotate(0 118.1999282836914 12.5)"><text x="0" y="17.619999999999997" font-family="Excalifont, Xiaolai, sans-serif, Segoe UI Emoji" font-size="20px" fill="#1e1e1e" text-anchor="start" style="white-space: pre;" direction="ltr" dominant-baseline="alphabetic">📍[[wiki/DHCPADVERTISE\|DHCPADVERTISE]]</text></g></a><g stroke-linecap="round"><g transform="translate(36.71321751562493 325.13242187178145) rotate(0 215.27198186370512 52.59218620475793)"><path d="M-1.02 0.08 C70.71 17.61, 357.54 88.5, 429.21 106.11 M0.64 -0.92 C72.87 16.17, 359.76 86.26, 431.57 104.27" stroke="#1e1e1e" stroke-width="1" fill="none"/></g><g transform="translate(36.71321751562493 325.13242187178145) rotate(0 215.27198186370512 52.59218620475793)"><path d="M406.71 106.94 C411.81 105.48, 417.57 104.64, 431.57 104.27 M406.71 106.94 C413.83 106.28, 422.14 104.16, 431.57 104.27" stroke="#1e1e1e" stroke-width="1" fill="none"/></g><g transform="translate(36.71321751562493 325.13242187178145) rotate(0 215.27198186370512 52.59218620475793)"><path d="M410.81 90.34 C415.21 92.17, 420.15 94.66, 431.57 104.27 M410.81 90.34 C416.74 94.89, 423.77 97.96, 431.57 104.27" stroke="#1e1e1e" stroke-width="1" fill="none"/></g></g><mask/><a href="/wiki/dhcprequest/"><g transform="translate(207.29406442275717 336.60646987001905) rotate(0 108.4499282836914 12.5)"><text x="0" y="17.619999999999997" font-family="Excalifont, Xiaolai, sans-serif, Segoe UI Emoji" font-size="20px" fill="#1e1e1e" text-anchor="start" style="white-space: pre;" direction="ltr" dominant-baseline="alphabetic">📍[[wiki/DHCPREQUEST\|DHCPREQUEST]]</text></g></a><g stroke-linecap="round"><g transform="translate(467.3724857161423 452.8768229188266) rotate(0 -214.0913208740344 32.893728640917445)"><path d="M-0.86 0.15 C-72.16 11.16, -356.96 55.6, -428.47 66.61 M0.88 -0.82 C-70.46 9.81, -357.69 54.1, -429.07 64.92" stroke="#1e1e1e" stroke-width="1" fill="none"/></g><g transform="translate(467.3724857161423 452.8768229188266) rotate(0 -214.0913208740344 32.893728640917445)"><path d="M-407.14 52.91 C-412.17 56.78, -416.38 57.34, -429.07 64.92 M-407.14 52.91 C-414.2 56.51, -421.62 60.34, -429.07 64.92" stroke="#1e1e1e" stroke-width="1" fill="none"/></g><g transform="translate(467.3724857161423 452.8768229188266) rotate(0 -214.0913208740344 32.893728640917445)"><path d="M-404.55 69.82 C-410.29 69.56, -415.12 66, -429.07 64.92 M-404.55 69.82 C-412.46 67.74, -420.74 65.92, -429.07 64.92" stroke="#1e1e1e" stroke-width="1" fill="none"/></g></g><mask/><a><g transform="translate(211.11874708883613 447.5222671863157) rotate(0 89.6599349975586 12.5)"><text x="0" y="17.619999999999997" font-family="Excalifont, Xiaolai, sans-serif, Segoe UI Emoji" font-size="20px" fill="#1e1e1e" text-anchor="start" style="white-space: pre;" direction="ltr" dominant-baseline="alphabetic">📍[[wiki/DHCPREPLY\|DHCPREPLY]]</text></g></a></svg></div>
Die Verbindung funktioniert genau wie bei [[wiki/DORA-Prinzip\|DORA-Prinzip]].
Es hat nur andere Begriffe.

- [[wiki/DHCPSOLICIT\|DHCPSOLICIT]]
- [[wiki/DHCPADVERTISE\|DHCPADVERTISE]]
- [[wiki/DHCPREQUEST\|DHCPREQUEST]]
- [[wiki/DHCPREPLY\|DHCPREPLY]]
# I. [[wiki/DHCPv6\|DHCPv6]]-Modi

> [[wiki/DHCPv6\|DHCPv6]] kann auf verschiedene Arten arbeiten - je nachdem was dein [[wiki/Netzwerk\|Netzwerk]] braucht.
> 
> > Wie verschiedene Betriebsmodi an einer Maschine - jeder für einen anderen Zweck.

---

## Stateful [[wiki/DHCPv6\|DHCPv6]]

- **Vollständige Kontrolle**: Server vergibt [[wiki/IPv6\|IPv6]]-[[Adresse\|Adresse]]n komplett
- **Tracking**: Server merkt sich welche Adresse welchem Gerät gehört
- **Wie [[wiki/DHCPv4\|DHCPv4]]**: Ähnlich zum klassischen [[wiki/DHCPv4\|DHCPv4]]

## Stateless [[wiki/DHCPv6\|DHCPv6]]

- **Nur Zusatzinfos**: Gerät hat schon [[wiki/IPv6\|IPv6]]-Adresse durch [[wiki/SLAAC\|SLAAC]]
- **Konfiguration**: Server gibt nur [[wiki/DNS\|DNS]], [[wiki/Domain\|Domain]]s etc.
- **Weniger Arbeit**: Server muss keine Adressen verwalten

## [[wiki/SLAAC\|SLAAC]] (Stateless Address Autoconfiguration)

- **Automatisch**: Gerät erstellt sich selbst eine [[wiki/IPv6\|IPv6]]-[[Adresse\|Adresse]]
- **[[wiki/Router\|Router]] hilft**: Bekommt [[wiki/Netzwerk\|Netzwerk]]-Prefix vom [[wiki/Router\|Router]]
- **Eindeutig**: Nutzt [[wiki/MAC Adresse\|MAC Adresse]] für eindeutige Adresse

# II. [[wiki/DHCPv6\|DHCPv6]]-Nachrichten

> Ähnlich wie das [[wiki/DORA-Prinzip\|DORA-Prinzip]] bei [[wiki/DHCPv4\|DHCPv4]], aber mit anderen Namen.
> > Die Unterhaltung zwischen Client und Server läuft etwas anders ab.

---

## Stateful [[wiki/DHCPv6\|DHCPv6]]-Prozess:

1. **SOLICIT**: Client sucht [[wiki/DHCPv6\|DHCPv6]]-Server
2. **ADVERTISE**: Server antwortet "Ich bin da"
3. **REQUEST**: Client fragt nach Adresse
4. **REPLY**: Server gibt Adresse und Konfiguration

## Stateless [[wiki/DHCPv6\|DHCPv6]]-Prozess:

1. **INFORMATION-REQUEST**: Client will nur Zusatzinfos
2. **REPLY**: Server gibt [[wiki/DNS\|DNS]], [[wiki/Domain\|Domain]] etc.

> [!info] Info Bei [[wiki/IPv6\|IPv6]] können Geräte mehrere Adressen gleichzeitig haben - eine durch [[wiki/SLAAC\|SLAAC]], eine durch [[wiki/DHCPv6\|DHCPv6]].

# III. Konfigurationsmöglichkeiten

> Was [[wiki/DHCPv6\|DHCPv6]] alles verteilen kann außer Adressen.
> > Mehr als nur die Hausnummer - auch Postleitzahl, Telefon und Internet-Anbieter.

---

## Typische [[wiki/DHCPv6\|DHCPv6]]-Optionen:

| Option          | Beschreibung                         | Beispiel             |
| --------------- | ------------------------------------ | -------------------- |
| [[wiki/DNS\|DNS]] Server  | [[wiki/IPv6\|IPv6]]-Adressen der [[wiki/DNS\|DNS]]-Server | 2001:4860:4860::8888 |
| [[wiki/Domain\|Domain]] Name | [[wiki/Domain\|Domain]] für [[wiki/FQDN\|FQDN]]              | beispiel.com         |
| [[NTP\|NTP]] Server  | Zeit-Server für Synchronisation      | 2001:db8::ntp        |
| [[SIP\|SIP]] Server  | VoIP-Telefonie Server                | 2001:db8::sip        |

## [[wiki/IPv6\|IPv6]]-[[Adresse\|Adresse]]n-Arten:

- **Global Unicast**: Öffentliche [[wiki/IPv6\|IPv6]]-[[Adresse\|Adresse]]
- **Unique Local**: Private [[wiki/IPv6\|IPv6]]-[[Adresse\|Adresse]] (wie [[Private IP\|Private IP]])
- **Link-Local**: Nur im lokalen [[wiki/Netzwerk\|Netzwerk]]

# IV. Praxis-Beispiel

> So könnte eine [[wiki/DHCPv6\|DHCPv6]]-Konfiguration aussehen.
> 
> > Real-World Beispiel für ein kleines Büro-[[wiki/Netzwerk\|Netzwerk]].

---

## Scenario: Stateful [[wiki/DHCPv6\|DHCPv6]]

```
Prefix: 2001:db8:1234::/64
Range: 2001:db8:1234::100 - 2001:db8:1234::200
DNS: 2001:4860:4860::8888, 2001:4860:4860::8844
Domain: buero.local
Lease Time: 24 Stunden
```

## Client bekommt:

- **[[wiki/IPv6\|IPv6]]-Adresse**: 2001:db8:1234::150/64
- **[[wiki/DNS\|DNS]] Server**: 2001:4860:4860::8888
- **[[wiki/Domain\|Domain]]**: buero.local
- **[[wiki/Gateway\|Gateway]]**: 2001:db8:1234::1

> [!tip] Tipp In vielen [[wiki/Netzwerk\|Netzwerk]]en läuft [[wiki/DHCPv6\|DHCPv6]] parallel zu [[wiki/DHCPv4\|DHCPv4]] - ein Server für alte [[wiki/IPv4\|IPv4]]-Geräte, einer für neue [[wiki/IPv6\|IPv6]]-Geräte.

# V. Vorteile von [[wiki/DHCPv6\|DHCPv6]]

> Warum [[wiki/DHCPv6\|DHCPv6]] besser ist als manuelle Konfiguration.
> 
> > Automatisierung macht das Leben einfacher - besonders bei vielen Geräten.

---

## Hauptvorteile:

- **Zentrale Verwaltung**: Alle [[wiki/IPv6\|IPv6]]-Einstellungen an einem Ort
- **Flexibilität**: Stateful oder Stateless je nach Bedarf
- **Skalierbar**: Funktioniert von 2 bis 2000 Geräten
- **[[wiki/Multicast\|Multicast]]**: Effizienter als [[wiki/Broadcast\|Broadcast]] bei [[wiki/IPv4\|IPv4]]
- **Sicherheit**: Bessere Authentifizierung möglich

> [!important] Wichtig [[wiki/DHCPv6\|DHCPv6]] und [[wiki/DHCPv4\|DHCPv4]] sind separate Services - du brauchst beide für ein Dual-Stack [[wiki/Netzwerk\|Netzwerk]]!