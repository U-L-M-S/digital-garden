---
{"dg-publish":true,"permalink":"/02-resources/notes/api/","tags":["tools","code"],"noteIcon":"","updated":"2025-07-12T13:31:41.000+02:00"}
---

>Application Programming Interfaces
>>sind Schnittstellen, die es ermöglichen, dass verschiedene Softwareanwendungen miteinander kommunizieren. Sie definieren, wie Anfragen zwischen Programmen gestellt und Daten ausgetauscht werden. Eine API legt fest, welche Daten und Funktionen verfügbar sind und wie man darauf zugreift, ohne den internen Code der Anwendung zu kennen.

```python
import requests

# Your API key and the city you want the weather for
api_key = "your_api_key"
city = "Berlin"

# URL for the API request
url = f"http://api.openweathermap.org/data/2.5/weather?q={city}&appid={api_key}"

# Sending a GET request to the API
response = requests.get(url)

# If the request is successful, print the weather data
if response.status_code == 200:
    data = response.json()
    weather_description = data['weather'][0]['description']
    temperature = data['main']['temp'] - 273.15  # Convert from Kelvin to Celsius
    print(f"The weather in {city} is {weather_description} with a temperature of {temperature:.2f}°C.")
else:
    print("Error fetching the weather data.")
```