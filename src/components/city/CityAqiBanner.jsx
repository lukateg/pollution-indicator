import React from "react";
import { Typography } from "@mui/material";
import { aqiBackground } from "../../utils";
import { healthCheck } from "../../utils";

const CityAqiBanner = ({ aqi }) => {
  return (
    <div className="aqi-container" style={{ background: aqiBackground(aqi) }}>
      <span className="city-aqi">
        <Typography variant="subtitle2" className="white-text">
          AQI US
        </Typography>
        <Typography variant="h2" className="white-text bold-text">
          {aqi}
        </Typography>
      </span>
      <div>
        <Typography
          variant="h4"
          className="white-text aqi-banner-text"
          style={{ align: "right" }}
        >
          Live AQI index
        </Typography>
        <Typography variant="h2" className="white-text aqi-banner-text">
          {healthCheck(aqi)}
        </Typography>
      </div>
    </div>
  );
};

export default CityAqiBanner;
