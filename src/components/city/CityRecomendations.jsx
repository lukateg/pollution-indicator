import React from "react";
import { Paper, Typography } from "@mui/material";
import { recommendationCheck } from "../../utils";

const CityRecomendations = ({ recommendations }) => {
  return (
    <Paper elevation={3} className="recomendation-container">
      <Typography variant="h5">
        How to protect from air pollution in Belgrade?
      </Typography>
      <div className="recomendation-items">
        {recommendations.map((recomendation, index) => (
          <div key={index}>
            <div
              style={{
                backgroundImage: `url(${recommendationCheck(
                  recomendation.type
                )})`,
              }}
              className="recommendation-image"
            ></div>
            <Typography variant="subtitle1">{recomendation.text}</Typography>
          </div>
        ))}
      </div>
    </Paper>
  );
};

export default CityRecomendations;
