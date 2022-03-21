import React from "react";
import { Typography, TextField, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const CitiesHeroContainer = ({ setInputValue, inputValue, route }) => {
  const navigate = useNavigate();

  return (
    <div className="hero-container">
      <div className="cities-hero-desc">
        <div className="cities-image"></div>
        <Typography variant="h6" className="hero-subtitle">
          By saving your favorite cities you are just a few clicks
          <br /> away from finding pollution levels, other factors,
          <br /> and how to
          <span className="underline-text"> protect yourself</span> from
          pollution!
        </Typography>
      </div>
      <div className="search-city-container">
        <Typography className="hero-text" variant="h3">
          Save your favourite
          <br /> <span className="blue-text"> cities</span> for quick search
          <br /> at any time
          <AccessTimeIcon className="world-icon" fontSize="small" />
        </Typography>
        <div className="cities-input">
          <TextField
            id="outlined-basic"
            label="Enter a city"
            variant="outlined"
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) =>
              e.charCode === 13 && navigate(`${route}${inputValue}`)
            }
            required
          />
          <Link to={`${route}${inputValue}`}>
            <Button
              type="button"
              variant="outlined"
              className="search-city-button"
            >
              SEARCH <SearchIcon fontSize="small" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CitiesHeroContainer;
