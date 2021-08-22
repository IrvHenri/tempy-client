import React, { useState } from "react";
import * as CityProfileHelpers from "../../helpers/CityProfileHelpers";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

const {
  temperatureConversion,
  temperatureConversionMinMax,
  windSpeedConversionTableCell,
  convertDate,
  convertDateTableButton,
} = CityProfileHelpers;

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});
const CityWeatherTable = ({ tableData }) => {
  const classes = useStyles();
  const [tableMode, setTableMode] = useState(tableData[0]);

  let tableButtons =
    tableData &&
    tableData.map((day, i) => {
      let buttonText = convertDateTableButton(day[0][0].dt_txt);
      return (
        <Button
          key={i}
          variant="contained"
          onClick={() => setTableMode(tableData[i])}
        >
          {buttonText}
        </Button>
      );
    });
  return (
    <div className="city-weather-table">
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell align="right">Temp</TableCell>
              <TableCell align="right">Min Temp</TableCell>
              <TableCell align="right">Max Temp</TableCell>
              <TableCell align="right">Wind</TableCell>
              <TableCell align="right">Description</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableMode &&
              tableMode.map((row, i) => {
                return row.map((cell, index) => (
                  <TableRow key={index}>
                    <TableCell component="th" scope="row">
                      {convertDate(cell.dt)}
                    </TableCell>
                    <TableCell align="right">
                      {temperatureConversion(cell.main.temp)}
                    </TableCell>
                    <TableCell align="right">
                      {temperatureConversionMinMax(cell.main.temp_min)}
                    </TableCell>
                    <TableCell align="right">
                      {temperatureConversionMinMax(cell.main.temp_max)}
                    </TableCell>
                    <TableCell align="right">
                      {windSpeedConversionTableCell(cell.wind.speed)}
                    </TableCell>
                    <TableCell align="right">
                      {cell.weather[0].description}
                    </TableCell>
                  </TableRow>
                ));
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <div className="table-button-container">{tableButtons}</div>
    </div>
  );
};

export default CityWeatherTable;
