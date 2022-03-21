import React from "react";
import { TextField, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const RankingSearch = ({ searchCountry, setValue }) => {
  return (
    <div className="search-country-input">
      <TextField
        id="outlined-basic"
        label="Enter a country"
        variant="outlined"
        className="country-input"
        onChange={(e) => setValue(e.target.value)}
        onKeyPress={(e) => e.charCode === 13 && searchCountry()}
        required
      />
      <Button
        type="button"
        variant="outlined"
        onClick={searchCountry}
        className="search-country-button"
      >
        <SearchIcon fontSize="small" />
      </Button>
    </div>
  );
};

export default RankingSearch;
