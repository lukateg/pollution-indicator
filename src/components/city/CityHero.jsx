import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Typography, TextField, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const CityHero = ({ setInputValue, route, inputValue, city }) => {
  const navigate = useNavigate();

  return (
    <div className="hero-container">
      <section className="city-title-container">
        <div>
          <Typography variant="h3" className="bold-text">
            Air Quality in {city}
          </Typography>
          <Typography variant="h5" className="blue-text">
            Air quality index (AQI) and PM2.5 air pollution in {city}
          </Typography>
          <span className="input-span cities-input">
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
                className="search-city-button"
              >
                SEARCH <SearchIcon fontSize="small" />
              </Button>
            </Link>
          </span>
        </div>
        <div className="city-image"></div>
      </section>
    </div>
  );
};

export default CityHero;
