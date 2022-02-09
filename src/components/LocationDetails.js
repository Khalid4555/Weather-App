import React from "react";
import PropTypes from "prop-types";
import "../styles/LocationDetails.css";
import sunImage from "../images/—Pngtree—sun png clipart colored_5656301.png";

function LocationDetails({ city, country }) {
  return (
    <div className="location-details-container">
      <img src={sunImage} alt="sun image"></img>
      <h1 className="location-details-heading1">WEATHER APP </h1>
      <h1 className="location-details-heading2">
        {city}, {country}
      </h1>
    </div>
  );
}

LocationDetails.propTypes = {
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
};

export default LocationDetails;
