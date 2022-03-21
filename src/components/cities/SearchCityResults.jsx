import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGetAirVisualsQuery } from "../../services/airVisualsAPI";
import SearchedCity from "./SearchedCity";
import SearchedCityTitle from "./SearchedCityTitle";
import Loader from "../alerts/Loader";
import ErrorAlert from "../alerts/ErrorAlert";

const SearchCityResults = ({ setCities, setSuccessAlert, setAddRemove }) => {
  const { cityName } = useParams();
  const searchedCity = useGetAirVisualsQuery(cityName);
  const [searchResults, setSearchResults] = useState([]);
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    setSearchResults(searchedCity);
  }, [searchedCity]);

  useEffect(() => {
    setSearchResults(searchedCity);
  }, [update]);

  const addCities = (city) => {
    const items = JSON.parse(localStorage.getItem("cities")) || [];
    const item = items.find((item) => item === city);

    if (!item) {
      items.push(city);
    } else return;
    localStorage.setItem("cities", JSON.stringify([...items]));
    setUpdate(!update);
    if (setCities) setCities(items);
    if (setSuccessAlert) setSuccessAlert(true);
    if (setAddRemove) setAddRemove(true);
  };

  const savedCities = (city) => {
    const items = JSON.parse(localStorage.getItem("cities")) || [];
    const item = items.find((item) => item === city);
    if (item) {
      return true;
    } else return false;
  };
  if (searchedCity.isFetching) return <Loader />;
  if (searchedCity.isError) return <ErrorAlert />;
  if (searchedCity.isSuccess)
    return (
      <div className="searched-cities">
        <SearchedCityTitle searchedCity={cityName} />
        {searchResults?.currentData?.data?.cities.map((eachCity) => {
          const { city, country, id, currentMeasurement } = eachCity;

          return (
            <SearchedCity
              city={city}
              country={country}
              id={id}
              key={id}
              currentMeasurement={currentMeasurement}
              savedCities={savedCities}
              addCities={addCities}
            />
          );
        })}
      </div>
    );
};

export default SearchCityResults;
