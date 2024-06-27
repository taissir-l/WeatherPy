import requests

def get_weather_data(city):
    api_key = 'YOUR_API_KEY'
    url = f'http://api.openweathermap.org/data/2.5/weather?q={city}&appid={api_key}'
    response = requests.get(url)
    return response.json()

from sklearn.cluster import KMeans
import pandas as pd

def personalize_forecast(user_data):
    model = KMeans(n_clusters=3)
    model.fit(user_data)
    return model.predict(user_data)