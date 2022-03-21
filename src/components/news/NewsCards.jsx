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
import defaultNews from "../../image/defaultNews.jpg";
import Loader from "../alerts/Loader";
import ErrorAlert from "../alerts/ErrorAlert";

const NewsCards = ({ news }) => {
  const rawNews = news?.currentData?.value;

  if (news.isFetching) return <Loader />;
  if (news.isError) return <ErrorAlert />;
  if (news.isSuccess)
    return (
      <>
        <Grid className="news-container" container>
          {rawNews.map((info, index) => {
            const { datePublished, description, image, name, url } = info;
            if (!info) return <Loader />;
            return (
              <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                <Card sx={{ maxWidth: 345, m: 1 }} elevation={3}>
                  <CardActionArea href={url} target="_blank">
                    <CardMedia
                      component="img"
                      height="140"
                      image={image?.thumbnail?.contentUrl || defaultNews}
                      alt={name}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {description}
                      </Typography>
                    </CardContent>
                    <CardActions className="date">
                      <Typography align="right" variant="caption" size="small">
                        {datePublished.substring(0, 10)}
                      </Typography>
                    </CardActions>
                  </CardActionArea>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </>
    );
};
export default NewsCards;
