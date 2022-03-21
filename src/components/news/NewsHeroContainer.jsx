import React from "react";
import { Typography, TextField, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";

const NewsHeroContainer = ({ setInputValue, handleSubmit }) => {
  return (
    <div className="hero-container">
      <div className="search-city-container">
        <Typography
          className="hero-text"
          variant="h3"
          align="left"
          marginRight={7}
        >
          Search
          <span className="blue-text"> latest news</span> from
          <br />
          anywhere in the world
          <LanguageIcon className="world-icon" fontSize="small" />
        </Typography>
        <Typography variant="h6" className="hero-subtitle">
          Find the latest breaking news and information on <br /> pollution,
          weather, business, politics, <br /> and more. Type a keyword and
          inform yourself about <br /> the news from
          <span className="underline-text"> all around the globe!</span>
        </Typography>
        <span className="input-span">
          <TextField
            id="outlined-basic"
            label="Enter a word"
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
      <div className="news-hero-input">
        <div className="news-image"></div>
      </div>
    </div>
  );
};

export default NewsHeroContainer;
