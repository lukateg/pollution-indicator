import React from "react";
import { Typography } from "@mui/material";
import ManageSearchOutlinedIcon from "@mui/icons-material/ManageSearchOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";

const SearchedCityTitle = ({ searchedCity }) => {
  return (
    <div className="bordered-title">
      <span>
        <Typography className="title1" variant="h4">
          <ManageSearchOutlinedIcon className="grey-icon" />
          Searched city
          <ArrowForwardIosOutlinedIcon fontSize="small" className="grey-icon" />
        </Typography>
        <Typography variant="h6" className="searched-word title-text-2">
          {searchedCity}
        </Typography>
      </span>
    </div>
  );
};

export default SearchedCityTitle;
