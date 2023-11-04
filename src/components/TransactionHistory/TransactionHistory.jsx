import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    fontWeight: 700,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function CustomizedTables({ items }) {
  return (
    <TableContainer
      sx={{ width: 600, maxWidth: '90vw', margin: '0 auto' }}
      component={Paper}
    >
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Type</StyledTableCell>
            <StyledTableCell align="center">Amount</StyledTableCell>
            <StyledTableCell align="center">Currency</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map(item => (
            <StyledTableRow key={item.id}>
              <StyledTableCell component="th" scope="row" align="center">
                {item.type}
              </StyledTableCell>
              <StyledTableCell align="center">{item.amount}</StyledTableCell>
              <StyledTableCell align="center">{item.currency}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
