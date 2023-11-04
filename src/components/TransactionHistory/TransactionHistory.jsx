import * as React from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { StyledTableCell, StyledTableRow } from './TransactionHistory.styled';

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
