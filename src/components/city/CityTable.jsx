import React from "react";
import {
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
} from "@mui/material";
import { healthCheck } from "../../utils";

const CityTable = ({ aqius, mainus }) => {
  return (
    <Paper className="info-container">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 300 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography variant="h6" align="center">
                  Air pollution level
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6" align="center">
                  Air quality index
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6" align="center">
                  Main polutant
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                <Typography variant="subtitle2" align="center">
                  {healthCheck(aqius)}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle2" align="center">
                  {aqius} US AQI
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle2" align="center">
                  {mainus}
                </Typography>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default CityTable;
