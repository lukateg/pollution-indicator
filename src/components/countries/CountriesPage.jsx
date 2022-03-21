import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import Country from "./Country";
import SuccesAlert from "../alerts/SuccesAlert";
import InfoAlert from "../alerts/InfoAlert";
import CountriesHeroContainer from "./CountriesHeroContainer";

const CountriesPage = () => {
  const [inputValue, setInputValue] = useState("");
  const [successAlert, setSuccessAlert] = useState(false);
  const [infoAlert, setInfoAlert] = useState(false);
  const [addRemove, setAddRemove] = useState(true);
  const [countries, setCountries] = useState(
    JSON.parse(localStorage.getItem("countries")) || []
  );

  useEffect(() => {
    setTimeout(() => {
      setInfoAlert(false);
      setSuccessAlert(false);
    }, 2000);
  }, [successAlert, infoAlert]);

  const handleSubmit = () => {
    const items = JSON.parse(localStorage.getItem("countries")) || [];
    const item = items.find((item) => item === inputValue);
    window.scrollTo(0, 600);

    if (!item) {
      items.push(inputValue);
      localStorage.setItem("countries", JSON.stringify([...items]));
      setCountries(items);
      setAddRemove(true);
      setSuccessAlert(true);
    }
    if (item) {
      setInfoAlert(true);
    }
  };

  const removeCountry = (country) => {
    const items = JSON.parse(localStorage.getItem("countries")) || [];
    const item = items.find((item) => item === country);

    if (item) {
      const filteredItems = items.filter((item) => item !== country);
      localStorage.setItem("countries", JSON.stringify(filteredItems));
      setCountries(filteredItems);
      setAddRemove(false);
      setSuccessAlert(true);
    } else return;
  };

  return (
    <div>
      {successAlert && <SuccesAlert addRemove={addRemove} />}
      {infoAlert && <InfoAlert />}
      <div className="hero">
        <CountriesHeroContainer
          setInputValue={setInputValue}
          handleSubmit={handleSubmit}
        />
      </div>
      <Grid container spacing={2}>
        {countries.map((country, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Country
              name={country}
              removeCountry={removeCountry}
              button={true}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default CountriesPage;
