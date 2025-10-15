import React, { useState } from "react";
import "./App.css";
import WeatherCard from "./WeatherCard";
import { useTheme } from "./ThemeContext";
import { API_KEY } from "./config";

const App = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const { theme, toggleTheme } = useTheme();

  const fetchWeather = async () => {
    if (!city) return setError("Enter a city name");
    try {
      setError("");
      const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&units=metric&appid=${API_KEY}`);
      if (!res.ok) throw new Error("City not found");
      const data = await res.json();
      setWeather(data);
    } catch (err) {
      setWeather(null);
      setError(err.message);
    }
  };

  return (
    <div className={`app ${theme}`}>
      <div className="header">
        <h1>Weather App</h1>
        <button onClick={toggleTheme} className="theme-btn">
          {theme === "light" ? "🌙 Dark" : "☀️ Light"}
        </button>
      </div>

      <div className="search-box">
        <input
          type="text"
          placeholder="Enter city name..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={fetchWeather}>Search</button>
      </div>

      {error && <p className="error">{error}</p>}
      <WeatherCard weather={weather} />
    </div>
  );
};

export default App;
