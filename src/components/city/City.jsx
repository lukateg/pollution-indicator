import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Grid } from "@mui/material";
import CityAqiBanner from "./CityAqiBanner";
import CityTable from "./CityTable";
import CityRecomendations from "./CityRecomendations";
import CityDominantPolutants from "./CityDominantPolutants";
import CitySources from "./CitySources";
import CityHero from "./CityHero";
import Loader from "../alerts/Loader";
import ErrorAlert from "../alerts/ErrorAlert";

import { useGetAirVisualInformationsQuery } from "../../services/airVisualsInformationAPI";

const City = () => {
  const { cityId } = useParams();
  const response = useGetAirVisualInformationsQuery(cityId);
  const route = "/search/";
  const [inputValue, setInputValue] = useState("");

  if (response.isFetching) return <Loader />;
  if (response.isError) return <ErrorAlert />;

  const { city, currentMeasurement, currentWeather, recommendations, sources } =
    response?.currentData?.data;

  if (response.isSuccess)
    return (
      <section>
        <CityHero
          route={route}
          inputValue={inputValue}
          setInputValue={setInputValue}
          link={true}
          city={city}
        />
        <Grid container>
          <Grid item xs={12} sm={6} md={8}>
            <CityAqiBanner aqi={currentMeasurement.aqius} />
            <CityTable
              aqius={currentMeasurement.aqius}
              mainus={currentMeasurement.mainus}
            />
            <CityRecomendations recommendations={recommendations} />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <CityDominantPolutants currentWeather={currentWeather} />
            <CitySources sources={sources} />
          </Grid>
        </Grid>
      </section>
    );
};

export default City;
