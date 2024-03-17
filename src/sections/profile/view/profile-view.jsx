import * as React from 'react';
import Table from '@mui/material/Table';
import Paper from '@mui/material/Paper';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import TableHead from '@mui/material/TableHead';

export default function ProfileView() {
  return (
    <div className="w-3/7 mx-auto my-auto">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">회원정보</TableCell>
              <TableCell align="center">내용</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow key="title" sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row" align="center">
                이름
              </TableCell>
              <TableCell align="center">노일호</TableCell>
            </TableRow>
            <TableRow key="title" sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row" align="center">
                아이디
              </TableCell>
              <TableCell align="center">no</TableCell>
            </TableRow>
            <TableRow key="title" sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row" align="center">
                이메일
              </TableCell>
              <TableCell align="center">no.gmail.com</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
