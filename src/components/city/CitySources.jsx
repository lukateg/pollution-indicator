import React from "react";
import {
  Paper,
  Typography,
  ListItem,
  ListItemAvatar,
  Avatar,
} from "@mui/material";

const CitySources = ({ sources }) => {
  return (
    <Paper className="sources-container" elevation={4}>
      <Typography variant="h6">Sources</Typography>
      {sources.map((source) => (
        <ListItem key={source.id} divider>
          <ListItemAvatar>
            <Avatar>
              <img src={source.picture} alt="logo" />
            </Avatar>
          </ListItemAvatar>
          <a href={source.url}>{source.name}</a>
        </ListItem>
      ))}
    </Paper>
  );
};

export default CitySources;
