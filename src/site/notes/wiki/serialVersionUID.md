---
{"dg-publish":true,"permalink":"/wiki/serial-version-uid/","tags":["informatik/software"],"noteIcon":"","updated":"2026-07-19T03:56:27.000+02:00","dg-note-properties":{"aliases":["serial version uid","serialversionuid"],"created":"2026-05-19 19:00","links":null,"path":"Notes","tags":["informatik/software"]}}
---

>[[wiki/serialVersionUID\|serialVersionUID]] ist eine `long`-Konstante in `Serializable`-Klassen.
>>Identifiziert die Version der Klasse beim Serialisieren / Deserialisieren.

# I. Beispiel
___
```java
public class HelloServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;
    // ...
}
```

# II. Warum?
___
Wenn die Java-Version sich ändert oder Felder hinzukommen, kann beim Deserialisieren `InvalidClassException` auftreten. Mit einer expliziten `serialVersionUID` sagst du: "diese Version ist kompatibel".

# III. Wann brauche ich es?
___
Jede Klasse, die `Serializable` implementiert. In [[wiki/Jakarta EE\|Jakarta EE]]: alle [[wiki/HttpServlet\|HttpServlet]]-Subklassen.

>[!tip]
>Eclipse warnt mit "missing serialVersionUID" — einfach `1L` reichen.
