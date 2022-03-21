import React from "react";
import { Typography, TextField, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";

const HeroContainer = ({ setInputValue, inputValue, route }) => {
  const navigate = useNavigate();

  return (
    <div className="hero-container">
      <div className="home-image"></div>
      <div className="search-city-container">
        <Typography
          className="hero-text"
          variant="h3"
          align="left"
          marginRight={7}
        >
          Explore the <span className="blue-text"> air quality</span>
          <br />
          anywhere in the world
          <LanguageIcon className="world-icon" fontSize="small" />
        </Typography>
        <Typography variant="h6" className="hero-subtitle">
          Air pollution forecast, pollution alerts and much
          <br /> more to help you plan your days and keep
          <br /> protected against
          <span className="underline-text"> air pollution!</span>
        </Typography>
        <span className="input-span">
          <TextField
            id="outlined-basic"
            label="Enter a city"
            variant="outlined"
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
            onKeyPress={(e) =>
              e.charCode === 13 && navigate(`${route}${inputValue}`)
            }
            required
          />
          <Link to={`${route}${inputValue}`}>
            <Button
              type="button"
              variant="outlined"
              onClick={() => window.scrollTo(0, 700)}
              className="search-city-button"
            >
              SEARCH <SearchIcon fontSize="small" />
            </Button>
          </Link>
        </span>
      </div>
    </div>
  );
};

export default HeroContainer;
