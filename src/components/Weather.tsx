import React, { useState, useEffect } from "react";
import { Icon } from "react-icons/fa";

const Weather = () => {
  const [weather, setWeather] = useState({
    condition: "clear-day",
    temperature: 25,
  });

  // Get the weather for Padova from OpenWeatherMap
  const fetchWeather = async () => {
    const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=Padova&units=metric&appid=YOUR_API_KEY");
    const data = await response.json();

    setWeather(data);
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  // Return the weather icon
  const weatherIcon = () => {
    switch (weather.condition) {
      case "clear-day":
        return <Icon name="sun" />;
      case "clouds":
        return <Icon name="cloud" />;
      case "rain":
        return <Icon name="cloud-rain" />;
      default:
        return <Icon name="thermometer" />;
    }
  };

  // Return the temperature in Fahrenheit if the cursor is over it
  const temperatureInFahrenheit = () => {
    return weather.temperature * 9 / 5 + 32;
  };

  return (
    <div>
      <p>
        Temperature: {
          !event.target.contains(event.relatedTarget) ? weather.temperature : temperatureInFahrenheit()
        }°C
      </p>
      <p>
        Conditions: {weather.condition}
      </p>
      <p>
        {weatherIcon()}
      </p>
    </div>
  );
};

export default Weather;
