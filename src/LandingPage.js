import React from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      <div className="background-animation">
        <div className="cloud cloud1"></div>
        <div className="cloud cloud2"></div>
        <div className="sun"></div>
      </div>

      <div className="hero-card">
        <h1>3D Weather App</h1>
        <p>Experience live weather like never before</p>
        <button onClick={() => navigate("/app")}>Enter App</button>
      </div>
    </div>
  );
};

export default LandingPage;
