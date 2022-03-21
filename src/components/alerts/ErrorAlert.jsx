import React from "react";
import { Alert } from "@mui/material";

const InfoAlert = () => {
  return (
    <Alert className="alert" severity="error">
      Sorry, we can't find any informations in our database!
    </Alert>
  );
};

export default InfoAlert;
