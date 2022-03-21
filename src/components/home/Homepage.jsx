import React, { useState, useEffect } from "react";
import { Routes, Route, useParams } from "react-router-dom";
import HeroContainer from "./HomeHero";
import RankingContainer from "../countries/RankingContainer";
import NewsContainer from "../news/NewsContainer";
import Search from "../cities/SearchCityResults";
import { Grid } from "@mui/material";
import SuccesAlert from "../alerts/SuccesAlert";

const Homepage = () => {
  const [inputValue, setInputValue] = useState("");
  const [successAlert, setSuccessAlert] = useState(false);
  const route = "/search/";
  const ref = useParams();
  const addRemove = true;

  useEffect(() => {
    const word = Object.values(ref)[0];
    if (word.includes("search")) {
      window.scrollTo(0, 700);
    }
  }, [ref]);

  useEffect(() => {
    setTimeout(() => {
      setSuccessAlert(false);
    }, 2000);
  }, [successAlert]);

  return (
    <>
      {successAlert && <SuccesAlert addRemove={addRemove} />}
      <div className="hero">
        <HeroContainer
          route={route}
          inputValue={inputValue}
          setInputValue={setInputValue}
        />
      </div>
      <Grid className="information-section" container spacing={4}>
        <Grid item xs={12} sm={6} md={3.5}>
          <RankingContainer />
        </Grid>
        <Grid item xs={12} sm={6} md={8}>
          <Routes>
            <Route exact path="/" element={<NewsContainer />}></Route>
            <Route
              exact
              path="/search/:cityName"
              element={<Search setSuccessAlert={setSuccessAlert} />}
            ></Route>
          </Routes>
        </Grid>
      </Grid>
    </>
  );
};

export default Homepage;
