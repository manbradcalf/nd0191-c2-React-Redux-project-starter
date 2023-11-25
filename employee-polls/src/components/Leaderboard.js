import React from 'react';
import { connect } from 'react-redux';
import { AuthedComponent } from './AuthedComponent';
import {
  Avatar,
  Table,
  TableCell,
  TableHead,
  TableRow,
  TableBody,
  TableContainer,
  Paper,
} from '@mui/material';
import { useEffect } from 'react';
import { setSelectedPage } from '../actions/navbarActions';

const Leaderboard = ({ questions, employees, authedUser, dispatch }) => {
  useEffect(() => {
    dispatch(setSelectedPage('Leaderboard'));
  }, [dispatch]);

  const component = (
    <TableContainer component={Paper}>
      <Table aria-label="Leaderboard" size="small">
        <TableHead>
          <TableRow style={{ height: 33 }}>
            <TableCell>User</TableCell>
            <TableCell align="left">Questions Asked</TableCell>
            <TableCell align="left">Questions Answered</TableCell>
            <TableCell align="left">Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employees.map((employee) => (
            <TableRow key={employee.name}>
              <TableCell component="th" scope="row" margin="none">
                <Avatar src={employee.avatarURL} />
                {employee.name}
              </TableCell>
              <TableCell align="left">{employee.questions?.length}</TableCell>
              <TableCell align="left">
                {Object.keys(employee.answers)?.length}
              </TableCell>
              <TableCell align="left">
                {employee.questions?.length +
                  Object.keys(employee.answers).length}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
  return (
    <AuthedComponent
      authedUser={authedUser}
      dispatch={dispatch}
      component={component}
      componentName={'Leaderboard'}
    />
  );
};

const mapStateToProps = ({ questions, employees, authedUser }) => ({
  questions: questions,
  employees: Object.values(employees).sort((a, b) => {
    return (
      b.questions.length +
      Object.keys(b.answers).length -
      (a.questions.length + Object.keys(a.answers).length)
    );
  }),
  authedUser: authedUser,
});

export default connect(mapStateToProps)(Leaderboard);
