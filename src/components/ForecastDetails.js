import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

const ForecastDetails = ({ forecasts }) => {
  const { date, temperature, humidity, wind } = forecasts;
  return (
    <div>
      <b>{moment(date).format("ddd Do MMM")}</b>
      <h6>Max Tempreture: {temperature.max}</h6>
      <h6>Min Tempreture:{temperature.min}</h6>
      <h6>Humidity: {humidity}</h6>
      <h6>
        Wind Speend:{wind.speed},{wind.direction}
      </h6>
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
