// The Leaderboard is available at/leaderboard.
// Each entry on the leaderboard contains the following:
// the user’s name;
// the user’s avatar;
// the number of questions the user asked; and
// the number of questions the user answered.
// Users are ordered in descending order based on the sum of the number of questions they’ve answered and the number of questions they’ve asked.
import React from "react";
import { connect } from "react-redux";
import { authedComponent } from "../util/helpers";
import {
  Avatar,
  Table,
  TableCell,
  TableHead,
  TableRow,
  TableBody,
  TableContainer,
  Paper,
} from "@mui/material";

const Leaderboard = ({ questions, employees, authedUser }) => {
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
  return authedComponent(authedUser, component, "Leaderboard")
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
