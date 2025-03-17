---
{"dg-publish":true,"permalink":"/02-resources/notes/konstruktor/","tags":["code"]}
---

>Es ist eine spezielle [[02 - RESOURCES/Notes/Methode\|Methode]] in einer [[02 - RESOURCES/Notes/Klasse\|Klasse]], wo bestimmte Eigenschaften **immer** zugewiesen werden.
>>Ein Konstruktor hat die Eigenschaft, denselben Namen wie die [[02 - RESOURCES/Notes/Klasse\|Klasse]] zu haben. 
>>([[02 - RESOURCES/Notes/Python\|Python]] ist eine Ausnahme.)

```python
class Car:
    def __init__(self, brand, model, year):
        self.brand = brand
        self.model = model
        self.year = year

    def display_info(self):
        print(f"{self.year} {self.brand} {self.model}")

# Creating an object of the class Car
my_car = Car("Tesla", "Model S", 2022)
my_car.display_info()

```

```java
public class Car {
    String brand;
    String model;
    int year;

    // Constructor
    public Car(String brand, String model, int year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    public void displayInfo() {
        System.out.println(year + " " + brand + " " + model);
    }

    public static void main(String[] args) {
        Car myCar = new Car("Tesla", "Model S", 2022);
        myCar.displayInfo();
    }
}
```