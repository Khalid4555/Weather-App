import React from "react";
import PropTypes from "prop-types";
import "../styles/App.css";
import LocationDetails from "./LocationDetails";
import data from "../data/forecast.json";
import ForecastSummary from "./ForecastSummary";
import ForecastSummaries from "./ForecastSummaries";

const App = ({ location, forecasts }) => (
  <div className="weather-app">
    <LocationDetails city={location.city} country={location.country} />
    <ForecastSummaries forecasts={forecasts} />
  </div>
);

App.propTypes = {
  forecasts: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.number,
      description: PropTypes.string,
      icon: PropTypes.string,
      temperature: PropTypes.shape({
        max: PropTypes.number,
        min: PropTypes.number,
      }),
    })
  ).isRequired,
  location: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
  }).isRequired,
};

export default App;