import React from "react";
import { Paper, List, Typography, ListItem } from "@mui/material";

const CityDominantPolutants = ({ currentWeather }) => {
  return (
    <Paper elevation={3} className="dominant-polutants-container">
      <List component="nav">
        <ListItem>
          <Typography variant="h6">Weather factors</Typography>
        </ListItem>
        <ListItem divider>
          Temperature <span>{currentWeather.temperature}°C</span>
        </ListItem>
        <ListItem divider>
          Humidity <span>{currentWeather?.humidity}%</span>
        </ListItem>

        <ListItem divider>
          Pressure <span>{currentWeather?.pressure}mb</span>
        </ListItem>

        <ListItem divider>
          Wind Speed <span>{currentWeather.windSpeed}km/h</span>
        </ListItem>
        <ListItem className="date">
          <Typography variant="caption">
            {currentWeather.ts.substring(0, 10)}
          </Typography>
        </ListItem>
      </List>
    </Paper>
  );
};

export default CityDominantPolutants;
