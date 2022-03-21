import React from "react";
import { Typography, Card, Button } from "@mui/material";
import { Link } from "react-router-dom";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { aqiBackground } from "../../utils";
import { healthCheck } from "../../utils";
import Loader from "../alerts/Loader";
import ErrorAlert from "../alerts/ErrorAlert";

import { useGetAirVisualInformationsQuery } from "../../services/airVisualsInformationAPI";

const CityCard = ({ cityId, setCities, setAddRemove, setSuccessAlert }) => {
  const response = useGetAirVisualInformationsQuery(cityId);
  if (response.isFetching) return <Loader />;
  if (response.isError) return <ErrorAlert />;

  const removeCard = (city) => {
    const items = JSON.parse(localStorage.getItem("cities")) || [];
    const item = items.find((item) => item === city);

    if (item) {
      const filteredItems = items.filter((item) => item !== city);
      localStorage.setItem("cities", JSON.stringify(filteredItems));
      setCities(filteredItems);
      setAddRemove(false);
      setSuccessAlert(true);
    } else return;
  };

  const { city, country, currentMeasurement, id } = response?.currentData?.data;

  return (
    <Card sx={{ maxWidth: 340, m: 1 }} elevation={3}>
      <Button onClick={() => removeCard(id)} className="exit-button">
        <CloseOutlinedIcon fontSize="small" />
      </Button>
      <Link to={`/search/${city}/city/${id}`}>
        <section className="section-city-measurement">
          <div
            style={{
              backgroundColor: aqiBackground(currentMeasurement?.aqius),
            }}
          >
            <Typography variant="subtitle2" className="white-text">
              aqi
            </Typography>
            <Typography variant="h5" className="white-text">
              {currentMeasurement?.aqius}
            </Typography>
          </div>
        </section>
        <section className="saved-city-info">
          <span>
            <Typography variant="h5" align="center">
              {city}
            </Typography>
            <Typography variant="h6" align="center">
              {country}
            </Typography>
            <Typography variant="subtitle1" align="center">
              Air quality
              <span className="health-check">
                {healthCheck(currentMeasurement.aqius)}
              </span>
            </Typography>
          </span>
        </section>
      </Link>
    </Card>
  );
};

export default CityCard;
