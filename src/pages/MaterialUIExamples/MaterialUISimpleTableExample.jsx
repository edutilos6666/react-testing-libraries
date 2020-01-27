import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import namor from "namor";

const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
});

const createData = (fname, lname, email, age, wage) => {
  return { fname, lname, email, age, wage };
};

const generateWord = () => {
  return namor.generate({ words: 1, numbers: 0 });
};

const generateNumber = (min = 10, max = 100, int = true) => {
  let ret = min + Math.random() * (max - min);
  if (int) ret = Math.floor(ret);
  return ret;
};

const generateRows = (len = 20) => {
  const ret = [];
  for (let i = 0; i < len; ++i) {
    ret.push(
      createData(
        generateWord(),
        generateWord(),
        generateWord(),
        generateNumber(),
        generateNumber(1000, 10000, false)
      )
    );
  }
  return ret;
};

const rows = generateRows();

export default function MaterialUISimpleTableExample() {
  const classes = useStyles();
  return (
    <div className="d-flex flex-column">
      <h2>Simple Table Example</h2>
      <TableContainer component={Paper}>
        <Table className={classes.table} size="medium">
          <TableHead>
            <TableRow>
              <TableCell align="center">First Name</TableCell>
              <TableCell align="center">Last Name</TableCell>
              <TableCell align="center">Email</TableCell>
              <TableCell align="center">Age</TableCell>
              <TableCell align="center">Wage</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((one, index) => (
              <TableRow key={index}>
                <TableCell align="left">{one.fname}</TableCell>
                <TableCell align="left">{one.lname}</TableCell>
                <TableCell align="center">{one.email}</TableCell>
                <TableCell align="right">{one.age}</TableCell>
                <TableCell align="right">{one.wage}€</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
