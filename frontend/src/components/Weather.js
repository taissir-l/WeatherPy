import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState('London');

  useEffect(() => {
    axios.get(`/api/weather?city=${city}`)
      .then(response => setWeather(response.data))
      .catch(error => console.error('Error fetching weather data:', error));
  }, [city]);

  return (
    <div>
      <h1>Weather for {city}</h1>
      {weather && (
        <div>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Weather: {weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default Weather;