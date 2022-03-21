import * as React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  CardActionArea,
} from "@mui/material";
import NewspaperOutlinedIcon from "@mui/icons-material/NewspaperOutlined";
import { useGetAirVisualsQuery } from "../../services/airVisualsAPI";
import Loader from "../alerts/Loader";
import ErrorAlert from "../alerts/ErrorAlert";

export default function MediaCard() {
  const response = useGetAirVisualsQuery("belgrade");
  const news = response?.currentData?.data?.news.slice(0, 9);

  if (response.isFetching) return <Loader />;
  if (response.isError) return <ErrorAlert />;
  if (response.isSuccess)
    return (
      <>
        <Typography variant="h4" className="title-text-1 bordered-title">
          <NewspaperOutlinedIcon className="orange-icon" fontSize="large" />
          News
        </Typography>
        <Grid className="news-container" container spacing={1}>
          {news.map((info, index) => (
            <Grid item xs={12} sm={12} md={6} lg={4} key={index}>
              <Card sx={{ maxWidth: 345, m: 1 }} elevation={3}>
                <CardActionArea href={info.url} target="_blank">
                  <CardMedia
                    component="img"
                    height="140"
                    image={info.thumbnail}
                    alt={info.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {info.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Click for more informations.
                    </Typography>
                  </CardContent>
                  <CardActions className="date">
                    <Typography variant="caption">
                      {info && info?.date.substring(0, 10)}
                    </Typography>
                  </CardActions>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </>
    );
}
