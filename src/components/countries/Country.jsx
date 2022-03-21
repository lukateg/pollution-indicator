import React from "react";
import { Typography, List, ListItem, Button } from "@mui/material";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { useGetWaqiApiQuery } from "../../services/waqiAPI";
import { aqiBackground } from "../../utils";
import RankingSearch from "./RankingSearch";
import CountryTitle from "./CountryTitle";
import Loader from "../alerts/Loader";
import ErrorAlert from "../alerts/ErrorAlert";

const Country = ({ name, removeCountry, button, searchCountry, setValue }) => {
  const response = useGetWaqiApiQuery(name);

  if (response.isFetching) return <Loader />;
  if (response.isError) return <ErrorAlert />;
  if (response.isSuccess) {
    const sortedList = Object.values(response?.currentData?.data).sort(
      ({ aqi: a }, { aqi: b }) => b - a
    );
    const rankingItems = sortedList.slice(0, 10);

    return (
      <>
        <div className="country-card" elevation={8}>
          {button ? (
            <Button onClick={() => removeCountry(name)} className="exit-button">
              <CloseOutlinedIcon fontSize="small" />
            </Button>
          ) : (
            <RankingSearch searchCountry={searchCountry} setValue={setValue} />
          )}
          <CountryTitle name={name} />
          <section>
            <List>
              {rankingItems.map((item, index) => {
                return (
                  <ListItem
                    key={item.uid}
                    divider
                    className="city-ranking-item"
                  >
                    <Typography variant="subtitle1">
                      {`${index + 1}. `}
                      {item.station.name.split(",")[0]}
                    </Typography>
                    <span
                      style={{ backgroundColor: aqiBackground(item.aqi) }}
                      className="aqi-span"
                    >
                      {item.aqi}
                    </span>
                  </ListItem>
                );
              })}
            </List>
          </section>
        </div>
      </>
    );
  }
};

export default Country;
