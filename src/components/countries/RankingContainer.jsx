import React, { useState } from "react";
import { Grid } from "@mui/material";
import Country from "./Country";
import Loader from "../alerts/Loader";
import ErrorAlert from "../alerts/ErrorAlert";

import { useGetWaqiApiQuery } from "../../services/waqiAPI";

const RankingContainer = () => {
  const [value, setValue] = useState("");
  const [country, setCountry] = useState("serbia");
  const response = useGetWaqiApiQuery(country);
  const searchCountry = () => {
    setCountry(value);
  };

  if (response.isFetching) return <Loader />;
  if (response.isError) return <ErrorAlert />;
  if (response.isSuccess)
    return (
      <>
        <Grid container>
          <Grid item xs={12} sm={12} md={12}>
            <Country
              name={country}
              button={false}
              searchCountry={searchCountry}
              setValue={setValue}
            />
          </Grid>
        </Grid>
      </>
    );
};

export default RankingContainer;
