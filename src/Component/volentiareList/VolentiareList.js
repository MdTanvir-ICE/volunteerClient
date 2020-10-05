import React, { useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Delete from '../Images/logos/trash-2 9.png';
import { useEffect } from 'react';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.info.light,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function VolentiareList() {
  const classes = useStyles();
  const p = <button className="btn" style={{ backgroundColor: 'red', }}><img style={{ height: '20px' }} src={Delete} alt="" /></button>
  const [rows, setData] = useState([]);

  useEffect(() => { loadData() }, []);


  const loadData = () => {
    fetch('https://morning-stream-13833.herokuapp.com/getAllRegister')
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setData(data);
      })
  }

  const deletData = (id) => {
    fetch(`https://morning-stream-13833.herokuapp.com/delete/${id}`, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(data => {
        alert('Data delete successfully');
        loadData();
      })
  }
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead >
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">Email ID</StyledTableCell>
            <StyledTableCell align="right">Regustaring Date&nbsp;</StyledTableCell>
            <StyledTableCell align="right">Volunteer List&nbsp;</StyledTableCell>
            <StyledTableCell align="right">Event&nbsp;</StyledTableCell>
            <StyledTableCell align="right">Action&nbsp;</StyledTableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.email}</StyledTableCell>
              <StyledTableCell align="right">{row.date}</StyledTableCell>
              <StyledTableCell align="right">{Math.floor(Math.random() * (100 - 5) + 5)}</StyledTableCell>
              <StyledTableCell align="right">{row.eventName}</StyledTableCell>
              <StyledTableCell onClick={() => deletData(row._id)} align="right">{p}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
