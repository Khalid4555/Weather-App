import React from "react";
import PropTypes from "prop-types";
import "../styles/App.css";
import LocationDetails from "./LocationDetails";
import data from "../data/forecast.json";
import ForecastSummary from "./ForecastSummary";
import ForecastSummaries from "./ForecastSummaries";
import ForecastDetails from "./ForecastDetails";
import { useState } from "react";
import { useEffect } from "react";
import getForecast from "../requests/getForecasts";
import axios from "axios";

const App = () => {
  const [forecasts, setForecasts] = useState([]);
  const [location, setLocation] = useState({ city: "", country: "" });
  const [selectedDate, setSelectedDate] = useState(0);

  useEffect(() => {
    getForecast(setSelectedDate, setForecasts, setLocation);
  }, []);

  const selectedForecast = forecasts.find(
    (forecast) => forecast.date === selectedDate
  );

  const handleForecastSelect = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="weather-app">
      <LocationDetails city={location.city} country={location.country} />
      <ForecastSummaries
        forecasts={forecasts}
        onForecastSelect={handleForecastSelect}
      />
      {selectedForecast && <ForecastDetails forecasts={selectedForecast} />}
    </div>
  );
};

export default App;
