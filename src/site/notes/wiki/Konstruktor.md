---
{"dg-publish":true,"permalink":"/wiki/konstruktor/","tags":["informatik/code"],"noteIcon":"","updated":"2026-07-19T03:56:26.761+02:00","dg-note-properties":{"aliases":["Constructor","constructor"],"created_date":"2024-09-25","links":null,"tags":["informatik/code"]}}
---

>Es ist eine spezielle [[wiki/Programmierung Methode\|Programmierung Methode]] in einer [[wiki/Klasse\|Klasse]], wo bestimmte Eigenschaften **immer** zugewiesen werden.
>>Ein Konstruktor hat die Eigenschaft, denselben Namen wie die [[wiki/Klasse\|Klasse]] zu haben. 
>>([[wiki/Python\|Python]] ist eine Ausnahme.)

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