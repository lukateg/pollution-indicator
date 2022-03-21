import React from "react";
import { Alert } from "@mui/material";

const succesAlert = ({ addRemove }) => {
  return (
    <Alert severity="success" className="alert">
      You've successfully {addRemove ? "added" : "removed"} the item
      {addRemove ? " to " : " from "} the list!
    </Alert>
  );
};

export default succesAlert;
