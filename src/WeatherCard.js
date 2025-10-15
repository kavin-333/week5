import React from "react";
import "./App.css";

const WeatherCard = ({ weather }) => {
  if (!weather) return null;

  const { name, main, weather: details } = weather;
  const iconUrl = `https://openweathermap.org/img/wn/${details[0].icon}@4x.png`;

  return (
    <div className="weather-card">
      <img src={iconUrl} alt={details[0].description} className="weather-icon" />
      <h2>{name}</h2>
      <h3>{details[0].main} — {details[0].description}</h3>
      <p className="temp">{Math.round(main.temp)}°C</p>
      <p>Humidity: {main.humidity}%</p>
    </div>
  );
};

export default WeatherCard;
