import React, { useState, useEffect } from "react";
import { Route, Routes, useParams } from "react-router-dom";
import { Typography, Grid } from "@mui/material";
import CityCard from "./SavedCityCard";
import SearchCityResults from "./SearchCityResults";
import CitiesHeroContainer from "./CitiesHero";
import SuccesAlert from "../alerts/SuccesAlert";
import FolderSpecialOutlinedIcon from "@mui/icons-material/FolderSpecialOutlined";

const CitiesPage = () => {
  const route = "/cities/";
  const [successAlert, setSuccessAlert] = useState(false);
  const [addRemove, setAddRemove] = useState(false);
  const [cities, setCities] = useState(
    JSON.parse(localStorage.getItem("cities")) || []
  );
  const [inputValue, setInputValue] = useState("");
  const ref = useParams();

  useEffect(() => {
    const word = Object.values(ref)[0];
    if (word) {
      window.scrollTo(0, 600);
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
        <CitiesHeroContainer
          inputValue={inputValue}
          setInputValue={setInputValue}
          route={route}
        />
      </div>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={3.9} className="cities-results-container">
          <Routes>
            <Route
              path=":cityName"
              element={
                <SearchCityResults
                  setCities={setCities}
                  setSuccessAlert={setSuccessAlert}
                  setAddRemove={setAddRemove}
                />
              }
            />
            <Route path="/" element={<SearchCityResults />} />
          </Routes>
        </Grid>
        <Grid item xs={12} sm={6} md={7.8} className="cities-results-container">
          <div className="searched-cities">
            <div className="bordered-title">
              <Typography variant="h4" className="saved-cities-title">
                <FolderSpecialOutlinedIcon
                  fontSize="medium"
                  className="orange-icon"
                />
                Saved cities
              </Typography>
            </div>
            <Grid container>
              {cities.map((city, index) => (
                <Grid item key={index} xs={12} sm={12} md={6} lg={4}>
                  <CityCard
                    cityId={city}
                    key={index}
                    setCities={setCities}
                    setAddRemove={setAddRemove}
                    setSuccessAlert={setSuccessAlert}
                  />
                </Grid>
              ))}
            </Grid>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default CitiesPage;
