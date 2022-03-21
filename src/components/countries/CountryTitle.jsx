import React from "react";
import { Typography } from "@mui/material";

const CountryTitle = ({ name }) => {
  return (
    <div className="country-title">
      <Typography
        variant="h6"
        component="div"
        align="left"
        className="country-card-title"
      >
        Live ranking
      </Typography>
      <Typography variant="h6" className="country-name">
        {name.toLocaleUpperCase()}
      </Typography>
    </div>
  );
};

export default CountryTitle;
