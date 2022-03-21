import React from "react";
import { Alert } from "@mui/material";

const InfoAlert = () => {
  return (
    <Alert className="alert" severity="info">
      Item is already on the list!
    </Alert>
  );
};

export default InfoAlert;
