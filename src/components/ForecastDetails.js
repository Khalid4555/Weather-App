import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import "../styles/ForecastDetails.css";

const ForecastDetails = ({ forecasts }) => {
  const { date, temperature, humidity, wind } = forecasts;
  return (
    <div className="forecast-details-container">
      <h2>
        <b>{moment(date).format("ddd Do MMM")}</b>
      </h2>
      <p>Max Tempreture: {temperature.max}</p>
      <p>Min Tempreture:{temperature.min}</p>
      <p>Humidity: {humidity}</p>
      <p>
        Wind Speed:{wind.speed},{wind.direction}
      </p>
    </div>
  );
};

export default ForecastDetails;

ForecastDetails.propTypes = {
  forecasts: PropTypes.shape({
    date: PropTypes.number,
    humidity: PropTypes.number,
    temperature: PropTypes.shape({
      max: PropTypes.number,
      min: PropTypes.number,
    }),
    wind: PropTypes.shape({
      speed: PropTypes.number,
      direction: PropTypes.string,
    }),
  }),
};
