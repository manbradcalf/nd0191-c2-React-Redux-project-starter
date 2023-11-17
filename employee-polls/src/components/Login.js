// There should be a way for the user to impersonate/ log in as an existing user.
// (This could be as simple as having a login box that appears at the root of the application.
// The user could then select a name from the list of existing users.)

// The application works correctly regardless of which user is selected.

// The application allows the user to log out and log back in.
// The user should be logged in to submit new polling questions, vote, and view the leaderboard.

// Once the user logs in, the home page is shown.

// Whenever the user types something in the address bar, the user is asked to log in before the requested page is shown.

import React from "react";
import { Select, InputLabel, MenuItem, FormControl } from "@mui/material";
import { connect } from "react-redux";
import { useState } from "react";
import { setAuthedUser } from "../actions/authedUser";
import { Typography, Paper, Box } from "@mui/material";

const Login = ({ dispatch, employees, authedUser }) => {
  const [selectedUser] = useState("");

  const handleChange = (event) => {
    event.preventDefault();
    dispatch(
      setAuthedUser(
        // get the id by the name they selected
        // todo: implement real authentication
        employees.filter((x) => x.name === event.target.value)?.[0].id
      )
    );
  };

  return (
    <Box sx={{ p: 2, m: 2 }}>
      <Typography variant="h4">Login</Typography>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">User</InputLabel>
        <Select
          id="demo-simple-select"
          value={selectedUser}
          label="Users"
          onChange={handleChange}
        >
          {employees?.map((employee) => {
            return <MenuItem value={employee.name}>{employee.name}</MenuItem>;
          })}
        </Select>
      </FormControl>
    </Box>
  );
};

const mapStateToProps = ({ employees, authedUser }) => {
  return {
    employees: Object.values(employees),
    authedUser,
  };
};

export default connect(mapStateToProps)(Login);
