import React, { useState } from "react";
import { Typography } from "@mui/material";
import { useGetNewsQuery } from "../../services/newsSearchAPI";
import NewsCards from "./NewsCards";
import NewsHeroContainer from "./NewsHeroContainer";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import ManageSearchOutlinedIcon from "@mui/icons-material/ManageSearchOutlined";

const NewsPage = () => {
  const [inputValue, setInputValue] = useState("");
  const [searchedWord, setSearchedWord] = useState("pollution");
  const response = useGetNewsQuery(searchedWord);

  const getNews = () => {
    setSearchedWord(inputValue);
    window.scrollTo(0, 600);
  };

  return (
    <>
      <div className="hero">
        <NewsHeroContainer
          setInputValue={setInputValue}
          handleSubmit={getNews}
        />
      </div>
      <div>
        <div className="bordered-title">
          <span>
            <Typography className="title-text-2">
              <ManageSearchOutlinedIcon className="grey-icon" />
              Searched word
              <ArrowForwardIosOutlinedIcon
                fontSize="small"
                className="grey-icon"
              />
            </Typography>
            <Typography variant="h6" className="searched-word title-text-2">
              {searchedWord}
            </Typography>
          </span>
        </div>
        <NewsCards news={response} />
      </div>
    </>
  );
};

export default NewsPage;
