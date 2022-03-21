import React from "react";
import { Link } from "react-router-dom";
import { ListItem, Typography, Button } from "@mui/material";
import { aqiBackground } from "../../utils";

const SearchedCity = ({
  id,
  city,
  country,
  currentMeasurement,
  savedCities,
  addCities,
}) => {
  return (
    <ListItem divider elevation={5} key={id} className="city-result-item">
      <Link to={`/search/${city}/city/${id}`}>
        <Typography
          className="searched-item"
          variant="h6"
        >{`${city}, ${country}`}</Typography>
      </Link>
      <div className="save-city-div">
        <span
          className="aqi-span"
          style={{
            backgroundColor: aqiBackground(currentMeasurement?.aqius),
          }}
        >
          {currentMeasurement.aqius}
        </span>
        <Button disabled={savedCities(id)} onClick={() => addCities(id)}>
          {savedCities(id) ? "☆" : "★"}
        </Button>
      </div>
    </ListItem>
  );
};

export default SearchedCity;
