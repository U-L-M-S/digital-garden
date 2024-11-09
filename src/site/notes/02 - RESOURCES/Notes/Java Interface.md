---
{"dg-publish":true,"permalink":"/02-resources/notes/java-interface/","tags":["code/java","code/OOP/vererbung","empty"],"noteIcon":"","updated":"2024-11-08T16:28:58.000+01:00"}
---

>Du hast mit Sicherheit bereits gelernt wie [[02 - RESOURCES/Notes/Java Vererbung\|Java Vererbung]] funktioniert und wie man dieser verwendet.
>Leider kann bei [[02 - RESOURCES/Notes/Java Vererbung\|Java Vererbung]] ein Child Klasse nur von ein Parent Klasse vererben.
>Dafür ist [[02 - RESOURCES/Notes/Java Interface\|Java Interface]] da um das zu ermöglichen.

# Syntax

```java
public interface InterfaceName1{}
public interface InterfaceName2{}

class Child implements InterfaceName1, InterfaceName2 {

}
```


# Bsp
```java
public interface Prey{
	void flee()
}
public interface Pretator{
	void hunt()
}

public class Rabbit implements Prey{
	@override
	public void flee(){
		System.out.println("Der Hase flieht!");
	}
}

public class Wolf
```