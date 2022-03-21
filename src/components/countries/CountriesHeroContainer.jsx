import React from "react";
import { Typography, TextField, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";

const CountriesHeroContainer = ({ setInputValue, handleSubmit }) => {
  return (
    <div className="hero-container">
      <div className="countries-container">
        <div className="search-country-container">
          <Typography className="hero-text" variant="h3" marginRight={7}>
            Search and save
            <br />
            <span className="blue-text"> countries</span> from
            <br />
            <span> anywhere in the world</span>
            <LanguageIcon className="world-icon" fontSize="small" />
          </Typography>
          <div className="countries-image"></div>
        </div>
        <div className="hero-subtitle-container">
          <Typography variant="h6" className="hero-subtitle">
            Within a few simple steps, you can save your
            <br /> favorite countries in a country card for
            <br /> quick checking the current most polluted
            <br />
            <span className="underline-text"> cities ranking!</span>
          </Typography>
          <span className="input-span">
            <TextField
              id="outlined-basic"
              label="Enter a country"
              variant="outlined"
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.charCode === 13 && handleSubmit()}
              required
            />
            <Button
              type="button"
              variant="outlined"
              onClick={handleSubmit}
              className="search-city-button"
            >
              SEARCH <SearchIcon fontSize="small" />
            </Button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default CountriesHeroContainer;
