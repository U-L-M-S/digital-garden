---
tags:
  - java
  - algorithmus
dg-publish: true
links: 
path: Notes
created: 2024-06-21 16:26
---

```Java
class Collatz {
    public static void main(String[] args) {
	    int user_input = 3;
	    int counter = 0;
	    while(counter < 15){
			if(user_input % 2 == 1){
				user_input = user_input * 3 + 1;  
			}
			else{
				user_input = user_input / 2;
			}
			System.out.println("Wert: " + user_input);
			counter++;
	    }
    }
}
```